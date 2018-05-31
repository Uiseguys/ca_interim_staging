export class FileInputPage {
    render() {
        return (h("div", { class: "container" },
            h("h2", null, "Basic usage"),
            h("scb-file-input", { class: "mb-0" }),
            h("code", { class: "mb-3 d-block p-3" }, "<scb-file-input></scb-file-input>"),
            h("h2", null, "Bootstrap styles"),
            h("scb-file-input", { type: "info", class: "mb-0" }),
            h("code", { class: "mb-3 d-block p-3" }, "<scb-file-input type=\"info\"></scb-file-input>"),
            h("h2", null, "Max length"),
            h("scb-file-input", { "max-files": "3", class: "mb-0" }),
            h("code", { class: "mb-3 d-block p-3" }, "<scb-file-input max-files=\"3\"></scb-file-input>"),
            h("h2", null, "No multiple"),
            h("scb-file-input", { "max-files": "1", class: "mb-0" }),
            h("code", { class: "mb-3 d-block p-3" }, "<scb-file-input max-files=\"1\"></scb-file-input>"),
            h("h2", null, "No drag and drop"),
            h("scb-file-input", { nodrop: true, class: "mb-0" }),
            h("code", { class: "mb-3 d-block p-3" }, "<scb-file-input nodrop></scb-file-input>"),
            h("h2", null, "Upload Request Properties"),
            h("scb-file-input", { method: "post", target: "https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage", "form-data-name": "file", class: "mb-0" }),
            h("code", { class: "mb-3 d-block p-3" }, "<scb-file-input method=\"post\" target=\"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage\" form-data-name=\"file\"></scb-file-input>"),
            h("h2", null, "Custom drop label"),
            h("scb-file-input", { class: "mb-0" },
                h("span", { slot: "label" }, "Drop your files here")),
            h("code", { class: "mb-3 d-block p-3" },
                h("div", null, "<scb-file-input>"),
                h("div", { class: "ml-2" }, "<span slot=\"label\">Drop your files here</span>"),
                h("div", null, "</scb-file-input>")),
            h("h2", null, "Custom button"),
            h("scb-file-input", { class: "mb-0" },
                h("button", { slot: "button" }, "Select files")),
            h("code", { class: "mb-3 d-block p-3" },
                h("div", null, "<scb-file-input>"),
                h("div", { class: "ml-2" }, "<button slot=\"button\">Select files</button>"),
                h("div", null, "</scb-file-input>")),
            h("h2", null, "Setting Restrictions on Files to Upload"),
            "accept=\"image/*\" maxFileSize=\"1000000\"",
            h("scb-file-input", { accept: "image/*", "max-file-size": "1000000", class: "mb-0" },
                h("span", { slot: "label" }, "Drop images(up to 1 MB) here...")),
            h("code", { class: "mb-3 d-block p-3" },
                h("div", null, "<scb-file-input accept=\"image/*\" max-file-size=\"1000000\">"),
                h("div", { class: "ml-2" }, "<span slot=\"label\">Drop images(up to 1 MB) here...</span>"),
                h("div", null, "</scb-file-input>")),
            h("h2", null, "Customizing the Upload Request"),
            h("scb-file-input", { id: "customizingRequestDemo", method: "post", target: "https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage", "form-data-name": "file", class: "mb-0" }),
            h("code", { class: "mb-3 d-block p-3" },
                "<scb-file-input id=\"customizingRequestDemo\" method=\"post\" target=\"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage\" form-data-name=\"file\"></scb-file-input>",
                h("br", null),
                h("br", null),
                "<script>",
                h("div", { class: "ml-3" },
                    "window.addEventListener('DOMContentLoaded', function() {",
                    h("div", { class: "ml-3" },
                        "var upload = document.querySelector('scb-file-input#customizingRequestDemo');",
                        h("br", null),
                        h("br", null),
                        "upload.addEventListener('upload-before', function(event) {",
                        h("div", { class: "ml-3" },
                            "console.log('upload xhr before open: ', event.detail.xhr);",
                            h("br", null),
                            h("br", null)
                        // Prevent the upload request:<br/>
                        // event.preventDefault();<br/><br/>
                        ,
                            "// Prevent the upload request:",
                            h("br", null)
                        // event.preventDefault();<br/><br/>
                        ,
                            "// event.preventDefault();",
                            h("br", null),
                            h("br", null),
                            "var file = event.detail.file;",
                            h("br", null)
                        // Custom upload request url for file<br/>
                        ,
                            "// Custom upload request url for file",
                            h("br", null),
                            "file.uploadTarget = upload.target + '/' + file.name;",
                            h("br", null),
                            h("br", null)
                        // Custom name in the Content-Disposition header<br/>
                        ,
                            "// Custom name in the Content-Disposition header",
                            h("br", null),
                            "file.formDataName = 'attachment';"),
                        "});",
                        h("br", null),
                        h("br", null),
                        "upload.addEventListener('upload-request', function(event) {",
                        h("div", { class: "ml-3" },
                            "console.log('upload xhr after open: ', event.detail.xhr);",
                            h("br", null),
                            h("br", null),
                            "event.detail.xhr.setRequestHeader('X-File-Name', event.detail.file.name);",
                            h("br", null),
                            "event.detail.formData.append('documentId', 1234);"),
                        "});",
                        h("br", null),
                        h("br", null),
                        "upload.addEventListener('upload-start', function(event) {",
                        h("div", { class: "ml-3" }, "console.log('upload xhr after send: ', event.detail.xhr);"),
                        "});"),
                    "});"),
                "</script>"),
            h("h2", null, "Sending Files Without Wrapping in FormData"),
            h("scb-file-input", { id: "rawFilesDemo", method: "post", target: "https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage", "form-data-name": "file", class: "mb-0" }),
            h("code", { class: "mb-3 d-block p-3" },
                "<scb-file-input id=\"rawFilesDemo\" method=\"post\" target=\"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage\" form-data-name=\"file\"></scb-file-input>",
                h("br", null),
                h("br", null),
                "<script>",
                h("div", { class: "ml-3" },
                    "window.addEventListener('DOMContentLoaded', function() {",
                    h("div", { class: "ml-3" },
                        "var upload = document.querySelector('scb-file-input#rawFilesDemo');",
                        h("br", null),
                        h("br", null),
                        "upload.addEventListener('upload-request', function(event) {",
                        h("div", { class: "ml-3" },
                            "event.preventDefault();",
                            h("br", null),
                            "event.detail.xhr.send(event.detail.file);"),
                        "});"),
                    "});"),
                "</script>"),
            h("h2", null, "Custom Reaction on Server Response"),
            h("scb-file-input", { id: "responseDemo", method: "post", target: "https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage", "form-data-name": "file", class: "mb-0" }),
            h("code", { class: "mb-3 d-block p-3" },
                "<scb-file-input id=\"responseDemo\" method=\"post\" target=\"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage\" form-data-name=\"file\"></scb-file-input>",
                h("br", null),
                h("br", null),
                "<script>",
                h("div", { class: "ml-3" },
                    "window.addEventListener('DOMContentLoaded', function() {",
                    h("div", { class: "ml-3" },
                        "var upload = document.querySelector('scb-file-input#responseDemo');",
                        h("br", null),
                        h("br", null),
                        "upload.addEventListener('upload-response', function(event) {",
                        h("div", { class: "ml-3" },
                            "console.log('upload xhr after server response: ', event.detail.xhr);",
                            h("br", null),
                            "event.detail.file.error = 'Custom server error message.';",
                            h("br", null),
                            h("br", null)
                        // Interpret any server response as success:<br/>
                        // event.detail.xhr.status = 200;
                        ,
                            "// Interpret any server response as success:",
                            h("br", null)
                        // event.detail.xhr.status = 200;
                        ,
                            "// event.detail.xhr.status = 200;"),
                        "});"),
                    "});"),
                "</script>"),
            h("h2", null, "Pre-Filling the File List in Advance"),
            h("scb-file-input", { id: "preFillDemo", method: "post", target: "https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage", accept: "application/pdf", "form-data-name": "file", class: "mb-0" }),
            h("code", { class: "mb-3 d-block p-3" },
                "<scb-file-input id=\"preFillDemo\" method=\"post\" target=\"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage\" accept=\"application/pdf\" form-data-name=\"file\"></scb-file-input>",
                h("br", null),
                h("br", null),
                "<script>",
                h("div", { class: "ml-3" },
                    "window.addEventListener('DOMContentLoaded', function() {",
                    h("div", { class: "ml-3" },
                        "var upload = document.querySelector('scb-file-input#preFillDemo');",
                        h("br", null),
                        h("br", null),
                        "upload.files = [",
                        h("div", { class: "ml-3" },
                            "{name: 'Josh_CV.pdf', loadStatus: 100, uploaded: true},",
                            h("br", null),
                            "{name: 'Alex_CV.pdf', loadStatus: 100, uploaded: true}"),
                        "];"),
                    "});"),
                "</script>"),
            h("h2", null, "Manual Upload Trigger"),
            h("scb-file-input", { id: "manualUploadDemo", "no-auto": true, method: "post", target: "https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage", "form-data-name": "file", class: "mb-0" }),
            h("button", { id: "uploadButton" }, "Start Upload(s)"),
            h("code", { class: "mb-3 d-block p-3" },
                "<scb-file-input id=\"manualUploadDemo\" no-auto method=\"post\" target=\"https://virtserver.swaggerhub.com/bakirmanar/POST_API/1.0.0/pet/1/uploadImage\" form-data-name=\"file\"></scb-file-input>",
                h("br", null),
                "<button id=\"uploadButton\">Start Upload</button>",
                h("br", null),
                h("br", null),
                "<script>",
                h("div", { class: "ml-3" },
                    "window.addEventListener('DOMContentLoaded', function() {",
                    h("div", { class: "ml-3" },
                        "var upload = document.querySelector('scb-file-input#manualUploadDemo');",
                        h("br", null),
                        "var uploadButton = document.getElementById('uploadButton');",
                        h("br", null),
                        h("br", null),
                        "uploadButton.addEventListener('click', function() {",
                        h("div", { class: "ml-3" }, "upload.uploadFiles();"),
                        "});"),
                    "});"),
                "</script>")));
    }
    componentDidLoad() {
        this.initCustomizingRequestDemo();
        this.initRawFilesDemo();
        this.initPreFillDemo();
        this.initManualUploadDemo();
        this.initResponseDemo();
    }
    addScript(selector, script) {
        let scriptElem = document.createElement('script');
        let elem = document.querySelector(selector);
        scriptElem.innerHTML = script;
        elem.parentNode.appendChild(scriptElem);
    }
    initCustomizingRequestDemo() {
        let script = 'var upload = document.querySelector(\'scb-file-input#customizingRequestDemo\');\n' +
            '\n' +
            '    upload.addEventListener(\'upload-before\', function(event) {\n' +
            '      console.log(\'upload xhr before open: \', event.detail.xhr);\n' +
            '\n' +
            '      // Prevent the upload request:\n' +
            '      // event.preventDefault();\n' +
            '\n' +
            '      var file = event.detail.file;\n' +
            '\n' +
            '      // Custom upload request url for file\n' +
            '      file.uploadTarget = upload.target + \'/\' + file.name;\n' +
            '\n' +
            '      // Custom name in the Content-Disposition header\n' +
            '      file.formDataName = \'attachment\';\n' +
            '    });\n' +
            '\n' +
            '    upload.addEventListener(\'upload-request\', function(event) {\n' +
            '      console.log(\'upload xhr after open: \', event.detail.xhr);\n' +
            '\n' +
            '      event.detail.xhr.setRequestHeader(\'X-File-Name\', event.detail.file.name);\n' +
            '      event.detail.formData.append(\'documentId\', 1234);\n' +
            '    });\n' +
            '\n' +
            '    upload.addEventListener(\'upload-start\', function(event) {\n' +
            '      console.log(\'upload xhr after send: \', event.detail.xhr);\n' +
            '    });';
        this.addScript('scb-file-input#customizingRequestDemo', script);
    }
    initRawFilesDemo() {
        let script = '              var upload = document.querySelector(\'scb-file-input#rawFilesDemo\');\n' +
            '  \n' +
            '              upload.addEventListener(\'upload-request\', function(event) {\n' +
            '                event.preventDefault();\n' +
            '                event.detail.xhr.send(event.detail.file);\n' +
            '              });\n';
        this.addScript('scb-file-input#rawFilesDemo', script);
    }
    initPreFillDemo() {
        let script = 'var upload = document.querySelector(\'scb-file-input#preFillDemo\');\n' +
            '    upload.files = [\n' +
            '      {name: \'Josh_CV.pdf\', loadStatus: 100, uploaded: true},\n' +
            '      {name: \'Alex_CV.pdf\', loadStatus: 100, uploaded: true}\n' +
            '    ];';
        this.addScript('scb-file-input#preFillDemo', script);
    }
    initManualUploadDemo() {
        let script = 'var manualUploadDemo = document.querySelector(\'scb-file-input#manualUploadDemo\');\n' +
            '           var uploadButton = document.getElementById(\'uploadButton\');\n' +
            '\n' +
            '           uploadButton.addEventListener(\'click\', function() {\n' +
            '             manualUploadDemo.uploadFiles();\n' +
            '           });';
        this.addScript('scb-file-input#manualUploadDemo', script);
    }
    initResponseDemo() {
        let script = 'var upload = document.querySelector(\'scb-file-input#responseDemo\');\n' +
            '\n' +
            '              upload.addEventListener(\'upload-response\', function(event) {\n' +
            '                console.log(\'upload xhr after server response: \', event.detail.xhr);\n' +
            '                event.detail.file.error = \'Custom server error message.\';\n' +
            '\n' +
            '                // Interpret any server response as success:\n' +
            '                // event.detail.xhr.status = 200;\n' +
            '              });';
        this.addScript('scb-file-input#responseDemo', script);
    }
    static get is() { return "file-input-page"; }
}
