// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/vanessa/projects/ca_interim_staging/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vanessa/projects/ca_interim_staging/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/home/vanessa/projects/ca_interim_staging/.cache/json/dev-404-page.json"),
  "index.json": require("/home/vanessa/projects/ca_interim_staging/.cache/json/index.json")
}