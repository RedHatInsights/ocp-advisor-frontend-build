"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[53],{29306:(e,t,a)=>{a.d(t,{Z:()=>U});var r=a(29439),s=a(93264),n=a.n(s),o=a(88931),l=a(16530),i=a(86896),u=a(45697),c=a.n(u),d=a(51344),f=a(70130),m=a(83215),y=a(8896),p=a(99332),h=a(76),g=a(21964),v=a(42151),M=a(86170),b=[{title:"Clusters",path:"/clusters/:clusterId",component:(0,s.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(736),a.e(258),a.e(661),a.e(276),a.e(619)]).then(a.bind(a,39697))}))},{title:"Recommendations",path:"/recommendations/:recommendationId",component:(0,s.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(736),a.e(258),a.e(661),a.e(788),a.e(990),a.e(276),a.e(987)]).then(a.bind(a,94794))}))},{title:"Recommendations",path:"/recommendations",component:(0,s.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(736),a.e(661),a.e(9)]).then(a.bind(a,12036))}))}],T=function(){return n().createElement(s.Suspense,{fallback:n().createElement(h.Bullseye,null,n().createElement(v.Spinner,null))},n().createElement(l.Switch,null,b.map((function(e){return n().createElement(l.Route,{key:e.title,path:e.path,component:e.component})})),n().createElement(l.Redirect,{exact:!0,from:"/",to:"/recommendations"}),n().createElement(l.Route,{path:"*",component:function(){return n().createElement(g.EmptyState,null,n().createElement(g.EmptyStateBody,null,n().createElement(M.Z,null)))}})))},C=a(15671),E=a(43144),R=a(60136),k=a(6215),w=a(61120),A=a(74806),S=a(51014);var D=function(e){(0,R.Z)(s,e);var t,a,r=(t=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,w.Z)(t);if(a){var s=(0,w.Z)(this).constructor;e=Reflect.construct(r,arguments,s)}else e=r.apply(this,arguments);return(0,k.Z)(this,e)});function s(e){var t;return(0,C.Z)(this,s),(t=r.call(this,e)).state={hasError:!1},t}return(0,E.Z)(s,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n().createElement(y.Bullseye,null,n().createElement(S.Te,null)):this.props.children}}]),s}(n().Component);D.propTypes={children:c().node.isRequired};const B=(0,A.ZP)(D);var I,Z=a(51957),L=a(30893),P=a(4942),F=a(24268),N=a(94500),_=a.n(N),q=a(43),x=a(86362),z=a(28672),O=(I={},(0,P.Z)(I,x.n_.reducerPath,x.n_.reducer),(0,P.Z)(I,q.b.reducerPath,q.b.reducer),(0,P.Z)(I,"filters",z.ZP),I);const H=function(e){return(0,F.xC)({reducer:O,middleware:function(t){var a=t().concat(x.n_.middleware,q.b.middleware);return e&&a.concat(_()),a}})};var Q=function(e){var t=e.useLogger,a=(0,i.Z)(),u=(0,l.useHistory)(),c=(0,s.useState)(!1),h=(0,r.Z)(c,2),g=h[0],v=h[1];return(0,s.useEffect)((function(){(0,f.JH)().register({notifications:m.ee}),insights.chrome.init(),insights.chrome.auth.getUser().then((function(){return v(!0)})),insights.chrome.identifyApp("ocp-advisor");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return u.push("/".concat(e.navId))}));return function(){return e()}}),[]),n().createElement(B,null,g?n().createElement(o.Provider,{store:H(t)},n().createElement(d.ZP,null),n().createElement(T,null)):n().createElement(y.Bullseye,null,n().createElement(Z.Z,{variant:"large",icon:p.ZP,title:a.formatMessage(L.Z.permsTitle),text:a.formatMessage(L.Z.permsBody)})))};Q.propTypes={useLogger:c().bool},Q.defaultProps={useLogger:!1};const U=Q},51014:(e,t,a)=>{a.d(t,{Te:()=>p,mi:()=>h,VA:()=>g,A0:()=>v});var r=a(93264),s=a(86896),n=a(88292),o=a(47778),l=a(21964),i=a(84564),u=a(35451),c=a(34713),d=a(7193),f=a(53472),m=a(51957),y=a(30893),p=function(){var e=(0,s.Z)();return r.createElement(l.EmptyState,null,r.createElement(l.EmptyStateIcon,{icon:i.default,color:d.Q7.value}),r.createElement(o.Title,{headingLevel:"h4",size:"lg"},e.formatMessage(y.Z.errorStateTitle)),r.createElement(l.EmptyStateBody,null,r.createElement(n.Stack,null,r.createElement(n.StackItem,null,e.formatMessage(y.Z.errorStateBody)),r.createElement(n.StackItem,null,r.createElement(f.Z,null)))))},h=function(){var e=(0,s.Z)();return r.createElement(l.EmptyState,null,r.createElement(l.EmptyStateIcon,{icon:u.default,color:c.gP.value}),r.createElement(o.Title,{headingLevel:"h4",size:"lg"},e.formatMessage(y.Z.noAffectedClustersTitle)),r.createElement(l.EmptyStateBody,null,e.formatMessage(y.Z.noAffectedClustersBody)))},g=function(){var e=(0,s.Z)();return r.createElement(l.EmptyState,null,r.createElement(o.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(y.Z.noMatchingClustersTitle)),r.createElement(l.EmptyStateBody,null,e.formatMessage(y.Z.noMatchingClustersBody)))},v=function(){var e=(0,s.Z)();return r.createElement(m.Z,{title:e.formatMessage(y.Z.noMatchingRecsTitle),text:e.formatMessage(y.Z.noMatchingRecsBody),icon:u.default,iconStyle:{color:c.gP.value}})}},51957:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(219),s=a(96733),n=a(74183),o=a(86728),l=a(45697),i=a.n(l),u=a(93264),c=a.n(u),d=a(34348),f=function(e){var t=e.className,a=e.children,s=e.icon,l=e.iconClass,i=e.iconStyle,u=e.text,f=e.title,m=e.variant;return c().createElement(r.EmptyState,{className:t,variant:m},"none"!==s&&c().createElement(o.EmptyStateIcon,{className:l,style:i,icon:s}),c().createElement(d.Title,{headingLevel:"h5",size:"lg"},f),c().createElement(n.EmptyStateBody,{style:{marginBottom:"16px"}},u),a)};f.propTypes={children:i().any,icon:i().any,iconClass:i().any,iconStyle:i().any,text:i().any,title:i().string,variant:i().any,className:i().string},f.defaultProps={icon:s.ZP,title:"",variant:r.EmptyStateVariant.full};const m=f},30893:(e,t,a)=>{a.d(t,{Z:()=>r});const r=(0,a(50049).vU)({documentTitle:{id:"documentTitle",defaultMessage:[{type:1,value:"subnav"},{type:0,value:" - OCP Advisor | Red Hat Insights"}]},clusters:{id:"clusters",defaultMessage:[{type:0,value:"Clusters"}]},added:{id:"added",defaultMessage:[{type:0,value:"Added"}]},loading:{id:"loading",defaultMessage:[{type:0,value:"Loading"}]},lastSeen:{id:"lastSeen",defaultMessage:[{type:0,value:"Last seen"}]},actions:{id:"actions",defaultMessage:[{type:0,value:"Actions"}]},name:{id:"name",defaultMessage:[{type:0,value:"Name"}]},description:{id:"description",defaultMessage:[{type:0,value:"Description"}]},filterBy:{id:"filterBy",defaultMessage:[{type:0,value:"Filter by name"}]},totalRisk:{id:"totalRisk",defaultMessage:[{type:0,value:"Total risk"}]},recommendation:{id:"recommendation",defaultMessage:[{type:0,value:"Recommendation"}]},recommendations:{id:"recommendations",defaultMessage:[{type:0,value:"Recommendations"}]},insightsHeader:{id:"insightsHeader",defaultMessage:[{type:0,value:"Advisor"}]},unknown:{id:"unknown",defaultMessage:[{type:0,value:"Unknown"}]},low:{id:"low",defaultMessage:[{type:0,value:"Low"}]},moderate:{id:"moderate",defaultMessage:[{type:0,value:"Moderate"}]},important:{id:"important",defaultMessage:[{type:0,value:"Important"}]},critical:{id:"critical",defaultMessage:[{type:0,value:"Critical"}]},veryLow:{id:"veryLow",defaultMessage:[{type:0,value:"Very Low"}]},medium:{id:"medium",defaultMessage:[{type:0,value:"Medium"}]},high:{id:"high",defaultMessage:[{type:0,value:"High"}]},serviceAvailability:{id:"serviceAvailability",defaultMessage:[{type:0,value:"Service Availability"}]},performance:{id:"performance",defaultMessage:[{type:0,value:"Performance"}]},faultTolerance:{id:"faultTolerance",defaultMessage:[{type:0,value:"Fault Tolerance"}]},security:{id:"security",defaultMessage:[{type:0,value:"Security"}]},enabled:{id:"enabled",defaultMessage:[{type:0,value:"Enabled"}]},impact:{id:"impact",defaultMessage:[{type:0,value:"Impact"}]},impactLevel:{id:"impactLevel",defaultMessage:[{type:1,value:"level"},{type:0,value:" impact"}]},impactDescription:{id:"impactDescription",defaultMessage:[{type:0,value:"The impact of the problem would be "},{type:1,value:"level"},{type:0,value:" if it occurred."}]},category:{id:"category",defaultMessage:[{type:0,value:"Category"}]},likelihood:{id:"likelihood",defaultMessage:[{type:0,value:"Likelihood"}]},likelihoodLevel:{id:"likelihoodLevel",defaultMessage:[{type:1,value:"level"},{type:0,value:" likelihood"}]},likelihoodDescription:{id:"likelihoodDescription",defaultMessage:[{type:0,value:"The likelihood that this will be a problem is "},{type:1,value:"level"},{type:0,value:"."}]},all:{id:"all",defaultMessage:[{type:0,value:"All"}]},disabled:{id:"disabled",defaultMessage:[{type:0,value:"Disabled"}]},resetFilters:{id:"resetFilters",defaultMessage:[{type:0,value:"Reset filters"}]},noMatchingRecsTitle:{id:"noMatchingRecommendationsTitle",defaultMessage:[{type:0,value:"No matching recommendations found"}]},noMatchingRecsBody:{id:"noMatchingRecommendationsDesc",defaultMessage:[{type:0,value:"This filter criteria matches no recommendations. Try changing your filter settings."}]},noRecommendations:{id:"noRecommendations",defaultMessage:[{type:0,value:"The cluster is not affected by any known recommendations"}]},noRecommendationsDesc:{id:"noRecommendationsDesc",defaultMessage:[{type:0,value:"No known recommendations affect this cluster."}]},ruleIsDisabledTooltip:{id:"ruleIsDisabledTooltip",defaultMessage:[{type:0,value:"Indicates this recommendation will not be shown for the cluster."}]},rulesDetailsPubishdate:{id:"rulesdetails.publishdate",defaultMessage:[{type:0,value:"Publish date: "},{type:1,value:"date"}]},knowledgebaseArticle:{id:"knowledgebasearticle",defaultMessage:[{type:0,value:"Knowledgebase article"}]},viewAffectedClusters:{id:"viewAffectedClusters",defaultMessage:[{type:0,value:"View "},{type:6,value:"clusters",options:{one:{value:[{type:0,value:"the affected cluster"}]},other:{value:[{type:7},{type:0,value:" affected clusters"}]}},offset:0,pluralType:"cardinal"}]},ruleFetchError:{id:"ruleFetchError",defaultMessage:[{type:0,value:"There was an error fetching recommendation. Refresh your page to try again."}]},affectedClusters:{id:"affectedClusters",defaultMessage:[{type:0,value:"Affected clusters"}]},noRecsError:{id:"noRecsError",defaultMessage:[{type:0,value:"No recommendations available."}]},noRecsErrorDesc:{id:"noRecsErrorDesc",defaultMessage:[{type:0,value:"There was an error fetching recommendations for this cluster. Refresh your page to try again."}]},noRecsFoundError:{id:"noRecsFoundError",defaultMessage:[{type:0,value:"No recommendations to display"}]},noRecsFoundErrorDesc:{id:"noRecsFoundErrorDesc",defaultMessage:[{type:0,value:"Insights identifies and prioritizes risks to security, performance, availability, and stability of your clusters. This feature uses the Remote Health functionality of OpenShift Container Platform. For further details about Insights, see the"}]},noClustersError:{id:"noClustersError",defaultMessage:[{type:0,value:"No data about affected clusters"}]},noClustersErrorDesc:{id:"noClustersErrorDesc",defaultMessage:[{type:0,value:"There was an error fetching affected clusters for this recommendation."}]},unableToConnect:{id:"unableToConnect",defaultMessage:[{type:0,value:"Unable to connect"}]},unableToConnectDesc:{id:"unableToConnectDesc",defaultMessage:[{type:0,value:"There was an error retrieving data. Check your connection and try again."}]},noAffectedClustersTitle:{id:"noAffectedClustersTitle",defaultMessage:[{type:0,value:"No clusters"}]},noAffectedClustersBody:{id:"noAffectedClustersBody",defaultMessage:[{type:0,value:"This recommendation does not affect any cluster."}]},noMatchingClustersTitle:{id:"noMatchingClustersTitle",defaultMessage:[{type:0,value:"No matching clusters found"}]},noMatchingClustersBody:{id:"noMatchingClustersDesc",defaultMessage:[{type:0,value:"To continue, edit your filter settings and search again."}]},errorStateTitle:{id:"errorStateTitle",defaultMessage:[{type:0,value:"Something went wrong"}]},errorStateBody:{id:"errorStateBody",defaultMessage:[{type:0,value:"There was a problem processing the request. Please try again."}]},riskOfChange:{id:"riskOfChange",defaultMessage:[{type:0,value:"Risk of change"}]},rulesDetailsTotalRiskBody:{id:"rulesDetailsTotalRiskBody",defaultMessage:[{type:0,value:"The total risk of this remediation is "},{type:8,value:"strong",children:[{type:1,value:"risk"}]},{type:0,value:", based on the combination of likelihood and impact to remediate."}]},ruleIsDisabledForClusters:{id:"ruleIsDisabledForClusters",defaultMessage:[{type:0,value:"Recommendation is disabled for some clusters"}]},ruleIsDisabledForAllClusters:{id:"ruleIsDisabledForAllClusters",defaultMessage:[{type:0,value:"Recommendation is disabled for all clusters"}]},ruleIsDisabledForClustersBody:{id:"ruleIsDisabledForClustersBody",defaultMessage:[{type:0,value:"Recommendation is disabled for "},{type:6,value:"clusters",options:{one:{value:[{type:7},{type:0,value:" cluster"}]},other:{value:[{type:7},{type:0,value:" clusters"}]}},offset:0,pluralType:"cardinal"}]},oneOrMore:{id:"oneOrMore",defaultMessage:[{type:0,value:"1 or more"}]},none:{id:"none",defaultMessage:[{type:0,value:"None"}]},undefined:{id:"undefined",defaultMessage:[{type:0,value:"Undefined"}]},nA:{id:"nA",defaultMessage:[{type:0,value:"N/A"}]},permsTitle:{id:"permsTitle",defaultMessage:[{type:0,value:"You do not have access to Advisor"}]},permsBody:{id:"permsBody",defaultMessage:[{type:0,value:"To view the content of this page, you must be granted a minimum of Advisor permissions from your Organization Administrator."}]}})},43:(e,t,a)=>{a.d(t,{b:()=>u,u:()=>c});var r,s=a(15861),n=a(87757),o=a.n(n),l=a(30848),i=a(45673),u=(0,l.LC)({reducerPath:"ams",baseQuery:(0,i.ni)({baseUrl:"https://api.openshift.com/api/accounts_mgmt/v1",prepareHeaders:(r=(0,s.Z)(o().mark((function e(t){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return(a=e.sent)&&t.set("Authorization","Bearer ".concat(a)),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}),endpoints:function(e){return{getCurrentAccount:e.query({query:function(){return"current_account"}}),getClusterDisplayNameById:e.query({query:function(e){return"subscriptions?page=1&size=-1&search=external_cluster_id='".concat(e,"'&fields=display_name")},transformResponse:function(e){var t,a;return null==e||null===(t=e.items)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.display_name}})}}}),c=u.useGetClusterDisplayNameByIdQuery},28672:(e,t,a)=>{a.d(t,{CH:()=>s,BC:()=>i,Q4:()=>u,ZP:()=>c});var r=a(24268),s={limit:20,offset:0,impacting:["true"]},n={affectedClustersState:{limit:10,offset:0,text:"",sortIndex:-1,sortDirection:null},recsListState:s},o=(0,r.oM)({name:"filters",initialState:n,reducers:{updateAffectedClustersFilters:function(e,t){e.affectedClustersState=t.payload},updateRecsListFilters:function(e,t){e.recsListState=t.payload}}}),l=o.actions,i=l.updateAffectedClustersFilters,u=l.updateRecsListFilters;const c=o.reducer},86362:(e,t,a)=>{a.d(t,{n_:()=>n,th:()=>o,y0:()=>l,qv:()=>i,tf:()=>u,Bs:()=>c});var r=a(30848),s=a(45673),n=(0,r.LC)({reducerPath:"smartProxy",baseQuery:(0,s.ni)({baseUrl:"/api/insights-results-aggregator"}),endpoints:function(e){return{getClusterById:e.query({query:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"v1/clusters/".concat(e,"/report?get_disabled=").concat(t)}}),getRuleById:e.query({query:function(e){return"v2/rule/".concat(e)}}),getAffectedClusters:e.query({query:function(e){return"v2/rule/".concat(e,"/clusters_detail")},transformResponse:function(e){return null==e?void 0:e.data}}),getRecs:e.query({query:function(){return"v2/rule"}})}}}),o=n.useGetClusterByIdQuery,l=n.useLazyGetClusterByIdQuery,i=n.useGetRuleByIdQuery,u=n.useGetAffectedClustersQuery,c=n.useGetRecsQuery;n.useLazyGetRecsQuery},33029:e=>{e.exports=JSON.parse('{"actions":"Actions","added":"Added","affectedClusters":"Affected clusters","all":"All","category":"Category","clusters":"Clusters","critical":"Critical","description":"Description","disabled":"Disabled","documentTitle":"{subnav} - OCP Advisor | Red Hat Insights","enabled":"Enabled","errorStateBody":"There was a problem processing the request. Please try again.","errorStateTitle":"Something went wrong","faultTolerance":"Fault Tolerance","filterBy":"Filter by name","high":"High","impact":"Impact","impactDescription":"The impact of the problem would be {level} if it occurred.","impactLevel":"{level} impact","important":"Important","insightsHeader":"Advisor","knowledgebasearticle":"Knowledgebase article","lastSeen":"Last seen","likelihood":"Likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","likelihoodLevel":"{level} likelihood","loading":"Loading","low":"Low","medium":"Medium","moderate":"Moderate","nA":"N/A","name":"Name","noAffectedClustersBody":"This recommendation does not affect any cluster.","noAffectedClustersTitle":"No clusters","noClustersError":"No data about affected clusters","noClustersErrorDesc":"There was an error fetching affected clusters for this recommendation.","noMatchingClustersDesc":"To continue, edit your filter settings and search again.","noMatchingClustersTitle":"No matching clusters found","noMatchingRecommendationsDesc":"This filter criteria matches no recommendations. Try changing your filter settings.","noMatchingRecommendationsTitle":"No matching recommendations found","noRecommendations":"The cluster is not affected by any known recommendations","noRecommendationsDesc":"No known recommendations affect this cluster.","noRecsError":"No recommendations available.","noRecsErrorDesc":"There was an error fetching recommendations for this cluster. Refresh your page to try again.","noRecsFoundError":"No recommendations to display","noRecsFoundErrorDesc":"Insights identifies and prioritizes risks to security, performance, availability, and stability of your clusters. This feature uses the Remote Health functionality of OpenShift Container Platform. For further details about Insights, see the","none":"None","oneOrMore":"1 or more","performance":"Performance","permsBody":"To view the content of this page, you must be granted a minimum of Advisor permissions from your Organization Administrator.","permsTitle":"You do not have access to Advisor","recommendation":"Recommendation","recommendations":"Recommendations","resetFilters":"Reset filters","riskOfChange":"Risk of change","ruleFetchError":"There was an error fetching recommendation. Refresh your page to try again.","ruleIsDisabledForAllClusters":"Recommendation is disabled for all clusters","ruleIsDisabledForClusters":"Recommendation is disabled for some clusters","ruleIsDisabledForClustersBody":"Recommendation is disabled for {clusters, plural, one {# cluster} other {# clusters}}","ruleIsDisabledTooltip":"Indicates this recommendation will not be shown for the cluster.","rulesDetailsTotalRiskBody":"The total risk of this remediation is <strong>{risk}</strong>, based on the combination of likelihood and impact to remediate.","rulesdetails.publishdate":"Publish date: {date}","security":"Security","serviceAvailability":"Service Availability","totalRisk":"Total risk","unableToConnect":"Unable to connect","unableToConnectDesc":"There was an error retrieving data. Check your connection and try again.","undefined":"Undefined","unknown":"Unknown","veryLow":"Very Low","viewAffectedClusters":"View {clusters, plural, one {the affected cluster} other {# affected clusters}}"}')}}]);
//# sourceMappingURL=../sourcemaps/53.e4034d1eab0a781ad8692043a0e491de.js.map