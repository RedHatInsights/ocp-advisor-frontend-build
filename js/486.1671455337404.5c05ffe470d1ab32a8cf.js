/*! For license information please see 486.1671455337404.5c05ffe470d1ab32a8cf.js.LICENSE.txt */
(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[486],{2095:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const a=r(70655),n=a.__importStar(r(92950)),i=a.__importDefault(r(54918)),l=r(38296),o=r(23053);t.CardContext=n.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),t.Card=e=>{var{children:r=null,id:c="",className:s="",component:d="article",isHoverable:p=!1,isCompact:f=!1,isSelectable:u=!1,isSelectableRaised:m=!1,isSelected:h=!1,isDisabledRaised:g=!1,isFlat:y=!1,isExpanded:b=!1,isRounded:v=!1,isLarge:x=!1,isFullHeight:O=!1,isPlain:_=!1,ouiaId:C,ouiaSafe:E=!0,hasSelectableInput:w=!1,selectableInputAriaLabel:j,onSelectableInputChange:S=(()=>{})}=e,P=a.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const k=d,I=o.useOUIAProps(t.Card.displayName,C,E),[N,R]=n.useState(""),[A,B]=n.useState();f&&x&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),x=!1);const D=n.useRef(!1);return n.useEffect((()=>{j?B({"aria-label":j}):N?B({"aria-labelledby":N}):w&&!D.current&&(B({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[w,j,N]),n.createElement(t.CardContext.Provider,{value:{cardId:c,registerTitleId:e=>{R(e),D.current=!!e},isExpanded:b}},w&&n.createElement("input",Object.assign({className:"pf-screen-reader",id:`${c}-input`},A,{type:"checkbox",checked:h,onChange:e=>S(c,e),disabled:g,tabIndex:-1})),n.createElement(k,Object.assign({id:c,className:l.css(i.default.card,f&&i.default.modifiers.compact,b&&i.default.modifiers.expanded,y&&i.default.modifiers.flat,v&&i.default.modifiers.rounded,x&&i.default.modifiers.displayLg,O&&i.default.modifiers.fullHeight,_&&i.default.modifiers.plain,g?l.css(i.default.modifiers.nonSelectableRaised):m?l.css(i.default.modifiers.selectableRaised,h&&i.default.modifiers.selectedRaised):u||p?l.css(i.default.modifiers.selectable,h&&i.default.modifiers.selected):"",s),tabIndex:u||m?"0":void 0},P,I),r))},t.Card.displayName="Card"},85962:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const a=r(70655),n=a.__importStar(r(92950)),i=a.__importDefault(r(54918)),l=r(38296);t.CardBody=e=>{var{children:t=null,className:r="",component:o="div",isFilled:c=!0}=e,s=a.__rest(e,["children","className","component","isFilled"]);const d=o;return n.createElement(d,Object.assign({className:l.css(i.default.cardBody,!c&&i.default.modifiers.noFill,r)},s),t)},t.CardBody.displayName="CardBody"},54918:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a}),r(80598);const a={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},53754:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(92950);const n=r.n(a)().createContext("light")},14748:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var a=r(85893),n=r(92950),i=r.n(n),l=r(94184),o=r.n(l),c=r(86706),s=r(53754),d=function(){return d=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},d.apply(this,arguments)},p=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,i=t.length;n<i;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const f=(0,c.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,r=e.params,n=void 0===r?{}:r,l=e.children,c=e.className,f=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["path","params","children","className"]),u=function(){var e,r,a;if(null===(a=null===(r=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===r?void 0:r.$internal)||void 0===a?void 0:a.store){var i=window.insights.chrome.$internal.store.getState();if(t&&i)return t.split("/").reduce((function(e,t){var r,a;return 0===t.indexOf(":")?e.dynamic=d(d({},e.dynamic),((r={})["data-".concat((a=t.substr(1),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=n[t.substr(1)],r)):e.staticPart=p(p([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[i.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),m=u.dynamic,h=u.staticPart;return(0,a.jsx)(s.Z.Consumer,{children:function(e){var t;void 0===e&&(e="light");var r=o()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:(0,a.jsx)("section",d({},f,m,{"page-type":h.join("-"),className:"".concat(o()(c,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)},{children:i().Children.map(l,(function(e){return i().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,a.jsx)("section",d({},f,m,{"page-type":h.join("-"),className:"".concat(o()(c,"pf-l-page__main-section pf-c-page__main-section"))},{children:l}))}[e]}})}))},80123:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(85893),n=r(94184),i=r.n(n),l=r(53754),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};const c=function(e){var t=e.className,r=e.children,n=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["className","children"]),c=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,a.jsx)(l.Z.Consumer,{children:function(e){var t,l;void 0===e&&(e="light");var s=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return(0,a.jsx)("section",o({},n,{className:"".concat(c," ").concat(s),"widget-type":"InsightsPageHeader"},{children:r}))}})}},94184:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var o in r)a.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},24561:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>s,aV:()=>c});var a=r(92950),n=function(){return n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)},i=function(e){var t=e.animate,r=e.animateBegin,i=e.backgroundColor,l=e.backgroundOpacity,o=e.baseUrl,c=e.children,s=e.foregroundColor,d=e.foregroundOpacity,p=e.gradientRatio,f=e.gradientDirection,u=e.uniqueKey,m=e.interval,h=e.rtl,g=e.speed,y=e.style,b=e.title,v=e.beforeMask,x=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),O=u||Math.random().toString(36).substring(6),_=O+"-diff",C=O+"-animated-diff",E=O+"-aria",w=h?{transform:"scaleX(-1)"}:null,j="0; "+m+"; 1",S=g+"s",P="top-bottom"===f?"rotate(90)":void 0;return(0,a.createElement)("svg",n({"aria-labelledby":E,role:"img",style:n(n({},y),w)},x),b?(0,a.createElement)("title",{id:E},b):null,v&&(0,a.isValidElement)(v)?v:null,(0,a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+_+")",style:{fill:"url("+o+"#"+C+")"}}),(0,a.createElement)("defs",null,(0,a.createElement)("clipPath",{id:_},c),(0,a.createElement)("linearGradient",{id:C,gradientTransform:P},(0,a.createElement)("stop",{offset:"0%",stopColor:i,stopOpacity:l},t&&(0,a.createElement)("animate",{attributeName:"offset",values:-p+"; "+-p+"; 1",keyTimes:j,dur:S,repeatCount:"indefinite",begin:r})),(0,a.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:d},t&&(0,a.createElement)("animate",{attributeName:"offset",values:-p/2+"; "+-p/2+"; "+(1+p/2),keyTimes:j,dur:S,repeatCount:"indefinite",begin:r})),(0,a.createElement)("stop",{offset:"100%",stopColor:i,stopOpacity:l},t&&(0,a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+p),keyTimes:j,dur:S,repeatCount:"indefinite",begin:r})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var l=function(e){return e.children?(0,a.createElement)(i,n({},e)):(0,a.createElement)(o,n({},e))},o=function(e){return(0,a.createElement)(l,n({viewBox:"0 0 476 124"},e),(0,a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},c=function(e){return(0,a.createElement)(l,n({viewBox:"0 0 400 110"},e),(0,a.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),(0,a.createElement)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),(0,a.createElement)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),(0,a.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),(0,a.createElement)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),(0,a.createElement)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))};const s=l}}]);
//# sourceMappingURL=../sourcemaps/486.43fd9e9fab04c2329d7f6cb32ff50e29.js.map