export class StencilComponent {
    constructor() {
        this.complex = [
            {
                type: 'country',
                data: {
                    name: 'Austria',
                    capital: 'Vienna'
                }
            },
            {
                type: 'country',
                data: {
                    name: 'Australia',
                    capital: 'Canberra'
                }
            },
            {
                type: 'country',
                data: {
                    name: 'Argentina',
                    capital: 'Buenos Aires'
                }
            }
        ];
        this.searchString = 'data.name';
        this.complexResult = [];
        this.data = ['Alex', 'Alabama', 'Alaska', 'andreas', 'alexandro'];
        this.myOptions = [
            {
                id: 1,
                visual: 'http://lorempixel.com/400/200/',
                label: 'The item label 1'
            },
            {
                id: 2,
                visual: 'http://lorempixel.com/400/200/',
                label: 'The item label 2'
            },
            {
                id: 3,
                visual: 'http://lorempixel.com/400/200/',
                label: 'The item label 3'
            }
        ];
        this.extenderImagePrefix = [
            {
                id: 1,
                imgPrefix: 'https://cdn4.iconfinder.com/data/icons/world-flags-5-1/100/Gabon-16.png',
                label: 'Gabon'
            },
            {
                id: 2,
                imgPrefix: 'https://cdn4.iconfinder.com/data/icons/world-flags-5-1/100/Gambia-16.png',
                label: 'Gambia'
            },
            {
                id: 3,
                imgPrefix: 'https://cdn4.iconfinder.com/data/icons/world-flags-5-1/100/Georgia-16.png',
                label: 'Georgia'
            },
            {
                id: 4,
                imgPrefix: 'https://cdn0.iconfinder.com/data/icons/flat-round-rectangle-world-flags/180/round_rectangle_germany-16.png',
                label: 'Germany'
            },
            {
                id: 5,
                imgPrefix: 'https://cdn4.iconfinder.com/data/icons/world-flags-5-1/100/Ghana-16.png',
                label: 'Ghana'
            },
            {
                id: 6,
                imgPrefix: 'https://cdn4.iconfinder.com/data/icons/world-flags-5-1/100/Gibraltar-16.png',
                label: 'Gibraltar'
            },
            {
                id: 7,
                imgPrefix: 'https://cdn4.iconfinder.com/data/icons/world-flags-rounded/900/uk_united_kingdom_britain_british_flag-16.png',
                label: 'Great Britain'
            }
        ];
    }
    getTemplate() {
        return `
            <div class="dropdown-item card card-18 my-3 mx-3">
                <img class="card-img-top" src="<%=option.visual%>" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="dropdown-item-label card-title capitalized"><%=option.label%></h5>
                    <button class="btn btn-primary">Select</button>
                </div>
            </div>
        `;
    }
    getImagePrefixTemplate() {
        return `
            <div class="dropdown-item">
                <img src="<%=option.imgPrefix%>" alt="Card image cap" />
                <span class="dropdown-item-label"><%=option.label%></span>
            </div>
        `;
    }
    typeaheadOnSubmit(e) {
        this.result = e.detail;
    }
    render() {
        return [
            h("p", { class: "my-3 mx-3" },
                h("h3", null, "Simple String[] data demo!"),
                h("cwc-typeahead", { data: this.data, highlight: true })),
            h("p", { class: "my-3 mx-3" },
                h("h3", null, "Complex Object[] demo!"),
                h("cwc-typeahead", { data: this.complex, searchKey: this.searchString, highlight: true, placeholder: "Search something e.g. 'Argentina'" })),
            h("div", { class: "jumbotron" },
                h("p", null, "Add class 'dropdown-item' to the top parent element in the template in order for the callback function to work."),
                h("p", null, "Add class 'dropdown-item-label' on the element of which text you want to appear in the input field after selection."),
                h("p", { class: "my-3 mx-3" },
                    h("h3", null, "Template demo!"),
                    h("cwc-typeahead", { data: this.myOptions, itemAs: 'option', searchKey: 'label', template: this.getTemplate(), highlight: true, placeholder: "Search something e.g. 'The'" })),
                h("p", { class: "my-3 mx-3" },
                    h("h3", null, "Template demo with image prefix!"),
                    h("cwc-typeahead", { data: this.extenderImagePrefix, itemAs: 'option', searchKey: 'label', template: this.getImagePrefixTemplate(), highlight: true, placeholder: "Search country that starts with 'G'" }))),
            h("p", { class: "my-3 mx-3" },
                h("h3", null, "Google Autocomplete"),
                h("cwc-typeahead", { googleAutocomplete: true, placeholder: "Search for a location e.g 'Berlin'" })),
            h("p", { class: "my-3 mx-3" },
                h("h4", null, "result: "),
                h("pre", null, JSON.stringify(this.result, null, 2))),
        ];
    }
    static get is() { return "typeahead-page"; }
    static get properties() { return { "result": { "state": true } }; }
    static get style() { return "/**style-placeholder:typeahead-page:**/"; }
}
