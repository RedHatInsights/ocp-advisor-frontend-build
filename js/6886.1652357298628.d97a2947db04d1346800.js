(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[6886],{18246:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(70655);n.__exportStar(o(13877),t),n.__exportStar(o(35817),t)},67867:function(e,t,o){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&r(t,e,o);return l(t,e),t},i=this&&this.__spreadArray||function(e,t,o){if(o||2===arguments.length)for(var n,r=0,l=t.length;r<l;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.actionPropsGenerator=t.overflowActionsMapper=void 0;var c=a(o(93264)),s=o(89624),d=o(25832),f=u(o(94184));function p(e){return void 0!==e.label}t.overflowActionsMapper=function(e,t){var o=e;return c.default.createElement(s.DropdownItem,n({},o.props,{className:"ins-c-primary-toolbar__overflow-actions",key:o.value||o.key||"".concat(t,"-overflow"),component:o.props&&o.props.component||c.default.isValidElement(o.label||e)?"div":"button",onClick:function(e){return o.onClick&&o.onClick(e,o,t)}}),o.label||e)},t.actionPropsGenerator=function(e,t){var o,r,l,a,i,u="object"==typeof e&&null!==typeof e&&"function"==typeof(null===(o=e)||void 0===o?void 0:o.onClick)?function(o){var n;return null===(n=e)||void 0===n?void 0:n.onClick(o,e,t)}:void 0;return n(n({},null===(r=e)||void 0===r?void 0:r.props),{onClick:u,component:(null===(a=null===(l=e)||void 0===l?void 0:l.props)||void 0===a?void 0:a.component)||(c.default.isValidElement(e.label||e)?"div":"button"),children:"object"==typeof e&&null!==typeof e?null===(i=e)||void 0===i?void 0:i.label:e})},t.default=function(e){var o,r=e.actions,l=void 0===r?[]:r,a=e.overflowActions,u=void 0===a?[]:a,m=e.onSelect,v=void 0===m?function(){}:m,b=e.dropdownProps,y=void 0===b?{}:b,g=e.kebabToggleProps,_=e.exportConfig,h=(0,c.useState)(!1),E=h[0],C=h[1],S=function(e){return C(e)},x=l[0],k=l.slice(1),I=i(i(i(i([],x?[c.default.createElement(s.DropdownItem,n({key:"first-action"},(0,t.actionPropsGenerator)(x,"first-action"),{className:(0,f.default)("ins-c-primary-toolbar__first-action",p(x)?null===(o=null==x?void 0:x.props)||void 0===o?void 0:o.className:void 0)}))]:[],!0),k.map((function(e,o){var r,l,a;return c.default.createElement(s.DropdownItem,n({key:(null===(r=e)||void 0===r?void 0:r.key)||(null===(a=null===(l=e)||void 0===l?void 0:l.props)||void 0===a?void 0:a.key)||o},(0,t.actionPropsGenerator)(e,o)))})),!0),l.length>0&&u.length>0?[c.default.createElement(s.DropdownSeparator,{key:"separator",className:"ins-c-primary-toolbar__overflow-actions-separator"})]:[],!0),u.map((function(e,o){return(0,t.overflowActionsMapper)(e,o)})),!0);return c.default.createElement(c.Fragment,null,x&&c.default.createElement(s.ToolbarItem,{className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},p(x)?c.default.createElement(s.Button,n({ouiaId:"".concat(x.label)},x.props,{onClick:x.onClick||x.props&&x.props.onClick||void 0}),x.label):x),_&&(_.extraItems||_.onSelect)&&c.default.createElement(s.ToolbarItem,{className:"pf-m-spacer-sm"},c.default.createElement(d.DownloadButton,n({},_))),(l&&(null==l?void 0:l.length)>0||u.length>0)&&c.default.createElement(s.ToolbarItem,{className:"".concat(l.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},c.default.createElement(s.Dropdown,n({},y,{isOpen:E,isPlain:!0,onSelect:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];v&&v.apply(void 0,e),S(!1)},ouiaId:"Actions",toggle:c.default.createElement(s.KebabToggle,n({},g,{onToggle:function(e){S(e)}})),dropdownItems:I}))))}},90111:function(e,t,o){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)},r=this&&this.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},l=this&&this.__spreadArray||function(e,t,o){if(o||2===arguments.length)for(var n,r=0,l=t.length;r<l;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(o(93264)),u=o(89624),c=o(2426),s=o(33516),d=a(o(67867)),f=o(92053),p=o(2238),m=o(23670),v=a(o(51256));o(62354),t.default=function(e){var t,o=e.id,a=e.className,b=e.toggleIsExpanded,y=e.bulkSelect,g=e.filterConfig,_=e.dedicatedAction,h=e.actionsConfig,E=e.sortByConfig,C=e.pagination,S=e.activeFiltersConfig,x=e.children,k=e.exportConfig,I=e.expandAll,w=e.useMobileLayout,D=r(e,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),A=l([],E?[{label:"Sort order ASC",props:{isDisabled:E.direction===s.SortByDirection.asc},onClick:function(e){return E.onSortChange&&E.onSortChange(e,s.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:E.direction===s.SortByDirection.desc},onClick:function(e){return E.onSortChange&&E.onSortChange(e,s.SortByDirection.desc)}}]:[],!0);return i.default.createElement(u.Toolbar,n({},D,{className:"".concat(a||""," ins-c-primary-toolbar"),toggleIsExpanded:b,id:o?"".concat(o):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"}),i.default.createElement(u.ToolbarContent,null,(I||y||g||_)&&i.default.createElement(u.ToolbarGroup,{className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},I&&i.default.createElement(u.ToolbarItem,null,(t=I,i.default.isValidElement(t)?I:i.default.createElement(u.Button,n({},I.buttonProps,{variant:"plain","aria-label":"".concat(I.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(e){return I.onClick(e,!I.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:I.isDisabled}),i.default.createElement(u.ToolbarExpandIconWrapper,null,I.isAllExpanded?i.default.createElement(c.AngleDownIcon,null):i.default.createElement(c.AngleRightIcon,null))))),y&&i.default.createElement(u.ToolbarItem,null,i.default.isValidElement(y)?y:i.default.createElement(f.BulkSelect,n({ouiaId:"BulkSelect"},y))),g&&i.default.createElement(u.ToolbarItem,{className:"ins-c-primary-toolbar__filter"},i.default.isValidElement(g)?g:i.default.createElement(p.ConditionalFilter,n({useMobileLayout:w},g))),_&&i.default.createElement(u.ToolbarItem,null,_)),i.default.isValidElement(h)?h:(h&&h.actions&&h.actions.length>0||E||k)&&i.default.createElement(d.default,n({},h||{},{exportConfig:k,overflowActions:A})),E&&i.default.createElement(u.ToolbarItem,{className:"ins-c-primary-toolbar__sort-by"},i.default.isValidElement(E)?E:i.default.createElement(v.default,n({},E))),x,C&&i.default.createElement(u.ToolbarItem,{className:"ins-c-primary-toolbar__pagination"},i.default.isValidElement(C)?C:i.default.createElement(u.Pagination,n({isCompact:!0,ouiaId:"CompactPagination"},C)))),S&&i.default.isValidElement(S)?i.default.createElement(u.ToolbarContent,null,i.default.createElement(u.ToolbarItem,null,S)):void 0!==(null==S?void 0:S.filters)&&(S.filters.length>0||!0===S.showDeleteButton)&&i.default.createElement(u.ToolbarContent,null,i.default.createElement(u.ToolbarItem,null,i.default.createElement(m.FilterChips,n({},S)))))}},51256:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.flipDirection=void 0;var r=n(o(93264)),l=o(33516),a=o(89624),i=o(2426);function u(e){return e===l.SortByDirection.asc?l.SortByDirection.desc:l.SortByDirection.asc}t.flipDirection=u,t.default=function(e){var t=e.direction,o=void 0===t?l.SortByDirection.asc:t,n=e.onSortChange,c=void 0===n?function(){}:n;return r.default.createElement(a.Button,{variant:"plain",onClick:function(e){return c(e,u(o))}},o===l.SortByDirection.asc?r.default.createElement(i.SortAmountUpIcon,{size:"sm"}):r.default.createElement(i.SortAmountDownIcon,{size:"sm"}))}},92053:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n.Z,BulkSelect:()=>n.Z});var n=o(48799)},2238:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n.Z,ConditionalFilter:()=>n.Z,GroupFilter:()=>r.Z,CheckboxFilter:()=>l.Z,RadioFilter:()=>a.Z,TextFilter:()=>i.Z,groupType:()=>u.Z,conditionalFilterType:()=>c.Y,typeMapper:()=>c.w});var n=o(18213),r=o(21556),l=o(40787),a=o(26154),i=o(68097),u=o(22137),c=o(87123)},25832:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n.Z,DownloadButton:()=>n.Z});var n=o(97138)},23670:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n.Z,FilterChips:()=>n.Z});var n=o(51812)},44286:e=>{e.exports=function(e){return e.split("")}},40180:(e,t,o)=>{var n=o(14259);e.exports=function(e,t,o){var r=e.length;return o=void 0===o?r:o,!t&&o>=r?e:n(e,t,o)}},98805:(e,t,o)=>{var n=o(40180),r=o(62689),l=o(83140),a=o(79833);e.exports=function(e){return function(t){t=a(t);var o=r(t)?l(t):void 0,i=o?o[0]:t.charAt(0),u=o?n(o,1).join(""):t.slice(1);return i[e]()+u}}},62689:e=>{var t=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},83140:(e,t,o)=>{var n=o(44286),r=o(62689),l=o(676);e.exports=function(e){return r(e)?l(e):n(e)}},676:e=>{var t="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",n="[^\\ud800-\\udfff]",r="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",a="(?:"+t+"|"+o+")?",i="[\\ufe0e\\ufe0f]?",u=i+a+"(?:\\u200d(?:"+[n,r,l].join("|")+")"+i+a+")*",c="(?:"+[n+t+"?",t,r,l,"[\\ud800-\\udfff]"].join("|")+")",s=RegExp(o+"(?="+o+")|"+c+u,"g");e.exports=function(e){return e.match(s)||[]}},48403:(e,t,o)=>{var n=o(79833),r=o(11700);e.exports=function(e){return r(n(e).toLowerCase())}},50361:(e,t,o)=>{var n=o(85990);e.exports=function(e){return n(e,5)}},11700:(e,t,o)=>{var n=o(98805)("toUpperCase");e.exports=n},62354:(e,t,o)=>{"use strict";o.r(t)}}]);
//# sourceMappingURL=../sourcemaps/6886.c2134936dcf11fec1578d8c152fad1f0.js.map