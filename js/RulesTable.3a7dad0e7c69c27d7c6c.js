"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[384],{68149:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var a=r(93433),n=r(4942),l=r(29439),i=r(93264),o=r.n(i),c=r(88931),u=r(86896),s=r(16530),m=r(94550),f=r(56161),p=r(18246),g=r(88292),d=r(8045),v=r(62410),y=r(78216),k=r(86350),P=r(90111),h=r(59303),b=r(86362),W=r(30893),_=r(28672),E=r(31728),Z=r(52661),C=r(51014),O=r(1990);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const x=function(){var e=(0,u.Z)(),t=(0,c.useDispatch)(),r=(0,c.useSelector)((function(e){return e.filters.recsListState})),S=(0,b.Bs)({impacting:!1}),x=S.isError,j=S.isUninitialized,T=S.isFetching,M=S.isSuccess,Q=S.data,A=(null==Q?void 0:Q.recommendations)||[],D=r.offset/r.limit+1,V=(0,i.useState)([]),L=(0,l.Z)(V,2),B=L[0],F=L[1],I=(0,i.useState)([]),N=(0,l.Z)(I,2),H=N[0],U=N[1];(0,i.useEffect)((function(){U(G(B))}),[B,r.limit,r.offset]),(0,i.useEffect)((function(){F(z(A,r))}),[Q,r]);var q,z=function(t,r){return t.filter((function(e){return function(e,t){return Object.entries(t).every((function(t){var r=(0,l.Z)(t,2),a=r[0],n=r[1];switch(a){case"text":return e.description.toLowerCase().includes(n.toLowerCase());case h.W2.total_risk.urlParam:return n.includes(String(e.total_risk));case h.W2.category.urlParam:return e.tags.find((function(e){return n.includes(String(h.kT[e]))}));case h.W2.impact.urlParam:return n.includes(String(e.impact));case h.W2.impacting.urlParam:return!(n.length>0)||n.some((function(t){return"true"===t?e.impacted_clusters_count>0:"false"===t?0===e.impacted_clusters_count:void 0}));case h.W2.likelihood.urlParam:return n.includes(String(e.likelihood));default:return!0}}))}(e,r)})).sort((function(e,t){return e.total_risk<t.total_risk?1:-1})).map((function(t,r){return[{isOpen:!1,rule:t,cells:[{title:o().createElement("span",{key:r},o().createElement(s.Link,{key:r,to:"/recommendations/".concat(t.rule_id)}," ",(null==t?void 0:t.description)||(null==t?void 0:t.rule_id)," "),o().createElement(E.Z,{rule:t}))},{title:null!=t&&t.publish_date?o().createElement(v.Z,{key:r,date:t.publish_date,variant:"relative"}):e.formatMessage(W.Z.nA)},{title:o().createElement("div",{key:r},o().createElement(d.Tooltip,{key:r,position:d.TooltipPosition.bottom,content:e.formatMessage(W.Z.rulesDetailsTotalRiskBody,{risk:h.Nq[t.total_risk]||e.formatMessage(W.Z.undefined),strong:function(e){return function(e){return o().createElement("strong",null,e)}(e)}})},null!=t&&t.total_risk?o().createElement(y.Z,{value:t.total_risk}):e.formatMessage(W.Z.nA)))},{title:o().createElement("div",{key:r},"".concat(void 0!==(null==t?void 0:t.impacted_clusters_count)?t.impacted_clusters_count.toLocaleString():e.formatMessage(W.Z.nA)))}]},{fullWidth:!0,cells:[{title:o().createElement(k.Z,{className:"pf-m-light"},o().createElement(g.Stack,{hasGutter:!0},o().createElement(O.Z,{rule:w(w({},t),{},{impact:{impact:t.impact},impacted_clusters_count:void 0})})))}]}]}))},G=function(e){return e.slice(r.limit*(D-1),r.limit*(D-1)+r.limit).flatMap((function(e,t){var r=(0,a.Z)(e);return e[1].parent=2*t,r}))},R=function(e){var a=w(w({},r),{},{offset:0});delete a[e],t((0,_.Q4)(w(w({},a),"text"===e?{text:""}:{})))},X=function(e,a){a.length>0?t((0,_.Q4)(w(w({},r),{},{offset:0},(0,n.Z)({},e,a)))):R(e)},J=[{label:e.formatMessage(W.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,a){return t((0,_.Q4)(w(w({},r),{},{text:a})))},value:r.text,placeholder:e.formatMessage(W.Z.filterBy)}},{label:h.W2.total_risk.title,type:h.W2.total_risk.type,id:h.W2.total_risk.urlParam,value:"checkbox-".concat(h.W2.total_risk.urlParam),filterValues:{key:"".concat(h.W2.total_risk.urlParam,"-filter"),onChange:function(e,t){return X(h.W2.total_risk.urlParam,t)},value:r.total_risk,items:h.W2.total_risk.values}},{label:h.W2.impact.title,type:h.W2.impact.type,id:h.W2.impact.urlParam,value:"checkbox-".concat(h.W2.impact.urlParam),filterValues:{key:"".concat(h.W2.impact.urlParam,"-filter"),onChange:function(e,t){return X(h.W2.impact.urlParam,t)},value:r.impact,items:h.W2.impact.values}},{label:h.W2.likelihood.title,type:h.W2.likelihood.type,id:h.W2.likelihood.urlParam,value:"checkbox-".concat(h.W2.likelihood.urlParam),filterValues:{key:"".concat(h.W2.likelihood.urlParam,"-filter"),onChange:function(e,t){return X(h.W2.likelihood.urlParam,t)},value:r.likelihood,items:h.W2.likelihood.values}},{label:h.W2.category.title,type:h.W2.category.type,id:h.W2.category.urlParam,value:"checkbox-".concat(h.W2.category.urlParam),filterValues:{key:"".concat(h.W2.category.urlParam,"-filter"),onChange:function(e,t){return X(h.W2.category.urlParam,t)},value:r.category,items:h.W2.category.values}},{label:h.W2.impacting.title,type:h.W2.impacting.type,id:h.W2.impacting.urlParam,value:"checkbox-".concat(h.W2.impacting.urlParam),filterValues:{key:"".concat(h.W2.impacting.urlParam,"-filter"),onChange:function(e,t){return X(h.W2.impacting.urlParam,t)},value:r.impacting,items:h.W2.impacting.values}}],K={deleteTitle:e.formatMessage(W.Z.resetFilters),filters:(q=w({},r),delete q.sortIndex,delete q.sortDirection,delete q.offset,delete q.limit,function(e,t){var r=Object.entries(e);return r.length>0?r.reduce((function(e,r){if(t[r[0]]){var n=t[r[0]],l=Array.isArray(r[1])?r[1].map((function(e){var t=n.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:n.values.find((function(e){return e.value===String(r[1])})).label,value:r[1]}];return[].concat((0,a.Z)(e),[{category:(i=n.title,i[0].toUpperCase()+i.substring(1)),chips:l,urlParam:n.urlParam}])}return"text"===r[0]?[].concat((0,a.Z)(e),(0,a.Z)(r[1].length>0?[{category:"Name",chips:[{name:r[1],value:r[1]}],urlParam:r[0]}]:[])):e;var i}),[]):[]}(q,h.W2)),onDelete:function(e,a,l){l?t((0,_.Q4)(_.CH)):a.map((function(e){var a=(0,n.Z)({},e.urlParam,Array.isArray(r[e.urlParam])?r[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");a[e.urlParam].length>0?t((0,_.Q4)(w(w({},r),a))):R(e.urlParam)}))}};return o().createElement(o().Fragment,null,o().createElement(P.Z,{pagination:{itemCount:B.length,page:r.offset/r.limit+1,perPage:Number(r.limit),onSetPage:function(e,a){t((0,_.Q4)(w(w({},r),{},{offset:r.limit*(a-1)})))},onPerPageSelect:function(e,a){t((0,_.Q4)(w(w({},r),{},{limit:a,offset:0})))},isCompact:!0},filterConfig:{items:J},activeFiltersConfig:K}),(j||T)&&o().createElement(Z.Z,null),(x||M&&0===A.length)&&o().createElement(f.Card,null,o().createElement(f.CardBody,null,o().createElement(C.Te,null))),M&&A.length>0&&o().createElement(o().Fragment,null,o().createElement(m.Table,{"aria-label":"Table of recommendations",ouiaId:"recsListTable",variant:m.TableVariant.compact,cells:h.XT,rows:H,onCollapse:function(e,t,r){var n=(0,a.Z)(H);n[t]=w(w({},n[t]),{},{isOpen:r}),U(n)}},o().createElement(m.TableHeader,null),o().createElement(m.TableBody,null)),A.length>0&&0===B.length&&o().createElement(f.Card,{ouiaId:"empty-recommendations"},o().createElement(f.CardBody,null,o().createElement(C.A0,null)))),o().createElement(p.Pagination,{ouiaId:"recs-list-pagination-bottom",itemCount:B.length,page:r.offset/r.limit+1,perPage:Number(r.limit),onSetPage:function(e,a){t((0,_.Q4)(w(w({},r),{},{offset:r.limit*(a-1)})))},onPerPageSelect:function(e,a){t((0,_.Q4)(w(w({},r),{},{limit:a,offset:0})))},widgetId:"pagination-options-menu-bottom",variant:p.PaginationVariant.bottom}))}}}]);
//# sourceMappingURL=../sourcemaps/RulesTable.13fba79b49bfca9b78e626241f71fe4b.js.map