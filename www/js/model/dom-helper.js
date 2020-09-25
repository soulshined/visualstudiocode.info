export default class DOMHelper {

    static get isScrolledToBottom() {
        return window.pageYOffset + window.innerHeight >= document.body.scrollHeight;
    }

    /**
     * @param actual HTMLElement
     * @param expected expected tagName for actual
     */
    static isTargetNode(actual, expected) {
        return actual && actual.tagName.toLowerCase() === expected.toLowerCase();
    }

}