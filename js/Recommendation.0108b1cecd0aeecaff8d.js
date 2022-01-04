"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[987],{26553:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(93264),l=n.n(a),r=n(16530),i=n(86896),s=n(15861),c=n(29439),o=n(87757),u=n.n(o),d=n(88931),m=n(45697),f=n.n(m),g=n(56161),p=n(48716),b=n(39173),v=n(86350),h=n(62410),E=n(23218),Z=n(34348),y=n(71369),k=n(84785),M=n(96466),C=n(71355),I=n(6202),w=n(22910),D=n(96823),F=n(80765),S=n(36001),_=n(42057),O=n(43846),P=n(56276),x=n(90670),T=n(59303),j=n(30893),R=n(1990),N=n(52661),B=n(48622),q=n(51957),L=n(4942),z=n(77572),A=n(48114),H=n(92223),W=n(32875),V=n(7026),U=n(97530),G=n(17335),J=n(12321),Y=n(76),K=n(13877),Q=n(94550),X=n(51014),$=n(28672),ee=n(73451);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,L.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e){var t=e.query,n=e.rule,s=e.afterDisableFn,o=(0,i.Z)(),u=(0,d.useDispatch)(),m=(0,a.useState)([]),f=(0,c.Z)(m,2),p=f[0],b=f[1],v=(0,a.useState)([]),h=(0,c.Z)(v,2),E=h[0],Z=h[1],y=(0,a.useState)(!1),k=(0,c.Z)(y,2),M=k[0],C=k[1],I=(0,a.useState)([]),w=(0,c.Z)(I,2),D=w[0],F=w[1],S=(0,a.useState)([]),_=(0,c.Z)(S,2),O=_[0],P=_[1],x=(0,a.useState)(void 0),T=(0,c.Z)(x,2),R=T[0],B=T[1],q=t.isError,L=t.isUninitialized,te=t.isFetching,ae=t.isSuccess,le=t.data,re=(void 0===le?{disabled:[],enabled:[]}:le).enabled,ie=(0,d.useSelector)((function(e){return e.filters.affectedClustersState})),se=ie.limit,ce=ie.offset/ie.limit+1,oe=O.length===p.length,ue=function(e){return u((0,$.BC)(e))},de={items:[{label:"Name",placeholder:"Filter by name",type:z.Yu.text,filterValues:{id:"name-filter",key:"name-filter",onChange:function(e,t){return function(e){var t=ne(ne({},ie),{},{text:e,offset:0});ue(t)}(t)},value:ie.text}}],isDisabled:q||re&&0===re.length},me=function(e,t){var n=t*ie.limit-ie.limit;ue(ne(ne({},ie),{},{offset:n}))},fe=function(e,t){ue(ne(ne({},ie),{},{limit:t}))},ge=function(e){return e.slice(se*(ce-1),se*(ce-1)+se).map((function(e){return ne(ne({},e),{},{cells:[l().createElement("span",{key:e.id},l().createElement(r.Link,{to:"/clusters/".concat(e.id)},e.cells[0]))]})}))},pe=function(e,t,n){var a;a=-1===n?p.map((function(e){return ne(ne({},e),{},{selected:t})})):p.map((function(e,a){return ne(ne({},e),{},{selected:a===n?t:e.selected})})),P(a.filter((function(e){return e.selected}))),b(a),Z(ge(a))};(0,a.useEffect)((function(){var e=function(e,t){return e.map((function(e){return{id:e.cluster,cells:[(null==e?void 0:e.cluster_name)||e.cluster]}})).filter((function(e){return null==e?void 0:e.cells[0].includes(t.text)})).sort((function(e,n){return"asc"===t.sortDirection?null==e?void 0:e.cells[0].localeCompare(null==n?void 0:n.cells[0]):null==n?void 0:n.cells[0].localeCompare(null==e?void 0:e.cells[0])}))}(re,ie),t=ge(e),n=function(e,t){var n=e,a=n.findIndex((function(e){return"Name"===e.category}));return""===t?n.splice(a):-1===a?n.push({category:"Name",chips:[{name:t}]}):n[a]={category:"Name",chips:[{name:t}]},n}(D,ie.text);b(e),Z(t),F(n)}),[t,ie]);var be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;C(e),B(t)};return l().createElement("div",{id:"affected-list-table"},M&&l().createElement(ee.Z,{handleModalToggle:be,isModalOpen:M,rule:n,afterFn:s,hosts:O,host:R}),l().createElement(A.Z,{filterConfig:de,pagination:{itemCount:p.length,page:ce,perPage:se,onSetPage:me,onPerPageSelect:fe},activeFiltersConfig:q||re&&0===re.length?void 0:{filters:D,onDelete:function(){var e=ne(ne({},ie),{},{text:""});ue(e)}},bulkSelect:{count:O.length,items:[{title:o.formatMessage(j.Z.selectNone),onClick:function(e){return pe(0,!1,-1)}},{title:o.formatMessage(j.Z.selectAll,{items:(null==p?void 0:p.length)||0}),onClick:function(e){return pe(0,!0,-1)}}],checked:oe,onSelect:function(e){return pe(0,!oe,-1)}},actionsConfig:{actions:["",{label:o.formatMessage(j.Z.disableRuleForClusters),props:{isDisabled:0===O.length},onClick:function(){return be(!0)}}]}}),l().createElement(U.i,{"aria-label":"Table of affected clusters",ouiaId:"affectedClustersTable",variant:"compact",cells:[{title:o.formatMessage(j.Z.name),transforms:[V.sortable,(0,Q.cellWidth)(100)]}],rows:E,sortBy:{index:ie.sortIndex,direction:ie.sortDirection},onSort:function(e,t,n){ue(ne(ne({},ie),{},{sortIndex:t,sortDirection:n}))},canSelectAll:!1,onSelect:(null==E?void 0:E.length)>0?pe:void 0,actions:[{title:"Disable recommendation for cluster",onClick:function(e,t){return console.log(p[t]),be(!0,p[t].id)}}]},l().createElement(J.x,null),(L||te)&&l().createElement(N.Z,null),q&&l().createElement(g.Card,{id:"error-state-message"},l().createElement(g.CardBody,null,l().createElement(X.Te,null))),ae&&0===re.length&&l().createElement(g.Card,{id:"empty-state-message"},l().createElement(g.CardBody,null,l().createElement(X.mi,null))),ae&&re.length>0&&(p.length>0?l().createElement(G.R,null):l().createElement(H.Z,null,l().createElement(Y.Bullseye,null,l().createElement(X.VA,null))))),l().createElement(W.Z,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},l().createElement(K.Pagination,{variant:K.PaginationVariant.bottom,itemCount:p.length,page:ce,perPage:se,onSetPage:me,onPerPageSelect:fe,onPageInput:me})))};ae.propTypes={query:f().shape({isError:f().bool.isRequired,isUninitialized:f().bool.isRequired,isFetching:f().bool.isRequired,isSuccess:f().bool.isRequired,data:f().array}),rule:f().object,afterDisableFn:f().func};var le=n(71094),re=n(86362),ie=n(24561),se=n(78826),ce=n(6234),oe=n(77647),ue=function(e){var t=e.handleModalToggle,n=e.isModalOpen,r=e.clusters,o=e.recId,m=e.afterFn,f=(0,i.Z)(),g=(0,d.useDispatch)(),p=function(e){return g((0,C.wN)(e))},b=r.data,v=r.isFetching,E=r.isLoading,Z=r.refetch,y=(null==b?void 0:b.disabled)||[],k=(0,a.useState)([]),M=(0,c.Z)(k,2),w=M[0],D=M[1],F=(0,a.useState)(!1),S=(0,c.Z)(F,2),_=S[0],O=S[1],P=[{title:f.formatMessage(j.Z.clusterName),transforms:[(0,Q.cellWidth)(50)]},{title:f.formatMessage(j.Z.justificationNote),transforms:[(0,Q.cellWidth)(25)]},{title:f.formatMessage(j.Z.dateDisabled),transforms:[(0,Q.cellWidth)(15)]},""],x=function(){var e=(0,s.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,oe.o1)({uuid:n.cluster_id,recId:o});case 3:Z(),O(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t(!1),p({variant:"danger",dismissable:!0,title:f.formatMessage(j.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){var e=null==y?void 0:y.map((function(e){return{cells:[e.display_name||e.cluster_id,e.justification||f.formatMessage(j.Z.none),{title:l().createElement(h.Z,{date:new Date(e.disabled_at),type:"onlyDate"})},{title:l().createElement(I.Button,{key:e.cluster_id,isInline:!0,variant:"link",onClick:function(){return x(e)}},l().createElement(ce.ZP,{size:"sm"})," ".concat(f.formatMessage(j.Z.enable)))}]}}));E||0!==y.length||(m(),t(!1)),D(e)}),[y]),l().createElement(se.u_,{width:"75%",title:f.formatMessage(j.Z.hostAckModalTitle),isOpen:n,onClose:function(){_&&m(),t(!1)}},v?l().createElement(Q.Table,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:l().createElement(ie.aV,null)}]}],cells:P},l().createElement(Q.TableHeader,null),l().createElement(Q.TableBody,null)):l().createElement(Q.Table,{"aria-label":"host-ack-table",rows:w,cells:P},l().createElement(Q.TableHeader,null),l().createElement(Q.TableBody,null)))};ue.propTypes={isModalOpen:f().bool,handleModalToggle:f().func,clusters:f().object,recId:f().string,afterFn:f().func},ue.defaultProps={isModalOpen:!1,handleModalToggle:function(){},clusters:{},recId:"",afterFn:function(){}};const de=ue;var me=n(73845),fe=function(e){var t=e.rule,n=e.ack,r=e.clusters,o=e.match,m=(0,i.Z)(),f=(0,d.useDispatch)(),L=function(e){return f((0,C.wN)(e))},z=o.params.recommendationId,A=(0,a.useState)(!1),H=(0,c.Z)(A,2),W=H[0],V=H[1],U=(0,a.useState)(!1),G=(0,c.Z)(U,2),J=G[0],Y=G[1],K=(0,a.useState)(!1),Q=(0,c.Z)(K,2),X=Q[0],$=Q[1],te=t.isError,ne=t.isUninitialized,ie=t.isLoading,se=t.isFetching,ce=t.isSuccess,ue=t.data,fe=t.refetch,ge=n.data,pe=n.isFetching,be=n.refetch,ve=r.data,he=r.isFetching,Ee=r.refetch,Ze=ce&&ue?(0,B.hw)(ue.content,z):void 0,ye=!he&&ve?ve.disabled:void 0,ke=function(){var e=(0,s.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fe(),be(),Ee();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Me=function(e){V(e)},Ce=function(){var e=(0,s.Z)(u().mark((function e(t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.uuids,e.prev=1,a=n.map((function(e){return(0,oe.o1)({uuid:e,recId:z})})),e.next=5,Promise.all(a);case 5:fe(),be(),Ee(),L({variant:"success",timeout:!0,dismissable:!0,title:m.formatMessage(j.Z.recSuccessfullyEnabledForCluster)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),L({variant:"danger",dismissable:!0,title:m.formatMessage(j.Z.error),description:"".concat(e.t0)});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=(0,s.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,le.HG)("".concat(re._n,"/ack/").concat(t.rule_id,"/"));case 3:L({variant:"success",timeout:!0,dismissable:!0,title:m.formatMessage(j.Z.recSuccessfullyEnabled)}),fe(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),Me(!1),L({variant:"danger",dismissable:!0,title:m.formatMessage(j.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return l().createElement(l().Fragment,null,X&&l().createElement(de,{handleModalToggle:function(e){return $(e)},isModalOpen:X,clusters:r,afterFn:function(){return Ee()},recId:z}),W&&l().createElement(ee.Z,{handleModalToggle:Me,isModalOpen:W,rule:Ze,afterFn:ke}),l().createElement(p.Z,{className:"pageHeaderOverride"},l().createElement(P.Z,{current:(null==Ze?void 0:Ze.description)||z})),(ne||ie||se)&&l().createElement(v.Z,null,l().createElement(N.Z,null)),te&&l().createElement(v.Z,null,l().createElement(O.Z,null)),!(ne||ie||se)&&ce&&l().createElement(l().Fragment,null,l().createElement(v.Z,{className:"pf-m-light pf-u-pt-sm"},l().createElement(R.Z,{isOpenShift:!0,isDetailsPage:!0,rule:Ze,header:l().createElement(l().Fragment,null,l().createElement(b.Z,{title:l().createElement(l().Fragment,null,Ze.description," ",l().createElement(x.Z,{rule:Ze}))}),l().createElement("p",null,m.formatMessage(j.Z.rulesDetailsPubishdate,{date:l().createElement(h.Z,{date:new Date(Ze.publish_date),type:"onlyDate"})}),Ze.tags&&(Array.isArray(Ze.tags)?l().createElement(y.LabelGroup,{className:"categoryLabels",numLabels:1},Ze.tags.reduce((function(e,t){return T.kT[t]&&e.push(l().createElement(E.Label,{key:"label-".concat(t),color:"blue"},T.W2.category.values[T.kT[t]-1].label)),e}),[])):l().createElement(E.Label,null,Ze.tags)))),onFeedbackChanged:function(){var e=(0,s.Z)(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,le.SO)("".concat(re._n,"/v2/rating"),{},{rule:t,rating:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},l().createElement(S.k,null,l().createElement(_.B,{align:{default:"alignRight"}},l().createElement(w.Dropdown,{className:"ins-c-rec-details__actions_dropdown",onSelect:function(){return Y(!J)},position:"right",ouiaId:"actions",toggle:l().createElement(F.DropdownToggle,{onToggle:function(e){return Y(e)},toggleIndicator:M.default},m.formatMessage(j.Z.actions)),isOpen:J,dropdownItems:null!=Ze&&Ze.disabled?[l().createElement(D.DropdownItem,{key:"link",ouiaId:"enable",onClick:function(){Ie(t)}},m.formatMessage(j.Z.enableRule))]:[l().createElement(D.DropdownItem,{key:"link",ouiaId:"disable",onClick:function(){Me(!0)}},m.formatMessage(j.Z.disableRule))]}))))),l().createElement(v.Z,null,l().createElement(l().Fragment,null,((null==Ze?void 0:Ze.hosts_acked_count)||(null==ye?void 0:ye.length)>0||(null==Ze?void 0:Ze.disabled))&&l().createElement(g.Card,{className:"cardOverride"},l().createElement(g.CardHeader,null,l().createElement(Z.Title,{headingLevel:"h4",size:"xl"},l().createElement(k.ZP,{size:"sm"})," ",m.formatMessage(!(null!=Ze&&Ze.hosts_acked_count||(null==ye?void 0:ye.length)>0)||null!=Ze&&Ze.disabled?j.Z.ruleIsDisabled:j.Z.ruleIsDisabledForClusters))),l().createElement(g.CardBody,null,!(null!=Ze&&Ze.hosts_acked_count||(null==ye?void 0:ye.length)>0)||null!=Ze&&Ze.disabled?!pe&&ge&&l().createElement(l().Fragment,null,m.formatMessage(j.Z.ruleIsDisabledJustification),l().createElement("i",null,(null==ge?void 0:ge.justification)||m.formatMessage(j.Z.none)),((null==ge?void 0:ge.updated_at)||(null==ge?void 0:ge.created_at))&&l().createElement("span",null," ",l().createElement(h.Z,{date:new Date((null==ge?void 0:ge.updated_at)||(null==ge?void 0:ge.created_at)),type:"onlyDate"}))):l().createElement(l().Fragment,null,m.formatMessage(j.Z.ruleIsDisabledForClustersBody,{clusters:null==ye?void 0:ye.length}),!he&&(null==ye?void 0:ye.length)>0?l().createElement(l().Fragment,null," ",l().createElement(I.Button,{isInline:!0,variant:"link",onClick:function(){return $(!0)},ouiaId:"viewSystems"},m.formatMessage(j.Z.viewClusters))):l().createElement(me.F,null))),l().createElement(g.CardFooter,null,!(null!=Ze&&Ze.hosts_acked_count||(null==ye?void 0:ye.length)>0)||null!=Ze&&Ze.disabled?l().createElement(I.Button,{isInline:!0,variant:"link",onClick:function(){return Ie(t)},ouiaId:"rule"},m.formatMessage(j.Z.enableRule)):!he&&ye?l().createElement(I.Button,{isInline:!0,variant:"link",onClick:function(){return Ce({uuids:ye.map((function(e){return e.cluster_id}))})},ouiaId:"bulkHost"},m.formatMessage(j.Z.enableRuleForClusters)):l().createElement(me.F,null))),!(null!=Ze&&Ze.disabled)&&l().createElement(l().Fragment,null,l().createElement(Z.Title,{className:"titleOverride",headingLevel:"h3",size:"2xl"},m.formatMessage(j.Z.affectedClusters)),l().createElement(ae,{query:r,rule:Ze,afterDisableFn:ke})),(null==Ze?void 0:Ze.disabled)&&l().createElement(q.Z,{icon:k.ZP,title:m.formatMessage(j.Z.ruleIsDisabled),text:m.formatMessage(j.Z.ruleIsDisabledBody)})))))};fe.propTypes={rule:f().object.isRequired,ack:f().object.isRequired,clusters:f().object.isRequired,match:f().object.isRequired};const ge=function(){var e,t,n=(0,i.Z)(),s=(0,re.qv)((0,r.useParams)().recommendationId),c=(0,oe.yr)({ruleId:(0,r.useParams)().recommendationId});if(s.isSuccess&&null!==(e=s.data)&&void 0!==e&&null!==(t=e.content)&&void 0!==t&&t.description){var o="".concat(s.data.content.description," - Recommendations");document.title=n.formatMessage(j.Z.documentTitle,{subnav:o})}var u=(0,re.tf)((0,r.useParams)().recommendationId);return(0,a.useEffect)((function(){s.refetch()}),[(0,r.useParams)().recommendationId]),l().createElement(fe,{rule:s,ack:c,clusters:u,match:(0,r.useRouteMatch)()})}}}]);
//# sourceMappingURL=../sourcemaps/Recommendation.49f27415f8b51401505e77aac7cea911.js.map