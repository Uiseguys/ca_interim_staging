export class FclImagePage {
    render() {
        return [
            h("div", null,
                h("fcl-image", { brokenUrl: "https://s3.amazonaws.com/images.seroundtable.com/invalid-url-1354629517.png", src: "https://www.w3schools.com/howto/img_fjords.jpg" }))
        ];
    }
    static get is() { return "fcl-image-page"; }
}
