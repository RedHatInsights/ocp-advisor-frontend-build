(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[1242,8299,4693,8024,9767],{57642:(e,t,r)=>{"use strict";r.d(t,{Lg:()=>h,Lv:()=>f,U1:()=>y,WL:()=>_,_:()=>v,_F:()=>u,aM:()=>g,im:()=>d,mt:()=>m,oo:()=>b,yG:()=>p});var s=r(48403),a=r.n(s),n=r(50361),i=r.n(n),o=(r(28416),r(81249)),c=r(81563),l=r(94608);const u=(e,t)=>Object.entries(t).every((([t,r])=>{switch(t){case"text":return e.description.toLowerCase().includes(r.toLowerCase());case c.W2.total_risk.urlParam:return r.includes(String(e.total_risk));case c.W2.category.urlParam:return e.tags.find((e=>r.includes(String(c.kT[e]))));case c.W2.impact.urlParam:return r.includes(String(e.impact));case c.W2.impacting.urlParam:return!(r.length>0)||r.some((t=>"true"===t?e.impacted_clusters_count>0:"false"===t?0===e.impacted_clusters_count:void 0));case c.W2.likelihood.urlParam:return r.includes(String(e.likelihood));case c.W2.rule_status.urlParam:return"all"===r||"disabled"===r&&e.disabled||"enabled"===r&&!e.disabled;case c.W2.res_risk.urlParam:return r.includes(String(e.resolution_risk));default:return!0}})),d=(e,t)=>Object.entries(t).every((([t,r])=>{switch(t){case"text":return(e.cluster_name||e.cluster_id).toLowerCase().includes(r.toLowerCase());case c.RT.hits.urlParam:return 0===r.length&&parseInt(e.total_hit_count)>0||r.includes("all")||r.some((t=>e.hits_by_total_risk[t]>0));case"version":return 0===r.length||r.includes(_(e.cluster_version));default:return!0}})),m=(e,t)=>{const r=i()(e);return delete r.sortIndex,delete r.sortDirection,delete r.sort,delete r.offset,delete r.limit,r?.hits&&0===r.hits.length&&delete r.hits,((e,t)=>Object.entries(e||{}).reduce(((e,r)=>{const[s,n]=r;if(t[s]){const r=t[s],i=Array.isArray(n)?n.map((e=>{const t=r.values.find((t=>t.value===String(e)));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:r.values.find((e=>e.value===String(n))).label,value:n}];return[...e,{category:a()(r.title),chips:i,urlParam:r.urlParam}]}return"text"===s?[...e,...n.length>0?[{category:"Name",chips:[{name:n,value:n}],urlParam:s}]:[]]:"version"===s?[...e,...n.length>0?[{category:"Version",chips:n.map((e=>({name:e,value:e}))),urlParam:s}]:[]]:"namespace_name"===s?[...e,...n.length>0?[{category:"Namespace name",chips:[{name:n,value:n}],urlParam:s}]:[]]:"cluster_name"===s?[...e,...n.length>0?[{category:"Cluster name",chips:[{name:n,value:n}],urlParam:s}]:[]]:void 0}),[]))(r,t)},p=e=>{const t=new URLSearchParams(e);return Array.from(t).reduce(((e,[t,r])=>({...e,[t]:["text","first","rule_status","sort","cluster_name","namespace_name","description","object_id"].includes(t)?r:"true"===r||"false"===r?JSON.parse(r):r.split(",")})),{})},h=e=>({name:e.substring(e.startsWith("-")?1:0),direction:e.startsWith("-")?"desc":"asc",description:e.substring(e.startsWith("-")?1:0),object_id:e.substring(e.startsWith("-")?1:0)}),g=(e={},t)=>{const r=new URL(window.location.origin+window.location.pathname);var s,a,n;r.searchParams.set("sort",(s=e.sortIndex,a=t,n=e.sortDirection,["desc","asc"].includes(n)||console.error("Invalid sort parameters (is not asc nor desc)"),`${"asc"===n?"":"-"}${a[s]}`)),Object.entries(e).forEach((([e,t])=>"sortIndex"!==e&&"sortDirection"!==e&&"sort"!==e&&""!==t&&!(Array.isArray(t)&&0===t.length)&&r.searchParams.set(e,t))),window.history.replaceState(null,null,r.href)},v=(e,t,r)=>r*(0,o.compare)(e,t),_=e=>(0,o.coerce)(void 0!==e&&(0,o.valid)((0,o.coerce)(e))?e:"0.0.0").version,b=(e,t,r)=>{const{[r]:s,...a}={...e,offset:0};t({...a,..."text"===r?{text:""}:"hits"===r?{hits:[]}:"version"===r?{version:[]}:"object_id"===r?{object_id:""}:{}})},f=(e,t,r,s)=>s.length>0?t({...e,offset:0,[r]:s}):b(e,t,r),y=(e,t)=>{const r=(0,l.Vs)(e.metadata.hits_by_severity,"general");return Object.entries(t).every((([s,a])=>{switch(s){case"cluster_name":return(e.cluster.display_name||e.cluster.uuid).toLowerCase().includes(a.toLowerCase());case"namespace_name":return(e.namespace.name||e.namespace.uuid).toLowerCase().includes(a.toLowerCase());case"severity":return 0===a.length||(0,l.mR)(r,t.severity);default:return!0}}))}},71070:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var s=r(76004),a=r(8780),n=r(94992),i=r(45697),o=r.n(i),c=r(28416),l=r.n(c),u=r(86896),d=r(2550);const m=({rule:e})=>{const t=(0,u.Z)();return l().createElement(l().Fragment,null,e.disabled&&l().createElement(a.Tooltip,{content:t.formatMessage(d.Z.ruleIsDisabledTooltip),position:s.TooltipPosition.right},l().createElement(n.Label,{color:"gray",isCompact:!0},t.formatMessage(d.Z.disabled))))};m.propTypes={rule:o().object};const p=m},94608:(e,t,r)=>{"use strict";r.d(t,{Q$:()=>g,Vs:()=>i,ke:()=>p,l8:()=>h,lM:()=>d,mR:()=>o,p5:()=>v,sI:()=>_,wW:()=>c,y4:()=>b});var s=r(48585),a=r(44439),n=r.n(a);const i=(e,t)=>{const r={1:"low",2:"moderate",3:"important",4:"critical"};let s={};if("general"===t||"label"===t)for(const t in e)t in r&&(s[r[t]]=e[t]);else s=r[e];return s},o=(e,t)=>{for(const r of t)if(e[r]>0)return!0},c=e=>{const t=n().cloneDeep(e);return delete t.sortIndex,delete t.sortDirection,delete t.offset,delete t.limit,delete t.sort,!!Object.values(t).filter((e=>!n().isEmpty(e))).length},l=e=>e?.charAt(0).toUpperCase()+e?.slice(1),u=(e,t)=>{if(e.values){const r=e.values.find((e=>e.value===String(t)));return r?{name:r.label||r.text,value:t}:{name:t,value:t}}return{name:t,value:t}},d=(e,t)=>Object.entries(e).reduce(((e,[r,s])=>{if(t[r]){const a=t[r];if(Array.isArray(s)&&s.length>0||"string"==typeof s&&""!==s.trim()){const t=Array.isArray(s)?s.map((e=>u(a,e))):[u(a,s)];e.push({category:l(a.label),chips:t,urlParam:a.urlParam})}}else"description"!==r&&"object_id"!==r||""===s.trim()||e.push({category:l(r.replace("_"," ")),chips:[{name:s,value:s}],urlParam:r});return e}),[]),m=(e,t)=>{const r=t[0].rule;switch(e){case 1:return r.details;case 2:return r.total_risk;case 3:return r.objects.length;case 4:return r.modified}},p=(e,t,r)=>e>=1?[...r]?.sort(((r,a)=>{const n=t===s.B.asc?1:-1;return m(e,r)>m(e,a)?n:m(e,a)>m(e,r)?-n:0})):[...r],h=(e,t)=>e.flatMap(((e,r)=>{const s=[...e];return t&&0===r&&(e[0].isOpen=!0),e[1].parent=2*r,s})),g=(e,t)=>Object.entries(t).some((([t,r])=>"object_id"===t&&e.uid.toLowerCase().includes(r.toLowerCase()))),v=(e,t,r)=>{const{[r]:s,...a}={...e};t({...a,..."description"===r?{description:""}:"total_risk"===r?{total_risk:[]}:"object_id"===r?{object_id:""}:{}})},_=(e,t,r,s)=>s.length>0?t({...e,[r]:s}):v(e,t,r),b=(e,t)=>{const r=n().omitBy(n().cloneDeep(t),n().isEmpty);return Object.entries(r).every((([t,r])=>{switch(t){case"description":return r&&e.details.toLowerCase().includes(r.toLowerCase());case"object_id":return r&&e.objects.some((e=>e.uid.toLowerCase().includes(r.toLowerCase())));case"total_risk":return r&&r.includes(String(e.total_risk));default:return!0}}))}},65088:()=>{},36150:()=>{},63498:()=>{},36213:()=>{},81235:()=>{},81754:()=>{},16506:()=>{},43109:()=>{},70347:()=>{},12796:()=>{},95594:()=>{},15622:()=>{},58392:()=>{},10497:()=>{},80598:()=>{},32857:()=>{},1580:()=>{},94498:()=>{},37625:()=>{},71644:()=>{},23055:()=>{},54476:()=>{},27567:()=>{},28992:()=>{},90146:()=>{},80897:()=>{},30187:()=>{},40837:()=>{},50311:()=>{},90479:()=>{},78752:()=>{},71338:()=>{},11080:()=>{},44839:()=>{},21626:()=>{},74282:()=>{},67274:()=>{},24620:()=>{},82014:()=>{},90776:()=>{},88277:()=>{},97939:()=>{},8572:()=>{},98379:()=>{},25238:()=>{},61612:()=>{},33858:()=>{},66213:()=>{},77350:()=>{},69076:()=>{},70150:()=>{},92084:()=>{},46928:()=>{},1508:()=>{},91993:()=>{},84958:()=>{},37739:()=>{},99624:()=>{},43919:()=>{},91027:()=>{},53336:()=>{},16061:()=>{},27479:()=>{},93661:()=>{},56024:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},43390:()=>{},22143:()=>{},48223:()=>{},7064:()=>{},97853:()=>{},97236:()=>{},38024:()=>{},11489:()=>{},40209:()=>{},87234:()=>{},38299:()=>{},51934:()=>{},72816:()=>{},74181:()=>{},16166:()=>{},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
//# sourceMappingURL=../sourcemaps/1242.4c7a76935d9b6b55f2fc4d68ed8a3c7b.js.map