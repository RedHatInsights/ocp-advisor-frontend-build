(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[4609,8596],{22025:(e,t,i)=>{"use strict";i.d(t,{k:()=>s});var o=i(65353),n=i(28416),l=i(47376),a=i(38296);const r=e=>{var{children:t,className:i="",label:r="",titleId:s,innerRef:c,labelHeadingLevel:d="h1"}=e,f=(0,o.__rest)(e,["children","className","label","titleId","innerRef","labelHeadingLevel"]);const p="function"==typeof r?r:d;return n.createElement("section",Object.assign({},f,{className:(0,a.css)(l.default.menuGroup,i),ref:c}),n.createElement(n.Fragment,null,["function","string"].includes(typeof r)?n.createElement(p,{className:(0,a.css)(l.default.menuGroupTitle),id:s},r):r,t))},s=n.forwardRef(((e,t)=>n.createElement(r,Object.assign({},e,{innerRef:t}))));s.displayName="MenuGroup"},82212:(e,t,i)=>{"use strict";i.d(t,{P:()=>p});var o=i(65353),n=i(28416),l=i.n(n),a=i(38296),r=i(47680),s=i(69579),c=i(69121),d=i(62472);const f=e=>{var{children:t,className:i,onSelect:n,isOpen:f,selected:m,toggle:u,shouldFocusToggleOnSelect:g=!1,onOpenChange:v,onOpenChangeKeys:h=["Escape","Tab"],isPlain:b,innerRef:y,zIndex:E=9999,role:N="listbox",popperProps:R}=e,O=(0,o.__rest)(e,["children","className","onSelect","isOpen","selected","toggle","shouldFocusToggleOnSelect","onOpenChange","onOpenChangeKeys","isPlain","innerRef","zIndex","role","popperProps"]);const w=l().useRef(),L=l().useRef(),x=y||w,S="function"==typeof u||"function"!=typeof u&&!u.toggleRef?L:null==u?void 0:u.toggleRef;l().useEffect((()=>{const e=e=>{var t,i,o;f&&v&&((null===(t=x.current)||void 0===t?void 0:t.contains(e.target))||(null===(i=S.current)||void 0===i?void 0:i.contains(e.target)))&&h.includes(e.key)&&(e.preventDefault(),v(!1),null===(o=S.current)||void 0===o||o.focus())},t=e=>{var t,i,o;f&&(null===(t=S.current)||void 0===t?void 0:t.contains(e.target))&&0===e.detail&&setTimeout((()=>{var e;const t=null===(e=null==x?void 0:x.current)||void 0===e?void 0:e.querySelector("li button:not(:disabled),li input:not(:disabled)");t&&t.focus()}),0),f&&v&&!(null===(i=null==S?void 0:S.current)||void 0===i?void 0:i.contains(e.target))&&f&&!(null===(o=x.current)||void 0===o?void 0:o.contains(e.target))&&v(!1)};return window.addEventListener("keydown",e),window.addEventListener("click",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("click",t)}}),[f,x,S,v,h]);const _=l().createElement(r.v,Object.assign({role:N,className:(0,a.css)(i),ref:x,onSelect:(e,t)=>{n&&n(e,t),g&&S.current.focus()},isPlain:b,selected:m},(0,d.dp)(p.displayName,void 0!==O.ouiaId?O.ouiaId:(0,d.ql)(p.displayName),void 0===O.ouiaSafe||O.ouiaSafe),O),l().createElement(s.D,null,t));return l().createElement(c.Popper,Object.assign({trigger:"function"==typeof u?u(S):u.toggleNode,triggerRef:S,popper:_,popperRef:x,isVisible:f,zIndex:E},R))},p=l().forwardRef(((e,t)=>l().createElement(f,Object.assign({innerRef:t},e))));p.displayName="Select"},41309:(e,t,i)=>{"use strict";i.d(t,{E:()=>s});var o=i(65353),n=i(28416),l=i.n(n),a=i(38296),r=i(46820);const s=e=>{var{children:t,className:i,isAriaMultiselectable:n=!1}=e,s=(0,o.__rest)(e,["children","className","isAriaMultiselectable"]);return l().createElement(r.q,Object.assign({isAriaMultiselectable:n,className:(0,a.css)(i)},s),t)};s.displayName="SelectList"},92694:(e,t,i)=>{"use strict";i.d(t,{$:()=>c});var o=i(65353),n=i(28416),l=i.n(n),a=i(38296),r=i(49732);const s=e=>{var{children:t,className:i,innerRef:n,value:s}=e,c=(0,o.__rest)(e,["children","className","innerRef","value"]);return l().createElement(r.s,Object.assign({itemId:s,ref:n,className:(0,a.css)(i)},c),t)},c=l().forwardRef(((e,t)=>l().createElement(s,Object.assign({},e,{innerRef:t}))));c.displayName="SelectOption"},68596:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Select:()=>o.P,SelectGroup:()=>c,SelectList:()=>d.E,SelectOption:()=>f.$});var o=i(82212),n=i(65353),l=i(28416),a=i.n(l),r=i(38296),s=i(22025);const c=e=>{var{children:t,className:i,label:o}=e,l=(0,n.__rest)(e,["children","className","label"]);return a().createElement(s.k,Object.assign({className:(0,r.css)(i),label:o},l),t)};c.displayName="SelectGroup";var d=i(41309),f=i(92694)},35224:(e,t,i)=>{"use strict";i.d(t,{u:()=>u,D:()=>f});var o=i(65353),n=i(28416),l=i(86478),a=i(38296);const r=e=>{var{className:t,children:i,isLeftAligned:r}=e,s=(0,o.__rest)(e,["className","children","isLeftAligned"]);return n.createElement("div",Object.assign({className:(0,a.css)(l.default.tooltipContent,r&&l.default.modifiers.textAlignLeft,t)},s),i)};r.displayName="TooltipContent";const s=e=>{var{className:t}=e,i=(0,o.__rest)(e,["className"]);return n.createElement("div",Object.assign({className:(0,a.css)(l.default.tooltipArrow,t)},i))};s.displayName="TooltipArrow";var c=i(1774);const d={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var f,p=i(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(f||(f={}));let m=1;const u=e=>{var{content:t,position:i="top",trigger:f="mouseenter focus",isVisible:u=!1,isContentLeftAligned:g=!1,enableFlip:v=!0,className:h="",entryDelay:b=300,exitDelay:y=300,appendTo:E=(()=>document.body),zIndex:N=9999,minWidth:R,maxWidth:O=d.value,distance:w=15,aria:L="describedby",flipBehavior:x=["top","right","bottom","left","top","right","bottom"],id:S="pf-tooltip-"+m++,children:_,animationDuration:A=300,triggerRef:I,"aria-live":T=(I?"polite":"off"),onTooltipHidden:k=(()=>{})}=e,D=(0,o.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const C=f.includes("mouseenter"),P=f.includes("focus"),j=f.includes("click"),M="manual"===f,[B,z]=n.useState(!1),W=n.createRef();n.useEffect((()=>{u?F():G()}),[u]);const F=()=>{z(!0)},G=()=>{z(!1)},H={top:l.default.modifiers.top,bottom:l.default.modifiers.bottom,left:l.default.modifiers.left,right:l.default.modifiers.right,"top-start":l.default.modifiers.topLeft,"top-end":l.default.modifiers.topRight,"bottom-start":l.default.modifiers.bottomLeft,"bottom-end":l.default.modifiers.bottomRight,"left-start":l.default.modifiers.leftTop,"left-end":l.default.modifiers.leftBottom,"right-start":l.default.modifiers.rightTop,"right-end":l.default.modifiers.rightBottom},V=O!==d.value,q=n.createElement("div",Object.assign({"aria-live":T,className:(0,a.css)(l.default.tooltip,h),role:"tooltip",id:S,style:{maxWidth:V?O:null},ref:W},D),n.createElement(s,null),n.createElement(r,{isLeftAligned:g},t));return n.createElement(p.Popper,{trigger:"none"!==L&&B?"describedby"===L&&_&&_.props&&!_.props["aria-describedby"]?n.cloneElement(_,{"aria-describedby":S}):"labelledby"===L&&_.props&&!_.props["aria-labelledby"]?n.cloneElement(_,{"aria-labelledby":S}):_:_,triggerRef:I,popper:q,popperRef:W,minWidth:void 0!==R?R:"revert",appendTo:E,isVisible:B,positionModifiers:H,distance:w,placement:i,onMouseEnter:C&&F,onMouseLeave:C&&G,onPopperMouseEnter:C&&F,onPopperMouseLeave:C&&G,onFocus:P&&F,onBlur:P&&G,onDocumentClick:j&&((e,t)=>{B?G():e.target===t&&F()}),onDocumentKeyDown:M?null:e=>{M||e.key===c.yu.Escape&&B&&G()},onTriggerEnter:M?null:e=>{e.key===c.yu.Enter&&(B?G():F())},enableFlip:v,zIndex:N,flipBehavior:x,animationDuration:A,entryDelay:b,exitDelay:y,onHidden:k})};u.displayName="Tooltip"},40400:(e,t,i)=>{"use strict";i.d(t,{I:()=>a});var o=i(65353),n=i(28416);let l=0;function a({name:e,xOffset:t=0,yOffset:i=0,width:a,height:r,svgPath:s}){var c;return c=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{title:l,className:c}=e,d=(0,o.__rest)(e,["title","className"]),f=c?`pf-v5-svg ${c}`:"pf-v5-svg",p=Boolean(l),m=[t,i,a,r].join(" ");return n.createElement("svg",Object.assign({className:f,viewBox:m,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},d),p&&n.createElement("title",{id:this.id},l),n.createElement("path",{d:s}))}},c.displayName=e,c}},93174:(e,t,i)=>{"use strict";i.r(t),i.d(t,{AngleRightIcon:()=>l,AngleRightIconConfig:()=>n,default:()=>a});var o=i(40400);const n={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},l=(0,o.I)(n),a=l},83668:(e,t,i)=>{"use strict";i.d(t,{Mu:()=>n,ZP:()=>a,r7:()=>l});var o=i(40400);const n={name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:0,xOffset:0},l=(0,o.I)(n),a=l},86478:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o}),i(49854);const o={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},45467:()=>{},58392:()=>{},32857:()=>{},30187:()=>{},98379:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4609.01c0d30afcd41e3d78b8a6a289193d1f.js.map