"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[816],{87999:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(93264),o=n.n(r),a=n(16530),i=n(51344),s=n(70130),c=n(83215),l=n(76),u=n(21964),d=n(42151),m=n(86170),h=[{title:"Clusters",path:"/clusters/:clusterId",component:(0,r.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(238),n.e(619)]).then(n.bind(n,39697))}))},{title:"Recommendations",path:"/recommendations/:recommendationId",component:(0,r.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(238),n.e(987)]).then(n.bind(n,87862))}))}],f=function(){return o().createElement(r.Suspense,{fallback:o().createElement(l.Bullseye,null,o().createElement(d.Spinner,null))},o().createElement(a.Switch,null,h.map((function(e){return o().createElement(a.Route,{key:e.title,path:e.path,component:e.component})})),o().createElement(a.Route,{path:"*",component:function(){return o().createElement(u.EmptyState,null,o().createElement(u.EmptyStateBody,null,o().createElement(m.Z,null)))}})))};const p=function(){var e=(0,a.useHistory)();return(0,r.useEffect)((function(){(0,s.JH)().register({notifications:c.ee}),insights.chrome.init(),insights.chrome.identifyApp("ocp-advisor");var t=insights.chrome.on("APP_NAVIGATION",(function(t){return e.push("/".concat(t.navId))}));return function(){t()}}),[]),o().createElement(o().Fragment,null,o().createElement(i.ZP,null),o().createElement(f,null))}},43:(e,t,n)=>{n.d(t,{p:()=>l,u:()=>u});var r,o=n(15861),a=n(87757),i=n.n(a),s=n(30848),c=n(45673),l=(0,s.LC)({reducerPath:"ams",baseQuery:(0,c.ni)({baseUrl:"https://api.openshift.com/api/accounts_mgmt/v1",prepareHeaders:(r=(0,o.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return(n=e.sent)&&t.set("Authorization","Bearer ".concat(n)),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}),endpoints:function(e){return{getCurrentAccount:e.query({query:function(){return"current_account"}}),getClusterDisplayNameById:e.query({query:function(e){return"subscriptions?page=1&size=-1&search=external_cluster_id='".concat(e,"'&fields=display_name")},transformResponse:function(e){var t,n;return null==e||null===(t=e.items)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.display_name}})}}}),u=l.useGetClusterDisplayNameByIdQuery},86362:(e,t,n)=>{n.d(t,{GM:()=>a,th:()=>i,y0:()=>s,qv:()=>c});var r=n(30848),o=n(45673),a=(0,r.LC)({reducerPath:"smartProxy",baseQuery:(0,o.ni)({baseUrl:"/api/insights-results-aggregator/v1"}),endpoints:function(e){return{getClusterById:e.query({query:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"clusters/".concat(e,"/report?get_disabled=").concat(t)}}),getRuleById:e.query({query:function(e){return"rules/".concat(e,"/content")}})}}}),i=a.useGetClusterByIdQuery,s=a.useLazyGetClusterByIdQuery,c=a.useGetRuleByIdQuery},61380:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(4942),o=n(24268),a=n(94500),i=n.n(a),s=n(43),c=n(86362);const l=function(e){var t;return(0,o.xC)({reducer:(t={},(0,r.Z)(t,c.GM.reducerPath,c.GM.reducer),(0,r.Z)(t,s.p.reducerPath,s.p.reducer),t),middleware:function(t){var n=t().concat(c.GM.middleware,s.p.middleware);return e&&n.concat(i()),n}})}},33029:e=>{e.exports=JSON.parse('{"actions":"Actions","added":"Added","affectedClusters":"Affected clusters","all":"All","category":"Category","clusters":"Clusters","critical":"Critical","disabled":"Disabled","documentTitle":"{subnav} - OCP Advisor | Red Hat Insights","enabled":"Enabled","faultTolerance":"Fault Tolerance","filterBy":"Filter by name","high":"High","impact":"Impact","impactDescription":"The impact of the problem would be {level} if it occurred.","impactLevel":"{level} impact","important":"Important","insightsHeader":"Advisor","knowledgebasearticle":"Knowledgebase article","lastSeen":"Last seen","likelihood":"Likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","likelihoodLevel":"{level} likelihood","loading":"Loading","low":"Low","medium":"Medium","moderate":"Moderate","name":"Name","noClusters":"No clusters","noClustersBody":"This recommendation doesn’t affect any cluster.","noClustersError":"No data about affected clusters.","noClustersErrorDesc":"There was an error fetching affected clusters for this recommendation.","noMatchingRecommendations":"No matching recommendations found","noMatchingRecommendationsDesc":"This filter criteria matches no recommendations. Try changing your filter settings.","noRecommendations":"None of your connected clusters are affected by any known recommendations.","noRecommendationsDesc":"No known recommendations affect this cluster.","noRecsError":"No recommendations available.","noRecsErrorDesc":"There was an error fetching recommendations for this cluster. Refresh your page to try again.","performance":"Performance","recommendation":"Recommendation","recommendations":"Recommendations","resetFilters":"Reset filters","ruleFetchError":"There was an error fetching recommendation. Refresh your page to try again.","ruleIsDisabledTooltip":"Indicates this recommendation will not be shown for the cluster.","rulesdetails.publishdate":"Publish date: {date}","security":"Security","serviceAvailability":"Service Availability","totalRisk":"Total risk","unableToConnect":"Unable to connect","unableToConnectDesc":"There was an error retrieving data. Check your connection and try again.","unknown":"Unknown","veryLow":"Very Low","viewAffectedClusters":"View {clusters, plural, one {the affected cluster} other {# affected clusters}}"}')}}]);
//# sourceMappingURL=../sourcemaps/816.ce8247870044184e4e04.js.map