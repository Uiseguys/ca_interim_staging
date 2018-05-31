export class CwcInfiniteListWatcher {
    constructor() {
        this.listSelector = '';
        this.lastItemSelector = '.list-item-last';
        this.containerSelector = '';
        this.bindToList = false;
        this.bottomOffset = 100;
        this.debounce = 300;
        this.debounceStatus = false;
    }
    loadMore() {
        if (!this.debounceStatus) {
            this.startDebounce();
            this.onBottomReach.emit(this.listElement.id && this.listElement.id);
        }
    }
    startDebounce() {
        this.debounceStatus = true;
        setTimeout(() => this.debounceStatus = false, this.debounce);
    }
    componentWillLoad() {
        this.listElement = document.querySelector(this.listSelector);
        this.bindToList ?
            this.listElement.addEventListener('scroll', this.listScrollHandler.bind(this))
            : document.addEventListener('scroll', this.windowScrollHandler.bind(this));
    }
    listScrollHandler() {
        if (this.listElement.scrollTop + this.listElement.clientHeight >= this.listElement.scrollHeight - this.bottomOffset) {
            this.loadMore();
        }
    }
    windowScrollHandler() {
        const last = document.querySelector(`#${this.listElement.id} ${this.lastItemSelector}`);
        if (last.getBoundingClientRect().bottom - this.bottomOffset <= window.innerHeight) {
            this.loadMore();
        }
    }
    render() {
        return (h("div", { class: "inifinite-list-watcher" }));
    }
    static get is() { return "cwc-infinite-list-watcher"; }
    static get properties() { return { "bindToList": { "type": Boolean, "attr": "bind-to-list" }, "bottomOffset": { "type": Number, "attr": "bottom-offset" }, "containerSelector": { "type": String, "attr": "container-selector" }, "debounce": { "type": Number, "attr": "debounce" }, "lastItemSelector": { "type": String, "attr": "last-item-selector" }, "listElement": { "state": true }, "listSelector": { "type": String, "attr": "list-selector" }, "loadMore": { "method": true } }; }
    static get events() { return [{ "name": "onBottomReach", "method": "onBottomReach", "bubbles": true, "cancelable": true, "composed": true }]; }
}
