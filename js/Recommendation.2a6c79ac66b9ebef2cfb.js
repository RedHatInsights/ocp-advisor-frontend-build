(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[8987],{2095:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=s.__importDefault(a(54918)),r=a(38296),n=a(23053);t.CardContext=l.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1,isClickable:!1,isSelectable:!1,isSelected:!1,isClicked:!1,isDisabled:!1}),t.Card=e=>{var{children:a,id:c="",className:o,component:d="div",isCompact:u=!1,isSelectable:m=!1,isClickable:f=!1,isDisabled:p=!1,isSelectableRaised:g=!1,isSelected:b=!1,isClicked:h=!1,isDisabledRaised:v=!1,isFlat:C=!1,isExpanded:E=!1,isRounded:_=!1,isLarge:y=!1,isFullHeight:k=!1,isPlain:M=!1,ouiaId:I,ouiaSafe:S=!0,hasSelectableInput:Z=!1,selectableInputAriaLabel:N,onSelectableInputChange:D=(()=>{})}=e,x=s.__rest(e,["children","id","className","component","isCompact","isSelectable","isClickable","isDisabled","isSelectableRaised","isSelected","isClicked","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const F=d,O=(0,n.useOUIAProps)(t.Card.displayName,I,S),[T,j]=l.useState(""),[P,w]=l.useState();u&&y&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),y=!1);const R=l.useRef(!1);return l.useEffect((()=>{N?w({"aria-label":N}):T?w({"aria-labelledby":T}):Z&&!R.current&&(w({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[Z,N,T]),l.createElement(t.CardContext.Provider,{value:{cardId:c,registerTitleId:e=>{j(e),R.current=!!e},isExpanded:E,isClickable:f,isSelectable:m,isSelected:b,isClicked:h,isDisabled:p,hasSelectableInput:Z}},Z&&l.createElement("input",Object.assign({className:"pf-v5-screen-reader",id:`${c}-input`},P,{type:"checkbox",checked:b,onChange:e=>D(e,c),disabled:v,tabIndex:-1})),l.createElement(F,Object.assign({id:c,className:(0,r.css)(i.default.card,u&&i.default.modifiers.compact,E&&i.default.modifiers.expanded,C&&i.default.modifiers.flat,_&&i.default.modifiers.rounded,y&&i.default.modifiers.displayLg,k&&i.default.modifiers.fullHeight,M&&i.default.modifiers.plain,v?(0,r.css)(i.default.modifiers.nonSelectableRaised):g?(0,r.css)(i.default.modifiers.selectableRaised,b&&i.default.modifiers.selectedRaised):m&&f?(0,r.css)(i.default.modifiers.selectable,i.default.modifiers.clickable,(b||h)&&i.default.modifiers.current):m?(0,r.css)(i.default.modifiers.selectable,b&&i.default.modifiers.selected):f?(0,r.css)(i.default.modifiers.clickable,h&&i.default.modifiers.current):"",p&&i.default.modifiers.disabled,o),tabIndex:g?"0":void 0},x,O),a))},t.Card.displayName="Card"},27600:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardActions=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=a(38296),r=s.__importDefault(a(54918));t.CardActions=e=>{var{children:t,className:a,hasNoOffset:n=!1}=e,c=s.__rest(e,["children","className","hasNoOffset"]);return l.createElement("div",Object.assign({className:(0,i.css)(r.default.cardActions,n&&r.default.modifiers.noOffset,a)},c),t)},t.CardActions.displayName="CardActions"},85962:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=s.__importDefault(a(54918)),r=a(38296);t.CardBody=e=>{var{children:t,className:a,component:n="div",isFilled:c=!0}=e,o=s.__rest(e,["children","className","component","isFilled"]);const d=n;return l.createElement(d,Object.assign({className:(0,r.css)(i.default.cardBody,!c&&i.default.modifiers.noFill,a)},o),t)},t.CardBody.displayName="CardBody"},10614:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardExpandableContent=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=s.__importDefault(a(54918)),r=a(38296),n=a(2095);t.CardExpandableContent=e=>{var{children:t,className:a}=e,c=s.__rest(e,["children","className"]);return l.createElement(n.CardContext.Consumer,null,(({isExpanded:e})=>e?l.createElement("div",Object.assign({className:(0,r.css)(i.default.cardExpandableContent,a)},c),t):null))},t.CardExpandableContent.displayName="CardExpandableContent"},45587:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardFooter=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=s.__importDefault(a(54918)),r=a(38296);t.CardFooter=e=>{var{children:t,className:a,component:n="div"}=e,c=s.__rest(e,["children","className","component"]);const o=n;return l.createElement(o,Object.assign({className:(0,r.css)(i.default.cardFooter,a)},c),t)},t.CardFooter.displayName="CardFooter"},21015:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=a(38296),r=s.__importDefault(a(54918)),n=a(2095),c=a(70678),o=a(27600),d=a(51612),u=a(16396),m=s.__importDefault(a(95511)),f=a(57575),p=a(27235);t.CardHeader=e=>{var{children:t,className:a,actions:g,selectableActions:b,id:h,onExpand:v,toggleButtonProps:C,isToggleRightAligned:E}=e,_=s.__rest(e,["children","className","actions","selectableActions","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return l.createElement(n.CardContext.Consumer,null,(({cardId:e,isClickable:s,isSelectable:n,isSelected:y,isClicked:k,isDisabled:M,hasSelectableInput:I})=>{const S=l.createElement("div",{className:(0,i.css)(r.default.cardHeaderToggle)},l.createElement(u.Button,Object.assign({variant:"plain",type:"button",onClick:t=>{v(t,e)}},C),l.createElement("span",{className:(0,i.css)(r.default.cardHeaderToggleIcon)},l.createElement(m.default,{"aria-hidden":"true"})))),Z=s&&!n||n&&!s,N=I;(null==g?void 0:g.actions)&&Z&&!N&&console.warn((s?"Clickable":"Selectable")+" only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.");const D=e=>{(null==b?void 0:b.onClickAction)?b.onClickAction(e):(null==b?void 0:b.to)&&window.open(b.to,b.isExternalLink?"_blank":"_self")},x=()=>{var e;const t={className:"pf-m-standalone",inputClassName:s&&!n&&"pf-v5-screen-reader",label:l.createElement(l.Fragment,null),"aria-label":b.selectableActionAriaLabel,"aria-labelledby":b.selectableActionAriaLabelledby,id:b.selectableActionId,name:b.name,isDisabled:M},a=null!==(e=b.isChecked)&&void 0!==e?e:y;return s&&!n?Object.assign(Object.assign({},t),{onClick:D,isChecked:k}):n?Object.assign(Object.assign({},t),{onChange:b.onChange,isChecked:a}):t};return l.createElement("div",Object.assign({className:(0,i.css)(r.default.cardHeader,E&&r.default.modifiers.toggleRight,a),id:h},_),v&&!E&&S,(g||b&&(s||n))&&l.createElement(o.CardActions,{className:null==g?void 0:g.className,hasNoOffset:(null==g?void 0:g.hasNoOffset)||(null==b?void 0:b.hasNoOffset)},null==g?void 0:g.actions,b&&(s||n)&&l.createElement(d.CardSelectableActions,{className:null==b?void 0:b.className},"single"===(null==b?void 0:b.variant)||s&&!n?l.createElement(f.Radio,Object.assign({},x())):l.createElement(p.Checkbox,Object.assign({},x())))),t&&l.createElement(c.CardHeaderMain,null,t),v&&E&&S)}))},t.CardHeader.displayName="CardHeader"},70678:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeaderMain=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=a(38296),r=s.__importDefault(a(54918));t.CardHeaderMain=e=>{var{children:t,className:a}=e,n=s.__rest(e,["children","className"]);return l.createElement("div",Object.assign({className:(0,i.css)(r.default.cardHeaderMain,a)},n),t)},t.CardHeaderMain.displayName="CardHeaderMain"},51612:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardSelectableActions=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=a(38296),r=s.__importDefault(a(54918));t.CardSelectableActions=e=>{var{children:t,className:a}=e,n=s.__rest(e,["children","className"]);return l.createElement("div",Object.assign({className:(0,i.css)(r.default.cardSelectableActions,a)},n),t)},t.CardSelectableActions.displayName="CardSelectableActions"},36104:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardTitle=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=a(38296),r=s.__importDefault(a(54918)),n=a(2095);t.CardTitle=e=>{var{children:t,className:a,component:c="div"}=e,o=s.__rest(e,["children","className","component"]);const{cardId:d,registerTitleId:u}=l.useContext(n.CardContext),m=c,f=d?`${d}-title`:"";return l.useEffect((()=>(u(f),()=>u(""))),[u,f]),l.createElement("div",{className:(0,i.css)(r.default.cardTitle)},l.createElement(m,Object.assign({className:(0,i.css)(r.default.cardTitleText,a),id:f||void 0},o),t))},t.CardTitle.displayName="CardTitle"},56161:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=a(65353);s.__exportStar(a(2095),t),s.__exportStar(a(85962),t),s.__exportStar(a(10614),t),s.__exportStar(a(45587),t),s.__exportStar(a(36104),t),s.__exportStar(a(21015),t)},9568:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Radio=void 0;const s=a(65353),l=s.__importStar(a(28416)),i=s.__importDefault(a(15466)),r=a(38296),n=a(23053);class c extends l.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},e.label||e["aria-label"]||console.error("Radio:","Radio requires an aria-label to be specified"),this.state={ouiaStateId:(0,n.getDefaultOUIAId)(c.displayName)}}render(){const e=this.props,{"aria-label":t,checked:a,className:o,inputClassName:d,defaultChecked:u,isLabelWrapped:m,isLabelBeforeButton:f,isChecked:p,isDisabled:g,isValid:b,label:h,onChange:v,description:C,body:E,ouiaId:_,ouiaSafe:y=!0,component:k}=e,M=s.__rest(e,["aria-label","checked","className","inputClassName","defaultChecked","isLabelWrapped","isLabelBeforeButton","isChecked","isDisabled","isValid","label","onChange","description","body","ouiaId","ouiaSafe","component"]);M.id||console.error("Radio:","id is required to make input accessible");const I=l.createElement("input",Object.assign({},M,{className:(0,r.css)(i.default.radioInput,d),type:"radio",onChange:this.handleChange,"aria-invalid":!b,disabled:g,checked:a||p},void 0===a&&{defaultChecked:u},!h&&{"aria-label":t},(0,n.getOUIAProps)(c.displayName,void 0!==_?_:this.state.ouiaStateId,y))),S=m&&!k||"label"===k,Z=S?"span":"label",N=h?l.createElement(Z,{className:(0,r.css)(i.default.radioLabel,g&&i.default.modifiers.disabled),htmlFor:S?void 0:M.id},h):null,D=null!=k?k:S?"label":"div";return l.createElement(D,{className:(0,r.css)(i.default.radio,!h&&i.default.modifiers.standalone,o),htmlFor:S?M.id:void 0},f?l.createElement(l.Fragment,null,N,I):l.createElement(l.Fragment,null,I,N),C&&l.createElement("span",{className:(0,r.css)(i.default.radioDescription)},C),E&&l.createElement("span",{className:(0,r.css)(i.default.radioBody)},E))}}t.Radio=c,c.displayName="Radio",c.defaultProps={className:"",isDisabled:!1,isValid:!0,onChange:()=>{}}},57575:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(65353).__exportStar(a(9568),t)},84785:(e,t,a)=>{"use strict";t.ZK={name:"BellSlashIcon",height:512,width:640,svgPath:"M633.82 458.1l-90.62-70.05c.19-1.38.8-2.66.8-4.06.05-7.55-2.61-15.27-8.61-21.71-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-40.33 8.38-74.66 31.07-97.59 62.57L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.35 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.02-2.81-22.45zM157.23 251.54c-8.61 67.96-36.41 93.33-52.62 110.75-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h241.92L157.23 251.54zM320 512c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z",yOffset:0,xOffset:0},t.ow=a(35183).I(t.ZK),t.ZP=t.ow},6234:(e,t,a)=>{"use strict";t.iv={name:"OutlinedBellIcon",height:512,width:448,svgPath:"M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z",yOffset:0,xOffset:0},t.V_=a(35183).I(t.iv),t.ZP=t.V_},46639:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(85893),l=a(64166),i=a(18741),r=function(){return r=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},r.apply(this,arguments)};const n=function(e){return(0,s.jsx)(l.Z,r({defaultErrorDescription:(0,s.jsx)(i.Z,{})},e))}},15600:e=>{var t=Math.max,a=Math.min;e.exports=function(e,s,l){return e>=a(s,l)&&e<t(s,l)}},94174:(e,t,a)=>{var s=a(15600),l=a(18601),i=a(14841);e.exports=function(e,t,a){return t=l(t),void 0===a?(a=t,t=0):a=l(a),e=i(e),s(e,t,a)}},18601:(e,t,a)=>{var s=a(14841);e.exports=function(e){return e?Infinity===(e=s(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},3522:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var s=a(28416),l=a.n(s),i=a(45697),r=a.n(i),n=a(86896),c=a(56800),o=a(58790),d=a(2550);const u=({current:e,workloads:t})=>{const a=(0,n.Z)(),s=(0,c.useLocation)().pathname.split("/");return l().createElement("div",null,l().createElement(o.Breadcrumb,{ouiaId:"detail","data-testid":"breadcrumb-item"},l().createElement(o.BreadcrumbItem,{className:"breadcrumb-item"},l().createElement(c.Link,{to:t?"../..":"..",relative:"path"},`${a.formatMessage(d.Z.insightsHeader)} ${s[4]}`)),l().createElement(o.BreadcrumbItem,{className:"breadcrumb-item",isActive:!0},e)))};u.propTypes={current:r().string,workloads:r().boolean};const m=u},83920:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(28416),l=a.n(s),i=a(67073),r=a(24561);const n=()=>l().createElement(i.Card,{ouiaId:"loading-skeleton"},l().createElement(i.CardBody,null,l().createElement(r.aV,null)))},85402:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var s=a(28416),l=a.n(s),i=a(86896),r=a(45697),n=a.n(r),c=a(86706),o=a(44442),d=a(17103),u=a(16234),m=a(29810),f=a(20065),p=a(71355),g=a(2550),b=a(9260);const h=({isModalOpen:e,handleModalToggle:t,rule:a,afterFn:r,host:n,hosts:h})=>{const v=(0,i.Z)(),[C,E]=(0,s.useState)(""),[_,y]=(0,s.useState)(!!n),[k,M]=(0,s.useState)(h.length>0),[I]=(0,b.om)(),S=(0,c.useDispatch)(),Z=e=>S((0,p.addNotification)(e)),N=async()=>{try{_?(await(0,b.Dg)({uuid:n,recId:a.rule_id,justification:C}),Z({variant:"success",timeout:!0,dismissable:!0,title:v.formatMessage(g.Z.recSuccessfullyDisabledForCluster)})):k?(async()=>{try{const e=h.map((e=>(0,b.Dg)({uuid:e.id,recId:a.rule_id,justification:C})));await Promise.all(e),Z({variant:"success",dismissable:!0,timeout:!0,title:v.formatMessage(g.Z.recSuccessfullyDisabledForCluster)})}catch(e){Z({variant:"danger",dismissable:!0,title:v.formatMessage(g.Z.error),description:`${e}`})}})():(await I({rule_id:a.rule_id,justification:C}).unwrap(),Z({variant:"success",timeout:!0,dismissable:!0,title:v.formatMessage(g.Z.recSuccessfullyDisabled)})),E(""),r&&r()}catch(e){Z({variant:"danger",dismissable:!0,title:v.formatMessage(g.Z.error),description:`${e}`})}t(!1)};return l().createElement(m.Modal,{variant:"small",title:v.formatMessage(g.Z.disableRule),isOpen:e,onClose:()=>{t(),E("")},actions:[l().createElement(o.Button,{key:"confirm",variant:"primary",onClick:()=>N(),ouiaId:"confirm"},v.formatMessage(g.Z.save)),l().createElement(o.Button,{key:"cancel",variant:"link",onClick:()=>{t(!1),E("")},ouiaId:"cancel"},v.formatMessage(g.Z.cancel))],ouiaId:"recommendation-disable"},v.formatMessage(g.Z.disableRuleBody),l().createElement(u.Form,null,l().createElement(u.FormGroup,{fieldId:"blank-form"}),(n||h.length>0)&&l().createElement(u.FormGroup,{fieldId:"disable-rule-one-system"},l().createElement(d.Checkbox,{isChecked:_||k,onChange:()=>{n?y(!_):M(!k)},label:n?v.formatMessage(g.Z.disableRuleSingleCluster):v.formatMessage(g.Z.disableRuleForClusters),id:"disable-rule-one-system",name:"disable-rule-one-system",ouiaId:"disable-recommendation-one-cluster"})),l().createElement(u.FormGroup,{label:v.formatMessage(g.Z.justificationNote),fieldId:"disable-rule-justification"},l().createElement(f.TextInput,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:C,onChange:(e,t)=>E(t),onKeyDown:e=>"Enter"===e.key&&(e.preventDefault(),N())}))))};h.propTypes={isModalOpen:n().bool,rule:n().object,handleModalToggle:n().func,afterFn:n().func,host:n().object,hosts:n().array},h.defaultProps={isModalOpen:!1,rule:{},handleModalToggle:()=>{},afterFn:()=>{},host:void 0,hosts:[]};const v=h},63180:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>pe});var s=a(28416),l=a.n(s),i=a(56800),r=a(86896),n=a(55140),c=a(86706),o=a(45697),d=a.n(o),u=a(56161),m=a(63456),f=a(85893),p=a(93967),g=a.n(p),b=a(78956);const h=function(e){var t=e.className,a=e.title,s=g()(t);return(0,f.jsx)(b.Title,{headingLevel:"h1",size:"2xl",className:s,"widget-type":"InsightsPageHeaderTitle",children:a})};var v=a(62410),C=a(94992),E=a(50318),_=a(44442),y=a(14799),k=a(22454),M=a(75459),I=a(66251),S=a(84785),Z=a(71355),N=a(46639),D=a(58490),x=a(3522),F=a(71070),O=a(81563),T=a(2550),j=a(83920),P=a(97626),w=a(41841),R=a(81249),A=a(45578),L=a.n(A),B=a(77572),H=a(77357),$=a(8780),q=a(90766),z=a(13877),V=a(35981),W=a(49004),G=a(58027),U=a(91306),X=a(72668),K=a(85402),J=a(57642),Q=a(38654);const Y=({query:e,rule:t,afterDisableFn:a})=>{const n=(0,r.Z)(),o=(0,c.useDispatch)(),[d,u]=(0,s.useState)([]),[m,f]=(0,s.useState)([]),[p,g]=(0,s.useState)(!1),[b,h]=(0,s.useState)([]),[C,E]=(0,s.useState)(void 0),{isError:_,isUninitialized:y,isFetching:k,isSuccess:M,data:I={disabled:[],enabled:[]}}=e,S=I?.enabled||[],Z=(0,c.useSelector)((({filters:e})=>e.affectedClustersState)),N=Z.limit,D=Z.offset/Z.limit+1,x=0!==d.length&&b.length===d.length,[F,P]=(0,s.useState)(!1),w=y||k||!F,A=_,Y=M,ee=Y&&0===S.length,te=S.length>0&&0===d.length,ae=e=>o((0,X.BC)(e)),se=(e,t)=>(0,J.Lv)(Z,ae,e,t),le={items:[{label:n.formatMessage(T.Z.name),placeholder:n.formatMessage(T.Z.filterByName),type:B.conditionalFilterType.text,filterValues:{id:"name-filter",key:"name-filter",onChange:(e,t)=>se("text",t),value:Z.text}},{label:n.formatMessage(T.Z.version),placeholder:n.formatMessage(T.Z.filterByVersion),type:B.conditionalFilterType.checkbox,filterValues:{id:"version-filter",key:"version-filter",onChange:(e,t)=>se("version",t),value:Z.version,items:L()(S.filter((e=>""!==e.meta.cluster_version)).map((e=>({label:e.meta.cluster_version,value:e.meta.cluster_version}))).sort(((e,t)=>(0,J._)(e.value,t.value,1))).reverse(),"value")}}],isDisabled:_||S&&0===S.length},ie=(e,t)=>{P(!1);const a=t*Z.limit-Z.limit;ae({...Z,offset:a})},re=(e,t)=>{P(!1),ae({...Z,limit:t,offset:0})},ne=e=>e.slice(N*(D-1),N*(D-1)+N).map((e=>({...e,cells:[l().createElement("span",{key:e.id},l().createElement(i.Link,{to:`${Q.G}/clusters/${e.id}?first=${t.rule_id}`},e.cells[O.XS])),l().createElement("span",{key:e.id},e.cells[O.R2]||n.formatMessage(T.Z.nA)),l().createElement("span",{key:e.id},e.cells[O.NT]?l().createElement(v.Z,{extraTitle:`${n.formatMessage(T.Z.lastSeen)}: `,date:e.cells[O.NT],variant:"relative"}):l().createElement($.Tooltip,{key:e.id,content:l().createElement("span",null,n.formatMessage(T.Z.lastSeen)+": ",n.formatMessage(T.Z.nA))},l().createElement("span",null,n.formatMessage(T.Z.nA)))),l().createElement("span",{key:e.id},e.cells[O.ZT]?l().createElement(v.Z,{extraTitle:`${n.formatMessage(T.Z.impacted)}: `,date:e.cells[O.ZT],variant:"relative"}):l().createElement($.Tooltip,{key:e.id,content:l().createElement("span",null,n.formatMessage(T.Z.impacted)+": ",n.formatMessage(T.Z.nA))},l().createElement("span",null,n.formatMessage(T.Z.nA))))]}))),ce=(e,t,a)=>{let s;s=-1===a?d.map((e=>({...e,selected:t}))):d.map(((e,s)=>({...e,selected:s===a?t:e.selected}))),h(s.filter((e=>e.selected))),u(s),f(ne(s))};(0,s.useEffect)((()=>{u(((e,t)=>(P(!1),e.map((e=>(""===e.meta.cluster_version||(0,R.valid)(e.meta.cluster_version)||console.error(`Cluster version ${e.meta.cluster_version} has invalid format!`),{id:e.cluster,cells:["",e.cluster_name||e.cluster,e.meta.cluster_version,e.last_checked_at,e.impacted]}))).filter((e=>e?.cells[O.XS].toLowerCase().includes(t.text.toLowerCase())&&(0===t.version.length||t.version.includes(e.cells[O.R2])))).sort(((e,a)=>{let s,l;const i="asc"===t.sortDirection?1:-1;switch(t.sortIndex){case O.XS:return i*e?.cells[O.XS].localeCompare(a?.cells[O.XS]);case O.R2:return(0,J._)(e.cells[O.R2]||"0.0.0",a.cells[O.R2]||"0.0.0",i);case O.NT:return s=new Date(e.cells[O.NT]||0),l=new Date(a.cells[O.NT]||0),s>l?i:l>s?-i:0;case O.ZT:return s=new Date(e.cells[O.ZT]||0),l=new Date(a.cells[O.ZT]||0),s>l?i:l>s?-i:0}}))))(S,Z))}),[e,Z.text,Z.version,Z.sortIndex,Z.sortDirection]),(0,s.useEffect)((()=>{f(ne(d)),P(!0)}),[d,Z.limit,Z.offset]);const oe=(e,t=void 0)=>{g(e),E(t)};return l().createElement("div",{id:"affected-list-table","data-ouia-safe":!w},p&&l().createElement(K.Z,{handleModalToggle:oe,isModalOpen:p,rule:t,afterFn:a,hosts:void 0!==C?[]:b,host:C}),l().createElement(H.Z,{filterConfig:le,pagination:{itemCount:d.length,page:D,perPage:N,onSetPage:ie,onPerPageSelect:re,ouiaId:"pager"},activeFiltersConfig:_||S&&0===S.length?void 0:{filters:(0,J.mt)(Z,O.W2),deleteTitle:n.formatMessage(T.Z.resetFilters),onDelete:(e,t,a)=>{a?(0,X.aw)(Z,X.Q3,ae):t.map((e=>{const t={[e.urlParam]:Array.isArray(Z[e.urlParam])?Z[e.urlParam].filter((t=>String(t)!==String(e.chips[0].value))):""};var a;t[e.urlParam].length>0?ae({...Z,...t}):(a=e.urlParam,(0,J.oo)(Z,ae,a))}))}},bulkSelect:{count:b.length,items:[{title:n.formatMessage(T.Z.selectNone),onClick:e=>ce(0,!1,-1)},{title:n.formatMessage(T.Z.selectAll,{items:d?.length||0}),onClick:e=>ce(0,!0,-1)}],checked:x,onSelect:e=>ce(0,!x,-1),checkboxOuiaId:"clusters-selector"},actionsConfig:{actions:["",{label:n.formatMessage(T.Z.disableRuleForClusters),props:{isDisabled:0===b.length},onClick:()=>oe(!0)}]}}),l().createElement(V.i,{"aria-label":"Table of affected clusters",ouiaId:"clusters",ouiaSafe:!w,variant:"compact",cells:O.I9,rows:A||w||te||ee?[{fullWidth:!0,cells:[{props:{colSpan:O.I9.length+1},title:A?l().createElement(U.Te,null):w?l().createElement(j.Z,null):ee?l().createElement(U.mi,null):l().createElement(U.VA,null)}]}]:Y?m:l().createElement(U.Te,null),sortBy:{index:Z.sortIndex,direction:Z.sortDirection},onSort:(e,t,a)=>{P(!1),ae({...Z,sortIndex:t,sortDirection:a})},canSelectAll:!1,onSelect:m?.length>0?ce:void 0,actions:[{title:"Disable recommendation for cluster",onClick:(e,t)=>oe(!0,d[t].id)}]},l().createElement(W.x,null),l().createElement(G.R,null)),l().createElement(q.Pagination,{variant:z.aM.bottom,itemCount:d.length,page:D,perPage:N,onSetPage:ie,onPerPageSelect:re,onPageInput:ie,ouiaId:"pager"}))};Y.propTypes={query:d().shape({isError:d().bool.isRequired,isUninitialized:d().bool.isRequired,isFetching:d().bool.isRequired,isSuccess:d().bool.isRequired,data:d().shape({enabled:d().array,disabled:d().array})}),rule:d().object,afterDisableFn:d().func};var ee=a(27478),te=a(11042),ae=a(24561),se=a(1082),le=a(29810),ie=a(6234),re=a(9260);const ne=({handleModalToggle:e,isModalOpen:t,clusters:a,recId:i,afterFn:n})=>{const o=(0,r.Z)(),d=(0,c.useDispatch)(),{data:u,isFetching:m,isLoading:f,refetch:p}=a,g=u?.disabled||[],[b,h]=(0,s.useState)([]),[C,E]=(0,s.useState)(!1),y=[{title:o.formatMessage(T.Z.clusterName),transforms:[(0,se.d)(50)]},{title:o.formatMessage(T.Z.justificationNote),transforms:[(0,se.d)(25)]},{title:o.formatMessage(T.Z.dateDisabled),transforms:[(0,se.d)(15)]},""];return(0,s.useEffect)((()=>{const t=g?.map((t=>({cells:[t.cluster_name||t.cluster_id,t.justification||o.formatMessage(T.Z.none),{title:l().createElement(v.Z,{date:new Date(t.disabled_at),type:"onlyDate"})},{title:l().createElement(_.Button,{key:t.cluster_id,ouiaId:"enable",isInline:!0,variant:"link",onClick:()=>(async t=>{try{await(0,re.o1)({uuid:t.cluster_id,recId:i}),p(),E(!0)}catch(t){e(!1),(e=>{d((0,Z.addNotification)(e))})({variant:"danger",dismissable:!0,title:o.formatMessage(T.Z.error),description:`${t}`})}})(t)},l().createElement(k.Icon,{size:"sm"},l().createElement(ie.ZP,null)),` ${o.formatMessage(T.Z.enable)}`)}]})));f||0!==g.length||(n(),e(!1)),h(t)}),[g]),l().createElement(le.Modal,{width:"75%",title:o.formatMessage(T.Z.hostAckModalTitle),isOpen:t,onClose:()=>{C&&n(),e(!1)},ouiaId:"hosts-disabled"},m?l().createElement(V.i,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:l().createElement(ae.aV,null)}]}],cells:y},l().createElement(W.x,null),l().createElement(G.R,null)):l().createElement(V.i,{"aria-label":"host-ack-table",rows:b,cells:y},l().createElement(W.x,null),l().createElement(G.R,null)))};ne.propTypes={isModalOpen:d().bool,handleModalToggle:d().func,clusters:d().object,recId:d().string,afterFn:d().func},ne.defaultProps={isModalOpen:!1,handleModalToggle:()=>{},clusters:{},recId:"",afterFn:()=>{}};const ce=ne;var oe=a(21888),de=a(74759),ue=a(94174),me=a.n(ue);const fe=({rule:e,ack:t,clusters:a,recId:i})=>{const n=(0,r.Z)(),o=(0,c.useDispatch)(),d=e=>o((0,Z.addNotification)(e)),[f,p]=(0,s.useState)(!1),[g,b]=(0,s.useState)(!1),[R,A]=(0,s.useState)(!1),{isError:L,isUninitialized:B,isLoading:H,isFetching:$,isSuccess:q,data:z,refetch:V}=e,{data:W,isFetching:G,refetch:U}=t,X=new Date(W?.updated_at||W?.created_at),{data:J,isFetching:Q,refetch:ae}=a,se=q&&z?(0,P.hw)(z.content,i):void 0,le=!Q&&J?J.disabled:void 0,ie=async()=>{V(),U(),ae()},ne=e=>{p(e)},ue=async e=>{try{await(0,ee.HG)(`${te._n}/v2/ack/${e.data.content.rule_id}`),d({variant:"success",timeout:!0,dismissable:!0,title:n.formatMessage(T.Z.recSuccessfullyEnabled)}),V()}catch(e){ne(!1),d({variant:"danger",dismissable:!0,title:n.formatMessage(T.Z.error),description:`${e}`})}},fe=(0,s.useMemo)((()=>se?(0,de.jL)(n,se):{}),[n,se]);return l().createElement(l().Fragment,null,R&&l().createElement(ce,{handleModalToggle:e=>A(e),isModalOpen:R,clusters:a,afterFn:()=>ae(),recId:i}),f&&l().createElement(K.Z,{handleModalToggle:ne,isModalOpen:f,rule:se,afterFn:ie}),l().createElement(m.Z,{className:"pageHeaderOverride"},l().createElement(x.Z,{current:se?.description||i})),(B||H||$)&&l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section pf-m-light pf-u-pt-sm"},l().createElement(j.Z,null)),L&&l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section pf-m-light pf-u-pt-sm"},l().createElement(N.Z,null)),!(B||H||$)&&q&&l().createElement(l().Fragment,null,l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section pf-m-light pf-u-pt-sm"},l().createElement(D.Ii,{messages:(0,de.k5)(n,D.TO,fe),product:D.D1.ocp,rule:se,isDetailsPage:!0,header:l().createElement(l().Fragment,null,l().createElement(h,{title:l().createElement(l().Fragment,null,se.description," ",l().createElement(F.Z,{rule:se}))}),l().createElement("p",null,n.formatMessage(T.Z.rulesDetailsModifiedDate,{date:l().createElement(v.Z,{date:new Date(se.publish_date),type:"onlyDate"})}),se.tags&&(Array.isArray(se.tags)?l().createElement(C.LabelGroup,{className:"categoryLabels",numLabels:1,isCompact:!0},se.tags.reduce(((e,t)=>(O.kT[t]&&e.push(l().createElement(C.Label,{key:`label-${t}`,color:"blue",isCompact:!0},O.W2.category.values[O.kT[t]-1].label)),e)),[])):l().createElement(C.Label,{isCompact:!0},se.tags)))),onVoteClick:async(e,t)=>await(0,ee.SO)(`${te._n}/v2/rating`,{},{rule:e,rating:t}),...me()(se?.resolution_risk,1,5)?{resolutionRisk:se?.resolution_risk,resolutionRiskDesc:O.wY[se?.resolution_risk]}:{}},l().createElement(y.Flex,null,l().createElement(y.FlexItem,{align:{default:"alignRight"}},l().createElement(M.Dropdown,{className:"ins-c-rec-details__actions_dropdown",onOpenChange:e=>b(e),popperProps:{position:"right"},ouiaId:"actions",toggle:e=>l().createElement(I.MenuToggle,{"data-ouia-component-id":"actions-toggle",ref:e,onClick:()=>b(!g)},n.formatMessage(T.Z.actions)),isOpen:g},l().createElement(M.DropdownList,null,se?.disabled?l().createElement(M.DropdownItem,{key:"link",ouiaId:"enable",onClick:()=>{ue(e)}},n.formatMessage(T.Z.enableRule)):l().createElement(M.DropdownItem,{key:"link",ouiaId:"disable",onClick:()=>{ne(!0)}},n.formatMessage(T.Z.disableRule)))))))),l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},l().createElement(l().Fragment,null,(se?.hosts_acked_count||le?.length>0||se?.disabled)&&l().createElement(u.Card,{className:"cardOverride",ouiaId:"hosts-acked"},l().createElement(u.CardHeader,null,l().createElement(E.Title,{headingLevel:"h4",size:"xl"},l().createElement(k.Icon,{size:"md"},l().createElement(S.ZP,null))," ",n.formatMessage((se?.hosts_acked_count||le?.length>0)&&!se?.disabled?T.Z.ruleIsDisabledForClusters:T.Z.ruleIsDisabled))),l().createElement(u.CardBody,null,(se?.hosts_acked_count||le?.length>0)&&!se?.disabled?l().createElement(l().Fragment,null,n.formatMessage(T.Z.ruleIsDisabledForClustersBody,{clusters:le?.length}),!Q&&le?.length>0?l().createElement(l().Fragment,null," ",l().createElement(_.Button,{isInline:!0,variant:"link",onClick:()=>A(!0),ouiaId:"view-clusters"},n.formatMessage(T.Z.viewClusters))):l().createElement(oe.F,null)):!G&&W&&l().createElement(l().Fragment,null,W?.justification?n.formatMessage(T.Z.ruleIsDisabledWithJustificaiton,{date:l().createElement("span",null,l().createElement(v.Z,{date:X,type:"onlyDate"})),reason:W.justification}):n.formatMessage(T.Z.ruleIsDisabledWithoutJustificaiton,{date:l().createElement("span",null,l().createElement(v.Z,{date:X,type:"onlyDate"}))}))),l().createElement(u.CardFooter,null,(se?.hosts_acked_count||le?.length>0)&&!se?.disabled?!Q&&le?l().createElement(_.Button,{isInline:!0,variant:"link",onClick:()=>(async({uuids:e})=>{try{const t=e.map((e=>(0,re.o1)({uuid:e,recId:i})));await Promise.all(t),V(),U(),ae(),d({variant:"success",timeout:!0,dismissable:!0,title:n.formatMessage(T.Z.recSuccessfullyEnabledForCluster)})}catch(e){d({variant:"danger",dismissable:!0,title:n.formatMessage(T.Z.error),description:`${e}`})}})({uuids:le.map((e=>e.cluster_id))}),ouiaId:"enable"},n.formatMessage(T.Z.enableRuleForClusters)):l().createElement(oe.F,null):l().createElement(_.Button,{isInline:!0,variant:"link",onClick:()=>ue(e),ouiaId:"enable"},n.formatMessage(T.Z.enableRule)))),!se?.disabled&&l().createElement(l().Fragment,null,l().createElement(E.Title,{className:"titleOverride",headingLevel:"h3",size:"2xl"},n.formatMessage(T.Z.affectedClusters)),l().createElement(Y,{query:a,rule:se,afterDisableFn:ie})),se?.disabled&&l().createElement(w.Z,{icon:S.ZP,title:n.formatMessage(T.Z.ruleIsDisabled),text:n.formatMessage(T.Z.ruleIsDisabledBody)})))))};fe.propTypes={rule:d().object.isRequired,ack:d().object.isRequired,clusters:d().object.isRequired,recId:d().string.isRequired};const pe=()=>{const e=(0,r.Z)(),{recommendationId:t}=(0,i.useParams)(),a=(0,te.qv)(t),c=(0,re.yr)({ruleId:t}),o=(0,n.Z)();if(a.isSuccess&&a.data?.content?.description){const t=`${a.data.content.description} - Recommendations`;o.updateDocumentTitle(e.formatMessage(T.Z.documentTitle,{subnav:t}))}const d=(0,te.tf)(t);return(0,s.useEffect)((()=>{a.refetch()}),[t]),l().createElement(fe,{rule:a,ack:c,clusters:d,recId:t})}},21888:(e,t,a)=>{"use strict";a.d(t,{F:()=>r});var s=a(28416),l=a.n(s),i=a(24561);const r=()=>l().createElement(i.ZP,{height:20},l().createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"300",height:"20"}))}}]);
//# sourceMappingURL=../sourcemaps/Recommendation.bf6803d89e9225d4d4684eaa9aba1515.js.map