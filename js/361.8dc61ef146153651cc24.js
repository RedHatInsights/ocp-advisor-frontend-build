"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[361],{76913:(e,t,r)=>{r.d(t,{_F:()=>f,im:()=>v,io:()=>h,mt:()=>k,kC:()=>p});var n=r(93433),a=r(29439),l=r(93264),i=r.n(l),s=r(16530),u=r(44439),c=r.n(u),o=r(8045),d=r(62410),m=r(59303),_=r(30893),f=function(e,t){return Object.entries(t).every((function(t){var r=(0,a.Z)(t,2),n=r[0],l=r[1];switch(n){case"text":return e.description.toLowerCase().includes(l.toLowerCase());case m.W2.total_risk.urlParam:return l.includes(String(e.total_risk));case m.W2.category.urlParam:return e.tags.find((function(e){return l.includes(String(m.kT[e]))}));case m.W2.impact.urlParam:return l.includes(String(e.impact));case m.W2.impacting.urlParam:return!(l.length>0)||l.some((function(t){return"true"===t?e.impacted_clusters_count>0:"false"===t?0===e.impacted_clusters_count:void 0}));case m.W2.likelihood.urlParam:return l.includes(String(e.likelihood));case m.W2.rule_status.urlParam:return"all"===l||"disabled"===l&&e.disabled||"enabled"===l&&!e.disabled;default:return!0}}))},v=function(e,t){return Object.entries(t).every((function(t){var r=(0,a.Z)(t,2),n=r[0],l=r[1];switch(n){case"text":return(e.cluster_name||e.cluster_id).toLowerCase().includes(l.toLowerCase());case m.RT.hits.urlParam:return 0===l.length&&parseInt(e.total_hit_count)>0||l.includes("all")||l.some((function(t){return e.hits_by_total_risk[t-1]>0}));default:return!0}}))},h=function(e){return e.map((function(e,t){var r,n,a,l;return{cluster:e,cells:[i().createElement("span",{key:t},i().createElement(s.Link,{to:"clusters/".concat(e.cluster_id)},e.cluster_name||e.cluster_id)),e.total_hit_count,(null===(r=e.hits_by_total_risk)||void 0===r?void 0:r[3])||0,(null===(n=e.hits_by_total_risk)||void 0===n?void 0:n[2])||0,(null===(a=e.hits_by_total_risk)||void 0===a?void 0:a[1])||0,(null===(l=e.hits_by_total_risk)||void 0===l?void 0:l[0])||0,i().createElement("span",{key:t},e.last_checked_at?i().createElement(d.Z,{extraTitle:"".concat(m.NW.formatMessage(_.Z.lastSeen),": "),date:e.last_checked_at,variant:"relative"}):i().createElement(o.Tooltip,{key:t,content:i().createElement("span",null,m.NW.formatMessage(_.Z.lastSeen)+": ",m.NW.formatMessage(_.Z.nA))},i().createElement("span",null,m.NW.formatMessage(_.Z.nA))))]}}))},p=function(e){return e[0].toUpperCase()+e.substring(1)},k=function(e,t){var r=c().cloneDeep(e);return delete r.sortIndex,delete r.sortDirection,delete r.offset,delete r.limit,(null==r?void 0:r.hits)&&0===r.hits.length&&delete r.hits,function(e,t){return Object.entries(e||{}).reduce((function(e,r){var l=(0,a.Z)(r,2),i=l[0],s=l[1];if(t[i]){var u=t[i],c=Array.isArray(s)?s.map((function(e){var t=u.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:u.values.find((function(e){return e.value===String(s)})).label,value:s}];return[].concat((0,n.Z)(e),[{category:p(u.title),chips:c,urlParam:u.urlParam}])}if("text"===i)return[].concat((0,n.Z)(e),(0,n.Z)(s.length>0?[{category:"Name",chips:[{name:s,value:s}],urlParam:i}]:[]))}),[])}(r,t)}}}]);
//# sourceMappingURL=../sourcemaps/361.fdddd12de29934b08457ab91078cc037.js.map