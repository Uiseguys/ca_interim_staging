export class StcTabs {
    componentDidLoad() {
        this.createGroup();
        const [group] = this.tabGroup;
        this.selectGroup(group);
    }
    onSelectedTab(event) {
        const group = this.tabGroup.find(group => group.header.id === event.detail.id);
        this.selectGroup(group);
    }
    createGroup() {
        const tabsHeaderEl = Array.from(this.host.querySelectorAll('stc-tab-header'));
        this.tabsHeader = tabsHeaderEl.map(el => el.getChild());
        const tabsContentEl = Array.from(this.host.querySelectorAll('stc-tab-content'));
        this.tabsContent = tabsContentEl.map(el => el.getChild());
        this.tabGroup = this.tabsHeader.map(header => {
            const content = this.tabsContent.find(content => content.name === header.name);
            return {
                header: header,
                content: content
            };
        });
    }
    selectGroup(group) {
        this.tabGroup.forEach(_ => {
            _.header.unselect();
            _.content.unselect();
        });
        group.header.select();
        group.content.select();
    }
    render() {
        return [
            h("div", { class: "nav nav-tabs" },
                h("slot", { name: "header" })),
            h("div", { class: "tab-content" },
                h("slot", { name: "content" }))
        ];
    }
    static get is() { return "stc-tabs"; }
    static get properties() { return { "host": { "elementRef": true } }; }
    static get style() { return "/**style-placeholder:stc-tabs:**/"; }
}
