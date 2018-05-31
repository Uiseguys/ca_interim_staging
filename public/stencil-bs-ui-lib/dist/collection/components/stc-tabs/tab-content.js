export class StcTabContent {
    constructor() {
        this.isSelected = false;
    }
    getChild() {
        return {
            select: this.select.bind(this),
            unselect: this.unselect.bind(this),
            name: this.name
        };
    }
    unselect() {
        this.isSelected = false;
    }
    select() {
        this.isSelected = true;
    }
    render() {
        const classes = {
            'stc-tab-content': true,
            'stc-tab-content-selected': this.isSelected
        };
        return (h("div", { class: classes },
            h("slot", null)));
    }
    static get is() { return "stc-tab-content"; }
    static get properties() { return { "getChild": { "method": true }, "isSelected": { "state": true }, "name": { "type": String, "attr": "name" } }; }
    static get style() { return "/**style-placeholder:stc-tab-content:**/"; }
}
