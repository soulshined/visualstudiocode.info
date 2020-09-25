import DOMElement from "./model/dom-element.js";
import VersionParser from "./model/parser.js";
import FilterToggleGroup from "./model/filter-toggle-group.js";
import DOMHelper from './model/dom-helper.js';
import { debounce } from "./model/util.js";

const keybindsUL = document.getElementById('keybindsList');
const keybindsWrapper = document.getElementById('keybinds-wrapper');
const filterGroup = new FilterToggleGroup('#filters');
const input = document.querySelector('input');
const clipboardTooltip = document.getElementById('clipboard-tooltip');
let keybindCommandIds = [];
let hashedQuery = window.location.hash !== '';

// region VERSION SELECT
const vp = new VersionParser('#versions', 'keybinds');
vp.onVersionChanged(debounce(async () => {
    clearKeybindsUL();
    await filterAndUpdate(input.value)
}, 200));
// endregion VERSION SELECT

//region INPUT
input.addEventListener('keyup', debounce(async () => {
    clearKeybindsUL();
    await filterAndUpdate(input.value)
}, 250));
//endregion INPUT

// region FILTERGROUP
filterGroup.onToggled(debounce(async () => {
    clearKeybindsUL();
    await filterAndUpdate(input.value)
}, 100));
// endregion FILTERGROUP

// region INDEFINITE SCROLL
keybindsWrapper.addEventListener('scroll', debounce(async () => {
    if (keybindsWrapper.scrollHeight - keybindsWrapper.scrollTop - 500 <= keybindsWrapper.clientHeight) {
        if (!vp.paging.atEnd)
            await filterAndUpdate(input.value);
    }
}, 250))

function clearKeybindsUL() {
    keybindCommandIds = [];
    keybindsUL.innerHTML = "";
    vp.resetPaging();
}
// endregion INDEFINITE SCROLL

// region COPY KEYBIND COMMAND TO CLIPBOARD
let clipboardTimeout = undefined;
keybindsUL.addEventListener('click', async (e) => {

    clearTimeout(clipboardTimeout);
    clipboardTooltip.style.display = 'none';

    const target = e.target;

    const li = target.closest('li');
    if ((!DOMHelper.isTargetNode(target, "a") &&
        !DOMHelper.isTargetNode(target, 'code')) || !li) return;

    navigator.clipboard.writeText(`${window.location}#${li.id}`)
        .then(() => {
            clipboardTooltip.style.top = `${e.pageY}px`;
            clipboardTooltip.style.left = `${e.pageX}px`
            clipboardTooltip.style.display = 'block';

            clipboardTimeout = setTimeout(() => {
                clipboardTooltip.style.display = 'none';
            }, 1500);
        });
})
// endregion COPY KEYBIND COMMAND TO CLIPBOARD

async function filterAndUpdate(value) {
    let filtered;
    do {
        filtered = await filterKeybinds(value, vp.getKeybindsForActiveVersion(100));
    } while (filtered.length === 0 && !vp.paging.atEnd);
    if (hashedQuery) hashedQuery = false;
    keybindsUL.innerHTML += buildTableForKeybinds(filtered);
}

async function filterKeybinds(value, keybinds) {
    return new Promise(resolve => {
        let selectedfilterBtns = filterGroup.selected;

        if (selectedfilterBtns.length === 0)
            selectedfilterBtns = filterBtns.map(btn => btn.value.toLowerCase());

        resolve(keybinds.filter(command => {
            if (hashedQuery) return command.command === window.location.hash.substring(1);
            if (value === '') return true;
            if (command.key === null && !selectedfilterBtns.includes('allow_null')) return false;

            let sequenceResult, commandResult, exprResult, keywordsResult = undefined;
            const regexp = new RegExp(value, 'i');

            if (command.key != null && selectedfilterBtns.includes('sequence')) {
                const splits = command.key.toLowerCase()
                    .split(" ")
                    .map(cmd => cmd.split("+"))
                    .reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
                sequenceResult = splits.includes(value.toLowerCase());
            }
            if (selectedfilterBtns.includes('command'))
                commandResult = regexp.test(command.command);
            if (selectedfilterBtns.includes('whenexpr'))
                commandResult = regexp.test(command.when);
            if (selectedfilterBtns.includes('keywords'))
                keywordsResult = command.metadata.keywords.includes(value);

            return sequenceResult || commandResult || exprResult || keywordsResult;
        }))
    });
}

function buildTableForKeybinds(keybinds) {
    const ul = new DOMElement('ul');

    keybinds.forEach(command => {
        let commandId = command.command;
        if (keybindCommandIds.includes(command.command))
            commandId = command.command + (keybindCommandIds.filter(id => id.startsWith(command.command)).length + 1);

        keybindCommandIds.push(commandId);

        ul.appendChildren(
            new DOMElement('li').id(commandId).attrs({ tabindex: 0 })
                .appendChildren(
                    new DOMElement('div').appendChildren(
                        new DOMElement('dl').attrs({ role: 'list' }).appendChildren(
                            new DOMElement('dt').attrs({ tabindex: 0, 'aria-label': "Windows Shorcut" })
                                .html(command.key == null ? "" : 'Win: ' + getKeybindVisual(command.key.toUpperCase())),

                            //add mac keybind
                            new DOMElement('dt').attrs({ tabindex: 0, 'aria-label': "Mac Shortcut" })
                                .html(command.key == null ? "" : 'Mac: ' + getKeybindVisual(command.key.toUpperCase())),

                            //add command id
                            new DOMElement('dd').attrs({ title: 'CommandId', 'aria-label': "Shortcut commandId" }).appendChild(
                                new DOMElement('a').attrs({
                                    'aria-roledescription': 'link',
                                    'aria-description': "click to copy to clipboard",
                                    'tabindex': 0
                                }).appendChildren(
                                    new DOMElement("code").text(command.command),
                                )
                            ),
                            new DOMElement('dd').appendChildren(
                                new DOMElement('UL').classes('list-style-none', 'ul-reset', 'metadata')
                                    .appendChildren(
                                        new DOMElement('li')
                                            .attrs({ tabindex: 0 })
                                            .text(`Keywords: ${command.metadata.keywords.join(", ")}`)
                                    )
                            )
                        )
                    ),
                    new DOMElement('div').appendChildren(
                        new DOMElement('dl').appendChildren(
                            new DOMElement('dt').classes("mobile-only", "bold").text("When Expression:"),
                            new DOMElement('dd').attrs({ style: "overflow-x: auto", tabindex: 0 }).html(command.when)
                        )
                    )
                )
        )
    })

    return ul.build().innerHTML;
}

function getKeybindVisual(value) {
    //keybinds can have spaces for chorded and +'s for sequences
    let result = "";

    const chords = value.trim().split(" ");
    chords.forEach(chord => {
        const seqs = chord.split("+");
        result += ' ' + seqs.map(seq => `<kbd>${seq}</kbd>`).join(" + ");
    });

    return result;
}

filterAndUpdate(input.value);