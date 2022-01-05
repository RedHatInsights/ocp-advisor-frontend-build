"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[985],{73451:(e,t,a)=>{a.d(t,{Z:()=>M});var n=a(15861),s=a(29439),r=a(87757),i=a.n(r),o=a(93264),l=a.n(o),c=a(86896),u=a(45697),d=a.n(u),f=a(88931),m=a(6202),b=a(32752),p=a(4853),g=a(23811),h=a(78826),v=a(12282),k=a(71355),Z=a(30893),y=a(77647),C=function(e){var t=e.isModalOpen,a=e.handleModalToggle,r=e.rule,u=e.afterFn,d=e.host,C=e.hosts,M=(0,c.Z)(),D=(0,o.useState)(""),x=(0,s.Z)(D,2),E=x[0],I=x[1],j=(0,o.useState)(void 0!==d||C.length>0),R=(0,s.Z)(j,2),w=R[0],F=R[1],_=(0,y.om)(),O=(0,s.Z)(_,1)[0],S=(0,f.useDispatch)(),P=function(e){return S((0,k.wN)(e))},T=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=C.map((function(e){return(0,y.Dg)({uuid:e.id,recId:r.rule_id,justification:E})})),e.next=4,Promise.all(t);case 4:P({variant:"success",dismissable:!0,timeout:!0,title:M.formatMessage(Z.Z.recSuccessfullyDisabledForCluster)}),u&&u(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),P({variant:"danger",dismissable:!0,title:M.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=(0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.disabled||0!==C.length){e.next=20;break}if(e.prev=1,!w){e.next=8;break}return e.next=5,(0,y.Dg)({uuid:d,recId:r.rule_id,justification:E});case 5:P({variant:"success",timeout:!0,dismissable:!0,title:M.formatMessage(Z.Z.recSuccessfullyDisabledForCluster)}),e.next=11;break;case 8:return e.next=10,O({rule_id:r.rule_id,justification:E}).unwrap();case 10:P({variant:"success",timeout:!0,dismissable:!0,title:M.formatMessage(Z.Z.recSuccessfullyDisabled)});case 11:I(""),u&&u(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),P({variant:"danger",dismissable:!0,title:M.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 18:e.next=21;break;case 20:T();case 21:a(!1);case 22:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return l().createElement(h.u_,{variant:"small",title:M.formatMessage(Z.Z.disableRule),isOpen:t,onClose:function(){a(),I("")},actions:[l().createElement(m.Button,{key:"confirm",variant:"primary",onClick:function(){return N()},ouiaId:"confirm"},M.formatMessage(Z.Z.save)),l().createElement(m.Button,{key:"cancel",variant:"link",onClick:function(){a(!1),I("")},ouiaId:"cancel"},M.formatMessage(Z.Z.cancel))],ouiaId:"recommendation-disable"},M.formatMessage(Z.Z.disableRuleBody),l().createElement(p.l,null,l().createElement(g.c,{fieldId:"blank-form"}),(d||C.length>0)&&l().createElement(g.c,{fieldId:"disable-rule-one-system"},l().createElement(b.Checkbox,{isChecked:w,onChange:function(){F(!w)},label:d?M.formatMessage(Z.Z.disableRuleSingleCluster):M.formatMessage(Z.Z.disableRuleForClusters),id:"disable-rule-one-system",name:"disable-rule-one-system",ouiaId:"disable-recommendation-one-cluster"})),l().createElement(g.c,{label:M.formatMessage(Z.Z.justificationNote),fieldId:"disable-rule-justification"},l().createElement(v.TextInput,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:E,onChange:function(e){return I(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),N())}}))))};C.propTypes={isModalOpen:d().bool,rule:d().object,handleModalToggle:d().func,afterFn:d().func,host:d().object,hosts:d().array},C.defaultProps={isModalOpen:!1,rule:{},handleModalToggle:function(){},afterFn:function(){},host:void 0,hosts:[]};const M=C},1990:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(93264),s=a.n(n),r=a(45697),i=a.n(r),o=a(86896),l=a(22663),c=a(52661),u=function(e){var t=e.rule,a=e.header,n=e.isDetailsPage,r=e.resolutionRisk,i=e.riskOfChangeDesc,u=e.onFeedbackChanged,d=e.children,f=(0,o.Z)();return s().createElement("div",{className:"advisor"},s().createElement(l.Z,{appName:"advisor",module:"./AdvisorRecommendationDetails",fallback:s().createElement(c.Z,null),rule:t,customItnl:!0,intlProps:f,isDetailsPage:n,header:a,resolutionRisk:r,isOpenShift:!0,riskOfChangeDesc:i,onFeedbackChanged:u},d))};u.propTypes={header:i().any,isDetailsPage:i().bool.isRequired,rule:i().object.isRequired,resolutionRisk:i().number,riskOfChangeDesc:i().string,onFeedbackChanged:i().func,children:i().node};const d=u}}]);
//# sourceMappingURL=../sourcemaps/985.c9c1680d602532fce3a42c1a9fdb1393.js.map