/*! For license information please see 434.2fc1b0274ea8e7f216a4.js.LICENSE.txt */
(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[434],{2095:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const r=n(70655),i=r.__importStar(n(92950)),a=r.__importDefault(n(54918)),l=n(38296),o=n(23053);t.CardContext=i.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),t.Card=e=>{var{children:n=null,id:c="",className:u="",component:s="article",isHoverable:d=!1,isCompact:f=!1,isSelectable:p=!1,isSelectableRaised:v=!1,isSelected:h=!1,isDisabledRaised:m=!1,isFlat:b=!1,isExpanded:g=!1,isRounded:y=!1,isLarge:x=!1,isFullHeight:O=!1,isPlain:C=!1,ouiaId:_,ouiaSafe:j=!0,hasSelectableInput:k=!1,selectableInputAriaLabel:w,onSelectableInputChange:S=(()=>{})}=e,E=r.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const P=s,I=(0,o.useOUIAProps)(t.Card.displayName,_,j),[M,N]=i.useState(""),[D,T]=i.useState();f&&x&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),x=!1);const F=i.useRef(!1);return i.useEffect((()=>{w?T({"aria-label":w}):M?T({"aria-labelledby":M}):k&&!F.current&&(T({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[k,w,M]),i.createElement(t.CardContext.Provider,{value:{cardId:c,registerTitleId:e=>{N(e),F.current=!!e},isExpanded:g}},k&&i.createElement("input",Object.assign({className:"pf-screen-reader",id:`${c}-input`},D,{type:"checkbox",checked:h,onChange:e=>S(c,e),disabled:m,tabIndex:-1})),i.createElement(P,Object.assign({id:c,className:(0,l.css)(a.default.card,f&&a.default.modifiers.compact,g&&a.default.modifiers.expanded,b&&a.default.modifiers.flat,y&&a.default.modifiers.rounded,x&&a.default.modifiers.displayLg,O&&a.default.modifiers.fullHeight,C&&a.default.modifiers.plain,m?(0,l.css)(a.default.modifiers.nonSelectableRaised):v?(0,l.css)(a.default.modifiers.selectableRaised,h&&a.default.modifiers.selectedRaised):p||d?(0,l.css)(a.default.modifiers.selectable,h&&a.default.modifiers.selected):"",u),tabIndex:p||v?"0":void 0},E,I),n))},t.Card.displayName="Card"},85962:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const r=n(70655),i=r.__importStar(n(92950)),a=r.__importDefault(n(54918)),l=n(38296);t.CardBody=e=>{var{children:t=null,className:n="",component:o="div",isFilled:c=!0}=e,u=r.__rest(e,["children","className","component","isFilled"]);const s=o;return i.createElement(s,Object.assign({className:(0,l.css)(a.default.cardBody,!c&&a.default.modifiers.noFill,n)},u),t)},t.CardBody.displayName="CardBody"},38888:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},c=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(92950),d=n(85893),f=n(92950),p=n(35356),v=u(n(18446)),h=u(n(57557)),m=l(n(56947));t.default=function(e){var t=e.items,n=void 0===t?[]:t,i=e.value,a=void 0===i?[]:i,l=e.onChange,u=void 0===l?function(){}:l,b=e.isDisabled,g=void 0!==b&&b,y=o(e,["items","value","onChange","isDisabled"]),x=y.placeholder,O=y.className,C=(0,f.useState)(!1),_=C[0],j=C[1],k=(0,f.useState)([]),w=k[0],S=k[1],E=(0,f.useRef)(w),P=function(e){E.current=w,S(e)};(0,f.useEffect)((function(){!(0,v.default)(E.current,a)&&a&&P(a)}),[w,a]);var I=function(){return Array.from(new Set(c(c([],a&&a.length>0&&a.constructor===Array?a.map((function(e){return(0,m.isFilterValue)(e)?e.value:e})):[],!0),w,!0)))};return(0,d.jsx)(f.Fragment,{children:!n||n&&n.length<=0?(0,d.jsx)(m.default,r({},y,{onChange:u,isDisabled:g,value:"".concat(I())})):(0,d.jsx)(p.Select,r({className:O,variant:p.SelectVariant.checkbox,"aria-label":"Select Input",onToggle:function(e){return j(e)},isDisabled:g,onSelect:function(e,t){return function(e,t){var n=I();n=n.includes(t)?n.filter((function(e){return e!==t})):c(c([],n,!0),[t],!1),null==u||u(e,n,t),P(n)}(e,t)},selections:I(),isOpen:_,placeholderText:x,ouiaId:x},{children:n.map((function(e,t){var n=e.value,i=e.onClick,a=e.label,l=e.id,c=o(e,["value","onClick","label","id"]);return(0,s.createElement)(p.SelectOption,r({},(0,h.default)(c,"onChange"),{key:l||t,value:String(n||l||t),onClick:function(e){return null==i?void 0:i(e,r({value:n,label:a,id:l},c),t)}}),a)}))}))})}},59850:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(85893),l=n(92950),o=i(n(94184)),c=n(35356),u=n(55602),s=n(40109),d=i(n(63565));n(76677),t.default=function(e){var t=e.className,n=e.filterBy,i=void 0===n?"":n,f=e.groups,p=void 0===f?[]:f,v=e.items,h=e.isFilterable,m=void 0!==h&&h,b=e.onFilter,g=e.onChange,y=e.onShowMore,x=e.placeholder,O=e.selected,C=e.showMoreTitle,_=e.showMoreOptions,j=e.isDisabled,k=(0,l.useState)({}),w=k[0],S=k[1],E=(0,l.useState)(""),P=E[0],I=E[1],M=(0,l.useState)(!1),N=M[0],D=M[1],T=(0,l.useRef)(null),F=(0,l.useRef)(null),V=(0,l.useRef)(null),R=(0,l.useRef)(null);(0,l.useEffect)((function(){O&&S(O)}),[O]),(0,l.useEffect)((function(){I(i)}),[i]);var A=function(e){var t,n,r;N&&((null===(t=V.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=T.current)||void 0===n?void 0:n.contains(e.target)))&&("Escape"!==e.key&&"Enter"!==e.key||(D(!N),null===(r=T.current)||void 0===r||r.focus()))},B=function(e){var t;N&&!(null===(t=V.current)||void 0===t?void 0:t.contains(e.target))&&D(!1)};(0,l.useEffect)((function(){return window.addEventListener("keydown",A),window.addEventListener("click",B),function(){window.removeEventListener("keydown",A),window.removeEventListener("click",B)}}),[N,V]);var L=(0,s.getMenuItems)((null==v?void 0:v.map((function(e){return e.type===d.default.treeView?(0,s.convertTreeItem)(e):e})))||[],g,(0,s.calculateSelected)(O||{})),G=(0,s.getGroupMenuItems)(p,g,(0,s.calculateSelected)(O||{})),H=function(e,t,n,i){return void 0===i&&(i=""),(0,a.jsx)(c.MenuItem,r({itemId:t,className:null==e?void 0:e.className,onClick:e.onClick&&(n||e.type)===d.default.checkbox?function(t){e.onClick&&e.onClick(),t.preventDefault()}:void 0},{children:(n||e.type)===d.default.treeView?(0,a.jsx)(c.TreeView,{data:[(0,s.mapTree)(e,i,w,O||{})],onCheck:function(t,n){return(0,s.onTreeCheck)(t,n,[e])},hasChecks:!0}):(n||e.type)===d.default.checkbox?(0,a.jsx)(c.Checkbox,r({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||(0,s.isChecked)(i,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,w,O||{})||!1,onChange:function(t,n){var r;null===(r=null==e?void 0:e.onChange)||void 0===r||r.call(e,t,n)},onClick:e.onClick?function(t){e.onClick&&e.onClick(),t.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(i,"-").concat(t),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(i,"-").concat(t)})):(n||e.type)===d.default.radio?(0,a.jsx)(c.Radio,r({},e,{isChecked:(null==e?void 0:e.isChecked)||(0,s.isChecked)(i,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,w,O||{})||!1,onChange:function(t,n){var r;null===(r=null==e?void 0:e.onChange)||void 0===r||r.call(e,t,n)},value:(null==e?void 0:e.value)||t,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(i,"-").concat(t),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(i,"-").concat(t)})):(n||e.type)===d.default.button?(0,a.jsx)(c.Button,r({id:e.id,className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick},{children:null==e?void 0:e.label})):(null==e?void 0:e.label)||""}),"".concat(e.value,"-").concat(t,"-item"))},K=function(e,t,n){return void 0===n&&(n=""),e.map((function(e,i){return(t||e.type)===d.default.treeView?(0,a.jsx)("div",r({className:"ins-c-tree-view"},{children:H(e,i,t,n)}),"".concat(e.value,"-").concat(i,"-item")):H(e,i,t,n)}))},U=(document.activeElement===R.current||document.activeElement===T.current)&&(null==P?void 0:P.length)>0,q=function(e){I(e),null==b||b(e)};return(0,a.jsx)("div",r({ref:F},{children:(0,a.jsx)(c.Popper,{appendTo:F.current,trigger:(0,a.jsx)(c.MenuToggle,r({"aria-label":"Group filter",ref:T,onClick:function(e){return(t=e).stopPropagation(),t.persist(),void D(!N);var t},isExpanded:N,className:(0,o.default)("ins-c-group-menu-toggle",t),isDisabled:j},{children:m||b?(0,a.jsxs)("div",{children:[(0,a.jsx)(c.TextInput,{ref:R,className:(0,o.default)({"ins-c-input__clearable":U}),onChange:function(e){return q(e)},onClick:function(e){return e.preventDefault()},onKeyDown:function(e){" "!==e.key&&"Escape"!==e.key||(e.preventDefault(),q(" "===e.key?"".concat(P," "):""),"Escape"===e.key&&D(!1))},isDisabled:j,"aria-label":"input with dropdown and clear button",placeholder:x,value:P,tabIndex:0,type:"text"}),U&&(0,a.jsx)("span",r({className:"ins-c-icon__link"},{children:(0,a.jsx)(u.CloseIcon,{onClick:function(){q(""),D(!1)}})}))]}):x})),popper:(0,a.jsx)(c.Menu,r({ref:V,className:(0,o.default)("ins-c-menu__scrollable",t,{"pf-m-expanded":N})},{children:(0,a.jsx)(c.MenuContent,{children:(0,a.jsxs)(c.MenuList,r({"aria-label":"Group filter"},{children:[L.length>0&&(0,a.jsx)(c.MenuGroup,{children:K(L)}),G.map((function(e,t){return(0,a.jsx)(c.MenuGroup,r({label:e.groupSelectable||"string"!=typeof e.label?void 0:e.label},{children:K(e.items,e.type,e.value)}),"".concat(e.label,"-").concat(t,"-group"))})),y?(0,a.jsx)(c.MenuItem,r({itemId:"loader",className:"ins-c-menu__show--more"},_,{onClick:function(e){return y(e)}},{children:C})):(0,a.jsx)("span",{hidden:!0,value:""})]}))})})),isVisible:N})}))}},70610:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var c=n(92950),u=n(85893),s=n(92950),d=n(35356),f=l(n(56947));t.default=function(e){var t=e.items,n=void 0===t?[]:t,i=e.onChange,a=void 0===i?function(){}:i,l=e.isDisabled,p=void 0!==l&&l,v=o(e,["items","onChange","isDisabled"]),h=v.placeholder,m=v.className,b=v.value,g=(0,s.useState)(!1),y=g[0],x=g[1],O=(0,s.useState)(),C=O[0],_=O[1],j=function(){return b?(0,f.isFilterValue)(b)?b.value:b:C?(0,f.isFilterValue)(C)?C.value:C:void 0},k=j();return(0,u.jsx)(s.Fragment,{children:!n||n&&n.length<=0?(0,u.jsx)(f.default,r({},v,{onChange:a,isDisabled:p,value:"".concat(j())})):(0,u.jsx)(d.Select,r({className:m,variant:d.SelectVariant.single,"aria-label":"Select Input",isDisabled:p,onToggle:function(e){return x(e)},onSelect:function(e,t){return function(e,t){null==a||a(e,t),_(t)}(e,t)},isOpen:y,placeholderText:h,ouiaId:h},{children:n.map((function(e,t){var n=e.value,i=e.isChecked,a=e.onChange,l=e.label,s=e.id,f=o(e,["value","isChecked","onChange","label","id"]);return(0,c.createElement)(d.SelectOption,r({},f,{key:s||t,value:n||""+t}),(0,u.jsx)(d.Radio,{name:s||"".concat(t,"-radio"),label:l,value:n||t,isChecked:i||void 0!==k&&k===n||void 0!==k&&k===""+t||!1,onChange:function(e,o){return null==a?void 0:a(o,r({id:s,label:l,value:n,isChecked:i},f),t)},id:s||"".concat(n,"-").concat(t)}))}))}))})}},56947:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.isFilterValue=void 0;var i=n(85893),a=n(92950),l=n(35356),o=n(55602);n(83646),t.isFilterValue=function(e){return void 0!==e.value},t.default=function(e){var t=e.icon,n=e.id,c=e.isDisabled,u=void 0!==c&&c,s=e.className,d=e.onChange,f=e.onSubmit,p=void 0===f?function(){}:f,v=e.value,h=void 0===v?"":v,m=e.placeholder,b=e.innerRef,g=r(e,["icon","id","isDisabled","className","onChange","onSubmit","value","placeholder","innerRef"]),y=h,x=(0,a.useState)(""),O=x[0],C=x[1],_=t||o.SearchIcon;return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(l.TextInput,{"aria-label":g["aria-label"]||"text input",className:"ins-c-conditional-filter ".concat(s||""),"data-ouia-component-type":"PF4/TextInput",id:n,isDisabled:u,value:d?"string"==typeof h?y:y.value:O,onChange:function(e,t){return function(e,t){return d?d(e,t):C(t)}(t,t.target.value)},onKeyDown:function(e){return"Enter"===e.key&&(null==p?void 0:p(e,("string"==typeof h?y:y.value)||O))},ouiaId:"ConditionalFilter",placeholder:m,"widget-type":"InsightsInput",ref:b}),(0,i.jsx)(_,{size:"sm",className:"ins-c-search-icon"})]})}},77572:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.typeMapper=t.conditionalFilterType=void 0;var i=n(92950),a=r(n(56947)),l=r(n(38888)),o=r(n(70610)),c=r(n(59850));t.conditionalFilterType={text:"text",checkbox:"checkbox",radio:"radio",custom:"custom",group:"group"},t.typeMapper={text:a.default,checkbox:l.default,radio:o.default,custom:i.Fragment,group:c.default}},40109:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.onTreeCheck=t.mapTree=t.calculateSelected=t.getGroupMenuItems=t.convertTreeItem=t.getMenuItems=t.isChecked=void 0;var l=a(n(63565));t.isChecked=function(e,t,n,i,a,l){var o,c,u,s,d,f=r(r({},l),a);if(void 0===f[e])return!1;if(void 0!==(null==(d=f[e][t])?void 0:d.group)){var p=f[e][t];if(p.isSelected){if(null===(o=null==p?void 0:p.item)||void 0===o?void 0:o.id)return n===(null===(c=null==p?void 0:p.item)||void 0===c?void 0:c.id);if(null===(u=null==p?void 0:p.item)||void 0===u?void 0:u.tagValue)return i===(null===(s=null==p?void 0:p.item)||void 0===s?void 0:s.tagValue)}return Boolean(p.isSelected)}return Boolean(f[e][t])},t.getMenuItems=function(e,t,n,i,a,o,c,u){return void 0===a&&(a=""),((null==e?void 0:e.map((function(s,d){return r(r({},s),{className:"".concat((null==s?void 0:s.className)||"pf-u-pl-sm"),key:s.id||s.value||d,value:String(s.value||s.id||d),onClick:function(d,f,p){var v,h=[d,n(i||s.type,a,(i||s.type)===l.default.treeView?f:s.value,p),r({value:a,label:o||s.label,id:c||s.id,type:i||s.type,items:e},u||s),s,a,s.value];null==t||t.apply(void 0,h),null===(v=null==s?void 0:s.onClick)||void 0===v||v.call(s,d,r(r({},s),{label:"string"==typeof s.label?s.label:""}),void 0,p)}})})))||[]).filter((function(e){return!e.noFilter}))},t.convertTreeItem=function(e){return e.id=e.id||e.value,e.name=e.label||e.name,e.value=e.id,e.label=e.name||"",e.children?r(r({},e),{children:e.children.map((function(e){return(0,t.convertTreeItem)(e)}))}):e},t.getGroupMenuItems=function(e,n,a){return e.map((function(e){var o=e.value,c=e.label,u=e.groupSelectable,s=e.id,d=e.type,f=e.items,p=e.noFilter,v=d===l.default.treeView?f.map((function(e){return(0,t.convertTreeItem)(e)})):f;return{label:c,noFilter:p,value:o,type:d,groupSelectable:u,items:(0,t.getMenuItems)(i(i([],u?[r({value:o||"",label:c||"",id:s||"",type:d,className:"pf-u-pl-xs"},e)]:[],!0),v,!0),n,a,d,o,c,s,e)}})).filter((function(e){var t=e.noFilter,n=e.items;return!t||(void 0===n?[]:n).length>0}))},t.calculateSelected=function(e){return function(t,n,i,a){void 0===t&&(t=l.default.button),void 0===n&&(n=""),void 0===i&&(i=""),void 0===a&&(a=!1);var o=null==e?void 0:e[n],c=t===l.default.treeView?[i].reduce((function e(t,n){return Array.isArray(null==n?void 0:n.children)?n.children.reduce(e,t)||[]:(t.push(n),t)}),[]):[],u=t===l.default.treeView?c.map((function(e){return e.id})):[String(i)];if(o){var s=e;return u.map((function(e){var i,o,c,u;void 0===e&&(e="");var d=s[n];s=t!==l.default.radio&&(d[e]instanceof Object?d[e].isSelected:Boolean(d[e]))?r(r({},s),((i={})[n]=r(r({},d||{}),((o={})[e]=t===l.default.treeView&&a,o)),i)):r(r({},s),((c={})[n]=r(r({},t!==l.default.radio&&d||{}),((u={})[e]=!0,u)),c))})),s}return u.reduce((function(e,t){var i,a;return r(r({},e),((i={})[n]=r(r({},null==e?void 0:e[n]),((a={})[t||""]=!0,a)),i))}),e)}};var o=function(e,n,r,i){return e.children?e.children.every((function(e){return o(e,n,r,i)})):(0,t.isChecked)(n,e.id||"",void 0,void 0,r,i)},c=function(e,n,r,i){return e.children?e.children.some((function(e){return c(e,n,r,i)})):(0,t.isChecked)(n,e.id||"",void 0,void 0,r,i)};t.mapTree=function(e,n,i,a){var l=o(e,n,i,a);return e.checkProps={checked:!1},l?e.checkProps.checked=!0:c(e,n,i,a)&&(e.checkProps={checked:null}),e.children?r(r({},e),{children:e.children.map((function(e){return(0,t.mapTree)(e,n,i,a)}))}):e},t.onTreeCheck=function(e,t,n){var r,i,a;return null===(i=(r=n[0]).onClick)||void 0===i?void 0:i.call(r,e,t,void 0,null===(a=null==e?void 0:e.target)||void 0===a?void 0:a.checked)}},63565:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={treeView:"treeView",checkbox:"checkbox",radio:"radio",button:"button",plain:"plain"}},89376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(85893),i=n(94184),a=n.n(i),l=n(92950);const o=n.n(l)().createContext("light");var c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},c.apply(this,arguments)};const u=function(e){var t=e.className,n=e.children,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["className","children"]),l=a()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(o.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var u=a()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,r.jsx)("section",c({},i,{className:"".concat(l," ").concat(u),"widget-type":"InsightsPageHeader"},{children:n}))}})}},94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=i.apply(null,n);l&&e.push(l)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},45652:(e,t,n)=>{var r=n(88668),i=n(47443),a=n(1196),l=n(74757),o=n(23593),c=n(21814);e.exports=function(e,t,n){var u=-1,s=i,d=e.length,f=!0,p=[],v=p;if(n)f=!1,s=a;else if(d>=200){var h=t?null:o(e);if(h)return c(h);f=!1,s=l,v=new r}else v=t?[]:p;e:for(;++u<d;){var m=e[u],b=t?t(m):m;if(m=n||0!==m?m:0,f&&b==b){for(var g=v.length;g--;)if(v[g]===b)continue e;t&&v.push(b),p.push(m)}else s(v,b,n)||(v!==p&&v.push(b),p.push(m))}return p}},23593:(e,t,n)=>{var r=n(58525),i=n(50308),a=n(21814),l=r&&1/a(new r([,-0]))[1]==1/0?function(e){return new r(e)}:i;e.exports=l},50308:e=>{e.exports=function(){}},45578:(e,t,n)=>{var r=n(67206),i=n(45652);e.exports=function(e,t){return e&&e.length?i(e,r(t,2)):[]}},83646:(e,t,n)=>{"use strict";n.r(t)},76677:(e,t,n)=>{"use strict";n.r(t)},24561:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>u,aV:()=>c});var r=n(92950),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},a=function(e){var t=e.animate,n=e.animateBegin,a=e.backgroundColor,l=e.backgroundOpacity,o=e.baseUrl,c=e.children,u=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,f=e.gradientDirection,p=e.uniqueKey,v=e.interval,h=e.rtl,m=e.speed,b=e.style,g=e.title,y=e.beforeMask,x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),O=p||Math.random().toString(36).substring(6),C=O+"-diff",_=O+"-animated-diff",j=O+"-aria",k=h?{transform:"scaleX(-1)"}:null,w="0; "+v+"; 1",S=m+"s",E="top-bottom"===f?"rotate(90)":void 0;return(0,r.createElement)("svg",i({"aria-labelledby":j,role:"img",style:i(i({},b),k)},x),g?(0,r.createElement)("title",{id:j},g):null,y&&(0,r.isValidElement)(y)?y:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+C+")",style:{fill:"url("+o+"#"+_+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:C},c),(0,r.createElement)("linearGradient",{id:_,gradientTransform:E},(0,r.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:l},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:w,dur:S,repeatCount:"indefinite",begin:n})),(0,r.createElement)("stop",{offset:"50%",stopColor:u,stopOpacity:s},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:w,dur:S,repeatCount:"indefinite",begin:n})),(0,r.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:l},t&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:w,dur:S,repeatCount:"indefinite",begin:n})))))};a.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var l=function(e){return e.children?(0,r.createElement)(a,i({},e)):(0,r.createElement)(o,i({},e))},o=function(e){return(0,r.createElement)(l,i({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},c=function(e){return(0,r.createElement)(l,i({viewBox:"0 0 400 110"},e),(0,r.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),(0,r.createElement)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),(0,r.createElement)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),(0,r.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),(0,r.createElement)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),(0,r.createElement)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))};const u=l}}]);