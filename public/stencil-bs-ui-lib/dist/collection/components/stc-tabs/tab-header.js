export class StcTabHeader {
    constructor() {
        this.id = generateId();
        this.isSelected = false;
    }
    getChild() {
        return {
            select: this.select.bind(this),
            unselect: this.unselect.bind(this),
            name: this.name,
            id: this.id
        };
    }
    unselect() {
        this.isSelected = false;
    }
    select() {
        this.isSelected = true;
    }
    onClick() {
        this.onSelect.emit(this.getChild());
    }
    render() {
        const classes = {
            'nav-link': true,
            'active': this.isSelected
        };
        return [
            h("div", { class: "nav-item" },
                h("div", { class: classes, onClick: this.onClick.bind(this) },
                    h("slot", null))),
        ];
    }
    static get is() { return "stc-tab-header"; }
    static get properties() { return { "getChild": { "method": true }, "isSelected": { "state": true }, "name": { "type": String, "attr": "name" } }; }
    static get events() { return [{ "name": "onSelect", "method": "onSelect", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:stc-tab-header:**/"; }
}
function generateId() {
    return Math.random().toString(36).substr(2, 10);
}
