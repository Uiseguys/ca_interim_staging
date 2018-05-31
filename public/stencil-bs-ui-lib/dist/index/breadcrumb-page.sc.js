/*! Built with http://stenciljs.com */
const { h } = window.index;

import { commonjsGlobal, commonjsRequire, createCommonjsModule } from './chunk1.js';

class BreadcrumbPage {
    constructor() {
        this.breadcrumbItems = [
            { active: false, href: '/alerts', target: 'blank', title: 'Alerts' },
            { active: false, href: '/badge', target: 'blank', title: 'Badge' },
            { active: true, href: '/breadcrumb', target: 'blank', title: 'Breadcrumbs' },
        ];
    }
    render() {
        return (h("scb-breadcrumb", { items: this.breadcrumbItems }));
    }
    static get is() { return "breadcrumb-page"; }
    static get encapsulation() { return "shadow"; }
}

var ajv_min = createCommonjsModule(function (module, exports) {
/* ajv 6.1.1: Another JSON Schema Validator */
!function(e){module.exports=e();}(function(){return function e(r,t,a){function s(i,n){if(!t[i]){if(!r[i]){var l="function"==typeof commonjsRequire&&commonjsRequire;if(!n&&l)return l(i,!0);if(o)return o(i,!0);var h=new Error("Cannot find module '"+i+"'");throw h.code="MODULE_NOT_FOUND", h}var c=t[i]={exports:{}};r[i][0].call(c.exports,function(e){var t=r[i][1][e];return s(t||e)},c,c.exports,e,r,t,a);}return t[i].exports}for(var o="function"==typeof commonjsRequire&&commonjsRequire,i=0;i<a.length;i++)s(a[i]);return s}({1:[function(e,r,t){var a=r.exports=function(){this._cache={};};a.prototype.put=function(e,r){this._cache[e]=r;}, a.prototype.get=function(e){return this._cache[e]}, a.prototype.del=function(e){delete this._cache[e];}, a.prototype.clear=function(){this._cache={};};},{}],2:[function(e,r,t){var a=e("./error_classes").MissingRef;r.exports=function e(r,t,s){var o=this;if("function"!=typeof this._opts.loadSchema)throw new Error("options.loadSchema should be a function");"function"==typeof t&&(s=t, t=void 0);var i=n(r).then(function(){var e=o._addSchema(r,void 0,t);return e.validate||function e(r){try{return o._compile(r)}catch(e){if(e instanceof a)return s(e);throw e}function s(a){var s=a.missingSchema;if(h(s))throw new Error("Schema "+s+" is loaded but "+a.missingRef+" cannot be resolved");var i=o._loadingSchemas[s];return i||(i=o._loadingSchemas[s]=o._opts.loadSchema(s)).then(l,l), i.then(function(e){if(!h(s))return n(e).then(function(){h(s)||o.addSchema(e,s,void 0,t);})}).then(function(){return e(r)});function l(){delete o._loadingSchemas[s];}function h(e){return o._refs[e]||o._schemas[e]}}}(e)});s&&i.then(function(e){s(null,e);},s);return i;function n(r){var t=r.$schema;return t&&!o.getSchema(t)?e.call(o,{$ref:t},!0):Promise.resolve()}};},{"./error_classes":3}],3:[function(e,r,t){var a=e("./resolve");r.exports={Validation:o(function(e){this.message="validation failed", this.errors=e, this.ajv=this.validation=!0;}),MissingRef:o(s)};s.message=function(e,r){return"can't resolve reference "+r+" from id "+e};function s(e,r,t){this.message=t||s.message(e,r), this.missingRef=a.url(e,r), this.missingSchema=a.normalizeId(a.fullPath(this.missingRef));}function o(e){return e.prototype=Object.create(Error.prototype), e.prototype.constructor=e, e}},{"./resolve":6}],4:[function(e,r,t){var a=e("./util"),s=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,o=[0,31,28,31,30,31,30,31,31,30,31,30,31],i=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i,n=/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,l=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,h=/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,c=/^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,u=/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,d=/^(?:\/(?:[^~/]|~0|~1)*)*$/,f=/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,p=/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;r.exports=m;function m(e){return a.copy(m[e="full"==e?"full":"fast"])}m.fast={date:/^\d\d\d\d-[0-1]\d-[0-3]\d$/,time:/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,"date-time":/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,uri:/^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,"uri-template":h,url:c,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,hostname:n,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:w,uuid:u,"json-pointer":d,"json-pointer-uri-fragment":f,"relative-json-pointer":p}, m.full={date:v,time:y,"date-time":function(e){var r=e.split(g);return 2==r.length&&v(r[0])&&y(r[1],!0)},uri:function(e){return P.test(e)&&l.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":h,url:c,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:function(e){return e.length<=255&&n.test(e)},ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:w,uuid:u,"json-pointer":d,"json-pointer-uri-fragment":f,"relative-json-pointer":p};function v(e){var r=e.match(s);if(!r)return!1;var t=+r[2],a=+r[3];return t>=1&&t<=12&&a>=1&&a<=(2!=t||(i=+r[1], i%4!=0||i%100==0&&i%400!=0)?o[t]:29);var i;}function y(e,r){var t=e.match(i);if(!t)return!1;var a=t[1],s=t[2],o=t[3];return(a<=23&&s<=59&&o<=59||23==a&&59==s&&60==o)&&(!r||t[5])}var g=/t|\s/i;var P=/\/|:/;var E=/[^\\]\\Z/;function w(e){if(E.test(e))return!1;try{return !0}catch(e){return!1}}},{"./util":10}],5:[function(e,r,t){var a=e("./resolve"),s=e("./util"),o=e("./error_classes"),i=e("fast-json-stable-stringify"),n=e("../dotjs/validate"),l=s.ucs2length,h=e("fast-deep-equal"),c=o.Validation;r.exports=function e(r,t,y,g){var P=this,E=this._opts,w=[void 0],b={},S=[],_={},$=[],x={},F=[];t=t||{schema:r,refVal:w,refs:b};var R=function(e,r,t){var a=u.call(this,e,r,t);return a>=0?{index:a,compiling:!0}:(this._compilations[a=this._compilations.length]={schema:e,root:r,baseId:t}, {index:a,compiling:!1})}.call(this,r,t,g);var j=this._compilations[R.index];if(R.compiling)return j.callValidate=function e(){var r=j.validate;var t=r.apply(null,arguments);e.errors=r.errors;return t};var O=this._formats;var D=this.RULES;try{var I=k(r,t,y,g);j.validate=I;var A=j.callValidate;return A&&(A.schema=I.schema, A.errors=null, A.refs=I.refs, A.refVal=I.refVal, A.root=I.root, A.$async=I.$async, E.sourceCode&&(A.source=I.source)), I}finally{(function(e,r,t){var a=u.call(this,e,r,t);a>=0&&this._compilations.splice(a,1);}).call(this,r,t,g);}function k(r,i,u,y){var g=!i||i&&i.schema==r;if(i.schema!=t.schema)return e.call(P,r,i,u,y);var _=!0===r.$async,x=n({isTop:!0,schema:r,isRoot:g,baseId:y,root:i,schemaPath:"",errSchemaPath:"#",errorPath:'""',MissingRefError:o.MissingRef,RULES:D,validate:n,util:s,resolve:a,resolveRef:L,usePattern:C,useDefault:Q,useCustomRule:U,opts:E,formats:O,logger:P.logger,self:P});x=v(w,p)+v(S,d)+v($,f)+v(F,m)+x, E.processCode&&(x=E.processCode(x));var R;try{var j=new Function("self","RULES","formats","root","refVal","defaults","customRules","equal","ucs2length","ValidationError",x);R=j(P,D,O,t,w,$,F,h,l,c), w[0]=R;}catch(e){throw P.logger.error("Error compiling schema, function code:",x), e}return R.schema=r, R.errors=null, R.refs=b, R.refVal=w, R.root=g?R:i, _&&(R.$async=!0), !0===E.sourceCode&&(R.source={code:x,patterns:S,defaults:$}), R}function L(r,s,o){s=a.url(r,s);var i,n,l=b[s];if(void 0!==l)return z(i=w[l],n="refVal["+l+"]");if(!o&&t.refs){var h=t.refs[s];if(void 0!==h)return n=q(s,i=t.refVal[h]), z(i,n)}n=q(s);var c=a.call(P,k,t,s);if(void 0===c){var u=y&&y[s];u&&(c=a.inlineRef(u,E.inlineRefs)?u:e.call(P,u,t,y,r));}if(void 0!==c)return w[b[s]]=c, z(c,n);delete b[s];}function q(e,r){var t=w.length;return w[t]=r, b[e]=t, "refVal"+t}function z(e,r){return"object"==typeof e||"boolean"==typeof e?{code:r,schema:e,inline:!0}:{code:r,$async:e&&!!e.$async}}function C(e){var r=_[e];return void 0===r&&(r=_[e]=S.length, S[r]=e), "pattern"+r}function Q(e){switch(typeof e){case"boolean":case"number":return""+e;case"string":return s.toQuotedString(e);case"object":if(null===e)return"null";var r=i(e),t=x[r];return void 0===t&&(t=x[r]=$.length, $[t]=e), "default"+t}}function U(e,r,t,a){var s=e.definition.validateSchema;if(s&&!1!==P._opts.validateSchema){var o=s(r);if(!o){var i="keyword schema is invalid: "+P.errorsText(s.errors);if("log"!=P._opts.validateSchema)throw new Error(i);P.logger.error(i);}}var n,l=e.definition.compile,h=e.definition.inline,c=e.definition.macro;if(l)n=l.call(P,r,t,a);else if(c)n=c.call(P,r,t,a), !1!==E.validateSchema&&P.validateSchema(n,!0);else if(h)n=h.call(P,a,e.keyword,r,t);else if(!(n=e.definition.validate))return;if(void 0===n)throw new Error('custom keyword "'+e.keyword+'"failed to compile');var u=F.length;return F[u]=n, {code:"customRule"+u,validate:n}}};function u(e,r,t){for(var a=0;a<this._compilations.length;a++){var s=this._compilations[a];if(s.schema==e&&s.root==r&&s.baseId==t)return a}return-1}function d(e,r){return"var pattern"+e+" = new RegExp("+s.toQuotedString(r[e])+");"}function f(e){return"var default"+e+" = defaults["+e+"];"}function p(e,r){return void 0===r[e]?"":"var refVal"+e+" = refVal["+e+"];"}function m(e){return"var customRule"+e+" = customRules["+e+"];"}function v(e,r){if(!e.length)return"";for(var t="",a=0;a<e.length;a++)t+=r(a,e);return t}},{"../dotjs/validate":37,"./error_classes":3,"./resolve":6,"./util":10,"fast-deep-equal":41,"fast-json-stable-stringify":42}],6:[function(e,r,t){var a=e("url"),s=e("fast-deep-equal"),o=e("./util"),i=e("./schema_obj"),n=e("json-schema-traverse");r.exports=l, l.normalizeId=y, l.fullPath=p, l.url=g, l.ids=function(e){var r=y(this._getId(e)),t={"":r},i={"":p(r,!1)},l={},h=this;return n(e,{allKeys:!0},function(e,r,n,c,u,d,f){if(""!==r){var p=h._getId(e),m=t[c],v=i[c]+"/"+u;if(void 0!==f&&(v+="/"+("number"==typeof f?f:o.escapeFragment(f))), "string"==typeof p){p=m=y(m?a.resolve(m,p):p);var g=h._refs[p];if("string"==typeof g&&(g=h._refs[g]), g&&g.schema){if(!s(e,g.schema))throw new Error('id "'+p+'" resolves to more than one schema')}else if(p!=y(v))if("#"==p[0]){if(l[p]&&!s(e,l[p]))throw new Error('id "'+p+'" resolves to more than one schema');l[p]=e;}else h._refs[p]=v;}t[r]=m, i[r]=v;}}), l}, l.inlineRef=f, l.schema=h;function l(e,r,t){var a=this._refs[t];if("string"==typeof a){if(!this._refs[a])return l.call(this,e,r,a);a=this._refs[a];}if((a=a||this._schemas[t])instanceof i)return f(a.schema,this._opts.inlineRefs)?a.schema:a.validate||this._compile(a);var s,o,n,c=h.call(this,r,t);return c&&(s=c.schema, r=c.root, n=c.baseId), s instanceof i?o=s.validate||e.call(this,s.schema,r,void 0,n):void 0!==s&&(o=f(s,this._opts.inlineRefs)?s:e.call(this,s,r,void 0,n)), o}function h(e,r){var t=a.parse(r,!1,!0),s=m(t),o=p(this._getId(e.schema));if(s!==o){var n=y(s),l=this._refs[n];if("string"==typeof l)return function(e,r,t){var a=h.call(this,e,r);if(a){var s=a.schema,o=a.baseId;e=a.root;var i=this._getId(s);return i&&(o=g(o,i)), u.call(this,t,o,s,e)}}.call(this,e,l,t);if(l instanceof i)l.validate||this._compile(l), e=l;else{if(!((l=this._schemas[n])instanceof i))return;if(l.validate||this._compile(l), n==y(r))return{schema:l,root:e,baseId:o};e=l;}if(!e.schema)return;o=p(this._getId(e.schema));}return u.call(this,t,o,e.schema,e)}var c=o.toHash(["properties","patternProperties","enum","dependencies","definitions"]);function u(e,r,t,a){if(e.hash=e.hash||"", "#/"==e.hash.slice(0,2)){for(var s=e.hash.split("/"),i=1;i<s.length;i++){var n=s[i];if(n){if(void 0===(t=t[n=o.unescapeFragment(n)]))break;var l;if(!c[n]&&((l=this._getId(t))&&(r=g(r,l)), t.$ref)){var u=g(r,t.$ref),d=h.call(this,a,u);d&&(t=d.schema, a=d.root, r=d.baseId);}}}return void 0!==t&&t!==a.schema?{schema:t,root:a,baseId:r}:void 0}}var d=o.toHash(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum"]);function f(e,r){return!1!==r&&(void 0===r||!0===r?function e(r){var t;if(Array.isArray(r)){for(var a=0;a<r.length;a++)if("object"==typeof(t=r[a])&&!e(t))return!1}else for(var s in r){if("$ref"==s)return!1;if("object"==typeof(t=r[s])&&!e(t))return!1}return!0}(e):r?function e(r){var t,a=0;if(Array.isArray(r)){for(var s=0;s<r.length;s++)if("object"==typeof(t=r[s])&&(a+=e(t)), a==1/0)return 1/0}else for(var o in r){if("$ref"==o)return 1/0;if(d[o])a++;else if("object"==typeof(t=r[o])&&(a+=e(t)+1), a==1/0)return 1/0}return a}(e)<=r:void 0)}function p(e,r){!1!==r&&(e=y(e));return m(a.parse(e,!1,!0))}function m(e){var r=e.protocol||"//"==e.href.slice(0,2)?"//":"";return(e.protocol||"")+r+(e.host||"")+(e.path||"")+"#"}var v=/#\/?$/;function y(e){return e?e.replace(v,""):""}function g(e,r){return r=y(r), a.resolve(e,r)}},{"./schema_obj":8,"./util":10,"fast-deep-equal":41,"json-schema-traverse":43,url:48}],7:[function(e,r,t){var a=e("../dotjs"),s=e("./util").toHash;r.exports=function(){var e=[{type:"number",rules:[{maximum:["exclusiveMaximum"]},{minimum:["exclusiveMinimum"]},"multipleOf","format"]},{type:"string",rules:["maxLength","minLength","pattern","format"]},{type:"array",rules:["maxItems","minItems","items","contains","uniqueItems"]},{type:"object",rules:["maxProperties","minProperties","required","dependencies","propertyNames",{properties:["additionalProperties","patternProperties"]}]},{rules:["$ref","const","enum","not","anyOf","oneOf","allOf","if"]}],r=["type","$comment"];return e.all=s(r), e.types=s(["number","integer","string","array","object","boolean","null"]), e.forEach(function(t){t.rules=t.rules.map(function(t){var s;if("object"==typeof t){var o=Object.keys(t)[0];s=t[o], t=o, s.forEach(function(t){r.push(t), e.all[t]=!0;});}r.push(t);return e.all[t]={keyword:t,code:a[t],implements:s}}), e.all.$comment={keyword:"$comment",code:a.$comment}, t.type&&(e.types[t.type]=t);}), e.keywords=s(r.concat(["$schema","$id","id","$data","title","description","default","definitions","examples","readOnly","writeOnly","contentMediaType","contentEncoding","additionalItems","then","else"])), e.custom={}, e};},{"../dotjs":26,"./util":10}],8:[function(e,r,t){var a=e("./util");r.exports=function(e){a.copy(e,this);};},{"./util":10}],9:[function(e,r,t){r.exports=function(e){for(var r,t=0,a=e.length,s=0;s<a;)t++, (r=e.charCodeAt(s++))>=55296&&r<=56319&&s<a&&56320==(64512&(r=e.charCodeAt(s)))&&s++;return t};},{}],10:[function(e,r,t){r.exports={copy:function(e,r){r=r||{};for(var t in e)r[t]=e[t];return r},checkDataType:a,checkDataTypes:function(e,r){switch(e.length){case 1:return a(e[0],r,!0);default:var t="",s=o(e);s.array&&s.object&&(t=s.null?"(":"(!"+r+" || ", t+="typeof "+r+' !== "object")', delete s.null, delete s.array, delete s.object), s.number&&delete s.integer;for(var i in s)t+=(t?" && ":"")+a(i,r,!0);return t}},coerceToTypes:function(e,r){if(Array.isArray(r)){for(var t=[],a=0;a<r.length;a++){var o=r[a];s[o]?t[t.length]=o:"array"===e&&"array"===o&&(t[t.length]=o);}if(t.length)return t}else{if(s[r])return[r];if("array"===e&&"array"===r)return["array"]}},toHash:o,getProperty:l,escapeQuotes:h,equal:e("fast-deep-equal"),ucs2length:e("./ucs2length"),varOccurences:function(e,r){var t=e.match(new RegExp(r+="[^0-9]","g"));return t?t.length:0},varReplace:function(e,r,t){return r+="([^0-9])", t=t.replace(/\$/g,"$$$$"), e.replace(new RegExp(r,"g"),t+"$1")},cleanUpCode:function(e){return e.replace(c,"").replace(u,"").replace(d,"if (!($1))")},finalCleanUpCode:function(e,r){var t=e.match(f);t&&2==t.length&&(e=r?e.replace(m,"").replace(g,P):e.replace(p,"").replace(v,y));return(t=e.match(E))&&3===t.length?e.replace(w,""):e},schemaHasRules:function(e,r){if("boolean"==typeof e)return!e;for(var t in e)if(r[t])return!0},schemaHasRulesExcept:function(e,r,t){if("boolean"==typeof e)return!e&&"not"!=t;for(var a in e)if(a!=t&&r[a])return!0},toQuotedString:b,getPathExpr:function(e,r,t,a){return $(e,t?"'/' + "+r+(a?"":".replace(/~/g, '~0').replace(/\\//g, '~1')"):a?"'[' + "+r+" + ']'":"'[\\'' + "+r+" + '\\']'")},getPath:function(e,r,t){var a=b(t?"/"+x(r):l(r));return $(e,a)},getData:function(e,r,t){var a,s,o,i;if(""===e)return"rootData";if("/"==e[0]){if(!S.test(e))throw new Error("Invalid JSON-pointer: "+e);s=e, o="rootData";}else{if(!(i=e.match(_)))throw new Error("Invalid JSON-pointer: "+e);if(a=+i[1], "#"==(s=i[2])){if(a>=r)throw new Error("Cannot access property/index "+a+" levels up, current level is "+r);return t[r-a]}if(a>r)throw new Error("Cannot access data "+a+" levels up, current level is "+r);if(o="data"+(r-a||""), !s)return o}for(var n=o,h=s.split("/"),c=0;c<h.length;c++){var u=h[c];u&&(o+=l(F(u)), n+=" && "+o);}return n},unescapeFragment:function(e){return F(decodeURIComponent(e))},unescapeJsonPointer:F,escapeFragment:function(e){return encodeURIComponent(x(e))},escapeJsonPointer:x};function a(e,r,t){var a=t?" !== ":" === ",s=t?" || ":" && ",o=t?"!":"",i=t?"":"!";switch(e){case"null":return r+a+"null";case"array":return o+"Array.isArray("+r+")";case"object":return"("+o+r+s+"typeof "+r+a+'"object"'+s+i+"Array.isArray("+r+"))";case"integer":return"(typeof "+r+a+'"number"'+s+i+"("+r+" % 1)"+s+r+a+r+")";default:return"typeof "+r+a+'"'+e+'"'}}var s=o(["string","number","integer","boolean","null"]);function o(e){for(var r={},t=0;t<e.length;t++)r[e[t]]=!0;return r}var i=/^[a-z$_][a-z$_0-9]*$/i,n=/'|\\/g;function l(e){return"number"==typeof e?"["+e+"]":i.test(e)?"."+e:"['"+h(e)+"']"}function h(e){return e.replace(n,"\\$&").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\f/g,"\\f").replace(/\t/g,"\\t")}var c=/else\s*{\s*}/g,u=/if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,d=/if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;var f=/[^v.]errors/g,p=/var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,m=/var errors = 0;|var vErrors = null;/g,v="return errors === 0;",y="validate.errors = null; return true;",g=/if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/,P="return data;",E=/[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,w=/if \(rootData === undefined\) rootData = data;/;function b(e){return"'"+h(e)+"'"}var S=/^\/(?:[^~]|~0|~1)*$/,_=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function $(e,r){return'""'==e?r:(e+" + "+r).replace(/' \+ '/g,"")}function x(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function F(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}},{"./ucs2length":9,"fast-deep-equal":41}],11:[function(e,r,t){var a=["multipleOf","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","additionalItems","maxItems","minItems","uniqueItems","maxProperties","minProperties","required","additionalProperties","enum","format","const"];r.exports=function(e,r){for(var t=0;t<r.length;t++){e=JSON.parse(JSON.stringify(e));var s,o=r[t].split("/"),i=e;for(s=1;s<o.length;s++)i=i[o[s]];for(s=0;s<a.length;s++){var n=a[s],l=i[n];l&&(i[n]={anyOf:[l,{$ref:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"}]});}}return e};},{}],12:[function(e,r,t){r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),h=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ", a="schema"+o):a=n;var f="maximum"==r,p=f?"exclusiveMaximum":"exclusiveMinimum",m=e.schema[p],v=f?"<":">",y=f?">":"<",g=void 0;if(e.opts.$data&&m&&m.$data){var P=e.util.getData(m.$data,i,e.dataPathArr),E="exclusive"+o,w="exclType"+o,b="exclIsNumber"+o,S="' + "+($="op"+o)+" + '";s+=" var schemaExcl"+o+" = "+P+"; ", s+=" var "+E+"; var "+w+" = typeof "+(P="schemaExcl"+o)+"; if ("+w+" != 'boolean' && "+w+" != 'undefined' && "+w+" != 'number') { ";g=p;(x=x||[]).push(s), s="", !1!==e.createErrors?(s+=" { keyword: '"+(g||"_exclusiveLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: {} ", !1!==e.opts.messages&&(s+=" , message: '"+p+" should be boolean' "), e.opts.verbose&&(s+=" , schema: validate.schema"+l+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "), s+=" } "):s+=" {} ";var _=s;s=x.pop(), s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s+=" } else if ( ", d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "), s+=" "+w+" == 'number' ? ( ("+E+" = "+a+" === undefined || "+P+" "+v+"= "+a+") ? "+u+" "+y+"= "+P+" : "+u+" "+y+" "+a+" ) : ( ("+E+" = "+P+" === true) ? "+u+" "+y+"= "+a+" : "+u+" "+y+" "+a+" ) || "+u+" !== "+u+") { var op"+o+" = "+E+" ? '"+v+"' : '"+v+"=';";}else{S=v;if((b="number"==typeof m)&&d){var $="'"+S+"'";s+=" if ( ", d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "), s+=" ( "+a+" === undefined || "+m+" "+v+"= "+a+" ? "+u+" "+y+"= "+m+" : "+u+" "+y+" "+a+" ) || "+u+" !== "+u+") { ";}else{b&&void 0===n?(E=!0, g=p, h=e.errSchemaPath+"/"+p, a=m, y+="="):(b&&(a=Math[f?"min":"max"](m,n)), m===(!b||a)?(E=!0, g=p, h=e.errSchemaPath+"/"+p, y+="="):(E=!1, S+="="));$="'"+S+"'";s+=" if ( ", d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "), s+=" "+u+" "+y+" "+a+" || "+u+" !== "+u+") { ";}}g=g||r;var x;(x=x||[]).push(s), s="", !1!==e.createErrors?(s+=" { keyword: '"+(g||"_limit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { comparison: "+$+", limit: "+a+", exclusive: "+E+" } ", !1!==e.opts.messages&&(s+=" , message: 'should be "+S+" ", s+=d?"' + "+a:a+"'"), e.opts.verbose&&(s+=" , schema:  ", s+=d?"validate.schema"+l:""+n, s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "), s+=" } "):s+=" {} ";_=s;return s=x.pop(), s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s+=" } ", c&&(s+=" else { "), s};},{}],13:[function(e,r,t){r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),h=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ", a="schema"+o):a=n;s+="if ( ", d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "), s+=" "+u+".length "+("maxItems"==r?">":"<")+" "+a+") { ";var f=r,p=p||[];p.push(s), s="", !1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitItems")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { limit: "+a+" } ", !1!==e.opts.messages&&(s+=" , message: 'should NOT have ", s+="maxItems"==r?"more":"less", s+=" than ", s+=d?"' + "+a+" + '":""+n, s+=" items' "), e.opts.verbose&&(s+=" , schema:  ", s+=d?"validate.schema"+l:""+n, s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "), s+=" } "):s+=" {} ";var m=s;return s=p.pop(), s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s+="} ", c&&(s+=" else { "), s};},{}],14:[function(e,r,t){r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),h=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ", a="schema"+o):a=n;s+="if ( ", d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "), s+=!1===e.opts.unicode?" "+u+".length ":" ucs2length("+u+") ", s+=" "+("maxLength"==r?">":"<")+" "+a+") { ";var f=r,p=p||[];p.push(s), s="", !1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitLength")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { limit: "+a+" } ", !1!==e.opts.messages&&(s+=" , message: 'should NOT be ", s+="maxLength"==r?"longer":"shorter", s+=" than ", s+=d?"' + "+a+" + '":""+n, s+=" characters' "), e.opts.verbose&&(s+=" , schema:  ", s+=d?"validate.schema"+l:""+n, s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "), s+=" } "):s+=" {} ";var m=s;return s=p.pop(), s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s+="} ", c&&(s+=" else { "), s};},{}],15:[function(e,r,t){r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),h=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ", a="schema"+o):a=n;s+="if ( ", d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "), s+=" Object.keys("+u+").length "+("maxProperties"==r?">":"<")+" "+a+") { ";var f=r,p=p||[];p.push(s), s="", !1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitProperties")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { limit: "+a+" } ", !1!==e.opts.messages&&(s+=" , message: 'should NOT have ", s+="maxProperties"==r?"more":"less", s+=" than ", s+=d?"' + "+a+" + '":""+n, s+=" properties' "), e.opts.verbose&&(s+=" , schema:  ", s+=d?"validate.schema"+l:""+n, s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "), s+=" } "):s+=" {} ";var m=s;return s=p.pop(), s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s+="} ", c&&(s+=" else { "), s};},{}],16:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.schema[r],o=e.schemaPath+e.util.getProperty(r),i=e.errSchemaPath+"/"+r,n=!e.opts.allErrors,l=e.util.copy(e),h="";l.level++;var c="valid"+l.level,u=l.baseId,d=!0,f=s;if(f)for(var p,m=-1,v=f.length-1;m<v;)p=f[m+=1], e.util.schemaHasRules(p,e.RULES.all)&&(d=!1, l.schema=p, l.schemaPath=o+"["+m+"]", l.errSchemaPath=i+"/"+m, a+="  "+e.validate(l)+" ", l.baseId=u, n&&(a+=" if ("+c+") { ", h+="}"));return n&&(a+=d?" if (true) { ":" "+h.slice(0,-1)+" "), a=e.util.cleanUpCode(a)};},{}],17:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="valid"+s,d="errs__"+s,f=e.util.copy(e),p="";f.level++;var m="valid"+f.level;if(i.every(function(r){return e.util.schemaHasRules(r,e.RULES.all)})){var v=f.baseId;a+=" var "+d+" = errors; var "+u+" = false;  ";var y=e.compositeRule;e.compositeRule=f.compositeRule=!0;var g=i;if(g)for(var P,E=-1,w=g.length-1;E<w;)P=g[E+=1], f.schema=P, f.schemaPath=n+"["+E+"]", f.errSchemaPath=l+"/"+E, a+="  "+e.validate(f)+" ", f.baseId=v, a+=" "+u+" = "+u+" || "+m+"; if (!"+u+") { ", p+="}";e.compositeRule=f.compositeRule=y, a+=" "+p+" if (!"+u+") {   var err =   ", !1!==e.createErrors?(a+=" { keyword: 'anyOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ", !1!==e.opts.messages&&(a+=" , message: 'should match some schema in anyOf' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ", a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule&&h&&(a+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "), a+=" } else {  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; } ", e.opts.allErrors&&(a+=" } "), a=e.util.cleanUpCode(a);}else h&&(a+=" if (true) { ");return a};},{}],18:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.errSchemaPath+"/"+r,o=e.util.toQuotedString(e.schema[r]);return!0===e.opts.$comment?a+=" console.log("+o+");":"function"==typeof e.opts.$comment&&(a+=" self._opts.$comment("+o+", "+e.util.toQuotedString(s)+", validate.root.schema);"), a};},{}],19:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="valid"+s,d=e.opts.$data&&i&&i.$data;d&&(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; "), d||(a+=" var schema"+s+" = validate.schema"+n+";"), a+="var "+u+" = equal("+c+", schema"+s+"); if (!"+u+") {   ";var f=f||[];f.push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'const' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ", !1!==e.opts.messages&&(a+=" , message: 'should be equal to constant' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";var p=a;return a=f.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a+=" }", h&&(a+=" else { "), a};},{}],20:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="valid"+s,d="errs__"+s,f=e.util.copy(e);f.level++;var p="valid"+f.level,m="i"+s,v=f.dataLevel=e.dataLevel+1,y="data"+v,g=e.baseId,P=e.util.schemaHasRules(i,e.RULES.all);if(a+="var "+d+" = errors;var "+u+";", P){var E=e.compositeRule;e.compositeRule=f.compositeRule=!0, f.schema=i, f.schemaPath=n, f.errSchemaPath=l, a+=" var "+p+" = false; for (var "+m+" = 0; "+m+" < "+c+".length; "+m+"++) { ", f.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers,!0);var w=c+"["+m+"]";f.dataPathArr[v]=m;var b=e.validate(f);f.baseId=g, e.util.varOccurences(b,y)<2?a+=" "+e.util.varReplace(b,y,w)+" ":a+=" var "+y+" = "+w+"; "+b+" ", a+=" if ("+p+") break; }  ", e.compositeRule=f.compositeRule=E, a+="  if (!"+p+") {";}else a+=" if ("+c+".length == 0) {";var S=S||[];S.push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'contains' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ", !1!==e.opts.messages&&(a+=" , message: 'should contain a valid item' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";var _=a;return a=S.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a+=" } else { ", P&&(a+="  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; } "), e.opts.allErrors&&(a+=" } "), a=e.util.cleanUpCode(a)};},{}],21:[function(e,r,t){r.exports=function(e,r,t){var a,s,o=" ",i=e.level,n=e.dataLevel,l=e.schema[r],h=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,d="data"+(n||""),f="valid"+i,p="errs__"+i,m=e.opts.$data&&l&&l.$data;m?(o+=" var schema"+i+" = "+e.util.getData(l.$data,n,e.dataPathArr)+"; ", s="schema"+i):s=l;var v,y,g,P,E,w="definition"+i,b=this.definition,S="";if(m&&b.$data){var _=b.validateSchema;o+=" var "+w+" = RULES.custom['"+r+"'].definition; var "+(E="keywordValidate"+i)+" = "+w+".validate;";}else{if(!(P=e.useCustomRule(this,l,e.schema,e)))return;s="validate.schema"+h, E=P.code, v=b.compile, y=b.inline, g=b.macro;}var $=E+".errors",x="i"+i,F="ruleErr"+i,R=b.async;if(R&&!e.async)throw new Error("async keyword in sync schema");if(y||g||(o+=$+" = null;"), o+="var "+p+" = errors;var "+f+";", m&&b.$data&&(S+="}", o+=" if ("+s+" === undefined) { "+f+" = true; } else { ", _&&(S+="}", o+=" "+f+" = "+w+".validateSchema("+s+"); if ("+f+") { ")), y)o+=b.statements?" "+P.validate+" ":" "+f+" = "+P.validate+"; ";else if(g){var j=e.util.copy(e);S="";j.level++;var O="valid"+j.level;j.schema=P.validate, j.schemaPath="";var D=e.compositeRule;e.compositeRule=j.compositeRule=!0;var I=e.validate(j).replace(/validate\.schema/g,E);e.compositeRule=j.compositeRule=D, o+=" "+I;}else{(q=q||[]).push(o), o="", o+="  "+E+".call( ", o+=e.opts.passContext?"this":"self", o+=v||!1===b.schema?" , "+d+" ":" , "+s+" , "+d+" , validate.schema"+e.schemaPath+" ", o+=" , (dataPath || '')", '""'!=e.errorPath&&(o+=" + "+e.errorPath);var A=n?"data"+(n-1||""):"parentData",k=n?e.dataPathArr[n]:"parentDataProperty",L=o+=" , "+A+" , "+k+" , rootData )  ";o=q.pop(), !1===b.errors?(o+=" "+f+" = ", R&&(o+="await "), o+=L+"; "):o+=R?" var "+($="customErrors"+i)+" = null; try { "+f+" = await "+L+"; } catch (e) { "+f+" = false; if (e instanceof ValidationError) "+$+" = e.errors; else throw e; } ":" "+$+" = null; "+f+" = "+L+"; ";}if(b.modifying&&(o+=" if ("+A+") "+d+" = "+A+"["+k+"];"), o+=""+S, b.valid)u&&(o+=" if (true) { ");else{o+=" if ( ", void 0===b.valid?(o+=" !", o+=g?""+O:""+f):o+=" "+!b.valid+" ", o+=") { ", a=this.keyword;(q=q||[]).push(o), o="";var q;(q=q||[]).push(o), o="", !1!==e.createErrors?(o+=" { keyword: '"+(a||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { keyword: '"+this.keyword+"' } ", !1!==e.opts.messages&&(o+=" , message: 'should pass \""+this.keyword+"\" keyword validation' "), e.opts.verbose&&(o+=" , schema: validate.schema"+h+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "), o+=" } "):o+=" {} ";var z=o;o=q.pop();var C=o+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+z+"]); ":" validate.errors = ["+z+"]; return false; ":" var err = "+z+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";o=q.pop(), y?b.errors?"full"!=b.errors&&(o+="  for (var "+x+"="+p+"; "+x+"<errors; "+x+"++) { var "+F+" = vErrors["+x+"]; if ("+F+".dataPath === undefined) "+F+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+F+".schemaPath === undefined) { "+F+'.schemaPath = "'+c+'"; } ', e.opts.verbose&&(o+=" "+F+".schema = "+s+"; "+F+".data = "+d+"; "), o+=" } "):!1===b.errors?o+=" "+C+" ":(o+=" if ("+p+" == errors) { "+C+" } else {  for (var "+x+"="+p+"; "+x+"<errors; "+x+"++) { var "+F+" = vErrors["+x+"]; if ("+F+".dataPath === undefined) "+F+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+F+".schemaPath === undefined) { "+F+'.schemaPath = "'+c+'"; } ', e.opts.verbose&&(o+=" "+F+".schema = "+s+"; "+F+".data = "+d+"; "), o+=" } } "):g?(o+="   var err =   ", !1!==e.createErrors?(o+=" { keyword: '"+(a||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { keyword: '"+this.keyword+"' } ", !1!==e.opts.messages&&(o+=" , message: 'should pass \""+this.keyword+"\" keyword validation' "), e.opts.verbose&&(o+=" , schema: validate.schema"+h+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "), o+=" } "):o+=" {} ", o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule&&u&&(o+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; ")):!1===b.errors?o+=" "+C+" ":(o+=" if (Array.isArray("+$+")) { if (vErrors === null) vErrors = "+$+"; else vErrors = vErrors.concat("+$+"); errors = vErrors.length;  for (var "+x+"="+p+"; "+x+"<errors; "+x+"++) { var "+F+" = vErrors["+x+"]; if ("+F+".dataPath === undefined) "+F+".dataPath = (dataPath || '') + "+e.errorPath+";  "+F+'.schemaPath = "'+c+'";  ', e.opts.verbose&&(o+=" "+F+".schema = "+s+"; "+F+".data = "+d+"; "), o+=" } } else { "+C+" } "), o+=" } ", u&&(o+=" else { ");}return o};},{}],22:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="errs__"+s,d=e.util.copy(e),f="";d.level++;var p="valid"+d.level,m={},v={},y=e.opts.ownProperties;for(w in i){var g=i[w],P=Array.isArray(g)?v:m;P[w]=g;}a+="var "+u+" = errors;";var E=e.errorPath;a+="var missing"+s+";";for(var w in v)if((P=v[w]).length){if(a+=" if ( "+c+e.util.getProperty(w)+" !== undefined ", y&&(a+=" && Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(w)+"') "), h){a+=" && ( ";var b=P;if(b)for(var S=-1,_=b.length-1;S<_;){O=b[S+=1], S&&(a+=" || ");a+=" ( ( "+(k=c+(A=e.util.getProperty(O)))+" === undefined ", y&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(O)+"') "), a+=") && (missing"+s+" = "+e.util.toQuotedString(e.opts.jsonPointers?O:A)+") ) ";}a+=")) {  ";var $="missing"+s,x="' + "+$+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(E,$,!0):E+" + "+$);var F=F||[];F.push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+x+"', depsCount: "+P.length+", deps: '"+e.util.escapeQuotes(1==P.length?P[0]:P.join(", "))+"' } ", !1!==e.opts.messages&&(a+=" , message: 'should have ", a+=1==P.length?"property "+e.util.escapeQuotes(P[0]):"properties "+e.util.escapeQuotes(P.join(", ")), a+=" when property "+e.util.escapeQuotes(w)+" is present' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";var R=a;a=F.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+R+"]); ":" validate.errors = ["+R+"]; return false; ":" var err = "+R+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";}else{a+=" ) { ";var j=P;if(j)for(var O,D=-1,I=j.length-1;D<I;){O=j[D+=1];var A=e.util.getProperty(O),k=(x=e.util.escapeQuotes(O), c+A);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(E,O,e.opts.jsonPointers)), a+=" if ( "+k+" === undefined ", y&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(O)+"') "), a+=") {  var err =   ", !1!==e.createErrors?(a+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+x+"', depsCount: "+P.length+", deps: '"+e.util.escapeQuotes(1==P.length?P[0]:P.join(", "))+"' } ", !1!==e.opts.messages&&(a+=" , message: 'should have ", a+=1==P.length?"property "+e.util.escapeQuotes(P[0]):"properties "+e.util.escapeQuotes(P.join(", ")), a+=" when property "+e.util.escapeQuotes(w)+" is present' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ", a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";}}a+=" }   ", h&&(f+="}", a+=" else { ");}e.errorPath=E;var L=d.baseId;for(var w in m){e.util.schemaHasRules(g=m[w],e.RULES.all)&&(a+=" "+p+" = true; if ( "+c+e.util.getProperty(w)+" !== undefined ", y&&(a+=" && Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(w)+"') "), a+=") { ", d.schema=g, d.schemaPath=n+e.util.getProperty(w), d.errSchemaPath=l+"/"+e.util.escapeFragment(w), a+="  "+e.validate(d)+" ", d.baseId=L, a+=" }  ", h&&(a+=" if ("+p+") { ", f+="}"));}return h&&(a+="   "+f+" if ("+u+" == errors) {"), a=e.util.cleanUpCode(a)};},{}],23:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="valid"+s,d=e.opts.$data&&i&&i.$data;d&&(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ");var f="i"+s,p="schema"+s;d||(a+=" var "+p+" = validate.schema"+n+";"), a+="var "+u+";", d&&(a+=" if (schema"+s+" === undefined) "+u+" = true; else if (!Array.isArray(schema"+s+")) "+u+" = false; else {"), a+=u+" = false;for (var "+f+"=0; "+f+"<"+p+".length; "+f+"++) if (equal("+c+", "+p+"["+f+"])) { "+u+" = true; break; }", d&&(a+="  }  "), a+=" if (!"+u+") {   ";var m=m||[];m.push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'enum' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { allowedValues: schema"+s+" } ", !1!==e.opts.messages&&(a+=" , message: 'should be equal to one of the allowed values' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";var v=a;return a=m.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+v+"]); ":" validate.errors = ["+v+"]; return false; ":" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a+=" }", h&&(a+=" else { "), a};},{}],24:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||"");if(!1===e.opts.format)return h&&(a+=" if (true) { "), a;var u,d=e.opts.$data&&i&&i.$data;d?(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ", u="schema"+s):u=i;var f=e.opts.unknownFormats,p=Array.isArray(f);if(d){a+=" var "+(m="format"+s)+" = formats["+u+"]; var "+(v="isObject"+s)+" = typeof "+m+" == 'object' && !("+m+" instanceof RegExp) && "+m+".validate; var "+(y="formatType"+s)+" = "+v+" && "+m+".type || 'string'; if ("+v+") { ", e.async&&(a+=" var async"+s+" = "+m+".async; "), a+=" "+m+" = "+m+".validate; } if (  ", d&&(a+=" ("+u+" !== undefined && typeof "+u+" != 'string') || "), a+=" (", "ignore"!=f&&(a+=" ("+u+" && !"+m+" ", p&&(a+=" && self._opts.unknownFormats.indexOf("+u+") == -1 "), a+=") || "), a+=" ("+m+" && "+y+" == '"+t+"' && !(typeof "+m+" == 'function' ? ", a+=e.async?" (async"+s+" ? await "+m+"("+c+") : "+m+"("+c+")) ":" "+m+"("+c+") ", a+=" : "+m+".test("+c+"))))) {";}else{var m;if(!(m=e.formats[i])){if("ignore"==f)return e.logger.warn('unknown format "'+i+'" ignored in schema at path "'+e.errSchemaPath+'"'), h&&(a+=" if (true) { "), a;if(p&&f.indexOf(i)>=0)return h&&(a+=" if (true) { "), a;throw new Error('unknown format "'+i+'" is used in schema at path "'+e.errSchemaPath+'"')}var v,y=(v="object"==typeof m&&!(m instanceof RegExp)&&m.validate)&&m.type||"string";if(v){var g=!0===m.async;m=m.validate;}if(y!=t)return h&&(a+=" if (true) { "), a;if(g){if(!e.async)throw new Error("async format in sync schema");a+=" if (!(await "+(P="formats"+e.util.getProperty(i)+".validate")+"("+c+"))) { ";}else{a+=" if (! ";var P="formats"+e.util.getProperty(i);v&&(P+=".validate"), a+="function"==typeof m?" "+P+"("+c+") ":" "+P+".test("+c+") ", a+=") { ";}}var E=E||[];E.push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'format' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { format:  ", a+=d?""+u:""+e.util.toQuotedString(i), a+="  } ", !1!==e.opts.messages&&(a+=" , message: 'should match format \"", a+=d?"' + "+u+" + '":""+e.util.escapeQuotes(i), a+="\"' "), e.opts.verbose&&(a+=" , schema:  ", a+=d?"validate.schema"+n:""+e.util.toQuotedString(i), a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";var w=a;return a=E.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+w+"]); ":" validate.errors = ["+w+"]; return false; ":" var err = "+w+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a+=" } ", h&&(a+=" else { "), a};},{}],25:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="valid"+s,d="errs__"+s,f=e.util.copy(e);f.level++;var p="valid"+f.level,m=e.schema.then,v=e.schema.else,y=void 0!==m&&e.util.schemaHasRules(m,e.RULES.all),g=void 0!==v&&e.util.schemaHasRules(v,e.RULES.all),P=f.baseId;if(y||g){var E;f.createErrors=!1, f.schema=i, f.schemaPath=n, f.errSchemaPath=l, a+=" var "+d+" = errors; var "+u+" = true;  ";var w=e.compositeRule;e.compositeRule=f.compositeRule=!0, a+="  "+e.validate(f)+" ", f.baseId=P, f.createErrors=!0, a+="  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; }  ", e.compositeRule=f.compositeRule=w, y?(a+=" if ("+p+") {  ", f.schema=e.schema.then, f.schemaPath=e.schemaPath+".then", f.errSchemaPath=e.errSchemaPath+"/then", a+="  "+e.validate(f)+" ", f.baseId=P, a+=" "+u+" = "+p+"; ", y&&g?a+=" var "+(E="ifClause"+s)+" = 'then'; ":E="'then'", a+=" } ", g&&(a+=" else { ")):a+=" if (!"+p+") { ", g&&(f.schema=e.schema.else, f.schemaPath=e.schemaPath+".else", f.errSchemaPath=e.errSchemaPath+"/else", a+="  "+e.validate(f)+" ", f.baseId=P, a+=" "+u+" = "+p+"; ", y&&g?a+=" var "+(E="ifClause"+s)+" = 'else'; ":E="'else'", a+=" } "), a+=" if (!"+u+") {   var err =   ", !1!==e.createErrors?(a+=" { keyword: 'if' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { failingKeyword: "+E+" } ", !1!==e.opts.messages&&(a+=" , message: 'should match \"' + "+E+" + '\" schema' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ", a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule&&h&&(a+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "), a+=" }   ", h&&(a+=" else { "), a=e.util.cleanUpCode(a);}else h&&(a+=" if (true) { ");return a};},{}],26:[function(e,r,t){r.exports={$ref:e("./ref"),allOf:e("./allOf"),anyOf:e("./anyOf"),$comment:e("./comment"),const:e("./const"),contains:e("./contains"),dependencies:e("./dependencies"),enum:e("./enum"),format:e("./format"),if:e("./if"),items:e("./items"),maximum:e("./_limit"),minimum:e("./_limit"),maxItems:e("./_limitItems"),minItems:e("./_limitItems"),maxLength:e("./_limitLength"),minLength:e("./_limitLength"),maxProperties:e("./_limitProperties"),minProperties:e("./_limitProperties"),multipleOf:e("./multipleOf"),not:e("./not"),oneOf:e("./oneOf"),pattern:e("./pattern"),properties:e("./properties"),propertyNames:e("./propertyNames"),required:e("./required"),uniqueItems:e("./uniqueItems"),validate:e("./validate")};},{"./_limit":12,"./_limitItems":13,"./_limitLength":14,"./_limitProperties":15,"./allOf":16,"./anyOf":17,"./comment":18,"./const":19,"./contains":20,"./dependencies":22,"./enum":23,"./format":24,"./if":25,"./items":27,"./multipleOf":28,"./not":29,"./oneOf":30,"./pattern":31,"./properties":32,"./propertyNames":33,"./ref":34,"./required":35,"./uniqueItems":36,"./validate":37}],27:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="valid"+s,d="errs__"+s,f=e.util.copy(e),p="";f.level++;var m="valid"+f.level,v="i"+s,y=f.dataLevel=e.dataLevel+1,g="data"+y,P=e.baseId;if(a+="var "+d+" = errors;var "+u+";", Array.isArray(i)){var E=e.schema.additionalItems;if(!1===E){a+=" "+u+" = "+c+".length <= "+i.length+"; ";var w=l;l=e.errSchemaPath+"/additionalItems", a+="  if (!"+u+") {   ";var b=b||[];b.push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'additionalItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { limit: "+i.length+" } ", !1!==e.opts.messages&&(a+=" , message: 'should NOT have more than "+i.length+" items' "), e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";var S=a;a=b.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+S+"]); ":" validate.errors = ["+S+"]; return false; ":" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a+=" } ", l=w, h&&(p+="}", a+=" else { ");}var _=i;if(_)for(var $,x=-1,F=_.length-1;x<F;)if($=_[x+=1], e.util.schemaHasRules($,e.RULES.all)){a+=" "+m+" = true; if ("+c+".length > "+x+") { ";var R=c+"["+x+"]";f.schema=$, f.schemaPath=n+"["+x+"]", f.errSchemaPath=l+"/"+x, f.errorPath=e.util.getPathExpr(e.errorPath,x,e.opts.jsonPointers,!0), f.dataPathArr[y]=x;var j=e.validate(f);f.baseId=P, e.util.varOccurences(j,g)<2?a+=" "+e.util.varReplace(j,g,R)+" ":a+=" var "+g+" = "+R+"; "+j+" ", a+=" }  ", h&&(a+=" if ("+m+") { ", p+="}");}if("object"==typeof E&&e.util.schemaHasRules(E,e.RULES.all)){f.schema=E, f.schemaPath=e.schemaPath+".additionalItems", f.errSchemaPath=e.errSchemaPath+"/additionalItems", a+=" "+m+" = true; if ("+c+".length > "+i.length+") {  for (var "+v+" = "+i.length+"; "+v+" < "+c+".length; "+v+"++) { ", f.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers,!0);R=c+"["+v+"]";f.dataPathArr[y]=v;j=e.validate(f);f.baseId=P, e.util.varOccurences(j,g)<2?a+=" "+e.util.varReplace(j,g,R)+" ":a+=" var "+g+" = "+R+"; "+j+" ", h&&(a+=" if (!"+m+") break; "), a+=" } }  ", h&&(a+=" if ("+m+") { ", p+="}");}}else if(e.util.schemaHasRules(i,e.RULES.all)){f.schema=i, f.schemaPath=n, f.errSchemaPath=l, a+="  for (var "+v+" = 0; "+v+" < "+c+".length; "+v+"++) { ", f.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers,!0);R=c+"["+v+"]";f.dataPathArr[y]=v;j=e.validate(f);f.baseId=P, e.util.varOccurences(j,g)<2?a+=" "+e.util.varReplace(j,g,R)+" ":a+=" var "+g+" = "+R+"; "+j+" ", h&&(a+=" if (!"+m+") break; "), a+=" }";}return h&&(a+=" "+p+" if ("+d+" == errors) {"), a=e.util.cleanUpCode(a)};},{}],28:[function(e,r,t){r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),h=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ", a="schema"+o):a=n, s+="var division"+o+";if (", d&&(s+=" "+a+" !== undefined && ( typeof "+a+" != 'number' || "), s+=" (division"+o+" = "+u+" / "+a+", ", s+=e.opts.multipleOfPrecision?" Math.abs(Math.round(division"+o+") - division"+o+") > 1e-"+e.opts.multipleOfPrecision+" ":" division"+o+" !== parseInt(division"+o+") ", s+=" ) ", d&&(s+="  )  "), s+=" ) {   ";var f=f||[];f.push(s), s="", !1!==e.createErrors?(s+=" { keyword: 'multipleOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { multipleOf: "+a+" } ", !1!==e.opts.messages&&(s+=" , message: 'should be multiple of ", s+=d?"' + "+a:a+"'"), e.opts.verbose&&(s+=" , schema:  ", s+=d?"validate.schema"+l:""+n, s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "), s+=" } "):s+=" {} ";var p=s;return s=f.pop(), s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s+="} ", c&&(s+=" else { "), s};},{}],29:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="errs__"+s,d=e.util.copy(e);d.level++;var f="valid"+d.level;if(e.util.schemaHasRules(i,e.RULES.all)){d.schema=i, d.schemaPath=n, d.errSchemaPath=l, a+=" var "+u+" = errors;  ";var p=e.compositeRule;e.compositeRule=d.compositeRule=!0, d.createErrors=!1;var m;d.opts.allErrors&&(m=d.opts.allErrors, d.opts.allErrors=!1), a+=" "+e.validate(d)+" ", d.createErrors=!0, m&&(d.opts.allErrors=m), e.compositeRule=d.compositeRule=p, a+=" if ("+f+") {   ";var v=v||[];v.push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ", !1!==e.opts.messages&&(a+=" , message: 'should NOT be valid' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";var y=a;a=v.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+y+"]); ":" validate.errors = ["+y+"]; return false; ":" var err = "+y+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a+=" } else {  errors = "+u+"; if (vErrors !== null) { if ("+u+") vErrors.length = "+u+"; else vErrors = null; } ", e.opts.allErrors&&(a+=" } ");}else a+="  var err =   ", !1!==e.createErrors?(a+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ", !1!==e.opts.messages&&(a+=" , message: 'should NOT be valid' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ", a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", h&&(a+=" if (false) { ");return a};},{}],30:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="valid"+s,d="errs__"+s,f=e.util.copy(e),p="";f.level++;var m="valid"+f.level,v=f.baseId,y="prevValid"+s,g="passingSchemas"+s;a+="var "+d+" = errors , "+y+" = false , "+u+" = false , "+g+" = null; ";var P=e.compositeRule;e.compositeRule=f.compositeRule=!0;var E=i;if(E)for(var w,b=-1,S=E.length-1;b<S;)w=E[b+=1], e.util.schemaHasRules(w,e.RULES.all)?(f.schema=w, f.schemaPath=n+"["+b+"]", f.errSchemaPath=l+"/"+b, a+="  "+e.validate(f)+" ", f.baseId=v):a+=" var "+m+" = true; ", b&&(a+=" if ("+m+" && "+y+") { "+u+" = false; "+g+" = ["+g+", "+b+"]; } else { ", p+="}"), a+=" if ("+m+") { "+u+" = "+y+" = true; "+g+" = "+b+"; }";return e.compositeRule=f.compositeRule=P, a+=p+"if (!"+u+") {   var err =   ", !1!==e.createErrors?(a+=" { keyword: 'oneOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { passingSchemas: "+g+" } ", !1!==e.opts.messages&&(a+=" , message: 'should match exactly one schema in oneOf' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ", a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule&&h&&(a+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "), a+="} else {  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; }", e.opts.allErrors&&(a+=" } "), a};},{}],31:[function(e,r,t){r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),h=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ", a="schema"+o):a=n;var f=d?"(new RegExp("+a+"))":e.usePattern(n);s+="if ( ", d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'string') || "), s+=" !"+f+".test("+u+") ) {   ";var p=p||[];p.push(s), s="", !1!==e.createErrors?(s+=" { keyword: 'pattern' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { pattern:  ", s+=d?""+a:""+e.util.toQuotedString(n), s+="  } ", !1!==e.opts.messages&&(s+=" , message: 'should match pattern \"", s+=d?"' + "+a+" + '":""+e.util.escapeQuotes(n), s+="\"' "), e.opts.verbose&&(s+=" , schema:  ", s+=d?"validate.schema"+l:""+e.util.toQuotedString(n), s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "), s+=" } "):s+=" {} ";var m=s;return s=p.pop(), s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s+="} ", c&&(s+=" else { "), s};},{}],32:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="errs__"+s,d=e.util.copy(e),f="";d.level++;var p="valid"+d.level,m="key"+s,v="idx"+s,y=d.dataLevel=e.dataLevel+1,g="data"+y,P="dataProperties"+s,E=Object.keys(i||{}),w=e.schema.patternProperties||{},b=Object.keys(w),S=e.schema.additionalProperties,_=E.length||b.length,$=!1===S,x="object"==typeof S&&Object.keys(S).length,F=e.opts.removeAdditional,R=$||x||F,j=e.opts.ownProperties,O=e.baseId,D=e.schema.required;if(D&&(!e.opts.v5||!D.$data)&&D.length<e.opts.loopRequired)var I=e.util.toHash(D);if(a+="var "+u+" = errors;var "+p+" = true;", j&&(a+=" var "+P+" = undefined;"), R){if(a+=j?" "+P+" = "+P+" || Object.keys("+c+"); for (var "+v+"=0; "+v+"<"+P+".length; "+v+"++) { var "+m+" = "+P+"["+v+"]; ":" for (var "+m+" in "+c+") { ", _){if(a+=" var isAdditional"+s+" = !(false ", E.length)if(E.length>5)a+=" || validate.schema"+n+"["+m+"] ";else{var A=E;if(A)for(var k=-1,L=A.length-1;k<L;)J=A[k+=1], a+=" || "+m+" == "+e.util.toQuotedString(J)+" ";}if(b.length){var q=b;if(q)for(var z=-1,C=q.length-1;z<C;)ae=q[z+=1], a+=" || "+e.usePattern(ae)+".test("+m+") ";}a+=" ); if (isAdditional"+s+") { ";}if("all"==F)a+=" delete "+c+"["+m+"]; ";else{var Q=e.errorPath,U="' + "+m+" + '";if(e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers)), $)if(F)a+=" delete "+c+"["+m+"]; ";else{a+=" "+p+" = false; ";var V=l;l=e.errSchemaPath+"/additionalProperties";(re=re||[]).push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'additionalProperties' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { additionalProperty: '"+U+"' } ", !1!==e.opts.messages&&(a+=" , message: '", a+=e.opts._errorDataPathProperty?"is an invalid additional property":"should NOT have additional properties", a+="' "), e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";var N=a;a=re.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+N+"]); ":" validate.errors = ["+N+"]; return false; ":" var err = "+N+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", l=V, h&&(a+=" break; ");}else if(x)if("failing"==F){a+=" var "+u+" = errors;  ";var T=e.compositeRule;e.compositeRule=d.compositeRule=!0, d.schema=S, d.schemaPath=e.schemaPath+".additionalProperties", d.errSchemaPath=e.errSchemaPath+"/additionalProperties", d.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);var M=c+"["+m+"]";d.dataPathArr[y]=m;var H=e.validate(d);d.baseId=O, e.util.varOccurences(H,g)<2?a+=" "+e.util.varReplace(H,g,M)+" ":a+=" var "+g+" = "+M+"; "+H+" ", a+=" if (!"+p+") { errors = "+u+"; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete "+c+"["+m+"]; }  ", e.compositeRule=d.compositeRule=T;}else{d.schema=S, d.schemaPath=e.schemaPath+".additionalProperties", d.errSchemaPath=e.errSchemaPath+"/additionalProperties", d.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);M=c+"["+m+"]";d.dataPathArr[y]=m;H=e.validate(d);d.baseId=O, e.util.varOccurences(H,g)<2?a+=" "+e.util.varReplace(H,g,M)+" ":a+=" var "+g+" = "+M+"; "+H+" ", h&&(a+=" if (!"+p+") break; ");}e.errorPath=Q;}_&&(a+=" } "), a+=" }  ", h&&(a+=" if ("+p+") { ", f+="}");}var K=e.opts.useDefaults&&!e.compositeRule;if(E.length){var B=E;if(B)for(var J,Z=-1,G=B.length-1;Z<G;){J=B[Z+=1];if(e.util.schemaHasRules(ie=i[J],e.RULES.all)){var W=e.util.getProperty(J),X=(M=c+W, K&&void 0!==ie.default);d.schema=ie, d.schemaPath=n+W, d.errSchemaPath=l+"/"+e.util.escapeFragment(J), d.errorPath=e.util.getPath(e.errorPath,J,e.opts.jsonPointers), d.dataPathArr[y]=e.util.toQuotedString(J);H=e.validate(d);if(d.baseId=O, e.util.varOccurences(H,g)<2){H=e.util.varReplace(H,g,M);var Y=M;}else{Y=g;a+=" var "+g+" = "+M+"; ";}if(X)a+=" "+H+" ";else{if(I&&I[J]){a+=" if ( "+Y+" === undefined ", j&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(J)+"') "), a+=") { "+p+" = false; ";Q=e.errorPath, V=l;var ee=e.util.escapeQuotes(J);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(Q,J,e.opts.jsonPointers)), l=e.errSchemaPath+"/required";var re;(re=re||[]).push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+ee+"' } ", !1!==e.opts.messages&&(a+=" , message: '", a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+ee+"\\'", a+="' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";N=a;a=re.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+N+"]); ":" validate.errors = ["+N+"]; return false; ":" var err = "+N+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", l=V, e.errorPath=Q, a+=" } else { ";}else h?(a+=" if ( "+Y+" === undefined ", j&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(J)+"') "), a+=") { "+p+" = true; } else { "):(a+=" if ("+Y+" !== undefined ", j&&(a+=" &&   Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(J)+"') "), a+=" ) { ");a+=" "+H+" } ";}}h&&(a+=" if ("+p+") { ", f+="}");}}if(b.length){var te=b;if(te)for(var ae,se=-1,oe=te.length-1;se<oe;){ae=te[se+=1];var ie;if(e.util.schemaHasRules(ie=w[ae],e.RULES.all)){d.schema=ie, d.schemaPath=e.schemaPath+".patternProperties"+e.util.getProperty(ae), d.errSchemaPath=e.errSchemaPath+"/patternProperties/"+e.util.escapeFragment(ae), a+=j?" "+P+" = "+P+" || Object.keys("+c+"); for (var "+v+"=0; "+v+"<"+P+".length; "+v+"++) { var "+m+" = "+P+"["+v+"]; ":" for (var "+m+" in "+c+") { ", a+=" if ("+e.usePattern(ae)+".test("+m+")) { ", d.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);M=c+"["+m+"]";d.dataPathArr[y]=m;H=e.validate(d);d.baseId=O, e.util.varOccurences(H,g)<2?a+=" "+e.util.varReplace(H,g,M)+" ":a+=" var "+g+" = "+M+"; "+H+" ", h&&(a+=" if (!"+p+") break; "), a+=" } ", h&&(a+=" else "+p+" = true; "), a+=" }  ", h&&(a+=" if ("+p+") { ", f+="}");}}}return h&&(a+=" "+f+" if ("+u+" == errors) {"), a=e.util.cleanUpCode(a)};},{}],33:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="errs__"+s,d=e.util.copy(e);d.level++;var f="valid"+d.level;if(e.util.schemaHasRules(i,e.RULES.all)){d.schema=i, d.schemaPath=n, d.errSchemaPath=l;var p="key"+s,m="idx"+s,v="i"+s,y="' + "+p+" + '",g="data"+(d.dataLevel=e.dataLevel+1),P="dataProperties"+s,E=e.opts.ownProperties,w=e.baseId;a+=" var "+u+" = errors; ", E&&(a+=" var "+P+" = undefined; "), a+=E?" "+P+" = "+P+" || Object.keys("+c+"); for (var "+m+"=0; "+m+"<"+P+".length; "+m+"++) { var "+p+" = "+P+"["+m+"]; ":" for (var "+p+" in "+c+") { ", a+=" var startErrs"+s+" = errors; ";var b=p,S=e.compositeRule;e.compositeRule=d.compositeRule=!0;var _=e.validate(d);d.baseId=w, e.util.varOccurences(_,g)<2?a+=" "+e.util.varReplace(_,g,b)+" ":a+=" var "+g+" = "+b+"; "+_+" ", e.compositeRule=d.compositeRule=S, a+=" if (!"+f+") { for (var "+v+"=startErrs"+s+"; "+v+"<errors; "+v+"++) { vErrors["+v+"].propertyName = "+p+"; }   var err =   ", !1!==e.createErrors?(a+=" { keyword: 'propertyNames' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { propertyName: '"+y+"' } ", !1!==e.opts.messages&&(a+=" , message: 'property name \\'"+y+"\\' is invalid' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ", a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule&&h&&(a+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "), h&&(a+=" break; "), a+=" } }";}return h&&(a+="  if ("+u+" == errors) {"), a=e.util.cleanUpCode(a)};},{}],34:[function(e,r,t){r.exports=function(e,r,t){var a,s,o=" ",i=e.dataLevel,n=e.schema[r],l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(i||""),u="valid"+e.level;if("#"==n||"#/"==n)e.isRoot?(a=e.async, s="validate"):(a=!0===e.root.schema.$async, s="root.refVal[0]");else{var d=e.resolveRef(e.baseId,n,e.isRoot);if(void 0===d){var f=e.MissingRefError.message(e.baseId,n);if("fail"==e.opts.missingRefs){e.logger.error(f);(y=y||[]).push(o), o="", !1!==e.createErrors?(o+=" { keyword: '$ref' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { ref: '"+e.util.escapeQuotes(n)+"' } ", !1!==e.opts.messages&&(o+=" , message: 'can\\'t resolve reference "+e.util.escapeQuotes(n)+"' "), e.opts.verbose&&(o+=" , schema: "+e.util.toQuotedString(n)+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), o+=" } "):o+=" {} ";var p=o;o=y.pop(), o+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", h&&(o+=" if (false) { ");}else{if("ignore"!=e.opts.missingRefs)throw new e.MissingRefError(e.baseId,n,f);e.logger.warn(f), h&&(o+=" if (true) { ");}}else if(d.inline){var m=e.util.copy(e);m.level++;var v="valid"+m.level;m.schema=d.schema, m.schemaPath="", m.errSchemaPath=n;o+=" "+e.validate(m).replace(/validate\.schema/g,d.code)+" ", h&&(o+=" if ("+v+") { ");}else a=!0===d.$async||e.async&&!1!==d.$async, s=d.code;}if(s){var y;(y=y||[]).push(o), o="", o+=e.opts.passContext?" "+s+".call(this, ":" "+s+"( ", o+=" "+c+", (dataPath || '')", '""'!=e.errorPath&&(o+=" + "+e.errorPath);var g=o+=" , "+(i?"data"+(i-1||""):"parentData")+" , "+(i?e.dataPathArr[i]:"parentDataProperty")+", rootData)  ";if(o=y.pop(), a){if(!e.async)throw new Error("async schema referenced by sync schema");h&&(o+=" var "+u+"; "), o+=" try { await "+g+"; ", h&&(o+=" "+u+" = true; "), o+=" } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", h&&(o+=" "+u+" = false; "), o+=" } ", h&&(o+=" if ("+u+") { ");}else o+=" if (!"+g+") { if (vErrors === null) vErrors = "+s+".errors; else vErrors = vErrors.concat("+s+".errors); errors = vErrors.length; } ", h&&(o+=" else { ");}return o};},{}],35:[function(e,r,t){r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,c="data"+(o||""),u="valid"+s,d=e.opts.$data&&i&&i.$data;d&&(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ");var f="schema"+s;if(!d)if(i.length<e.opts.loopRequired&&e.schema.properties&&Object.keys(e.schema.properties).length){var p=[],m=i;if(m)for(var v,y=-1,g=m.length-1;y<g;){v=m[y+=1];var P=e.schema.properties[v];P&&e.util.schemaHasRules(P,e.RULES.all)||(p[p.length]=v);}}else p=i;if(d||p.length){var E=e.errorPath,w=d||p.length>=e.opts.loopRequired,b=e.opts.ownProperties;if(h)if(a+=" var missing"+s+"; ", w){d||(a+=" var "+f+" = validate.schema"+n+"; ");var S="' + "+(j="schema"+s+"["+(x="i"+s)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(E,j,e.opts.jsonPointers)), a+=" var "+u+" = true; ", d&&(a+=" if (schema"+s+" === undefined) "+u+" = true; else if (!Array.isArray(schema"+s+")) "+u+" = false; else {"), a+=" for (var "+x+" = 0; "+x+" < "+f+".length; "+x+"++) { "+u+" = "+c+"["+f+"["+x+"]] !== undefined ", b&&(a+=" &&   Object.prototype.hasOwnProperty.call("+c+", "+f+"["+x+"]) "), a+="; if (!"+u+") break; } ", d&&(a+="  }  "), a+="  if (!"+u+") {   ";(R=R||[]).push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+S+"' } ", !1!==e.opts.messages&&(a+=" , message: '", a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+S+"\\'", a+="' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";var _=a;a=R.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a+=" } else { ";}else{a+=" if ( ";var $=p;if($)for(var x=-1,F=$.length-1;x<F;){D=$[x+=1], x&&(a+=" || ");a+=" ( ( "+(L=c+(k=e.util.getProperty(D)))+" === undefined ", b&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(D)+"') "), a+=") && (missing"+s+" = "+e.util.toQuotedString(e.opts.jsonPointers?D:k)+") ) ";}a+=") {  ";S="' + "+(j="missing"+s)+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(E,j,!0):E+" + "+j);var R;(R=R||[]).push(a), a="", !1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+S+"' } ", !1!==e.opts.messages&&(a+=" , message: '", a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+S+"\\'", a+="' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ";_=a;a=R.pop(), a+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a+=" } else { ";}else if(w){d||(a+=" var "+f+" = validate.schema"+n+"; ");var j;S="' + "+(j="schema"+s+"["+(x="i"+s)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(E,j,e.opts.jsonPointers)), d&&(a+=" if ("+f+" && !Array.isArray("+f+")) {  var err =   ", !1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+S+"' } ", !1!==e.opts.messages&&(a+=" , message: '", a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+S+"\\'", a+="' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ", a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if ("+f+" !== undefined) { "), a+=" for (var "+x+" = 0; "+x+" < "+f+".length; "+x+"++) { if ("+c+"["+f+"["+x+"]] === undefined ", b&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", "+f+"["+x+"]) "), a+=") {  var err =   ", !1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+S+"' } ", !1!==e.opts.messages&&(a+=" , message: '", a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+S+"\\'", a+="' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ", a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", d&&(a+="  }  ");}else{var O=p;if(O)for(var D,I=-1,A=O.length-1;I<A;){D=O[I+=1];var k=e.util.getProperty(D),L=(S=e.util.escapeQuotes(D), c+k);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(E,D,e.opts.jsonPointers)), a+=" if ( "+L+" === undefined ", b&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(D)+"') "), a+=") {  var err =   ", !1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+S+"' } ", !1!==e.opts.messages&&(a+=" , message: '", a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+S+"\\'", a+="' "), e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "), a+=" } "):a+=" {} ", a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";}}e.errorPath=E;}else h&&(a+=" if (true) {");return a};},{}],36:[function(e,r,t){r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),h=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,u="data"+(i||""),d="valid"+o,f=e.opts.$data&&n&&n.$data;if(f?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ", a="schema"+o):a=n, (n||f)&&!1!==e.opts.uniqueItems){f&&(s+=" var "+d+"; if ("+a+" === false || "+a+" === undefined) "+d+" = true; else if (typeof "+a+" != 'boolean') "+d+" = false; else { "), s+=" var i = "+u+".length , "+d+" = true , j; if (i > 1) { ";var p=e.schema.items&&e.schema.items.type;s+=p&&"object"!=p&&"array"!=p?" var itemIndices = {}, item; for (;i--;) { var item = "+u+"[i]; if (typeof item != '"+p+"') continue; if (itemIndices[item] !== undefined) { "+d+" = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ":" outer: for (;i--;) { for (j = i; j--;) { if (equal("+u+"[i], "+u+"[j])) { "+d+" = false; break outer; } } } ", s+=" } ", f&&(s+="  }  "), s+=" if (!"+d+") {   ";var m=m||[];m.push(s), s="", !1!==e.createErrors?(s+=" { keyword: 'uniqueItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { i: i, j: j } ", !1!==e.opts.messages&&(s+=" , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose&&(s+=" , schema:  ", s+=f?"validate.schema"+l:""+n, s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "), s+=" } "):s+=" {} ";var v=s;s=m.pop(), s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+v+"]); ":" validate.errors = ["+v+"]; return false; ":" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s+=" } ", c&&(s+=" else { ");}else c&&(s+=" if (true) { ");return s};},{}],37:[function(e,r,t){r.exports=function(e,r,t){var a="",s=!0===e.schema.$async,o=e.util.schemaHasRulesExcept(e.schema,e.RULES.all,"$ref"),i=e.self._getId(e.schema);if(e.isTop&&(a+=" var validate = ", s&&(e.async=!0, a+="async "), a+="function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", i&&(e.opts.sourceCode||e.opts.processCode)&&(a+=" /*# sourceURL="+i+" */ ")), "boolean"==typeof e.schema||!o&&!e.schema.$ref){var n=e.level,l=e.dataLevel,h=e.schema[r="false schema"],c=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,d=!e.opts.allErrors,f="data"+(l||""),p="valid"+n;if(!1===e.schema){e.isTop?d=!0:a+=" var "+p+" = false; ";(J=J||[]).push(a), a="", !1!==e.createErrors?(a+=" { keyword: '"+(y||"false schema")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: {} ", !1!==e.opts.messages&&(a+=" , message: 'boolean schema is false' "), e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "), a+=" } "):a+=" {} ";var m=a;a=J.pop(), a+=!e.compositeRule&&d?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";}else a+=e.isTop?s?" return data; ":" validate.errors = null; return true; ":" var "+p+" = true; ";return e.isTop&&(a+=" }; return validate; "), a}if(e.isTop){var v=e.isTop;n=e.level=0, l=e.dataLevel=0, f="data";e.rootId=e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId=e.baseId||e.rootId, delete e.isTop, e.dataPathArr=[void 0], a+=" var vErrors = null; ", a+=" var errors = 0;     ", a+=" if (rootData === undefined) rootData = data; ";}else{n=e.level, f="data"+((l=e.dataLevel)||"");if(i&&(e.baseId=e.resolve.url(e.baseId,i)), s&&!e.async)throw new Error("async schema in sync schema");a+=" var errs_"+n+" = errors;";}p="valid"+n, d=!e.opts.allErrors;var y,g="",P="",E=e.schema.type,w=Array.isArray(E);if(w&&1==E.length&&(E=E[0], w=!1), e.schema.$ref&&o){if("fail"==e.opts.extendRefs)throw new Error('$ref: validation keywords used in schema at path "'+e.errSchemaPath+'" (see option extendRefs)');!0!==e.opts.extendRefs&&(o=!1, e.logger.warn('$ref: keywords ignored in schema at path "'+e.errSchemaPath+'"'));}if(e.schema.$comment&&e.opts.$comment&&(a+=" "+e.RULES.all.$comment.code(e,"$comment")), E){if(e.opts.coerceTypes)var b=e.util.coerceToTypes(e.opts.coerceTypes,E);var S=e.RULES.types[E];if(b||w||!0===S||S&&!Z(S)){c=e.schemaPath+".type", u=e.errSchemaPath+"/type", c=e.schemaPath+".type", u=e.errSchemaPath+"/type";if(a+=" if ("+e.util[w?"checkDataTypes":"checkDataType"](E,f,!0)+") { ", b){var _="dataType"+n,$="coerced"+n;a+=" var "+_+" = typeof "+f+"; ", "array"==e.opts.coerceTypes&&(a+=" if ("+_+" == 'object' && Array.isArray("+f+")) "+_+" = 'array'; "), a+=" var "+$+" = undefined; ";var x="",F=b;if(F)for(var R,j=-1,O=F.length-1;j<O;)R=F[j+=1], j&&(a+=" if ("+$+" === undefined) { ", x+="}"), "array"==e.opts.coerceTypes&&"array"!=R&&(a+=" if ("+_+" == 'array' && "+f+".length == 1) { "+$+" = "+f+" = "+f+"[0]; "+_+" = typeof "+f+";  } "), "string"==R?a+=" if ("+_+" == 'number' || "+_+" == 'boolean') "+$+" = '' + "+f+"; else if ("+f+" === null) "+$+" = ''; ":"number"==R||"integer"==R?(a+=" if ("+_+" == 'boolean' || "+f+" === null || ("+_+" == 'string' && "+f+" && "+f+" == +"+f+" ", "integer"==R&&(a+=" && !("+f+" % 1)"), a+=")) "+$+" = +"+f+"; "):"boolean"==R?a+=" if ("+f+" === 'false' || "+f+" === 0 || "+f+" === null) "+$+" = false; else if ("+f+" === 'true' || "+f+" === 1) "+$+" = true; ":"null"==R?a+=" if ("+f+" === '' || "+f+" === 0 || "+f+" === false) "+$+" = null; ":"array"==e.opts.coerceTypes&&"array"==R&&(a+=" if ("+_+" == 'string' || "+_+" == 'number' || "+_+" == 'boolean' || "+f+" == null) "+$+" = ["+f+"]; ");a+=" "+x+" if ("+$+" === undefined) {   ";(J=J||[]).push(a), a="", !1!==e.createErrors?(a+=" { keyword: '"+(y||"type")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { type: '", a+=w?""+E.join(","):""+E, a+="' } ", !1!==e.opts.messages&&(a+=" , message: 'should be ", a+=w?""+E.join(","):""+E, a+="' "), e.opts.verbose&&(a+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "), a+=" } "):a+=" {} ";m=a;a=J.pop(), a+=!e.compositeRule&&d?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a+=" } else {  ";var D=l?"data"+(l-1||""):"parentData";a+=" "+f+" = "+$+"; ", l||(a+="if ("+D+" !== undefined)"), a+=" "+D+"["+(l?e.dataPathArr[l]:"parentDataProperty")+"] = "+$+"; } ";}else{(J=J||[]).push(a), a="", !1!==e.createErrors?(a+=" { keyword: '"+(y||"type")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { type: '", a+=w?""+E.join(","):""+E, a+="' } ", !1!==e.opts.messages&&(a+=" , message: 'should be ", a+=w?""+E.join(","):""+E, a+="' "), e.opts.verbose&&(a+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "), a+=" } "):a+=" {} ";m=a;a=J.pop(), a+=!e.compositeRule&&d?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";}a+=" } ";}}if(e.schema.$ref&&!o)a+=" "+e.RULES.all.$ref.code(e,"$ref")+" ", d&&(a+=" } if (errors === ", a+=v?"0":"errs_"+n, a+=") { ", P+="}");else{var I=e.RULES;if(I)for(var A=-1,k=I.length-1;A<k;)if(Z(S=I[A+=1])){if(S.type&&(a+=" if ("+e.util.checkDataType(S.type,f)+") { "), e.opts.useDefaults&&!e.compositeRule)if("object"==S.type&&e.schema.properties){h=e.schema.properties;var L=Object.keys(h);if(L)for(var q,z=-1,C=L.length-1;z<C;){if(void 0!==(U=h[q=L[z+=1]]).default){a+="  if ("+(N=f+e.util.getProperty(q))+" === undefined) "+N+" = ", a+="shared"==e.opts.useDefaults?" "+e.useDefault(U.default)+" ":" "+JSON.stringify(U.default)+" ", a+="; ";}}}else if("array"==S.type&&Array.isArray(e.schema.items)){var Q=e.schema.items;if(Q){j=-1;for(var U,V=Q.length-1;j<V;)if(void 0!==(U=Q[j+=1]).default){var N;a+="  if ("+(N=f+"["+j+"]")+" === undefined) "+N+" = ", a+="shared"==e.opts.useDefaults?" "+e.useDefault(U.default)+" ":" "+JSON.stringify(U.default)+" ", a+="; ";}}}var T=S.rules;if(T)for(var M,H=-1,K=T.length-1;H<K;)if(G(M=T[H+=1])){var B=M.code(e,M.keyword,S.type);B&&(a+=" "+B+" ", d&&(g+="}"));}if(d&&(a+=" "+g+" ", g=""), S.type&&(a+=" } ", E&&E===S.type&&!b)){a+=" else { ";var J;c=e.schemaPath+".type", u=e.errSchemaPath+"/type";(J=J||[]).push(a), a="", !1!==e.createErrors?(a+=" { keyword: '"+(y||"type")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { type: '", a+=w?""+E.join(","):""+E, a+="' } ", !1!==e.opts.messages&&(a+=" , message: 'should be ", a+=w?""+E.join(","):""+E, a+="' "), e.opts.verbose&&(a+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "), a+=" } "):a+=" {} ";m=a;a=J.pop(), a+=!e.compositeRule&&d?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a+=" } ";}d&&(a+=" if (errors === ", a+=v?"0":"errs_"+n, a+=") { ", P+="}");}}d&&(a+=" "+P+" "), v?(s?(a+=" if (errors === 0) return data;           ", a+=" else throw new ValidationError(vErrors); "):(a+=" validate.errors = vErrors; ", a+=" return errors === 0;       "), a+=" }; return validate;"):a+=" var "+p+" = errors === errs_"+n+";", a=e.util.cleanUpCode(a), v&&(a=e.util.finalCleanUpCode(a,s));function Z(e){for(var r=e.rules,t=0;t<r.length;t++)if(G(r[t]))return!0}function G(r){return void 0!==e.schema[r.keyword]||r.implements&&function(r){for(var t=r.implements,a=0;a<t.length;a++)if(void 0!==e.schema[t[a]])return!0}(r)}return a};},{}],38:[function(e,r,t){var a=/^[a-z_$][a-z0-9_$-]*$/i,s=e("./dotjs/custom");r.exports={add:function(e,r){var t=this.RULES;if(t.keywords[e])throw new Error("Keyword "+e+" is already defined");if(!a.test(e))throw new Error("Keyword "+e+" is not a valid identifier");if(r){if(r.macro&&void 0!==r.valid)throw new Error('"valid" option cannot be used with macro keywords');var o=r.type;if(Array.isArray(o)){var i,n=o.length;for(i=0;i<n;i++)u(o[i]);for(i=0;i<n;i++)c(e,o[i],r);}else o&&u(o), c(e,o,r);var l=!0===r.$data&&this._opts.$data;if(l&&!r.validate)throw new Error('$data support: "validate" function is not defined');var h=r.metaSchema;h&&(l&&(h={anyOf:[h,{$ref:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"}]}), r.validateSchema=this.compile(h,!0));}t.keywords[e]=t.all[e]=!0;function c(e,r,a){for(var o,i=0;i<t.length;i++){var n=t[i];if(n.type==r){o=n;break}}o||t.push(o={type:r,rules:[]});var l={keyword:e,definition:a,custom:!0,code:s,implements:a.implements};o.rules.push(l), t.custom[e]=l;}function u(e){if(!t.types[e])throw new Error("Unknown type "+e)}return this},get:function(e){var r=this.RULES.custom[e];return r?r.definition:this.RULES.keywords[e]||!1},remove:function(e){var r=this.RULES;delete r.keywords[e], delete r.all[e], delete r.custom[e];for(var t=0;t<r.length;t++)for(var a=r[t].rules,s=0;s<a.length;s++)if(a[s].keyword==e){a.splice(s,1);break}return this}};},{"./dotjs/custom":21}],39:[function(e,r,t){r.exports={$schema:"http://json-schema.org/draft-07/schema#",$id:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#",description:"Meta-schema for $data reference (JSON Schema extension proposal)",type:"object",required:["$data"],properties:{$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},additionalProperties:!1};},{}],40:[function(e,r,t){r.exports={$schema:"http://json-schema.org/draft-07/schema#",$id:"http://json-schema.org/draft-07/schema#",title:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},type:["object","boolean"],properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},default:!0};},{}],41:[function(e,r,t){r.exports=function e(r,t){if(r===t)return!0;var a,s=Array.isArray(r),o=Array.isArray(t);if(s&&o){if(r.length!=t.length)return!1;for(a=0;a<r.length;a++)if(!e(r[a],t[a]))return!1;return!0}if(s!=o)return!1;if(r&&t&&"object"==typeof r&&"object"==typeof t){var i=Object.keys(r);if(i.length!==Object.keys(t).length)return!1;var n=r instanceof Date,l=t instanceof Date;if(n&&l)return r.getTime()==t.getTime();if(n!=l)return!1;var h=r instanceof RegExp,c=t instanceof RegExp;if(h&&c)return r.toString()==t.toString();if(h!=c)return!1;for(a=0;a<i.length;a++)if(!Object.prototype.hasOwnProperty.call(t,i[a]))return!1;for(a=0;a<i.length;a++)if(!e(r[i[a]],t[i[a]]))return!1;return!0}return!1};},{}],42:[function(e,r,t){r.exports=function(e,r){r||(r={}), "function"==typeof r&&(r={cmp:r});var t,a="boolean"==typeof r.cycles&&r.cycles,s=r.cmp&&(t=r.cmp, function(e){return function(r,a){return t({key:r,value:e[r]},{key:a,value:e[a]})}}),o=[];return function e(r){if(r&&r.toJSON&&"function"==typeof r.toJSON&&(r=r.toJSON()), void 0!==r){if("number"==typeof r)return isFinite(r)?""+r:"null";if("object"!=typeof r)return JSON.stringify(r);var t,i;if(Array.isArray(r)){for(i="[", t=0;t<r.length;t++)t&&(i+=","), i+=e(r[t])||"null";return i+"]"}if(null===r)return"null";if(-1!==o.indexOf(r)){if(a)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var n=o.push(r)-1,l=Object.keys(r).sort(s&&s(r));for(i="", t=0;t<l.length;t++){var h=l[t],c=e(r[h]);c&&(i&&(i+=","), i+=JSON.stringify(h)+":"+c);}return o.splice(n,1), "{"+i+"}"}}(e)};},{}],43:[function(e,r,t){var a=r.exports=function(e,r,t){"function"==typeof r&&(t=r, r={}), function e(r,t,s,o,i,n,l,h,c){if(s&&"object"==typeof s&&!Array.isArray(s)){t(s,o,i,n,l,h,c);for(var u in s){var d=s[u];if(Array.isArray(d)){if(u in a.arrayKeywords)for(var f=0;f<d.length;f++)e(r,t,d[f],o+"/"+u+"/"+f,i,o,u,s,f);}else if(u in a.propsKeywords){if(d&&"object"==typeof d)for(var p in d)e(r,t,d[p],o+"/"+u+"/"+(m=p, m.replace(/~/g,"~0").replace(/\//g,"~1")),i,o,u,s,p);}else(u in a.keywords||r.allKeys&&!(u in a.skipKeywords))&&e(r,t,d,o+"/"+u,i,o,u,s);}}var m;}(r,t,e,"",e);};a.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0}, a.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0}, a.propsKeywords={definitions:!0,properties:!0,patternProperties:!0,dependencies:!0}, a.skipKeywords={enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};},{}],44:[function(e,r,t){(function(e){!function(a){var s="object"==typeof t&&t&&!t.nodeType&&t,o="object"==typeof r&&r&&!r.nodeType&&r,i="object"==typeof e&&e;i.global!==i&&i.window!==i&&i.self!==i||(a=i);var n,l,h=2147483647,c=36,u=1,d=26,f=38,p=700,m=72,v=128,y="-",g=/^xn--/,P=/[^\x20-\x7E]/,E=/[\x2E\u3002\uFF0E\uFF61]/g,w={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},b=c-u,S=Math.floor,_=String.fromCharCode;function $(e){throw new RangeError(w[e])}function x(e,r){for(var t=e.length,a=[];t--;)a[t]=r(e[t]);return a}function F(e,r){var t=e.split("@"),a="";t.length>1&&(a=t[0]+"@", e=t[1]);return a+x((e=e.replace(E,".")).split("."),r).join(".")}function R(e){for(var r,t,a=[],s=0,o=e.length;s<o;)(r=e.charCodeAt(s++))>=55296&&r<=56319&&s<o?56320==(64512&(t=e.charCodeAt(s++)))?a.push(((1023&r)<<10)+(1023&t)+65536):(a.push(r), s--):a.push(r);return a}function j(e){return x(e,function(e){var r="";return e>65535&&(r+=_((e-=65536)>>>10&1023|55296), e=56320|1023&e), r+=_(e)}).join("")}function O(e,r){return e+22+75*(e<26)-((0!=r)<<5)}function D(e,r,t){var a=0;for(e=t?S(e/p):e>>1, e+=S(e/r);e>b*d>>1;a+=c)e=S(e/b);return S(a+(b+1)*e/(e+f))}function I(e){var r,t,a,s,o,i,n,l,f,p,g=[],P=e.length,E=0,w=v,b=m;for((t=e.lastIndexOf(y))<0&&(t=0), a=0;a<t;++a)e.charCodeAt(a)>=128&&$("not-basic"), g.push(e.charCodeAt(a));for(s=t>0?t+1:0;s<P;){for(o=E, i=1, n=c;s>=P&&$("invalid-input"), ((l=(_=e.charCodeAt(s++))-48<10?_-22:_-65<26?_-65:_-97<26?_-97:c)>=c||l>S((h-E)/i))&&$("overflow"), E+=l*i, !(l<(f=n<=b?u:n>=b+d?d:n-b));n+=c)i>S(h/(p=c-f))&&$("overflow"), i*=p;b=D(E-o,r=g.length+1,0==o), S(E/r)>h-w&&$("overflow"), w+=S(E/r), E%=r, g.splice(E++,0,w);}var _;return j(g)}function A(e){var r,t,a,s,o,i,n,l,f,p,g,P,E,w,b,x=[];for(P=(e=R(e)).length, r=v, t=0, o=m, i=0;i<P;++i)(g=e[i])<128&&x.push(_(g));for(a=s=x.length, s&&x.push(y);a<P;){for(n=h, i=0;i<P;++i)(g=e[i])>=r&&g<n&&(n=g);for(n-r>S((h-t)/(E=a+1))&&$("overflow"), t+=(n-r)*E, r=n, i=0;i<P;++i)if((g=e[i])<r&&++t>h&&$("overflow"), g==r){for(l=t, f=c;!(l<(p=f<=o?u:f>=o+d?d:f-o));f+=c)x.push(_(O(p+(b=l-p)%(w=c-p),0))), l=S(b/w);x.push(_(O(l,0))), o=D(t,E,a==s), t=0, ++a;}++t, ++r;}return x.join("")}if(n={version:"1.4.1",ucs2:{decode:R,encode:j},decode:I,encode:A,toASCII:function(e){return F(e,function(e){return P.test(e)?"xn--"+A(e):e})},toUnicode:function(e){return F(e,function(e){return g.test(e)?I(e.slice(4).toLowerCase()):e})}}, s&&o)if(r.exports==s)o.exports=n;else for(l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);else a.punycode=n;}(this);}).call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],45:[function(e,r,t){r.exports=function(e,r,t,s){r=r||"&", t=t||"=";var o={};if("string"!=typeof e||0===e.length)return o;var i=/\+/g;e=e.split(r);var n=1e3;s&&"number"==typeof s.maxKeys&&(n=s.maxKeys);var l=e.length;n>0&&l>n&&(l=n);for(var h=0;h<l;++h){var c,u,d,f,p=e[h].replace(i,"%20"),m=p.indexOf(t);m>=0?(c=p.substr(0,m), u=p.substr(m+1)):(c=p, u=""), d=decodeURIComponent(c), f=decodeURIComponent(u), Object.prototype.hasOwnProperty.call(o,d)?a(o[d])?o[d].push(f):o[d]=[o[d],f]:o[d]=f;}return o};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};},{}],46:[function(e,r,t){var a=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};r.exports=function(e,r,t,n){return r=r||"&", t=t||"=", null===e&&(e=void 0), "object"==typeof e?o(i(e),function(i){var n=encodeURIComponent(a(i))+t;return s(e[i])?o(e[i],function(e){return n+encodeURIComponent(a(e))}).join(r):n+encodeURIComponent(a(e[i]))}).join(r):n?encodeURIComponent(a(n))+t+encodeURIComponent(a(e)):""};var s=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,r){if(e.map)return e.map(r);for(var t=[],a=0;a<e.length;a++)t.push(r(e[a],a));return t}var i=Object.keys||function(e){var r=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r};},{}],47:[function(e,r,t){t.decode=t.parse=e("./decode"), t.encode=t.stringify=e("./encode");},{"./decode":45,"./encode":46}],48:[function(e,r,t){var a=e("punycode"),s=e("./util");t.parse=P, t.resolve=function(e,r){return P(e,!1,!0).resolve(r)}, t.resolveObject=function(e,r){return e?P(e,!1,!0).resolveObject(r):r}, t.format=function(e){s.isString(e)&&(e=P(e));return e instanceof o?e.format():o.prototype.format.call(e)}, t.Url=o;function o(){this.protocol=null, this.slashes=null, this.auth=null, this.host=null, this.port=null, this.hostname=null, this.hash=null, this.search=null, this.query=null, this.pathname=null, this.path=null, this.href=null;}var i=/^([a-z0-9.+-]+:)/i,n=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,h=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),c=["'"].concat(h),u=["%","/","?",";","#"].concat(c),d=["/","?","#"],f=/^[+a-z0-9A-Z_-]{0,63}$/,p=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},g=e("querystring");function P(e,r,t){if(e&&s.isObject(e)&&e instanceof o)return e;var a=new o;return a.parse(e,r,t), a}o.prototype.parse=function(e,r,t){if(!s.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var o=e.indexOf("?"),n=-1!==o&&o<e.indexOf("#")?"?":"#",h=e.split(n);h[0]=h[0].replace(/\\/g,"/");var P=e=h.join(n);if(P=P.trim(), !t&&1===e.split("#").length){var E=l.exec(P);if(E)return this.path=P, this.href=P, this.pathname=E[1], E[2]?(this.search=E[2], this.query=r?g.parse(this.search.substr(1)):this.search.substr(1)):r&&(this.search="", this.query={}), this}var w=i.exec(P);if(w){var b=(w=w[0]).toLowerCase();this.protocol=b, P=P.substr(w.length);}if(t||w||P.match(/^\/\/[^@\/]+@[^@\/]+/)){var S="//"===P.substr(0,2);!S||w&&v[w]||(P=P.substr(2), this.slashes=!0);}if(!v[w]&&(S||w&&!y[w])){for(var _=-1,$=0;$<d.length;$++){-1!==(R=P.indexOf(d[$]))&&(-1===_||R<_)&&(_=R);}var x,F;-1!==(F=-1===_?P.lastIndexOf("@"):P.lastIndexOf("@",_))&&(x=P.slice(0,F), P=P.slice(F+1), this.auth=decodeURIComponent(x)), _=-1;for($=0;$<u.length;$++){var R;-1!==(R=P.indexOf(u[$]))&&(-1===_||R<_)&&(_=R);}-1===_&&(_=P.length), this.host=P.slice(0,_), P=P.slice(_), this.parseHost(), this.hostname=this.hostname||"";var j="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!j)for(var O=this.hostname.split(/\./),D=($=0, O.length);$<D;$++){var I=O[$];if(I&&!I.match(f)){for(var A="",k=0,L=I.length;k<L;k++)I.charCodeAt(k)>127?A+="x":A+=I[k];if(!A.match(f)){var q=O.slice(0,$),z=O.slice($+1),C=I.match(p);C&&(q.push(C[1]), z.unshift(C[2])), z.length&&(P="/"+z.join(".")+P), this.hostname=q.join(".");break}}}this.hostname=this.hostname.length>255?"":this.hostname.toLowerCase(), j||(this.hostname=a.toASCII(this.hostname));var Q=this.port?":"+this.port:"";this.host=(this.hostname||"")+Q, this.href+=this.host, j&&(this.hostname=this.hostname.substr(1,this.hostname.length-2), "/"!==P[0]&&(P="/"+P));}if(!m[b])for($=0, D=c.length;$<D;$++){var U=c[$];if(-1!==P.indexOf(U)){var V=encodeURIComponent(U);V===U&&(V=escape(U)), P=P.split(U).join(V);}}var N=P.indexOf("#");-1!==N&&(this.hash=P.substr(N), P=P.slice(0,N));var T=P.indexOf("?");if(-1!==T?(this.search=P.substr(T), this.query=P.substr(T+1), r&&(this.query=g.parse(this.query)), P=P.slice(0,T)):r&&(this.search="", this.query={}), P&&(this.pathname=P), y[b]&&this.hostname&&!this.pathname&&(this.pathname="/"), this.pathname||this.search){this.path=(Q=this.pathname||"")+(this.search||"");}return this.href=this.format(), this};o.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"), e+="@");var r=this.protocol||"",t=this.pathname||"",a=this.hash||"",o=!1,i="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"), this.port&&(o+=":"+this.port)), this.query&&s.isObject(this.query)&&Object.keys(this.query).length&&(i=g.stringify(this.query));var n=this.search||i&&"?"+i||"";return r&&":"!==r.substr(-1)&&(r+=":"), this.slashes||(!r||y[r])&&!1!==o?(o="//"+(o||""), t&&"/"!==t.charAt(0)&&(t="/"+t)):o||(o=""), a&&"#"!==a.charAt(0)&&(a="#"+a), n&&"?"!==n.charAt(0)&&(n="?"+n), r+o+(t=t.replace(/[?#]/g,function(e){return encodeURIComponent(e)}))+(n=n.replace("#","%23"))+a};o.prototype.resolve=function(e){return this.resolveObject(P(e,!1,!0)).format()};o.prototype.resolveObject=function(e){if(s.isString(e)){var r=new o;r.parse(e,!1,!0), e=r;}for(var t=new o,a=Object.keys(this),i=0;i<a.length;i++){var n=a[i];t[n]=this[n];}if(t.hash=e.hash, ""===e.href)return t.href=t.format(), t;if(e.slashes&&!e.protocol){for(var l=Object.keys(e),h=0;h<l.length;h++){var c=l[h];"protocol"!==c&&(t[c]=e[c]);}return y[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"), t.href=t.format(), t}if(e.protocol&&e.protocol!==t.protocol){if(!y[e.protocol]){for(var u=Object.keys(e),d=0;d<u.length;d++){var f=u[d];t[f]=e[f];}return t.href=t.format(), t}if(t.protocol=e.protocol, e.host||v[e.protocol])t.pathname=e.pathname;else{for(var p=(e.pathname||"").split("/");p.length&&!(e.host=p.shift()););e.host||(e.host=""), e.hostname||(e.hostname=""), ""!==p[0]&&p.unshift(""), p.length<2&&p.unshift(""), t.pathname=p.join("/");}if(t.search=e.search, t.query=e.query, t.host=e.host||"", t.auth=e.auth, t.hostname=e.hostname||e.host, t.port=e.port, t.pathname||t.search){t.path=(t.pathname||"")+(t.search||"");}return t.slashes=t.slashes||e.slashes, t.href=t.format(), t}var m=t.pathname&&"/"===t.pathname.charAt(0),g=e.host||e.pathname&&"/"===e.pathname.charAt(0),P=g||m||t.host&&e.pathname,E=P,w=t.pathname&&t.pathname.split("/")||[],b=(p=e.pathname&&e.pathname.split("/")||[], t.protocol&&!y[t.protocol]);if(b&&(t.hostname="", t.port=null, t.host&&(""===w[0]?w[0]=t.host:w.unshift(t.host)), t.host="", e.protocol&&(e.hostname=null, e.port=null, e.host&&(""===p[0]?p[0]=e.host:p.unshift(e.host)), e.host=null), P=P&&(""===p[0]||""===w[0])), g)t.host=e.host||""===e.host?e.host:t.host, t.hostname=e.hostname||""===e.hostname?e.hostname:t.hostname, t.search=e.search, t.query=e.query, w=p;else if(p.length)w||(w=[]), w.pop(), w=w.concat(p), t.search=e.search, t.query=e.query;else if(!s.isNullOrUndefined(e.search)){if(b){t.hostname=t.host=w.shift();(R=!!(t.host&&t.host.indexOf("@")>0)&&t.host.split("@"))&&(t.auth=R.shift(), t.host=t.hostname=R.shift());}return t.search=e.search, t.query=e.query, s.isNull(t.pathname)&&s.isNull(t.search)||(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")), t.href=t.format(), t}if(!w.length)return t.pathname=null, t.path=t.search?"/"+t.search:null, t.href=t.format(), t;for(var S=w.slice(-1)[0],_=(t.host||e.host||w.length>1)&&("."===S||".."===S)||""===S,$=0,x=w.length;x>=0;x--)"."===(S=w[x])?w.splice(x,1):".."===S?(w.splice(x,1), $++):$&&(w.splice(x,1), $--);if(!P&&!E)for(;$--;$)w.unshift("..");!P||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""), _&&"/"!==w.join("/").substr(-1)&&w.push("");var F=""===w[0]||w[0]&&"/"===w[0].charAt(0);if(b){t.hostname=t.host=F?"":w.length?w.shift():"";var R;(R=!!(t.host&&t.host.indexOf("@")>0)&&t.host.split("@"))&&(t.auth=R.shift(), t.host=t.hostname=R.shift());}return(P=P||t.host&&w.length)&&!F&&w.unshift(""), w.length?t.pathname=w.join("/"):(t.pathname=null, t.path=null), s.isNull(t.pathname)&&s.isNull(t.search)||(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")), t.auth=e.auth||t.auth, t.slashes=t.slashes||e.slashes, t.href=t.format(), t}, o.prototype.parseHost=function(){var e=this.host,r=n.exec(e);r&&(":"!==(r=r[0])&&(this.port=r.substr(1)), e=e.substr(0,e.length-r.length)), e&&(this.hostname=e);};},{"./util":49,punycode:44,querystring:47}],49:[function(e,r,t){r.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}};},{}],ajv:[function(e,r,t){var a=e("./compile"),s=e("./compile/resolve"),o=e("./cache"),i=e("./compile/schema_obj"),n=e("fast-json-stable-stringify"),l=e("./compile/formats"),h=e("./compile/rules"),c=e("./data"),u=e("./compile/util");r.exports=y, y.prototype.validate=function(e,r){var t;if("string"==typeof e){if(!(t=this.getSchema(e)))throw new Error('no schema with key or ref "'+e+'"')}else{var a=this._addSchema(e);t=a.validate||this._compile(a);}var s=t(r);!0!==t.$async&&(this.errors=t.errors);return s}, y.prototype.compile=function(e,r){var t=this._addSchema(e,void 0,r);return t.validate||this._compile(t)}, y.prototype.addSchema=function(e,r,t,a){if(Array.isArray(e)){for(var o=0;o<e.length;o++)this.addSchema(e[o],void 0,t,a);return this}var i=this._getId(e);if(void 0!==i&&"string"!=typeof i)throw new Error("schema id must be string");return S(this,r=s.normalizeId(r||i)), this._schemas[r]=this._addSchema(e,t,a,!0), this}, y.prototype.addMetaSchema=function(e,r,t){return this.addSchema(e,r,t,!0), this}, y.prototype.validateSchema=function(e,r){var t=e.$schema;if(void 0!==t&&"string"!=typeof t)throw new Error("$schema must be a string");if(!(t=t||this._opts.defaultMeta||function(e){var r=e._opts.meta;return e._opts.defaultMeta="object"==typeof r?e._getId(r)||r:e.getSchema(p)?p:void 0, e._opts.defaultMeta}(this)))return this.logger.warn("meta-schema not available"), this.errors=null, !0;var a=this._formats.uri;this._formats.uri="function"==typeof a?this._schemaUriFormatFunc:this._schemaUriFormat;var s;try{s=this.validate(t,e);}finally{this._formats.uri=a;}if(!s&&r){var o="schema is invalid: "+this.errorsText();if("log"!=this._opts.validateSchema)throw new Error(o);this.logger.error(o);}return s}, y.prototype.getSchema=function(e){var r=g(this,e);switch(typeof r){case"object":return r.validate||this._compile(r);case"string":return this.getSchema(r);case"undefined":return function(e,r){var t=s.schema.call(e,{schema:{}},r);if(t){var o=t.schema,n=t.root,l=t.baseId,h=a.call(e,o,n,void 0,l);return e._fragments[r]=new i({ref:r,fragment:!0,schema:o,root:n,baseId:l,validate:h}), h}}(this,e)}}, y.prototype.removeSchema=function(e){if(e instanceof RegExp)return P(this,this._schemas,e), P(this,this._refs,e), this;switch(typeof e){case"undefined":return P(this,this._schemas), P(this,this._refs), this._cache.clear(), this;case"string":var r=g(this,e);return r&&this._cache.del(r.cacheKey), delete this._schemas[e], delete this._refs[e], this;case"object":var t=this._opts.serialize,a=t?t(e):e;this._cache.del(a);var o=this._getId(e);o&&(o=s.normalizeId(o), delete this._schemas[o], delete this._refs[o]);}return this}, y.prototype.addFormat=function(e,r){"string"==typeof r&&(r=new RegExp(r));return this._formats[e]=r, this}, y.prototype.errorsText=function(e,r){if(!(e=e||this.errors))return"No errors";for(var t=void 0===(r=r||{}).separator?", ":r.separator,a=void 0===r.dataVar?"data":r.dataVar,s="",o=0;o<e.length;o++){var i=e[o];i&&(s+=a+i.dataPath+" "+i.message+t);}return s.slice(0,-t.length)}, y.prototype._addSchema=function(e,r,t,a){if("object"!=typeof e&&"boolean"!=typeof e)throw new Error("schema should be object or boolean");var o=this._opts.serialize,n=o?o(e):e,l=this._cache.get(n);if(l)return l;a=a||!1!==this._opts.addUsedSchema;var h=s.normalizeId(this._getId(e));h&&a&&S(this,h);var c,u=!1!==this._opts.validateSchema&&!r;u&&!(c=h&&h==s.normalizeId(e.$schema))&&this.validateSchema(e,!0);var d=s.ids.call(this,e),f=new i({id:h,schema:e,localRefs:d,cacheKey:n,meta:t});"#"!=h[0]&&a&&(this._refs[h]=f);this._cache.put(n,f), u&&c&&this.validateSchema(e,!0);return f}, y.prototype._compile=function(e,r){if(e.compiling)return e.validate=o, o.schema=e.schema, o.errors=null, o.root=r||o, !0===e.schema.$async&&(o.$async=!0), o;e.compiling=!0;var t;e.meta&&(t=this._opts, this._opts=this._metaOpts);var s;try{s=a.call(this,e.schema,r,e.localRefs);}finally{e.compiling=!1, e.meta&&(this._opts=t);}return e.validate=s, e.refs=s.refs, e.refVal=s.refVal, e.root=s.root, s;function o(){var r=e.validate,t=r.apply(null,arguments);return o.errors=r.errors, t}}, y.prototype.compileAsync=e("./compile/async");var d=e("./keyword");y.prototype.addKeyword=d.add, y.prototype.getKeyword=d.get, y.prototype.removeKeyword=d.remove;var f=e("./compile/error_classes");y.ValidationError=f.Validation, y.MissingRefError=f.MissingRef, y.$dataMetaSchema=c;var p="http://json-schema.org/draft-07/schema",m=["removeAdditional","useDefaults","coerceTypes"],v=["/properties"];function y(r){if(!(this instanceof y))return new y(r);r=this._opts=u.copy(r)||{}, function(e){var r=e._opts.logger;if(!1===r)e.logger={log:_,warn:_,error:_};else{if(void 0===r&&(r=console), !("object"==typeof r&&r.log&&r.warn&&r.error))throw new Error("logger must implement log, warn and error methods");e.logger=r;}}(this), this._schemas={}, this._refs={}, this._fragments={}, this._formats=l(r.format);var t=this._schemaUriFormat=this._formats["uri-reference"];this._schemaUriFormatFunc=function(e){return t.test(e)}, this._cache=r.cache||new o, this._loadingSchemas={}, this._compilations=[], this.RULES=h(), this._getId=function(e){switch(e.schemaId){case"auto":return b;case"id":return E;default:return w}}(r), r.loopRequired=r.loopRequired||1/0, "property"==r.errorDataPath&&(r._errorDataPathProperty=!0), void 0===r.serialize&&(r.serialize=n), this._metaOpts=function(e){for(var r=u.copy(e._opts),t=0;t<m.length;t++)delete r[m[t]];return r}(this), r.formats&&function(e){for(var r in e._opts.formats){var t=e._opts.formats[r];e.addFormat(r,t);}}(this), function(r){var t;r._opts.$data&&(t=e("./refs/data.json"), r.addMetaSchema(t,t.$id,!0));if(!1===r._opts.meta)return;var a=e("./refs/json-schema-draft-07.json");r._opts.$data&&(a=c(a,v));r.addMetaSchema(a,p,!0), r._refs["http://json-schema.org/schema"]=p;}(this), "object"==typeof r.meta&&this.addMetaSchema(r.meta), function(e){var r=e._opts.schemas;if(!r)return;if(Array.isArray(r))e.addSchema(r);else for(var t in r)e.addSchema(r[t],t);}(this);}function g(e,r){return r=s.normalizeId(r), e._schemas[r]||e._refs[r]||e._fragments[r]}function P(e,r,t){for(var a in r){var s=r[a];s.meta||t&&!t.test(a)||(e._cache.del(s.cacheKey), delete r[a]);}}function E(e){return e.$id&&this.logger.warn("schema $id ignored",e.$id), e.id}function w(e){return e.id&&this.logger.warn("schema id ignored",e.id), e.$id}function b(e){if(e.$id&&e.id&&e.$id!=e.id)throw new Error("schema $id is different from id");return e.$id||e.id}function S(e,r){if(e._schemas[r]||e._refs[r])throw new Error('schema with key or id "'+r+'" already exists')}function _(){}},{"./cache":1,"./compile":5,"./compile/async":2,"./compile/error_classes":3,"./compile/formats":4,"./compile/resolve":6,"./compile/rules":7,"./compile/schema_obj":8,"./compile/util":10,"./data":11,"./keyword":38,"./refs/data.json":39,"./refs/json-schema-draft-07.json":40,"fast-json-stable-stringify":42}]},{},[])("ajv")});

});

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        }
        else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function mod(n, x) {
    return ((n % x) + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, tmpLocale, parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100, h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
        case 'year': output = monthDiff(this, that) / 12; break;
        case 'month': output = monthDiff(this, that); break;
        case 'quarter': output = monthDiff(this, that) / 3; break;
        case 'second': output = (this - that) / 1e3; break; // 1000
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default: output = this - that;
    }

    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this._d.valueOf()).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function clone$1 () {
    return createDuration(this);
}

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
    return ((x > 0) - (x < 0)) || +x;
}

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.clone          = clone$1;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports

//! moment.js
//! version : 2.20.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

hooks.version = '2.20.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

// currently HTML5 input type only supports 24-hour formats
hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',                             // <input type="date" />
    TIME: 'HH:mm',                                  // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
    WEEK: 'YYYY-[W]WW',                             // <input type="week" />
    MONTH: 'YYYY-MM'                                // <input type="month" />
};




var moment$1 = Object.freeze({
	default: hooks
});

class FormPage {
    componentWillLoad() {
        this.ajv = new ajv_min({ allErrors: true });
        this.schema = {
            "type": "object",
            "required": ["startDate", "endDate", "min", "max", "checked", "sources", "dateValue"],
            "properties": {
                "checked": {
                    "$id": "data/properties/checked",
                    "type": "boolean",
                    "title": "The Checked Schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": false,
                    "examples": [
                        false
                    ]
                },
                "date": {
                    "$id": "data/properties/date",
                    "title": "Date",
                    "type": "object",
                    "format": "date",
                    "dateValue": {
                        "$id": "data/properties/date/dateValue",
                        "type": "string",
                        "title": "Date"
                    }
                },
                "duration": {
                    "$id": "data/properties/duration",
                    "type": "object",
                    "properties": {
                        "min": {
                            "$id": "data/properties/duration/properties/min",
                            "type": "integer",
                            "title": "The Min Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                5
                            ]
                        },
                        "max": {
                            "$id": "data/properties/duration/properties/max",
                            "type": "integer",
                            "title": "The Max Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                10
                            ]
                        }
                    }
                },
                "startDate": {
                    "$id": "data/properties/startDate",
                    "type": "string",
                    "title": "The Startdate Schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "2007-08-31T16:47+00:00"
                    ]
                },
                "endDate": {
                    "$id": "data/properties/endDate",
                    "type": "string",
                    "title": "The Enddate Schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "2007-08-31T16:47+00:00"
                    ]
                },
                "sources": {
                    "$id": "data/properties/sources",
                    "type": "array",
                    "items": {
                        "$id": "/properties/sources/items",
                        "type": "string",
                        "title": "The 0 Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "source1"
                        ]
                    }
                }
            }
        };
        this.form = {
            "checked": false,
            "date": {
                "dateValue": hooks(new Date()).format('Do MMMM YYYY')
            },
            "duration": {
                "min": 5,
                "max": 10
            },
            "startDate": "2007-08-31T16:47+00:00",
            "endDate": "2007-08-31T16:47+00:00",
            "sources": [
                "source1",
                "source2"
            ]
        };
    }
    ;
    render() {
        return (h("my-dynamic-form", { schema: this.schema, form: this.form, ajv: this.ajv },
            h("my-input", { for: "integer" }),
            h("my-input", { for: "string" }),
            h("my-input", { for: "object" }),
            h("my-dropdown", { for: "array" }),
            h("my-checkbox", { for: "boolean" })));
    }
    static get is() { return "form-page"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "ajv": { "state": true }, "form": { "state": true }, "schema": { "state": true } }; }
}

class MyCheckbox {
    constructor() {
        this.currentValue = false;
    }
    /**
     * Changing value of 'checked' attribute
     * @param event
     */
    checkWatcher() {
        this.currentValue ? this.currentValue = false : this.currentValue = true;
        this.postValue.emit(this.element);
    }
    ;
    render() {
        const parsedValue = this.value ? this.value : false;
        return (h("div", { class: "form-check" },
            h("label", { class: "form-check-label" },
                this.title,
                h("br", null),
                h("input", { class: "form-check-input", id: this.id, value: `${this.currentValue}` || `${parsedValue}`, type: "checkbox", onClick: () => { this.checkWatcher(); } }),
                h("br", null),
                h("br", null))));
    }
    static get is() { return "my-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "currentValue": { "state": true }, "element": { "elementRef": true }, "for": { "type": String, "attr": "for" }, "id": { "type": String, "attr": "id" }, "title": { "type": String, "attr": "title" }, "value": { "type": Boolean, "attr": "value" } }; }
    static get events() { return [{ "name": "postValue", "method": "postValue", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "[data-my-checkbox]:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n*[data-my-checkbox], *[data-my-checkbox]::before, *[data-my-checkbox]::after {\n  box-sizing: border-box;\n}\n\nhtml[data-my-checkbox] {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\@-ms-viewport {\n  width: device-width;\n}\n\narticle[data-my-checkbox], aside[data-my-checkbox], dialog[data-my-checkbox], figcaption[data-my-checkbox], figure[data-my-checkbox], footer[data-my-checkbox], header[data-my-checkbox], hgroup[data-my-checkbox], main[data-my-checkbox], nav[data-my-checkbox], section[data-my-checkbox] {\n  display: block;\n}\n\nbody[data-my-checkbox] {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"][data-my-checkbox]:focus {\n  outline: 0 !important;\n}\n\nhr[data-my-checkbox] {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1[data-my-checkbox], h2[data-my-checkbox], h3[data-my-checkbox], h4[data-my-checkbox], h5[data-my-checkbox], h6[data-my-checkbox] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np[data-my-checkbox] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title][data-my-checkbox], abbr[data-original-title][data-my-checkbox] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\n\naddress[data-my-checkbox] {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol[data-my-checkbox], ul[data-my-checkbox], dl[data-my-checkbox] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol[data-my-checkbox]   ol[data-my-checkbox], ul[data-my-checkbox]   ul[data-my-checkbox], ol[data-my-checkbox]   ul[data-my-checkbox], ul[data-my-checkbox]   ol[data-my-checkbox] {\n  margin-bottom: 0;\n}\n\ndt[data-my-checkbox] {\n  font-weight: 700;\n}\n\ndd[data-my-checkbox] {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote[data-my-checkbox] {\n  margin: 0 0 1rem;\n}\n\ndfn[data-my-checkbox] {\n  font-style: italic;\n}\n\nb[data-my-checkbox], strong[data-my-checkbox] {\n  font-weight: bolder;\n}\n\nsmall[data-my-checkbox] {\n  font-size: 80%;\n}\n\nsub[data-my-checkbox], sup[data-my-checkbox] {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub[data-my-checkbox] {\n  bottom: -.25em;\n}\n\nsup[data-my-checkbox] {\n  top: -.5em;\n}\n\na[data-my-checkbox] {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na[data-my-checkbox]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na[data-my-checkbox]:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na[data-my-checkbox]:not([href]):not([tabindex]):hover, a[data-my-checkbox]:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\na[data-my-checkbox]:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\n\npre[data-my-checkbox], code[data-my-checkbox], kbd[data-my-checkbox], samp[data-my-checkbox] {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\npre[data-my-checkbox] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure[data-my-checkbox] {\n  margin: 0 0 1rem;\n}\n\nimg[data-my-checkbox] {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg[data-my-checkbox]:not(:root) {\n  overflow: hidden;\n}\n\ntable[data-my-checkbox] {\n  border-collapse: collapse;\n}\n\ncaption[data-my-checkbox] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth[data-my-checkbox] {\n  text-align: inherit;\n}\n\nlabel[data-my-checkbox] {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\n\nbutton[data-my-checkbox] {\n  border-radius: 0;\n}\n\nbutton[data-my-checkbox]:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput[data-my-checkbox], button[data-my-checkbox], select[data-my-checkbox], optgroup[data-my-checkbox], textarea[data-my-checkbox] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton[data-my-checkbox], input[data-my-checkbox] {\n  overflow: visible;\n}\n\nbutton[data-my-checkbox], select[data-my-checkbox] {\n  text-transform: none;\n}\n\nbutton[data-my-checkbox], html[data-my-checkbox]   [type=\"button\"][data-my-checkbox], [type=\"reset\"][data-my-checkbox], [type=\"submit\"][data-my-checkbox] {\n  -webkit-appearance: button;\n}\n\nbutton[data-my-checkbox]::-moz-focus-inner, [type=\"button\"][data-my-checkbox]::-moz-focus-inner, [type=\"reset\"][data-my-checkbox]::-moz-focus-inner, [type=\"submit\"][data-my-checkbox]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=\"radio\"][data-my-checkbox], input[type=\"checkbox\"][data-my-checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"date\"][data-my-checkbox], input[type=\"time\"][data-my-checkbox], input[type=\"datetime-local\"][data-my-checkbox], input[type=\"month\"][data-my-checkbox] {\n  -webkit-appearance: listbox;\n}\n\ntextarea[data-my-checkbox] {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset[data-my-checkbox] {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend[data-my-checkbox] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress[data-my-checkbox] {\n  vertical-align: baseline;\n}\n\n[type=\"number\"][data-my-checkbox]::-webkit-inner-spin-button, [type=\"number\"][data-my-checkbox]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][data-my-checkbox] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type=\"search\"][data-my-checkbox]::-webkit-search-cancel-button, [type=\"search\"][data-my-checkbox]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[data-my-checkbox]::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput[data-my-checkbox] {\n  display: inline-block;\n}\n\nsummary[data-my-checkbox] {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate[data-my-checkbox] {\n  display: none;\n}\n\n[hidden][data-my-checkbox] {\n  display: none !important;\n}\n\nh1[data-my-checkbox], h2[data-my-checkbox], h3[data-my-checkbox], h4[data-my-checkbox], h5[data-my-checkbox], h6[data-my-checkbox], .h1[data-my-checkbox], .h2[data-my-checkbox], .h3[data-my-checkbox], .h4[data-my-checkbox], .h5[data-my-checkbox], .h6[data-my-checkbox] {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit;\n}\n\nh1[data-my-checkbox], .h1[data-my-checkbox] {\n  font-size: 2.5rem;\n}\n\nh2[data-my-checkbox], .h2[data-my-checkbox] {\n  font-size: 2rem;\n}\n\nh3[data-my-checkbox], .h3[data-my-checkbox] {\n  font-size: 1.75rem;\n}\n\nh4[data-my-checkbox], .h4[data-my-checkbox] {\n  font-size: 1.5rem;\n}\n\nh5[data-my-checkbox], .h5[data-my-checkbox] {\n  font-size: 1.25rem;\n}\n\nh6[data-my-checkbox], .h6[data-my-checkbox] {\n  font-size: 1rem;\n}\n\n.lead[data-my-checkbox] {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1[data-my-checkbox] {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-2[data-my-checkbox] {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-3[data-my-checkbox] {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-4[data-my-checkbox] {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nhr[data-my-checkbox] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall[data-my-checkbox], .small[data-my-checkbox] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\nmark[data-my-checkbox], .mark[data-my-checkbox] {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled[data-my-checkbox] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline[data-my-checkbox] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item[data-my-checkbox] {\n  display: inline-block;\n}\n\n.list-inline-item[data-my-checkbox]:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism[data-my-checkbox] {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote[data-my-checkbox] {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n\n.blockquote-footer[data-my-checkbox] {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n\n.blockquote-footer[data-my-checkbox]::before {\n  content: \"\\2014 \\00A0\";\n}\n\n.img-fluid[data-my-checkbox] {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail[data-my-checkbox] {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure[data-my-checkbox] {\n  display: inline-block;\n}\n\n.figure-img[data-my-checkbox] {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption[data-my-checkbox] {\n  font-size: 90%;\n  color: #6c757d;\n}\n\ncode[data-my-checkbox], kbd[data-my-checkbox], pre[data-my-checkbox], samp[data-my-checkbox] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\ncode[data-my-checkbox] {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word;\n}\n\na[data-my-checkbox]    > code[data-my-checkbox] {\n  color: inherit;\n}\n\nkbd[data-my-checkbox] {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\n\nkbd[data-my-checkbox]   kbd[data-my-checkbox] {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\n\npre[data-my-checkbox] {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\n\npre[data-my-checkbox]   code[data-my-checkbox] {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable[data-my-checkbox] {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container[data-my-checkbox] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n\@media (min-width: 576px) {\n  .container[data-my-checkbox] {\n    max-width: 540px;\n  }\n}\n\n\@media (min-width: 768px) {\n  .container[data-my-checkbox] {\n    max-width: 720px;\n  }\n}\n\n\@media (min-width: 992px) {\n  .container[data-my-checkbox] {\n    max-width: 960px;\n  }\n}\n\n\@media (min-width: 1200px) {\n  .container[data-my-checkbox] {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid[data-my-checkbox] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.row[data-my-checkbox] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters[data-my-checkbox] {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters[data-my-checkbox]    > .col[data-my-checkbox], .no-gutters[data-my-checkbox]    > [class*=\"col-\"][data-my-checkbox] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1[data-my-checkbox], .col-2[data-my-checkbox], .col-3[data-my-checkbox], .col-4[data-my-checkbox], .col-5[data-my-checkbox], .col-6[data-my-checkbox], .col-7[data-my-checkbox], .col-8[data-my-checkbox], .col-9[data-my-checkbox], .col-10[data-my-checkbox], .col-11[data-my-checkbox], .col-12[data-my-checkbox], .col[data-my-checkbox], .col-auto[data-my-checkbox], .col-sm-1[data-my-checkbox], .col-sm-2[data-my-checkbox], .col-sm-3[data-my-checkbox], .col-sm-4[data-my-checkbox], .col-sm-5[data-my-checkbox], .col-sm-6[data-my-checkbox], .col-sm-7[data-my-checkbox], .col-sm-8[data-my-checkbox], .col-sm-9[data-my-checkbox], .col-sm-10[data-my-checkbox], .col-sm-11[data-my-checkbox], .col-sm-12[data-my-checkbox], .col-sm[data-my-checkbox], .col-sm-auto[data-my-checkbox], .col-md-1[data-my-checkbox], .col-md-2[data-my-checkbox], .col-md-3[data-my-checkbox], .col-md-4[data-my-checkbox], .col-md-5[data-my-checkbox], .col-md-6[data-my-checkbox], .col-md-7[data-my-checkbox], .col-md-8[data-my-checkbox], .col-md-9[data-my-checkbox], .col-md-10[data-my-checkbox], .col-md-11[data-my-checkbox], .col-md-12[data-my-checkbox], .col-md[data-my-checkbox], .col-md-auto[data-my-checkbox], .col-lg-1[data-my-checkbox], .col-lg-2[data-my-checkbox], .col-lg-3[data-my-checkbox], .col-lg-4[data-my-checkbox], .col-lg-5[data-my-checkbox], .col-lg-6[data-my-checkbox], .col-lg-7[data-my-checkbox], .col-lg-8[data-my-checkbox], .col-lg-9[data-my-checkbox], .col-lg-10[data-my-checkbox], .col-lg-11[data-my-checkbox], .col-lg-12[data-my-checkbox], .col-lg[data-my-checkbox], .col-lg-auto[data-my-checkbox], .col-xl-1[data-my-checkbox], .col-xl-2[data-my-checkbox], .col-xl-3[data-my-checkbox], .col-xl-4[data-my-checkbox], .col-xl-5[data-my-checkbox], .col-xl-6[data-my-checkbox], .col-xl-7[data-my-checkbox], .col-xl-8[data-my-checkbox], .col-xl-9[data-my-checkbox], .col-xl-10[data-my-checkbox], .col-xl-11[data-my-checkbox], .col-xl-12[data-my-checkbox], .col-xl[data-my-checkbox], .col-xl-auto[data-my-checkbox] {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col[data-my-checkbox] {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto[data-my-checkbox] {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1[data-my-checkbox] {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%;\n}\n\n.col-2[data-my-checkbox] {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%;\n}\n\n.col-3[data-my-checkbox] {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4[data-my-checkbox] {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%;\n}\n\n.col-5[data-my-checkbox] {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%;\n}\n\n.col-6[data-my-checkbox] {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7[data-my-checkbox] {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%;\n}\n\n.col-8[data-my-checkbox] {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%;\n}\n\n.col-9[data-my-checkbox] {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10[data-my-checkbox] {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%;\n}\n\n.col-11[data-my-checkbox] {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%;\n}\n\n.col-12[data-my-checkbox] {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first[data-my-checkbox] {\n  order: -1;\n}\n\n.order-last[data-my-checkbox] {\n  order: 13;\n}\n\n.order-0[data-my-checkbox] {\n  order: 0;\n}\n\n.order-1[data-my-checkbox] {\n  order: 1;\n}\n\n.order-2[data-my-checkbox] {\n  order: 2;\n}\n\n.order-3[data-my-checkbox] {\n  order: 3;\n}\n\n.order-4[data-my-checkbox] {\n  order: 4;\n}\n\n.order-5[data-my-checkbox] {\n  order: 5;\n}\n\n.order-6[data-my-checkbox] {\n  order: 6;\n}\n\n.order-7[data-my-checkbox] {\n  order: 7;\n}\n\n.order-8[data-my-checkbox] {\n  order: 8;\n}\n\n.order-9[data-my-checkbox] {\n  order: 9;\n}\n\n.order-10[data-my-checkbox] {\n  order: 10;\n}\n\n.order-11[data-my-checkbox] {\n  order: 11;\n}\n\n.order-12[data-my-checkbox] {\n  order: 12;\n}\n\n.offset-1[data-my-checkbox] {\n  margin-left: 8.33333%;\n}\n\n.offset-2[data-my-checkbox] {\n  margin-left: 16.66667%;\n}\n\n.offset-3[data-my-checkbox] {\n  margin-left: 25%;\n}\n\n.offset-4[data-my-checkbox] {\n  margin-left: 33.33333%;\n}\n\n.offset-5[data-my-checkbox] {\n  margin-left: 41.66667%;\n}\n\n.offset-6[data-my-checkbox] {\n  margin-left: 50%;\n}\n\n.offset-7[data-my-checkbox] {\n  margin-left: 58.33333%;\n}\n\n.offset-8[data-my-checkbox] {\n  margin-left: 66.66667%;\n}\n\n.offset-9[data-my-checkbox] {\n  margin-left: 75%;\n}\n\n.offset-10[data-my-checkbox] {\n  margin-left: 83.33333%;\n}\n\n.offset-11[data-my-checkbox] {\n  margin-left: 91.66667%;\n}\n\n\@media (min-width: 576px) {\n  .col-sm[data-my-checkbox] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto[data-my-checkbox] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1[data-my-checkbox] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-sm-2[data-my-checkbox] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-sm-3[data-my-checkbox] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4[data-my-checkbox] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-sm-5[data-my-checkbox] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-sm-6[data-my-checkbox] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7[data-my-checkbox] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-sm-8[data-my-checkbox] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-sm-9[data-my-checkbox] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10[data-my-checkbox] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-sm-11[data-my-checkbox] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-sm-12[data-my-checkbox] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first[data-my-checkbox] {\n    order: -1;\n  }\n  .order-sm-last[data-my-checkbox] {\n    order: 13;\n  }\n  .order-sm-0[data-my-checkbox] {\n    order: 0;\n  }\n  .order-sm-1[data-my-checkbox] {\n    order: 1;\n  }\n  .order-sm-2[data-my-checkbox] {\n    order: 2;\n  }\n  .order-sm-3[data-my-checkbox] {\n    order: 3;\n  }\n  .order-sm-4[data-my-checkbox] {\n    order: 4;\n  }\n  .order-sm-5[data-my-checkbox] {\n    order: 5;\n  }\n  .order-sm-6[data-my-checkbox] {\n    order: 6;\n  }\n  .order-sm-7[data-my-checkbox] {\n    order: 7;\n  }\n  .order-sm-8[data-my-checkbox] {\n    order: 8;\n  }\n  .order-sm-9[data-my-checkbox] {\n    order: 9;\n  }\n  .order-sm-10[data-my-checkbox] {\n    order: 10;\n  }\n  .order-sm-11[data-my-checkbox] {\n    order: 11;\n  }\n  .order-sm-12[data-my-checkbox] {\n    order: 12;\n  }\n  .offset-sm-0[data-my-checkbox] {\n    margin-left: 0;\n  }\n  .offset-sm-1[data-my-checkbox] {\n    margin-left: 8.33333%;\n  }\n  .offset-sm-2[data-my-checkbox] {\n    margin-left: 16.66667%;\n  }\n  .offset-sm-3[data-my-checkbox] {\n    margin-left: 25%;\n  }\n  .offset-sm-4[data-my-checkbox] {\n    margin-left: 33.33333%;\n  }\n  .offset-sm-5[data-my-checkbox] {\n    margin-left: 41.66667%;\n  }\n  .offset-sm-6[data-my-checkbox] {\n    margin-left: 50%;\n  }\n  .offset-sm-7[data-my-checkbox] {\n    margin-left: 58.33333%;\n  }\n  .offset-sm-8[data-my-checkbox] {\n    margin-left: 66.66667%;\n  }\n  .offset-sm-9[data-my-checkbox] {\n    margin-left: 75%;\n  }\n  .offset-sm-10[data-my-checkbox] {\n    margin-left: 83.33333%;\n  }\n  .offset-sm-11[data-my-checkbox] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 768px) {\n  .col-md[data-my-checkbox] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto[data-my-checkbox] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1[data-my-checkbox] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-md-2[data-my-checkbox] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-md-3[data-my-checkbox] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4[data-my-checkbox] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-md-5[data-my-checkbox] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-md-6[data-my-checkbox] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7[data-my-checkbox] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-md-8[data-my-checkbox] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-md-9[data-my-checkbox] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10[data-my-checkbox] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-md-11[data-my-checkbox] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-md-12[data-my-checkbox] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first[data-my-checkbox] {\n    order: -1;\n  }\n  .order-md-last[data-my-checkbox] {\n    order: 13;\n  }\n  .order-md-0[data-my-checkbox] {\n    order: 0;\n  }\n  .order-md-1[data-my-checkbox] {\n    order: 1;\n  }\n  .order-md-2[data-my-checkbox] {\n    order: 2;\n  }\n  .order-md-3[data-my-checkbox] {\n    order: 3;\n  }\n  .order-md-4[data-my-checkbox] {\n    order: 4;\n  }\n  .order-md-5[data-my-checkbox] {\n    order: 5;\n  }\n  .order-md-6[data-my-checkbox] {\n    order: 6;\n  }\n  .order-md-7[data-my-checkbox] {\n    order: 7;\n  }\n  .order-md-8[data-my-checkbox] {\n    order: 8;\n  }\n  .order-md-9[data-my-checkbox] {\n    order: 9;\n  }\n  .order-md-10[data-my-checkbox] {\n    order: 10;\n  }\n  .order-md-11[data-my-checkbox] {\n    order: 11;\n  }\n  .order-md-12[data-my-checkbox] {\n    order: 12;\n  }\n  .offset-md-0[data-my-checkbox] {\n    margin-left: 0;\n  }\n  .offset-md-1[data-my-checkbox] {\n    margin-left: 8.33333%;\n  }\n  .offset-md-2[data-my-checkbox] {\n    margin-left: 16.66667%;\n  }\n  .offset-md-3[data-my-checkbox] {\n    margin-left: 25%;\n  }\n  .offset-md-4[data-my-checkbox] {\n    margin-left: 33.33333%;\n  }\n  .offset-md-5[data-my-checkbox] {\n    margin-left: 41.66667%;\n  }\n  .offset-md-6[data-my-checkbox] {\n    margin-left: 50%;\n  }\n  .offset-md-7[data-my-checkbox] {\n    margin-left: 58.33333%;\n  }\n  .offset-md-8[data-my-checkbox] {\n    margin-left: 66.66667%;\n  }\n  .offset-md-9[data-my-checkbox] {\n    margin-left: 75%;\n  }\n  .offset-md-10[data-my-checkbox] {\n    margin-left: 83.33333%;\n  }\n  .offset-md-11[data-my-checkbox] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 992px) {\n  .col-lg[data-my-checkbox] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto[data-my-checkbox] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1[data-my-checkbox] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-lg-2[data-my-checkbox] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-lg-3[data-my-checkbox] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4[data-my-checkbox] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-lg-5[data-my-checkbox] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-lg-6[data-my-checkbox] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7[data-my-checkbox] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-lg-8[data-my-checkbox] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-lg-9[data-my-checkbox] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10[data-my-checkbox] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-lg-11[data-my-checkbox] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-lg-12[data-my-checkbox] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first[data-my-checkbox] {\n    order: -1;\n  }\n  .order-lg-last[data-my-checkbox] {\n    order: 13;\n  }\n  .order-lg-0[data-my-checkbox] {\n    order: 0;\n  }\n  .order-lg-1[data-my-checkbox] {\n    order: 1;\n  }\n  .order-lg-2[data-my-checkbox] {\n    order: 2;\n  }\n  .order-lg-3[data-my-checkbox] {\n    order: 3;\n  }\n  .order-lg-4[data-my-checkbox] {\n    order: 4;\n  }\n  .order-lg-5[data-my-checkbox] {\n    order: 5;\n  }\n  .order-lg-6[data-my-checkbox] {\n    order: 6;\n  }\n  .order-lg-7[data-my-checkbox] {\n    order: 7;\n  }\n  .order-lg-8[data-my-checkbox] {\n    order: 8;\n  }\n  .order-lg-9[data-my-checkbox] {\n    order: 9;\n  }\n  .order-lg-10[data-my-checkbox] {\n    order: 10;\n  }\n  .order-lg-11[data-my-checkbox] {\n    order: 11;\n  }\n  .order-lg-12[data-my-checkbox] {\n    order: 12;\n  }\n  .offset-lg-0[data-my-checkbox] {\n    margin-left: 0;\n  }\n  .offset-lg-1[data-my-checkbox] {\n    margin-left: 8.33333%;\n  }\n  .offset-lg-2[data-my-checkbox] {\n    margin-left: 16.66667%;\n  }\n  .offset-lg-3[data-my-checkbox] {\n    margin-left: 25%;\n  }\n  .offset-lg-4[data-my-checkbox] {\n    margin-left: 33.33333%;\n  }\n  .offset-lg-5[data-my-checkbox] {\n    margin-left: 41.66667%;\n  }\n  .offset-lg-6[data-my-checkbox] {\n    margin-left: 50%;\n  }\n  .offset-lg-7[data-my-checkbox] {\n    margin-left: 58.33333%;\n  }\n  .offset-lg-8[data-my-checkbox] {\n    margin-left: 66.66667%;\n  }\n  .offset-lg-9[data-my-checkbox] {\n    margin-left: 75%;\n  }\n  .offset-lg-10[data-my-checkbox] {\n    margin-left: 83.33333%;\n  }\n  .offset-lg-11[data-my-checkbox] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 1200px) {\n  .col-xl[data-my-checkbox] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xl-auto[data-my-checkbox] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xl-1[data-my-checkbox] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-xl-2[data-my-checkbox] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-xl-3[data-my-checkbox] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4[data-my-checkbox] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-xl-5[data-my-checkbox] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-xl-6[data-my-checkbox] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7[data-my-checkbox] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-xl-8[data-my-checkbox] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-xl-9[data-my-checkbox] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10[data-my-checkbox] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-xl-11[data-my-checkbox] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-xl-12[data-my-checkbox] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first[data-my-checkbox] {\n    order: -1;\n  }\n  .order-xl-last[data-my-checkbox] {\n    order: 13;\n  }\n  .order-xl-0[data-my-checkbox] {\n    order: 0;\n  }\n  .order-xl-1[data-my-checkbox] {\n    order: 1;\n  }\n  .order-xl-2[data-my-checkbox] {\n    order: 2;\n  }\n  .order-xl-3[data-my-checkbox] {\n    order: 3;\n  }\n  .order-xl-4[data-my-checkbox] {\n    order: 4;\n  }\n  .order-xl-5[data-my-checkbox] {\n    order: 5;\n  }\n  .order-xl-6[data-my-checkbox] {\n    order: 6;\n  }\n  .order-xl-7[data-my-checkbox] {\n    order: 7;\n  }\n  .order-xl-8[data-my-checkbox] {\n    order: 8;\n  }\n  .order-xl-9[data-my-checkbox] {\n    order: 9;\n  }\n  .order-xl-10[data-my-checkbox] {\n    order: 10;\n  }\n  .order-xl-11[data-my-checkbox] {\n    order: 11;\n  }\n  .order-xl-12[data-my-checkbox] {\n    order: 12;\n  }\n  .offset-xl-0[data-my-checkbox] {\n    margin-left: 0;\n  }\n  .offset-xl-1[data-my-checkbox] {\n    margin-left: 8.33333%;\n  }\n  .offset-xl-2[data-my-checkbox] {\n    margin-left: 16.66667%;\n  }\n  .offset-xl-3[data-my-checkbox] {\n    margin-left: 25%;\n  }\n  .offset-xl-4[data-my-checkbox] {\n    margin-left: 33.33333%;\n  }\n  .offset-xl-5[data-my-checkbox] {\n    margin-left: 41.66667%;\n  }\n  .offset-xl-6[data-my-checkbox] {\n    margin-left: 50%;\n  }\n  .offset-xl-7[data-my-checkbox] {\n    margin-left: 58.33333%;\n  }\n  .offset-xl-8[data-my-checkbox] {\n    margin-left: 66.66667%;\n  }\n  .offset-xl-9[data-my-checkbox] {\n    margin-left: 75%;\n  }\n  .offset-xl-10[data-my-checkbox] {\n    margin-left: 83.33333%;\n  }\n  .offset-xl-11[data-my-checkbox] {\n    margin-left: 91.66667%;\n  }\n}\n\n.table[data-my-checkbox] {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n\n.table[data-my-checkbox]   th[data-my-checkbox], .table[data-my-checkbox]   td[data-my-checkbox] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table[data-my-checkbox]   thead[data-my-checkbox]   th[data-my-checkbox] {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table[data-my-checkbox]   tbody[data-my-checkbox]    + tbody[data-my-checkbox] {\n  border-top: 2px solid #dee2e6;\n}\n\n.table[data-my-checkbox]   .table[data-my-checkbox] {\n  background-color: #fff;\n}\n\n.table-sm[data-my-checkbox]   th[data-my-checkbox], .table-sm[data-my-checkbox]   td[data-my-checkbox] {\n  padding: 0.3rem;\n}\n\n.table-bordered[data-my-checkbox] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[data-my-checkbox]   th[data-my-checkbox], .table-bordered[data-my-checkbox]   td[data-my-checkbox] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[data-my-checkbox]   thead[data-my-checkbox]   th[data-my-checkbox], .table-bordered[data-my-checkbox]   thead[data-my-checkbox]   td[data-my-checkbox] {\n  border-bottom-width: 2px;\n}\n\n.table-striped[data-my-checkbox]   tbody[data-my-checkbox]   tr[data-my-checkbox]:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover[data-my-checkbox]   tbody[data-my-checkbox]   tr[data-my-checkbox]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-primary[data-my-checkbox], .table-primary[data-my-checkbox]    > th[data-my-checkbox], .table-primary[data-my-checkbox]    > td[data-my-checkbox] {\n  background-color: #b8daff;\n}\n\n.table-hover[data-my-checkbox]   .table-primary[data-my-checkbox]:hover {\n  background-color: #9fcdff;\n}\n\n.table-hover[data-my-checkbox]   .table-primary[data-my-checkbox]:hover    > td[data-my-checkbox], .table-hover[data-my-checkbox]   .table-primary[data-my-checkbox]:hover    > th[data-my-checkbox] {\n  background-color: #9fcdff;\n}\n\n.table-secondary[data-my-checkbox], .table-secondary[data-my-checkbox]    > th[data-my-checkbox], .table-secondary[data-my-checkbox]    > td[data-my-checkbox] {\n  background-color: #d6d8db;\n}\n\n.table-hover[data-my-checkbox]   .table-secondary[data-my-checkbox]:hover {\n  background-color: #c8cbcf;\n}\n\n.table-hover[data-my-checkbox]   .table-secondary[data-my-checkbox]:hover    > td[data-my-checkbox], .table-hover[data-my-checkbox]   .table-secondary[data-my-checkbox]:hover    > th[data-my-checkbox] {\n  background-color: #c8cbcf;\n}\n\n.table-success[data-my-checkbox], .table-success[data-my-checkbox]    > th[data-my-checkbox], .table-success[data-my-checkbox]    > td[data-my-checkbox] {\n  background-color: #c3e6cb;\n}\n\n.table-hover[data-my-checkbox]   .table-success[data-my-checkbox]:hover {\n  background-color: #b1dfbb;\n}\n\n.table-hover[data-my-checkbox]   .table-success[data-my-checkbox]:hover    > td[data-my-checkbox], .table-hover[data-my-checkbox]   .table-success[data-my-checkbox]:hover    > th[data-my-checkbox] {\n  background-color: #b1dfbb;\n}\n\n.table-info[data-my-checkbox], .table-info[data-my-checkbox]    > th[data-my-checkbox], .table-info[data-my-checkbox]    > td[data-my-checkbox] {\n  background-color: #bee5eb;\n}\n\n.table-hover[data-my-checkbox]   .table-info[data-my-checkbox]:hover {\n  background-color: #abdde5;\n}\n\n.table-hover[data-my-checkbox]   .table-info[data-my-checkbox]:hover    > td[data-my-checkbox], .table-hover[data-my-checkbox]   .table-info[data-my-checkbox]:hover    > th[data-my-checkbox] {\n  background-color: #abdde5;\n}\n\n.table-warning[data-my-checkbox], .table-warning[data-my-checkbox]    > th[data-my-checkbox], .table-warning[data-my-checkbox]    > td[data-my-checkbox] {\n  background-color: #ffeeba;\n}\n\n.table-hover[data-my-checkbox]   .table-warning[data-my-checkbox]:hover {\n  background-color: #ffe8a1;\n}\n\n.table-hover[data-my-checkbox]   .table-warning[data-my-checkbox]:hover    > td[data-my-checkbox], .table-hover[data-my-checkbox]   .table-warning[data-my-checkbox]:hover    > th[data-my-checkbox] {\n  background-color: #ffe8a1;\n}\n\n.table-danger[data-my-checkbox], .table-danger[data-my-checkbox]    > th[data-my-checkbox], .table-danger[data-my-checkbox]    > td[data-my-checkbox] {\n  background-color: #f5c6cb;\n}\n\n.table-hover[data-my-checkbox]   .table-danger[data-my-checkbox]:hover {\n  background-color: #f1b0b7;\n}\n\n.table-hover[data-my-checkbox]   .table-danger[data-my-checkbox]:hover    > td[data-my-checkbox], .table-hover[data-my-checkbox]   .table-danger[data-my-checkbox]:hover    > th[data-my-checkbox] {\n  background-color: #f1b0b7;\n}\n\n.table-light[data-my-checkbox], .table-light[data-my-checkbox]    > th[data-my-checkbox], .table-light[data-my-checkbox]    > td[data-my-checkbox] {\n  background-color: #fdfdfe;\n}\n\n.table-hover[data-my-checkbox]   .table-light[data-my-checkbox]:hover {\n  background-color: #ececf6;\n}\n\n.table-hover[data-my-checkbox]   .table-light[data-my-checkbox]:hover    > td[data-my-checkbox], .table-hover[data-my-checkbox]   .table-light[data-my-checkbox]:hover    > th[data-my-checkbox] {\n  background-color: #ececf6;\n}\n\n.table-dark[data-my-checkbox], .table-dark[data-my-checkbox]    > th[data-my-checkbox], .table-dark[data-my-checkbox]    > td[data-my-checkbox] {\n  background-color: #c6c8ca;\n}\n\n.table-hover[data-my-checkbox]   .table-dark[data-my-checkbox]:hover {\n  background-color: #b9bbbe;\n}\n\n.table-hover[data-my-checkbox]   .table-dark[data-my-checkbox]:hover    > td[data-my-checkbox], .table-hover[data-my-checkbox]   .table-dark[data-my-checkbox]:hover    > th[data-my-checkbox] {\n  background-color: #b9bbbe;\n}\n\n.table-active[data-my-checkbox], .table-active[data-my-checkbox]    > th[data-my-checkbox], .table-active[data-my-checkbox]    > td[data-my-checkbox] {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover[data-my-checkbox]   .table-active[data-my-checkbox]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover[data-my-checkbox]   .table-active[data-my-checkbox]:hover    > td[data-my-checkbox], .table-hover[data-my-checkbox]   .table-active[data-my-checkbox]:hover    > th[data-my-checkbox] {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table[data-my-checkbox]   .thead-dark[data-my-checkbox]   th[data-my-checkbox] {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e;\n}\n\n.table[data-my-checkbox]   .thead-light[data-my-checkbox]   th[data-my-checkbox] {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.table-dark[data-my-checkbox] {\n  color: #fff;\n  background-color: #212529;\n}\n\n.table-dark[data-my-checkbox]   th[data-my-checkbox], .table-dark[data-my-checkbox]   td[data-my-checkbox], .table-dark[data-my-checkbox]   thead[data-my-checkbox]   th[data-my-checkbox] {\n  border-color: #32383e;\n}\n\n.table-dark.table-bordered[data-my-checkbox] {\n  border: 0;\n}\n\n.table-dark.table-striped[data-my-checkbox]   tbody[data-my-checkbox]   tr[data-my-checkbox]:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.table-dark.table-hover[data-my-checkbox]   tbody[data-my-checkbox]   tr[data-my-checkbox]:hover {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n\@media (max-width: 575.98px) {\n  .table-responsive-sm[data-my-checkbox] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-sm[data-my-checkbox]    > .table-bordered[data-my-checkbox] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 767.98px) {\n  .table-responsive-md[data-my-checkbox] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-md[data-my-checkbox]    > .table-bordered[data-my-checkbox] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 991.98px) {\n  .table-responsive-lg[data-my-checkbox] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-lg[data-my-checkbox]    > .table-bordered[data-my-checkbox] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 1199.98px) {\n  .table-responsive-xl[data-my-checkbox] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-xl[data-my-checkbox]    > .table-bordered[data-my-checkbox] {\n    border: 0;\n  }\n}\n\n.table-responsive[data-my-checkbox] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.table-responsive[data-my-checkbox]    > .table-bordered[data-my-checkbox] {\n  border: 0;\n}\n\n.form-control[data-my-checkbox] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control[data-my-checkbox]::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control[data-my-checkbox]:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.form-control[data-my-checkbox]::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control[data-my-checkbox]:disabled, .form-control[readonly][data-my-checkbox] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\nselect.form-control[data-my-checkbox]:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n}\n\nselect.form-control[data-my-checkbox]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.form-control-file[data-my-checkbox], .form-control-range[data-my-checkbox] {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label[data-my-checkbox] {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg[data-my-checkbox] {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.col-form-label-sm[data-my-checkbox] {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.form-control-plaintext[data-my-checkbox] {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n\n.form-control-plaintext.form-control-sm[data-my-checkbox], .input-group-sm[data-my-checkbox]    > .form-control-plaintext.form-control[data-my-checkbox], .input-group-sm[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > .form-control-plaintext.input-group-text[data-my-checkbox], .input-group-sm[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > .form-control-plaintext.input-group-text[data-my-checkbox], .input-group-sm[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > .form-control-plaintext.btn[data-my-checkbox], .input-group-sm[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > .form-control-plaintext.btn[data-my-checkbox], .form-control-plaintext.form-control-lg[data-my-checkbox], .input-group-lg[data-my-checkbox]    > .form-control-plaintext.form-control[data-my-checkbox], .input-group-lg[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > .form-control-plaintext.input-group-text[data-my-checkbox], .input-group-lg[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > .form-control-plaintext.input-group-text[data-my-checkbox], .input-group-lg[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > .form-control-plaintext.btn[data-my-checkbox], .input-group-lg[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > .form-control-plaintext.btn[data-my-checkbox] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm[data-my-checkbox], .input-group-sm[data-my-checkbox]    > .form-control[data-my-checkbox], .input-group-sm[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > .input-group-text[data-my-checkbox], .input-group-sm[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > .input-group-text[data-my-checkbox], .input-group-sm[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > .btn[data-my-checkbox], .input-group-sm[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > .btn[data-my-checkbox] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\nselect.form-control-sm[data-my-checkbox]:not([size]):not([multiple]), .input-group-sm[data-my-checkbox]    > select.form-control[data-my-checkbox]:not([size]):not([multiple]), .input-group-sm[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > select.input-group-text[data-my-checkbox]:not([size]):not([multiple]), .input-group-sm[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > select.input-group-text[data-my-checkbox]:not([size]):not([multiple]), .input-group-sm[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > select.btn[data-my-checkbox]:not([size]):not([multiple]), .input-group-sm[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > select.btn[data-my-checkbox]:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px);\n}\n\n.form-control-lg[data-my-checkbox], .input-group-lg[data-my-checkbox]    > .form-control[data-my-checkbox], .input-group-lg[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > .input-group-text[data-my-checkbox], .input-group-lg[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > .input-group-text[data-my-checkbox], .input-group-lg[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > .btn[data-my-checkbox], .input-group-lg[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > .btn[data-my-checkbox] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\nselect.form-control-lg[data-my-checkbox]:not([size]):not([multiple]), .input-group-lg[data-my-checkbox]    > select.form-control[data-my-checkbox]:not([size]):not([multiple]), .input-group-lg[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > select.input-group-text[data-my-checkbox]:not([size]):not([multiple]), .input-group-lg[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > select.input-group-text[data-my-checkbox]:not([size]):not([multiple]), .input-group-lg[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > select.btn[data-my-checkbox]:not([size]):not([multiple]), .input-group-lg[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > select.btn[data-my-checkbox]:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px);\n}\n\n.form-group[data-my-checkbox] {\n  margin-bottom: 1rem;\n}\n\n.form-text[data-my-checkbox] {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row[data-my-checkbox] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n\n.form-row[data-my-checkbox]    > .col[data-my-checkbox], .form-row[data-my-checkbox]    > [class*=\"col-\"][data-my-checkbox] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check[data-my-checkbox] {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input[data-my-checkbox] {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n\n.form-check-input[data-my-checkbox]:disabled    ~ .form-check-label[data-my-checkbox] {\n  color: #6c757d;\n}\n\n.form-check-label[data-my-checkbox] {\n  margin-bottom: 0;\n}\n\n.form-check-inline[data-my-checkbox] {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.form-check-inline[data-my-checkbox]   .form-check-input[data-my-checkbox] {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback[data-my-checkbox] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n\n.valid-tooltip[data-my-checkbox] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: .2rem;\n}\n\n.was-validated[data-my-checkbox]   .form-control[data-my-checkbox]:valid, .form-control.is-valid[data-my-checkbox], .was-validated\n.custom-select[data-my-checkbox]:valid, .custom-select.is-valid[data-my-checkbox] {\n  border-color: #28a745;\n}\n\n.was-validated[data-my-checkbox]   .form-control[data-my-checkbox]:valid:focus, .form-control.is-valid[data-my-checkbox]:focus, .was-validated\n.custom-select[data-my-checkbox]:valid:focus, .custom-select.is-valid[data-my-checkbox]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated[data-my-checkbox]   .form-control[data-my-checkbox]:valid    ~ .valid-feedback[data-my-checkbox], .was-validated[data-my-checkbox]   .form-control[data-my-checkbox]:valid    ~ .valid-tooltip[data-my-checkbox], .form-control.is-valid[data-my-checkbox]    ~ .valid-feedback[data-my-checkbox], .form-control.is-valid[data-my-checkbox]    ~ .valid-tooltip[data-my-checkbox], .was-validated\n.custom-select[data-my-checkbox]:valid    ~ .valid-feedback[data-my-checkbox], .was-validated\n.custom-select[data-my-checkbox]:valid    ~ .valid-tooltip[data-my-checkbox], .custom-select.is-valid[data-my-checkbox]    ~ .valid-feedback[data-my-checkbox], .custom-select.is-valid[data-my-checkbox]    ~ .valid-tooltip[data-my-checkbox] {\n  display: block;\n}\n\n.was-validated[data-my-checkbox]   .form-check-input[data-my-checkbox]:valid    ~ .form-check-label[data-my-checkbox], .form-check-input.is-valid[data-my-checkbox]    ~ .form-check-label[data-my-checkbox] {\n  color: #28a745;\n}\n\n.was-validated[data-my-checkbox]   .form-check-input[data-my-checkbox]:valid    ~ .valid-feedback[data-my-checkbox], .was-validated[data-my-checkbox]   .form-check-input[data-my-checkbox]:valid    ~ .valid-tooltip[data-my-checkbox], .form-check-input.is-valid[data-my-checkbox]    ~ .valid-feedback[data-my-checkbox], .form-check-input.is-valid[data-my-checkbox]    ~ .valid-tooltip[data-my-checkbox] {\n  display: block;\n}\n\n.was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:valid    ~ .custom-control-label[data-my-checkbox], .custom-control-input.is-valid[data-my-checkbox]    ~ .custom-control-label[data-my-checkbox] {\n  color: #28a745;\n}\n\n.was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:valid    ~ .custom-control-label[data-my-checkbox]::before, .custom-control-input.is-valid[data-my-checkbox]    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: #71dd8a;\n}\n\n.was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:valid    ~ .valid-feedback[data-my-checkbox], .was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:valid    ~ .valid-tooltip[data-my-checkbox], .custom-control-input.is-valid[data-my-checkbox]    ~ .valid-feedback[data-my-checkbox], .custom-control-input.is-valid[data-my-checkbox]    ~ .valid-tooltip[data-my-checkbox] {\n  display: block;\n}\n\n.was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:valid:checked    ~ .custom-control-label[data-my-checkbox]::before, .custom-control-input.is-valid[data-my-checkbox]:checked    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: #34ce57;\n}\n\n.was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:valid:focus    ~ .custom-control-label[data-my-checkbox]::before, .custom-control-input.is-valid[data-my-checkbox]:focus    ~ .custom-control-label[data-my-checkbox]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated[data-my-checkbox]   .custom-file-input[data-my-checkbox]:valid    ~ .custom-file-label[data-my-checkbox], .custom-file-input.is-valid[data-my-checkbox]    ~ .custom-file-label[data-my-checkbox] {\n  border-color: #28a745;\n}\n\n.was-validated[data-my-checkbox]   .custom-file-input[data-my-checkbox]:valid    ~ .custom-file-label[data-my-checkbox]::before, .custom-file-input.is-valid[data-my-checkbox]    ~ .custom-file-label[data-my-checkbox]::before {\n  border-color: inherit;\n}\n\n.was-validated[data-my-checkbox]   .custom-file-input[data-my-checkbox]:valid    ~ .valid-feedback[data-my-checkbox], .was-validated[data-my-checkbox]   .custom-file-input[data-my-checkbox]:valid    ~ .valid-tooltip[data-my-checkbox], .custom-file-input.is-valid[data-my-checkbox]    ~ .valid-feedback[data-my-checkbox], .custom-file-input.is-valid[data-my-checkbox]    ~ .valid-tooltip[data-my-checkbox] {\n  display: block;\n}\n\n.was-validated[data-my-checkbox]   .custom-file-input[data-my-checkbox]:valid:focus    ~ .custom-file-label[data-my-checkbox], .custom-file-input.is-valid[data-my-checkbox]:focus    ~ .custom-file-label[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.invalid-feedback[data-my-checkbox] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.invalid-tooltip[data-my-checkbox] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem;\n}\n\n.was-validated[data-my-checkbox]   .form-control[data-my-checkbox]:invalid, .form-control.is-invalid[data-my-checkbox], .was-validated\n.custom-select[data-my-checkbox]:invalid, .custom-select.is-invalid[data-my-checkbox] {\n  border-color: #dc3545;\n}\n\n.was-validated[data-my-checkbox]   .form-control[data-my-checkbox]:invalid:focus, .form-control.is-invalid[data-my-checkbox]:focus, .was-validated\n.custom-select[data-my-checkbox]:invalid:focus, .custom-select.is-invalid[data-my-checkbox]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated[data-my-checkbox]   .form-control[data-my-checkbox]:invalid    ~ .invalid-feedback[data-my-checkbox], .was-validated[data-my-checkbox]   .form-control[data-my-checkbox]:invalid    ~ .invalid-tooltip[data-my-checkbox], .form-control.is-invalid[data-my-checkbox]    ~ .invalid-feedback[data-my-checkbox], .form-control.is-invalid[data-my-checkbox]    ~ .invalid-tooltip[data-my-checkbox], .was-validated\n.custom-select[data-my-checkbox]:invalid    ~ .invalid-feedback[data-my-checkbox], .was-validated\n.custom-select[data-my-checkbox]:invalid    ~ .invalid-tooltip[data-my-checkbox], .custom-select.is-invalid[data-my-checkbox]    ~ .invalid-feedback[data-my-checkbox], .custom-select.is-invalid[data-my-checkbox]    ~ .invalid-tooltip[data-my-checkbox] {\n  display: block;\n}\n\n.was-validated[data-my-checkbox]   .form-check-input[data-my-checkbox]:invalid    ~ .form-check-label[data-my-checkbox], .form-check-input.is-invalid[data-my-checkbox]    ~ .form-check-label[data-my-checkbox] {\n  color: #dc3545;\n}\n\n.was-validated[data-my-checkbox]   .form-check-input[data-my-checkbox]:invalid    ~ .invalid-feedback[data-my-checkbox], .was-validated[data-my-checkbox]   .form-check-input[data-my-checkbox]:invalid    ~ .invalid-tooltip[data-my-checkbox], .form-check-input.is-invalid[data-my-checkbox]    ~ .invalid-feedback[data-my-checkbox], .form-check-input.is-invalid[data-my-checkbox]    ~ .invalid-tooltip[data-my-checkbox] {\n  display: block;\n}\n\n.was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:invalid    ~ .custom-control-label[data-my-checkbox], .custom-control-input.is-invalid[data-my-checkbox]    ~ .custom-control-label[data-my-checkbox] {\n  color: #dc3545;\n}\n\n.was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:invalid    ~ .custom-control-label[data-my-checkbox]::before, .custom-control-input.is-invalid[data-my-checkbox]    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: #efa2a9;\n}\n\n.was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:invalid    ~ .invalid-feedback[data-my-checkbox], .was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:invalid    ~ .invalid-tooltip[data-my-checkbox], .custom-control-input.is-invalid[data-my-checkbox]    ~ .invalid-feedback[data-my-checkbox], .custom-control-input.is-invalid[data-my-checkbox]    ~ .invalid-tooltip[data-my-checkbox] {\n  display: block;\n}\n\n.was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:invalid:checked    ~ .custom-control-label[data-my-checkbox]::before, .custom-control-input.is-invalid[data-my-checkbox]:checked    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: #e4606d;\n}\n\n.was-validated[data-my-checkbox]   .custom-control-input[data-my-checkbox]:invalid:focus    ~ .custom-control-label[data-my-checkbox]::before, .custom-control-input.is-invalid[data-my-checkbox]:focus    ~ .custom-control-label[data-my-checkbox]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated[data-my-checkbox]   .custom-file-input[data-my-checkbox]:invalid    ~ .custom-file-label[data-my-checkbox], .custom-file-input.is-invalid[data-my-checkbox]    ~ .custom-file-label[data-my-checkbox] {\n  border-color: #dc3545;\n}\n\n.was-validated[data-my-checkbox]   .custom-file-input[data-my-checkbox]:invalid    ~ .custom-file-label[data-my-checkbox]::before, .custom-file-input.is-invalid[data-my-checkbox]    ~ .custom-file-label[data-my-checkbox]::before {\n  border-color: inherit;\n}\n\n.was-validated[data-my-checkbox]   .custom-file-input[data-my-checkbox]:invalid    ~ .invalid-feedback[data-my-checkbox], .was-validated[data-my-checkbox]   .custom-file-input[data-my-checkbox]:invalid    ~ .invalid-tooltip[data-my-checkbox], .custom-file-input.is-invalid[data-my-checkbox]    ~ .invalid-feedback[data-my-checkbox], .custom-file-input.is-invalid[data-my-checkbox]    ~ .invalid-tooltip[data-my-checkbox] {\n  display: block;\n}\n\n.was-validated[data-my-checkbox]   .custom-file-input[data-my-checkbox]:invalid:focus    ~ .custom-file-label[data-my-checkbox], .custom-file-input.is-invalid[data-my-checkbox]:focus    ~ .custom-file-label[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.form-inline[data-my-checkbox] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n\n.form-inline[data-my-checkbox]   .form-check[data-my-checkbox] {\n  width: 100%;\n}\n\n\@media (min-width: 576px) {\n  .form-inline[data-my-checkbox]   label[data-my-checkbox] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline[data-my-checkbox]   .form-group[data-my-checkbox] {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline[data-my-checkbox]   .form-control[data-my-checkbox] {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline[data-my-checkbox]   .form-control-plaintext[data-my-checkbox] {\n    display: inline-block;\n  }\n  .form-inline[data-my-checkbox]   .input-group[data-my-checkbox] {\n    width: auto;\n  }\n  .form-inline[data-my-checkbox]   .form-check[data-my-checkbox] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline[data-my-checkbox]   .form-check-input[data-my-checkbox] {\n    position: relative;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline[data-my-checkbox]   .custom-control[data-my-checkbox] {\n    align-items: center;\n    justify-content: center;\n  }\n  .form-inline[data-my-checkbox]   .custom-control-label[data-my-checkbox] {\n    margin-bottom: 0;\n  }\n}\n\n.btn[data-my-checkbox] {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.btn[data-my-checkbox]:hover, .btn[data-my-checkbox]:focus {\n  text-decoration: none;\n}\n\n.btn[data-my-checkbox]:focus, .btn.focus[data-my-checkbox] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.btn.disabled[data-my-checkbox], .btn[data-my-checkbox]:disabled {\n  opacity: 0.65;\n}\n\n.btn[data-my-checkbox]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.btn[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn[data-my-checkbox]:not(:disabled):not(.disabled).active {\n  background-image: none;\n}\n\na.btn.disabled[data-my-checkbox], fieldset[data-my-checkbox]:disabled   a.btn[data-my-checkbox] {\n  pointer-events: none;\n}\n\n.btn-primary[data-my-checkbox] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n\n.btn-primary[data-my-checkbox]:focus, .btn-primary.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-primary.disabled[data-my-checkbox], .btn-primary[data-my-checkbox]:disabled {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-primary[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-primary.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n\n.btn-primary[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-primary[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-primary.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-secondary[data-my-checkbox] {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n\n.btn-secondary[data-my-checkbox]:focus, .btn-secondary.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-secondary.disabled[data-my-checkbox], .btn-secondary[data-my-checkbox]:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-secondary[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-secondary.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n\n.btn-secondary[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-secondary[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-secondary.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-success[data-my-checkbox] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n\n.btn-success[data-my-checkbox]:focus, .btn-success.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-success.disabled[data-my-checkbox], .btn-success[data-my-checkbox]:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-success[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-success.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n\n.btn-success[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-success[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-success.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-info[data-my-checkbox] {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n\n.btn-info[data-my-checkbox]:focus, .btn-info.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-info.disabled[data-my-checkbox], .btn-info[data-my-checkbox]:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-info[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-info.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n\n.btn-info[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-info[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-info.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-warning[data-my-checkbox] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning[data-my-checkbox]:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n\n.btn-warning[data-my-checkbox]:focus, .btn-warning.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-warning.disabled[data-my-checkbox], .btn-warning[data-my-checkbox]:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-warning[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-warning.dropdown-toggle[data-my-checkbox] {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n\n.btn-warning[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-warning[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-warning.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-danger[data-my-checkbox] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n\n.btn-danger[data-my-checkbox]:focus, .btn-danger.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-danger.disabled[data-my-checkbox], .btn-danger[data-my-checkbox]:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-danger[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-danger.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n\n.btn-danger[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-danger[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-danger.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-light[data-my-checkbox] {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light[data-my-checkbox]:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n\n.btn-light[data-my-checkbox]:focus, .btn-light.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-light.disabled[data-my-checkbox], .btn-light[data-my-checkbox]:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-light[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-light.dropdown-toggle[data-my-checkbox] {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n\n.btn-light[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-light[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-light.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-dark[data-my-checkbox] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n\n.btn-dark[data-my-checkbox]:focus, .btn-dark.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-dark.disabled[data-my-checkbox], .btn-dark[data-my-checkbox]:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-dark[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-dark.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n\n.btn-dark[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-dark[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-dark.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-primary[data-my-checkbox] {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-checkbox]:focus, .btn-outline-primary.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-primary.disabled[data-my-checkbox], .btn-outline-primary[data-my-checkbox]:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-outline-primary[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-outline-primary[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-outline-primary.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-outline-primary[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-outline-primary.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-secondary[data-my-checkbox] {\n  color: #6c757d;\n  background-color: transparent;\n  background-image: none;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-checkbox]:focus, .btn-outline-secondary.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-secondary.disabled[data-my-checkbox], .btn-outline-secondary[data-my-checkbox]:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-secondary[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-outline-secondary[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-outline-secondary.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-outline-secondary.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-success[data-my-checkbox] {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-checkbox]:focus, .btn-outline-success.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-success.disabled[data-my-checkbox], .btn-outline-success[data-my-checkbox]:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n\n.btn-outline-success[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-outline-success[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-outline-success.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-outline-success[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-outline-success.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-info[data-my-checkbox] {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-checkbox]:focus, .btn-outline-info.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-info.disabled[data-my-checkbox], .btn-outline-info[data-my-checkbox]:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n\n.btn-outline-info[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-outline-info[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-outline-info.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-outline-info[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-outline-info.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning[data-my-checkbox] {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-checkbox]:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-checkbox]:focus, .btn-outline-warning.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-warning.disabled[data-my-checkbox], .btn-outline-warning[data-my-checkbox]:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n\n.btn-outline-warning[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-outline-warning[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-outline-warning.dropdown-toggle[data-my-checkbox] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-outline-warning[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-outline-warning.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-danger[data-my-checkbox] {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-checkbox]:focus, .btn-outline-danger.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-danger.disabled[data-my-checkbox], .btn-outline-danger[data-my-checkbox]:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n\n.btn-outline-danger[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-outline-danger[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-outline-danger.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-outline-danger[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-outline-danger.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-light[data-my-checkbox] {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-checkbox]:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-checkbox]:focus, .btn-outline-light.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-light.disabled[data-my-checkbox], .btn-outline-light[data-my-checkbox]:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-light[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-outline-light[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-outline-light.dropdown-toggle[data-my-checkbox] {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-outline-light[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-outline-light.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark[data-my-checkbox] {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-checkbox]:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-checkbox]:focus, .btn-outline-dark.focus[data-my-checkbox] {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-dark.disabled[data-my-checkbox], .btn-outline-dark[data-my-checkbox]:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n\n.btn-outline-dark[data-my-checkbox]:not(:disabled):not(.disabled):active, .btn-outline-dark[data-my-checkbox]:not(:disabled):not(.disabled).active, .show[data-my-checkbox]    > .btn-outline-dark.dropdown-toggle[data-my-checkbox] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-checkbox]:not(:disabled):not(.disabled):active:focus, .btn-outline-dark[data-my-checkbox]:not(:disabled):not(.disabled).active:focus, .show[data-my-checkbox]    > .btn-outline-dark.dropdown-toggle[data-my-checkbox]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link[data-my-checkbox] {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-link[data-my-checkbox]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-link[data-my-checkbox]:focus, .btn-link.focus[data-my-checkbox] {\n  text-decoration: underline;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.btn-link[data-my-checkbox]:disabled, .btn-link.disabled[data-my-checkbox] {\n  color: #6c757d;\n}\n\n.btn-lg[data-my-checkbox], .btn-group-lg[data-my-checkbox]    > .btn[data-my-checkbox] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.btn-sm[data-my-checkbox], .btn-group-sm[data-my-checkbox]    > .btn[data-my-checkbox] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block[data-my-checkbox] {\n  display: block;\n  width: 100%;\n}\n\n.btn-block[data-my-checkbox]    + .btn-block[data-my-checkbox] {\n  margin-top: 0.5rem;\n}\n\ninput[type=\"submit\"].btn-block[data-my-checkbox], input[type=\"reset\"].btn-block[data-my-checkbox], input[type=\"button\"].btn-block[data-my-checkbox] {\n  width: 100%;\n}\n\n.fade[data-my-checkbox] {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n.fade.show[data-my-checkbox] {\n  opacity: 1;\n}\n\n.collapse[data-my-checkbox] {\n  display: none;\n}\n\n.collapse.show[data-my-checkbox] {\n  display: block;\n}\n\ntr.collapse.show[data-my-checkbox] {\n  display: table-row;\n}\n\ntbody.collapse.show[data-my-checkbox] {\n  display: table-row-group;\n}\n\n.collapsing[data-my-checkbox] {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n\n.dropup[data-my-checkbox], .dropdown[data-my-checkbox] {\n  position: relative;\n}\n\n.dropdown-toggle[data-my-checkbox]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle[data-my-checkbox]:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu[data-my-checkbox] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropup[data-my-checkbox]   .dropdown-menu[data-my-checkbox] {\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n\n.dropup[data-my-checkbox]   .dropdown-toggle[data-my-checkbox]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n\n.dropup[data-my-checkbox]   .dropdown-toggle[data-my-checkbox]:empty::after {\n  margin-left: 0;\n}\n\n.dropright[data-my-checkbox]   .dropdown-menu[data-my-checkbox] {\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n\n.dropright[data-my-checkbox]   .dropdown-toggle[data-my-checkbox]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n\n.dropright[data-my-checkbox]   .dropdown-toggle[data-my-checkbox]:empty::after {\n  margin-left: 0;\n}\n\n.dropright[data-my-checkbox]   .dropdown-toggle[data-my-checkbox]::after {\n  vertical-align: 0;\n}\n\n.dropleft[data-my-checkbox]   .dropdown-menu[data-my-checkbox] {\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n\n.dropleft[data-my-checkbox]   .dropdown-toggle[data-my-checkbox]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n\n.dropleft[data-my-checkbox]   .dropdown-toggle[data-my-checkbox]::after {\n  display: none;\n}\n\n.dropleft[data-my-checkbox]   .dropdown-toggle[data-my-checkbox]::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n\n.dropleft[data-my-checkbox]   .dropdown-toggle[data-my-checkbox]:empty::after {\n  margin-left: 0;\n}\n\n.dropleft[data-my-checkbox]   .dropdown-toggle[data-my-checkbox]::before {\n  vertical-align: 0;\n}\n\n.dropdown-divider[data-my-checkbox] {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item[data-my-checkbox] {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.dropdown-item[data-my-checkbox]:hover, .dropdown-item[data-my-checkbox]:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.dropdown-item.active[data-my-checkbox], .dropdown-item[data-my-checkbox]:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n\n.dropdown-item.disabled[data-my-checkbox], .dropdown-item[data-my-checkbox]:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.dropdown-menu.show[data-my-checkbox] {\n  display: block;\n}\n\n.dropdown-header[data-my-checkbox] {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.btn-group[data-my-checkbox], .btn-group-vertical[data-my-checkbox] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.btn-group[data-my-checkbox]    > .btn[data-my-checkbox], .btn-group-vertical[data-my-checkbox]    > .btn[data-my-checkbox] {\n  position: relative;\n  flex: 0 1 auto;\n}\n\n.btn-group[data-my-checkbox]    > .btn[data-my-checkbox]:hover, .btn-group-vertical[data-my-checkbox]    > .btn[data-my-checkbox]:hover {\n  z-index: 1;\n}\n\n.btn-group[data-my-checkbox]    > .btn[data-my-checkbox]:focus, .btn-group[data-my-checkbox]    > .btn[data-my-checkbox]:active, .btn-group[data-my-checkbox]    > .btn.active[data-my-checkbox], .btn-group-vertical[data-my-checkbox]    > .btn[data-my-checkbox]:focus, .btn-group-vertical[data-my-checkbox]    > .btn[data-my-checkbox]:active, .btn-group-vertical[data-my-checkbox]    > .btn.active[data-my-checkbox] {\n  z-index: 1;\n}\n\n.btn-group[data-my-checkbox]   .btn[data-my-checkbox]    + .btn[data-my-checkbox], .btn-group[data-my-checkbox]   .btn[data-my-checkbox]    + .btn-group[data-my-checkbox], .btn-group[data-my-checkbox]   .btn-group[data-my-checkbox]    + .btn[data-my-checkbox], .btn-group[data-my-checkbox]   .btn-group[data-my-checkbox]    + .btn-group[data-my-checkbox], .btn-group-vertical[data-my-checkbox]   .btn[data-my-checkbox]    + .btn[data-my-checkbox], .btn-group-vertical[data-my-checkbox]   .btn[data-my-checkbox]    + .btn-group[data-my-checkbox], .btn-group-vertical[data-my-checkbox]   .btn-group[data-my-checkbox]    + .btn[data-my-checkbox], .btn-group-vertical[data-my-checkbox]   .btn-group[data-my-checkbox]    + .btn-group[data-my-checkbox] {\n  margin-left: -1px;\n}\n\n.btn-toolbar[data-my-checkbox] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.btn-toolbar[data-my-checkbox]   .input-group[data-my-checkbox] {\n  width: auto;\n}\n\n.btn-group[data-my-checkbox]    > .btn[data-my-checkbox]:first-child {\n  margin-left: 0;\n}\n\n.btn-group[data-my-checkbox]    > .btn[data-my-checkbox]:not(:last-child):not(.dropdown-toggle), .btn-group[data-my-checkbox]    > .btn-group[data-my-checkbox]:not(:last-child)    > .btn[data-my-checkbox] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-group[data-my-checkbox]    > .btn[data-my-checkbox]:not(:first-child), .btn-group[data-my-checkbox]    > .btn-group[data-my-checkbox]:not(:first-child)    > .btn[data-my-checkbox] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split[data-my-checkbox] {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n\n.dropdown-toggle-split[data-my-checkbox]::after {\n  margin-left: 0;\n}\n\n.btn-sm[data-my-checkbox]    + .dropdown-toggle-split[data-my-checkbox], .btn-group-sm[data-my-checkbox]    > .btn[data-my-checkbox]    + .dropdown-toggle-split[data-my-checkbox] {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg[data-my-checkbox]    + .dropdown-toggle-split[data-my-checkbox], .btn-group-lg[data-my-checkbox]    > .btn[data-my-checkbox]    + .dropdown-toggle-split[data-my-checkbox] {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical[data-my-checkbox] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.btn-group-vertical[data-my-checkbox]   .btn[data-my-checkbox], .btn-group-vertical[data-my-checkbox]   .btn-group[data-my-checkbox] {\n  width: 100%;\n}\n\n.btn-group-vertical[data-my-checkbox]    > .btn[data-my-checkbox]    + .btn[data-my-checkbox], .btn-group-vertical[data-my-checkbox]    > .btn[data-my-checkbox]    + .btn-group[data-my-checkbox], .btn-group-vertical[data-my-checkbox]    > .btn-group[data-my-checkbox]    + .btn[data-my-checkbox], .btn-group-vertical[data-my-checkbox]    > .btn-group[data-my-checkbox]    + .btn-group[data-my-checkbox] {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical[data-my-checkbox]    > .btn[data-my-checkbox]:not(:last-child):not(.dropdown-toggle), .btn-group-vertical[data-my-checkbox]    > .btn-group[data-my-checkbox]:not(:last-child)    > .btn[data-my-checkbox] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical[data-my-checkbox]    > .btn[data-my-checkbox]:not(:first-child), .btn-group-vertical[data-my-checkbox]    > .btn-group[data-my-checkbox]:not(:first-child)    > .btn[data-my-checkbox] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle[data-my-checkbox]    > .btn[data-my-checkbox], .btn-group-toggle[data-my-checkbox]    > .btn-group[data-my-checkbox]    > .btn[data-my-checkbox] {\n  margin-bottom: 0;\n}\n\n.btn-group-toggle[data-my-checkbox]    > .btn[data-my-checkbox]   input[type=\"radio\"][data-my-checkbox], .btn-group-toggle[data-my-checkbox]    > .btn[data-my-checkbox]   input[type=\"checkbox\"][data-my-checkbox], .btn-group-toggle[data-my-checkbox]    > .btn-group[data-my-checkbox]    > .btn[data-my-checkbox]   input[type=\"radio\"][data-my-checkbox], .btn-group-toggle[data-my-checkbox]    > .btn-group[data-my-checkbox]    > .btn[data-my-checkbox]   input[type=\"checkbox\"][data-my-checkbox] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group[data-my-checkbox] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n\n.input-group[data-my-checkbox]    > .form-control[data-my-checkbox], .input-group[data-my-checkbox]    > .custom-select[data-my-checkbox], .input-group[data-my-checkbox]    > .custom-file[data-my-checkbox] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n\n.input-group[data-my-checkbox]    > .form-control[data-my-checkbox]:focus, .input-group[data-my-checkbox]    > .custom-select[data-my-checkbox]:focus, .input-group[data-my-checkbox]    > .custom-file[data-my-checkbox]:focus {\n  z-index: 3;\n}\n\n.input-group[data-my-checkbox]    > .form-control[data-my-checkbox]    + .form-control[data-my-checkbox], .input-group[data-my-checkbox]    > .form-control[data-my-checkbox]    + .custom-select[data-my-checkbox], .input-group[data-my-checkbox]    > .form-control[data-my-checkbox]    + .custom-file[data-my-checkbox], .input-group[data-my-checkbox]    > .custom-select[data-my-checkbox]    + .form-control[data-my-checkbox], .input-group[data-my-checkbox]    > .custom-select[data-my-checkbox]    + .custom-select[data-my-checkbox], .input-group[data-my-checkbox]    > .custom-select[data-my-checkbox]    + .custom-file[data-my-checkbox], .input-group[data-my-checkbox]    > .custom-file[data-my-checkbox]    + .form-control[data-my-checkbox], .input-group[data-my-checkbox]    > .custom-file[data-my-checkbox]    + .custom-select[data-my-checkbox], .input-group[data-my-checkbox]    > .custom-file[data-my-checkbox]    + .custom-file[data-my-checkbox] {\n  margin-left: -1px;\n}\n\n.input-group[data-my-checkbox]    > .form-control[data-my-checkbox]:not(:last-child), .input-group[data-my-checkbox]    > .custom-select[data-my-checkbox]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-checkbox]    > .form-control[data-my-checkbox]:not(:first-child), .input-group[data-my-checkbox]    > .custom-select[data-my-checkbox]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group[data-my-checkbox]    > .custom-file[data-my-checkbox] {\n  display: flex;\n  align-items: center;\n}\n\n.input-group[data-my-checkbox]    > .custom-file[data-my-checkbox]:not(:last-child)   .custom-file-label[data-my-checkbox], .input-group[data-my-checkbox]    > .custom-file[data-my-checkbox]:not(:last-child)   .custom-file-label[data-my-checkbox]::before {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-checkbox]    > .custom-file[data-my-checkbox]:not(:first-child)   .custom-file-label[data-my-checkbox], .input-group[data-my-checkbox]    > .custom-file[data-my-checkbox]:not(:first-child)   .custom-file-label[data-my-checkbox]::before {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-prepend[data-my-checkbox], .input-group-append[data-my-checkbox] {\n  display: flex;\n}\n\n.input-group-prepend[data-my-checkbox]   .btn[data-my-checkbox], .input-group-append[data-my-checkbox]   .btn[data-my-checkbox] {\n  position: relative;\n  z-index: 2;\n}\n\n.input-group-prepend[data-my-checkbox]   .btn[data-my-checkbox]    + .btn[data-my-checkbox], .input-group-prepend[data-my-checkbox]   .btn[data-my-checkbox]    + .input-group-text[data-my-checkbox], .input-group-prepend[data-my-checkbox]   .input-group-text[data-my-checkbox]    + .input-group-text[data-my-checkbox], .input-group-prepend[data-my-checkbox]   .input-group-text[data-my-checkbox]    + .btn[data-my-checkbox], .input-group-append[data-my-checkbox]   .btn[data-my-checkbox]    + .btn[data-my-checkbox], .input-group-append[data-my-checkbox]   .btn[data-my-checkbox]    + .input-group-text[data-my-checkbox], .input-group-append[data-my-checkbox]   .input-group-text[data-my-checkbox]    + .input-group-text[data-my-checkbox], .input-group-append[data-my-checkbox]   .input-group-text[data-my-checkbox]    + .btn[data-my-checkbox] {\n  margin-left: -1px;\n}\n\n.input-group-prepend[data-my-checkbox] {\n  margin-right: -1px;\n}\n\n.input-group-append[data-my-checkbox] {\n  margin-left: -1px;\n}\n\n.input-group-text[data-my-checkbox] {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.input-group-text[data-my-checkbox]   input[type=\"radio\"][data-my-checkbox], .input-group-text[data-my-checkbox]   input[type=\"checkbox\"][data-my-checkbox] {\n  margin-top: 0;\n}\n\n.input-group[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > .btn[data-my-checkbox], .input-group[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]    > .input-group-text[data-my-checkbox], .input-group[data-my-checkbox]    > .input-group-append[data-my-checkbox]:not(:last-child)    > .btn[data-my-checkbox], .input-group[data-my-checkbox]    > .input-group-append[data-my-checkbox]:not(:last-child)    > .input-group-text[data-my-checkbox], .input-group[data-my-checkbox]    > .input-group-append[data-my-checkbox]:last-child    > .btn[data-my-checkbox]:not(:last-child):not(.dropdown-toggle), .input-group[data-my-checkbox]    > .input-group-append[data-my-checkbox]:last-child    > .input-group-text[data-my-checkbox]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > .btn[data-my-checkbox], .input-group[data-my-checkbox]    > .input-group-append[data-my-checkbox]    > .input-group-text[data-my-checkbox], .input-group[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]:not(:first-child)    > .btn[data-my-checkbox], .input-group[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]:not(:first-child)    > .input-group-text[data-my-checkbox], .input-group[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]:first-child    > .btn[data-my-checkbox]:not(:first-child), .input-group[data-my-checkbox]    > .input-group-prepend[data-my-checkbox]:first-child    > .input-group-text[data-my-checkbox]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control[data-my-checkbox] {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n.custom-control-inline[data-my-checkbox] {\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input[data-my-checkbox] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.custom-control-input[data-my-checkbox]:checked    ~ .custom-control-label[data-my-checkbox]::before {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.custom-control-input[data-my-checkbox]:focus    ~ .custom-control-label[data-my-checkbox]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-control-input[data-my-checkbox]:active    ~ .custom-control-label[data-my-checkbox]::before {\n  color: #fff;\n  background-color: #b3d7ff;\n}\n\n.custom-control-input[data-my-checkbox]:disabled    ~ .custom-control-label[data-my-checkbox] {\n  color: #6c757d;\n}\n\n.custom-control-input[data-my-checkbox]:disabled    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label[data-my-checkbox] {\n  margin-bottom: 0;\n}\n\n.custom-control-label[data-my-checkbox]::before {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: \"\";\n  user-select: none;\n  background-color: #dee2e6;\n}\n\n.custom-control-label[data-my-checkbox]::after {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n\n.custom-checkbox[data-my-checkbox]   .custom-control-label[data-my-checkbox]::before {\n  border-radius: 0.25rem;\n}\n\n.custom-checkbox[data-my-checkbox]   .custom-control-input[data-my-checkbox]:checked    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: #007bff;\n}\n\n.custom-checkbox[data-my-checkbox]   .custom-control-input[data-my-checkbox]:checked    ~ .custom-control-label[data-my-checkbox]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox[data-my-checkbox]   .custom-control-input[data-my-checkbox]:indeterminate    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: #007bff;\n}\n\n.custom-checkbox[data-my-checkbox]   .custom-control-input[data-my-checkbox]:indeterminate    ~ .custom-control-label[data-my-checkbox]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox[data-my-checkbox]   .custom-control-input[data-my-checkbox]:disabled:checked    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-checkbox[data-my-checkbox]   .custom-control-input[data-my-checkbox]:disabled:indeterminate    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-radio[data-my-checkbox]   .custom-control-label[data-my-checkbox]::before {\n  border-radius: 50%;\n}\n\n.custom-radio[data-my-checkbox]   .custom-control-input[data-my-checkbox]:checked    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: #007bff;\n}\n\n.custom-radio[data-my-checkbox]   .custom-control-input[data-my-checkbox]:checked    ~ .custom-control-label[data-my-checkbox]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\n}\n\n.custom-radio[data-my-checkbox]   .custom-control-input[data-my-checkbox]:disabled:checked    ~ .custom-control-label[data-my-checkbox]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-select[data-my-checkbox] {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  appearance: none;\n}\n\n.custom-select[data-my-checkbox]:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5);\n}\n\n.custom-select[data-my-checkbox]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.custom-select[multiple][data-my-checkbox], .custom-select[size][data-my-checkbox]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n\n.custom-select[data-my-checkbox]:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n\n.custom-select[data-my-checkbox]::-ms-expand {\n  opacity: 0;\n}\n\n.custom-select-sm[data-my-checkbox] {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n\n.custom-select-lg[data-my-checkbox] {\n  height: calc(2.875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%;\n}\n\n.custom-file[data-my-checkbox] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input[data-my-checkbox] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n\n.custom-file-input[data-my-checkbox]:focus    ~ .custom-file-control[data-my-checkbox] {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-file-input[data-my-checkbox]:focus    ~ .custom-file-control[data-my-checkbox]::before {\n  border-color: #80bdff;\n}\n\n.custom-file-input[data-my-checkbox]:lang(en)    ~ .custom-file-label[data-my-checkbox]::after {\n  content: \"Browse\";\n}\n\n.custom-file-label[data-my-checkbox] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.custom-file-label[data-my-checkbox]::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(calc(2.25rem + 2px) - 1px * 2);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: 1px solid #ced4da;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.alert[data-my-checkbox] {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading[data-my-checkbox] {\n  color: inherit;\n}\n\n.alert-link[data-my-checkbox] {\n  font-weight: 700;\n}\n\n.alert-dismissible[data-my-checkbox] {\n  padding-right: 4rem;\n}\n\n.alert-dismissible[data-my-checkbox]   .close[data-my-checkbox] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary[data-my-checkbox] {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n\n.alert-primary[data-my-checkbox]   hr[data-my-checkbox] {\n  border-top-color: #9fcdff;\n}\n\n.alert-primary[data-my-checkbox]   .alert-link[data-my-checkbox] {\n  color: #002752;\n}\n\n.alert-secondary[data-my-checkbox] {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n\n.alert-secondary[data-my-checkbox]   hr[data-my-checkbox] {\n  border-top-color: #c8cbcf;\n}\n\n.alert-secondary[data-my-checkbox]   .alert-link[data-my-checkbox] {\n  color: #202326;\n}\n\n.alert-success[data-my-checkbox] {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.alert-success[data-my-checkbox]   hr[data-my-checkbox] {\n  border-top-color: #b1dfbb;\n}\n\n.alert-success[data-my-checkbox]   .alert-link[data-my-checkbox] {\n  color: #0b2e13;\n}\n\n.alert-info[data-my-checkbox] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.alert-info[data-my-checkbox]   hr[data-my-checkbox] {\n  border-top-color: #abdde5;\n}\n\n.alert-info[data-my-checkbox]   .alert-link[data-my-checkbox] {\n  color: #062c33;\n}\n\n.alert-warning[data-my-checkbox] {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n\n.alert-warning[data-my-checkbox]   hr[data-my-checkbox] {\n  border-top-color: #ffe8a1;\n}\n\n.alert-warning[data-my-checkbox]   .alert-link[data-my-checkbox] {\n  color: #533f03;\n}\n\n.alert-danger[data-my-checkbox] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n\n.alert-danger[data-my-checkbox]   hr[data-my-checkbox] {\n  border-top-color: #f1b0b7;\n}\n\n.alert-danger[data-my-checkbox]   .alert-link[data-my-checkbox] {\n  color: #491217;\n}\n\n.alert-light[data-my-checkbox] {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n\n.alert-light[data-my-checkbox]   hr[data-my-checkbox] {\n  border-top-color: #ececf6;\n}\n\n.alert-light[data-my-checkbox]   .alert-link[data-my-checkbox] {\n  color: #686868;\n}\n\n.alert-dark[data-my-checkbox] {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n\n.alert-dark[data-my-checkbox]   hr[data-my-checkbox] {\n  border-top-color: #b9bbbe;\n}\n\n.alert-dark[data-my-checkbox]   .alert-link[data-my-checkbox] {\n  color: #040505;\n}\n\n\@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress[data-my-checkbox] {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar[data-my-checkbox] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  background-color: #007bff;\n  transition: width 0.6s ease;\n}\n\n.progress-bar-striped[data-my-checkbox] {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated[data-my-checkbox] {\n  animation: progress-bar-stripes 1s linear infinite;\n}\n\n.media[data-my-checkbox] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body[data-my-checkbox] {\n  flex: 1;\n}\n\n.list-group[data-my-checkbox] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group-item-action[data-my-checkbox] {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n\n.list-group-item-action[data-my-checkbox]:hover, .list-group-item-action[data-my-checkbox]:focus {\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.list-group-item-action[data-my-checkbox]:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item[data-my-checkbox] {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.list-group-item[data-my-checkbox]:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.list-group-item[data-my-checkbox]:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.list-group-item[data-my-checkbox]:hover, .list-group-item[data-my-checkbox]:focus {\n  z-index: 1;\n  text-decoration: none;\n}\n\n.list-group-item.disabled[data-my-checkbox], .list-group-item[data-my-checkbox]:disabled {\n  color: #6c757d;\n  background-color: #fff;\n}\n\n.list-group-item.active[data-my-checkbox] {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.list-group-flush[data-my-checkbox]   .list-group-item[data-my-checkbox] {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n\n.list-group-flush[data-my-checkbox]:first-child   .list-group-item[data-my-checkbox]:first-child {\n  border-top: 0;\n}\n\n.list-group-flush[data-my-checkbox]:last-child   .list-group-item[data-my-checkbox]:last-child {\n  border-bottom: 0;\n}\n\n.list-group-item-primary[data-my-checkbox] {\n  color: #004085;\n  background-color: #b8daff;\n}\n\n.list-group-item-primary.list-group-item-action[data-my-checkbox]:hover, .list-group-item-primary.list-group-item-action[data-my-checkbox]:focus {\n  color: #004085;\n  background-color: #9fcdff;\n}\n\n.list-group-item-primary.list-group-item-action.active[data-my-checkbox] {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n\n.list-group-item-secondary[data-my-checkbox] {\n  color: #383d41;\n  background-color: #d6d8db;\n}\n\n.list-group-item-secondary.list-group-item-action[data-my-checkbox]:hover, .list-group-item-secondary.list-group-item-action[data-my-checkbox]:focus {\n  color: #383d41;\n  background-color: #c8cbcf;\n}\n\n.list-group-item-secondary.list-group-item-action.active[data-my-checkbox] {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41;\n}\n\n.list-group-item-success[data-my-checkbox] {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n\n.list-group-item-success.list-group-item-action[data-my-checkbox]:hover, .list-group-item-success.list-group-item-action[data-my-checkbox]:focus {\n  color: #155724;\n  background-color: #b1dfbb;\n}\n\n.list-group-item-success.list-group-item-action.active[data-my-checkbox] {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n\n.list-group-item-info[data-my-checkbox] {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n\n.list-group-item-info.list-group-item-action[data-my-checkbox]:hover, .list-group-item-info.list-group-item-action[data-my-checkbox]:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n\n.list-group-item-info.list-group-item-action.active[data-my-checkbox] {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n\n.list-group-item-warning[data-my-checkbox] {\n  color: #856404;\n  background-color: #ffeeba;\n}\n\n.list-group-item-warning.list-group-item-action[data-my-checkbox]:hover, .list-group-item-warning.list-group-item-action[data-my-checkbox]:focus {\n  color: #856404;\n  background-color: #ffe8a1;\n}\n\n.list-group-item-warning.list-group-item-action.active[data-my-checkbox] {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n\n.list-group-item-danger[data-my-checkbox] {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\n\n.list-group-item-danger.list-group-item-action[data-my-checkbox]:hover, .list-group-item-danger.list-group-item-action[data-my-checkbox]:focus {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\n\n.list-group-item-danger.list-group-item-action.active[data-my-checkbox] {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n\n.list-group-item-light[data-my-checkbox] {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n\n.list-group-item-light.list-group-item-action[data-my-checkbox]:hover, .list-group-item-light.list-group-item-action[data-my-checkbox]:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n\n.list-group-item-light.list-group-item-action.active[data-my-checkbox] {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n\n.list-group-item-dark[data-my-checkbox] {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n\n.list-group-item-dark.list-group-item-action[data-my-checkbox]:hover, .list-group-item-dark.list-group-item-action[data-my-checkbox]:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n\n.list-group-item-dark.list-group-item-action.active[data-my-checkbox] {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n\n.close[data-my-checkbox] {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n\n.close[data-my-checkbox]:hover, .close[data-my-checkbox]:focus {\n  color: #000;\n  text-decoration: none;\n  opacity: .75;\n}\n\n.close[data-my-checkbox]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\nbutton.close[data-my-checkbox] {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}"; }
}

class MyDropdown {
    getSelectValues(event) {
        this.currentValue = event.currentTarget.value;
        this.postValue.emit(this.element);
    }
    ;
    render() {
        const parsedValue = this.value ? JSON.parse(this.value) : null;
        return (h("div", { class: "input-group col-3" },
            h("select", { class: "custom-select", id: this.id, value: this.currentValue, onClick: (event) => this.getSelectValues(event) }, parsedValue && parsedValue.map((value) => h("option", null, value)))));
    }
    static get is() { return "my-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "currentValue": { "state": true }, "element": { "elementRef": true }, "for": { "type": String, "attr": "for" }, "id": { "type": String, "attr": "id" }, "title": { "type": String, "attr": "title" }, "value": { "type": String, "attr": "value" } }; }
    static get events() { return [{ "name": "postValue", "method": "postValue", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "[data-my-dropdown]:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n*[data-my-dropdown], *[data-my-dropdown]::before, *[data-my-dropdown]::after {\n  box-sizing: border-box;\n}\n\nhtml[data-my-dropdown] {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\@-ms-viewport {\n  width: device-width;\n}\n\narticle[data-my-dropdown], aside[data-my-dropdown], dialog[data-my-dropdown], figcaption[data-my-dropdown], figure[data-my-dropdown], footer[data-my-dropdown], header[data-my-dropdown], hgroup[data-my-dropdown], main[data-my-dropdown], nav[data-my-dropdown], section[data-my-dropdown] {\n  display: block;\n}\n\nbody[data-my-dropdown] {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"][data-my-dropdown]:focus {\n  outline: 0 !important;\n}\n\nhr[data-my-dropdown] {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1[data-my-dropdown], h2[data-my-dropdown], h3[data-my-dropdown], h4[data-my-dropdown], h5[data-my-dropdown], h6[data-my-dropdown] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np[data-my-dropdown] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title][data-my-dropdown], abbr[data-original-title][data-my-dropdown] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\n\naddress[data-my-dropdown] {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol[data-my-dropdown], ul[data-my-dropdown], dl[data-my-dropdown] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol[data-my-dropdown]   ol[data-my-dropdown], ul[data-my-dropdown]   ul[data-my-dropdown], ol[data-my-dropdown]   ul[data-my-dropdown], ul[data-my-dropdown]   ol[data-my-dropdown] {\n  margin-bottom: 0;\n}\n\ndt[data-my-dropdown] {\n  font-weight: 700;\n}\n\ndd[data-my-dropdown] {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote[data-my-dropdown] {\n  margin: 0 0 1rem;\n}\n\ndfn[data-my-dropdown] {\n  font-style: italic;\n}\n\nb[data-my-dropdown], strong[data-my-dropdown] {\n  font-weight: bolder;\n}\n\nsmall[data-my-dropdown] {\n  font-size: 80%;\n}\n\nsub[data-my-dropdown], sup[data-my-dropdown] {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub[data-my-dropdown] {\n  bottom: -.25em;\n}\n\nsup[data-my-dropdown] {\n  top: -.5em;\n}\n\na[data-my-dropdown] {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na[data-my-dropdown]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na[data-my-dropdown]:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na[data-my-dropdown]:not([href]):not([tabindex]):hover, a[data-my-dropdown]:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\na[data-my-dropdown]:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\n\npre[data-my-dropdown], code[data-my-dropdown], kbd[data-my-dropdown], samp[data-my-dropdown] {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\npre[data-my-dropdown] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure[data-my-dropdown] {\n  margin: 0 0 1rem;\n}\n\nimg[data-my-dropdown] {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg[data-my-dropdown]:not(:root) {\n  overflow: hidden;\n}\n\ntable[data-my-dropdown] {\n  border-collapse: collapse;\n}\n\ncaption[data-my-dropdown] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth[data-my-dropdown] {\n  text-align: inherit;\n}\n\nlabel[data-my-dropdown] {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\n\nbutton[data-my-dropdown] {\n  border-radius: 0;\n}\n\nbutton[data-my-dropdown]:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput[data-my-dropdown], button[data-my-dropdown], select[data-my-dropdown], optgroup[data-my-dropdown], textarea[data-my-dropdown] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton[data-my-dropdown], input[data-my-dropdown] {\n  overflow: visible;\n}\n\nbutton[data-my-dropdown], select[data-my-dropdown] {\n  text-transform: none;\n}\n\nbutton[data-my-dropdown], html[data-my-dropdown]   [type=\"button\"][data-my-dropdown], [type=\"reset\"][data-my-dropdown], [type=\"submit\"][data-my-dropdown] {\n  -webkit-appearance: button;\n}\n\nbutton[data-my-dropdown]::-moz-focus-inner, [type=\"button\"][data-my-dropdown]::-moz-focus-inner, [type=\"reset\"][data-my-dropdown]::-moz-focus-inner, [type=\"submit\"][data-my-dropdown]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=\"radio\"][data-my-dropdown], input[type=\"checkbox\"][data-my-dropdown] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"date\"][data-my-dropdown], input[type=\"time\"][data-my-dropdown], input[type=\"datetime-local\"][data-my-dropdown], input[type=\"month\"][data-my-dropdown] {\n  -webkit-appearance: listbox;\n}\n\ntextarea[data-my-dropdown] {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset[data-my-dropdown] {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend[data-my-dropdown] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress[data-my-dropdown] {\n  vertical-align: baseline;\n}\n\n[type=\"number\"][data-my-dropdown]::-webkit-inner-spin-button, [type=\"number\"][data-my-dropdown]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][data-my-dropdown] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type=\"search\"][data-my-dropdown]::-webkit-search-cancel-button, [type=\"search\"][data-my-dropdown]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[data-my-dropdown]::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput[data-my-dropdown] {\n  display: inline-block;\n}\n\nsummary[data-my-dropdown] {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate[data-my-dropdown] {\n  display: none;\n}\n\n[hidden][data-my-dropdown] {\n  display: none !important;\n}\n\nh1[data-my-dropdown], h2[data-my-dropdown], h3[data-my-dropdown], h4[data-my-dropdown], h5[data-my-dropdown], h6[data-my-dropdown], .h1[data-my-dropdown], .h2[data-my-dropdown], .h3[data-my-dropdown], .h4[data-my-dropdown], .h5[data-my-dropdown], .h6[data-my-dropdown] {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit;\n}\n\nh1[data-my-dropdown], .h1[data-my-dropdown] {\n  font-size: 2.5rem;\n}\n\nh2[data-my-dropdown], .h2[data-my-dropdown] {\n  font-size: 2rem;\n}\n\nh3[data-my-dropdown], .h3[data-my-dropdown] {\n  font-size: 1.75rem;\n}\n\nh4[data-my-dropdown], .h4[data-my-dropdown] {\n  font-size: 1.5rem;\n}\n\nh5[data-my-dropdown], .h5[data-my-dropdown] {\n  font-size: 1.25rem;\n}\n\nh6[data-my-dropdown], .h6[data-my-dropdown] {\n  font-size: 1rem;\n}\n\n.lead[data-my-dropdown] {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1[data-my-dropdown] {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-2[data-my-dropdown] {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-3[data-my-dropdown] {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-4[data-my-dropdown] {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nhr[data-my-dropdown] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall[data-my-dropdown], .small[data-my-dropdown] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\nmark[data-my-dropdown], .mark[data-my-dropdown] {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled[data-my-dropdown] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline[data-my-dropdown] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item[data-my-dropdown] {\n  display: inline-block;\n}\n\n.list-inline-item[data-my-dropdown]:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism[data-my-dropdown] {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote[data-my-dropdown] {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n\n.blockquote-footer[data-my-dropdown] {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n\n.blockquote-footer[data-my-dropdown]::before {\n  content: \"\\2014 \\00A0\";\n}\n\n.img-fluid[data-my-dropdown] {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail[data-my-dropdown] {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure[data-my-dropdown] {\n  display: inline-block;\n}\n\n.figure-img[data-my-dropdown] {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption[data-my-dropdown] {\n  font-size: 90%;\n  color: #6c757d;\n}\n\ncode[data-my-dropdown], kbd[data-my-dropdown], pre[data-my-dropdown], samp[data-my-dropdown] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\ncode[data-my-dropdown] {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word;\n}\n\na[data-my-dropdown]    > code[data-my-dropdown] {\n  color: inherit;\n}\n\nkbd[data-my-dropdown] {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\n\nkbd[data-my-dropdown]   kbd[data-my-dropdown] {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\n\npre[data-my-dropdown] {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\n\npre[data-my-dropdown]   code[data-my-dropdown] {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable[data-my-dropdown] {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container[data-my-dropdown] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n\@media (min-width: 576px) {\n  .container[data-my-dropdown] {\n    max-width: 540px;\n  }\n}\n\n\@media (min-width: 768px) {\n  .container[data-my-dropdown] {\n    max-width: 720px;\n  }\n}\n\n\@media (min-width: 992px) {\n  .container[data-my-dropdown] {\n    max-width: 960px;\n  }\n}\n\n\@media (min-width: 1200px) {\n  .container[data-my-dropdown] {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid[data-my-dropdown] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.row[data-my-dropdown] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters[data-my-dropdown] {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters[data-my-dropdown]    > .col[data-my-dropdown], .no-gutters[data-my-dropdown]    > [class*=\"col-\"][data-my-dropdown] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1[data-my-dropdown], .col-2[data-my-dropdown], .col-3[data-my-dropdown], .col-4[data-my-dropdown], .col-5[data-my-dropdown], .col-6[data-my-dropdown], .col-7[data-my-dropdown], .col-8[data-my-dropdown], .col-9[data-my-dropdown], .col-10[data-my-dropdown], .col-11[data-my-dropdown], .col-12[data-my-dropdown], .col[data-my-dropdown], .col-auto[data-my-dropdown], .col-sm-1[data-my-dropdown], .col-sm-2[data-my-dropdown], .col-sm-3[data-my-dropdown], .col-sm-4[data-my-dropdown], .col-sm-5[data-my-dropdown], .col-sm-6[data-my-dropdown], .col-sm-7[data-my-dropdown], .col-sm-8[data-my-dropdown], .col-sm-9[data-my-dropdown], .col-sm-10[data-my-dropdown], .col-sm-11[data-my-dropdown], .col-sm-12[data-my-dropdown], .col-sm[data-my-dropdown], .col-sm-auto[data-my-dropdown], .col-md-1[data-my-dropdown], .col-md-2[data-my-dropdown], .col-md-3[data-my-dropdown], .col-md-4[data-my-dropdown], .col-md-5[data-my-dropdown], .col-md-6[data-my-dropdown], .col-md-7[data-my-dropdown], .col-md-8[data-my-dropdown], .col-md-9[data-my-dropdown], .col-md-10[data-my-dropdown], .col-md-11[data-my-dropdown], .col-md-12[data-my-dropdown], .col-md[data-my-dropdown], .col-md-auto[data-my-dropdown], .col-lg-1[data-my-dropdown], .col-lg-2[data-my-dropdown], .col-lg-3[data-my-dropdown], .col-lg-4[data-my-dropdown], .col-lg-5[data-my-dropdown], .col-lg-6[data-my-dropdown], .col-lg-7[data-my-dropdown], .col-lg-8[data-my-dropdown], .col-lg-9[data-my-dropdown], .col-lg-10[data-my-dropdown], .col-lg-11[data-my-dropdown], .col-lg-12[data-my-dropdown], .col-lg[data-my-dropdown], .col-lg-auto[data-my-dropdown], .col-xl-1[data-my-dropdown], .col-xl-2[data-my-dropdown], .col-xl-3[data-my-dropdown], .col-xl-4[data-my-dropdown], .col-xl-5[data-my-dropdown], .col-xl-6[data-my-dropdown], .col-xl-7[data-my-dropdown], .col-xl-8[data-my-dropdown], .col-xl-9[data-my-dropdown], .col-xl-10[data-my-dropdown], .col-xl-11[data-my-dropdown], .col-xl-12[data-my-dropdown], .col-xl[data-my-dropdown], .col-xl-auto[data-my-dropdown] {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col[data-my-dropdown] {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto[data-my-dropdown] {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1[data-my-dropdown] {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%;\n}\n\n.col-2[data-my-dropdown] {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%;\n}\n\n.col-3[data-my-dropdown] {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4[data-my-dropdown] {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%;\n}\n\n.col-5[data-my-dropdown] {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%;\n}\n\n.col-6[data-my-dropdown] {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7[data-my-dropdown] {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%;\n}\n\n.col-8[data-my-dropdown] {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%;\n}\n\n.col-9[data-my-dropdown] {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10[data-my-dropdown] {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%;\n}\n\n.col-11[data-my-dropdown] {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%;\n}\n\n.col-12[data-my-dropdown] {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first[data-my-dropdown] {\n  order: -1;\n}\n\n.order-last[data-my-dropdown] {\n  order: 13;\n}\n\n.order-0[data-my-dropdown] {\n  order: 0;\n}\n\n.order-1[data-my-dropdown] {\n  order: 1;\n}\n\n.order-2[data-my-dropdown] {\n  order: 2;\n}\n\n.order-3[data-my-dropdown] {\n  order: 3;\n}\n\n.order-4[data-my-dropdown] {\n  order: 4;\n}\n\n.order-5[data-my-dropdown] {\n  order: 5;\n}\n\n.order-6[data-my-dropdown] {\n  order: 6;\n}\n\n.order-7[data-my-dropdown] {\n  order: 7;\n}\n\n.order-8[data-my-dropdown] {\n  order: 8;\n}\n\n.order-9[data-my-dropdown] {\n  order: 9;\n}\n\n.order-10[data-my-dropdown] {\n  order: 10;\n}\n\n.order-11[data-my-dropdown] {\n  order: 11;\n}\n\n.order-12[data-my-dropdown] {\n  order: 12;\n}\n\n.offset-1[data-my-dropdown] {\n  margin-left: 8.33333%;\n}\n\n.offset-2[data-my-dropdown] {\n  margin-left: 16.66667%;\n}\n\n.offset-3[data-my-dropdown] {\n  margin-left: 25%;\n}\n\n.offset-4[data-my-dropdown] {\n  margin-left: 33.33333%;\n}\n\n.offset-5[data-my-dropdown] {\n  margin-left: 41.66667%;\n}\n\n.offset-6[data-my-dropdown] {\n  margin-left: 50%;\n}\n\n.offset-7[data-my-dropdown] {\n  margin-left: 58.33333%;\n}\n\n.offset-8[data-my-dropdown] {\n  margin-left: 66.66667%;\n}\n\n.offset-9[data-my-dropdown] {\n  margin-left: 75%;\n}\n\n.offset-10[data-my-dropdown] {\n  margin-left: 83.33333%;\n}\n\n.offset-11[data-my-dropdown] {\n  margin-left: 91.66667%;\n}\n\n\@media (min-width: 576px) {\n  .col-sm[data-my-dropdown] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto[data-my-dropdown] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1[data-my-dropdown] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-sm-2[data-my-dropdown] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-sm-3[data-my-dropdown] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4[data-my-dropdown] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-sm-5[data-my-dropdown] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-sm-6[data-my-dropdown] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7[data-my-dropdown] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-sm-8[data-my-dropdown] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-sm-9[data-my-dropdown] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10[data-my-dropdown] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-sm-11[data-my-dropdown] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-sm-12[data-my-dropdown] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first[data-my-dropdown] {\n    order: -1;\n  }\n  .order-sm-last[data-my-dropdown] {\n    order: 13;\n  }\n  .order-sm-0[data-my-dropdown] {\n    order: 0;\n  }\n  .order-sm-1[data-my-dropdown] {\n    order: 1;\n  }\n  .order-sm-2[data-my-dropdown] {\n    order: 2;\n  }\n  .order-sm-3[data-my-dropdown] {\n    order: 3;\n  }\n  .order-sm-4[data-my-dropdown] {\n    order: 4;\n  }\n  .order-sm-5[data-my-dropdown] {\n    order: 5;\n  }\n  .order-sm-6[data-my-dropdown] {\n    order: 6;\n  }\n  .order-sm-7[data-my-dropdown] {\n    order: 7;\n  }\n  .order-sm-8[data-my-dropdown] {\n    order: 8;\n  }\n  .order-sm-9[data-my-dropdown] {\n    order: 9;\n  }\n  .order-sm-10[data-my-dropdown] {\n    order: 10;\n  }\n  .order-sm-11[data-my-dropdown] {\n    order: 11;\n  }\n  .order-sm-12[data-my-dropdown] {\n    order: 12;\n  }\n  .offset-sm-0[data-my-dropdown] {\n    margin-left: 0;\n  }\n  .offset-sm-1[data-my-dropdown] {\n    margin-left: 8.33333%;\n  }\n  .offset-sm-2[data-my-dropdown] {\n    margin-left: 16.66667%;\n  }\n  .offset-sm-3[data-my-dropdown] {\n    margin-left: 25%;\n  }\n  .offset-sm-4[data-my-dropdown] {\n    margin-left: 33.33333%;\n  }\n  .offset-sm-5[data-my-dropdown] {\n    margin-left: 41.66667%;\n  }\n  .offset-sm-6[data-my-dropdown] {\n    margin-left: 50%;\n  }\n  .offset-sm-7[data-my-dropdown] {\n    margin-left: 58.33333%;\n  }\n  .offset-sm-8[data-my-dropdown] {\n    margin-left: 66.66667%;\n  }\n  .offset-sm-9[data-my-dropdown] {\n    margin-left: 75%;\n  }\n  .offset-sm-10[data-my-dropdown] {\n    margin-left: 83.33333%;\n  }\n  .offset-sm-11[data-my-dropdown] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 768px) {\n  .col-md[data-my-dropdown] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto[data-my-dropdown] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1[data-my-dropdown] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-md-2[data-my-dropdown] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-md-3[data-my-dropdown] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4[data-my-dropdown] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-md-5[data-my-dropdown] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-md-6[data-my-dropdown] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7[data-my-dropdown] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-md-8[data-my-dropdown] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-md-9[data-my-dropdown] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10[data-my-dropdown] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-md-11[data-my-dropdown] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-md-12[data-my-dropdown] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first[data-my-dropdown] {\n    order: -1;\n  }\n  .order-md-last[data-my-dropdown] {\n    order: 13;\n  }\n  .order-md-0[data-my-dropdown] {\n    order: 0;\n  }\n  .order-md-1[data-my-dropdown] {\n    order: 1;\n  }\n  .order-md-2[data-my-dropdown] {\n    order: 2;\n  }\n  .order-md-3[data-my-dropdown] {\n    order: 3;\n  }\n  .order-md-4[data-my-dropdown] {\n    order: 4;\n  }\n  .order-md-5[data-my-dropdown] {\n    order: 5;\n  }\n  .order-md-6[data-my-dropdown] {\n    order: 6;\n  }\n  .order-md-7[data-my-dropdown] {\n    order: 7;\n  }\n  .order-md-8[data-my-dropdown] {\n    order: 8;\n  }\n  .order-md-9[data-my-dropdown] {\n    order: 9;\n  }\n  .order-md-10[data-my-dropdown] {\n    order: 10;\n  }\n  .order-md-11[data-my-dropdown] {\n    order: 11;\n  }\n  .order-md-12[data-my-dropdown] {\n    order: 12;\n  }\n  .offset-md-0[data-my-dropdown] {\n    margin-left: 0;\n  }\n  .offset-md-1[data-my-dropdown] {\n    margin-left: 8.33333%;\n  }\n  .offset-md-2[data-my-dropdown] {\n    margin-left: 16.66667%;\n  }\n  .offset-md-3[data-my-dropdown] {\n    margin-left: 25%;\n  }\n  .offset-md-4[data-my-dropdown] {\n    margin-left: 33.33333%;\n  }\n  .offset-md-5[data-my-dropdown] {\n    margin-left: 41.66667%;\n  }\n  .offset-md-6[data-my-dropdown] {\n    margin-left: 50%;\n  }\n  .offset-md-7[data-my-dropdown] {\n    margin-left: 58.33333%;\n  }\n  .offset-md-8[data-my-dropdown] {\n    margin-left: 66.66667%;\n  }\n  .offset-md-9[data-my-dropdown] {\n    margin-left: 75%;\n  }\n  .offset-md-10[data-my-dropdown] {\n    margin-left: 83.33333%;\n  }\n  .offset-md-11[data-my-dropdown] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 992px) {\n  .col-lg[data-my-dropdown] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto[data-my-dropdown] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1[data-my-dropdown] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-lg-2[data-my-dropdown] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-lg-3[data-my-dropdown] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4[data-my-dropdown] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-lg-5[data-my-dropdown] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-lg-6[data-my-dropdown] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7[data-my-dropdown] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-lg-8[data-my-dropdown] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-lg-9[data-my-dropdown] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10[data-my-dropdown] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-lg-11[data-my-dropdown] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-lg-12[data-my-dropdown] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first[data-my-dropdown] {\n    order: -1;\n  }\n  .order-lg-last[data-my-dropdown] {\n    order: 13;\n  }\n  .order-lg-0[data-my-dropdown] {\n    order: 0;\n  }\n  .order-lg-1[data-my-dropdown] {\n    order: 1;\n  }\n  .order-lg-2[data-my-dropdown] {\n    order: 2;\n  }\n  .order-lg-3[data-my-dropdown] {\n    order: 3;\n  }\n  .order-lg-4[data-my-dropdown] {\n    order: 4;\n  }\n  .order-lg-5[data-my-dropdown] {\n    order: 5;\n  }\n  .order-lg-6[data-my-dropdown] {\n    order: 6;\n  }\n  .order-lg-7[data-my-dropdown] {\n    order: 7;\n  }\n  .order-lg-8[data-my-dropdown] {\n    order: 8;\n  }\n  .order-lg-9[data-my-dropdown] {\n    order: 9;\n  }\n  .order-lg-10[data-my-dropdown] {\n    order: 10;\n  }\n  .order-lg-11[data-my-dropdown] {\n    order: 11;\n  }\n  .order-lg-12[data-my-dropdown] {\n    order: 12;\n  }\n  .offset-lg-0[data-my-dropdown] {\n    margin-left: 0;\n  }\n  .offset-lg-1[data-my-dropdown] {\n    margin-left: 8.33333%;\n  }\n  .offset-lg-2[data-my-dropdown] {\n    margin-left: 16.66667%;\n  }\n  .offset-lg-3[data-my-dropdown] {\n    margin-left: 25%;\n  }\n  .offset-lg-4[data-my-dropdown] {\n    margin-left: 33.33333%;\n  }\n  .offset-lg-5[data-my-dropdown] {\n    margin-left: 41.66667%;\n  }\n  .offset-lg-6[data-my-dropdown] {\n    margin-left: 50%;\n  }\n  .offset-lg-7[data-my-dropdown] {\n    margin-left: 58.33333%;\n  }\n  .offset-lg-8[data-my-dropdown] {\n    margin-left: 66.66667%;\n  }\n  .offset-lg-9[data-my-dropdown] {\n    margin-left: 75%;\n  }\n  .offset-lg-10[data-my-dropdown] {\n    margin-left: 83.33333%;\n  }\n  .offset-lg-11[data-my-dropdown] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 1200px) {\n  .col-xl[data-my-dropdown] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xl-auto[data-my-dropdown] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xl-1[data-my-dropdown] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-xl-2[data-my-dropdown] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-xl-3[data-my-dropdown] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4[data-my-dropdown] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-xl-5[data-my-dropdown] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-xl-6[data-my-dropdown] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7[data-my-dropdown] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-xl-8[data-my-dropdown] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-xl-9[data-my-dropdown] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10[data-my-dropdown] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-xl-11[data-my-dropdown] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-xl-12[data-my-dropdown] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first[data-my-dropdown] {\n    order: -1;\n  }\n  .order-xl-last[data-my-dropdown] {\n    order: 13;\n  }\n  .order-xl-0[data-my-dropdown] {\n    order: 0;\n  }\n  .order-xl-1[data-my-dropdown] {\n    order: 1;\n  }\n  .order-xl-2[data-my-dropdown] {\n    order: 2;\n  }\n  .order-xl-3[data-my-dropdown] {\n    order: 3;\n  }\n  .order-xl-4[data-my-dropdown] {\n    order: 4;\n  }\n  .order-xl-5[data-my-dropdown] {\n    order: 5;\n  }\n  .order-xl-6[data-my-dropdown] {\n    order: 6;\n  }\n  .order-xl-7[data-my-dropdown] {\n    order: 7;\n  }\n  .order-xl-8[data-my-dropdown] {\n    order: 8;\n  }\n  .order-xl-9[data-my-dropdown] {\n    order: 9;\n  }\n  .order-xl-10[data-my-dropdown] {\n    order: 10;\n  }\n  .order-xl-11[data-my-dropdown] {\n    order: 11;\n  }\n  .order-xl-12[data-my-dropdown] {\n    order: 12;\n  }\n  .offset-xl-0[data-my-dropdown] {\n    margin-left: 0;\n  }\n  .offset-xl-1[data-my-dropdown] {\n    margin-left: 8.33333%;\n  }\n  .offset-xl-2[data-my-dropdown] {\n    margin-left: 16.66667%;\n  }\n  .offset-xl-3[data-my-dropdown] {\n    margin-left: 25%;\n  }\n  .offset-xl-4[data-my-dropdown] {\n    margin-left: 33.33333%;\n  }\n  .offset-xl-5[data-my-dropdown] {\n    margin-left: 41.66667%;\n  }\n  .offset-xl-6[data-my-dropdown] {\n    margin-left: 50%;\n  }\n  .offset-xl-7[data-my-dropdown] {\n    margin-left: 58.33333%;\n  }\n  .offset-xl-8[data-my-dropdown] {\n    margin-left: 66.66667%;\n  }\n  .offset-xl-9[data-my-dropdown] {\n    margin-left: 75%;\n  }\n  .offset-xl-10[data-my-dropdown] {\n    margin-left: 83.33333%;\n  }\n  .offset-xl-11[data-my-dropdown] {\n    margin-left: 91.66667%;\n  }\n}\n\n.table[data-my-dropdown] {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n\n.table[data-my-dropdown]   th[data-my-dropdown], .table[data-my-dropdown]   td[data-my-dropdown] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table[data-my-dropdown]   thead[data-my-dropdown]   th[data-my-dropdown] {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table[data-my-dropdown]   tbody[data-my-dropdown]    + tbody[data-my-dropdown] {\n  border-top: 2px solid #dee2e6;\n}\n\n.table[data-my-dropdown]   .table[data-my-dropdown] {\n  background-color: #fff;\n}\n\n.table-sm[data-my-dropdown]   th[data-my-dropdown], .table-sm[data-my-dropdown]   td[data-my-dropdown] {\n  padding: 0.3rem;\n}\n\n.table-bordered[data-my-dropdown] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[data-my-dropdown]   th[data-my-dropdown], .table-bordered[data-my-dropdown]   td[data-my-dropdown] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[data-my-dropdown]   thead[data-my-dropdown]   th[data-my-dropdown], .table-bordered[data-my-dropdown]   thead[data-my-dropdown]   td[data-my-dropdown] {\n  border-bottom-width: 2px;\n}\n\n.table-striped[data-my-dropdown]   tbody[data-my-dropdown]   tr[data-my-dropdown]:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover[data-my-dropdown]   tbody[data-my-dropdown]   tr[data-my-dropdown]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-primary[data-my-dropdown], .table-primary[data-my-dropdown]    > th[data-my-dropdown], .table-primary[data-my-dropdown]    > td[data-my-dropdown] {\n  background-color: #b8daff;\n}\n\n.table-hover[data-my-dropdown]   .table-primary[data-my-dropdown]:hover {\n  background-color: #9fcdff;\n}\n\n.table-hover[data-my-dropdown]   .table-primary[data-my-dropdown]:hover    > td[data-my-dropdown], .table-hover[data-my-dropdown]   .table-primary[data-my-dropdown]:hover    > th[data-my-dropdown] {\n  background-color: #9fcdff;\n}\n\n.table-secondary[data-my-dropdown], .table-secondary[data-my-dropdown]    > th[data-my-dropdown], .table-secondary[data-my-dropdown]    > td[data-my-dropdown] {\n  background-color: #d6d8db;\n}\n\n.table-hover[data-my-dropdown]   .table-secondary[data-my-dropdown]:hover {\n  background-color: #c8cbcf;\n}\n\n.table-hover[data-my-dropdown]   .table-secondary[data-my-dropdown]:hover    > td[data-my-dropdown], .table-hover[data-my-dropdown]   .table-secondary[data-my-dropdown]:hover    > th[data-my-dropdown] {\n  background-color: #c8cbcf;\n}\n\n.table-success[data-my-dropdown], .table-success[data-my-dropdown]    > th[data-my-dropdown], .table-success[data-my-dropdown]    > td[data-my-dropdown] {\n  background-color: #c3e6cb;\n}\n\n.table-hover[data-my-dropdown]   .table-success[data-my-dropdown]:hover {\n  background-color: #b1dfbb;\n}\n\n.table-hover[data-my-dropdown]   .table-success[data-my-dropdown]:hover    > td[data-my-dropdown], .table-hover[data-my-dropdown]   .table-success[data-my-dropdown]:hover    > th[data-my-dropdown] {\n  background-color: #b1dfbb;\n}\n\n.table-info[data-my-dropdown], .table-info[data-my-dropdown]    > th[data-my-dropdown], .table-info[data-my-dropdown]    > td[data-my-dropdown] {\n  background-color: #bee5eb;\n}\n\n.table-hover[data-my-dropdown]   .table-info[data-my-dropdown]:hover {\n  background-color: #abdde5;\n}\n\n.table-hover[data-my-dropdown]   .table-info[data-my-dropdown]:hover    > td[data-my-dropdown], .table-hover[data-my-dropdown]   .table-info[data-my-dropdown]:hover    > th[data-my-dropdown] {\n  background-color: #abdde5;\n}\n\n.table-warning[data-my-dropdown], .table-warning[data-my-dropdown]    > th[data-my-dropdown], .table-warning[data-my-dropdown]    > td[data-my-dropdown] {\n  background-color: #ffeeba;\n}\n\n.table-hover[data-my-dropdown]   .table-warning[data-my-dropdown]:hover {\n  background-color: #ffe8a1;\n}\n\n.table-hover[data-my-dropdown]   .table-warning[data-my-dropdown]:hover    > td[data-my-dropdown], .table-hover[data-my-dropdown]   .table-warning[data-my-dropdown]:hover    > th[data-my-dropdown] {\n  background-color: #ffe8a1;\n}\n\n.table-danger[data-my-dropdown], .table-danger[data-my-dropdown]    > th[data-my-dropdown], .table-danger[data-my-dropdown]    > td[data-my-dropdown] {\n  background-color: #f5c6cb;\n}\n\n.table-hover[data-my-dropdown]   .table-danger[data-my-dropdown]:hover {\n  background-color: #f1b0b7;\n}\n\n.table-hover[data-my-dropdown]   .table-danger[data-my-dropdown]:hover    > td[data-my-dropdown], .table-hover[data-my-dropdown]   .table-danger[data-my-dropdown]:hover    > th[data-my-dropdown] {\n  background-color: #f1b0b7;\n}\n\n.table-light[data-my-dropdown], .table-light[data-my-dropdown]    > th[data-my-dropdown], .table-light[data-my-dropdown]    > td[data-my-dropdown] {\n  background-color: #fdfdfe;\n}\n\n.table-hover[data-my-dropdown]   .table-light[data-my-dropdown]:hover {\n  background-color: #ececf6;\n}\n\n.table-hover[data-my-dropdown]   .table-light[data-my-dropdown]:hover    > td[data-my-dropdown], .table-hover[data-my-dropdown]   .table-light[data-my-dropdown]:hover    > th[data-my-dropdown] {\n  background-color: #ececf6;\n}\n\n.table-dark[data-my-dropdown], .table-dark[data-my-dropdown]    > th[data-my-dropdown], .table-dark[data-my-dropdown]    > td[data-my-dropdown] {\n  background-color: #c6c8ca;\n}\n\n.table-hover[data-my-dropdown]   .table-dark[data-my-dropdown]:hover {\n  background-color: #b9bbbe;\n}\n\n.table-hover[data-my-dropdown]   .table-dark[data-my-dropdown]:hover    > td[data-my-dropdown], .table-hover[data-my-dropdown]   .table-dark[data-my-dropdown]:hover    > th[data-my-dropdown] {\n  background-color: #b9bbbe;\n}\n\n.table-active[data-my-dropdown], .table-active[data-my-dropdown]    > th[data-my-dropdown], .table-active[data-my-dropdown]    > td[data-my-dropdown] {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover[data-my-dropdown]   .table-active[data-my-dropdown]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover[data-my-dropdown]   .table-active[data-my-dropdown]:hover    > td[data-my-dropdown], .table-hover[data-my-dropdown]   .table-active[data-my-dropdown]:hover    > th[data-my-dropdown] {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table[data-my-dropdown]   .thead-dark[data-my-dropdown]   th[data-my-dropdown] {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e;\n}\n\n.table[data-my-dropdown]   .thead-light[data-my-dropdown]   th[data-my-dropdown] {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.table-dark[data-my-dropdown] {\n  color: #fff;\n  background-color: #212529;\n}\n\n.table-dark[data-my-dropdown]   th[data-my-dropdown], .table-dark[data-my-dropdown]   td[data-my-dropdown], .table-dark[data-my-dropdown]   thead[data-my-dropdown]   th[data-my-dropdown] {\n  border-color: #32383e;\n}\n\n.table-dark.table-bordered[data-my-dropdown] {\n  border: 0;\n}\n\n.table-dark.table-striped[data-my-dropdown]   tbody[data-my-dropdown]   tr[data-my-dropdown]:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.table-dark.table-hover[data-my-dropdown]   tbody[data-my-dropdown]   tr[data-my-dropdown]:hover {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n\@media (max-width: 575.98px) {\n  .table-responsive-sm[data-my-dropdown] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-sm[data-my-dropdown]    > .table-bordered[data-my-dropdown] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 767.98px) {\n  .table-responsive-md[data-my-dropdown] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-md[data-my-dropdown]    > .table-bordered[data-my-dropdown] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 991.98px) {\n  .table-responsive-lg[data-my-dropdown] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-lg[data-my-dropdown]    > .table-bordered[data-my-dropdown] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 1199.98px) {\n  .table-responsive-xl[data-my-dropdown] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-xl[data-my-dropdown]    > .table-bordered[data-my-dropdown] {\n    border: 0;\n  }\n}\n\n.table-responsive[data-my-dropdown] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.table-responsive[data-my-dropdown]    > .table-bordered[data-my-dropdown] {\n  border: 0;\n}\n\n.form-control[data-my-dropdown] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control[data-my-dropdown]::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control[data-my-dropdown]:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.form-control[data-my-dropdown]::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control[data-my-dropdown]:disabled, .form-control[readonly][data-my-dropdown] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\nselect.form-control[data-my-dropdown]:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n}\n\nselect.form-control[data-my-dropdown]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.form-control-file[data-my-dropdown], .form-control-range[data-my-dropdown] {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label[data-my-dropdown] {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg[data-my-dropdown] {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.col-form-label-sm[data-my-dropdown] {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.form-control-plaintext[data-my-dropdown] {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n\n.form-control-plaintext.form-control-sm[data-my-dropdown], .input-group-sm[data-my-dropdown]    > .form-control-plaintext.form-control[data-my-dropdown], .input-group-sm[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > .form-control-plaintext.input-group-text[data-my-dropdown], .input-group-sm[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > .form-control-plaintext.input-group-text[data-my-dropdown], .input-group-sm[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > .form-control-plaintext.btn[data-my-dropdown], .input-group-sm[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > .form-control-plaintext.btn[data-my-dropdown], .form-control-plaintext.form-control-lg[data-my-dropdown], .input-group-lg[data-my-dropdown]    > .form-control-plaintext.form-control[data-my-dropdown], .input-group-lg[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > .form-control-plaintext.input-group-text[data-my-dropdown], .input-group-lg[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > .form-control-plaintext.input-group-text[data-my-dropdown], .input-group-lg[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > .form-control-plaintext.btn[data-my-dropdown], .input-group-lg[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > .form-control-plaintext.btn[data-my-dropdown] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm[data-my-dropdown], .input-group-sm[data-my-dropdown]    > .form-control[data-my-dropdown], .input-group-sm[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > .input-group-text[data-my-dropdown], .input-group-sm[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > .input-group-text[data-my-dropdown], .input-group-sm[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > .btn[data-my-dropdown], .input-group-sm[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > .btn[data-my-dropdown] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\nselect.form-control-sm[data-my-dropdown]:not([size]):not([multiple]), .input-group-sm[data-my-dropdown]    > select.form-control[data-my-dropdown]:not([size]):not([multiple]), .input-group-sm[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > select.input-group-text[data-my-dropdown]:not([size]):not([multiple]), .input-group-sm[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > select.input-group-text[data-my-dropdown]:not([size]):not([multiple]), .input-group-sm[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > select.btn[data-my-dropdown]:not([size]):not([multiple]), .input-group-sm[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > select.btn[data-my-dropdown]:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px);\n}\n\n.form-control-lg[data-my-dropdown], .input-group-lg[data-my-dropdown]    > .form-control[data-my-dropdown], .input-group-lg[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > .input-group-text[data-my-dropdown], .input-group-lg[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > .input-group-text[data-my-dropdown], .input-group-lg[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > .btn[data-my-dropdown], .input-group-lg[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > .btn[data-my-dropdown] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\nselect.form-control-lg[data-my-dropdown]:not([size]):not([multiple]), .input-group-lg[data-my-dropdown]    > select.form-control[data-my-dropdown]:not([size]):not([multiple]), .input-group-lg[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > select.input-group-text[data-my-dropdown]:not([size]):not([multiple]), .input-group-lg[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > select.input-group-text[data-my-dropdown]:not([size]):not([multiple]), .input-group-lg[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > select.btn[data-my-dropdown]:not([size]):not([multiple]), .input-group-lg[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > select.btn[data-my-dropdown]:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px);\n}\n\n.form-group[data-my-dropdown] {\n  margin-bottom: 1rem;\n}\n\n.form-text[data-my-dropdown] {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row[data-my-dropdown] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n\n.form-row[data-my-dropdown]    > .col[data-my-dropdown], .form-row[data-my-dropdown]    > [class*=\"col-\"][data-my-dropdown] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check[data-my-dropdown] {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input[data-my-dropdown] {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n\n.form-check-input[data-my-dropdown]:disabled    ~ .form-check-label[data-my-dropdown] {\n  color: #6c757d;\n}\n\n.form-check-label[data-my-dropdown] {\n  margin-bottom: 0;\n}\n\n.form-check-inline[data-my-dropdown] {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.form-check-inline[data-my-dropdown]   .form-check-input[data-my-dropdown] {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback[data-my-dropdown] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n\n.valid-tooltip[data-my-dropdown] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: .2rem;\n}\n\n.was-validated[data-my-dropdown]   .form-control[data-my-dropdown]:valid, .form-control.is-valid[data-my-dropdown], .was-validated\n.custom-select[data-my-dropdown]:valid, .custom-select.is-valid[data-my-dropdown] {\n  border-color: #28a745;\n}\n\n.was-validated[data-my-dropdown]   .form-control[data-my-dropdown]:valid:focus, .form-control.is-valid[data-my-dropdown]:focus, .was-validated\n.custom-select[data-my-dropdown]:valid:focus, .custom-select.is-valid[data-my-dropdown]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated[data-my-dropdown]   .form-control[data-my-dropdown]:valid    ~ .valid-feedback[data-my-dropdown], .was-validated[data-my-dropdown]   .form-control[data-my-dropdown]:valid    ~ .valid-tooltip[data-my-dropdown], .form-control.is-valid[data-my-dropdown]    ~ .valid-feedback[data-my-dropdown], .form-control.is-valid[data-my-dropdown]    ~ .valid-tooltip[data-my-dropdown], .was-validated\n.custom-select[data-my-dropdown]:valid    ~ .valid-feedback[data-my-dropdown], .was-validated\n.custom-select[data-my-dropdown]:valid    ~ .valid-tooltip[data-my-dropdown], .custom-select.is-valid[data-my-dropdown]    ~ .valid-feedback[data-my-dropdown], .custom-select.is-valid[data-my-dropdown]    ~ .valid-tooltip[data-my-dropdown] {\n  display: block;\n}\n\n.was-validated[data-my-dropdown]   .form-check-input[data-my-dropdown]:valid    ~ .form-check-label[data-my-dropdown], .form-check-input.is-valid[data-my-dropdown]    ~ .form-check-label[data-my-dropdown] {\n  color: #28a745;\n}\n\n.was-validated[data-my-dropdown]   .form-check-input[data-my-dropdown]:valid    ~ .valid-feedback[data-my-dropdown], .was-validated[data-my-dropdown]   .form-check-input[data-my-dropdown]:valid    ~ .valid-tooltip[data-my-dropdown], .form-check-input.is-valid[data-my-dropdown]    ~ .valid-feedback[data-my-dropdown], .form-check-input.is-valid[data-my-dropdown]    ~ .valid-tooltip[data-my-dropdown] {\n  display: block;\n}\n\n.was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:valid    ~ .custom-control-label[data-my-dropdown], .custom-control-input.is-valid[data-my-dropdown]    ~ .custom-control-label[data-my-dropdown] {\n  color: #28a745;\n}\n\n.was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:valid    ~ .custom-control-label[data-my-dropdown]::before, .custom-control-input.is-valid[data-my-dropdown]    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: #71dd8a;\n}\n\n.was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:valid    ~ .valid-feedback[data-my-dropdown], .was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:valid    ~ .valid-tooltip[data-my-dropdown], .custom-control-input.is-valid[data-my-dropdown]    ~ .valid-feedback[data-my-dropdown], .custom-control-input.is-valid[data-my-dropdown]    ~ .valid-tooltip[data-my-dropdown] {\n  display: block;\n}\n\n.was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:valid:checked    ~ .custom-control-label[data-my-dropdown]::before, .custom-control-input.is-valid[data-my-dropdown]:checked    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: #34ce57;\n}\n\n.was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:valid:focus    ~ .custom-control-label[data-my-dropdown]::before, .custom-control-input.is-valid[data-my-dropdown]:focus    ~ .custom-control-label[data-my-dropdown]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated[data-my-dropdown]   .custom-file-input[data-my-dropdown]:valid    ~ .custom-file-label[data-my-dropdown], .custom-file-input.is-valid[data-my-dropdown]    ~ .custom-file-label[data-my-dropdown] {\n  border-color: #28a745;\n}\n\n.was-validated[data-my-dropdown]   .custom-file-input[data-my-dropdown]:valid    ~ .custom-file-label[data-my-dropdown]::before, .custom-file-input.is-valid[data-my-dropdown]    ~ .custom-file-label[data-my-dropdown]::before {\n  border-color: inherit;\n}\n\n.was-validated[data-my-dropdown]   .custom-file-input[data-my-dropdown]:valid    ~ .valid-feedback[data-my-dropdown], .was-validated[data-my-dropdown]   .custom-file-input[data-my-dropdown]:valid    ~ .valid-tooltip[data-my-dropdown], .custom-file-input.is-valid[data-my-dropdown]    ~ .valid-feedback[data-my-dropdown], .custom-file-input.is-valid[data-my-dropdown]    ~ .valid-tooltip[data-my-dropdown] {\n  display: block;\n}\n\n.was-validated[data-my-dropdown]   .custom-file-input[data-my-dropdown]:valid:focus    ~ .custom-file-label[data-my-dropdown], .custom-file-input.is-valid[data-my-dropdown]:focus    ~ .custom-file-label[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.invalid-feedback[data-my-dropdown] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.invalid-tooltip[data-my-dropdown] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem;\n}\n\n.was-validated[data-my-dropdown]   .form-control[data-my-dropdown]:invalid, .form-control.is-invalid[data-my-dropdown], .was-validated\n.custom-select[data-my-dropdown]:invalid, .custom-select.is-invalid[data-my-dropdown] {\n  border-color: #dc3545;\n}\n\n.was-validated[data-my-dropdown]   .form-control[data-my-dropdown]:invalid:focus, .form-control.is-invalid[data-my-dropdown]:focus, .was-validated\n.custom-select[data-my-dropdown]:invalid:focus, .custom-select.is-invalid[data-my-dropdown]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated[data-my-dropdown]   .form-control[data-my-dropdown]:invalid    ~ .invalid-feedback[data-my-dropdown], .was-validated[data-my-dropdown]   .form-control[data-my-dropdown]:invalid    ~ .invalid-tooltip[data-my-dropdown], .form-control.is-invalid[data-my-dropdown]    ~ .invalid-feedback[data-my-dropdown], .form-control.is-invalid[data-my-dropdown]    ~ .invalid-tooltip[data-my-dropdown], .was-validated\n.custom-select[data-my-dropdown]:invalid    ~ .invalid-feedback[data-my-dropdown], .was-validated\n.custom-select[data-my-dropdown]:invalid    ~ .invalid-tooltip[data-my-dropdown], .custom-select.is-invalid[data-my-dropdown]    ~ .invalid-feedback[data-my-dropdown], .custom-select.is-invalid[data-my-dropdown]    ~ .invalid-tooltip[data-my-dropdown] {\n  display: block;\n}\n\n.was-validated[data-my-dropdown]   .form-check-input[data-my-dropdown]:invalid    ~ .form-check-label[data-my-dropdown], .form-check-input.is-invalid[data-my-dropdown]    ~ .form-check-label[data-my-dropdown] {\n  color: #dc3545;\n}\n\n.was-validated[data-my-dropdown]   .form-check-input[data-my-dropdown]:invalid    ~ .invalid-feedback[data-my-dropdown], .was-validated[data-my-dropdown]   .form-check-input[data-my-dropdown]:invalid    ~ .invalid-tooltip[data-my-dropdown], .form-check-input.is-invalid[data-my-dropdown]    ~ .invalid-feedback[data-my-dropdown], .form-check-input.is-invalid[data-my-dropdown]    ~ .invalid-tooltip[data-my-dropdown] {\n  display: block;\n}\n\n.was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:invalid    ~ .custom-control-label[data-my-dropdown], .custom-control-input.is-invalid[data-my-dropdown]    ~ .custom-control-label[data-my-dropdown] {\n  color: #dc3545;\n}\n\n.was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:invalid    ~ .custom-control-label[data-my-dropdown]::before, .custom-control-input.is-invalid[data-my-dropdown]    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: #efa2a9;\n}\n\n.was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:invalid    ~ .invalid-feedback[data-my-dropdown], .was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:invalid    ~ .invalid-tooltip[data-my-dropdown], .custom-control-input.is-invalid[data-my-dropdown]    ~ .invalid-feedback[data-my-dropdown], .custom-control-input.is-invalid[data-my-dropdown]    ~ .invalid-tooltip[data-my-dropdown] {\n  display: block;\n}\n\n.was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:invalid:checked    ~ .custom-control-label[data-my-dropdown]::before, .custom-control-input.is-invalid[data-my-dropdown]:checked    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: #e4606d;\n}\n\n.was-validated[data-my-dropdown]   .custom-control-input[data-my-dropdown]:invalid:focus    ~ .custom-control-label[data-my-dropdown]::before, .custom-control-input.is-invalid[data-my-dropdown]:focus    ~ .custom-control-label[data-my-dropdown]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated[data-my-dropdown]   .custom-file-input[data-my-dropdown]:invalid    ~ .custom-file-label[data-my-dropdown], .custom-file-input.is-invalid[data-my-dropdown]    ~ .custom-file-label[data-my-dropdown] {\n  border-color: #dc3545;\n}\n\n.was-validated[data-my-dropdown]   .custom-file-input[data-my-dropdown]:invalid    ~ .custom-file-label[data-my-dropdown]::before, .custom-file-input.is-invalid[data-my-dropdown]    ~ .custom-file-label[data-my-dropdown]::before {\n  border-color: inherit;\n}\n\n.was-validated[data-my-dropdown]   .custom-file-input[data-my-dropdown]:invalid    ~ .invalid-feedback[data-my-dropdown], .was-validated[data-my-dropdown]   .custom-file-input[data-my-dropdown]:invalid    ~ .invalid-tooltip[data-my-dropdown], .custom-file-input.is-invalid[data-my-dropdown]    ~ .invalid-feedback[data-my-dropdown], .custom-file-input.is-invalid[data-my-dropdown]    ~ .invalid-tooltip[data-my-dropdown] {\n  display: block;\n}\n\n.was-validated[data-my-dropdown]   .custom-file-input[data-my-dropdown]:invalid:focus    ~ .custom-file-label[data-my-dropdown], .custom-file-input.is-invalid[data-my-dropdown]:focus    ~ .custom-file-label[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.form-inline[data-my-dropdown] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n\n.form-inline[data-my-dropdown]   .form-check[data-my-dropdown] {\n  width: 100%;\n}\n\n\@media (min-width: 576px) {\n  .form-inline[data-my-dropdown]   label[data-my-dropdown] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline[data-my-dropdown]   .form-group[data-my-dropdown] {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline[data-my-dropdown]   .form-control[data-my-dropdown] {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline[data-my-dropdown]   .form-control-plaintext[data-my-dropdown] {\n    display: inline-block;\n  }\n  .form-inline[data-my-dropdown]   .input-group[data-my-dropdown] {\n    width: auto;\n  }\n  .form-inline[data-my-dropdown]   .form-check[data-my-dropdown] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline[data-my-dropdown]   .form-check-input[data-my-dropdown] {\n    position: relative;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline[data-my-dropdown]   .custom-control[data-my-dropdown] {\n    align-items: center;\n    justify-content: center;\n  }\n  .form-inline[data-my-dropdown]   .custom-control-label[data-my-dropdown] {\n    margin-bottom: 0;\n  }\n}\n\n.btn[data-my-dropdown] {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.btn[data-my-dropdown]:hover, .btn[data-my-dropdown]:focus {\n  text-decoration: none;\n}\n\n.btn[data-my-dropdown]:focus, .btn.focus[data-my-dropdown] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.btn.disabled[data-my-dropdown], .btn[data-my-dropdown]:disabled {\n  opacity: 0.65;\n}\n\n.btn[data-my-dropdown]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.btn[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn[data-my-dropdown]:not(:disabled):not(.disabled).active {\n  background-image: none;\n}\n\na.btn.disabled[data-my-dropdown], fieldset[data-my-dropdown]:disabled   a.btn[data-my-dropdown] {\n  pointer-events: none;\n}\n\n.btn-primary[data-my-dropdown] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n\n.btn-primary[data-my-dropdown]:focus, .btn-primary.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-primary.disabled[data-my-dropdown], .btn-primary[data-my-dropdown]:disabled {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-primary[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-primary.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n\n.btn-primary[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-primary[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-primary.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-secondary[data-my-dropdown] {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n\n.btn-secondary[data-my-dropdown]:focus, .btn-secondary.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-secondary.disabled[data-my-dropdown], .btn-secondary[data-my-dropdown]:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-secondary[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-secondary.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n\n.btn-secondary[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-secondary[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-secondary.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-success[data-my-dropdown] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n\n.btn-success[data-my-dropdown]:focus, .btn-success.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-success.disabled[data-my-dropdown], .btn-success[data-my-dropdown]:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-success[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-success.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n\n.btn-success[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-success[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-success.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-info[data-my-dropdown] {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n\n.btn-info[data-my-dropdown]:focus, .btn-info.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-info.disabled[data-my-dropdown], .btn-info[data-my-dropdown]:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-info[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-info.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n\n.btn-info[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-info[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-info.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-warning[data-my-dropdown] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning[data-my-dropdown]:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n\n.btn-warning[data-my-dropdown]:focus, .btn-warning.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-warning.disabled[data-my-dropdown], .btn-warning[data-my-dropdown]:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-warning[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-warning.dropdown-toggle[data-my-dropdown] {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n\n.btn-warning[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-warning[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-warning.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-danger[data-my-dropdown] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n\n.btn-danger[data-my-dropdown]:focus, .btn-danger.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-danger.disabled[data-my-dropdown], .btn-danger[data-my-dropdown]:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-danger[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-danger.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n\n.btn-danger[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-danger[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-danger.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-light[data-my-dropdown] {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light[data-my-dropdown]:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n\n.btn-light[data-my-dropdown]:focus, .btn-light.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-light.disabled[data-my-dropdown], .btn-light[data-my-dropdown]:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-light[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-light.dropdown-toggle[data-my-dropdown] {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n\n.btn-light[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-light[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-light.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-dark[data-my-dropdown] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n\n.btn-dark[data-my-dropdown]:focus, .btn-dark.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-dark.disabled[data-my-dropdown], .btn-dark[data-my-dropdown]:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-dark[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-dark.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n\n.btn-dark[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-dark[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-dark.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-primary[data-my-dropdown] {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-dropdown]:focus, .btn-outline-primary.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-primary.disabled[data-my-dropdown], .btn-outline-primary[data-my-dropdown]:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-outline-primary[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-outline-primary[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-outline-primary.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-outline-primary[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-outline-primary.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-secondary[data-my-dropdown] {\n  color: #6c757d;\n  background-color: transparent;\n  background-image: none;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-dropdown]:focus, .btn-outline-secondary.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-secondary.disabled[data-my-dropdown], .btn-outline-secondary[data-my-dropdown]:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-secondary[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-outline-secondary[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-outline-secondary.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-outline-secondary.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-success[data-my-dropdown] {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-dropdown]:focus, .btn-outline-success.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-success.disabled[data-my-dropdown], .btn-outline-success[data-my-dropdown]:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n\n.btn-outline-success[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-outline-success[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-outline-success.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-outline-success[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-outline-success.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-info[data-my-dropdown] {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-dropdown]:focus, .btn-outline-info.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-info.disabled[data-my-dropdown], .btn-outline-info[data-my-dropdown]:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n\n.btn-outline-info[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-outline-info[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-outline-info.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-outline-info[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-outline-info.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning[data-my-dropdown] {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-dropdown]:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-dropdown]:focus, .btn-outline-warning.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-warning.disabled[data-my-dropdown], .btn-outline-warning[data-my-dropdown]:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n\n.btn-outline-warning[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-outline-warning[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-outline-warning.dropdown-toggle[data-my-dropdown] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-outline-warning[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-outline-warning.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-danger[data-my-dropdown] {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-dropdown]:focus, .btn-outline-danger.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-danger.disabled[data-my-dropdown], .btn-outline-danger[data-my-dropdown]:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n\n.btn-outline-danger[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-outline-danger[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-outline-danger.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-outline-danger[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-outline-danger.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-light[data-my-dropdown] {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-dropdown]:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-dropdown]:focus, .btn-outline-light.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-light.disabled[data-my-dropdown], .btn-outline-light[data-my-dropdown]:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-light[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-outline-light[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-outline-light.dropdown-toggle[data-my-dropdown] {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-outline-light[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-outline-light.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark[data-my-dropdown] {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-dropdown]:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-dropdown]:focus, .btn-outline-dark.focus[data-my-dropdown] {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-dark.disabled[data-my-dropdown], .btn-outline-dark[data-my-dropdown]:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n\n.btn-outline-dark[data-my-dropdown]:not(:disabled):not(.disabled):active, .btn-outline-dark[data-my-dropdown]:not(:disabled):not(.disabled).active, .show[data-my-dropdown]    > .btn-outline-dark.dropdown-toggle[data-my-dropdown] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-dropdown]:not(:disabled):not(.disabled):active:focus, .btn-outline-dark[data-my-dropdown]:not(:disabled):not(.disabled).active:focus, .show[data-my-dropdown]    > .btn-outline-dark.dropdown-toggle[data-my-dropdown]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link[data-my-dropdown] {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-link[data-my-dropdown]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-link[data-my-dropdown]:focus, .btn-link.focus[data-my-dropdown] {\n  text-decoration: underline;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.btn-link[data-my-dropdown]:disabled, .btn-link.disabled[data-my-dropdown] {\n  color: #6c757d;\n}\n\n.btn-lg[data-my-dropdown], .btn-group-lg[data-my-dropdown]    > .btn[data-my-dropdown] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.btn-sm[data-my-dropdown], .btn-group-sm[data-my-dropdown]    > .btn[data-my-dropdown] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block[data-my-dropdown] {\n  display: block;\n  width: 100%;\n}\n\n.btn-block[data-my-dropdown]    + .btn-block[data-my-dropdown] {\n  margin-top: 0.5rem;\n}\n\ninput[type=\"submit\"].btn-block[data-my-dropdown], input[type=\"reset\"].btn-block[data-my-dropdown], input[type=\"button\"].btn-block[data-my-dropdown] {\n  width: 100%;\n}\n\n.fade[data-my-dropdown] {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n.fade.show[data-my-dropdown] {\n  opacity: 1;\n}\n\n.collapse[data-my-dropdown] {\n  display: none;\n}\n\n.collapse.show[data-my-dropdown] {\n  display: block;\n}\n\ntr.collapse.show[data-my-dropdown] {\n  display: table-row;\n}\n\ntbody.collapse.show[data-my-dropdown] {\n  display: table-row-group;\n}\n\n.collapsing[data-my-dropdown] {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n\n.dropup[data-my-dropdown], .dropdown[data-my-dropdown] {\n  position: relative;\n}\n\n.dropdown-toggle[data-my-dropdown]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle[data-my-dropdown]:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu[data-my-dropdown] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropup[data-my-dropdown]   .dropdown-menu[data-my-dropdown] {\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n\n.dropup[data-my-dropdown]   .dropdown-toggle[data-my-dropdown]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n\n.dropup[data-my-dropdown]   .dropdown-toggle[data-my-dropdown]:empty::after {\n  margin-left: 0;\n}\n\n.dropright[data-my-dropdown]   .dropdown-menu[data-my-dropdown] {\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n\n.dropright[data-my-dropdown]   .dropdown-toggle[data-my-dropdown]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n\n.dropright[data-my-dropdown]   .dropdown-toggle[data-my-dropdown]:empty::after {\n  margin-left: 0;\n}\n\n.dropright[data-my-dropdown]   .dropdown-toggle[data-my-dropdown]::after {\n  vertical-align: 0;\n}\n\n.dropleft[data-my-dropdown]   .dropdown-menu[data-my-dropdown] {\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n\n.dropleft[data-my-dropdown]   .dropdown-toggle[data-my-dropdown]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n\n.dropleft[data-my-dropdown]   .dropdown-toggle[data-my-dropdown]::after {\n  display: none;\n}\n\n.dropleft[data-my-dropdown]   .dropdown-toggle[data-my-dropdown]::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n\n.dropleft[data-my-dropdown]   .dropdown-toggle[data-my-dropdown]:empty::after {\n  margin-left: 0;\n}\n\n.dropleft[data-my-dropdown]   .dropdown-toggle[data-my-dropdown]::before {\n  vertical-align: 0;\n}\n\n.dropdown-divider[data-my-dropdown] {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item[data-my-dropdown] {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.dropdown-item[data-my-dropdown]:hover, .dropdown-item[data-my-dropdown]:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.dropdown-item.active[data-my-dropdown], .dropdown-item[data-my-dropdown]:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n\n.dropdown-item.disabled[data-my-dropdown], .dropdown-item[data-my-dropdown]:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.dropdown-menu.show[data-my-dropdown] {\n  display: block;\n}\n\n.dropdown-header[data-my-dropdown] {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.btn-group[data-my-dropdown], .btn-group-vertical[data-my-dropdown] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.btn-group[data-my-dropdown]    > .btn[data-my-dropdown], .btn-group-vertical[data-my-dropdown]    > .btn[data-my-dropdown] {\n  position: relative;\n  flex: 0 1 auto;\n}\n\n.btn-group[data-my-dropdown]    > .btn[data-my-dropdown]:hover, .btn-group-vertical[data-my-dropdown]    > .btn[data-my-dropdown]:hover {\n  z-index: 1;\n}\n\n.btn-group[data-my-dropdown]    > .btn[data-my-dropdown]:focus, .btn-group[data-my-dropdown]    > .btn[data-my-dropdown]:active, .btn-group[data-my-dropdown]    > .btn.active[data-my-dropdown], .btn-group-vertical[data-my-dropdown]    > .btn[data-my-dropdown]:focus, .btn-group-vertical[data-my-dropdown]    > .btn[data-my-dropdown]:active, .btn-group-vertical[data-my-dropdown]    > .btn.active[data-my-dropdown] {\n  z-index: 1;\n}\n\n.btn-group[data-my-dropdown]   .btn[data-my-dropdown]    + .btn[data-my-dropdown], .btn-group[data-my-dropdown]   .btn[data-my-dropdown]    + .btn-group[data-my-dropdown], .btn-group[data-my-dropdown]   .btn-group[data-my-dropdown]    + .btn[data-my-dropdown], .btn-group[data-my-dropdown]   .btn-group[data-my-dropdown]    + .btn-group[data-my-dropdown], .btn-group-vertical[data-my-dropdown]   .btn[data-my-dropdown]    + .btn[data-my-dropdown], .btn-group-vertical[data-my-dropdown]   .btn[data-my-dropdown]    + .btn-group[data-my-dropdown], .btn-group-vertical[data-my-dropdown]   .btn-group[data-my-dropdown]    + .btn[data-my-dropdown], .btn-group-vertical[data-my-dropdown]   .btn-group[data-my-dropdown]    + .btn-group[data-my-dropdown] {\n  margin-left: -1px;\n}\n\n.btn-toolbar[data-my-dropdown] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.btn-toolbar[data-my-dropdown]   .input-group[data-my-dropdown] {\n  width: auto;\n}\n\n.btn-group[data-my-dropdown]    > .btn[data-my-dropdown]:first-child {\n  margin-left: 0;\n}\n\n.btn-group[data-my-dropdown]    > .btn[data-my-dropdown]:not(:last-child):not(.dropdown-toggle), .btn-group[data-my-dropdown]    > .btn-group[data-my-dropdown]:not(:last-child)    > .btn[data-my-dropdown] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-group[data-my-dropdown]    > .btn[data-my-dropdown]:not(:first-child), .btn-group[data-my-dropdown]    > .btn-group[data-my-dropdown]:not(:first-child)    > .btn[data-my-dropdown] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split[data-my-dropdown] {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n\n.dropdown-toggle-split[data-my-dropdown]::after {\n  margin-left: 0;\n}\n\n.btn-sm[data-my-dropdown]    + .dropdown-toggle-split[data-my-dropdown], .btn-group-sm[data-my-dropdown]    > .btn[data-my-dropdown]    + .dropdown-toggle-split[data-my-dropdown] {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg[data-my-dropdown]    + .dropdown-toggle-split[data-my-dropdown], .btn-group-lg[data-my-dropdown]    > .btn[data-my-dropdown]    + .dropdown-toggle-split[data-my-dropdown] {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical[data-my-dropdown] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.btn-group-vertical[data-my-dropdown]   .btn[data-my-dropdown], .btn-group-vertical[data-my-dropdown]   .btn-group[data-my-dropdown] {\n  width: 100%;\n}\n\n.btn-group-vertical[data-my-dropdown]    > .btn[data-my-dropdown]    + .btn[data-my-dropdown], .btn-group-vertical[data-my-dropdown]    > .btn[data-my-dropdown]    + .btn-group[data-my-dropdown], .btn-group-vertical[data-my-dropdown]    > .btn-group[data-my-dropdown]    + .btn[data-my-dropdown], .btn-group-vertical[data-my-dropdown]    > .btn-group[data-my-dropdown]    + .btn-group[data-my-dropdown] {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical[data-my-dropdown]    > .btn[data-my-dropdown]:not(:last-child):not(.dropdown-toggle), .btn-group-vertical[data-my-dropdown]    > .btn-group[data-my-dropdown]:not(:last-child)    > .btn[data-my-dropdown] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical[data-my-dropdown]    > .btn[data-my-dropdown]:not(:first-child), .btn-group-vertical[data-my-dropdown]    > .btn-group[data-my-dropdown]:not(:first-child)    > .btn[data-my-dropdown] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle[data-my-dropdown]    > .btn[data-my-dropdown], .btn-group-toggle[data-my-dropdown]    > .btn-group[data-my-dropdown]    > .btn[data-my-dropdown] {\n  margin-bottom: 0;\n}\n\n.btn-group-toggle[data-my-dropdown]    > .btn[data-my-dropdown]   input[type=\"radio\"][data-my-dropdown], .btn-group-toggle[data-my-dropdown]    > .btn[data-my-dropdown]   input[type=\"checkbox\"][data-my-dropdown], .btn-group-toggle[data-my-dropdown]    > .btn-group[data-my-dropdown]    > .btn[data-my-dropdown]   input[type=\"radio\"][data-my-dropdown], .btn-group-toggle[data-my-dropdown]    > .btn-group[data-my-dropdown]    > .btn[data-my-dropdown]   input[type=\"checkbox\"][data-my-dropdown] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group[data-my-dropdown] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n\n.input-group[data-my-dropdown]    > .form-control[data-my-dropdown], .input-group[data-my-dropdown]    > .custom-select[data-my-dropdown], .input-group[data-my-dropdown]    > .custom-file[data-my-dropdown] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n\n.input-group[data-my-dropdown]    > .form-control[data-my-dropdown]:focus, .input-group[data-my-dropdown]    > .custom-select[data-my-dropdown]:focus, .input-group[data-my-dropdown]    > .custom-file[data-my-dropdown]:focus {\n  z-index: 3;\n}\n\n.input-group[data-my-dropdown]    > .form-control[data-my-dropdown]    + .form-control[data-my-dropdown], .input-group[data-my-dropdown]    > .form-control[data-my-dropdown]    + .custom-select[data-my-dropdown], .input-group[data-my-dropdown]    > .form-control[data-my-dropdown]    + .custom-file[data-my-dropdown], .input-group[data-my-dropdown]    > .custom-select[data-my-dropdown]    + .form-control[data-my-dropdown], .input-group[data-my-dropdown]    > .custom-select[data-my-dropdown]    + .custom-select[data-my-dropdown], .input-group[data-my-dropdown]    > .custom-select[data-my-dropdown]    + .custom-file[data-my-dropdown], .input-group[data-my-dropdown]    > .custom-file[data-my-dropdown]    + .form-control[data-my-dropdown], .input-group[data-my-dropdown]    > .custom-file[data-my-dropdown]    + .custom-select[data-my-dropdown], .input-group[data-my-dropdown]    > .custom-file[data-my-dropdown]    + .custom-file[data-my-dropdown] {\n  margin-left: -1px;\n}\n\n.input-group[data-my-dropdown]    > .form-control[data-my-dropdown]:not(:last-child), .input-group[data-my-dropdown]    > .custom-select[data-my-dropdown]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-dropdown]    > .form-control[data-my-dropdown]:not(:first-child), .input-group[data-my-dropdown]    > .custom-select[data-my-dropdown]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group[data-my-dropdown]    > .custom-file[data-my-dropdown] {\n  display: flex;\n  align-items: center;\n}\n\n.input-group[data-my-dropdown]    > .custom-file[data-my-dropdown]:not(:last-child)   .custom-file-label[data-my-dropdown], .input-group[data-my-dropdown]    > .custom-file[data-my-dropdown]:not(:last-child)   .custom-file-label[data-my-dropdown]::before {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-dropdown]    > .custom-file[data-my-dropdown]:not(:first-child)   .custom-file-label[data-my-dropdown], .input-group[data-my-dropdown]    > .custom-file[data-my-dropdown]:not(:first-child)   .custom-file-label[data-my-dropdown]::before {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-prepend[data-my-dropdown], .input-group-append[data-my-dropdown] {\n  display: flex;\n}\n\n.input-group-prepend[data-my-dropdown]   .btn[data-my-dropdown], .input-group-append[data-my-dropdown]   .btn[data-my-dropdown] {\n  position: relative;\n  z-index: 2;\n}\n\n.input-group-prepend[data-my-dropdown]   .btn[data-my-dropdown]    + .btn[data-my-dropdown], .input-group-prepend[data-my-dropdown]   .btn[data-my-dropdown]    + .input-group-text[data-my-dropdown], .input-group-prepend[data-my-dropdown]   .input-group-text[data-my-dropdown]    + .input-group-text[data-my-dropdown], .input-group-prepend[data-my-dropdown]   .input-group-text[data-my-dropdown]    + .btn[data-my-dropdown], .input-group-append[data-my-dropdown]   .btn[data-my-dropdown]    + .btn[data-my-dropdown], .input-group-append[data-my-dropdown]   .btn[data-my-dropdown]    + .input-group-text[data-my-dropdown], .input-group-append[data-my-dropdown]   .input-group-text[data-my-dropdown]    + .input-group-text[data-my-dropdown], .input-group-append[data-my-dropdown]   .input-group-text[data-my-dropdown]    + .btn[data-my-dropdown] {\n  margin-left: -1px;\n}\n\n.input-group-prepend[data-my-dropdown] {\n  margin-right: -1px;\n}\n\n.input-group-append[data-my-dropdown] {\n  margin-left: -1px;\n}\n\n.input-group-text[data-my-dropdown] {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.input-group-text[data-my-dropdown]   input[type=\"radio\"][data-my-dropdown], .input-group-text[data-my-dropdown]   input[type=\"checkbox\"][data-my-dropdown] {\n  margin-top: 0;\n}\n\n.input-group[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > .btn[data-my-dropdown], .input-group[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]    > .input-group-text[data-my-dropdown], .input-group[data-my-dropdown]    > .input-group-append[data-my-dropdown]:not(:last-child)    > .btn[data-my-dropdown], .input-group[data-my-dropdown]    > .input-group-append[data-my-dropdown]:not(:last-child)    > .input-group-text[data-my-dropdown], .input-group[data-my-dropdown]    > .input-group-append[data-my-dropdown]:last-child    > .btn[data-my-dropdown]:not(:last-child):not(.dropdown-toggle), .input-group[data-my-dropdown]    > .input-group-append[data-my-dropdown]:last-child    > .input-group-text[data-my-dropdown]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > .btn[data-my-dropdown], .input-group[data-my-dropdown]    > .input-group-append[data-my-dropdown]    > .input-group-text[data-my-dropdown], .input-group[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]:not(:first-child)    > .btn[data-my-dropdown], .input-group[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]:not(:first-child)    > .input-group-text[data-my-dropdown], .input-group[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]:first-child    > .btn[data-my-dropdown]:not(:first-child), .input-group[data-my-dropdown]    > .input-group-prepend[data-my-dropdown]:first-child    > .input-group-text[data-my-dropdown]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control[data-my-dropdown] {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n.custom-control-inline[data-my-dropdown] {\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input[data-my-dropdown] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.custom-control-input[data-my-dropdown]:checked    ~ .custom-control-label[data-my-dropdown]::before {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.custom-control-input[data-my-dropdown]:focus    ~ .custom-control-label[data-my-dropdown]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-control-input[data-my-dropdown]:active    ~ .custom-control-label[data-my-dropdown]::before {\n  color: #fff;\n  background-color: #b3d7ff;\n}\n\n.custom-control-input[data-my-dropdown]:disabled    ~ .custom-control-label[data-my-dropdown] {\n  color: #6c757d;\n}\n\n.custom-control-input[data-my-dropdown]:disabled    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label[data-my-dropdown] {\n  margin-bottom: 0;\n}\n\n.custom-control-label[data-my-dropdown]::before {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: \"\";\n  user-select: none;\n  background-color: #dee2e6;\n}\n\n.custom-control-label[data-my-dropdown]::after {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n\n.custom-checkbox[data-my-dropdown]   .custom-control-label[data-my-dropdown]::before {\n  border-radius: 0.25rem;\n}\n\n.custom-checkbox[data-my-dropdown]   .custom-control-input[data-my-dropdown]:checked    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: #007bff;\n}\n\n.custom-checkbox[data-my-dropdown]   .custom-control-input[data-my-dropdown]:checked    ~ .custom-control-label[data-my-dropdown]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox[data-my-dropdown]   .custom-control-input[data-my-dropdown]:indeterminate    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: #007bff;\n}\n\n.custom-checkbox[data-my-dropdown]   .custom-control-input[data-my-dropdown]:indeterminate    ~ .custom-control-label[data-my-dropdown]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox[data-my-dropdown]   .custom-control-input[data-my-dropdown]:disabled:checked    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-checkbox[data-my-dropdown]   .custom-control-input[data-my-dropdown]:disabled:indeterminate    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-radio[data-my-dropdown]   .custom-control-label[data-my-dropdown]::before {\n  border-radius: 50%;\n}\n\n.custom-radio[data-my-dropdown]   .custom-control-input[data-my-dropdown]:checked    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: #007bff;\n}\n\n.custom-radio[data-my-dropdown]   .custom-control-input[data-my-dropdown]:checked    ~ .custom-control-label[data-my-dropdown]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\n}\n\n.custom-radio[data-my-dropdown]   .custom-control-input[data-my-dropdown]:disabled:checked    ~ .custom-control-label[data-my-dropdown]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-select[data-my-dropdown] {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  appearance: none;\n}\n\n.custom-select[data-my-dropdown]:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5);\n}\n\n.custom-select[data-my-dropdown]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.custom-select[multiple][data-my-dropdown], .custom-select[size][data-my-dropdown]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n\n.custom-select[data-my-dropdown]:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n\n.custom-select[data-my-dropdown]::-ms-expand {\n  opacity: 0;\n}\n\n.custom-select-sm[data-my-dropdown] {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n\n.custom-select-lg[data-my-dropdown] {\n  height: calc(2.875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%;\n}\n\n.custom-file[data-my-dropdown] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input[data-my-dropdown] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n\n.custom-file-input[data-my-dropdown]:focus    ~ .custom-file-control[data-my-dropdown] {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-file-input[data-my-dropdown]:focus    ~ .custom-file-control[data-my-dropdown]::before {\n  border-color: #80bdff;\n}\n\n.custom-file-input[data-my-dropdown]:lang(en)    ~ .custom-file-label[data-my-dropdown]::after {\n  content: \"Browse\";\n}\n\n.custom-file-label[data-my-dropdown] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.custom-file-label[data-my-dropdown]::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(calc(2.25rem + 2px) - 1px * 2);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: 1px solid #ced4da;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.alert[data-my-dropdown] {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading[data-my-dropdown] {\n  color: inherit;\n}\n\n.alert-link[data-my-dropdown] {\n  font-weight: 700;\n}\n\n.alert-dismissible[data-my-dropdown] {\n  padding-right: 4rem;\n}\n\n.alert-dismissible[data-my-dropdown]   .close[data-my-dropdown] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary[data-my-dropdown] {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n\n.alert-primary[data-my-dropdown]   hr[data-my-dropdown] {\n  border-top-color: #9fcdff;\n}\n\n.alert-primary[data-my-dropdown]   .alert-link[data-my-dropdown] {\n  color: #002752;\n}\n\n.alert-secondary[data-my-dropdown] {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n\n.alert-secondary[data-my-dropdown]   hr[data-my-dropdown] {\n  border-top-color: #c8cbcf;\n}\n\n.alert-secondary[data-my-dropdown]   .alert-link[data-my-dropdown] {\n  color: #202326;\n}\n\n.alert-success[data-my-dropdown] {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.alert-success[data-my-dropdown]   hr[data-my-dropdown] {\n  border-top-color: #b1dfbb;\n}\n\n.alert-success[data-my-dropdown]   .alert-link[data-my-dropdown] {\n  color: #0b2e13;\n}\n\n.alert-info[data-my-dropdown] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.alert-info[data-my-dropdown]   hr[data-my-dropdown] {\n  border-top-color: #abdde5;\n}\n\n.alert-info[data-my-dropdown]   .alert-link[data-my-dropdown] {\n  color: #062c33;\n}\n\n.alert-warning[data-my-dropdown] {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n\n.alert-warning[data-my-dropdown]   hr[data-my-dropdown] {\n  border-top-color: #ffe8a1;\n}\n\n.alert-warning[data-my-dropdown]   .alert-link[data-my-dropdown] {\n  color: #533f03;\n}\n\n.alert-danger[data-my-dropdown] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n\n.alert-danger[data-my-dropdown]   hr[data-my-dropdown] {\n  border-top-color: #f1b0b7;\n}\n\n.alert-danger[data-my-dropdown]   .alert-link[data-my-dropdown] {\n  color: #491217;\n}\n\n.alert-light[data-my-dropdown] {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n\n.alert-light[data-my-dropdown]   hr[data-my-dropdown] {\n  border-top-color: #ececf6;\n}\n\n.alert-light[data-my-dropdown]   .alert-link[data-my-dropdown] {\n  color: #686868;\n}\n\n.alert-dark[data-my-dropdown] {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n\n.alert-dark[data-my-dropdown]   hr[data-my-dropdown] {\n  border-top-color: #b9bbbe;\n}\n\n.alert-dark[data-my-dropdown]   .alert-link[data-my-dropdown] {\n  color: #040505;\n}\n\n\@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress[data-my-dropdown] {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar[data-my-dropdown] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  background-color: #007bff;\n  transition: width 0.6s ease;\n}\n\n.progress-bar-striped[data-my-dropdown] {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated[data-my-dropdown] {\n  animation: progress-bar-stripes 1s linear infinite;\n}\n\n.media[data-my-dropdown] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body[data-my-dropdown] {\n  flex: 1;\n}\n\n.list-group[data-my-dropdown] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group-item-action[data-my-dropdown] {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n\n.list-group-item-action[data-my-dropdown]:hover, .list-group-item-action[data-my-dropdown]:focus {\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.list-group-item-action[data-my-dropdown]:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item[data-my-dropdown] {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.list-group-item[data-my-dropdown]:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.list-group-item[data-my-dropdown]:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.list-group-item[data-my-dropdown]:hover, .list-group-item[data-my-dropdown]:focus {\n  z-index: 1;\n  text-decoration: none;\n}\n\n.list-group-item.disabled[data-my-dropdown], .list-group-item[data-my-dropdown]:disabled {\n  color: #6c757d;\n  background-color: #fff;\n}\n\n.list-group-item.active[data-my-dropdown] {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.list-group-flush[data-my-dropdown]   .list-group-item[data-my-dropdown] {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n\n.list-group-flush[data-my-dropdown]:first-child   .list-group-item[data-my-dropdown]:first-child {\n  border-top: 0;\n}\n\n.list-group-flush[data-my-dropdown]:last-child   .list-group-item[data-my-dropdown]:last-child {\n  border-bottom: 0;\n}\n\n.list-group-item-primary[data-my-dropdown] {\n  color: #004085;\n  background-color: #b8daff;\n}\n\n.list-group-item-primary.list-group-item-action[data-my-dropdown]:hover, .list-group-item-primary.list-group-item-action[data-my-dropdown]:focus {\n  color: #004085;\n  background-color: #9fcdff;\n}\n\n.list-group-item-primary.list-group-item-action.active[data-my-dropdown] {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n\n.list-group-item-secondary[data-my-dropdown] {\n  color: #383d41;\n  background-color: #d6d8db;\n}\n\n.list-group-item-secondary.list-group-item-action[data-my-dropdown]:hover, .list-group-item-secondary.list-group-item-action[data-my-dropdown]:focus {\n  color: #383d41;\n  background-color: #c8cbcf;\n}\n\n.list-group-item-secondary.list-group-item-action.active[data-my-dropdown] {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41;\n}\n\n.list-group-item-success[data-my-dropdown] {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n\n.list-group-item-success.list-group-item-action[data-my-dropdown]:hover, .list-group-item-success.list-group-item-action[data-my-dropdown]:focus {\n  color: #155724;\n  background-color: #b1dfbb;\n}\n\n.list-group-item-success.list-group-item-action.active[data-my-dropdown] {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n\n.list-group-item-info[data-my-dropdown] {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n\n.list-group-item-info.list-group-item-action[data-my-dropdown]:hover, .list-group-item-info.list-group-item-action[data-my-dropdown]:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n\n.list-group-item-info.list-group-item-action.active[data-my-dropdown] {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n\n.list-group-item-warning[data-my-dropdown] {\n  color: #856404;\n  background-color: #ffeeba;\n}\n\n.list-group-item-warning.list-group-item-action[data-my-dropdown]:hover, .list-group-item-warning.list-group-item-action[data-my-dropdown]:focus {\n  color: #856404;\n  background-color: #ffe8a1;\n}\n\n.list-group-item-warning.list-group-item-action.active[data-my-dropdown] {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n\n.list-group-item-danger[data-my-dropdown] {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\n\n.list-group-item-danger.list-group-item-action[data-my-dropdown]:hover, .list-group-item-danger.list-group-item-action[data-my-dropdown]:focus {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\n\n.list-group-item-danger.list-group-item-action.active[data-my-dropdown] {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n\n.list-group-item-light[data-my-dropdown] {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n\n.list-group-item-light.list-group-item-action[data-my-dropdown]:hover, .list-group-item-light.list-group-item-action[data-my-dropdown]:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n\n.list-group-item-light.list-group-item-action.active[data-my-dropdown] {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n\n.list-group-item-dark[data-my-dropdown] {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n\n.list-group-item-dark.list-group-item-action[data-my-dropdown]:hover, .list-group-item-dark.list-group-item-action[data-my-dropdown]:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n\n.list-group-item-dark.list-group-item-action.active[data-my-dropdown] {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n\n.close[data-my-dropdown] {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n\n.close[data-my-dropdown]:hover, .close[data-my-dropdown]:focus {\n  color: #000;\n  text-decoration: none;\n  opacity: .75;\n}\n\n.close[data-my-dropdown]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\nbutton.close[data-my-dropdown] {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.input-group[data-my-dropdown]    > .custom-select[data-my-dropdown] {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}"; }
}

class MyDynamicForm {
    constructor() {
        // @Event() validateData: EventEmitter;
        this.allTitles = {};
        this.allIds = [];
        this.invalidMessage = null;
        this.changeValueChecked = false;
        this.mapping = {}; // properties of the JSON schema
    }
    postValueHandler(CustomEvent) {
        this.changeValueChecked = true;
        let fieldId = CustomEvent.detail._values.id.match(/\w+$/)[0];
        let fieldValue = CustomEvent.detail._values.currentValue === false ? null : CustomEvent.detail._values.currentValue;
        let currentFormData = this.data;
        currentFormData = this.fillData(fieldId, fieldValue, currentFormData);
        let clearedFormData = Object.assign({}, currentFormData);
        this.changedData = this.deletePropsWithoutData(clearedFormData);
    }
    ;
    /**
     * Functions for filling data object
     */
    fillData(fieldId, fieldValue, currentFormData) {
        Object.keys(currentFormData).map((key) => {
            if (key === fieldId) {
                if (Array.isArray(currentFormData[key])) {
                    currentFormData[key] = [];
                    currentFormData[key][0] = fieldValue;
                }
                else {
                    if (this.schema.properties[key] && this.schema.properties[key].format && this.schema.properties[key].format === "date") {
                        currentFormData[key].dateValue = fieldValue;
                    }
                    else {
                        currentFormData[key] = fieldValue;
                    }
                }
                return currentFormData;
            }
            if ((typeof (currentFormData[key]) === "object") && (!Array.isArray(currentFormData[key])) && (currentFormData[key]) !== null) {
                currentFormData[key] = this.fillData(fieldId, fieldValue, currentFormData[key]);
            }
        });
        return currentFormData;
    }
    ;
    /**
     * Functions for deleting properties which have value "null"
     */
    deletePropsWithoutData(clearedFormData) {
        let formData = Object.assign({}, clearedFormData);
        Object.keys(formData).map((key) => {
            if (formData[key] === null || formData[key] === false) {
                delete formData[key];
                return formData;
            }
            if ((typeof (formData[key]) === "object") && (!Array.isArray(formData[key]))) {
                formData[key] = this.deletePropsWithoutData(formData[key]);
            }
        });
        return formData;
    }
    ;
    /**
     * Call functions for validate of all form fields
     */
    validateForm() {
        let validate = this.ajv.compile(this.schema);
        let dataValidate;
        if (!this.changeValueChecked) {
            // ajv.validate is not working with nested objects, so we have to make a flat clean clone to validate it,
            // otherwise we should not use nested objects as it is working correctly without them
            let flattedForm = this.deletePropsWithoutData(this.form);
            dataValidate = validate(this.flatDataObject(flattedForm));
        }
        else {
            dataValidate = validate(this.flatDataObject(this.changedData));
        }
        dataValidate ? this.invalidMessage = null : this.invalidMessage = this.updateValidationMessage(validate);
    }
    ;
    /**
     * Function for flatting data object for validation
     */
    flatDataObject(data) {
        function flat(res, key, val, pre = '') {
            let prefix = [pre, key].filter(v => v).join('.').match(/\w+$/);
            return (typeof val === 'object' && (!Array.isArray(val)))
                ? Object.keys(val).reduce((prev, curr) => flat(prev, curr, val[curr], prefix), res)
                : Object.assign(res, { [prefix]: val });
        }
        return Object.keys(data).reduce((prev, curr) => flat(prev, curr, data[curr]), {});
    }
    updateValidationMessage(validate) {
        let unchangedMessage = this.ajv.errorsText(validate.errors).replace(/\,?\w*\.?\w*\./g, "").split(" ");
        Object.keys(this.allTitles).map((title) => {
            for (let el in unchangedMessage) {
                if (unchangedMessage[el] === title) {
                    unchangedMessage[el] = this.allTitles[title];
                }
            }
        });
        return unchangedMessage.toString().replace(/\,(?!\,)/g, " ");
    }
    ;
    /**
     * Getting fields based on properties in JSON-schema
     */
    createField(schemaProps, prop, schemaPropKey) {
        let { type } = schemaProps[prop];
        let Tag = this.mapping[type];
        let title = schemaProps[prop].title;
        let id = schemaProps[prop].$id;
        let elementType = schemaProps[prop].type;
        let elementFormat = schemaProps[prop].format || null;
        this.allTitles[prop] = title;
        if (!title) {
            schemaProps[prop].items ? title = schemaProps[prop].items.title : title = 'Unnamed field';
            this.allTitles[prop] = title;
        }
        if (schemaProps[prop].format === "date") {
            return h(Tag, { id: id, format: elementFormat, for: elementType, value: this.form[prop].dateValue || "", title: title });
        }
        return h(Tag, { id: id, format: elementFormat, for: elementType, value: (this.form[prop] || this.form[prop] === false) ? JSON.stringify(this.form[prop]) : this.form[schemaPropKey][prop], title: title }) || null;
    }
    ;
    createForm(schemaProps, schemaPropKey) {
        return Object.keys(schemaProps).map((prop) => {
            if (schemaProps[prop].hasOwnProperty("properties")) {
                schemaPropKey = prop;
                return this.createForm(schemaProps[prop].properties, schemaPropKey);
            }
            else {
                return this.createField(schemaProps, prop, schemaPropKey);
            }
        });
    }
    ;
    render() {
        /**
         * Creating form fields and saving it to the let form
         */
        let message = null;
        let schemaProps = this.schema.properties;
        let form = this.createForm(schemaProps, null);
        if (this.invalidMessage) {
            message =
                h("div", null,
                    h("span", null, this.invalidMessage));
        }
        return (h("div", null,
            h("div", null,
                form,
                message,
                " ",
                h("br", null)),
            h("br", null),
            h("input", { class: "btn", type: "submit", value: "Validate", onClick: () => this.validateForm() })));
    }
    componentWillLoad() {
        this.data = Object.assign({}, this.form);
        for (let i = 0; i < this.el.children.length; i++) {
            let child = this.el.children[i];
            let mapKey = child['for'];
            this.mapping[mapKey] = child['localName'];
        }
    }
    static get is() { return "my-dynamic-form"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "ajv": { "type": "Any", "attr": "ajv" }, "allIds": { "state": true }, "allTitles": { "state": true }, "changedData": { "state": true }, "changeValueChecked": { "state": true }, "data": { "state": true }, "el": { "elementRef": true }, "filledData": { "state": true }, "form": { "type": "Any", "attr": "form" }, "invalidMessage": { "state": true }, "schema": { "type": "Any", "attr": "schema" } }; }
    static get style() { return "[data-my-dynamic-form]:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n*[data-my-dynamic-form], *[data-my-dynamic-form]::before, *[data-my-dynamic-form]::after {\n  box-sizing: border-box;\n}\n\nhtml[data-my-dynamic-form] {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\@-ms-viewport {\n  width: device-width;\n}\n\narticle[data-my-dynamic-form], aside[data-my-dynamic-form], dialog[data-my-dynamic-form], figcaption[data-my-dynamic-form], figure[data-my-dynamic-form], footer[data-my-dynamic-form], header[data-my-dynamic-form], hgroup[data-my-dynamic-form], main[data-my-dynamic-form], nav[data-my-dynamic-form], section[data-my-dynamic-form] {\n  display: block;\n}\n\nbody[data-my-dynamic-form] {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"][data-my-dynamic-form]:focus {\n  outline: 0 !important;\n}\n\nhr[data-my-dynamic-form] {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1[data-my-dynamic-form], h2[data-my-dynamic-form], h3[data-my-dynamic-form], h4[data-my-dynamic-form], h5[data-my-dynamic-form], h6[data-my-dynamic-form] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np[data-my-dynamic-form] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title][data-my-dynamic-form], abbr[data-original-title][data-my-dynamic-form] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\n\naddress[data-my-dynamic-form] {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol[data-my-dynamic-form], ul[data-my-dynamic-form], dl[data-my-dynamic-form] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol[data-my-dynamic-form]   ol[data-my-dynamic-form], ul[data-my-dynamic-form]   ul[data-my-dynamic-form], ol[data-my-dynamic-form]   ul[data-my-dynamic-form], ul[data-my-dynamic-form]   ol[data-my-dynamic-form] {\n  margin-bottom: 0;\n}\n\ndt[data-my-dynamic-form] {\n  font-weight: 700;\n}\n\ndd[data-my-dynamic-form] {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote[data-my-dynamic-form] {\n  margin: 0 0 1rem;\n}\n\ndfn[data-my-dynamic-form] {\n  font-style: italic;\n}\n\nb[data-my-dynamic-form], strong[data-my-dynamic-form] {\n  font-weight: bolder;\n}\n\nsmall[data-my-dynamic-form] {\n  font-size: 80%;\n}\n\nsub[data-my-dynamic-form], sup[data-my-dynamic-form] {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub[data-my-dynamic-form] {\n  bottom: -.25em;\n}\n\nsup[data-my-dynamic-form] {\n  top: -.5em;\n}\n\na[data-my-dynamic-form] {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na[data-my-dynamic-form]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na[data-my-dynamic-form]:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na[data-my-dynamic-form]:not([href]):not([tabindex]):hover, a[data-my-dynamic-form]:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\na[data-my-dynamic-form]:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\n\npre[data-my-dynamic-form], code[data-my-dynamic-form], kbd[data-my-dynamic-form], samp[data-my-dynamic-form] {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\npre[data-my-dynamic-form] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure[data-my-dynamic-form] {\n  margin: 0 0 1rem;\n}\n\nimg[data-my-dynamic-form] {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg[data-my-dynamic-form]:not(:root) {\n  overflow: hidden;\n}\n\ntable[data-my-dynamic-form] {\n  border-collapse: collapse;\n}\n\ncaption[data-my-dynamic-form] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth[data-my-dynamic-form] {\n  text-align: inherit;\n}\n\nlabel[data-my-dynamic-form] {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\n\nbutton[data-my-dynamic-form] {\n  border-radius: 0;\n}\n\nbutton[data-my-dynamic-form]:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput[data-my-dynamic-form], button[data-my-dynamic-form], select[data-my-dynamic-form], optgroup[data-my-dynamic-form], textarea[data-my-dynamic-form] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton[data-my-dynamic-form], input[data-my-dynamic-form] {\n  overflow: visible;\n}\n\nbutton[data-my-dynamic-form], select[data-my-dynamic-form] {\n  text-transform: none;\n}\n\nbutton[data-my-dynamic-form], html[data-my-dynamic-form]   [type=\"button\"][data-my-dynamic-form], [type=\"reset\"][data-my-dynamic-form], [type=\"submit\"][data-my-dynamic-form] {\n  -webkit-appearance: button;\n}\n\nbutton[data-my-dynamic-form]::-moz-focus-inner, [type=\"button\"][data-my-dynamic-form]::-moz-focus-inner, [type=\"reset\"][data-my-dynamic-form]::-moz-focus-inner, [type=\"submit\"][data-my-dynamic-form]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=\"radio\"][data-my-dynamic-form], input[type=\"checkbox\"][data-my-dynamic-form] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"date\"][data-my-dynamic-form], input[type=\"time\"][data-my-dynamic-form], input[type=\"datetime-local\"][data-my-dynamic-form], input[type=\"month\"][data-my-dynamic-form] {\n  -webkit-appearance: listbox;\n}\n\ntextarea[data-my-dynamic-form] {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset[data-my-dynamic-form] {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend[data-my-dynamic-form] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress[data-my-dynamic-form] {\n  vertical-align: baseline;\n}\n\n[type=\"number\"][data-my-dynamic-form]::-webkit-inner-spin-button, [type=\"number\"][data-my-dynamic-form]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][data-my-dynamic-form] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type=\"search\"][data-my-dynamic-form]::-webkit-search-cancel-button, [type=\"search\"][data-my-dynamic-form]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[data-my-dynamic-form]::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput[data-my-dynamic-form] {\n  display: inline-block;\n}\n\nsummary[data-my-dynamic-form] {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate[data-my-dynamic-form] {\n  display: none;\n}\n\n[hidden][data-my-dynamic-form] {\n  display: none !important;\n}\n\nh1[data-my-dynamic-form], h2[data-my-dynamic-form], h3[data-my-dynamic-form], h4[data-my-dynamic-form], h5[data-my-dynamic-form], h6[data-my-dynamic-form], .h1[data-my-dynamic-form], .h2[data-my-dynamic-form], .h3[data-my-dynamic-form], .h4[data-my-dynamic-form], .h5[data-my-dynamic-form], .h6[data-my-dynamic-form] {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit;\n}\n\nh1[data-my-dynamic-form], .h1[data-my-dynamic-form] {\n  font-size: 2.5rem;\n}\n\nh2[data-my-dynamic-form], .h2[data-my-dynamic-form] {\n  font-size: 2rem;\n}\n\nh3[data-my-dynamic-form], .h3[data-my-dynamic-form] {\n  font-size: 1.75rem;\n}\n\nh4[data-my-dynamic-form], .h4[data-my-dynamic-form] {\n  font-size: 1.5rem;\n}\n\nh5[data-my-dynamic-form], .h5[data-my-dynamic-form] {\n  font-size: 1.25rem;\n}\n\nh6[data-my-dynamic-form], .h6[data-my-dynamic-form] {\n  font-size: 1rem;\n}\n\n.lead[data-my-dynamic-form] {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1[data-my-dynamic-form] {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-2[data-my-dynamic-form] {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-3[data-my-dynamic-form] {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-4[data-my-dynamic-form] {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nhr[data-my-dynamic-form] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall[data-my-dynamic-form], .small[data-my-dynamic-form] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\nmark[data-my-dynamic-form], .mark[data-my-dynamic-form] {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled[data-my-dynamic-form] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline[data-my-dynamic-form] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item[data-my-dynamic-form] {\n  display: inline-block;\n}\n\n.list-inline-item[data-my-dynamic-form]:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism[data-my-dynamic-form] {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote[data-my-dynamic-form] {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n\n.blockquote-footer[data-my-dynamic-form] {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n\n.blockquote-footer[data-my-dynamic-form]::before {\n  content: \"\\2014 \\00A0\";\n}\n\n.img-fluid[data-my-dynamic-form] {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail[data-my-dynamic-form] {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure[data-my-dynamic-form] {\n  display: inline-block;\n}\n\n.figure-img[data-my-dynamic-form] {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption[data-my-dynamic-form] {\n  font-size: 90%;\n  color: #6c757d;\n}\n\ncode[data-my-dynamic-form], kbd[data-my-dynamic-form], pre[data-my-dynamic-form], samp[data-my-dynamic-form] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\ncode[data-my-dynamic-form] {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word;\n}\n\na[data-my-dynamic-form]    > code[data-my-dynamic-form] {\n  color: inherit;\n}\n\nkbd[data-my-dynamic-form] {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\n\nkbd[data-my-dynamic-form]   kbd[data-my-dynamic-form] {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\n\npre[data-my-dynamic-form] {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\n\npre[data-my-dynamic-form]   code[data-my-dynamic-form] {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable[data-my-dynamic-form] {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container[data-my-dynamic-form] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n\@media (min-width: 576px) {\n  .container[data-my-dynamic-form] {\n    max-width: 540px;\n  }\n}\n\n\@media (min-width: 768px) {\n  .container[data-my-dynamic-form] {\n    max-width: 720px;\n  }\n}\n\n\@media (min-width: 992px) {\n  .container[data-my-dynamic-form] {\n    max-width: 960px;\n  }\n}\n\n\@media (min-width: 1200px) {\n  .container[data-my-dynamic-form] {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid[data-my-dynamic-form] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.row[data-my-dynamic-form] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters[data-my-dynamic-form] {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters[data-my-dynamic-form]    > .col[data-my-dynamic-form], .no-gutters[data-my-dynamic-form]    > [class*=\"col-\"][data-my-dynamic-form] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1[data-my-dynamic-form], .col-2[data-my-dynamic-form], .col-3[data-my-dynamic-form], .col-4[data-my-dynamic-form], .col-5[data-my-dynamic-form], .col-6[data-my-dynamic-form], .col-7[data-my-dynamic-form], .col-8[data-my-dynamic-form], .col-9[data-my-dynamic-form], .col-10[data-my-dynamic-form], .col-11[data-my-dynamic-form], .col-12[data-my-dynamic-form], .col[data-my-dynamic-form], .col-auto[data-my-dynamic-form], .col-sm-1[data-my-dynamic-form], .col-sm-2[data-my-dynamic-form], .col-sm-3[data-my-dynamic-form], .col-sm-4[data-my-dynamic-form], .col-sm-5[data-my-dynamic-form], .col-sm-6[data-my-dynamic-form], .col-sm-7[data-my-dynamic-form], .col-sm-8[data-my-dynamic-form], .col-sm-9[data-my-dynamic-form], .col-sm-10[data-my-dynamic-form], .col-sm-11[data-my-dynamic-form], .col-sm-12[data-my-dynamic-form], .col-sm[data-my-dynamic-form], .col-sm-auto[data-my-dynamic-form], .col-md-1[data-my-dynamic-form], .col-md-2[data-my-dynamic-form], .col-md-3[data-my-dynamic-form], .col-md-4[data-my-dynamic-form], .col-md-5[data-my-dynamic-form], .col-md-6[data-my-dynamic-form], .col-md-7[data-my-dynamic-form], .col-md-8[data-my-dynamic-form], .col-md-9[data-my-dynamic-form], .col-md-10[data-my-dynamic-form], .col-md-11[data-my-dynamic-form], .col-md-12[data-my-dynamic-form], .col-md[data-my-dynamic-form], .col-md-auto[data-my-dynamic-form], .col-lg-1[data-my-dynamic-form], .col-lg-2[data-my-dynamic-form], .col-lg-3[data-my-dynamic-form], .col-lg-4[data-my-dynamic-form], .col-lg-5[data-my-dynamic-form], .col-lg-6[data-my-dynamic-form], .col-lg-7[data-my-dynamic-form], .col-lg-8[data-my-dynamic-form], .col-lg-9[data-my-dynamic-form], .col-lg-10[data-my-dynamic-form], .col-lg-11[data-my-dynamic-form], .col-lg-12[data-my-dynamic-form], .col-lg[data-my-dynamic-form], .col-lg-auto[data-my-dynamic-form], .col-xl-1[data-my-dynamic-form], .col-xl-2[data-my-dynamic-form], .col-xl-3[data-my-dynamic-form], .col-xl-4[data-my-dynamic-form], .col-xl-5[data-my-dynamic-form], .col-xl-6[data-my-dynamic-form], .col-xl-7[data-my-dynamic-form], .col-xl-8[data-my-dynamic-form], .col-xl-9[data-my-dynamic-form], .col-xl-10[data-my-dynamic-form], .col-xl-11[data-my-dynamic-form], .col-xl-12[data-my-dynamic-form], .col-xl[data-my-dynamic-form], .col-xl-auto[data-my-dynamic-form] {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col[data-my-dynamic-form] {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto[data-my-dynamic-form] {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1[data-my-dynamic-form] {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%;\n}\n\n.col-2[data-my-dynamic-form] {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%;\n}\n\n.col-3[data-my-dynamic-form] {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4[data-my-dynamic-form] {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%;\n}\n\n.col-5[data-my-dynamic-form] {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%;\n}\n\n.col-6[data-my-dynamic-form] {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7[data-my-dynamic-form] {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%;\n}\n\n.col-8[data-my-dynamic-form] {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%;\n}\n\n.col-9[data-my-dynamic-form] {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10[data-my-dynamic-form] {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%;\n}\n\n.col-11[data-my-dynamic-form] {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%;\n}\n\n.col-12[data-my-dynamic-form] {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first[data-my-dynamic-form] {\n  order: -1;\n}\n\n.order-last[data-my-dynamic-form] {\n  order: 13;\n}\n\n.order-0[data-my-dynamic-form] {\n  order: 0;\n}\n\n.order-1[data-my-dynamic-form] {\n  order: 1;\n}\n\n.order-2[data-my-dynamic-form] {\n  order: 2;\n}\n\n.order-3[data-my-dynamic-form] {\n  order: 3;\n}\n\n.order-4[data-my-dynamic-form] {\n  order: 4;\n}\n\n.order-5[data-my-dynamic-form] {\n  order: 5;\n}\n\n.order-6[data-my-dynamic-form] {\n  order: 6;\n}\n\n.order-7[data-my-dynamic-form] {\n  order: 7;\n}\n\n.order-8[data-my-dynamic-form] {\n  order: 8;\n}\n\n.order-9[data-my-dynamic-form] {\n  order: 9;\n}\n\n.order-10[data-my-dynamic-form] {\n  order: 10;\n}\n\n.order-11[data-my-dynamic-form] {\n  order: 11;\n}\n\n.order-12[data-my-dynamic-form] {\n  order: 12;\n}\n\n.offset-1[data-my-dynamic-form] {\n  margin-left: 8.33333%;\n}\n\n.offset-2[data-my-dynamic-form] {\n  margin-left: 16.66667%;\n}\n\n.offset-3[data-my-dynamic-form] {\n  margin-left: 25%;\n}\n\n.offset-4[data-my-dynamic-form] {\n  margin-left: 33.33333%;\n}\n\n.offset-5[data-my-dynamic-form] {\n  margin-left: 41.66667%;\n}\n\n.offset-6[data-my-dynamic-form] {\n  margin-left: 50%;\n}\n\n.offset-7[data-my-dynamic-form] {\n  margin-left: 58.33333%;\n}\n\n.offset-8[data-my-dynamic-form] {\n  margin-left: 66.66667%;\n}\n\n.offset-9[data-my-dynamic-form] {\n  margin-left: 75%;\n}\n\n.offset-10[data-my-dynamic-form] {\n  margin-left: 83.33333%;\n}\n\n.offset-11[data-my-dynamic-form] {\n  margin-left: 91.66667%;\n}\n\n\@media (min-width: 576px) {\n  .col-sm[data-my-dynamic-form] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto[data-my-dynamic-form] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1[data-my-dynamic-form] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-sm-2[data-my-dynamic-form] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-sm-3[data-my-dynamic-form] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4[data-my-dynamic-form] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-sm-5[data-my-dynamic-form] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-sm-6[data-my-dynamic-form] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7[data-my-dynamic-form] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-sm-8[data-my-dynamic-form] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-sm-9[data-my-dynamic-form] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10[data-my-dynamic-form] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-sm-11[data-my-dynamic-form] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-sm-12[data-my-dynamic-form] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first[data-my-dynamic-form] {\n    order: -1;\n  }\n  .order-sm-last[data-my-dynamic-form] {\n    order: 13;\n  }\n  .order-sm-0[data-my-dynamic-form] {\n    order: 0;\n  }\n  .order-sm-1[data-my-dynamic-form] {\n    order: 1;\n  }\n  .order-sm-2[data-my-dynamic-form] {\n    order: 2;\n  }\n  .order-sm-3[data-my-dynamic-form] {\n    order: 3;\n  }\n  .order-sm-4[data-my-dynamic-form] {\n    order: 4;\n  }\n  .order-sm-5[data-my-dynamic-form] {\n    order: 5;\n  }\n  .order-sm-6[data-my-dynamic-form] {\n    order: 6;\n  }\n  .order-sm-7[data-my-dynamic-form] {\n    order: 7;\n  }\n  .order-sm-8[data-my-dynamic-form] {\n    order: 8;\n  }\n  .order-sm-9[data-my-dynamic-form] {\n    order: 9;\n  }\n  .order-sm-10[data-my-dynamic-form] {\n    order: 10;\n  }\n  .order-sm-11[data-my-dynamic-form] {\n    order: 11;\n  }\n  .order-sm-12[data-my-dynamic-form] {\n    order: 12;\n  }\n  .offset-sm-0[data-my-dynamic-form] {\n    margin-left: 0;\n  }\n  .offset-sm-1[data-my-dynamic-form] {\n    margin-left: 8.33333%;\n  }\n  .offset-sm-2[data-my-dynamic-form] {\n    margin-left: 16.66667%;\n  }\n  .offset-sm-3[data-my-dynamic-form] {\n    margin-left: 25%;\n  }\n  .offset-sm-4[data-my-dynamic-form] {\n    margin-left: 33.33333%;\n  }\n  .offset-sm-5[data-my-dynamic-form] {\n    margin-left: 41.66667%;\n  }\n  .offset-sm-6[data-my-dynamic-form] {\n    margin-left: 50%;\n  }\n  .offset-sm-7[data-my-dynamic-form] {\n    margin-left: 58.33333%;\n  }\n  .offset-sm-8[data-my-dynamic-form] {\n    margin-left: 66.66667%;\n  }\n  .offset-sm-9[data-my-dynamic-form] {\n    margin-left: 75%;\n  }\n  .offset-sm-10[data-my-dynamic-form] {\n    margin-left: 83.33333%;\n  }\n  .offset-sm-11[data-my-dynamic-form] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 768px) {\n  .col-md[data-my-dynamic-form] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto[data-my-dynamic-form] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1[data-my-dynamic-form] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-md-2[data-my-dynamic-form] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-md-3[data-my-dynamic-form] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4[data-my-dynamic-form] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-md-5[data-my-dynamic-form] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-md-6[data-my-dynamic-form] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7[data-my-dynamic-form] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-md-8[data-my-dynamic-form] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-md-9[data-my-dynamic-form] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10[data-my-dynamic-form] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-md-11[data-my-dynamic-form] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-md-12[data-my-dynamic-form] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first[data-my-dynamic-form] {\n    order: -1;\n  }\n  .order-md-last[data-my-dynamic-form] {\n    order: 13;\n  }\n  .order-md-0[data-my-dynamic-form] {\n    order: 0;\n  }\n  .order-md-1[data-my-dynamic-form] {\n    order: 1;\n  }\n  .order-md-2[data-my-dynamic-form] {\n    order: 2;\n  }\n  .order-md-3[data-my-dynamic-form] {\n    order: 3;\n  }\n  .order-md-4[data-my-dynamic-form] {\n    order: 4;\n  }\n  .order-md-5[data-my-dynamic-form] {\n    order: 5;\n  }\n  .order-md-6[data-my-dynamic-form] {\n    order: 6;\n  }\n  .order-md-7[data-my-dynamic-form] {\n    order: 7;\n  }\n  .order-md-8[data-my-dynamic-form] {\n    order: 8;\n  }\n  .order-md-9[data-my-dynamic-form] {\n    order: 9;\n  }\n  .order-md-10[data-my-dynamic-form] {\n    order: 10;\n  }\n  .order-md-11[data-my-dynamic-form] {\n    order: 11;\n  }\n  .order-md-12[data-my-dynamic-form] {\n    order: 12;\n  }\n  .offset-md-0[data-my-dynamic-form] {\n    margin-left: 0;\n  }\n  .offset-md-1[data-my-dynamic-form] {\n    margin-left: 8.33333%;\n  }\n  .offset-md-2[data-my-dynamic-form] {\n    margin-left: 16.66667%;\n  }\n  .offset-md-3[data-my-dynamic-form] {\n    margin-left: 25%;\n  }\n  .offset-md-4[data-my-dynamic-form] {\n    margin-left: 33.33333%;\n  }\n  .offset-md-5[data-my-dynamic-form] {\n    margin-left: 41.66667%;\n  }\n  .offset-md-6[data-my-dynamic-form] {\n    margin-left: 50%;\n  }\n  .offset-md-7[data-my-dynamic-form] {\n    margin-left: 58.33333%;\n  }\n  .offset-md-8[data-my-dynamic-form] {\n    margin-left: 66.66667%;\n  }\n  .offset-md-9[data-my-dynamic-form] {\n    margin-left: 75%;\n  }\n  .offset-md-10[data-my-dynamic-form] {\n    margin-left: 83.33333%;\n  }\n  .offset-md-11[data-my-dynamic-form] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 992px) {\n  .col-lg[data-my-dynamic-form] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto[data-my-dynamic-form] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1[data-my-dynamic-form] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-lg-2[data-my-dynamic-form] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-lg-3[data-my-dynamic-form] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4[data-my-dynamic-form] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-lg-5[data-my-dynamic-form] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-lg-6[data-my-dynamic-form] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7[data-my-dynamic-form] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-lg-8[data-my-dynamic-form] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-lg-9[data-my-dynamic-form] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10[data-my-dynamic-form] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-lg-11[data-my-dynamic-form] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-lg-12[data-my-dynamic-form] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first[data-my-dynamic-form] {\n    order: -1;\n  }\n  .order-lg-last[data-my-dynamic-form] {\n    order: 13;\n  }\n  .order-lg-0[data-my-dynamic-form] {\n    order: 0;\n  }\n  .order-lg-1[data-my-dynamic-form] {\n    order: 1;\n  }\n  .order-lg-2[data-my-dynamic-form] {\n    order: 2;\n  }\n  .order-lg-3[data-my-dynamic-form] {\n    order: 3;\n  }\n  .order-lg-4[data-my-dynamic-form] {\n    order: 4;\n  }\n  .order-lg-5[data-my-dynamic-form] {\n    order: 5;\n  }\n  .order-lg-6[data-my-dynamic-form] {\n    order: 6;\n  }\n  .order-lg-7[data-my-dynamic-form] {\n    order: 7;\n  }\n  .order-lg-8[data-my-dynamic-form] {\n    order: 8;\n  }\n  .order-lg-9[data-my-dynamic-form] {\n    order: 9;\n  }\n  .order-lg-10[data-my-dynamic-form] {\n    order: 10;\n  }\n  .order-lg-11[data-my-dynamic-form] {\n    order: 11;\n  }\n  .order-lg-12[data-my-dynamic-form] {\n    order: 12;\n  }\n  .offset-lg-0[data-my-dynamic-form] {\n    margin-left: 0;\n  }\n  .offset-lg-1[data-my-dynamic-form] {\n    margin-left: 8.33333%;\n  }\n  .offset-lg-2[data-my-dynamic-form] {\n    margin-left: 16.66667%;\n  }\n  .offset-lg-3[data-my-dynamic-form] {\n    margin-left: 25%;\n  }\n  .offset-lg-4[data-my-dynamic-form] {\n    margin-left: 33.33333%;\n  }\n  .offset-lg-5[data-my-dynamic-form] {\n    margin-left: 41.66667%;\n  }\n  .offset-lg-6[data-my-dynamic-form] {\n    margin-left: 50%;\n  }\n  .offset-lg-7[data-my-dynamic-form] {\n    margin-left: 58.33333%;\n  }\n  .offset-lg-8[data-my-dynamic-form] {\n    margin-left: 66.66667%;\n  }\n  .offset-lg-9[data-my-dynamic-form] {\n    margin-left: 75%;\n  }\n  .offset-lg-10[data-my-dynamic-form] {\n    margin-left: 83.33333%;\n  }\n  .offset-lg-11[data-my-dynamic-form] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 1200px) {\n  .col-xl[data-my-dynamic-form] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xl-auto[data-my-dynamic-form] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xl-1[data-my-dynamic-form] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-xl-2[data-my-dynamic-form] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-xl-3[data-my-dynamic-form] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4[data-my-dynamic-form] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-xl-5[data-my-dynamic-form] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-xl-6[data-my-dynamic-form] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7[data-my-dynamic-form] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-xl-8[data-my-dynamic-form] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-xl-9[data-my-dynamic-form] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10[data-my-dynamic-form] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-xl-11[data-my-dynamic-form] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-xl-12[data-my-dynamic-form] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first[data-my-dynamic-form] {\n    order: -1;\n  }\n  .order-xl-last[data-my-dynamic-form] {\n    order: 13;\n  }\n  .order-xl-0[data-my-dynamic-form] {\n    order: 0;\n  }\n  .order-xl-1[data-my-dynamic-form] {\n    order: 1;\n  }\n  .order-xl-2[data-my-dynamic-form] {\n    order: 2;\n  }\n  .order-xl-3[data-my-dynamic-form] {\n    order: 3;\n  }\n  .order-xl-4[data-my-dynamic-form] {\n    order: 4;\n  }\n  .order-xl-5[data-my-dynamic-form] {\n    order: 5;\n  }\n  .order-xl-6[data-my-dynamic-form] {\n    order: 6;\n  }\n  .order-xl-7[data-my-dynamic-form] {\n    order: 7;\n  }\n  .order-xl-8[data-my-dynamic-form] {\n    order: 8;\n  }\n  .order-xl-9[data-my-dynamic-form] {\n    order: 9;\n  }\n  .order-xl-10[data-my-dynamic-form] {\n    order: 10;\n  }\n  .order-xl-11[data-my-dynamic-form] {\n    order: 11;\n  }\n  .order-xl-12[data-my-dynamic-form] {\n    order: 12;\n  }\n  .offset-xl-0[data-my-dynamic-form] {\n    margin-left: 0;\n  }\n  .offset-xl-1[data-my-dynamic-form] {\n    margin-left: 8.33333%;\n  }\n  .offset-xl-2[data-my-dynamic-form] {\n    margin-left: 16.66667%;\n  }\n  .offset-xl-3[data-my-dynamic-form] {\n    margin-left: 25%;\n  }\n  .offset-xl-4[data-my-dynamic-form] {\n    margin-left: 33.33333%;\n  }\n  .offset-xl-5[data-my-dynamic-form] {\n    margin-left: 41.66667%;\n  }\n  .offset-xl-6[data-my-dynamic-form] {\n    margin-left: 50%;\n  }\n  .offset-xl-7[data-my-dynamic-form] {\n    margin-left: 58.33333%;\n  }\n  .offset-xl-8[data-my-dynamic-form] {\n    margin-left: 66.66667%;\n  }\n  .offset-xl-9[data-my-dynamic-form] {\n    margin-left: 75%;\n  }\n  .offset-xl-10[data-my-dynamic-form] {\n    margin-left: 83.33333%;\n  }\n  .offset-xl-11[data-my-dynamic-form] {\n    margin-left: 91.66667%;\n  }\n}\n\n.table[data-my-dynamic-form] {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n\n.table[data-my-dynamic-form]   th[data-my-dynamic-form], .table[data-my-dynamic-form]   td[data-my-dynamic-form] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table[data-my-dynamic-form]   thead[data-my-dynamic-form]   th[data-my-dynamic-form] {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table[data-my-dynamic-form]   tbody[data-my-dynamic-form]    + tbody[data-my-dynamic-form] {\n  border-top: 2px solid #dee2e6;\n}\n\n.table[data-my-dynamic-form]   .table[data-my-dynamic-form] {\n  background-color: #fff;\n}\n\n.table-sm[data-my-dynamic-form]   th[data-my-dynamic-form], .table-sm[data-my-dynamic-form]   td[data-my-dynamic-form] {\n  padding: 0.3rem;\n}\n\n.table-bordered[data-my-dynamic-form] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[data-my-dynamic-form]   th[data-my-dynamic-form], .table-bordered[data-my-dynamic-form]   td[data-my-dynamic-form] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[data-my-dynamic-form]   thead[data-my-dynamic-form]   th[data-my-dynamic-form], .table-bordered[data-my-dynamic-form]   thead[data-my-dynamic-form]   td[data-my-dynamic-form] {\n  border-bottom-width: 2px;\n}\n\n.table-striped[data-my-dynamic-form]   tbody[data-my-dynamic-form]   tr[data-my-dynamic-form]:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover[data-my-dynamic-form]   tbody[data-my-dynamic-form]   tr[data-my-dynamic-form]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-primary[data-my-dynamic-form], .table-primary[data-my-dynamic-form]    > th[data-my-dynamic-form], .table-primary[data-my-dynamic-form]    > td[data-my-dynamic-form] {\n  background-color: #b8daff;\n}\n\n.table-hover[data-my-dynamic-form]   .table-primary[data-my-dynamic-form]:hover {\n  background-color: #9fcdff;\n}\n\n.table-hover[data-my-dynamic-form]   .table-primary[data-my-dynamic-form]:hover    > td[data-my-dynamic-form], .table-hover[data-my-dynamic-form]   .table-primary[data-my-dynamic-form]:hover    > th[data-my-dynamic-form] {\n  background-color: #9fcdff;\n}\n\n.table-secondary[data-my-dynamic-form], .table-secondary[data-my-dynamic-form]    > th[data-my-dynamic-form], .table-secondary[data-my-dynamic-form]    > td[data-my-dynamic-form] {\n  background-color: #d6d8db;\n}\n\n.table-hover[data-my-dynamic-form]   .table-secondary[data-my-dynamic-form]:hover {\n  background-color: #c8cbcf;\n}\n\n.table-hover[data-my-dynamic-form]   .table-secondary[data-my-dynamic-form]:hover    > td[data-my-dynamic-form], .table-hover[data-my-dynamic-form]   .table-secondary[data-my-dynamic-form]:hover    > th[data-my-dynamic-form] {\n  background-color: #c8cbcf;\n}\n\n.table-success[data-my-dynamic-form], .table-success[data-my-dynamic-form]    > th[data-my-dynamic-form], .table-success[data-my-dynamic-form]    > td[data-my-dynamic-form] {\n  background-color: #c3e6cb;\n}\n\n.table-hover[data-my-dynamic-form]   .table-success[data-my-dynamic-form]:hover {\n  background-color: #b1dfbb;\n}\n\n.table-hover[data-my-dynamic-form]   .table-success[data-my-dynamic-form]:hover    > td[data-my-dynamic-form], .table-hover[data-my-dynamic-form]   .table-success[data-my-dynamic-form]:hover    > th[data-my-dynamic-form] {\n  background-color: #b1dfbb;\n}\n\n.table-info[data-my-dynamic-form], .table-info[data-my-dynamic-form]    > th[data-my-dynamic-form], .table-info[data-my-dynamic-form]    > td[data-my-dynamic-form] {\n  background-color: #bee5eb;\n}\n\n.table-hover[data-my-dynamic-form]   .table-info[data-my-dynamic-form]:hover {\n  background-color: #abdde5;\n}\n\n.table-hover[data-my-dynamic-form]   .table-info[data-my-dynamic-form]:hover    > td[data-my-dynamic-form], .table-hover[data-my-dynamic-form]   .table-info[data-my-dynamic-form]:hover    > th[data-my-dynamic-form] {\n  background-color: #abdde5;\n}\n\n.table-warning[data-my-dynamic-form], .table-warning[data-my-dynamic-form]    > th[data-my-dynamic-form], .table-warning[data-my-dynamic-form]    > td[data-my-dynamic-form] {\n  background-color: #ffeeba;\n}\n\n.table-hover[data-my-dynamic-form]   .table-warning[data-my-dynamic-form]:hover {\n  background-color: #ffe8a1;\n}\n\n.table-hover[data-my-dynamic-form]   .table-warning[data-my-dynamic-form]:hover    > td[data-my-dynamic-form], .table-hover[data-my-dynamic-form]   .table-warning[data-my-dynamic-form]:hover    > th[data-my-dynamic-form] {\n  background-color: #ffe8a1;\n}\n\n.table-danger[data-my-dynamic-form], .table-danger[data-my-dynamic-form]    > th[data-my-dynamic-form], .table-danger[data-my-dynamic-form]    > td[data-my-dynamic-form] {\n  background-color: #f5c6cb;\n}\n\n.table-hover[data-my-dynamic-form]   .table-danger[data-my-dynamic-form]:hover {\n  background-color: #f1b0b7;\n}\n\n.table-hover[data-my-dynamic-form]   .table-danger[data-my-dynamic-form]:hover    > td[data-my-dynamic-form], .table-hover[data-my-dynamic-form]   .table-danger[data-my-dynamic-form]:hover    > th[data-my-dynamic-form] {\n  background-color: #f1b0b7;\n}\n\n.table-light[data-my-dynamic-form], .table-light[data-my-dynamic-form]    > th[data-my-dynamic-form], .table-light[data-my-dynamic-form]    > td[data-my-dynamic-form] {\n  background-color: #fdfdfe;\n}\n\n.table-hover[data-my-dynamic-form]   .table-light[data-my-dynamic-form]:hover {\n  background-color: #ececf6;\n}\n\n.table-hover[data-my-dynamic-form]   .table-light[data-my-dynamic-form]:hover    > td[data-my-dynamic-form], .table-hover[data-my-dynamic-form]   .table-light[data-my-dynamic-form]:hover    > th[data-my-dynamic-form] {\n  background-color: #ececf6;\n}\n\n.table-dark[data-my-dynamic-form], .table-dark[data-my-dynamic-form]    > th[data-my-dynamic-form], .table-dark[data-my-dynamic-form]    > td[data-my-dynamic-form] {\n  background-color: #c6c8ca;\n}\n\n.table-hover[data-my-dynamic-form]   .table-dark[data-my-dynamic-form]:hover {\n  background-color: #b9bbbe;\n}\n\n.table-hover[data-my-dynamic-form]   .table-dark[data-my-dynamic-form]:hover    > td[data-my-dynamic-form], .table-hover[data-my-dynamic-form]   .table-dark[data-my-dynamic-form]:hover    > th[data-my-dynamic-form] {\n  background-color: #b9bbbe;\n}\n\n.table-active[data-my-dynamic-form], .table-active[data-my-dynamic-form]    > th[data-my-dynamic-form], .table-active[data-my-dynamic-form]    > td[data-my-dynamic-form] {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover[data-my-dynamic-form]   .table-active[data-my-dynamic-form]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover[data-my-dynamic-form]   .table-active[data-my-dynamic-form]:hover    > td[data-my-dynamic-form], .table-hover[data-my-dynamic-form]   .table-active[data-my-dynamic-form]:hover    > th[data-my-dynamic-form] {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table[data-my-dynamic-form]   .thead-dark[data-my-dynamic-form]   th[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e;\n}\n\n.table[data-my-dynamic-form]   .thead-light[data-my-dynamic-form]   th[data-my-dynamic-form] {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.table-dark[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #212529;\n}\n\n.table-dark[data-my-dynamic-form]   th[data-my-dynamic-form], .table-dark[data-my-dynamic-form]   td[data-my-dynamic-form], .table-dark[data-my-dynamic-form]   thead[data-my-dynamic-form]   th[data-my-dynamic-form] {\n  border-color: #32383e;\n}\n\n.table-dark.table-bordered[data-my-dynamic-form] {\n  border: 0;\n}\n\n.table-dark.table-striped[data-my-dynamic-form]   tbody[data-my-dynamic-form]   tr[data-my-dynamic-form]:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.table-dark.table-hover[data-my-dynamic-form]   tbody[data-my-dynamic-form]   tr[data-my-dynamic-form]:hover {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n\@media (max-width: 575.98px) {\n  .table-responsive-sm[data-my-dynamic-form] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-sm[data-my-dynamic-form]    > .table-bordered[data-my-dynamic-form] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 767.98px) {\n  .table-responsive-md[data-my-dynamic-form] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-md[data-my-dynamic-form]    > .table-bordered[data-my-dynamic-form] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 991.98px) {\n  .table-responsive-lg[data-my-dynamic-form] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-lg[data-my-dynamic-form]    > .table-bordered[data-my-dynamic-form] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 1199.98px) {\n  .table-responsive-xl[data-my-dynamic-form] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-xl[data-my-dynamic-form]    > .table-bordered[data-my-dynamic-form] {\n    border: 0;\n  }\n}\n\n.table-responsive[data-my-dynamic-form] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.table-responsive[data-my-dynamic-form]    > .table-bordered[data-my-dynamic-form] {\n  border: 0;\n}\n\n.form-control[data-my-dynamic-form] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control[data-my-dynamic-form]::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control[data-my-dynamic-form]:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.form-control[data-my-dynamic-form]::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control[data-my-dynamic-form]:disabled, .form-control[readonly][data-my-dynamic-form] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\nselect.form-control[data-my-dynamic-form]:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n}\n\nselect.form-control[data-my-dynamic-form]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.form-control-file[data-my-dynamic-form], .form-control-range[data-my-dynamic-form] {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label[data-my-dynamic-form] {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg[data-my-dynamic-form] {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.col-form-label-sm[data-my-dynamic-form] {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.form-control-plaintext[data-my-dynamic-form] {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n\n.form-control-plaintext.form-control-sm[data-my-dynamic-form], .input-group-sm[data-my-dynamic-form]    > .form-control-plaintext.form-control[data-my-dynamic-form], .input-group-sm[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > .form-control-plaintext.input-group-text[data-my-dynamic-form], .input-group-sm[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > .form-control-plaintext.input-group-text[data-my-dynamic-form], .input-group-sm[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > .form-control-plaintext.btn[data-my-dynamic-form], .input-group-sm[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > .form-control-plaintext.btn[data-my-dynamic-form], .form-control-plaintext.form-control-lg[data-my-dynamic-form], .input-group-lg[data-my-dynamic-form]    > .form-control-plaintext.form-control[data-my-dynamic-form], .input-group-lg[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > .form-control-plaintext.input-group-text[data-my-dynamic-form], .input-group-lg[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > .form-control-plaintext.input-group-text[data-my-dynamic-form], .input-group-lg[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > .form-control-plaintext.btn[data-my-dynamic-form], .input-group-lg[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > .form-control-plaintext.btn[data-my-dynamic-form] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm[data-my-dynamic-form], .input-group-sm[data-my-dynamic-form]    > .form-control[data-my-dynamic-form], .input-group-sm[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > .input-group-text[data-my-dynamic-form], .input-group-sm[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > .input-group-text[data-my-dynamic-form], .input-group-sm[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > .btn[data-my-dynamic-form], .input-group-sm[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > .btn[data-my-dynamic-form] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\nselect.form-control-sm[data-my-dynamic-form]:not([size]):not([multiple]), .input-group-sm[data-my-dynamic-form]    > select.form-control[data-my-dynamic-form]:not([size]):not([multiple]), .input-group-sm[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > select.input-group-text[data-my-dynamic-form]:not([size]):not([multiple]), .input-group-sm[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > select.input-group-text[data-my-dynamic-form]:not([size]):not([multiple]), .input-group-sm[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > select.btn[data-my-dynamic-form]:not([size]):not([multiple]), .input-group-sm[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > select.btn[data-my-dynamic-form]:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px);\n}\n\n.form-control-lg[data-my-dynamic-form], .input-group-lg[data-my-dynamic-form]    > .form-control[data-my-dynamic-form], .input-group-lg[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > .input-group-text[data-my-dynamic-form], .input-group-lg[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > .input-group-text[data-my-dynamic-form], .input-group-lg[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > .btn[data-my-dynamic-form], .input-group-lg[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > .btn[data-my-dynamic-form] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\nselect.form-control-lg[data-my-dynamic-form]:not([size]):not([multiple]), .input-group-lg[data-my-dynamic-form]    > select.form-control[data-my-dynamic-form]:not([size]):not([multiple]), .input-group-lg[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > select.input-group-text[data-my-dynamic-form]:not([size]):not([multiple]), .input-group-lg[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > select.input-group-text[data-my-dynamic-form]:not([size]):not([multiple]), .input-group-lg[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > select.btn[data-my-dynamic-form]:not([size]):not([multiple]), .input-group-lg[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > select.btn[data-my-dynamic-form]:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px);\n}\n\n.form-group[data-my-dynamic-form] {\n  margin-bottom: 1rem;\n}\n\n.form-text[data-my-dynamic-form] {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row[data-my-dynamic-form] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n\n.form-row[data-my-dynamic-form]    > .col[data-my-dynamic-form], .form-row[data-my-dynamic-form]    > [class*=\"col-\"][data-my-dynamic-form] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check[data-my-dynamic-form] {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input[data-my-dynamic-form] {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n\n.form-check-input[data-my-dynamic-form]:disabled    ~ .form-check-label[data-my-dynamic-form] {\n  color: #6c757d;\n}\n\n.form-check-label[data-my-dynamic-form] {\n  margin-bottom: 0;\n}\n\n.form-check-inline[data-my-dynamic-form] {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.form-check-inline[data-my-dynamic-form]   .form-check-input[data-my-dynamic-form] {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback[data-my-dynamic-form] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n\n.valid-tooltip[data-my-dynamic-form] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: .2rem;\n}\n\n.was-validated[data-my-dynamic-form]   .form-control[data-my-dynamic-form]:valid, .form-control.is-valid[data-my-dynamic-form], .was-validated\n.custom-select[data-my-dynamic-form]:valid, .custom-select.is-valid[data-my-dynamic-form] {\n  border-color: #28a745;\n}\n\n.was-validated[data-my-dynamic-form]   .form-control[data-my-dynamic-form]:valid:focus, .form-control.is-valid[data-my-dynamic-form]:focus, .was-validated\n.custom-select[data-my-dynamic-form]:valid:focus, .custom-select.is-valid[data-my-dynamic-form]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated[data-my-dynamic-form]   .form-control[data-my-dynamic-form]:valid    ~ .valid-feedback[data-my-dynamic-form], .was-validated[data-my-dynamic-form]   .form-control[data-my-dynamic-form]:valid    ~ .valid-tooltip[data-my-dynamic-form], .form-control.is-valid[data-my-dynamic-form]    ~ .valid-feedback[data-my-dynamic-form], .form-control.is-valid[data-my-dynamic-form]    ~ .valid-tooltip[data-my-dynamic-form], .was-validated\n.custom-select[data-my-dynamic-form]:valid    ~ .valid-feedback[data-my-dynamic-form], .was-validated\n.custom-select[data-my-dynamic-form]:valid    ~ .valid-tooltip[data-my-dynamic-form], .custom-select.is-valid[data-my-dynamic-form]    ~ .valid-feedback[data-my-dynamic-form], .custom-select.is-valid[data-my-dynamic-form]    ~ .valid-tooltip[data-my-dynamic-form] {\n  display: block;\n}\n\n.was-validated[data-my-dynamic-form]   .form-check-input[data-my-dynamic-form]:valid    ~ .form-check-label[data-my-dynamic-form], .form-check-input.is-valid[data-my-dynamic-form]    ~ .form-check-label[data-my-dynamic-form] {\n  color: #28a745;\n}\n\n.was-validated[data-my-dynamic-form]   .form-check-input[data-my-dynamic-form]:valid    ~ .valid-feedback[data-my-dynamic-form], .was-validated[data-my-dynamic-form]   .form-check-input[data-my-dynamic-form]:valid    ~ .valid-tooltip[data-my-dynamic-form], .form-check-input.is-valid[data-my-dynamic-form]    ~ .valid-feedback[data-my-dynamic-form], .form-check-input.is-valid[data-my-dynamic-form]    ~ .valid-tooltip[data-my-dynamic-form] {\n  display: block;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:valid    ~ .custom-control-label[data-my-dynamic-form], .custom-control-input.is-valid[data-my-dynamic-form]    ~ .custom-control-label[data-my-dynamic-form] {\n  color: #28a745;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:valid    ~ .custom-control-label[data-my-dynamic-form]::before, .custom-control-input.is-valid[data-my-dynamic-form]    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: #71dd8a;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:valid    ~ .valid-feedback[data-my-dynamic-form], .was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:valid    ~ .valid-tooltip[data-my-dynamic-form], .custom-control-input.is-valid[data-my-dynamic-form]    ~ .valid-feedback[data-my-dynamic-form], .custom-control-input.is-valid[data-my-dynamic-form]    ~ .valid-tooltip[data-my-dynamic-form] {\n  display: block;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:valid:checked    ~ .custom-control-label[data-my-dynamic-form]::before, .custom-control-input.is-valid[data-my-dynamic-form]:checked    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: #34ce57;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:valid:focus    ~ .custom-control-label[data-my-dynamic-form]::before, .custom-control-input.is-valid[data-my-dynamic-form]:focus    ~ .custom-control-label[data-my-dynamic-form]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated[data-my-dynamic-form]   .custom-file-input[data-my-dynamic-form]:valid    ~ .custom-file-label[data-my-dynamic-form], .custom-file-input.is-valid[data-my-dynamic-form]    ~ .custom-file-label[data-my-dynamic-form] {\n  border-color: #28a745;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-file-input[data-my-dynamic-form]:valid    ~ .custom-file-label[data-my-dynamic-form]::before, .custom-file-input.is-valid[data-my-dynamic-form]    ~ .custom-file-label[data-my-dynamic-form]::before {\n  border-color: inherit;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-file-input[data-my-dynamic-form]:valid    ~ .valid-feedback[data-my-dynamic-form], .was-validated[data-my-dynamic-form]   .custom-file-input[data-my-dynamic-form]:valid    ~ .valid-tooltip[data-my-dynamic-form], .custom-file-input.is-valid[data-my-dynamic-form]    ~ .valid-feedback[data-my-dynamic-form], .custom-file-input.is-valid[data-my-dynamic-form]    ~ .valid-tooltip[data-my-dynamic-form] {\n  display: block;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-file-input[data-my-dynamic-form]:valid:focus    ~ .custom-file-label[data-my-dynamic-form], .custom-file-input.is-valid[data-my-dynamic-form]:focus    ~ .custom-file-label[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.invalid-feedback[data-my-dynamic-form] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.invalid-tooltip[data-my-dynamic-form] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem;\n}\n\n.was-validated[data-my-dynamic-form]   .form-control[data-my-dynamic-form]:invalid, .form-control.is-invalid[data-my-dynamic-form], .was-validated\n.custom-select[data-my-dynamic-form]:invalid, .custom-select.is-invalid[data-my-dynamic-form] {\n  border-color: #dc3545;\n}\n\n.was-validated[data-my-dynamic-form]   .form-control[data-my-dynamic-form]:invalid:focus, .form-control.is-invalid[data-my-dynamic-form]:focus, .was-validated\n.custom-select[data-my-dynamic-form]:invalid:focus, .custom-select.is-invalid[data-my-dynamic-form]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated[data-my-dynamic-form]   .form-control[data-my-dynamic-form]:invalid    ~ .invalid-feedback[data-my-dynamic-form], .was-validated[data-my-dynamic-form]   .form-control[data-my-dynamic-form]:invalid    ~ .invalid-tooltip[data-my-dynamic-form], .form-control.is-invalid[data-my-dynamic-form]    ~ .invalid-feedback[data-my-dynamic-form], .form-control.is-invalid[data-my-dynamic-form]    ~ .invalid-tooltip[data-my-dynamic-form], .was-validated\n.custom-select[data-my-dynamic-form]:invalid    ~ .invalid-feedback[data-my-dynamic-form], .was-validated\n.custom-select[data-my-dynamic-form]:invalid    ~ .invalid-tooltip[data-my-dynamic-form], .custom-select.is-invalid[data-my-dynamic-form]    ~ .invalid-feedback[data-my-dynamic-form], .custom-select.is-invalid[data-my-dynamic-form]    ~ .invalid-tooltip[data-my-dynamic-form] {\n  display: block;\n}\n\n.was-validated[data-my-dynamic-form]   .form-check-input[data-my-dynamic-form]:invalid    ~ .form-check-label[data-my-dynamic-form], .form-check-input.is-invalid[data-my-dynamic-form]    ~ .form-check-label[data-my-dynamic-form] {\n  color: #dc3545;\n}\n\n.was-validated[data-my-dynamic-form]   .form-check-input[data-my-dynamic-form]:invalid    ~ .invalid-feedback[data-my-dynamic-form], .was-validated[data-my-dynamic-form]   .form-check-input[data-my-dynamic-form]:invalid    ~ .invalid-tooltip[data-my-dynamic-form], .form-check-input.is-invalid[data-my-dynamic-form]    ~ .invalid-feedback[data-my-dynamic-form], .form-check-input.is-invalid[data-my-dynamic-form]    ~ .invalid-tooltip[data-my-dynamic-form] {\n  display: block;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:invalid    ~ .custom-control-label[data-my-dynamic-form], .custom-control-input.is-invalid[data-my-dynamic-form]    ~ .custom-control-label[data-my-dynamic-form] {\n  color: #dc3545;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:invalid    ~ .custom-control-label[data-my-dynamic-form]::before, .custom-control-input.is-invalid[data-my-dynamic-form]    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: #efa2a9;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:invalid    ~ .invalid-feedback[data-my-dynamic-form], .was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:invalid    ~ .invalid-tooltip[data-my-dynamic-form], .custom-control-input.is-invalid[data-my-dynamic-form]    ~ .invalid-feedback[data-my-dynamic-form], .custom-control-input.is-invalid[data-my-dynamic-form]    ~ .invalid-tooltip[data-my-dynamic-form] {\n  display: block;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:invalid:checked    ~ .custom-control-label[data-my-dynamic-form]::before, .custom-control-input.is-invalid[data-my-dynamic-form]:checked    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: #e4606d;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:invalid:focus    ~ .custom-control-label[data-my-dynamic-form]::before, .custom-control-input.is-invalid[data-my-dynamic-form]:focus    ~ .custom-control-label[data-my-dynamic-form]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated[data-my-dynamic-form]   .custom-file-input[data-my-dynamic-form]:invalid    ~ .custom-file-label[data-my-dynamic-form], .custom-file-input.is-invalid[data-my-dynamic-form]    ~ .custom-file-label[data-my-dynamic-form] {\n  border-color: #dc3545;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-file-input[data-my-dynamic-form]:invalid    ~ .custom-file-label[data-my-dynamic-form]::before, .custom-file-input.is-invalid[data-my-dynamic-form]    ~ .custom-file-label[data-my-dynamic-form]::before {\n  border-color: inherit;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-file-input[data-my-dynamic-form]:invalid    ~ .invalid-feedback[data-my-dynamic-form], .was-validated[data-my-dynamic-form]   .custom-file-input[data-my-dynamic-form]:invalid    ~ .invalid-tooltip[data-my-dynamic-form], .custom-file-input.is-invalid[data-my-dynamic-form]    ~ .invalid-feedback[data-my-dynamic-form], .custom-file-input.is-invalid[data-my-dynamic-form]    ~ .invalid-tooltip[data-my-dynamic-form] {\n  display: block;\n}\n\n.was-validated[data-my-dynamic-form]   .custom-file-input[data-my-dynamic-form]:invalid:focus    ~ .custom-file-label[data-my-dynamic-form], .custom-file-input.is-invalid[data-my-dynamic-form]:focus    ~ .custom-file-label[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.form-inline[data-my-dynamic-form] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n\n.form-inline[data-my-dynamic-form]   .form-check[data-my-dynamic-form] {\n  width: 100%;\n}\n\n\@media (min-width: 576px) {\n  .form-inline[data-my-dynamic-form]   label[data-my-dynamic-form] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline[data-my-dynamic-form]   .form-group[data-my-dynamic-form] {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline[data-my-dynamic-form]   .form-control[data-my-dynamic-form] {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline[data-my-dynamic-form]   .form-control-plaintext[data-my-dynamic-form] {\n    display: inline-block;\n  }\n  .form-inline[data-my-dynamic-form]   .input-group[data-my-dynamic-form] {\n    width: auto;\n  }\n  .form-inline[data-my-dynamic-form]   .form-check[data-my-dynamic-form] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline[data-my-dynamic-form]   .form-check-input[data-my-dynamic-form] {\n    position: relative;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline[data-my-dynamic-form]   .custom-control[data-my-dynamic-form] {\n    align-items: center;\n    justify-content: center;\n  }\n  .form-inline[data-my-dynamic-form]   .custom-control-label[data-my-dynamic-form] {\n    margin-bottom: 0;\n  }\n}\n\n.btn[data-my-dynamic-form] {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.btn[data-my-dynamic-form]:hover, .btn[data-my-dynamic-form]:focus {\n  text-decoration: none;\n}\n\n.btn[data-my-dynamic-form]:focus, .btn.focus[data-my-dynamic-form] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.btn.disabled[data-my-dynamic-form], .btn[data-my-dynamic-form]:disabled {\n  opacity: 0.65;\n}\n\n.btn[data-my-dynamic-form]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.btn[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn[data-my-dynamic-form]:not(:disabled):not(.disabled).active {\n  background-image: none;\n}\n\na.btn.disabled[data-my-dynamic-form], fieldset[data-my-dynamic-form]:disabled   a.btn[data-my-dynamic-form] {\n  pointer-events: none;\n}\n\n.btn-primary[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n\n.btn-primary[data-my-dynamic-form]:focus, .btn-primary.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-primary.disabled[data-my-dynamic-form], .btn-primary[data-my-dynamic-form]:disabled {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-primary[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-primary.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n\n.btn-primary[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-primary[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-primary.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-secondary[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n\n.btn-secondary[data-my-dynamic-form]:focus, .btn-secondary.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-secondary.disabled[data-my-dynamic-form], .btn-secondary[data-my-dynamic-form]:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-secondary[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-secondary.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n\n.btn-secondary[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-secondary[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-secondary.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-success[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n\n.btn-success[data-my-dynamic-form]:focus, .btn-success.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-success.disabled[data-my-dynamic-form], .btn-success[data-my-dynamic-form]:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-success[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-success.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n\n.btn-success[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-success[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-success.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-info[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n\n.btn-info[data-my-dynamic-form]:focus, .btn-info.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-info.disabled[data-my-dynamic-form], .btn-info[data-my-dynamic-form]:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-info[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-info.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n\n.btn-info[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-info[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-info.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-warning[data-my-dynamic-form] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning[data-my-dynamic-form]:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n\n.btn-warning[data-my-dynamic-form]:focus, .btn-warning.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-warning.disabled[data-my-dynamic-form], .btn-warning[data-my-dynamic-form]:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-warning[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-warning.dropdown-toggle[data-my-dynamic-form] {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n\n.btn-warning[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-warning[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-warning.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-danger[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n\n.btn-danger[data-my-dynamic-form]:focus, .btn-danger.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-danger.disabled[data-my-dynamic-form], .btn-danger[data-my-dynamic-form]:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-danger[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-danger.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n\n.btn-danger[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-danger[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-danger.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-light[data-my-dynamic-form] {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light[data-my-dynamic-form]:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n\n.btn-light[data-my-dynamic-form]:focus, .btn-light.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-light.disabled[data-my-dynamic-form], .btn-light[data-my-dynamic-form]:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-light[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-light.dropdown-toggle[data-my-dynamic-form] {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n\n.btn-light[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-light[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-light.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-dark[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n\n.btn-dark[data-my-dynamic-form]:focus, .btn-dark.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-dark.disabled[data-my-dynamic-form], .btn-dark[data-my-dynamic-form]:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-dark[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-dark.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n\n.btn-dark[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-dark[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-dark.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-primary[data-my-dynamic-form] {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-dynamic-form]:focus, .btn-outline-primary.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-primary.disabled[data-my-dynamic-form], .btn-outline-primary[data-my-dynamic-form]:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-outline-primary[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-outline-primary[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-outline-primary.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-outline-primary[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-outline-primary.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-secondary[data-my-dynamic-form] {\n  color: #6c757d;\n  background-color: transparent;\n  background-image: none;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-dynamic-form]:focus, .btn-outline-secondary.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-secondary.disabled[data-my-dynamic-form], .btn-outline-secondary[data-my-dynamic-form]:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-secondary[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-outline-secondary[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-outline-secondary.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-outline-secondary.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-success[data-my-dynamic-form] {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-dynamic-form]:focus, .btn-outline-success.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-success.disabled[data-my-dynamic-form], .btn-outline-success[data-my-dynamic-form]:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n\n.btn-outline-success[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-outline-success[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-outline-success.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-outline-success[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-outline-success.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-info[data-my-dynamic-form] {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-dynamic-form]:focus, .btn-outline-info.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-info.disabled[data-my-dynamic-form], .btn-outline-info[data-my-dynamic-form]:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n\n.btn-outline-info[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-outline-info[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-outline-info.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-outline-info[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-outline-info.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning[data-my-dynamic-form] {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-dynamic-form]:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-dynamic-form]:focus, .btn-outline-warning.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-warning.disabled[data-my-dynamic-form], .btn-outline-warning[data-my-dynamic-form]:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n\n.btn-outline-warning[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-outline-warning[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-outline-warning.dropdown-toggle[data-my-dynamic-form] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-outline-warning[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-outline-warning.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-danger[data-my-dynamic-form] {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-dynamic-form]:focus, .btn-outline-danger.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-danger.disabled[data-my-dynamic-form], .btn-outline-danger[data-my-dynamic-form]:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n\n.btn-outline-danger[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-outline-danger[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-outline-danger.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-outline-danger[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-outline-danger.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-light[data-my-dynamic-form] {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-dynamic-form]:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-dynamic-form]:focus, .btn-outline-light.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-light.disabled[data-my-dynamic-form], .btn-outline-light[data-my-dynamic-form]:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-light[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-outline-light[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-outline-light.dropdown-toggle[data-my-dynamic-form] {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-outline-light[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-outline-light.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark[data-my-dynamic-form] {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-dynamic-form]:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-dynamic-form]:focus, .btn-outline-dark.focus[data-my-dynamic-form] {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-dark.disabled[data-my-dynamic-form], .btn-outline-dark[data-my-dynamic-form]:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n\n.btn-outline-dark[data-my-dynamic-form]:not(:disabled):not(.disabled):active, .btn-outline-dark[data-my-dynamic-form]:not(:disabled):not(.disabled).active, .show[data-my-dynamic-form]    > .btn-outline-dark.dropdown-toggle[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-dynamic-form]:not(:disabled):not(.disabled):active:focus, .btn-outline-dark[data-my-dynamic-form]:not(:disabled):not(.disabled).active:focus, .show[data-my-dynamic-form]    > .btn-outline-dark.dropdown-toggle[data-my-dynamic-form]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link[data-my-dynamic-form] {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-link[data-my-dynamic-form]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-link[data-my-dynamic-form]:focus, .btn-link.focus[data-my-dynamic-form] {\n  text-decoration: underline;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.btn-link[data-my-dynamic-form]:disabled, .btn-link.disabled[data-my-dynamic-form] {\n  color: #6c757d;\n}\n\n.btn-lg[data-my-dynamic-form], .btn-group-lg[data-my-dynamic-form]    > .btn[data-my-dynamic-form] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.btn-sm[data-my-dynamic-form], .btn-group-sm[data-my-dynamic-form]    > .btn[data-my-dynamic-form] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block[data-my-dynamic-form] {\n  display: block;\n  width: 100%;\n}\n\n.btn-block[data-my-dynamic-form]    + .btn-block[data-my-dynamic-form] {\n  margin-top: 0.5rem;\n}\n\ninput[type=\"submit\"].btn-block[data-my-dynamic-form], input[type=\"reset\"].btn-block[data-my-dynamic-form], input[type=\"button\"].btn-block[data-my-dynamic-form] {\n  width: 100%;\n}\n\n.fade[data-my-dynamic-form] {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n.fade.show[data-my-dynamic-form] {\n  opacity: 1;\n}\n\n.collapse[data-my-dynamic-form] {\n  display: none;\n}\n\n.collapse.show[data-my-dynamic-form] {\n  display: block;\n}\n\ntr.collapse.show[data-my-dynamic-form] {\n  display: table-row;\n}\n\ntbody.collapse.show[data-my-dynamic-form] {\n  display: table-row-group;\n}\n\n.collapsing[data-my-dynamic-form] {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n\n.dropup[data-my-dynamic-form], .dropdown[data-my-dynamic-form] {\n  position: relative;\n}\n\n.dropdown-toggle[data-my-dynamic-form]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle[data-my-dynamic-form]:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu[data-my-dynamic-form] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropup[data-my-dynamic-form]   .dropdown-menu[data-my-dynamic-form] {\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n\n.dropup[data-my-dynamic-form]   .dropdown-toggle[data-my-dynamic-form]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n\n.dropup[data-my-dynamic-form]   .dropdown-toggle[data-my-dynamic-form]:empty::after {\n  margin-left: 0;\n}\n\n.dropright[data-my-dynamic-form]   .dropdown-menu[data-my-dynamic-form] {\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n\n.dropright[data-my-dynamic-form]   .dropdown-toggle[data-my-dynamic-form]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n\n.dropright[data-my-dynamic-form]   .dropdown-toggle[data-my-dynamic-form]:empty::after {\n  margin-left: 0;\n}\n\n.dropright[data-my-dynamic-form]   .dropdown-toggle[data-my-dynamic-form]::after {\n  vertical-align: 0;\n}\n\n.dropleft[data-my-dynamic-form]   .dropdown-menu[data-my-dynamic-form] {\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n\n.dropleft[data-my-dynamic-form]   .dropdown-toggle[data-my-dynamic-form]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n\n.dropleft[data-my-dynamic-form]   .dropdown-toggle[data-my-dynamic-form]::after {\n  display: none;\n}\n\n.dropleft[data-my-dynamic-form]   .dropdown-toggle[data-my-dynamic-form]::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n\n.dropleft[data-my-dynamic-form]   .dropdown-toggle[data-my-dynamic-form]:empty::after {\n  margin-left: 0;\n}\n\n.dropleft[data-my-dynamic-form]   .dropdown-toggle[data-my-dynamic-form]::before {\n  vertical-align: 0;\n}\n\n.dropdown-divider[data-my-dynamic-form] {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item[data-my-dynamic-form] {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.dropdown-item[data-my-dynamic-form]:hover, .dropdown-item[data-my-dynamic-form]:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.dropdown-item.active[data-my-dynamic-form], .dropdown-item[data-my-dynamic-form]:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n\n.dropdown-item.disabled[data-my-dynamic-form], .dropdown-item[data-my-dynamic-form]:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.dropdown-menu.show[data-my-dynamic-form] {\n  display: block;\n}\n\n.dropdown-header[data-my-dynamic-form] {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.btn-group[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.btn-group[data-my-dynamic-form]    > .btn[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form]    > .btn[data-my-dynamic-form] {\n  position: relative;\n  flex: 0 1 auto;\n}\n\n.btn-group[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:hover, .btn-group-vertical[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:hover {\n  z-index: 1;\n}\n\n.btn-group[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:focus, .btn-group[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:active, .btn-group[data-my-dynamic-form]    > .btn.active[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:focus, .btn-group-vertical[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:active, .btn-group-vertical[data-my-dynamic-form]    > .btn.active[data-my-dynamic-form] {\n  z-index: 1;\n}\n\n.btn-group[data-my-dynamic-form]   .btn[data-my-dynamic-form]    + .btn[data-my-dynamic-form], .btn-group[data-my-dynamic-form]   .btn[data-my-dynamic-form]    + .btn-group[data-my-dynamic-form], .btn-group[data-my-dynamic-form]   .btn-group[data-my-dynamic-form]    + .btn[data-my-dynamic-form], .btn-group[data-my-dynamic-form]   .btn-group[data-my-dynamic-form]    + .btn-group[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form]   .btn[data-my-dynamic-form]    + .btn[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form]   .btn[data-my-dynamic-form]    + .btn-group[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form]   .btn-group[data-my-dynamic-form]    + .btn[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form]   .btn-group[data-my-dynamic-form]    + .btn-group[data-my-dynamic-form] {\n  margin-left: -1px;\n}\n\n.btn-toolbar[data-my-dynamic-form] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.btn-toolbar[data-my-dynamic-form]   .input-group[data-my-dynamic-form] {\n  width: auto;\n}\n\n.btn-group[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:first-child {\n  margin-left: 0;\n}\n\n.btn-group[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:not(:last-child):not(.dropdown-toggle), .btn-group[data-my-dynamic-form]    > .btn-group[data-my-dynamic-form]:not(:last-child)    > .btn[data-my-dynamic-form] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-group[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:not(:first-child), .btn-group[data-my-dynamic-form]    > .btn-group[data-my-dynamic-form]:not(:first-child)    > .btn[data-my-dynamic-form] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split[data-my-dynamic-form] {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n\n.dropdown-toggle-split[data-my-dynamic-form]::after {\n  margin-left: 0;\n}\n\n.btn-sm[data-my-dynamic-form]    + .dropdown-toggle-split[data-my-dynamic-form], .btn-group-sm[data-my-dynamic-form]    > .btn[data-my-dynamic-form]    + .dropdown-toggle-split[data-my-dynamic-form] {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg[data-my-dynamic-form]    + .dropdown-toggle-split[data-my-dynamic-form], .btn-group-lg[data-my-dynamic-form]    > .btn[data-my-dynamic-form]    + .dropdown-toggle-split[data-my-dynamic-form] {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical[data-my-dynamic-form] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.btn-group-vertical[data-my-dynamic-form]   .btn[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form]   .btn-group[data-my-dynamic-form] {\n  width: 100%;\n}\n\n.btn-group-vertical[data-my-dynamic-form]    > .btn[data-my-dynamic-form]    + .btn[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form]    > .btn[data-my-dynamic-form]    + .btn-group[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form]    > .btn-group[data-my-dynamic-form]    + .btn[data-my-dynamic-form], .btn-group-vertical[data-my-dynamic-form]    > .btn-group[data-my-dynamic-form]    + .btn-group[data-my-dynamic-form] {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:not(:last-child):not(.dropdown-toggle), .btn-group-vertical[data-my-dynamic-form]    > .btn-group[data-my-dynamic-form]:not(:last-child)    > .btn[data-my-dynamic-form] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical[data-my-dynamic-form]    > .btn[data-my-dynamic-form]:not(:first-child), .btn-group-vertical[data-my-dynamic-form]    > .btn-group[data-my-dynamic-form]:not(:first-child)    > .btn[data-my-dynamic-form] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle[data-my-dynamic-form]    > .btn[data-my-dynamic-form], .btn-group-toggle[data-my-dynamic-form]    > .btn-group[data-my-dynamic-form]    > .btn[data-my-dynamic-form] {\n  margin-bottom: 0;\n}\n\n.btn-group-toggle[data-my-dynamic-form]    > .btn[data-my-dynamic-form]   input[type=\"radio\"][data-my-dynamic-form], .btn-group-toggle[data-my-dynamic-form]    > .btn[data-my-dynamic-form]   input[type=\"checkbox\"][data-my-dynamic-form], .btn-group-toggle[data-my-dynamic-form]    > .btn-group[data-my-dynamic-form]    > .btn[data-my-dynamic-form]   input[type=\"radio\"][data-my-dynamic-form], .btn-group-toggle[data-my-dynamic-form]    > .btn-group[data-my-dynamic-form]    > .btn[data-my-dynamic-form]   input[type=\"checkbox\"][data-my-dynamic-form] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group[data-my-dynamic-form] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n\n.input-group[data-my-dynamic-form]    > .form-control[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .custom-select[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .custom-file[data-my-dynamic-form] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n\n.input-group[data-my-dynamic-form]    > .form-control[data-my-dynamic-form]:focus, .input-group[data-my-dynamic-form]    > .custom-select[data-my-dynamic-form]:focus, .input-group[data-my-dynamic-form]    > .custom-file[data-my-dynamic-form]:focus {\n  z-index: 3;\n}\n\n.input-group[data-my-dynamic-form]    > .form-control[data-my-dynamic-form]    + .form-control[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .form-control[data-my-dynamic-form]    + .custom-select[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .form-control[data-my-dynamic-form]    + .custom-file[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .custom-select[data-my-dynamic-form]    + .form-control[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .custom-select[data-my-dynamic-form]    + .custom-select[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .custom-select[data-my-dynamic-form]    + .custom-file[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .custom-file[data-my-dynamic-form]    + .form-control[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .custom-file[data-my-dynamic-form]    + .custom-select[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .custom-file[data-my-dynamic-form]    + .custom-file[data-my-dynamic-form] {\n  margin-left: -1px;\n}\n\n.input-group[data-my-dynamic-form]    > .form-control[data-my-dynamic-form]:not(:last-child), .input-group[data-my-dynamic-form]    > .custom-select[data-my-dynamic-form]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-dynamic-form]    > .form-control[data-my-dynamic-form]:not(:first-child), .input-group[data-my-dynamic-form]    > .custom-select[data-my-dynamic-form]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group[data-my-dynamic-form]    > .custom-file[data-my-dynamic-form] {\n  display: flex;\n  align-items: center;\n}\n\n.input-group[data-my-dynamic-form]    > .custom-file[data-my-dynamic-form]:not(:last-child)   .custom-file-label[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .custom-file[data-my-dynamic-form]:not(:last-child)   .custom-file-label[data-my-dynamic-form]::before {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-dynamic-form]    > .custom-file[data-my-dynamic-form]:not(:first-child)   .custom-file-label[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .custom-file[data-my-dynamic-form]:not(:first-child)   .custom-file-label[data-my-dynamic-form]::before {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-prepend[data-my-dynamic-form], .input-group-append[data-my-dynamic-form] {\n  display: flex;\n}\n\n.input-group-prepend[data-my-dynamic-form]   .btn[data-my-dynamic-form], .input-group-append[data-my-dynamic-form]   .btn[data-my-dynamic-form] {\n  position: relative;\n  z-index: 2;\n}\n\n.input-group-prepend[data-my-dynamic-form]   .btn[data-my-dynamic-form]    + .btn[data-my-dynamic-form], .input-group-prepend[data-my-dynamic-form]   .btn[data-my-dynamic-form]    + .input-group-text[data-my-dynamic-form], .input-group-prepend[data-my-dynamic-form]   .input-group-text[data-my-dynamic-form]    + .input-group-text[data-my-dynamic-form], .input-group-prepend[data-my-dynamic-form]   .input-group-text[data-my-dynamic-form]    + .btn[data-my-dynamic-form], .input-group-append[data-my-dynamic-form]   .btn[data-my-dynamic-form]    + .btn[data-my-dynamic-form], .input-group-append[data-my-dynamic-form]   .btn[data-my-dynamic-form]    + .input-group-text[data-my-dynamic-form], .input-group-append[data-my-dynamic-form]   .input-group-text[data-my-dynamic-form]    + .input-group-text[data-my-dynamic-form], .input-group-append[data-my-dynamic-form]   .input-group-text[data-my-dynamic-form]    + .btn[data-my-dynamic-form] {\n  margin-left: -1px;\n}\n\n.input-group-prepend[data-my-dynamic-form] {\n  margin-right: -1px;\n}\n\n.input-group-append[data-my-dynamic-form] {\n  margin-left: -1px;\n}\n\n.input-group-text[data-my-dynamic-form] {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.input-group-text[data-my-dynamic-form]   input[type=\"radio\"][data-my-dynamic-form], .input-group-text[data-my-dynamic-form]   input[type=\"checkbox\"][data-my-dynamic-form] {\n  margin-top: 0;\n}\n\n.input-group[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > .btn[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]    > .input-group-text[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]:not(:last-child)    > .btn[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]:not(:last-child)    > .input-group-text[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]:last-child    > .btn[data-my-dynamic-form]:not(:last-child):not(.dropdown-toggle), .input-group[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]:last-child    > .input-group-text[data-my-dynamic-form]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > .btn[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .input-group-append[data-my-dynamic-form]    > .input-group-text[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]:not(:first-child)    > .btn[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]:not(:first-child)    > .input-group-text[data-my-dynamic-form], .input-group[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]:first-child    > .btn[data-my-dynamic-form]:not(:first-child), .input-group[data-my-dynamic-form]    > .input-group-prepend[data-my-dynamic-form]:first-child    > .input-group-text[data-my-dynamic-form]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control[data-my-dynamic-form] {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n.custom-control-inline[data-my-dynamic-form] {\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input[data-my-dynamic-form] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.custom-control-input[data-my-dynamic-form]:checked    ~ .custom-control-label[data-my-dynamic-form]::before {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.custom-control-input[data-my-dynamic-form]:focus    ~ .custom-control-label[data-my-dynamic-form]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-control-input[data-my-dynamic-form]:active    ~ .custom-control-label[data-my-dynamic-form]::before {\n  color: #fff;\n  background-color: #b3d7ff;\n}\n\n.custom-control-input[data-my-dynamic-form]:disabled    ~ .custom-control-label[data-my-dynamic-form] {\n  color: #6c757d;\n}\n\n.custom-control-input[data-my-dynamic-form]:disabled    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label[data-my-dynamic-form] {\n  margin-bottom: 0;\n}\n\n.custom-control-label[data-my-dynamic-form]::before {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: \"\";\n  user-select: none;\n  background-color: #dee2e6;\n}\n\n.custom-control-label[data-my-dynamic-form]::after {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n\n.custom-checkbox[data-my-dynamic-form]   .custom-control-label[data-my-dynamic-form]::before {\n  border-radius: 0.25rem;\n}\n\n.custom-checkbox[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:checked    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: #007bff;\n}\n\n.custom-checkbox[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:checked    ~ .custom-control-label[data-my-dynamic-form]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:indeterminate    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: #007bff;\n}\n\n.custom-checkbox[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:indeterminate    ~ .custom-control-label[data-my-dynamic-form]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:disabled:checked    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-checkbox[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:disabled:indeterminate    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-radio[data-my-dynamic-form]   .custom-control-label[data-my-dynamic-form]::before {\n  border-radius: 50%;\n}\n\n.custom-radio[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:checked    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: #007bff;\n}\n\n.custom-radio[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:checked    ~ .custom-control-label[data-my-dynamic-form]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\n}\n\n.custom-radio[data-my-dynamic-form]   .custom-control-input[data-my-dynamic-form]:disabled:checked    ~ .custom-control-label[data-my-dynamic-form]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-select[data-my-dynamic-form] {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  appearance: none;\n}\n\n.custom-select[data-my-dynamic-form]:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5);\n}\n\n.custom-select[data-my-dynamic-form]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.custom-select[multiple][data-my-dynamic-form], .custom-select[size][data-my-dynamic-form]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n\n.custom-select[data-my-dynamic-form]:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n\n.custom-select[data-my-dynamic-form]::-ms-expand {\n  opacity: 0;\n}\n\n.custom-select-sm[data-my-dynamic-form] {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n\n.custom-select-lg[data-my-dynamic-form] {\n  height: calc(2.875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%;\n}\n\n.custom-file[data-my-dynamic-form] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input[data-my-dynamic-form] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n\n.custom-file-input[data-my-dynamic-form]:focus    ~ .custom-file-control[data-my-dynamic-form] {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-file-input[data-my-dynamic-form]:focus    ~ .custom-file-control[data-my-dynamic-form]::before {\n  border-color: #80bdff;\n}\n\n.custom-file-input[data-my-dynamic-form]:lang(en)    ~ .custom-file-label[data-my-dynamic-form]::after {\n  content: \"Browse\";\n}\n\n.custom-file-label[data-my-dynamic-form] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.custom-file-label[data-my-dynamic-form]::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(calc(2.25rem + 2px) - 1px * 2);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: 1px solid #ced4da;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.alert[data-my-dynamic-form] {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading[data-my-dynamic-form] {\n  color: inherit;\n}\n\n.alert-link[data-my-dynamic-form] {\n  font-weight: 700;\n}\n\n.alert-dismissible[data-my-dynamic-form] {\n  padding-right: 4rem;\n}\n\n.alert-dismissible[data-my-dynamic-form]   .close[data-my-dynamic-form] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary[data-my-dynamic-form] {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n\n.alert-primary[data-my-dynamic-form]   hr[data-my-dynamic-form] {\n  border-top-color: #9fcdff;\n}\n\n.alert-primary[data-my-dynamic-form]   .alert-link[data-my-dynamic-form] {\n  color: #002752;\n}\n\n.alert-secondary[data-my-dynamic-form] {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n\n.alert-secondary[data-my-dynamic-form]   hr[data-my-dynamic-form] {\n  border-top-color: #c8cbcf;\n}\n\n.alert-secondary[data-my-dynamic-form]   .alert-link[data-my-dynamic-form] {\n  color: #202326;\n}\n\n.alert-success[data-my-dynamic-form] {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.alert-success[data-my-dynamic-form]   hr[data-my-dynamic-form] {\n  border-top-color: #b1dfbb;\n}\n\n.alert-success[data-my-dynamic-form]   .alert-link[data-my-dynamic-form] {\n  color: #0b2e13;\n}\n\n.alert-info[data-my-dynamic-form] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.alert-info[data-my-dynamic-form]   hr[data-my-dynamic-form] {\n  border-top-color: #abdde5;\n}\n\n.alert-info[data-my-dynamic-form]   .alert-link[data-my-dynamic-form] {\n  color: #062c33;\n}\n\n.alert-warning[data-my-dynamic-form] {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n\n.alert-warning[data-my-dynamic-form]   hr[data-my-dynamic-form] {\n  border-top-color: #ffe8a1;\n}\n\n.alert-warning[data-my-dynamic-form]   .alert-link[data-my-dynamic-form] {\n  color: #533f03;\n}\n\n.alert-danger[data-my-dynamic-form] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n\n.alert-danger[data-my-dynamic-form]   hr[data-my-dynamic-form] {\n  border-top-color: #f1b0b7;\n}\n\n.alert-danger[data-my-dynamic-form]   .alert-link[data-my-dynamic-form] {\n  color: #491217;\n}\n\n.alert-light[data-my-dynamic-form] {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n\n.alert-light[data-my-dynamic-form]   hr[data-my-dynamic-form] {\n  border-top-color: #ececf6;\n}\n\n.alert-light[data-my-dynamic-form]   .alert-link[data-my-dynamic-form] {\n  color: #686868;\n}\n\n.alert-dark[data-my-dynamic-form] {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n\n.alert-dark[data-my-dynamic-form]   hr[data-my-dynamic-form] {\n  border-top-color: #b9bbbe;\n}\n\n.alert-dark[data-my-dynamic-form]   .alert-link[data-my-dynamic-form] {\n  color: #040505;\n}\n\n\@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress[data-my-dynamic-form] {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar[data-my-dynamic-form] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  background-color: #007bff;\n  transition: width 0.6s ease;\n}\n\n.progress-bar-striped[data-my-dynamic-form] {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated[data-my-dynamic-form] {\n  animation: progress-bar-stripes 1s linear infinite;\n}\n\n.media[data-my-dynamic-form] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body[data-my-dynamic-form] {\n  flex: 1;\n}\n\n.list-group[data-my-dynamic-form] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group-item-action[data-my-dynamic-form] {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n\n.list-group-item-action[data-my-dynamic-form]:hover, .list-group-item-action[data-my-dynamic-form]:focus {\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.list-group-item-action[data-my-dynamic-form]:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item[data-my-dynamic-form] {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.list-group-item[data-my-dynamic-form]:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.list-group-item[data-my-dynamic-form]:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.list-group-item[data-my-dynamic-form]:hover, .list-group-item[data-my-dynamic-form]:focus {\n  z-index: 1;\n  text-decoration: none;\n}\n\n.list-group-item.disabled[data-my-dynamic-form], .list-group-item[data-my-dynamic-form]:disabled {\n  color: #6c757d;\n  background-color: #fff;\n}\n\n.list-group-item.active[data-my-dynamic-form] {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.list-group-flush[data-my-dynamic-form]   .list-group-item[data-my-dynamic-form] {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n\n.list-group-flush[data-my-dynamic-form]:first-child   .list-group-item[data-my-dynamic-form]:first-child {\n  border-top: 0;\n}\n\n.list-group-flush[data-my-dynamic-form]:last-child   .list-group-item[data-my-dynamic-form]:last-child {\n  border-bottom: 0;\n}\n\n.list-group-item-primary[data-my-dynamic-form] {\n  color: #004085;\n  background-color: #b8daff;\n}\n\n.list-group-item-primary.list-group-item-action[data-my-dynamic-form]:hover, .list-group-item-primary.list-group-item-action[data-my-dynamic-form]:focus {\n  color: #004085;\n  background-color: #9fcdff;\n}\n\n.list-group-item-primary.list-group-item-action.active[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n\n.list-group-item-secondary[data-my-dynamic-form] {\n  color: #383d41;\n  background-color: #d6d8db;\n}\n\n.list-group-item-secondary.list-group-item-action[data-my-dynamic-form]:hover, .list-group-item-secondary.list-group-item-action[data-my-dynamic-form]:focus {\n  color: #383d41;\n  background-color: #c8cbcf;\n}\n\n.list-group-item-secondary.list-group-item-action.active[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41;\n}\n\n.list-group-item-success[data-my-dynamic-form] {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n\n.list-group-item-success.list-group-item-action[data-my-dynamic-form]:hover, .list-group-item-success.list-group-item-action[data-my-dynamic-form]:focus {\n  color: #155724;\n  background-color: #b1dfbb;\n}\n\n.list-group-item-success.list-group-item-action.active[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n\n.list-group-item-info[data-my-dynamic-form] {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n\n.list-group-item-info.list-group-item-action[data-my-dynamic-form]:hover, .list-group-item-info.list-group-item-action[data-my-dynamic-form]:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n\n.list-group-item-info.list-group-item-action.active[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n\n.list-group-item-warning[data-my-dynamic-form] {\n  color: #856404;\n  background-color: #ffeeba;\n}\n\n.list-group-item-warning.list-group-item-action[data-my-dynamic-form]:hover, .list-group-item-warning.list-group-item-action[data-my-dynamic-form]:focus {\n  color: #856404;\n  background-color: #ffe8a1;\n}\n\n.list-group-item-warning.list-group-item-action.active[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n\n.list-group-item-danger[data-my-dynamic-form] {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\n\n.list-group-item-danger.list-group-item-action[data-my-dynamic-form]:hover, .list-group-item-danger.list-group-item-action[data-my-dynamic-form]:focus {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\n\n.list-group-item-danger.list-group-item-action.active[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n\n.list-group-item-light[data-my-dynamic-form] {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n\n.list-group-item-light.list-group-item-action[data-my-dynamic-form]:hover, .list-group-item-light.list-group-item-action[data-my-dynamic-form]:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n\n.list-group-item-light.list-group-item-action.active[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n\n.list-group-item-dark[data-my-dynamic-form] {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n\n.list-group-item-dark.list-group-item-action[data-my-dynamic-form]:hover, .list-group-item-dark.list-group-item-action[data-my-dynamic-form]:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n\n.list-group-item-dark.list-group-item-action.active[data-my-dynamic-form] {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n\n.close[data-my-dynamic-form] {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n\n.close[data-my-dynamic-form]:hover, .close[data-my-dynamic-form]:focus {\n  color: #000;\n  text-decoration: none;\n  opacity: .75;\n}\n\n.close[data-my-dynamic-form]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\nbutton.close[data-my-dynamic-form] {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}"; }
}

var require$$0 = ( moment$1 && hooks ) || moment$1;

var pikaday = createCommonjsModule(function (module, exports) {
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory)
{
    var moment;
    {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = require$$0; } catch (e) {}
        module.exports = factory(moment);
    }
}(commonjsGlobal, function (moment)
{
    var hasMoment = typeof moment === 'function',

    hasEventListeners = !!window.addEventListener,

    document = window.document,

    sto = window.setTimeout,

    addEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },

    removeEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },

    trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    },

    hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },

    addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    },

    removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },

    isArray = function(obj)
    {
        return (/Array/).test(Object.prototype.toString.call(obj));
    },

    isDate = function(obj)
    {
        return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    },

    isWeekend = function(date)
    {
        var day = date.getDay();
        return day === 0 || day === 6;
    },

    isLeapYear = function(year)
    {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    getDaysInMonth = function(year, month)
    {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },

    setToStartOfDay = function(date)
    {
        if (isDate(date)) date.setHours(0,0,0,0);
    },

    compareDates = function(a,b)
    {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
    },

    extend = function(to, from, overwrite)
    {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                }
                else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },

    fireEvent = function(el, eventName, data)
    {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },

    adjustCalendar = function(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month)/12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month)/12);
            calendar.month -= 12;
        }
        return calendar;
    },

    /**
     * defaults and localisation
     */
    defaults = {

        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        format: 'YYYY-MM-DD',

        // the toString function which gets passed a current date object and format
        // and returns a string
        toString: null,

        // used to create date object from current input string
        parse: null,

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // the default flag for moment's strict date parsing
        formatStrict: false,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // Week picker mode
        pickWholeWeek: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        startRange: null,
        endRange: null,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // Render days of the calendar grid that fall in the next or previous month
        showDaysInNextAndPreviousMonths: false,

        // Allows user to select days that fall in the next or previous month
        enableSelectionDaysInNextAndPreviousMonths: false,

        // how many months are visible
        numberOfMonths: 1,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // Blur field when date is selected
        blurFieldOnSelect : true,

        // internationalization
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        },

        // Theme Classname
        theme: null,

        // events array
        events: [],

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null,

        // Enable keyboard input
        keyboardInput: true
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function(opts, day, abbr)
    {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },

    renderDay = function(opts)
    {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
            if (opts.showDaysInNextAndPreviousMonths) {
                arr.push('is-outside-current-month');

                if(!opts.enableSelectionDaysInNextAndPreviousMonths) {
                    arr.push('is-selection-disabled');
                }

            } else {
                return '<td class="is-empty"></td>';
            }
        }
        if (opts.isDisabled) {
            arr.push('is-disabled');
        }
        if (opts.isToday) {
            arr.push('is-today');
        }
        if (opts.isSelected) {
            arr.push('is-selected');
            ariaSelected = 'true';
        }
        if (opts.hasEvent) {
            arr.push('has-event');
        }
        if (opts.isInRange) {
            arr.push('is-inrange');
        }
        if (opts.isStartRange) {
            arr.push('is-startrange');
        }
        if (opts.isEndRange) {
            arr.push('is-endrange');
        }
        return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '" aria-selected="' + ariaSelected + '">' +
                 '<button class="pika-button pika-day" type="button" ' +
                    'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' +
                        opts.day +
                 '</button>' +
               '</td>';
    },

    renderWeek = function (d, m, y) {
        // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
        var onejan = new Date(y, 0, 1),
            weekNum = Math.ceil((((new Date(y, m, d) - onejan) / 86400000) + onejan.getDay()+1)/7);
        return '<td class="pika-week">' + weekNum + '</td>';
    },

    renderRow = function(days, isRTL, pickWholeWeek, isRowSelected)
    {
        return '<tr class="pika-row' + (pickWholeWeek ? ' pick-whole-week' : '') + (isRowSelected ? ' is-selected' : '') + '">' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },

    renderBody = function(rows)
    {
        return '<tbody>' + rows.join('') + '</tbody>';
    },

    renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
    },

    renderTitle = function(instance, c, year, month, refYear, randId)
    {
        var i, j, arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="pika-title" role="heading" aria-live="assertive">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                (i === month ? ' selected="selected"': '') +
                ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? 'disabled="disabled"' : '') + '>' +
                opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected="selected"': '') + '>' + (i) + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === (instance._o.numberOfMonths - 1) ) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },

    renderTable = function(opts, data, randId)
    {
        return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + randId + '">' + renderHead(opts) + renderBody(data) + '</table>';
    },


    /**
     * Pikaday constructor
     */
    Pikaday = function(options)
    {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function(e)
        {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty') && !hasClass(target.parentNode, 'is-disabled')) {
                    self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                    if (opts.bound) {
                        sto(function() {
                            self.hide();
                            if (opts.blurFieldOnSelect && opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                // if this is touch event prevent mouse events emulation
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onKeyChange = function(e)
        {
            e = e || window.event;

            if (self.isVisible()) {

                switch(e.keyCode){
                    case 13:
                    case 27:
                        if (opts.field) {
                            opts.field.blur();
                        }
                        break;
                    case 37:
                        e.preventDefault();
                        self.adjustDate('subtract', 1);
                        break;
                    case 38:
                        self.adjustDate('subtract', 7);
                        break;
                    case 39:
                        self.adjustDate('add', 1);
                        break;
                    case 40:
                        self.adjustDate('add', 7);
                        break;
                }
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (opts.parse) {
                date = opts.parse(opts.field.value, opts.format);
            } else if (hasMoment) {
                date = moment(opts.field.value, opts.format, opts.formatStrict);
                date = (date && date.isValid()) ? date.toDate() : null;
            }
            else {
                date = new Date(Date.parse(opts.field.value));
            }
            if (isDate(date)) {
              self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));

            if (!self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'touchend', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);

        if (opts.keyboardInput) {
            addEvent(document, 'keydown', self._onKeyChange);
        }

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            format = format || this._o.format;
            if (!isDate(this._d)) {
                return '';
            }
            if (this._o.toString) {
              return this._o.toString(this._d, format);
            }
            if (hasMoment) {
              return moment(this._d).format(format);
            }
            return this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : null;
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustDate: function(sign, days) {

            var day = this.getDate() || new Date();
            var difference = parseInt(days)*24*60*60*1000;

            var newDay;

            if (sign === 'add') {
                newDay = new Date(day.valueOf() + difference);
            } else if (sign === 'subtract') {
                newDay = new Date(day.valueOf() - difference);
            }

            this.setDate(newDay);
        },

        adjustCalendars: function() {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.minDate = value;
                this._o.minYear  = value.getFullYear();
                this._o.minMonth = value.getMonth();
            } else {
                this._o.minDate = defaults.minDate;
                this._o.minYear  = defaults.minYear;
                this._o.minMonth = defaults.minMonth;
                this._o.startRange = defaults.startRange;
            }

            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.maxDate = value;
                this._o.maxYear = value.getFullYear();
                this._o.maxMonth = value.getMonth();
            } else {
                this._o.maxDate = defaults.maxDate;
                this._o.maxYear = defaults.maxYear;
                this._o.maxMonth = defaults.maxMonth;
                this._o.endRange = defaults.endRange;
            }

            this.draw();
        },

        setStartRange: function(value)
        {
            this._o.startRange = value;
        },

        setEndRange: function(value)
        {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '',
                randId;

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            randId = 'pika-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                this._o.onDraw(this);
            }

            if (opts.bound) {
                // let the screen reader user know to use arrow keys
                opts.field.setAttribute('aria-label', 'Use the arrow keys to pick a date');
            }
        },

        adjustPosition: function()
        {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) return;

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month, randId)
        {
            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var previousMonth = month === 0 ? 11 : month - 1,
                nextMonth = month === 11 ? 0 : month + 1,
                yearOfPreviousMonth = month === 0 ? year - 1 : year,
                yearOfNextMonth = month === 11 ? year + 1 : year,
                daysInPreviousMonth = getDaysInMonth(yearOfPreviousMonth, previousMonth);
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            var isWeekSelected = false;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
                    isEmpty = i < before || i >= (days + before),
                    dayNumber = 1 + (i - before),
                    monthNumber = month,
                    yearNumber = year,
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (opts.minDate && day < opts.minDate) ||
                                 (opts.maxDate && day > opts.maxDate) ||
                                 (opts.disableWeekends && isWeekend(day)) ||
                                 (opts.disableDayFn && opts.disableDayFn(day));

                if (isEmpty) {
                    if (i < before) {
                        dayNumber = daysInPreviousMonth + dayNumber;
                        monthNumber = previousMonth;
                        yearNumber = yearOfPreviousMonth;
                    } else {
                        dayNumber = dayNumber - days;
                        monthNumber = nextMonth;
                        yearNumber = yearOfNextMonth;
                    }
                }

                var dayConfig = {
                        day: dayNumber,
                        month: monthNumber,
                        year: yearNumber,
                        hasEvent: hasEvent,
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isStartRange: isStartRange,
                        isEndRange: isEndRange,
                        isInRange: isInRange,
                        showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths,
                        enableSelectionDaysInNextAndPreviousMonths: opts.enableSelectionDaysInNextAndPreviousMonths
                    };

                if (opts.pickWholeWeek && isSelected) {
                    isWeekSelected = true;
                }

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL, opts.pickWholeWeek, isWeekSelected));
                    row = [];
                    r = 0;
                    isWeekSelected = false;
                }
            }
            return renderTable(opts, data, randId);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this.isVisible()) {
                this._v = true;
                this.draw();
                removeClass(this.el, 'is-hidden');
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            var opts = this._o;

            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (opts.keyboardInput) {
                removeEvent(document, 'keydown', this._onKeyChange);
            }
            if (opts.field) {
                removeEvent(opts.field, 'change', this._onInputChange);
                if (opts.bound) {
                    removeEvent(opts.trigger, 'click', this._onInputClick);
                    removeEvent(opts.trigger, 'focus', this._onInputFocus);
                    removeEvent(opts.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;
}));
});

// import * as moment from 'moment';
class MyInput {
    getAndPostTextValue(event) {
        if (event.currentTarget.value) {
            this.for === "integer" ?
                this.currentValue = JSON.parse(event.currentTarget.value) : this.currentValue = event.currentTarget.value;
        }
        else {
            this.currentValue = null;
        }
        this.postValue.emit(this.element);
    }
    ;
    getContent() {
        let content = h("input", { class: "form-control", id: this.id, type: this.for === "integer" ? "number" : "text", value: this.currentValue, onInput: (event) => this.getAndPostTextValue(event) });
        if (this.format === "date") {
            content =
                h("input", { class: "form-control", id: this.id, type: this.for === "integer" ? "number" : "text", value: this.currentValue, onChange: (event) => this.getAndPostTextValue(event), onInput: (event) => this.getAndPostTextValue(event) });
        }
        return content;
    }
    ;
    componentWillLoad() {
        if (this.for === "object") {
            this.currentValue = this.value ? this.value : "";
        }
        if (this.for === "integer") {
            this.currentValue = this.value || null;
        }
        if (this.for === "string") {
            this.currentValue = this.value ? JSON.parse(this.value) : "";
        }
    }
    ;
    componentDidLoad() {
        if (this.for === "object" && this.format === "date") {
            const picker = new pikaday({
                field: this.element && this.element.shadowRoot && this.element.shadowRoot.querySelector("input"),
                onSelect: function (date) {
                    console.log('disabled date formatting via moment because build broke');
                    console.log(date);
                    // self.currentDate = moment(date).format('Do MMMM YYYY');
                }
            });
            picker._onClick = null; // disable the listener to support shadow DOM
        }
    }
    ;
    render() {
        const content = this.getContent();
        return (h("div", { class: "form-group" },
            h("label", null,
                this.title,
                h("br", null),
                content,
                h("br", null))));
    }
    static get is() { return "my-input"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "currentDate": { "state": true }, "currentValue": { "state": true }, "element": { "elementRef": true }, "for": { "type": String, "attr": "for" }, "format": { "type": "Any", "attr": "format" }, "id": { "type": String, "attr": "id" }, "title": { "type": String, "attr": "title" }, "value": { "type": "Any", "attr": "value" } }; }
    static get events() { return [{ "name": "postValue", "method": "postValue", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "[data-my-input]:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n*[data-my-input], *[data-my-input]::before, *[data-my-input]::after {\n  box-sizing: border-box;\n}\n\nhtml[data-my-input] {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\@-ms-viewport {\n  width: device-width;\n}\n\narticle[data-my-input], aside[data-my-input], dialog[data-my-input], figcaption[data-my-input], figure[data-my-input], footer[data-my-input], header[data-my-input], hgroup[data-my-input], main[data-my-input], nav[data-my-input], section[data-my-input] {\n  display: block;\n}\n\nbody[data-my-input] {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"][data-my-input]:focus {\n  outline: 0 !important;\n}\n\nhr[data-my-input] {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1[data-my-input], h2[data-my-input], h3[data-my-input], h4[data-my-input], h5[data-my-input], h6[data-my-input] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np[data-my-input] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title][data-my-input], abbr[data-original-title][data-my-input] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\n\naddress[data-my-input] {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol[data-my-input], ul[data-my-input], dl[data-my-input] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol[data-my-input]   ol[data-my-input], ul[data-my-input]   ul[data-my-input], ol[data-my-input]   ul[data-my-input], ul[data-my-input]   ol[data-my-input] {\n  margin-bottom: 0;\n}\n\ndt[data-my-input] {\n  font-weight: 700;\n}\n\ndd[data-my-input] {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote[data-my-input] {\n  margin: 0 0 1rem;\n}\n\ndfn[data-my-input] {\n  font-style: italic;\n}\n\nb[data-my-input], strong[data-my-input] {\n  font-weight: bolder;\n}\n\nsmall[data-my-input] {\n  font-size: 80%;\n}\n\nsub[data-my-input], sup[data-my-input] {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub[data-my-input] {\n  bottom: -.25em;\n}\n\nsup[data-my-input] {\n  top: -.5em;\n}\n\na[data-my-input] {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na[data-my-input]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na[data-my-input]:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na[data-my-input]:not([href]):not([tabindex]):hover, a[data-my-input]:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\na[data-my-input]:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\n\npre[data-my-input], code[data-my-input], kbd[data-my-input], samp[data-my-input] {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\npre[data-my-input] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure[data-my-input] {\n  margin: 0 0 1rem;\n}\n\nimg[data-my-input] {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg[data-my-input]:not(:root) {\n  overflow: hidden;\n}\n\ntable[data-my-input] {\n  border-collapse: collapse;\n}\n\ncaption[data-my-input] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth[data-my-input] {\n  text-align: inherit;\n}\n\nlabel[data-my-input] {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\n\nbutton[data-my-input] {\n  border-radius: 0;\n}\n\nbutton[data-my-input]:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput[data-my-input], button[data-my-input], select[data-my-input], optgroup[data-my-input], textarea[data-my-input] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton[data-my-input], input[data-my-input] {\n  overflow: visible;\n}\n\nbutton[data-my-input], select[data-my-input] {\n  text-transform: none;\n}\n\nbutton[data-my-input], html[data-my-input]   [type=\"button\"][data-my-input], [type=\"reset\"][data-my-input], [type=\"submit\"][data-my-input] {\n  -webkit-appearance: button;\n}\n\nbutton[data-my-input]::-moz-focus-inner, [type=\"button\"][data-my-input]::-moz-focus-inner, [type=\"reset\"][data-my-input]::-moz-focus-inner, [type=\"submit\"][data-my-input]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=\"radio\"][data-my-input], input[type=\"checkbox\"][data-my-input] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"date\"][data-my-input], input[type=\"time\"][data-my-input], input[type=\"datetime-local\"][data-my-input], input[type=\"month\"][data-my-input] {\n  -webkit-appearance: listbox;\n}\n\ntextarea[data-my-input] {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset[data-my-input] {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend[data-my-input] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress[data-my-input] {\n  vertical-align: baseline;\n}\n\n[type=\"number\"][data-my-input]::-webkit-inner-spin-button, [type=\"number\"][data-my-input]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][data-my-input] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type=\"search\"][data-my-input]::-webkit-search-cancel-button, [type=\"search\"][data-my-input]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[data-my-input]::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput[data-my-input] {\n  display: inline-block;\n}\n\nsummary[data-my-input] {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate[data-my-input] {\n  display: none;\n}\n\n[hidden][data-my-input] {\n  display: none !important;\n}\n\nh1[data-my-input], h2[data-my-input], h3[data-my-input], h4[data-my-input], h5[data-my-input], h6[data-my-input], .h1[data-my-input], .h2[data-my-input], .h3[data-my-input], .h4[data-my-input], .h5[data-my-input], .h6[data-my-input] {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit;\n}\n\nh1[data-my-input], .h1[data-my-input] {\n  font-size: 2.5rem;\n}\n\nh2[data-my-input], .h2[data-my-input] {\n  font-size: 2rem;\n}\n\nh3[data-my-input], .h3[data-my-input] {\n  font-size: 1.75rem;\n}\n\nh4[data-my-input], .h4[data-my-input] {\n  font-size: 1.5rem;\n}\n\nh5[data-my-input], .h5[data-my-input] {\n  font-size: 1.25rem;\n}\n\nh6[data-my-input], .h6[data-my-input] {\n  font-size: 1rem;\n}\n\n.lead[data-my-input] {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1[data-my-input] {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-2[data-my-input] {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-3[data-my-input] {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-4[data-my-input] {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nhr[data-my-input] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall[data-my-input], .small[data-my-input] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\nmark[data-my-input], .mark[data-my-input] {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled[data-my-input] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline[data-my-input] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item[data-my-input] {\n  display: inline-block;\n}\n\n.list-inline-item[data-my-input]:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism[data-my-input] {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote[data-my-input] {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n\n.blockquote-footer[data-my-input] {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n\n.blockquote-footer[data-my-input]::before {\n  content: \"\\2014 \\00A0\";\n}\n\n.img-fluid[data-my-input] {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail[data-my-input] {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure[data-my-input] {\n  display: inline-block;\n}\n\n.figure-img[data-my-input] {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption[data-my-input] {\n  font-size: 90%;\n  color: #6c757d;\n}\n\ncode[data-my-input], kbd[data-my-input], pre[data-my-input], samp[data-my-input] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\ncode[data-my-input] {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word;\n}\n\na[data-my-input]    > code[data-my-input] {\n  color: inherit;\n}\n\nkbd[data-my-input] {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\n\nkbd[data-my-input]   kbd[data-my-input] {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\n\npre[data-my-input] {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\n\npre[data-my-input]   code[data-my-input] {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable[data-my-input] {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container[data-my-input] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n\@media (min-width: 576px) {\n  .container[data-my-input] {\n    max-width: 540px;\n  }\n}\n\n\@media (min-width: 768px) {\n  .container[data-my-input] {\n    max-width: 720px;\n  }\n}\n\n\@media (min-width: 992px) {\n  .container[data-my-input] {\n    max-width: 960px;\n  }\n}\n\n\@media (min-width: 1200px) {\n  .container[data-my-input] {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid[data-my-input] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.row[data-my-input] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters[data-my-input] {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters[data-my-input]    > .col[data-my-input], .no-gutters[data-my-input]    > [class*=\"col-\"][data-my-input] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1[data-my-input], .col-2[data-my-input], .col-3[data-my-input], .col-4[data-my-input], .col-5[data-my-input], .col-6[data-my-input], .col-7[data-my-input], .col-8[data-my-input], .col-9[data-my-input], .col-10[data-my-input], .col-11[data-my-input], .col-12[data-my-input], .col[data-my-input], .col-auto[data-my-input], .col-sm-1[data-my-input], .col-sm-2[data-my-input], .col-sm-3[data-my-input], .col-sm-4[data-my-input], .col-sm-5[data-my-input], .col-sm-6[data-my-input], .col-sm-7[data-my-input], .col-sm-8[data-my-input], .col-sm-9[data-my-input], .col-sm-10[data-my-input], .col-sm-11[data-my-input], .col-sm-12[data-my-input], .col-sm[data-my-input], .col-sm-auto[data-my-input], .col-md-1[data-my-input], .col-md-2[data-my-input], .col-md-3[data-my-input], .col-md-4[data-my-input], .col-md-5[data-my-input], .col-md-6[data-my-input], .col-md-7[data-my-input], .col-md-8[data-my-input], .col-md-9[data-my-input], .col-md-10[data-my-input], .col-md-11[data-my-input], .col-md-12[data-my-input], .col-md[data-my-input], .col-md-auto[data-my-input], .col-lg-1[data-my-input], .col-lg-2[data-my-input], .col-lg-3[data-my-input], .col-lg-4[data-my-input], .col-lg-5[data-my-input], .col-lg-6[data-my-input], .col-lg-7[data-my-input], .col-lg-8[data-my-input], .col-lg-9[data-my-input], .col-lg-10[data-my-input], .col-lg-11[data-my-input], .col-lg-12[data-my-input], .col-lg[data-my-input], .col-lg-auto[data-my-input], .col-xl-1[data-my-input], .col-xl-2[data-my-input], .col-xl-3[data-my-input], .col-xl-4[data-my-input], .col-xl-5[data-my-input], .col-xl-6[data-my-input], .col-xl-7[data-my-input], .col-xl-8[data-my-input], .col-xl-9[data-my-input], .col-xl-10[data-my-input], .col-xl-11[data-my-input], .col-xl-12[data-my-input], .col-xl[data-my-input], .col-xl-auto[data-my-input] {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col[data-my-input] {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto[data-my-input] {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1[data-my-input] {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%;\n}\n\n.col-2[data-my-input] {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%;\n}\n\n.col-3[data-my-input] {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4[data-my-input] {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%;\n}\n\n.col-5[data-my-input] {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%;\n}\n\n.col-6[data-my-input] {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7[data-my-input] {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%;\n}\n\n.col-8[data-my-input] {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%;\n}\n\n.col-9[data-my-input] {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10[data-my-input] {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%;\n}\n\n.col-11[data-my-input] {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%;\n}\n\n.col-12[data-my-input] {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first[data-my-input] {\n  order: -1;\n}\n\n.order-last[data-my-input] {\n  order: 13;\n}\n\n.order-0[data-my-input] {\n  order: 0;\n}\n\n.order-1[data-my-input] {\n  order: 1;\n}\n\n.order-2[data-my-input] {\n  order: 2;\n}\n\n.order-3[data-my-input] {\n  order: 3;\n}\n\n.order-4[data-my-input] {\n  order: 4;\n}\n\n.order-5[data-my-input] {\n  order: 5;\n}\n\n.order-6[data-my-input] {\n  order: 6;\n}\n\n.order-7[data-my-input] {\n  order: 7;\n}\n\n.order-8[data-my-input] {\n  order: 8;\n}\n\n.order-9[data-my-input] {\n  order: 9;\n}\n\n.order-10[data-my-input] {\n  order: 10;\n}\n\n.order-11[data-my-input] {\n  order: 11;\n}\n\n.order-12[data-my-input] {\n  order: 12;\n}\n\n.offset-1[data-my-input] {\n  margin-left: 8.33333%;\n}\n\n.offset-2[data-my-input] {\n  margin-left: 16.66667%;\n}\n\n.offset-3[data-my-input] {\n  margin-left: 25%;\n}\n\n.offset-4[data-my-input] {\n  margin-left: 33.33333%;\n}\n\n.offset-5[data-my-input] {\n  margin-left: 41.66667%;\n}\n\n.offset-6[data-my-input] {\n  margin-left: 50%;\n}\n\n.offset-7[data-my-input] {\n  margin-left: 58.33333%;\n}\n\n.offset-8[data-my-input] {\n  margin-left: 66.66667%;\n}\n\n.offset-9[data-my-input] {\n  margin-left: 75%;\n}\n\n.offset-10[data-my-input] {\n  margin-left: 83.33333%;\n}\n\n.offset-11[data-my-input] {\n  margin-left: 91.66667%;\n}\n\n\@media (min-width: 576px) {\n  .col-sm[data-my-input] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto[data-my-input] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1[data-my-input] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-sm-2[data-my-input] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-sm-3[data-my-input] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4[data-my-input] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-sm-5[data-my-input] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-sm-6[data-my-input] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7[data-my-input] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-sm-8[data-my-input] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-sm-9[data-my-input] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10[data-my-input] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-sm-11[data-my-input] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-sm-12[data-my-input] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first[data-my-input] {\n    order: -1;\n  }\n  .order-sm-last[data-my-input] {\n    order: 13;\n  }\n  .order-sm-0[data-my-input] {\n    order: 0;\n  }\n  .order-sm-1[data-my-input] {\n    order: 1;\n  }\n  .order-sm-2[data-my-input] {\n    order: 2;\n  }\n  .order-sm-3[data-my-input] {\n    order: 3;\n  }\n  .order-sm-4[data-my-input] {\n    order: 4;\n  }\n  .order-sm-5[data-my-input] {\n    order: 5;\n  }\n  .order-sm-6[data-my-input] {\n    order: 6;\n  }\n  .order-sm-7[data-my-input] {\n    order: 7;\n  }\n  .order-sm-8[data-my-input] {\n    order: 8;\n  }\n  .order-sm-9[data-my-input] {\n    order: 9;\n  }\n  .order-sm-10[data-my-input] {\n    order: 10;\n  }\n  .order-sm-11[data-my-input] {\n    order: 11;\n  }\n  .order-sm-12[data-my-input] {\n    order: 12;\n  }\n  .offset-sm-0[data-my-input] {\n    margin-left: 0;\n  }\n  .offset-sm-1[data-my-input] {\n    margin-left: 8.33333%;\n  }\n  .offset-sm-2[data-my-input] {\n    margin-left: 16.66667%;\n  }\n  .offset-sm-3[data-my-input] {\n    margin-left: 25%;\n  }\n  .offset-sm-4[data-my-input] {\n    margin-left: 33.33333%;\n  }\n  .offset-sm-5[data-my-input] {\n    margin-left: 41.66667%;\n  }\n  .offset-sm-6[data-my-input] {\n    margin-left: 50%;\n  }\n  .offset-sm-7[data-my-input] {\n    margin-left: 58.33333%;\n  }\n  .offset-sm-8[data-my-input] {\n    margin-left: 66.66667%;\n  }\n  .offset-sm-9[data-my-input] {\n    margin-left: 75%;\n  }\n  .offset-sm-10[data-my-input] {\n    margin-left: 83.33333%;\n  }\n  .offset-sm-11[data-my-input] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 768px) {\n  .col-md[data-my-input] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto[data-my-input] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1[data-my-input] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-md-2[data-my-input] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-md-3[data-my-input] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4[data-my-input] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-md-5[data-my-input] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-md-6[data-my-input] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7[data-my-input] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-md-8[data-my-input] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-md-9[data-my-input] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10[data-my-input] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-md-11[data-my-input] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-md-12[data-my-input] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first[data-my-input] {\n    order: -1;\n  }\n  .order-md-last[data-my-input] {\n    order: 13;\n  }\n  .order-md-0[data-my-input] {\n    order: 0;\n  }\n  .order-md-1[data-my-input] {\n    order: 1;\n  }\n  .order-md-2[data-my-input] {\n    order: 2;\n  }\n  .order-md-3[data-my-input] {\n    order: 3;\n  }\n  .order-md-4[data-my-input] {\n    order: 4;\n  }\n  .order-md-5[data-my-input] {\n    order: 5;\n  }\n  .order-md-6[data-my-input] {\n    order: 6;\n  }\n  .order-md-7[data-my-input] {\n    order: 7;\n  }\n  .order-md-8[data-my-input] {\n    order: 8;\n  }\n  .order-md-9[data-my-input] {\n    order: 9;\n  }\n  .order-md-10[data-my-input] {\n    order: 10;\n  }\n  .order-md-11[data-my-input] {\n    order: 11;\n  }\n  .order-md-12[data-my-input] {\n    order: 12;\n  }\n  .offset-md-0[data-my-input] {\n    margin-left: 0;\n  }\n  .offset-md-1[data-my-input] {\n    margin-left: 8.33333%;\n  }\n  .offset-md-2[data-my-input] {\n    margin-left: 16.66667%;\n  }\n  .offset-md-3[data-my-input] {\n    margin-left: 25%;\n  }\n  .offset-md-4[data-my-input] {\n    margin-left: 33.33333%;\n  }\n  .offset-md-5[data-my-input] {\n    margin-left: 41.66667%;\n  }\n  .offset-md-6[data-my-input] {\n    margin-left: 50%;\n  }\n  .offset-md-7[data-my-input] {\n    margin-left: 58.33333%;\n  }\n  .offset-md-8[data-my-input] {\n    margin-left: 66.66667%;\n  }\n  .offset-md-9[data-my-input] {\n    margin-left: 75%;\n  }\n  .offset-md-10[data-my-input] {\n    margin-left: 83.33333%;\n  }\n  .offset-md-11[data-my-input] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 992px) {\n  .col-lg[data-my-input] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto[data-my-input] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1[data-my-input] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-lg-2[data-my-input] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-lg-3[data-my-input] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4[data-my-input] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-lg-5[data-my-input] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-lg-6[data-my-input] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7[data-my-input] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-lg-8[data-my-input] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-lg-9[data-my-input] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10[data-my-input] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-lg-11[data-my-input] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-lg-12[data-my-input] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first[data-my-input] {\n    order: -1;\n  }\n  .order-lg-last[data-my-input] {\n    order: 13;\n  }\n  .order-lg-0[data-my-input] {\n    order: 0;\n  }\n  .order-lg-1[data-my-input] {\n    order: 1;\n  }\n  .order-lg-2[data-my-input] {\n    order: 2;\n  }\n  .order-lg-3[data-my-input] {\n    order: 3;\n  }\n  .order-lg-4[data-my-input] {\n    order: 4;\n  }\n  .order-lg-5[data-my-input] {\n    order: 5;\n  }\n  .order-lg-6[data-my-input] {\n    order: 6;\n  }\n  .order-lg-7[data-my-input] {\n    order: 7;\n  }\n  .order-lg-8[data-my-input] {\n    order: 8;\n  }\n  .order-lg-9[data-my-input] {\n    order: 9;\n  }\n  .order-lg-10[data-my-input] {\n    order: 10;\n  }\n  .order-lg-11[data-my-input] {\n    order: 11;\n  }\n  .order-lg-12[data-my-input] {\n    order: 12;\n  }\n  .offset-lg-0[data-my-input] {\n    margin-left: 0;\n  }\n  .offset-lg-1[data-my-input] {\n    margin-left: 8.33333%;\n  }\n  .offset-lg-2[data-my-input] {\n    margin-left: 16.66667%;\n  }\n  .offset-lg-3[data-my-input] {\n    margin-left: 25%;\n  }\n  .offset-lg-4[data-my-input] {\n    margin-left: 33.33333%;\n  }\n  .offset-lg-5[data-my-input] {\n    margin-left: 41.66667%;\n  }\n  .offset-lg-6[data-my-input] {\n    margin-left: 50%;\n  }\n  .offset-lg-7[data-my-input] {\n    margin-left: 58.33333%;\n  }\n  .offset-lg-8[data-my-input] {\n    margin-left: 66.66667%;\n  }\n  .offset-lg-9[data-my-input] {\n    margin-left: 75%;\n  }\n  .offset-lg-10[data-my-input] {\n    margin-left: 83.33333%;\n  }\n  .offset-lg-11[data-my-input] {\n    margin-left: 91.66667%;\n  }\n}\n\n\@media (min-width: 1200px) {\n  .col-xl[data-my-input] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xl-auto[data-my-input] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xl-1[data-my-input] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n  }\n  .col-xl-2[data-my-input] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n  }\n  .col-xl-3[data-my-input] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4[data-my-input] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  .col-xl-5[data-my-input] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n  }\n  .col-xl-6[data-my-input] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7[data-my-input] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n  }\n  .col-xl-8[data-my-input] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n  }\n  .col-xl-9[data-my-input] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10[data-my-input] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n  }\n  .col-xl-11[data-my-input] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n  }\n  .col-xl-12[data-my-input] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first[data-my-input] {\n    order: -1;\n  }\n  .order-xl-last[data-my-input] {\n    order: 13;\n  }\n  .order-xl-0[data-my-input] {\n    order: 0;\n  }\n  .order-xl-1[data-my-input] {\n    order: 1;\n  }\n  .order-xl-2[data-my-input] {\n    order: 2;\n  }\n  .order-xl-3[data-my-input] {\n    order: 3;\n  }\n  .order-xl-4[data-my-input] {\n    order: 4;\n  }\n  .order-xl-5[data-my-input] {\n    order: 5;\n  }\n  .order-xl-6[data-my-input] {\n    order: 6;\n  }\n  .order-xl-7[data-my-input] {\n    order: 7;\n  }\n  .order-xl-8[data-my-input] {\n    order: 8;\n  }\n  .order-xl-9[data-my-input] {\n    order: 9;\n  }\n  .order-xl-10[data-my-input] {\n    order: 10;\n  }\n  .order-xl-11[data-my-input] {\n    order: 11;\n  }\n  .order-xl-12[data-my-input] {\n    order: 12;\n  }\n  .offset-xl-0[data-my-input] {\n    margin-left: 0;\n  }\n  .offset-xl-1[data-my-input] {\n    margin-left: 8.33333%;\n  }\n  .offset-xl-2[data-my-input] {\n    margin-left: 16.66667%;\n  }\n  .offset-xl-3[data-my-input] {\n    margin-left: 25%;\n  }\n  .offset-xl-4[data-my-input] {\n    margin-left: 33.33333%;\n  }\n  .offset-xl-5[data-my-input] {\n    margin-left: 41.66667%;\n  }\n  .offset-xl-6[data-my-input] {\n    margin-left: 50%;\n  }\n  .offset-xl-7[data-my-input] {\n    margin-left: 58.33333%;\n  }\n  .offset-xl-8[data-my-input] {\n    margin-left: 66.66667%;\n  }\n  .offset-xl-9[data-my-input] {\n    margin-left: 75%;\n  }\n  .offset-xl-10[data-my-input] {\n    margin-left: 83.33333%;\n  }\n  .offset-xl-11[data-my-input] {\n    margin-left: 91.66667%;\n  }\n}\n\n.table[data-my-input] {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n\n.table[data-my-input]   th[data-my-input], .table[data-my-input]   td[data-my-input] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table[data-my-input]   thead[data-my-input]   th[data-my-input] {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table[data-my-input]   tbody[data-my-input]    + tbody[data-my-input] {\n  border-top: 2px solid #dee2e6;\n}\n\n.table[data-my-input]   .table[data-my-input] {\n  background-color: #fff;\n}\n\n.table-sm[data-my-input]   th[data-my-input], .table-sm[data-my-input]   td[data-my-input] {\n  padding: 0.3rem;\n}\n\n.table-bordered[data-my-input] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[data-my-input]   th[data-my-input], .table-bordered[data-my-input]   td[data-my-input] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[data-my-input]   thead[data-my-input]   th[data-my-input], .table-bordered[data-my-input]   thead[data-my-input]   td[data-my-input] {\n  border-bottom-width: 2px;\n}\n\n.table-striped[data-my-input]   tbody[data-my-input]   tr[data-my-input]:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover[data-my-input]   tbody[data-my-input]   tr[data-my-input]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-primary[data-my-input], .table-primary[data-my-input]    > th[data-my-input], .table-primary[data-my-input]    > td[data-my-input] {\n  background-color: #b8daff;\n}\n\n.table-hover[data-my-input]   .table-primary[data-my-input]:hover {\n  background-color: #9fcdff;\n}\n\n.table-hover[data-my-input]   .table-primary[data-my-input]:hover    > td[data-my-input], .table-hover[data-my-input]   .table-primary[data-my-input]:hover    > th[data-my-input] {\n  background-color: #9fcdff;\n}\n\n.table-secondary[data-my-input], .table-secondary[data-my-input]    > th[data-my-input], .table-secondary[data-my-input]    > td[data-my-input] {\n  background-color: #d6d8db;\n}\n\n.table-hover[data-my-input]   .table-secondary[data-my-input]:hover {\n  background-color: #c8cbcf;\n}\n\n.table-hover[data-my-input]   .table-secondary[data-my-input]:hover    > td[data-my-input], .table-hover[data-my-input]   .table-secondary[data-my-input]:hover    > th[data-my-input] {\n  background-color: #c8cbcf;\n}\n\n.table-success[data-my-input], .table-success[data-my-input]    > th[data-my-input], .table-success[data-my-input]    > td[data-my-input] {\n  background-color: #c3e6cb;\n}\n\n.table-hover[data-my-input]   .table-success[data-my-input]:hover {\n  background-color: #b1dfbb;\n}\n\n.table-hover[data-my-input]   .table-success[data-my-input]:hover    > td[data-my-input], .table-hover[data-my-input]   .table-success[data-my-input]:hover    > th[data-my-input] {\n  background-color: #b1dfbb;\n}\n\n.table-info[data-my-input], .table-info[data-my-input]    > th[data-my-input], .table-info[data-my-input]    > td[data-my-input] {\n  background-color: #bee5eb;\n}\n\n.table-hover[data-my-input]   .table-info[data-my-input]:hover {\n  background-color: #abdde5;\n}\n\n.table-hover[data-my-input]   .table-info[data-my-input]:hover    > td[data-my-input], .table-hover[data-my-input]   .table-info[data-my-input]:hover    > th[data-my-input] {\n  background-color: #abdde5;\n}\n\n.table-warning[data-my-input], .table-warning[data-my-input]    > th[data-my-input], .table-warning[data-my-input]    > td[data-my-input] {\n  background-color: #ffeeba;\n}\n\n.table-hover[data-my-input]   .table-warning[data-my-input]:hover {\n  background-color: #ffe8a1;\n}\n\n.table-hover[data-my-input]   .table-warning[data-my-input]:hover    > td[data-my-input], .table-hover[data-my-input]   .table-warning[data-my-input]:hover    > th[data-my-input] {\n  background-color: #ffe8a1;\n}\n\n.table-danger[data-my-input], .table-danger[data-my-input]    > th[data-my-input], .table-danger[data-my-input]    > td[data-my-input] {\n  background-color: #f5c6cb;\n}\n\n.table-hover[data-my-input]   .table-danger[data-my-input]:hover {\n  background-color: #f1b0b7;\n}\n\n.table-hover[data-my-input]   .table-danger[data-my-input]:hover    > td[data-my-input], .table-hover[data-my-input]   .table-danger[data-my-input]:hover    > th[data-my-input] {\n  background-color: #f1b0b7;\n}\n\n.table-light[data-my-input], .table-light[data-my-input]    > th[data-my-input], .table-light[data-my-input]    > td[data-my-input] {\n  background-color: #fdfdfe;\n}\n\n.table-hover[data-my-input]   .table-light[data-my-input]:hover {\n  background-color: #ececf6;\n}\n\n.table-hover[data-my-input]   .table-light[data-my-input]:hover    > td[data-my-input], .table-hover[data-my-input]   .table-light[data-my-input]:hover    > th[data-my-input] {\n  background-color: #ececf6;\n}\n\n.table-dark[data-my-input], .table-dark[data-my-input]    > th[data-my-input], .table-dark[data-my-input]    > td[data-my-input] {\n  background-color: #c6c8ca;\n}\n\n.table-hover[data-my-input]   .table-dark[data-my-input]:hover {\n  background-color: #b9bbbe;\n}\n\n.table-hover[data-my-input]   .table-dark[data-my-input]:hover    > td[data-my-input], .table-hover[data-my-input]   .table-dark[data-my-input]:hover    > th[data-my-input] {\n  background-color: #b9bbbe;\n}\n\n.table-active[data-my-input], .table-active[data-my-input]    > th[data-my-input], .table-active[data-my-input]    > td[data-my-input] {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover[data-my-input]   .table-active[data-my-input]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover[data-my-input]   .table-active[data-my-input]:hover    > td[data-my-input], .table-hover[data-my-input]   .table-active[data-my-input]:hover    > th[data-my-input] {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table[data-my-input]   .thead-dark[data-my-input]   th[data-my-input] {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e;\n}\n\n.table[data-my-input]   .thead-light[data-my-input]   th[data-my-input] {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.table-dark[data-my-input] {\n  color: #fff;\n  background-color: #212529;\n}\n\n.table-dark[data-my-input]   th[data-my-input], .table-dark[data-my-input]   td[data-my-input], .table-dark[data-my-input]   thead[data-my-input]   th[data-my-input] {\n  border-color: #32383e;\n}\n\n.table-dark.table-bordered[data-my-input] {\n  border: 0;\n}\n\n.table-dark.table-striped[data-my-input]   tbody[data-my-input]   tr[data-my-input]:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.table-dark.table-hover[data-my-input]   tbody[data-my-input]   tr[data-my-input]:hover {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n\@media (max-width: 575.98px) {\n  .table-responsive-sm[data-my-input] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-sm[data-my-input]    > .table-bordered[data-my-input] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 767.98px) {\n  .table-responsive-md[data-my-input] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-md[data-my-input]    > .table-bordered[data-my-input] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 991.98px) {\n  .table-responsive-lg[data-my-input] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-lg[data-my-input]    > .table-bordered[data-my-input] {\n    border: 0;\n  }\n}\n\n\@media (max-width: 1199.98px) {\n  .table-responsive-xl[data-my-input] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-xl[data-my-input]    > .table-bordered[data-my-input] {\n    border: 0;\n  }\n}\n\n.table-responsive[data-my-input] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.table-responsive[data-my-input]    > .table-bordered[data-my-input] {\n  border: 0;\n}\n\n.form-control[data-my-input] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control[data-my-input]::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control[data-my-input]:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.form-control[data-my-input]::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control[data-my-input]:disabled, .form-control[readonly][data-my-input] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\nselect.form-control[data-my-input]:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n}\n\nselect.form-control[data-my-input]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.form-control-file[data-my-input], .form-control-range[data-my-input] {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label[data-my-input] {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg[data-my-input] {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.col-form-label-sm[data-my-input] {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.form-control-plaintext[data-my-input] {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n\n.form-control-plaintext.form-control-sm[data-my-input], .input-group-sm[data-my-input]    > .form-control-plaintext.form-control[data-my-input], .input-group-sm[data-my-input]    > .input-group-prepend[data-my-input]    > .form-control-plaintext.input-group-text[data-my-input], .input-group-sm[data-my-input]    > .input-group-append[data-my-input]    > .form-control-plaintext.input-group-text[data-my-input], .input-group-sm[data-my-input]    > .input-group-prepend[data-my-input]    > .form-control-plaintext.btn[data-my-input], .input-group-sm[data-my-input]    > .input-group-append[data-my-input]    > .form-control-plaintext.btn[data-my-input], .form-control-plaintext.form-control-lg[data-my-input], .input-group-lg[data-my-input]    > .form-control-plaintext.form-control[data-my-input], .input-group-lg[data-my-input]    > .input-group-prepend[data-my-input]    > .form-control-plaintext.input-group-text[data-my-input], .input-group-lg[data-my-input]    > .input-group-append[data-my-input]    > .form-control-plaintext.input-group-text[data-my-input], .input-group-lg[data-my-input]    > .input-group-prepend[data-my-input]    > .form-control-plaintext.btn[data-my-input], .input-group-lg[data-my-input]    > .input-group-append[data-my-input]    > .form-control-plaintext.btn[data-my-input] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm[data-my-input], .input-group-sm[data-my-input]    > .form-control[data-my-input], .input-group-sm[data-my-input]    > .input-group-prepend[data-my-input]    > .input-group-text[data-my-input], .input-group-sm[data-my-input]    > .input-group-append[data-my-input]    > .input-group-text[data-my-input], .input-group-sm[data-my-input]    > .input-group-prepend[data-my-input]    > .btn[data-my-input], .input-group-sm[data-my-input]    > .input-group-append[data-my-input]    > .btn[data-my-input] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\nselect.form-control-sm[data-my-input]:not([size]):not([multiple]), .input-group-sm[data-my-input]    > select.form-control[data-my-input]:not([size]):not([multiple]), .input-group-sm[data-my-input]    > .input-group-prepend[data-my-input]    > select.input-group-text[data-my-input]:not([size]):not([multiple]), .input-group-sm[data-my-input]    > .input-group-append[data-my-input]    > select.input-group-text[data-my-input]:not([size]):not([multiple]), .input-group-sm[data-my-input]    > .input-group-prepend[data-my-input]    > select.btn[data-my-input]:not([size]):not([multiple]), .input-group-sm[data-my-input]    > .input-group-append[data-my-input]    > select.btn[data-my-input]:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px);\n}\n\n.form-control-lg[data-my-input], .input-group-lg[data-my-input]    > .form-control[data-my-input], .input-group-lg[data-my-input]    > .input-group-prepend[data-my-input]    > .input-group-text[data-my-input], .input-group-lg[data-my-input]    > .input-group-append[data-my-input]    > .input-group-text[data-my-input], .input-group-lg[data-my-input]    > .input-group-prepend[data-my-input]    > .btn[data-my-input], .input-group-lg[data-my-input]    > .input-group-append[data-my-input]    > .btn[data-my-input] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\nselect.form-control-lg[data-my-input]:not([size]):not([multiple]), .input-group-lg[data-my-input]    > select.form-control[data-my-input]:not([size]):not([multiple]), .input-group-lg[data-my-input]    > .input-group-prepend[data-my-input]    > select.input-group-text[data-my-input]:not([size]):not([multiple]), .input-group-lg[data-my-input]    > .input-group-append[data-my-input]    > select.input-group-text[data-my-input]:not([size]):not([multiple]), .input-group-lg[data-my-input]    > .input-group-prepend[data-my-input]    > select.btn[data-my-input]:not([size]):not([multiple]), .input-group-lg[data-my-input]    > .input-group-append[data-my-input]    > select.btn[data-my-input]:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px);\n}\n\n.form-group[data-my-input] {\n  margin-bottom: 1rem;\n}\n\n.form-text[data-my-input] {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row[data-my-input] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n\n.form-row[data-my-input]    > .col[data-my-input], .form-row[data-my-input]    > [class*=\"col-\"][data-my-input] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check[data-my-input] {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input[data-my-input] {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n\n.form-check-input[data-my-input]:disabled    ~ .form-check-label[data-my-input] {\n  color: #6c757d;\n}\n\n.form-check-label[data-my-input] {\n  margin-bottom: 0;\n}\n\n.form-check-inline[data-my-input] {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.form-check-inline[data-my-input]   .form-check-input[data-my-input] {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback[data-my-input] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n\n.valid-tooltip[data-my-input] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: .2rem;\n}\n\n.was-validated[data-my-input]   .form-control[data-my-input]:valid, .form-control.is-valid[data-my-input], .was-validated\n.custom-select[data-my-input]:valid, .custom-select.is-valid[data-my-input] {\n  border-color: #28a745;\n}\n\n.was-validated[data-my-input]   .form-control[data-my-input]:valid:focus, .form-control.is-valid[data-my-input]:focus, .was-validated\n.custom-select[data-my-input]:valid:focus, .custom-select.is-valid[data-my-input]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated[data-my-input]   .form-control[data-my-input]:valid    ~ .valid-feedback[data-my-input], .was-validated[data-my-input]   .form-control[data-my-input]:valid    ~ .valid-tooltip[data-my-input], .form-control.is-valid[data-my-input]    ~ .valid-feedback[data-my-input], .form-control.is-valid[data-my-input]    ~ .valid-tooltip[data-my-input], .was-validated\n.custom-select[data-my-input]:valid    ~ .valid-feedback[data-my-input], .was-validated\n.custom-select[data-my-input]:valid    ~ .valid-tooltip[data-my-input], .custom-select.is-valid[data-my-input]    ~ .valid-feedback[data-my-input], .custom-select.is-valid[data-my-input]    ~ .valid-tooltip[data-my-input] {\n  display: block;\n}\n\n.was-validated[data-my-input]   .form-check-input[data-my-input]:valid    ~ .form-check-label[data-my-input], .form-check-input.is-valid[data-my-input]    ~ .form-check-label[data-my-input] {\n  color: #28a745;\n}\n\n.was-validated[data-my-input]   .form-check-input[data-my-input]:valid    ~ .valid-feedback[data-my-input], .was-validated[data-my-input]   .form-check-input[data-my-input]:valid    ~ .valid-tooltip[data-my-input], .form-check-input.is-valid[data-my-input]    ~ .valid-feedback[data-my-input], .form-check-input.is-valid[data-my-input]    ~ .valid-tooltip[data-my-input] {\n  display: block;\n}\n\n.was-validated[data-my-input]   .custom-control-input[data-my-input]:valid    ~ .custom-control-label[data-my-input], .custom-control-input.is-valid[data-my-input]    ~ .custom-control-label[data-my-input] {\n  color: #28a745;\n}\n\n.was-validated[data-my-input]   .custom-control-input[data-my-input]:valid    ~ .custom-control-label[data-my-input]::before, .custom-control-input.is-valid[data-my-input]    ~ .custom-control-label[data-my-input]::before {\n  background-color: #71dd8a;\n}\n\n.was-validated[data-my-input]   .custom-control-input[data-my-input]:valid    ~ .valid-feedback[data-my-input], .was-validated[data-my-input]   .custom-control-input[data-my-input]:valid    ~ .valid-tooltip[data-my-input], .custom-control-input.is-valid[data-my-input]    ~ .valid-feedback[data-my-input], .custom-control-input.is-valid[data-my-input]    ~ .valid-tooltip[data-my-input] {\n  display: block;\n}\n\n.was-validated[data-my-input]   .custom-control-input[data-my-input]:valid:checked    ~ .custom-control-label[data-my-input]::before, .custom-control-input.is-valid[data-my-input]:checked    ~ .custom-control-label[data-my-input]::before {\n  background-color: #34ce57;\n}\n\n.was-validated[data-my-input]   .custom-control-input[data-my-input]:valid:focus    ~ .custom-control-label[data-my-input]::before, .custom-control-input.is-valid[data-my-input]:focus    ~ .custom-control-label[data-my-input]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated[data-my-input]   .custom-file-input[data-my-input]:valid    ~ .custom-file-label[data-my-input], .custom-file-input.is-valid[data-my-input]    ~ .custom-file-label[data-my-input] {\n  border-color: #28a745;\n}\n\n.was-validated[data-my-input]   .custom-file-input[data-my-input]:valid    ~ .custom-file-label[data-my-input]::before, .custom-file-input.is-valid[data-my-input]    ~ .custom-file-label[data-my-input]::before {\n  border-color: inherit;\n}\n\n.was-validated[data-my-input]   .custom-file-input[data-my-input]:valid    ~ .valid-feedback[data-my-input], .was-validated[data-my-input]   .custom-file-input[data-my-input]:valid    ~ .valid-tooltip[data-my-input], .custom-file-input.is-valid[data-my-input]    ~ .valid-feedback[data-my-input], .custom-file-input.is-valid[data-my-input]    ~ .valid-tooltip[data-my-input] {\n  display: block;\n}\n\n.was-validated[data-my-input]   .custom-file-input[data-my-input]:valid:focus    ~ .custom-file-label[data-my-input], .custom-file-input.is-valid[data-my-input]:focus    ~ .custom-file-label[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.invalid-feedback[data-my-input] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.invalid-tooltip[data-my-input] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem;\n}\n\n.was-validated[data-my-input]   .form-control[data-my-input]:invalid, .form-control.is-invalid[data-my-input], .was-validated\n.custom-select[data-my-input]:invalid, .custom-select.is-invalid[data-my-input] {\n  border-color: #dc3545;\n}\n\n.was-validated[data-my-input]   .form-control[data-my-input]:invalid:focus, .form-control.is-invalid[data-my-input]:focus, .was-validated\n.custom-select[data-my-input]:invalid:focus, .custom-select.is-invalid[data-my-input]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated[data-my-input]   .form-control[data-my-input]:invalid    ~ .invalid-feedback[data-my-input], .was-validated[data-my-input]   .form-control[data-my-input]:invalid    ~ .invalid-tooltip[data-my-input], .form-control.is-invalid[data-my-input]    ~ .invalid-feedback[data-my-input], .form-control.is-invalid[data-my-input]    ~ .invalid-tooltip[data-my-input], .was-validated\n.custom-select[data-my-input]:invalid    ~ .invalid-feedback[data-my-input], .was-validated\n.custom-select[data-my-input]:invalid    ~ .invalid-tooltip[data-my-input], .custom-select.is-invalid[data-my-input]    ~ .invalid-feedback[data-my-input], .custom-select.is-invalid[data-my-input]    ~ .invalid-tooltip[data-my-input] {\n  display: block;\n}\n\n.was-validated[data-my-input]   .form-check-input[data-my-input]:invalid    ~ .form-check-label[data-my-input], .form-check-input.is-invalid[data-my-input]    ~ .form-check-label[data-my-input] {\n  color: #dc3545;\n}\n\n.was-validated[data-my-input]   .form-check-input[data-my-input]:invalid    ~ .invalid-feedback[data-my-input], .was-validated[data-my-input]   .form-check-input[data-my-input]:invalid    ~ .invalid-tooltip[data-my-input], .form-check-input.is-invalid[data-my-input]    ~ .invalid-feedback[data-my-input], .form-check-input.is-invalid[data-my-input]    ~ .invalid-tooltip[data-my-input] {\n  display: block;\n}\n\n.was-validated[data-my-input]   .custom-control-input[data-my-input]:invalid    ~ .custom-control-label[data-my-input], .custom-control-input.is-invalid[data-my-input]    ~ .custom-control-label[data-my-input] {\n  color: #dc3545;\n}\n\n.was-validated[data-my-input]   .custom-control-input[data-my-input]:invalid    ~ .custom-control-label[data-my-input]::before, .custom-control-input.is-invalid[data-my-input]    ~ .custom-control-label[data-my-input]::before {\n  background-color: #efa2a9;\n}\n\n.was-validated[data-my-input]   .custom-control-input[data-my-input]:invalid    ~ .invalid-feedback[data-my-input], .was-validated[data-my-input]   .custom-control-input[data-my-input]:invalid    ~ .invalid-tooltip[data-my-input], .custom-control-input.is-invalid[data-my-input]    ~ .invalid-feedback[data-my-input], .custom-control-input.is-invalid[data-my-input]    ~ .invalid-tooltip[data-my-input] {\n  display: block;\n}\n\n.was-validated[data-my-input]   .custom-control-input[data-my-input]:invalid:checked    ~ .custom-control-label[data-my-input]::before, .custom-control-input.is-invalid[data-my-input]:checked    ~ .custom-control-label[data-my-input]::before {\n  background-color: #e4606d;\n}\n\n.was-validated[data-my-input]   .custom-control-input[data-my-input]:invalid:focus    ~ .custom-control-label[data-my-input]::before, .custom-control-input.is-invalid[data-my-input]:focus    ~ .custom-control-label[data-my-input]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated[data-my-input]   .custom-file-input[data-my-input]:invalid    ~ .custom-file-label[data-my-input], .custom-file-input.is-invalid[data-my-input]    ~ .custom-file-label[data-my-input] {\n  border-color: #dc3545;\n}\n\n.was-validated[data-my-input]   .custom-file-input[data-my-input]:invalid    ~ .custom-file-label[data-my-input]::before, .custom-file-input.is-invalid[data-my-input]    ~ .custom-file-label[data-my-input]::before {\n  border-color: inherit;\n}\n\n.was-validated[data-my-input]   .custom-file-input[data-my-input]:invalid    ~ .invalid-feedback[data-my-input], .was-validated[data-my-input]   .custom-file-input[data-my-input]:invalid    ~ .invalid-tooltip[data-my-input], .custom-file-input.is-invalid[data-my-input]    ~ .invalid-feedback[data-my-input], .custom-file-input.is-invalid[data-my-input]    ~ .invalid-tooltip[data-my-input] {\n  display: block;\n}\n\n.was-validated[data-my-input]   .custom-file-input[data-my-input]:invalid:focus    ~ .custom-file-label[data-my-input], .custom-file-input.is-invalid[data-my-input]:focus    ~ .custom-file-label[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.form-inline[data-my-input] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n\n.form-inline[data-my-input]   .form-check[data-my-input] {\n  width: 100%;\n}\n\n\@media (min-width: 576px) {\n  .form-inline[data-my-input]   label[data-my-input] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline[data-my-input]   .form-group[data-my-input] {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline[data-my-input]   .form-control[data-my-input] {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline[data-my-input]   .form-control-plaintext[data-my-input] {\n    display: inline-block;\n  }\n  .form-inline[data-my-input]   .input-group[data-my-input] {\n    width: auto;\n  }\n  .form-inline[data-my-input]   .form-check[data-my-input] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline[data-my-input]   .form-check-input[data-my-input] {\n    position: relative;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline[data-my-input]   .custom-control[data-my-input] {\n    align-items: center;\n    justify-content: center;\n  }\n  .form-inline[data-my-input]   .custom-control-label[data-my-input] {\n    margin-bottom: 0;\n  }\n}\n\n.btn[data-my-input] {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.btn[data-my-input]:hover, .btn[data-my-input]:focus {\n  text-decoration: none;\n}\n\n.btn[data-my-input]:focus, .btn.focus[data-my-input] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.btn.disabled[data-my-input], .btn[data-my-input]:disabled {\n  opacity: 0.65;\n}\n\n.btn[data-my-input]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.btn[data-my-input]:not(:disabled):not(.disabled):active, .btn[data-my-input]:not(:disabled):not(.disabled).active {\n  background-image: none;\n}\n\na.btn.disabled[data-my-input], fieldset[data-my-input]:disabled   a.btn[data-my-input] {\n  pointer-events: none;\n}\n\n.btn-primary[data-my-input] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary[data-my-input]:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n\n.btn-primary[data-my-input]:focus, .btn-primary.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-primary.disabled[data-my-input], .btn-primary[data-my-input]:disabled {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary[data-my-input]:not(:disabled):not(.disabled):active, .btn-primary[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-primary.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n\n.btn-primary[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-primary[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-primary.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-secondary[data-my-input] {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary[data-my-input]:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n\n.btn-secondary[data-my-input]:focus, .btn-secondary.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-secondary.disabled[data-my-input], .btn-secondary[data-my-input]:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary[data-my-input]:not(:disabled):not(.disabled):active, .btn-secondary[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-secondary.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n\n.btn-secondary[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-secondary[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-secondary.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-success[data-my-input] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success[data-my-input]:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n\n.btn-success[data-my-input]:focus, .btn-success.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-success.disabled[data-my-input], .btn-success[data-my-input]:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success[data-my-input]:not(:disabled):not(.disabled):active, .btn-success[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-success.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n\n.btn-success[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-success[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-success.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-info[data-my-input] {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info[data-my-input]:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n\n.btn-info[data-my-input]:focus, .btn-info.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-info.disabled[data-my-input], .btn-info[data-my-input]:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info[data-my-input]:not(:disabled):not(.disabled):active, .btn-info[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-info.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n\n.btn-info[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-info[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-info.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-warning[data-my-input] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning[data-my-input]:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n\n.btn-warning[data-my-input]:focus, .btn-warning.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-warning.disabled[data-my-input], .btn-warning[data-my-input]:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning[data-my-input]:not(:disabled):not(.disabled):active, .btn-warning[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-warning.dropdown-toggle[data-my-input] {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n\n.btn-warning[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-warning[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-warning.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-danger[data-my-input] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger[data-my-input]:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n\n.btn-danger[data-my-input]:focus, .btn-danger.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-danger.disabled[data-my-input], .btn-danger[data-my-input]:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger[data-my-input]:not(:disabled):not(.disabled):active, .btn-danger[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-danger.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n\n.btn-danger[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-danger[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-danger.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-light[data-my-input] {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light[data-my-input]:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n\n.btn-light[data-my-input]:focus, .btn-light.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-light.disabled[data-my-input], .btn-light[data-my-input]:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light[data-my-input]:not(:disabled):not(.disabled):active, .btn-light[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-light.dropdown-toggle[data-my-input] {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n\n.btn-light[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-light[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-light.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-dark[data-my-input] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark[data-my-input]:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n\n.btn-dark[data-my-input]:focus, .btn-dark.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-dark.disabled[data-my-input], .btn-dark[data-my-input]:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark[data-my-input]:not(:disabled):not(.disabled):active, .btn-dark[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-dark.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n\n.btn-dark[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-dark[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-dark.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-primary[data-my-input] {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-input]:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-input]:focus, .btn-outline-primary.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-primary.disabled[data-my-input], .btn-outline-primary[data-my-input]:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-outline-primary[data-my-input]:not(:disabled):not(.disabled):active, .btn-outline-primary[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-outline-primary.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-outline-primary[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-outline-primary.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-secondary[data-my-input] {\n  color: #6c757d;\n  background-color: transparent;\n  background-image: none;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-input]:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-input]:focus, .btn-outline-secondary.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-secondary.disabled[data-my-input], .btn-outline-secondary[data-my-input]:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-secondary[data-my-input]:not(:disabled):not(.disabled):active, .btn-outline-secondary[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-outline-secondary.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-outline-secondary.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-success[data-my-input] {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-input]:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-input]:focus, .btn-outline-success.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-success.disabled[data-my-input], .btn-outline-success[data-my-input]:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n\n.btn-outline-success[data-my-input]:not(:disabled):not(.disabled):active, .btn-outline-success[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-outline-success.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-outline-success[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-outline-success.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-info[data-my-input] {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-input]:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-input]:focus, .btn-outline-info.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-info.disabled[data-my-input], .btn-outline-info[data-my-input]:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n\n.btn-outline-info[data-my-input]:not(:disabled):not(.disabled):active, .btn-outline-info[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-outline-info.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-outline-info[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-outline-info.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning[data-my-input] {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-input]:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-input]:focus, .btn-outline-warning.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-warning.disabled[data-my-input], .btn-outline-warning[data-my-input]:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n\n.btn-outline-warning[data-my-input]:not(:disabled):not(.disabled):active, .btn-outline-warning[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-outline-warning.dropdown-toggle[data-my-input] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-outline-warning[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-outline-warning.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-danger[data-my-input] {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-input]:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-input]:focus, .btn-outline-danger.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-danger.disabled[data-my-input], .btn-outline-danger[data-my-input]:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n\n.btn-outline-danger[data-my-input]:not(:disabled):not(.disabled):active, .btn-outline-danger[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-outline-danger.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-outline-danger[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-outline-danger.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-light[data-my-input] {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-input]:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-input]:focus, .btn-outline-light.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-light.disabled[data-my-input], .btn-outline-light[data-my-input]:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-light[data-my-input]:not(:disabled):not(.disabled):active, .btn-outline-light[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-outline-light.dropdown-toggle[data-my-input] {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-outline-light[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-outline-light.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark[data-my-input] {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-input]:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-input]:focus, .btn-outline-dark.focus[data-my-input] {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-dark.disabled[data-my-input], .btn-outline-dark[data-my-input]:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n\n.btn-outline-dark[data-my-input]:not(:disabled):not(.disabled):active, .btn-outline-dark[data-my-input]:not(:disabled):not(.disabled).active, .show[data-my-input]    > .btn-outline-dark.dropdown-toggle[data-my-input] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark[data-my-input]:not(:disabled):not(.disabled):active:focus, .btn-outline-dark[data-my-input]:not(:disabled):not(.disabled).active:focus, .show[data-my-input]    > .btn-outline-dark.dropdown-toggle[data-my-input]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link[data-my-input] {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-link[data-my-input]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.btn-link[data-my-input]:focus, .btn-link.focus[data-my-input] {\n  text-decoration: underline;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.btn-link[data-my-input]:disabled, .btn-link.disabled[data-my-input] {\n  color: #6c757d;\n}\n\n.btn-lg[data-my-input], .btn-group-lg[data-my-input]    > .btn[data-my-input] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.btn-sm[data-my-input], .btn-group-sm[data-my-input]    > .btn[data-my-input] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block[data-my-input] {\n  display: block;\n  width: 100%;\n}\n\n.btn-block[data-my-input]    + .btn-block[data-my-input] {\n  margin-top: 0.5rem;\n}\n\ninput[type=\"submit\"].btn-block[data-my-input], input[type=\"reset\"].btn-block[data-my-input], input[type=\"button\"].btn-block[data-my-input] {\n  width: 100%;\n}\n\n.fade[data-my-input] {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n.fade.show[data-my-input] {\n  opacity: 1;\n}\n\n.collapse[data-my-input] {\n  display: none;\n}\n\n.collapse.show[data-my-input] {\n  display: block;\n}\n\ntr.collapse.show[data-my-input] {\n  display: table-row;\n}\n\ntbody.collapse.show[data-my-input] {\n  display: table-row-group;\n}\n\n.collapsing[data-my-input] {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n\n.dropup[data-my-input], .dropdown[data-my-input] {\n  position: relative;\n}\n\n.dropdown-toggle[data-my-input]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle[data-my-input]:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu[data-my-input] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropup[data-my-input]   .dropdown-menu[data-my-input] {\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n\n.dropup[data-my-input]   .dropdown-toggle[data-my-input]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n\n.dropup[data-my-input]   .dropdown-toggle[data-my-input]:empty::after {\n  margin-left: 0;\n}\n\n.dropright[data-my-input]   .dropdown-menu[data-my-input] {\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n\n.dropright[data-my-input]   .dropdown-toggle[data-my-input]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n\n.dropright[data-my-input]   .dropdown-toggle[data-my-input]:empty::after {\n  margin-left: 0;\n}\n\n.dropright[data-my-input]   .dropdown-toggle[data-my-input]::after {\n  vertical-align: 0;\n}\n\n.dropleft[data-my-input]   .dropdown-menu[data-my-input] {\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n\n.dropleft[data-my-input]   .dropdown-toggle[data-my-input]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n\n.dropleft[data-my-input]   .dropdown-toggle[data-my-input]::after {\n  display: none;\n}\n\n.dropleft[data-my-input]   .dropdown-toggle[data-my-input]::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n\n.dropleft[data-my-input]   .dropdown-toggle[data-my-input]:empty::after {\n  margin-left: 0;\n}\n\n.dropleft[data-my-input]   .dropdown-toggle[data-my-input]::before {\n  vertical-align: 0;\n}\n\n.dropdown-divider[data-my-input] {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item[data-my-input] {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.dropdown-item[data-my-input]:hover, .dropdown-item[data-my-input]:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.dropdown-item.active[data-my-input], .dropdown-item[data-my-input]:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n\n.dropdown-item.disabled[data-my-input], .dropdown-item[data-my-input]:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.dropdown-menu.show[data-my-input] {\n  display: block;\n}\n\n.dropdown-header[data-my-input] {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.btn-group[data-my-input], .btn-group-vertical[data-my-input] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.btn-group[data-my-input]    > .btn[data-my-input], .btn-group-vertical[data-my-input]    > .btn[data-my-input] {\n  position: relative;\n  flex: 0 1 auto;\n}\n\n.btn-group[data-my-input]    > .btn[data-my-input]:hover, .btn-group-vertical[data-my-input]    > .btn[data-my-input]:hover {\n  z-index: 1;\n}\n\n.btn-group[data-my-input]    > .btn[data-my-input]:focus, .btn-group[data-my-input]    > .btn[data-my-input]:active, .btn-group[data-my-input]    > .btn.active[data-my-input], .btn-group-vertical[data-my-input]    > .btn[data-my-input]:focus, .btn-group-vertical[data-my-input]    > .btn[data-my-input]:active, .btn-group-vertical[data-my-input]    > .btn.active[data-my-input] {\n  z-index: 1;\n}\n\n.btn-group[data-my-input]   .btn[data-my-input]    + .btn[data-my-input], .btn-group[data-my-input]   .btn[data-my-input]    + .btn-group[data-my-input], .btn-group[data-my-input]   .btn-group[data-my-input]    + .btn[data-my-input], .btn-group[data-my-input]   .btn-group[data-my-input]    + .btn-group[data-my-input], .btn-group-vertical[data-my-input]   .btn[data-my-input]    + .btn[data-my-input], .btn-group-vertical[data-my-input]   .btn[data-my-input]    + .btn-group[data-my-input], .btn-group-vertical[data-my-input]   .btn-group[data-my-input]    + .btn[data-my-input], .btn-group-vertical[data-my-input]   .btn-group[data-my-input]    + .btn-group[data-my-input] {\n  margin-left: -1px;\n}\n\n.btn-toolbar[data-my-input] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.btn-toolbar[data-my-input]   .input-group[data-my-input] {\n  width: auto;\n}\n\n.btn-group[data-my-input]    > .btn[data-my-input]:first-child {\n  margin-left: 0;\n}\n\n.btn-group[data-my-input]    > .btn[data-my-input]:not(:last-child):not(.dropdown-toggle), .btn-group[data-my-input]    > .btn-group[data-my-input]:not(:last-child)    > .btn[data-my-input] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-group[data-my-input]    > .btn[data-my-input]:not(:first-child), .btn-group[data-my-input]    > .btn-group[data-my-input]:not(:first-child)    > .btn[data-my-input] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split[data-my-input] {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n\n.dropdown-toggle-split[data-my-input]::after {\n  margin-left: 0;\n}\n\n.btn-sm[data-my-input]    + .dropdown-toggle-split[data-my-input], .btn-group-sm[data-my-input]    > .btn[data-my-input]    + .dropdown-toggle-split[data-my-input] {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg[data-my-input]    + .dropdown-toggle-split[data-my-input], .btn-group-lg[data-my-input]    > .btn[data-my-input]    + .dropdown-toggle-split[data-my-input] {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical[data-my-input] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.btn-group-vertical[data-my-input]   .btn[data-my-input], .btn-group-vertical[data-my-input]   .btn-group[data-my-input] {\n  width: 100%;\n}\n\n.btn-group-vertical[data-my-input]    > .btn[data-my-input]    + .btn[data-my-input], .btn-group-vertical[data-my-input]    > .btn[data-my-input]    + .btn-group[data-my-input], .btn-group-vertical[data-my-input]    > .btn-group[data-my-input]    + .btn[data-my-input], .btn-group-vertical[data-my-input]    > .btn-group[data-my-input]    + .btn-group[data-my-input] {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical[data-my-input]    > .btn[data-my-input]:not(:last-child):not(.dropdown-toggle), .btn-group-vertical[data-my-input]    > .btn-group[data-my-input]:not(:last-child)    > .btn[data-my-input] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical[data-my-input]    > .btn[data-my-input]:not(:first-child), .btn-group-vertical[data-my-input]    > .btn-group[data-my-input]:not(:first-child)    > .btn[data-my-input] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle[data-my-input]    > .btn[data-my-input], .btn-group-toggle[data-my-input]    > .btn-group[data-my-input]    > .btn[data-my-input] {\n  margin-bottom: 0;\n}\n\n.btn-group-toggle[data-my-input]    > .btn[data-my-input]   input[type=\"radio\"][data-my-input], .btn-group-toggle[data-my-input]    > .btn[data-my-input]   input[type=\"checkbox\"][data-my-input], .btn-group-toggle[data-my-input]    > .btn-group[data-my-input]    > .btn[data-my-input]   input[type=\"radio\"][data-my-input], .btn-group-toggle[data-my-input]    > .btn-group[data-my-input]    > .btn[data-my-input]   input[type=\"checkbox\"][data-my-input] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group[data-my-input] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n\n.input-group[data-my-input]    > .form-control[data-my-input], .input-group[data-my-input]    > .custom-select[data-my-input], .input-group[data-my-input]    > .custom-file[data-my-input] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n\n.input-group[data-my-input]    > .form-control[data-my-input]:focus, .input-group[data-my-input]    > .custom-select[data-my-input]:focus, .input-group[data-my-input]    > .custom-file[data-my-input]:focus {\n  z-index: 3;\n}\n\n.input-group[data-my-input]    > .form-control[data-my-input]    + .form-control[data-my-input], .input-group[data-my-input]    > .form-control[data-my-input]    + .custom-select[data-my-input], .input-group[data-my-input]    > .form-control[data-my-input]    + .custom-file[data-my-input], .input-group[data-my-input]    > .custom-select[data-my-input]    + .form-control[data-my-input], .input-group[data-my-input]    > .custom-select[data-my-input]    + .custom-select[data-my-input], .input-group[data-my-input]    > .custom-select[data-my-input]    + .custom-file[data-my-input], .input-group[data-my-input]    > .custom-file[data-my-input]    + .form-control[data-my-input], .input-group[data-my-input]    > .custom-file[data-my-input]    + .custom-select[data-my-input], .input-group[data-my-input]    > .custom-file[data-my-input]    + .custom-file[data-my-input] {\n  margin-left: -1px;\n}\n\n.input-group[data-my-input]    > .form-control[data-my-input]:not(:last-child), .input-group[data-my-input]    > .custom-select[data-my-input]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-input]    > .form-control[data-my-input]:not(:first-child), .input-group[data-my-input]    > .custom-select[data-my-input]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group[data-my-input]    > .custom-file[data-my-input] {\n  display: flex;\n  align-items: center;\n}\n\n.input-group[data-my-input]    > .custom-file[data-my-input]:not(:last-child)   .custom-file-label[data-my-input], .input-group[data-my-input]    > .custom-file[data-my-input]:not(:last-child)   .custom-file-label[data-my-input]::before {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-input]    > .custom-file[data-my-input]:not(:first-child)   .custom-file-label[data-my-input], .input-group[data-my-input]    > .custom-file[data-my-input]:not(:first-child)   .custom-file-label[data-my-input]::before {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-prepend[data-my-input], .input-group-append[data-my-input] {\n  display: flex;\n}\n\n.input-group-prepend[data-my-input]   .btn[data-my-input], .input-group-append[data-my-input]   .btn[data-my-input] {\n  position: relative;\n  z-index: 2;\n}\n\n.input-group-prepend[data-my-input]   .btn[data-my-input]    + .btn[data-my-input], .input-group-prepend[data-my-input]   .btn[data-my-input]    + .input-group-text[data-my-input], .input-group-prepend[data-my-input]   .input-group-text[data-my-input]    + .input-group-text[data-my-input], .input-group-prepend[data-my-input]   .input-group-text[data-my-input]    + .btn[data-my-input], .input-group-append[data-my-input]   .btn[data-my-input]    + .btn[data-my-input], .input-group-append[data-my-input]   .btn[data-my-input]    + .input-group-text[data-my-input], .input-group-append[data-my-input]   .input-group-text[data-my-input]    + .input-group-text[data-my-input], .input-group-append[data-my-input]   .input-group-text[data-my-input]    + .btn[data-my-input] {\n  margin-left: -1px;\n}\n\n.input-group-prepend[data-my-input] {\n  margin-right: -1px;\n}\n\n.input-group-append[data-my-input] {\n  margin-left: -1px;\n}\n\n.input-group-text[data-my-input] {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.input-group-text[data-my-input]   input[type=\"radio\"][data-my-input], .input-group-text[data-my-input]   input[type=\"checkbox\"][data-my-input] {\n  margin-top: 0;\n}\n\n.input-group[data-my-input]    > .input-group-prepend[data-my-input]    > .btn[data-my-input], .input-group[data-my-input]    > .input-group-prepend[data-my-input]    > .input-group-text[data-my-input], .input-group[data-my-input]    > .input-group-append[data-my-input]:not(:last-child)    > .btn[data-my-input], .input-group[data-my-input]    > .input-group-append[data-my-input]:not(:last-child)    > .input-group-text[data-my-input], .input-group[data-my-input]    > .input-group-append[data-my-input]:last-child    > .btn[data-my-input]:not(:last-child):not(.dropdown-toggle), .input-group[data-my-input]    > .input-group-append[data-my-input]:last-child    > .input-group-text[data-my-input]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[data-my-input]    > .input-group-append[data-my-input]    > .btn[data-my-input], .input-group[data-my-input]    > .input-group-append[data-my-input]    > .input-group-text[data-my-input], .input-group[data-my-input]    > .input-group-prepend[data-my-input]:not(:first-child)    > .btn[data-my-input], .input-group[data-my-input]    > .input-group-prepend[data-my-input]:not(:first-child)    > .input-group-text[data-my-input], .input-group[data-my-input]    > .input-group-prepend[data-my-input]:first-child    > .btn[data-my-input]:not(:first-child), .input-group[data-my-input]    > .input-group-prepend[data-my-input]:first-child    > .input-group-text[data-my-input]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control[data-my-input] {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n.custom-control-inline[data-my-input] {\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input[data-my-input] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.custom-control-input[data-my-input]:checked    ~ .custom-control-label[data-my-input]::before {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.custom-control-input[data-my-input]:focus    ~ .custom-control-label[data-my-input]::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-control-input[data-my-input]:active    ~ .custom-control-label[data-my-input]::before {\n  color: #fff;\n  background-color: #b3d7ff;\n}\n\n.custom-control-input[data-my-input]:disabled    ~ .custom-control-label[data-my-input] {\n  color: #6c757d;\n}\n\n.custom-control-input[data-my-input]:disabled    ~ .custom-control-label[data-my-input]::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label[data-my-input] {\n  margin-bottom: 0;\n}\n\n.custom-control-label[data-my-input]::before {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: \"\";\n  user-select: none;\n  background-color: #dee2e6;\n}\n\n.custom-control-label[data-my-input]::after {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n\n.custom-checkbox[data-my-input]   .custom-control-label[data-my-input]::before {\n  border-radius: 0.25rem;\n}\n\n.custom-checkbox[data-my-input]   .custom-control-input[data-my-input]:checked    ~ .custom-control-label[data-my-input]::before {\n  background-color: #007bff;\n}\n\n.custom-checkbox[data-my-input]   .custom-control-input[data-my-input]:checked    ~ .custom-control-label[data-my-input]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox[data-my-input]   .custom-control-input[data-my-input]:indeterminate    ~ .custom-control-label[data-my-input]::before {\n  background-color: #007bff;\n}\n\n.custom-checkbox[data-my-input]   .custom-control-input[data-my-input]:indeterminate    ~ .custom-control-label[data-my-input]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox[data-my-input]   .custom-control-input[data-my-input]:disabled:checked    ~ .custom-control-label[data-my-input]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-checkbox[data-my-input]   .custom-control-input[data-my-input]:disabled:indeterminate    ~ .custom-control-label[data-my-input]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-radio[data-my-input]   .custom-control-label[data-my-input]::before {\n  border-radius: 50%;\n}\n\n.custom-radio[data-my-input]   .custom-control-input[data-my-input]:checked    ~ .custom-control-label[data-my-input]::before {\n  background-color: #007bff;\n}\n\n.custom-radio[data-my-input]   .custom-control-input[data-my-input]:checked    ~ .custom-control-label[data-my-input]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\n}\n\n.custom-radio[data-my-input]   .custom-control-input[data-my-input]:disabled:checked    ~ .custom-control-label[data-my-input]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-select[data-my-input] {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  appearance: none;\n}\n\n.custom-select[data-my-input]:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5);\n}\n\n.custom-select[data-my-input]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.custom-select[multiple][data-my-input], .custom-select[size][data-my-input]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n\n.custom-select[data-my-input]:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n\n.custom-select[data-my-input]::-ms-expand {\n  opacity: 0;\n}\n\n.custom-select-sm[data-my-input] {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n\n.custom-select-lg[data-my-input] {\n  height: calc(2.875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%;\n}\n\n.custom-file[data-my-input] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input[data-my-input] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n\n.custom-file-input[data-my-input]:focus    ~ .custom-file-control[data-my-input] {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-file-input[data-my-input]:focus    ~ .custom-file-control[data-my-input]::before {\n  border-color: #80bdff;\n}\n\n.custom-file-input[data-my-input]:lang(en)    ~ .custom-file-label[data-my-input]::after {\n  content: \"Browse\";\n}\n\n.custom-file-label[data-my-input] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.custom-file-label[data-my-input]::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(calc(2.25rem + 2px) - 1px * 2);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: 1px solid #ced4da;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.alert[data-my-input] {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading[data-my-input] {\n  color: inherit;\n}\n\n.alert-link[data-my-input] {\n  font-weight: 700;\n}\n\n.alert-dismissible[data-my-input] {\n  padding-right: 4rem;\n}\n\n.alert-dismissible[data-my-input]   .close[data-my-input] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary[data-my-input] {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n\n.alert-primary[data-my-input]   hr[data-my-input] {\n  border-top-color: #9fcdff;\n}\n\n.alert-primary[data-my-input]   .alert-link[data-my-input] {\n  color: #002752;\n}\n\n.alert-secondary[data-my-input] {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n\n.alert-secondary[data-my-input]   hr[data-my-input] {\n  border-top-color: #c8cbcf;\n}\n\n.alert-secondary[data-my-input]   .alert-link[data-my-input] {\n  color: #202326;\n}\n\n.alert-success[data-my-input] {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.alert-success[data-my-input]   hr[data-my-input] {\n  border-top-color: #b1dfbb;\n}\n\n.alert-success[data-my-input]   .alert-link[data-my-input] {\n  color: #0b2e13;\n}\n\n.alert-info[data-my-input] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.alert-info[data-my-input]   hr[data-my-input] {\n  border-top-color: #abdde5;\n}\n\n.alert-info[data-my-input]   .alert-link[data-my-input] {\n  color: #062c33;\n}\n\n.alert-warning[data-my-input] {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n\n.alert-warning[data-my-input]   hr[data-my-input] {\n  border-top-color: #ffe8a1;\n}\n\n.alert-warning[data-my-input]   .alert-link[data-my-input] {\n  color: #533f03;\n}\n\n.alert-danger[data-my-input] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n\n.alert-danger[data-my-input]   hr[data-my-input] {\n  border-top-color: #f1b0b7;\n}\n\n.alert-danger[data-my-input]   .alert-link[data-my-input] {\n  color: #491217;\n}\n\n.alert-light[data-my-input] {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n\n.alert-light[data-my-input]   hr[data-my-input] {\n  border-top-color: #ececf6;\n}\n\n.alert-light[data-my-input]   .alert-link[data-my-input] {\n  color: #686868;\n}\n\n.alert-dark[data-my-input] {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n\n.alert-dark[data-my-input]   hr[data-my-input] {\n  border-top-color: #b9bbbe;\n}\n\n.alert-dark[data-my-input]   .alert-link[data-my-input] {\n  color: #040505;\n}\n\n\@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress[data-my-input] {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar[data-my-input] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  background-color: #007bff;\n  transition: width 0.6s ease;\n}\n\n.progress-bar-striped[data-my-input] {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated[data-my-input] {\n  animation: progress-bar-stripes 1s linear infinite;\n}\n\n.media[data-my-input] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body[data-my-input] {\n  flex: 1;\n}\n\n.list-group[data-my-input] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group-item-action[data-my-input] {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n\n.list-group-item-action[data-my-input]:hover, .list-group-item-action[data-my-input]:focus {\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.list-group-item-action[data-my-input]:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item[data-my-input] {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.list-group-item[data-my-input]:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.list-group-item[data-my-input]:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.list-group-item[data-my-input]:hover, .list-group-item[data-my-input]:focus {\n  z-index: 1;\n  text-decoration: none;\n}\n\n.list-group-item.disabled[data-my-input], .list-group-item[data-my-input]:disabled {\n  color: #6c757d;\n  background-color: #fff;\n}\n\n.list-group-item.active[data-my-input] {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.list-group-flush[data-my-input]   .list-group-item[data-my-input] {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n\n.list-group-flush[data-my-input]:first-child   .list-group-item[data-my-input]:first-child {\n  border-top: 0;\n}\n\n.list-group-flush[data-my-input]:last-child   .list-group-item[data-my-input]:last-child {\n  border-bottom: 0;\n}\n\n.list-group-item-primary[data-my-input] {\n  color: #004085;\n  background-color: #b8daff;\n}\n\n.list-group-item-primary.list-group-item-action[data-my-input]:hover, .list-group-item-primary.list-group-item-action[data-my-input]:focus {\n  color: #004085;\n  background-color: #9fcdff;\n}\n\n.list-group-item-primary.list-group-item-action.active[data-my-input] {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n\n.list-group-item-secondary[data-my-input] {\n  color: #383d41;\n  background-color: #d6d8db;\n}\n\n.list-group-item-secondary.list-group-item-action[data-my-input]:hover, .list-group-item-secondary.list-group-item-action[data-my-input]:focus {\n  color: #383d41;\n  background-color: #c8cbcf;\n}\n\n.list-group-item-secondary.list-group-item-action.active[data-my-input] {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41;\n}\n\n.list-group-item-success[data-my-input] {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n\n.list-group-item-success.list-group-item-action[data-my-input]:hover, .list-group-item-success.list-group-item-action[data-my-input]:focus {\n  color: #155724;\n  background-color: #b1dfbb;\n}\n\n.list-group-item-success.list-group-item-action.active[data-my-input] {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n\n.list-group-item-info[data-my-input] {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n\n.list-group-item-info.list-group-item-action[data-my-input]:hover, .list-group-item-info.list-group-item-action[data-my-input]:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n\n.list-group-item-info.list-group-item-action.active[data-my-input] {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n\n.list-group-item-warning[data-my-input] {\n  color: #856404;\n  background-color: #ffeeba;\n}\n\n.list-group-item-warning.list-group-item-action[data-my-input]:hover, .list-group-item-warning.list-group-item-action[data-my-input]:focus {\n  color: #856404;\n  background-color: #ffe8a1;\n}\n\n.list-group-item-warning.list-group-item-action.active[data-my-input] {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n\n.list-group-item-danger[data-my-input] {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\n\n.list-group-item-danger.list-group-item-action[data-my-input]:hover, .list-group-item-danger.list-group-item-action[data-my-input]:focus {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\n\n.list-group-item-danger.list-group-item-action.active[data-my-input] {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n\n.list-group-item-light[data-my-input] {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n\n.list-group-item-light.list-group-item-action[data-my-input]:hover, .list-group-item-light.list-group-item-action[data-my-input]:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n\n.list-group-item-light.list-group-item-action.active[data-my-input] {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n\n.list-group-item-dark[data-my-input] {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n\n.list-group-item-dark.list-group-item-action[data-my-input]:hover, .list-group-item-dark.list-group-item-action[data-my-input]:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n\n.list-group-item-dark.list-group-item-action.active[data-my-input] {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n\n.close[data-my-input] {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n\n.close[data-my-input]:hover, .close[data-my-input]:focus {\n  color: #000;\n  text-decoration: none;\n  opacity: .75;\n}\n\n.close[data-my-input]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\nbutton.close[data-my-input] {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}"; }
}

export { BreadcrumbPage, FormPage, MyCheckbox, MyDropdown, MyDynamicForm, MyInput };
