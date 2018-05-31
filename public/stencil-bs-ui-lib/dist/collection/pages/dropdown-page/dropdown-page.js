export class StencilComponent {
    render() {
        return [
            h("div", { class: "container pt-4" },
                h("h2", { class: "mb-4" }, "Dropdown component "),
                h("div", { class: "row" },
                    h("div", { class: "col-lg-12" },
                        h("div", { class: "jumbotron pt-3" },
                            h("h3", null, "Usage "),
                            h("p", null, "To set position of the dropdown component you can pass position and align variables: "),
                            h("div", { class: "row" },
                                h("div", { class: "col-lg-8" },
                                    h("cwc-dropdown", { id: "officialExample" },
                                        h("button", { slot: "dropdown-trigger", class: "btn btn-primary", type: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true" }, "Example dropdown "),
                                        h("div", { slot: "dropdown-menu", class: "dropdown-menu" },
                                            h("a", { class: "dropdown-item", role: "presentation", href: "#" }, "Static"),
                                            h("a", { class: "dropdown-item", role: "presentation", href: "#" }, "Dynamic"),
                                            h("div", { class: "dropdown-divider" }),
                                            h("a", { class: "dropdown-item", role: "presentation", href: "#" }, "Third Item")))),
                                h("br", null),
                                h("br", null),
                                h("br", null),
                                h("br", null),
                                h("br", null),
                                h("br", null),
                                h("div", { class: "col-12" },
                                    h("pre", null,
                                        h("code", { class: "lang-tsx" },
                                            "<cwc-",
                                            h("span", { class: "hljs-built_in" }, "dropdown"),
                                            "></cwc-",
                                            h("span", { class: "hljs-built_in" }, "dropdown"),
                                            ">")))))))),
        ];
    }
    static get is() { return "dropdown-page"; }
    static get style() { return "/**style-placeholder:dropdown-page:**/"; }
}
