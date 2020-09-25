export default class Toggler {
    constructor(selector, eventListener, initialState) {
        this.element = document.querySelector(selector);
        this.state = initialState === undefined ? false : initialState;
        this.element.addEventListener(eventListener, () => {
            this.toggle();
        })
    }

    get isOn() {
        return this.state;
    }

    toggle() {
        this.state = !this.state;
        this.element.dispatchEvent(new CustomEvent('toggled', {
            detail: {
                state: this.state
            }
        }));
    }

    onToggle(callback) {
        this.element.addEventListener('toggled', e => callback(e.detail));
    }

}