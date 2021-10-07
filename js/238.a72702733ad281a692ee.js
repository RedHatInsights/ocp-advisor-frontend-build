"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[238],{59303:(e,a,t)=>{t.d(a,{As:()=>p,dz:()=>m,kT:()=>v,W2:()=>y,FV:()=>M,w7:()=>h});var l=t(4942),s=t(82644),i=t(29558),r=t(13976),o=t(30893),n=(0,s.Sn)(),u=navigator.language.slice(0,2),c=(0,i.d)({onError:console.error,locale:u},n),d={locale:u},p={1:(0,r.Z)(c.formatMessage(o.Z.low),d),2:(0,r.Z)(c.formatMessage(o.Z.medium),d),3:(0,r.Z)(c.formatMessage(o.Z.high),d),4:(0,r.Z)(c.formatMessage(o.Z.critical),d)},m={1:(0,r.Z)(c.formatMessage(o.Z.low),d),2:(0,r.Z)(c.formatMessage(o.Z.medium),d),3:(0,r.Z)(c.formatMessage(o.Z.high),d),4:(0,r.Z)(c.formatMessage(o.Z.critical),d)},f={1:(0,r.Z)(c.formatMessage(o.Z.low),d),2:(0,r.Z)(c.formatMessage(o.Z.moderate),d),3:(0,r.Z)(c.formatMessage(o.Z.important),d),4:(0,r.Z)(c.formatMessage(o.Z.critical),d)},g={1:(0,r.Z)(c.formatMessage(o.Z.veryLow),d),2:(0,r.Z)(c.formatMessage(o.Z.low),d),3:(0,r.Z)(c.formatMessage(o.Z.moderate),d),4:(0,r.Z)(c.formatMessage(o.Z.high),d)},v={service_availability:1,performance:2,fault_tolerance:3,security:4},y={total_risk:{type:"checkbox",title:"total risk",urlParam:"total_risk",values:[{label:f[4],value:"4"},{label:f[3],value:"3"},{label:f[2],value:"2"},{label:f[1],value:"1"}]},res_risk:{type:"checkbox",title:"risk of change",urlParam:"res_risk",values:[{label:g[4],value:"4"},{label:g[3],value:"3"},{label:g[2],value:"2"},{label:g[1],value:"1"}]},impact:{type:"checkbox",title:"impact",urlParam:"impact",values:[{label:m[4],value:"4"},{label:m[3],value:"3"},{label:m[2],value:"2"},{label:m[1],value:"1"}]},likelihood:{type:"checkbox",title:"likelihood",urlParam:"likelihood",values:[{label:p[4],value:"4"},{label:p[3],value:"3"},{label:p[2],value:"2"},{label:p[1],value:"1"}]},rule_status:{type:"radio",title:"status",urlParam:"rule_status",values:[{label:(0,r.Z)(c.formatMessage(o.Z.all),d),value:"all"},{label:(0,r.Z)(c.formatMessage(o.Z.enabled),d),value:"enabled"},{label:(0,r.Z)(c.formatMessage(o.Z.disabled),d),value:"disabled"}]},category:{type:"checkbox",title:"category",urlParam:"category",values:[{label:(0,r.Z)(c.formatMessage(o.Z.serviceAvailability),d),value:"".concat(v.service_availability)},{label:(0,r.Z)(c.formatMessage(o.Z.performance),d),value:"".concat(v.performance)},{label:(0,r.Z)(c.formatMessage(o.Z.faultTolerance),d),value:"".concat(v.fault_tolerance)},{label:(0,r.Z)(c.formatMessage(o.Z.security),d),value:"".concat(v.security)}]}},M=(0,l.Z)({},y.rule_status.urlParam,"enabled"),h={"Application Crash":2,"Application Failure":2,"Application Not Connectable":2,"Authentication Bypass":3,"Best Practice":1,"Boot Failure":3,"Cluster Availability":2,"Compatibility Error":2,"Container Creation Failure":2,"Container Inoperation":3,"Data Loss":4,"Data Corruption":3,"Database Performance Loss":2,"Database Inconsistency":4,"Database Availability":2,"Decreased Security":2,"Denial Of Service":3,"Diagnostics Failure":1,"Docker Metadata Inconsistency":2,"Filesystem Corruption":2,Hardening:1,"Hung Task":3,"Inaccessible Storage":3,"Inconsistent Network Interface Name":2,"Information Disclosure":3,"Insecure Encryption":2,"Invalid Configuration":1,"Kernel Panic":3,"Link Down":3,"Long Restart Time":2,"Malware Detected":3,"Man In The Middle":4,"Management Availability":2,"Mount Failure":3,"Network Connection Hang":3,"Network Connectivity Loss":3,"Network Interface Hang":3,"Network Performance Loss":2,"Network Setup Failure":3,"NFS Mount Stuck":2,"Offline Storage":2,"OpenShift Performance Loss":2,"OpenShift Upgrade Failure":2,"OpenStack Performance Loss":2,"Packet Loss":2,"Privilege Escalation":3,"Product Supportability":2,"Remote Code Execution":4,"RHV Upgrade Failure":3,"Service Crash":2,"Service Inoperation":2,Statistics:1,"Storage Excessive Consumption":2,"Storage Performance Loss":2,"Support Unavailable":1,"Suspicious Activity":2,"System Performance Loss":2,"System Stability Loss":3,"Unapplied Configuration":2,"Undercloud Upgrade Failure":3,"Unmount Failure":2,"Unsupported Hardware":2,"Unsupported Packet":1,"Unsupported Functionality":3,"Unsupported Filesystem":2,"VM Clone Failure":2,"VM Crash":2,"VM Migration Failure":3,"VM Performance Loss":2,"VM Start Failure":3,"Kdump Failure":1,"Application Hang":2,"Service Inoperative":2,null:1,"Volume Type Variation":1,"Instance Type Variation":1,"High Cost with Over-provisioned Instance Type Node":1,"Low Density Node":1}},39545:(e,a,t)=>{t.d(a,{Z:()=>g});var l=t(93264),s=t.n(l),i=t(45697),r=t.n(i),o=t(16530),n=t(29439),u=t(86896),c=t(85991),d=t(49489),p=t(30893),m=function(e){var a=e.current,t=e.match,i=(0,u.Z)(),r=(0,l.useState)([]),o=(0,n.Z)(r,2),m=o[0],f=o[1],g=(0,l.useCallback)((function(){var e=[],a=t.url.split("/");e.push({title:"".concat(i.formatMessage(p.Z.insightsHeader)," ").concat(a[1]),navigate:"/".concat(a[1])}),f(e)}),[i,t.params.clusterId,t.url]);return(0,l.useEffect)((function(){g()}),[g,t.params.clusterId,t.url]),s().createElement(s().Fragment,null,m.length>0&&s().createElement(c.a,{ouiaId:"detail"},m.map((function(e,a){return s().createElement(d.g,{key:a},s().createElement("span",null,e.title))})),s().createElement(d.g,{isActive:!0},a)))};m.propTypes={current:r().string,match:r().object.isRequired};var f=function(e){var a=e.current;return s().createElement(m,{current:a,match:(0,o.useRouteMatch)()})};f.propTypes={current:r().string.isRequired};const g=f},52661:(e,a,t)=>{t.d(a,{Z:()=>n});var l=t(2095),s=t(85962),i=t(24561),r=t(93264),o=t.n(r);const n=function(){return o().createElement(l.Card,null,o().createElement(s.CardBody,null,o().createElement(i.aV,null)))}},51957:(e,a,t)=>{t.d(a,{Z:()=>m});var l=t(219),s=t(96733),i=t(74183),r=t(86728),o=t(45697),n=t.n(o),u=t(93264),c=t.n(u),d=t(34348),p=function(e){var a=e.className,t=e.children,s=e.icon,o=e.iconClass,n=e.iconStyle,u=e.text,p=e.title,m=e.variant;return c().createElement(l.EmptyState,{className:a,variant:m},"none"!==s&&c().createElement(r.EmptyStateIcon,{className:o,style:n,icon:s}),c().createElement(d.Title,{headingLevel:"h5",size:"lg"},p),c().createElement(i.EmptyStateBody,{style:{marginBottom:"16px"}},u),t)};p.propTypes={children:n().any,icon:n().any,iconClass:n().any,iconStyle:n().any,text:n().any,title:n().string,variant:n().any,className:n().string},p.defaultProps={icon:s.ZP,title:"",variant:l.EmptyStateVariant.full};const m=p},31728:(e,a,t)=>{t.d(a,{Z:()=>p});var l=t(76004),s=t(23218),i=t(45697),r=t.n(i),o=t(93264),n=t.n(o),u=t(86896),c=t(30893),d=function(e){var a=e.rule,t=(0,u.Z)();return n().createElement(n().Fragment,null,a.disabled&&n().createElement(l.Tooltip,{content:t.formatMessage(c.Z.ruleIsDisabledTooltip),position:l.TooltipPosition.right},n().createElement(s.Label,{color:"gray"},t.formatMessage(c.Z.disabled))))};d.propTypes={rule:r().object};const p=d},30893:(e,a,t)=>{t.d(a,{Z:()=>l});const l=(0,t(50049).vU)({documentTitle:{id:"documentTitle",defaultMessage:[{type:1,value:"subnav"},{type:0,value:" - OCP Advisor | Red Hat Insights"}]},clusters:{id:"clusters",defaultMessage:[{type:0,value:"Clusters"}]},added:{id:"added",defaultMessage:[{type:0,value:"Added"}]},loading:{id:"loading",defaultMessage:[{type:0,value:"Loading"}]},lastSeen:{id:"lastSeen",defaultMessage:[{type:0,value:"Last seen"}]},actions:{id:"actions",defaultMessage:[{type:0,value:"Actions"}]},name:{id:"name",defaultMessage:[{type:0,value:"Name"}]},description:{id:"description",defaultMessage:[{type:0,value:"Description"}]},filterBy:{id:"filterBy",defaultMessage:[{type:0,value:"Filter by name"}]},totalRisk:{id:"totalRisk",defaultMessage:[{type:0,value:"Total risk"}]},recommendation:{id:"recommendation",defaultMessage:[{type:0,value:"Recommendation"}]},recommendations:{id:"recommendations",defaultMessage:[{type:0,value:"Recommendations"}]},insightsHeader:{id:"insightsHeader",defaultMessage:[{type:0,value:"Advisor"}]},unknown:{id:"unknown",defaultMessage:[{type:0,value:"Unknown"}]},low:{id:"low",defaultMessage:[{type:0,value:"Low"}]},moderate:{id:"moderate",defaultMessage:[{type:0,value:"Moderate"}]},important:{id:"important",defaultMessage:[{type:0,value:"Important"}]},critical:{id:"critical",defaultMessage:[{type:0,value:"Critical"}]},veryLow:{id:"veryLow",defaultMessage:[{type:0,value:"Very Low"}]},medium:{id:"medium",defaultMessage:[{type:0,value:"Medium"}]},high:{id:"high",defaultMessage:[{type:0,value:"High"}]},serviceAvailability:{id:"serviceAvailability",defaultMessage:[{type:0,value:"Service Availability"}]},performance:{id:"performance",defaultMessage:[{type:0,value:"Performance"}]},faultTolerance:{id:"faultTolerance",defaultMessage:[{type:0,value:"Fault Tolerance"}]},security:{id:"security",defaultMessage:[{type:0,value:"Security"}]},enabled:{id:"enabled",defaultMessage:[{type:0,value:"Enabled"}]},impact:{id:"impact",defaultMessage:[{type:0,value:"Impact"}]},impactLevel:{id:"impactLevel",defaultMessage:[{type:1,value:"level"},{type:0,value:" impact"}]},impactDescription:{id:"impactDescription",defaultMessage:[{type:0,value:"The impact of the problem would be "},{type:1,value:"level"},{type:0,value:" if it occurred."}]},category:{id:"category",defaultMessage:[{type:0,value:"Category"}]},likelihood:{id:"likelihood",defaultMessage:[{type:0,value:"Likelihood"}]},likelihoodLevel:{id:"likelihoodLevel",defaultMessage:[{type:1,value:"level"},{type:0,value:" likelihood"}]},likelihoodDescription:{id:"likelihoodDescription",defaultMessage:[{type:0,value:"The likelihood that this will be a problem is "},{type:1,value:"level"},{type:0,value:"."}]},all:{id:"all",defaultMessage:[{type:0,value:"All"}]},disabled:{id:"disabled",defaultMessage:[{type:0,value:"Disabled"}]},resetFilters:{id:"resetFilters",defaultMessage:[{type:0,value:"Reset filters"}]},noMatchingRecommendations:{id:"noMatchingRecommendations",defaultMessage:[{type:0,value:"No matching recommendations found"}]},noMatchingRecommendationsDesc:{id:"noMatchingRecommendationsDesc",defaultMessage:[{type:0,value:"This filter criteria matches no recommendations. Try changing your filter settings."}]},noRecommendations:{id:"noRecommendations",defaultMessage:[{type:0,value:"None of your connected clusters are affected by any known recommendations."}]},noRecommendationsDesc:{id:"noRecommendationsDesc",defaultMessage:[{type:0,value:"No known recommendations affect this cluster."}]},ruleIsDisabledTooltip:{id:"ruleIsDisabledTooltip",defaultMessage:[{type:0,value:"Indicates this recommendation will not be shown for the cluster."}]},rulesDetailsPubishdate:{id:"rulesdetails.publishdate",defaultMessage:[{type:0,value:"Publish date: "},{type:1,value:"date"}]},knowledgebaseArticle:{id:"knowledgebasearticle",defaultMessage:[{type:0,value:"Knowledgebase article"}]},viewAffectedClusters:{id:"viewAffectedClusters",defaultMessage:[{type:0,value:"View "},{type:6,value:"clusters",options:{one:{value:[{type:0,value:"the affected cluster"}]},other:{value:[{type:7},{type:0,value:" affected clusters"}]}},offset:0,pluralType:"cardinal"}]},ruleFetchError:{id:"ruleFetchError",defaultMessage:[{type:0,value:"There was an error fetching recommendation. Refresh your page to try again."}]},affectedClusters:{id:"affectedClusters",defaultMessage:[{type:0,value:"Affected clusters"}]},noRecsError:{id:"noRecsError",defaultMessage:[{type:0,value:"No recommendations available."}]},noRecsErrorDesc:{id:"noRecsErrorDesc",defaultMessage:[{type:0,value:"There was an error fetching recommendations for this cluster. Refresh your page to try again."}]},noClustersError:{id:"noClustersError",defaultMessage:[{type:0,value:"No data about affected clusters"}]},noClustersErrorDesc:{id:"noClustersErrorDesc",defaultMessage:[{type:0,value:"There was an error fetching affected clusters for this recommendation."}]},unableToConnect:{id:"unableToConnect",defaultMessage:[{type:0,value:"Unable to connect"}]},unableToConnectDesc:{id:"unableToConnectDesc",defaultMessage:[{type:0,value:"There was an error retrieving data. Check your connection and try again."}]},noAffectedClustersTitle:{id:"noAffectedClustersTitle",defaultMessage:[{type:0,value:"No clusters"}]},noAffectedClustersBody:{id:"noAffectedClustersBody",defaultMessage:[{type:0,value:"This recommendation doesn’t affect any cluster."}]},noMatchingClustersTitle:{id:"noMatchingClustersTitle",defaultMessage:[{type:0,value:"No matching clusters found"}]},noMatchingClustersBody:{id:"noMatchingClustersDesc",defaultMessage:[{type:0,value:"To continue, edit your filter settings and search again."}]},errorStateTitle:{id:"errorStateTitle",defaultMessage:[{type:0,value:"Something went wrong"}]},errorStateBody:{id:"errorStateBody",defaultMessage:[{type:0,value:"There was a problem processing the request. Please try again."}]}})}}]);
//# sourceMappingURL=../sourcemaps/238.525572fb933c1acc874b.js.map