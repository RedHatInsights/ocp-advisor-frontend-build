(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[8987],{85991:(e,t,a)=>{"use strict";t.a=void 0;const r=a(70655),n=r.__importStar(a(92950)),l=r.__importDefault(a(44303)),s=a(38296),i=a(23053);t.a=e=>{var{children:a=null,className:o="","aria-label":c="Breadcrumb",ouiaId:u,ouiaSafe:d=!0}=e,m=r.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const f=(0,i.useOUIAProps)(t.a.displayName,u,d);return n.createElement("nav",Object.assign({},m,{"aria-label":c,className:(0,s.css)(l.default.breadcrumb,o)},f),n.createElement("ol",{className:l.default.breadcrumbList},n.Children.map(a,((e,t)=>{const a=t>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:a}):e}))))},t.a.displayName="Breadcrumb"},49489:(e,t,a)=>{"use strict";t.g=void 0;const r=a(70655),n=r.__importStar(a(92950)),l=r.__importDefault(a(95511)),s=r.__importDefault(a(44303)),i=a(38296);t.g=e=>{var{children:t=null,className:a="",to:o,isActive:c=!1,isDropdown:u=!1,showDivider:d,target:m,component:f="a",render:p}=e,g=r.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const v=f,b=c?"page":void 0,h=(0,i.css)(s.default.breadcrumbLink,c&&s.default.modifiers.current);return n.createElement("li",Object.assign({},g,{className:(0,i.css)(s.default.breadcrumbItem,a)}),d&&n.createElement("span",{className:s.default.breadcrumbItemDivider},n.createElement(l.default,null)),"button"===f&&n.createElement("button",{className:h,"aria-current":b,type:"button"},t),u&&n.createElement("span",{className:(0,i.css)(s.default.breadcrumbDropdown)},t),p&&p({className:h,ariaCurrent:b}),o&&!p&&n.createElement(v,{href:o,target:m,className:h,"aria-current":b},t),!o&&"button"!==f&&!u&&t)},t.g.displayName="BreadcrumbItem"},27600:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardActions=void 0;const r=a(70655),n=r.__importStar(a(92950)),l=a(38296),s=r.__importDefault(a(54918));t.CardActions=e=>{var{children:t=null,className:a="",hasNoOffset:i=!1}=e,o=r.__rest(e,["children","className","hasNoOffset"]);return n.createElement("div",Object.assign({className:(0,l.css)(s.default.cardActions,i&&s.default.modifiers.noOffset,a)},o),t)},t.CardActions.displayName="CardActions"},10614:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardExpandableContent=void 0;const r=a(70655),n=r.__importStar(a(92950)),l=r.__importDefault(a(54918)),s=a(38296),i=a(2095);t.CardExpandableContent=e=>{var{children:t=null,className:a=""}=e,o=r.__rest(e,["children","className"]);return n.createElement(i.CardContext.Consumer,null,(({isExpanded:e})=>e?n.createElement("div",Object.assign({className:(0,s.css)(l.default.cardExpandableContent,a)},o),t):null))},t.CardExpandableContent.displayName="CardExpandableContent"},45587:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardFooter=void 0;const r=a(70655),n=r.__importStar(a(92950)),l=r.__importDefault(a(54918)),s=a(38296);t.CardFooter=e=>{var{children:t=null,className:a="",component:i="div"}=e,o=r.__rest(e,["children","className","component"]);const c=i;return n.createElement(c,Object.assign({className:(0,s.css)(l.default.cardFooter,a)},o),t)},t.CardFooter.displayName="CardFooter"},21015:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;const r=a(70655),n=r.__importStar(a(92950)),l=a(38296),s=r.__importDefault(a(54918)),i=a(2095),o=a(16396),c=r.__importDefault(a(95511));t.CardHeader=e=>{var{children:t=null,className:a="",id:u,onExpand:d,toggleButtonProps:m,isToggleRightAligned:f}=e,p=r.__rest(e,["children","className","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return n.createElement(i.CardContext.Consumer,null,(({cardId:e})=>{const r=n.createElement("div",{className:(0,l.css)(s.default.cardHeaderToggle)},n.createElement(o.Button,Object.assign({variant:"plain",type:"button",onClick:t=>{d(t,e)}},m),n.createElement("span",{className:(0,l.css)(s.default.cardHeaderToggleIcon)},n.createElement(c.default,{"aria-hidden":"true"}))));return n.createElement("div",Object.assign({className:(0,l.css)(s.default.cardHeader,f&&s.default.modifiers.toggleRight,a),id:u},p),d&&!f&&r,t,d&&f&&r)}))},t.CardHeader.displayName="CardHeader"},70678:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeaderMain=void 0;const r=a(70655),n=r.__importStar(a(92950));t.CardHeaderMain=e=>{var{children:t=null,className:a=""}=e,l=r.__rest(e,["children","className"]);return n.createElement("div",Object.assign({className:a},l),t)},t.CardHeaderMain.displayName="CardHeaderMain"},36104:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardTitle=void 0;const r=a(70655),n=r.__importStar(a(92950)),l=a(38296),s=r.__importDefault(a(54918)),i=a(2095);t.CardTitle=e=>{var{children:t=null,className:a="",component:o="div"}=e,c=r.__rest(e,["children","className","component"]);const{cardId:u,registerTitleId:d}=n.useContext(i.CardContext),m=o,f=u?`${u}-title`:"";return n.useEffect((()=>(d(f),()=>d(""))),[d,f]),n.createElement(m,Object.assign({className:(0,l.css)(s.default.cardTitle,a),id:f||void 0},c),t)},t.CardTitle.displayName="CardTitle"},56161:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(70655);r.__exportStar(a(2095),t),r.__exportStar(a(27600),t),r.__exportStar(a(85962),t),r.__exportStar(a(10614),t),r.__exportStar(a(45587),t),r.__exportStar(a(36104),t),r.__exportStar(a(21015),t),r.__exportStar(a(70678),t)},36001:(e,t,a)=>{"use strict";t.k=void 0;const r=a(70655),n=r.__importStar(a(92950)),l=a(38296),s=r.__importDefault(a(61370)),i=r.__importStar(a(51969)),o=a(42319);t.k=e=>{var{children:t=null,className:a="",component:c="div",spacer:u,spaceItems:d,grow:m,shrink:f,flex:p,direction:g,alignItems:v,alignContent:b,alignSelf:h,align:_,justifyContent:E,display:Z,fullWidth:y,flexWrap:k,order:M,style:C}=e,x=r.__rest(e,["children","className","component","spacer","spaceItems","grow","shrink","flex","direction","alignItems","alignContent","alignSelf","align","justifyContent","display","fullWidth","flexWrap","order","style"]);const I=c;return n.createElement(I,Object.assign({className:(0,l.css)(s.default.flex,(0,o.formatBreakpointMods)(u,s.default),(0,o.formatBreakpointMods)(d,s.default),(0,o.formatBreakpointMods)(m,s.default),(0,o.formatBreakpointMods)(f,s.default),(0,o.formatBreakpointMods)(p,s.default),(0,o.formatBreakpointMods)(g,s.default),(0,o.formatBreakpointMods)(v,s.default),(0,o.formatBreakpointMods)(b,s.default),(0,o.formatBreakpointMods)(h,s.default),(0,o.formatBreakpointMods)(_,s.default),(0,o.formatBreakpointMods)(E,s.default),(0,o.formatBreakpointMods)(Z,s.default),(0,o.formatBreakpointMods)(y,s.default),(0,o.formatBreakpointMods)(k,s.default),a),style:C||M?Object.assign(Object.assign({},C),(0,o.setBreakpointCssVars)(M,i.l_flex_item_Order.name)):void 0},x),t)},t.k.displayName="Flex"},42057:(e,t,a)=>{"use strict";t.B=void 0;const r=a(70655),n=r.__importStar(a(92950)),l=a(38296),s=r.__importDefault(a(61370)),i=r.__importStar(a(51969)),o=a(42319);t.B=e=>{var{children:t=null,className:a="",component:c="div",spacer:u,grow:d,shrink:m,flex:f,alignSelf:p,align:g,fullWidth:v,order:b,style:h}=e,_=r.__rest(e,["children","className","component","spacer","grow","shrink","flex","alignSelf","align","fullWidth","order","style"]);const E=c;return n.createElement(E,Object.assign({},_,{className:(0,l.css)((0,o.formatBreakpointMods)(u,s.default),(0,o.formatBreakpointMods)(d,s.default),(0,o.formatBreakpointMods)(m,s.default),(0,o.formatBreakpointMods)(f,s.default),(0,o.formatBreakpointMods)(p,s.default),(0,o.formatBreakpointMods)(g,s.default),(0,o.formatBreakpointMods)(v,s.default),a),style:h||b?Object.assign(Object.assign({},h),(0,o.setBreakpointCssVars)(b,i.l_flex_item_Order.name)):void 0}),t)},t.B.displayName="FlexItem"},84785:(e,t,a)=>{"use strict";t.ZK={name:"BellSlashIcon",height:512,width:640,svgPath:"M633.82 458.1l-90.62-70.05c.19-1.38.8-2.66.8-4.06.05-7.55-2.61-15.27-8.61-21.71-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-40.33 8.38-74.66 31.07-97.59 62.57L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.35 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.02-2.81-22.45zM157.23 251.54c-8.61 67.96-36.41 93.33-52.62 110.75-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h241.92L157.23 251.54zM320 512c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z",yOffset:0,xOffset:0},t.ow=a(35183).IU(t.ZK),t.ZP=t.ow},6234:(e,t,a)=>{"use strict";t.iv={name:"OutlinedBellIcon",height:512,width:448,svgPath:"M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z",yOffset:0,xOffset:0},t.V_=a(35183).IU(t.iv),t.ZP=t.V_},51969:(e,t)=>{"use strict";t.__esModule=!0,t.l_flex_item_Order={name:"--pf-l-flex--item--Order",value:"0",var:"var(--pf-l-flex--item--Order)"},t.default=t.l_flex_item_Order},56276:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var r=a(92950),n=a.n(r),l=a(45697),s=a.n(l),i=a(86896),o=a(62012),c=a(85991),u=a(49489),d=a(30893),m=function(e){var t=e.current,a=e.workloads,r=(0,i.Z)(),l=(0,o.useLocation)().pathname.split("/");return n().createElement("div",null,n().createElement(c.a,{ouiaId:"detail"},n().createElement(u.g,{className:"breadcrumb-item"},n().createElement(o.Link,{to:a?"../..":"..",relative:"path"},"".concat(r.formatMessage(d.Z.insightsHeader)," ").concat(l[4]))),n().createElement(u.g,{className:"breadcrumb-item",isActive:!0},t)))};m.propTypes={current:s().string,workloads:s().boolean};const f=m},90670:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var r=a(76004),n=a(23218),l=a(45697),s=a.n(l),i=a(92950),o=a.n(i),c=a(86896),u=a(30893),d=function(e){var t=e.rule,a=(0,c.Z)();return o().createElement(o().Fragment,null,t.disabled&&o().createElement(r.Tooltip,{content:a.formatMessage(u.Z.ruleIsDisabledTooltip),position:r.TooltipPosition.right},o().createElement(n.Label,{color:"gray",isCompact:!0},a.formatMessage(u.Z.disabled))))};d.propTypes={rule:s().object};const m=d},52661:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var r=a(92950),n=a.n(r),l=a(2095),s=a(85962),i=a(24561);const o=function(){return n().createElement(l.Card,{ouiaId:"loading-skeleton"},n().createElement(s.CardBody,null,n().createElement(i.aV,null)))}},73451:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var r=a(15861),n=a(70885),l=a(87757),s=a.n(l),i=a(92950),o=a.n(i),c=a(86896),u=a(45697),d=a.n(u),m=a(86706),f=a(6202),p=a(32752),g=a(4853),v=a(23811),b=a(78826),h=a(12282),_=a(71355),E=a(30893),Z=a(77647),y=function(e){var t=e.isModalOpen,a=e.handleModalToggle,l=e.rule,u=e.afterFn,d=e.host,y=e.hosts,k=(0,c.Z)(),M=(0,i.useState)(""),C=(0,n.Z)(M,2),x=C[0],I=C[1],S=(0,i.useState)(!!d),D=(0,n.Z)(S,2),N=D[0],O=D[1],w=(0,i.useState)(y.length>0),T=(0,n.Z)(w,2),j=T[0],B=T[1],F=(0,Z.om)(),P=(0,n.Z)(F,1)[0],R=(0,m.useDispatch)(),A=function(e){return R((0,_.addNotification)(e))},H=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=y.map((function(e){return(0,Z.Dg)({uuid:e.id,recId:l.rule_id,justification:x})})),e.next=4,Promise.all(t);case 4:A({variant:"success",dismissable:!0,timeout:!0,title:k.formatMessage(E.Z.recSuccessfullyDisabledForCluster)}),u&&u(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),A({variant:"danger",dismissable:!0,title:k.formatMessage(E.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!N){e.next=7;break}return e.next=4,(0,Z.Dg)({uuid:d,recId:l.rule_id,justification:x});case 4:A({variant:"success",timeout:!0,dismissable:!0,title:k.formatMessage(E.Z.recSuccessfullyDisabledForCluster)}),e.next=14;break;case 7:if(!j){e.next=11;break}H(),e.next=14;break;case 11:return e.next=13,P({rule_id:l.rule_id,justification:x}).unwrap();case 13:A({variant:"success",timeout:!0,dismissable:!0,title:k.formatMessage(E.Z.recSuccessfullyDisabled)});case 14:I(""),u&&u(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),A({variant:"danger",dismissable:!0,title:k.formatMessage(E.Z.error),description:"".concat(e.t0)});case 21:a(!1);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();return o().createElement(b.u_,{variant:"small",title:k.formatMessage(E.Z.disableRule),isOpen:t,onClose:function(){a(),I("")},actions:[o().createElement(f.Button,{key:"confirm",variant:"primary",onClick:function(){return L()},ouiaId:"confirm"},k.formatMessage(E.Z.save)),o().createElement(f.Button,{key:"cancel",variant:"link",onClick:function(){a(!1),I("")},ouiaId:"cancel"},k.formatMessage(E.Z.cancel))],ouiaId:"recommendation-disable"},k.formatMessage(E.Z.disableRuleBody),o().createElement(g.l,null,o().createElement(v.c,{fieldId:"blank-form"}),(d||y.length>0)&&o().createElement(v.c,{fieldId:"disable-rule-one-system"},o().createElement(p.Checkbox,{isChecked:N||j,onChange:function(){d?O(!N):B(!j)},label:d?k.formatMessage(E.Z.disableRuleSingleCluster):k.formatMessage(E.Z.disableRuleForClusters),id:"disable-rule-one-system",name:"disable-rule-one-system",ouiaId:"disable-recommendation-one-cluster"})),o().createElement(v.c,{label:k.formatMessage(E.Z.justificationNote),fieldId:"disable-rule-justification"},o().createElement(h.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:x,onChange:function(e){return I(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),L())}}))))};y.propTypes={isModalOpen:d().bool,rule:d().object,handleModalToggle:d().func,afterFn:d().func,host:d().object,hosts:d().array},y.defaultProps={isModalOpen:!1,rule:{},handleModalToggle:function(){},afterFn:function(){},host:void 0,hosts:[]};const k=y},26553:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>be});var r=a(92950),n=a.n(r),l=a(62012),s=a(86896),i=a(55140),o=a(87462),c=a(15861),u=a(70885),d=a(87757),m=a.n(d),f=a(86706),p=a(45697),g=a.n(p),v=a(56161),b=a(89376),h=a(39173),_=a(62410),E=a(23218),Z=a(34348),y=a(26407),k=a(6202),M=a(22910),C=a(96823),x=a(80765),I=a(36001),S=a(42057),D=a(84785),N=a(96466),O=a(71355),w=a(2443),T=a(85583),j=a(56276),B=a(90670),F=a(59303),P=a(30893),R=a(52661),A=a(48622),H=a(51957),L=a(4942),V=a(81249),W=a(45578),z=a.n(W),q=a(77572),U=a(56021),X=a(76004),K=a(13877),G=a(15509),J=a(51014),Q=a(28672),Y=a(73451),$=a(76913),ee=a(60076);function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(Object(a),!0).forEach((function(t){(0,L.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var re=function(e){var t=e.query,a=e.rule,i=e.afterDisableFn,o=(0,s.Z)(),c=(0,f.useDispatch)(),d=(0,r.useState)([]),m=(0,u.Z)(d,2),p=m[0],g=m[1],v=(0,r.useState)([]),b=(0,u.Z)(v,2),h=b[0],E=b[1],Z=(0,r.useState)(!1),y=(0,u.Z)(Z,2),k=y[0],M=y[1],C=(0,r.useState)([]),x=(0,u.Z)(C,2),I=x[0],S=x[1],D=(0,r.useState)(void 0),N=(0,u.Z)(D,2),O=N[0],w=N[1],T=t.isError,j=t.isUninitialized,B=t.isFetching,A=t.isSuccess,H=t.data,W=void 0===H?{disabled:[],enabled:[]}:H,te=(null==W?void 0:W.enabled)||[],re=(0,f.useSelector)((function(e){return e.filters.affectedClustersState})),ne=re.limit,le=re.offset/re.limit+1,se=0!==p.length&&I.length===p.length,ie=(0,r.useState)(!1),oe=(0,u.Z)(ie,2),ce=oe[0],ue=oe[1],de=j||B||!ce,me=T,fe=A,pe=fe&&0===te.length,ge=te.length>0&&0===p.length,ve=function(e){return c((0,Q.BC)(e))},be=function(e,t){return(0,$.Lv)(re,ve,e,t)},he={items:[{label:o.formatMessage(P.Z.name),placeholder:o.formatMessage(P.Z.filterByName),type:q.conditionalFilterType.text,filterValues:{id:"name-filter",key:"name-filter",onChange:function(e,t){return be("text",t)},value:re.text}},{label:o.formatMessage(P.Z.version),placeholder:o.formatMessage(P.Z.filterByVersion),type:q.conditionalFilterType.checkbox,filterValues:{id:"version-filter",key:"version-filter",onChange:function(e,t){return be("version",t)},value:re.version,items:z()(te.filter((function(e){return""!==e.meta.cluster_version})).map((function(e){return{value:e.meta.cluster_version}})).sort((function(e,t){return(0,$._)(e.value,t.value,1)})).reverse(),"value")}}],isDisabled:T||te&&0===te.length},_e=function(e,t){ue(!1);var a=t*re.limit-re.limit;ve(ae(ae({},re),{},{offset:a}))},Ee=function(e,t){ue(!1),ve(ae(ae({},re),{},{limit:t,offset:0}))},Ze=function(e){return e.slice(ne*(le-1),ne*(le-1)+ne).map((function(e){return ae(ae({},e),{},{cells:[n().createElement("span",{key:e.id},n().createElement(l.Link,{to:"".concat(ee.G,"/clusters/").concat(e.id,"?first=").concat(a.rule_id)},e.cells[F.XS])),n().createElement("span",{key:e.id},e.cells[F.R2]||o.formatMessage(P.Z.nA)),n().createElement("span",{key:e.id},e.cells[F.NT]?n().createElement(_.Z,{extraTitle:"".concat(o.formatMessage(P.Z.lastSeen),": "),date:e.cells[F.NT],variant:"relative"}):n().createElement(X.Tooltip,{key:e.id,content:n().createElement("span",null,o.formatMessage(P.Z.lastSeen)+": ",o.formatMessage(P.Z.nA))},n().createElement("span",null,o.formatMessage(P.Z.nA)))),n().createElement("span",{key:e.id},e.cells[F.ZT]?n().createElement(_.Z,{extraTitle:"".concat(o.formatMessage(P.Z.impacted),": "),date:e.cells[F.ZT],variant:"relative"}):n().createElement(X.Tooltip,{key:e.id,content:n().createElement("span",null,o.formatMessage(P.Z.impacted)+": ",o.formatMessage(P.Z.nA))},n().createElement("span",null,o.formatMessage(P.Z.nA))))]})}))},ye=function(e,t,a){var r;r=-1===a?p.map((function(e){return ae(ae({},e),{},{selected:t})})):p.map((function(e,r){return ae(ae({},e),{},{selected:r===a?t:e.selected})})),S(r.filter((function(e){return e.selected}))),g(r),E(Ze(r))};(0,r.useEffect)((function(){g(function(e,t){return ue(!1),e.map((function(e){return""===e.meta.cluster_version||(0,V.valid)(e.meta.cluster_version)||console.error("Cluster version ".concat(e.meta.cluster_version," has invalid format!")),{id:e.cluster,cells:["",e.cluster_name||e.cluster,e.meta.cluster_version,e.last_checked_at,e.impacted]}})).filter((function(e){return(null==e?void 0:e.cells[F.XS].toLowerCase().includes(t.text.toLowerCase()))&&(0===t.version.length||t.version.includes(e.cells[F.R2]))})).sort((function(e,a){var r,n,l="asc"===t.sortDirection?1:-1;switch(t.sortIndex){case F.XS:return l*(null==e?void 0:e.cells[F.XS].localeCompare(null==a?void 0:a.cells[F.XS]));case F.R2:return(0,$._)(e.cells[F.R2]||"0.0.0",a.cells[F.R2]||"0.0.0",l);case F.NT:return(r=new Date(e.cells[F.NT]||0))>(n=new Date(a.cells[F.NT]||0))?l:n>r?-l:0;case F.ZT:return(r=new Date(e.cells[F.ZT]||0))>(n=new Date(a.cells[F.ZT]||0))?l:n>r?-l:0}}))}(te,re))}),[t,re.text,re.version,re.sortIndex,re.sortDirection]),(0,r.useEffect)((function(){E(Ze(p)),ue(!0)}),[p,re.limit,re.offset]);var ke=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;M(e),w(t)};return n().createElement("div",{id:"affected-list-table","data-ouia-safe":!de},k&&n().createElement(Y.Z,{handleModalToggle:ke,isModalOpen:k,rule:a,afterFn:i,hosts:void 0!==O?[]:I,host:O}),n().createElement(U.Z,{filterConfig:he,pagination:{itemCount:p.length,page:le,perPage:ne,onSetPage:_e,onPerPageSelect:Ee,ouiaId:"pager"},activeFiltersConfig:T||te&&0===te.length?void 0:{filters:(0,$.mt)(re,F.W2),deleteTitle:o.formatMessage(P.Z.resetFilters),onDelete:function(e,t,a){a?(0,Q.aw)(re,Q.Q3,ve):t.map((function(e){var t,a=(0,L.Z)({},e.urlParam,Array.isArray(re[e.urlParam])?re[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");a[e.urlParam].length>0?ve(ae(ae({},re),a)):(t=e.urlParam,(0,$.oo)(re,ve,t))}))}},bulkSelect:{count:I.length,items:[{title:o.formatMessage(P.Z.selectNone),onClick:function(e){return ye(0,!1,-1)}},{title:o.formatMessage(P.Z.selectAll,{items:(null==p?void 0:p.length)||0}),onClick:function(e){return ye(0,!0,-1)}}],checked:se,onSelect:function(e){return ye(0,!se,-1)},ouiaId:"clusters-selector"},actionsConfig:{actions:["",{label:o.formatMessage(P.Z.disableRuleForClusters),props:{isDisabled:0===I.length},onClick:function(){return ke(!0)}}]}}),n().createElement(G.Table,{"aria-label":"Table of affected clusters",ouiaId:"clusters",ouiaSafe:!de,variant:"compact",cells:F.I9,rows:me||de||ge||pe?[{fullWidth:!0,cells:[{props:{colSpan:F.I9.length+1},title:me?n().createElement(J.Te,null):de?n().createElement(R.Z,null):pe?n().createElement(J.mi,null):n().createElement(J.VA,null)}]}]:fe?h:n().createElement(J.Te,null),sortBy:{index:re.sortIndex,direction:re.sortDirection},onSort:function(e,t,a){ue(!1),ve(ae(ae({},re),{},{sortIndex:t,sortDirection:a}))},canSelectAll:!1,onSelect:(null==h?void 0:h.length)>0?ye:void 0,actions:[{title:"Disable recommendation for cluster",onClick:function(e,t){return ke(!0,p[t].id)}}]},n().createElement(G.TableHeader,null),n().createElement(G.TableBody,null)),n().createElement(K.tl,{variant:K.aM.bottom,itemCount:p.length,page:le,perPage:ne,onSetPage:_e,onPerPageSelect:Ee,onPageInput:_e,ouiaId:"pager"}))};re.propTypes={query:g().shape({isError:g().bool.isRequired,isUninitialized:g().bool.isRequired,isFetching:g().bool.isRequired,isSuccess:g().bool.isRequired,data:g().shape({enabled:g().array,disabled:g().array})}),rule:g().object,afterDisableFn:g().func};var ne=a(71094),le=a(86362),se=a(24561),ie=a(78826),oe=a(6234),ce=a(77647),ue=function(e){var t=e.handleModalToggle,a=e.isModalOpen,l=e.clusters,i=e.recId,o=e.afterFn,d=(0,s.Z)(),p=(0,f.useDispatch)(),g=function(e){return p((0,O.addNotification)(e))},v=l.data,b=l.isFetching,h=l.isLoading,E=l.refetch,Z=(null==v?void 0:v.disabled)||[],y=(0,r.useState)([]),M=(0,u.Z)(y,2),C=M[0],x=M[1],I=(0,r.useState)(!1),S=(0,u.Z)(I,2),D=S[0],N=S[1],w=[{title:d.formatMessage(P.Z.clusterName),transforms:[(0,G.cellWidth)(50)]},{title:d.formatMessage(P.Z.justificationNote),transforms:[(0,G.cellWidth)(25)]},{title:d.formatMessage(P.Z.dateDisabled),transforms:[(0,G.cellWidth)(15)]},""],T=function(){var e=(0,c.Z)(m().mark((function e(a){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,ce.o1)({uuid:a.cluster_id,recId:i});case 3:E(),N(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t(!1),g({variant:"danger",dismissable:!0,title:d.formatMessage(P.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){var e=null==Z?void 0:Z.map((function(e){return{cells:[e.cluster_name||e.cluster_id,e.justification||d.formatMessage(P.Z.none),{title:n().createElement(_.Z,{date:new Date(e.disabled_at),type:"onlyDate"})},{title:n().createElement(k.Button,{key:e.cluster_id,ouiaId:"enable",isInline:!0,variant:"link",onClick:function(){return T(e)}},n().createElement(oe.ZP,{size:"sm"})," ".concat(d.formatMessage(P.Z.enable)))}]}}));h||0!==Z.length||(o(),t(!1)),x(e)}),[Z]),n().createElement(ie.u_,{width:"75%",title:d.formatMessage(P.Z.hostAckModalTitle),isOpen:a,onClose:function(){D&&o(),t(!1)},ouiaId:"hosts-disabled"},b?n().createElement(G.Table,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:n().createElement(se.aV,null)}]}],cells:w},n().createElement(G.TableHeader,null),n().createElement(G.TableBody,null)):n().createElement(G.Table,{"aria-label":"host-ack-table",rows:C,cells:w},n().createElement(G.TableHeader,null),n().createElement(G.TableBody,null)))};ue.propTypes={isModalOpen:g().bool,handleModalToggle:g().func,clusters:g().object,recId:g().string,afterFn:g().func},ue.defaultProps={isModalOpen:!1,handleModalToggle:function(){},clusters:{},recId:"",afterFn:function(){}};const de=ue;var me=a(73845),fe=a(28186),pe=a(94174),ge=a.n(pe),ve=function(e){var t=e.rule,a=e.ack,l=e.clusters,i=e.recId,d=(0,s.Z)(),p=(0,f.useDispatch)(),g=function(e){return p((0,O.addNotification)(e))},L=(0,r.useState)(!1),V=(0,u.Z)(L,2),W=V[0],z=V[1],q=(0,r.useState)(!1),U=(0,u.Z)(q,2),X=U[0],K=U[1],G=(0,r.useState)(!1),J=(0,u.Z)(G,2),Q=J[0],$=J[1],ee=t.isError,te=t.isUninitialized,ae=t.isLoading,se=t.isFetching,ie=t.isSuccess,oe=t.data,ue=t.refetch,pe=a.data,ve=a.isFetching,be=a.refetch,he=new Date((null==pe?void 0:pe.updated_at)||(null==pe?void 0:pe.created_at)),_e=l.data,Ee=l.isFetching,Ze=l.refetch,ye=ie&&oe?(0,A.hw)(oe.content,i):void 0,ke=!Ee&&_e?_e.disabled:void 0,Me=function(){var e=(0,c.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ue(),be(),Ze();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(e){z(e)},xe=function(){var e=(0,c.Z)(m().mark((function e(t){var a,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.uuids,e.prev=1,r=a.map((function(e){return(0,ce.o1)({uuid:e,recId:i})})),e.next=5,Promise.all(r);case 5:ue(),be(),Ze(),g({variant:"success",timeout:!0,dismissable:!0,title:d.formatMessage(P.Z.recSuccessfullyEnabledForCluster)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),g({variant:"danger",dismissable:!0,title:d.formatMessage(P.Z.error),description:"".concat(e.t0)});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=(0,c.Z)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,ne.HG)("".concat(le._n,"/v2/ack/").concat(t.data.content.rule_id));case 3:g({variant:"success",timeout:!0,dismissable:!0,title:d.formatMessage(P.Z.recSuccessfullyEnabled)}),ue(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),Ce(!1),g({variant:"danger",dismissable:!0,title:d.formatMessage(P.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Se=(0,r.useMemo)((function(){return ye?(0,fe.jL)(d,ye):{}}),[d,ye]);return n().createElement(n().Fragment,null,Q&&n().createElement(de,{handleModalToggle:function(e){return $(e)},isModalOpen:Q,clusters:l,afterFn:function(){return Ze()},recId:i}),W&&n().createElement(Y.Z,{handleModalToggle:Ce,isModalOpen:W,rule:ye,afterFn:Me}),n().createElement(b.Z,{className:"pageHeaderOverride"},n().createElement(j.Z,{current:(null==ye?void 0:ye.description)||i})),(te||ae||se)&&n().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section pf-m-light pf-u-pt-sm"},n().createElement(R.Z,null)),ee&&n().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section pf-m-light pf-u-pt-sm"},n().createElement(w.Z,null)),!(te||ae||se)&&ie&&n().createElement(n().Fragment,null,n().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section pf-m-light pf-u-pt-sm"},n().createElement(T.Ii,(0,o.Z)({messages:(0,fe.k5)(d,T.TO,Se),product:T.D1.ocp,rule:ye,isDetailsPage:!0,header:n().createElement(n().Fragment,null,n().createElement(h.Z,{title:n().createElement(n().Fragment,null,ye.description," ",n().createElement(B.Z,{rule:ye}))}),n().createElement("p",null,d.formatMessage(P.Z.rulesDetailsModifiedDate,{date:n().createElement(_.Z,{date:new Date(ye.publish_date),type:"onlyDate"})}),ye.tags&&(Array.isArray(ye.tags)?n().createElement(y.e,{className:"categoryLabels",numLabels:1,isCompact:!0},ye.tags.reduce((function(e,t){return F.kT[t]&&e.push(n().createElement(E.Label,{key:"label-".concat(t),color:"blue",isCompact:!0},F.W2.category.values[F.kT[t]-1].label)),e}),[])):n().createElement(E.Label,{isCompact:!0},ye.tags)))),onVoteClick:function(){var e=(0,c.Z)(m().mark((function e(t,a){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,ne.SO)("".concat(le._n,"/v2/rating"),{},{rule:t,rating:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},ge()(null==ye?void 0:ye.resolution_risk,1,5)?{resolutionRisk:null==ye?void 0:ye.resolution_risk,resolutionRiskDesc:F.wY[null==ye?void 0:ye.resolution_risk]}:{}),n().createElement(I.k,null,n().createElement(S.B,{align:{default:"alignRight"}},n().createElement(M.Dropdown,{className:"ins-c-rec-details__actions_dropdown",onSelect:function(){return K(!X)},position:"right",ouiaId:"actions",toggle:n().createElement(x.DropdownToggle,{onToggle:function(e){return K(e)},toggleIndicator:N.default},d.formatMessage(P.Z.actions)),isOpen:X,dropdownItems:null!=ye&&ye.disabled?[n().createElement(C.DropdownItem,{key:"link",ouiaId:"enable",onClick:function(){Ie(t)}},d.formatMessage(P.Z.enableRule))]:[n().createElement(C.DropdownItem,{key:"link",ouiaId:"disable",onClick:function(){Ce(!0)}},d.formatMessage(P.Z.disableRule))]}))))),n().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},n().createElement(n().Fragment,null,((null==ye?void 0:ye.hosts_acked_count)||(null==ke?void 0:ke.length)>0||(null==ye?void 0:ye.disabled))&&n().createElement(v.Card,{className:"cardOverride",ouiaId:"hosts-acked"},n().createElement(v.CardHeader,null,n().createElement(Z.Dx,{headingLevel:"h4",size:"xl"},n().createElement(D.ZP,{size:"sm"})," ",d.formatMessage(!(null!=ye&&ye.hosts_acked_count||(null==ke?void 0:ke.length)>0)||null!=ye&&ye.disabled?P.Z.ruleIsDisabled:P.Z.ruleIsDisabledForClusters))),n().createElement(v.CardBody,null,!(null!=ye&&ye.hosts_acked_count||(null==ke?void 0:ke.length)>0)||null!=ye&&ye.disabled?!ve&&pe&&n().createElement(n().Fragment,null,null!=pe&&pe.justification?d.formatMessage(P.Z.ruleIsDisabledWithJustificaiton,{date:n().createElement("span",null,n().createElement(_.Z,{date:he,type:"onlyDate"})),reason:pe.justification}):d.formatMessage(P.Z.ruleIsDisabledWithoutJustificaiton,{date:n().createElement("span",null,n().createElement(_.Z,{date:he,type:"onlyDate"}))})):n().createElement(n().Fragment,null,d.formatMessage(P.Z.ruleIsDisabledForClustersBody,{clusters:null==ke?void 0:ke.length}),!Ee&&(null==ke?void 0:ke.length)>0?n().createElement(n().Fragment,null," ",n().createElement(k.Button,{isInline:!0,variant:"link",onClick:function(){return $(!0)},ouiaId:"view-clusters"},d.formatMessage(P.Z.viewClusters))):n().createElement(me.F,null))),n().createElement(v.CardFooter,null,!(null!=ye&&ye.hosts_acked_count||(null==ke?void 0:ke.length)>0)||null!=ye&&ye.disabled?n().createElement(k.Button,{isInline:!0,variant:"link",onClick:function(){return Ie(t)},ouiaId:"enable"},d.formatMessage(P.Z.enableRule)):!Ee&&ke?n().createElement(k.Button,{isInline:!0,variant:"link",onClick:function(){return xe({uuids:ke.map((function(e){return e.cluster_id}))})},ouiaId:"enable"},d.formatMessage(P.Z.enableRuleForClusters)):n().createElement(me.F,null))),!(null!=ye&&ye.disabled)&&n().createElement(n().Fragment,null,n().createElement(Z.Dx,{className:"titleOverride",headingLevel:"h3",size:"2xl"},d.formatMessage(P.Z.affectedClusters)),n().createElement(re,{query:l,rule:ye,afterDisableFn:Me})),(null==ye?void 0:ye.disabled)&&n().createElement(H.Z,{icon:D.ZP,title:d.formatMessage(P.Z.ruleIsDisabled),text:d.formatMessage(P.Z.ruleIsDisabledBody)})))))};ve.propTypes={rule:g().object.isRequired,ack:g().object.isRequired,clusters:g().object.isRequired,recId:g().string.isRequired};const be=function(){var e,t,a=(0,s.Z)(),o=(0,l.useParams)().recommendationId,c=(0,le.qv)(o),u=(0,ce.yr)({ruleId:o}),d=(0,i.Z)();if(c.isSuccess&&null!==(e=c.data)&&void 0!==e&&null!==(t=e.content)&&void 0!==t&&t.description){var m="".concat(c.data.content.description," - Recommendations");d.updateDocumentTitle(a.formatMessage(P.Z.documentTitle,{subnav:m}))}var f=(0,le.tf)(o);return(0,r.useEffect)((function(){c.refetch()}),[o]),n().createElement(ve,{rule:c,ack:u,clusters:f,recId:o})}},73845:(e,t,a)=>{"use strict";a.d(t,{F:()=>s});var r=a(92950),n=a.n(r),l=a(24561),s=function(){return n().createElement(l.ZP,{height:20},n().createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"300",height:"20"}))}},13:e=>{e.exports=function(e,t){return null!=e&&t in Object(e)}},2958:(e,t,a)=>{var r=a(46384),n=a(90939);e.exports=function(e,t,a,l){var s=a.length,i=s,o=!l;if(null==e)return!i;for(e=Object(e);s--;){var c=a[s];if(o&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++s<i;){var u=(c=a[s])[0],d=e[u],m=c[1];if(o&&c[2]){if(void 0===d&&!(u in e))return!1}else{var f=new r;if(l)var p=l(d,m,u,e,t,f);if(!(void 0===p?n(m,d,3,l,f):p))return!1}}return!0}},67206:(e,t,a)=>{var r=a(91573),n=a(16432),l=a(6557),s=a(1469),i=a(39601);e.exports=function(e){return"function"==typeof e?e:null==e?l:"object"==typeof e?s(e)?n(e[0],e[1]):r(e):i(e)}},91573:(e,t,a)=>{var r=a(2958),n=a(1499),l=a(42634);e.exports=function(e){var t=n(e);return 1==t.length&&t[0][2]?l(t[0][0],t[0][1]):function(a){return a===e||r(a,e,t)}}},16432:(e,t,a)=>{var r=a(90939),n=a(27361),l=a(79095),s=a(15403),i=a(89162),o=a(42634),c=a(40327);e.exports=function(e,t){return s(e)&&i(t)?o(c(e),t):function(a){var s=n(a,e);return void 0===s&&s===t?l(a,e):r(t,s,3)}}},40371:e=>{e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},79152:(e,t,a)=>{var r=a(97786);e.exports=function(e){return function(t){return r(t,e)}}},45652:(e,t,a)=>{var r=a(88668),n=a(47443),l=a(1196),s=a(74757),i=a(23593),o=a(21814);e.exports=function(e,t,a){var c=-1,u=n,d=e.length,m=!0,f=[],p=f;if(a)m=!1,u=l;else if(d>=200){var g=t?null:i(e);if(g)return o(g);m=!1,u=s,p=new r}else p=t?[]:f;e:for(;++c<d;){var v=e[c],b=t?t(v):v;if(v=a||0!==v?v:0,m&&b==b){for(var h=p.length;h--;)if(p[h]===b)continue e;t&&p.push(b),f.push(v)}else u(p,b,a)||(p!==f&&p.push(b),f.push(v))}return f}},23593:(e,t,a)=>{var r=a(58525),n=a(50308),l=a(21814),s=r&&1/l(new r([,-0]))[1]==1/0?function(e){return new r(e)}:n;e.exports=s},1499:(e,t,a)=>{var r=a(89162),n=a(3674);e.exports=function(e){for(var t=n(e),a=t.length;a--;){var l=t[a],s=e[l];t[a]=[l,s,r(s)]}return t}},89162:(e,t,a)=>{var r=a(13218);e.exports=function(e){return e==e&&!r(e)}},42634:e=>{e.exports=function(e,t){return function(a){return null!=a&&a[e]===t&&(void 0!==t||e in Object(a))}}},79095:(e,t,a)=>{var r=a(13),n=a(222);e.exports=function(e,t){return null!=e&&n(e,t,r)}},50308:e=>{e.exports=function(){}},39601:(e,t,a)=>{var r=a(40371),n=a(79152),l=a(15403),s=a(40327);e.exports=function(e){return l(e)?r(s(e)):n(e)}},45578:(e,t,a)=>{var r=a(67206),n=a(45652);e.exports=function(e,t){return e&&e.length?n(e,r(t,2)):[]}},45467:()=>{},70347:()=>{},58392:()=>{},80598:()=>{},32857:()=>{},28992:()=>{},90479:()=>{},78752:()=>{},21064:()=>{},82014:()=>{},25238:()=>{},93398:()=>{},46928:()=>{},38299:()=>{},11177:()=>{},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Recommendation.6a3a9512ab0dc9b8c2464ad03fa407b2.js.map