"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[619],{39697:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ae});var n=r(93264),a=r.n(n),l=r(36873),o=r(86896),i=r(86362),c=r(30893),s=r(45697),u=r.n(s),m=r(57361),d=r(84564),f=r(31369),p=r(48716),v=r(86350),g=r(7193),E=r(28058),h=r(44034),y=r(88292),b=r(47778),Z=r(56455),k=r(26899),O=r(73845),P=function(e){var t,r,n,l,i,s,u=e.clusterId,d=e.clusterData,f=(0,o.Z)(),p=d.isUninitialized,v=d.isFetching,g=d.data;return a().createElement(m.Grid,{id:"cluster-header",md:12,hasGutter:!0},a().createElement(m.GridItem,null,p||v?a().createElement(Z.Z,{size:"sm"}):a().createElement(b.Title,{size:"2xl",headingLevel:"h1",id:"cluster-header-title",ouiaId:"cluster-name"},(null==d||null===(t=d.data)||void 0===t||null===(r=t.report)||void 0===r?void 0:r.meta.cluster_name)||u)),a().createElement(m.GridItem,null,a().createElement(y.Stack,null,a().createElement(y.StackItem,{id:"cluster-header-uuid"},a().createElement("span",null,"UUID: "),a().createElement("span",null,u||f.formatMessage(c.Z.unknown))),a().createElement(y.StackItem,{id:"cluster-header-last-seen"},a().createElement("span",null,f.formatMessage(c.Z.lastSeen),": "),a().createElement("span",null,p||v?a().createElement(O.F,null):null!=g&&null!==(n=g.report)&&void 0!==n&&null!==(l=n.meta)&&void 0!==l&&l.last_checked_at?a().createElement(k.Z,{date:null==g||null===(i=g.report)||void 0===i||null===(s=i.meta)||void 0===s?void 0:s.last_checked_at,type:"exact"}):f.formatMessage(c.Z.unknown))))))};P.propTypes={clusterId:u().string.isRequired,displayName:u().object.isRequired,clusterData:u().object.isRequired};const j=(0,h.xp)((function(e){var t=e.match.params.clusterId,r=(0,i.th)({id:t,includeDisabled:!1});return a().createElement(P,{clusterId:t,clusterData:r})}));var _=r(93433),x=r(4942),D=r(29439),I=r(16530),S=r(88931),w=r(48403),R=r.n(w),F=r(44535),T=r(78216),W=r(30097),C=r(56161),M=r(8045),q=r(48114),A=r(51957),G=r(59303),N=r(22663),z=r(52661);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,x.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){var t=e.report;return a().createElement("div",{className:"advisor"},a().createElement(N.Z,{appName:"advisor",module:"./AdvisorReportDetails",fallback:a().createElement(z.Z,null),report:V(V({},t),{},{details:t.extra_data,resolution:{resolution:t.resolution}})}))};L.propTypes={report:u().object.isRequired};const U=L;var H=r(90670),J=r(51014),Q=r(76913),Y=r(28672),K=r(48622);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,x.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=function(e){var t=e.reports,r=(0,o.Z)(),l=(0,S.useDispatch)(),i=function(e){return l((0,Y.YR)(e))},s=(0,S.useSelector)((function(e){return e.filters.clusterRulesState})),u=(0,n.useState)([]),m=(0,D.Z)(u,2),d=m[0],f=m[1],p=(0,n.useState)([]),v=(0,D.Z)(p,2),g=v[0],E=v[1],h=(0,n.useState)(!1),y=(0,D.Z)(h,2),b=y[0],Z=y[1],O=(0,n.useState)(!0),P=(0,D.Z)(O,2),j=P[0],w=P[1],N=(0,n.useState)(""),z=(0,D.Z)(N,2),B=z[0],V=z[1],L=d.length,X=(0,I.useLocation)().search;(0,n.useEffect)((function(){E(re(d,s.sortIndex,s.sortDirection))}),[d,s.limit,s.offset,s.sortIndex,s.sortDirection]),(0,n.useEffect)((function(){f(te(t,s))}),[t,s]),(0,n.useEffect)((function(){if(X){var e=(0,Q.yG)(X);if(e.sort){var t=(0,Q.Lg)(e.sort[0]);e.sortIndex=G.P1.indexOf(t.name),e.sortDirection=t.direction}e.first&&(V(e.first),delete e.first),i($($({},s),e))}}),[]);var ee,te=function(e,t){return e.filter((function(e){return(0,Q._F)(e,t)})).map((function(e,t){return[{rule:e,isOpen:b,cells:[{title:a().createElement("div",null,(null==e?void 0:e.description)||(null==e?void 0:e.rule_id)," ",a().createElement(H.Z,{rule:e}))},{title:a().createElement("div",{key:t},a().createElement(k.Z,{date:e.created_at,type:"relative",tooltipProps:{position:M.TooltipPosition.bottom}}))},{title:a().createElement("div",{key:t,style:{verticalAlign:"top"}},null!=e&&e.likelihood&&null!=e&&e.impact?a().createElement(M.Tooltip,{key:t,position:M.TooltipPosition.bottom,content:a().createElement("span",null,"The ",a().createElement("strong",null,"likelihood")," that this will be a problem is"," ",e.likelihood?G.FV[e.likelihood]:"unknown",".The ",a().createElement("strong",null,"impact")," of the problem would be"," ",e.impact?G.dz[e.impact]:"unknown"," ","if it occurred.")},a().createElement(T.Z,{value:e.total_risk})):a().createElement(T.Z,{value:e.total_risk}))}]},{fullWidth:!0,cells:[{title:a().createElement(U,{key:"child-".concat(t),report:e})}]}]}))},re=function(e,t,r){var n=(0,_.Z)(e);if(t>=0)n=(0,_.Z)(e).sort((function(e,r){var n=e[0].rule[G.P1[t-1]],a=r[0].rule[G.P1[t-1]];return n>a?1:a>n?-1:0})),r===W.SortByDirection.desc&&n.reverse();else if(B){var a=e.findIndex((function(e){var t=e[0].rule;return t.rule_id.split(".report")[0]===(0,K.Nq)(B)&&t.extra_data.error_key===(0,K.o6)(B)}));-1!==a&&n.unshift(n.splice(a,1)[0])}return n.flatMap((function(e,t){var r=(0,_.Z)(e);return j&&0===t&&(e[0].isOpen=!0),e[1].parent=2*t,r}))},ne=function(e){var t=$($({},s),{},{offset:0});delete t[e],i($($({},t),"text"===e?{text:""}:{}))},ae=function(e,t){return w(!1),V(""),t.length>0?i($($({},s),{},{offset:0},(0,x.Z)({},e,t))):ne(e)},le=[{label:"description",filterValues:{key:"text-filter",onChange:function(e,t){return ae("text",t)},value:s.text}},{label:G.W2.total_risk.title,type:G.W2.total_risk.type,id:G.W2.total_risk.urlParam,value:"checkbox-".concat(G.W2.total_risk.urlParam),filterValues:{key:"".concat(G.W2.total_risk.urlParam,"-filter"),onChange:function(e,t){return ae(G.W2.total_risk.urlParam,t)},value:s.total_risk,items:G.W2.total_risk.values}},{label:G.W2.category.title,type:G.W2.category.type,id:G.W2.category.urlParam,value:"checkbox-".concat(G.W2.category.urlParam),filterValues:{key:"".concat(G.W2.category.urlParam,"-filter"),onChange:function(e,t){return ae(G.W2.category.urlParam,t)},value:s.category,items:G.W2.category.values}}],oe={deleteTitle:r.formatMessage(c.Z.resetFilters),filters:(ee=$({},s),delete ee.sortIndex,delete ee.sortDirection,delete ee.offset,delete ee.limit,function(e,t){var r=Object.entries(e);return r.length>0?r.reduce((function(e,r){if(t[r[0]]){var n=t[r[0]],a=Array.isArray(r[1])?r[1].map((function(e){var t=n.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:n.values.find((function(e){return e.value===String(r[1])})).label,value:r[1]}];return[].concat((0,_.Z)(e),[{category:R()(n.title),chips:a,urlParam:n.urlParam}])}return"text"===r[0]?[].concat((0,_.Z)(e),(0,_.Z)(r[1].length>0?[{category:"Name",chips:[{name:r[1],value:r[1]}],urlParam:r[0]}]:[])):e}),[]):[]}(ee,G.W2)),onDelete:function(e,t,r){r?i(Y.OF):t.map((function(e){var t=(0,x.Z)({},e.urlParam,Array.isArray(s[e.urlParam])?s[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?i($($({},s),t)):ne(e.urlParam)}))}};return a().createElement("div",{id:"cluster-recs-list-table"},a().createElement(q.Z,{expandAll:{isAllExpanded:b,onClick:function(e,t){Z(t),E(g.map((function(e){return $($({},e),{},{isOpen:t})})))}},filterConfig:{items:le,isDisabled:0===t.length},pagination:a().createElement(a().Fragment,null,1===L?"".concat(L," ").concat(r.formatMessage(c.Z.recommendation)):"".concat(L," ").concat(r.formatMessage(c.Z.recommendations))),activeFiltersConfig:0===t.length?void 0:oe}),t.length>0?a().createElement(a().Fragment,null,a().createElement(W.Table,{"aria-label":"Cluster recommendations table",ouiaId:"recommendations",onCollapse:function(e,t,r){var n=(0,_.Z)(g);n[t]=$($({},n[t]),{},{isOpen:r}),E(n)},rows:g,cells:G.d3,sortBy:{index:s.sortIndex,direction:s.sortDirection},onSort:function(e,t,r){return i($($({},s),{},{sortIndex:t,sortDirection:r}))},variant:W.TableVariant.compact,isStickyHeader:!0},a().createElement(W.TableHeader,null),a().createElement(W.TableBody,null)),0===L&&a().createElement(C.Card,{ouiaId:"empty-state"},a().createElement(C.CardBody,null,a().createElement(J.A0,null)))):a().createElement(C.Card,{ouiaId:"no-recommendations"},a().createElement(C.CardBody,null,a().createElement(A.Z,{icon:F.default,iconClass:"ins-c-insights__check",title:r.formatMessage(c.Z.noRecommendations),text:r.formatMessage(c.Z.noRecommendationsDesc)}))))};ee.propTypes={reports:u().array.isRequired},ee.defaultProps={reports:[]};const te=ee;var re=r(56276),ne=function(e){var t,r,n=e.cluster,l=e.match,i=(0,o.Z)(),s=n.isError,u=n.isUninitialized,h=n.isLoading,y=n.isFetching,b=n.isSuccess,Z=n.data,k=n.error;return a().createElement(a().Fragment,null,a().createElement(p.Z,{className:"pf-m-light ins-inventory-detail"},a().createElement(re.Z,{current:(null==n||null===(t=n.data)||void 0===t?void 0:t.report.meta.cluster_name)||l.params.clusterId,match:l}),a().createElement(j,null)),(u||h||y)&&a().createElement(v.Z,{id:"loading-skeleton"},a().createElement(z.Z,null)),s&&(404===(null==k?void 0:k.status)?a().createElement(v.Z,null,a().createElement(A.Z,{title:i.formatMessage(c.Z.noRecsFoundError),text:a().createElement(a().Fragment,null,i.formatMessage(c.Z.noRecsFoundErrorDesc),a().createElement("a",{href:"https://docs.openshift.com/container-platform/latest/support/getting-support.html"}," ","OpenShift documentation.")),icon:f.default,iconStyle:{color:E.RJ.value},variant:"large"})):a().createElement(v.Z,null,a().createElement(A.Z,{title:i.formatMessage(c.Z.noRecsError),text:i.formatMessage(c.Z.noRecsErrorDesc),icon:d.default,iconStyle:{color:g.Q7.value}}))),b&&a().createElement(a().Fragment,null,a().createElement(v.Z,null,a().createElement(a().Fragment,null,a().createElement(m.Grid,{hasGutter:!0},a().createElement(m.GridItem,{span:12},a().createElement(te,{reports:(null==Z||null===(r=Z.report)||void 0===r?void 0:r.data)||[]})))))))};ne.propTypes={cluster:u().object.isRequired,displayName:u().object.isRequired,match:u().object.isRequired};const ae=(0,l.Z)((function(e){var t=e.match,r=(0,o.Z)(),l=(0,i.th)({id:t.params.clusterId,includeDisabled:!1});return(0,n.useEffect)((function(){l.refetch()}),[t.params.clusterId]),(0,n.useEffect)((function(){if(t.params.clusterId){var e="".concat(t.params.clusterId," - ").concat(r.formatMessage(c.Z.clusters));document.title=r.formatMessage(c.Z.documentTitle,{subnav:e})}}),[t.params.clusterId]),a().createElement(ne,{cluster:l,match:t})}))}}]);