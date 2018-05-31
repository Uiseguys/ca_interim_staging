export class ListPage {
    constructor() {
        this.users1 = [];
        this.users2 = [];
        this.lodashData = [
            { name: 'one' },
            { name: 'second' },
            { name: 'third' }
        ];
    }
    getLodashTemplate() {
        return `<h3 class="demo"><%=item.name%></h3>`;
    }
    customEventHandler(event) {
        if (event.detail === 'users-infinite') {
            this.initUsers1Data();
        }
        if (event.detail === 'users-boxed') {
            this.initUsers2Data();
        }
    }
    // doc: string = 'cwc-list?.md'
    componentWillLoad() {
        this.initUsers1Data(20);
        this.initUsers2Data(20);
        console.log(this.customEventHandler);
    }
    initUsers1Data(count) {
        this.getUsers(count).then(users => this.users1 = this.users1.concat(users));
    }
    initUsers2Data(count) {
        this.getUsers(count).then(users => this.users2 = this.users2.concat(users));
    }
    getUser2Template() {
        return `<div class="card card-18">
            <img class="card-img-top" src="<%=user.picture.large%>" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title capitalized"><%=user.name.first%> <%=user.name.last%></h5>
                    <a href="#" class="btn btn-primary">Send message</a>
                </div>
            </div > `;
    }
    getUserTemplate() {
        return `<div class="card col-md-6 col-sm-12">
            <div class="card-body" >
                <div class="media">
                    <img class="d-flex mr-3 rounded" src="<%=user.picture.medium%>" alt="Generic placeholder image" />
                    <div class="media-body">
                        <h5 class="mt-0 capitalized"><%=user.name.first%> <%=user.name.last%></h5>

                        <div>
                            <span class="capitalized">
                                <%=user.location.city%>, <%=user.location.state%>,
                                </span>
                            <span> <%=user.location.street%> </span>
                        </div>
                    </div>
                </div>
                </div>
            </div> `;
    }
    getUsersPage() {
        return (this.users1.length + this.users2.length) / 10 + 1;
    }
    getUsers(count = 10) {
        return new Promise((resolve) => {
            const request = new XMLHttpRequest();
            request.open('GET', `https://randomuser.me/api/?page=${this.getUsersPage()}&results=${count}&seed=abc`, true);
            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    const data = JSON.parse(request.responseText);
                    const users = data.results;
                    resolve(users);
                }
                else {
                    resolve(false);
                    console.error("Users endpoint can't be reached. Status: ", request.status);
                }
            };
            request.onerror = () => console.error("Users endpoint can't be reached.");
            request.send();
        });
    }
    render() {
        return (h("div", { class: "container" },
            h("div", null,
                h("h1", { id: "infinite-list-component", class: "mb-2" }, "Infinite list component"),
                h("h2", { id: "api-and-usage-" }, "API and usage:"),
                h("h3", { id: "props" }, "Props"),
                h("table", null,
                    h("thead", null,
                        h("tr", null,
                            h("th", null, "Prop"),
                            h("th", null, "PropType"),
                            h("th", null, "Required?"),
                            h("th", null, "defaultValue"),
                            h("th", null, "Description"))),
                    h("tbody", null,
                        h("tr", null,
                            h("td", null,
                                h("code", null, "items")),
                            h("td", null,
                                h("code", null, "object[]")),
                            h("td", null, "yes"),
                            h("td", null,
                                h("code", null, "[]")),
                            h("td", null, "Array of objects to iterate with template.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "itemAs")),
                            h("td", null,
                                h("code", null, "string")),
                            h("td", null, "no"),
                            h("td", null,
                                h("code", null, "'item'")),
                            h("td", null, "Value associated with current value in template.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "template")),
                            h("td", null,
                                h("code", null, "VirtualNode")),
                            h("td", null, "yes"),
                            h("td", null, "-"),
                            h("td", null, "Template to render.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "bindToList")),
                            h("td", null,
                                h("code", null, "boolean")),
                            h("td", null, "no"),
                            h("td", null,
                                h("code", null, "false")),
                            h("td", null, "Value which sets if component renders in fixed height wrapper or with infinite height.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "debounce")),
                            h("td", null,
                                h("code", null, "number")),
                            h("td", null, "no"),
                            h("td", null,
                                h("code", null, "300")),
                            h("td", null,
                                "Debounce time between fired ",
                                h("code", null, "'onBottomReach'"),
                                " event")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "bottomOffset")),
                            h("td", null,
                                h("code", null, "number")),
                            h("td", null, "no"),
                            h("td", null,
                                h("code", null, "false")),
                            h("td", null,
                                "Offset in ",
                                h("code", null, "px"),
                                " from bottom of last list element.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "addClass")),
                            h("td", null,
                                h("code", null, "string")),
                            h("td", null, "no"),
                            h("td", null, "-"),
                            h("td", null, "Class to add to every template.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "addClassFirst")),
                            h("td", null,
                                h("code", null, "string")),
                            h("td", null, "no"),
                            h("td", null, "-"),
                            h("td", null, "Class to add to first template.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "addClassLast")),
                            h("td", null,
                                h("code", null, "string")),
                            h("td", null, "no"),
                            h("td", null, "-"),
                            h("td", null, "Class to add to last template.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "addClassEven")),
                            h("td", null,
                                h("code", null, "string")),
                            h("td", null, "no"),
                            h("td", null, "-"),
                            h("td", null, "Class to add to even template.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "addClassOdd")),
                            h("td", null,
                                h("code", null, "string")),
                            h("td", null, "no"),
                            h("td", null, "-"),
                            h("td", null, "Class to add to odd template.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "wrapperClass")),
                            h("td", null,
                                h("code", null, "string")),
                            h("td", null, "no"),
                            h("td", null, "-"),
                            h("td", null,
                                "Class to ",
                                h("code", null, "<div></div>"),
                                " wrapper of list."))))),
            h("h4", { class: "mt-5" }, "Boxed list of users with random data: "),
            " ",
            h("br", null),
            h("cwc-list", { id: "users-boxed", items: this.users2, itemAs: 'user', template: this.getUser2Template(), wrapperClass: 'row d-flex justify-content-around mx-0', addClass: 'my-3' }, " "),
            h("br", null),
            h("br", null),
            h("h4", null,
                "Infinite list of users with data from ",
                h("a", { href: "randomuser.me" }, "randomuser.me"),
                ": "),
            h("br", null),
            h("div", null,
                h("br", null),
                h("cwc-infinite-list-watcher", { listSelector: "#users-infinite" }),
                h("cwc-list", { id: "users-infinite", items: this.users1, itemAs: 'user', template: this.getUserTemplate(), wrapperClass: 'row', addClass: 'custom mxy-2', addClassEven: 'custom-even', addClassFirst: 'custom-first' }))));
    }
    static get is() { return "list-page"; }
    static get properties() { return { "lodashData": { "state": true }, "users1": { "state": true }, "users2": { "state": true } }; }
    static get style() { return "/**style-placeholder:list-page:**/"; }
}
