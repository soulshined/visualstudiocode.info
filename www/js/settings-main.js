import DOMElement from "./model/dom-element.js";
import Markdown from "./model/markdown.js";
import FilterToggleGroup from "./model/filter-toggle-group.js";
import VersionParser from "./model/parser.js";
import DOMHelper from './model/dom-helper.js';
import Toggler from './model/toggler.js';
import { debounce } from "./model/util.js";

const settingsListWrapper = document.getElementById('settingsList');
const glossaryIndex = document.querySelector('#glossary-index ul');
const glossaryIndexMobile = document.querySelector('#glossary-index-mobile select');
const input = document.querySelector('input');
const filterGroup = new FilterToggleGroup('#filters');
const topBtn = document.getElementById('scroll-to-top-btn');
const defaultDetailsExpandState = window.location.hash !== ''; //always expand if there is a hash
const clipboardTooltip = document.getElementById('clipboard-tooltip');

// region TOP BTNS
topBtn.onclick = () => window.scrollTo(0, 0);
const totopsdiv = document.getElementById('to-tops');
const toNearestPrevSectionBtn = document.getElementById('scroll-to-prev-section');
const toNearestNextSectionBtn = document.getElementById('scroll-to-next-section');
window.onscroll = (() => {
    if (window.pageYOffset > 200) {
        totopsdiv.style.display = 'flex';
    }
    else totopsdiv.style.display = 'none';

    updateNearestPrevSection();
    updateNearestNextSection();
});
function getNearestPrevSection() {
    const allSections = document.querySelectorAll('#settingsList section');

    const prevs = [...allSections].filter(el => el.offsetTop < window.pageYOffset - 20);
    return prevs.pop();
}
function getNearestNextSection() {
    const allSections = document.querySelectorAll('#settingsList section');
    return [...allSections].filter(el => (el.offsetTop - settingsListWrapper.offsetTop) > window.pageYOffset)[0];
}
function updateNearestPrevSection() {
    const prev = getNearestPrevSection();
    if (!prev) return;
    toNearestPrevSectionBtn.innerHTML = prev.id.split('-')[1];
}
function updateNearestNextSection() {
    const next = getNearestNextSection();
    if (!next || DOMHelper.isScrolledToBottom) {
        toNearestNextSectionBtn.style.display = 'none';
        return;
    }
    toNearestNextSectionBtn.innerHTML = next.id.split('-')[1];
    toNearestNextSectionBtn.innerHTML = next.id.split('-')[1];
    toNearestNextSectionBtn.style.display = 'block';
}
toNearestPrevSectionBtn.onclick = () => {
    const prev = getNearestPrevSection();
    if (!prev) return;
    window.scrollTo(0, prev.offsetTop);
}
toNearestNextSectionBtn.onclick = () => {
    const next = getNearestNextSection();
    if (!next) return;
    window.scrollTo(0, next.offsetTop);
}
// endregion TOP BTNS

// region VERSION SELECT
const vp = new VersionParser('#versions', 'settings');
vp.onVersionChanged(debounce(async () => await filterAndUpdate(input.value), 200));
// endregion VERSION SELECT

//copy settings to clipboard
let clipboardTimeout = undefined;
settingsListWrapper.addEventListener('click', async (e) => {

    clearTimeout(clipboardTimeout);
    clipboardTooltip.style.display = 'none';

    const target = e.target;
    if (target.closest('summary')) {
        const details = settingsListWrapper.querySelectorAll('details');
        const openDetails = [...details].filter(det => det.open && det !== target.closest('details'));
        const targetIsOpen = !target.closest('details').open;
        if (targetIsOpen)
            openDetails.push(target.closest('details'));

        const toggleBtn = document.getElementById('toggle-collapse');
        if (openDetails.length === 0) {
            toggleBtn.classList.remove('expanded');
            toggleBtn.setAttribute('title', 'expand all');
        }
        else if (openDetails.length === details.length) {
            toggleBtn.classList.add('expanded');
            toggleBtn.setAttribute('title', 'collapse all');
        }
        return;
    }

    const dt = target.closest('dt');
    if ((!DOMHelper.isTargetNode(target, "a") &&
        !DOMHelper.isTargetNode(target, 'code')) || !dt) return;

    navigator.clipboard.writeText(`https://visualstudiocode.info/settings/#${dt.id}`)
        .then(() => {
            clipboardTooltip.style.top = `${e.pageY}px`;
            clipboardTooltip.style.left = `${e.pageX}px`
            clipboardTooltip.style.display = 'block';

            clipboardTimeout = setTimeout(() => {
                clipboardTooltip.style.display = 'none';
            }, 1500);
        });
})

//region INPUT
input.addEventListener('keyup', debounce(async () => await filterAndUpdate(input.value), 250));
//endregion INPUT

// region FILTERGROUP
filterGroup.onToggled(debounce(async () => await filterAndUpdate(input.value), 200));

// endregion FILTERGROUP
//region COLLAPSE THING
const collapseToggle = new Toggler('#toggle-collapse', 'click', !defaultDetailsExpandState);
collapseToggle.onToggle(e => {
    const details = settingsListWrapper.querySelectorAll(`details`);

    if (collapseToggle.isOn) {
        details.forEach(det => det.setAttribute('open', true));
        collapseToggle.element.setAttribute('title', 'collapse all');
        collapseToggle.element.classList.add('expanded');
    }
    else {
        details.forEach(det => det.removeAttribute('open'));
        collapseToggle.element.classList.remove('expanded');
        collapseToggle.element.setAttribute('title', 'expand all');
    }
})
collapseToggle.toggle();
//endregion COLLAPSE THING

// region GLOSSARY-INDEX-MOBILE
glossaryIndexMobile.addEventListener('change', (e) => {
    const selectedOption = e.target.selectedOptions[0].getAttribute('value');
    window.scrollTo(0, document.getElementById(selectedOption.substring(1)).offsetTop);
})
// endregion GLOSSARY-INDEX-MOBILE

async function filterAndUpdate(value) {
    const filtered = await filterSettings(value, vp.getSettingsForActiveVersion());
    const items = buildDetailsForSettings(filtered);
    settingsListWrapper.innerHTML = items.sections;
    glossaryIndex.innerHTML = items.indices.innerHTML;
    glossaryIndexMobile.innerHTML = [...items.indices.querySelectorAll(`a`)]
        .map(a => `<option value="#section-${a.innerText}">${a.innerText.toUpperCase()}</option>`).join("");
}

async function filterSettings(value, settings) {
    return new Promise(resolve => {
        const regex = new RegExp(value, 'i');
        let selectedfilterBtns = filterGroup.selected;

        if (selectedfilterBtns.length === 0)
            selectedfilterBtns = filterBtns.map(btn => btn.value.toLowerCase());

        resolve(settings.filter(command => {
            let descriptionResult, keywordsResult, identifierResult = undefined;

            if (selectedfilterBtns.includes('description'))
                descriptionResult = regex.test(command.description);
            if (selectedfilterBtns.includes('keywords'))
                keywordsResult = regex.test(command.metadata.keywords.join(" "))
            if (selectedfilterBtns.includes('identifier'))
                identifierResult = regex.test(command.id);

            return identifierResult || descriptionResult || keywordsResult;
        }))
    });
}

function buildDetailsForSettings(settings) {
    const sections = new DOMElement('div');
    const sectionIndices = new DOMElement('ul');
    let section, details = undefined;
    let lastSetting, lastSection = undefined;

    const openDetails = [...settingsListWrapper.querySelectorAll('details[open]')].map(detail => detail.getAttribute('data-setting-identifier'));

    settings.forEach(command => {
        //<section>
        const id = command.id.charAt(command.id.startsWith('['));
        if (lastSection !== id) {
            const aid = `section-${id}`;
            section = new DOMElement('section').attrs({ id: aid })
                .appendChild(new DOMElement('h1').text(id));
            sections.appendChild(section.build());
            lastSection = id;
            sectionIndices.appendChild(
                new DOMElement('li').appendChild(
                    new DOMElement('a').attrs({ href: `#section-${lastSection}` }).text(lastSection)
                ).build()
            )
        }
        if (command.id.split(".")[0] !== lastSetting) {
            //new details section
            details = new DOMElement('DETAILS');
            details.appendChild(new DOMElement('summary').text(command.id.split(".")[0]).build())
            lastSetting = command.id.split(".")[0];

            if (openDetails.includes(lastSetting) || collapseToggle.isOn)
                details.attrs({ open: true })
        }

        //add DT/DD child elements to details section
        section.appendChildren
            (details.attrs({ 'data-setting-identifier': lastSetting }).appendChild(new DOMElement('dl').attrs({ style: 'overflow-x: auto;' }).classes(command.isDeprecated ? 'deprecated' : null).appendChildren(
                new DOMElement("dt").id(command.id).appendChildren(
                    new DOMElement('a').attrs({
                        'aria-roledescription': 'link',
                        'aria-description': "click to copy to clipboard",
                        'tabindex': 0
                    }).appendChildren(
                        new DOMElement("code").text(command.id),
                    ),
                    getSettingTags(command)
                ),
                new DOMElement('dd').appendChildren(
                    new DOMElement('ul').classes('list-style-none', 'ul-reset', 'metadata')
                        .appendChildren(
                            //default li
                            new DOMElement("li").appendChildren(
                                new DOMElement('span').attrs({ 'aria-label': "Default setting" }).html(`Default: <span class="code-inline">${command.defaultValue}</span>`)
                            ),
                            new DOMElement('li').appendChildren(
                                new DOMElement('span').attrs({ 'aria-label': "vscode version introduced" }).html(`Since: ${command.asof || ''}`)
                            ),
                            new DOMElement("li").appendChildren(
                                new DOMElement('span').html(`Keywords: ${command.metadata.keywords.join(", ")}`)
                            ),
                            new DOMElement('li').appendChildren(
                                new DOMElement('span').html(`Related Keybinds: ${command.metadata.relatedKeybinds.join(", ")}`)
                            )
                        ),
                    new DOMElement("p").html(Markdown.toHTML(command.description))
                )
            )));
    })

    return {
        sections: sections.build().innerHTML,
        indices: sectionIndices.build()
    }
}

function getSettingTags(command) {
    const ul = new DOMElement('ul').classes('tags', 'list-style-none', 'ul-reset', 'inline');
    const dTag = new DOMElement('li').classes('tag', 'deprecated');

    if (command.isDeprecated) {
        dTag.text('deprecated');
        ul.appendChild(dTag);
    }

    return ul;
}

filterAndUpdate(input.value);