/*! For license information please see 4667.1652700488068.769cbb08a2ab7fefa2fb.js.LICENSE.txt */
(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[4667],{8679:(e,t,r)=>{"use strict";var o=r(21296),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function f(e){return o.isMemo(e)?s:a[e.$$typeof]||n}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=s;var p=Object.defineProperty,i=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(m){var n=l(r);n&&n!==m&&e(t,n,o)}var s=i(r);u&&(s=s.concat(u(r)));for(var a=f(t),d=f(r),b=0;b<s.length;++b){var S=s[b];if(!(c[S]||o&&o[S]||d&&d[S]||a&&a[S])){var $=y(r,S);try{p(t,S,$)}catch(e){}}}}return t}},96103:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,l=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,S=r?Symbol.for("react.block"):60121,$=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case i:case u:case c:case a:case s:case l:return e;default:switch(e=e&&e.$$typeof){case p:case y:case b:case d:case f:return e;default:return t}}case n:return t}}}function h(e){return g(e)===u}t.AsyncMode=i,t.ConcurrentMode=u,t.ContextConsumer=p,t.ContextProvider=f,t.Element=o,t.ForwardRef=y,t.Fragment=c,t.Lazy=b,t.Memo=d,t.Portal=n,t.Profiler=a,t.StrictMode=s,t.Suspense=l,t.isAsyncMode=function(e){return h(e)||g(e)===i},t.isConcurrentMode=h,t.isContextConsumer=function(e){return g(e)===p},t.isContextProvider=function(e){return g(e)===f},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return g(e)===y},t.isFragment=function(e){return g(e)===c},t.isLazy=function(e){return g(e)===b},t.isMemo=function(e){return g(e)===d},t.isPortal=function(e){return g(e)===n},t.isProfiler=function(e){return g(e)===a},t.isStrictMode=function(e){return g(e)===s},t.isSuspense=function(e){return g(e)===l},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===u||e===a||e===s||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===d||e.$$typeof===f||e.$$typeof===p||e.$$typeof===y||e.$$typeof===$||e.$$typeof===O||e.$$typeof===v||e.$$typeof===S)},t.typeOf=g},21296:(e,t,r)=>{"use strict";e.exports=r(96103)},92703:(e,t,r)=>{"use strict";var o=r(50414);function n(){}function c(){}c.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,c,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:n};return r.PropTypes=r,r}},45697:(e,t,r)=>{e.exports=r(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},87462:(e,t,r)=>{"use strict";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},o.apply(this,arguments)}r.d(t,{Z:()=>o})},63366:(e,t,r)=>{"use strict";function o(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:()=>o})},89611:(e,t,r)=>{"use strict";function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}r.d(t,{Z:()=>o})}}]);