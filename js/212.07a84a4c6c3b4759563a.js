"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[212],{52661:(e,a,t)=>{t.d(a,{Z:()=>u});var s=t(2095),l=t(85962),i=t(24561),d=t(93264),o=t.n(d);const u=function(){return o().createElement(s.Card,null,o().createElement(l.CardBody,null,o().createElement(i.aV,null)))}},30893:(e,a,t)=>{t.d(a,{Z:()=>s});const s=(0,t(50049).vU)({documentTitle:{id:"documentTitle",defaultMessage:[{type:1,value:"subnav"},{type:0,value:" - OCP Advisor | Red Hat Insights"}]},clusters:{id:"clusters",defaultMessage:[{type:0,value:"Clusters"}]},added:{id:"added",defaultMessage:[{type:0,value:"Added"}]},loading:{id:"loading",defaultMessage:[{type:0,value:"Loading"}]},lastSeen:{id:"lastSeen",defaultMessage:[{type:0,value:"Last seen"}]},actions:{id:"actions",defaultMessage:[{type:0,value:"Actions"}]},name:{id:"name",defaultMessage:[{type:0,value:"Name"}]},description:{id:"description",defaultMessage:[{type:0,value:"Description"}]},filterBy:{id:"filterBy",defaultMessage:[{type:0,value:"Filter by name"}]},totalRisk:{id:"totalRisk",defaultMessage:[{type:0,value:"Total risk"}]},recommendation:{id:"recommendation",defaultMessage:[{type:0,value:"Recommendation"}]},recommendations:{id:"recommendations",defaultMessage:[{type:0,value:"Recommendations"}]},insightsHeader:{id:"insightsHeader",defaultMessage:[{type:0,value:"Advisor"}]},unknown:{id:"unknown",defaultMessage:[{type:0,value:"Unknown"}]},low:{id:"low",defaultMessage:[{type:0,value:"Low"}]},moderate:{id:"moderate",defaultMessage:[{type:0,value:"Moderate"}]},important:{id:"important",defaultMessage:[{type:0,value:"Important"}]},critical:{id:"critical",defaultMessage:[{type:0,value:"Critical"}]},veryLow:{id:"veryLow",defaultMessage:[{type:0,value:"Very Low"}]},medium:{id:"medium",defaultMessage:[{type:0,value:"Medium"}]},high:{id:"high",defaultMessage:[{type:0,value:"High"}]},serviceAvailability:{id:"serviceAvailability",defaultMessage:[{type:0,value:"Service Availability"}]},performance:{id:"performance",defaultMessage:[{type:0,value:"Performance"}]},faultTolerance:{id:"faultTolerance",defaultMessage:[{type:0,value:"Fault Tolerance"}]},security:{id:"security",defaultMessage:[{type:0,value:"Security"}]},enabled:{id:"enabled",defaultMessage:[{type:0,value:"Enabled"}]},impact:{id:"impact",defaultMessage:[{type:0,value:"Impact"}]},impactLevel:{id:"impactLevel",defaultMessage:[{type:1,value:"level"},{type:0,value:" impact"}]},impactDescription:{id:"impactDescription",defaultMessage:[{type:0,value:"The impact of the problem would be "},{type:1,value:"level"},{type:0,value:" if it occurred."}]},category:{id:"category",defaultMessage:[{type:0,value:"Category"}]},likelihood:{id:"likelihood",defaultMessage:[{type:0,value:"Likelihood"}]},likelihoodLevel:{id:"likelihoodLevel",defaultMessage:[{type:1,value:"level"},{type:0,value:" likelihood"}]},likelihoodDescription:{id:"likelihoodDescription",defaultMessage:[{type:0,value:"The likelihood that this will be a problem is "},{type:1,value:"level"},{type:0,value:"."}]},all:{id:"all",defaultMessage:[{type:0,value:"All"}]},disabled:{id:"disabled",defaultMessage:[{type:0,value:"Disabled"}]},resetFilters:{id:"resetFilters",defaultMessage:[{type:0,value:"Reset filters"}]},noMatchingRecsTitle:{id:"noMatchingRecommendationsTitle",defaultMessage:[{type:0,value:"No matching recommendations found"}]},noMatchingRecsBody:{id:"noMatchingRecommendationsDesc",defaultMessage:[{type:0,value:"This filter criteria matches no recommendations. Try changing your filter settings."}]},noRecommendations:{id:"noRecommendations",defaultMessage:[{type:0,value:"None of your connected clusters are affected by any known recommendations."}]},noRecommendationsDesc:{id:"noRecommendationsDesc",defaultMessage:[{type:0,value:"No known recommendations affect this cluster."}]},ruleIsDisabledTooltip:{id:"ruleIsDisabledTooltip",defaultMessage:[{type:0,value:"Indicates this recommendation will not be shown for the cluster."}]},rulesDetailsPubishdate:{id:"rulesdetails.publishdate",defaultMessage:[{type:0,value:"Publish date: "},{type:1,value:"date"}]},knowledgebaseArticle:{id:"knowledgebasearticle",defaultMessage:[{type:0,value:"Knowledgebase article"}]},viewAffectedClusters:{id:"viewAffectedClusters",defaultMessage:[{type:0,value:"View "},{type:6,value:"clusters",options:{one:{value:[{type:0,value:"the affected cluster"}]},other:{value:[{type:7},{type:0,value:" affected clusters"}]}},offset:0,pluralType:"cardinal"}]},ruleFetchError:{id:"ruleFetchError",defaultMessage:[{type:0,value:"There was an error fetching recommendation. Refresh your page to try again."}]},affectedClusters:{id:"affectedClusters",defaultMessage:[{type:0,value:"Affected clusters"}]},noRecsError:{id:"noRecsError",defaultMessage:[{type:0,value:"No recommendations available."}]},noRecsErrorDesc:{id:"noRecsErrorDesc",defaultMessage:[{type:0,value:"There was an error fetching recommendations for this cluster. Refresh your page to try again."}]},noClustersError:{id:"noClustersError",defaultMessage:[{type:0,value:"No data about affected clusters"}]},noClustersErrorDesc:{id:"noClustersErrorDesc",defaultMessage:[{type:0,value:"There was an error fetching affected clusters for this recommendation."}]},unableToConnect:{id:"unableToConnect",defaultMessage:[{type:0,value:"Unable to connect"}]},unableToConnectDesc:{id:"unableToConnectDesc",defaultMessage:[{type:0,value:"There was an error retrieving data. Check your connection and try again."}]},noAffectedClustersTitle:{id:"noAffectedClustersTitle",defaultMessage:[{type:0,value:"No clusters"}]},noAffectedClustersBody:{id:"noAffectedClustersBody",defaultMessage:[{type:0,value:"This recommendation does not affect any cluster."}]},noMatchingClustersTitle:{id:"noMatchingClustersTitle",defaultMessage:[{type:0,value:"No matching clusters found"}]},noMatchingClustersBody:{id:"noMatchingClustersDesc",defaultMessage:[{type:0,value:"To continue, edit your filter settings and search again."}]},errorStateTitle:{id:"errorStateTitle",defaultMessage:[{type:0,value:"Something went wrong"}]},errorStateBody:{id:"errorStateBody",defaultMessage:[{type:0,value:"There was a problem processing the request. Please try again."}]},riskOfChange:{id:"riskOfChange",defaultMessage:[{type:0,value:"Risk of change"}]},rulesDetailsTotalRiskBody:{id:"rulesDetailsTotalRiskBody",defaultMessage:[{type:0,value:"The total risk of this remediation is "},{type:8,value:"strong",children:[{type:1,value:"risk"}]},{type:0,value:", based on the combination of likelihood and impact to remediate."}]},ruleIsDisabledForClusters:{id:"ruleIsDisabledForClusters",defaultMessage:[{type:0,value:"Recommendation is disabled for some clusters"}]},ruleIsDisabledForAllClusters:{id:"ruleIsDisabledForAllClusters",defaultMessage:[{type:0,value:"Recommendation is disabled for all clusters"}]},ruleIsDisabledForClustersBody:{id:"ruleIsDisabledForClustersBody",defaultMessage:[{type:0,value:"Recommendation is disabled for "},{type:6,value:"clusters",options:{one:{value:[{type:7},{type:0,value:" cluster"}]},other:{value:[{type:7},{type:0,value:" clusters"}]}},offset:0,pluralType:"cardinal"}]},oneOrMore:{id:"oneOrMore",defaultMessage:[{type:0,value:"1 or more"}]},none:{id:"none",defaultMessage:[{type:0,value:"None"}]},undefined:{id:"undefined",defaultMessage:[{type:0,value:"Undefined"}]},nA:{id:"nA",defaultMessage:[{type:0,value:"N/A"}]}})}}]);
//# sourceMappingURL=../sourcemaps/212.58c973e25632b0792a4fc904963311e6.js.map