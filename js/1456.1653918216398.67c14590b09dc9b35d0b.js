(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[1456],{38888:function(e,t,n){"use strict";var l=this&&this.__assign||function(){return l=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__rest||function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n},u=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var l,r=0,i=t.length;r<i;r++)!l&&r in t||(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=a(n(93264)),s=n(89624),f=c(n(18446)),v=c(n(57557)),p=a(n(56947));t.default=function(e){var t=e.items,n=void 0===t?[]:t,r=e.value,i=void 0===r?[]:r,a=e.onChange,c=void 0===a?function(){}:a,h=e.isDisabled,m=void 0!==h&&h,b=o(e,["items","value","onChange","isDisabled"]),y=b.placeholder,g=b.className,_=(0,d.useState)(!1),O=_[0],k=_[1],C=(0,d.useState)([]),w=C[0],j=C[1],S=(0,d.useRef)(w),E=function(e){S.current=w,j(e)};(0,d.useEffect)((function(){!(0,f.default)(S.current,i)&&i&&E(i)}),[w,i]);var P=function(){return Array.from(new Set(u(u([],i&&i.length>0&&i.constructor===Array?i.map((function(e){return(0,p.isFilterValue)(e)?e.value:e})):[],!0),w,!0)))};return d.default.createElement(d.Fragment,null,!n||n&&n.length<=0?d.default.createElement(p.default,l({},b,{onChange:c,isDisabled:m,value:"".concat(P())})):d.default.createElement(s.Select,{className:g,variant:s.SelectVariant.checkbox,"aria-label":"Select Input",onToggle:function(e){return k(e)},isDisabled:m,onSelect:function(e,t){return function(e,t){var n=P();n=n.includes(t)?n.filter((function(e){return e!==t})):u(u([],n,!0),[t],!1),null==c||c(e,n,t),E(n)}(e,t)},selections:P(),isOpen:O,placeholderText:y,ouiaId:y},n.map((function(e,t){var n=e.value,r=e.onClick,i=e.label,a=e.id,u=o(e,["value","onClick","label","id"]);return d.default.createElement(s.SelectOption,l({},(0,v.default)(u,"onChange"),{key:a||t,value:String(n||a||t),onClick:function(e){return null==r?void 0:r(e,l({value:n,label:i,id:a},u),t)}}),i)}))))}},59850:function(e,t,n){"use strict";var l=this&&this.__assign||function(){return l=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(93264)),c=o(n(94184)),d=n(89624),s=n(40109),f=o(n(63565));n(76677),t.default=function(e){var t=e.className,n=e.filterBy,r=void 0===n?"":n,i=e.groups,a=void 0===i?[]:i,o=e.items,v=e.isFilterable,p=e.onFilter,h=e.onChange,m=e.onShowMore,b=e.placeholder,y=e.selected,g=e.showMoreTitle,_=e.showMoreOptions,O=(0,u.useState)({}),k=O[0],C=O[1],w=(0,u.useState)(""),j=w[0],S=w[1],E=(0,u.useState)(!1),P=E[0],M=E[1],x=(0,u.useRef)(null),I=(0,u.useRef)(null),T=(0,u.useRef)(null);(0,u.useEffect)((function(){y&&C(y)}),[y]),(0,u.useEffect)((function(){S(r)}),[r]);var V=function(e){var t,n,l;P&&((null===(t=T.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=x.current)||void 0===n?void 0:n.contains(e.target)))&&("Escape"!==e.key&&"Enter"!==e.key||(M(!P),null===(l=x.current)||void 0===l||l.focus()))},N=function(e){var t;P&&!(null===(t=T.current)||void 0===t?void 0:t.contains(e.target))&&M(!1)};(0,u.useEffect)((function(){return window.addEventListener("keydown",V),window.addEventListener("click",N),function(){window.removeEventListener("keydown",V),window.removeEventListener("click",N)}}),[P,T]);var D=(0,s.getMenuItems)((null==o?void 0:o.map((function(e){return e.type===f.default.treeView?(0,s.convertTreeItem)(e):e})))||[],h,(0,s.calculateSelected)(y||{})),F=(0,s.getGroupMenuItems)(a,h,(0,s.calculateSelected)(y||{})),A=function(e,t,n,r){return void 0===r&&(r=""),u.default.createElement(d.MenuItem,{itemId:t,key:"".concat(e.value,"-").concat(t,"-item"),className:null==e?void 0:e.className,onClick:e.onClick&&(n||e.type)===f.default.checkbox?function(t){e.onClick&&e.onClick(),t.preventDefault()}:void 0},(n||e.type)===f.default.treeView?u.default.createElement(d.TreeView,{data:[(0,s.mapTree)(e,r,k,y||{})],onCheck:function(t,n){return(0,s.onTreeCheck)(t,n,[e])},hasChecks:!0}):(n||e.type)===f.default.checkbox?u.default.createElement(d.Checkbox,l({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||(0,s.isChecked)(r,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,k,y||{})||!1,onChange:function(t,n){var l;null===(l=null==e?void 0:e.onChange)||void 0===l||l.call(e,t,n)},onClick:e.onClick?function(t){e.onClick&&e.onClick(),t.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t)})):(n||e.type)===f.default.radio?u.default.createElement(d.Radio,l({},e,{isChecked:(null==e?void 0:e.isChecked)||(0,s.isChecked)(r,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,k,y||{})||!1,onChange:function(t,n){var l;null===(l=null==e?void 0:e.onChange)||void 0===l||l.call(e,t,n)},value:(null==e?void 0:e.value)||t,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t)})):(n||e.type)===f.default.button?u.default.createElement(d.Button,{id:e.id,className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick},null==e?void 0:e.label):(null==e?void 0:e.label)||"")},B=function(e,t,n){return void 0===n&&(n=""),e.map((function(e,l){return(t||e.type)===f.default.treeView?u.default.createElement("div",{key:"".concat(e.value,"-").concat(l,"-item"),className:"ins-c-tree-view"},A(e,l,t,n)):A(e,l,t,n)}))};return u.default.createElement("div",{ref:I},u.default.createElement(d.Popper,{appendTo:I.current,trigger:u.default.createElement(d.MenuToggle,{"aria-label":"Group filter",ref:x,onClick:function(e){e.stopPropagation(),e.persist(),M(!P)},isExpanded:P,className:t},v||p?u.default.createElement(d.TextInput,{"aria-label":"input with dropdown and clear button",placeholder:b,value:j,tabIndex:0,onChange:function(e){S(e),null==p||p(e)},type:"search"}):b),popper:u.default.createElement(d.Menu,{ref:T,className:(0,c.default)("ins-c-menu__scrollable",t,{"pf-m-expanded":P})},u.default.createElement(d.MenuContent,null,u.default.createElement(d.MenuList,{"aria-label":"Group filter"},D.length>0&&u.default.createElement(d.MenuGroup,null,B(D)),F.map((function(e,t){return u.default.createElement(d.MenuGroup,{label:e.groupSelectable&&"string"==typeof e.label?e.label:void 0,key:"".concat(e.label,"-").concat(t,"-group")},B(e.items,e.type,e.value))})),m?u.default.createElement(d.MenuItem,l({itemId:"loader",className:"ins-c-menu__show--more"},_,{onClick:function(e){return m(e)}}),g):u.default.createElement("span",{hidden:!0,value:""})))),isVisible:P}))}},70610:function(e,t,n){"use strict";var l=this&&this.__assign||function(){return l=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__rest||function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(93264)),c=n(89624),d=a(n(56947));t.default=function(e){var t=e.items,n=void 0===t?[]:t,r=e.onChange,i=void 0===r?function(){}:r,a=e.isDisabled,s=void 0!==a&&a,f=o(e,["items","onChange","isDisabled"]),v=f.placeholder,p=f.className,h=f.value,m=(0,u.useState)(!1),b=m[0],y=m[1],g=(0,u.useState)(),_=g[0],O=g[1],k=function(){return h?(0,d.isFilterValue)(h)?h.value:h:_?(0,d.isFilterValue)(_)?_.value:_:void 0},C=k();return u.default.createElement(u.Fragment,null,!n||n&&n.length<=0?u.default.createElement(d.default,l({},f,{onChange:i,isDisabled:s,value:"".concat(k())})):u.default.createElement(c.Select,{className:p,variant:c.SelectVariant.single,"aria-label":"Select Input",isDisabled:s,onToggle:function(e){return y(e)},onSelect:function(e,t){return function(e,t){null==i||i(e,t),O(t)}(e,t)},isOpen:b,placeholderText:v,ouiaId:v},n.map((function(e,t){var n=e.value,r=e.isChecked,i=e.onChange,a=e.label,d=e.id,s=o(e,["value","isChecked","onChange","label","id"]);return u.default.createElement(c.SelectOption,l({},s,{key:d||t,value:n||""+t}),u.default.createElement(c.Radio,{name:d||"".concat(t,"-radio"),label:a,value:n||t,isChecked:r||void 0!==C&&C===n||void 0!==C&&C===""+t||!1,onChange:function(e,o){return null==i?void 0:i(o,l({id:d,label:a,value:n,isChecked:r},s),t)},id:d||"".concat(n,"-").concat(t)}))}))))}},56947:function(e,t,n){"use strict";var l=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return r(t,e),t},a=this&&this.__rest||function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.isFilterValue=void 0;var o=i(n(93264)),u=n(89624),c=n(2426);n(83646),t.isFilterValue=function(e){return void 0!==e.value},t.default=function(e){var t=e.icon,n=e.id,l=e.isDisabled,r=void 0!==l&&l,i=e.className,d=e.onChange,s=e.onSubmit,f=void 0===s?function(){}:s,v=e.value,p=void 0===v?"":v,h=e.placeholder,m=a(e,["icon","id","isDisabled","className","onChange","onSubmit","value","placeholder"]),b=(0,o.useState)(""),y=b[0],g=b[1],_=t||c.SearchIcon;return o.default.createElement(o.Fragment,null,o.default.createElement(u.TextInput,{"aria-label":m["aria-label"]||"text input",className:"ins-c-conditional-filter ".concat(i||""),"data-ouia-component-type":"PF4/TextInput",id:n,isDisabled:r,value:d?"string"==typeof p?p:p.value:y,onChange:function(e,t){return function(e,t){return d?d(e,t):g(t)}(t,t.target.value)},onKeyDown:function(e){return"Enter"===e.key&&(null==f?void 0:f(e,("string"==typeof p?p:p.value)||y))},ouiaId:"ConditionalFilter",placeholder:h,"widget-type":"InsightsInput"}),o.default.createElement(_,{size:"sm",className:"ins-c-search-icon"}))}},77572:function(e,t,n){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.typeMapper=t.conditionalFilterType=void 0;var r=n(93264),i=l(n(56947)),a=l(n(38888)),o=l(n(70610)),u=l(n(59850));t.conditionalFilterType={text:"text",checkbox:"checkbox",radio:"radio",custom:"custom",group:"group"},t.typeMapper={text:i.default,checkbox:a.default,radio:o.default,custom:r.Fragment,group:u.default}},40109:function(e,t,n){"use strict";var l=this&&this.__assign||function(){return l=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var l,r=0,i=t.length;r<i;r++)!l&&r in t||(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.onTreeCheck=t.mapTree=t.calculateSelected=t.getGroupMenuItems=t.convertTreeItem=t.getMenuItems=t.isChecked=void 0;var a=i(n(63565));t.isChecked=function(e,t,n,r,i,a){var o,u,c,d,s=l(l({},a),i);if(void 0===s[e])return!1;if(function(e){var t;return void 0!==(null===(t=e)||void 0===t?void 0:t.items)}(s[e][t])){var f=s[e][t];if(f.isSelected){if(null===(o=null==f?void 0:f.item)||void 0===o?void 0:o.id)return n===(null===(u=null==f?void 0:f.item)||void 0===u?void 0:u.id);if(null===(c=null==f?void 0:f.item)||void 0===c?void 0:c.tagValue)return r===(null===(d=null==f?void 0:f.item)||void 0===d?void 0:d.tagValue)}return Boolean(f.isSelected)}return Boolean(s[e][t])},t.getMenuItems=function(e,t,n,r,i,o,u,c){return void 0===i&&(i=""),((null==e?void 0:e.map((function(d,s){return l(l({},d),{className:"".concat((null==d?void 0:d.className)||"pf-u-pl-sm"),key:d.id||d.value||s,value:String(d.value||d.id||s),onClick:function(s,f,v){var p,h=[s,n(r||d.type,i,(r||d.type)===a.default.treeView?f:d.value,v),l({value:i,label:o||d.label,id:u||d.id,type:r||d.type,items:e},c||d),d,i,d.value];null==t||t.apply(void 0,h),null===(p=null==d?void 0:d.onClick)||void 0===p||p.call(d,s,l(l({},d),{label:"string"==typeof d.label?d.label:""}),void 0,v)}})})))||[]).filter((function(e){return!e.noFilter}))},t.convertTreeItem=function(e){return e.id=e.id||e.value,e.name=e.label||e.name,e.value=e.id,e.label=e.name||"",e.children?l(l({},e),{children:e.children.map((function(e){return(0,t.convertTreeItem)(e)}))}):e},t.getGroupMenuItems=function(e,n,i){return e.map((function(e){var o=e.value,u=e.label,c=e.groupSelectable,d=e.id,s=e.type,f=e.items,v=e.noFilter,p=s===a.default.treeView?f.map((function(e){return(0,t.convertTreeItem)(e)})):f;return{label:u,noFilter:v,value:o,type:s,groupSelectable:c,items:(0,t.getMenuItems)(r(r([],c?[l({value:o||"",label:u||"",id:d||"",type:s,className:"pf-u-pl-xs"},e)]:[],!0),p,!0),n,i,s,o,u,d,e)}})).filter((function(e){var t=e.noFilter,n=e.items;return!t||(void 0===n?[]:n).length>0}))},t.calculateSelected=function(e){return function(t,n,r,i){void 0===t&&(t=a.default.button),void 0===n&&(n=""),void 0===r&&(r=""),void 0===i&&(i=!1);var o=null==e?void 0:e[n],u=t===a.default.treeView?[r].reduce((function e(t,n){return Array.isArray(null==n?void 0:n.children)?n.children.reduce(e,t)||[]:(t.push(n),t)}),[]):[],c=t===a.default.treeView?u.map((function(e){return e.id})):[String(r)];if(o){var d=e;return c.map((function(e){var r,o,u,c;void 0===e&&(e="");var s=d[n];d=t!==a.default.radio&&(s[e]instanceof Object?s[e].isSelected:Boolean(s[e]))?l(l({},d),((r={})[n]=l(l({},s||{}),((o={})[e]=t===a.default.treeView&&i,o)),r)):l(l({},d),((u={})[n]=l(l({},t!==a.default.radio&&s||{}),((c={})[e]=!0,c)),u))})),d}return c.reduce((function(e,t){var r,i;return l(l({},e),((r={})[n]=l(l({},null==e?void 0:e[n]),((i={})[t||""]=!0,i)),r))}),e)}};var o=function(e,n,l,r){return e.children?e.children.every((function(e){return o(e,n,l,r)})):(0,t.isChecked)(n,e.id||"",void 0,void 0,l,r)},u=function(e,n,l,r){return e.children?e.children.some((function(e){return u(e,n,l,r)})):(0,t.isChecked)(n,e.id||"",void 0,void 0,l,r)};t.mapTree=function(e,n,r,i){var a=o(e,n,r,i);return e.checkProps={checked:!1},a?e.checkProps.checked=!0:u(e,n,r,i)&&(e.checkProps={checked:null}),e.children?l(l({},e),{children:e.children.map((function(e){return(0,t.mapTree)(e,n,r,i)}))}):e},t.onTreeCheck=function(e,t,n){var l,r,i;return null===(r=(l=n[0]).onClick)||void 0===r?void 0:r.call(l,e,t,void 0,null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.checked)}},63565:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={treeView:"treeView",checkbox:"checkbox",radio:"radio",button:"button",plain:"plain"}},39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var l=n(93264),r=n.n(l),i=n(94184),a=n.n(i),o=n(89624);const u=function(e){var t=e.className,n=e.title,l=a()(t);return r().createElement(o.Title,{headingLevel:"h1",size:"2xl",className:l,"widget-type":"InsightsPageHeaderTitle"},n)}},45652:(e,t,n)=>{var l=n(88668),r=n(47443),i=n(1196),a=n(74757),o=n(23593),u=n(21814);e.exports=function(e,t,n){var c=-1,d=r,s=e.length,f=!0,v=[],p=v;if(n)f=!1,d=i;else if(s>=200){var h=t?null:o(e);if(h)return u(h);f=!1,d=a,p=new l}else p=t?[]:v;e:for(;++c<s;){var m=e[c],b=t?t(m):m;if(m=n||0!==m?m:0,f&&b==b){for(var y=p.length;y--;)if(p[y]===b)continue e;t&&p.push(b),v.push(m)}else d(p,b,n)||(p!==v&&p.push(b),v.push(m))}return v}},23593:(e,t,n)=>{var l=n(58525),r=n(50308),i=n(21814),a=l&&1/i(new l([,-0]))[1]==1/0?function(e){return new l(e)}:r;e.exports=a},50308:e=>{e.exports=function(){}},45578:(e,t,n)=>{var l=n(67206),r=n(45652);e.exports=function(e,t){return e&&e.length?r(e,l(t,2)):[]}},83646:(e,t,n)=>{"use strict";n.r(t)},76677:(e,t,n)=>{"use strict";n.r(t)}}]);