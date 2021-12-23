"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[414],{29306:(e,t,a)=>{a.d(t,{Z:()=>K});var s=a(29439),r=a(93264),l=a.n(r),n=a(88931),o=a(16530),i=a(86896),u=a(45697),d=a.n(u),c=a(96533),m=a(70130),f=a(83215),y=a(8896),p=a(75663),g=a(42151),h=a(76),v=a(21964),b=a(86170),M=(0,r.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(736),a.e(303),a.e(661),a.e(873),a.e(276),a.e(619)]).then(a.bind(a,39697))})),R=(0,r.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(736),a.e(303),a.e(661),a.e(788),a.e(873),a.e(392),a.e(276),a.e(987)]).then(a.bind(a,52772))})),E=(0,r.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(736),a.e(661),a.e(9)]).then(a.bind(a,12036))})),T=[{title:"Clusters",path:"/clusters/:clusterId",component:M},{title:"Clusters",path:"/clusters",component:(0,r.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(736),a.e(303),a.e(661),a.e(913),a.e(420)]).then(a.bind(a,67636))}))},{title:"Recommendations",path:"/recommendations/:recommendationId",component:R},{title:"Recommendations",path:"/recommendations",component:E}],C=function(){return l().createElement(r.Suspense,{fallback:l().createElement(h.Bullseye,null,l().createElement(g.Spinner,null))},l().createElement(o.Switch,null,T.map((function(e){return l().createElement(o.Route,{key:e.title,path:e.path,component:e.component})})),l().createElement(o.Redirect,{exact:!0,from:"/",to:"/recommendations"}),l().createElement(o.Route,{path:"*",component:function(){return l().createElement(v.EmptyState,null,l().createElement(v.EmptyStateBody,null,l().createElement(b.Z,null)))}})))},D=a(15671),S=a(43144),w=a(60136),k=a(82963),I=a(61120),A=a(74806),B=a(51014);var F=function(e){(0,w.Z)(r,e);var t,a,s=(t=r,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,s=(0,I.Z)(t);if(a){var r=(0,I.Z)(this).constructor;e=Reflect.construct(s,arguments,r)}else e=s.apply(this,arguments);return(0,k.Z)(this,e)});function r(e){var t;return(0,D.Z)(this,r),(t=s.call(this,e)).state={hasError:!1},t}return(0,S.Z)(r,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?l().createElement(y.Bullseye,null,l().createElement(B.Te,null)):this.props.children}}]),r}(l().Component);F.propTypes={children:d().node.isRequired};const L=(0,A.ZP)(F);var Z,P=a(51957),N=a(30893),q=a(4942),_=a(24268),x=a(94500),z=a.n(x),O=a(71355),Q=a(43),H=a(86362),U=a(28672),G=a(77647),j=(Z={},(0,q.Z)(Z,H.n_.reducerPath,H.n_.reducer),(0,q.Z)(Z,Q.b.reducerPath,Q.b.reducer),(0,q.Z)(Z,"filters",U.ZP),(0,q.Z)(Z,"notifications",f.ee),(0,q.Z)(Z,G.jz.reducerPath,G.jz.reducer),Z);const J=function(e){return(0,_.xC)({reducer:j,middleware:function(t){var a=t().concat(H.n_.middleware,Q.b.middleware,G.jz.middleware,(0,O.uv)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]}));return e&&a.concat(z()),a}})};var V=function(e){var t=e.useLogger,a=(0,i.Z)(),u=(0,o.useHistory)(),d=(0,r.useState)(!1),h=(0,s.Z)(d,2),v=h[0],b=h[1],M=(0,r.useState)(!0),R=(0,s.Z)(M,2),E=R[0],T=R[1];return(0,r.useEffect)((function(){(0,m.JH)().register({notifications:f.ee}),insights.chrome.init(),insights.chrome.auth.getUser().then((function(){b(!0),T(!1)})),insights.chrome.identifyApp("ocp-advisor");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return u.push("/".concat(e.navId))}));return function(){return e()}}),[]),l().createElement(L,null,E?l().createElement(y.Bullseye,null,l().createElement(g.Spinner,null)):v?l().createElement(n.Provider,{store:J(t)},l().createElement(c.ZP,null),l().createElement(C,null)):l().createElement(y.Bullseye,null,l().createElement(P.Z,{variant:"large",icon:p.ZP,title:a.formatMessage(N.Z.permsTitle),text:a.formatMessage(N.Z.permsBody)})))};V.propTypes={useLogger:d().bool},V.defaultProps={useLogger:!1};const K=V},51014:(e,t,a)=>{a.d(t,{Te:()=>p,mi:()=>g,VA:()=>h,A0:()=>v});var s=a(93264),r=a(86896),l=(a(16530),a(88292)),n=a(47778),o=a(21964),i=a(84564),u=a(35451),d=a(34713),c=a(7193),m=a(53472),f=a(51957),y=a(30893),p=function(){var e=(0,r.Z)();return s.createElement(o.EmptyState,null,s.createElement(o.EmptyStateIcon,{icon:i.default,color:c.Q7.value}),s.createElement(n.Title,{headingLevel:"h4",size:"lg"},e.formatMessage(y.Z.errorStateTitle)),s.createElement(o.EmptyStateBody,null,s.createElement(l.Stack,null,s.createElement(l.StackItem,null,e.formatMessage(y.Z.errorStateBody)),s.createElement(l.StackItem,null,s.createElement(m.Z,null)))))},g=function(){var e=(0,r.Z)();return s.createElement(o.EmptyState,null,s.createElement(o.EmptyStateIcon,{icon:u.default,color:d.gP.value}),s.createElement(n.Title,{headingLevel:"h4",size:"lg"},e.formatMessage(y.Z.noAffectedClustersTitle)),s.createElement(o.EmptyStateBody,null,e.formatMessage(y.Z.noAffectedClustersBody)))},h=function(){var e=(0,r.Z)();return s.createElement(o.EmptyState,null,s.createElement(n.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(y.Z.noMatchingClustersTitle)),s.createElement(o.EmptyStateBody,null,e.formatMessage(y.Z.noMatchingClustersBody)))},v=function(){var e=(0,r.Z)();return s.createElement(f.Z,{title:e.formatMessage(y.Z.noMatchingRecsTitle),text:e.formatMessage(y.Z.noMatchingRecsBody),icon:u.default,iconStyle:{color:d.gP.value}})}},51957:(e,t,a)=>{a.d(t,{Z:()=>f});var s=a(219),r=a(96733),l=a(74183),n=a(86728),o=a(45697),i=a.n(o),u=a(93264),d=a.n(u),c=a(34348),m=function(e){var t=e.className,a=e.children,r=e.icon,o=e.iconClass,i=e.iconStyle,u=e.text,m=e.title,f=e.variant;return d().createElement(s.EmptyState,{className:t,variant:f},"none"!==r&&d().createElement(n.EmptyStateIcon,{className:o,style:i,icon:r}),d().createElement(c.Title,{headingLevel:"h5",size:"lg"},m),d().createElement(l.EmptyStateBody,{style:{marginBottom:"16px"}},u),a)};m.propTypes={children:i().any,icon:i().any,iconClass:i().any,iconStyle:i().any,text:i().any,title:i().string,variant:i().any,className:i().string},m.defaultProps={icon:r.ZP,title:"",variant:s.EmptyStateVariant.full};const f=m},30893:(e,t,a)=>{a.d(t,{Z:()=>s});const s=(0,a(50049).vU)({documentTitle:{id:"documentTitle",defaultMessage:[{type:1,value:"subnav"},{type:0,value:" - OCP Advisor | Red Hat Insights"}]},clusters:{id:"clusters",defaultMessage:[{type:0,value:"Clusters"}]},added:{id:"added",defaultMessage:[{type:0,value:"Added"}]},loading:{id:"loading",defaultMessage:[{type:0,value:"Loading"}]},lastSeen:{id:"lastSeen",defaultMessage:[{type:0,value:"Last seen"}]},actions:{id:"actions",defaultMessage:[{type:0,value:"Actions"}]},name:{id:"name",defaultMessage:[{type:0,value:"Name"}]},description:{id:"description",defaultMessage:[{type:0,value:"Description"}]},filterBy:{id:"filterBy",defaultMessage:[{type:0,value:"Filter by name"}]},totalRisk:{id:"totalRisk",defaultMessage:[{type:0,value:"Total risk"}]},recommendation:{id:"recommendation",defaultMessage:[{type:0,value:"Recommendation"}]},recommendations:{id:"recommendations",defaultMessage:[{type:0,value:"Recommendations"}]},insightsHeader:{id:"insightsHeader",defaultMessage:[{type:0,value:"Advisor"}]},unknown:{id:"unknown",defaultMessage:[{type:0,value:"Unknown"}]},low:{id:"low",defaultMessage:[{type:0,value:"Low"}]},moderate:{id:"moderate",defaultMessage:[{type:0,value:"Moderate"}]},important:{id:"important",defaultMessage:[{type:0,value:"Important"}]},critical:{id:"critical",defaultMessage:[{type:0,value:"Critical"}]},veryLow:{id:"veryLow",defaultMessage:[{type:0,value:"Very Low"}]},medium:{id:"medium",defaultMessage:[{type:0,value:"Medium"}]},high:{id:"high",defaultMessage:[{type:0,value:"High"}]},serviceAvailability:{id:"serviceAvailability",defaultMessage:[{type:0,value:"Service Availability"}]},performance:{id:"performance",defaultMessage:[{type:0,value:"Performance"}]},faultTolerance:{id:"faultTolerance",defaultMessage:[{type:0,value:"Fault Tolerance"}]},security:{id:"security",defaultMessage:[{type:0,value:"Security"}]},enabled:{id:"enabled",defaultMessage:[{type:0,value:"Enabled"}]},impact:{id:"impact",defaultMessage:[{type:0,value:"Impact"}]},impactLevel:{id:"impactLevel",defaultMessage:[{type:1,value:"level"},{type:0,value:" impact"}]},impactDescription:{id:"impactDescription",defaultMessage:[{type:0,value:"The impact of the problem would be "},{type:1,value:"level"},{type:0,value:" if it occurred."}]},category:{id:"category",defaultMessage:[{type:0,value:"Category"}]},likelihood:{id:"likelihood",defaultMessage:[{type:0,value:"Likelihood"}]},likelihoodLevel:{id:"likelihoodLevel",defaultMessage:[{type:1,value:"level"},{type:0,value:" likelihood"}]},likelihoodDescription:{id:"likelihoodDescription",defaultMessage:[{type:0,value:"The likelihood that this will be a problem is "},{type:1,value:"level"},{type:0,value:"."}]},all:{id:"all",defaultMessage:[{type:0,value:"All"}]},disabled:{id:"disabled",defaultMessage:[{type:0,value:"Disabled"}]},resetFilters:{id:"resetFilters",defaultMessage:[{type:0,value:"Reset filters"}]},noMatchingRecsTitle:{id:"noMatchingRecommendationsTitle",defaultMessage:[{type:0,value:"No matching recommendations found"}]},noMatchingRecsBody:{id:"noMatchingRecommendationsDesc",defaultMessage:[{type:0,value:"To continue, edit your filter settings and search again."}]},noRecommendations:{id:"noRecommendations",defaultMessage:[{type:0,value:"The cluster is not affected by any known recommendations"}]},noRecommendationsDesc:{id:"noRecommendationsDesc",defaultMessage:[{type:0,value:"No known recommendations affect this cluster."}]},ruleIsDisabledTooltip:{id:"ruleIsDisabledTooltip",defaultMessage:[{type:0,value:"Indicates this recommendation will not be shown for the cluster."}]},rulesDetailsPubishdate:{id:"rulesdetails.publishdate",defaultMessage:[{type:0,value:"Publish date: "},{type:1,value:"date"}]},knowledgebaseArticle:{id:"knowledgebasearticle",defaultMessage:[{type:0,value:"Knowledgebase article"}]},viewAffectedClusters:{id:"viewAffectedClusters",defaultMessage:[{type:0,value:"View "},{type:6,value:"clusters",options:{one:{value:[{type:0,value:"the affected cluster"}]},other:{value:[{type:7},{type:0,value:" affected clusters"}]}},offset:0,pluralType:"cardinal"}]},ruleFetchError:{id:"ruleFetchError",defaultMessage:[{type:0,value:"There was an error fetching recommendation. Refresh your page to try again."}]},affectedClusters:{id:"affectedClusters",defaultMessage:[{type:0,value:"Affected clusters"}]},noRecsError:{id:"noRecsError",defaultMessage:[{type:0,value:"No recommendations available."}]},noRecsErrorDesc:{id:"noRecsErrorDesc",defaultMessage:[{type:0,value:"There was an error fetching recommendations for this cluster. Refresh your page to try again."}]},noRecsFoundError:{id:"noRecsFoundError",defaultMessage:[{type:0,value:"No recommendations to display"}]},noRecsFoundErrorDesc:{id:"noRecsFoundErrorDesc",defaultMessage:[{type:0,value:"Insights identifies and prioritizes risks to security, performance, availability, and stability of your clusters. This feature uses the Remote Health functionality of OpenShift Container Platform. For further details about Insights, see the"}]},noClustersError:{id:"noClustersError",defaultMessage:[{type:0,value:"No data about affected clusters"}]},noClustersErrorDesc:{id:"noClustersErrorDesc",defaultMessage:[{type:0,value:"There was an error fetching affected clusters for this recommendation."}]},unableToConnect:{id:"unableToConnect",defaultMessage:[{type:0,value:"Unable to connect"}]},unableToConnectDesc:{id:"unableToConnectDesc",defaultMessage:[{type:0,value:"There was an error retrieving data. Check your connection and try again."}]},noAffectedClustersTitle:{id:"noAffectedClustersTitle",defaultMessage:[{type:0,value:"No clusters"}]},noAffectedClustersBody:{id:"noAffectedClustersBody",defaultMessage:[{type:0,value:"This recommendation does not affect any cluster."}]},noMatchingClustersTitle:{id:"noMatchingClustersTitle",defaultMessage:[{type:0,value:"No matching clusters found"}]},noMatchingClustersBody:{id:"noMatchingClustersDesc",defaultMessage:[{type:0,value:"To continue, edit your filter settings and search again."}]},errorStateTitle:{id:"errorStateTitle",defaultMessage:[{type:0,value:"Something went wrong"}]},errorStateBody:{id:"errorStateBody",defaultMessage:[{type:0,value:"There was a problem processing the request. Please try again."}]},riskOfChange:{id:"riskOfChange",defaultMessage:[{type:0,value:"Risk of change"}]},rulesDetailsTotalRiskBody:{id:"rulesDetailsTotalRiskBody",defaultMessage:[{type:0,value:"The total risk of this remediation is "},{type:8,value:"strong",children:[{type:1,value:"risk"}]},{type:0,value:", based on the combination of likelihood and impact to remediate."}]},ruleIsDisabledForClusters:{id:"ruleIsDisabledForClusters",defaultMessage:[{type:0,value:"Recommendation is disabled for some clusters"}]},ruleIsDisabledForAllClusters:{id:"ruleIsDisabledForAllClusters",defaultMessage:[{type:0,value:"Recommendation is disabled for all clusters"}]},ruleIsDisabledForClustersBody:{id:"ruleIsDisabledForClustersBody",defaultMessage:[{type:0,value:"Recommendation is disabled for "},{type:6,value:"clusters",options:{one:{value:[{type:7},{type:0,value:" cluster"}]},other:{value:[{type:7},{type:0,value:" clusters"}]}},offset:0,pluralType:"cardinal"}]},oneOrMore:{id:"oneOrMore",defaultMessage:[{type:0,value:"1 or more"}]},none:{id:"none",defaultMessage:[{type:0,value:"None"}]},undefined:{id:"undefined",defaultMessage:[{type:0,value:"Undefined"}]},nA:{id:"nA",defaultMessage:[{type:0,value:"N/A"}]},permsTitle:{id:"permsTitle",defaultMessage:[{type:0,value:"You do not have access to Advisor"}]},permsBody:{id:"permsBody",defaultMessage:[{type:0,value:"To view the content of this page, you must be granted a minimum of Advisor permissions from your Organization Administrator."}]},disableRule:{id:"disableRule",defaultMessage:[{type:0,value:"Disable recommendation"}]},enableRule:{id:"enableRule",defaultMessage:[{type:0,value:"Enable recommendation"}]},save:{id:"save",defaultMessage:[{type:0,value:"Save"}]},cancel:{id:"cancel",defaultMessage:[{type:0,value:"Cancel"}]},recSuccessfullyDisabled:{id:"recSuccessfullyDisabled",defaultMessage:[{type:0,value:"Recommendation successfully disabled"}]},recSuccessfullyEnabled:{id:"recSuccessfullyEnabled",defaultMessage:[{type:0,value:"Recommendation successfully enabled"}]},error:{id:"error",defaultMessage:[{type:0,value:"Error"}]},disableRuleForSystems:{id:"disableRuleForSystems",defaultMessage:[{type:0,value:"Disable recommendation for selected systems"}]},disableRuleBody:{id:"disableRuleBody",defaultMessage:[{type:0,value:"This recommendation will not be shown in reports and dashboards."}]},justificationNote:{id:"justificationNote",defaultMessage:[{type:0,value:"Justification note"}]},rulesTableErrorEnabled:{id:"rulesTableErrorEnabled",defaultMessage:[{type:0,value:"Enabling recommendations failed"}]},rulesTableErrorDisabled:{id:"rulesTableErrorDisabled",defaultMessage:[{type:0,value:"Disabling recommendations failed"}]},ruleIsDisabled:{id:"ruleIsDisabled",defaultMessage:[{type:0,value:"Recommendation is disabled"}]},ruleIsDisabledBody:{id:"ruleIsDisabledBody",defaultMessage:[{type:0,value:"This recommendation has been disabled and has no results."}]},ruleIsDisabledJustification:{id:"ruleIsDisabledJustification",defaultMessage:[{type:0,value:"This recommendation has been disabled for all systems for the following reason:"}]},ruleIsDisabledForSystems:{id:"ruleIsDisabledForSystems",defaultMessage:[{type:0,value:"Recommendation is disabled for some systems"}]},ruleIsDisabledForAllSystems:{id:"ruleIsDisabledForAllSystems",defaultMessage:[{type:0,value:"Recommendation is disabled for all systems"}]},ruleIsDisabledForSystemsBody:{id:"ruleIsDisabledForSystemsBody",defaultMessage:[{type:0,value:"Recommendation is disabled for "},{type:6,value:"systems",options:{one:{value:[{type:7},{type:0,value:" system"}]},other:{value:[{type:7},{type:0,value:" systems"}]}},offset:0,pluralType:"cardinal"}]},comingSoonTitle:{id:"comingSoonTitle",defaultMessage:[{type:0,value:"Coming soon"}]},comingSoonBody:{id:"comingSoonBody",defaultMessage:[{type:0,value:"We’re currently working on this page. In the meantime, you can visit the Insights Advisor recommendations page to view potential issues with your clusters."}]}})},43:(e,t,a)=>{a.d(t,{b:()=>d,u:()=>c});var s,r=a(15861),l=a(87757),n=a.n(l),o=a(30848),i=a(45673),u=insights.chrome.isProd?"https://api.openshift.com/api/accounts_mgmt/v1":"https://api.stage.openshift.com/api/accounts_mgmt/v1",d=(0,o.LC)({reducerPath:"ams",baseQuery:(0,i.ni)({baseUrl:u,prepareHeaders:(s=(0,r.Z)(n().mark((function e(t){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return(a=e.sent)&&t.set("Authorization","Bearer ".concat(a)),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)}))),function(e){return s.apply(this,arguments)})}),endpoints:function(e){return{getCurrentAccount:e.query({query:function(){return"current_account"}}),getClusterDisplayNameById:e.query({query:function(e){return"subscriptions?page=1&size=-1&search=external_cluster_id='".concat(e,"'&fields=display_name")},transformResponse:function(e){var t,a;return null==e||null===(t=e.items)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.display_name}})}}}),c=d.useGetClusterDisplayNameByIdQuery},77647:(e,t,a)=>{a.d(t,{jz:()=>n,yr:()=>o,om:()=>i});var s=a(30848),r=a(45673),l=a(86362),n=(0,s.LC)({reducerPath:"acks",baseQuery:(0,r.ni)({baseUrl:l._n}),endpoints:function(e){return{getRecAcks:e.query({query:function(e){return{url:"/v2/ack/".concat(e.ruleId)}}}),setAck:e.mutation({query:function(e){return{url:"/v2/ack",body:e,method:"post"}}})}}}),o=n.useGetRecAcksQuery,i=n.useSetAckMutation},28672:(e,t,a)=>{a.d(t,{CH:()=>r,Ly:()=>l,BC:()=>u,Q4:()=>d,$Q:()=>c,ZP:()=>m});var s=a(24268),r={limit:20,offset:0,impacting:["true"],sortIndex:4,sortDirection:"desc",rule_status:"enabled"},l={limit:20,offset:0,hits:["all"],sortIndex:-1,sortDirection:"desc",text:""},n={affectedClustersState:{limit:20,offset:0,text:"",sortIndex:-1,sortDirection:null},recsListState:r,clustersListState:l},o=(0,s.oM)({name:"filters",initialState:n,reducers:{updateAffectedClustersFilters:function(e,t){e.affectedClustersState=t.payload},updateRecsListFilters:function(e,t){e.recsListState=t.payload},updateClustersListFilters:function(e,t){e.clustersListState=t.payload}}}),i=o.actions,u=i.updateAffectedClustersFilters,d=i.updateRecsListFilters,c=(i.updateRecsListSortIndex,i.updateRecListSortDirection,i.updateClustersListFilters);const m=o.reducer},86362:(e,t,a)=>{a.d(t,{_n:()=>l,n_:()=>n,th:()=>o,y0:()=>i,qv:()=>u,tf:()=>d,Bs:()=>c,Oj:()=>m});var s=a(30848),r=a(45673),l="/api/insights-results-aggregator",n=(0,s.LC)({reducerPath:"smartProxy",baseQuery:(0,r.ni)({baseUrl:l}),endpoints:function(e){return{getClusterById:e.query({query:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"v2/cluster/".concat(e,"/reports?get_disabled=").concat(t)}}),getRuleById:e.query({query:function(e){return"v2/rule/".concat(e)}}),getAffectedClusters:e.query({query:function(e){return"v2/rule/".concat(e,"/clusters_detail")},transformResponse:function(e){return null==e?void 0:e.data}}),getRecs:e.query({query:function(){return"v2/rule"}}),getClusters:e.query({query:function(){return"v2/clusters"}})}}}),o=n.useGetClusterByIdQuery,i=n.useLazyGetClusterByIdQuery,u=n.useGetRuleByIdQuery,d=n.useGetAffectedClustersQuery,c=n.useGetRecsQuery,m=(n.useLazyGetRecsQuery,n.useGetClustersQuery)},28186:(e,t,a)=>{a.d(t,{f:()=>u,R:()=>d});var s=a(93264),r=a.n(s),l=a(45697),n=a.n(l),o=a(57968),i={en:a(33029)},u=function(e){return r().createElement("strong",null,e)},d=function(e){var t=e.children;return r().createElement(o.Pj,{locale:navigator.language.slice(0,2),defaultLocale:"en",messages:i[navigator.language.slice(0,2)],onError:console.error},t)};d.propTypes={children:n().element}},33029:e=>{e.exports=JSON.parse('{"actions":"Actions","added":"Added","affectedClusters":"Affected clusters","all":"All","cancel":"Cancel","category":"Category","clusters":"Clusters","comingSoonBody":"We’re currently working on this page. In the meantime, you can visit the Insights Advisor recommendations page to view potential issues with your clusters.","comingSoonTitle":"Coming soon","critical":"Critical","description":"Description","disableRule":"Disable recommendation","disableRuleBody":"This recommendation will not be shown in reports and dashboards.","disableRuleForSystems":"Disable recommendation for selected systems","disabled":"Disabled","documentTitle":"{subnav} - OCP Advisor | Red Hat Insights","enableRule":"Enable recommendation","enabled":"Enabled","error":"Error","errorStateBody":"There was a problem processing the request. Please try again.","errorStateTitle":"Something went wrong","faultTolerance":"Fault Tolerance","filterBy":"Filter by name","high":"High","impact":"Impact","impactDescription":"The impact of the problem would be {level} if it occurred.","impactLevel":"{level} impact","important":"Important","insightsHeader":"Advisor","justificationNote":"Justification note","knowledgebasearticle":"Knowledgebase article","lastSeen":"Last seen","likelihood":"Likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","likelihoodLevel":"{level} likelihood","loading":"Loading","low":"Low","medium":"Medium","moderate":"Moderate","nA":"N/A","name":"Name","noAffectedClustersBody":"This recommendation does not affect any cluster.","noAffectedClustersTitle":"No clusters","noClustersError":"No data about affected clusters","noClustersErrorDesc":"There was an error fetching affected clusters for this recommendation.","noMatchingClustersDesc":"To continue, edit your filter settings and search again.","noMatchingClustersTitle":"No matching clusters found","noMatchingRecommendationsDesc":"To continue, edit your filter settings and search again.","noMatchingRecommendationsTitle":"No matching recommendations found","noRecommendations":"The cluster is not affected by any known recommendations","noRecommendationsDesc":"No known recommendations affect this cluster.","noRecsError":"No recommendations available.","noRecsErrorDesc":"There was an error fetching recommendations for this cluster. Refresh your page to try again.","noRecsFoundError":"No recommendations to display","noRecsFoundErrorDesc":"Insights identifies and prioritizes risks to security, performance, availability, and stability of your clusters. This feature uses the Remote Health functionality of OpenShift Container Platform. For further details about Insights, see the","none":"None","oneOrMore":"1 or more","performance":"Performance","permsBody":"To view the content of this page, you must be granted a minimum of Advisor permissions from your Organization Administrator.","permsTitle":"You do not have access to Advisor","recSuccessfullyDisabled":"Recommendation successfully disabled","recSuccessfullyEnabled":"Recommendation successfully enabled","recommendation":"Recommendation","recommendations":"Recommendations","resetFilters":"Reset filters","riskOfChange":"Risk of change","ruleFetchError":"There was an error fetching recommendation. Refresh your page to try again.","ruleIsDisabled":"Recommendation is disabled","ruleIsDisabledBody":"This recommendation has been disabled and has no results.","ruleIsDisabledForAllClusters":"Recommendation is disabled for all clusters","ruleIsDisabledForAllSystems":"Recommendation is disabled for all systems","ruleIsDisabledForClusters":"Recommendation is disabled for some clusters","ruleIsDisabledForClustersBody":"Recommendation is disabled for {clusters, plural, one {# cluster} other {# clusters}}","ruleIsDisabledForSystems":"Recommendation is disabled for some systems","ruleIsDisabledForSystemsBody":"Recommendation is disabled for {systems, plural, one {# system} other {# systems}}","ruleIsDisabledJustification":"This recommendation has been disabled for all systems for the following reason:","ruleIsDisabledTooltip":"Indicates this recommendation will not be shown for the cluster.","rulesDetailsTotalRiskBody":"The total risk of this remediation is <strong>{risk}</strong>, based on the combination of likelihood and impact to remediate.","rulesTableErrorDisabled":"Disabling recommendations failed","rulesTableErrorEnabled":"Enabling recommendations failed","rulesdetails.publishdate":"Publish date: {date}","save":"Save","security":"Security","serviceAvailability":"Service Availability","totalRisk":"Total risk","unableToConnect":"Unable to connect","unableToConnectDesc":"There was an error retrieving data. Check your connection and try again.","undefined":"Undefined","unknown":"Unknown","veryLow":"Very Low","viewAffectedClusters":"View {clusters, plural, one {the affected cluster} other {# affected clusters}}"}')}}]);
//# sourceMappingURL=../sourcemaps/414.f7589ad6e8c0f64c27d45ceebc5539aa.js.map