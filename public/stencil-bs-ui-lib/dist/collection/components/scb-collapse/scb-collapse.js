import 'bootstrap.native/dist/bootstrap-native-v4';
export class ScbCollapse {
    constructor() {
        this.collapseid = 'collpaseComponent';
        this.items = [
            {
                cardHeaderId: 'heading#1',
                cardBodyId: 'collapse#1',
                cardHeaderContent: 'Card Item #1',
                cardBodyContent: 'Card Body #1',
                showOnInit: true
            }
        ];
    }
    componentDidLoad() {
        window.BSN.initCallback();
    }
    render() {
        return (h("div", { id: this.collapseid }, this.items.map(item => h("div", { class: "card" },
            h("div", { class: "card-header", id: item.cardHeaderId },
                h("h5", { class: "mb-0" },
                    h("button", { class: "btn btn-link", "data-toggle": "collapse", "data-target": '#' + item.cardBodyId, "data-parent": '#' + this.collapseid, "aria-expanded": "true", "aria-controls": item.cardBodyId }, item.cardHeaderContent))),
            h("div", { id: item.cardBodyId, class: { 'collapse': true, 'show': item.showOnInit }, role: "tabpanel", "aria-labelledby": item.cardHeaderId },
                h("div", { class: "card-body", innerHTML: item.cardBodyContent }))))));
    }
    static get is() { return "scb-collapse"; }
    static get properties() { return { "collapseid": { "type": String, "attr": "collapseid" }, "items": { "type": "Any", "attr": "items" } }; }
    static get style() { return "/**style-placeholder:scb-collapse:**/"; }
}
