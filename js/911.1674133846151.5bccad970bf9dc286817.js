(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[911],{40400:(t,r,e)=>{"use strict";e.d(r,{IU:()=>c,Jh:()=>n});var n,o=e(70655),a=e(92950);!function(t){t.sm="sm",t.md="md",t.lg="lg",t.xl="xl"}(n||(n={}));let i=0;function c({name:t,xOffset:r=0,yOffset:e=0,width:c,height:u,svgPath:f}){var l;return l=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const t=this.props,{size:i,color:l,title:s,noVerticalAlign:p}=t,d=(0,o.__rest)(t,["size","color","title","noVerticalAlign"]),v=Boolean(s),y=(t=>{switch(t){case n.sm:return"1em";case n.md:return"1.5em";case n.lg:return"2em";case n.xl:return"3em";default:return"1em"}})(i),h=-.125*Number.parseFloat(y),b=p?null:{verticalAlign:`${h}em`},m=[r,e,c,u].join(" ");return a.createElement("svg",Object.assign({style:b,fill:l,height:y,width:y,viewBox:m,"aria-labelledby":v?this.id:null,"aria-hidden":!v||null,role:"img"},d),v&&a.createElement("title",{id:this.id},s),a.createElement("path",{d:f}))}},l.displayName=t,l.defaultProps={color:"currentColor",size:n.sm,noVerticalAlign:!1},l}},12971:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>n}),e(11452);const n={badge:"pf-c-badge",modifiers:{read:"pf-m-read",unread:"pf-m-unread"},themeDark:"pf-theme-dark"}},80480:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>n}),e(34946);const n={badge:"pf-c-badge",button:"pf-c-button",buttonCount:"pf-c-button__count",buttonIcon:"pf-c-button__icon",buttonProgress:"pf-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end",overpassFont:"pf-m-overpass-font"},spinner:"pf-c-spinner",themeDark:"pf-theme-dark"}},62698:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>n}),e(66822);const n={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-c-spinner",spinnerClipper:"pf-c-spinner__clipper",spinnerLeadBall:"pf-c-spinner__lead-ball",spinnerPath:"pf-c-spinner__path",spinnerTailBall:"pf-c-spinner__tail-ball"}},38296:(t,r,e)=>{"use strict";function n(...t){const r=[],e={}.hasOwnProperty;return t.filter(Boolean).forEach((t=>{const o=typeof t;if("string"===o||"number"===o)r.push(t);else if(Array.isArray(t)&&t.length){const e=n(...t);e&&r.push(e)}else if("object"===o)for(const n in t)e.call(t,n)&&t[n]&&r.push(n)})),r.join(" ")}e.r(r),e.d(r,{css:()=>n})},96874:t=>{t.exports=function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}},86556:(t,r,e)=>{var n=e(89465),o=e(77813);t.exports=function(t,r,e){(void 0!==e&&!o(t[r],e)||void 0===e&&!(r in t))&&n(t,r,e)}},34865:(t,r,e)=>{var n=e(89465),o=e(77813),a=Object.prototype.hasOwnProperty;t.exports=function(t,r,e){var i=t[r];a.call(t,r)&&o(i,e)&&(void 0!==e||r in t)||n(t,r,e)}},89465:(t,r,e)=>{var n=e(38777);t.exports=function(t,r,e){"__proto__"==r&&n?n(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}},3118:(t,r,e)=>{var n=e(13218),o=Object.create,a=function(){function t(){}return function(r){if(!n(r))return{};if(o)return o(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();t.exports=a},28483:(t,r,e)=>{var n=e(25063)();t.exports=n},10313:(t,r,e)=>{var n=e(13218),o=e(25726),a=e(33498),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return a(t);var r=o(t),e=[];for(var c in t)("constructor"!=c||!r&&i.call(t,c))&&e.push(c);return e}},42980:(t,r,e)=>{var n=e(46384),o=e(86556),a=e(28483),i=e(59783),c=e(13218),u=e(81704),f=e(36390);t.exports=function t(r,e,l,s,p){r!==e&&a(e,(function(a,u){if(p||(p=new n),c(a))i(r,e,u,l,t,s,p);else{var d=s?s(f(r,u),a,u+"",r,e,p):void 0;void 0===d&&(d=a),o(r,u,d)}}),u)}},59783:(t,r,e)=>{var n=e(86556),o=e(64626),a=e(77133),i=e(278),c=e(38517),u=e(35694),f=e(1469),l=e(29246),s=e(44144),p=e(23560),d=e(13218),v=e(68630),y=e(36719),h=e(36390),b=e(59881);t.exports=function(t,r,e,m,_,w,g){var x=h(t,e),O=h(r,e),j=g.get(O);if(j)n(t,e,j);else{var P=w?w(x,O,e+"",t,r,g):void 0,S=void 0===P;if(S){var k=f(O),E=!k&&s(O),A=!k&&!E&&y(O);P=O,k||E||A?f(x)?P=x:l(x)?P=i(x):E?(S=!1,P=o(O,!0)):A?(S=!1,P=a(O,!0)):P=[]:v(O)||u(O)?(P=x,u(x)?P=b(x):d(x)&&!p(x)||(P=c(O))):S=!1}S&&(g.set(O,P),_(P,O,m,w,g),g.delete(O)),n(t,e,P)}}},5976:(t,r,e)=>{var n=e(6557),o=e(45357),a=e(30061);t.exports=function(t,r){return a(o(t,r,n),t+"")}},56560:(t,r,e)=>{var n=e(75703),o=e(38777),a=e(6557),i=o?function(t,r){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(r),writable:!0})}:a;t.exports=i},74318:(t,r,e)=>{var n=e(11149);t.exports=function(t){var r=new t.constructor(t.byteLength);return new n(r).set(new n(t)),r}},64626:(t,r,e)=>{t=e.nmd(t);var n=e(55639),o=r&&!r.nodeType&&r,a=o&&t&&!t.nodeType&&t,i=a&&a.exports===o?n.Buffer:void 0,c=i?i.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var e=t.length,n=c?c(e):new t.constructor(e);return t.copy(n),n}},77133:(t,r,e)=>{var n=e(74318);t.exports=function(t,r){var e=r?n(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}},278:t=>{t.exports=function(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r}},98363:(t,r,e)=>{var n=e(34865),o=e(89465);t.exports=function(t,r,e,a){var i=!e;e||(e={});for(var c=-1,u=r.length;++c<u;){var f=r[c],l=a?a(e[f],t[f],f,e,t):void 0;void 0===l&&(l=t[f]),i?o(e,f,l):n(e,f,l)}return e}},21463:(t,r,e)=>{var n=e(5976),o=e(16612);t.exports=function(t){return n((function(r,e){var n=-1,a=e.length,i=a>1?e[a-1]:void 0,c=a>2?e[2]:void 0;for(i=t.length>3&&"function"==typeof i?(a--,i):void 0,c&&o(e[0],e[1],c)&&(i=a<3?void 0:i,a=1),r=Object(r);++n<a;){var u=e[n];u&&t(r,u,n,i)}return r}))}},25063:t=>{t.exports=function(t){return function(r,e,n){for(var o=-1,a=Object(r),i=n(r),c=i.length;c--;){var u=i[t?c:++o];if(!1===e(a[u],u,a))break}return r}}},38777:(t,r,e)=>{var n=e(10852),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},85924:(t,r,e)=>{var n=e(5569)(Object.getPrototypeOf,Object);t.exports=n},38517:(t,r,e)=>{var n=e(3118),o=e(85924),a=e(25726);t.exports=function(t){return"function"!=typeof t.constructor||a(t)?{}:n(o(t))}},16612:(t,r,e)=>{var n=e(77813),o=e(98612),a=e(65776),i=e(13218);t.exports=function(t,r,e){if(!i(e))return!1;var c=typeof r;return!!("number"==c?o(e)&&a(r,e.length):"string"==c&&r in e)&&n(e[r],t)}},33498:t=>{t.exports=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}},45357:(t,r,e)=>{var n=e(96874),o=Math.max;t.exports=function(t,r,e){return r=o(void 0===r?t.length-1:r,0),function(){for(var a=arguments,i=-1,c=o(a.length-r,0),u=Array(c);++i<c;)u[i]=a[r+i];i=-1;for(var f=Array(r+1);++i<r;)f[i]=a[i];return f[r]=e(u),n(t,this,f)}}},36390:t=>{t.exports=function(t,r){if(("constructor"!==r||"function"!=typeof t[r])&&"__proto__"!=r)return t[r]}},30061:(t,r,e)=>{var n=e(56560),o=e(21275)(n);t.exports=o},21275:t=>{var r=Date.now;t.exports=function(t){var e=0,n=0;return function(){var o=r(),a=16-(o-n);if(n=o,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},75703:t=>{t.exports=function(t){return function(){return t}}},6557:t=>{t.exports=function(t){return t}},29246:(t,r,e)=>{var n=e(98612),o=e(37005);t.exports=function(t){return o(t)&&n(t)}},68630:(t,r,e)=>{var n=e(44239),o=e(85924),a=e(37005),i=Function.prototype,c=Object.prototype,u=i.toString,f=c.hasOwnProperty,l=u.call(Object);t.exports=function(t){if(!a(t)||"[object Object]"!=n(t))return!1;var r=o(t);if(null===r)return!0;var e=f.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&u.call(e)==l}},81704:(t,r,e)=>{var n=e(14636),o=e(10313),a=e(98612);t.exports=function(t){return a(t)?n(t,!0):o(t)}},59881:(t,r,e)=>{var n=e(98363),o=e(81704);t.exports=function(t){return n(t,o(t))}},70655:(t,r,e)=>{"use strict";e.r(r),e.d(r,{__assign:()=>a,__asyncDelegator:()=>g,__asyncGenerator:()=>w,__asyncValues:()=>x,__await:()=>_,__awaiter:()=>l,__classPrivateFieldGet:()=>k,__classPrivateFieldIn:()=>A,__classPrivateFieldSet:()=>E,__createBinding:()=>p,__decorate:()=>c,__exportStar:()=>d,__extends:()=>o,__generator:()=>s,__importDefault:()=>S,__importStar:()=>P,__makeTemplateObject:()=>O,__metadata:()=>f,__param:()=>u,__read:()=>y,__rest:()=>i,__spread:()=>h,__spreadArray:()=>m,__spreadArrays:()=>b,__values:()=>v});var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])},n(t,r)};function o(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}var a=function(){return a=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},a.apply(this,arguments)};function i(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]])}return e}function c(t,r,e,n){var o,a=arguments.length,i=a<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,r,e,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(r,e,i):o(r,e))||i);return a>3&&i&&Object.defineProperty(r,e,i),i}function u(t,r){return function(e,n){r(e,n,t)}}function f(t,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,r)}function l(t,r,e,n){return new(e||(e=Promise))((function(o,a){function i(t){try{u(n.next(t))}catch(t){a(t)}}function c(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var r;t.done?o(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(i,c)}u((n=n.apply(t,r||[])).next())}))}function s(t,r){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(t,i)}catch(t){a=[6,t],n=0}finally{e=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var p=Object.create?function(t,r,e,n){void 0===n&&(n=e);var o=Object.getOwnPropertyDescriptor(r,e);o&&!("get"in o?!r.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return r[e]}}),Object.defineProperty(t,n,o)}:function(t,r,e,n){void 0===n&&(n=e),t[n]=r[e]};function d(t,r){for(var e in t)"default"===e||Object.prototype.hasOwnProperty.call(r,e)||p(r,t,e)}function v(t){var r="function"==typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,a=e.call(t),i=[];try{for(;(void 0===r||r-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return i}function h(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(y(arguments[r]));return t}function b(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),o=0;for(r=0;r<e;r++)for(var a=arguments[r],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function m(t,r,e){if(e||2===arguments.length)for(var n,o=0,a=r.length;o<a;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return t.concat(n||Array.prototype.slice.call(r))}function _(t){return this instanceof _?(this.v=t,this):new _(t)}function w(t,r,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=e.apply(t,r||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(t){o[t]&&(n[t]=function(r){return new Promise((function(e,n){a.push([t,r,e,n])>1||c(t,r)}))})}function c(t,r){try{(e=o[t](r)).value instanceof _?Promise.resolve(e.value.v).then(u,f):l(a[0][2],e)}catch(t){l(a[0][3],t)}var e}function u(t){c("next",t)}function f(t){c("throw",t)}function l(t,r){t(r),a.shift(),a.length&&c(a[0][0],a[0][1])}}function g(t){var r,e;return r={},n("next"),n("throw",(function(t){throw t})),n("return"),r[Symbol.iterator]=function(){return this},r;function n(n,o){r[n]=t[n]?function(r){return(e=!e)?{value:_(t[n](r)),done:"return"===n}:o?o(r):r}:o}}function x(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,e=t[Symbol.asyncIterator];return e?e.call(t):(t=v(t),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(e){r[e]=t[e]&&function(r){return new Promise((function(n,o){!function(t,r,e,n){Promise.resolve(n).then((function(r){t({value:r,done:e})}),r)}(n,o,(r=t[e](r)).done,r.value)}))}}}function O(t,r){return Object.defineProperty?Object.defineProperty(t,"raw",{value:r}):t.raw=r,t}var j=Object.create?function(t,r){Object.defineProperty(t,"default",{enumerable:!0,value:r})}:function(t,r){t.default=r};function P(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&p(r,t,e);return j(r,t),r}function S(t){return t&&t.__esModule?t:{default:t}}function k(t,r,e,n){if("a"===e&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof r?t!==r||!n:!r.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===e?n:"a"===e?n.call(t):n?n.value:r.get(t)}function E(t,r,e,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof r?t!==r||!o:!r.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(t,e):o?o.value=e:r.set(t,e),e}function A(t,r){if(null===r||"object"!=typeof r&&"function"!=typeof r)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof t?r===t:t.has(r)}}}]);
//# sourceMappingURL=../sourcemaps/911.7350bb4a87bab9617575595b583417d2.js.map