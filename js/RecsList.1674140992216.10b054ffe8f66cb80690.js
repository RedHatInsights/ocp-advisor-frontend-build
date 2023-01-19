/*! For license information please see RecsList.1674140992216.10b054ffe8f66cb80690.js.LICENSE.txt */
(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[9],{2095:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const n=a(70655),r=n.__importStar(a(92950)),i=n.__importDefault(a(54918)),l=a(38296),o=a(23053);t.CardContext=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),t.Card=e=>{var{children:a=null,id:c="",className:s="",component:d="article",isHoverable:u=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:p=!1,isSelected:h=!1,isDisabledRaised:g=!1,isFlat:b=!1,isExpanded:y=!1,isRounded:v=!1,isLarge:_=!1,isFullHeight:x=!1,isPlain:C=!1,ouiaId:E,ouiaSafe:O=!0,hasSelectableInput:w=!1,selectableInputAriaLabel:S,onSelectableInputChange:I=(()=>{})}=e,j=n.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const R=d,k=o.useOUIAProps(t.Card.displayName,E,O),[P,N]=r.useState(""),[L,M]=r.useState();f&&_&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),_=!1);const H=r.useRef(!1);return r.useEffect((()=>{S?M({"aria-label":S}):P?M({"aria-labelledby":P}):w&&!H.current&&(M({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[w,S,P]),r.createElement(t.CardContext.Provider,{value:{cardId:c,registerTitleId:e=>{N(e),H.current=!!e},isExpanded:y}},w&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${c}-input`},L,{type:"checkbox",checked:h,onChange:e=>I(c,e),disabled:g,tabIndex:-1})),r.createElement(R,Object.assign({id:c,className:l.css(i.default.card,f&&i.default.modifiers.compact,y&&i.default.modifiers.expanded,b&&i.default.modifiers.flat,v&&i.default.modifiers.rounded,_&&i.default.modifiers.displayLg,x&&i.default.modifiers.fullHeight,C&&i.default.modifiers.plain,g?l.css(i.default.modifiers.nonSelectableRaised):p?l.css(i.default.modifiers.selectableRaised,h&&i.default.modifiers.selectedRaised):m||u?l.css(i.default.modifiers.selectable,h&&i.default.modifiers.selected):"",s),tabIndex:m||p?"0":void 0},j,k),a))},t.Card.displayName="Card"},85962:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const n=a(70655),r=n.__importStar(a(92950)),i=n.__importDefault(a(54918)),l=a(38296);t.CardBody=e=>{var{children:t=null,className:a="",component:o="div",isFilled:c=!0}=e,s=n.__rest(e,["children","className","component","isFilled"]);const d=o;return r.createElement(d,Object.assign({className:l.css(i.default.cardBody,!c&&i.default.modifiers.noFill,a)},s),t)},t.CardBody.displayName="CardBody"},54918:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n}),a(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},89376:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(85893),r=a(94184),i=a.n(r),l=a(92950);const o=a.n(l)().createContext("light");var c=function(){return c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)};const s=function(e){var t=e.className,a=e.children,r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["className","children"]),l=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,n.jsx)(o.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var s=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,n.jsx)("section",c({},r,{className:"".concat(l," ").concat(s),"widget-type":"InsightsPageHeader"},{children:a}))}})}},52661:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(92950),r=a.n(n),i=a(2095),l=a(85962),o=a(24561);function c(){var e="/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/Loading/Loading.js",t=new Function("return this")(),a="__coverage__",n=t[a]||(t[a]={});n[e]&&"83a7ff3887c31a24d30ef8d3b747a83cc8222fcd"===n[e].hash||(n[e]={path:"/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/Loading/Loading.js",statementMap:{0:{start:{line:5,column:16},end:{line:11,column:1}},1:{start:{line:6,column:2},end:{line:10,column:9}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:16},end:{line:5,column:17}},loc:{start:{line:6,column:2},end:{line:10,column:9}},line:6}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"83a7ff3887c31a24d30ef8d3b747a83cc8222fcd"});var r=n[e];return c=function(){return r},r}c(),c().s[0]++;const s=function(){return c().f[0]++,c().s[1]++,r().createElement(i.Card,{ouiaId:"loading-skeleton"},r().createElement(l.CardBody,null,r().createElement(o.aV,null)))}},12036:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(92950),r=a.n(n),i=a(86896),l=a(89376),o=a(52661),c=a(30893),s=a(34348),d=a(55140);function u(){var e="/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/RecsList/index.js",t=new Function("return this")(),a="__coverage__",n=t[a]||(t[a]={});n[e]&&"6e6eb74d7f6dce2d8d3b74946a9f1c461726727a"===n[e].hash||(n[e]={path:"/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/RecsList/index.js",statementMap:{0:{start:{line:11,column:22},end:{line:13,column:1}},1:{start:{line:12,column:2},end:{line:12,column:66}},2:{start:{line:15,column:17},end:{line:41,column:1}},3:{start:{line:16,column:15},end:{line:16,column:24}},4:{start:{line:17,column:17},end:{line:17,column:28}},5:{start:{line:19,column:2},end:{line:23,column:4}},6:{start:{line:25,column:2},end:{line:40,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:27},end:{line:11,column:28}},loc:{start:{line:12,column:2},end:{line:12,column:66}},line:12},1:{name:"(anonymous_1)",decl:{start:{line:15,column:17},end:{line:15,column:18}},loc:{start:{line:15,column:23},end:{line:41,column:1}},line:15}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6e6eb74d7f6dce2d8d3b74946a9f1c461726727a"});var r=n[e];return u=function(){return r},r}u();var f=(u().s[0]++,(0,n.lazy)((function(){return u().f[0]++,u().s[1]++,Promise.all([a.e(437),a.e(764),a.e(114),a.e(181),a.e(418),a.e(397),a.e(601),a.e(427),a.e(369),a.e(384)]).then(a.bind(a,49246))})));u().s[2]++;const m=function(){u().f[1]++;var e=(u().s[3]++,(0,i.Z)()),t=(u().s[4]++,(0,d.Z)());return u().s[5]++,t.updateDocumentTitle(e.formatMessage(c.Z.documentTitle,{subnav:e.formatMessage(c.Z.recommendations)})),u().s[6]++,r().createElement(r().Fragment,null,r().createElement(l.Z,{className:"ins-c-recommendations-header"},r().createElement(s.Dx,{headingLevel:"h1",ouiaId:"page-header"},"".concat(e.formatMessage(c.Z.insightsHeader)," ").concat(e.formatMessage(c.Z.recommendations).toLowerCase()))),r().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},r().createElement(n.Suspense,{fallback:r().createElement(o.Z,null)},r().createElement(f,null))))}},94184:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},24561:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>s,aV:()=>c});var n=a(92950),r=function(){return r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},i=function(e){var t=e.animate,a=e.animateBegin,i=e.backgroundColor,l=e.backgroundOpacity,o=e.baseUrl,c=e.children,s=e.foregroundColor,d=e.foregroundOpacity,u=e.gradientRatio,f=e.gradientDirection,m=e.uniqueKey,p=e.interval,h=e.rtl,g=e.speed,b=e.style,y=e.title,v=e.beforeMask,_=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),x=m||Math.random().toString(36).substring(6),C=x+"-diff",E=x+"-animated-diff",O=x+"-aria",w=h?{transform:"scaleX(-1)"}:null,S="0; "+p+"; 1",I=g+"s",j="top-bottom"===f?"rotate(90)":void 0;return(0,n.createElement)("svg",r({"aria-labelledby":O,role:"img",style:r(r({},b),w)},_),y?(0,n.createElement)("title",{id:O},y):null,v&&(0,n.isValidElement)(v)?v:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+C+")",style:{fill:"url("+o+"#"+E+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:C},c),(0,n.createElement)("linearGradient",{id:E,gradientTransform:j},(0,n.createElement)("stop",{offset:"0%",stopColor:i,stopOpacity:l},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:S,dur:I,repeatCount:"indefinite",begin:a})),(0,n.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:d},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:S,dur:I,repeatCount:"indefinite",begin:a})),(0,n.createElement)("stop",{offset:"100%",stopColor:i,stopOpacity:l},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:S,dur:I,repeatCount:"indefinite",begin:a})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var l=function(e){return e.children?(0,n.createElement)(i,r({},e)):(0,n.createElement)(o,r({},e))},o=function(e){return(0,n.createElement)(l,r({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},c=function(e){return(0,n.createElement)(l,r({viewBox:"0 0 400 110"},e),(0,n.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),(0,n.createElement)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),(0,n.createElement)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),(0,n.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),(0,n.createElement)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),(0,n.createElement)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))};const s=l},80598:()=>{}}]);