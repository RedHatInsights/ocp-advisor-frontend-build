(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[9619],{41785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>xe});var a=n(92950),r=n.n(a),l=n(62012),i=n(86896),s=n(55140),c=n(86362),o=n(30893),u=n(45697),m=n.n(u),d=n(89376),p=n(70885),E=n(49287),f=n(18038),g=n(81159),v=n(34023),h=n(34348),b=n(22910),y=n(80765),k=n(96823),_=n(35664),T=n(26899),Z=n.n(T),I=n(73845),w=function(e){var t,n,l,s,c=e.clusterId,u=e.clusterData,m=e.clusterInfo,d=window.location,T=(0,a.useState)(!1),w=(0,p.Z)(T,2),P=w[0],S=w[1],C=(0,i.Z)(),x=u.isUninitialized,D=u.isFetching,O=u.data,M=m.isUninitialized,F=m.isFetching,W=m.data,j=[r().createElement(k.DropdownItem,{key:"link",onClick:function(){return function(e){d.assign(d.origin+(d.pathname.includes("preview")?"/preview":"")+"/openshift/details/".concat(e))}(c)}},r().createElement("snap",null,C.formatMessage(o.Z.clusterDetailsRedirect)))];return r().createElement(E.r,{id:"cluster-header",md:12,hasGutter:!0},r().createElement(f.P,{span:8},r().createElement(h.Dx,{size:"2xl",headingLevel:"h1",id:"cluster-header-title",ouiaId:"cluster-name"},M||F?r().createElement(_.Z,{size:"sm"}):(null==W?void 0:W.display_name)||c)),r().createElement(f.P,{span:4,id:"cluster-header-dropdown"},r().createElement(b.Dropdown,{position:"right",onSelect:function(){return S(!P)},autoFocus:!1,isOpen:P,toggle:r().createElement(y.DropdownToggle,{id:"toggle-id-2",onToggle:function(e){return S(e)}},C.formatMessage(o.Z.dropDownActionSingleCluster)),dropdownItems:j})),r().createElement(f.P,null,r().createElement(g.K,null,r().createElement(v.v,{id:"cluster-header-uuid"},r().createElement("span",null,"UUID:")," ",r().createElement("span",null,c)),r().createElement(v.v,{id:"cluster-header-last-seen"},r().createElement("span",null,C.formatMessage(o.Z.lastSeen),": "),r().createElement("span",null,x||D?r().createElement(I.F,null):null!=O&&null!==(t=O.report)&&void 0!==t&&null!==(n=t.meta)&&void 0!==n&&n.last_checked_at?r().createElement(Z(),{date:null==O||null===(l=O.report)||void 0===l||null===(s=l.meta)||void 0===s?void 0:s.last_checked_at,type:"exact"}):C.formatMessage(o.Z.unknown))))))};w.propTypes={clusterId:m().string.isRequired,clusterData:m().object.isRequired,clusterInfo:m().shape({isUninitialized:m().bool.isRequired,isFetching:m().bool.isRequired,data:m().shape({cluster_id:m().string,display_name:m().string,managed:m().bool,status:m().string})})};const P=function(){var e=(0,l.useParams)().clusterId,t=(0,c.th)({id:e,includeDisabled:!1}),n=(0,c.jH)({id:e});return r().createElement(w,{clusterId:e,clusterData:t,clusterInfo:n})};var S=n(56276),C=n(2095),x=n(85962),D=n(82819),O=n(98378),M=n(5391),F=n(42982),W=n(4942),j=n(86706),R=n(48403),A=n.n(R),N=n(90693),U=n(15509),z=n(76004),q=n(8045),L=n(56021),J=n(59303),V=n(85583),B=n(90670),K=n(51014),Y=n(76913),G=n(28672),H=n(48622),Q=n(52661);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,W.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ee=function(){var e,t=(0,i.Z)(),n=(0,j.useDispatch)(),s=function(e){return n((0,G.YR)(e))},u=(0,j.useSelector)((function(e){return e.filters.clusterRulesState})),m=(0,l.useParams)().clusterId,d=(0,c.th)({id:m,includeDisabled:!1}),E=d.isError,f=d.isUninitialized,g=d.isFetching,v=d.isSuccess,h=d.data,b=d.error,y=(null==h||null===(e=h.report)||void 0===e?void 0:e.data)||[],k=(0,a.useState)([]),_=(0,p.Z)(k,2),T=_[0],I=_[1],w=(0,a.useState)([]),P=(0,p.Z)(w,2),S=P[0],C=P[1],x=(0,a.useState)(!1),D=(0,p.Z)(x,2),O=D[0],M=D[1],R=(0,a.useState)(!0),X=(0,p.Z)(R,2),ee=X[0],te=X[1],ne=(0,a.useState)(""),ae=(0,p.Z)(ne,2),re=ae[0],le=ae[1],ie=T.length,se=(0,l.useLocation)().search,ce=(0,a.useState)(!1),oe=(0,p.Z)(ce,2),ue=oe[0],me=oe[1],de=f||g||!ue,pe=E,Ee=v,fe=Ee&&0===y.length,ge=y.length>0&&0===T.length,ve=function(e,t){return te(!1),le(""),(0,Y.Lv)(u,s,e,t)};(0,a.useEffect)((function(){if(se){var e=(0,Y.yG)(se);if(e.sort){var t=(0,Y.Lg)(e.sort);e.sortIndex=J.P1.indexOf(t.name),e.sortDirection=t.direction}e.first&&(le(e.first),delete e.first),s($($({},u),e))}}),[]),(0,a.useEffect)((function(){I(be(y,u))}),[h,u]),(0,a.useEffect)((function(){C(ye(T,u.sortIndex,u.sortDirection)),me(!0)}),[T]);var he,be=function(e,n){me(!1);var a=new Set(S.filter((function(e){return null==e?void 0:e.isOpen})).map((function(e){var t;return null==e||null===(t=e.rule)||void 0===t?void 0:t.rule_id})));return e.filter((function(e){return(0,Y._F)(e,n)})).map((function(e,n){return[{rule:e,isOpen:O||(null==a?void 0:a.has(null==e?void 0:e.rule_id)),cells:[{title:r().createElement("div",null,(null==e?void 0:e.description)||(null==e?void 0:e.rule_id)," ",r().createElement(B.Z,{rule:e}))},{title:r().createElement("div",{key:n},r().createElement(Z(),{date:e.created_at,type:"relative",tooltipProps:{position:q.TooltipPosition.bottom}}))},e.impacted?{title:r().createElement("div",{key:n},r().createElement(Z(),{extraTitle:"".concat(t.formatMessage(o.Z.impacted),": "),date:e.impacted,type:"relative",tooltipProps:{position:q.TooltipPosition.bottom}}))}:{title:r().createElement(z.Tooltip,{key:n,content:r().createElement("span",null,t.formatMessage(o.Z.impacted)+": ",t.formatMessage(o.Z.nA))},r().createElement("span",null,t.formatMessage(o.Z.nA)))},{title:r().createElement("div",{key:n,style:{verticalAlign:"top"}},null!=e&&e.likelihood&&null!=e&&e.impact?r().createElement(z.Tooltip,{key:n,position:q.TooltipPosition.bottom,content:r().createElement("span",null,"The ",r().createElement("strong",null,"likelihood")," that this will be a problem is"," ",e.likelihood?J.FV[e.likelihood]:"unknown",".The ",r().createElement("strong",null,"impact")," of the problem would be"," ",e.impact?J.dz[e.impact]:"unknown"," ","if it occurred.")},r().createElement(N.Z,{value:e.total_risk,rest:{isCompact:!0}})):r().createElement(N.Z,{value:e.total_risk,rest:{isCompact:!0}}))}]},{fullWidth:!0,cells:[{title:r().createElement(V.Ge,{key:"child-".concat(n),report:{rule:e,resolution:e.resolution,details:e.extra_data}})}]}]}))},ye=function(e,t,n){var a=(0,F.Z)(e);if(t>=0&&!re){var r=n===U.SortByDirection.asc?1:-1;a=(0,F.Z)(e).sort((function(e,n){var a=e[0].rule[J.P1[t]],l=n[0].rule[J.P1[t]];return t===J.am&&(a=new Date(e[0].rule.impacted||0),l=new Date(n[0].rule.impacted||0)),a>l?r:l>a?-r:0}))}else if(re){var l=e.findIndex((function(e){var t=e[0].rule;return t.rule_id.split(".report")[0]===(0,H.Nq)(re)&&t.extra_data.error_key===(0,H.o6)(re)}));-1!==l&&a.unshift(a.splice(l,1)[0])}return a.flatMap((function(e,t){var n=(0,F.Z)(e);return ee&&0===t&&(e[0].isOpen=!0),e[1].parent=2*t,n}))},ke=[{label:"description",filterValues:{key:"text-filter",onChange:function(e,t){return ve("text",t)},value:u.text}},{label:J.W2.total_risk.title,type:J.W2.total_risk.type,id:J.W2.total_risk.urlParam,value:"checkbox-".concat(J.W2.total_risk.urlParam),filterValues:{key:"".concat(J.W2.total_risk.urlParam,"-filter"),onChange:function(e,t){return ve(J.W2.total_risk.urlParam,t)},value:u.total_risk,items:J.W2.total_risk.values}},{label:J.W2.category.title,type:J.W2.category.type,id:J.W2.category.urlParam,value:"checkbox-".concat(J.W2.category.urlParam),filterValues:{key:"".concat(J.W2.category.urlParam,"-filter"),onChange:function(e,t){return ve(J.W2.category.urlParam,t)},value:u.category,items:J.W2.category.values}}],_e={deleteTitle:t.formatMessage(o.Z.resetFilters),filters:(he=$({},u),delete he.sortIndex,delete he.sortDirection,function(e,n){var a=Object.entries(e);return a.length>0?a.reduce((function(e,a){if(n[a[0]]){var r=n[a[0]],l=Array.isArray(a[1])?a[1].map((function(e){var t=r.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:r.values.find((function(e){return e.value===String(a[1])})).label,value:a[1]}];return[].concat((0,F.Z)(e),[{category:A()(r.title),chips:l,urlParam:r.urlParam}])}return"text"===a[0]?[].concat((0,F.Z)(e),(0,F.Z)(a[1].length>0?[{category:t.formatMessage(o.Z.description),chips:[{name:a[1],value:a[1]}],urlParam:a[0]}]:[])):e}),[]):[]}(he,J.W2)),onDelete:function(e,t,n){n?(0,G.aw)(u,G.OF,s):t.map((function(e){var t,n=(0,W.Z)({},e.urlParam,Array.isArray(u[e.urlParam])?u[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");n[e.urlParam].length>0?s($($({},u),n)):(t=e.urlParam,(0,Y.oo)(u,s,t))}))}};return r().createElement("div",{id:"cluster-recs-list-table","data-ouia-safe":!de},r().createElement(L.Z,{filterConfig:{items:ke,isDisabled:de||pe||0===y.length},pagination:r().createElement(r().Fragment,null,1===ie?"".concat(ie," ").concat(t.formatMessage(o.Z.recommendation)):"".concat(ie," ").concat(t.formatMessage(o.Z.recommendations))),activeFiltersConfig:de||pe||0===y.length?void 0:_e}),r().createElement(U.Table,{"aria-label":"Cluster recommendations table",ouiaId:"recommendations",ouiaSafe:!de,onCollapse:function(e,t,n){void 0===t?(M(n),C(S.map((function(e){return $($({},e),{},{isOpen:n})})))):C(S.map((function(e,a){return a===t?$($({},e),{},{isOpen:n}):e})))},rows:pe||de||ge||fe?[{fullWidth:!0,cells:[{props:{colSpan:J.d3.length+1},title:pe?404===(null==b?void 0:b.status)?r().createElement(K.Eo,null):r().createElement(K.S3,null):de?r().createElement(Q.Z,null):fe?r().createElement(K.sV,null):r().createElement(K.A0,null)}]}]:Ee?S:r().createElement(K.Te,null),cells:J.d3,sortBy:{index:u.sortIndex,direction:u.sortDirection},onSort:function(e,t,n){return me(!1),te(!1),le(""),s($($({},u),{},{sortIndex:t,sortDirection:n}))},variant:U.TableVariant.compact,isStickyHeader:!0,canCollapseAll:!0},r().createElement(U.TableHeader,null),r().createElement(U.TableBody,null)))};var te=n(219),ne=n(86728),ae=n(36001),re=n(21193),le=n(23218),ie=n(67463),se=n(19694),ce=n(2443),oe=n(84564),ue=n(31369),me=n(35451),de={critical:r().createElement(re.J,{status:"danger"},r().createElement(oe.default,null)),warning:r().createElement(re.J,{status:"warning"},r().createElement(se.default,null)),info:r().createElement(re.J,{status:"info"},r().createElement(ue.default,null)),success:r().createElement(re.J,{status:"success"},r().createElement(me.default,null))},pe={critical:r().createElement(ae.k,{alignItems:{default:"alignItemsCenter"}},de.critical," ",r().createElement("b",null,"Critical")),warning:r().createElement(ae.k,{alignItems:{default:"alignItemsCenter"}},de.warning," ",r().createElement("b",null,"Warning")),info:r().createElement(ae.k,{alignItems:{default:"alignItemsCenter"}},de.info," ",r().createElement("b",null,"Info"))},Ee=["critical","warning","info"];const fe=function(){var e,t=(0,l.useParams)().clusterId,n=(0,c.nY)({id:t}).data,a=((null==n||null===(e=n.upgrade_recommendation)||void 0===e?void 0:e.upgrade_risks_predictors)||{}).alerts,i=void 0===a?[]:a;return r().createElement(U.TableComposable,{"aria-label":"Alerts firing table",variant:"compact",borders:!1},r().createElement(U.Thead,null,r().createElement(U.Tr,null,r().createElement(U.Th,{width:50},"Name"),r().createElement(U.Th,{width:25},"Status"),r().createElement(U.Th,{width:25},"Namespace"))),r().createElement(U.Tbody,null,i.map((function(e){var t=e.name,n=e.namespace,a=e.severity,l=e.url,i=void 0===l?"":l;return r().createElement(U.Tr,{key:t},r().createElement(U.Td,{className:"alerts__name"},""===i?t:r().createElement("a",{href:i},t)),r().createElement(U.Td,{className:"alerts__severity"},pe[a]),r().createElement(U.Td,{className:"alerts__namespace"},n))}))))},ge=function(){var e,t=(0,l.useParams)().clusterId,n=(0,c.nY)({id:t}).data,a=((null==n||null===(e=n.upgrade_recommendation)||void 0===e?void 0:e.upgrade_risks_predictors)||{}).operator_conditions,i=void 0===a?[]:a;return r().createElement(U.TableComposable,{"aria-label":"Cluster operators firing table",variant:"compact",borders:!1},r().createElement(U.Thead,null,r().createElement(U.Tr,null,r().createElement(U.Th,{width:50},"Name"),r().createElement(U.Th,{width:25},"Status"),r().createElement(U.Th,{width:25},"Message"))),r().createElement(U.Tbody,null,i.map((function(e){var t=e.name,n=e.condition,a=e.reason,l=e.url,i=void 0===l?"":l;return r().createElement(U.Tr,{key:t},r().createElement(U.Td,{class:"operators__name"},""===i?t:r().createElement("a",{href:i},t)),r().createElement(U.Td,{class:"operators__status"},r().createElement(ae.k,{alignItems:{default:"alignItemsCenter"}},r().createElement(re.J,{status:"warning"},r().createElement(se.default,null)),r().createElement("b",null,n))),r().createElement(U.Td,{class:"operators__message"},a||"-"))}))))},ve=function(){var e,t=(0,l.useParams)().clusterId,n=(0,c.vl)({id:t}),i=n.isError,s=n.isUninitialized,o=n.isFetching,u=n.isSuccess,m=n.data,d=n.error,E=(null==m||null===(e=m.upgrade_recommendation)||void 0===e?void 0:e.upgrade_risks_predictors)||{},f=E.alerts,g=void 0===f?[]:f,v=E.operator_conditions,h=void 0===v?[]:v,b=0===g.length,y=0===h.length,k=(0,a.useState)(!0),_=(0,p.Z)(k,2),T=_[0],Z=_[1],I=(0,a.useState)(!0),w=(0,p.Z)(I,2),P=w[0],S=w[1];(0,a.useEffect)((function(){Z(!b),S(!y)}),[m]);var C=u&&(g.length>0||h.length>0),x=u&&0===g.length&&0===h.length;return s||o?r().createElement(te.EmptyState,null,r().createElement(ne.EmptyStateIcon,{variant:"container",component:ie.Spinner})):r().createElement(U.TableComposable,{"aria-label":"Update risks table",isExpandable:!0,variant:"compact",id:"update-risks-table",borders:C},r().createElement(U.Thead,null,r().createElement(U.Tr,null,r().createElement(U.Th,null),r().createElement(U.Th,null,"Name"))),C?r().createElement(r().Fragment,null,r().createElement(U.Tbody,{isExpanded:T},r().createElement(U.Tr,{className:"alerts__header"},r().createElement(U.Td,{expand:b?{}:{rowIndex:0,isExpanded:T,onToggle:function(){return Z(!T)}}}),r().createElement(U.Td,null,r().createElement(ae.k,{alignItems:{default:"alignItemsCenter"}},b?de.success:de[Ee.filter((function(e){return g.some((function(t){var n=t.severity;return e===n}))}))[0]],r().createElement("b",null,"Alerts firing"),r().createElement(le.Label,{isCompact:!0,id:"alerts-label",color:b?"green":"grey"},g.length," update risks")))),r().createElement(U.Tr,{isExpanded:T,className:"alerts__content"},r().createElement(U.Td,null),r().createElement(U.Td,null,r().createElement(U.ExpandableRowContent,null,r().createElement(fe,null))))),r().createElement(U.Tbody,{isExpanded:P},r().createElement(U.Tr,{className:"operators__header"},r().createElement(U.Td,{expand:y?void 0:{rowIndex:1,isExpanded:P,onToggle:function(){return S(!P)}}}),r().createElement(U.Td,null,r().createElement(ae.k,{alignItems:{default:"alignItemsCenter"}},y?de.success:r().createElement(re.J,{status:"warning"},r().createElement(se.default,null)),r().createElement("b",null,"Cluster operators"),r().createElement(le.Label,{isCompact:!0,id:"operator-conditions-label",color:y?"green":"grey"},h.length," update risks")))),r().createElement(U.Tr,{isExpanded:P,className:"operators__content"},r().createElement(U.Td,null),r().createElement(U.Td,null,r().createElement(U.ExpandableRowContent,null,r().createElement(ge,null)))))):r().createElement(U.Tbody,null,r().createElement(U.Tr,null,r().createElement(U.Td,{colSpan:2},x?r().createElement(K.Yr,null):i&&404===d.status?r().createElement(K.rl,null):r().createElement(ce.Z,null)))))};var he=n(27361),be=n.n(he);const ye=function(){var e=(0,s.Z)().analytics,t=(0,l.useParams)().clusterId,n=(0,c.nY)({id:t}),i=n.isError,o=n.isSuccess,u=n.data;return(0,a.useEffect)((function(){(i||o)&&e.track("ocp-upgrade-risks-viewed",{cluster_id:t,upgrade_recommended:be()(u,"upgrade_recommendation.upgrade_recommended",null)})}),[i,o]),r().createElement(r().Fragment,null)};var ke=n(79161);const _e=function(e){var t=(0,ke.ji)(),n=e||(0,l.useParams)().clusterId,a=(0,c.S0)({id:n}),r=be()(a,"data.managed",!0);return t&&!r};var Te=["recommendations","update_risks"];const Ze=function(){var e=(0,i.Z)(),t=(0,l.useSearchParams)(),n=(0,p.Z)(t,1)[0],s=(0,l.useParams)().clusterId,c=_e(s),u=(0,a.useState)("recommendations"),m=(0,p.Z)(u,2),d=m[0],E=m[1];return(0,a.useEffect)((function(){var e=n.get("active_tab");E(c&&Te.includes(e)?e:"recommendations")}),[c]),r().createElement(C.Card,{isCompact:!0},r().createElement(x.CardBody,null,r().createElement(O.mQ,{activeKey:d,onSelect:function(e,t){(0,M.o)("active_tab",t),E(t)},"aria-label":"Cluster tabs"},r().createElement(D.O,{eventKey:"recommendations",title:e.formatMessage(o.Z.recommendations),ouiaId:"recommendations-tab"},"recommendations"===d&&r().createElement(ee,null)),c&&r().createElement(D.O,{eventKey:"update_risks",title:e.formatMessage(o.Z.updateRisks),ouiaId:"update-risks-tab"},"update_risks"===d&&r().createElement(r().Fragment,null,r().createElement(ye,null),r().createElement(ve,null))))))};var Ie=n(42057),we=n(29572),Pe=n(70044);const Se=function(){var e,t=(0,i.Z)(),n=(0,l.useParams)().clusterId,a=(0,c.vl)({id:n}),s=a.isError,u=a.isUninitialized,m=a.isFetching,d=a.isSuccess,p=a.data,E=a.error,f=(null==p||null===(e=p.upgrade_recommendation)||void 0===e?void 0:e.upgrade_risks_predictors)||{},g=f.alerts,v=void 0===g?[]:g,h=f.operator_conditions,b=void 0===h?[]:h,y=d&&(v.length>0||b.length>0),k=d&&0===v.length&&0===b.length;return u||m?r().createElement(r().Fragment,null):y?r().createElement(Pe.bZ,{variant:"warning",isInline:!0,title:t.formatMessage(o.Z.resolveUpdateRisks),ouiaId:"update-risks-alert"},t.formatMessage(o.Z.resolveUpdateRisksDesc,{strong:M.f})):k?r().createElement(Pe.bZ,{variant:"success",isInline:!0,title:t.formatMessage(o.Z.noKnownUpdateRisks),ouiaId:"update-risks-alert"}):s&&404===E.status?r().createElement(Pe.bZ,{variant:"warning",isInline:!0,title:t.formatMessage(o.Z.updateRisksNotCurrentlyAvailable),ouiaId:"update-risks-alert"},t.formatMessage(o.Z.updateRisksNotAvailableDesc)):r().createElement(r().Fragment,null)};var Ce=function(e){var t,n=e.cluster,a=e.clusterId,l=_e(a);return r().createElement(r().Fragment,null,r().createElement(d.Z,{className:"pf-m-light ins-inventory-detail"},r().createElement(ae.k,{direction:{default:"column"}},r().createElement(Ie.B,null,r().createElement(S.Z,{current:(null==n||null===(t=n.data)||void 0===t?void 0:t.report.meta.cluster_name)||a}),r().createElement(P,null)),l&&r().createElement(Se,null))),r().createElement(we.NP,null,r().createElement(Ze,{cluster:n})))};Ce.propTypes={cluster:m().object.isRequired,clusterId:m().string.isRequired};const xe=function(){var e=(0,i.Z)(),t=(0,l.useParams)().clusterId,n=(0,c.th)({id:t,includeDisabled:!1}),u=(0,s.Z)();return(0,a.useEffect)((function(){n.refetch()}),[t]),(0,a.useEffect)((function(){var a,r,l,i="".concat((null==n||null===(a=n.data)||void 0===a||null===(r=a.report)||void 0===r||null===(l=r.meta)||void 0===l?void 0:l.cluster_name)||t," - ").concat(e.formatMessage(o.Z.clusters));u.updateDocumentTitle(e.formatMessage(o.Z.documentTitle,{subnav:i}))}),[n,t]),r().createElement(Ce,{cluster:n,clusterId:t})}},90670:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(76004),r=n(23218),l=n(45697),i=n.n(l),s=n(92950),c=n.n(s),o=n(86896),u=n(30893),m=function(e){var t=e.rule,n=(0,o.Z)();return c().createElement(c().Fragment,null,t.disabled&&c().createElement(a.Tooltip,{content:n.formatMessage(u.Z.ruleIsDisabledTooltip),position:a.TooltipPosition.right},c().createElement(r.Label,{color:"gray",isCompact:!0},n.formatMessage(u.Z.disabled))))};m.propTypes={rule:i().object};const d=m},45467:()=>{},81754:()=>{},32857:()=>{},30187:()=>{},44839:()=>{},21064:()=>{},82014:()=>{},98379:()=>{},92084:()=>{},56024:()=>{},43390:()=>{},72816:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/ClusterDetails.90223b2b44dd369d73600a01db4bbc46.js.map