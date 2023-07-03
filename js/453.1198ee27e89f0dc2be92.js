"use strict";(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[453],{35224:(e,t,n)=>{n.d(t,{u:()=>m,D:()=>f});var o=n(70655),r=n(92950),i=n(86478),s=n(38296);const a=e=>{var{className:t,children:n,isLeftAligned:a}=e,l=(0,o.__rest)(e,["className","children","isLeftAligned"]);return r.createElement("div",Object.assign({className:(0,s.css)(i.default.tooltipContent,a&&i.default.modifiers.textAlignLeft,t)},l),n)};a.displayName="TooltipContent";const l=e=>{var{className:t}=e,n=(0,o.__rest)(e,["className"]);return r.createElement("div",Object.assign({className:(0,s.css)(i.default.tooltipArrow,t)},n))};l.displayName="TooltipArrow";var p=n(1774);const c={name:"--pf-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-c-tooltip--MaxWidth)"};var f,d=n(16438);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(f||(f={}));let u=1;const m=e=>{var{content:t,position:n="top",trigger:f="mouseenter focus",isVisible:m=!1,isContentLeftAligned:g=!1,enableFlip:h=!0,className:b="",entryDelay:y=300,exitDelay:w=300,appendTo:x=(()=>document.body),zIndex:O=9999,maxWidth:v=c.value,distance:E=15,aria:k="describedby",flipBehavior:M=["top","right","bottom","left","top","right","bottom"],id:j="pf-tooltip-"+u++,children:T,animationDuration:_=300,reference:L,"aria-live":D=(L?"polite":"off"),boundary:R,isAppLauncher:A,tippyProps:$,removeFindDomNode:B=!1,onTooltipHidden:N=(()=>{})}=e,P=(0,o.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","reference","aria-live","boundary","isAppLauncher","tippyProps","removeFindDomNode","onTooltipHidden"]);const S=f.includes("mouseenter"),W=f.includes("focus"),C=f.includes("click"),I="manual"===f,[F,H]=r.useState(!1),[U,q]=r.useState(0),V=r.useRef(null),z=r.useRef(null),Z=r.useRef(null),K=r.useRef(),G=e=>{e.forEach((e=>{e.current&&clearTimeout(e.current)}))};r.useEffect((()=>()=>{G([V,Z,z])}),[]),r.useEffect((()=>{m?X():Y()}),[m]),r.useEffect((()=>{K.current<w&&(G([V,Z]),Z.current=setTimeout((()=>{q(0),V.current=setTimeout((()=>{H(!1),N()}),_)}),w)),K.current=w}),[w]);const X=()=>{G([V,Z]),z.current=setTimeout((()=>{H(!0),q(1)}),y)},Y=()=>{G([z]),Z.current=setTimeout((()=>{q(0),V.current=setTimeout((()=>{H(!1),N()}),_)}),w)},J={top:i.default.modifiers.top,bottom:i.default.modifiers.bottom,left:i.default.modifiers.left,right:i.default.modifiers.right,"top-start":i.default.modifiers.topLeft,"top-end":i.default.modifiers.topRight,"bottom-start":i.default.modifiers.bottomLeft,"bottom-end":i.default.modifiers.bottomRight,"left-start":i.default.modifiers.leftTop,"left-end":i.default.modifiers.leftBottom,"right-start":i.default.modifiers.rightTop,"right-end":i.default.modifiers.rightBottom},Q=v!==c.value,ee=r.createElement("div",Object.assign({"aria-live":D,className:(0,s.css)(i.default.tooltip,b),role:"tooltip",id:j,style:{maxWidth:Q?v:null,opacity:U,transition:(0,d.K)(_)}},P),r.createElement(l,null),r.createElement(a,{isLeftAligned:g},t));return r.createElement(d.r,{trigger:"none"!==k&&F?"describedby"===k&&T&&T.props&&!T.props["aria-describedby"]?r.cloneElement(T,{"aria-describedby":j}):"labelledby"===k&&T.props&&!T.props["aria-labelledby"]?r.cloneElement(T,{"aria-labelledby":j}):T:T,reference:L,popper:ee,popperMatchesTriggerWidth:!1,appendTo:x,isVisible:F,positionModifiers:J,distance:E,placement:n,onMouseEnter:S&&X,onMouseLeave:S&&Y,onPopperMouseEnter:S&&X,onPopperMouseLeave:S&&Y,onFocus:W&&X,onBlur:W&&Y,onDocumentClick:C&&((e,t)=>{F?Y():e.target===t&&X()}),onDocumentKeyDown:I?null:e=>{I||e.key===p.yu.Escape&&F&&Y()},onTriggerEnter:I?null:e=>{e.key===p.yu.Enter&&(F?Y():X())},enableFlip:h,zIndex:O,flipBehavior:M,removeFindDomNode:B})};m.displayName="Tooltip"},16438:(e,t,n)=>{n.d(t,{r:()=>he,K:()=>ge});var o=n(92950),r=n(12181);function i(e){const t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function s(e){if("[object Window]"!==e.toString()){const t=e.ownerDocument;return t?t.defaultView:window}return e}function a(e){const t=s(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function l(e){return e instanceof s(e).Element||e instanceof Element}function p(e){return e instanceof s(e).HTMLElement||e instanceof HTMLElement}function c(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return(l(e)?e.ownerDocument:e.document).documentElement}function d(e){return i(f(e)).left+a(e).scrollLeft}function u(e){return s(e).getComputedStyle(e)}function m(e){const{overflow:t,overflowX:n,overflowY:o}=u(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function g(e,t,n=!1){const o=f(t),r=i(e),l=p(t);let u={scrollLeft:0,scrollTop:0},g={x:0,y:0};var h,b;return(l||!l&&!n)&&(("body"!==c(t)||m(o))&&(u=(h=t)!==s(h)&&p(h)?{scrollLeft:(b=h).scrollLeft,scrollTop:b.scrollTop}:a(h)),p(t)?(g=i(t),g.x+=t.clientLeft,g.y+=t.clientTop):o&&(g.x=d(o))),{x:r.left+u.scrollLeft-g.x,y:r.top+u.scrollTop-g.y,width:r.width,height:r.height}}function h(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function b(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||e.host||f(e)}function y(e){return["html","body","#document"].indexOf(c(e))>=0?e.ownerDocument.body:p(e)&&m(e)?e:y(b(e))}function w(e,t=[]){const n=y(e),o="body"===c(n),r=s(n),i=o?[r].concat(r.visualViewport||[],m(n)?n:[]):n,a=t.concat(i);return o?a:a.concat(w(b(i)))}function x(e){return["table","td","th"].indexOf(c(e))>=0}function O(e){if(!p(e)||"fixed"===u(e).position)return null;const t=e.offsetParent;if(t){const e=f(t);if("body"===c(t)&&"static"===u(t).position&&"static"!==u(e).position)return e}return t}function v(e){const t=s(e);let n=O(e);for(;n&&x(n)&&"static"===u(n).position;)n=O(n);return n&&"body"===c(n)&&"static"===u(n).position?t:n||function(e){let t=b(e);for(;p(t)&&["html","body"].indexOf(c(t))<0;){const e=u(t);if("none"!==e.transform||"none"!==e.perspective||e.willChange&&"auto"!==e.willChange)return t;t=t.parentNode}return null}(e)||t}const E="top",k="bottom",M="right",j="left",T="auto",_=[E,k,M,j],L="start",D="end",R="clippingParents",A="viewport",$="popper",B=_.reduce(((e,t)=>e.concat([`${t}-${L}`,`${t}-${D}`])),[]),N=[..._,T].reduce(((e,t)=>e.concat([t,`${t}-${L}`,`${t}-${D}`])),[]),P=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function S(e){const t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[...e.requires||[],...e.requiresIfExists||[]].forEach((e=>{if(!n.has(e)){const n=t.get(e);n&&r(n)}})),o.push(e)}return e.forEach((e=>{t.set(e.name,e)})),e.forEach((e=>{n.has(e.name)||r(e)})),o}function W(e){let t;return()=>(t||(t=new Promise((n=>{Promise.resolve().then((()=>{t=void 0,n(e())}))}))),t)}const C={placement:"bottom",modifiers:[],strategy:"absolute"};function I(...e){return!e.some((e=>!(e&&"function"==typeof e.getBoundingClientRect)))}function F(e={}){const{defaultModifiers:t=[],defaultOptions:n=C}=e;return function(e,o,r=n){let i={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},C),n),modifiersData:{},elements:{reference:e,popper:o},attributes:{},styles:{}},s=[],a=!1;const p={state:i,setOptions(r){c(),i.options=Object.assign(Object.assign(Object.assign({},n),i.options),r),i.scrollParents={reference:l(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(o)};const a=function(e){const t=S(e);return P.reduce(((e,n)=>e.concat(t.filter((e=>e.phase===n)))),[])}(function(e){const t=e.reduce(((e,t)=>{const n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((e=>t[e]))}([...t,...i.options.modifiers]));return i.orderedModifiers=a.filter((e=>e.enabled)),i.orderedModifiers.forEach((({name:e,options:t={},effect:n})=>{if("function"==typeof n){const o=n({state:i,name:e,instance:p,options:t}),r=()=>{};s.push(o||r)}})),p.update()},forceUpdate(){if(a)return;const{reference:e,popper:t}=i.elements;if(I(e,t)){i.rects={reference:g(e,v(t),"fixed"===i.options.strategy),popper:h(t)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((e=>i.modifiersData[e.name]=Object.assign({},e.data)));for(let e=0;e<i.orderedModifiers.length;e++){if(!0===i.reset){i.reset=!1,e=-1;continue}const{fn:t,options:n={},name:o}=i.orderedModifiers[e];"function"==typeof t&&(i=t({state:i,options:n,name:o,instance:p})||i)}}},update:W((()=>new Promise((e=>{p.forceUpdate(),e(i)})))),destroy(){c(),a=!0}};if(!I(e,o))return p;function c(){s.forEach((e=>e())),s=[]}return p.setOptions(r).then((e=>{!a&&r.onFirstUpdate&&r.onFirstUpdate(e)})),p}}F();const H={passive:!0};function U(e){return e.split("-")[0]}function q(e){return e.split("-")[1]}function V(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z({reference:e,element:t,placement:n}){const o=n?U(n):null,r=n?q(n):null,i=e.x+e.width/2-t.width/2,s=e.y+e.height/2-t.height/2;let a;switch(o){case E:a={x:i,y:e.y-t.height};break;case k:a={x:i,y:e.y+e.height};break;case M:a={x:e.x+e.width,y:s};break;case j:a={x:e.x-t.width,y:s};break;default:a={x:e.x,y:e.y}}const l=o?V(o):null;if(null!=l){const n="y"===l?"height":"width";switch(r){case L:a[l]=Math.floor(a[l])-Math.floor(e[n]/2-t[n]/2);break;case D:a[l]=Math.floor(a[l])+Math.ceil(e[n]/2-t[n]/2)}}return a}const Z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K({popper:e,popperRect:t,placement:n,offsets:o,position:r,gpuAcceleration:i,adaptive:a}){let{x:l,y:p}=function({x:e,y:t}){const n=window.devicePixelRatio||1;return{x:Math.round(e*n)/n||0,y:Math.round(t*n)/n||0}}(o);const c=o.hasOwnProperty("x"),d=o.hasOwnProperty("y");let u=j,m=E;const g=window;if(a){let o=v(e);o===s(e)&&(o=f(e)),n===E&&(m=k,p-=o.clientHeight-t.height,p*=i?1:-1),n===j&&(u=M,l-=o.clientWidth-t.width,l*=i?1:-1)}const h=Object.assign({position:r},a&&Z);return i?Object.assign(Object.assign({},h),{[m]:d?"0":"",[u]:c?"0":"",transform:(g.devicePixelRatio||1)<2?`translate(${l}px, ${p}px)`:`translate3d(${l}px, ${p}px, 0)`}):Object.assign(Object.assign({},h),{[m]:d?`${p}px`:"",[u]:c?`${l}px`:"",transform:""})}const G={left:"right",right:"left",bottom:"top",top:"bottom"};function X(e){return e.replace(/left|right|bottom|top/g,(e=>G[e]))}const Y={start:"end",end:"start"};function J(e){return e.replace(/start|end/g,(e=>Y[e]))}function Q(e,t){const n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){let n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ee(e){return Object.assign(Object.assign({},e),{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,t){return t===A?ee(function(e){const t=s(e),n=f(e),o=t.visualViewport;let r=n.clientWidth,i=n.clientHeight,a=0,l=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,l=o.offsetTop)),{width:r,height:i,x:a+d(e),y:l}}(e)):p(t)?function(e){const t=i(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ee(function(e){const t=f(e),n=a(e),o=e.ownerDocument.body,r=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let s=-n.scrollLeft+d(e);const l=-n.scrollTop;return"rtl"===u(o||t).direction&&(s+=Math.max(t.clientWidth,o?o.clientWidth:0)-r),{width:r,height:i,x:s,y:l}}(f(e)))}function ne(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function oe(e,t){return t.reduce(((t,n)=>(t[n]=e,t)),{})}function re(e,t={}){const{placement:n=e.placement,boundary:o=R,rootBoundary:r=A,elementContext:s=$,altBoundary:a=!1,padding:d=0}=t,m=ne("number"!=typeof d?d:oe(d,_)),g=s===$?"reference":$,h=e.elements.reference,y=e.rects.popper,x=e.elements[a?g:s],O=function(e,t,n){const o="clippingParents"===t?function(e){const t=w(b(e)),n=["absolute","fixed"].indexOf(u(e).position)>=0&&p(e)?v(e):e;return l(n)?t.filter((e=>l(e)&&Q(e,n)&&"body"!==c(e))):[]}(e):[].concat(t),r=[...o,n],i=r[0],s=r.reduce(((t,n)=>{const o=te(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),te(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(l(x)?x:x.contextElement||f(e.elements.popper),o,r),j=i(h),T=z({reference:j,element:y,strategy:"absolute",placement:n}),L=ee(Object.assign(Object.assign({},y),T)),D=s===$?L:j,B={top:O.top-D.top+m.top,bottom:D.bottom-O.bottom+m.bottom,left:O.left-D.left+m.left,right:D.right-O.right+m.right},N=e.modifiersData.offset;if(s===$&&N){const e=N[n];Object.keys(B).forEach((t=>{const n=[M,k].indexOf(t)>=0?1:-1,o=[E,k].indexOf(t)>=0?"y":"x";B[t]+=e[o]*n}))}return B}function ie(e,t,n){return Math.max(e,Math.min(t,n))}function se(e,t,n={x:0,y:0}){return{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[E,M,k,j].some((t=>e[t]>=0))}const le=F({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:()=>{},effect:function({state:e,instance:t,options:n}){const{scroll:o=!0,resize:r=!0}=n,i=s(e.elements.popper),a=[...e.scrollParents.reference,...e.scrollParents.popper];return o&&a.forEach((e=>{e.addEventListener("scroll",t.update,H)})),r&&i.addEventListener("resize",t.update,H),()=>{o&&a.forEach((e=>{e.removeEventListener("scroll",t.update,H)})),r&&i.removeEventListener("resize",t.update,H)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function({state:e,name:t}){e.modifiersData[t]=z({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function({state:e,options:t}){const{gpuAcceleration:n=!0,adaptive:o=!0}=t,r={placement:U(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),K(Object.assign(Object.assign({},r),{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),K(Object.assign(Object.assign({},r),{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function({state:e}){Object.keys(e.elements).forEach((t=>{const n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t];p(r)&&c(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((e=>{const t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function({state:e}){const t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),()=>{Object.keys(e.elements).forEach((n=>{const o=e.elements[n],r=e.attributes[n]||{},i=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]).reduce(((e,t)=>(e[t]="",e)),{});p(o)&&c(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((e=>{o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function({state:e,options:t,name:n}){const{offset:o=[0,0]}=t,r=N.reduce(((t,n)=>(t[n]=function(e,t,n){const o=U(e),r=[j,E].indexOf(o)>=0?-1:1;let[i,s]="function"==typeof n?n(Object.assign(Object.assign({},t),{placement:e})):n;return i=i||0,s=(s||0)*r,[j,M].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}(n,e.rects,o),t)),{}),{x:i,y:s}=r[e.placement];null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=s),e.modifiersData[n]=r}},{name:"flip",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){if(e.modifiersData[n]._skip)return;const{mainAxis:o=!0,altAxis:r=!0,fallbackPlacements:i,padding:s,boundary:a,rootBoundary:l,altBoundary:p,flipVariations:c=!0,allowedAutoPlacements:f}=t,d=e.options.placement,u=U(d),m=[d,...i||(u!==d&&c?function(e){if(U(e)===T)return[];const t=X(e);return[J(e),t,J(t)]}(d):[X(d)])].reduce(((t,n)=>t.concat(U(n)===T?function(e,t={}){const{placement:n,boundary:o,rootBoundary:r,padding:i,flipVariations:s,allowedAutoPlacements:a=N}=t,l=q(n),p=l?s?B:B.filter((e=>q(e)===l)):_;let c=p.filter((e=>a.indexOf(e)>=0));0===c.length&&(c=p);const f=c.reduce(((t,n)=>(t[n]=re(e,{placement:n,boundary:o,rootBoundary:r,padding:i})[U(n)],t)),{});return Object.keys(f).sort(((e,t)=>f[e]-f[t]))}(e,{placement:n,boundary:a,rootBoundary:l,padding:s,flipVariations:c,allowedAutoPlacements:f}):n)),[]),g=e.rects.reference,h=e.rects.popper,b=new Map;let y=!0,w=m[0];for(let t=0;t<m.length;t++){const n=m[t],i=U(n),c=q(n)===L,f=[E,k].indexOf(i)>=0,d=f?"width":"height",u=re(e,{placement:n,boundary:a,rootBoundary:l,altBoundary:p,padding:s});let x=f?c?M:j:c?k:E;g[d]>h[d]&&(x=X(x));const O=X(x),v=[];if(o&&v.push(u[i]<=0),r&&v.push(u[x]<=0,u[O]<=0),v.every((e=>e))){w=n,y=!1;break}b.set(n,v)}if(y)for(let e=c?3:1;e>0;e--){const t=m.find((t=>{const n=b.get(t);if(n)return n.slice(0,e).every((e=>e))}));if(t){w=t;break}}e.placement!==w&&(e.modifiersData[n]._skip=!0,e.placement=w,e.reset=!0)},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){const{mainAxis:o=!0,altAxis:r=!1,boundary:i,rootBoundary:s,altBoundary:a,padding:l,tether:p=!0,tetherOffset:c=0}=t,f=re(e,{boundary:i,rootBoundary:s,padding:l,altBoundary:a}),d=U(e.placement),u=q(e.placement),m=!u,g=V(d),b="x"===g?"y":"x",y=e.modifiersData.popperOffsets,w=e.rects.reference,x=e.rects.popper,O="function"==typeof c?c(Object.assign(Object.assign({},e.rects),{placement:e.placement})):c,T={x:0,y:0};if(y){if(o){const t="y"===g?E:j,n="y"===g?k:M,o="y"===g?"height":"width",r=y[g],i=y[g]+f[t],s=y[g]-f[n],a=p?-x[o]/2:0,l=u===L?w[o]:x[o],c=u===L?-x[o]:-w[o],d=e.elements.arrow,b=p&&d?h(d):{width:0,height:0},_=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},D=_[t],R=_[n],A=ie(0,w[o],b[o]),$=m?w[o]/2-a-A-D-O:l-A-D-O,B=m?-w[o]/2+a+A+R+O:c+A+R+O,N=e.elements.arrow&&v(e.elements.arrow),P=N?"y"===g?N.clientTop||0:N.clientLeft||0:0,S=e.modifiersData.offset?e.modifiersData.offset[e.placement][g]:0,W=y[g]+$-S-P,C=y[g]+B-S,I=ie(p?Math.min(i,W):i,r,p?Math.max(s,C):s);y[g]=I,T[g]=I-r}if(r){const e="x"===g?E:j,t="x"===g?k:M,n=y[b],o=ie(n+f[e],n,n-f[t]);y[b]=o,T[b]=o-n}e.modifiersData[n]=T}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function({state:e,name:t}){const n=e.elements.arrow,o=e.modifiersData.popperOffsets,r=U(e.placement),i=V(r),s=[j,M].indexOf(r)>=0?"height":"width";if(!n||!o)return;const a=e.modifiersData[`${t}#persistent`].padding,l=h(n),p="y"===i?E:j,c="y"===i?k:M,f=e.rects.reference[s]+e.rects.reference[i]-o[i]-e.rects.popper[s],d=o[i]-e.rects.reference[i],u=v(n),m=u?"y"===i?u.clientHeight||0:u.clientWidth||0:0,g=f/2-d/2,b=a[p],y=m-l[s]-a[c],w=m/2-l[s]/2+g,x=ie(b,w,y),O=i;e.modifiersData[t]={[O]:x,centerOffset:x-w}},effect:function({state:e,options:t,name:n}){let{element:o="[data-popper-arrow]",padding:r=0}=t;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o),o))&&Q(e.elements.popper,o)&&(e.elements.arrow=o,e.modifiersData[`${n}#persistent`]={padding:ne("number"!=typeof r?r:oe(r,_))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function({state:e,name:t}){const n=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,i=re(e,{elementContext:"reference"}),s=re(e,{altBoundary:!0}),a=se(i,n),l=se(s,o,r),p=ae(a),c=ae(l);e.modifiersData[t]={referenceClippingOffsets:a,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:c},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-reference-hidden":p,"data-popper-escaped":c})}}]});var pe=n(6551);const ce=e=>e.reduce(((e,[t,n])=>(e[t]=n,e)),{}),fe=[];var de=n(38296);class ue extends o.Component{componentDidMount(){const e=r.findDOMNode(this);this.props.onFoundRef(e)}render(){return this.props.children||null}}ue.displayName="FindRefWrapper",n(45467);const me={left:"right",right:"left",bottom:"top",top:"bottom","top-start":"bottom-end","top-end":"bottom-start","bottom-start":"top-end","bottom-end":"top-start","left-start":"right-end","left-end":"right-start","right-start":"left-end","right-end":"left-start"},ge=e=>`opacity ${e}ms cubic-bezier(.54, 1.5, .38, 1.11)`,he=({trigger:e,popper:t,popperMatchesTriggerWidth:n=!0,direction:i="down",position:s="left",placement:a,appendTo:l=(()=>document.body),zIndex:p=9999,isVisible:c=!0,positionModifiers:f,distance:d=0,onMouseEnter:u,onMouseLeave:m,onFocus:g,onBlur:h,onDocumentClick:b,onTriggerClick:y,onTriggerEnter:w,onPopperClick:x,onPopperMouseEnter:O,onPopperMouseLeave:v,onDocumentKeyDown:E,enableFlip:k=!0,flipBehavior:M="flip",reference:j,removeFindDomNode:T=!1,popperRef:_})=>{const[L,D]=o.useState(null),[R,A]=o.useState(null),[$,B]=o.useState(null),[N,P]=o.useState(!1),S=R||L,W=o.useCallback((e=>b(e,S,$)),[c,L,R,$,b]);o.useEffect((()=>{P(!0)}),[]),o.useEffect((()=>{j&&(j.current?A(j.current):"function"==typeof j&&A(j()))}),[j]),o.useEffect((()=>{_&&(_.current?B(_.current):"function"==typeof _&&B(_()))}),[c,_]);const C=(e,t,n,o=!1)=>{e&&t&&t.addEventListener(n,e,{capture:o})},I=(e,t,n,o=!1)=>{e&&t&&t.removeEventListener(n,e,{capture:o})};o.useEffect((()=>{C(u,S,"mouseenter"),C(m,S,"mouseleave"),C(g,S,"focus"),C(h,S,"blur"),C(y,S,"click"),C(w,S,"keydown"),C(x,$,"click"),C(O,$,"mouseenter"),C(v,$,"mouseleave"),b&&C(W,document,"click",!0),C(E,document,"keydown",!0);const e=new MutationObserver((()=>{Z&&Z()}));return $&&e.observe($,{attributes:!0,childList:!0,subtree:!0}),()=>{I(u,S,"mouseenter"),I(m,S,"mouseleave"),I(g,S,"focus"),I(h,S,"blur"),I(y,S,"click"),I(w,S,"keydown"),I(x,$,"click"),I(O,$,"mouseenter"),I(v,$,"mouseleave"),b&&I(W,document,"click",!0),I(E,document,"keydown",!0),e.disconnect()}}),[L,$,u,m,g,h,y,w,x,O,v,b,E,R]);const F=()=>{if(a)return a;let e="up"===i?"top":"bottom";return"center"!==s&&(e=`${e}-${"right"===s?"end":"start"}`),e},H=o.useMemo(F,[i,s,a]),U=o.useMemo((()=>(e=>e.replace(/left|right|bottom|top|top-start|top-end|bottom-start|bottom-end|right-start|right-end|left-start|left-end/g,(e=>me[e])))(F())),[i,s,a]),q=o.useMemo((()=>({name:"sameWidth",enabled:n,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>(e.elements.popper.style.width=`${e.elements.reference.offsetWidth}px`,()=>{})})),[n]),{styles:V,attributes:z,update:Z,forceUpdate:K}=((e,t,n={})=>{const r=o.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||fe},[s,a]=o.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"}},attributes:{}}),l=o.useMemo((()=>({name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=Object.keys(e.elements);a({styles:ce(t.map((t=>[t,e.styles[t]||{}]))),attributes:ce(t.map((t=>[t,e.attributes[t]])))})},requires:["computeStyles"]})),[]),p=o.useMemo((()=>{const e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[...i.modifiers,l,{name:"applyStyles",enabled:!1}]};return t=r.current,n=e,JSON.stringify(t)===JSON.stringify(n)?r.current||e:(r.current=e,e);var t,n}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),c=o.useRef();return(0,pe.L)((()=>{c&&c.current&&c.current.setOptions(p)}),[p]),(0,pe.L)((()=>{if(null==e||null==t)return;const o=(n.createPopper||le)(e,t,p);return c.current=o,()=>{o.destroy(),c.current=null}}),[e,t,n.createPopper]),{state:c.current?c.current.state:null,styles:s.styles,attributes:s.attributes,update:c.current?c.current.update:null,forceUpdate:c.current?c.current.forceUpdate:null}})(S,$,{placement:H,modifiers:[{name:"offset",options:{offset:[0,d]}},{name:"preventOverflow",enabled:!1},{name:"hide",enabled:!0},{name:"flip",enabled:H.startsWith("auto")||k,options:{fallbackPlacements:"flip"===M?[U]:M}},q]});o.useEffect((()=>{K&&K()}),[t]);const G=Object.assign({className:(0,de.css)(t.props&&t.props.className,f&&(()=>{if(z&&z.popper&&z.popper["data-popper-placement"]){const e=z.popper["data-popper-placement"];return f[e]}return f.top})()),style:Object.assign(Object.assign(Object.assign({},t.props&&t.props.style||{}),V.popper),{zIndex:p})},z.popper),X=o.cloneElement(t,G);let Y;return Y=T?o.createElement("div",{style:{display:"contents"},ref:e=>B(null==e?void 0:e.firstElementChild)},X):_?X:o.createElement(ue,{onFoundRef:e=>B(e)},X),o.createElement(o.Fragment,null,!j&&e&&o.isValidElement(e)&&!T&&o.createElement(ue,{onFoundRef:e=>D(e)},e),!j&&e&&o.isValidElement(e)&&T&&o.createElement("div",{style:{display:"contents"},ref:e=>D(null==e?void 0:e.firstElementChild)},e),N&&c&&r.createPortal(Y,"function"==typeof l?l():l))};he.displayName="Popper"},1774:(e,t,n)=>{n.d(t,{Ow:()=>p,nx:()=>a,yu:()=>f,VW:()=>l,LD:()=>c,pr:()=>u,H_:()=>d});var o=n(33043),r=n(76709),i=n(17766),s=n(12284);const a={ARROW_UP:38,ARROW_DOWN:40,ESCAPE_KEY:27,TAB:9,ENTER:13,SPACE:32},l={RIGHT:"right",LEFT:"left",BOTH:"both",NONE:"none"},p={UP:"up",DOWN:"down",RIGHT:"right",LEFT:"left"};var c;!function(e){e.success="success",e.error="error",e.warning="warning",e.default="default"}(c||(c={}));const f={Tab:"Tab",Space:" ",Escape:"Escape",Enter:"Enter",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"},d={sm:parseInt("576px"),md:parseInt(o.Z.value),lg:parseInt(r.Z.value),xl:parseInt(i.Z.value),"2xl":parseInt(s.Z.value)},u={sm:parseInt("0"),md:parseInt("40rem"),lg:parseInt("48rem"),xl:parseInt("60rem"),"2xl":parseInt("80rem")}},6551:(e,t,n)=>{n.d(t,{L:()=>r});var o=n(92950);const r=n(80164).Nq?o.useLayoutEffect:o.useEffect},80164:(e,t,n)=>{n.d(t,{Ds:()=>a,IB:()=>E,KG:()=>M,Ki:()=>s,LK:()=>u,Ll:()=>d,Nq:()=>O,TX:()=>p,Zd:()=>l,_6:()=>m,fZ:()=>x,fi:()=>k,iu:()=>y,kC:()=>i,mY:()=>v,qG:()=>f,tJ:()=>c,wt:()=>h,x8:()=>g,xb:()=>b});var o=n(12181),r=n(1774);function i(e){return e[0].toUpperCase()+e.substring(1)}function s(e="pf"){return`${e}-${(new Date).getTime()+Math.random().toString(36).slice(2)}`}function a(e,t){let n;return(...o)=>{clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}function l(e,t,n,o=!1){if(!e||!t)return!1;const r=e.getBoundingClientRect(),i=t.getBoundingClientRect(),s=Math.ceil(r.left),a=Math.floor(r.right),l=Math.ceil(i.left),p=Math.floor(i.right),c=l>=s&&p<=a,f=(n||!o&&r.width<i.width)&&(l<s&&p>s||p>a&&l<a);return c||f}function p(e,t){const n=e.getBoundingClientRect(),o=t.getBoundingClientRect(),i=Math.floor(n.left),s=Math.floor(n.right),a=Math.floor(o.left)<i,l=Math.floor(o.right)>s;let p=r.VW.NONE;return l&&a?p=r.VW.BOTH:l?p=r.VW.RIGHT:a&&(p=r.VW.LEFT),p}function c(e,t){return e.replace(/\${(.*?)}/g,((e,n)=>t[n]||""))}function f(e,t,n,r,i,s=!1){if(!Array.isArray(i))return;const a=r.filter((e=>e))[0].constructor===Array;let l=e,p=t;"up"===n?l=0===e?i.length-1:e-1:"down"===n?l=e===i.length-1?0:e+1:"left"===n?p=0===t?r[e].length-1:t-1:"right"===n&&(p=t===r[e].length-1?0:t+1),null===r[l]||void 0===r[l]||a&&(null===r[l][p]||void 0===r[l][p])?f(l,p,n,r,i,s):s?(r[l].focus&&r[l].focus(),o.findDOMNode(r[l]).focus()):"tab"!==n&&(a?r[l][p].focus():r[l].focus())}function d(e,t){const n=e.current.querySelectorAll(t);return Array.prototype.filter.call(n,(function(e){return e.tabIndex>="0"}))}function u(e,t,n){let o;return o="up"===t?0===e?n.length-1:e-1:e===n.length-1?0:e+1,void 0===n[o]||null===n[o][0]?u(o,t,n):o}function m(e,t,n){return n||(n=`${t}s`),`${e||0} ${1===e?t:n}`}const g=(e,t)=>Object.entries(e||{}).reduce(((e,[n,o])=>"default"===n?Object.assign(Object.assign({},e),{[t]:o}):Object.assign(Object.assign({},e),{[`${t}-on-${n}`]:o})),{}),h=(e,t,n="",o,r)=>{if(!e)return"";if(o&&!r){if(o in e)return t.modifiers[x(`${n}${e[o]}`)];const r=["2xl","xl","lg","md","sm","default"];for(let i=r.indexOf(o);i<r.length;i++)if(r[i]in e)return t.modifiers[x(`${n}${e[r[i]]}`)];return""}return Object.entries(e||{}).map((([e,t])=>`${n}${t}${"default"!==e?`-on-${e}`:""}${r&&"default"!==e?"-height":""}`)).map(x).map((e=>e.replace(/-?(\dxl)/gi,((e,t)=>`_${t}`)))).map((e=>t.modifiers[e])).filter(Boolean).join(" ")},b=e=>null===e?null:e>=r.pr["2xl"]?"2xl":e>=r.pr.xl?"xl":e>=r.pr.lg?"lg":e>=r.pr.md?"md":e>=r.pr.sm?"sm":"default",y=e=>null===e?null:e>=r.H_["2xl"]?"2xl":e>=r.H_.xl?"xl":e>=r.H_.lg?"lg":e>=r.H_.md?"md":e>=r.H_.sm?"sm":"default",w=e=>e.toUpperCase().replace("-","").replace("_",""),x=e=>e.replace(/([-_][a-z])/gi,w),O=!("undefined"==typeof window||!window.document||!window.document.createElement),v=(e,t)=>{const n=getComputedStyle(t),o=document.createElement("canvas").getContext("2d");return o.font=n.font||(()=>{let e="";const t={"50%":"ultra-condensed","62.5%":"extra-condensed","75%":"condensed","87.5%":"semi-condensed","100%":"normal","112.5%":"semi-expanded","125%":"expanded","150%":"extra-expanded","200%":"ultra-expanded"};let o;return o=n.fontStretch in t?t[n.fontStretch]:"normal",e=n.fontStyle+" "+n.fontVariant+" "+n.fontWeight+" "+o+" "+n.fontSize+"/"+n.lineHeight+" "+n.fontFamily,e})(),o.measureText(e).width},E=e=>{const t=getComputedStyle(e);let n=e.clientWidth,o=e.clientHeight;return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),{height:o,width:n}},k=(e,t)=>{const n=E(e).width;let o=t;if(v(t,e)>n){for(;v(`...${o}`,e)>n;)o=o.substring(1);e.value?e.value=`...${o}`:e.innerText=`...${o}`}else e.value?e.value=t:e.innerText=t},M=e=>e.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{})},9003:(e,t,n)=>{n.d(t,{LC:()=>i,ZP:()=>s,sl:()=>r});var o=n(40400);const r={name:"AngleDownIcon",height:512,width:320,svgPath:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",yOffset:0,xOffset:0},i=(0,o.IU)(r),s=i},54783:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o}),n(32857);const o={check:"pf-c-check",checkBody:"pf-c-check__body",checkDescription:"pf-c-check__description",checkInput:"pf-c-check__input",checkLabel:"pf-c-check__label",checkLabelRequired:"pf-c-check__label-required",modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"}}},73699:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o}),n(30187);const o={badge:"pf-c-badge",check:"pf-c-check",divider:"pf-c-divider",dropdown:"pf-c-dropdown",dropdownGroup:"pf-c-dropdown__group",dropdownGroupTitle:"pf-c-dropdown__group-title",dropdownMenu:"pf-c-dropdown__menu",dropdownMenuItem:"pf-c-dropdown__menu-item",dropdownMenuItemDescription:"pf-c-dropdown__menu-item-description",dropdownMenuItemIcon:"pf-c-dropdown__menu-item-icon",dropdownMenuItemMain:"pf-c-dropdown__menu-item-main",dropdownToggle:"pf-c-dropdown__toggle",dropdownToggleButton:"pf-c-dropdown__toggle-button",dropdownToggleCheck:"pf-c-dropdown__toggle-check",dropdownToggleIcon:"pf-c-dropdown__toggle-icon",dropdownToggleImage:"pf-c-dropdown__toggle-image",dropdownToggleProgress:"pf-c-dropdown__toggle-progress",dropdownToggleText:"pf-c-dropdown__toggle-text",menu:"pf-c-menu",modifiers:{fullHeight:"pf-m-full-height",expanded:"pf-m-expanded",action:"pf-m-action",disabled:"pf-m-disabled",plain:"pf-m-plain",text:"pf-m-text",splitButton:"pf-m-split-button",primary:"pf-m-primary",inProgress:"pf-m-in-progress",active:"pf-m-active",secondary:"pf-m-secondary",top:"pf-m-top",static:"pf-m-static",alignRight:"pf-m-align-right",alignLeft:"pf-m-align-left",alignRightOnSm:"pf-m-align-right-on-sm",alignLeftOnSm:"pf-m-align-left-on-sm",alignRightOnMd:"pf-m-align-right-on-md",alignLeftOnMd:"pf-m-align-left-on-md",alignRightOnLg:"pf-m-align-right-on-lg",alignLeftOnLg:"pf-m-align-left-on-lg",alignRightOnXl:"pf-m-align-right-on-xl",alignLeftOnXl:"pf-m-align-left-on-xl",alignRightOn_2xl:"pf-m-align-right-on-2xl",alignLeftOn_2xl:"pf-m-align-left-on-2xl",ariaDisabled:"pf-m-aria-disabled",icon:"pf-m-icon",description:"pf-m-description"},spinner:"pf-c-spinner",themeDark:"pf-theme-dark"}},86478:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o}),n(49854);const o={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-theme-dark",tooltip:"pf-c-tooltip",tooltipArrow:"pf-c-tooltip__arrow",tooltipContent:"pf-c-tooltip__content"}},12284:(e,t,n)=>{n.d(t,{Z:()=>o});const o={name:"--pf-global--breakpoint--2xl",value:"1450px",var:"var(--pf-global--breakpoint--2xl)"}},76709:(e,t,n)=>{n.d(t,{Z:()=>o});const o={name:"--pf-global--breakpoint--lg",value:"992px",var:"var(--pf-global--breakpoint--lg)"}},33043:(e,t,n)=>{n.d(t,{Z:()=>o});const o={name:"--pf-global--breakpoint--md",value:"768px",var:"var(--pf-global--breakpoint--md)"}},17766:(e,t,n)=>{n.d(t,{Z:()=>o});const o={name:"--pf-global--breakpoint--xl",value:"1200px",var:"var(--pf-global--breakpoint--xl)"}}}]);