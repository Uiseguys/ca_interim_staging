export class ScbNavbar {
    constructor() {
        this.size = '';
        this.navbarcolor = "light";
        this.bgcolor = "light";
        this.placement = '';
    }
    render() {
        return (h("nav", { class: 'navbar ' +
                this.placement +
                (this.size ? ' navbar-expand-' + this.size : ' navbar-expand') +
                ' navbar-' + this.navbarcolor +
                ' bg-' + this.bgcolor },
            h("slot", { name: "slot-navbar-brand-left" }),
            h("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                h("span", { class: "navbar-toggler-icon" })),
            h("slot", { name: "slot-navbar-brand-right" }),
            h("div", { id: "navbarSupportedContent", class: "collapse navbar-collapse" },
                h("slot", { name: "slot-navbar-content" }))));
    }
    static get is() { return "scb-navbar"; }
    static get properties() { return { "bgcolor": { "type": String, "attr": "bgcolor" }, "el": { "elementRef": true }, "navbarcolor": { "type": String, "attr": "navbarcolor" }, "placement": { "type": String, "attr": "placement" }, "size": { "type": String, "attr": "size" } }; }
    static get style() { return "/**style-placeholder:scb-navbar:**/"; }
}
