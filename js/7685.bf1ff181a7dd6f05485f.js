(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[7685,49],{37685:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Alert:()=>I,AlertActionCloseButton:()=>_,AlertActionLink:()=>x,AlertContext:()=>g,AlertGroup:()=>P,AlertVariant:()=>N});var n=a(65353),s=a(28416),r=a(38296);a(81754);const i={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var l=a(68778),c=a(43047),o=a(69957),u=a(53688),m=a(34143);const d={success:l.ZP,danger:c.ZP,warning:o.ZP,info:u.default,custom:m.ZP},f=e=>{var{variant:t,customIcon:a,className:l=""}=e,c=(0,n.__rest)(e,["variant","customIcon","className"]);const o=d[t];return o?s.createElement("div",Object.assign({},c,{className:(0,r.css)(i.alertIcon,l)}),a||s.createElement(o,null)):null};var v=a(80164),p=a(62472);const g=s.createContext(null),C="--pf-v5-c-alert__title--max-lines";var h=a(35224),E=a(47173),b=a(93174);const L=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:l,isExpanded:c=!1}=e,o=(0,n.__rest)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:u,variantLabel:m}=s.useContext(g);return s.createElement(E.zx,Object.assign({variant:E.Wu.plain,onClick:l,"aria-expanded":c,"aria-label":""===t?`Toggle ${a||m} alert: ${u}`:t},o),s.createElement("span",{className:(0,r.css)(i.alertToggleIcon)},s.createElement(b.default,{"aria-hidden":"true"})))};var N;L.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(N||(N={}));const I=e=>{var{variant:t=N.custom,isInline:a=!1,isPlain:l=!1,isLiveRegion:c=!1,variantLabel:o=`${(0,v.kC)(t)} alert:`,actionClose:u,actionLinks:m,title:d,component:E="h4",children:b="",className:T="",ouiaId:_,ouiaSafe:x=!0,timeout:A=!1,timeoutAnimation:k=3e3,onTimeout:O=(()=>{}),truncateTitle:P=0,tooltipPosition:w,customIcon:M,isExpandable:y=!1,toggleAriaLabel:z=`${(0,v.kC)(t)} alert details`,onMouseEnter:R=(()=>{}),onMouseLeave:S=(()=>{}),id:Z}=e,j=(0,n.__rest)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const G=(0,p.useOUIAProps)(I.displayName,_,x,t),$=s.createElement(s.Fragment,null,s.createElement("span",{className:"pf-v5-screen-reader"},o),d),D=s.useRef(null),B=E,W=s.useRef(),[H,q]=(0,s.useState)(!1);s.useEffect((()=>{if(!D.current||!P)return;D.current.style.setProperty(C,P.toString());const e=D.current&&D.current.offsetHeight<D.current.scrollHeight;H!==e&&q(e)}),[D,P,H]);const[U,F]=(0,s.useState)(!1),[V,J]=(0,s.useState)(!0),[K,Q]=(0,s.useState)(),[X,Y]=(0,s.useState)(),ee=U&&V&&!K&&!X;s.useEffect((()=>{const e=!0===A?8e3:Number(A);if(e>0){const t=setTimeout((()=>F(!0)),e);return()=>clearTimeout(t)}}),[A]),s.useEffect((()=>{const e=()=>{W.current&&(W.current.contains(document.activeElement)?(Y(!0),J(!1)):X&&Y(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[X]),s.useEffect((()=>{if(!1===X||!1===K){const e=setTimeout((()=>J(!0)),k);return()=>clearTimeout(e)}}),[X,K,k]),s.useEffect((()=>{ee&&O()}),[ee,O]);const[te,ae]=(0,s.useState)(!1);if(ee)return null;const ne=s.createElement(B,Object.assign({},H&&{tabIndex:0},{ref:D,className:(0,r.css)(i.alertTitle,P&&i.modifiers.truncate)}),$);return s.createElement("div",Object.assign({ref:W,className:(0,r.css)(i.alert,a&&i.modifiers.inline,l&&i.modifiers.plain,y&&i.modifiers.expandable,te&&i.modifiers.expanded,i.modifiers[t],T)},G,c&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{Q(!0),J(!1),R(e)},onMouseLeave:e=>{Q(!1),S(e)},id:Z},j),y&&s.createElement(g.Provider,{value:{title:d,variantLabel:o}},s.createElement("div",{className:(0,r.css)(i.alertToggle)},s.createElement(L,{isExpanded:te,onToggleExpand:()=>{ae(!te)},"aria-label":z}))),s.createElement(f,{variant:t,customIcon:M}),H?s.createElement(h.u,{content:$,position:w},ne):ne,u&&s.createElement(g.Provider,{value:{title:d,variantLabel:o}},s.createElement("div",{className:(0,r.css)(i.alertAction)},u)),b&&(!y||y&&te)&&s.createElement("div",{className:(0,r.css)(i.alertDescription)},b),m&&s.createElement("div",{className:(0,r.css)(i.alertActionGroup)},m))};I.displayName="Alert";var T=a(24307);const _=e=>{var{className:t,onClose:a=(()=>{}),"aria-label":r="",variantLabel:i}=e,l=(0,n.__rest)(e,["className","onClose","aria-label","variantLabel"]);return s.createElement(g.Consumer,null,(({title:e,variantLabel:n})=>s.createElement(E.zx,Object.assign({variant:E.Wu.plain,onClick:a,"aria-label":""===r?`Close ${i||n} alert: ${e}`:r,className:t},l),s.createElement(T.ZP,null))))};_.displayName="AlertActionCloseButton";const x=e=>{var{className:t="",children:a}=e,r=(0,n.__rest)(e,["className","children"]);return s.createElement(E.zx,Object.assign({variant:E.Wu.link,isInline:!0,className:t},r),a)};x.displayName="AlertActionLink";var A=a(31051);a(81235);const k="pf-m-toast",O=e=>{var{className:t,children:a,isToast:i,isLiveRegion:l,onOverflowClick:c,overflowMessage:o}=e,u=(0,n.__rest)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage"]);return s.createElement("ul",Object.assign({role:"list","aria-live":l?"polite":null,"aria-atomic":!l&&null,className:(0,r.css)("pf-v5-c-alert-group",t,i?k:"")},u),s.Children.toArray(a).map(((e,t)=>{var a;return s.createElement("li",{key:(null===(a=e.props)||void 0===a?void 0:a.id)||t},e)})),o&&s.createElement("li",null,s.createElement("button",{onClick:c,className:(0,r.css)("pf-v5-c-alert-group__overflow-button")},o)))};O.displayName="AlertGroupInline";class P extends s.Component{constructor(){super(...arguments),this.state={container:void 0}}componentDidMount(){const e=document.createElement("div"),t=this.getTargetElement();this.setState({container:e}),t.appendChild(e)}componentWillUnmount(){const e=this.getTargetElement();this.state.container&&e.removeChild(this.state.container)}getTargetElement(){const e=this.props.appendTo;return"function"==typeof e?e():e||document.body}render(){const e=this.props,{className:t,children:a,isToast:r,isLiveRegion:i,onOverflowClick:l,overflowMessage:c,"aria-label":o,appendTo:u}=e,m=(0,n.__rest)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage","aria-label","appendTo"]),d=s.createElement(O,Object.assign({onOverflowClick:l,className:t,isToast:r,isLiveRegion:i,overflowMessage:c,"aria-label":o},m),a);if(!this.props.isToast)return d;const f=this.state.container;return v.Nq&&f?A.createPortal(d,f):null}}P.displayName="AlertGroup"},34143:(e,t,a)=>{"use strict";a.d(t,{Dk:()=>r,Er:()=>s,ZP:()=>i});var n=a(40400);const s={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},r=(0,n.I)(s),i=r},68778:(e,t,a)=>{"use strict";a.d(t,{GR:()=>s,ZP:()=>i,rE:()=>r});var n=a(40400);const s={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},r=(0,n.I)(s),i=r},69957:(e,t,a)=>{"use strict";a.d(t,{LP:()=>r,RI:()=>s,ZP:()=>i});var n=a(40400);const s={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},r=(0,n.I)(s),i=r},53688:(e,t,a)=>{"use strict";a.r(t),a.d(t,{InfoCircleIcon:()=>r,InfoCircleIconConfig:()=>s,default:()=>i});var n=a(40400);const s={name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0},r=(0,n.I)(s),i=r},24307:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>i,q1:()=>r,sk:()=>s});var n=a(40400);const s={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},r=(0,n.I)(s),i=r},81235:()=>{},81754:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7685.686cf5b49a44a795b52b0e6bd1cd9578.js.map