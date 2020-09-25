import { SETTINGS_METADATA } from "./settings/settings-metadata.js";
import { KEYBINDS_METADATA } from './keybinds/keybinds-metadata.js'
import { SETTINGS_VERSIONS } from "./version/settings-versions.js";
import { KEYBINDS_VERSIONS } from "./version/keybinds-versions.js";
import DOMElement from "../model/dom-element.js";

/**
 * Unique class to help handle parsing and converting different vscode styles and keybind versions
 * 
 * This handles getting the current requested version using 3 seperate <select>. The parentSelector holds these selects.
 *  - The first <select> is the major version
 *  - The second <select> is the minor version
 *  - The last <select> is the patch version
 * 
 * All three of these combined will be queried and used to get the version number from the respective 'versions.js' file
 * 
 */
export default class VersionParser {

    /**
     * @param parentSelector The selector of the element that holds the 3 <select>s for choosing the version
     * @param type <settings, keybinds> The type of data to query
     */
    constructor(parentSelector, type) {
        this.parent = document.querySelector(parentSelector);
        if (!this.parent)
            throw new Error(`Selector '${parentSelector}' doesn't exist`);

        type = type.toLowerCase();
        if (!['settings', 'keybinds'].includes(type))
            throw new Error(`Unsupported type '${type}'`);

        this._cache = {};
        this.paging = {
            cursor: 0,
            total: 0,
            atEnd: false
        };
        this.initVersionForType(type);
    }

    /**
     * Note: not to be called externally
     */
    initVersionForType(type) {
        const types = type === 'settings' ? SETTINGS_VERSIONS : KEYBINDS_VERSIONS;
        this.versions = this.getNumericalVersionsFromConfigObjectKeys(types);
        const majorVs = Object.keys(this.versions);
        majorVs.sort();

        this.majorSelect = this.parent.querySelector('select:first-of-type');
        this.minorSelect = this.parent.querySelector('select:nth-of-type(2)');
        this.patchSelect = this.parent.querySelector('select:last-of-type');

        majorVs.forEach(v => {
            this.majorSelect.prepend(
                new DOMElement('option').text(v).attrs({ value: v }).build()
            )
        })

        this.updateSelectVersionsForType(0, majorVs[0]);
        this.watchVersionChangeForSelects((index, value) => {
            console.log('selected index', index, 'selected value', value);
            this.updateSelectVersionsForType(index, value);
            this.parent.dispatchEvent(new CustomEvent('versionChanged', {
                detail: {
                    values: type === 'settings'
                        ? this.getSettingsForActiveVersion()
                        : this.getKeybindsForActiveVersion()
                }
            }))
        })
    }

    /**
     * @param callback Function to execute when the version has changed
     */
    onVersionChanged(callback) {
        this.parent.addEventListener('versionChanged', (e) => callback(e.detail));
    }

    /**
     * Note: not to be called externally
     * 
     * All <select> event handlers are managed in sync here, provided the parentSelector properly implements 3 selects
     */
    watchVersionChangeForSelects(callback) {
        [this.majorSelect, this.minorSelect, this.patchSelect].forEach((select, index) => {
            select.addEventListener('change', (e) => {
                const opt = e.target.querySelector(`option[value="${e.target.value}"]`);
                callback(index, e.target.value, opt.nextSibling)
            })
        })
    }

    /**
     * Note: not to be called externally
     * 
     * Update the <select> elements according to a changed <select> option
     * 
     * - Major will change all other selects
     * - Minor will change patch
     * - Patch will not change any other element because it's assumed patch versions will only be there if it's a valid version for both major and minor
     */
    updateSelectVersionsForType(versionType, value) {
        let [major, minor, patch] = this.getVersionsFromSelects();

        switch (versionType) {
            case 0: //major
                this.minorSelect.innerHTML = '';
                this.patchSelect.innerHTML = '';
                major = value;
                const minorValues = Object.keys(this.versions[value]);
                minorValues.sort();

                if ((patch === "" && minor == "") || (!minorValues.includes(minor) && this.versions[major][minor] && !this.versions[major][minor][patch])) {
                    minor = minorValues[minorValues.length - 1];
                    patch = this.versions[major][minor][this.versions[major][minor].length - 1];
                }
                else if (!minorValues.includes(minor)) {
                    //no minor
                    minor = minorValues[minorValues.length - 1];
                }

                //check if the patch exists for the major.minor now
                if (!this.versions[major][minor][patch])
                    patch = this.versions[major][minor][this.versions[major][minor].length - 1];

                minorValues.forEach(v => {
                    this.minorSelect.prepend(
                        new DOMElement('option').text(v).attrs({ value: v }).build()
                    );
                });
                this.versions[major][minor].forEach(patch => {
                    this.patchSelect.prepend(
                        new DOMElement('option').text(patch).attrs({ value: patch }).build()
                    )
                })
                break;
            case 1: //minor
                this.patchSelect.innerHTML = '';

                this.versions[major][minor].forEach(patch => {
                    this.patchSelect.prepend(
                        new DOMElement('option').text(patch).attrs({ value: patch }).build()
                    )
                })

                if (!this.versions[major][minor][patch])
                    patch = this.versions[major][minor][this.versions[major][minor].length - 1];
                break;
        }

        [...this.parent.querySelectorAll(`option[value="${major}"], option[value="${minor}"], option[value="${patch}"]`)];
    }

    /**
     * Note: not to be called externally
     * 
     * Gets all keys from version type (setting/keybinds) and preps them into an object.
     * It adds a relationship for each key
     * key = major / values of major are keys of minor and minor is an array of patch numbers (sorted)
     */
    getNumericalVersionsFromConfigObjectKeys(type) {
        const versions = {}

        Object.keys(type).forEach(v => {
            const split = v.substring(1).split('_');
            const major = split[0];
            if (!versions[major]) {
                versions[major] = {}
                versions[major][split[1]] = new Set(split[2])
            }

            else if (!versions[major][split[1]]) {
                versions[major][split[1]] = new Set;
            }

            versions[major][split[1]].add(split[2])

        });

        for (const v in versions) {
            for (const minor in versions[v]) {
                versions[v][minor] = Array.from(versions[v][minor]);
                versions[v][minor].sort();
            }
        }

        return versions;
    }

    /**
     * Automatically obtains the version number from the selected version <select> options registered in the parentSelector of this constructor.
     * This will cache any version queried
     * 
     * Supports paging
     * 
     * @param size Number of keybinds to return per request
     */
    getKeybindsForActiveVersion(size) {
        if (this.paging.atEnd) return [];

        const versionFromSelects = this.getVersionsFromSelects();
        const key = `v${versionFromSelects[0]}_${versionFromSelects[1]}_${versionFromSelects[2]}`;
        let settings = [];

        if (this._cache[key]) settings = this._cache[key];
        else {
            this._cache[key] = this.parseKeybinds(KEYBINDS_VERSIONS[key]);
            settings = this._cache[key];
        }

        const actual = settings.slice(this.paging.cursor, this.paging.cursor + size);
        this.paging.total = settings.length;
        this.paging.cursor += size;
        this.paging.atEnd = this.paging.cursor >= settings.length;
        return actual;
    }

    resetPaging() {
        this.paging.cursor = 0;
        this.paging.total = 0;
        this.paging.atEnd = false;
    }

    /**
     * Get's the independent versions from the active/selected option in each respective <select>
     * 
     * @return [ major, minor, select ]
     */
    getVersionsFromSelects() {
        return [
            this.majorSelect.value,
            this.minorSelect.value,
            this.patchSelect.value
        ]
    }

    /**
    * Automatically obtains the version number from the selected version <select> options registered in the parentSelector of this constructor.
    * This will cache any version queried
    *
    * @return Array of objects of command information
    */
    getSettingsForActiveVersion() {
        const versionFromSelects = this.getVersionsFromSelects();
        const key = `v${versionFromSelects[0]}_${versionFromSelects[1]}_${versionFromSelects[2]}`;
        if (this._cache[key]) return this._cache[key];

        const version = SETTINGS_VERSIONS[key];
        this._cache[key] = this.parseSettings(version).sort(this.sortSettings);

        return this._cache[key];
    }

    /**
     * Comaparator to sort settings specifically
     */
    sortSettings(a, b) {
        const fa = a.id.startsWith("[") ? a.id.substring(1) : a.id,
            fb = b.id.startsWith("[") ? b.id.substring(1) : b.id;

        if (fa < fb) return -1;
        if (fa > fb) return 1;

        return 0;
    }

    /**
     * Parse settings for version
     * 
     * @param version the respective objects key (ex: v1_49_1)
     */
    parseSettings(version) {
        if (!version) return [];

        const lines = version.split("\n");
        const settings = [];

        let description = "";
        let setting = "";
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.trim().startsWith("//")) {
                description += line.substring(line.indexOf("//") + 2) + "\n";
            }
            else if (line.trim() === '') {
                const id = setting.match(/^"([^"]*)"/);
                const defaultValue = setting.substring(setting.indexOf(":") + 1, setting.lastIndexOf(","));
                const isDeprecated = description.match(/(^\s*deprecated.*|^\s*this setting is(\s*now\s*)? deprecated).*/i);
                settings.push({
                    id: id[1],
                    defaultValue,
                    description,
                    metadata: SETTINGS_METADATA[id[1]],
                    isDeprecated
                });
                setting = "";
                description = "";
            }
            else setting += line.trim();
        }

        return settings;
    }

    /**
     * Parse a specific version keybinds
     */
    parseKeybinds(version) {
        // NOTE [30-Sep-2020]: if this decreases performance consider caching
        const keys = Object.keys(KEYBINDS_METADATA);
        version.forEach(v => {
            if (keys.includes(v.command))
                v.metadata = KEYBINDS_METADATA[v.command];
            else v.metadata = { keywords: [] }
        })
        return version;
    }

}