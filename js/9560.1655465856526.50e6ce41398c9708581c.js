"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[9560],{35224:(e,t,n)=>{n.d(t,{u:()=>m,D:()=>f});var o=n(70655),r=n(93264),i=n(86478),s=n(38296);const a=e=>{var{className:t,children:n,isLeftAligned:a}=e,l=(0,o.__rest)(e,["className","children","isLeftAligned"]);return r.createElement("div",Object.assign({className:(0,s.css)(i.default.tooltipContent,a&&i.default.modifiers.textAlignLeft,t)},l),n)};a.displayName="TooltipContent";const l=e=>{var{className:t}=e,n=(0,o.__rest)(e,["className"]);return r.createElement("div",Object.assign({className:(0,s.css)(i.default.tooltipArrow,t)},n))};l.displayName="TooltipArrow";var c=n(64190);const p={name:"--pf-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-c-tooltip--MaxWidth)"};var f,d=n(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(f||(f={}));let u=1;const m=e=>{var{content:t,position:n="top",trigger:f="mouseenter focus",isVisible:m=!1,isContentLeftAligned:g=!1,enableFlip:h=!0,className:b="",entryDelay:y=300,exitDelay:w=0,appendTo:x=(()=>document.body),zIndex:O=9999,maxWidth:v=p.value,distance:E=15,aria:j="describedby",flipBehavior:M=["top","right","bottom","left","top","right","bottom"],id:L="pf-tooltip-"+u++,children:T,animationDuration:D=300,reference:$,"aria-live":_=($?"polite":"off"),boundary:k,isAppLauncher:A,tippyProps:R}=e,S=(0,o.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","reference","aria-live","boundary","isAppLauncher","tippyProps"]);const B=f.includes("mouseenter"),C=f.includes("focus"),W=f.includes("click"),N="manual"===f,[P,F]=r.useState(!1),[I,H]=r.useState(0),U=r.useRef(null),q=r.useRef(null),V=r.useRef(null),z=e=>{e.forEach((e=>{e.current&&clearTimeout(e.current)}))};r.useEffect((()=>()=>{z([U,V,q])}),[]),r.useEffect((()=>{m?K():G()}),[m]);const K=()=>{z([U,V]),q.current=setTimeout((()=>{F(!0),H(1)}),y)},G=()=>{z([q]),V.current=setTimeout((()=>{H(0),U.current=setTimeout((()=>F(!1)),D)}),w)},X={top:i.default.modifiers.top,bottom:i.default.modifiers.bottom,left:i.default.modifiers.left,right:i.default.modifiers.right,"top-start":i.default.modifiers.topLeft,"top-end":i.default.modifiers.topRight,"bottom-start":i.default.modifiers.bottomLeft,"bottom-end":i.default.modifiers.bottomRight,"left-start":i.default.modifiers.leftTop,"left-end":i.default.modifiers.leftBottom,"right-start":i.default.modifiers.rightTop,"right-end":i.default.modifiers.rightBottom},Y=v!==p.value,Z=r.createElement("div",Object.assign({"aria-live":_,className:(0,s.css)(i.default.tooltip,b),role:"tooltip",id:L,style:{maxWidth:Y?v:null,opacity:I,transition:(0,d.K)(D)}},S),r.createElement(l,null),r.createElement(a,{isLeftAligned:g},t));return r.createElement(d.r,{trigger:"none"!==j&&P?"describedby"===j&&T&&T.props&&!T.props["aria-describedby"]?r.cloneElement(T,{"aria-describedby":L}):"labelledby"===j&&T.props&&!T.props["aria-labelledby"]?r.cloneElement(T,{"aria-labelledby":L}):T:T,reference:$,popper:Z,popperMatchesTriggerWidth:!1,appendTo:x,isVisible:P,positionModifiers:X,distance:E,placement:n,onMouseEnter:B&&K,onMouseLeave:B&&G,onFocus:C&&K,onBlur:C&&G,onDocumentClick:W&&((e,t)=>{P?G():e.target===t&&K()}),onDocumentKeyDown:N?null:e=>{N||e.keyCode===c.nx.ESCAPE_KEY&&P&&G()},onTriggerEnter:N?null:e=>{e.keyCode===c.nx.ENTER&&(P?G():K())},enableFlip:h,zIndex:O,flipBehavior:M})};m.displayName="Tooltip"},62472:(e,t,n)=>{n.d(t,{dp:()=>a,S$:()=>l,Z1:()=>c,ql:()=>p});var o=n(93264);let r=0;const i="OUIA-Generated-",s={};function a(e,t,n=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const l=(e,t,n=!0,o)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":c(e,t,o)}),c=(e,t,n)=>void 0!==t?t:(0,o.useMemo)((()=>p(e,n)),[e,n]);function p(e,t){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,s[n]||(s[n]=0),`${i}${e}-${t?`${t}-`:""}${++s[n]}`}catch(n){return`${i}${e}-${t?`${t}-`:""}${++r}`}}},11801:(e,t,n)=>{n.d(t,{L:()=>i});var o=n(93264),r=n(3644);class i extends o.Component{componentDidMount(){const e=r.findDOMNode(this);this.props.onFoundRef(e)}render(){return this.props.children||null}}i.displayName="FindRefWrapper"},69121:(e,t,n)=>{n.d(t,{r:()=>ge,K:()=>me});var o=n(93264),r=n(3644),i=n(11801);function s(e){const t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function a(e){if("[object Window]"!==e.toString()){const t=e.ownerDocument;return t?t.defaultView:window}return e}function l(e){const t=a(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function c(e){return e instanceof a(e).Element||e instanceof Element}function p(e){return e instanceof a(e).HTMLElement||e instanceof HTMLElement}function f(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return(c(e)?e.ownerDocument:e.document).documentElement}function u(e){return s(d(e)).left+l(e).scrollLeft}function m(e){return a(e).getComputedStyle(e)}function g(e){const{overflow:t,overflowX:n,overflowY:o}=m(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function h(e,t,n=!1){const o=d(t),r=s(e),i=p(t);let c={scrollLeft:0,scrollTop:0},m={x:0,y:0};var h,b;return(i||!i&&!n)&&(("body"!==f(t)||g(o))&&(c=(h=t)!==a(h)&&p(h)?{scrollLeft:(b=h).scrollLeft,scrollTop:b.scrollTop}:l(h)),p(t)?(m=s(t),m.x+=t.clientLeft,m.y+=t.clientTop):o&&(m.x=u(o))),{x:r.left+c.scrollLeft-m.x,y:r.top+c.scrollTop-m.y,width:r.width,height:r.height}}function b(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function y(e){return"html"===f(e)?e:e.assignedSlot||e.parentNode||e.host||d(e)}function w(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:p(e)&&g(e)?e:w(y(e))}function x(e,t=[]){const n=w(e),o="body"===f(n),r=a(n),i=o?[r].concat(r.visualViewport||[],g(n)?n:[]):n,s=t.concat(i);return o?s:s.concat(x(y(i)))}function O(e){return["table","td","th"].indexOf(f(e))>=0}function v(e){if(!p(e)||"fixed"===m(e).position)return null;const t=e.offsetParent;if(t){const e=d(t);if("body"===f(t)&&"static"===m(t).position&&"static"!==m(e).position)return e}return t}function E(e){const t=a(e);let n=v(e);for(;n&&O(n)&&"static"===m(n).position;)n=v(n);return n&&"body"===f(n)&&"static"===m(n).position?t:n||function(e){let t=y(e);for(;p(t)&&["html","body"].indexOf(f(t))<0;){const e=m(t);if("none"!==e.transform||"none"!==e.perspective||e.willChange&&"auto"!==e.willChange)return t;t=t.parentNode}return null}(e)||t}const j="top",M="bottom",L="right",T="left",D="auto",$=[j,M,L,T],_="start",k="clippingParents",A="viewport",R="popper",S=$.reduce(((e,t)=>e.concat([`${t}-start`,`${t}-end`])),[]),B=[...$,D].reduce(((e,t)=>e.concat([t,`${t}-start`,`${t}-end`])),[]),C=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function W(e){const t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[...e.requires||[],...e.requiresIfExists||[]].forEach((e=>{if(!n.has(e)){const n=t.get(e);n&&r(n)}})),o.push(e)}return e.forEach((e=>{t.set(e.name,e)})),e.forEach((e=>{n.has(e.name)||r(e)})),o}function N(e){let t;return()=>(t||(t=new Promise((n=>{Promise.resolve().then((()=>{t=void 0,n(e())}))}))),t)}const P={placement:"bottom",modifiers:[],strategy:"absolute"};function F(...e){return!e.some((e=>!(e&&"function"==typeof e.getBoundingClientRect)))}function I(e={}){const{defaultModifiers:t=[],defaultOptions:n=P}=e;return function(e,o,r=n){let i={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},P),n),modifiersData:{},elements:{reference:e,popper:o},attributes:{},styles:{}},s=[],a=!1;const l={state:i,setOptions(r){p(),i.options=Object.assign(Object.assign(Object.assign({},n),i.options),r),i.scrollParents={reference:c(e)?x(e):e.contextElement?x(e.contextElement):[],popper:x(o)};const a=function(e){const t=W(e);return C.reduce(((e,n)=>e.concat(t.filter((e=>e.phase===n)))),[])}(function(e){const t=e.reduce(((e,t)=>{const n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((e=>t[e]))}([...t,...i.options.modifiers]));return i.orderedModifiers=a.filter((e=>e.enabled)),i.orderedModifiers.forEach((({name:e,options:t={},effect:n})=>{if("function"==typeof n){const o=n({state:i,name:e,instance:l,options:t}),r=()=>{};s.push(o||r)}})),l.update()},forceUpdate(){if(a)return;const{reference:e,popper:t}=i.elements;if(F(e,t)){i.rects={reference:h(e,E(t),"fixed"===i.options.strategy),popper:b(t)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((e=>i.modifiersData[e.name]=Object.assign({},e.data)));for(let e=0;e<i.orderedModifiers.length;e++){if(!0===i.reset){i.reset=!1,e=-1;continue}const{fn:t,options:n={},name:o}=i.orderedModifiers[e];"function"==typeof t&&(i=t({state:i,options:n,name:o,instance:l})||i)}}},update:N((()=>new Promise((e=>{l.forceUpdate(),e(i)})))),destroy(){p(),a=!0}};if(!F(e,o))return l;function p(){s.forEach((e=>e())),s=[]}return l.setOptions(r).then((e=>{!a&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}I();const H={passive:!0};function U(e){return e.split("-")[0]}function q(e){return e.split("-")[1]}function V(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z({reference:e,element:t,placement:n}){const o=n?U(n):null,r=n?q(n):null,i=e.x+e.width/2-t.width/2,s=e.y+e.height/2-t.height/2;let a;switch(o){case j:a={x:i,y:e.y-t.height};break;case M:a={x:i,y:e.y+e.height};break;case L:a={x:e.x+e.width,y:s};break;case T:a={x:e.x-t.width,y:s};break;default:a={x:e.x,y:e.y}}const l=o?V(o):null;if(null!=l){const n="y"===l?"height":"width";switch(r){case _:a[l]=Math.floor(a[l])-Math.floor(e[n]/2-t[n]/2);break;case"end":a[l]=Math.floor(a[l])+Math.ceil(e[n]/2-t[n]/2)}}return a}const K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G({popper:e,popperRect:t,placement:n,offsets:o,position:r,gpuAcceleration:i,adaptive:s}){let{x:l,y:c}=function({x:e,y:t}){const n=window.devicePixelRatio||1;return{x:Math.round(e*n)/n||0,y:Math.round(t*n)/n||0}}(o);const p=o.hasOwnProperty("x"),f=o.hasOwnProperty("y");let u=T,m=j;const g=window;if(s){let o=E(e);o===a(e)&&(o=d(e)),n===j&&(m=M,c-=o.clientHeight-t.height,c*=i?1:-1),n===T&&(u=L,l-=o.clientWidth-t.width,l*=i?1:-1)}const h=Object.assign({position:r},s&&K);return i?Object.assign(Object.assign({},h),{[m]:f?"0":"",[u]:p?"0":"",transform:(g.devicePixelRatio||1)<2?`translate(${l}px, ${c}px)`:`translate3d(${l}px, ${c}px, 0)`}):Object.assign(Object.assign({},h),{[m]:f?`${c}px`:"",[u]:p?`${l}px`:"",transform:""})}const X={left:"right",right:"left",bottom:"top",top:"bottom"};function Y(e){return e.replace(/left|right|bottom|top/g,(e=>X[e]))}const Z={start:"end",end:"start"};function J(e){return e.replace(/start|end/g,(e=>Z[e]))}function Q(e,t){const n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){let n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ee(e){return Object.assign(Object.assign({},e),{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,t){return t===A?ee(function(e){const t=a(e),n=d(e),o=t.visualViewport;let r=n.clientWidth,i=n.clientHeight,s=0,l=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,l=o.offsetTop)),{width:r,height:i,x:s+u(e),y:l}}(e)):p(t)?function(e){const t=s(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ee(function(e){const t=d(e),n=l(e),o=e.ownerDocument.body,r=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let s=-n.scrollLeft+u(e);const a=-n.scrollTop;return"rtl"===m(o||t).direction&&(s+=Math.max(t.clientWidth,o?o.clientWidth:0)-r),{width:r,height:i,x:s,y:a}}(d(e)))}function ne(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function oe(e,t){return t.reduce(((t,n)=>(t[n]=e,t)),{})}function re(e,t={}){const{placement:n=e.placement,boundary:o=k,rootBoundary:r=A,elementContext:i=R,altBoundary:a=!1,padding:l=0}=t,u=ne("number"!=typeof l?l:oe(l,$)),g=i===R?"reference":R,h=e.elements.reference,b=e.rects.popper,w=e.elements[a?g:i],O=function(e,t,n){const o="clippingParents"===t?function(e){const t=x(y(e)),n=["absolute","fixed"].indexOf(m(e).position)>=0&&p(e)?E(e):e;return c(n)?t.filter((e=>c(e)&&Q(e,n)&&"body"!==f(e))):[]}(e):[].concat(t),r=[...o,n],i=r[0],s=r.reduce(((t,n)=>{const o=te(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),te(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(c(w)?w:w.contextElement||d(e.elements.popper),o,r),v=s(h),T=z({reference:v,element:b,strategy:"absolute",placement:n}),D=ee(Object.assign(Object.assign({},b),T)),_=i===R?D:v,S={top:O.top-_.top+u.top,bottom:_.bottom-O.bottom+u.bottom,left:O.left-_.left+u.left,right:_.right-O.right+u.right},B=e.modifiersData.offset;if(i===R&&B){const e=B[n];Object.keys(S).forEach((t=>{const n=[L,M].indexOf(t)>=0?1:-1,o=[j,M].indexOf(t)>=0?"y":"x";S[t]+=e[o]*n}))}return S}function ie(e,t,n){return Math.max(e,Math.min(t,n))}function se(e,t,n={x:0,y:0}){return{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[j,L,M,T].some((t=>e[t]>=0))}const le=I({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:()=>{},effect:function({state:e,instance:t,options:n}){const{scroll:o=!0,resize:r=!0}=n,i=a(e.elements.popper),s=[...e.scrollParents.reference,...e.scrollParents.popper];return o&&s.forEach((e=>{e.addEventListener("scroll",t.update,H)})),r&&i.addEventListener("resize",t.update,H),()=>{o&&s.forEach((e=>{e.removeEventListener("scroll",t.update,H)})),r&&i.removeEventListener("resize",t.update,H)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function({state:e,name:t}){e.modifiersData[t]=z({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function({state:e,options:t}){const{gpuAcceleration:n=!0,adaptive:o=!0}=t,r={placement:U(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),G(Object.assign(Object.assign({},r),{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),G(Object.assign(Object.assign({},r),{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function({state:e}){Object.keys(e.elements).forEach((t=>{const n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t];p(r)&&f(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((e=>{const t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function({state:e}){const t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),()=>{Object.keys(e.elements).forEach((n=>{const o=e.elements[n],r=e.attributes[n]||{},i=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]).reduce(((e,t)=>(e[t]="",e)),{});p(o)&&f(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((e=>{o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function({state:e,options:t,name:n}){const{offset:o=[0,0]}=t,r=B.reduce(((t,n)=>(t[n]=function(e,t,n){const o=U(e),r=[T,j].indexOf(o)>=0?-1:1;let[i,s]="function"==typeof n?n(Object.assign(Object.assign({},t),{placement:e})):n;return i=i||0,s=(s||0)*r,[T,L].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}(n,e.rects,o),t)),{}),{x:i,y:s}=r[e.placement];null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=s),e.modifiersData[n]=r}},{name:"flip",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){if(e.modifiersData[n]._skip)return;const{mainAxis:o=!0,altAxis:r=!0,fallbackPlacements:i,padding:s,boundary:a,rootBoundary:l,altBoundary:c,flipVariations:p=!0,allowedAutoPlacements:f}=t,d=e.options.placement,u=U(d),m=[d,...i||(u!==d&&p?function(e){if(U(e)===D)return[];const t=Y(e);return[J(e),t,J(t)]}(d):[Y(d)])].reduce(((t,n)=>t.concat(U(n)===D?function(e,t={}){const{placement:n,boundary:o,rootBoundary:r,padding:i,flipVariations:s,allowedAutoPlacements:a=B}=t,l=q(n),c=l?s?S:S.filter((e=>q(e)===l)):$;let p=c.filter((e=>a.indexOf(e)>=0));0===p.length&&(p=c);const f=p.reduce(((t,n)=>(t[n]=re(e,{placement:n,boundary:o,rootBoundary:r,padding:i})[U(n)],t)),{});return Object.keys(f).sort(((e,t)=>f[e]-f[t]))}(e,{placement:n,boundary:a,rootBoundary:l,padding:s,flipVariations:p,allowedAutoPlacements:f}):n)),[]),g=e.rects.reference,h=e.rects.popper,b=new Map;let y=!0,w=m[0];for(let t=0;t<m.length;t++){const n=m[t],i=U(n),p=q(n)===_,f=[j,M].indexOf(i)>=0,d=f?"width":"height",u=re(e,{placement:n,boundary:a,rootBoundary:l,altBoundary:c,padding:s});let x=f?p?L:T:p?M:j;g[d]>h[d]&&(x=Y(x));const O=Y(x),v=[];if(o&&v.push(u[i]<=0),r&&v.push(u[x]<=0,u[O]<=0),v.every((e=>e))){w=n,y=!1;break}b.set(n,v)}if(y)for(let e=p?3:1;e>0;e--){const t=m.find((t=>{const n=b.get(t);if(n)return n.slice(0,e).every((e=>e))}));if(t){w=t;break}}e.placement!==w&&(e.modifiersData[n]._skip=!0,e.placement=w,e.reset=!0)},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){const{mainAxis:o=!0,altAxis:r=!1,boundary:i,rootBoundary:s,altBoundary:a,padding:l,tether:c=!0,tetherOffset:p=0}=t,f=re(e,{boundary:i,rootBoundary:s,padding:l,altBoundary:a}),d=U(e.placement),u=q(e.placement),m=!u,g=V(d),h="x"===g?"y":"x",y=e.modifiersData.popperOffsets,w=e.rects.reference,x=e.rects.popper,O="function"==typeof p?p(Object.assign(Object.assign({},e.rects),{placement:e.placement})):p,v={x:0,y:0};if(y){if(o){const t="y"===g?j:T,n="y"===g?M:L,o="y"===g?"height":"width",r=y[g],i=y[g]+f[t],s=y[g]-f[n],a=c?-x[o]/2:0,l=u===_?w[o]:x[o],p=u===_?-x[o]:-w[o],d=e.elements.arrow,h=c&&d?b(d):{width:0,height:0},D=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},$=D[t],k=D[n],A=ie(0,w[o],h[o]),R=m?w[o]/2-a-A-$-O:l-A-$-O,S=m?-w[o]/2+a+A+k+O:p+A+k+O,B=e.elements.arrow&&E(e.elements.arrow),C=B?"y"===g?B.clientTop||0:B.clientLeft||0:0,W=e.modifiersData.offset?e.modifiersData.offset[e.placement][g]:0,N=y[g]+R-W-C,P=y[g]+S-W,F=ie(c?Math.min(i,N):i,r,c?Math.max(s,P):s);y[g]=F,v[g]=F-r}if(r){const e="x"===g?j:T,t="x"===g?M:L,n=y[h],o=ie(n+f[e],n,n-f[t]);y[h]=o,v[h]=o-n}e.modifiersData[n]=v}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function({state:e,name:t}){const n=e.elements.arrow,o=e.modifiersData.popperOffsets,r=U(e.placement),i=V(r),s=[T,L].indexOf(r)>=0?"height":"width";if(!n||!o)return;const a=e.modifiersData[`${t}#persistent`].padding,l=b(n),c="y"===i?j:T,p="y"===i?M:L,f=e.rects.reference[s]+e.rects.reference[i]-o[i]-e.rects.popper[s],d=o[i]-e.rects.reference[i],u=E(n),m=u?"y"===i?u.clientHeight||0:u.clientWidth||0:0,g=f/2-d/2,h=a[c],y=m-l[s]-a[p],w=m/2-l[s]/2+g,x=ie(h,w,y),O=i;e.modifiersData[t]={[O]:x,centerOffset:x-w}},effect:function({state:e,options:t,name:n}){let{element:o="[data-popper-arrow]",padding:r=0}=t;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o),o))&&Q(e.elements.popper,o)&&(e.elements.arrow=o,e.modifiersData[`${n}#persistent`]={padding:ne("number"!=typeof r?r:oe(r,$))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function({state:e,name:t}){const n=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,i=re(e,{elementContext:"reference"}),s=re(e,{altBoundary:!0}),a=se(i,n),l=se(s,o,r),c=ae(a),p=ae(l);e.modifiersData[t]={referenceClippingOffsets:a,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:p},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]});var ce=n(6551);const pe=e=>e.reduce(((e,[t,n])=>(e[t]=n,e)),{}),fe=[];var de=n(38296);n(45467);const ue={left:"right",right:"left",bottom:"top",top:"bottom"},me=e=>`opacity ${e}ms cubic-bezier(.54, 1.5, .38, 1.11)`,ge=({trigger:e,popper:t,popperMatchesTriggerWidth:n=!0,direction:s="down",position:a="left",placement:l,appendTo:c=(()=>document.body),zIndex:p=9999,isVisible:f=!0,positionModifiers:d,distance:u=0,onMouseEnter:m,onMouseLeave:g,onFocus:h,onBlur:b,onDocumentClick:y,onTriggerClick:w,onTriggerEnter:x,onPopperClick:O,onDocumentKeyDown:v,enableFlip:E=!0,flipBehavior:j="flip",reference:M})=>{const[L,T]=o.useState(null),[D,$]=o.useState(null),[_,k]=o.useState(null),[A,R]=o.useState(!1),S=D||L,B=o.useCallback((e=>y(e,S,_)),[f,L,D,_,y]);o.useEffect((()=>{R(!0)}),[]),o.useEffect((()=>{M&&(M.current?$(M.current):"function"==typeof M&&$(M()))}),[M]);const C=(e,t,n)=>{e&&t&&t.addEventListener(n,e)},W=(e,t,n)=>{e&&t&&t.removeEventListener(n,e)};o.useEffect((()=>{C(m,S,"mouseenter"),C(g,S,"mouseleave"),C(h,S,"focus"),C(b,S,"blur"),C(w,S,"click"),C(x,S,"keydown"),C(O,_,"click"),y&&C(B,document,"click"),C(v,document,"keydown");const e=new MutationObserver((()=>{q&&q()}));return _&&e.observe(_,{attributes:!0,childList:!0,subtree:!0}),()=>{W(m,S,"mouseenter"),W(g,S,"mouseleave"),W(h,S,"focus"),W(b,S,"blur"),W(w,S,"click"),W(x,S,"keydown"),W(O,_,"click"),y&&W(B,document,"click"),W(v,document,"keydown"),e.disconnect()}}),[L,_,m,g,h,b,w,x,O,y,v,D]);const N=()=>{if(l)return l;let e="up"===s?"top":"bottom";return"center"!==a&&(e=`${e}-${"right"===a?"end":"start"}`),e},P=o.useMemo(N,[s,a,l]),F=o.useMemo((()=>(e=>e.replace(/left|right|bottom|top/g,(e=>ue[e])))(N())),[s,a,l]),I=o.useMemo((()=>({name:"sameWidth",enabled:n,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>(e.elements.popper.style.width=`${e.elements.reference.offsetWidth}px`,()=>{})})),[n]),{styles:H,attributes:U,update:q}=((e,t,n={})=>{const r=o.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||fe},[s,a]=o.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"}},attributes:{}}),l=o.useMemo((()=>({name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=Object.keys(e.elements);a({styles:pe(t.map((t=>[t,e.styles[t]||{}]))),attributes:pe(t.map((t=>[t,e.attributes[t]])))})},requires:["computeStyles"]})),[]),c=o.useMemo((()=>{const e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[...i.modifiers,l,{name:"applyStyles",enabled:!1}]};return t=r.current,n=e,JSON.stringify(t)===JSON.stringify(n)?r.current||e:(r.current=e,e);var t,n}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),p=o.useRef();return(0,ce.L)((()=>{p&&p.current&&p.current.setOptions(c)}),[c]),(0,ce.L)((()=>{if(null==e||null==t)return;const o=(n.createPopper||le)(e,t,c);return p.current=o,()=>{o.destroy(),p.current=null}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}})(S,_,{placement:P,modifiers:[{name:"offset",options:{offset:[0,u]}},{name:"preventOverflow",enabled:!1},{name:"hide",enabled:!0},{name:"flip",enabled:P.startsWith("auto")||E,options:{fallbackPlacements:"flip"===j?[F]:j}},I]}),V=o.cloneElement(t,Object.assign({className:(0,de.css)(t.props&&t.props.className,d&&(()=>{if(U&&U.popper&&U.popper["data-popper-placement"]){const e=U.popper["data-popper-placement"];return d[e]}return d.top})()),style:Object.assign(Object.assign(Object.assign({},t.props&&t.props.style||{}),H.popper),{zIndex:p})},U.popper));return o.createElement(o.Fragment,null,!M&&e&&o.createElement(i.L,{onFoundRef:e=>T(e)},e),A&&f&&r.createPortal(o.createElement(i.L,{onFoundRef:e=>k(e)},V),"function"==typeof c?c():c))};ge.displayName="Popper"},64190:(e,t,n)=>{n.d(t,{nx:()=>o,VW:()=>r,Ow:()=>i,LD:()=>s,yu:()=>a});const o={ARROW_UP:38,ARROW_DOWN:40,ESCAPE_KEY:27,TAB:9,ENTER:13,SPACE:32},r={RIGHT:"right",LEFT:"left",BOTH:"both",NONE:"none"},i={UP:"up",DOWN:"down",RIGHT:"right",LEFT:"left"};var s;!function(e){e.success="success",e.error="error",e.warning="warning",e.default="default"}(s||(s={}));const a={Tab:"Tab",Space:" ",Escape:"Escape",Enter:"Enter",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"}},6551:(e,t,n)=>{n.d(t,{L:()=>r});var o=n(93264);const r=n(80164).Nq?o.useLayoutEffect:o.useEffect},80164:(e,t,n)=>{n.d(t,{kC:()=>i,Ki:()=>s,Ds:()=>a,Zd:()=>l,TX:()=>c,tJ:()=>p,qG:()=>f,Ll:()=>d,LK:()=>u,_6:()=>m,x8:()=>g,wt:()=>h,iu:()=>b,fZ:()=>w,Nq:()=>x,mY:()=>O,IB:()=>v,fi:()=>E,KG:()=>j});var o=n(3644),r=n(64190);function i(e){return e[0].toUpperCase()+e.substring(1)}function s(e="pf"){return`${e}-${(new Date).getTime()+Math.random().toString(36).slice(2)}`}function a(e,t){let n;return(...o)=>{clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}function l(e,t,n,o=!1){if(!e||!t)return!1;const r=e.getBoundingClientRect(),i=t.getBoundingClientRect(),s=Math.ceil(r.left),a=Math.floor(r.right),l=Math.ceil(i.left),c=Math.floor(i.right),p=l>=s&&c<=a,f=(n||!o&&r.width<i.width)&&(l<s&&c>s||c>a&&l<a);return p||f}function c(e,t){const n=e.getBoundingClientRect(),o=t.getBoundingClientRect(),i=Math.floor(n.left),s=Math.floor(n.right),a=Math.floor(o.left)<i,l=Math.floor(o.right)>s;let c=r.VW.NONE;return l&&a?c=r.VW.BOTH:l?c=r.VW.RIGHT:a&&(c=r.VW.LEFT),c}function p(e,t){return e.replace(/\${(.*?)}/g,((e,n)=>t[n]||""))}function f(e,t,n,r,i,s=!1){if(!Array.isArray(i))return;const a=r.filter((e=>e))[0].constructor===Array;let l=e,c=t;"up"===n?l=0===e?i.length-1:e-1:"down"===n?l=e===i.length-1?0:e+1:"left"===n?c=0===t?r[e].length-1:t-1:"right"===n&&(c=t===r[e].length-1?0:t+1),null===r[l]||void 0===r[l]||a&&(null===r[l][c]||void 0===r[l][c])?f(l,c,n,r,i,s):s?(r[l].focus&&r[l].focus(),o.findDOMNode(r[l]).focus()):"tab"!==n&&(a?r[l][c].focus():r[l].focus())}function d(e,t){const n=e.current.querySelectorAll(t);return Array.prototype.filter.call(n,(function(e){return e.tabIndex>="0"}))}function u(e,t,n){let o;return o="up"===t?0===e?n.length-1:e-1:e===n.length-1?0:e+1,void 0===n[o]||null===n[o][0]?u(o,t,n):o}function m(e,t,n){return n||(n=`${t}s`),`${e||0} ${1===e?t:n}`}const g=(e,t)=>Object.entries(e||{}).reduce(((e,[n,o])=>"default"===n?Object.assign(Object.assign({},e),{[t]:o}):Object.assign(Object.assign({},e),{[`${t}-on-${n}`]:o})),{}),h=(e,t,n="",o)=>{if(!e)return"";if(o){if(o in e)return t.modifiers[w(`${n}${e[o]}`)];const r=["2xl","xl","lg","md","sm","default"];for(let i=r.indexOf(o);i<r.length;i++)if(r[i]in e)return t.modifiers[w(`${n}${e[r[i]]}`)];return""}return Object.entries(e||{}).map((([e,t])=>`${n}${t}${"default"!==e?`-on-${e}`:""}`)).map(w).map((e=>e.replace(/-?(\dxl)/gi,((e,t)=>`_${t}`)))).map((e=>t.modifiers[e])).filter(Boolean).join(" ")},b=e=>null===e?null:e>=1450?"2xl":e>=1200?"xl":e>=992?"lg":e>=768?"md":e>=576?"sm":"default",y=e=>e.toUpperCase().replace("-","").replace("_",""),w=e=>e.replace(/([-_][a-z])/gi,y),x=!("undefined"==typeof window||!window.document||!window.document.createElement),O=(e,t)=>{const n=getComputedStyle(t),o=document.createElement("canvas").getContext("2d");return o.font=n.font||(()=>{let e="";const t={"50%":"ultra-condensed","62.5%":"extra-condensed","75%":"condensed","87.5%":"semi-condensed","100%":"normal","112.5%":"semi-expanded","125%":"expanded","150%":"extra-expanded","200%":"ultra-expanded"};let o;return o=n.fontStretch in t?t[n.fontStretch]:"normal",e=n.fontStyle+" "+n.fontVariant+" "+n.fontWeight+" "+o+" "+n.fontSize+"/"+n.lineHeight+" "+n.fontFamily,e})(),o.measureText(e).width},v=e=>{const t=getComputedStyle(e);let n=e.clientWidth,o=e.clientHeight;return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),{height:o,width:n}},E=(e,t)=>{const n=v(e).width;let o=t;if(O(t,e)>n){for(;O(`...${o}`,e)>n;)o=o.substring(1);e.value?e.value=`...${o}`:e.innerText=`...${o}`}else e.value?e.value=t:e.innerText=t},j=e=>e.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{})},9003:(e,t,n)=>{n.d(t,{sl:()=>r,LC:()=>i,ZP:()=>s});var o=n(40400);const r={name:"AngleDownIcon",height:512,width:320,svgPath:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",yOffset:0,xOffset:0},i=(0,o.IU)(r),s=i},73699:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o}),n.e(187).then(n.t.bind(n,30187,23));const o={badge:"pf-c-badge",check:"pf-c-check",divider:"pf-c-divider",dropdown:"pf-c-dropdown",dropdownGroup:"pf-c-dropdown__group",dropdownGroupTitle:"pf-c-dropdown__group-title",dropdownMenu:"pf-c-dropdown__menu",dropdownMenuItem:"pf-c-dropdown__menu-item",dropdownMenuItemDescription:"pf-c-dropdown__menu-item-description",dropdownMenuItemIcon:"pf-c-dropdown__menu-item-icon",dropdownMenuItemMain:"pf-c-dropdown__menu-item-main",dropdownToggle:"pf-c-dropdown__toggle",dropdownToggleButton:"pf-c-dropdown__toggle-button",dropdownToggleCheck:"pf-c-dropdown__toggle-check",dropdownToggleIcon:"pf-c-dropdown__toggle-icon",dropdownToggleImage:"pf-c-dropdown__toggle-image",dropdownToggleText:"pf-c-dropdown__toggle-text",menu:"pf-c-menu",modifiers:{fullHeight:"pf-m-full-height",expanded:"pf-m-expanded",action:"pf-m-action",disabled:"pf-m-disabled",plain:"pf-m-plain",text:"pf-m-text",splitButton:"pf-m-split-button",primary:"pf-m-primary",active:"pf-m-active",secondary:"pf-m-secondary",top:"pf-m-top",alignRight:"pf-m-align-right",alignLeft:"pf-m-align-left",alignRightOnSm:"pf-m-align-right-on-sm",alignLeftOnSm:"pf-m-align-left-on-sm",alignRightOnMd:"pf-m-align-right-on-md",alignLeftOnMd:"pf-m-align-left-on-md",alignRightOnLg:"pf-m-align-right-on-lg",alignLeftOnLg:"pf-m-align-left-on-lg",alignRightOnXl:"pf-m-align-right-on-xl",alignLeftOnXl:"pf-m-align-left-on-xl",alignRightOn_2xl:"pf-m-align-right-on-2xl",alignLeftOn_2xl:"pf-m-align-left-on-2xl",ariaDisabled:"pf-m-aria-disabled",icon:"pf-m-icon",description:"pf-m-description"}}},86478:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o}),n.e(9854).then(n.t.bind(n,49854,23));const o={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},tooltip:"pf-c-tooltip",tooltipArrow:"pf-c-tooltip__arrow",tooltipContent:"pf-c-tooltip__content"}}}]);
//# sourceMappingURL=../sourcemaps/9560.90c2747b5d20f03cfb2b79231f225501.js.map