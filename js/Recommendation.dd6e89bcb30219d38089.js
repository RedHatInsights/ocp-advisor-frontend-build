(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[8987],{2095:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=s.__importDefault(a(54918)),r=a(38296),n=a(23053);t.CardContext=l.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1,isClickable:!1,isSelectable:!1,isSelected:!1,isClicked:!1,isDisabled:!1}),t.Card=e=>{var{children:a,id:c="",className:o,component:d="div",isCompact:u=!1,isSelectable:m=!1,isClickable:f=!1,isDisabled:p=!1,isSelectableRaised:g=!1,isSelected:b=!1,isClicked:h=!1,isDisabledRaised:v=!1,isFlat:C=!1,isExpanded:E=!1,isRounded:_=!1,isLarge:y=!1,isFullHeight:k=!1,isPlain:I=!1,ouiaId:M,ouiaSafe:S=!0,hasSelectableInput:Z=!1,selectableInputAriaLabel:N,onSelectableInputChange:x=(()=>{})}=e,O=s.__rest(e,["children","id","className","component","isCompact","isSelectable","isClickable","isDisabled","isSelectableRaised","isSelected","isClicked","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const D=d,F=(0,n.useOUIAProps)(t.Card.displayName,M,S),[j,T]=l.useState(""),[w,P]=l.useState();u&&y&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),y=!1);const R=l.useRef(!1);return l.useEffect((()=>{N?P({"aria-label":N}):j?P({"aria-labelledby":j}):Z&&!R.current&&(P({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[Z,N,j]),l.createElement(t.CardContext.Provider,{value:{cardId:c,registerTitleId:e=>{T(e),R.current=!!e},isExpanded:E,isClickable:f,isSelectable:m,isSelected:b,isClicked:h,isDisabled:p,hasSelectableInput:Z}},Z&&l.createElement("input",Object.assign({className:"pf-v5-screen-reader",id:`${c}-input`},w,{type:"checkbox",checked:b,onChange:e=>x(e,c),disabled:v,tabIndex:-1})),l.createElement(D,Object.assign({id:c,className:(0,r.css)(i.default.card,u&&i.default.modifiers.compact,E&&i.default.modifiers.expanded,C&&i.default.modifiers.flat,_&&i.default.modifiers.rounded,y&&i.default.modifiers.displayLg,k&&i.default.modifiers.fullHeight,I&&i.default.modifiers.plain,v?(0,r.css)(i.default.modifiers.nonSelectableRaised):g?(0,r.css)(i.default.modifiers.selectableRaised,b&&i.default.modifiers.selectedRaised):m&&f?(0,r.css)(i.default.modifiers.selectable,i.default.modifiers.clickable,(b||h)&&i.default.modifiers.current):m?(0,r.css)(i.default.modifiers.selectable,b&&i.default.modifiers.selected):f?(0,r.css)(i.default.modifiers.clickable,h&&i.default.modifiers.current):"",p&&i.default.modifiers.disabled,o),tabIndex:g?"0":void 0},O,F),a))},t.Card.displayName="Card"},27600:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardActions=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=a(38296),r=s.__importDefault(a(54918));t.CardActions=e=>{var{children:t,className:a,hasNoOffset:n=!1}=e,c=s.__rest(e,["children","className","hasNoOffset"]);return l.createElement("div",Object.assign({className:(0,i.css)(r.default.cardActions,n&&r.default.modifiers.noOffset,a)},c),t)},t.CardActions.displayName="CardActions"},85962:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=s.__importDefault(a(54918)),r=a(38296);t.CardBody=e=>{var{children:t,className:a,component:n="div",isFilled:c=!0}=e,o=s.__rest(e,["children","className","component","isFilled"]);const d=n;return l.createElement(d,Object.assign({className:(0,r.css)(i.default.cardBody,!c&&i.default.modifiers.noFill,a)},o),t)},t.CardBody.displayName="CardBody"},10614:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardExpandableContent=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=s.__importDefault(a(54918)),r=a(38296),n=a(2095);t.CardExpandableContent=e=>{var{children:t,className:a}=e,c=s.__rest(e,["children","className"]);return l.createElement(n.CardContext.Consumer,null,(({isExpanded:e})=>e?l.createElement("div",Object.assign({className:(0,r.css)(i.default.cardExpandableContent,a)},c),t):null))},t.CardExpandableContent.displayName="CardExpandableContent"},45587:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardFooter=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=s.__importDefault(a(54918)),r=a(38296);t.CardFooter=e=>{var{children:t,className:a,component:n="div"}=e,c=s.__rest(e,["children","className","component"]);const o=n;return l.createElement(o,Object.assign({className:(0,r.css)(i.default.cardFooter,a)},c),t)},t.CardFooter.displayName="CardFooter"},21015:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=a(38296),r=s.__importDefault(a(54918)),n=a(2095),c=a(70678),o=a(27600),d=a(51612),u=a(16396),m=s.__importDefault(a(95511)),f=a(57575),p=a(27235);t.CardHeader=e=>{var{children:t,className:a,actions:g,selectableActions:b,id:h,onExpand:v,toggleButtonProps:C,isToggleRightAligned:E}=e,_=s.__rest(e,["children","className","actions","selectableActions","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return l.createElement(n.CardContext.Consumer,null,(({cardId:e,isClickable:s,isSelectable:n,isSelected:y,isClicked:k,isDisabled:I,hasSelectableInput:M})=>{const S=l.createElement("div",{className:(0,i.css)(r.default.cardHeaderToggle)},l.createElement(u.Button,Object.assign({variant:"plain",type:"button",onClick:t=>{v(t,e)}},C),l.createElement("span",{className:(0,i.css)(r.default.cardHeaderToggleIcon)},l.createElement(m.default,{"aria-hidden":"true"})))),Z=s&&!n||n&&!s,N=M;(null==g?void 0:g.actions)&&Z&&!N&&console.warn((s?"Clickable":"Selectable")+" only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.");const x=e=>{(null==b?void 0:b.onClickAction)?b.onClickAction(e):(null==b?void 0:b.to)&&window.open(b.to,b.isExternalLink?"_blank":"_self")},O=()=>{var e;const t={className:"pf-m-standalone",inputClassName:s&&!n&&"pf-v5-screen-reader",label:l.createElement(l.Fragment,null),"aria-label":b.selectableActionAriaLabel,"aria-labelledby":b.selectableActionAriaLabelledby,id:b.selectableActionId,name:b.name,isDisabled:I},a=null!==(e=b.isChecked)&&void 0!==e?e:y;return s&&!n?Object.assign(Object.assign({},t),{onClick:x,isChecked:k}):n?Object.assign(Object.assign({},t),{onChange:b.onChange,isChecked:a}):t};return l.createElement("div",Object.assign({className:(0,i.css)(r.default.cardHeader,E&&r.default.modifiers.toggleRight,a),id:h},_),v&&!E&&S,(g||b&&(s||n))&&l.createElement(o.CardActions,{className:null==g?void 0:g.className,hasNoOffset:(null==g?void 0:g.hasNoOffset)||(null==b?void 0:b.hasNoOffset)},null==g?void 0:g.actions,b&&(s||n)&&l.createElement(d.CardSelectableActions,{className:null==b?void 0:b.className},"single"===(null==b?void 0:b.variant)||s&&!n?l.createElement(f.Radio,Object.assign({},O())):l.createElement(p.Checkbox,Object.assign({},O())))),t&&l.createElement(c.CardHeaderMain,null,t),v&&E&&S)}))},t.CardHeader.displayName="CardHeader"},70678:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeaderMain=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=a(38296),r=s.__importDefault(a(54918));t.CardHeaderMain=e=>{var{children:t,className:a}=e,n=s.__rest(e,["children","className"]);return l.createElement("div",Object.assign({className:(0,i.css)(r.default.cardHeaderMain,a)},n),t)},t.CardHeaderMain.displayName="CardHeaderMain"},51612:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardSelectableActions=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=a(38296),r=s.__importDefault(a(54918));t.CardSelectableActions=e=>{var{children:t,className:a}=e,n=s.__rest(e,["children","className"]);return l.createElement("div",Object.assign({className:(0,i.css)(r.default.cardSelectableActions,a)},n),t)},t.CardSelectableActions.displayName="CardSelectableActions"},36104:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardTitle=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=a(38296),r=s.__importDefault(a(54918)),n=a(2095);t.CardTitle=e=>{var{children:t,className:a,component:c="div"}=e,o=s.__rest(e,["children","className","component"]);const{cardId:d,registerTitleId:u}=l.useContext(n.CardContext),m=c,f=d?`${d}-title`:"";return l.useEffect((()=>(u(f),()=>u(""))),[u,f]),l.createElement("div",{className:(0,i.css)(r.default.cardTitle)},l.createElement(m,Object.assign({className:(0,i.css)(r.default.cardTitleText,a),id:f||void 0},o),t))},t.CardTitle.displayName="CardTitle"},56161:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=a(65353);s.__exportStar(a(2095),t),s.__exportStar(a(85962),t),s.__exportStar(a(10614),t),s.__exportStar(a(45587),t),s.__exportStar(a(36104),t),s.__exportStar(a(21015),t)},9568:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Radio=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=s.__importDefault(a(15466)),r=a(38296),n=a(23053);class c extends l.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},e.label||e["aria-label"]||console.error("Radio:","Radio requires an aria-label to be specified"),this.state={ouiaStateId:(0,n.getDefaultOUIAId)(c.displayName)}}render(){const e=this.props,{"aria-label":t,checked:a,className:o,inputClassName:d,defaultChecked:u,isLabelWrapped:m,isLabelBeforeButton:f,isChecked:p,isDisabled:g,isValid:b,label:h,onChange:v,description:C,body:E,ouiaId:_,ouiaSafe:y=!0,component:k}=e,I=s.__rest(e,["aria-label","checked","className","inputClassName","defaultChecked","isLabelWrapped","isLabelBeforeButton","isChecked","isDisabled","isValid","label","onChange","description","body","ouiaId","ouiaSafe","component"]);I.id||console.error("Radio:","id is required to make input accessible");const M=l.createElement("input",Object.assign({},I,{className:(0,r.css)(i.default.radioInput,d),type:"radio",onChange:this.handleChange,"aria-invalid":!b,disabled:g,checked:a||p},void 0===a&&{defaultChecked:u},!h&&{"aria-label":t},(0,n.getOUIAProps)(c.displayName,void 0!==_?_:this.state.ouiaStateId,y))),S=m&&!k||"label"===k,Z=S?"span":"label",N=h?l.createElement(Z,{className:(0,r.css)(i.default.radioLabel,g&&i.default.modifiers.disabled),htmlFor:S?void 0:I.id},h):null,x=null!=k?k:S?"label":"div";return l.createElement(x,{className:(0,r.css)(i.default.radio,!h&&i.default.modifiers.standalone,o),htmlFor:S?I.id:void 0},f?l.createElement(l.Fragment,null,N,M):l.createElement(l.Fragment,null,M,N),C&&l.createElement("span",{className:(0,r.css)(i.default.radioDescription)},C),E&&l.createElement("span",{className:(0,r.css)(i.default.radioBody)},E))}}t.Radio=c,c.displayName="Radio",c.defaultProps={className:"",isDisabled:!1,isValid:!0,onChange:()=>{}}},57575:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(65353).__exportStar(a(9568),t)},84785:(e,t,a)=>{"use strict";t.ZK={name:"BellSlashIcon",height:512,width:640,svgPath:"M633.82 458.1l-90.62-70.05c.19-1.38.8-2.66.8-4.06.05-7.55-2.61-15.27-8.61-21.71-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-40.33 8.38-74.66 31.07-97.59 62.57L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.35 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.02-2.81-22.45zM157.23 251.54c-8.61 67.96-36.41 93.33-52.62 110.75-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h241.92L157.23 251.54zM320 512c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z",yOffset:0,xOffset:0},t.ow=a(35183).I(t.ZK),t.ZP=t.ow},6234:(e,t,a)=>{"use strict";t.iv={name:"OutlinedBellIcon",height:512,width:448,svgPath:"M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z",yOffset:0,xOffset:0},t.V_=a(35183).I(t.iv),t.ZP=t.V_},46639:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(85893),l=a(64166),i=a(18741),r=function(){return r=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},r.apply(this,arguments)};const n=function(e){return(0,s.jsx)(l.Z,r({defaultErrorDescription:(0,s.jsx)(i.Z,{})},e))}},15600:e=>{var t=Math.max,a=Math.min;e.exports=function(e,s,l){return e>=a(s,l)&&e<t(s,l)}},94174:(e,t,a)=>{var s=a(15600),l=a(18601),i=a(14841);e.exports=function(e,t,a){return t=l(t),void 0===a?(a=t,t=0):a=l(a),e=i(e),s(e,t,a)}},18601:(e,t,a)=>{var s=a(14841);e.exports=function(e){return e?Infinity===(e=s(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},3522:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var s=a(28416),l=a.n(s),i=a(45697),r=a.n(i),n=a(86896),c=a(56800),o=a(58790),d=a(2550);const u=({current:e,workloads:t})=>{const a=(0,n.Z)(),s=(0,c.useLocation)().pathname.split("/");return l().createElement("div",null,l().createElement(o.Breadcrumb,{ouiaId:"detail","data-testid":"breadcrumb-item"},l().createElement(o.BreadcrumbItem,{className:"breadcrumb-item"},l().createElement(c.Link,{to:t?"../..":"..",relative:"path"},`${a.formatMessage(d.Z.insightsHeader)} ${s[4]}`)),l().createElement(o.BreadcrumbItem,{className:"breadcrumb-item",isActive:!0},e)))};u.propTypes={current:r().string,workloads:r().boolean};const m=u},83920:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(28416),l=a.n(s),i=a(67073),r=a(24561);const n=()=>l().createElement(i.Card,{ouiaId:"loading-skeleton"},l().createElement(i.CardBody,null,l().createElement(r.aV,null)))},85402:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var s=a(28416),l=a.n(s),i=a(86896),r=a(45697),n=a.n(r),c=a(86706),o=a(44442),d=a(17103),u=a(16234),m=a(29810),f=a(20065),p=a(71355),g=a(2550),b=a(9260);const h=({isModalOpen:e,handleModalToggle:t,rule:a,afterFn:r,host:n,hosts:h})=>{const v=(0,i.Z)(),[C,E]=(0,s.useState)(""),[_,y]=(0,s.useState)(!!n),[k,I]=(0,s.useState)(h.length>0),[M]=(0,b.om)(),S=(0,c.useDispatch)(),Z=e=>S((0,p.addNotification)(e)),N=async()=>{try{_?(await(0,b.Dg)({uuid:n,recId:a.rule_id,justification:C}),Z({variant:"success",timeout:!0,dismissable:!0,title:v.formatMessage(g.Z.recSuccessfullyDisabledForCluster)})):k?(async()=>{try{const e=h.map((e=>(0,b.Dg)({uuid:e.id,recId:a.rule_id,justification:C})));await Promise.all(e),Z({variant:"success",dismissable:!0,timeout:!0,title:v.formatMessage(g.Z.recSuccessfullyDisabledForCluster)})}catch(e){Z({variant:"danger",dismissable:!0,title:v.formatMessage(g.Z.error),description:`${e}`})}})():(await M({rule_id:a.rule_id,justification:C}).unwrap(),Z({variant:"success",timeout:!0,dismissable:!0,title:v.formatMessage(g.Z.recSuccessfullyDisabled)})),E(""),r&&r()}catch(e){Z({variant:"danger",dismissable:!0,title:v.formatMessage(g.Z.error),description:`${e}`})}t(!1)};return l().createElement(m.Modal,{variant:"small",title:v.formatMessage(g.Z.disableRule),isOpen:e,onClose:()=>{t(),E("")},actions:[l().createElement(o.Button,{key:"confirm",variant:"primary",onClick:()=>N(),ouiaId:"confirm"},v.formatMessage(g.Z.save)),l().createElement(o.Button,{key:"cancel",variant:"link",onClick:()=>{t(!1),E("")},ouiaId:"cancel"},v.formatMessage(g.Z.cancel))],ouiaId:"recommendation-disable"},v.formatMessage(g.Z.disableRuleBody),l().createElement(u.Form,null,l().createElement(u.FormGroup,{fieldId:"blank-form"}),(n||h.length>0)&&l().createElement(u.FormGroup,{fieldId:"disable-rule-one-system"},l().createElement(d.Checkbox,{isChecked:_||k,onChange:()=>{n?y(!_):I(!k)},label:n?v.formatMessage(g.Z.disableRuleSingleCluster):v.formatMessage(g.Z.disableRuleForClusters),id:"disable-rule-one-system",name:"disable-rule-one-system",ouiaId:"disable-recommendation-one-cluster"})),l().createElement(u.FormGroup,{label:v.formatMessage(g.Z.justificationNote),fieldId:"disable-rule-justification"},l().createElement(f.TextInput,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:C,onChange:(e,t)=>E(t),onKeyDown:e=>"Enter"===e.key&&(e.preventDefault(),N())}))))};h.propTypes={isModalOpen:n().bool,rule:n().object,handleModalToggle:n().func,afterFn:n().func,host:n().object,hosts:n().array},h.defaultProps={isModalOpen:!1,rule:{},handleModalToggle:()=>{},afterFn:()=>{},host:void 0,hosts:[]};const v=h},63180:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>he});var s=a(28416),l=a.n(s),i=a(56800),r=a(86896),n=a(55140),c=a(86706),o=a(45697),d=a.n(o),u=a(56161),m=a(63456),f=a(85893),p=a(93967),g=a.n(p),b=a(78956),h=a(6427),v=a(36530),C=function(){return C=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},C.apply(this,arguments)};const E=function(e){var t=e.className,a=e.title,s=e.actionsContent,l=e.ouiaId,i=e.ouiaSafe,r=void 0===i||i,n=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(s=Object.getOwnPropertySymbols(e);l<s.length;l++)t.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(a[s[l]]=e[s[l]])}return a}(e,["className","title","actionsContent","ouiaId","ouiaSafe"]),c=g()(t),o="RHI/Header",d=(0,h.useOUIAId)(o,l,r);return(0,f.jsxs)(v.Flex,{justifyContent:{default:"justifyContentSpaceBetween"},children:[(0,f.jsx)(v.FlexItem,{children:(0,f.jsx)(b.Title,C({headingLevel:"h1",size:"2xl",className:c,"widget-type":"InsightsPageHeaderTitle","data-ouia-component-type":o,"data-ouia-component-id":d,"data-ouia-safe":r},n,{children:a}))}),s?(0,f.jsx)(v.FlexItem,{children:s}):null]})};var _=a(62410),y=a(94992),k=a(50318),I=a(44442),M=a(14799),S=a(22454),Z=a(75459),N=a(66251),x=a(84785),O=a(71355),D=a(46639),F=a(58490),j=a(3522),T=a(71070),w=a(81563),P=a(2550),R=a(83920),A=a(97626),L=a(41841),B=a(81249),H=a(45578),$=a.n(H),q=a(77572),z=a(77357),V=a(8780),U=a(90766),W=a(13877),G=a(35981),X=a(49004),K=a(58027),J=a(91306),Q=a(72668),Y=a(85402),ee=a(57642),te=a(38654);const ae=({query:e,rule:t,afterDisableFn:a})=>{const n=(0,r.Z)(),o=(0,c.useDispatch)(),[d,u]=(0,s.useState)([]),[m,f]=(0,s.useState)([]),[p,g]=(0,s.useState)(!1),[b,h]=(0,s.useState)([]),[v,C]=(0,s.useState)(void 0),{isError:E,isUninitialized:y,isFetching:k,isSuccess:I,data:M={disabled:[],enabled:[]}}=e,S=M?.enabled||[],Z=(0,c.useSelector)((({filters:e})=>e.affectedClustersState)),N=Z.limit,x=Z.offset/Z.limit+1,O=0!==d.length&&b.length===d.length,[D,F]=(0,s.useState)(!1),j=y||k||!D,T=E,A=I,L=A&&0===S.length,H=S.length>0&&0===d.length,ae=e=>o((0,Q.BC)(e)),se=(e,t)=>(0,ee.Lv)(Z,ae,e,t),le={items:[{label:n.formatMessage(P.Z.name),placeholder:n.formatMessage(P.Z.filterByName),type:q.conditionalFilterType.text,filterValues:{id:"name-filter",key:"name-filter",onChange:(e,t)=>se("text",t),value:Z.text}},{label:n.formatMessage(P.Z.version),placeholder:n.formatMessage(P.Z.filterByVersion),type:q.conditionalFilterType.checkbox,filterValues:{id:"version-filter",key:"version-filter",onChange:(e,t)=>se("version",t),value:Z.version,items:$()(S.filter((e=>""!==e.meta.cluster_version)).map((e=>({label:e.meta.cluster_version,value:e.meta.cluster_version}))).sort(((e,t)=>(0,ee._)(e.value,t.value,1))).reverse(),"value")}}],isDisabled:E||S&&0===S.length},ie=(e,t)=>{F(!1);const a=t*Z.limit-Z.limit;ae({...Z,offset:a})},re=(e,t)=>{F(!1),ae({...Z,limit:t,offset:0})},ne=e=>e.slice(N*(x-1),N*(x-1)+N).map((e=>({...e,cells:[l().createElement("span",{key:e.id},l().createElement(i.Link,{to:`${te.G}/clusters/${e.id}?first=${t.rule_id}`},e.cells[w.XS])),l().createElement("span",{key:e.id},e.cells[w.R2]||n.formatMessage(P.Z.nA)),l().createElement("span",{key:e.id},e.cells[w.NT]?l().createElement(_.Z,{extraTitle:`${n.formatMessage(P.Z.lastSeen)}: `,date:e.cells[w.NT],variant:"relative"}):l().createElement(V.Tooltip,{key:e.id,content:l().createElement("span",null,n.formatMessage(P.Z.lastSeen)+": ",n.formatMessage(P.Z.nA))},l().createElement("span",null,n.formatMessage(P.Z.nA)))),l().createElement("span",{key:e.id},e.cells[w.ZT]?l().createElement(_.Z,{extraTitle:`${n.formatMessage(P.Z.impacted)}: `,date:e.cells[w.ZT],variant:"relative"}):l().createElement(V.Tooltip,{key:e.id,content:l().createElement("span",null,n.formatMessage(P.Z.impacted)+": ",n.formatMessage(P.Z.nA))},l().createElement("span",null,n.formatMessage(P.Z.nA))))]}))),ce=(e,t,a)=>{let s;s=-1===a?d.map((e=>({...e,selected:t}))):d.map(((e,s)=>({...e,selected:s===a?t:e.selected}))),h(s.filter((e=>e.selected))),u(s),f(ne(s))};(0,s.useEffect)((()=>{u(((e,t)=>(F(!1),e.map((e=>(""===e.meta.cluster_version||(0,B.valid)(e.meta.cluster_version)||console.error(`Cluster version ${e.meta.cluster_version} has invalid format!`),{id:e.cluster,cells:["",e.cluster_name||e.cluster,e.meta.cluster_version,e.last_checked_at,e.impacted]}))).filter((e=>e?.cells[w.XS].toLowerCase().includes(t.text.toLowerCase())&&(0===t.version.length||t.version.includes(e.cells[w.R2])))).sort(((e,a)=>{let s,l;const i="asc"===t.sortDirection?1:-1;switch(t.sortIndex){case w.XS:return i*e?.cells[w.XS].localeCompare(a?.cells[w.XS]);case w.R2:return(0,ee._)(e.cells[w.R2]||"0.0.0",a.cells[w.R2]||"0.0.0",i);case w.NT:return s=new Date(e.cells[w.NT]||0),l=new Date(a.cells[w.NT]||0),s>l?i:l>s?-i:0;case w.ZT:return s=new Date(e.cells[w.ZT]||0),l=new Date(a.cells[w.ZT]||0),s>l?i:l>s?-i:0}}))))(S,Z))}),[e,Z.text,Z.version,Z.sortIndex,Z.sortDirection]),(0,s.useEffect)((()=>{f(ne(d)),F(!0)}),[d,Z.limit,Z.offset]);const oe=(e,t=void 0)=>{g(e),C(t)};return l().createElement("div",{id:"affected-list-table","data-ouia-safe":!j},p&&l().createElement(Y.Z,{handleModalToggle:oe,isModalOpen:p,rule:t,afterFn:a,hosts:void 0!==v?[]:b,host:v}),l().createElement(z.Z,{filterConfig:le,pagination:{itemCount:d.length,page:x,perPage:N,onSetPage:ie,onPerPageSelect:re,ouiaId:"pager"},activeFiltersConfig:E||S&&0===S.length?void 0:{filters:(0,ee.mt)(Z,w.W2),deleteTitle:n.formatMessage(P.Z.resetFilters),onDelete:(e,t,a)=>{a?(0,Q.aw)(Z,Q.Q3,ae):t.map((e=>{const t={[e.urlParam]:Array.isArray(Z[e.urlParam])?Z[e.urlParam].filter((t=>String(t)!==String(e.chips[0].value))):""};var a;t[e.urlParam].length>0?ae({...Z,...t}):(a=e.urlParam,(0,ee.oo)(Z,ae,a))}))}},bulkSelect:{count:b.length,items:[{title:n.formatMessage(P.Z.selectNone),onClick:e=>ce(0,!1,-1)},{title:n.formatMessage(P.Z.selectAll,{items:d?.length||0}),onClick:e=>ce(0,!0,-1)}],checked:O,onSelect:e=>ce(0,!O,-1),checkboxOuiaId:"clusters-selector"},actionsConfig:{actions:["",{label:n.formatMessage(P.Z.disableRuleForClusters),props:{isDisabled:0===b.length},onClick:()=>oe(!0)}]}}),l().createElement(G.i,{"aria-label":"Table of affected clusters",ouiaId:"clusters",ouiaSafe:!j,variant:"compact",cells:w.I9,rows:T||j||H||L?[{fullWidth:!0,cells:[{props:{colSpan:w.I9.length+1},title:T?l().createElement(J.Te,null):j?l().createElement(R.Z,null):L?l().createElement(J.mi,null):l().createElement(J.VA,null)}]}]:A?m:l().createElement(J.Te,null),sortBy:{index:Z.sortIndex,direction:Z.sortDirection},onSort:(e,t,a)=>{F(!1),ae({...Z,sortIndex:t,sortDirection:a})},canSelectAll:!1,onSelect:m?.length>0?ce:void 0,actions:[{title:"Disable recommendation for cluster",onClick:(e,t)=>oe(!0,d[t].id)}]},l().createElement(X.x,null),l().createElement(K.R,null)),l().createElement(U.Pagination,{variant:W.aM.bottom,itemCount:d.length,page:x,perPage:N,onSetPage:ie,onPerPageSelect:re,onPageInput:ie,ouiaId:"pager"}))};ae.propTypes={query:d().shape({isError:d().bool.isRequired,isUninitialized:d().bool.isRequired,isFetching:d().bool.isRequired,isSuccess:d().bool.isRequired,data:d().shape({enabled:d().array,disabled:d().array})}),rule:d().object,afterDisableFn:d().func};var se=a(27478),le=a(11042),ie=a(24561),re=a(1082),ne=a(29810),ce=a(6234),oe=a(9260);const de=({handleModalToggle:e,isModalOpen:t,clusters:a,recId:i,afterFn:n})=>{const o=(0,r.Z)(),d=(0,c.useDispatch)(),{data:u,isFetching:m,isLoading:f,refetch:p}=a,g=u?.disabled||[],[b,h]=(0,s.useState)([]),[v,C]=(0,s.useState)(!1),E=[{title:o.formatMessage(P.Z.clusterName),transforms:[(0,re.d)(50)]},{title:o.formatMessage(P.Z.justificationNote),transforms:[(0,re.d)(25)]},{title:o.formatMessage(P.Z.dateDisabled),transforms:[(0,re.d)(15)]},""];return(0,s.useEffect)((()=>{const t=g?.map((t=>({cells:[t.cluster_name||t.cluster_id,t.justification||o.formatMessage(P.Z.none),{title:l().createElement(_.Z,{date:new Date(t.disabled_at),type:"onlyDate"})},{title:l().createElement(I.Button,{key:t.cluster_id,ouiaId:"enable",isInline:!0,variant:"link",onClick:()=>(async t=>{try{await(0,oe.o1)({uuid:t.cluster_id,recId:i}),p(),C(!0)}catch(t){e(!1),(e=>{d((0,O.addNotification)(e))})({variant:"danger",dismissable:!0,title:o.formatMessage(P.Z.error),description:`${t}`})}})(t)},l().createElement(S.Icon,{size:"sm"},l().createElement(ce.ZP,null)),` ${o.formatMessage(P.Z.enable)}`)}]})));f||0!==g.length||(n(),e(!1)),h(t)}),[g]),l().createElement(ne.Modal,{width:"75%",title:o.formatMessage(P.Z.hostAckModalTitle),isOpen:t,onClose:()=>{v&&n(),e(!1)},ouiaId:"hosts-disabled"},m?l().createElement(G.i,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:l().createElement(ie.aV,null)}]}],cells:E},l().createElement(X.x,null),l().createElement(K.R,null)):l().createElement(G.i,{"aria-label":"host-ack-table",rows:b,cells:E},l().createElement(X.x,null),l().createElement(K.R,null)))};de.propTypes={isModalOpen:d().bool,handleModalToggle:d().func,clusters:d().object,recId:d().string,afterFn:d().func},de.defaultProps={isModalOpen:!1,handleModalToggle:()=>{},clusters:{},recId:"",afterFn:()=>{}};const ue=de;var me=a(21888),fe=a(74759),pe=a(94174),ge=a.n(pe);const be=({rule:e,ack:t,clusters:a,recId:i})=>{const n=(0,r.Z)(),o=(0,c.useDispatch)(),d=e=>o((0,O.addNotification)(e)),[f,p]=(0,s.useState)(!1),[g,b]=(0,s.useState)(!1),[h,v]=(0,s.useState)(!1),{isError:C,isUninitialized:B,isLoading:H,isFetching:$,isSuccess:q,data:z,refetch:V}=e,{data:U,isFetching:W,refetch:G}=t,X=new Date(U?.updated_at||U?.created_at),{data:K,isFetching:J,refetch:Q}=a,ee=q&&z?(0,A.hw)(z.content,i):void 0,te=!J&&K?K.disabled:void 0,ie=async()=>{V(),G(),Q()},re=e=>{p(e)},ne=async e=>{try{await(0,se.HG)(`${le._n}/v2/ack/${e.data.content.rule_id}`),d({variant:"success",timeout:!0,dismissable:!0,title:n.formatMessage(P.Z.recSuccessfullyEnabled)}),V()}catch(e){re(!1),d({variant:"danger",dismissable:!0,title:n.formatMessage(P.Z.error),description:`${e}`})}},ce=(0,s.useMemo)((()=>ee?(0,fe.jL)(n,ee):{}),[n,ee]);return l().createElement(l().Fragment,null,h&&l().createElement(ue,{handleModalToggle:e=>v(e),isModalOpen:h,clusters:a,afterFn:()=>Q(),recId:i}),f&&l().createElement(Y.Z,{handleModalToggle:re,isModalOpen:f,rule:ee,afterFn:ie}),l().createElement(m.Z,{className:"pageHeaderOverride"},l().createElement(j.Z,{current:ee?.description||i})),(B||H||$)&&l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section pf-m-light pf-u-pt-sm"},l().createElement(R.Z,null)),C&&l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section pf-m-light pf-u-pt-sm"},l().createElement(D.Z,null)),!(B||H||$)&&q&&l().createElement(l().Fragment,null,l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section pf-m-light pf-u-pt-sm"},l().createElement(F.Ii,{messages:(0,fe.k5)(n,F.TO,ce),product:F.D1.ocp,rule:ee,isDetailsPage:!0,header:l().createElement(l().Fragment,null,l().createElement(E,{title:l().createElement(l().Fragment,null,ee.description," ",l().createElement(T.Z,{rule:ee}))}),l().createElement("p",null,n.formatMessage(P.Z.rulesDetailsModifiedDate,{date:l().createElement(_.Z,{date:new Date(ee.publish_date),type:"onlyDate"})}),ee.tags&&(Array.isArray(ee.tags)?l().createElement(y.LabelGroup,{className:"categoryLabels",numLabels:1,isCompact:!0},ee.tags.reduce(((e,t)=>(w.kT[t]&&e.push(l().createElement(y.Label,{key:`label-${t}`,color:"blue",isCompact:!0},w.W2.category.values[w.kT[t]-1].label)),e)),[])):l().createElement(y.Label,{isCompact:!0},ee.tags)))),onVoteClick:async(e,t)=>await(0,se.SO)(`${le._n}/v2/rating`,{},{rule:e,rating:t}),...ge()(ee?.resolution_risk,1,5)?{resolutionRisk:ee?.resolution_risk,resolutionRiskDesc:w.wY[ee?.resolution_risk]}:{}},l().createElement(M.Flex,null,l().createElement(M.FlexItem,{align:{default:"alignRight"}},l().createElement(Z.Dropdown,{className:"ins-c-rec-details__actions_dropdown",onOpenChange:e=>b(e),popperProps:{position:"right"},ouiaId:"actions",toggle:e=>l().createElement(N.MenuToggle,{"data-ouia-component-id":"actions-toggle",ref:e,onClick:()=>b(!g)},n.formatMessage(P.Z.actions)),isOpen:g},l().createElement(Z.DropdownList,null,ee?.disabled?l().createElement(Z.DropdownItem,{key:"link",ouiaId:"enable",onClick:()=>{ne(e)}},n.formatMessage(P.Z.enableRule)):l().createElement(Z.DropdownItem,{key:"link",ouiaId:"disable",onClick:()=>{re(!0)}},n.formatMessage(P.Z.disableRule)))))))),l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},l().createElement(l().Fragment,null,(ee?.hosts_acked_count||te?.length>0||ee?.disabled)&&l().createElement(u.Card,{className:"cardOverride",ouiaId:"hosts-acked"},l().createElement(u.CardHeader,null,l().createElement(k.Title,{headingLevel:"h4",size:"xl"},l().createElement(S.Icon,{size:"md"},l().createElement(x.ZP,null))," ",n.formatMessage((ee?.hosts_acked_count||te?.length>0)&&!ee?.disabled?P.Z.ruleIsDisabledForClusters:P.Z.ruleIsDisabled))),l().createElement(u.CardBody,null,(ee?.hosts_acked_count||te?.length>0)&&!ee?.disabled?l().createElement(l().Fragment,null,n.formatMessage(P.Z.ruleIsDisabledForClustersBody,{clusters:te?.length}),!J&&te?.length>0?l().createElement(l().Fragment,null," ",l().createElement(I.Button,{isInline:!0,variant:"link",onClick:()=>v(!0),ouiaId:"view-clusters"},n.formatMessage(P.Z.viewClusters))):l().createElement(me.F,null)):!W&&U&&l().createElement(l().Fragment,null,U?.justification?n.formatMessage(P.Z.ruleIsDisabledWithJustificaiton,{date:l().createElement("span",null,l().createElement(_.Z,{date:X,type:"onlyDate"})),reason:U.justification}):n.formatMessage(P.Z.ruleIsDisabledWithoutJustificaiton,{date:l().createElement("span",null,l().createElement(_.Z,{date:X,type:"onlyDate"}))}))),l().createElement(u.CardFooter,null,(ee?.hosts_acked_count||te?.length>0)&&!ee?.disabled?!J&&te?l().createElement(I.Button,{isInline:!0,variant:"link",onClick:()=>(async({uuids:e})=>{try{const t=e.map((e=>(0,oe.o1)({uuid:e,recId:i})));await Promise.all(t),V(),G(),Q(),d({variant:"success",timeout:!0,dismissable:!0,title:n.formatMessage(P.Z.recSuccessfullyEnabledForCluster)})}catch(e){d({variant:"danger",dismissable:!0,title:n.formatMessage(P.Z.error),description:`${e}`})}})({uuids:te.map((e=>e.cluster_id))}),ouiaId:"enable"},n.formatMessage(P.Z.enableRuleForClusters)):l().createElement(me.F,null):l().createElement(I.Button,{isInline:!0,variant:"link",onClick:()=>ne(e),ouiaId:"enable"},n.formatMessage(P.Z.enableRule)))),!ee?.disabled&&l().createElement(l().Fragment,null,l().createElement(k.Title,{className:"titleOverride",headingLevel:"h3",size:"2xl"},n.formatMessage(P.Z.affectedClusters)),l().createElement(ae,{query:a,rule:ee,afterDisableFn:ie})),ee?.disabled&&l().createElement(L.Z,{icon:x.ZP,title:n.formatMessage(P.Z.ruleIsDisabled),text:n.formatMessage(P.Z.ruleIsDisabledBody)})))))};be.propTypes={rule:d().object.isRequired,ack:d().object.isRequired,clusters:d().object.isRequired,recId:d().string.isRequired};const he=()=>{const e=(0,r.Z)(),{recommendationId:t}=(0,i.useParams)(),a=(0,le.qv)(t),c=(0,oe.yr)({ruleId:t}),o=(0,n.Z)();if(a.isSuccess&&a.data?.content?.description){const t=`${a.data.content.description} - Recommendations`;o.updateDocumentTitle(e.formatMessage(P.Z.documentTitle,{subnav:t}))}const d=(0,le.tf)(t);return(0,s.useEffect)((()=>{a.refetch()}),[t]),l().createElement(be,{rule:a,ack:c,clusters:d,recId:t})}},21888:(e,t,a)=>{"use strict";a.d(t,{F:()=>r});var s=a(28416),l=a.n(s),i=a(24561);const r=()=>l().createElement(i.ZP,{height:20},l().createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"300",height:"20"}))}}]);
//# sourceMappingURL=../sourcemaps/Recommendation.f289352a6cbf94bffb34ba2afa6d8959.js.map