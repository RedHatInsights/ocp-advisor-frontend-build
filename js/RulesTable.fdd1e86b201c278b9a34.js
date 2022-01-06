"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[384],{49246:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var r=a(93264),n=a.n(r),l=a(15861),i=a(93433),o=a(4942),c=a(29439),u=a(87757),s=a.n(u),m=a(88931),f=a(86896),d=a(16530),p=a(45697),g=a.n(p),v=a(30097),b=a(56161),y=a(18246),k=a(88292),h=a(8045),P=a(62410),E=a(78216),_=a(90111),W=a(71355),Z=a(59303),x=a(30893),C=a(28672),S=a(90670),O=a(28186),M=a(52661),T=a(51014),w=a(1990),D=a(76913),j=a(73451),I=a(71094),Q=a(86362),A=a(44439),q=a(42293),R=a(26407),V=a(99332),B=a(69507),F=a(63732),L=a(97529),N={security:n().createElement(V.ZP,null),service_availability:n().createElement(F.ZP,null),performance:n().createElement(B.ZP,null),fault_tolerance:n().createElement(L.ZP,null)},H=function(e){return e.filter((function(e){return Object.keys(Z.kT).includes(e)}))},G=function(e){var t=e.tags,a=(0,f.Z)();return n().createElement(R.LabelGroup,{numLabels:4},H(t).map((function(e,t){return n().createElement(q.Label,{key:t,icon:N[e],variant:"outline",color:"blue"},a.formatMessage(x.Z[(0,A.camelCase)(e)]))})))};G.propTypes={tags:g().array.isRequired};const z=G;function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=function(e){var t=e.query,a=(0,f.Z)(),u=(0,m.useDispatch)(),p=(0,m.useSelector)((function(e){return e.filters.recsListState})),g=t.isError,A=t.isUninitialized,q=t.isFetching,R=t.isSuccess,V=t.data,B=t.refetch,F=(null==V?void 0:V.recommendations)||[],L=p.offset/p.limit+1,N=(0,r.useState)([]),G=(0,c.Z)(N,2),U=G[0],X=G[1],J=(0,r.useState)([]),Y=(0,c.Z)(J,2),$=Y[0],ee=Y[1],te=(0,r.useState)(!1),ae=(0,c.Z)(te,2),re=ae[0],ne=ae[1],le=(0,r.useState)({}),ie=(0,c.Z)(le,2),oe=ie[0],ce=ie[1],ue=(0,r.useState)(!1),se=(0,c.Z)(ue,2),me=se[0],fe=se[1],de=function(e){return u((0,W.wN)(e))};(0,r.useEffect)((function(){ee(ve(U,p.sortIndex,p.sortDirection))}),[U,p.limit,p.offset,p.sortIndex,p.sortDirection]),(0,r.useEffect)((function(){X(ge(F,p))}),[V,p]);var pe,ge=function(e,t){return e.filter((function(e){return(0,D._F)(e,t)})).map((function(e,t){return[{isOpen:me,rule:e,cells:[{title:n().createElement("span",{key:t},n().createElement(d.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",(null==e?void 0:e.description)||(null==e?void 0:e.rule_id)," "),n().createElement(S.Z,{rule:e}))},{title:null!=e&&e.publish_date?n().createElement(P.Z,{key:t,date:e.publish_date,variant:"relative"}):a.formatMessage(x.Z.nA)},{title:n().createElement(z,{key:t,tags:e.tags})},{title:n().createElement("div",{key:t},n().createElement(h.Tooltip,{key:t,position:h.TooltipPosition.bottom,content:a.formatMessage(x.Z.rulesDetailsTotalRiskBody,{risk:Z.Nq[e.total_risk]||a.formatMessage(x.Z.undefined),strong:function(e){return(0,O.fK)(e)}})},null!=e&&e.total_risk?n().createElement(E.Z,{value:e.total_risk}):a.formatMessage(x.Z.nA)))},{title:n().createElement("div",{key:t},"".concat(void 0!==(null==e?void 0:e.impacted_clusters_count)?e.impacted_clusters_count.toLocaleString():a.formatMessage(x.Z.nA)))}]},{fullWidth:!0,cells:[{title:n().createElement("section",{className:"pf-m-light pf-l-page__main-section pf-c-page__main-section"},n().createElement(k.Stack,{hasGutter:!0},n().createElement(w.Z,{rule:K(K({},e),{},{impact:{impact:e.impact}}),isDetailsPage:!1})))}]}]}))},ve=function(e,t,a){var r=["description","publish_date","tags","total_risk","impacted_clusters_count"],n=(0,i.Z)(e).sort((function(e,a){var n=e[0].rule[r[t-1]],l=a[0].rule[r[t-1]];return 3===t?H(n)[0].localeCompare(H(l)[0]):n>l?1:l>n?-1:0}));return a===v.SortByDirection.desc&&n.reverse(),n.slice(p.limit*(L-1),p.limit*(L-1)+p.limit).flatMap((function(e,t){var a=(0,i.Z)(e);return e[1].parent=2*t,a}))},be=function(e){var t=K(K({},p),{},{offset:0});delete t[e],u((0,C.Q4)(K(K({},t),"text"===e?{text:""}:{})))},ye=function(e,t){t.length>0?u((0,C.Q4)(K(K({},p),{},{offset:0},(0,o.Z)({},e,t)))):be(e)},ke=[{label:a.formatMessage(x.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return u((0,C.Q4)(K(K({},p),{},{text:t})))},value:p.text,placeholder:a.formatMessage(x.Z.filterBy)}},{label:Z.W2.total_risk.title,type:Z.W2.total_risk.type,id:Z.W2.total_risk.urlParam,value:"checkbox-".concat(Z.W2.total_risk.urlParam),filterValues:{key:"".concat(Z.W2.total_risk.urlParam,"-filter"),onChange:function(e,t){return ye(Z.W2.total_risk.urlParam,t)},value:p.total_risk,items:Z.W2.total_risk.values}},{label:Z.W2.impact.title,type:Z.W2.impact.type,id:Z.W2.impact.urlParam,value:"checkbox-".concat(Z.W2.impact.urlParam),filterValues:{key:"".concat(Z.W2.impact.urlParam,"-filter"),onChange:function(e,t){return ye(Z.W2.impact.urlParam,t)},value:p.impact,items:Z.W2.impact.values}},{label:Z.W2.likelihood.title,type:Z.W2.likelihood.type,id:Z.W2.likelihood.urlParam,value:"checkbox-".concat(Z.W2.likelihood.urlParam),filterValues:{key:"".concat(Z.W2.likelihood.urlParam,"-filter"),onChange:function(e,t){return ye(Z.W2.likelihood.urlParam,t)},value:p.likelihood,items:Z.W2.likelihood.values}},{label:Z.W2.category.title,type:Z.W2.category.type,id:Z.W2.category.urlParam,value:"checkbox-".concat(Z.W2.category.urlParam),filterValues:{key:"".concat(Z.W2.category.urlParam,"-filter"),onChange:function(e,t){return ye(Z.W2.category.urlParam,t)},value:p.category,items:Z.W2.category.values}},{label:Z.W2.rule_status.title,type:Z.W2.rule_status.type,id:Z.W2.rule_status.urlParam,value:"radio-".concat(Z.W2.rule_status.urlParam),filterValues:{key:"".concat(Z.W2.rule_status.urlParam,"-filter"),onChange:function(e,t){return a=t,void u((0,C.Q4)(K(K({},p),{},{rule_status:a,offset:0},"enabled"!==a&&{impacting:["false"]})));var a},value:"".concat(p.rule_status),items:Z.W2.rule_status.values}},{label:Z.W2.impacting.title,type:Z.W2.impacting.type,id:Z.W2.impacting.urlParam,value:"checkbox-".concat(Z.W2.impacting.urlParam),filterValues:{key:"".concat(Z.W2.impacting.urlParam,"-filter"),onChange:function(e,t){return ye(Z.W2.impacting.urlParam,t)},value:p.impacting,items:Z.W2.impacting.values}}],he={deleteTitle:a.formatMessage(x.Z.resetFilters),filters:(pe=K({},p),delete pe.sortIndex,delete pe.sortDirection,delete pe.offset,delete pe.limit,function(e,t){var a=Object.entries(e);return a.length>0?a.reduce((function(e,a){if(t[a[0]]){var r=t[a[0]],n=Array.isArray(a[1])?a[1].map((function(e){var t=r.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:r.values.find((function(e){return e.value===String(a[1])})).label,value:a[1]}];return[].concat((0,i.Z)(e),[{category:(0,D.kC)(r.title),chips:n,urlParam:r.urlParam}])}return"text"===a[0]?[].concat((0,i.Z)(e),(0,i.Z)(a[1].length>0?[{category:"Name",chips:[{name:a[1],value:a[1]}],urlParam:a[0]}]:[])):e}),[]):[]}(pe,Z.W2)),onDelete:function(e,t,a){a?u((0,C.Q4)(C.CH)):t.map((function(e){var t=(0,o.Z)({},e.urlParam,Array.isArray(p[e.urlParam])?p[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?u((0,C.Q4)(K(K({},p),t))):be(e.urlParam)}))}},Pe=function(){var e=(0,l.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=$[t].rule,e.prev=1,r.disabled){e.next=7;break}ce(r),ne(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,(0,I.HG)("".concat(Q._n,"/v2/ack/").concat(r.rule_id,"/"));case 10:de({variant:"success",timeout:!0,dismissable:!0,title:a.formatMessage(x.Z.recSuccessfullyEnabled)}),B(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),de({variant:"danger",dismissable:!0,title:a.formatMessage(x.Z.error),description:"".concat(e.t0)});case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),de({variant:"danger",dismissable:!0,title:r.disabled?a.formatMessage(x.Z.rulesTableErrorEnabled):a.formatMessage(x.Z.rulesTableErrorDisabled),description:"".concat(e.t1)});case 22:case"end":return e.stop()}}),e,null,[[1,19],[7,14]])})));return function(t){return e.apply(this,arguments)}}();return n().createElement("div",{id:"recs-list-table"},re&&n().createElement(j.Z,{handleModalToggle:ne,isModalOpen:re,rule:oe,afterFn:B}),n().createElement(_.Z,{expandAll:{isAllExpanded:me,onClick:function(e,t){fe(t),ee($.map((function(e){return K(K({},e),{},{isOpen:t})})))}},pagination:{itemCount:U.length,page:p.offset/p.limit+1,perPage:Number(p.limit),onSetPage:function(e,t){u((0,C.Q4)(K(K({},p),{},{offset:p.limit*(t-1)})))},onPerPageSelect:function(e,t){u((0,C.Q4)(K(K({},p),{},{limit:t,offset:0})))},isCompact:!0,ouiaId:"pager"},filterConfig:{items:ke},activeFiltersConfig:he}),(A||q)&&n().createElement(M.Z,null),(g||R&&0===F.length)&&n().createElement(b.Card,{id:"error-state-message",ouiaId:"error-state"},n().createElement(b.CardBody,null,n().createElement(T.Te,null))),!(A||q)&&R&&F.length>0&&n().createElement(n().Fragment,null,n().createElement(v.Table,{"aria-label":"Table of recommendations",ouiaId:"recommendations",variant:v.TableVariant.compact,cells:Z.XT,rows:$,onCollapse:function(e,t,a){var r=(0,i.Z)($);r[t]=K(K({},r[t]),{},{isOpen:a}),ee(r)},sortBy:{index:p.sortIndex,direction:p.sortDirection},onSort:function(e,t,a){u((0,C.Q4)(K(K({},p),{},{sortIndex:t,sortDirection:a})))},actionResolver:function(e,t){var r=t.rowIndex,n=$[r].rule?$[r].rule:null;return r%2==0&&n?n&&!n.disabled?[{title:a.formatMessage(x.Z.disableRule),onClick:function(e,t){return Pe(t)}}]:[{title:a.formatMessage(x.Z.enableRule),onClick:function(e,t){return Pe(t)}}]:null},isStickyHeader:!0},n().createElement(v.TableHeader,null),n().createElement(v.TableBody,null)),F.length>0&&0===U.length&&n().createElement(b.Card,{ouiaId:"empty-state"},n().createElement(b.CardBody,null,n().createElement(T.A0,null)))),n().createElement(y.Pagination,{ouiaId:"pager",itemCount:U.length,page:p.offset/p.limit+1,perPage:Number(p.limit),onSetPage:function(e,t){u((0,C.Q4)(K(K({},p),{},{offset:p.limit*(t-1)})))},onPerPageSelect:function(e,t){u((0,C.Q4)(K(K({},p),{},{limit:t,offset:0})))},widgetId:"pagination-options-menu-bottom",variant:y.PaginationVariant.bottom}))};X.propTypes={query:g().shape({isError:g().bool.isRequired,isUninitialized:g().bool.isRequired,isFetching:g().bool.isRequired,isSuccess:g().bool.isRequired,data:g().array,refetch:g().func})};const J=function(){var e=(0,Q.Bs)();return n().createElement(X,{query:e})}}}]);
//# sourceMappingURL=../sourcemaps/RulesTable.409031e6b43fa6f93bbf0ce4123c4491.js.map