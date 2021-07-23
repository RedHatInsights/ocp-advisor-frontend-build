(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[102],{78508:e=>{"use strict";e.exports=JSON.parse('{"actions":"Actions","added":"Added","all":"All","availability":"Availability","category":"Category","clusters":"Clusters","critical":"Critical","disabled":"Disabled","documentTitle":"{subnav} - OCP Advisor | Red Hat Insights","enabled":"Enabled","filterBy":"Filter by name","high":"High","impact":"Impact","impactDescription":"The impact of the problem would be {level} if it occurred.","impactLevel":"{level} impact","important":"Important","insightsHeader":"Advisor","lastSeen":"Last seen","likelihood":"Likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","likelihoodLevel":"{level} likelihood","loading":"Loading","low":"Low","medium":"Medium","moderate":"Moderate","name":"Name","noMatchingRecommendations":"No matching recommendations found","noMatchingRecommendationsDesc":"This filter criteria matches no recommendations. Try changing your filter settings.","noRecommendations":"None of your connected systems are affected by any known recommendations.","noRecommendationsDesc":"No known recommendations affect this cluster.","performance":"Performance","recommendation":"Recommendation","recommendations":"Recommendations","resetFilters":"Reset filters","security":"Security","stability":"Stability","totalRisk":"Total risk","unknown":"Unknown","veryLow":"Very Low"}')},87999:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(93264),i=n.n(r),a=n(16530),o=n(24685),s=n(70130),c=n(83215),l=n(58788),u=n(86170),m=[{title:"Clusters",path:"/clusters/:clusterId",component:(0,r.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(619)]).then(n.bind(n,42146))}))}],d=function(){return i().createElement(r.Suspense,{fallback:i().createElement(l.Bullseye,null,i().createElement(l.Spinner,null))},i().createElement(a.Switch,null,m.map((function(e){return i().createElement(a.Route,{key:e.title,path:e.path,component:e.component})})),i().createElement(a.Route,{path:"*",component:function(){return i().createElement(l.EmptyState,null,i().createElement(l.EmptyStateBody,null,i().createElement(u.Z,null)))}})))};const p=function(){var e=(0,a.useHistory)();return(0,r.useEffect)((function(){(0,s.JH)().register({notifications:c.ee}),insights.chrome.init(),insights.chrome.identifyApp("ocp-advisor");var t=insights.chrome.on("APP_NAVIGATION",(function(t){return e.push("/".concat(t.navId))}));return function(){t()}}),[]),i().createElement(i().Fragment,null,i().createElement(o.ZP,null),i().createElement("div",{className:"ocp-advisor"},i().createElement(d,null)))}},43:(e,t,n)=>{"use strict";n.d(t,{p:()=>l,u:()=>u});var r,i=n(92137),a=n(87757),o=n.n(a),s=n(30848),c=n(45673),l=(0,s.LC)({reducerPath:"ams",baseQuery:(0,c.ni)({baseUrl:"https://api.openshift.com/api/accounts_mgmt/v1",prepareHeaders:(r=(0,i.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return(n=e.sent)&&t.set("Authorization","Bearer ".concat(n)),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}),endpoints:function(e){return{getCurrentAccount:e.query({query:function(){return"current_account"}}),getClusterDisplayNameById:e.query({query:function(e){return"subscriptions?page=1&size=-1&search=external_cluster_id='".concat(e,"'&fields=display_name")},transformResponse:function(e){var t,n;return null==e||null===(t=e.items)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.display_name}})}}}),u=l.useGetClusterDisplayNameByIdQuery},86362:(e,t,n)=>{"use strict";n.d(t,{G:()=>a,t:()=>o});var r=n(30848),i=n(45673),a=(0,r.LC)({reducerPath:"smartProxy",baseQuery:(0,i.ni)({baseUrl:"/api/insights-results-aggregator/v1"}),endpoints:function(e){return{getClusterById:e.query({query:function(e){return"clusters/".concat(e,"/report")}})}}}),o=a.useGetClusterByIdQuery},61380:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(96156),i=n(24268),a=n(94500),o=n.n(a),s=n(43),c=n(86362);const l=function(e){var t;return(0,i.xC)({reducer:(t={},(0,r.Z)(t,c.G.reducerPath,c.G.reducer),(0,r.Z)(t,s.p.reducerPath,s.p.reducer),t),middleware:function(t){var n=t().concat(c.G.middleware,s.p.middleware);return e&&n.concat(o()),n}})}}}]);
//# sourceMappingURL=../sourcemaps/102.9de6616bd8d3608e1232.js.map