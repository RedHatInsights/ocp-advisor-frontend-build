(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[6488],{52661:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});var s=t(28416),c=t.n(s),d=t(2095),n=t(85962),i=t(24561);const r=function(){return c().createElement(d.Card,{ouiaId:"loading-skeleton"},c().createElement(n.CardBody,null,c().createElement(i.aV,null)))}},71001:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>B});var s=t(28416),c=t.n(s),d=t(86896),n=t(89376),i=t(30893),r=t(4942),m=t(70885),b=t(45697),u=t.n(b),o=t(56021),_=t(64420),l=t(35981),f=t(49004),p=t(58027),y=t(13877),h=t(59303),v=t(62410),T=t(62012),g=t(60076),k=t(86706),j=t(28672),C=t(18446),N=t.n(C),E=t(76913),w=t(51014),P=t(52661),S=t(29299);function O(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function D(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?O(Object(t),!0).forEach((function(a){(0,r.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Z=function(e){var a=e.query,t=a.isError,d=a.error,n=a.isUninitialized,i=a.isFetching,b=a.isSuccess,u=a.data,C=a.refetch,O=(0,k.useDispatch)(),Z=(0,k.useSelector)((function(e){return e.filters.workloadsListState})),x=(null==u?void 0:u.workloads)||[],I=Z.limit,F=Math.floor(Z.offset/Z.limit)+1,A=(0,s.useState)([]),B=(0,m.Z)(A,2),L=B[0],z=B[1],q=(0,s.useState)([]),M=(0,m.Z)(q,2),U=M[0],V=M[1],W=(0,s.useState)(!1),R=(0,m.Z)(W,2),G=R[0],H=R[1],J=(0,s.useState)(!1),Y=(0,m.Z)(J,2),$=Y[0],K=Y[1],Q=(0,s.useState)(!0),X=(0,m.Z)(Q,2),ee=X[0],ae=X[1],te=function(e){return O((0,j.$4)(e))},se=n||i||!G,ce=t,de=0===U.length,ne=b,ie=(0,T.useLocation)().search;(0,s.useEffect)((function(){V(re(x))}),[u,Z.namespace_name,Z.cluster_name,Z.severity,Z.sortDirection,Z.sortIndex]),(0,s.useEffect)((function(){if(ie&&ee){var e=(0,E.yG)(ie);if(e.sort){var a=(0,E.Lg)(e.sort);e.sortIndex=h.Bk.indexOf(a.name),e.sortDirection=a.direction}e.offset&&(e.offset=Number(e.offset[0])),e.limit&&(e.limit=Number(e.limit[0])),e.impacting&&!Array.isArray(e.impacting)&&(e.impacting=["".concat(e.impacting)]),te(D(D({},Z),e))}ae(!1)}),[]),(0,s.useEffect)((function(){ee||(0,E.aM)(Z,h.Bk)}),[Z,ee]),(0,s.useEffect)((function(){z(me(U)),H(!0),K((0,S.wW)(Z))}),[U,Z.limit,Z.offset]);var re=function(e){return H(!1),e.filter((function(e){return(0,E.U1)(e,Z)})).sort((function(e,a){var t,s,c,d,n="asc"===Z.sortDirection?1:-1;switch(Z.sortIndex){case h._p:return c=(null===(t=e.cluster)||void 0===t?void 0:t.display_name)||e.cluster.uuid,d=(null===(s=a.cluster)||void 0===s?void 0:s.display_name)||a.cluster.uuid,n*c.localeCompare(d);case h.cl:return(c=e.metadata.recommendations||0)>(d=a.metadata.recommendations||0)?n:d>c?-n:0;case h.Zg:return(c=e.metadata.objects||0)>(d=a.metadata.objects||0)?n:d>c?-n:0;case h.nU:return(c=new Date(e.metadata.last_checked_at||0))>(d=new Date(a.metadata.last_checked_at||0))?n:d>c?-n:0}}))},me=function(e){return e.slice(I*(F-1),I*(F-1)+I).map((function(e,a){return{entity:e,cells:[c().createElement("span",{key:a},c().createElement(T.Link,{to:"".concat(g.G,"/workloads/").concat(e.cluster.uuid,"/").concat(e.namespace.uuid)},c().createElement("p",{key:"".concat(a,"-cluster")},e.cluster.display_name||e.cluster.uuid),c().createElement("p",{key:"".concat(a,"-namespace")},e.namespace.name||e.namespace.uuid))),e.metadata.recommendations,e.metadata.objects,c().createElement("span",{key:a},c().createElement(v.Z,{extraTitle:"Last seen: ",date:e.metadata.last_checked_at,variant:"relative"}))]}}))},be=[{label:"Cluster name",type:"text",filterValues:{key:"cluster_name",onChange:function(e,a){return te(D(D({},Z),{},{offset:0,cluster_name:a}))},value:Z.cluster_name,placeholder:"Filter by cluster name"}},{label:"Namespace name",type:"text",filterValues:{key:"namespace_name",onChange:function(e,a){return te(D(D({},Z),{},{offset:0,namespace_name:a}))},value:Z.namespace_name,placeholder:"Filter by namespace name"}}],ue={showDeleteButton:$,deleteTitle:"Reset filters",filters:(0,E.mt)(Z,h.Fy),onDelete:function(e,a,t){t?N()(Z,j.Cz)?C():(0,j.aw)(Z,j.Cz,te):a.map((function(e){var a,t=(0,r.Z)({},e.urlParam,Array.isArray(Z[e.urlParam])?Z[e.urlParam].filter((function(a){return String(a)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?te(D(D({},Z),t)):(a=e.urlParam,(0,E.oo)(Z,te,a))}))}},oe=function(e,a){H(!1);var t=a*Z.limit-Z.limit;te(D(D({},Z),{},{offset:t}))},_e=function(e,a){a!==Z.limit&&(H(!1),te(D(D({},Z),{},{limit:a,offset:0})))};return t&&404===d.status?c().createElement(w.dz,null):b&&0===x.length?c().createElement(w.Yh,null):c().createElement("div",{id:"workloads-list-table"},c().createElement(o.Z,{pagination:{itemCount:U.length,page:F,perPage:I,onSetPage:oe,onPerPageSelect:_e,isCompact:!0,ouiaId:"pager"},filterConfig:{items:be},activeFiltersConfig:t?{showDeleteButton:!1}:ue}),c().createElement(l.i,{"aria-label":"Table of workloads",ouiaId:"workloads",variant:_.TableVariant.compact,cells:h.go,rows:ce||se||de?[{fullWidth:!0,cells:[{props:{colSpan:h.go.length+1},title:ce?c().createElement(w.Te,null):se?c().createElement(P.Z,null):c().createElement(w.DH,null)}]}]:ne?L:c().createElement(w.Te,null),isStickyHeader:!0,sortBy:{index:Z.sortIndex,direction:Z.sortDirection},onSort:function(e,a,t){H(!1),te(D(D({},Z),{},{sortIndex:a,sortDirection:t}))}},c().createElement(f.x,null),c().createElement(p.R,null)),c().createElement(y.tl,{ouiaId:"pager",itemCount:U.length,page:F,perPage:I,onSetPage:oe,onPerPageSelect:_e,onPageInput:oe,widgetId:"pagination-options-menu-bottom",variant:y.aM.bottom}))};Z.propTypes={query:u().object.isRequired};const x=JSON.parse('[{"cluster":{"uuid":"00000001-0001-0001-0001-000000000006","display_name":"Cluster name 00000001-0001-0001-0001-000000000006"},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"Namespace name fad82c1f-96db-430f-b3ec-503fb9eeb7bb"},"metadata":{"recommendations":1,"objects":100,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":1,"2":3,"3":4,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"17a2e369-e96b-436e-924a-afa055280e44","name":"Namespace name 17a2e369-e96b-436e-924a-afa055280e44"},"metadata":{"recommendations":1,"objects":1,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":2,"3":3,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"76f364f4-4369-4a18-96c3-0aaf07aa16f1","name":"Namespace name 76f364f4-4369-4a18-96c3-0aaf07aa16f1"},"metadata":{"recommendations":3,"objects":3,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2018-11-02T16:55:54+01:00","highest_severity":3,"hits_by_severity":{"1":0,"2":1,"3":2,"4":0}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"70aba366-f6a4-4d6a-9109-57e1ab867b08","name":"Namespace name 70aba366-f6a4-4d6a-9109-57e1ab867b08"},"metadata":{"recommendations":4,"objects":24,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2019-11-02T16:55:54+01:00","highest_severity":3,"hits_by_severity":{"1":4,"2":0,"3":5,"4":0}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"ea8bde67-d544-46aa-9f53-705060649e75","name":"Namespace name ea8bde67-d544-46aa-9f53-705060649e75"},"metadata":{"recommendations":2,"objects":4,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2021-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":5,"2":2,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000003","display_name":""},"namespace":{"uuid":"e4a6778e-f75c-477c-8370-234b398277ca","name":"Namespace name e4a6778e-f75c-477c-8370-234b398277ca"},"metadata":{"recommendations":3,"objects":3,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2020-11-02T16:55:54+01:00","highest_severity":2,"hits_by_severity":{"1":5,"2":1,"3":0,"4":0}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000005","display_name":""},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"Namespace name fad82c1f-96db-430f-b3ec-503fb9eeb7bb"},"metadata":{"recommendations":4,"objects":1536,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-12T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":1,"2":0,"3":3,"4":3}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":""},"namespace":{"uuid":"d00b47da-fc6f-4c72-abc1-94f525441c75","name":"Namespace name d00b47da-fc6f-4c72-abc1-94f525441c75"},"metadata":{"recommendations":6,"objects":6,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":2,"2":0,"3":3,"4":6}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"0fab74ee-61ce-498d-bcd4-070ad950b0d7","name":"Namespace name 0fab74ee-61ce-498d-bcd4-070ad950b0d7"},"metadata":{"recommendations":4,"objects":8,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":1,"hits_by_severity":{"1":1,"2":0,"3":0,"4":0}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"4b2adb7d-490d-48ca-ba28-1c22c8924c29","name":"Namespace name 4b2adb7d-490d-48ca-ba28-1c22c8924c29"},"metadata":{"recommendations":6,"objects":8,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":2,"hits_by_severity":{"1":0,"2":2,"3":0,"4":0}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"7eb1d18b-701b-4f51-aea0-5f235daf1e07","name":"Namespace name 7eb1d18b-701b-4f51-aea0-5f235daf1e07"},"metadata":{"recommendations":4,"objects":16,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-10T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":4}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"8bd032ea-243c-43f8-b9f8-7bba1ab723ee","name":""},"metadata":{"recommendations":4,"objects":458,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-09T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":4}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"fbcbe2d3-e398-4b40-9d5e-4eb46fe8286f","name":""},"metadata":{"recommendations":5,"objects":7,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":5}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"e6ed9bb3-efc3-46a6-b3ae-3f1a6e59546c","name":""},"metadata":{"recommendations":7,"objects":11,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-05T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":7}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"4354a80c-a7a6-405b-bfa6-9666b24e3b48","name":"Namespace name 4354a80c-a7a6-405b-bfa6-9666b24e3b48"},"metadata":{"recommendations":4,"objects":28,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":2,"3":0,"4":4}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"3f32904e-037d-4449-b57c-32a7b0134aeb","name":"Namespace name 3f32904e-037d-4449-b57c-32a7b0134aeb"},"metadata":{"recommendations":4,"objects":444,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":1,"2":0,"3":3,"4":4}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000001","display_name":"Cluster name 00000001-0001-0001-0001-000000000001"},"namespace":{"uuid":"a6c13355-60b6-42fb-9120-5819d9a0f5ad","name":"Namespace name a6c13355-60b6-42fb-9120-5819d9a0f5ad"},"metadata":{"recommendations":20,"objects":10,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":2}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"e4a6778e-f75c-477c-8370-234b398277ca","name":"Namespace name e4a6778e-f75c-477c-8370-234b398277ca"},"metadata":{"recommendations":15,"objects":1,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":5,"3":2,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"e6ed9bb3-efc3-46a6-b3ae-3f1a6e59546c","name":"Namespace name e6ed9bb3-efc3-46a6-b3ae-3f1a6e59546c"},"metadata":{"recommendations":3,"objects":5,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":1,"3":3,"4":3}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"3f32904e-037d-4449-b57c-32a7b0134aeb","name":"Namespace name 3f32904e-037d-4449-b57c-32a7b0134aeb"},"metadata":{"recommendations":1,"objects":55,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":6,"2":2,"3":8,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"Namespace name fad82c1f-96db-430f-b3ec-503fb9eeb7bb"},"metadata":{"recommendations":5,"objects":2,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":100,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"4354a80c-a7a6-405b-bfa6-9666b24e3b48","name":"Namespace name 4354a80c-a7a6-405b-bfa6-9666b24e3b48"},"metadata":{"recommendations":1,"objects":7,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":150,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"70aba366-f6a4-4d6a-9109-57e1ab867b08","name":"Namespace name 70aba366-f6a4-4d6a-9109-57e1ab867b08"},"metadata":{"recommendations":3,"objects":6,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":99,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"4b2adb7d-490d-48ca-ba28-1c22c8924c29","name":"Namespace name 4b2adb7d-490d-48ca-ba28-1c22c8924c29"},"metadata":{"recommendations":1,"objects":1,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":1500,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"8bd032ea-243c-43f8-b9f8-7bba1ab723ee","name":"Namespace name 8bd032ea-243c-43f8-b9f8-7bba1ab723ee"},"metadata":{"recommendations":180,"objects":3,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":150,"4":2000}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"ea8bde67-d544-46aa-9f53-705060649e75","name":"Namespace name ea8bde67-d544-46aa-9f53-705060649e75"},"metadata":{"recommendations":1,"objects":2,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":1999,"4":130}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"fbcbe2d3-e398-4b40-9d5e-4eb46fe8286f","name":"Namespace name fbcbe2d3-e398-4b40-9d5e-4eb46fe8286f"},"metadata":{"recommendations":2,"objects":3,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":2}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"7eb1d18b-701b-4f51-aea0-5f235daf1e07","name":"Namespace name 7eb1d18b-701b-4f51-aea0-5f235daf1e07"},"metadata":{"recommendations":1,"objects":4,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"17a2e369-e96b-436e-924a-afa055280e44","name":"Namespace name 17a2e369-e96b-436e-924a-afa055280e44"},"metadata":{"recommendations":1,"objects":1,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"d00b47da-fc6f-4c72-abc1-94f525441c75","name":"Namespace name d00b47da-fc6f-4c72-abc1-94f525441c75"},"metadata":{"recommendations":3,"objects":3,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":3}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"0fab74ee-61ce-498d-bcd4-070ad950b0d7","name":"Namespace name 0fab74ee-61ce-498d-bcd4-070ad950b0d7"},"metadata":{"recommendations":1,"objects":2,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"a6c13355-60b6-42fb-9120-5819d9a0f5ad","name":"Namespace name a6c13355-60b6-42fb-9120-5819d9a0f5ad"},"metadata":{"recommendations":1,"objects":5,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000003","display_name":"Cluster name 00000001-0001-0001-0001-000000000003"},"namespace":{"uuid":"3f32904e-037d-4449-b57c-32a7b0134aeb","name":"Namespace name 3f32904e-037d-4449-b57c-32a7b0134aeb"},"metadata":{"recommendations":1,"objects":57,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000003","display_name":"Cluster name 00000001-0001-0001-0001-000000000003"},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"Namespace name fad82c1f-96db-430f-b3ec-503fb9eeb7bb"},"metadata":{"recommendations":1,"objects":10,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000003","display_name":"Cluster name 00000001-0001-0001-0001-000000000003"},"namespace":{"uuid":"8bd032ea-243c-43f8-b9f8-7bba1ab723ee","name":"Namespace name 8bd032ea-243c-43f8-b9f8-7bba1ab723ee"},"metadata":{"recommendations":1,"objects":33,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000004","display_name":"Cluster name 00000001-0001-0001-0001-000000000004"},"namespace":{"uuid":"8bd032ea-243c-43f8-b9f8-7bba1ab723ee","name":"Namespace name 8bd032ea-243c-43f8-b9f8-7bba1ab723ee"},"metadata":{"recommendations":1,"objects":80,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000004","display_name":"Cluster name 00000001-0001-0001-0001-000000000004"},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"Namespace name fad82c1f-96db-430f-b3ec-503fb9eeb7bb"},"metadata":{"recommendations":1,"objects":20,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000005","display_name":"foo"},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"Namespace name fad82c1f-96db-430f-b3ec-503fb9eeb7bb"},"metadata":{"recommendations":1,"objects":100,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"foo"},"namespace":{"uuid":"e6ed9bb3-efc3-46a6-b3ae-3f1a6e59546c","name":"Namespace name e6ed9bb3-efc3-46a6-b3ae-3f1a6e59546c"},"metadata":{"recommendations":3,"objects":5,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"","highest_severity":4,"hits_by_severity":{"1":0,"2":1,"3":3,"4":3}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"3f32904e-037d-4449-b57c-32a7b0134aeb","name":"foo bar namespace"},"metadata":{"recommendations":1,"objects":55,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":6,"2":2,"3":8,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"foo bar namespace"},"metadata":{"recommendations":5,"objects":2,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":100,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"4354a80c-a7a6-405b-bfa6-9666b24e3b48","name":"foo bar namespace"},"metadata":{"recommendations":1,"objects":7,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":150,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"70aba366-f6a4-4d6a-9109-57e1ab867b08","name":"Namespace name 70aba366-f6a4-4d6a-9109-57e1ab867b08"},"metadata":{"recommendations":3,"objects":6,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":99,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"4b2adb7d-490d-48ca-ba28-1c22c8924c29","name":"Namespace name 4b2adb7d-490d-48ca-ba28-1c22c8924c29"},"metadata":{"recommendations":1,"objects":1,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":1500,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"8bd032ea-243c-43f8-b9f8-7bba1ab723ee","name":"Namespace name 8bd032ea-243c-43f8-b9f8-7bba1ab723ee"},"metadata":{"recommendations":180,"objects":3,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":150,"4":2000}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"ea8bde67-d544-46aa-9f53-705060649e75","name":"Namespace name ea8bde67-d544-46aa-9f53-705060649e75"},"metadata":{"recommendations":1,"objects":2,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":1999,"4":130}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"fbcbe2d3-e398-4b40-9d5e-4eb46fe8286f","name":"Namespace name fbcbe2d3-e398-4b40-9d5e-4eb46fe8286f"},"metadata":{"recommendations":2,"objects":3,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":2}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"7eb1d18b-701b-4f51-aea0-5f235daf1e07","name":"Namespace name 7eb1d18b-701b-4f51-aea0-5f235daf1e07"},"metadata":{"recommendations":1,"objects":4,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"17a2e369-e96b-436e-924a-afa055280e44","name":"Namespace name 17a2e369-e96b-436e-924a-afa055280e44"},"metadata":{"recommendations":1,"objects":1,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"d00b47da-fc6f-4c72-abc1-94f525441c75","name":"Namespace name d00b47da-fc6f-4c72-abc1-94f525441c75"},"metadata":{"recommendations":3,"objects":3,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":3}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"0fab74ee-61ce-498d-bcd4-070ad950b0d7","name":"Namespace name 0fab74ee-61ce-498d-bcd4-070ad950b0d7"},"metadata":{"recommendations":1,"objects":2,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000002","display_name":"Cluster name 00000001-0001-0001-0001-000000000002"},"namespace":{"uuid":"a6c13355-60b6-42fb-9120-5819d9a0f5ad","name":"Namespace name a6c13355-60b6-42fb-9120-5819d9a0f5ad"},"metadata":{"recommendations":1,"objects":5,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000003","display_name":"Cluster name 00000001-0001-0001-0001-000000000003"},"namespace":{"uuid":"3f32904e-037d-4449-b57c-32a7b0134aeb","name":"Namespace name 3f32904e-037d-4449-b57c-32a7b0134aeb"},"metadata":{"recommendations":1,"objects":57,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000003","display_name":"Cluster name 00000001-0001-0001-0001-000000000003"},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"Namespace name fad82c1f-96db-430f-b3ec-503fb9eeb7bb"},"metadata":{"recommendations":1,"objects":10,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000003","display_name":"Cluster name 00000001-0001-0001-0001-000000000003"},"namespace":{"uuid":"8bd032ea-243c-43f8-b9f8-7bba1ab723ee","name":"Namespace name 8bd032ea-243c-43f8-b9f8-7bba1ab723ee"},"metadata":{"recommendations":1,"objects":33,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000004","display_name":"Cluster name 00000001-0001-0001-0001-000000000004"},"namespace":{"uuid":"8bd032ea-243c-43f8-b9f8-7bba1ab723ee","name":"Namespace name 8bd032ea-243c-43f8-b9f8-7bba1ab723ee"},"metadata":{"recommendations":1,"objects":80,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000004","display_name":"Cluster name 00000001-0001-0001-0001-000000000004"},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"Namespace name fad82c1f-96db-430f-b3ec-503fb9eeb7bb"},"metadata":{"recommendations":1,"objects":20,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}},{"cluster":{"uuid":"00000001-0001-0001-0001-000000000005","display_name":"Cluster name 00000001-0001-0001-0001-000000000005"},"namespace":{"uuid":"fad82c1f-96db-430f-b3ec-503fb9eeb7bb","name":"Namespace name fad82c1f-96db-430f-b3ec-503fb9eeb7bb"},"metadata":{"recommendations":1,"objects":100,"reported_at":"2023-11-02T16:55:54+01:00","last_checked_at":"2023-11-02T16:55:54+01:00","highest_severity":4,"hits_by_severity":{"1":0,"2":0,"3":0,"4":1}}}]'),I=function(){var e={isError:!1,isFetching:!1,isUninitialized:!1,isSuccess:!0,data:{workloads:x},refetch:function(){return null}};return c().createElement(Z,{query:e})};var F=t(34348),A=t(55140);const B=function(){var e=(0,d.Z)();return(0,A.Z)().updateDocumentTitle(e.formatMessage(i.Z.documentTitle,{subnav:"Workloads"})),c().createElement(c().Fragment,null,c().createElement(n.Z,{className:"ins-c-clusters-header"},c().createElement(F.Dx,{headingLevel:"h1",ouiaId:"page-header"},"Workloads")),c().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},c().createElement(I,null)))}},314:()=>{}}]);
//# sourceMappingURL=../sourcemaps/WorkloadsList.eae3e24021f2d358cf0ff8d10a40f3a1.js.map