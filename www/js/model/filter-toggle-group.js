const TOGGLE_BUTTON_SELECTOR = 'button.filter';

export default class FilterToggleGroup {

    constructor(parentSelector) {
        this.parentNode = document.querySelector(parentSelector);
        if (!this.parentNode)
            throw new Error(`Selector '${parentSelector}' doesn't exist`);
        this.nodes = this.parentNode.querySelectorAll(`${parentSelector} ${TOGGLE_BUTTON_SELECTOR}`);
        [...this.nodes].forEach((node, index) => {
            node.addEventListener("click", (e) => {
                e.target.classList.toggle('selected');

                if (this.selected.length === 0)
                    this.nodes.forEach(btn => btn.classList.add('selected'));

                this.parentNode.dispatchEvent(
                    new CustomEvent('toggled', {
                        detail: {
                            index,
                            value: e.target.value || '',
                            isSelected: e.target.classList.contains('selected')
                        }
                    })
                )
            })
        })
    }

    onToggled(callback) {
        this.parentNode.addEventListener('toggled', e => callback(e.detail));
    }

    get selected() {
        return [...this.parentNode.querySelectorAll(`${TOGGLE_BUTTON_SELECTOR}.selected`)]
            .map(btn => btn.value);
    }

}