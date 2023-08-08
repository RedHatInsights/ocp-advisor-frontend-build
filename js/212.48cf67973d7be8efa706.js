(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[212],{2095:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const r=n(70655),i=r.__importStar(n(92950)),l=r.__importDefault(n(54918)),a=n(38296),o=n(23053);t.CardContext=i.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),t.Card=e=>{var{children:n=null,id:u="",className:c="",component:s="article",isHoverable:d=!1,isCompact:f=!1,isSelectable:p=!1,isSelectableRaised:v=!1,isSelected:h=!1,isDisabledRaised:m=!1,isFlat:b=!1,isExpanded:g=!1,isRounded:y=!1,isLarge:x=!1,isFullHeight:C=!1,isPlain:O=!1,ouiaId:_,ouiaSafe:k=!0,hasSelectableInput:j=!1,selectableInputAriaLabel:w,onSelectableInputChange:S=(()=>{})}=e,E=r.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const I=s,P=(0,o.useOUIAProps)(t.Card.displayName,_,k),[M,D]=i.useState(""),[N,T]=i.useState();f&&x&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),x=!1);const F=i.useRef(!1);return i.useEffect((()=>{w?T({"aria-label":w}):M?T({"aria-labelledby":M}):j&&!F.current&&(T({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[j,w,M]),i.createElement(t.CardContext.Provider,{value:{cardId:u,registerTitleId:e=>{D(e),F.current=!!e},isExpanded:g}},j&&i.createElement("input",Object.assign({className:"pf-screen-reader",id:`${u}-input`},N,{type:"checkbox",checked:h,onChange:e=>S(u,e),disabled:m,tabIndex:-1})),i.createElement(I,Object.assign({id:u,className:(0,a.css)(l.default.card,f&&l.default.modifiers.compact,g&&l.default.modifiers.expanded,b&&l.default.modifiers.flat,y&&l.default.modifiers.rounded,x&&l.default.modifiers.displayLg,C&&l.default.modifiers.fullHeight,O&&l.default.modifiers.plain,m?(0,a.css)(l.default.modifiers.nonSelectableRaised):v?(0,a.css)(l.default.modifiers.selectableRaised,h&&l.default.modifiers.selectedRaised):p||d?(0,a.css)(l.default.modifiers.selectable,h&&l.default.modifiers.selected):"",c),tabIndex:p||v?"0":void 0},E,P),n))},t.Card.displayName="Card"},85962:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const r=n(70655),i=r.__importStar(n(92950)),l=r.__importDefault(n(54918)),a=n(38296);t.CardBody=e=>{var{children:t=null,className:n="",component:o="div",isFilled:u=!0}=e,c=r.__rest(e,["children","className","component","isFilled"]);const s=o;return i.createElement(s,Object.assign({className:(0,a.css)(l.default.cardBody,!u&&l.default.modifiers.noFill,n)},c),t)},t.CardBody.displayName="CardBody"},38888:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return l(t,e),t},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},u=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,l=t.length;i<l;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(92950),d=n(85893),f=n(92950),p=n(6848),v=c(n(18446)),h=c(n(57557)),m=a(n(56947));t.default=function(e){var t=e.items,n=void 0===t?[]:t,i=e.value,l=void 0===i?[]:i,a=e.onChange,c=void 0===a?function(){}:a,b=e.isDisabled,g=void 0!==b&&b,y=o(e,["items","value","onChange","isDisabled"]),x=y.placeholder,C=y.className,O=(0,f.useState)(!1),_=O[0],k=O[1],j=(0,f.useState)([]),w=j[0],S=j[1],E=(0,f.useRef)(w),I=function(e){E.current=w,S(e)};(0,f.useEffect)((function(){!(0,v.default)(E.current,l)&&l&&I(l)}),[w,l]);var P=function(){return Array.from(new Set(u(u([],l&&l.length>0&&l.constructor===Array?l.map((function(e){return(0,m.isFilterValue)(e)?e.value:e})):[],!0),w,!0)))};return(0,d.jsx)(f.Fragment,{children:!n||n&&n.length<=0?(0,d.jsx)(m.default,r({},y,{onChange:c,isDisabled:g,value:"".concat(P())})):(0,d.jsx)(p.Select,r({className:C,variant:p.SelectVariant.checkbox,"aria-label":"Select Input",onToggle:function(e){return k(e)},isDisabled:g,onSelect:function(e,t){return function(e,t){var n=P();n=n.includes(t)?n.filter((function(e){return e!==t})):u(u([],n,!0),[t],!1),null==c||c(e,n,t),I(n)}(e,t)},selections:P(),isOpen:_,placeholderText:x,ouiaId:x},{children:n.map((function(e,t){var n=e.value,i=e.onClick,l=e.label,a=e.id,u=o(e,["value","onClick","label","id"]);return(0,s.createElement)(p.SelectOption,r({},(0,h.default)(u,"onChange"),{key:a||t,value:String(n||a||t),onClick:function(e){return null==i?void 0:i(e,r({value:n,label:l,id:a},u),t)}}),l)}))}))})}},59850:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(85893),a=n(92950),o=i(n(94184)),u=n(6848),c=n(55602),s=n(40109),d=i(n(63565));n(76677),t.default=function(e){var t=e.className,n=e.filterBy,i=void 0===n?"":n,f=e.groups,p=void 0===f?[]:f,v=e.items,h=e.isFilterable,m=void 0!==h&&h,b=e.onFilter,g=e.onChange,y=e.onShowMore,x=e.placeholder,C=e.selected,O=e.showMoreTitle,_=e.showMoreOptions,k=e.isDisabled,j=(0,a.useState)({}),w=j[0],S=j[1],E=(0,a.useState)(""),I=E[0],P=E[1],M=(0,a.useState)(!1),D=M[0],N=M[1],T=(0,a.useRef)(null),F=(0,a.useRef)(null),V=(0,a.useRef)(null),R=(0,a.useRef)(null);(0,a.useEffect)((function(){C&&S(C)}),[C]),(0,a.useEffect)((function(){P(i)}),[i]);var A=function(e){var t,n,r;D&&((null===(t=V.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=T.current)||void 0===n?void 0:n.contains(e.target)))&&("Escape"!==e.key&&"Enter"!==e.key||(N(!D),null===(r=T.current)||void 0===r||r.focus()))},B=function(e){var t;D&&!(null===(t=V.current)||void 0===t?void 0:t.contains(e.target))&&N(!1)};(0,a.useEffect)((function(){return window.addEventListener("keydown",A),window.addEventListener("click",B),function(){window.removeEventListener("keydown",A),window.removeEventListener("click",B)}}),[D,V]);var L=(0,s.getMenuItems)((null==v?void 0:v.map((function(e){return e.type===d.default.treeView?(0,s.convertTreeItem)(e):e})))||[],g,(0,s.calculateSelected)(C||{})),G=(0,s.getGroupMenuItems)(p,g,(0,s.calculateSelected)(C||{})),H=function(e,t,n,i){return void 0===i&&(i=""),(0,l.jsx)(u.MenuItem,r({itemId:t,className:null==e?void 0:e.className,onClick:e.onClick&&(n||e.type)===d.default.checkbox?function(t){e.onClick&&e.onClick(),t.preventDefault()}:void 0},{children:(n||e.type)===d.default.treeView?(0,l.jsx)(u.TreeView,{data:[(0,s.mapTree)(e,i,w,C||{})],onCheck:function(t,n){return(0,s.onTreeCheck)(t,n,[e])},hasChecks:!0}):(n||e.type)===d.default.checkbox?(0,l.jsx)(u.Checkbox,r({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||(0,s.isChecked)(i,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,w,C||{})||!1,onChange:function(t,n){var r;null===(r=null==e?void 0:e.onChange)||void 0===r||r.call(e,t,n)},onClick:e.onClick?function(t){e.onClick&&e.onClick(),t.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(i,"-").concat(t),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(i,"-").concat(t)})):(n||e.type)===d.default.radio?(0,l.jsx)(u.Radio,r({},e,{isChecked:(null==e?void 0:e.isChecked)||(0,s.isChecked)(i,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,w,C||{})||!1,onChange:function(t,n){var r;null===(r=null==e?void 0:e.onChange)||void 0===r||r.call(e,t,n)},value:(null==e?void 0:e.value)||t,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(i,"-").concat(t),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(i,"-").concat(t)})):(n||e.type)===d.default.button?(0,l.jsx)(u.Button,r({id:e.id,className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick},{children:null==e?void 0:e.label})):(null==e?void 0:e.label)||""}),"".concat(e.value,"-").concat(t,"-item"))},K=function(e,t,n){return void 0===n&&(n=""),e.map((function(e,i){return(t||e.type)===d.default.treeView?(0,l.jsx)("div",r({className:"ins-c-tree-view"},{children:H(e,i,t,n)}),"".concat(e.value,"-").concat(i,"-item")):H(e,i,t,n)}))},U=(document.activeElement===R.current||document.activeElement===T.current)&&(null==I?void 0:I.length)>0,q=function(e){P(e),null==b||b(e)};return(0,l.jsx)("div",r({ref:F},{children:(0,l.jsx)(u.Popper,{appendTo:F.current,trigger:(0,l.jsx)(u.MenuToggle,r({"aria-label":"Group filter",ref:T,onClick:function(e){return(t=e).stopPropagation(),t.persist(),void N(!D);var t},isExpanded:D,className:(0,o.default)("ins-c-group-menu-toggle",t),isDisabled:k},{children:m||b?(0,l.jsxs)("div",{children:[(0,l.jsx)(u.TextInput,{ref:R,className:(0,o.default)({"ins-c-input__clearable":U}),onChange:function(e){return q(e)},onClick:function(e){return e.preventDefault()},onKeyDown:function(e){" "!==e.key&&"Escape"!==e.key||(e.preventDefault(),q(" "===e.key?"".concat(I," "):""),"Escape"===e.key&&N(!1))},isDisabled:k,"aria-label":"input with dropdown and clear button",placeholder:x,value:I,tabIndex:0,type:"text"}),U&&(0,l.jsx)("span",r({className:"ins-c-icon__link"},{children:(0,l.jsx)(c.CloseIcon,{onClick:function(){q(""),N(!1)}})}))]}):x})),popper:(0,l.jsx)(u.Menu,r({ref:V,className:(0,o.default)("ins-c-menu__scrollable",t,{"pf-m-expanded":D})},{children:(0,l.jsx)(u.MenuContent,{children:(0,l.jsxs)(u.MenuList,r({"aria-label":"Group filter"},{children:[L.length>0&&(0,l.jsx)(u.MenuGroup,{children:K(L)}),G.map((function(e,t){return(0,l.jsx)(u.MenuGroup,r({label:e.groupSelectable||"string"!=typeof e.label?void 0:e.label},{children:K(e.items,e.type,e.value)}),"".concat(e.label,"-").concat(t,"-group"))})),y?(0,l.jsx)(u.MenuItem,r({itemId:"loader",className:"ins-c-menu__show--more"},_,{onClick:function(e){return y(e)}},{children:O})):(0,l.jsx)("span",{hidden:!0,value:""})]}))})})),isVisible:D})}))}},70610:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return l(t,e),t},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var u=n(92950),c=n(85893),s=n(92950),d=n(6848),f=a(n(56947));t.default=function(e){var t=e.items,n=void 0===t?[]:t,i=e.onChange,l=void 0===i?function(){}:i,a=e.isDisabled,p=void 0!==a&&a,v=o(e,["items","onChange","isDisabled"]),h=v.placeholder,m=v.className,b=v.value,g=(0,s.useState)(!1),y=g[0],x=g[1],C=(0,s.useState)(),O=C[0],_=C[1],k=function(){return b?(0,f.isFilterValue)(b)?b.value:b:O?(0,f.isFilterValue)(O)?O.value:O:void 0},j=k();return(0,c.jsx)(s.Fragment,{children:!n||n&&n.length<=0?(0,c.jsx)(f.default,r({},v,{onChange:l,isDisabled:p,value:"".concat(k())})):(0,c.jsx)(d.Select,r({className:m,variant:d.SelectVariant.single,"aria-label":"Select Input",isDisabled:p,onToggle:function(e){return x(e)},onSelect:function(e,t){return function(e,t){null==l||l(e,t),_(t)}(e,t)},isOpen:y,placeholderText:h,ouiaId:h},{children:n.map((function(e,t){var n=e.value,i=e.isChecked,l=e.onChange,a=e.label,s=e.id,f=o(e,["value","isChecked","onChange","label","id"]);return(0,u.createElement)(d.SelectOption,r({},f,{key:s||t,value:n||""+t}),(0,c.jsx)(d.Radio,{name:s||"".concat(t,"-radio"),label:a,value:n||t,isChecked:i||void 0!==j&&j===n||void 0!==j&&j===""+t||!1,onChange:function(e,o){return null==l?void 0:l(o,r({id:s,label:a,value:n,isChecked:i},f),t)},id:s||"".concat(n,"-").concat(t)}))}))}))})}},56947:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.isFilterValue=void 0;var i=n(85893),l=n(92950),a=n(6848),o=n(55602);n(83646),t.isFilterValue=function(e){return void 0!==e.value},t.default=function(e){var t=e.icon,n=e.id,u=e.isDisabled,c=void 0!==u&&u,s=e.className,d=e.onChange,f=e.onSubmit,p=void 0===f?function(){}:f,v=e.value,h=void 0===v?"":v,m=e.placeholder,b=e.innerRef,g=r(e,["icon","id","isDisabled","className","onChange","onSubmit","value","placeholder","innerRef"]),y=h,x=(0,l.useState)(""),C=x[0],O=x[1],_=t||o.SearchIcon;return(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)(a.TextInput,{"aria-label":g["aria-label"]||"text input",className:"ins-c-conditional-filter ".concat(s||""),"data-ouia-component-type":"PF4/TextInput",id:n,isDisabled:c,value:d?"string"==typeof h?y:y.value:C,onChange:function(e,t){return function(e,t){return d?d(e,t):O(t)}(t,t.target.value)},onKeyDown:function(e){return"Enter"===e.key&&(null==p?void 0:p(e,("string"==typeof h?y:y.value)||C))},ouiaId:"ConditionalFilter",placeholder:m,"widget-type":"InsightsInput",ref:b}),(0,i.jsx)(_,{size:"sm",className:"ins-c-search-icon"})]})}},77572:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.typeMapper=t.conditionalFilterType=void 0;var i=n(92950),l=r(n(56947)),a=r(n(38888)),o=r(n(70610)),u=r(n(59850));t.conditionalFilterType={text:"text",checkbox:"checkbox",radio:"radio",custom:"custom",group:"group"},t.typeMapper={text:l.default,checkbox:a.default,radio:o.default,custom:i.Fragment,group:u.default}},40109:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,l=t.length;i<l;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.onTreeCheck=t.mapTree=t.calculateSelected=t.getGroupMenuItems=t.convertTreeItem=t.getMenuItems=t.isChecked=void 0;var a=l(n(63565));t.isChecked=function(e,t,n,i,l,a){var o,u,c,s,d,f=r(r({},a),l);if(void 0===f[e])return!1;if(void 0!==(null==(d=f[e][t])?void 0:d.group)){var p=f[e][t];if(p.isSelected){if(null===(o=null==p?void 0:p.item)||void 0===o?void 0:o.id)return n===(null===(u=null==p?void 0:p.item)||void 0===u?void 0:u.id);if(null===(c=null==p?void 0:p.item)||void 0===c?void 0:c.tagValue)return i===(null===(s=null==p?void 0:p.item)||void 0===s?void 0:s.tagValue)}return Boolean(p.isSelected)}return Boolean(f[e][t])},t.getMenuItems=function(e,t,n,i,l,o,u,c){return void 0===l&&(l=""),((null==e?void 0:e.map((function(s,d){return r(r({},s),{className:"".concat((null==s?void 0:s.className)||"pf-u-pl-sm"),key:s.id||s.value||d,value:String(s.value||s.id||d),onClick:function(d,f,p){var v,h=[d,n(i||s.type,l,(i||s.type)===a.default.treeView?f:s.value,p),r({value:l,label:o||s.label,id:u||s.id,type:i||s.type,items:e},c||s),s,l,s.value];null==t||t.apply(void 0,h),null===(v=null==s?void 0:s.onClick)||void 0===v||v.call(s,d,r(r({},s),{label:"string"==typeof s.label?s.label:""}),void 0,p)}})})))||[]).filter((function(e){return!e.noFilter}))},t.convertTreeItem=function(e){return e.id=e.id||e.value,e.name=e.label||e.name,e.value=e.id,e.label=e.name||"",e.children?r(r({},e),{children:e.children.map((function(e){return(0,t.convertTreeItem)(e)}))}):e},t.getGroupMenuItems=function(e,n,l){return e.map((function(e){var o=e.value,u=e.label,c=e.groupSelectable,s=e.id,d=e.type,f=e.items,p=e.noFilter,v=d===a.default.treeView?f.map((function(e){return(0,t.convertTreeItem)(e)})):f;return{label:u,noFilter:p,value:o,type:d,groupSelectable:c,items:(0,t.getMenuItems)(i(i([],c?[r({value:o||"",label:u||"",id:s||"",type:d,className:"pf-u-pl-xs"},e)]:[],!0),v,!0),n,l,d,o,u,s,e)}})).filter((function(e){var t=e.noFilter,n=e.items;return!t||(void 0===n?[]:n).length>0}))},t.calculateSelected=function(e){return function(t,n,i,l){void 0===t&&(t=a.default.button),void 0===n&&(n=""),void 0===i&&(i=""),void 0===l&&(l=!1);var o=null==e?void 0:e[n],u=t===a.default.treeView?[i].reduce((function e(t,n){return Array.isArray(null==n?void 0:n.children)?n.children.reduce(e,t)||[]:(t.push(n),t)}),[]):[],c=t===a.default.treeView?u.map((function(e){return e.id})):[String(i)];if(o){var s=e;return c.map((function(e){var i,o,u,c;void 0===e&&(e="");var d=s[n];s=t!==a.default.radio&&(d[e]instanceof Object?d[e].isSelected:Boolean(d[e]))?r(r({},s),((i={})[n]=r(r({},d||{}),((o={})[e]=t===a.default.treeView&&l,o)),i)):r(r({},s),((u={})[n]=r(r({},t!==a.default.radio&&d||{}),((c={})[e]=!0,c)),u))})),s}return c.reduce((function(e,t){var i,l;return r(r({},e),((i={})[n]=r(r({},null==e?void 0:e[n]),((l={})[t||""]=!0,l)),i))}),e)}};var o=function(e,n,r,i){return e.children?e.children.every((function(e){return o(e,n,r,i)})):(0,t.isChecked)(n,e.id||"",void 0,void 0,r,i)},u=function(e,n,r,i){return e.children?e.children.some((function(e){return u(e,n,r,i)})):(0,t.isChecked)(n,e.id||"",void 0,void 0,r,i)};t.mapTree=function(e,n,i,l){var a=o(e,n,i,l);return e.checkProps={checked:!1},a?e.checkProps.checked=!0:u(e,n,i,l)&&(e.checkProps={checked:null}),e.children?r(r({},e),{children:e.children.map((function(e){return(0,t.mapTree)(e,n,i,l)}))}):e},t.onTreeCheck=function(e,t,n){var r,i,l;return null===(i=(r=n[0]).onClick)||void 0===i?void 0:i.call(r,e,t,void 0,null===(l=null==e?void 0:e.target)||void 0===l?void 0:l.checked)}},63565:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={treeView:"treeView",checkbox:"checkbox",radio:"radio",button:"button",plain:"plain"}},13:e=>{e.exports=function(e,t){return null!=e&&t in Object(e)}},2958:(e,t,n)=>{var r=n(46384),i=n(90939);e.exports=function(e,t,n,l){var a=n.length,o=a,u=!l;if(null==e)return!o;for(e=Object(e);a--;){var c=n[a];if(u&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){var s=(c=n[a])[0],d=e[s],f=c[1];if(u&&c[2]){if(void 0===d&&!(s in e))return!1}else{var p=new r;if(l)var v=l(d,f,s,e,t,p);if(!(void 0===v?i(f,d,3,l,p):v))return!1}}return!0}},67206:(e,t,n)=>{var r=n(91573),i=n(16432),l=n(6557),a=n(1469),o=n(39601);e.exports=function(e){return"function"==typeof e?e:null==e?l:"object"==typeof e?a(e)?i(e[0],e[1]):r(e):o(e)}},91573:(e,t,n)=>{var r=n(2958),i=n(1499),l=n(42634);e.exports=function(e){var t=i(e);return 1==t.length&&t[0][2]?l(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}},16432:(e,t,n)=>{var r=n(90939),i=n(27361),l=n(79095),a=n(15403),o=n(89162),u=n(42634),c=n(40327);e.exports=function(e,t){return a(e)&&o(t)?u(c(e),t):function(n){var a=i(n,e);return void 0===a&&a===t?l(n,e):r(t,a,3)}}},40371:e=>{e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},79152:(e,t,n)=>{var r=n(97786);e.exports=function(e){return function(t){return r(t,e)}}},45652:(e,t,n)=>{var r=n(88668),i=n(47443),l=n(1196),a=n(74757),o=n(23593),u=n(21814);e.exports=function(e,t,n){var c=-1,s=i,d=e.length,f=!0,p=[],v=p;if(n)f=!1,s=l;else if(d>=200){var h=t?null:o(e);if(h)return u(h);f=!1,s=a,v=new r}else v=t?[]:p;e:for(;++c<d;){var m=e[c],b=t?t(m):m;if(m=n||0!==m?m:0,f&&b==b){for(var g=v.length;g--;)if(v[g]===b)continue e;t&&v.push(b),p.push(m)}else s(v,b,n)||(v!==p&&v.push(b),p.push(m))}return p}},23593:(e,t,n)=>{var r=n(58525),i=n(50308),l=n(21814),a=r&&1/l(new r([,-0]))[1]==1/0?function(e){return new r(e)}:i;e.exports=a},1499:(e,t,n)=>{var r=n(89162),i=n(3674);e.exports=function(e){for(var t=i(e),n=t.length;n--;){var l=t[n],a=e[l];t[n]=[l,a,r(a)]}return t}},89162:(e,t,n)=>{var r=n(13218);e.exports=function(e){return e==e&&!r(e)}},42634:e=>{e.exports=function(e,t){return function(n){return null!=n&&n[e]===t&&(void 0!==t||e in Object(n))}}},79095:(e,t,n)=>{var r=n(13),i=n(222);e.exports=function(e,t){return null!=e&&i(e,t,r)}},50308:e=>{e.exports=function(){}},39601:(e,t,n)=>{var r=n(40371),i=n(79152),l=n(15403),a=n(40327);e.exports=function(e){return l(e)?r(a(e)):i(e)}},45578:(e,t,n)=>{var r=n(67206),i=n(45652);e.exports=function(e,t){return e&&e.length?i(e,r(t,2)):[]}},83646:(e,t,n)=>{"use strict";n.r(t)},76677:(e,t,n)=>{"use strict";n.r(t)},24561:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>c,aV:()=>u});var r=n(92950),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},l=function(e){var t=e.animate,n=e.animateBegin,l=e.backgroundColor,a=e.backgroundOpacity,o=e.baseUrl,u=e.children,c=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,f=e.gradientDirection,p=e.uniqueKey,v=e.interval,h=e.rtl,m=e.speed,b=e.style,g=e.title,y=e.beforeMask,x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),C=p||Math.random().toString(36).substring(6),O=C+"-diff",_=C+"-animated-diff",k=C+"-aria",j=h?{transform:"scaleX(-1)"}:null,w="0; "+v+"; 1",S=m+"s",E="top-bottom"===f?"rotate(90)":void 0;return(0,r.createElement)("svg",i({"aria-labelledby":k,role:"img",style:i(i({},b),j)},x),g?(0,r.createElement)("title",{id:k},g):null,y&&(0,r.isValidElement)(y)?y:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+O+")",style:{fill:"url("+o+"#"+_+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:O},u),(0,r.createElement)("linearGradient",{id:_,gradientTransform:E},(0,r.createElement)("stop",{offset:"0%",stopColor:l,stopOpacity:a},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:w,dur:S,repeatCount:"indefinite",begin:n})),(0,r.createElement)("stop",{offset:"50%",stopColor:c,stopOpacity:s},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:w,dur:S,repeatCount:"indefinite",begin:n})),(0,r.createElement)("stop",{offset:"100%",stopColor:l,stopOpacity:a},t&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:w,dur:S,repeatCount:"indefinite",begin:n})))))};l.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var a=function(e){return e.children?(0,r.createElement)(l,i({},e)):(0,r.createElement)(o,i({},e))},o=function(e){return(0,r.createElement)(a,i({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},u=function(e){return(0,r.createElement)(a,i({viewBox:"0 0 400 110"},e),(0,r.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),(0,r.createElement)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),(0,r.createElement)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),(0,r.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),(0,r.createElement)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),(0,r.createElement)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))};const c=a}}]);