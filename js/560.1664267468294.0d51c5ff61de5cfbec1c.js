"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[560],{35224:(e,t,n)=>{n.d(t,{u:()=>m,D:()=>f});var o=n(70655),r=n(93264),i=n(86478),a=n(38296);const s=e=>{var{className:t,children:n,isLeftAligned:s}=e,l=(0,o.__rest)(e,["className","children","isLeftAligned"]);return r.createElement("div",Object.assign({className:(0,a.css)(i.default.tooltipContent,s&&i.default.modifiers.textAlignLeft,t)},l),n)};s.displayName="TooltipContent";const l=e=>{var{className:t}=e,n=(0,o.__rest)(e,["className"]);return r.createElement("div",Object.assign({className:(0,a.css)(i.default.tooltipArrow,t)},n))};l.displayName="TooltipArrow";var p=n(1774);const c={name:"--pf-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-c-tooltip--MaxWidth)"};var f,d=n(16438);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(f||(f={}));let u=1;const m=e=>{var{content:t,position:n="top",trigger:f="mouseenter focus",isVisible:m=!1,isContentLeftAligned:g=!1,enableFlip:h=!0,className:b="",entryDelay:y=300,exitDelay:w=300,appendTo:x=(()=>document.body),zIndex:O=9999,maxWidth:v=c.value,distance:E=15,aria:M="describedby",flipBehavior:j=["top","right","bottom","left","top","right","bottom"],id:D="pf-tooltip-"+u++,children:L,animationDuration:T=300,reference:k,"aria-live":_=(k?"polite":"off"),boundary:$,isAppLauncher:A,tippyProps:R,removeFindDomNode:N=!1}=e,S=(0,o.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","reference","aria-live","boundary","isAppLauncher","tippyProps","removeFindDomNode"]);const B=f.includes("mouseenter"),P=f.includes("focus"),W=f.includes("click"),C="manual"===f,[I,F]=r.useState(!1),[H,U]=r.useState(0),V=r.useRef(null),q=r.useRef(null),z=r.useRef(null),Z=e=>{e.forEach((e=>{e.current&&clearTimeout(e.current)}))};r.useEffect((()=>()=>{Z([V,z,q])}),[]),r.useEffect((()=>{m?G():K()}),[m]);const G=()=>{Z([V,z]),q.current=setTimeout((()=>{F(!0),U(1)}),y)},K=()=>{Z([q]),z.current=setTimeout((()=>{U(0),V.current=setTimeout((()=>F(!1)),T)}),w)},X={top:i.default.modifiers.top,bottom:i.default.modifiers.bottom,left:i.default.modifiers.left,right:i.default.modifiers.right,"top-start":i.default.modifiers.topLeft,"top-end":i.default.modifiers.topRight,"bottom-start":i.default.modifiers.bottomLeft,"bottom-end":i.default.modifiers.bottomRight,"left-start":i.default.modifiers.leftTop,"left-end":i.default.modifiers.leftBottom,"right-start":i.default.modifiers.rightTop,"right-end":i.default.modifiers.rightBottom},Y=v!==c.value,J=r.createElement("div",Object.assign({"aria-live":_,className:(0,a.css)(i.default.tooltip,b),role:"tooltip",id:D,style:{maxWidth:Y?v:null,opacity:H,transition:(0,d.K)(T)}},S),r.createElement(l,null),r.createElement(s,{isLeftAligned:g},t));return r.createElement(d.r,{trigger:"none"!==M&&I?"describedby"===M&&L&&L.props&&!L.props["aria-describedby"]?r.cloneElement(L,{"aria-describedby":D}):"labelledby"===M&&L.props&&!L.props["aria-labelledby"]?r.cloneElement(L,{"aria-labelledby":D}):L:L,reference:k,popper:J,popperMatchesTriggerWidth:!1,appendTo:x,isVisible:I,positionModifiers:X,distance:E,placement:n,onMouseEnter:B&&G,onMouseLeave:B&&K,onPopperMouseEnter:B&&G,onPopperMouseLeave:B&&K,onFocus:P&&G,onBlur:P&&K,onDocumentClick:W&&((e,t)=>{I?K():e.target===t&&G()}),onDocumentKeyDown:C?null:e=>{C||e.key===p.yu.Escape&&I&&K()},onTriggerEnter:C?null:e=>{e.key===p.yu.Enter&&(I?K():G())},enableFlip:h,zIndex:O,flipBehavior:j,removeFindDomNode:N})};m.displayName="Tooltip"},62472:(e,t,n)=>{n.d(t,{dp:()=>s,S$:()=>l,Z1:()=>p,ql:()=>c});var o=n(93264);let r=0;const i="OUIA-Generated-",a={};function s(e,t,n=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const l=(e,t,n=!0,o)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":p(e,t,o)}),p=(e,t,n)=>{const r=(0,o.useMemo)((()=>c(e,n)),[e,n]);return null!=t?t:r};function c(e,t){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,a[n]||(a[n]=0),`${i}${e}-${t?`${t}-`:""}${++a[n]}`}catch(n){return`${i}${e}-${t?`${t}-`:""}${++r}`}}},16438:(e,t,n)=>{n.d(t,{r:()=>ge,K:()=>me});var o=n(93264),r=n(3644);function i(e){const t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function a(e){if("[object Window]"!==e.toString()){const t=e.ownerDocument;return t?t.defaultView:window}return e}function s(e){const t=a(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function l(e){return e instanceof a(e).Element||e instanceof Element}function p(e){return e instanceof a(e).HTMLElement||e instanceof HTMLElement}function c(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return(l(e)?e.ownerDocument:e.document).documentElement}function d(e){return i(f(e)).left+s(e).scrollLeft}function u(e){return a(e).getComputedStyle(e)}function m(e){const{overflow:t,overflowX:n,overflowY:o}=u(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function g(e,t,n=!1){const o=f(t),r=i(e),l=p(t);let u={scrollLeft:0,scrollTop:0},g={x:0,y:0};var h,b;return(l||!l&&!n)&&(("body"!==c(t)||m(o))&&(u=(h=t)!==a(h)&&p(h)?{scrollLeft:(b=h).scrollLeft,scrollTop:b.scrollTop}:s(h)),p(t)?(g=i(t),g.x+=t.clientLeft,g.y+=t.clientTop):o&&(g.x=d(o))),{x:r.left+u.scrollLeft-g.x,y:r.top+u.scrollTop-g.y,width:r.width,height:r.height}}function h(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function b(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||e.host||f(e)}function y(e){return["html","body","#document"].indexOf(c(e))>=0?e.ownerDocument.body:p(e)&&m(e)?e:y(b(e))}function w(e,t=[]){const n=y(e),o="body"===c(n),r=a(n),i=o?[r].concat(r.visualViewport||[],m(n)?n:[]):n,s=t.concat(i);return o?s:s.concat(w(b(i)))}function x(e){return["table","td","th"].indexOf(c(e))>=0}function O(e){if(!p(e)||"fixed"===u(e).position)return null;const t=e.offsetParent;if(t){const e=f(t);if("body"===c(t)&&"static"===u(t).position&&"static"!==u(e).position)return e}return t}function v(e){const t=a(e);let n=O(e);for(;n&&x(n)&&"static"===u(n).position;)n=O(n);return n&&"body"===c(n)&&"static"===u(n).position?t:n||function(e){let t=b(e);for(;p(t)&&["html","body"].indexOf(c(t))<0;){const e=u(t);if("none"!==e.transform||"none"!==e.perspective||e.willChange&&"auto"!==e.willChange)return t;t=t.parentNode}return null}(e)||t}const E="top",M="bottom",j="right",D="left",L="auto",T=[E,M,j,D],k="start",_="clippingParents",$="viewport",A="popper",R=T.reduce(((e,t)=>e.concat([`${t}-start`,`${t}-end`])),[]),N=[...T,L].reduce(((e,t)=>e.concat([t,`${t}-start`,`${t}-end`])),[]),S=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function B(e){const t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[...e.requires||[],...e.requiresIfExists||[]].forEach((e=>{if(!n.has(e)){const n=t.get(e);n&&r(n)}})),o.push(e)}return e.forEach((e=>{t.set(e.name,e)})),e.forEach((e=>{n.has(e.name)||r(e)})),o}function P(e){let t;return()=>(t||(t=new Promise((n=>{Promise.resolve().then((()=>{t=void 0,n(e())}))}))),t)}const W={placement:"bottom",modifiers:[],strategy:"absolute"};function C(...e){return!e.some((e=>!(e&&"function"==typeof e.getBoundingClientRect)))}function I(e={}){const{defaultModifiers:t=[],defaultOptions:n=W}=e;return function(e,o,r=n){let i={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},W),n),modifiersData:{},elements:{reference:e,popper:o},attributes:{},styles:{}},a=[],s=!1;const p={state:i,setOptions(r){c(),i.options=Object.assign(Object.assign(Object.assign({},n),i.options),r),i.scrollParents={reference:l(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(o)};const s=function(e){const t=B(e);return S.reduce(((e,n)=>e.concat(t.filter((e=>e.phase===n)))),[])}(function(e){const t=e.reduce(((e,t)=>{const n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((e=>t[e]))}([...t,...i.options.modifiers]));return i.orderedModifiers=s.filter((e=>e.enabled)),i.orderedModifiers.forEach((({name:e,options:t={},effect:n})=>{if("function"==typeof n){const o=n({state:i,name:e,instance:p,options:t}),r=()=>{};a.push(o||r)}})),p.update()},forceUpdate(){if(s)return;const{reference:e,popper:t}=i.elements;if(C(e,t)){i.rects={reference:g(e,v(t),"fixed"===i.options.strategy),popper:h(t)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((e=>i.modifiersData[e.name]=Object.assign({},e.data)));for(let e=0;e<i.orderedModifiers.length;e++){if(!0===i.reset){i.reset=!1,e=-1;continue}const{fn:t,options:n={},name:o}=i.orderedModifiers[e];"function"==typeof t&&(i=t({state:i,options:n,name:o,instance:p})||i)}}},update:P((()=>new Promise((e=>{p.forceUpdate(),e(i)})))),destroy(){c(),s=!0}};if(!C(e,o))return p;function c(){a.forEach((e=>e())),a=[]}return p.setOptions(r).then((e=>{!s&&r.onFirstUpdate&&r.onFirstUpdate(e)})),p}}I();const F={passive:!0};function H(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function V(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function q({reference:e,element:t,placement:n}){const o=n?H(n):null,r=n?U(n):null,i=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2;let s;switch(o){case E:s={x:i,y:e.y-t.height};break;case M:s={x:i,y:e.y+e.height};break;case j:s={x:e.x+e.width,y:a};break;case D:s={x:e.x-t.width,y:a};break;default:s={x:e.x,y:e.y}}const l=o?V(o):null;if(null!=l){const n="y"===l?"height":"width";switch(r){case k:s[l]=Math.floor(s[l])-Math.floor(e[n]/2-t[n]/2);break;case"end":s[l]=Math.floor(s[l])+Math.ceil(e[n]/2-t[n]/2)}}return s}const z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z({popper:e,popperRect:t,placement:n,offsets:o,position:r,gpuAcceleration:i,adaptive:s}){let{x:l,y:p}=function({x:e,y:t}){const n=window.devicePixelRatio||1;return{x:Math.round(e*n)/n||0,y:Math.round(t*n)/n||0}}(o);const c=o.hasOwnProperty("x"),d=o.hasOwnProperty("y");let u=D,m=E;const g=window;if(s){let o=v(e);o===a(e)&&(o=f(e)),n===E&&(m=M,p-=o.clientHeight-t.height,p*=i?1:-1),n===D&&(u=j,l-=o.clientWidth-t.width,l*=i?1:-1)}const h=Object.assign({position:r},s&&z);return i?Object.assign(Object.assign({},h),{[m]:d?"0":"",[u]:c?"0":"",transform:(g.devicePixelRatio||1)<2?`translate(${l}px, ${p}px)`:`translate3d(${l}px, ${p}px, 0)`}):Object.assign(Object.assign({},h),{[m]:d?`${p}px`:"",[u]:c?`${l}px`:"",transform:""})}const G={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,(e=>G[e]))}const X={start:"end",end:"start"};function Y(e){return e.replace(/start|end/g,(e=>X[e]))}function J(e,t){const n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){let n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Q(e){return Object.assign(Object.assign({},e),{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ee(e,t){return t===$?Q(function(e){const t=a(e),n=f(e),o=t.visualViewport;let r=n.clientWidth,i=n.clientHeight,s=0,l=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,l=o.offsetTop)),{width:r,height:i,x:s+d(e),y:l}}(e)):p(t)?function(e){const t=i(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Q(function(e){const t=f(e),n=s(e),o=e.ownerDocument.body,r=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let a=-n.scrollLeft+d(e);const l=-n.scrollTop;return"rtl"===u(o||t).direction&&(a+=Math.max(t.clientWidth,o?o.clientWidth:0)-r),{width:r,height:i,x:a,y:l}}(f(e)))}function te(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function ne(e,t){return t.reduce(((t,n)=>(t[n]=e,t)),{})}function oe(e,t={}){const{placement:n=e.placement,boundary:o=_,rootBoundary:r=$,elementContext:a=A,altBoundary:s=!1,padding:d=0}=t,m=te("number"!=typeof d?d:ne(d,T)),g=a===A?"reference":A,h=e.elements.reference,y=e.rects.popper,x=e.elements[s?g:a],O=function(e,t,n){const o="clippingParents"===t?function(e){const t=w(b(e)),n=["absolute","fixed"].indexOf(u(e).position)>=0&&p(e)?v(e):e;return l(n)?t.filter((e=>l(e)&&J(e,n)&&"body"!==c(e))):[]}(e):[].concat(t),r=[...o,n],i=r[0],a=r.reduce(((t,n)=>{const o=ee(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),ee(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(l(x)?x:x.contextElement||f(e.elements.popper),o,r),D=i(h),L=q({reference:D,element:y,strategy:"absolute",placement:n}),k=Q(Object.assign(Object.assign({},y),L)),R=a===A?k:D,N={top:O.top-R.top+m.top,bottom:R.bottom-O.bottom+m.bottom,left:O.left-R.left+m.left,right:R.right-O.right+m.right},S=e.modifiersData.offset;if(a===A&&S){const e=S[n];Object.keys(N).forEach((t=>{const n=[j,M].indexOf(t)>=0?1:-1,o=[E,M].indexOf(t)>=0?"y":"x";N[t]+=e[o]*n}))}return N}function re(e,t,n){return Math.max(e,Math.min(t,n))}function ie(e,t,n={x:0,y:0}){return{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[E,j,M,D].some((t=>e[t]>=0))}const se=I({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:()=>{},effect:function({state:e,instance:t,options:n}){const{scroll:o=!0,resize:r=!0}=n,i=a(e.elements.popper),s=[...e.scrollParents.reference,...e.scrollParents.popper];return o&&s.forEach((e=>{e.addEventListener("scroll",t.update,F)})),r&&i.addEventListener("resize",t.update,F),()=>{o&&s.forEach((e=>{e.removeEventListener("scroll",t.update,F)})),r&&i.removeEventListener("resize",t.update,F)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function({state:e,name:t}){e.modifiersData[t]=q({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function({state:e,options:t}){const{gpuAcceleration:n=!0,adaptive:o=!0}=t,r={placement:H(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),Z(Object.assign(Object.assign({},r),{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),Z(Object.assign(Object.assign({},r),{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function({state:e}){Object.keys(e.elements).forEach((t=>{const n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t];p(r)&&c(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((e=>{const t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function({state:e}){const t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),()=>{Object.keys(e.elements).forEach((n=>{const o=e.elements[n],r=e.attributes[n]||{},i=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]).reduce(((e,t)=>(e[t]="",e)),{});p(o)&&c(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((e=>{o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function({state:e,options:t,name:n}){const{offset:o=[0,0]}=t,r=N.reduce(((t,n)=>(t[n]=function(e,t,n){const o=H(e),r=[D,E].indexOf(o)>=0?-1:1;let[i,a]="function"==typeof n?n(Object.assign(Object.assign({},t),{placement:e})):n;return i=i||0,a=(a||0)*r,[D,j].indexOf(o)>=0?{x:a,y:i}:{x:i,y:a}}(n,e.rects,o),t)),{}),{x:i,y:a}=r[e.placement];null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=a),e.modifiersData[n]=r}},{name:"flip",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){if(e.modifiersData[n]._skip)return;const{mainAxis:o=!0,altAxis:r=!0,fallbackPlacements:i,padding:a,boundary:s,rootBoundary:l,altBoundary:p,flipVariations:c=!0,allowedAutoPlacements:f}=t,d=e.options.placement,u=H(d),m=[d,...i||(u!==d&&c?function(e){if(H(e)===L)return[];const t=K(e);return[Y(e),t,Y(t)]}(d):[K(d)])].reduce(((t,n)=>t.concat(H(n)===L?function(e,t={}){const{placement:n,boundary:o,rootBoundary:r,padding:i,flipVariations:a,allowedAutoPlacements:s=N}=t,l=U(n),p=l?a?R:R.filter((e=>U(e)===l)):T;let c=p.filter((e=>s.indexOf(e)>=0));0===c.length&&(c=p);const f=c.reduce(((t,n)=>(t[n]=oe(e,{placement:n,boundary:o,rootBoundary:r,padding:i})[H(n)],t)),{});return Object.keys(f).sort(((e,t)=>f[e]-f[t]))}(e,{placement:n,boundary:s,rootBoundary:l,padding:a,flipVariations:c,allowedAutoPlacements:f}):n)),[]),g=e.rects.reference,h=e.rects.popper,b=new Map;let y=!0,w=m[0];for(let t=0;t<m.length;t++){const n=m[t],i=H(n),c=U(n)===k,f=[E,M].indexOf(i)>=0,d=f?"width":"height",u=oe(e,{placement:n,boundary:s,rootBoundary:l,altBoundary:p,padding:a});let x=f?c?j:D:c?M:E;g[d]>h[d]&&(x=K(x));const O=K(x),v=[];if(o&&v.push(u[i]<=0),r&&v.push(u[x]<=0,u[O]<=0),v.every((e=>e))){w=n,y=!1;break}b.set(n,v)}if(y)for(let e=c?3:1;e>0;e--){const t=m.find((t=>{const n=b.get(t);if(n)return n.slice(0,e).every((e=>e))}));if(t){w=t;break}}e.placement!==w&&(e.modifiersData[n]._skip=!0,e.placement=w,e.reset=!0)},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){const{mainAxis:o=!0,altAxis:r=!1,boundary:i,rootBoundary:a,altBoundary:s,padding:l,tether:p=!0,tetherOffset:c=0}=t,f=oe(e,{boundary:i,rootBoundary:a,padding:l,altBoundary:s}),d=H(e.placement),u=U(e.placement),m=!u,g=V(d),b="x"===g?"y":"x",y=e.modifiersData.popperOffsets,w=e.rects.reference,x=e.rects.popper,O="function"==typeof c?c(Object.assign(Object.assign({},e.rects),{placement:e.placement})):c,L={x:0,y:0};if(y){if(o){const t="y"===g?E:D,n="y"===g?M:j,o="y"===g?"height":"width",r=y[g],i=y[g]+f[t],a=y[g]-f[n],s=p?-x[o]/2:0,l=u===k?w[o]:x[o],c=u===k?-x[o]:-w[o],d=e.elements.arrow,b=p&&d?h(d):{width:0,height:0},T=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},_=T[t],$=T[n],A=re(0,w[o],b[o]),R=m?w[o]/2-s-A-_-O:l-A-_-O,N=m?-w[o]/2+s+A+$+O:c+A+$+O,S=e.elements.arrow&&v(e.elements.arrow),B=S?"y"===g?S.clientTop||0:S.clientLeft||0:0,P=e.modifiersData.offset?e.modifiersData.offset[e.placement][g]:0,W=y[g]+R-P-B,C=y[g]+N-P,I=re(p?Math.min(i,W):i,r,p?Math.max(a,C):a);y[g]=I,L[g]=I-r}if(r){const e="x"===g?E:D,t="x"===g?M:j,n=y[b],o=re(n+f[e],n,n-f[t]);y[b]=o,L[b]=o-n}e.modifiersData[n]=L}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function({state:e,name:t}){const n=e.elements.arrow,o=e.modifiersData.popperOffsets,r=H(e.placement),i=V(r),a=[D,j].indexOf(r)>=0?"height":"width";if(!n||!o)return;const s=e.modifiersData[`${t}#persistent`].padding,l=h(n),p="y"===i?E:D,c="y"===i?M:j,f=e.rects.reference[a]+e.rects.reference[i]-o[i]-e.rects.popper[a],d=o[i]-e.rects.reference[i],u=v(n),m=u?"y"===i?u.clientHeight||0:u.clientWidth||0:0,g=f/2-d/2,b=s[p],y=m-l[a]-s[c],w=m/2-l[a]/2+g,x=re(b,w,y),O=i;e.modifiersData[t]={[O]:x,centerOffset:x-w}},effect:function({state:e,options:t,name:n}){let{element:o="[data-popper-arrow]",padding:r=0}=t;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o),o))&&J(e.elements.popper,o)&&(e.elements.arrow=o,e.modifiersData[`${n}#persistent`]={padding:te("number"!=typeof r?r:ne(r,T))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function({state:e,name:t}){const n=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,i=oe(e,{elementContext:"reference"}),a=oe(e,{altBoundary:!0}),s=ie(i,n),l=ie(a,o,r),p=ae(s),c=ae(l);e.modifiersData[t]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:c},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-reference-hidden":p,"data-popper-escaped":c})}}]});var le=n(6551);const pe=e=>e.reduce(((e,[t,n])=>(e[t]=n,e)),{}),ce=[];var fe=n(38296);class de extends o.Component{componentDidMount(){const e=r.findDOMNode(this);this.props.onFoundRef(e)}render(){return this.props.children||null}}de.displayName="FindRefWrapper",n(45467);const ue={left:"right",right:"left",bottom:"top",top:"bottom"},me=e=>`opacity ${e}ms cubic-bezier(.54, 1.5, .38, 1.11)`,ge=({trigger:e,popper:t,popperMatchesTriggerWidth:n=!0,direction:i="down",position:a="left",placement:s,appendTo:l=(()=>document.body),zIndex:p=9999,isVisible:c=!0,positionModifiers:f,distance:d=0,onMouseEnter:u,onMouseLeave:m,onFocus:g,onBlur:h,onDocumentClick:b,onTriggerClick:y,onTriggerEnter:w,onPopperClick:x,onPopperMouseEnter:O,onPopperMouseLeave:v,onDocumentKeyDown:E,enableFlip:M=!0,flipBehavior:j="flip",reference:D,removeFindDomNode:L=!1,popperRef:T})=>{const[k,_]=o.useState(null),[$,A]=o.useState(null),[R,N]=o.useState(null),[S,B]=o.useState(!1),P=$||k,W=o.useCallback((e=>b(e,P,R)),[c,k,$,R,b]);o.useEffect((()=>{B(!0)}),[]),o.useEffect((()=>{D&&(D.current?A(D.current):"function"==typeof D&&A(D()))}),[D]),o.useEffect((()=>{T&&(T.current?N(T.current):"function"==typeof T&&N(T()))}),[c,T]);const C=(e,t,n)=>{e&&t&&t.addEventListener(n,e)},I=(e,t,n)=>{e&&t&&t.removeEventListener(n,e)};o.useEffect((()=>{C(u,P,"mouseenter"),C(m,P,"mouseleave"),C(g,P,"focus"),C(h,P,"blur"),C(y,P,"click"),C(w,P,"keydown"),C(x,R,"click"),C(O,R,"mouseenter"),C(v,R,"mouseleave"),b&&C(W,document,"click"),C(E,document,"keydown");const e=new MutationObserver((()=>{Z&&Z()}));return R&&e.observe(R,{attributes:!0,childList:!0,subtree:!0}),()=>{I(u,P,"mouseenter"),I(m,P,"mouseleave"),I(g,P,"focus"),I(h,P,"blur"),I(y,P,"click"),I(w,P,"keydown"),I(x,R,"click"),I(O,R,"mouseenter"),I(v,R,"mouseleave"),b&&I(W,document,"click"),I(E,document,"keydown"),e.disconnect()}}),[k,R,u,m,g,h,y,w,x,O,v,b,E,$]);const F=()=>{if(s)return s;let e="up"===i?"top":"bottom";return"center"!==a&&(e=`${e}-${"right"===a?"end":"start"}`),e},H=o.useMemo(F,[i,a,s]),U=o.useMemo((()=>(e=>e.replace(/left|right|bottom|top/g,(e=>ue[e])))(F())),[i,a,s]),V=o.useMemo((()=>({name:"sameWidth",enabled:n,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>(e.elements.popper.style.width=`${e.elements.reference.offsetWidth}px`,()=>{})})),[n]),{styles:q,attributes:z,update:Z}=((e,t,n={})=>{const r=o.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||ce},[a,s]=o.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"}},attributes:{}}),l=o.useMemo((()=>({name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=Object.keys(e.elements);s({styles:pe(t.map((t=>[t,e.styles[t]||{}]))),attributes:pe(t.map((t=>[t,e.attributes[t]])))})},requires:["computeStyles"]})),[]),p=o.useMemo((()=>{const e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[...i.modifiers,l,{name:"applyStyles",enabled:!1}]};return t=r.current,n=e,JSON.stringify(t)===JSON.stringify(n)?r.current||e:(r.current=e,e);var t,n}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),c=o.useRef();return(0,le.L)((()=>{c&&c.current&&c.current.setOptions(p)}),[p]),(0,le.L)((()=>{if(null==e||null==t)return;const o=(n.createPopper||se)(e,t,p);return c.current=o,()=>{o.destroy(),c.current=null}}),[e,t,n.createPopper]),{state:c.current?c.current.state:null,styles:a.styles,attributes:a.attributes,update:c.current?c.current.update:null,forceUpdate:c.current?c.current.forceUpdate:null}})(P,R,{placement:H,modifiers:[{name:"offset",options:{offset:[0,d]}},{name:"preventOverflow",enabled:!1},{name:"hide",enabled:!0},{name:"flip",enabled:H.startsWith("auto")||M,options:{fallbackPlacements:"flip"===j?[U]:j}},V]}),G=Object.assign({className:(0,fe.css)(t.props&&t.props.className,f&&(()=>{if(z&&z.popper&&z.popper["data-popper-placement"]){const e=z.popper["data-popper-placement"];return f[e]}return f.top})()),style:Object.assign(Object.assign(Object.assign({},t.props&&t.props.style||{}),q.popper),{zIndex:p})},z.popper),K=o.cloneElement(t,G);let X;return X=L?o.createElement("div",{ref:e=>N(null==e?void 0:e.firstElementChild)},K):T?K:o.createElement(de,{onFoundRef:e=>N(e)},K),o.createElement(o.Fragment,null,!D&&e&&o.isValidElement(e)&&!L&&o.createElement(de,{onFoundRef:e=>_(e)},e),!D&&e&&o.isValidElement(e)&&L&&o.createElement("div",{ref:e=>_(null==e?void 0:e.firstElementChild)},e),S&&c&&r.createPortal(X,"function"==typeof l?l():l))};ge.displayName="Popper"},1774:(e,t,n)=>{n.d(t,{Ow:()=>p,nx:()=>s,yu:()=>f,VW:()=>l,LD:()=>c,pr:()=>u,H_:()=>d});var o=n(33043),r=n(76709),i=n(17766),a=n(12284);const s={ARROW_UP:38,ARROW_DOWN:40,ESCAPE_KEY:27,TAB:9,ENTER:13,SPACE:32},l={RIGHT:"right",LEFT:"left",BOTH:"both",NONE:"none"},p={UP:"up",DOWN:"down",RIGHT:"right",LEFT:"left"};var c;!function(e){e.success="success",e.error="error",e.warning="warning",e.default="default"}(c||(c={}));const f={Tab:"Tab",Space:" ",Escape:"Escape",Enter:"Enter",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"},d={sm:parseInt("576px"),md:parseInt(o.Z.value),lg:parseInt(r.Z.value),xl:parseInt(i.Z.value),"2xl":parseInt(a.Z.value)},u={sm:parseInt("0"),md:parseInt("40rem"),lg:parseInt("48rem"),xl:parseInt("60rem"),"2xl":parseInt("80rem")}},6551:(e,t,n)=>{n.d(t,{L:()=>r});var o=n(93264);const r=n(80164).Nq?o.useLayoutEffect:o.useEffect},80164:(e,t,n)=>{n.d(t,{kC:()=>i,Ki:()=>a,Ds:()=>s,Zd:()=>l,TX:()=>p,tJ:()=>c,qG:()=>f,Ll:()=>d,LK:()=>u,_6:()=>m,x8:()=>g,wt:()=>h,xb:()=>b,iu:()=>y,fZ:()=>x,Nq:()=>O,mY:()=>v,IB:()=>E,fi:()=>M,KG:()=>j});var o=n(3644),r=n(1774);function i(e){return e[0].toUpperCase()+e.substring(1)}function a(e="pf"){return`${e}-${(new Date).getTime()+Math.random().toString(36).slice(2)}`}function s(e,t){let n;return(...o)=>{clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}function l(e,t,n,o=!1){if(!e||!t)return!1;const r=e.getBoundingClientRect(),i=t.getBoundingClientRect(),a=Math.ceil(r.left),s=Math.floor(r.right),l=Math.ceil(i.left),p=Math.floor(i.right),c=l>=a&&p<=s,f=(n||!o&&r.width<i.width)&&(l<a&&p>a||p>s&&l<s);return c||f}function p(e,t){const n=e.getBoundingClientRect(),o=t.getBoundingClientRect(),i=Math.floor(n.left),a=Math.floor(n.right),s=Math.floor(o.left)<i,l=Math.floor(o.right)>a;let p=r.VW.NONE;return l&&s?p=r.VW.BOTH:l?p=r.VW.RIGHT:s&&(p=r.VW.LEFT),p}function c(e,t){return e.replace(/\${(.*?)}/g,((e,n)=>t[n]||""))}function f(e,t,n,r,i,a=!1){if(!Array.isArray(i))return;const s=r.filter((e=>e))[0].constructor===Array;let l=e,p=t;"up"===n?l=0===e?i.length-1:e-1:"down"===n?l=e===i.length-1?0:e+1:"left"===n?p=0===t?r[e].length-1:t-1:"right"===n&&(p=t===r[e].length-1?0:t+1),null===r[l]||void 0===r[l]||s&&(null===r[l][p]||void 0===r[l][p])?f(l,p,n,r,i,a):a?(r[l].focus&&r[l].focus(),o.findDOMNode(r[l]).focus()):"tab"!==n&&(s?r[l][p].focus():r[l].focus())}function d(e,t){const n=e.current.querySelectorAll(t);return Array.prototype.filter.call(n,(function(e){return e.tabIndex>="0"}))}function u(e,t,n){let o;return o="up"===t?0===e?n.length-1:e-1:e===n.length-1?0:e+1,void 0===n[o]||null===n[o][0]?u(o,t,n):o}function m(e,t,n){return n||(n=`${t}s`),`${e||0} ${1===e?t:n}`}const g=(e,t)=>Object.entries(e||{}).reduce(((e,[n,o])=>"default"===n?Object.assign(Object.assign({},e),{[t]:o}):Object.assign(Object.assign({},e),{[`${t}-on-${n}`]:o})),{}),h=(e,t,n="",o,r)=>{if(!e)return"";if(o&&!r){if(o in e)return t.modifiers[x(`${n}${e[o]}`)];const r=["2xl","xl","lg","md","sm","default"];for(let i=r.indexOf(o);i<r.length;i++)if(r[i]in e)return t.modifiers[x(`${n}${e[r[i]]}`)];return""}return Object.entries(e||{}).map((([e,t])=>`${n}${t}${"default"!==e?`-on-${e}`:""}${r&&"default"!==e?"-height":""}`)).map(x).map((e=>e.replace(/-?(\dxl)/gi,((e,t)=>`_${t}`)))).map((e=>t.modifiers[e])).filter(Boolean).join(" ")},b=e=>null===e?null:e>=r.pr["2xl"]?"2xl":e>=r.pr.xl?"xl":e>=r.pr.lg?"lg":e>=r.pr.md?"md":e>=r.pr.sm?"sm":"default",y=e=>null===e?null:e>=r.H_["2xl"]?"2xl":e>=r.H_.xl?"xl":e>=r.H_.lg?"lg":e>=r.H_.md?"md":e>=r.H_.sm?"sm":"default",w=e=>e.toUpperCase().replace("-","").replace("_",""),x=e=>e.replace(/([-_][a-z])/gi,w),O=!("undefined"==typeof window||!window.document||!window.document.createElement),v=(e,t)=>{const n=getComputedStyle(t),o=document.createElement("canvas").getContext("2d");return o.font=n.font||(()=>{let e="";const t={"50%":"ultra-condensed","62.5%":"extra-condensed","75%":"condensed","87.5%":"semi-condensed","100%":"normal","112.5%":"semi-expanded","125%":"expanded","150%":"extra-expanded","200%":"ultra-expanded"};let o;return o=n.fontStretch in t?t[n.fontStretch]:"normal",e=n.fontStyle+" "+n.fontVariant+" "+n.fontWeight+" "+o+" "+n.fontSize+"/"+n.lineHeight+" "+n.fontFamily,e})(),o.measureText(e).width},E=e=>{const t=getComputedStyle(e);let n=e.clientWidth,o=e.clientHeight;return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),{height:o,width:n}},M=(e,t)=>{const n=E(e).width;let o=t;if(v(t,e)>n){for(;v(`...${o}`,e)>n;)o=o.substring(1);e.value?e.value=`...${o}`:e.innerText=`...${o}`}else e.value?e.value=t:e.innerText=t},j=e=>e.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{})},9003:(e,t,n)=>{n.d(t,{sl:()=>r,LC:()=>i,ZP:()=>a});var o=n(40400);const r={name:"AngleDownIcon",height:512,width:320,svgPath:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",yOffset:0,xOffset:0},i=(0,o.IU)(r),a=i},73699:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o}),n(30187);const o={badge:"pf-c-badge",check:"pf-c-check",divider:"pf-c-divider",dropdown:"pf-c-dropdown",dropdownGroup:"pf-c-dropdown__group",dropdownGroupTitle:"pf-c-dropdown__group-title",dropdownMenu:"pf-c-dropdown__menu",dropdownMenuItem:"pf-c-dropdown__menu-item",dropdownMenuItemDescription:"pf-c-dropdown__menu-item-description",dropdownMenuItemIcon:"pf-c-dropdown__menu-item-icon",dropdownMenuItemMain:"pf-c-dropdown__menu-item-main",dropdownToggle:"pf-c-dropdown__toggle",dropdownToggleButton:"pf-c-dropdown__toggle-button",dropdownToggleCheck:"pf-c-dropdown__toggle-check",dropdownToggleIcon:"pf-c-dropdown__toggle-icon",dropdownToggleImage:"pf-c-dropdown__toggle-image",dropdownToggleText:"pf-c-dropdown__toggle-text",menu:"pf-c-menu",modifiers:{fullHeight:"pf-m-full-height",expanded:"pf-m-expanded",action:"pf-m-action",disabled:"pf-m-disabled",plain:"pf-m-plain",text:"pf-m-text",splitButton:"pf-m-split-button",primary:"pf-m-primary",active:"pf-m-active",secondary:"pf-m-secondary",top:"pf-m-top",static:"pf-m-static",alignRight:"pf-m-align-right",alignLeft:"pf-m-align-left",alignRightOnSm:"pf-m-align-right-on-sm",alignLeftOnSm:"pf-m-align-left-on-sm",alignRightOnMd:"pf-m-align-right-on-md",alignLeftOnMd:"pf-m-align-left-on-md",alignRightOnLg:"pf-m-align-right-on-lg",alignLeftOnLg:"pf-m-align-left-on-lg",alignRightOnXl:"pf-m-align-right-on-xl",alignLeftOnXl:"pf-m-align-left-on-xl",alignRightOn_2xl:"pf-m-align-right-on-2xl",alignLeftOn_2xl:"pf-m-align-left-on-2xl",ariaDisabled:"pf-m-aria-disabled",icon:"pf-m-icon",description:"pf-m-description"},themeDark:"pf-theme-dark"}},86478:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o}),n(49854);const o={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-theme-dark",tooltip:"pf-c-tooltip",tooltipArrow:"pf-c-tooltip__arrow",tooltipContent:"pf-c-tooltip__content"}},12284:(e,t,n)=>{n.d(t,{Z:()=>o});const o={name:"--pf-global--breakpoint--2xl",value:"1450px",var:"var(--pf-global--breakpoint--2xl)"}},76709:(e,t,n)=>{n.d(t,{Z:()=>o});const o={name:"--pf-global--breakpoint--lg",value:"992px",var:"var(--pf-global--breakpoint--lg)"}},33043:(e,t,n)=>{n.d(t,{Z:()=>o});const o={name:"--pf-global--breakpoint--md",value:"768px",var:"var(--pf-global--breakpoint--md)"}},17766:(e,t,n)=>{n.d(t,{Z:()=>o});const o={name:"--pf-global--breakpoint--xl",value:"1200px",var:"var(--pf-global--breakpoint--xl)"}}}]);
//# sourceMappingURL=../sourcemaps/560.bed80da4a8ecda405ccb2e544b273df8.js.map