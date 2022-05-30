"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[2552],{85991:(o,l,e)=>{l.a=void 0;const n=e(70655),t=n.__importStar(e(93264)),a=n.__importDefault(e(44303)),r=e(38296),f=e(23053);l.a=o=>{var{children:e=null,className:c="","aria-label":m="Breadcrumb",ouiaId:s,ouiaSafe:i=!0}=o,p=n.__rest(o,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=f.useOUIAProps(l.a.displayName,s,i);return t.createElement("nav",Object.assign({},p,{"aria-label":m,className:r.css(a.default.breadcrumb,c)},d),t.createElement("ol",{className:a.default.breadcrumbList},t.Children.map(e,((o,l)=>{const e=l>0;return t.isValidElement(o)?t.cloneElement(o,{showDivider:e}):o}))))},l.a.displayName="Breadcrumb"},49489:(o,l,e)=>{l.g=void 0;const n=e(70655),t=n.__importStar(e(93264)),a=n.__importDefault(e(95511)),r=n.__importDefault(e(44303)),f=e(38296);l.g=o=>{var{children:l=null,className:e="",to:c,isActive:m=!1,isDropdown:s=!1,showDivider:i,target:p,component:d="a",render:u}=o,O=n.__rest(o,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const _=d,C=m?"page":void 0,g=f.css(r.default.breadcrumbLink,m&&r.default.modifiers.current);return t.createElement("li",Object.assign({},O,{className:f.css(r.default.breadcrumbItem,e)}),i&&t.createElement("span",{className:r.default.breadcrumbItemDivider},t.createElement(a.default,null)),"button"===d&&t.createElement("button",{className:g,"aria-current":C,type:"button"},l),s&&t.createElement("span",{className:f.css(r.default.breadcrumbDropdown)},l),u&&u({className:g,ariaCurrent:C}),c&&!u&&t.createElement(_,{href:c,target:p,className:g,"aria-current":C},l),!c&&"button"!==d&&!s&&l)},l.g.displayName="BreadcrumbItem"},23218:(o,l,e)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.Label=void 0;const n=e(70655),t=n.__importStar(e(93264)),a=e(93264),r=n.__importDefault(e(83063)),f=n.__importDefault(e(72002)),c=e(16396),m=e(8045),s=e(38296),i=n.__importDefault(e(33606)),p=e(23053),d={blue:r.default.modifiers.blue,cyan:r.default.modifiers.cyan,green:r.default.modifiers.green,orange:r.default.modifiers.orange,purple:r.default.modifiers.purple,red:r.default.modifiers.red,grey:""};l.Label=o=>{var{children:l,className:e="",color:u="grey",variant:O="filled",isCompact:_=!1,isEditable:C=!1,editableProps:g,isTruncated:b=!1,tooltipPosition:w,icon:v,onClose:x,onEditCancel:y,onEditComplete:h,closeBtn:E,closeBtnAriaLabel:S,closeBtnProps:R,href:L,isOverflowLabel:I,render:M}=o,N=n.__rest(o,["children","className","color","variant","isCompact","isEditable","editableProps","isTruncated","tooltipPosition","icon","onClose","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[D,T]=a.useState(!1),[k,P]=a.useState(l),X=t.useRef(),j=t.useRef();t.useEffect((()=>(document.addEventListener("click",B),document.addEventListener("keydown",A),()=>{document.removeEventListener("click",B),document.removeEventListener("keydown",A)})));const B=o=>{D&&j&&j.current&&!j.current.contains(o.target)&&(j.current.value&&h&&h(j.current.value),T(!1))},A=o=>{const e=o.key;if((D||X&&X.current&&X.current.contains(o.target))&&(!D||j&&j.current&&j.current.contains(o.target))&&(!D||"Enter"!==e&&"Tab"!==e||(o.preventDefault(),o.stopImmediatePropagation(),j.current.value&&h&&h(j.current.value),T(!1)),D&&"Escape"===e&&(o.preventDefault(),o.stopImmediatePropagation(),j.current.value&&(j.current.value=l,y&&y(l)),T(!1)),!D&&"Enter"===e)){o.preventDefault(),o.stopImmediatePropagation(),T(!0);const l=o.target,e=document.createRange(),n=window.getSelection();e.selectNodeContents(l),e.collapse(!1),n.removeAllRanges(),n.addRange(e)}},z=I?"button":"span",$=E||t.createElement(c.Button,Object.assign({type:"button",variant:"plain",onClick:x,"aria-label":S||`Close ${l}`},R),t.createElement(i.default,null)),G=t.createRef(),V=t.useRef(),[Z,F]=t.useState(!1);p.useIsomorphicLayoutEffect((()=>{const o=C?X:G;D||F(o.current&&o.current.offsetWidth<o.current.scrollWidth)}),[D]);const W=t.createElement(t.Fragment,null,v&&t.createElement("span",{className:s.css(r.default.labelIcon)},v),b&&t.createElement("span",{ref:G,className:s.css(r.default.labelText)},l),!b&&l);t.useEffect((()=>{D&&j&&j.current&&j.current.focus()}),[j,D]);let U=t.createElement("span",{className:s.css(r.default.labelContent)},W);return L?U=t.createElement("a",{className:s.css(r.default.labelContent),href:L},W):C&&(U=t.createElement("button",Object.assign({ref:X,className:s.css(r.default.labelContent),onClick:o=>{T(!0),o.stopPropagation()}},g),W)),M?U=t.createElement(t.Fragment,null,Z&&t.createElement(m.Tooltip,{reference:V,content:l,position:w}),M({className:r.default.labelContent,content:W,componentRef:V})):Z&&(U=t.createElement(m.Tooltip,{content:l,position:w},U)),t.createElement(z,Object.assign({},N,{className:s.css(r.default.label,d[u],"outline"===O&&r.default.modifiers.outline,I&&r.default.modifiers.overflow,_&&r.default.modifiers.compact,C&&f.default.modifiers.editable,D&&r.default.modifiers.editableActive,e)}),!D&&U,!D&&x&&$,D&&t.createElement("input",Object.assign({className:s.css(r.default.labelContent),type:"text",id:"editable-input",ref:j,value:k,onChange:()=>{P(j.current.value)}},g)))},l.Label.displayName="Label"},49287:(o,l,e)=>{l.r=void 0;const n=e(70655),t=n.__importStar(e(93264)),a=n.__importDefault(e(3246)),r=e(38296),f=e(39383),c=n.__importStar(e(24936)),m=e(42319);l.r=o=>{var{children:l=null,className:e="",component:s="div",hasGutter:i,span:p=null,order:d,style:u}=o,O=n.__rest(o,["children","className","component","hasGutter","span","order","style"]);const _=[a.default.grid,p&&a.default.modifiers[`all_${p}Col`]],C=s;return Object.entries(f.DeviceSizes).forEach((([o,l])=>{const e=o,n=O[e];n&&_.push(a.default.modifiers[`all_${n}ColOn${l}`]),delete O[e]})),t.createElement(C,Object.assign({className:r.css(..._,i&&a.default.modifiers.gutter,e),style:u||d?Object.assign(Object.assign({},u),m.setBreakpointCssVars(d,c.l_grid_item_Order.name)):void 0},O),l)},l.r.displayName="Grid"},18038:(o,l,e)=>{l.P=void 0;const n=e(70655),t=n.__importStar(e(93264)),a=n.__importDefault(e(3246)),r=e(38296),f=e(39383),c=n.__importStar(e(24936)),m=e(42319);l.P=o=>{var{children:l=null,className:e="",component:s="div",span:i=null,rowSpan:p=null,offset:d=null,order:u,style:O}=o,_=n.__rest(o,["children","className","component","span","rowSpan","offset","order","style"]);const C=[a.default.gridItem,i&&a.default.modifiers[`${i}Col`],p&&a.default.modifiers[`${p}Row`],d&&a.default.modifiers[`offset_${d}Col`]],g=s;return Object.entries(f.DeviceSizes).forEach((([o,l])=>{const e=o,n=`${e}RowSpan`,t=`${e}Offset`,r=_[e],f=_[n],c=_[t];r&&C.push(a.default.modifiers[`${r}ColOn${l}`]),f&&C.push(a.default.modifiers[`${f}RowOn${l}`]),c&&C.push(a.default.modifiers[`offset_${c}ColOn${l}`]),delete _[e],delete _[n],delete _[t]})),t.createElement(g,Object.assign({className:r.css(...C,e),style:O||u?Object.assign(Object.assign({},O),m.setBreakpointCssVars(u,c.l_grid_item_Order.name)):void 0},_),l)},l.P.displayName="GridItem"},39383:(o,l)=>{var e,n;Object.defineProperty(l,"__esModule",{value:!0}),l.DeviceSizes=l.BaseSizes=void 0,(n=l.BaseSizes||(l.BaseSizes={})).xs="xs",n.sm="sm",n.md="md",n.lg="lg",n.xl="xl",n["2xl"]="2xl",n["3xl"]="3xl",n["4xl"]="4xl",(e=l.DeviceSizes||(l.DeviceSizes={})).sm="Sm",e.md="Md",e.lg="Lg",e.xl="Xl",e.xl2="_2xl"},9003:(o,l,e)=>{e.d(l,{sl:()=>t,LC:()=>a,ZP:()=>r});var n=e(40400);const t={name:"AngleDownIcon",height:512,width:320,svgPath:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",yOffset:0,xOffset:0},a=(0,n.IU)(t),r=a},80810:(o,l,e)=>{e.d(l,{xQ:()=>t,W1:()=>a,ZP:()=>r});var n=e(40400);const t={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},a=(0,n.IU)(t),r=a},31369:(o,l,e)=>{l.__esModule=!0,l.InfoCircleIconConfig={name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0},l.InfoCircleIcon=e(35183).createIcon(l.InfoCircleIconConfig),l.default=l.InfoCircleIcon},33606:(o,l,e)=>{l.__esModule=!0,l.TimesIconConfig={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},l.TimesIcon=e(35183).createIcon(l.TimesIconConfig),l.default=l.TimesIcon},44303:(o,l,e)=>{e.r(l),e.d(l,{default:()=>n}),e.e(8392).then(e.t.bind(e,58392,23));const n={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"}}},83063:(o,l,e)=>{e.r(l),e.d(l,{default:()=>n}),e.e(2014).then(e.t.bind(e,82014,23));const n={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",labelText:"pf-c-label__text",modifiers:{compact:"pf-m-compact",blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",outline:"pf-m-outline",overflow:"pf-m-overflow",add:"pf-m-add",editable:"pf-m-editable",editableActive:"pf-m-editable-active"}}},72002:(o,l,e)=>{e.r(l),e.d(l,{default:()=>n}),e.e(1064).then(e.t.bind(e,21064,23));const n={button:"pf-c-button",labelGroup:"pf-c-label-group",labelGroupClose:"pf-c-label-group__close",labelGroupLabel:"pf-c-label-group__label",labelGroupList:"pf-c-label-group__list",labelGroupListItem:"pf-c-label-group__list-item",labelGroupMain:"pf-c-label-group__main",labelGroupTextarea:"pf-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},3246:(o,l,e)=>{e.r(l),e.d(l,{default:()=>n}),e.e(2816).then(e.t.bind(e,72816,23));const n={grid:"pf-l-grid",gridItem:"pf-l-grid__item",modifiers:{all_1Col:"pf-m-all-1-col",all_2Col:"pf-m-all-2-col",all_3Col:"pf-m-all-3-col",all_4Col:"pf-m-all-4-col",all_5Col:"pf-m-all-5-col",all_6Col:"pf-m-all-6-col",all_7Col:"pf-m-all-7-col",all_8Col:"pf-m-all-8-col",all_9Col:"pf-m-all-9-col",all_10Col:"pf-m-all-10-col",all_11Col:"pf-m-all-11-col",all_12Col:"pf-m-all-12-col",all_1ColOnSm:"pf-m-all-1-col-on-sm",all_2ColOnSm:"pf-m-all-2-col-on-sm",all_3ColOnSm:"pf-m-all-3-col-on-sm",all_4ColOnSm:"pf-m-all-4-col-on-sm",all_5ColOnSm:"pf-m-all-5-col-on-sm",all_6ColOnSm:"pf-m-all-6-col-on-sm",all_7ColOnSm:"pf-m-all-7-col-on-sm",all_8ColOnSm:"pf-m-all-8-col-on-sm",all_9ColOnSm:"pf-m-all-9-col-on-sm",all_10ColOnSm:"pf-m-all-10-col-on-sm",all_11ColOnSm:"pf-m-all-11-col-on-sm",all_12ColOnSm:"pf-m-all-12-col-on-sm",all_1ColOnMd:"pf-m-all-1-col-on-md",all_2ColOnMd:"pf-m-all-2-col-on-md",all_3ColOnMd:"pf-m-all-3-col-on-md",all_4ColOnMd:"pf-m-all-4-col-on-md",all_5ColOnMd:"pf-m-all-5-col-on-md",all_6ColOnMd:"pf-m-all-6-col-on-md",all_7ColOnMd:"pf-m-all-7-col-on-md",all_8ColOnMd:"pf-m-all-8-col-on-md",all_9ColOnMd:"pf-m-all-9-col-on-md",all_10ColOnMd:"pf-m-all-10-col-on-md",all_11ColOnMd:"pf-m-all-11-col-on-md",all_12ColOnMd:"pf-m-all-12-col-on-md",all_1ColOnLg:"pf-m-all-1-col-on-lg",all_2ColOnLg:"pf-m-all-2-col-on-lg",all_3ColOnLg:"pf-m-all-3-col-on-lg",all_4ColOnLg:"pf-m-all-4-col-on-lg",all_5ColOnLg:"pf-m-all-5-col-on-lg",all_6ColOnLg:"pf-m-all-6-col-on-lg",all_7ColOnLg:"pf-m-all-7-col-on-lg",all_8ColOnLg:"pf-m-all-8-col-on-lg",all_9ColOnLg:"pf-m-all-9-col-on-lg",all_10ColOnLg:"pf-m-all-10-col-on-lg",all_11ColOnLg:"pf-m-all-11-col-on-lg",all_12ColOnLg:"pf-m-all-12-col-on-lg",all_1ColOnXl:"pf-m-all-1-col-on-xl",all_2ColOnXl:"pf-m-all-2-col-on-xl",all_3ColOnXl:"pf-m-all-3-col-on-xl",all_4ColOnXl:"pf-m-all-4-col-on-xl",all_5ColOnXl:"pf-m-all-5-col-on-xl",all_6ColOnXl:"pf-m-all-6-col-on-xl",all_7ColOnXl:"pf-m-all-7-col-on-xl",all_8ColOnXl:"pf-m-all-8-col-on-xl",all_9ColOnXl:"pf-m-all-9-col-on-xl",all_10ColOnXl:"pf-m-all-10-col-on-xl",all_11ColOnXl:"pf-m-all-11-col-on-xl",all_12ColOnXl:"pf-m-all-12-col-on-xl",all_1ColOn_2xl:"pf-m-all-1-col-on-2xl",all_2ColOn_2xl:"pf-m-all-2-col-on-2xl",all_3ColOn_2xl:"pf-m-all-3-col-on-2xl",all_4ColOn_2xl:"pf-m-all-4-col-on-2xl",all_5ColOn_2xl:"pf-m-all-5-col-on-2xl",all_6ColOn_2xl:"pf-m-all-6-col-on-2xl",all_7ColOn_2xl:"pf-m-all-7-col-on-2xl",all_8ColOn_2xl:"pf-m-all-8-col-on-2xl",all_9ColOn_2xl:"pf-m-all-9-col-on-2xl",all_10ColOn_2xl:"pf-m-all-10-col-on-2xl",all_11ColOn_2xl:"pf-m-all-11-col-on-2xl",all_12ColOn_2xl:"pf-m-all-12-col-on-2xl","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col","4Col":"pf-m-4-col","5Col":"pf-m-5-col","6Col":"pf-m-6-col","7Col":"pf-m-7-col","8Col":"pf-m-8-col","9Col":"pf-m-9-col","10Col":"pf-m-10-col","11Col":"pf-m-11-col","12Col":"pf-m-12-col",offset_1Col:"pf-m-offset-1-col",offset_2Col:"pf-m-offset-2-col",offset_3Col:"pf-m-offset-3-col",offset_4Col:"pf-m-offset-4-col",offset_5Col:"pf-m-offset-5-col",offset_6Col:"pf-m-offset-6-col",offset_7Col:"pf-m-offset-7-col",offset_8Col:"pf-m-offset-8-col",offset_9Col:"pf-m-offset-9-col",offset_10Col:"pf-m-offset-10-col",offset_11Col:"pf-m-offset-11-col",offset_12Col:"pf-m-offset-12-col","1Row":"pf-m-1-row","2Row":"pf-m-2-row","3Row":"pf-m-3-row","4Row":"pf-m-4-row","5Row":"pf-m-5-row","6Row":"pf-m-6-row","7Row":"pf-m-7-row","8Row":"pf-m-8-row","9Row":"pf-m-9-row","10Row":"pf-m-10-row","11Row":"pf-m-11-row","12Row":"pf-m-12-row","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm","4ColOnSm":"pf-m-4-col-on-sm","5ColOnSm":"pf-m-5-col-on-sm","6ColOnSm":"pf-m-6-col-on-sm","7ColOnSm":"pf-m-7-col-on-sm","8ColOnSm":"pf-m-8-col-on-sm","9ColOnSm":"pf-m-9-col-on-sm","10ColOnSm":"pf-m-10-col-on-sm","11ColOnSm":"pf-m-11-col-on-sm","12ColOnSm":"pf-m-12-col-on-sm",offset_1ColOnSm:"pf-m-offset-1-col-on-sm",offset_2ColOnSm:"pf-m-offset-2-col-on-sm",offset_3ColOnSm:"pf-m-offset-3-col-on-sm",offset_4ColOnSm:"pf-m-offset-4-col-on-sm",offset_5ColOnSm:"pf-m-offset-5-col-on-sm",offset_6ColOnSm:"pf-m-offset-6-col-on-sm",offset_7ColOnSm:"pf-m-offset-7-col-on-sm",offset_8ColOnSm:"pf-m-offset-8-col-on-sm",offset_9ColOnSm:"pf-m-offset-9-col-on-sm",offset_10ColOnSm:"pf-m-offset-10-col-on-sm",offset_11ColOnSm:"pf-m-offset-11-col-on-sm",offset_12ColOnSm:"pf-m-offset-12-col-on-sm","1RowOnSm":"pf-m-1-row-on-sm","2RowOnSm":"pf-m-2-row-on-sm","3RowOnSm":"pf-m-3-row-on-sm","4RowOnSm":"pf-m-4-row-on-sm","5RowOnSm":"pf-m-5-row-on-sm","6RowOnSm":"pf-m-6-row-on-sm","7RowOnSm":"pf-m-7-row-on-sm","8RowOnSm":"pf-m-8-row-on-sm","9RowOnSm":"pf-m-9-row-on-sm","10RowOnSm":"pf-m-10-row-on-sm","11RowOnSm":"pf-m-11-row-on-sm","12RowOnSm":"pf-m-12-row-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md","4ColOnMd":"pf-m-4-col-on-md","5ColOnMd":"pf-m-5-col-on-md","6ColOnMd":"pf-m-6-col-on-md","7ColOnMd":"pf-m-7-col-on-md","8ColOnMd":"pf-m-8-col-on-md","9ColOnMd":"pf-m-9-col-on-md","10ColOnMd":"pf-m-10-col-on-md","11ColOnMd":"pf-m-11-col-on-md","12ColOnMd":"pf-m-12-col-on-md",offset_1ColOnMd:"pf-m-offset-1-col-on-md",offset_2ColOnMd:"pf-m-offset-2-col-on-md",offset_3ColOnMd:"pf-m-offset-3-col-on-md",offset_4ColOnMd:"pf-m-offset-4-col-on-md",offset_5ColOnMd:"pf-m-offset-5-col-on-md",offset_6ColOnMd:"pf-m-offset-6-col-on-md",offset_7ColOnMd:"pf-m-offset-7-col-on-md",offset_8ColOnMd:"pf-m-offset-8-col-on-md",offset_9ColOnMd:"pf-m-offset-9-col-on-md",offset_10ColOnMd:"pf-m-offset-10-col-on-md",offset_11ColOnMd:"pf-m-offset-11-col-on-md",offset_12ColOnMd:"pf-m-offset-12-col-on-md","1RowOnMd":"pf-m-1-row-on-md","2RowOnMd":"pf-m-2-row-on-md","3RowOnMd":"pf-m-3-row-on-md","4RowOnMd":"pf-m-4-row-on-md","5RowOnMd":"pf-m-5-row-on-md","6RowOnMd":"pf-m-6-row-on-md","7RowOnMd":"pf-m-7-row-on-md","8RowOnMd":"pf-m-8-row-on-md","9RowOnMd":"pf-m-9-row-on-md","10RowOnMd":"pf-m-10-row-on-md","11RowOnMd":"pf-m-11-row-on-md","12RowOnMd":"pf-m-12-row-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg","4ColOnLg":"pf-m-4-col-on-lg","5ColOnLg":"pf-m-5-col-on-lg","6ColOnLg":"pf-m-6-col-on-lg","7ColOnLg":"pf-m-7-col-on-lg","8ColOnLg":"pf-m-8-col-on-lg","9ColOnLg":"pf-m-9-col-on-lg","10ColOnLg":"pf-m-10-col-on-lg","11ColOnLg":"pf-m-11-col-on-lg","12ColOnLg":"pf-m-12-col-on-lg",offset_1ColOnLg:"pf-m-offset-1-col-on-lg",offset_2ColOnLg:"pf-m-offset-2-col-on-lg",offset_3ColOnLg:"pf-m-offset-3-col-on-lg",offset_4ColOnLg:"pf-m-offset-4-col-on-lg",offset_5ColOnLg:"pf-m-offset-5-col-on-lg",offset_6ColOnLg:"pf-m-offset-6-col-on-lg",offset_7ColOnLg:"pf-m-offset-7-col-on-lg",offset_8ColOnLg:"pf-m-offset-8-col-on-lg",offset_9ColOnLg:"pf-m-offset-9-col-on-lg",offset_10ColOnLg:"pf-m-offset-10-col-on-lg",offset_11ColOnLg:"pf-m-offset-11-col-on-lg",offset_12ColOnLg:"pf-m-offset-12-col-on-lg","1RowOnLg":"pf-m-1-row-on-lg","2RowOnLg":"pf-m-2-row-on-lg","3RowOnLg":"pf-m-3-row-on-lg","4RowOnLg":"pf-m-4-row-on-lg","5RowOnLg":"pf-m-5-row-on-lg","6RowOnLg":"pf-m-6-row-on-lg","7RowOnLg":"pf-m-7-row-on-lg","8RowOnLg":"pf-m-8-row-on-lg","9RowOnLg":"pf-m-9-row-on-lg","10RowOnLg":"pf-m-10-row-on-lg","11RowOnLg":"pf-m-11-row-on-lg","12RowOnLg":"pf-m-12-row-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl","4ColOnXl":"pf-m-4-col-on-xl","5ColOnXl":"pf-m-5-col-on-xl","6ColOnXl":"pf-m-6-col-on-xl","7ColOnXl":"pf-m-7-col-on-xl","8ColOnXl":"pf-m-8-col-on-xl","9ColOnXl":"pf-m-9-col-on-xl","10ColOnXl":"pf-m-10-col-on-xl","11ColOnXl":"pf-m-11-col-on-xl","12ColOnXl":"pf-m-12-col-on-xl",offset_1ColOnXl:"pf-m-offset-1-col-on-xl",offset_2ColOnXl:"pf-m-offset-2-col-on-xl",offset_3ColOnXl:"pf-m-offset-3-col-on-xl",offset_4ColOnXl:"pf-m-offset-4-col-on-xl",offset_5ColOnXl:"pf-m-offset-5-col-on-xl",offset_6ColOnXl:"pf-m-offset-6-col-on-xl",offset_7ColOnXl:"pf-m-offset-7-col-on-xl",offset_8ColOnXl:"pf-m-offset-8-col-on-xl",offset_9ColOnXl:"pf-m-offset-9-col-on-xl",offset_10ColOnXl:"pf-m-offset-10-col-on-xl",offset_11ColOnXl:"pf-m-offset-11-col-on-xl",offset_12ColOnXl:"pf-m-offset-12-col-on-xl","1RowOnXl":"pf-m-1-row-on-xl","2RowOnXl":"pf-m-2-row-on-xl","3RowOnXl":"pf-m-3-row-on-xl","4RowOnXl":"pf-m-4-row-on-xl","5RowOnXl":"pf-m-5-row-on-xl","6RowOnXl":"pf-m-6-row-on-xl","7RowOnXl":"pf-m-7-row-on-xl","8RowOnXl":"pf-m-8-row-on-xl","9RowOnXl":"pf-m-9-row-on-xl","10RowOnXl":"pf-m-10-row-on-xl","11RowOnXl":"pf-m-11-row-on-xl","12RowOnXl":"pf-m-12-row-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl","4ColOn_2xl":"pf-m-4-col-on-2xl","5ColOn_2xl":"pf-m-5-col-on-2xl","6ColOn_2xl":"pf-m-6-col-on-2xl","7ColOn_2xl":"pf-m-7-col-on-2xl","8ColOn_2xl":"pf-m-8-col-on-2xl","9ColOn_2xl":"pf-m-9-col-on-2xl","10ColOn_2xl":"pf-m-10-col-on-2xl","11ColOn_2xl":"pf-m-11-col-on-2xl","12ColOn_2xl":"pf-m-12-col-on-2xl",offset_1ColOn_2xl:"pf-m-offset-1-col-on-2xl",offset_2ColOn_2xl:"pf-m-offset-2-col-on-2xl",offset_3ColOn_2xl:"pf-m-offset-3-col-on-2xl",offset_4ColOn_2xl:"pf-m-offset-4-col-on-2xl",offset_5ColOn_2xl:"pf-m-offset-5-col-on-2xl",offset_6ColOn_2xl:"pf-m-offset-6-col-on-2xl",offset_7ColOn_2xl:"pf-m-offset-7-col-on-2xl",offset_8ColOn_2xl:"pf-m-offset-8-col-on-2xl",offset_9ColOn_2xl:"pf-m-offset-9-col-on-2xl",offset_10ColOn_2xl:"pf-m-offset-10-col-on-2xl",offset_11ColOn_2xl:"pf-m-offset-11-col-on-2xl",offset_12ColOn_2xl:"pf-m-offset-12-col-on-2xl","1RowOn_2xl":"pf-m-1-row-on-2xl","2RowOn_2xl":"pf-m-2-row-on-2xl","3RowOn_2xl":"pf-m-3-row-on-2xl","4RowOn_2xl":"pf-m-4-row-on-2xl","5RowOn_2xl":"pf-m-5-row-on-2xl","6RowOn_2xl":"pf-m-6-row-on-2xl","7RowOn_2xl":"pf-m-7-row-on-2xl","8RowOn_2xl":"pf-m-8-row-on-2xl","9RowOn_2xl":"pf-m-9-row-on-2xl","10RowOn_2xl":"pf-m-10-row-on-2xl","11RowOn_2xl":"pf-m-11-row-on-2xl","12RowOn_2xl":"pf-m-12-row-on-2xl",gutter:"pf-m-gutter"}}},28058:(o,l)=>{l.RJ={name:"--pf-global--info-color--100",value:"#2b9af3",var:"var(--pf-global--info-color--100)"},l.RJ},24936:(o,l)=>{l.__esModule=!0,l.l_grid_item_Order={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"},l.default=l.l_grid_item_Order},26899:function(o,l,e){var n=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(l,"__esModule",{value:!0});var t=n(e(93264)),a=e(39371);l.default=function(o){var l=o.date,e=o.type,n=void 0===e?"relative":e,r=o.extraTitle,f=o.tooltipProps,c=l instanceof Date?l:new Date(l),m=null==l||"Invalid Date"===c.toString()?"invalid":n;return t.default.createElement(t.default.Fragment,null,(0,a.dateByType)(m,f,r)(c))}},39371:function(o,l,e){var n=this&&this.__assign||function(){return n=Object.assign||function(o){for(var l,e=1,n=arguments.length;e<n;e++)for(var t in l=arguments[e])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},n.apply(this,arguments)},t=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(l,"__esModule",{value:!0}),l.dateByType=l.dateStringByType=l.addTooltip=void 0;var a=t(e(93264)),r=e(89624),f=36e5,c=24*f,m=30*c,s=365*c,i=function(o,l){return"".concat(o," ").concat(o>1?"".concat(l,"s"):l," ago")},p=[{rightBound:1/0,description:function(o){return i(Math.round(o/s),"year")}},{rightBound:s,description:function(o){return i(Math.round(o/m),"month")}},{rightBound:m,description:function(o){return i(Math.round(o/c),"day")}},{rightBound:c,description:function(o){return i(Math.round(o/f),"hour")}},{rightBound:f,description:function(o){return i(Math.round(o/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],d=function(o){return o.toUTCString().split(",")[1].slice(0,-7).trim()};l.addTooltip=function(o,l,e,t){return void 0===t&&(t=""),a.default.createElement(r.Tooltip,n({},e,{content:a.default.createElement("div",null,t,o)}),l)},l.dateStringByType=function(o){return{exact:function(o){return d(o)+" UTC"},onlyDate:function(o){return d(o).slice(0,-6)},relative:function(o){return p.reduce((function(l,e){return e.rightBound>Date.now()-o.getTime()?e.description(Date.now()-o.getTime()):l}),d(o))},invalid:function(){return"Invalid date"}}[o]},l.dateByType=function(o,e,n){return{exact:function(e){return(0,l.dateStringByType)(o)(e)},onlyDate:function(e){return(0,l.dateStringByType)(o)(e)},relative:function(t){return(0,l.addTooltip)((0,l.dateStringByType)("exact")(t),a.default.createElement("span",null,(0,l.dateStringByType)(o)(t)),e,n)},invalid:function(){return"Invalid date"}}[o]}},22663:(o,l,e)=>{e.d(l,{Z:()=>i});var n=e(93264),t=e.n(n),a=e(54025),r=e(89624),f=e(94184),c=e.n(f),m=function(){return m=Object.assign||function(o){for(var l,e=1,n=arguments.length;e<n;e++)for(var t in l=arguments[e])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},m.apply(this,arguments)},s=function(o){var l=o.appName,e=o.scope,n=o.module,f=o.fallback,s=void 0===f?t().createElement(r.Bullseye,null,t().createElement(r.Spinner,{size:"xl"})):f,i=o.innerRef,p=o.className,d=o.component,u=void 0===d?"section":d,O=function(o,l){var e={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&l.indexOf(n)<0&&(e[n]=o[n]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(o);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(e[n[t]]=o[n[t]])}return e}(o,["appName","scope","module","fallback","innerRef","className","component"]);return t().createElement(u,{className:c()(p,l)},t().createElement(a.ScalprumComponent,m({className:p,appName:l,module:n,scope:null!=e?e:l,ErrorComponent:s,ref:i,fallback:s},O)))};const i=t().forwardRef((function(o,l){return t().createElement(s,m({innerRef:l},o))}))},72729:(o,l,e)=>{e.d(l,{Z:()=>p});var n=e(97857),t=e(28955),a=e(25280),r=e(40393),f=e(89624),c=e(93264),m=e.n(c),s=function(){return s=Object.assign||function(o){for(var l,e=1,n=arguments.length;e<n;e++)for(var t in l=arguments[e])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},s.apply(this,arguments)},i={1:{icon:m().createElement(n.II,null),text:"Low",color:"blue"},2:{icon:m().createElement(r.Qv,null),text:"Moderate",color:void 0},3:{icon:m().createElement(t.DW,null),text:"Important",color:"orange"},4:{icon:m().createElement(a.HX,null),text:"Critical",color:"red"}};const p=function(o){var l=o.value,e=void 0===l?1:l,n=o.text,t=o.hideIcon,a=(o.className,o.rest),r=function(o,l){var e={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&l.indexOf(n)<0&&(e[n]=o[n]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(o);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(e[n[t]]=o[n[t]])}return e}(o,["value","text","hideIcon","className","rest"]);return m().createElement(f.Label,s({},a,r,{className:2===e?"ins-c-label-2":"",color:i[e].color,icon:!t&&i[e].icon}),n||i[e].text)}},56021:(o,l,e)=>{e.d(l,{Z:()=>h});var n=e(93264),t=e.n(n),a=e(89624),r=e(9003),f=e(93174),c=e(31267),m=e(97138),s=e(94184),i=e.n(s),p=function(){return p=Object.assign||function(o){for(var l,e=1,n=arguments.length;e<n;e++)for(var t in l=arguments[e])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},p.apply(this,arguments)},d=function(o,l,e){if(e||2===arguments.length)for(var n,t=0,a=l.length;t<a;t++)!n&&t in l||(n||(n=Array.prototype.slice.call(l,0,t)),n[t]=l[t]);return o.concat(n||Array.prototype.slice.call(l))};function u(o){return void 0!==o.label}var O=function(o,l){var e,n,a,r,f,c="object"==typeof o&&null!==typeof o&&"function"==typeof(null===(e=o)||void 0===e?void 0:e.onClick)?function(e){var n;return null===(n=o)||void 0===n?void 0:n.onClick(e,o,l)}:void 0;return p(p({},null===(n=o)||void 0===n?void 0:n.props),{onClick:c,component:(null===(r=null===(a=o)||void 0===a?void 0:a.props)||void 0===r?void 0:r.component)||(t().isValidElement(o.label||o)?"div":"button"),children:"object"==typeof o&&null!==typeof o?null===(f=o)||void 0===f?void 0:f.label:o})};const _=function(o){var l,e=o.actions,r=void 0===e?[]:e,f=o.overflowActions,c=void 0===f?[]:f,s=o.onSelect,_=void 0===s?function(){}:s,C=o.dropdownProps,g=void 0===C?{}:C,b=o.kebabToggleProps,w=o.exportConfig,v=(0,n.useState)(!1),x=v[0],y=v[1],h=function(o){return y(o)},E=r[0],S=r.slice(1),R=d(d(d(d([],E?[t().createElement(a.DropdownItem,p({key:"first-action"},O(E,"first-action"),{className:i()("ins-c-primary-toolbar__first-action",u(E)?null===(l=null==E?void 0:E.props)||void 0===l?void 0:l.className:void 0)}))]:[],!0),S.map((function(o,l){var e,n,r;return t().createElement(a.DropdownItem,p({key:(null===(e=o)||void 0===e?void 0:e.key)||(null===(r=null===(n=o)||void 0===n?void 0:n.props)||void 0===r?void 0:r.key)||l},O(o,l)))})),!0),r.length>0&&c.length>0?[t().createElement(a.DropdownSeparator,{key:"separator",className:"ins-c-primary-toolbar__overflow-actions-separator"})]:[],!0),c.map((function(o,l){return function(o,l){var e=o;return t().createElement(a.DropdownItem,p({},e.props,{className:"ins-c-primary-toolbar__overflow-actions",key:e.value||e.key||"".concat(l,"-overflow"),component:e.props&&e.props.component||t().isValidElement(e.label||o)?"div":"button",onClick:function(o){return e.onClick&&e.onClick(o,e,l)}}),e.label||o)}(o,l)})),!0);return t().createElement(n.Fragment,null,E&&t().createElement(a.ToolbarItem,{className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},u(E)?t().createElement(a.Button,p({ouiaId:"".concat(E.label)},E.props,{onClick:E.onClick||E.props&&E.props.onClick||void 0}),E.label):E),w&&(w.extraItems||w.onSelect)&&t().createElement(a.ToolbarItem,{className:"pf-m-spacer-sm"},t().createElement(m.Z,p({},w))),(r&&(null==r?void 0:r.length)>0||c.length>0)&&t().createElement(a.ToolbarItem,{className:"".concat(r.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},t().createElement(a.Dropdown,p({},g,{isOpen:x,isPlain:!0,onSelect:function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];_&&_.apply(void 0,o),h(!1)},ouiaId:"Actions",toggle:t().createElement(a.KebabToggle,p({},b,{onToggle:function(o){h(o)}})),dropdownItems:R}))))};var C=e(48799),g=e(18213),b=e(51812),w=e(44610),v=e(60532);const x=function(o){var l=o.direction,e=void 0===l?c.SortByDirection.asc:l,n=o.onSortChange,r=void 0===n?function(){}:n;return t().createElement(a.Button,{variant:"plain",onClick:function(o){return r(o,function(o){return o===c.SortByDirection.asc?c.SortByDirection.desc:c.SortByDirection.asc}(e))}},e===c.SortByDirection.asc?t().createElement(w.um,{size:"sm"}):t().createElement(v.WJ,{size:"sm"}))};var y=function(){return y=Object.assign||function(o){for(var l,e=1,n=arguments.length;e<n;e++)for(var t in l=arguments[e])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},y.apply(this,arguments)};const h=function(o){var l,e=o.id,n=o.className,m=o.toggleIsExpanded,s=o.bulkSelect,i=o.filterConfig,p=o.dedicatedAction,d=o.actionsConfig,u=o.sortByConfig,O=o.pagination,w=o.activeFiltersConfig,v=o.children,h=o.exportConfig,E=o.expandAll,S=o.useMobileLayout,R=function(o,l){var e={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&l.indexOf(n)<0&&(e[n]=o[n]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(o);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(e[n[t]]=o[n[t]])}return e}(o,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),L=function(o,l,e){if(e||2===arguments.length)for(var n,t=0,a=l.length;t<a;t++)!n&&t in l||(n||(n=Array.prototype.slice.call(l,0,t)),n[t]=l[t]);return o.concat(n||Array.prototype.slice.call(l))}([],u?[{label:"Sort order ASC",props:{isDisabled:u.direction===c.SortByDirection.asc},onClick:function(o){return u.onSortChange&&u.onSortChange(o,c.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:u.direction===c.SortByDirection.desc},onClick:function(o){return u.onSortChange&&u.onSortChange(o,c.SortByDirection.desc)}}]:[],!0);return t().createElement(a.Toolbar,y({},R,{className:"".concat(n||""," ins-c-primary-toolbar"),toggleIsExpanded:m,id:e?"".concat(e):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"}),t().createElement(a.ToolbarContent,null,(E||s||i||p)&&t().createElement(a.ToolbarGroup,{className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},E&&t().createElement(a.ToolbarItem,null,(l=E,t().isValidElement(l)?E:t().createElement(a.Button,y({},E.buttonProps,{variant:"plain","aria-label":"".concat(E.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(o){return E.onClick(o,!E.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:E.isDisabled}),t().createElement(a.ToolbarExpandIconWrapper,null,E.isAllExpanded?t().createElement(r.LC,null):t().createElement(f.oR,null))))),s&&t().createElement(a.ToolbarItem,null,t().isValidElement(s)?s:t().createElement(C.Z,y({ouiaId:"BulkSelect"},s))),i&&t().createElement(a.ToolbarItem,{className:"ins-c-primary-toolbar__filter"},t().isValidElement(i)?i:t().createElement(g.Z,y({useMobileLayout:S},i))),p&&t().createElement(a.ToolbarItem,null,p)),t().isValidElement(d)?d:(d&&d.actions&&d.actions.length>0||u||h)&&t().createElement(_,y({},d||{},{exportConfig:h,overflowActions:L})),u&&t().createElement(a.ToolbarItem,{className:"ins-c-primary-toolbar__sort-by"},t().isValidElement(u)?u:t().createElement(x,y({},u))),v,O&&t().createElement(a.ToolbarItem,{className:"ins-c-primary-toolbar__pagination"},t().isValidElement(O)?O:t().createElement(a.Pagination,y({isCompact:!0,ouiaId:"CompactPagination"},O)))),w&&t().isValidElement(w)?t().createElement(a.ToolbarContent,null,t().createElement(a.ToolbarItem,null,w)):void 0!==(null==w?void 0:w.filters)&&(w.filters.length>0||!0===w.showDeleteButton)&&t().createElement(a.ToolbarContent,null,t().createElement(a.ToolbarItem,null,t().createElement(b.Z,y({},w)))))}},35664:(o,l,e)=>{e.d(l,{Z:()=>m});var n=e(93264),t=e.n(n),a=e(89624),r=e(94184),f=e.n(r),c=function(){return c=Object.assign||function(o){for(var l,e=1,n=arguments.length;e<n;e++)for(var t in l=arguments[e])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},c.apply(this,arguments)};const m=function(o){var l,e=o.size,n=void 0===e?"md":e,r=o.isDark,m=void 0!==r&&r,s=o.className,i=function(o,l){var e={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&l.indexOf(n)<0&&(e[n]=o[n]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(o);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(e[n[t]]=o[n[t]])}return e}(o,["size","isDark","className"]);return t().createElement(a.Skeleton,c({className:f()("ins-c-skeleton","ins-c-skeleton__".concat(n),(l={},l["ins-m-dark"]=m,l),s)},i))}}}]);