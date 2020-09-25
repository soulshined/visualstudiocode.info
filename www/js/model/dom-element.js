/**
 * Builder Pattern dom element creator
 */
export default class DOMElement {
    constructor(tagName) {
        this.node = document.createElement(tagName.toUpperCase());
        return this;
    }

    classes(...classes) {
        classes.forEach(_class => {
            if (_class !== null)
                this.node.classList.add(_class);
        });

        return this;
    }

    id(id) {
        this.node.id = id;
        return this;
    }

    text(text) {
        this.node.innerText = text;
        return this;
    }

    html(html) {
        this.node.innerHTML = html;
        return this;
    }

    attrs(attrs) {
        for (const [key, value] of Object.entries(attrs))
            this.node.setAttribute(key, value);
        return this;
    }

    /**
     * @param child <HTMLElement, DOMElement>
     */
    appendChild(child) {
        return this.appendChildren(child);
    }

    /**
     * @param children <HTMLElement[], DOMElement[]>
     */
    appendChildren(...children) {
        children.forEach(child => {
            if (child instanceof DOMElement)
                this.node.appendChild(child.build());

            else this.node.appendChild(child);
        });

        return this;
    }

    build() {
        return this.node;
    }
}