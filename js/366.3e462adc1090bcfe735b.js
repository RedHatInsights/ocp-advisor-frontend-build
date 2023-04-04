/*! For license information please see 366.3e462adc1090bcfe735b.js.LICENSE.txt */
(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[366],{43047:(e,t,n)=>{"use strict";n.d(t,{$O:()=>a,MX:()=>o,ZP:()=>i});var r=n(40400);const o={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a=(0,r.IU)(o),i=a},51203:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n(81320);const r={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},68374:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n(314);const r={modifiers:{"4xl":"pf-m-4xl","3xl":"pf-m-3xl","2xl":"pf-m-2xl",xl:"pf-m-xl",lg:"pf-m-lg",md:"pf-m-md",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},66042:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n(87234);const r={bullseye:"pf-l-bullseye"}},73976:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n(53519);const r={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},44291:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createFocusTrap:()=>I});var r=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=r.join(","),a="undefined"==typeof Element,i=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!a&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},u=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&i.call(e,o)&&r.unshift(e),r.filter(n)},s=function e(t,n,r){for(var a=[],c=Array.from(t);c.length;){var u=c.shift();if("SLOT"===u.tagName){var s=u.assignedElements(),l=e(s.length?s:u.children,!0,r);r.flatten?a.push.apply(a,l):a.push({scope:u,candidates:l})}else{i.call(u,o)&&r.filter(u)&&(n||!t.includes(u))&&a.push(u);var f=u.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(u),p=!r.shadowRootFilter||r.shadowRootFilter(u);if(f&&p){var d=e(!0===f?u.children:f.children,!0,r);r.flatten?a.push.apply(a,d):a.push({scope:u,candidates:d})}else c.unshift.apply(c,u.children)}}return a},l=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},f=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},p=function(e){return"INPUT"===e.tagName},d=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},b=function(e,t){return!(t.disabled||function(e){return p(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(o,"details:not([open]) *"))return!0;var a=c(e).host,u=(null==a?void 0:a.ownerDocument.contains(a))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return d(e)}else{if("function"==typeof r){for(var s=e;e;){var l=e.parentElement,f=c(e);if(l&&!l.shadowRoot&&!0===r(l))return d(e);e=e.assignedSlot?e.assignedSlot:l||f===e.ownerDocument?l:f.host}e=s}if(u)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!i.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},v=function(e,t){return!(function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||c(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)}(t)||l(t)<0||!b(e,t))},m=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},h=function e(t){var n=[],r=[];return t.forEach((function(t,o){var a=!!t.scope,i=a?t.scope:t,c=l(i,a),u=a?e(t.candidates):i;0===c?a?n.push.apply(n,u):n.push(i):r.push({documentOrder:o,tabIndex:c,item:t,isScope:a,content:u})})),r.sort(f).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},y=function(e,t){var n;return n=(t=t||{}).getShadowRoot?s([e],t.includeContainer,{filter:v.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:m}):u(e,t.includeContainer,v.bind(null,t)),h(n)},g=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==i.call(e,o)&&v(t,e)},w=r.concat("iframe").join(","),E=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==i.call(e,w)&&b(t,e)};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N,k=(N=[],{activateTrap:function(e){if(N.length>0){var t=N[N.length-1];t!==e&&t.pause()}var n=N.indexOf(e);-1===n||N.splice(n,1),N.push(e)},deactivateTrap:function(e){var t=N.indexOf(e);-1!==t&&N.splice(t,1),N.length>0&&N[N.length-1].unpause()}}),x=function(e){return setTimeout(e,0)},F=function(e,t){var n=-1;return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},C=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,n):e},D=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},I=function(e,t){var n,r=(null==t?void 0:t.document)||document,o=S({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},i=function(e,t,n){return e&&void 0!==e[t]?e[t]:o[n||t]},c=function(e){return a.containerGroups.findIndex((function(t){var n=t.container,r=t.tabbableNodes;return n.contains(e)||r.find((function(t){return t===e}))}))},l=function(e){var t=o[e];if("function"==typeof t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];t=t.apply(void 0,a)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var c=t;if("string"==typeof t&&!(c=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return c},f=function(){var e=l("initialFocus");if(!1===e)return!1;if(void 0===e)if(c(r.activeElement)>=0)e=r.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||l("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},p=function(){if(a.containerGroups=a.containers.map((function(e){var t,n,r=y(e,o.tabbableOptions),a=(t=e,(n=(n=o.tabbableOptions)||{}).getShadowRoot?s([t],n.includeContainer,{filter:b.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):u(t,n.includeContainer,b.bind(null,n)));return{container:e,tabbableNodes:r,focusableNodes:a,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=a.findIndex((function(t){return t===e}));if(!(n<0))return t?a.slice(n+1).find((function(e){return g(e,o.tabbableOptions)})):a.slice(0,n).reverse().find((function(e){return g(e,o.tabbableOptions)}))}}})),a.tabbableGroups=a.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),a.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},d=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!o.preventScroll}),a.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(f()))},v=function(e){var t=l("setReturnFocus",e);return t||!1!==t&&e},m=function(e){var t=D(e);c(t)>=0||(C(o.clickOutsideDeactivates,e)?n.deactivate({returnFocus:o.returnFocusOnDeactivate&&!E(t,o.tabbableOptions)}):C(o.allowOutsideClick,e)||e.preventDefault())},h=function(e){var t=D(e),n=c(t)>=0;n||t instanceof Document?n&&(a.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),d(a.mostRecentlyFocusedNode||f()))},w=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==C(o.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=D(e);p();var n=null;if(a.tabbableGroups.length>0){var r=c(t),i=r>=0?a.containerGroups[r]:void 0;if(r<0)n=e.shiftKey?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var u=F(a.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(u<0&&(i.container===t||E(t,o.tabbableOptions)&&!g(t,o.tabbableOptions)&&!i.nextTabbableNode(t,!1))&&(u=r),u>=0){var s=0===u?a.tabbableGroups.length-1:u-1;n=a.tabbableGroups[s].lastTabbableNode}}else{var f=F(a.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(f<0&&(i.container===t||E(t,o.tabbableOptions)&&!g(t,o.tabbableOptions)&&!i.nextTabbableNode(t))&&(f=r),f>=0){var b=f===a.tabbableGroups.length-1?0:f+1;n=a.tabbableGroups[b].firstTabbableNode}}}else n=l("fallbackFocus");n&&(e.preventDefault(),d(n))}(e)},O=function(e){var t=D(e);c(t)>=0||C(o.clickOutsideDeactivates,e)||C(o.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},T=function(){if(a.active)return k.activateTrap(n),a.delayInitialFocusTimer=o.delayInitialFocus?x((function(){d(f())})):d(f()),r.addEventListener("focusin",h,!0),r.addEventListener("mousedown",m,{capture:!0,passive:!1}),r.addEventListener("touchstart",m,{capture:!0,passive:!1}),r.addEventListener("click",O,{capture:!0,passive:!1}),r.addEventListener("keydown",w,{capture:!0,passive:!1}),n},N=function(){if(a.active)return r.removeEventListener("focusin",h,!0),r.removeEventListener("mousedown",m,!0),r.removeEventListener("touchstart",m,!0),r.removeEventListener("click",O,!0),r.removeEventListener("keydown",w,!0),n};return(n={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=i(e,"onActivate"),n=i(e,"onPostActivate"),o=i(e,"checkCanFocusTrap");o||p(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=r.activeElement,t&&t();var c=function(){o&&p(),T(),n&&n()};return o?(o(a.containers.concat()).then(c,c),this):(c(),this)},deactivate:function(e){if(!a.active)return this;var t=S({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,N(),a.active=!1,a.paused=!1,k.deactivateTrap(n);var r=i(t,"onDeactivate"),c=i(t,"onPostDeactivate"),u=i(t,"checkCanReturnFocus"),s=i(t,"returnFocus","returnFocusOnDeactivate");r&&r();var l=function(){x((function(){s&&d(v(a.nodeFocusedBeforeActivation)),c&&c()}))};return s&&u?(u(v(a.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(){return a.paused||!a.active||(a.paused=!0,N()),this},unpause:function(){return a.paused&&a.active?(a.paused=!1,p(),T(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return a.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),a.active&&p(),this}}).updateContainerElements(e),n}},92703:(e,t,n)=>{"use strict";var r=n(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},45697:(e,t,n)=>{e.exports=n(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=../sourcemaps/366.2fc457c2757391895516dec98466f998.js.map