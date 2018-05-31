import template from 'lodash/template';
import filter from 'lodash/filter';
import get from 'lodash/get';
export class CwcTypeahead {
    constructor() {
        this.date = '' + (new Date().valueOf() + Math.floor(Math.random() * Math.floor(9999999)));
        this.minSearchLength = 1;
        this.googleAutocomplete = false;
        this.data = [];
        this.itemAs = 'item';
        this.idValue = 'typeahead-' + this.date;
        this.highlight = false;
        this.placeholder = 'Search something e.g. "Alabama"';
        this.filterValue = '';
        this.optionsShown = false;
        this.focusIndex = 0;
        this.filtered = [];
    }
    typeaheadOnSubmitHandler(result) {
        this.typeaheadOnSubmit.emit(result);
    }
    /**
     * Life cycle hooks
    */
    componentWillUpdate() {
        if (!this.googleAutocomplete && this.filterValue.length >= this.minSearchLength) {
            this.filtered = this.filter();
            if (this.filtered.length > 0) {
                this.optionsShown = true;
            }
        }
    }
    componentDidUpdate() {
        let items = document.querySelectorAll("div.dropdown-item");
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', (e) => {
                this.handleSelectFromTemplate(e, i);
            });
        }
    }
    /**
     * Private functions
    */
    filter() {
        if (typeof this.data[0] === 'string') {
            return this.filterStringArray(this.data);
        }
        if (typeof this.data[0] === 'object') {
            return this.findInComplex(this.data, this.searchKey);
        }
    }
    filterStringArray(data) {
        return filter(data, value => {
            let v = (typeof value === 'string') ? value : value.index;
            return v.toLowerCase().indexOf(this.filterValue.toLowerCase()) >= 0;
        });
    }
    findInComplex(data, address) {
        let temporary = [];
        temporary = data.map(value => ({
            index: get(value, address),
            data: value
        }));
        return this.filterStringArray(temporary);
    }
    /**
     * Handlers
    */
    handleInputChange(e) {
        this.filterValue = e.target.value;
        if (this.filterValue.length <= 0) {
            if (this.focusIndex > 0) {
                this.focusIndex = 0;
            }
            this.close();
        }
    }
    handleSelectFromTemplate(e, i) {
        this.handleSelect(e.currentTarget.querySelector('.dropdown-item-label').innerText, i);
    }
    handleSelect(value, index) {
        if (!this.filtered.length)
            return;
        let input = document.querySelector(`#${this.idValue} input`);
        let result = typeof this.filtered[index] === 'string' ?
            this.filtered[index] :
            this.filtered[index].data;
        input.value = value;
        this.typeaheadOnSubmitHandler(result);
        this.close();
    }
    handleHover(i) {
        this.focusIndex = i;
    }
    /**
     * Public methods
    */
    close() {
        this.focusIndex = 0;
        this.filterValue = '';
        this.filtered = [];
    }
    initGoogleAutocomplete(ref) {
        let autocomplete = new google.maps.places.Autocomplete((ref), { types: ['geocode'] });
        autocomplete.addListener('place_changed', () => {
            let place = autocomplete.getPlace();
            this.typeaheadOnSubmitHandler(place);
        });
    }
    render() {
        let list = undefined;
        let str = '';
        let noBoldRegx = new RegExp('(<b>|</b>)', 'gi');
        let boldRegx = new RegExp('(' + this.filterValue + ')', 'gi');
        if (!this.googleAutocomplete) {
            if (this.template) {
                let tmpl = template(this.template);
                this.filtered.map((val) => {
                    if (this.highlight)
                        val.data.label = val.data.label.replace(boldRegx, '<b>$1</b>');
                    let templateString = tmpl({ [this.itemAs]: val.data });
                    str += templateString;
                    if (this.highlight)
                        val.data.label = val.data.label.replace(noBoldRegx, '');
                });
            }
            else {
                list = this.filtered.map((val, i) => h("div", { class: "dropdown-item".concat((this.focusIndex == i + 1) ? ' active' : ''), onClick: (e) => this.handleSelect(e.target.innerText, i), onMouseEnter: () => this.handleHover(i + 1), innerHTML: typeof val == 'string' ? val : val.index }));
            }
        }
        return (h("div", { id: this.idValue },
            h("input", { id: 'input-' + this.date, onInput: (e) => this.handleInputChange(e), type: "text", class: "form-control", placeholder: this.placeholder, ref: (ref) => (this.googleAutocomplete) ? this.initGoogleAutocomplete(ref) : (() => { }) }),
            (this.filtered.length > 0) ? (h("div", { class: "card cwc-typeahead" }, (this.template) ? (h("div", { class: "row mx-0", innerHTML: str })) : (h("div", { class: "row mx-0" }, list)))) : (() => { })));
    }
    /**
     * Keyboard handlers
     *
     **/
    handleDownArrow(ev) {
        console.log(ev);
        if (this.focusIndex < this.filtered.length)
            this.focusIndex = this.focusIndex + 1;
    }
    handleUpArrow(ev) {
        if (this.focusIndex > 0) {
            this.focusIndex = this.focusIndex - 1;
            ev.preventDefault();
        }
    }
    handleEscape(ev) {
        console.log(ev);
        if (this.focusIndex > 0) {
            this.focusIndex = 0;
        }
        this.close();
    }
    handleEnter(ev) {
        console.log(ev);
        if (this.focusIndex > 0) {
            this.handleSelect(document.querySelectorAll(`#${this.idValue} .dropdown-item`)[this.focusIndex - 1].textContent, this.focusIndex - 1);
        }
    }
    static get is() { return "cwc-typeahead"; }
    static get properties() { return { "close": { "method": true }, "data": { "type": "Any", "attr": "data" }, "filterValue": { "state": true }, "focusIndex": { "state": true }, "googleAutocomplete": { "type": Boolean, "attr": "google-autocomplete" }, "highlight": { "type": Boolean, "attr": "highlight" }, "idValue": { "type": String, "attr": "id-value" }, "itemAs": { "type": String, "attr": "item-as" }, "minSearchLength": { "type": Number, "attr": "min-search-length" }, "optionsShown": { "state": true }, "placeholder": { "type": String, "attr": "placeholder" }, "searchKey": { "type": String, "attr": "search-key" }, "template": { "type": String, "attr": "template" } }; }
    static get events() { return [{ "name": "typeaheadOnSubmit", "method": "typeaheadOnSubmit", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:cwc-typeahead:**/"; }
}
