(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[5366],{76913:(e,r,t)=>{"use strict";t.d(r,{Lg:()=>O,Lv:()=>S,U1:()=>k,WL:()=>Z,_:()=>P,_F:()=>h,aM:()=>_,im:()=>y,mt:()=>w,oo:()=>C,yG:()=>j});var n=t(71002),a=t(45987),o=t(4942),i=t(42982),c=t(70885),u=t(48403),l=t.n(u),s=t(50361),f=t.n(s),v=(t(92950),t(81249)),d=t(59303),m=t(29299);function p(e){var r=function(e,r){if("object"!==(0,n.Z)(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!==(0,n.Z)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===(0,n.Z)(r)?r:String(r)}function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h=function(e,r){return Object.entries(r).every((function(r){var t=(0,c.Z)(r,2),n=t[0],a=t[1];switch(n){case"text":return e.description.toLowerCase().includes(a.toLowerCase());case d.W2.total_risk.urlParam:return a.includes(String(e.total_risk));case d.W2.category.urlParam:return e.tags.find((function(e){return a.includes(String(d.kT[e]))}));case d.W2.impact.urlParam:return a.includes(String(e.impact));case d.W2.impacting.urlParam:return!(a.length>0)||a.some((function(r){return"true"===r?e.impacted_clusters_count>0:"false"===r?0===e.impacted_clusters_count:void 0}));case d.W2.likelihood.urlParam:return a.includes(String(e.likelihood));case d.W2.rule_status.urlParam:return"all"===a||"disabled"===a&&e.disabled||"enabled"===a&&!e.disabled;case d.W2.res_risk.urlParam:return a.includes(String(e.resolution_risk));default:return!0}}))},y=function(e,r){return Object.entries(r).every((function(r){var t=(0,c.Z)(r,2),n=t[0],a=t[1];switch(n){case"text":return(e.cluster_name||e.cluster_id).toLowerCase().includes(a.toLowerCase());case d.RT.hits.urlParam:return 0===a.length&&parseInt(e.total_hit_count)>0||a.includes("all")||a.some((function(r){return e.hits_by_total_risk[r]>0}));case"version":return 0===a.length||a.includes(Z(e.cluster_version));default:return!0}}))},w=function(e,r){var t=f()(e);return delete t.sortIndex,delete t.sortDirection,delete t.sort,delete t.offset,delete t.limit,(null==t?void 0:t.hits)&&0===t.hits.length&&delete t.hits,function(e,r){return Object.entries(e||{}).reduce((function(e,t){var n=(0,c.Z)(t,2),a=n[0],o=n[1];if(r[a]){var u=r[a],s=Array.isArray(o)?o.map((function(e){var r=u.values.find((function(r){return r.value===String(e)}));return r?{name:r.text||r.label,value:e}:{name:e,value:e}})):[{name:u.values.find((function(e){return e.value===String(o)})).label,value:o}];return[].concat((0,i.Z)(e),[{category:l()(u.title),chips:s,urlParam:u.urlParam}])}return"text"===a?[].concat((0,i.Z)(e),(0,i.Z)(o.length>0?[{category:"Name",chips:[{name:o,value:o}],urlParam:a}]:[])):"version"===a?[].concat((0,i.Z)(e),(0,i.Z)(o.length>0?[{category:"Version",chips:o.map((function(e){return{name:e,value:e}})),urlParam:a}]:[])):"namespace_name"===a?[].concat((0,i.Z)(e),(0,i.Z)(o.length>0?[{category:"Namespace name",chips:[{name:o,value:o}],urlParam:a}]:[])):"cluster_name"===a?[].concat((0,i.Z)(e),(0,i.Z)(o.length>0?[{category:"Cluster name",chips:[{name:o,value:o}],urlParam:a}]:[])):void 0}),[])}(t,r)},j=function(e){var r=new URLSearchParams(e);return Array.from(r).reduce((function(e,r){var t=(0,c.Z)(r,2),n=t[0],a=t[1];return g(g({},e),{},(0,o.Z)({},n,["text","first","rule_status","sort","cluster_name","namespace_name","description","object_id"].includes(n)?a:"true"===a||"false"===a?JSON.parse(a):a.split(",")))}),{})},O=function(e){return{name:e.substring(e.startsWith("-")?1:0),direction:e.startsWith("-")?"desc":"asc",description:e.substring(e.startsWith("-")?1:0),object_id:e.substring(e.startsWith("-")?1:0)}},_=function(){var e,r,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,o=new URL(window.location.origin+window.location.pathname);o.searchParams.set("sort",(e=n.sortIndex,r=a,t=n.sortDirection,["desc","asc"].includes(t)||console.error("Invalid sort parameters (is not asc nor desc)"),"".concat("asc"===t?"":"-").concat(r[e]))),Object.entries(n).forEach((function(e){var r=(0,c.Z)(e,2),t=r[0],n=r[1];return"sortIndex"!==t&&"sortDirection"!==t&&"sort"!==t&&""!==n&&!(Array.isArray(n)&&0===n.length)&&o.searchParams.set(t,n)})),window.history.replaceState(null,null,o.href)},P=function(e,r,t){return t*(0,v.compare)(e,r)},Z=function(e){return(0,v.coerce)(void 0!==e&&(0,v.valid)((0,v.coerce)(e))?e:"0.0.0").version},C=function(e,r,t){var n=g(g({},e),{},{offset:0});n[t],r(g(g({},(0,a.Z)(n,[t].map(p))),"text"===t?{text:""}:"hits"===t?{hits:[]}:"version"===t?{version:[]}:"object_id"===t?{object_id:""}:{}))},S=function(e,r,t,n){return n.length>0?r(g(g({},e),{},{offset:0},(0,o.Z)({},t,n))):C(e,r,t)},k=function(e,r){var t=(0,m.Vs)(e.metadata.hits_by_severity,"general");return Object.entries(r).every((function(n){var a=(0,c.Z)(n,2),o=a[0],i=a[1];switch(o){case"cluster_name":return(e.cluster.display_name||e.cluster.uuid).toLowerCase().includes(i.toLowerCase());case"namespace_name":return(e.namespace.name||e.namespace.uuid).toLowerCase().includes(i.toLowerCase());case"severity":return 0===i.length||(0,m.mR)(t,r.severity);default:return!0}}))}},29299:(e,r,t)=>{"use strict";t.d(r,{Q$:()=>Z,Vs:()=>b,ke:()=>_,l8:()=>P,lM:()=>j,mR:()=>g,og:()=>p,p5:()=>C,sI:()=>S,wW:()=>h,y4:()=>k});var n=t(71002),a=t(4942),o=t(45987),i=t(42982),c=t(70885),u=t(15509),l=t(44439),s=t.n(l);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e){var r=function(e,r){if("object"!==(0,n.Z)(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!==(0,n.Z)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===(0,n.Z)(r)?r:String(r)}function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var p=[{value:"critical",label:"Critical",iconColor:"var(--pf-global--danger-color--100)",textColor:"var(--pf-global--danger-color--100)",hasIcon:!0},{value:"important",label:"Important",iconColor:"var(--pf-global--palette--orange-300)",textColor:"var(--pf-global--palette--orange-400)",hasIcon:!0},{value:"moderate",label:"Moderate",iconColor:"var(--pf-global--warning-color--100)",textColor:"var(--pf-global--warning-color--200)",hasIcon:!0},{value:"low",label:"Low",iconColor:"var(--pf-global--Color--200)",textColor:"var(--pf-global--default-color--300)",hasIcon:!0},{value:"none",label:"Unknown"}],b=function(e,r){var t={1:"low",2:"moderate",3:"important",4:"critical"},n={};if("general"===r||"label"===r)for(var a in e)a in t&&(n[t[a]]=e[a]);else n=t[e];return n},g=function(e,r){var t,n=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return m(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw o}}}}(r);try{for(n.s();!(t=n.n()).done;)if(e[t.value]>0)return!0}catch(e){n.e(e)}finally{n.f()}},h=function(e){var r=s().cloneDeep(e);return delete r.sortIndex,delete r.sortDirection,delete r.offset,delete r.limit,delete r.sort,!!Object.values(r).filter((function(e){return!s().isEmpty(e)})).length},y=function(e){return(null==e?void 0:e.charAt(0).toUpperCase())+(null==e?void 0:e.slice(1))},w=function(e,r){if(e.values){var t=e.values.find((function(e){return e.value===String(r)}));return t?{name:t.label||t.text,value:r}:{name:r,value:r}}return{name:r,value:r}},j=function(e,r){return Object.entries(e).reduce((function(e,t){var n=(0,c.Z)(t,2),a=n[0],o=n[1];if(r[a]){var i=r[a];if(Array.isArray(o)&&o.length>0||"string"==typeof o&&""!==o.trim()){var u=Array.isArray(o)?o.map((function(e){return w(i,e)})):[w(i,o)];e.push({category:y(i.label),chips:u,urlParam:i.urlParam})}}else"description"!==a&&"object_id"!==a||""===o.trim()||e.push({category:y(a.replace("_"," ")),chips:[{name:o,value:o}],urlParam:a});return e}),[])},O=function(e,r){var t=r[0].rule;switch(e){case 1:return t.details;case 2:return t.total_risk;case 3:return t.objects.length;case 4:return t.modified}},_=function(e,r,t){var n;return e>=1?null===(n=(0,i.Z)(t))||void 0===n?void 0:n.sort((function(t,n){var a=r===u.SortByDirection.asc?1:-1;return O(e,t)>O(e,n)?a:O(e,n)>O(e,t)?-a:0})):(0,i.Z)(t)},P=function(e,r){return e.flatMap((function(e,t){var n=(0,i.Z)(e);return r&&0===t&&(e[0].isOpen=!0),e[1].parent=2*t,n}))},Z=function(e,r){return Object.entries(r).some((function(r){var t=(0,c.Z)(r,2),n=t[0],a=t[1];return"object_id"===n&&e.uid.toLowerCase().includes(a.toLowerCase())}))},C=function(e,r,t){var n=v({},e);n[t],r(v(v({},(0,o.Z)(n,[t].map(d))),"description"===t?{description:""}:"total_risk"===t?{total_risk:[]}:"object_id"===t?{object_id:""}:{}))},S=function(e,r,t,n){return n.length>0?r(v(v({},e),(0,a.Z)({},t,n))):C(e,r,t)},k=function(e,r){var t=s().omitBy(s().cloneDeep(r),s().isEmpty);return Object.entries(t).every((function(r){var t=(0,c.Z)(r,2),n=t[0],a=t[1];switch(n){case"description":return a&&e.details.toLowerCase().includes(a.toLowerCase());case"object_id":return a&&e.objects.some((function(e){return e.uid.toLowerCase().includes(a.toLowerCase())}));case"total_risk":return a&&a.includes(String(e.total_risk));default:return!0}}))}},30187:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5366.00db526f67368cb0add2fa506a518476.js.map