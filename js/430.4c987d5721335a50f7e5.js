"use strict";(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[430],{85991:(e,t,o)=>{t.a=void 0;const r=o(70655),a=r.__importStar(o(92950)),n=r.__importDefault(o(44303)),l=o(38296),i=o(23053);t.a=e=>{var{children:o=null,className:s="","aria-label":c="Breadcrumb",ouiaId:d,ouiaSafe:p=!0}=e,u=r.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const m=(0,i.useOUIAProps)(t.a.displayName,d,p);return a.createElement("nav",Object.assign({},u,{"aria-label":c,className:(0,l.css)(n.default.breadcrumb,s)},m),a.createElement("ol",{className:n.default.breadcrumbList},a.Children.map(o,((e,t)=>{const o=t>0;return a.isValidElement(e)?a.cloneElement(e,{showDivider:o}):e}))))},t.a.displayName="Breadcrumb"},49489:(e,t,o)=>{t.g=void 0;const r=o(70655),a=r.__importStar(o(92950)),n=r.__importDefault(o(95511)),l=r.__importDefault(o(44303)),i=o(38296);t.g=e=>{var{children:t=null,className:o="",to:s,isActive:c=!1,isDropdown:d=!1,showDivider:p,target:u,component:m="a",render:f}=e,b=r.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const g=m,v=c?"page":void 0,y=(0,i.css)(l.default.breadcrumbLink,c&&l.default.modifiers.current);return a.createElement("li",Object.assign({},b,{className:(0,i.css)(l.default.breadcrumbItem,o)}),p&&a.createElement("span",{className:l.default.breadcrumbItemDivider},a.createElement(n.default,null)),"button"===m&&a.createElement("button",{className:y,"aria-current":v,type:"button"},t),d&&a.createElement("span",{className:(0,i.css)(l.default.breadcrumbDropdown)},t),f&&f({className:y,ariaCurrent:v}),s&&!f&&a.createElement(g,{href:s,target:u,className:y,"aria-current":v},t),!s&&"button"!==m&&!d&&t)},t.g.displayName="BreadcrumbItem"},36001:(e,t,o)=>{t.k=void 0;const r=o(70655),a=r.__importStar(o(92950)),n=o(38296),l=r.__importDefault(o(61370)),i=r.__importStar(o(51969)),s=o(42319);t.k=e=>{var{children:t=null,className:o="",component:c="div",spacer:d,spaceItems:p,grow:u,shrink:m,flex:f,direction:b,alignItems:g,alignContent:v,alignSelf:y,align:h,justifyContent:x,display:_,fullWidth:j,flexWrap:k,order:C,style:B}=e,S=r.__rest(e,["children","className","component","spacer","spaceItems","grow","shrink","flex","direction","alignItems","alignContent","alignSelf","align","justifyContent","display","fullWidth","flexWrap","order","style"]);const I=c;return a.createElement(I,Object.assign({className:(0,n.css)(l.default.flex,(0,s.formatBreakpointMods)(d,l.default),(0,s.formatBreakpointMods)(p,l.default),(0,s.formatBreakpointMods)(u,l.default),(0,s.formatBreakpointMods)(m,l.default),(0,s.formatBreakpointMods)(f,l.default),(0,s.formatBreakpointMods)(b,l.default),(0,s.formatBreakpointMods)(g,l.default),(0,s.formatBreakpointMods)(v,l.default),(0,s.formatBreakpointMods)(y,l.default),(0,s.formatBreakpointMods)(h,l.default),(0,s.formatBreakpointMods)(x,l.default),(0,s.formatBreakpointMods)(_,l.default),(0,s.formatBreakpointMods)(j,l.default),(0,s.formatBreakpointMods)(k,l.default),o),style:B||C?Object.assign(Object.assign({},B),(0,s.setBreakpointCssVars)(C,i.l_flex_item_Order.name)):void 0},S),t)},t.k.displayName="Flex"},42057:(e,t,o)=>{t.B=void 0;const r=o(70655),a=r.__importStar(o(92950)),n=o(38296),l=r.__importDefault(o(61370)),i=r.__importStar(o(51969)),s=o(42319);t.B=e=>{var{children:t=null,className:o="",component:c="div",spacer:d,grow:p,shrink:u,flex:m,alignSelf:f,align:b,fullWidth:g,order:v,style:y}=e,h=r.__rest(e,["children","className","component","spacer","grow","shrink","flex","alignSelf","align","fullWidth","order","style"]);const x=c;return a.createElement(x,Object.assign({},h,{className:(0,n.css)((0,s.formatBreakpointMods)(d,l.default),(0,s.formatBreakpointMods)(p,l.default),(0,s.formatBreakpointMods)(u,l.default),(0,s.formatBreakpointMods)(m,l.default),(0,s.formatBreakpointMods)(f,l.default),(0,s.formatBreakpointMods)(b,l.default),(0,s.formatBreakpointMods)(g,l.default),o),style:y||v?Object.assign(Object.assign({},y),(0,s.setBreakpointCssVars)(v,i.l_flex_item_Order.name)):void 0}),t)},t.B.displayName="FlexItem"},51969:(e,t)=>{t.__esModule=!0,t.l_flex_item_Order={name:"--pf-l-flex--item--Order",value:"0",var:"var(--pf-l-flex--item--Order)"},t.default=t.l_flex_item_Order},56021:(e,t,o)=>{o.d(t,{Z:()=>S});var r=o(85893),a=o(92950),n=o.n(a),l=o(6848),i=o(9003),s=o(93174),c=o(44518),d=o(97138),p=o(94184),u=o.n(p),m=function(){return m=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)},f=function(e,t,o){if(o||2===arguments.length)for(var r,a=0,n=t.length;a<n;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};function b(e){return void 0!==e.label}var g=function(e,t){var o,r="object"==typeof e&&null!==typeof e&&"function"==typeof(null==e?void 0:e.onClick)?function(o){return null==e?void 0:e.onClick(o,e,t)}:void 0;return m(m({},null==e?void 0:e.props),{onClick:r,component:(null===(o=null==e?void 0:e.props)||void 0===o?void 0:o.component)||(n().isValidElement(e.label||e)?"div":"button"),children:"object"==typeof e&&null!==typeof e?null==e?void 0:e.label:e})};const v=function(e){var t,o=e.actions,i=void 0===o?[]:o,s=e.overflowActions,c=void 0===s?[]:s,p=e.onSelect,v=void 0===p?function(){}:p,y=e.dropdownProps,h=void 0===y?{}:y,x=e.kebabToggleProps,_=e.exportConfig,j=(0,a.useState)(!1),k=j[0],C=j[1],B=function(e){return C(e)},S=i[0],I=i.slice(1),N=f(f(f(f([],S?[(0,r.jsx)(l.DropdownItem,m({},g(S,"first-action"),{className:u()("ins-c-primary-toolbar__first-action",b(S)?null===(t=null==S?void 0:S.props)||void 0===t?void 0:t.className:void 0)}),"first-action")]:[],!0),I.map((function(e,t){var o;return(0,r.jsx)(l.DropdownItem,m({},g(e,t)),(null==e?void 0:e.key)||(null===(o=null==e?void 0:e.props)||void 0===o?void 0:o.key)||t)})),!0),i.length>0&&c.length>0?[(0,r.jsx)(l.DropdownSeparator,{className:"ins-c-primary-toolbar__overflow-actions-separator"},"separator")]:[],!0),c.map((function(e,t){return function(e,t){var o=e;return(0,a.createElement)(l.DropdownItem,m({},o.props,{className:"ins-c-primary-toolbar__overflow-actions",key:o.value||o.key||"".concat(t,"-overflow"),component:o.props&&o.props.component||n().isValidElement(o.label||e)?"div":"button",onClick:function(e){return o.onClick&&o.onClick(e,o,t)}}),o.label||e)}(e,t)})),!0);return(0,r.jsxs)(a.Fragment,{children:[S&&(0,r.jsx)(l.ToolbarItem,m({className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},{children:b(S)?(0,r.jsx)(l.Button,m({ouiaId:"".concat(S.label)},S.props,{onClick:S.onClick||S.props&&S.props.onClick||void 0},{children:S.label})):S})),_&&(_.extraItems||_.onSelect)&&(0,r.jsx)(l.ToolbarItem,m({className:"pf-m-spacer-sm"},{children:(0,r.jsx)(d.Z,m({},_))})),(i&&(null==i?void 0:i.length)>0||c.length>0)&&(0,r.jsx)(l.ToolbarItem,m({className:"".concat(i.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},{children:(0,r.jsx)(l.Dropdown,m({},h,{isOpen:k,isPlain:!0,onSelect:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];v&&v.apply(void 0,e),B(!1)},ouiaId:"Actions",toggle:(0,r.jsx)(l.KebabToggle,m({},x,{onToggle:function(e){B(e)}})),dropdownItems:N}))}))]})};var y=o(48799),h=o(18213),x=o(51812),_=o(44610),j=o(60532),k=function(){return k=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},k.apply(this,arguments)};const C=function(e){var t=e.direction,o=void 0===t?c.SortByDirection.asc:t,a=e.onSortChange,n=void 0===a?function(){}:a;return(0,r.jsx)(l.Button,k({variant:"plain",onClick:function(e){return n(e,function(e){return e===c.SortByDirection.asc?c.SortByDirection.desc:c.SortByDirection.asc}(o))}},{children:o===c.SortByDirection.asc?(0,r.jsx)(_.um,{size:"sm"}):(0,r.jsx)(j.WJ,{size:"sm"})}))};var B=function(){return B=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},B.apply(this,arguments)};const S=function(e){var t,o=e.id,a=e.className,d=e.toggleIsExpanded,p=void 0===d?function(){}:d,u=e.bulkSelect,m=e.filterConfig,f=e.dedicatedAction,b=e.actionsConfig,g=e.sortByConfig,_=e.pagination,j=e.activeFiltersConfig,k=e.children,S=e.exportConfig,I=e.expandAll,N=e.useMobileLayout,O=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o}(e,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),E=function(e,t,o){if(o||2===arguments.length)for(var r,a=0,n=t.length;a<n;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}([],g?[{label:"Sort order ASC",props:{isDisabled:g.direction===c.SortByDirection.asc},onClick:function(e){return g.onSortChange&&g.onSortChange(e,c.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:g.direction===c.SortByDirection.desc},onClick:function(e){return g.onSortChange&&g.onSortChange(e,c.SortByDirection.desc)}}]:[],!0);return(0,r.jsxs)(l.Toolbar,B({},O,{className:"".concat(a||""," ins-c-primary-toolbar"),toggleIsExpanded:p,id:o?"".concat(o):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"},{children:[(0,r.jsxs)(l.ToolbarContent,{children:[(I||u||m||f)&&(0,r.jsxs)(l.ToolbarGroup,B({className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},{children:[I&&(0,r.jsx)(l.ToolbarItem,{children:(t=I,n().isValidElement(t)?I:(0,r.jsx)(l.Button,B({},I.buttonProps,{variant:"plain","aria-label":"".concat(I.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(e){return I.onClick(e,!I.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:I.isDisabled},{children:(0,r.jsx)(l.ToolbarExpandIconWrapper,{children:I.isAllExpanded?(0,r.jsx)(i.LC,{}):(0,r.jsx)(s.oR,{})})})))}),u&&(0,r.jsx)(l.ToolbarItem,{children:n().isValidElement(u)?u:(0,r.jsx)(y.Z,B({ouiaId:"BulkSelect"},u))}),m&&(0,r.jsx)(l.ToolbarItem,B({className:"ins-c-primary-toolbar__filter"},{children:n().isValidElement(m)?m:(0,r.jsx)(h.Z,B({useMobileLayout:N},m))})),f&&(0,r.jsx)(l.ToolbarItem,{children:f})]})),n().isValidElement(b)?b:(b&&b.actions&&b.actions.length>0||g||S)&&(0,r.jsx)(v,B({},b||{},{exportConfig:S,overflowActions:E})),g&&(0,r.jsx)(l.ToolbarItem,B({className:"ins-c-primary-toolbar__sort-by"},{children:n().isValidElement(g)?g:(0,r.jsx)(C,B({},g))})),k,_&&(0,r.jsx)(l.ToolbarItem,B({className:"ins-c-primary-toolbar__pagination"},{children:n().isValidElement(_)?_:(0,r.jsx)(l.Pagination,B({isCompact:!0,ouiaId:"CompactPagination"},_))}))]}),j&&n().isValidElement(j)?(0,r.jsx)(l.ToolbarContent,{children:(0,r.jsx)(l.ToolbarItem,{children:j})}):void 0!==(null==j?void 0:j.filters)&&(j.filters.length>0||!0===j.showDeleteButton)&&(0,r.jsx)(l.ToolbarContent,{children:(0,r.jsx)(l.ToolbarItem,{children:(0,r.jsx)(x.Z,B({},j))})})]}))}}}]);