"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[987],{94794:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var r=n(93264),l=n.n(r),a=n(16530),c=n(86896),i=n(45697),o=n.n(i),u=n(48716),s=n(39173),m=n(86350),f=n(62410),d=n(23218),p=n(34348),g=n(71369),b=n(84564),v=n(7193),E=n(56276),y=n(31728),h=n(59303),O=n(30893),P=n(1990),Z=n(52661),j=n(4942);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=n(51957),w=n(29439),k=n(88931),x=n(48114),N=n(77572),F=n(92223),I=n(32875),T=n(56161),_=n(7026),L=n(97530),B=n(17335),M=n(12321),R=n(76),q=n(13877),z=n(51014),A=n(28672),V=n(86362);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const H=function(){var e=(0,V.tf)((0,a.useParams)().recommendationId),t=(0,k.useDispatch)(),n=(0,k.useSelector)((function(e){return e.filters.affectedClustersState})),c=Number(n.limit),i=n.offset/n.limit+1,o=function(e){return t((0,A.BC)(e))},u=e.isError,s=e.isUninitialized,m=e.isFetching,f=e.isSuccess,d=e.data,p=void 0===d?[]:d,g=(0,r.useState)([]),b=(0,w.Z)(g,2),v=b[0],E=b[1],y=(0,r.useState)([]),h=(0,w.Z)(y,2),O=h[0],P=h[1],j=(0,r.useState)([]),C=(0,w.Z)(j,2),D=C[0],S=C[1],U={items:[{label:"Name",type:N.Yu.text,filterValues:{key:"name-filter",onChange:function(e,t){return function(e){var t=G(G({},n),{},{text:e,offset:0});o(t)}(t)},value:n.text}}],isDisabled:u||p&&0===p.length},H=function(e,t){var r=t*n.limit-n.limit;o(G(G({},n),{},{offset:r}))},Q=function(e,t){o(G(G({},n),{},{limit:t}))};return(0,r.useEffect)((function(){var e=function(e,t){return e.filter((function(e){return null==e?void 0:e.cluster.includes(t.text)})).sort((function(e,n){return"asc"===t.sortDirection?null==e?void 0:e.cluster.localeCompare(null==n?void 0:n.cluster):null==n?void 0:n.cluster.localeCompare(null==e?void 0:e.cluster)}))}(p,n),t=function(e){return e.slice(c*(i-1),c*(i-1)+c)}(e),r=function(e,t){var n=e,r=n.findIndex((function(e){return"Name"===e.category}));return""===t?n.splice(r):-1===r?n.push({category:"Name",chips:[{name:t}]}):n[r]={category:"Name",chips:[{name:t}]},n}(D,n.text);E(e),P(t),S(r)}),[e,n]),l().createElement("div",{id:"affected-list-table"},l().createElement(x.Z,{filterConfig:U,pagination:{itemCount:v.length,page:i,perPage:c,onSetPage:H,onPerPageSelect:Q},activeFiltersConfig:{filters:D,onDelete:function(){var e=G(G({},n),{},{text:""});o(e)}}}),(s||m)&&l().createElement(Z.Z,null),u&&l().createElement(T.Card,null,l().createElement(T.CardBody,null,l().createElement(z.Te,null))),f&&0===p.length&&l().createElement(T.Card,null,l().createElement(T.CardBody,null,l().createElement(z.mi,null))),f&&p.length>0&&(v.length>0?l().createElement(L.i,{"aria-label":"Table of affected clusters",ouiaId:"affectedClustersTable",variant:"compact",cells:[{title:"Name",transforms:[_.sortable]}],rows:O.map((function(e){return{cells:[l().createElement("span",{key:null==e?void 0:e.cluter},l().createElement(a.Link,{to:"/clusters/".concat(null==e?void 0:e.cluster)},null==e?void 0:e.cluster))]}})),sortBy:{index:n.sortIndex,direction:n.sortDirection},onSort:function(e,t,r){o(G(G({},n),{},{sortIndex:t,sortDirection:r}))}},l().createElement(M.x,null),l().createElement(B.R,null)):l().createElement(F.Z,null,l().createElement(R.Bullseye,null,l().createElement(z.VA,null)))),l().createElement(I.Z,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},l().createElement(q.Pagination,{variant:q.PaginationVariant.bottom,itemCount:v.length,page:i,perPage:c,onSetPage:H,onPerPageSelect:Q,onPageInput:H})))};var Q=function(e){var t=e.rule,n=e.match,r=(0,c.Z)(),a=t.isError,i=t.isUninitialized,o=t.isLoading,j=t.isFetching,C=t.isSuccess,w=t.data,k=C?function(e,t){var n,r=(null==e||null===(n=e.error_keys)||void 0===n?void 0:n[function(e){var t;return null===(t=e.split("|"))||void 0===t?void 0:t[1]}(t)])||{},l=D(D(D({},e),r),(null==r?void 0:r.metadata)||(null==e?void 0:e.metadata)||{});return l.impact={impact:l.impact},delete l.metadata,delete l.error_keys,l}(w.content,n.params.recommendationId):void 0;return l().createElement(l().Fragment,null,(i||o||j)&&l().createElement(m.Z,null,l().createElement(Z.Z,null)),a&&l().createElement(m.Z,null,l().createElement(S.Z,{title:r.formatMessage(O.Z.unableToConnect),text:r.formatMessage(O.Z.unableToConnectDesc),icon:b.default,iconStyle:{color:v.Q7.value}})),C&&l().createElement(l().Fragment,null,l().createElement(u.Z,{className:"pageHeaderOverride"},l().createElement(E.Z,{current:(null==k?void 0:k.description)||n.params.recommendationId})),l().createElement(m.Z,{className:"pf-m-light pf-u-pt-sm"},l().createElement(P.Z,{isOpenShift:!0,isDetailsPage:!0,rule:k,header:l().createElement(l().Fragment,null,l().createElement(s.Z,{title:l().createElement(l().Fragment,null,k.description," ",l().createElement(y.Z,{rule:k}))}),l().createElement("p",null,r.formatMessage(O.Z.rulesDetailsPubishdate,{date:l().createElement(f.Z,{date:new Date(k.publish_date),type:"onlyDate"})}),k.tags&&(Array.isArray(k.tags)?l().createElement(g.LabelGroup,{className:"categoryLabels",numLabels:1},k.tags.reduce((function(e,t){return h.kT[t]&&e.push(l().createElement(d.Label,{key:"label-".concat(t),color:"blue"},h.W2.category.values[h.kT[t]-1].label)),e}),[])):l().createElement(d.Label,null,k.tags))))})),l().createElement(m.Z,null,l().createElement(l().Fragment,null,l().createElement(l().Fragment,null,l().createElement(p.Title,{className:"titleOverride",headingLevel:"h3",size:"2xl"},r.formatMessage(O.Z.affectedClusters)),l().createElement(H,null))))))};Q.propTypes={rule:o().object.isRequired,match:o().object.isRequired};const W=function(){var e=(0,V.qv)(function(e){var t;return null===(t=e.split("|"))||void 0===t?void 0:t[0]}((0,a.useParams)().recommendationId));return(0,r.useEffect)((function(){e.refetch()}),[(0,a.useParams)().recommendationId]),l().createElement(Q,{rule:e,match:(0,a.useRouteMatch)()})}}}]);