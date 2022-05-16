/*! For license information please see 7903.1652700488068.769cbb08a2ab7fefa2fb.js.LICENSE.txt */
(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[7903],{2095:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const a=r(70655),n=a.__importStar(r(93264)),i=a.__importDefault(r(54918)),o=r(38296),l=r(23053);t.CardContext=n.createContext({cardId:"",isExpanded:!1}),t.Card=e=>{var{children:r=null,id:c="",className:s="",component:d="article",isHoverable:u=!1,isCompact:p=!1,isSelectable:f=!1,isSelectableRaised:m=!1,isSelected:y=!1,isDisabledRaised:h=!1,isFlat:g=!1,isExpanded:v=!1,isRounded:b=!1,isLarge:O=!1,isFullHeight:x=!1,isPlain:E=!1,ouiaId:w,ouiaSafe:C=!0}=e,_=a.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe"]);const P=d,j=l.useOUIAProps(t.Card.displayName,w,C);return p&&O&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),O=!1),n.createElement(t.CardContext.Provider,{value:{cardId:c,isExpanded:v}},n.createElement(P,Object.assign({id:c,className:o.css(i.default.card,p&&i.default.modifiers.compact,v&&i.default.modifiers.expanded,g&&i.default.modifiers.flat,b&&i.default.modifiers.rounded,O&&i.default.modifiers.displayLg,x&&i.default.modifiers.fullHeight,E&&i.default.modifiers.plain,h?o.css(i.default.modifiers.nonSelectableRaised):m?o.css(i.default.modifiers.selectableRaised,y&&i.default.modifiers.selectedRaised):f||u?o.css(i.default.modifiers.selectable,y&&i.default.modifiers.selected):"",s),tabIndex:f||m?"0":void 0},_,j),r))},t.Card.displayName="Card"},85962:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const a=r(70655),n=a.__importStar(r(93264)),i=a.__importDefault(r(54918)),o=r(38296);t.CardBody=e=>{var{children:t=null,className:r="",component:l="div",isFilled:c=!0}=e,s=a.__rest(e,["children","className","component","isFilled"]);const d=l;return n.createElement(d,Object.assign({className:o.css(i.default.cardBody,!c&&i.default.modifiers.noFill,r)},s),t)},t.CardBody.displayName="CardBody"},53754:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(93264);const n=r.n(a)().createContext("light")},14748:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var a=r(93264),n=r.n(a),i=r(94184),o=r.n(i),l=r(86706),c=r(53754),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},d=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,i=t.length;n<i;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const u=(0,l.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,r=e.params,a=void 0===r?{}:r,i=e.children,l=e.className,u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["path","params","children","className"]),p=function(){var e,r,n;if(null===(n=null===(r=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===r?void 0:r.$internal)||void 0===n?void 0:n.store){var i=window.insights.chrome.$internal.store.getState();if(t&&i)return t.split("/").reduce((function(e,t){var r,n;return 0===t.indexOf(":")?e.dynamic=s(s({},e.dynamic),((r={})["data-".concat((n=t.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[t.substr(1)],r)):e.staticPart=d(d([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[i.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),f=p.dynamic,m=p.staticPart;return n().createElement(c.Z.Consumer,null,(function(e){var t;void 0===e&&(e="light");var r=o()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:n().createElement("section",s({},u,f,{"page-type":m.join("-"),className:"".concat(o()(l,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)}),n().Children.map(i,(function(e){return n().cloneElement(e,{className:"pf-m-dark"})}))),light:n().createElement("section",s({},u,f,{"page-type":m.join("-"),className:"".concat(o()(l,"pf-l-page__main-section pf-c-page__main-section"))}),i)}[e]}))}))},80123:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(93264),n=r.n(a),i=r(94184),o=r.n(i),l=r(53754),c=function(){return c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};const s=function(e){var t=e.className,r=e.children,a=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["className","children"]),i=o()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return n().createElement(l.Z.Consumer,null,(function(e){var t,l;void 0===e&&(e="light");var s=o()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return n().createElement("section",c({},a,{className:"".concat(i," ").concat(s),"widget-type":"InsightsPageHeader"}),r)}))}},39173:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(93264),n=r.n(a),i=r(94184),o=r.n(i),l=r(89624);const c=function(e){var t=e.className,r=e.title,a=o()(t);return n().createElement(l.Title,{headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},r)}},94184:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var l in r)a.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},24561:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>s,aV:()=>c});var a=r(93264),n=function(){return n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)},i=function(e){var t=e.animate,r=e.backgroundColor,i=e.backgroundOpacity,o=e.baseUrl,l=e.children,c=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,p=e.interval,f=e.rtl,m=e.speed,y=e.style,h=e.title,g=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),v=u||Math.random().toString(36).substring(6),b=v+"-diff",O=v+"-animated-diff",x=v+"-aria",E=f?{transform:"scaleX(-1)"}:null,w="0; "+p+"; 1",C=m+"s";return(0,a.createElement)("svg",n({"aria-labelledby":x,role:"img",style:n(n({},y),E)},g),h?(0,a.createElement)("title",{id:x},h):null,(0,a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+b+")",style:{fill:"url("+o+"#"+O+")"}}),(0,a.createElement)("defs",null,(0,a.createElement)("clipPath",{id:b},l),(0,a.createElement)("linearGradient",{id:O},(0,a.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},t&&(0,a.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:w,dur:C,repeatCount:"indefinite"})),(0,a.createElement)("stop",{offset:"50%",stopColor:c,stopOpacity:s},t&&(0,a.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:w,dur:C,repeatCount:"indefinite"})),(0,a.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},t&&(0,a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:w,dur:C,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var o=function(e){return e.children?(0,a.createElement)(i,n({},e)):(0,a.createElement)(l,n({},e))},l=function(e){return(0,a.createElement)(o,n({viewBox:"0 0 476 124"},e),(0,a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},c=function(e){return(0,a.createElement)(o,n({viewBox:"0 0 400 110"},e),(0,a.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),(0,a.createElement)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),(0,a.createElement)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),(0,a.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),(0,a.createElement)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),(0,a.createElement)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))};const s=o}}]);