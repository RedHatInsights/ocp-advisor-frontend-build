(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[2339],{3522:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var r=a(28416),n=a.n(r),s=a(45697),l=a.n(s),i=a(86896),c=a(56800),o=a(25377),d=a(2550);const u=({current:e,workloads:t})=>{const a=(0,i.Z)(),r=(0,c.useLocation)().pathname.split("/");return n().createElement("div",null,n().createElement(o.Breadcrumb,{ouiaId:"detail","data-testid":"breadcrumb-item"},n().createElement(o.BreadcrumbItem,{className:"breadcrumb-item"},n().createElement(c.Link,{to:t?"../..":"..",relative:"path"},`${a.formatMessage(d.Z.insightsHeader)} ${r[4]}`)),n().createElement(o.BreadcrumbItem,{className:"breadcrumb-item",isActive:!0},e)))};u.propTypes={current:l().string,workloads:l().boolean};const m=u},57642:(e,t,a)=>{"use strict";a.d(t,{Lg:()=>g,Lv:()=>k,U1:()=>y,WL:()=>f,_:()=>E,_F:()=>d,aM:()=>h,im:()=>u,mt:()=>m,oo:()=>b,yG:()=>p});var r=a(48403),n=a.n(r),s=a(50361),l=a.n(s),i=(a(28416),a(81249)),c=a(81563),o=a(94608);const d=(e,t)=>Object.entries(t).every((([t,a])=>{switch(t){case"text":return e.description.toLowerCase().includes(a.toLowerCase());case c.W2.total_risk.urlParam:return a.includes(String(e.total_risk));case c.W2.category.urlParam:return e.tags.find((e=>a.includes(String(c.kT[e]))));case c.W2.impact.urlParam:return a.includes(String(e.impact));case c.W2.impacting.urlParam:return!(a.length>0)||a.some((t=>"true"===t?e.impacted_clusters_count>0:"false"===t?0===e.impacted_clusters_count:void 0));case c.W2.likelihood.urlParam:return a.includes(String(e.likelihood));case c.W2.rule_status.urlParam:return"all"===a||"disabled"===a&&e.disabled||"enabled"===a&&!e.disabled;case c.W2.res_risk.urlParam:return a.includes(String(e.resolution_risk));default:return!0}})),u=(e,t)=>Object.entries(t).every((([t,a])=>{switch(t){case"text":return(e.cluster_name||e.cluster_id).toLowerCase().includes(a.toLowerCase());case c.RT.hits.urlParam:return 0===a.length&&parseInt(e.total_hit_count)>0||a.includes("all")||a.some((t=>e.hits_by_total_risk[t]>0));case"version":return 0===a.length||a.includes(f(e.cluster_version));default:return!0}})),m=(e,t)=>{const a=l()(e);return delete a.sortIndex,delete a.sortDirection,delete a.sort,delete a.offset,delete a.limit,a?.hits&&0===a.hits.length&&delete a.hits,((e,t)=>Object.entries(e||{}).reduce(((e,a)=>{const[r,s]=a;if(t[r]){const a=t[r],l=Array.isArray(s)?s.map((e=>{const t=a.values.find((t=>t.value===String(e)));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:a.values.find((e=>e.value===String(s))).label,value:s}];return[...e,{category:n()(a.title),chips:l,urlParam:a.urlParam}]}return"text"===r?[...e,...s.length>0?[{category:"Name",chips:[{name:s,value:s}],urlParam:r}]:[]]:"version"===r?[...e,...s.length>0?[{category:"Version",chips:s.map((e=>({name:e,value:e}))),urlParam:r}]:[]]:"namespace_name"===r?[...e,...s.length>0?[{category:"Namespace name",chips:[{name:s,value:s}],urlParam:r}]:[]]:"cluster_name"===r?[...e,...s.length>0?[{category:"Cluster name",chips:[{name:s,value:s}],urlParam:r}]:[]]:void 0}),[]))(a,t)},p=e=>{const t=new URLSearchParams(e);return Array.from(t).reduce(((e,[t,a])=>({...e,[t]:["text","first","rule_status","sort","cluster_name","namespace_name","description","object_id"].includes(t)?a:"true"===a||"false"===a?JSON.parse(a):a.split(",")})),{})},g=e=>({name:e.substring(e.startsWith("-")?1:0),direction:e.startsWith("-")?"desc":"asc",description:e.substring(e.startsWith("-")?1:0),object_id:e.substring(e.startsWith("-")?1:0)}),h=(e={},t)=>{const a=new URL(window.location.origin+window.location.pathname);var r,n,s;a.searchParams.set("sort",(r=e.sortIndex,n=t,s=e.sortDirection,["desc","asc"].includes(s)||console.error("Invalid sort parameters (is not asc nor desc)"),`${"asc"===s?"":"-"}${n[r]}`)),Object.entries(e).forEach((([e,t])=>"sortIndex"!==e&&"sortDirection"!==e&&"sort"!==e&&""!==t&&!(Array.isArray(t)&&0===t.length)&&a.searchParams.set(e,t))),window.history.replaceState(null,null,a.href)},E=(e,t,a)=>a*(0,i.compare)(e,t),f=e=>(0,i.coerce)(void 0!==e&&(0,i.valid)((0,i.coerce)(e))?e:"0.0.0").version,b=(e,t,a)=>{const{[a]:r,...n}={...e,offset:0};t({...n,..."text"===a?{text:""}:"hits"===a?{hits:[]}:"version"===a?{version:[]}:"object_id"===a?{object_id:""}:{}})},k=(e,t,a,r)=>r.length>0?t({...e,offset:0,[a]:r}):b(e,t,a),y=(e,t)=>{const a=(0,o.Vs)(e.metadata.hits_by_severity,"general");return Object.entries(t).every((([r,n])=>{switch(r){case"cluster_name":return(e.cluster.display_name||e.cluster.uuid).toLowerCase().includes(n.toLowerCase());case"namespace_name":return(e.namespace.name||e.namespace.uuid).toLowerCase().includes(n.toLowerCase());case"severity":return 0===n.length||(0,o.mR)(a,t.severity);default:return!0}}))}},83920:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(28416),n=a.n(r),s=a(58009),l=a(24561);const i=()=>n().createElement(s.Card,{ouiaId:"loading-skeleton"},n().createElement(s.CardBody,null,n().createElement(l.aV,null)))},6554:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ge});var r=a(28416),n=a.n(r),s=a(63456),l=a(37007),i=a(83321),c=a(77697),o=a(3522),d=a(46847),u=a(5311),m=a(32819),p=a(21888),g=a(62410),h=a(45697),E=a.n(h);const f=({workloadData:e,namespaceId:t,clusterId:a})=>{const{isUninitialized:r,isFetching:s,data:l}=e;return n().createElement(d.Grid,{id:"workload-header",md:12,hasGutter:!0},n().createElement(d.GridItem,{span:8},n().createElement(c.Title,{size:"2xl",headingLevel:"h1",id:"workloads-header-title",ouiaId:"workloads-name"},r||s?n().createElement(n().Fragment,null,n().createElement(m.Z,{size:"sm"}),n().createElement(m.Z,{size:"sm"})):n().createElement(n().Fragment,null,n().createElement("p",null,l?.cluster?.display_name||a),n().createElement("p",null,l?.namespace?.name||t)))),n().createElement(d.GridItem,null,n().createElement(u.Stack,null,n().createElement(u.StackItem,{id:"workload-header-uuid"},n().createElement("span",null,"Cluster UUID:")," ",n().createElement("span",null,a)," ",n().createElement("span",null,"Namespace UUID:")," ",n().createElement("span",null,t)),n().createElement(u.StackItem,{id:"workload-header-last-seen"},n().createElement("span",null,"Last seen: "),n().createElement("span",null,r||s?n().createElement(p.F,null):l?.metadata?.last_checked_at?n().createElement(g.Z,{date:l.metadata.last_checked_at,type:"exact"}):n().createElement(n().Fragment,null,"Unknown"))))))};f.propTypes={clusterId:E().string.isRequired,namespaceId:E().string.isRequired,workloadData:E().shape({isUninitialized:E().bool.isRequired,isFetching:E().bool.isRequired,data:E().shape({metadata:E().shape({last_checked_at:E().string}),namespace:E().shape({uuid:E().string,name:E().string}),cluster:E().shape({uuid:E().string,display_name:E().string}),status:E().string})})};const b=({workload:e,namespaceId:t,clusterId:a})=>n().createElement(f,{workloadData:e,namespaceId:t,clusterId:a});b.propTypes={clusterId:E().string.isRequired,namespaceId:E().string.isRequired,workload:E().shape({isUninitialized:E().bool.isRequired,isFetching:E().bool.isRequired,data:E().shape({metadata:E().shape({last_checked_at:E().string}),namespace:E().shape({uuid:E().string,name:E().string}),cluster:E().shape({uuid:E().string,display_name:E().string}),status:E().string})})};const k=b;var y=a(75863),v=a(35981),_=a(49004),w=a(58027),I=a(77357),C=a(81563),S=a(83920),j=a(91306),P=a(90693),x=a(46764),D=a.n(x),O=a(54711),R=a.n(O),L=a(59649),T=a.n(L),A=a(84018),q=a(58009),M=a(91742),B=a(46819),F=a(87986),N=a(46166),W=a(5697),U=a(51630),Z=a(8128),$=a(15173),V=a(75521),z=a(26090),H=a(55471),G=a.n(H),J=a(65638),K=a(86706),Q=a(72668),Y=a(57642),X=a(31630),ee=a(94608),te=a(13877);const ae=({objects:e})=>{const t=e||[],a=(0,K.useDispatch)(),[s,l]=(0,r.useState)(!1),[i,c]=(0,r.useState)([]),[o,d]=(0,r.useState)([]),[u,m]=(0,r.useState)(!1),p=(0,K.useSelector)((({filters:e})=>e.workloadsObjectsListState)),g=Math.floor(p.offset/p.limit)+1,h=p.limit,E=e=>a((0,Q.u2)(e)),f=o.length>0,b=!u,k=[{label:"Object ID",type:"text",filterValues:{key:"object_id",onChange:(e,t)=>E({...p,offset:0,object_id:t}),value:p.object_id,placeholder:"Filter by Object ID"}}],y={showDeleteButton:s,deleteTitle:"Reset filters",filters:(()=>{const e={...p};return delete e.sortIndex,delete e.sortDirection,(0,ee.lM)(e,{label:"Object ID",type:"text",title:"object ID",urlParam:"object_id"})})(),onDelete:(e,t,a)=>{a?(0,Q.aw)(p,Q.kG,E):t.map((e=>{const t={[e.urlParam]:Array.isArray(p[e.urlParam])?p[e.urlParam].filter((t=>String(t)!==String(e.chips[0].value))):""};var a;t[e.urlParam].length>0?E({...p,...t}):(a=e.urlParam,(0,Y.oo)(p,E,a))}))}};(0,r.useEffect)((()=>{c(((e,t)=>e.filter((e=>(0,ee.Q$)(e,t))))(t,p))}),[t,p]),(0,r.useEffect)((()=>{d(i.slice(h*(g-1),h*(g-1)+h)),l((0,ee.wW)(p)),m(!0)}),[i,p.limit,p.offset]);const v=(e,t)=>{const a=t*p.limit-p.limit;E({...p,offset:a})},_=(e,t)=>{t!==p.limit&&E({...p,limit:t,offset:0})};return n().createElement("div",{id:"objects-list-table"},n().createElement(I.Z,{pagination:{page:g,perPage:h,onSetPage:v,onPerPageSelect:_,isCompact:!0,ouiaId:"pager",itemCount:i.length},filterConfig:{items:k},activeFiltersConfig:y}),b?n().createElement(S.Z,null):f?n().createElement("div",null,n().createElement(W.i,{"aria-label":"Cell widths",variant:"compact"},n().createElement(U.h,null,n().createElement(Z.Tr,null,n().createElement($.Th,{width:60},C.VM.object),n().createElement($.Th,{width:30},C.VM.kind))),n().createElement(V.p,null,o?.map(((e,t)=>n().createElement(Z.Tr,{key:t},n().createElement(z.Td,{dataLabel:C.VM.object},e.uid),n().createElement(z.Td,{dataLabel:C.VM.kind},e.kind)))))),o.length>0?n().createElement(X.Pagination,{ouiaId:"pager",itemCount:i.length,page:g,perPage:h,onSetPage:v,onPerPageSelect:_,onPageInput:v,widgetId:"pagination-options-menu-bottom",variant:te.aM.bottom}):n().createElement(X.Pagination,{itemCount:0,perPage:!0,page:!0,onSetPage:!0,onPerPageSelect:!0,isDisabled:!0})):n().createElement(j.Ke,null))};ae.propTypes={objects:E().arrayOf(E().shape({kind:E().string,uid:E().string}))};const re=({isModalOpen:e,setIsModalOpen:t,objects:a})=>{const r=(0,K.useDispatch)(),s=(0,K.useSelector)((({filters:e})=>e.workloadsObjectsListState)),l=e=>r((0,Q.u2)(e));return n().createElement(J.Modal,{isOpen:e,onClose:()=>(t(!1),void(0,Q.aw)(s,Q.kG,l)),variant:"medium",title:"Objects"},n().createElement(ae,{objects:a}))},ne=re;re.propTypes={isModalOpen:E().bool,setIsModalOpen:E().func,objects:E().arrayOf(E().shape({kind:E().string,uid:E().string}))};const se=()=>{const e='oc get namespace -o jsonpath=\'{range .items[*]}{.metadata.name}{"\\t"}{.metadata.uid}{"\\n"}{end}\'',t='oc -n <namespace> get <resourceKind> -o jsonpath=\'{range .items[*]}{.metadata.name}{"\\t"}{.metadata.uid}{"\\n"}{end}\'',[a,r]=n().useState(!1);return n().createElement(n().Fragment,null,n().createElement(B.CodeBlock,{actions:(s=e.concat("\n",t),n().createElement(n().Fragment,null,n().createElement(B.CodeBlockAction,null,n().createElement(M.ClipboardCopyButton,{id:"basic-copy-button",textId:"code-content","aria-label":"Copy to clipboard",onClick:e=>(((e,t)=>{navigator.clipboard.writeText(t.toString())})(0,s),void r(!0)),exitDelay:a?1500:600,maxWidth:"110px",variant:"plain",onTooltipHidden:()=>r(!1)},a?"Successfully copied to clipboard!":"Copy to clipboard")))),className:"pf-v5-u-mt-md"},n().createElement(B.CodeBlockCode,null,e),n().createElement(B.CodeBlockCode,null,t)));var s},le=({more_info:e,resolution:t,objects:a,namespaceName:s,reason:l,extra_data:i})=>{const c=Array.isArray(a)&&a.length>0,o=e.length>0,[d,m]=(0,r.useState)(!1);return n().createElement(q.Card,{className:"ins-c-report-details",style:{boxShadow:"none"}},n().createElement(q.CardBody,null,n().createElement(ne,{isModalOpen:d,setIsModalOpen:m,objects:a}),n().createElement(u.Stack,{className:"ins-c-report-details__cards-stack","widget-type":"InsightsRulesCard",hasGutter:!0},n().createElement(u.StackItem,null,n().createElement(q.Card,{isCompact:!0,isPlain:!0},n().createElement(q.CardHeader,null,n().createElement(N.Icon,null,n().createElement(D(),{className:"ins-c-report-details__icon"})),n().createElement("strong",null,"Detected issues")),n().createElement(q.CardBody,null,n().createElement(G(),{template:l,definitions:i})))),c&&n().createElement(n().Fragment,null,n().createElement(F.Divider,null),n().createElement(u.StackItem,null,n().createElement(q.Card,{isCompact:!0,isPlain:!0},n().createElement(q.CardHeader,null,n().createElement(N.Icon,null,n().createElement(T(),{className:"ins-c-report-details__icon"})),n().createElement("strong",null,"Steps to resolve")),n().createElement(q.CardBody,null,n().createElement(G(),{template:t,definitions:i}),n().createElement(W.i,{borders:"compactBorderless","aria-label":"Objects table"},n().createElement(U.h,null,n().createElement(Z.Tr,null,n().createElement($.Th,{modifier:"fitContent"},C.VM.object),n().createElement($.Th,{modifier:"fitContent"},C.VM.kind))),n().createElement(V.p,null,a.slice(0,3).map(((e,t)=>n().createElement(Z.Tr,{key:t},n().createElement(z.Td,{dataLabel:C.VM.object},e.uid),n().createElement(z.Td,{dataLabel:C.VM.kind},e.kind)))))),n().createElement(A.Button,{variant:"link",isInline:!0,onClick:()=>m(!0)},"View all objects"))))),!s&&n().createElement(n().Fragment,null,n().createElement(q.CardHeader,null,n().createElement("strong",null,"Note: "),"Red Hat avoids gathering and processing namespace and resource names as these may reveal confidential information. Namespaces and resources are identified by their UIDs instead. You can use in-cluster commands like the ones below to translate UIDs of affected resources to their names."),n().createElement(q.CardBody,null,n().createElement(se,null))),o&&n().createElement(n().Fragment,null,n().createElement(F.Divider,null),n().createElement(u.StackItem,null,n().createElement(q.Card,{isCompact:!0,isPlain:!0},n().createElement(q.CardHeader,null,n().createElement(N.Icon,null,n().createElement(R(),{className:"ins-c-report-details__icon"})),n().createElement("strong",null,"Additional info")),n().createElement(q.CardBody,null,n().createElement(G(),{template:e,definitions:i}))))))))},ie=le;le.propTypes={more_info:E().string.isRequired,resolution:E().string.isRequired,objects:E().arrayOf({kind:E().string,uid:E().string}),extra_data:E().shape({check_name:E().string.isRequired,check_url:E().string.isRequired}),namespaceName:E().string.isRequired,reason:E().string.isRequired};var ce=a(56800);const oe=({workload:e,namespaceName:t})=>{const a=(0,K.useDispatch)(),{isError:s,isUninitialized:l,isFetching:i,isSuccess:c,data:o,error:d}=e,u=o?.recommendations||[],m=s,p=c,h=p&&0===u.length,[E,f]=(0,r.useState)(!1),[b,k]=(0,r.useState)([]),[x,D]=(0,r.useState)(!0),[O,R]=(0,r.useState)([]),[L,T]=(0,r.useState)(!1),[A,q]=(0,r.useState)(!1),[M,B]=(0,r.useState)(!0),F=l||i||!L,{search:N}=(0,ce.useLocation)(),W=(0,K.useSelector)((({filters:e})=>e.workloadsRecsListState)),U=0===b.length,Z=e=>a((0,Q.cH)(e));(0,r.useEffect)((()=>{k(z(u,W))}),[o,W]),(0,r.useEffect)((()=>{R(V(b,W.sortIndex,W.sortDirection)),q((0,ee.wW)(W)),T(!0)}),[b]);const $=(0,C.PL)(W,((e,t)=>{B(!1),(0,ee.sI)(W,Z,e,t)}));(0,r.useEffect)((()=>{if(N&&x){const e=(0,Y.yG)(N);if(e.sort){const t=(0,Y.Lg)(e.sort);e.sortIndex=C.Db.indexOf(t.description),e.sortDirection=t.direction}e.total_risk&&!Array.isArray(e.total_risk)&&(e.total_risk=[`${e.total_risk}`]),Z({...W,...e})}D(!1)}),[]),(0,r.useEffect)((()=>{x||(0,Y.aM)(W,C.Db)}),[W,x]);const V=(e,t,a)=>{const r=(0,ee.ke)(t,a,e);return(0,ee.l8)(r,M)},z=(e,a)=>{T(!1);const r=(0,ee.wW)(a),s=new Set(O.filter((e=>e?.isOpen)).map((e=>e?.rule?.details)));return e.filter((e=>!r||(0,ee.y4)(e,a))).map(((e,a)=>[{rule:e,isOpen:E||s?.has(e?.details),cells:[{title:e.details},{title:n().createElement("div",{key:a},n().createElement(P.Z,{value:e.total_risk,rest:{isCompact:!0}}))},{title:e.objects.length},{title:n().createElement("div",{key:a},n().createElement(g.Z,{date:e.modified,type:"relative"}))}]},{cells:[{title:n().createElement(ie,{more_info:e.more_info,resolution:e.resolution,objects:e.objects,namespaceName:t,reason:e.reason,extra_data:e.extra_data})}],fullWidth:!0}]))},H={showDeleteButton:A,deleteTitle:"Reset filters",filters:(()=>{const e={...W};return delete e.sortIndex,delete e.sortDirection,(0,ee.lM)(e,C.Oq)})(),onDelete:(e,t,a)=>{a?(0,Q.aw)(W,Q.J2,Z):t.map((e=>{const t={[e.urlParam]:Array.isArray(W[e.urlParam])?W[e.urlParam].filter((t=>String(t)!==String(e.chips[0].value))):""};var a;t[e.urlParam].length>0?Z({...W,...t}):(a=e.urlParam,(0,ee.p5)(W,Z,a))}))}};return n().createElement("div",{id:"workload-recs-list-table"},n().createElement(I.Z,{filterConfig:{items:$,isDisabled:F||m||h||0===u.length},pagination:n().createElement("span",{className:"pf-u-font-weight-bold"},1===b?.length?`${b.length} Recommendation`:`${b.length} Recommendations`),activeFiltersConfig:F||m||h||0===u.length?void 0:H}),n().createElement(v.i,{"aria-label":"Workload recommendations table",ouiaId:"workload-recommendations",cells:C.x2,ouiaSafe:!F,onCollapse:(e,t,a)=>{void 0===t?(f(a),R(O.map((e=>({...e,...Object.hasOwn(e,"parent")?null:{isOpen:a}}))))):R(O.map(((e,r)=>r===t?{...e,isOpen:a}:e)))},rows:m||F||h||U?[{fullWidth:!0,cells:[{props:{colSpan:C.x2.length+1},title:m?404===d?.status?n().createElement(j.So,null):n().createElement(j.fe,null):F?n().createElement(S.Z,null):U?n().createElement(j.Be,null):n().createElement(j.So,null)}]}]:p?O:n().createElement(j.Te,null),variant:y.B.compact,isStickyHeader:!0,canCollapseAll:!0,sortBy:{index:W.sortIndex,direction:W.sortDirection},onSort:(e,t,a)=>{T(!1),B(!1),Z({...W,sortIndex:t,sortDirection:a})}},n().createElement(_.x,null),n().createElement(w.R,null)))},de=oe;oe.propTypes={workload:E().shape({isUninitialized:E().bool.isRequired,isFetching:E().bool.isRequired,isError:E().bool.isRequired,isSuccess:E().bool.isRequired,error:E().object,data:E().shape({namespace:E().shape({uuid:E().string,name:E().string}),cluster:E().shape({uuid:E().string,display_name:E().string}),status:E().string,recommendations:E().arrayOf(E().shape({check:E().string,description:E().string,objects:E().arrayOf(E().shape({kind:E().string,uid:E().string})),remediation:E().string}))})}),namespaceName:E().string.isRequired};const ue=({workload:e,namespaceId:t,clusterId:a})=>{const r=`${e?.data?.cluster?.display_name||a} | ${e?.data?.namespace?.name||t}`;return n().createElement(n().Fragment,null,n().createElement(s.Z,{className:"pf-m-light ins-inventory-detail"},n().createElement(l.Flex,{direction:{default:"column"}},n().createElement(l.FlexItem,null,n().createElement(o.Z,{current:r,workloads:"true"}),n().createElement(k,{workload:e,namespaceId:t,clusterId:a})))),n().createElement(i.PageSection,null,n().createElement(c.Title,{className:"pf-u-mb-lg",headingLevel:"h3",size:"2xl"},"Recommendations"),n().createElement(de,{workload:e,namespaceName:e?.data?.namespace?.name})))};ue.propTypes={clusterId:E().string.isRequired,namespaceId:E().string.isRequired,workload:E().shape({isUninitialized:E().bool.isRequired,isFetching:E().bool.isRequired,data:E().shape({namespace:E().shape({uuid:E().string,name:E().string}),cluster:E().shape({uuid:E().string,display_name:E().string}),status:E().string})})};var me=a(11042),pe=a(55140);const ge=()=>{const e=(0,pe.Z)(),{namespaceId:t,clusterId:a}=(0,ce.useParams)(),s=(0,me.k0)({namespaceId:t,clusterId:a});return(0,r.useEffect)((()=>{s.refetch()}),[t,a]),(0,r.useEffect)((()=>{const r="ok"===s?.data?.status?`${s?.data?.cluster.display_name} | ${s?.data?.namespace.name} - Workloads`:`${a} | ${t} - Workloads`;e.updateDocumentTitle(`${r} - OCP Advisor | Red Hat Insights`)}),[s,t,a]),n().createElement(ue,{workload:s,namespaceId:t,clusterId:a})}},21888:(e,t,a)=>{"use strict";a.d(t,{F:()=>l});var r=a(28416),n=a.n(r),s=a(24561);const l=()=>n().createElement(s.ZP,{height:20},n().createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"300",height:"20"}))},94608:(e,t,a)=>{"use strict";a.d(t,{Q$:()=>h,Vs:()=>l,ke:()=>p,l8:()=>g,lM:()=>u,mR:()=>i,p5:()=>E,sI:()=>f,wW:()=>c,y4:()=>b});var r=a(48585),n=a(44439),s=a.n(n);const l=(e,t)=>{const a={1:"low",2:"moderate",3:"important",4:"critical"};let r={};if("general"===t||"label"===t)for(const t in e)t in a&&(r[a[t]]=e[t]);else r=a[e];return r},i=(e,t)=>{for(const a of t)if(e[a]>0)return!0},c=e=>{const t=s().cloneDeep(e);return delete t.sortIndex,delete t.sortDirection,delete t.offset,delete t.limit,delete t.sort,!!Object.values(t).filter((e=>!s().isEmpty(e))).length},o=e=>e?.charAt(0).toUpperCase()+e?.slice(1),d=(e,t)=>{if(e.values){const a=e.values.find((e=>e.value===String(t)));return a?{name:a.label||a.text,value:t}:{name:t,value:t}}return{name:t,value:t}},u=(e,t)=>Object.entries(e).reduce(((e,[a,r])=>{if(t[a]){const n=t[a];if(Array.isArray(r)&&r.length>0||"string"==typeof r&&""!==r.trim()){const t=Array.isArray(r)?r.map((e=>d(n,e))):[d(n,r)];e.push({category:o(n.label),chips:t,urlParam:n.urlParam})}}else"description"!==a&&"object_id"!==a||""===r.trim()||e.push({category:o(a.replace("_"," ")),chips:[{name:r,value:r}],urlParam:a});return e}),[]),m=(e,t)=>{const a=t[0].rule;switch(e){case 1:return a.details;case 2:return a.total_risk;case 3:return a.objects.length;case 4:return a.modified}},p=(e,t,a)=>e>=1?[...a]?.sort(((a,n)=>{const s=t===r.B.asc?1:-1;return m(e,a)>m(e,n)?s:m(e,n)>m(e,a)?-s:0})):[...a],g=(e,t)=>e.flatMap(((e,a)=>{const r=[...e];return t&&0===a&&(e[0].isOpen=!0),e[1].parent=2*a,r})),h=(e,t)=>Object.entries(t).some((([t,a])=>"object_id"===t&&e.uid.toLowerCase().includes(a.toLowerCase()))),E=(e,t,a)=>{const{[a]:r,...n}={...e};t({...n,..."description"===a?{description:""}:"total_risk"===a?{total_risk:[]}:"object_id"===a?{object_id:""}:{}})},f=(e,t,a,r)=>r.length>0?t({...e,[a]:r}):E(e,t,a),b=(e,t)=>{const a=s().omitBy(s().cloneDeep(t),s().isEmpty);return Object.entries(a).every((([t,a])=>{switch(t){case"description":return a&&e.details.toLowerCase().includes(a.toLowerCase());case"object_id":return a&&e.objects.some((e=>e.uid.toLowerCase().includes(a.toLowerCase())));case"total_risk":return a&&a.includes(String(e.total_risk));default:return!0}}))}},65088:()=>{},58392:()=>{},32857:()=>{},28992:()=>{},30187:()=>{},90479:()=>{},21626:()=>{},8572:()=>{},98379:()=>{},46928:()=>{},91993:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},87234:()=>{},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Workload.a86722c4ae3905d61e8e6c41cb9b9ed7.js.map