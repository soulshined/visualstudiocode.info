export default class JumpToTop {
    constructor(selector) {
        this.button = document.querySelector(selector);
        this.yoffset = yoffset || 200;
        if (!this.button)
            throw new Error(`Selector doesn't exist`);

        this.button.onclick = () => window.scrollTo(0, 0);
        window.onscroll = (() => {
            if (window.pageYOffset > this.yoffset) {
                this.button.style.display = displayStyle || 'block';
            }
            else this.button.style.display = 'none';
        });
    }
}