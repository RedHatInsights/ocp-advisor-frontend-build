(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[2339],{3522:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var r=a(28416),n=a.n(r),l=a(45697),s=a.n(l),i=a(86896),o=a(56800),c=a(58790),d=a(2550);const m=({current:e,workloads:t})=>{const a=(0,i.Z)(),r=(0,o.useLocation)().pathname.split("/");return n().createElement("div",null,n().createElement(c.Breadcrumb,{ouiaId:"detail","data-testid":"breadcrumb-item"},n().createElement(c.BreadcrumbItem,{className:"breadcrumb-item"},n().createElement(o.Link,{to:t?"../..":"..",relative:"path"},`${a.formatMessage(d.Z.insightsHeader)} ${r[4]}`)),n().createElement(c.BreadcrumbItem,{className:"breadcrumb-item",isActive:!0},e)))};m.propTypes={current:s().string,workloads:s().boolean};const u=m},57642:(e,t,a)=>{"use strict";a.d(t,{Lg:()=>g,Lv:()=>y,U1:()=>_,WL:()=>E,_:()=>b,_F:()=>d,aM:()=>h,im:()=>m,mt:()=>u,oo:()=>f,yG:()=>p});var r=a(48403),n=a.n(r),l=a(50361),s=a.n(l),i=(a(28416),a(81249)),o=a(81563),c=a(94608);const d=(e,t)=>Object.entries(t).every((([t,a])=>{switch(t){case"text":return e.description.toLowerCase().includes(a.toLowerCase());case o.W2.total_risk.urlParam:return a.includes(String(e.total_risk));case o.W2.category.urlParam:return e.tags.find((e=>a.includes(String(o.kT[e]))));case o.W2.impact.urlParam:return a.includes(String(e.impact));case o.W2.impacting.urlParam:return!(a.length>0)||a.some((t=>"true"===t?e.impacted_clusters_count>0:"false"===t?0===e.impacted_clusters_count:void 0));case o.W2.likelihood.urlParam:return a.includes(String(e.likelihood));case o.W2.rule_status.urlParam:return"all"===a||"disabled"===a&&e.disabled||"enabled"===a&&!e.disabled;case o.W2.res_risk.urlParam:return a.includes(String(e.resolution_risk));default:return!0}})),m=(e,t)=>Object.entries(t).every((([t,a])=>{switch(t){case"text":return(e.cluster_name||e.cluster_id).toLowerCase().includes(a.toLowerCase());case o.RT.hits.urlParam:return 0===a.length&&parseInt(e.total_hit_count)>0||a.includes("all")||a.some((t=>e.hits_by_total_risk[t]>0));case"version":return 0===a.length||a.includes(E(e.cluster_version));default:return!0}})),u=(e,t)=>{const a=s()(e);return delete a.sortIndex,delete a.sortDirection,delete a.sort,delete a.offset,delete a.limit,a?.hits&&0===a.hits.length&&delete a.hits,((e,t)=>Object.entries(e||{}).reduce(((e,a)=>{const[r,l]=a;if(t[r]){const a=t[r],s=Array.isArray(l)?l.map((e=>{const t=a.values.find((t=>t.value===String(e)));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:a.values.find((e=>e.value===String(l))).label,value:l}];return[...e,{category:n()(a.title),chips:s,urlParam:a.urlParam}]}return"text"===r?[...e,...l.length>0?[{category:"Name",chips:[{name:l,value:l}],urlParam:r}]:[]]:"version"===r?[...e,...l.length>0?[{category:"Version",chips:l.map((e=>({name:e,value:e}))),urlParam:r}]:[]]:"namespace_name"===r?[...e,...l.length>0?[{category:"Namespace name",chips:[{name:l,value:l}],urlParam:r}]:[]]:"cluster_name"===r?[...e,...l.length>0?[{category:"Cluster name",chips:[{name:l,value:l}],urlParam:r}]:[]]:void 0}),[]))(a,t)},p=e=>{const t=new URLSearchParams(e);return Array.from(t).reduce(((e,[t,a])=>({...e,[t]:["text","first","rule_status","sort","cluster_name","namespace_name","description","object_id","object_name"].includes(t)?a:"true"===a||"false"===a?JSON.parse(a):a.split(",")})),{})},g=e=>({name:e.substring(e.startsWith("-")?1:0),direction:e.startsWith("-")?"desc":"asc",description:e.substring(e.startsWith("-")?1:0),object_id:e.substring(e.startsWith("-")?1:0)}),h=(e={},t)=>{const a=new URL(window.location.origin+window.location.pathname);var r,n,l;a.searchParams.set("sort",(r=e.sortIndex,n=t,l=e.sortDirection,["desc","asc"].includes(l)||console.error("Invalid sort parameters (is not asc nor desc)"),`${"asc"===l?"":"-"}${n[r]}`)),Object.entries(e).forEach((([e,t])=>"sortIndex"!==e&&"sortDirection"!==e&&"sort"!==e&&""!==t&&!(Array.isArray(t)&&0===t.length)&&a.searchParams.set(e,t))),window.history.replaceState(null,null,a.href)},b=(e,t,a)=>a*(0,i.compare)(e,t),E=e=>(0,i.coerce)(void 0!==e&&(0,i.valid)((0,i.coerce)(e))?e:"0.0.0").version,f=(e,t,a)=>{const{[a]:r,...n}={...e,offset:0};t({...n,..."text"===a?{text:""}:"hits"===a?{hits:[]}:"version"===a?{version:[]}:"object_id"===a?{object_id:""}:{}})},y=(e,t,a,r)=>r.length>0?t({...e,offset:0,[a]:r}):f(e,t,a),_=(e,t)=>{const a=(0,c.Vs)(e.metadata.hits_by_severity,"general");return Object.entries(t).every((([r,n])=>{switch(r){case"cluster_name":return(e.cluster.display_name||e.cluster.uuid).toLowerCase().includes(n.toLowerCase());case"namespace_name":return(e.namespace.name||e.namespace.uuid).toLowerCase().includes(n.toLowerCase());case"severity":return 0===n.length||(0,c.mR)(a,t.severity);default:return!0}}))}},83920:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(28416),n=a.n(r),l=a(67073),s=a(24561);const i=()=>n().createElement(l.Card,{ouiaId:"loading-skeleton"},n().createElement(l.CardBody,null,n().createElement(s.aV,null)))},6554:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ge});var r=a(28416),n=a.n(r),l=a(63456),s=a(14799),i=a(45041),o=a(50318),c=a(3522),d=a(93999),m=a(96128),u=a(32819),p=a(21888),g=a(62410),h=a(45697),b=a.n(h);const E=({workloadData:e,namespaceId:t,clusterId:a})=>{const{isUninitialized:r,isFetching:l,data:s}=e;return n().createElement(d.Grid,{id:"workload-header",md:12,hasGutter:!0},n().createElement(d.GridItem,{span:8},n().createElement(o.Title,{size:"2xl",headingLevel:"h1",id:"workloads-header-title",ouiaId:"workloads-name"},r||l?n().createElement(n().Fragment,null,n().createElement(u.Z,{size:"sm"}),n().createElement(u.Z,{size:"sm"})):n().createElement(n().Fragment,null,n().createElement("p",null,s?.cluster?.display_name||a),n().createElement("p",null,s?.namespace?.name||t)))),n().createElement(d.GridItem,null,n().createElement(m.Stack,null,n().createElement(m.StackItem,{id:"workload-header-uuid"},n().createElement("span",null,"Cluster UUID:")," ",n().createElement("span",null,a)," ",n().createElement("span",null,"Namespace UUID:")," ",n().createElement("span",null,t)),n().createElement(m.StackItem,{id:"workload-header-last-seen"},n().createElement("span",null,"Last seen: "),n().createElement("span",null,r||l?n().createElement(p.F,null):s?.metadata?.last_checked_at?n().createElement(g.Z,{date:s.metadata.last_checked_at,type:"exact"}):n().createElement(n().Fragment,null,"Unknown"))))))};E.propTypes={clusterId:b().string.isRequired,namespaceId:b().string.isRequired,workloadData:b().shape({isUninitialized:b().bool.isRequired,isFetching:b().bool.isRequired,data:b().shape({metadata:b().shape({last_checked_at:b().string}),namespace:b().shape({uuid:b().string,name:b().string}),cluster:b().shape({uuid:b().string,display_name:b().string}),status:b().string})})};const f=({workload:e,namespaceId:t,clusterId:a})=>n().createElement(E,{workloadData:e,namespaceId:t,clusterId:a});f.propTypes={clusterId:b().string.isRequired,namespaceId:b().string.isRequired,workload:b().shape({isUninitialized:b().bool.isRequired,isFetching:b().bool.isRequired,data:b().shape({metadata:b().shape({last_checked_at:b().string}),namespace:b().shape({uuid:b().string,name:b().string}),cluster:b().shape({uuid:b().string,display_name:b().string}),status:b().string})})};const y=f;var _=a(75863),v=a(35981),k=a(49004),w=a(58027),C=a(77357),I=a(81563),j=a(83920),P=a(91306),S=a(90693),x=a(52251),O=a.n(x),L=a(45106),D=a.n(L),R=a(80081),T=a.n(R),N=a(44442),M=a(67073),W=a(4424),A=a(28900),q=a(73813),F=a(22454),B=a(5697),V=a(51630),U=a(8128),Z=a(15173),$=a(75521),z=a(26090),H=a(55471),G=a.n(H),J=a(29810),K=a(86706),Q=a(72668),Y=a(57642),X=a(90766),ee=a(94608),te=a(13877);const ae=({objects:e,objectsWithNames:t})=>{const a=e||[],l=(0,K.useDispatch)(),[s,i]=(0,r.useState)(!1),[o,c]=(0,r.useState)([]),[d,m]=(0,r.useState)([]),[u,p]=(0,r.useState)(!1),g=(0,K.useSelector)((({filters:e})=>e.workloadsObjectsListState)),h=Math.floor(g.offset/g.limit)+1,b=g.limit,E=e=>l((0,Q.u2)(e)),f=d.length>0,y=t,_=!u,v={showDeleteButton:s,deleteTitle:"Reset filters",filters:(()=>{const e={...g};return delete e.sortIndex,delete e.sortDirection,(0,ee.lM)(e,{label:"Object ID",type:"text",title:"object ID",urlParam:"object_id"},{label:"Object name",type:"text",title:"object name",urlParam:"display_name"})})(),onDelete:(e,t,a)=>{a?(0,Q.aw)(g,Q.kG,E):t.map((e=>{const t={[e.urlParam]:Array.isArray(g[e.urlParam])?g[e.urlParam].filter((t=>String(t)!==String(e.chips[0].value))):""};var a;t[e.urlParam].length>0?E({...g,...t}):(a=e.urlParam,(0,Y.oo)(g,E,a))}))}};(0,r.useEffect)((()=>{c(((e,t)=>e.filter((e=>(0,ee.Q$)(e,t))))(a,g))}),[a,g]),(0,r.useEffect)((()=>{m(o.slice(b*(h-1),b*(h-1)+b)),i((0,ee.wW)(g)),p(!0)}),[o,g.limit,g.offset]);const k=(e,t)=>{const a=t*g.limit-g.limit;E({...g,offset:a})},w=(e,t)=>{t!==g.limit&&E({...g,limit:t,offset:0})};return n().createElement("div",{id:"objects-list-table"},n().createElement(C.Z,{pagination:{page:h,perPage:b,onSetPage:k,onPerPageSelect:w,isCompact:!0,ouiaId:"pager",itemCount:o.length},filterConfig:{items:(e=>e?[{label:"Object name",type:"text",filterValues:{key:"display_name",onChange:(e,t)=>E({...g,offset:0,display_name:t}),value:g.display_name,placeholder:"Filter by name"}}]:[{label:"Object ID",type:"text",filterValues:{key:"object_id",onChange:(e,t)=>E({...g,offset:0,object_id:t}),value:g.object_id,placeholder:"Filter by Object ID"}}])(y)},activeFiltersConfig:v}),_?n().createElement(j.Z,null):f&&!y?n().createElement("div",null,n().createElement(B.i,{"aria-label":"Cell widths",variant:"compact"},n().createElement(V.h,null,n().createElement(U.Tr,null,n().createElement(Z.Th,{width:60},I.VM.object),n().createElement(Z.Th,{width:30},I.VM.kind))),n().createElement($.p,null,d?.map(((e,t)=>n().createElement(U.Tr,{key:t},n().createElement(z.Td,{dataLabel:I.VM.object},e.uid),n().createElement(z.Td,{dataLabel:I.VM.kind},e.kind)))))),d.length>0?n().createElement(X.Pagination,{ouiaId:"pager",itemCount:o.length,page:h,perPage:b,onSetPage:k,onPerPageSelect:w,onPageInput:k,widgetId:"pagination-options-menu-bottom",variant:te.aM.bottom}):n().createElement(X.Pagination,{itemCount:0,perPage:!0,page:!0,onSetPage:!0,onPerPageSelect:!0,isDisabled:!0})):f&&y?n().createElement("div",null,n().createElement(B.i,{"aria-label":"Cell widths",variant:"compact"},n().createElement(V.h,null,n().createElement(U.Tr,null,n().createElement(Z.Th,{width:60},I.VM.display_name),n().createElement(Z.Th,{width:30},I.VM.kind))),n().createElement($.p,null,d?.map(((e,t)=>n().createElement(U.Tr,{key:t},n().createElement(z.Td,{dataLabel:I.VM.display_name},e.display_name),n().createElement(z.Td,{dataLabel:I.VM.kind},e.kind)))))),d.length>0?n().createElement(X.Pagination,{ouiaId:"pager",itemCount:o.length,page:h,perPage:b,onSetPage:k,onPerPageSelect:w,onPageInput:k,widgetId:"pagination-options-menu-bottom",variant:te.aM.bottom}):n().createElement(X.Pagination,{itemCount:0,perPage:!0,page:!0,onSetPage:!0,onPerPageSelect:!0,isDisabled:!0})):n().createElement(P.Ke,null))};ae.propTypes={objects:b().arrayOf(b().shape({kind:b().string,uid:b().string})),objectsWithNames:b().arrayOf(b().shape({kind:b().string,uid:b().string,display_name:b().string}))};const re=({isModalOpen:e,setIsModalOpen:t,objects:a,objectsWithNames:r})=>{const l=(0,K.useDispatch)(),s=(0,K.useSelector)((({filters:e})=>e.workloadsObjectsListState)),i=e=>l((0,Q.u2)(e));return n().createElement(J.Modal,{isOpen:e,onClose:()=>(t(!1),void(0,Q.aw)(s,Q.kG,i)),variant:"medium",title:"Objects"},n().createElement(ae,{objects:a,objectsWithNames:r}))},ne=re;re.propTypes={isModalOpen:b().bool,setIsModalOpen:b().func,objects:b().arrayOf(b().shape({kind:b().string,uid:b().string,display_name:b().string})),objectsNamesArePresent:b().arrayOf(b().shape({kind:b().string,uid:b().string,display_name:b().string})),objectsWithNames:b().bool};const le=()=>{const e='oc get namespace -o jsonpath=\'{range .items[*]}{.metadata.name}{"\\t"}{.metadata.uid}{"\\n"}{end}\'',t='oc -n <namespace> get <resourceKind> -o jsonpath=\'{range .items[*]}{.metadata.name}{"\\t"}{.metadata.uid}{"\\n"}{end}\'',[a,r]=n().useState(!1);return n().createElement(n().Fragment,null,n().createElement(A.CodeBlock,{actions:(l=e.concat("\n",t),n().createElement(n().Fragment,null,n().createElement(A.CodeBlockAction,null,n().createElement(W.ClipboardCopyButton,{id:"basic-copy-button",textId:"code-content","aria-label":"Copy to clipboard",onClick:e=>(((e,t)=>{navigator.clipboard.writeText(t.toString())})(0,l),void r(!0)),exitDelay:a?1500:600,maxWidth:"110px",variant:"plain",onTooltipHidden:()=>r(!1)},a?"Successfully copied to clipboard!":"Copy to clipboard")))),className:"pf-v5-u-mt-md"},n().createElement(A.CodeBlockCode,null,e),n().createElement(A.CodeBlockCode,null,t)));var l},se=({more_info:e,resolution:t,objects:a,namespaceName:l,reason:s,extra_data:i})=>{const o=Array.isArray(a)&&a.length>0,c=e.length>0,[d,u]=(0,r.useState)(!1),p=a?.filter((e=>e.display_name));return n().createElement(M.Card,{className:"ins-c-report-details",style:{boxShadow:"none"}},n().createElement(M.CardBody,null,n().createElement(ne,{isModalOpen:d,setIsModalOpen:u,objects:a,objectsWithNames:!!p}),n().createElement(m.Stack,{className:"ins-c-report-details__cards-stack","widget-type":"InsightsRulesCard",hasGutter:!0},n().createElement(m.StackItem,null,n().createElement(M.Card,{isCompact:!0,isPlain:!0},n().createElement(M.CardHeader,null,n().createElement(F.Icon,null,n().createElement(O(),{className:"ins-c-report-details__icon"})),n().createElement("strong",null,"Detected issues")),n().createElement(M.CardBody,null,n().createElement(G(),{template:s,definitions:i})))),o&&n().createElement(n().Fragment,null,n().createElement(q.Divider,null),n().createElement(m.StackItem,null,n().createElement(M.Card,{isCompact:!0,isPlain:!0},n().createElement(M.CardHeader,null,n().createElement(F.Icon,null,n().createElement(T(),{className:"ins-c-report-details__icon"})),n().createElement("strong",null,"Steps to resolve")),n().createElement(M.CardBody,null,n().createElement(G(),{template:t,definitions:i}),n().createElement(B.i,{borders:"compactBorderless","aria-label":"Objects table"},n().createElement(V.h,null,n().createElement(U.Tr,null,n().createElement(Z.Th,{modifier:"fitContent"},I.VM.object),n().createElement(Z.Th,{modifier:"fitContent"},"Object name"),n().createElement(Z.Th,{modifier:"fitContent"},I.VM.kind))),n().createElement($.p,null,a.slice(0,3).map(((e,t)=>n().createElement(U.Tr,{key:t},n().createElement(z.Td,{dataLabel:I.VM.object},e.uid),n().createElement(z.Td,{dataLabel:I.VM.object},e.display_name),n().createElement(z.Td,{dataLabel:I.VM.kind},e.kind)))))),n().createElement(N.Button,{variant:"link",isInline:!0,onClick:()=>u(!0)},"View all objects"))))),!l&&n().createElement(n().Fragment,null,n().createElement(M.CardHeader,null,n().createElement("strong",null,"Note: "),"Red Hat avoids gathering and processing namespace and resource names as these may reveal confidential information. Namespaces and resources are identified by their UIDs instead. You can use in-cluster commands like the ones below to translate UIDs of affected resources to their names."),n().createElement(M.CardBody,null,n().createElement(le,null))),c&&n().createElement(n().Fragment,null,n().createElement(q.Divider,null),n().createElement(m.StackItem,null,n().createElement(M.Card,{isCompact:!0,isPlain:!0},n().createElement(M.CardHeader,null,n().createElement(F.Icon,null,n().createElement(D(),{className:"ins-c-report-details__icon"})),n().createElement("strong",null,"Additional info")),n().createElement(M.CardBody,null,n().createElement(G(),{template:e,definitions:i}))))))))},ie=se;se.propTypes={more_info:b().string.isRequired,resolution:b().string.isRequired,objects:b().arrayOf({kind:b().string,display_name:b().string,uid:b().string}),extra_data:b().shape({check_name:b().string.isRequired,check_url:b().string.isRequired}),namespaceName:b().string.isRequired,reason:b().string.isRequired};var oe=a(56800);const ce=({workload:e,namespaceName:t})=>{const a=(0,K.useDispatch)(),{isError:l,isUninitialized:s,isFetching:i,isSuccess:o,data:c,error:d}=e,m=c?.recommendations||[],u=l,p=o,h=p&&0===m.length,[b,E]=(0,r.useState)(!1),[f,y]=(0,r.useState)([]),[x,O]=(0,r.useState)(!0),[L,D]=(0,r.useState)([]),[R,T]=(0,r.useState)(!1),[N,M]=(0,r.useState)(!1),[W,A]=(0,r.useState)(!0),q=s||i||!R,{search:F}=(0,oe.useLocation)(),B=(0,K.useSelector)((({filters:e})=>e.workloadsRecsListState)),V=0===f.length,U=e=>a((0,Q.cH)(e));(0,r.useEffect)((()=>{y(z(m,B))}),[c,B]),(0,r.useEffect)((()=>{D($(f,B.sortIndex,B.sortDirection)),M((0,ee.wW)(B)),T(!0)}),[f]);const Z=(0,I.PL)(B,((e,t)=>{A(!1),(0,ee.sI)(B,U,e,t)}));(0,r.useEffect)((()=>{if(F&&x){const e=(0,Y.yG)(F);if(e.sort){const t=(0,Y.Lg)(e.sort);e.sortIndex=I.Db.indexOf(t.description),e.sortDirection=t.direction}e.total_risk&&!Array.isArray(e.total_risk)&&(e.total_risk=[`${e.total_risk}`]),U({...B,...e})}O(!1)}),[]),(0,r.useEffect)((()=>{x||(0,Y.aM)(B,I.Db)}),[B,x]);const $=(e,t,a)=>{const r=(0,ee.ke)(t,a,e);return(0,ee.l8)(r,W)},z=(e,a)=>{T(!1);const r=(0,ee.wW)(a),l=new Set(L.filter((e=>e?.isOpen)).map((e=>e?.rule?.details)));return e.filter((e=>!r||(0,ee.y4)(e,a))).map(((e,a)=>[{rule:e,isOpen:b||l?.has(e?.details),cells:[{title:e.details},{title:n().createElement("div",{key:a},n().createElement(S.Z,{value:e.total_risk,rest:{isCompact:!0}}))},{title:e.objects.length},{title:n().createElement("div",{key:a},n().createElement(g.Z,{date:e.modified,type:"relative"}))}]},{cells:[{title:n().createElement(ie,{more_info:e.more_info,resolution:e.resolution,objects:e.objects,namespaceName:t,reason:e.reason,extra_data:e.extra_data})}],fullWidth:!0}]))},H={showDeleteButton:N,deleteTitle:"Reset filters",filters:(()=>{const e={...B};return delete e.sortIndex,delete e.sortDirection,(0,ee.lM)(e,I.Oq)})(),onDelete:(e,t,a)=>{a?(0,Q.aw)(B,Q.J2,U):t.map((e=>{const t={[e.urlParam]:Array.isArray(B[e.urlParam])?B[e.urlParam].filter((t=>String(t)!==String(e.chips[0].value))):""};var a;t[e.urlParam].length>0?U({...B,...t}):(a=e.urlParam,(0,ee.p5)(B,U,a))}))}};return n().createElement("div",{id:"workload-recs-list-table"},n().createElement(C.Z,{filterConfig:{items:Z,isDisabled:q||u||h||0===m.length},pagination:n().createElement("span",{className:"pf-u-font-weight-bold"},1===f?.length?`${f.length} Recommendation`:`${f.length} Recommendations`),activeFiltersConfig:q||u||h||0===m.length?void 0:H}),n().createElement(v.i,{"aria-label":"Workload recommendations table",ouiaId:"workload-recommendations",cells:I.x2,ouiaSafe:!q,onCollapse:(e,t,a)=>{void 0===t?(E(a),D(L.map((e=>({...e,...Object.hasOwn(e,"parent")?null:{isOpen:a}}))))):D(L.map(((e,r)=>r===t?{...e,isOpen:a}:e)))},rows:u||q||h||V?[{fullWidth:!0,cells:[{props:{colSpan:I.x2.length+1},title:u?404===d?.status?n().createElement(P.So,null):n().createElement(P.fe,null):q?n().createElement(j.Z,null):V?n().createElement(P.Be,null):n().createElement(P.So,null)}]}]:p?L:n().createElement(P.Te,null),variant:_.B.compact,isStickyHeader:!0,canCollapseAll:!0,sortBy:{index:B.sortIndex,direction:B.sortDirection},onSort:(e,t,a)=>{T(!1),A(!1),U({...B,sortIndex:t,sortDirection:a})}},n().createElement(k.x,null),n().createElement(w.R,null)))},de=ce;ce.propTypes={workload:b().shape({isUninitialized:b().bool.isRequired,isFetching:b().bool.isRequired,isError:b().bool.isRequired,isSuccess:b().bool.isRequired,error:b().object,data:b().shape({namespace:b().shape({uuid:b().string,name:b().string}),cluster:b().shape({uuid:b().string,display_name:b().string}),status:b().string,recommendations:b().arrayOf(b().shape({check:b().string,description:b().string,objects:b().arrayOf(b().shape({kind:b().string,uid:b().string})),remediation:b().string}))})}),namespaceName:b().string.isRequired};const me=({workload:e,namespaceId:t,clusterId:a})=>{const r=`${e?.data?.cluster?.display_name||a} | ${e?.data?.namespace?.name||t}`;return n().createElement(n().Fragment,null,n().createElement(l.Z,{className:"pf-m-light ins-inventory-detail"},n().createElement(s.Flex,{direction:{default:"column"}},n().createElement(s.FlexItem,null,n().createElement(c.Z,{current:r,workloads:"true"}),n().createElement(y,{workload:e,namespaceId:t,clusterId:a})))),n().createElement(i.PageSection,null,n().createElement(o.Title,{className:"pf-u-mb-lg",headingLevel:"h3",size:"2xl"},"Recommendations"),n().createElement(de,{workload:e,namespaceName:e?.data?.namespace?.name})))};me.propTypes={clusterId:b().string.isRequired,namespaceId:b().string.isRequired,workload:b().shape({isUninitialized:b().bool.isRequired,isFetching:b().bool.isRequired,data:b().shape({namespace:b().shape({uuid:b().string,name:b().string}),cluster:b().shape({uuid:b().string,display_name:b().string}),status:b().string})})};var ue=a(11042),pe=a(55140);const ge=()=>{const e=(0,pe.Z)(),{namespaceId:t,clusterId:a}=(0,oe.useParams)(),l=(0,ue.k0)({namespaceId:t,clusterId:a});return(0,r.useEffect)((()=>{l.refetch()}),[t,a]),(0,r.useEffect)((()=>{const r="ok"===l?.data?.status?`${l?.data?.cluster.display_name} | ${l?.data?.namespace.name} - Workloads`:`${a} | ${t} - Workloads`;e.updateDocumentTitle(`${r} - OCP Advisor | Red Hat Insights`)}),[l,t,a]),n().createElement(me,{workload:l,namespaceId:t,clusterId:a})}},21888:(e,t,a)=>{"use strict";a.d(t,{F:()=>s});var r=a(28416),n=a.n(r),l=a(24561);const s=()=>n().createElement(l.ZP,{height:20},n().createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"300",height:"20"}))},94608:(e,t,a)=>{"use strict";a.d(t,{Q$:()=>_,Vs:()=>m,ke:()=>f,l8:()=>y,lM:()=>b,mR:()=>u,og:()=>d,p5:()=>v,sI:()=>k,wW:()=>p,y4:()=>w});var r=a(48585),n=a(14176),l=a.n(n),s=a(50361),i=a.n(s),o=a(41609),c=a.n(o);const d=[{value:"critical",label:"Critical",iconColor:"var(--pf-global--danger-color--100)",textColor:"var(--pf-global--danger-color--100)",hasIcon:!0,indexNumber:4},{value:"important",label:"Important",iconColor:"var(--pf-global--palette--orange-300)",textColor:"var(--pf-global--palette--orange-400)",hasIcon:!0,indexNumber:3},{value:"moderate",label:"Moderate",iconColor:"var(--pf-global--warning-color--100)",textColor:"var(--pf-global--warning-color--200)",hasIcon:!0,indexNumber:2},{value:"low",label:"Low",iconColor:"var(--pf-global--Color--200)",textColor:"var(--pf-global--default-color--300)",hasIcon:!0,indexNumber:1}],m=(e,t)=>{const a={1:"low",2:"moderate",3:"important",4:"critical"};let r={};if("general"===t||"label"===t)for(const t in e)t in a&&(r[a[t]]=e[t]);else r=a[e];return r},u=(e,t)=>{for(const a of t)if(e[a]>0)return!0},p=e=>{const t=i()(e);return delete t.sortIndex,delete t.sortDirection,delete t.offset,delete t.limit,delete t.sort,!!Object.values(t).filter((e=>!c()(e))).length},g=e=>e?.charAt(0).toUpperCase()+e?.slice(1),h=(e,t)=>{if(e.values){const a=e.values.find((e=>e.value===String(t)));return a?{name:a.label||a.text,value:t}:{name:t,value:t}}return{name:t,value:t}},b=(e,t)=>Object.entries(e).reduce(((e,[a,r])=>{if(t[a]){const n=t[a];if(Array.isArray(r)&&r.length>0||"string"==typeof r&&""!==r.trim()){const t=Array.isArray(r)?r.map((e=>h(n,e))):[h(n,r)];e.push({category:g(n.label),chips:t,urlParam:n.urlParam})}}else"display_name"===a&&""!==r.trim()?e.push({category:g(a.replace("display_name","Name")),chips:[{name:r,value:r}],urlParam:"display_name"}):"description"!==a&&"object_id"!==a||""===r.trim()||e.push({category:g(a.replace("_"," ")),chips:[{name:r,value:r}],urlParam:a});return e}),[]),E=(e,t)=>{const a=t[0].rule;switch(e){case 1:return a.details;case 2:return a.total_risk;case 3:return a.objects.length;case 4:return a.modified}},f=(e,t,a)=>e>=1?[...a]?.sort(((a,n)=>{const l=t===r.B.asc?1:-1;return E(e,a)>E(e,n)?l:E(e,n)>E(e,a)?-l:0})):[...a],y=(e,t)=>e.flatMap(((e,a)=>{const r=[...e];return t&&0===a&&(e[0].isOpen=!0),e[1].parent=2*a,r})),_=(e,t)=>{const a=l()(i()(t),c());return Object.entries(a).every((([t,a])=>{switch(t){case"display_name":return a&&e?.display_name?.toLowerCase().includes(a.toLowerCase());case"object_id":return a&&e?.uid?.toLowerCase().includes(a.toLowerCase());default:return!0}}))},v=(e,t,a)=>{const{[a]:r,...n}={...e};t({...n,..."description"===a?{description:""}:"total_risk"===a?{total_risk:[]}:"object_id"===a?{object_id:""}:"object_name"===a?{object_name:""}:{}})},k=(e,t,a,r)=>r.length>0?t({...e,[a]:r}):v(e,t,a),w=(e,t)=>{const a=l()(i()(t),c());return Object.entries(a).every((([t,a])=>{switch(t){case"description":return a&&e.details.toLowerCase().includes(a.toLowerCase());case"object_id":return a&&e.objects.some((e=>e.uid.toLowerCase().includes(a.toLowerCase())));case"total_risk":return a&&a.includes(String(e.total_risk));case"object_name":return a&&e.objects.some((e=>e.display_name.toLowerCase().includes(a.toLowerCase())));default:return!0}}))}},65088:()=>{},58392:()=>{},32857:()=>{},28992:()=>{},30187:()=>{},90479:()=>{},21626:()=>{},8572:()=>{},98379:()=>{},46928:()=>{},91993:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},87234:()=>{},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Workload.d94bde8a8e1e478dae9cf158c434f813.js.map