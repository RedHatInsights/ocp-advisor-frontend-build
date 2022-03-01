"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[484],{32088:(e,t,s)=>{s.d(t,{Z:()=>se});var a=s(29439),r=s(93264),l=s.n(r),n=s(88931),o=s(16530),i=s(86896),u=s(45697),d=s.n(u),c=s(96533),m=s(70130),f=s(83215),y=s(8896),p=s(75663),g=s(42151),h=s(76),v=s(21964),b=s(86170),M=(0,r.lazy)((function(){return Promise.all([s.e(410),s.e(252),s.e(736),s.e(303),s.e(661),s.e(913),s.e(873),s.e(23),s.e(619)]).then(s.bind(s,39697))})),R=(0,r.lazy)((function(){return Promise.all([s.e(410),s.e(252),s.e(736),s.e(303),s.e(661),s.e(873),s.e(556),s.e(985),s.e(23),s.e(987)]).then(s.bind(s,26553))})),E=(0,r.lazy)((function(){return Promise.all([s.e(410),s.e(252),s.e(736),s.e(661),s.e(9)]).then(s.bind(s,12036))})),C=[{title:"Clusters",path:"/clusters/:clusterId",component:M},{title:"Clusters",path:"/clusters",component:(0,r.lazy)((function(){return Promise.all([s.e(410),s.e(252),s.e(736),s.e(303),s.e(661),s.e(913),s.e(420)]).then(s.bind(s,67636))}))},{title:"Recommendations",path:"/recommendations/:recommendationId",component:R},{title:"Recommendations",path:"/recommendations",component:E}],T=function(){return l().createElement(r.Suspense,{fallback:l().createElement(h.Bullseye,null,l().createElement(g.Spinner,null))},l().createElement(o.Switch,null,C.map((function(e){return l().createElement(o.Route,{key:e.title,path:e.path,component:e.component})})),l().createElement(o.Redirect,{exact:!0,from:"/",to:"/recommendations"}),l().createElement(o.Route,{path:"*",component:function(){return l().createElement(v.EmptyState,null,l().createElement(v.EmptyStateBody,null,l().createElement(b.Z,null)))}})))},S=s(15671),D=s(43144),w=s(60136),k=s(82963),I=s(61120),A=s(74806),B=s(51014);var F=function(e){(0,w.Z)(r,e);var t,s,a=(t=r,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,I.Z)(t);if(s){var r=(0,I.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,k.Z)(this,e)});function r(e){var t;return(0,S.Z)(this,r),(t=a.call(this,e)).state={hasError:!1},t}return(0,D.Z)(r,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?l().createElement(y.Bullseye,null,l().createElement(B.Te,null)):this.props.children}}]),r}(l().Component);F.propTypes={children:d().node.isRequired};const L=(0,A.ZP)(F);var Z,P,N=s(51957),O=s(30893),q=s(4942),_=s(24268),x=s(94500),j=s.n(x),z=s(71355),Q=s(15861),H=s(87757),U=s.n(H),G=s(30848),J=s(45673),V=insights.chrome.isProd?"https://api.openshift.com/api/accounts_mgmt/v1":"https://api.stage.openshift.com/api/accounts_mgmt/v1",W=(0,G.LC)({reducerPath:"ams",baseQuery:(0,J.ni)({baseUrl:V,prepareHeaders:(Z=(0,Q.Z)(U().mark((function e(t){var s;return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return(s=e.sent)&&t.set("Authorization","Bearer ".concat(s)),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)}))),function(e){return Z.apply(this,arguments)})}),endpoints:function(e){return{getCurrentAccount:e.query({query:function(){return"current_account"}})}}}),K=s(86362),Y=s(28672),$=s(77647),X=(P={},(0,q.Z)(P,K.n_.reducerPath,K.n_.reducer),(0,q.Z)(P,W.reducerPath,W.reducer),(0,q.Z)(P,"filters",Y.ZP),(0,q.Z)(P,"notifications",f.ee),(0,q.Z)(P,$.jz.reducerPath,$.jz.reducer),P);const ee=function(e){return(0,_.xC)({reducer:X,middleware:function(t){var s=t().concat(K.n_.middleware,W.middleware,$.jz.middleware,(0,z.uv)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]}));return e&&s.concat(j()),s}})};var te=function(e){var t=e.useLogger,s=(0,i.Z)(),u=(0,o.useHistory)(),d=(0,r.useState)(!1),h=(0,a.Z)(d,2),v=h[0],b=h[1],M=(0,r.useState)(!0),R=(0,a.Z)(M,2),E=R[0],C=R[1];return(0,r.useEffect)((function(){(0,m.JH)().register({notifications:f.ee}),insights.chrome.init(),insights.chrome.auth.getUser().then((function(){b(!0),C(!1)})),insights.chrome.identifyApp("ocp-advisor");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return u.push("/".concat(e.navId))}));return function(){return e()}}),[]),l().createElement(L,null,E?l().createElement(y.Bullseye,null,l().createElement(g.Spinner,null)):v?l().createElement(n.Provider,{store:ee(t)},l().createElement(c.ZP,null),l().createElement(T,null)):l().createElement(y.Bullseye,null,l().createElement(N.Z,{variant:"large",icon:p.ZP,title:s.formatMessage(O.Z.permsTitle),text:s.formatMessage(O.Z.permsBody)})))};te.propTypes={useLogger:d().bool},te.defaultProps={useLogger:!1};const se=te},51014:(e,t,s)=>{s.d(t,{Te:()=>h,mi:()=>v,VA:()=>b,A0:()=>M,ER:()=>R});var a=s(93264),r=s(86896),l=(s(16530),s(88292)),n=s(47778),o=s(21964),i=s(16396),u=s(84564),d=s(35451),c=s(20777),m=s(34713),f=s(7193),y=s(53472),p=s(51957),g=s(30893),h=function(){var e=(0,r.Z)();return a.createElement(o.EmptyState,null,a.createElement(o.EmptyStateIcon,{icon:u.default,color:f.Q7.value}),a.createElement(n.Title,{headingLevel:"h4",size:"lg"},e.formatMessage(g.Z.errorStateTitle)),a.createElement(o.EmptyStateBody,null,a.createElement(l.Stack,null,a.createElement(l.StackItem,null,e.formatMessage(g.Z.errorStateBody)),a.createElement(l.StackItem,null,a.createElement(y.Z,null)))))},v=function(){var e=(0,r.Z)();return a.createElement(o.EmptyState,null,a.createElement(o.EmptyStateIcon,{icon:d.default,color:m.gP.value}),a.createElement(n.Title,{headingLevel:"h4",size:"lg"},e.formatMessage(g.Z.noAffectedClustersTitle)),a.createElement(o.EmptyStateBody,null,e.formatMessage(g.Z.noAffectedClustersBody)))},b=function(){var e=(0,r.Z)();return a.createElement(o.EmptyState,null,a.createElement(n.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(g.Z.noMatchingClustersTitle)),a.createElement(o.EmptyStateBody,null,e.formatMessage(g.Z.noMatchingClustersBody)))},M=function(){var e=(0,r.Z)();return a.createElement(p.Z,{title:e.formatMessage(g.Z.noMatchingRecsTitle),text:e.formatMessage(g.Z.noMatchingRecsBody),icon:d.default,iconStyle:{color:m.gP.value}})},R=function(){var e=(0,r.Z)();return a.createElement(o.EmptyState,{variant:"small"},a.createElement(o.EmptyStateIcon,{icon:c.ZP}),a.createElement(n.Title,{headingLevel:"h2",size:"2xl"},e.formatMessage(g.Z.noRecsForClusterListTitle)),a.createElement(o.EmptyStateBody,null,e.formatMessage(g.Z.noRecsForClusterListBody)),a.createElement(i.Button,{component:"a",variant:"primary",href:"https://console.redhat.com/openshift/create"},"Create cluster"),a.createElement(o.EmptyStateSecondaryActions,null,a.createElement(i.Button,{component:"a",variant:"link",href:"https://console.redhat.com/openshift/register"},"Register cluster"),a.createElement(i.Button,{component:"a",variant:"link",href:"https://console.redhat.com/openshift/assisted-installer/clusters"},"Assisted Installer clusters")))}},51957:(e,t,s)=>{s.d(t,{Z:()=>f});var a=s(219),r=s(96733),l=s(74183),n=s(86728),o=s(45697),i=s.n(o),u=s(93264),d=s.n(u),c=s(34348),m=function(e){var t=e.className,s=e.children,r=e.icon,o=e.iconClass,i=e.iconStyle,u=e.text,m=e.title,f=e.variant;return d().createElement(a.EmptyState,{className:t,variant:f},"none"!==r&&d().createElement(n.EmptyStateIcon,{className:o,style:i,icon:r}),d().createElement(c.Title,{headingLevel:"h5",size:"lg"},m),d().createElement(l.EmptyStateBody,{style:{marginBottom:"16px"}},u),s)};m.propTypes={children:i().any,icon:i().any,iconClass:i().any,iconStyle:i().any,text:i().any,title:i().string,variant:i().any,className:i().string},m.defaultProps={icon:r.ZP,title:"",variant:a.EmptyStateVariant.full};const f=m},30893:(e,t,s)=>{s.d(t,{Z:()=>a});const a=(0,s(50049).vU)({documentTitle:{id:"documentTitle",defaultMessage:[{type:1,value:"subnav"},{type:0,value:" - OCP Advisor | Red Hat Insights"}]},clusters:{id:"clusters",defaultMessage:[{type:0,value:"Clusters"}]},added:{id:"added",defaultMessage:[{type:0,value:"Added"}]},loading:{id:"loading",defaultMessage:[{type:0,value:"Loading"}]},lastSeen:{id:"lastSeen",defaultMessage:[{type:0,value:"Last seen"}]},actions:{id:"actions",defaultMessage:[{type:0,value:"Actions"}]},name:{id:"name",defaultMessage:[{type:0,value:"Name"}]},description:{id:"description",defaultMessage:[{type:0,value:"Description"}]},filterBy:{id:"filterBy",defaultMessage:[{type:0,value:"Filter by name"}]},totalRisk:{id:"totalRisk",defaultMessage:[{type:0,value:"Total risk"}]},recommendation:{id:"recommendation",defaultMessage:[{type:0,value:"Recommendation"}]},recommendations:{id:"recommendations",defaultMessage:[{type:0,value:"Recommendations"}]},insightsHeader:{id:"insightsHeader",defaultMessage:[{type:0,value:"Advisor"}]},unknown:{id:"unknown",defaultMessage:[{type:0,value:"Unknown"}]},low:{id:"low",defaultMessage:[{type:0,value:"Low"}]},moderate:{id:"moderate",defaultMessage:[{type:0,value:"Moderate"}]},important:{id:"important",defaultMessage:[{type:0,value:"Important"}]},critical:{id:"critical",defaultMessage:[{type:0,value:"Critical"}]},veryLow:{id:"veryLow",defaultMessage:[{type:0,value:"Very Low"}]},medium:{id:"medium",defaultMessage:[{type:0,value:"Medium"}]},high:{id:"high",defaultMessage:[{type:0,value:"High"}]},serviceAvailability:{id:"serviceAvailability",defaultMessage:[{type:0,value:"Service Availability"}]},performance:{id:"performance",defaultMessage:[{type:0,value:"Performance"}]},faultTolerance:{id:"faultTolerance",defaultMessage:[{type:0,value:"Fault Tolerance"}]},security:{id:"security",defaultMessage:[{type:0,value:"Security"}]},enabled:{id:"enabled",defaultMessage:[{type:0,value:"Enabled"}]},impact:{id:"impact",defaultMessage:[{type:0,value:"Impact"}]},impactLevel:{id:"impactLevel",defaultMessage:[{type:1,value:"level"},{type:0,value:" impact"}]},impactDescription:{id:"impactDescription",defaultMessage:[{type:0,value:"The impact of the problem would be "},{type:1,value:"level"},{type:0,value:" if it occurred."}]},category:{id:"category",defaultMessage:[{type:0,value:"Category"}]},likelihood:{id:"likelihood",defaultMessage:[{type:0,value:"Likelihood"}]},likelihoodLevel:{id:"likelihoodLevel",defaultMessage:[{type:1,value:"level"},{type:0,value:" likelihood"}]},likelihoodDescription:{id:"likelihoodDescription",defaultMessage:[{type:0,value:"The likelihood that this will be a problem is "},{type:1,value:"level"},{type:0,value:"."}]},all:{id:"all",defaultMessage:[{type:0,value:"All"}]},disabled:{id:"disabled",defaultMessage:[{type:0,value:"Disabled"}]},resetFilters:{id:"resetFilters",defaultMessage:[{type:0,value:"Reset filters"}]},noMatchingRecsTitle:{id:"noMatchingRecommendationsTitle",defaultMessage:[{type:0,value:"No matching recommendations found"}]},noMatchingRecsBody:{id:"noMatchingRecommendationsDesc",defaultMessage:[{type:0,value:"To continue, edit your filter settings and search again."}]},noRecommendations:{id:"noRecommendations",defaultMessage:[{type:0,value:"The cluster is not affected by any known recommendations"}]},noRecommendationsDesc:{id:"noRecommendationsDesc",defaultMessage:[{type:0,value:"No known recommendations affect this cluster."}]},ruleIsDisabledTooltip:{id:"ruleIsDisabledTooltip",defaultMessage:[{type:0,value:"Indicates this recommendation will not be shown for the cluster."}]},rulesDetailsPubishdate:{id:"rulesdetails.publishdate",defaultMessage:[{type:0,value:"Publish date: "},{type:1,value:"date"}]},knowledgebaseArticle:{id:"knowledgebasearticle",defaultMessage:[{type:0,value:"Knowledgebase article"}]},viewAffectedClusters:{id:"viewAffectedClusters",defaultMessage:[{type:0,value:"View "},{type:6,value:"clusters",options:{one:{value:[{type:0,value:"the affected cluster"}]},other:{value:[{type:7},{type:0,value:" affected clusters"}]}},offset:0,pluralType:"cardinal"}]},ruleFetchError:{id:"ruleFetchError",defaultMessage:[{type:0,value:"There was an error fetching recommendation. Refresh your page to try again."}]},affectedClusters:{id:"affectedClusters",defaultMessage:[{type:0,value:"Affected clusters"}]},noRecsError:{id:"noRecsError",defaultMessage:[{type:0,value:"No recommendations available."}]},noRecsErrorDesc:{id:"noRecsErrorDesc",defaultMessage:[{type:0,value:"There was an error fetching recommendations for this cluster. Refresh your page to try again."}]},noRecsFoundError:{id:"noRecsFoundError",defaultMessage:[{type:0,value:"No recommendations to display"}]},noRecsFoundErrorDesc:{id:"noRecsFoundErrorDesc",defaultMessage:[{type:0,value:"Insights identifies and prioritizes risks to security, performance, availability, and stability of your clusters. This feature uses the Remote Health functionality of OpenShift Container Platform. For further details about Insights, see the"}]},noClustersError:{id:"noClustersError",defaultMessage:[{type:0,value:"No data about affected clusters"}]},noClustersErrorDesc:{id:"noClustersErrorDesc",defaultMessage:[{type:0,value:"There was an error fetching affected clusters for this recommendation."}]},unableToConnect:{id:"unableToConnect",defaultMessage:[{type:0,value:"Unable to connect"}]},unableToConnectDesc:{id:"unableToConnectDesc",defaultMessage:[{type:0,value:"There was an error retrieving data. Check your connection and try again."}]},noAffectedClustersTitle:{id:"noAffectedClustersTitle",defaultMessage:[{type:0,value:"No clusters"}]},noAffectedClustersBody:{id:"noAffectedClustersBody",defaultMessage:[{type:0,value:"This recommendation does not affect any cluster."}]},noMatchingClustersTitle:{id:"noMatchingClustersTitle",defaultMessage:[{type:0,value:"No matching clusters found"}]},noMatchingClustersBody:{id:"noMatchingClustersDesc",defaultMessage:[{type:0,value:"To continue, edit your filter settings and search again."}]},errorStateTitle:{id:"errorStateTitle",defaultMessage:[{type:0,value:"Something went wrong"}]},errorStateBody:{id:"errorStateBody",defaultMessage:[{type:0,value:"There was a problem processing the request. Please try again."}]},riskOfChange:{id:"riskOfChange",defaultMessage:[{type:0,value:"Risk of change"}]},rulesDetailsTotalRiskBody:{id:"rulesDetailsTotalRiskBody",defaultMessage:[{type:0,value:"The total risk of this remediation is "},{type:8,value:"strong",children:[{type:1,value:"risk"}]},{type:0,value:", based on the combination of likelihood and impact to remediate."}]},ruleIsDisabledForClusters:{id:"ruleIsDisabledForClusters",defaultMessage:[{type:0,value:"Recommendation is disabled for some clusters"}]},ruleIsDisabledForAllClusters:{id:"ruleIsDisabledForAllClusters",defaultMessage:[{type:0,value:"Recommendation is disabled for all clusters"}]},ruleIsDisabledForClustersBody:{id:"ruleIsDisabledForClustersBody",defaultMessage:[{type:0,value:"Recommendation is disabled for "},{type:6,value:"clusters",options:{one:{value:[{type:7},{type:0,value:" cluster"}]},other:{value:[{type:7},{type:0,value:" clusters"}]}},offset:0,pluralType:"cardinal"},{type:0,value:" and has no results."}]},oneOrMore:{id:"oneOrMore",defaultMessage:[{type:0,value:"1 or more"}]},none:{id:"none",defaultMessage:[{type:0,value:"None"}]},undefined:{id:"undefined",defaultMessage:[{type:0,value:"Undefined"}]},nA:{id:"nA",defaultMessage:[{type:0,value:"N/A"}]},permsTitle:{id:"permsTitle",defaultMessage:[{type:0,value:"You do not have access to Advisor"}]},permsBody:{id:"permsBody",defaultMessage:[{type:0,value:"To view the content of this page, you must be granted a minimum of Advisor permissions from your Organization Administrator."}]},disableRule:{id:"disableRule",defaultMessage:[{type:0,value:"Disable recommendation"}]},enableRule:{id:"enableRule",defaultMessage:[{type:0,value:"Enable recommendation"}]},enableRuleForClusters:{id:"enableRuleForClusters",defaultMessage:[{type:0,value:"Enable this recommendation for all clusters"}]},save:{id:"save",defaultMessage:[{type:0,value:"Save"}]},cancel:{id:"cancel",defaultMessage:[{type:0,value:"Cancel"}]},recSuccessfullyDisabled:{id:"recSuccessfullyDisabled",defaultMessage:[{type:0,value:"Recommendation disabled"}]},recSuccessfullyEnabled:{id:"recSuccessfullyEnabled",defaultMessage:[{type:0,value:"Recommendation successfully enabled"}]},error:{id:"error",defaultMessage:[{type:0,value:"Error"}]},disableRuleForClusters:{id:"disableRuleForClusters",defaultMessage:[{type:0,value:"Disable recommendation for selected clusters"}]},disableRuleSingleCluster:{id:"disableRuleSingleCluster",defaultMessage:[{type:0,value:"Disable only for this cluster"}]},disableRuleBody:{id:"disableRuleBody",defaultMessage:[{type:0,value:"This recommendation will not be shown in reports and dashboards."}]},justificationNote:{id:"justificationNote",defaultMessage:[{type:0,value:"Justification note"}]},rulesTableErrorEnabled:{id:"rulesTableErrorEnabled",defaultMessage:[{type:0,value:"Enabling recommendations failed"}]},rulesTableErrorDisabled:{id:"rulesTableErrorDisabled",defaultMessage:[{type:0,value:"Disabling recommendations failed"}]},ruleIsDisabled:{id:"ruleIsDisabled",defaultMessage:[{type:0,value:"Recommendation is disabled"}]},ruleIsDisabledBody:{id:"ruleIsDisabledBody",defaultMessage:[{type:0,value:"This recommendation has been disabled and has no results."}]},ruleIsDisabledWithJustificaiton:{id:"ruleIsDisabledWithJustificaiton",defaultMessage:[{type:0,value:"This recommendation was disabled on "},{type:1,value:"date"},{type:0,value:" because "},{type:1,value:"reason"},{type:0,value:" and has no results."}]},ruleIsDisabledWithoutJustificaiton:{id:"ruleIsDisabledWithoutJustificaiton",defaultMessage:[{type:0,value:"This recommendation was disabled on "},{type:1,value:"date"},{type:0,value:" and has no results."}]},ruleIsDisabledForSystems:{id:"ruleIsDisabledForSystems",defaultMessage:[{type:0,value:"Recommendation is disabled for some systems"}]},ruleIsDisabledForAllSystems:{id:"ruleIsDisabledForAllSystems",defaultMessage:[{type:0,value:"Recommendation is disabled for all systems"}]},ruleIsDisabledForSystemsBody:{id:"ruleIsDisabledForSystemsBody",defaultMessage:[{type:0,value:"Recommendation is disabled for "},{type:6,value:"systems",options:{one:{value:[{type:7},{type:0,value:" system"}]},other:{value:[{type:7},{type:0,value:" systems"}]}},offset:0,pluralType:"cardinal"}]},comingSoonTitle:{id:"comingSoonTitle",defaultMessage:[{type:0,value:"Coming soon"}]},comingSoonBody:{id:"comingSoonBody",defaultMessage:[{type:0,value:"We’re currently working on this page. In the meantime, you can visit the Insights Advisor recommendations page to view potential issues with your clusters."}]},viewClusters:{id:"viewClusters",defaultMessage:[{type:0,value:"View clusters"}]},clusterName:{id:"clusterName",defaultMessage:[{type:0,value:"Cluster name"}]},dateDisabled:{id:"dateDisabled",defaultMessage:[{type:0,value:"Date disabled"}]},hostAckModalTitle:{id:"hostAckModalTitle",defaultMessage:[{type:0,value:"Recommendation has been disabled for:"}]},enable:{id:"enable",defaultMessage:[{type:0,value:"Enable"}]},recSuccessfullyDisabledForCluster:{id:"recSuccessfullyDisabledForCluster",defaultMessage:[{type:0,value:"Recommendation disabled for selected cluster(s)"}]},recSuccessfullyEnabledForCluster:{id:"recSuccessfullyEnabledForSystem",defaultMessage:[{type:0,value:"Recommendation successfully enabled for selected cluster(s)"}]},selectNone:{id:"selectNone",defaultMessage:[{type:0,value:"Select none (0 items)"}]},selectAll:{id:"selectAll",defaultMessage:[{type:0,value:"Select all ("},{type:1,value:"items"},{type:0,value:" items)"}]},noRecsForClusterListTitle:{id:"noRecsForClusterListTitle",defaultMessage:[{type:0,value:"No clusters yet"}]},noRecsForClusterListBody:{id:"noRecsForClusterListBody",defaultMessage:[{type:0,value:"To get started, create or register your cluster to get recommendations from Insights Advisor."}]}})},77647:(e,t,s)=>{s.d(t,{jz:()=>c,yr:()=>y,om:()=>p,o1:()=>m,Dg:()=>f});var a=s(15861),r=s(87757),l=s.n(r),n=s(30848),o=s(45673),i=s(48622),u=s(86362),d=s(71094),c=(0,n.LC)({reducerPath:"acks",baseQuery:(0,o.ni)({baseUrl:u._n}),endpoints:function(e){return{getRecAcks:e.query({query:function(e){return{url:"/v2/ack/".concat(e.ruleId)}}}),setAck:e.mutation({query:function(e){return{url:"/v2/ack",body:e,method:"post"}}})}}}),m=function(){var e=(0,a.Z)(l().mark((function e(t){var s,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.uuid,a=t.recId,e.next=3,(0,d.qb)("".concat(u._n,"/v1/clusters/").concat(s,"/rules/").concat((0,i.Nq)(a),".report/error_key/").concat((0,i.o6)(a),"/enable"));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(l().mark((function e(t){var s,a,r,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.uuid,a=t.recId,r=t.justification,n=void 0===r?"":r,e.next=3,(0,d.qb)("".concat(u._n,"/v1/clusters/").concat(s,"/rules/").concat((0,i.Nq)(a),".report/error_key/").concat((0,i.o6)(a),"/disable"));case 3:return e.next=5,(0,d.SO)("".concat(u._n,"/v1/clusters/").concat(s,"/rules/").concat((0,i.Nq)(a),".report/error_key/").concat((0,i.o6)(a),"/disable_feedback"),{},{message:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=c.useGetRecAcksQuery,p=c.useSetAckMutation},28672:(e,t,s)=>{s.d(t,{CH:()=>r,Ly:()=>l,OF:()=>n,BC:()=>d,Q4:()=>c,$Q:()=>m,YR:()=>f,ZP:()=>y});var a=s(24268),r={limit:20,offset:0,impacting:["true"],sortIndex:4,sortDirection:"desc",rule_status:"enabled"},l={limit:20,offset:0,hits:["all"],sortIndex:6,sortDirection:"desc",text:""},n={limit:20,offset:0,sortIndex:-1,sortDirection:"desc",text:""},o={affectedClustersState:{limit:20,offset:0,text:"",sortIndex:-1,sortDirection:null},recsListState:r,clustersListState:l,clusterRulesState:n},i=(0,a.oM)({name:"filters",initialState:o,reducers:{updateAffectedClustersFilters:function(e,t){e.affectedClustersState=t.payload},updateRecsListFilters:function(e,t){e.recsListState=t.payload},updateClustersListFilters:function(e,t){e.clustersListState=t.payload},updateClusterRulesFilters:function(e,t){e.clusterRulesState=t.payload}}}),u=i.actions,d=u.updateAffectedClustersFilters,c=u.updateRecsListFilters,m=(u.updateRecsListSortIndex,u.updateRecListSortDirection,u.updateClustersListFilters),f=u.updateClusterRulesFilters;const y=i.reducer},86362:(e,t,s)=>{s.d(t,{_n:()=>l,n_:()=>n,th:()=>o,qv:()=>i,tf:()=>u,Bs:()=>d,Oj:()=>c});var a=s(30848),r=s(45673),l="/api/insights-results-aggregator",n=(0,a.LC)({reducerPath:"smartProxy",baseQuery:(0,r.ni)({baseUrl:l}),endpoints:function(e){return{getClusterById:e.query({query:function(e){var t=e.id,s=e.includeDisabled;return"v2/cluster/".concat(t,"/reports?get_disabled=").concat(s)}}),getRuleById:e.query({query:function(e){return"v2/rule/".concat(e)}}),getAffectedClusters:e.query({query:function(e){return"v2/rule/".concat(e,"/clusters_detail")},transformResponse:function(e){return null==e?void 0:e.data}}),getRecs:e.query({query:function(){return"v2/rule"}}),getClusters:e.query({query:function(){return"v2/clusters"}}),getDisplayName:e.query({query:function(e){var t=e.id,s=e.includeDisabled;return"v2/cluster/".concat(t,"/reports?get_disabled=").concat(s)},transformResponse:function(e){var t,s;return null==e||null===(t=e.report)||void 0===t||null===(s=t.meta)||void 0===s?void 0:s.cluster_name}})}}}),o=n.useGetClusterByIdQuery,i=(n.useLazyGetClusterByIdQuery,n.useGetRuleByIdQuery),u=n.useGetAffectedClustersQuery,d=n.useGetRecsQuery,c=(n.useLazyGetRecsQuery,n.useGetClustersQuery);n.useGetDisplayNameQuery},71094:(e,t,s)=>{s.d(t,{SO:()=>l,HG:()=>n,qb:()=>o});var a=s(11521),r=s.n(a),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r().post(e,s,{headers:t})},n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r().delete(e,t,{headers:s})},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r().put(e,t,{headers:s})}},48622:(e,t,s)=>{s.d(t,{Nq:()=>n,o6:()=>o,hw:()=>i});var a=s(4942);function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){(0,a.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var n=function(e){var t;return null===(t=e.split("|"))||void 0===t?void 0:t[0]},o=function(e){var t;return null===(t=e.split("|"))||void 0===t?void 0:t[1]},i=function(e,t){var s,a=(null==e||null===(s=e.error_keys)||void 0===s?void 0:s[o(t)])||{},r=l(l(l({},e),a),(null==a?void 0:a.metadata)||(null==e?void 0:e.metadata)||{});return r.impact={impact:r.impact},delete r.metadata,delete r.error_keys,r}},28186:(e,t,s)=>{s.d(t,{Iz:()=>i,fK:()=>u,RW:()=>d});var a=s(93264),r=s.n(a),l=s(45697),n=s.n(l),o=s(57968),i={en:s(33029)},u=function(e){return r().createElement("strong",null,e)},d=function(e){var t=e.children;return r().createElement(o.Pj,{locale:navigator.language.slice(0,2),defaultLocale:"en",messages:i[navigator.language.slice(0,2)],onError:console.error},t)};d.propTypes={children:n().element}},33029:e=>{e.exports=JSON.parse('{"actions":"Actions","added":"Added","affectedClusters":"Affected clusters","all":"All","cancel":"Cancel","category":"Category","clusterName":"Cluster name","clusters":"Clusters","comingSoonBody":"We’re currently working on this page. In the meantime, you can visit the Insights Advisor recommendations page to view potential issues with your clusters.","comingSoonTitle":"Coming soon","critical":"Critical","dateDisabled":"Date disabled","description":"Description","disableRule":"Disable recommendation","disableRuleBody":"This recommendation will not be shown in reports and dashboards.","disableRuleForClusters":"Disable recommendation for selected clusters","disableRuleSingleCluster":"Disable only for this cluster","disabled":"Disabled","documentTitle":"{subnav} - OCP Advisor | Red Hat Insights","enable":"Enable","enableRule":"Enable recommendation","enableRuleForClusters":"Enable this recommendation for all clusters","enabled":"Enabled","error":"Error","errorStateBody":"There was a problem processing the request. Please try again.","errorStateTitle":"Something went wrong","faultTolerance":"Fault Tolerance","filterBy":"Filter by name","high":"High","hostAckModalTitle":"Recommendation has been disabled for:","impact":"Impact","impactDescription":"The impact of the problem would be {level} if it occurred.","impactLevel":"{level} impact","important":"Important","insightsHeader":"Advisor","justificationNote":"Justification note","knowledgebasearticle":"Knowledgebase article","lastSeen":"Last seen","likelihood":"Likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","likelihoodLevel":"{level} likelihood","loading":"Loading","low":"Low","medium":"Medium","moderate":"Moderate","nA":"N/A","name":"Name","noAffectedClustersBody":"This recommendation does not affect any cluster.","noAffectedClustersTitle":"No clusters","noClustersError":"No data about affected clusters","noClustersErrorDesc":"There was an error fetching affected clusters for this recommendation.","noMatchingClustersDesc":"To continue, edit your filter settings and search again.","noMatchingClustersTitle":"No matching clusters found","noMatchingRecommendationsDesc":"To continue, edit your filter settings and search again.","noMatchingRecommendationsTitle":"No matching recommendations found","noRecommendations":"The cluster is not affected by any known recommendations","noRecommendationsDesc":"No known recommendations affect this cluster.","noRecsError":"No recommendations available.","noRecsErrorDesc":"There was an error fetching recommendations for this cluster. Refresh your page to try again.","noRecsForClusterListBody":"To get started, create or register your cluster to get recommendations from Insights Advisor.","noRecsForClusterListTitle":"No clusters yet","noRecsFoundError":"No recommendations to display","noRecsFoundErrorDesc":"Insights identifies and prioritizes risks to security, performance, availability, and stability of your clusters. This feature uses the Remote Health functionality of OpenShift Container Platform. For further details about Insights, see the","none":"None","oneOrMore":"1 or more","performance":"Performance","permsBody":"To view the content of this page, you must be granted a minimum of Advisor permissions from your Organization Administrator.","permsTitle":"You do not have access to Advisor","recSuccessfullyDisabled":"Recommendation disabled","recSuccessfullyDisabledForCluster":"Recommendation disabled for selected cluster(s)","recSuccessfullyEnabled":"Recommendation successfully enabled","recSuccessfullyEnabledForSystem":"Recommendation successfully enabled for selected cluster(s)","recommendation":"Recommendation","recommendations":"Recommendations","resetFilters":"Reset filters","riskOfChange":"Risk of change","ruleFetchError":"There was an error fetching recommendation. Refresh your page to try again.","ruleIsDisabled":"Recommendation is disabled","ruleIsDisabledBody":"This recommendation has been disabled and has no results.","ruleIsDisabledForAllClusters":"Recommendation is disabled for all clusters","ruleIsDisabledForAllSystems":"Recommendation is disabled for all systems","ruleIsDisabledForClusters":"Recommendation is disabled for some clusters","ruleIsDisabledForClustersBody":"Recommendation is disabled for {clusters, plural, one {# cluster} other {# clusters}} and has no results.","ruleIsDisabledForSystems":"Recommendation is disabled for some systems","ruleIsDisabledForSystemsBody":"Recommendation is disabled for {systems, plural, one {# system} other {# systems}}","ruleIsDisabledTooltip":"Indicates this recommendation will not be shown for the cluster.","ruleIsDisabledWithJustificaiton":"This recommendation was disabled on {date} because {reason} and has no results.","ruleIsDisabledWithoutJustificaiton":"This recommendation was disabled on {date} and has no results.","rulesDetailsTotalRiskBody":"The total risk of this remediation is <strong>{risk}</strong>, based on the combination of likelihood and impact to remediate.","rulesTableErrorDisabled":"Disabling recommendations failed","rulesTableErrorEnabled":"Enabling recommendations failed","rulesdetails.publishdate":"Publish date: {date}","save":"Save","security":"Security","selectAll":"Select all ({items} items)","selectNone":"Select none (0 items)","serviceAvailability":"Service Availability","totalRisk":"Total risk","unableToConnect":"Unable to connect","unableToConnectDesc":"There was an error retrieving data. Check your connection and try again.","undefined":"Undefined","unknown":"Unknown","veryLow":"Very Low","viewAffectedClusters":"View {clusters, plural, one {the affected cluster} other {# affected clusters}}","viewClusters":"View clusters"}')}}]);
//# sourceMappingURL=../sourcemaps/484.cef7e2406537ee7f7c7b42943088014a.js.map