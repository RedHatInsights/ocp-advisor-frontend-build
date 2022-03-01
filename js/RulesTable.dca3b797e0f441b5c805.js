"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[384],{49246:(e,t,r)=>{r.r(t),r.d(t,{default:()=>re});var a=r(93264),n=r.n(a),i=r(15861),l=r(93433),o=r(4942),c=r(29439),u=r(87757),s=r.n(u),m=r(88931),f=r(86896),d=r(16530),p=r(45697),g=r.n(p),v=r(50361),y=r.n(v),b=r(48403),k=r.n(b),h=r(30097),P=r(56161),E=r(18246),Z=r(88292),W=r(8045),_=r(62410),x=r(78216),C=r(90111),S=r(71355),O=r(59303),M=r(30893),D=r(28672),T=r(90670),w=r(28186),A=r(52661),j=r(51014),I=r(98042),q=r(76913),L=r(73451),R=r(71094),V=r(86362),B=r(68929),N=r.n(B),F=r(42293),G=r(26407),H=r(99332),z=r(69507),U=r(63732),K=r(97529),Q={security:n().createElement(H.ZP,null),service_availability:n().createElement(U.ZP,null),performance:n().createElement(z.ZP,null),fault_tolerance:n().createElement(K.ZP,null)},X=function(e){return e.filter((function(e){return Object.keys(O.kT).includes(e)}))},$=function(e){var t=e.tags,r=(0,f.Z)();return n().createElement(G.LabelGroup,{numLabels:1,isCompact:!0},X(t).map((function(e,t){return n().createElement(F.Label,{key:t,icon:Q[e],variant:"outline",color:"blue",isCompact:!0},r.formatMessage(M.Z[N()(e)]))})))};$.propTypes={tags:g().array.isRequired};const J=$;function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te=function(e){var t=e.query,r=(0,f.Z)(),u=(0,m.useDispatch)(),p=(0,m.useSelector)((function(e){return e.filters.recsListState})),g=t.isError,v=t.isUninitialized,b=t.isFetching,B=t.isSuccess,N=t.data,F=t.refetch,G=(null==N?void 0:N.recommendations)||[],H=p.offset/p.limit+1,z=(0,a.useState)([]),U=(0,c.Z)(z,2),K=U[0],Q=U[1],$=(0,a.useState)([]),Y=(0,c.Z)($,2),te=Y[0],re=Y[1],ae=(0,a.useState)(!1),ne=(0,c.Z)(ae,2),ie=ne[0],le=ne[1],oe=(0,a.useState)({}),ce=(0,c.Z)(oe,2),ue=ce[0],se=ce[1],me=(0,a.useState)(!1),fe=(0,c.Z)(me,2),de=fe[0],pe=fe[1],ge=function(e){return u((0,S.wN)(e))},ve=(0,d.useLocation)().search,ye=(0,a.useState)(!0),be=(0,c.Z)(ye,2),ke=be[0],he=be[1],Pe=function(e){return u((0,D.Q4)(e))},Ee=(0,a.useState)((null==p?void 0:p.text)||""),Ze=(0,c.Z)(Ee,2),We=Ze[0],_e=Ze[1],xe=(0,q.Ds)(We,O.$x);(0,a.useEffect)((function(){re(Oe(K,p.sortIndex,p.sortDirection))}),[K,p.limit,p.offset,p.sortIndex,p.sortDirection]),(0,a.useEffect)((function(){Q(Se(G,p))}),[N,p]),(0,a.useEffect)((function(){if(ve&&ke){var e=(0,q.yG)(ve);if(void 0===e.text?_e(""):_e(e.text),e.sort){var t=(0,q.Lg)(e.sort[0]);e.sortIndex=O.Ax.indexOf(t.name),e.sortDirection=t.direction}e.offset&&(e.offset=Number(e.offset[0])),e.limit&&(e.limit=Number(e.limit[0])),e.impacting&&!Array.isArray(e.impacting)&&(e.impacting=["".concat(e.impacting)]),Pe(ee(ee({},p),e))}he(!1)}),[]),(0,a.useEffect)((function(){if(!ke&&!b&&!v){var e=y()(p),t=We.length?{text:We}:{};delete e.text,Pe(ee(ee(ee({},e),t),{},{offset:0}))}}),[xe]);var Ce,Se=function(e,t){return e.filter((function(e){return(0,q._F)(e,t)})).map((function(e,t){return[{isOpen:de,rule:e,cells:[{title:n().createElement("span",{key:t},n().createElement(d.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",(null==e?void 0:e.description)||(null==e?void 0:e.rule_id)," "),n().createElement(T.Z,{rule:e}))},{title:null!=e&&e.publish_date?n().createElement(_.Z,{key:t,date:e.publish_date,variant:"relative"}):r.formatMessage(M.Z.nA)},{title:n().createElement(J,{key:t,tags:e.tags})},{title:n().createElement("div",{key:t},n().createElement(W.Tooltip,{key:t,position:W.TooltipPosition.bottom,content:r.formatMessage(M.Z.rulesDetailsTotalRiskBody,{risk:O.Nq[e.total_risk]||r.formatMessage(M.Z.undefined),strong:function(e){return(0,w.fK)(e)}})},null!=e&&e.total_risk?n().createElement(x.Z,{value:e.total_risk,rest:{isCompact:!0}}):r.formatMessage(M.Z.nA)))},{title:n().createElement("div",{key:t},"".concat(void 0!==(null==e?void 0:e.impacted_clusters_count)?e.impacted_clusters_count.toLocaleString():r.formatMessage(M.Z.nA)))}]},{fullWidth:!0,cells:[{title:n().createElement("section",{className:"pf-m-light pf-l-page__main-section pf-c-page__main-section"},n().createElement(Z.Stack,{hasGutter:!0},n().createElement(I.Z,{rule:ee(ee({},e),{},{impact:{impact:e.impact}}),isDetailsPage:!1})))}]}]}))},Oe=function(e,t,r){var a=(0,l.Z)(e).sort((function(e,r){var a=e[0].rule[O.Ax[t-1]],n=r[0].rule[O.Ax[t-1]];return 3===t?X(a)[0].localeCompare(X(n)[0]):a>n?1:n>a?-1:0}));return r===h.SortByDirection.desc&&a.reverse(),a.slice(p.limit*(H-1),p.limit*(H-1)+p.limit).flatMap((function(e,t){var r=(0,l.Z)(e);return e[1].parent=2*t,r}))},Me=function(e){var t=ee(ee({},p),{},{offset:0});delete t[e],Pe(ee(ee({},t),"text"===e?{text:""}:{}))},De=function(e,t){return t.length>0?Pe(ee(ee({},p),{},{offset:0},(0,o.Z)({},e,t))):Me(e)},Te=[{label:r.formatMessage(M.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return _e(t)},value:We,placeholder:r.formatMessage(M.Z.filterBy)}},{label:O.W2.total_risk.title,type:O.W2.total_risk.type,id:O.W2.total_risk.urlParam,value:"checkbox-".concat(O.W2.total_risk.urlParam),filterValues:{key:"".concat(O.W2.total_risk.urlParam,"-filter"),onChange:function(e,t){return De(O.W2.total_risk.urlParam,t)},value:p.total_risk,items:O.W2.total_risk.values}},{label:O.W2.impact.title,type:O.W2.impact.type,id:O.W2.impact.urlParam,value:"checkbox-".concat(O.W2.impact.urlParam),filterValues:{key:"".concat(O.W2.impact.urlParam,"-filter"),onChange:function(e,t){return De(O.W2.impact.urlParam,t)},value:p.impact,items:O.W2.impact.values}},{label:O.W2.likelihood.title,type:O.W2.likelihood.type,id:O.W2.likelihood.urlParam,value:"checkbox-".concat(O.W2.likelihood.urlParam),filterValues:{key:"".concat(O.W2.likelihood.urlParam,"-filter"),onChange:function(e,t){return De(O.W2.likelihood.urlParam,t)},value:p.likelihood,items:O.W2.likelihood.values}},{label:O.W2.category.title,type:O.W2.category.type,id:O.W2.category.urlParam,value:"checkbox-".concat(O.W2.category.urlParam),filterValues:{key:"".concat(O.W2.category.urlParam,"-filter"),onChange:function(e,t){return De(O.W2.category.urlParam,t)},value:p.category,items:O.W2.category.values}},{label:O.W2.rule_status.title,type:O.W2.rule_status.type,id:O.W2.rule_status.urlParam,value:"radio-".concat(O.W2.rule_status.urlParam),filterValues:{key:"".concat(O.W2.rule_status.urlParam,"-filter"),onChange:function(e,t){return r=t,Pe(ee(ee({},p),{},{rule_status:r,offset:0}));var r},value:"".concat(p.rule_status),items:O.W2.rule_status.values}},{label:O.W2.impacting.title,type:O.W2.impacting.type,id:O.W2.impacting.urlParam,value:"checkbox-".concat(O.W2.impacting.urlParam),filterValues:{key:"".concat(O.W2.impacting.urlParam,"-filter"),onChange:function(e,t){return De(O.W2.impacting.urlParam,t)},value:p.impacting,items:O.W2.impacting.values}}],we={deleteTitle:r.formatMessage(M.Z.resetFilters),filters:(Ce=ee({},p),delete Ce.sortIndex,delete Ce.sortDirection,delete Ce.offset,delete Ce.limit,function(e,t){var r=Object.entries(e);return r.length>0?r.reduce((function(e,r){if(t[r[0]]){var a=t[r[0]],n=Array.isArray(r[1])?r[1].map((function(e){var t=a.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:a.values.find((function(e){return e.value===String(r[1])})).label,value:r[1]}];return[].concat((0,l.Z)(e),[{category:k()(a.title),chips:n,urlParam:a.urlParam}])}return"text"===r[0]?[].concat((0,l.Z)(e),(0,l.Z)(r[1].length>0?[{category:"Name",chips:[{name:r[1],value:r[1]}],urlParam:r[0]}]:[])):e}),[]):[]}(Ce,O.W2)),onDelete:function(e,t,r){r?Pe(D.CH):t.map((function(e){var t=(0,o.Z)({},e.urlParam,Array.isArray(p[e.urlParam])?p[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?Pe(ee(ee({},p),t)):Me(e.urlParam)}))}},Ae=function(){var e=(0,i.Z)(s().mark((function e(t){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=te[t].rule,e.prev=1,a.disabled){e.next=7;break}se(a),le(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,(0,R.HG)("".concat(V._n,"/v2/ack/").concat(a.rule_id,"/"));case 10:ge({variant:"success",timeout:!0,dismissable:!0,title:r.formatMessage(M.Z.recSuccessfullyEnabled)}),F(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),ge({variant:"danger",dismissable:!0,title:r.formatMessage(M.Z.error),description:"".concat(e.t0)});case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),ge({variant:"danger",dismissable:!0,title:a.disabled?r.formatMessage(M.Z.rulesTableErrorEnabled):r.formatMessage(M.Z.rulesTableErrorDisabled),description:"".concat(e.t1)});case 22:case"end":return e.stop()}}),e,null,[[1,19],[7,14]])})));return function(t){return e.apply(this,arguments)}}();return n().createElement("div",{id:"recs-list-table"},ie&&n().createElement(L.Z,{handleModalToggle:le,isModalOpen:ie,rule:ue,afterFn:F}),n().createElement(C.Z,{expandAll:{isAllExpanded:de,onClick:function(e,t){pe(t),re(te.map((function(e){return ee(ee({},e),{},{isOpen:t})})))}},pagination:{itemCount:K.length,page:p.offset/p.limit+1,perPage:Number(p.limit),onSetPage:function(e,t){Pe(ee(ee({},p),{},{offset:p.limit*(t-1)}))},onPerPageSelect:function(e,t){Pe(ee(ee({},p),{},{limit:t,offset:0}))},isCompact:!0,ouiaId:"pager"},filterConfig:{items:Te},activeFiltersConfig:we}),(v||b)&&n().createElement(A.Z,null),(g||B&&0===G.length)&&n().createElement(P.Card,{id:"error-state-message",ouiaId:"error-state"},n().createElement(P.CardBody,null,n().createElement(j.Te,null))),!(v||b)&&B&&G.length>0&&n().createElement(n().Fragment,null,n().createElement(h.Table,{"aria-label":"Table of recommendations",ouiaId:"recommendations",variant:h.TableVariant.compact,cells:O.XT,rows:te,onCollapse:function(e,t,r){var a=(0,l.Z)(te);a[t]=ee(ee({},a[t]),{},{isOpen:r}),re(a)},sortBy:{index:p.sortIndex,direction:p.sortDirection},onSort:function(e,t,r){return Pe(ee(ee({},p),{},{sortIndex:t,sortDirection:r}))},actionResolver:function(e,t){var a=t.rowIndex,n=te[a].rule?te[a].rule:null;return a%2==0&&n?n&&!n.disabled?[{title:r.formatMessage(M.Z.disableRule),onClick:function(e,t){return Ae(t)}}]:[{title:r.formatMessage(M.Z.enableRule),onClick:function(e,t){return Ae(t)}}]:null},isStickyHeader:!0},n().createElement(h.TableHeader,null),n().createElement(h.TableBody,null)),G.length>0&&0===K.length&&n().createElement(P.Card,{ouiaId:"empty-state"},n().createElement(P.CardBody,null,n().createElement(j.A0,null)))),n().createElement(E.Pagination,{ouiaId:"pager",itemCount:K.length,page:p.offset/p.limit+1,perPage:Number(p.limit),onSetPage:function(e,t){return Pe(ee(ee({},p),{},{offset:p.limit*(t-1)}))},onPerPageSelect:function(e,t){return Pe(ee(ee({},p),{},{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:E.PaginationVariant.bottom}))};te.propTypes={query:g().shape({isError:g().bool.isRequired,isUninitialized:g().bool.isRequired,isFetching:g().bool.isRequired,isSuccess:g().bool.isRequired,data:g().array,refetch:g().func})};const re=function(){var e=(0,V.Bs)();return n().createElement(te,{query:e})}}}]);