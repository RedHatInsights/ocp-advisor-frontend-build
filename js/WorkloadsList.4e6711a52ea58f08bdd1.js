(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[6488,8299,4693,8024,9767],{57642:(e,t,a)=>{"use strict";a.d(t,{Lg:()=>g,Lv:()=>b,U1:()=>_,WL:()=>f,_:()=>y,_F:()=>u,aM:()=>h,im:()=>m,mt:()=>d,oo:()=>v,yG:()=>p});var r=a(48403),s=a.n(r),n=a(50361),l=a.n(n),i=(a(28416),a(81249)),o=a(81563),c=a(94608);const u=(e,t)=>Object.entries(t).every((([t,a])=>{switch(t){case"text":return e.description.toLowerCase().includes(a.toLowerCase());case o.W2.total_risk.urlParam:return a.includes(String(e.total_risk));case o.W2.category.urlParam:return e.tags.find((e=>a.includes(String(o.kT[e]))));case o.W2.impact.urlParam:return a.includes(String(e.impact));case o.W2.impacting.urlParam:return!(a.length>0)||a.some((t=>"true"===t?e.impacted_clusters_count>0:"false"===t?0===e.impacted_clusters_count:void 0));case o.W2.likelihood.urlParam:return a.includes(String(e.likelihood));case o.W2.rule_status.urlParam:return"all"===a||"disabled"===a&&e.disabled||"enabled"===a&&!e.disabled;case o.W2.res_risk.urlParam:return a.includes(String(e.resolution_risk));default:return!0}})),m=(e,t)=>Object.entries(t).every((([t,a])=>{switch(t){case"text":return(e.cluster_name||e.cluster_id).toLowerCase().includes(a.toLowerCase());case o.RT.hits.urlParam:return 0===a.length&&parseInt(e.total_hit_count)>0||a.includes("all")||a.some((t=>e.hits_by_total_risk[t]>0));case"version":return 0===a.length||a.includes(f(e.cluster_version));default:return!0}})),d=(e,t)=>{const a=l()(e);return delete a.sortIndex,delete a.sortDirection,delete a.sort,delete a.offset,delete a.limit,a?.hits&&0===a.hits.length&&delete a.hits,((e,t)=>Object.entries(e||{}).reduce(((e,a)=>{const[r,n]=a;if(t[r]){const a=t[r],l=Array.isArray(n)?n.map((e=>{const t=a.values.find((t=>t.value===String(e)));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:a.values.find((e=>e.value===String(n))).label,value:n}];return[...e,{category:s()(a.title),chips:l,urlParam:a.urlParam}]}return"text"===r?[...e,...n.length>0?[{category:"Name",chips:[{name:n,value:n}],urlParam:r}]:[]]:"version"===r?[...e,...n.length>0?[{category:"Version",chips:n.map((e=>({name:e,value:e}))),urlParam:r}]:[]]:"namespace_name"===r?[...e,...n.length>0?[{category:"Namespace name",chips:[{name:n,value:n}],urlParam:r}]:[]]:"cluster_name"===r?[...e,...n.length>0?[{category:"Cluster name",chips:[{name:n,value:n}],urlParam:r}]:[]]:void 0}),[]))(a,t)},p=e=>{const t=new URLSearchParams(e);return Array.from(t).reduce(((e,[t,a])=>({...e,[t]:["text","first","rule_status","sort","cluster_name","namespace_name","description","object_id"].includes(t)?a:"true"===a||"false"===a?JSON.parse(a):a.split(",")})),{})},g=e=>({name:e.substring(e.startsWith("-")?1:0),direction:e.startsWith("-")?"desc":"asc",description:e.substring(e.startsWith("-")?1:0),object_id:e.substring(e.startsWith("-")?1:0)}),h=(e={},t)=>{const a=new URL(window.location.origin+window.location.pathname);var r,s,n;a.searchParams.set("sort",(r=e.sortIndex,s=t,n=e.sortDirection,["desc","asc"].includes(n)||console.error("Invalid sort parameters (is not asc nor desc)"),`${"asc"===n?"":"-"}${s[r]}`)),Object.entries(e).forEach((([e,t])=>"sortIndex"!==e&&"sortDirection"!==e&&"sort"!==e&&""!==t&&!(Array.isArray(t)&&0===t.length)&&a.searchParams.set(e,t))),window.history.replaceState(null,null,a.href)},y=(e,t,a)=>a*(0,i.compare)(e,t),f=e=>(0,i.coerce)(void 0!==e&&(0,i.valid)((0,i.coerce)(e))?e:"0.0.0").version,v=(e,t,a)=>{const{[a]:r,...s}={...e,offset:0};t({...s,..."text"===a?{text:""}:"hits"===a?{hits:[]}:"version"===a?{version:[]}:"object_id"===a?{object_id:""}:{}})},b=(e,t,a,r)=>r.length>0?t({...e,offset:0,[a]:r}):v(e,t,a),_=(e,t)=>{const a=(0,c.Vs)(e.metadata.hits_by_severity,"general");return Object.entries(t).every((([r,s])=>{switch(r){case"cluster_name":return(e.cluster.display_name||e.cluster.uuid).toLowerCase().includes(s.toLowerCase());case"namespace_name":return(e.namespace.name||e.namespace.uuid).toLowerCase().includes(s.toLowerCase());case"severity":return 0===s.length||(0,c.mR)(a,t.severity);default:return!0}}))}},83920:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(28416),s=a.n(r),n=a(67073),l=a(24561);const i=()=>s().createElement(n.Card,{ouiaId:"loading-skeleton"},s().createElement(n.CardBody,null,s().createElement(l.aV,null)))},33016:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>R});var r=a(28416),s=a.n(r),n=a(86896),l=a(63456),i=a(2550),o=a(11042),c=a(45697),u=a.n(c),m=a(77357),d=a(75863),p=a(35981),g=a(49004),h=a(58027),y=a(13877),f=a(81563),v=a(62410),b=a(56800),_=a(38654),w=a(90766),k=a(77572),C=a(86706),E=a(72668),P=a(18446),x=a.n(P),S=a(57642),L=a(91306),I=a(83920),j=a(95431),$=a.n(j),D=a(8780),N=a(94608);const W=({hits_by_severity:e,basePath:t})=>{const a=(0,N.Vs)(e,"label");return s().createElement("div",{className:"shield-set"},N.og.map(((e,r)=>s().createElement(D.Tooltip,{key:e.value,content:`${e.label} severity`},e.hasIcon&&(0===a[e.value]?s().createElement("a",{className:"disabled-shield nowrap"},s().createElement($(),{style:{color:"var(--pf-global--disabled-color--200)"}}),s().createElement("span",null,"0")):s().createElement(b.Link,{key:e.value,to:`${t}?total_risk=${N.og[r].indexNumber}`,className:"nowrap"},s().createElement($(),{style:{color:e.iconColor}}),s().createElement("span",null,a[e.value])))))))};W.propTypes={hits_by_severity:u().shape({critical:u().number,important:u().number,moderate:u().number,low:u().number}).isRequired,linkTo:u().string,basePath:u().string};const A=W,T=({query:{isError:e,error:t,isUninitialized:a,isFetching:n,isSuccess:l,data:i,refetch:o}})=>{const c=(0,C.useDispatch)(),u=(0,C.useSelector)((({filters:e})=>e.workloadsListState)),P=i?.workloads||[],j=u.limit,$=Math.floor(u.offset/u.limit)+1,[D,W]=(0,r.useState)([]),[T,F]=(0,r.useState)([]),[O,B]=(0,r.useState)(!1),[R,Z]=(0,r.useState)(!1),[M,V]=(0,r.useState)(!0),U=e=>c((0,E.$4)(e)),q=a||n||!O,G=e,z=0===T.length,H=l,{search:J}=(0,b.useLocation)();(0,r.useEffect)((()=>{F(Q(P))}),[i,u.namespace_name,u.cluster_name,u.severity,u.sortDirection,u.sortIndex]),(0,r.useEffect)((()=>{if(J&&M){const e=(0,S.yG)(J);if(e.sort){const t=(0,S.Lg)(e.sort);e.sortIndex=f.Bk.indexOf(t.name),e.sortDirection=t.direction}e.offset&&(e.offset=Number(e.offset[0])),e.limit&&(e.limit=Number(e.limit[0])),e.impacting&&!Array.isArray(e.impacting)&&(e.impacting=[`${e.impacting}`]),U({...u,...e})}V(!1)}),[]),(0,r.useEffect)((()=>{M||(0,S.aM)(u,f.Bk)}),[u,M]),(0,r.useEffect)((()=>{W(K(T)),B(!0),Z((0,N.wW)(u))}),[T,u.limit,u.offset]);const Q=e=>(B(!1),e.filter((e=>(0,S.U1)(e,u))).sort(((e,t)=>{let a,r;const s="asc"===u.sortDirection?1:-1;switch(u.sortIndex){case f._p:return a=e.cluster?.display_name||e.cluster.uuid,r=t.cluster?.display_name||t.cluster.uuid,s*a.localeCompare(r);case f.cl:return a=e.metadata.recommendations||0,r=t.metadata.recommendations||0,a>r?s:r>a?-s:0;case f.Bh:a=e.metadata.hits_by_severity||{1:0,2:0,3:0,4:0},r=t.metadata.hits_by_severity||{1:0,2:0,3:0,4:0};for(let e=4;e>0;e--){if(a[e]>r[e])return s;if(a[e]<r[e])return-s}return 0;case f.Zg:return a=e.metadata.objects||0,r=t.metadata.objects||0,a>r?s:r>a?-s:0;case f.nU:return a=new Date(e.metadata.last_checked_at||0),r=new Date(t.metadata.last_checked_at||0),a>r?s:r>a?-s:0}}))),K=e=>e.slice(j*($-1),j*($-1)+j).map(((e,t)=>({entity:e,cells:[s().createElement("span",{key:t},s().createElement(b.Link,{to:`${_.G}/workloads/${e.cluster.uuid}/${e.namespace.uuid}`},s().createElement("p",{key:`${t}-cluster`},e.cluster.display_name||e.cluster.uuid),s().createElement("p",{key:`${t}-namespace`},e.namespace.name||e.namespace.uuid))),e.metadata.recommendations,s().createElement("span",{key:t},s().createElement(A,{hits_by_severity:e.metadata.hits_by_severity,basePath:`${_.G}/workloads/${e.cluster.uuid}/${e.namespace.uuid}`})),e.metadata.objects,s().createElement("span",{key:t},s().createElement(v.Z,{extraTitle:"Last seen: ",date:e.metadata.last_checked_at,variant:"relative"}))]}))),X=[{label:"Cluster name",type:"text",filterValues:{key:"cluster_name",onChange:(e,t)=>U({...u,offset:0,cluster_name:t}),value:u.cluster_name,placeholder:"Filter by cluster name"}},{label:"Namespace name",type:"text",filterValues:{key:"namespace_name",onChange:(e,t)=>U({...u,offset:0,namespace_name:t}),value:u.namespace_name,placeholder:"Filter by namespace name"}},{label:"Severity",type:k.conditionalFilterType.checkbox,id:f.Fy.severity.urlParam,value:`checkbox-${f.Fy.severity.urlParam}`,filterValues:{key:`${f.Fy.severity.urlParam}-filter`,onChange:(e,t)=>{return"severity",a=t,(0,S.Lv)(u,U,"severity",a);var a},value:u.severity,items:f.Fy.severity.values,placeholder:"Filter by severity"}}],Y={showDeleteButton:R,deleteTitle:"Reset filters",filters:(0,S.mt)(u,f.Fy),onDelete:(e,t,a)=>{a?x()(u,E.Cz)?o():(0,E.aw)(u,E.Cz,U):t.map((e=>{const t={[e.urlParam]:Array.isArray(u[e.urlParam])?u[e.urlParam].filter((t=>String(t)!==String(e.chips[0].value))):""};var a;t[e.urlParam].length>0?U({...u,...t}):(a=e.urlParam,(0,S.oo)(u,U,a))}))}},ee=(e,t)=>{B(!1);const a=t*u.limit-u.limit;U({...u,offset:a})},te=(e,t)=>{t!==u.limit&&(B(!1),U({...u,limit:t,offset:0}))};return e&&404===t.status||l&&0===P.length?s().createElement(L.sl,null):s().createElement("div",{id:"workloads-list-table"},s().createElement(m.Z,{pagination:{itemCount:T.length,page:$,perPage:j,onSetPage:ee,onPerPageSelect:te,isCompact:!0,ouiaId:"pager"},filterConfig:{items:X},activeFiltersConfig:e?{showDeleteButton:!1}:Y}),s().createElement(p.i,{"aria-label":"Table of workloads",ouiaId:"workloads",ouiaSafe:!q,variant:d.B.compact,cells:f.go,rows:G||q||z?[{fullWidth:!0,cells:[{props:{colSpan:f.go.length+1},title:G?s().createElement(L.Te,null):q?s().createElement(I.Z,null):s().createElement(L.DH,null)}]}]:H?D:s().createElement(L.Te,null),isStickyHeader:!0,sortBy:{index:u.sortIndex,direction:u.sortDirection},onSort:(e,t,a)=>{B(!1),U({...u,sortIndex:t,sortDirection:a})}},s().createElement(g.x,null),s().createElement(h.R,null)),s().createElement(w.Pagination,{ouiaId:"pager",itemCount:T.length,page:$,perPage:j,onSetPage:ee,onPerPageSelect:te,onPageInput:ee,widgetId:"pagination-options-menu-bottom",variant:y.aM.bottom}))};T.propTypes={query:u().object.isRequired};const F=()=>{const e=(0,o.mJ)();return s().createElement(T,{query:e})};var O=a(50318),B=a(55140);const R=()=>{const e=(0,n.Z)();return(0,B.Z)().updateDocumentTitle(e.formatMessage(i.Z.documentTitle,{subnav:"Workloads"})),s().createElement(s().Fragment,null,s().createElement(l.Z,{className:"ins-c-clusters-header"},s().createElement(O.Title,{headingLevel:"h1",ouiaId:"page-header"},"Workloads")),s().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},s().createElement(F,null)))}},94608:(e,t,a)=>{"use strict";a.d(t,{Q$:()=>_,Vs:()=>m,ke:()=>v,l8:()=>b,lM:()=>y,mR:()=>d,og:()=>u,p5:()=>w,sI:()=>k,wW:()=>p,y4:()=>C});var r=a(48585),s=a(14176),n=a.n(s),l=a(50361),i=a.n(l),o=a(41609),c=a.n(o);const u=[{value:"critical",label:"Critical",iconColor:"var(--pf-global--danger-color--100)",textColor:"var(--pf-global--danger-color--100)",hasIcon:!0,indexNumber:4},{value:"important",label:"Important",iconColor:"var(--pf-global--palette--orange-300)",textColor:"var(--pf-global--palette--orange-400)",hasIcon:!0,indexNumber:3},{value:"moderate",label:"Moderate",iconColor:"var(--pf-global--warning-color--100)",textColor:"var(--pf-global--warning-color--200)",hasIcon:!0,indexNumber:2},{value:"low",label:"Low",iconColor:"var(--pf-global--Color--200)",textColor:"var(--pf-global--default-color--300)",hasIcon:!0,indexNumber:1}],m=(e,t)=>{const a={1:"low",2:"moderate",3:"important",4:"critical"};let r={};if("general"===t||"label"===t)for(const t in e)t in a&&(r[a[t]]=e[t]);else r=a[e];return r},d=(e,t)=>{for(const a of t)if(e[a]>0)return!0},p=e=>{const t=i()(e);return delete t.sortIndex,delete t.sortDirection,delete t.offset,delete t.limit,delete t.sort,!!Object.values(t).filter((e=>!c()(e))).length},g=e=>e?.charAt(0).toUpperCase()+e?.slice(1),h=(e,t)=>{if(e.values){const a=e.values.find((e=>e.value===String(t)));return a?{name:a.label||a.text,value:t}:{name:t,value:t}}return{name:t,value:t}},y=(e,t)=>Object.entries(e).reduce(((e,[a,r])=>{if(t[a]){const s=t[a];if(Array.isArray(r)&&r.length>0||"string"==typeof r&&""!==r.trim()){const t=Array.isArray(r)?r.map((e=>h(s,e))):[h(s,r)];e.push({category:g(s.label),chips:t,urlParam:s.urlParam})}}else"display_name"===a&&""!==r.trim()?e.push({category:g(a.replace("display_name","Name")),chips:[{name:r,value:r}],urlParam:"display_name"}):"description"!==a&&"object_id"!==a||""===r.trim()||e.push({category:g(a.replace("_"," ")),chips:[{name:r,value:r}],urlParam:a});return e}),[]),f=(e,t)=>{const a=t[0].rule;switch(e){case 1:return a.details;case 2:return a.total_risk;case 3:return a.objects.length;case 4:return a.modified}},v=(e,t,a)=>e>=1?[...a]?.sort(((a,s)=>{const n=t===r.B.asc?1:-1;return f(e,a)>f(e,s)?n:f(e,s)>f(e,a)?-n:0})):[...a],b=(e,t)=>e.flatMap(((e,a)=>{const r=[...e];return t&&0===a&&(e[0].isOpen=!0),e[1].parent=2*a,r})),_=(e,t)=>{const a=n()(i()(t),c());return Object.entries(a).every((([t,a])=>{switch(t){case"display_name":return a&&e?.display_name?.toLowerCase().includes(a.toLowerCase());case"object_id":return a&&e?.uid?.toLowerCase().includes(a.toLowerCase());default:return!0}}))},w=(e,t,a)=>{const{[a]:r,...s}={...e};t({...s,..."description"===a?{description:""}:"total_risk"===a?{total_risk:[]}:"object_id"===a?{object_id:""}:{}})},k=(e,t,a,r)=>r.length>0?t({...e,[a]:r}):w(e,t,a),C=(e,t)=>{const a=n()(i()(t),c());return Object.entries(a).every((([t,a])=>{switch(t){case"description":return a&&e.details.toLowerCase().includes(a.toLowerCase());case"object_id":return a&&e.objects.some((e=>e.uid.toLowerCase().includes(a.toLowerCase())));case"total_risk":return a&&a.includes(String(e.total_risk));default:return!0}}))}},65088:()=>{},36150:()=>{},63498:()=>{},36213:()=>{},81235:()=>{},81754:()=>{},16506:()=>{},43109:()=>{},70347:()=>{},12796:()=>{},95594:()=>{},15622:()=>{},58392:()=>{},10497:()=>{},80598:()=>{},32857:()=>{},1580:()=>{},94498:()=>{},37625:()=>{},71644:()=>{},23055:()=>{},54476:()=>{},27567:()=>{},28992:()=>{},90146:()=>{},80897:()=>{},30187:()=>{},40837:()=>{},50311:()=>{},90479:()=>{},78752:()=>{},71338:()=>{},11080:()=>{},44839:()=>{},21626:()=>{},74282:()=>{},67274:()=>{},24620:()=>{},82014:()=>{},90776:()=>{},88277:()=>{},97939:()=>{},8572:()=>{},98379:()=>{},25238:()=>{},61612:()=>{},33858:()=>{},66213:()=>{},77350:()=>{},69076:()=>{},70150:()=>{},92084:()=>{},46928:()=>{},1508:()=>{},91993:()=>{},84958:()=>{},37739:()=>{},99624:()=>{},43919:()=>{},91027:()=>{},53336:()=>{},16061:()=>{},27479:()=>{},93661:()=>{},56024:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},43390:()=>{},22143:()=>{},48223:()=>{},7064:()=>{},97853:()=>{},97236:()=>{},38024:()=>{},11489:()=>{},40209:()=>{},87234:()=>{},38299:()=>{},51934:()=>{},72816:()=>{},74181:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/WorkloadsList.646d61f9d7676d438f55c379147d5ee7.js.map