"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[619],{39697:(e,t,r)=>{r.r(t),r.d(t,{default:()=>J});var n=r(93264),a=r.n(n),l=r(36873),o=r(86896),c=r(86362),i=r(30893),s=r(45697),u=r.n(s),m=r(57361),d=r(84564),p=r(48716),f=r(86350),g=r(7193),v=r(44034),y=r(43),b=r(88292),h=r(47778),E=r(56455),k=function(e){var t=e.clusterId,r=e.lastSeen,n=e.displayName,l=(0,o.Z)(),c=n.isUninitialized,s=n.isLoading,u=n.isFetching,d=n.data;return a().createElement(a().Fragment,null,a().createElement(m.Grid,{md:12,hasGutter:!0},a().createElement(m.GridItem,null,c||s||u?a().createElement(E.Z,{size:"sm"}):a().createElement(h.Title,{size:"2xl",headingLevel:"h1"},d||t)),a().createElement(m.GridItem,null,a().createElement(b.Stack,null,a().createElement(b.StackItem,null,a().createElement("span",null,"UUID: "),a().createElement("span",null,t||l.formatMessage(i.Z.unknown))),r&&a().createElement(b.StackItem,null,a().createElement("span",null,l.formatMessage(i.Z.lastSeen),": "),a().createElement("span",null,r||l.formatMessage(i.Z.unknown)))))))};k.propTypes={clusterId:u().string.isRequired,displayName:u().object.isRequired,lastSeen:u().string};const Z=(0,v.xp)((function(e){var t,r=e.match.params.clusterId,n=(0,y.u)(r),l=(0,c.y0)(r).data;return a().createElement(k,{clusterId:r,displayName:n,lastSeen:null==l||null===(t=l.report)||void 0===t?void 0:t.lastSeen})}));var O=r(4942),P=r(93433),S=r(29439),_=r(44535),j=r(26899),w=r(78216),W=r(94550),C=r(42319),M=r(56161),I=r(8045),D=r(57277),T=r(51957),R=r(59303),x=r(22663),F=r(52661);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,O.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){var t=e.report;return a().createElement("div",{className:"advisor"},a().createElement(x.Z,{appName:"advisor",module:"./AdvisorReportDetails",fallback:a().createElement(F.Z,null),report:V(V({},t),{},{details:t.extra_data,resolution:{resolution:t.resolution}})}))};q.propTypes={report:u().object.isRequired};const z=q;var A=r(31728);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,O.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){var t,r,l=e.reports,c=(0,o.Z)(),s=(0,n.useState)([]),u=(0,S.Z)(s,2),m=u[0],d=u[1],p=(0,n.useState)({}),f=(0,S.Z)(p,2),g=f[0],v=f[1],y=(0,n.useState)(R.FV),b=(0,S.Z)(y,2),h=b[0],E=b[1],k=(0,n.useState)(""),Z=(0,S.Z)(k,2),x=Z[0],F=Z[1],G=(0,n.useState)(!1),V=(0,S.Z)(G,2),q=V[0],N=V[1],L=(0,n.useState)([]),U=(0,S.Z)(L,2),H=U[0],Q=U[1],J=H?H.length/2:0,K=[{title:c.formatMessage(i.Z.description),transforms:[W.sortable]},{title:c.formatMessage(i.Z.added),transforms:[W.sortable,(0,W.cellWidth)(15)]},{title:c.formatMessage(i.Z.totalRisk),transforms:[W.sortable,(0,W.cellWidth)(15)]}],X=function(e,t,r){var n=(0,P.Z)(H);n[t]=B(B({},n[t]),{},{isOpen:r}),Q(n)},Y=function(e){var t="insights-expand-all"===e,r=(0,P.Z)(H);r.map((function(e,r){Object.prototype.hasOwnProperty.call(e,"isOpen")&&(e.isOpen=t,t&&X(0,r,t))})),Q(r)},$=[{label:"Collapse all",onClick:function(){return Y("insights-collapse-all")}},{label:"Expand all",onClick:function(){return Y("insights-expand-all")}}],ee=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=e.flatMap((function(e,l){var o=e,c=e.resolution,i=r.filter((function(e,t){return t%2==0&&e.rule.rule_id===o.rule_id&&e})),s=!!i.length&&i[0].selected,u=r.length?!!i.length&&i[0].isOpen:0===l,m=[{rule:o,resolution:c,isOpen:u,selected:s,cells:[{title:a().createElement("div",null,o.description," ",a().createElement(A.Z,{rule:e}))},{title:a().createElement("div",{key:l},a().createElement(j.Z,{date:o.created_at,type:"relative",tooltipProps:{position:I.TooltipPosition.bottom}}))},{title:a().createElement("div",{key:l,style:{verticalAlign:"top"}},null!=o&&o.likelihood&&null!=o&&o.impact?a().createElement(I.Tooltip,{key:l,position:I.TooltipPosition.bottom,content:a().createElement("span",null,"The ",a().createElement("strong",null,"likelihood")," that this will be a problem is"," ",o.likelihood?R.As[o.likelihood]:"unknown",". The ",a().createElement("strong",null,"impact")," of the problem would be"," ",o.impact?R.dz[o.impact]:"unknown"," ","if it occurred.")},a().createElement(w.Z,{value:o.total_risk})):a().createElement(w.Z,{value:o.total_risk}))}]},{parent:l,fullWidth:!0,cells:[{title:a().createElement(z,{key:"child-".concat(l),report:e})}]}],d=0===n.length||o.description.toLowerCase().includes(n.toLowerCase()),p=0===Object.keys(t).length||Object.keys(t).map((function(e){var r=t[e],n={created_at:o.created_at,total_risk:o.total_risk,category:o.tags,rule_status:o.disabled?"disabled":"enabled"};return"category"===e?n[e].find((function(e){return r.includes(String(R.kT[e]))})):"rule_status"===e?"all"===r||n[e]===r:r.find((function(t){return String(t)===String(n[e])}))})).every((function(e){return e}));return d&&p?m:[]}));return l.forEach((function(e,t){return e.parent?e.parent=t-1:null})),l},te=function(e){return e.filter((function(e){return e.selected}))}(H).length,re=function(e){N(e),Q(ee(m,h,H.map((function(t,r){return r%2==0?B(B({},t),{},{selected:e}):t})),x))},ne={items:[{title:"Select none",onClick:function(){return re(!1)}},{title:"Select all",onClick:function(){return re(!0)}}],count:te,checked:q,onSelect:function(){return re(!q)},ouiaId:"bulk-selector"},ae=function(e,t){var r=t.length>0?B(B({},h),(0,O.Z)({},e,t)):function(e){var t=B({},h);return delete t[e],t}(e);Q(ee(m,r,H,x)),E(r)},le=[{label:"description",filterValues:{key:"text-filter",onChange:function(e,t){return function(e){var t=ee(m,h,H,e);F(e),Q(t)}(t)},value:x}},{label:R.W2.total_risk.title,type:R.W2.total_risk.type,id:R.W2.total_risk.urlParam,value:"checkbox-".concat(R.W2.total_risk.urlParam),filterValues:{key:"".concat(R.W2.total_risk.urlParam,"-filter"),onChange:function(e,t){return ae(R.W2.total_risk.urlParam,t)},value:h.total_risk,items:R.W2.total_risk.values}},{label:R.W2.category.title,type:R.W2.category.type,id:R.W2.category.urlParam,value:"checkbox-".concat(R.W2.category.urlParam),filterValues:{key:"".concat(R.W2.category.urlParam,"-filter"),onChange:function(e,t){return ae(R.W2.category.urlParam,t)},value:h.category,items:R.W2.category.values}},{label:R.W2.rule_status.title,type:R.W2.rule_status.type,id:R.W2.rule_status.urlParam,value:"radio-".concat(R.W2.rule_status.urlParam),filterValues:{key:"".concat(R.W2.rule_status.urlParam,"-filter"),onChange:function(e,t){return r=t,n=B(B({},h),{},{rule_status:r}),Q(ee(m,n,H,x)),void E(n);var r,n},value:h.rule_status,items:R.W2.rule_status.values}}],oe={deleteTitle:c.formatMessage(i.Z.resetFilters),filters:(t=Object.entries(h),r=h&&t.length>0?t.map((function(e){var t=R.W2[e[0]],r=Array.isArray(e[1])?e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:(0,C.capitalize)(t.title),chips:r,urlParam:t.urlParam}})):[],x.length>0&&r.push({category:"Description",chips:[{name:x,value:x}]}),r),onDelete:function(e,t,r){r?(Q(ee(m,{},H,"")),E(R.FV),F("")):t.map((function(e){switch(e.category){case"Description":Q(ee(m,h,H,"")),F("");break;case"Status":ae(e.urlParam,[]);break;default:ae(e.urlParam,h[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})))}}))}};return(0,n.useEffect)((function(){var e=l;d(e),Q(ee(e,h,H,x))}),[]),a().createElement("div",null,a().createElement(D.Z,{actionsConfig:{actions:$},bulkSelect:ne,filterConfig:{items:le},pagination:a().createElement(a().Fragment,null,1===J?"".concat(J," ").concat(c.formatMessage(i.Z.recommendation)):"".concat(J," ").concat(c.formatMessage(i.Z.recommendations))),activeFiltersConfig:oe}),m.length>0?a().createElement(a().Fragment,null,a().createElement(W.Table,{"aria-label":"Cluster recommendations table",ouiaId:"cluster-recommendations",onSelect:function(e,t,r){return Q(ee(m,h,H.map((function(e,n){return n===r?B(B({},e),{},{selected:t}):e})),x))},onCollapse:X,rows:H,cells:K,sortBy:g,canSelectAll:!1,onSort:function(e,t,r){var n={2:"description",3:"created_at",4:"total_risk"},a=function(){return m.concat().sort((function(e,r){return e[n[t]]>r[n[t]]?1:r[n[t]]>e[n[t]]?-1:0}))},l=r===W.SortByDirection.asc?a():a().reverse();d(l),v({index:t,direction:r}),Q(ee(l,h,H,x))},variant:W.TableVariant.compact,isStickyHeader:!0},a().createElement(W.TableHeader,null),a().createElement(W.TableBody,null)),0===J&&a().createElement(M.Card,{ouiaId:"empty-recommendations"},a().createElement(M.CardBody,null,a().createElement(T.Z,{title:c.formatMessage(i.Z.noMatchingRecommendations),text:c.formatMessage(i.Z.noMatchingRecommendationsDesc)})))):a().createElement(M.Card,null,a().createElement(M.CardBody,null,a().createElement(T.Z,{icon:_.default,iconClass:"ins-c-insights__check",title:c.formatMessage(i.Z.noRecommendations),text:c.formatMessage(i.Z.noRecommendationsDesc)}))))};L.propTypes={reports:u().array.isRequired},L.defaultProps={reports:[]};const U=L;var H=r(39545),Q=function(e){var t,r=e.cluster,n=e.match,l=(0,o.Z)(),c=r.isError,s=r.isUninitialized,u=r.isLoading,v=r.isFetching,y=r.isSuccess,b=r.data;return a().createElement(a().Fragment,null,(s||u||v)&&a().createElement(f.Z,null,a().createElement(F.Z,null)),c&&a().createElement(f.Z,null,a().createElement(T.Z,{title:l.formatMessage(i.Z.noRecsError),text:l.formatMessage(i.Z.noRecsErrorDesc),icon:d.default,iconStyle:{color:g.Q7.value}})),y&&a().createElement(a().Fragment,null,a().createElement(p.Z,{className:"pf-m-light ins-inventory-detail"},a().createElement(H.Z,{current:n.params.clusterId,match:n}),a().createElement(Z,null)),a().createElement(f.Z,null,a().createElement(a().Fragment,null,a().createElement(m.Grid,{hasGutter:!0},a().createElement(m.GridItem,{span:12},a().createElement(U,{reports:(null==b||null===(t=b.report)||void 0===t?void 0:t.data)||[]})))))))};Q.propTypes={cluster:u().object.isRequired,match:u().object.isRequired};const J=(0,l.Z)((function(e){var t=e.match,r=(0,o.Z)(),l=(0,c.th)(t.params.clusterId);return(0,n.useEffect)((function(){l.refetch()}),[t.params.clusterId]),(0,n.useEffect)((function(){if(t.params.clusterId){var e="".concat(t.params.clusterId," - ").concat(r.formatMessage(i.Z.clusters));document.title=r.formatMessage(i.Z.documentTitle,{subnav:e})}}),[t.params.clusterId]),a().createElement(Q,{cluster:l,match:t})}))}}]);