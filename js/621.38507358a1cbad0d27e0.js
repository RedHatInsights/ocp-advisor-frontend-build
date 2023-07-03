(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[621],{2095:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const i=n(70655),r=i.__importStar(n(92950)),l=i.__importDefault(n(54918)),a=n(38296),o=n(23053);t.CardContext=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),t.Card=e=>{var{children:n=null,id:c="",className:u="",component:s="article",isHoverable:d=!1,isCompact:f=!1,isSelectable:p=!1,isSelectableRaised:v=!1,isSelected:h=!1,isDisabledRaised:m=!1,isFlat:b=!1,isExpanded:g=!1,isRounded:y=!1,isLarge:x=!1,isFullHeight:C=!1,isPlain:O=!1,ouiaId:_,ouiaSafe:k=!0,hasSelectableInput:j=!1,selectableInputAriaLabel:w,onSelectableInputChange:S=(()=>{})}=e,E=i.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const I=s,P=(0,o.useOUIAProps)(t.Card.displayName,_,k),[M,D]=r.useState(""),[N,T]=r.useState();f&&x&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),x=!1);const F=r.useRef(!1);return r.useEffect((()=>{w?T({"aria-label":w}):M?T({"aria-labelledby":M}):j&&!F.current&&(T({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[j,w,M]),r.createElement(t.CardContext.Provider,{value:{cardId:c,registerTitleId:e=>{D(e),F.current=!!e},isExpanded:g}},j&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${c}-input`},N,{type:"checkbox",checked:h,onChange:e=>S(c,e),disabled:m,tabIndex:-1})),r.createElement(I,Object.assign({id:c,className:(0,a.css)(l.default.card,f&&l.default.modifiers.compact,g&&l.default.modifiers.expanded,b&&l.default.modifiers.flat,y&&l.default.modifiers.rounded,x&&l.default.modifiers.displayLg,C&&l.default.modifiers.fullHeight,O&&l.default.modifiers.plain,m?(0,a.css)(l.default.modifiers.nonSelectableRaised):v?(0,a.css)(l.default.modifiers.selectableRaised,h&&l.default.modifiers.selectedRaised):p||d?(0,a.css)(l.default.modifiers.selectable,h&&l.default.modifiers.selected):"",u),tabIndex:p||v?"0":void 0},E,P),n))},t.Card.displayName="Card"},85962:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const i=n(70655),r=i.__importStar(n(92950)),l=i.__importDefault(n(54918)),a=n(38296);t.CardBody=e=>{var{children:t=null,className:n="",component:o="div",isFilled:c=!0}=e,u=i.__rest(e,["children","className","component","isFilled"]);const s=o;return r.createElement(s,Object.assign({className:(0,a.css)(l.default.cardBody,!c&&l.default.modifiers.noFill,n)},u),t)},t.CardBody.displayName="CardBody"},38888:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return l(t,e),t},o=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n},c=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,r=0,l=t.length;r<l;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(92950),d=n(85893),f=n(92950),p=n(6848),v=u(n(18446)),h=u(n(57557)),m=a(n(56947));t.default=function(e){var t=e.items,n=void 0===t?[]:t,r=e.value,l=void 0===r?[]:r,a=e.onChange,u=void 0===a?function(){}:a,b=e.isDisabled,g=void 0!==b&&b,y=o(e,["items","value","onChange","isDisabled"]),x=y.placeholder,C=y.className,O=(0,f.useState)(!1),_=O[0],k=O[1],j=(0,f.useState)([]),w=j[0],S=j[1],E=(0,f.useRef)(w),I=function(e){E.current=w,S(e)};(0,f.useEffect)((function(){!(0,v.default)(E.current,l)&&l&&I(l)}),[w,l]);var P=function(){return Array.from(new Set(c(c([],l&&l.length>0&&l.constructor===Array?l.map((function(e){return(0,m.isFilterValue)(e)?e.value:e})):[],!0),w,!0)))};return(0,d.jsx)(f.Fragment,{children:!n||n&&n.length<=0?(0,d.jsx)(m.default,i({},y,{onChange:u,isDisabled:g,value:"".concat(P())})):(0,d.jsx)(p.Select,i({className:C,variant:p.SelectVariant.checkbox,"aria-label":"Select Input",onToggle:function(e){return k(e)},isDisabled:g,onSelect:function(e,t){return function(e,t){var n=P();n=n.includes(t)?n.filter((function(e){return e!==t})):c(c([],n,!0),[t],!1),null==u||u(e,n,t),I(n)}(e,t)},selections:P(),isOpen:_,placeholderText:x,ouiaId:x},{children:n.map((function(e,t){var n=e.value,r=e.onClick,l=e.label,a=e.id,c=o(e,["value","onClick","label","id"]);return(0,s.createElement)(p.SelectOption,i({},(0,h.default)(c,"onChange"),{key:a||t,value:String(n||a||t),onClick:function(e){return null==r?void 0:r(e,i({value:n,label:l,id:a},c),t)}}),l)}))}))})}},59850:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(85893),a=n(92950),o=r(n(94184)),c=n(6848),u=n(55602),s=n(40109),d=r(n(63565));n(76677),t.default=function(e){var t=e.className,n=e.filterBy,r=void 0===n?"":n,f=e.groups,p=void 0===f?[]:f,v=e.items,h=e.isFilterable,m=void 0!==h&&h,b=e.onFilter,g=e.onChange,y=e.onShowMore,x=e.placeholder,C=e.selected,O=e.showMoreTitle,_=e.showMoreOptions,k=e.isDisabled,j=(0,a.useState)({}),w=j[0],S=j[1],E=(0,a.useState)(""),I=E[0],P=E[1],M=(0,a.useState)(!1),D=M[0],N=M[1],T=(0,a.useRef)(null),F=(0,a.useRef)(null),V=(0,a.useRef)(null),R=(0,a.useRef)(null);(0,a.useEffect)((function(){C&&S(C)}),[C]),(0,a.useEffect)((function(){P(r)}),[r]);var A=function(e){var t,n,i;D&&((null===(t=V.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=T.current)||void 0===n?void 0:n.contains(e.target)))&&("Escape"!==e.key&&"Enter"!==e.key||(N(!D),null===(i=T.current)||void 0===i||i.focus()))},B=function(e){var t;D&&!(null===(t=V.current)||void 0===t?void 0:t.contains(e.target))&&N(!1)};(0,a.useEffect)((function(){return window.addEventListener("keydown",A),window.addEventListener("click",B),function(){window.removeEventListener("keydown",A),window.removeEventListener("click",B)}}),[D,V]);var L=(0,s.getMenuItems)((null==v?void 0:v.map((function(e){return e.type===d.default.treeView?(0,s.convertTreeItem)(e):e})))||[],g,(0,s.calculateSelected)(C||{})),G=(0,s.getGroupMenuItems)(p,g,(0,s.calculateSelected)(C||{})),H=function(e,t,n,r){return void 0===r&&(r=""),(0,l.jsx)(c.MenuItem,i({itemId:t,className:null==e?void 0:e.className,onClick:e.onClick&&(n||e.type)===d.default.checkbox?function(t){e.onClick&&e.onClick(),t.preventDefault()}:void 0},{children:(n||e.type)===d.default.treeView?(0,l.jsx)(c.TreeView,{data:[(0,s.mapTree)(e,r,w,C||{})],onCheck:function(t,n){return(0,s.onTreeCheck)(t,n,[e])},hasChecks:!0}):(n||e.type)===d.default.checkbox?(0,l.jsx)(c.Checkbox,i({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||(0,s.isChecked)(r,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,w,C||{})||!1,onChange:function(t,n){var i;null===(i=null==e?void 0:e.onChange)||void 0===i||i.call(e,t,n)},onClick:e.onClick?function(t){e.onClick&&e.onClick(),t.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t)})):(n||e.type)===d.default.radio?(0,l.jsx)(c.Radio,i({},e,{isChecked:(null==e?void 0:e.isChecked)||(0,s.isChecked)(r,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,w,C||{})||!1,onChange:function(t,n){var i;null===(i=null==e?void 0:e.onChange)||void 0===i||i.call(e,t,n)},value:(null==e?void 0:e.value)||t,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t)})):(n||e.type)===d.default.button?(0,l.jsx)(c.Button,i({id:e.id,className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick},{children:null==e?void 0:e.label})):(null==e?void 0:e.label)||""}),"".concat(e.value,"-").concat(t,"-item"))},K=function(e,t,n){return void 0===n&&(n=""),e.map((function(e,r){return(t||e.type)===d.default.treeView?(0,l.jsx)("div",i({className:"ins-c-tree-view"},{children:H(e,r,t,n)}),"".concat(e.value,"-").concat(r,"-item")):H(e,r,t,n)}))},U=(document.activeElement===R.current||document.activeElement===T.current)&&(null==I?void 0:I.length)>0,q=function(e){P(e),null==b||b(e)};return(0,l.jsx)("div",i({ref:F},{children:(0,l.jsx)(c.Popper,{appendTo:F.current,trigger:(0,l.jsx)(c.MenuToggle,i({"aria-label":"Group filter",ref:T,onClick:function(e){return(t=e).stopPropagation(),t.persist(),void N(!D);var t},isExpanded:D,className:(0,o.default)("ins-c-group-menu-toggle",t),isDisabled:k},{children:m||b?(0,l.jsxs)("div",{children:[(0,l.jsx)(c.TextInput,{ref:R,className:(0,o.default)({"ins-c-input__clearable":U}),onChange:function(e){return q(e)},onClick:function(e){return e.preventDefault()},onKeyDown:function(e){" "!==e.key&&"Escape"!==e.key||(e.preventDefault(),q(" "===e.key?"".concat(I," "):""),"Escape"===e.key&&N(!1))},isDisabled:k,"aria-label":"input with dropdown and clear button",placeholder:x,value:I,tabIndex:0,type:"text"}),U&&(0,l.jsx)("span",i({className:"ins-c-icon__link"},{children:(0,l.jsx)(u.CloseIcon,{onClick:function(){q(""),N(!1)}})}))]}):x})),popper:(0,l.jsx)(c.Menu,i({ref:V,className:(0,o.default)("ins-c-menu__scrollable",t,{"pf-m-expanded":D})},{children:(0,l.jsx)(c.MenuContent,{children:(0,l.jsxs)(c.MenuList,i({"aria-label":"Group filter"},{children:[L.length>0&&(0,l.jsx)(c.MenuGroup,{children:K(L)}),G.map((function(e,t){return(0,l.jsx)(c.MenuGroup,i({label:e.groupSelectable||"string"!=typeof e.label?void 0:e.label},{children:K(e.items,e.type,e.value)}),"".concat(e.label,"-").concat(t,"-group"))})),y?(0,l.jsx)(c.MenuItem,i({itemId:"loader",className:"ins-c-menu__show--more"},_,{onClick:function(e){return y(e)}},{children:O})):(0,l.jsx)("span",{hidden:!0,value:""})]}))})})),isVisible:D})}))}},70610:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return l(t,e),t},o=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var c=n(92950),u=n(85893),s=n(92950),d=n(6848),f=a(n(56947));t.default=function(e){var t=e.items,n=void 0===t?[]:t,r=e.onChange,l=void 0===r?function(){}:r,a=e.isDisabled,p=void 0!==a&&a,v=o(e,["items","onChange","isDisabled"]),h=v.placeholder,m=v.className,b=v.value,g=(0,s.useState)(!1),y=g[0],x=g[1],C=(0,s.useState)(),O=C[0],_=C[1],k=function(){return b?(0,f.isFilterValue)(b)?b.value:b:O?(0,f.isFilterValue)(O)?O.value:O:void 0},j=k();return(0,u.jsx)(s.Fragment,{children:!n||n&&n.length<=0?(0,u.jsx)(f.default,i({},v,{onChange:l,isDisabled:p,value:"".concat(k())})):(0,u.jsx)(d.Select,i({className:m,variant:d.SelectVariant.single,"aria-label":"Select Input",isDisabled:p,onToggle:function(e){return x(e)},onSelect:function(e,t){return function(e,t){null==l||l(e,t),_(t)}(e,t)},isOpen:y,placeholderText:h,ouiaId:h},{children:n.map((function(e,t){var n=e.value,r=e.isChecked,l=e.onChange,a=e.label,s=e.id,f=o(e,["value","isChecked","onChange","label","id"]);return(0,c.createElement)(d.SelectOption,i({},f,{key:s||t,value:n||""+t}),(0,u.jsx)(d.Radio,{name:s||"".concat(t,"-radio"),label:a,value:n||t,isChecked:r||void 0!==j&&j===n||void 0!==j&&j===""+t||!1,onChange:function(e,o){return null==l?void 0:l(o,i({id:s,label:a,value:n,isChecked:r},f),t)},id:s||"".concat(n,"-").concat(t)}))}))}))})}},56947:function(e,t,n){"use strict";var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.isFilterValue=void 0;var r=n(85893),l=n(92950),a=n(6848),o=n(55602);n(83646),t.isFilterValue=function(e){return void 0!==e.value},t.default=function(e){var t=e.icon,n=e.id,c=e.isDisabled,u=void 0!==c&&c,s=e.className,d=e.onChange,f=e.onSubmit,p=void 0===f?function(){}:f,v=e.value,h=void 0===v?"":v,m=e.placeholder,b=e.innerRef,g=i(e,["icon","id","isDisabled","className","onChange","onSubmit","value","placeholder","innerRef"]),y=h,x=(0,l.useState)(""),C=x[0],O=x[1],_=t||o.SearchIcon;return(0,r.jsxs)(l.Fragment,{children:[(0,r.jsx)(a.TextInput,{"aria-label":g["aria-label"]||"text input",className:"ins-c-conditional-filter ".concat(s||""),"data-ouia-component-type":"PF4/TextInput",id:n,isDisabled:u,value:d?"string"==typeof h?y:y.value:C,onChange:function(e,t){return function(e,t){return d?d(e,t):O(t)}(t,t.target.value)},onKeyDown:function(e){return"Enter"===e.key&&(null==p?void 0:p(e,("string"==typeof h?y:y.value)||C))},ouiaId:"ConditionalFilter",placeholder:m,"widget-type":"InsightsInput",ref:b}),(0,r.jsx)(_,{size:"sm",className:"ins-c-search-icon"})]})}},77572:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.typeMapper=t.conditionalFilterType=void 0;var r=n(92950),l=i(n(56947)),a=i(n(38888)),o=i(n(70610)),c=i(n(59850));t.conditionalFilterType={text:"text",checkbox:"checkbox",radio:"radio",custom:"custom",group:"group"},t.typeMapper={text:l.default,checkbox:a.default,radio:o.default,custom:r.Fragment,group:c.default}},40109:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,r=0,l=t.length;r<l;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.onTreeCheck=t.mapTree=t.calculateSelected=t.getGroupMenuItems=t.convertTreeItem=t.getMenuItems=t.isChecked=void 0;var a=l(n(63565));t.isChecked=function(e,t,n,r,l,a){var o,c,u,s,d,f=i(i({},a),l);if(void 0===f[e])return!1;if(void 0!==(null==(d=f[e][t])?void 0:d.group)){var p=f[e][t];if(p.isSelected){if(null===(o=null==p?void 0:p.item)||void 0===o?void 0:o.id)return n===(null===(c=null==p?void 0:p.item)||void 0===c?void 0:c.id);if(null===(u=null==p?void 0:p.item)||void 0===u?void 0:u.tagValue)return r===(null===(s=null==p?void 0:p.item)||void 0===s?void 0:s.tagValue)}return Boolean(p.isSelected)}return Boolean(f[e][t])},t.getMenuItems=function(e,t,n,r,l,o,c,u){return void 0===l&&(l=""),((null==e?void 0:e.map((function(s,d){return i(i({},s),{className:"".concat((null==s?void 0:s.className)||"pf-u-pl-sm"),key:s.id||s.value||d,value:String(s.value||s.id||d),onClick:function(d,f,p){var v,h=[d,n(r||s.type,l,(r||s.type)===a.default.treeView?f:s.value,p),i({value:l,label:o||s.label,id:c||s.id,type:r||s.type,items:e},u||s),s,l,s.value];null==t||t.apply(void 0,h),null===(v=null==s?void 0:s.onClick)||void 0===v||v.call(s,d,i(i({},s),{label:"string"==typeof s.label?s.label:""}),void 0,p)}})})))||[]).filter((function(e){return!e.noFilter}))},t.convertTreeItem=function(e){return e.id=e.id||e.value,e.name=e.label||e.name,e.value=e.id,e.label=e.name||"",e.children?i(i({},e),{children:e.children.map((function(e){return(0,t.convertTreeItem)(e)}))}):e},t.getGroupMenuItems=function(e,n,l){return e.map((function(e){var o=e.value,c=e.label,u=e.groupSelectable,s=e.id,d=e.type,f=e.items,p=e.noFilter,v=d===a.default.treeView?f.map((function(e){return(0,t.convertTreeItem)(e)})):f;return{label:c,noFilter:p,value:o,type:d,groupSelectable:u,items:(0,t.getMenuItems)(r(r([],u?[i({value:o||"",label:c||"",id:s||"",type:d,className:"pf-u-pl-xs"},e)]:[],!0),v,!0),n,l,d,o,c,s,e)}})).filter((function(e){var t=e.noFilter,n=e.items;return!t||(void 0===n?[]:n).length>0}))},t.calculateSelected=function(e){return function(t,n,r,l){void 0===t&&(t=a.default.button),void 0===n&&(n=""),void 0===r&&(r=""),void 0===l&&(l=!1);var o=null==e?void 0:e[n],c=t===a.default.treeView?[r].reduce((function e(t,n){return Array.isArray(null==n?void 0:n.children)?n.children.reduce(e,t)||[]:(t.push(n),t)}),[]):[],u=t===a.default.treeView?c.map((function(e){return e.id})):[String(r)];if(o){var s=e;return u.map((function(e){var r,o,c,u;void 0===e&&(e="");var d=s[n];s=t!==a.default.radio&&(d[e]instanceof Object?d[e].isSelected:Boolean(d[e]))?i(i({},s),((r={})[n]=i(i({},d||{}),((o={})[e]=t===a.default.treeView&&l,o)),r)):i(i({},s),((c={})[n]=i(i({},t!==a.default.radio&&d||{}),((u={})[e]=!0,u)),c))})),s}return u.reduce((function(e,t){var r,l;return i(i({},e),((r={})[n]=i(i({},null==e?void 0:e[n]),((l={})[t||""]=!0,l)),r))}),e)}};var o=function(e,n,i,r){return e.children?e.children.every((function(e){return o(e,n,i,r)})):(0,t.isChecked)(n,e.id||"",void 0,void 0,i,r)},c=function(e,n,i,r){return e.children?e.children.some((function(e){return c(e,n,i,r)})):(0,t.isChecked)(n,e.id||"",void 0,void 0,i,r)};t.mapTree=function(e,n,r,l){var a=o(e,n,r,l);return e.checkProps={checked:!1},a?e.checkProps.checked=!0:c(e,n,r,l)&&(e.checkProps={checked:null}),e.children?i(i({},e),{children:e.children.map((function(e){return(0,t.mapTree)(e,n,r,l)}))}):e},t.onTreeCheck=function(e,t,n){var i,r,l;return null===(r=(i=n[0]).onClick)||void 0===r?void 0:r.call(i,e,t,void 0,null===(l=null==e?void 0:e.target)||void 0===l?void 0:l.checked)}},63565:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={treeView:"treeView",checkbox:"checkbox",radio:"radio",button:"button",plain:"plain"}},45652:(e,t,n)=>{var i=n(88668),r=n(47443),l=n(1196),a=n(74757),o=n(23593),c=n(21814);e.exports=function(e,t,n){var u=-1,s=r,d=e.length,f=!0,p=[],v=p;if(n)f=!1,s=l;else if(d>=200){var h=t?null:o(e);if(h)return c(h);f=!1,s=a,v=new i}else v=t?[]:p;e:for(;++u<d;){var m=e[u],b=t?t(m):m;if(m=n||0!==m?m:0,f&&b==b){for(var g=v.length;g--;)if(v[g]===b)continue e;t&&v.push(b),p.push(m)}else s(v,b,n)||(v!==p&&v.push(b),p.push(m))}return p}},23593:(e,t,n)=>{var i=n(58525),r=n(50308),l=n(21814),a=i&&1/l(new i([,-0]))[1]==1/0?function(e){return new i(e)}:r;e.exports=a},50308:e=>{e.exports=function(){}},45578:(e,t,n)=>{var i=n(67206),r=n(45652);e.exports=function(e,t){return e&&e.length?r(e,i(t,2)):[]}},83646:(e,t,n)=>{"use strict";n.r(t)},76677:(e,t,n)=>{"use strict";n.r(t)},24561:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>u,aV:()=>c});var i=n(92950),r=function(){return r=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},l=function(e){var t=e.animate,n=e.animateBegin,l=e.backgroundColor,a=e.backgroundOpacity,o=e.baseUrl,c=e.children,u=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,f=e.gradientDirection,p=e.uniqueKey,v=e.interval,h=e.rtl,m=e.speed,b=e.style,g=e.title,y=e.beforeMask,x=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),C=p||Math.random().toString(36).substring(6),O=C+"-diff",_=C+"-animated-diff",k=C+"-aria",j=h?{transform:"scaleX(-1)"}:null,w="0; "+v+"; 1",S=m+"s",E="top-bottom"===f?"rotate(90)":void 0;return(0,i.createElement)("svg",r({"aria-labelledby":k,role:"img",style:r(r({},b),j)},x),g?(0,i.createElement)("title",{id:k},g):null,y&&(0,i.isValidElement)(y)?y:null,(0,i.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+O+")",style:{fill:"url("+o+"#"+_+")"}}),(0,i.createElement)("defs",null,(0,i.createElement)("clipPath",{id:O},c),(0,i.createElement)("linearGradient",{id:_,gradientTransform:E},(0,i.createElement)("stop",{offset:"0%",stopColor:l,stopOpacity:a},t&&(0,i.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:w,dur:S,repeatCount:"indefinite",begin:n})),(0,i.createElement)("stop",{offset:"50%",stopColor:u,stopOpacity:s},t&&(0,i.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:w,dur:S,repeatCount:"indefinite",begin:n})),(0,i.createElement)("stop",{offset:"100%",stopColor:l,stopOpacity:a},t&&(0,i.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:w,dur:S,repeatCount:"indefinite",begin:n})))))};l.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var a=function(e){return e.children?(0,i.createElement)(l,r({},e)):(0,i.createElement)(o,r({},e))},o=function(e){return(0,i.createElement)(a,r({viewBox:"0 0 476 124"},e),(0,i.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,i.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},c=function(e){return(0,i.createElement)(a,r({viewBox:"0 0 400 110"},e),(0,i.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),(0,i.createElement)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),(0,i.createElement)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),(0,i.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),(0,i.createElement)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),(0,i.createElement)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))};const u=a}}]);
//# sourceMappingURL=../sourcemaps/621.c976659941f2a5cbeb4f3506bc9db138.js.map