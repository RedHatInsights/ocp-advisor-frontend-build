(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[601],{61398:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Backdrop=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=t(38296),s=l.__importDefault(t(19993));a.Backdrop=e=>{var{children:a=null,className:t=""}=e,r=l.__rest(e,["children","className"]);return i.createElement("div",Object.assign({},r,{className:(0,o.css)(s.default.backdrop,t)}),a)},a.Backdrop.displayName="Backdrop"},32752:(e,a,t)=>{"use strict";a.X=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=l.__importDefault(t(54783)),s=t(38296),r=t(23053),n=t(44115),d=()=>{};class c extends i.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)},this.state={ouiaStateId:(0,r.getDefaultOUIAId)(c.displayName)}}render(){const e=this.props,{"aria-label":a,className:t,onChange:p,isValid:m,isDisabled:u,isRequired:f,isChecked:h,label:b,checked:_,defaultChecked:g,description:y,body:x,ouiaId:I,ouiaSafe:v,component:C}=e,E=l.__rest(e,["aria-label","className","onChange","isValid","isDisabled","isRequired","isChecked","label","checked","defaultChecked","description","body","ouiaId","ouiaSafe","component"]);E.id||console.error("Checkbox:","id is required to make input accessible");const N={};return([!0,!1].includes(_)||!0===h)&&(N.checked=_||h),p!==d&&(N.checked=h),[!1,!0].includes(g)&&(N.defaultChecked=g),N.checked=null!==N.checked&&N.checked,i.createElement(C,{className:(0,s.css)(o.default.check,!b&&o.default.modifiers.standalone,t)},i.createElement("input",Object.assign({},E,{className:(0,s.css)(o.default.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!m,"aria-label":a,disabled:u,required:f,ref:e=>e&&(e.indeterminate=null===h)},N,(0,r.getOUIAProps)(c.displayName,void 0!==I?I:this.state.ouiaStateId,v))),b&&i.createElement("label",{className:(0,s.css)(o.default.checkLabel,u&&o.default.modifiers.disabled),htmlFor:E.id},b,f&&i.createElement("span",{className:(0,s.css)(o.default.checkLabelRequired),"aria-hidden":"true"},n.ASTERISK)),y&&i.createElement("span",{className:(0,s.css)(o.default.checkDescription)},y),x&&i.createElement("span",{className:(0,s.css)(o.default.checkBody)},x))}}a.X=c,c.displayName="Checkbox",c.defaultProps={className:"",isValid:!0,isDisabled:!1,isRequired:!1,isChecked:!1,onChange:d,ouiaSafe:!0,component:"div"}},4853:(e,a,t)=>{"use strict";a.l=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=l.__importDefault(t(11924)),s=t(38296),r=e=>{var{children:a=null,className:t="",isHorizontal:r=!1,isWidthLimited:n=!1,maxWidth:d="",innerRef:c}=e,p=l.__rest(e,["children","className","isHorizontal","isWidthLimited","maxWidth","innerRef"]);return i.createElement("form",Object.assign({noValidate:!0},d&&{style:Object.assign({"--pf-c-form--m-limit-width--MaxWidth":d},p.style)},p,{className:(0,s.css)(o.default.form,r&&o.default.modifiers.horizontal,(n||d)&&o.default.modifiers.limitWidth,t),ref:c}),a)};a.l=i.forwardRef(((e,a)=>i.createElement(r,Object.assign({innerRef:a},e)))),a.l.displayName="Form"},23811:(e,a,t)=>{"use strict";a.c=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=l.__importDefault(t(11924)),s=t(44115),r=t(38296),n=t(26670),d=t(80997);a.c=e=>{var{children:a=null,className:t="",label:c,labelInfo:p,labelIcon:m,isRequired:u=!1,validated:f="default",isInline:h=!1,hasNoPaddingTop:b=!1,isStack:_=!1,helperText:g,isHelperTextBeforeField:y=!1,helperTextInvalid:x,helperTextIcon:I,helperTextInvalidIcon:v,fieldId:C,role:E}=e,N=l.__rest(e,["children","className","label","labelInfo","labelIcon","isRequired","validated","isInline","hasNoPaddingTop","isStack","helperText","isHelperTextBeforeField","helperTextInvalid","helperTextIcon","helperTextInvalidIcon","fieldId","role"]);const B="string"!=typeof g?g:i.createElement("div",{className:(0,r.css)(o.default.formHelperText,f===n.ValidatedOptions.success&&o.default.modifiers.success,f===n.ValidatedOptions.warning&&o.default.modifiers.warning),id:`${C}-helper`,"aria-live":"polite"},I&&i.createElement("span",{className:(0,r.css)(o.default.formHelperTextIcon)},I),g),T="string"!=typeof x?x:i.createElement("div",{className:(0,r.css)(o.default.formHelperText,o.default.modifiers.error),id:`${C}-helper`,"aria-live":"polite"},v&&i.createElement("span",{className:(0,r.css)(o.default.formHelperTextIcon)},v),x),O=f===n.ValidatedOptions.error&&x?T:f!==n.ValidatedOptions.error&&g?B:"",L="group"===E||"radiogroup"===E,k=L?"span":"label",M=i.createElement(i.Fragment,null,i.createElement(k,Object.assign({className:(0,r.css)(o.default.formLabel)},!L&&{htmlFor:C}),i.createElement("span",{className:(0,r.css)(o.default.formLabelText)},c),u&&i.createElement("span",{className:(0,r.css)(o.default.formLabelRequired),"aria-hidden":"true"}," ",s.ASTERISK))," ",i.isValidElement(m)&&m);return i.createElement(d.GenerateId,null,(e=>i.createElement("div",Object.assign({className:(0,r.css)(o.default.formGroup,t)},E&&{role:E},L&&{"aria-labelledby":`${C||e}-legend`},N),c&&i.createElement("div",Object.assign({className:(0,r.css)(o.default.formGroupLabel,p&&o.default.modifiers.info,b&&o.default.modifiers.noPaddingTop)},L&&{id:`${C||e}-legend`}),p&&i.createElement(i.Fragment,null,i.createElement("div",{className:(0,r.css)(o.default.formGroupLabelMain)},M),i.createElement("div",{className:(0,r.css)(o.default.formGroupLabelInfo)},p)),!p&&M),i.createElement("div",{className:(0,r.css)(o.default.formGroupControl,h&&o.default.modifiers.inline,_&&o.default.modifiers.stack)},y&&O,a,!y&&O))))},a.c.displayName="FormGroup"},42293:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t(70655).__exportStar(t(23218),a)},26407:(e,a,t)=>{"use strict";a.e=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=l.__importDefault(t(72002)),s=l.__importDefault(t(83063)),r=t(38296),n=t(16396),d=t(42293),c=t(8045),p=l.__importDefault(t(77669)),m=t(23053),u=t(80997);class f extends i.Component{constructor(e){super(e),this.headingRef=i.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:a,tooltipPosition:t}=this.props,{isTooltipVisible:l}=this.state;return l?i.createElement(c.Tooltip,{position:t,content:a},i.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,r.css)(o.default.labelGroupLabel)},i.createElement("span",{"aria-hidden":"true",id:e},a))):i.createElement("span",{ref:this.headingRef,className:(0,r.css)(o.default.labelGroupLabel),"aria-hidden":"true",id:e},a)}render(){const e=this.props,{categoryName:a,children:t,className:c,isClosable:f,isCompact:h,closeBtnAriaLabel:b,"aria-label":_,onClick:g,numLabels:y,expandedText:x,collapsedText:I,defaultIsOpen:v,tooltipPosition:C,isVertical:E,isEditable:N,hasEditableTextArea:B,editableTextAreaProps:T,addLabelControl:O}=e,L=l.__rest(e,["categoryName","children","className","isClosable","isCompact","closeBtnAriaLabel","aria-label","onClick","numLabels","expandedText","collapsedText","defaultIsOpen","tooltipPosition","isVertical","isEditable","hasEditableTextArea","editableTextAreaProps","addLabelControl"]),{isOpen:k}=this.state,M=i.Children.toArray(t),S=M.length,R=(0,m.fillTemplate)(I,{remaining:S-y}),D=e=>{const t=k?M:M.slice(0,y),l=i.createElement(i.Fragment,null,a&&this.renderLabel(e),i.createElement("ul",Object.assign({className:(0,r.css)(o.default.labelGroupList)},a&&{"aria-labelledby":e},!a&&{"aria-label":_},{role:"list"},L),t.map(((e,a)=>i.createElement("li",{className:(0,r.css)(o.default.labelGroupListItem),key:a},e))),S>y&&i.createElement("li",{className:(0,r.css)(o.default.labelGroupListItem)},i.createElement(d.Label,{isOverflowLabel:!0,onClick:this.toggleCollapse,className:(0,r.css)(h&&s.default.modifiers.compact)},k?x:R)),O&&i.createElement("li",{className:(0,r.css)(o.default.labelGroupListItem)},O),N&&B&&i.createElement("li",{className:(0,r.css)(o.default.labelGroupListItem,o.default.modifiers.textarea)},i.createElement("textarea",Object.assign({className:(0,r.css)(o.default.labelGroupTextarea),rows:1,tabIndex:0},T))))),m=i.createElement("div",{className:(0,r.css)(o.default.labelGroupClose)},i.createElement(n.Button,{variant:"plain","aria-label":b,onClick:g,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`},i.createElement(p.default,{"aria-hidden":"true"})));return i.createElement("div",{className:(0,r.css)(o.default.labelGroup,c,a&&o.default.modifiers.category,E&&o.default.modifiers.vertical,N&&o.default.modifiers.editable)},i.createElement("div",{className:(0,r.css)(o.default.labelGroupMain)},l),f&&m)};return 0===S&&void 0===O?null:i.createElement(u.GenerateId,null,(e=>D(this.props.id||e)))}}a.e=f,f.displayName="LabelGroup",f.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numLabels:3,isClosable:!1,isCompact:!1,onClick:e=>{},closeBtnAriaLabel:"Close label group",tooltipPosition:"top","aria-label":"Label group category",isVertical:!1,isEditable:!1,hasEditableTextArea:!1}},78826:(e,a,t)=>{"use strict";a.u_=a.vE=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=l.__importStar(t(12181)),s=t(23053),r=t(38296),n=l.__importDefault(t(19993)),d=t(57674),c=t(23053);var p;(p=a.vE||(a.vE={})).small="small",p.medium="medium",p.large="large",p.default="default";class m extends i.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{var a,t;const{onEscapePress:l}=this.props;e.key===s.KeyTypes.Escape&&this.props.isOpen&&(l?l(e):null===(t=(a=this.props).onClose)||void 0===t||t.call(a))},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:a}=this.props,t=this.getElement(a).children;for(const a of Array.from(t))a!==this.state.container&&(e?a.setAttribute("aria-hidden",""+e):a.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const a=m.currentId++,t=a+1,l=a+2;this.boxId=e.id||`pf-modal-part-${a}`,this.labelId=`pf-modal-part-${t}`,this.descriptorId=`pf-modal-part-${l}`,this.state={container:void 0,ouiaStateId:(0,c.getDefaultOUIAId)(m.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:a,"aria-label":t,"aria-labelledby":l,hasNoBodyWrapper:i,header:o}=this.props,s=this.getElement(e),d=document.createElement("div");this.setState({container:d}),s.appendChild(d),s.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?s.classList.add((0,r.css)(n.default.backdropOpen)):s.classList.remove((0,r.css)(n.default.backdropOpen)),this.isEmpty(a)&&this.isEmpty(t)&&this.isEmpty(l)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(t)&&this.isEmpty(l)&&(i||o)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,a=this.getElement(e);this.props.isOpen?(a.classList.add((0,r.css)(n.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!0)):(a.classList.remove((0,r.css)(n.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,a=this.getElement(e);this.state.container&&a.removeChild(this.state.container),a.removeEventListener("keydown",this.handleEscKeyClick,!1),a.classList.remove((0,r.css)(n.default.backdropOpen))}render(){const e=this.props,{appendTo:a,onEscapePress:t,"aria-labelledby":r,"aria-label":n,"aria-describedby":c,bodyAriaLabel:p,bodyAriaRole:m,title:u,titleIconVariant:f,titleLabel:h,ouiaId:b,ouiaSafe:_}=e,g=l.__rest(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","bodyAriaLabel","bodyAriaRole","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe"]),{container:y}=this.state;return s.canUseDOM&&y?o.createPortal(i.createElement(d.ModalContent,Object.assign({},g,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:u,titleIconVariant:f,titleLabel:h,"aria-label":n,"aria-describedby":c,"aria-labelledby":r,bodyAriaLabel:p,bodyAriaRole:m,ouiaId:void 0!==b?b:this.state.ouiaStateId,ouiaSafe:_})),y):null}}a.u_=m,m.displayName="Modal",m.currentId=0,m.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0}},80271:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBox=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=t(38296),s=l.__importDefault(t(62702)),r=l.__importDefault(t(72382));a.ModalBox=e=>{var{children:a,className:t="",variant:n="default",position:d,positionOffset:c,"aria-labelledby":p,"aria-label":m="","aria-describedby":u,style:f}=e,h=l.__rest(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return c&&((f=f||{})[r.default.name]=c),i.createElement("div",Object.assign({},h,{role:"dialog","aria-label":m||null,"aria-labelledby":p||null,"aria-describedby":u,"aria-modal":"true",className:(0,o.css)(s.default.modalBox,t,"top"===d&&s.default.modifiers.alignTop,"large"===n&&s.default.modifiers.lg,"small"===n&&s.default.modifiers.sm,"medium"===n&&s.default.modifiers.md),style:f}),a)},a.ModalBox.displayName="ModalBox"},66973:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxBody=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=t(38296),s=l.__importDefault(t(62702));a.ModalBoxBody=e=>{var{children:a=null,className:t=""}=e,r=l.__rest(e,["children","className"]);return i.createElement("div",Object.assign({},r,{className:(0,o.css)(s.default.modalBoxBody,t)}),a)},a.ModalBoxBody.displayName="ModalBoxBody"},27631:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxCloseButton=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=t(16396),s=l.__importDefault(t(33606));a.ModalBoxCloseButton=e=>{var{className:t="",onClose:r=(()=>{}),ouiaId:n}=e,d=l.__rest(e,["className","onClose","ouiaId"]);return i.createElement(o.Button,Object.assign({className:t,variant:"plain",onClick:r,"aria-label":"Close"},n&&{ouiaId:`${n}-${a.ModalBoxCloseButton.displayName}`},d),i.createElement(s.default,null))},a.ModalBoxCloseButton.displayName="ModalBoxCloseButton"},23788:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxDescription=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=t(38296),s=l.__importDefault(t(62702));a.ModalBoxDescription=e=>{var{children:a=null,className:t="",id:r=""}=e,n=l.__rest(e,["children","className","id"]);return i.createElement("div",Object.assign({},n,{id:r,className:(0,o.css)(s.default.modalBoxDescription,t)}),a)},a.ModalBoxDescription.displayName="ModalBoxDescription"},90818:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxFooter=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=t(38296),s=l.__importDefault(t(62702));a.ModalBoxFooter=e=>{var{children:a=null,className:t=""}=e,r=l.__rest(e,["children","className"]);return i.createElement("footer",Object.assign({},r,{className:(0,o.css)(s.default.modalBoxFooter,t)}),a)},a.ModalBoxFooter.displayName="ModalBoxFooter"},38364:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxHeader=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=t(38296),s=l.__importDefault(t(62702));a.ModalBoxHeader=e=>{var{children:a=null,className:t="",help:r=null}=e,n=l.__rest(e,["children","className","help"]);return i.createElement("header",Object.assign({className:(0,o.css)(s.default.modalBoxHeader,r&&s.default.modifiers.help,t)},n),r&&i.createElement(i.Fragment,null,i.createElement("div",{className:(0,o.css)(s.default.modalBoxHeaderMain)},a),i.createElement("div",{className:"pf-c-modal-box__header-help"},r)),!r&&a)},a.ModalBoxHeader.displayName="ModalBoxHeader"},76532:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxTitle=a.isVariantIcon=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=l.__importDefault(t(62702)),s=t(38296),r=l.__importDefault(t(79818)),n=t(23053),d=t(8045),c=l.__importDefault(t(35451)),p=l.__importDefault(t(84564)),m=l.__importDefault(t(19694)),u=l.__importDefault(t(31369)),f=l.__importDefault(t(36853)),h=t(23053);a.isVariantIcon=e=>["success","danger","warning","info","default"].includes(e),a.ModalBoxTitle=e=>{var{className:t="",id:b,title:_,titleIconVariant:g,titleLabel:y=""}=e,x=l.__rest(e,["className","id","title","titleIconVariant","titleLabel"]);const[I,v]=i.useState(!1),C=i.useRef(null),E=y||((0,a.isVariantIcon)(g)?`${(0,n.capitalize)(g)} alert:`:y),N={success:i.createElement(c.default,null),danger:i.createElement(p.default,null),warning:i.createElement(m.default,null),info:i.createElement(u.default,null),default:i.createElement(f.default,null)},B=!(0,a.isVariantIcon)(g)&&g;(0,h.useIsomorphicLayoutEffect)((()=>{v(C.current&&C.current.offsetWidth<C.current.scrollWidth)}),[]);const T=i.createElement("h1",Object.assign({id:b,ref:C,className:(0,s.css)(o.default.modalBoxTitle,g&&o.default.modifiers.icon,t)},x),g&&i.createElement("span",{className:(0,s.css)(o.default.modalBoxTitleIcon)},(0,a.isVariantIcon)(g)?N[g]:i.createElement(B,null)),E&&i.createElement("span",{className:(0,s.css)(r.default.screenReader)},E),i.createElement("span",{className:(0,s.css)(o.default.modalBoxTitleText)},_));return I?i.createElement(d.Tooltip,{content:_},T):T},a.ModalBoxTitle.displayName="ModalBoxTitle"},57674:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ModalContent=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=t(23053),s=l.__importDefault(t(62702)),r=l.__importDefault(t(66042)),n=t(38296),d=t(23053),c=t(61398),p=t(66973),m=t(27631),u=t(80271),f=t(90818),h=t(23788),b=t(38364),_=t(76532);a.ModalContent=e=>{var{children:t,className:g="",isOpen:y=!1,header:x=null,help:I=null,description:v=null,title:C="",titleIconVariant:E=null,titleLabel:N="","aria-label":B="","aria-describedby":T,"aria-labelledby":O,bodyAriaLabel:L,bodyAriaRole:k,showClose:M=!0,footer:S=null,actions:R=[],onClose:D=(()=>{}),variant:F="default",position:V,positionOffset:z,width:G=-1,boxId:P,labelId:j,descriptorId:w,disableFocusTrap:A=!1,hasNoBodyWrapper:H=!1,ouiaId:W,ouiaSafe:q=!0}=e,U=l.__rest(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","bodyAriaLabel","bodyAriaRole","showClose","footer","actions","onClose","variant","position","positionOffset","width","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe"]);if(!y)return null;const $=x?i.createElement(b.ModalBoxHeader,{help:I},x):C&&i.createElement(b.ModalBoxHeader,{help:I},i.createElement(_.ModalBoxTitle,{title:C,titleIconVariant:E,titleLabel:N,id:j}),v&&i.createElement(h.ModalBoxDescription,{id:w},v)),K=S?i.createElement(f.ModalBoxFooter,null,S):R.length>0&&i.createElement(f.ModalBoxFooter,null,R),X=L?"region":void 0,J=H?t:i.createElement(p.ModalBoxBody,Object.assign({"aria-label":L,role:k||X},U,!v&&!T&&{id:w}),t),Z=-1===G?{}:{width:G},Q=i.createElement(u.ModalBox,Object.assign({id:P,style:Z,className:(0,n.css)(g,(0,_.isVariantIcon)(E)&&s.default.modifiers[E]),variant:F,position:V,positionOffset:z,"aria-label":B,"aria-labelledby":(()=>{if(null===O)return null;const e=[];return""!==(B&&P)&&e.push(B&&P),O&&e.push(O),C&&e.push(j),e.join(" ")})(),"aria-describedby":T||(H?null:w)},(0,d.getOUIAProps)(a.ModalContent.displayName,W,q)),M&&i.createElement(m.ModalBoxCloseButton,{onClose:D,ouiaId:W}),$,J,K);return i.createElement(c.Backdrop,null,i.createElement(o.FocusTrap,{active:!A,focusTrapOptions:{clickOutsideDeactivates:!0,tabbableOptions:{displayCheck:"none"}},className:(0,n.css)(r.default.bullseye)},Q))},a.ModalContent.displayName="ModalContent"},12282:(e,a,t)=>{"use strict";a.oi=a.BJ=a.x=void 0;const l=t(70655),i=l.__importStar(t(92950)),o=l.__importDefault(t(12455)),s=t(38296),r=t(26670),n=t(42319),d=t(23053),c=t(58133);var p,m;!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(p=a.x||(a.x={})),(m=a.BJ||(a.BJ={})).default="default",m.plain="plain";class u extends i.Component{constructor(e){super(e),this.inputRef=i.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,n.trimLeft)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:a,onFocus:t}=this.props;a&&this.restoreText(),t&&t(e)},this.onBlur=e=>{const{isLeftTruncated:a,onBlur:t}=this.props;a&&this.handleResize(),t&&t(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,d.getDefaultOUIAId)(u.displayName)}}componentDidMount(){if(this.props.isLeftTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,c.getResizeObserver)(e.current,this.handleResize),this.handleResize()}}componentWillUnmount(){this.props.isLeftTruncated&&this.observer()}render(){const e=this.props,{innerRef:t,className:n,type:c,value:p,validated:m,onChange:u,onFocus:f,onBlur:h,isLeftTruncated:b,isReadOnly:_,readOnly:g,readOnlyVariant:y,isRequired:x,isDisabled:I,isIconSprite:v,iconVariant:C,customIconUrl:E,customIconDimensions:N,ouiaId:B,ouiaSafe:T}=e,O=l.__rest(e,["innerRef","className","type","value","validated","onChange","onFocus","onBlur","isLeftTruncated","isReadOnly","readOnly","readOnlyVariant","isRequired","isDisabled","isIconSprite","iconVariant","customIconUrl","customIconDimensions","ouiaId","ouiaSafe"]),L={};return E&&(L.backgroundImage=`url('${E}')`),N&&(L.backgroundSize=N),i.createElement("input",Object.assign({},O,{onFocus:this.onFocus,onBlur:this.onBlur,className:(0,s.css)(o.default.formControl,v&&o.default.modifiers.iconSprite,"plain"===y&&o.default.modifiers.plain,m===r.ValidatedOptions.success&&o.default.modifiers.success,m===r.ValidatedOptions.warning&&o.default.modifiers.warning,(C&&"search"!==C||E)&&o.default.modifiers.icon,C&&o.default.modifiers[C],n),onChange:this.handleChange,type:c,value:this.sanitizeInputValue(p),"aria-invalid":O["aria-invalid"]?O["aria-invalid"]:m===r.ValidatedOptions.error,required:x,disabled:I,readOnly:!!y||_||g,ref:t||this.inputRef},(E||N)&&{style:L},(0,d.getOUIAProps)(a.oi.displayName,void 0!==B?B:this.state.ouiaStateId,T)))}}u.displayName="TextInputBase",u.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,isIconSprite:!1,type:p.text,isLeftTruncated:!1,onChange:()=>{},ouiaSafe:!0},a.oi=i.forwardRef(((e,a)=>i.createElement(u,Object.assign({},e,{innerRef:a})))),a.oi.displayName="TextInput"},36853:(e,a,t)=>{"use strict";a.__esModule=!0,a.BellIconConfig={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},a.BellIcon=t(35183).IU(a.BellIconConfig),a.default=a.BellIcon},19694:(e,a,t)=>{"use strict";a.__esModule=!0,a.ExclamationTriangleIconConfig={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a.ExclamationTriangleIcon=t(35183).IU(a.ExclamationTriangleIconConfig),a.default=a.ExclamationTriangleIcon},77669:(e,a,t)=>{"use strict";a.__esModule=!0,a.TimesCircleIconConfig={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},a.TimesCircleIcon=t(35183).IU(a.TimesCircleIconConfig),a.default=a.TimesCircleIcon},54783:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l}),t(32857);const l={check:"pf-c-check",checkBody:"pf-c-check__body",checkDescription:"pf-c-check__description",checkInput:"pf-c-check__input",checkLabel:"pf-c-check__label",checkLabelRequired:"pf-c-check__label-required",modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"}}},11924:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l}),t(78752);const l={form:"pf-c-form",formActions:"pf-c-form__actions",formFieldGroup:"pf-c-form__field-group",formFieldGroupBody:"pf-c-form__field-group-body",formFieldGroupHeader:"pf-c-form__field-group-header",formFieldGroupHeaderActions:"pf-c-form__field-group-header-actions",formFieldGroupHeaderDescription:"pf-c-form__field-group-header-description",formFieldGroupHeaderMain:"pf-c-form__field-group-header-main",formFieldGroupHeaderTitle:"pf-c-form__field-group-header-title",formFieldGroupHeaderTitleText:"pf-c-form__field-group-header-title-text",formFieldGroupToggle:"pf-c-form__field-group-toggle",formFieldGroupToggleButton:"pf-c-form__field-group-toggle-button",formFieldGroupToggleIcon:"pf-c-form__field-group-toggle-icon",formFieldset:"pf-c-form__fieldset",formGroup:"pf-c-form__group",formGroupControl:"pf-c-form__group-control",formGroupLabel:"pf-c-form__group-label",formGroupLabelHelp:"pf-c-form__group-label-help",formGroupLabelInfo:"pf-c-form__group-label-info",formGroupLabelMain:"pf-c-form__group-label-main",formHelperText:"pf-c-form__helper-text",formHelperTextIcon:"pf-c-form__helper-text-icon",formLabel:"pf-c-form__label",formLabelRequired:"pf-c-form__label-required",formLabelText:"pf-c-form__label-text",formSection:"pf-c-form__section",formSectionTitle:"pf-c-form__section-title",modifiers:{horizontal:"pf-m-horizontal",alignRight:"pf-m-align-right",noPaddingTop:"pf-m-no-padding-top",horizontalOnXs:"pf-m-horizontal-on-xs",horizontalOnSm:"pf-m-horizontal-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",limitWidth:"pf-m-limit-width",action:"pf-m-action",info:"pf-m-info",disabled:"pf-m-disabled",inline:"pf-m-inline",stack:"pf-m-stack",error:"pf-m-error",success:"pf-m-success",warning:"pf-m-warning",inactive:"pf-m-inactive",hidden:"pf-m-hidden",expanded:"pf-m-expanded"},themeDark:"pf-theme-dark"}},12455:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l}),t(90479);const l={formControl:"pf-c-form-control",modifiers:{success:"pf-m-success",plain:"pf-m-plain",expanded:"pf-m-expanded",icon:"pf-m-icon",warning:"pf-m-warning",search:"pf-m-search",calendar:"pf-m-calendar",clock:"pf-m-clock",iconSprite:"pf-m-icon-sprite",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal"},themeDark:"pf-theme-dark"}},72382:(e,a)=>{"use strict";a.__esModule=!0,a.c_modal_box_m_align_top_spacer={name:"--pf-c-modal-box--m-align-top--spacer",value:"0.5rem",var:"var(--pf-c-modal-box--m-align-top--spacer)"},a.default=a.c_modal_box_m_align_top_spacer},15600:e=>{var a=Math.max,t=Math.min;e.exports=function(e,l,i){return e>=t(l,i)&&e<a(l,i)}},94174:(e,a,t)=>{var l=t(15600),i=t(18601),o=t(14841);e.exports=function(e,a,t){return a=i(a),void 0===t?(t=a,a=0):t=i(t),e=o(e),l(e,a,t)}},18601:(e,a,t)=>{var l=t(14841);e.exports=function(e){return e?Infinity===(e=l(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}}}]);
//# sourceMappingURL=../sourcemaps/601.de452cb5cc073f5badab09d1e7130b15.js.map