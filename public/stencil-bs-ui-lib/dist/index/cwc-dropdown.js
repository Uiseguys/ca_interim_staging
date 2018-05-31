/*! Built with http://stenciljs.com */
const { h } = window.index;

import './chunk2.js';

class StencilComponent {
    constructor() {
        this.openState = false;
    }
    componentDidLoad() {
        window.BSN.initCallback();
        this.btn = this.el.children[0].children[0];
        this.content = this.el.children[0].children[1];
        this.btn.addEventListener('click', () => this.toggle());
        this.close();
    }
    componentWillUpdate() {
        this.openState
            ? this.content.classList.add("show")
            : this.content.classList.remove("show");
    }
    toggle() {
        this.openState
            ? this.close()
            : this.open();
    }
    close() {
        this.openState = false;
    }
    open() {
        this.openState = true;
        this.btn.addEventListener('blur', () => this.onBlurHandler(), true);
    }
    onBlurHandler() {
        this.close();
    }
    render() {
        return (h("div", { class: "dropdown" },
            h("slot", { name: "dropdown-trigger" }),
            h("slot", { name: "dropdown-menu" })));
    }
    static get is() { return "cwc-dropdown"; }
    static get properties() { return { "close": { "method": true }, "el": { "elementRef": true }, "open": { "method": true }, "openState": { "state": true }, "toggle": { "method": true } }; }
    static get style() { return ""; }
}

export { StencilComponent as CwcDropdown };
