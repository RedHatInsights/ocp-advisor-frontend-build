"use strict";(self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[]).push([[9420],{18246:(n,e,l)=>{Object.defineProperty(e,"__esModule",{value:!0});const t=l(70655);t.__exportStar(l(13877),e),t.__exportStar(l(35817),e)},67867:function(n,e,l){var t=this&&this.__assign||function(){return t=Object.assign||function(n){for(var e,l=1,t=arguments.length;l<t;l++)for(var o in e=arguments[l])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},t.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(n,e,l,t){void 0===t&&(t=l),Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[l]}})}:function(n,e,l,t){void 0===t&&(t=l),n[t]=e[l]}),i=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),c=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var l in n)"default"!==l&&Object.prototype.hasOwnProperty.call(n,l)&&o(e,n,l);return i(e,n),e},a=this&&this.__spreadArray||function(n,e,l){if(l||2===arguments.length)for(var t,o=0,i=e.length;o<i;o++)!t&&o in e||(t||(t=Array.prototype.slice.call(e,0,o)),t[o]=e[o]);return n.concat(t||Array.prototype.slice.call(e))},r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.actionPropsGenerator=e.overflowActionsMapper=void 0;var u=c(l(93264)),s=l(89624),m=l(25832),d=r(l(94184));function f(n){return void 0!==n.label}e.overflowActionsMapper=function(n,e){var l=n;return u.default.createElement(s.DropdownItem,t({},l.props,{className:"ins-c-primary-toolbar__overflow-actions",key:l.value||l.key||"".concat(e,"-overflow"),component:l.props&&l.props.component||u.default.isValidElement(l.label||n)?"div":"button",onClick:function(n){return l.onClick&&l.onClick(n,l,e)}}),l.label||n)},e.actionPropsGenerator=function(n,e){var l,o,i,c,a,r="object"==typeof n&&null!==typeof n&&"function"==typeof(null===(l=n)||void 0===l?void 0:l.onClick)?function(l){var t;return null===(t=n)||void 0===t?void 0:t.onClick(l,n,e)}:void 0;return t(t({},null===(o=n)||void 0===o?void 0:o.props),{onClick:r,component:(null===(c=null===(i=n)||void 0===i?void 0:i.props)||void 0===c?void 0:c.component)||(u.default.isValidElement(n.label||n)?"div":"button"),children:"object"==typeof n&&null!==typeof n?null===(a=n)||void 0===a?void 0:a.label:n})},e.default=function(n){var l,o=n.actions,i=void 0===o?[]:o,c=n.overflowActions,r=void 0===c?[]:c,p=n.onSelect,b=void 0===p?function(){}:p,y=n.dropdownProps,v=void 0===y?{}:y,h=n.kebabToggleProps,g=n.exportConfig,_=(0,u.useState)(!1),E=_[0],C=_[1],x=function(n){return C(n)},S=i[0],T=i.slice(1),I=a(a(a(a([],S?[u.default.createElement(s.DropdownItem,t({key:"first-action"},(0,e.actionPropsGenerator)(S,"first-action"),{className:(0,d.default)("ins-c-primary-toolbar__first-action",f(S)?null===(l=null==S?void 0:S.props)||void 0===l?void 0:l.className:void 0)}))]:[],!0),T.map((function(n,l){var o,i,c;return u.default.createElement(s.DropdownItem,t({key:(null===(o=n)||void 0===o?void 0:o.key)||(null===(c=null===(i=n)||void 0===i?void 0:i.props)||void 0===c?void 0:c.key)||l},(0,e.actionPropsGenerator)(n,l)))})),!0),i.length>0&&r.length>0?[u.default.createElement(s.DropdownSeparator,{key:"separator",className:"ins-c-primary-toolbar__overflow-actions-separator"})]:[],!0),r.map((function(n,l){return(0,e.overflowActionsMapper)(n,l)})),!0);return u.default.createElement(u.Fragment,null,S&&u.default.createElement(s.ToolbarItem,{className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},f(S)?u.default.createElement(s.Button,t({ouiaId:"".concat(S.label)},S.props,{onClick:S.onClick||S.props&&S.props.onClick||void 0}),S.label):S),g&&(g.extraItems||g.onSelect)&&u.default.createElement(s.ToolbarItem,{className:"pf-m-spacer-sm"},u.default.createElement(m.DownloadButton,t({},g))),(i&&(null==i?void 0:i.length)>0||r.length>0)&&u.default.createElement(s.ToolbarItem,{className:"".concat(i.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},u.default.createElement(s.Dropdown,t({},v,{isOpen:E,isPlain:!0,onSelect:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];b&&b.apply(void 0,n),x(!1)},ouiaId:"Actions",toggle:u.default.createElement(s.KebabToggle,t({},h,{onToggle:function(n){x(n)}})),dropdownItems:I}))))}},90111:function(n,e,l){var t=this&&this.__assign||function(){return t=Object.assign||function(n){for(var e,l=1,t=arguments.length;l<t;l++)for(var o in e=arguments[l])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},t.apply(this,arguments)},o=this&&this.__rest||function(n,e){var l={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(l[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(l[t[o]]=n[t[o]])}return l},i=this&&this.__spreadArray||function(n,e,l){if(l||2===arguments.length)for(var t,o=0,i=e.length;o<i;o++)!t&&o in e||(t||(t=Array.prototype.slice.call(e,0,o)),t[o]=e[o]);return n.concat(t||Array.prototype.slice.call(e))},c=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var a=c(l(93264)),r=l(89624),u=l(2426),s=l(31267),m=c(l(67867)),d=l(92053),f=l(2238),p=l(23670),b=c(l(51256));l(62354),e.default=function(n){var e,l=n.id,c=n.className,y=n.toggleIsExpanded,v=n.bulkSelect,h=n.filterConfig,g=n.dedicatedAction,_=n.actionsConfig,E=n.sortByConfig,C=n.pagination,x=n.activeFiltersConfig,S=n.children,T=n.exportConfig,I=n.expandAll,P=n.useMobileLayout,w=o(n,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),D=i([],E?[{label:"Sort order ASC",props:{isDisabled:E.direction===s.SortByDirection.asc},onClick:function(n){return E.onSortChange&&E.onSortChange(n,s.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:E.direction===s.SortByDirection.desc},onClick:function(n){return E.onSortChange&&E.onSortChange(n,s.SortByDirection.desc)}}]:[],!0);return a.default.createElement(r.Toolbar,t({},w,{className:"".concat(c||""," ins-c-primary-toolbar"),toggleIsExpanded:y,id:l?"".concat(l):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"}),a.default.createElement(r.ToolbarContent,null,(I||v||h||g)&&a.default.createElement(r.ToolbarGroup,{className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},I&&a.default.createElement(r.ToolbarItem,null,(e=I,a.default.isValidElement(e)?I:a.default.createElement(r.Button,t({},I.buttonProps,{variant:"plain","aria-label":"".concat(I.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(n){return I.onClick(n,!I.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:I.isDisabled}),a.default.createElement(r.ToolbarExpandIconWrapper,null,I.isAllExpanded?a.default.createElement(u.AngleDownIcon,null):a.default.createElement(u.AngleRightIcon,null))))),v&&a.default.createElement(r.ToolbarItem,null,a.default.isValidElement(v)?v:a.default.createElement(d.BulkSelect,t({ouiaId:"BulkSelect"},v))),h&&a.default.createElement(r.ToolbarItem,{className:"ins-c-primary-toolbar__filter"},a.default.isValidElement(h)?h:a.default.createElement(f.ConditionalFilter,t({useMobileLayout:P},h))),g&&a.default.createElement(r.ToolbarItem,null,g)),a.default.isValidElement(_)?_:(_&&_.actions&&_.actions.length>0||E||T)&&a.default.createElement(m.default,t({},_||{},{exportConfig:T,overflowActions:D})),E&&a.default.createElement(r.ToolbarItem,{className:"ins-c-primary-toolbar__sort-by"},a.default.isValidElement(E)?E:a.default.createElement(b.default,t({},E))),S,C&&a.default.createElement(r.ToolbarItem,{className:"ins-c-primary-toolbar__pagination"},a.default.isValidElement(C)?C:a.default.createElement(r.Pagination,t({isCompact:!0,ouiaId:"CompactPagination"},C)))),x&&a.default.isValidElement(x)?a.default.createElement(r.ToolbarContent,null,a.default.createElement(r.ToolbarItem,null,x)):void 0!==(null==x?void 0:x.filters)&&(x.filters.length>0||!0===x.showDeleteButton)&&a.default.createElement(r.ToolbarContent,null,a.default.createElement(r.ToolbarItem,null,a.default.createElement(p.FilterChips,t({},x)))))}},51256:function(n,e,l){var t=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.flipDirection=void 0;var o=t(l(93264)),i=l(31267),c=l(89624),a=l(2426);function r(n){return n===i.SortByDirection.asc?i.SortByDirection.desc:i.SortByDirection.asc}e.flipDirection=r,e.default=function(n){var e=n.direction,l=void 0===e?i.SortByDirection.asc:e,t=n.onSortChange,u=void 0===t?function(){}:t;return o.default.createElement(c.Button,{variant:"plain",onClick:function(n){return u(n,r(l))}},l===i.SortByDirection.asc?o.default.createElement(a.SortAmountUpIcon,{size:"sm"}):o.default.createElement(a.SortAmountDownIcon,{size:"sm"}))}},92053:(n,e,l)=>{l.r(e),l.d(e,{default:()=>t.Z,BulkSelect:()=>t.Z});var t=l(48799)},2238:(n,e,l)=>{l.r(e),l.d(e,{default:()=>t.Z,ConditionalFilter:()=>t.Z,GroupFilter:()=>o.Z,CheckboxFilter:()=>i.Z,RadioFilter:()=>c.Z,TextFilter:()=>a.Z,groupType:()=>r.Z,conditionalFilterType:()=>u.Y,typeMapper:()=>u.w});var t=l(18213),o=l(21556),i=l(40787),c=l(26154),a=l(68097),r=l(22137),u=l(87123)},25832:(n,e,l)=>{l.r(e),l.d(e,{default:()=>t.Z,DownloadButton:()=>t.Z});var t=l(97138)},23670:(n,e,l)=>{l.r(e),l.d(e,{default:()=>t.Z,FilterChips:()=>t.Z});var t=l(51812)},39173:(n,e,l)=>{l.d(e,{Z:()=>r});var t=l(93264),o=l.n(t),i=l(94184),c=l.n(i),a=l(89624);const r=function(n){var e=n.className,l=n.title,t=c()(e);return o().createElement(a.Title,{headingLevel:"h1",size:"2xl",className:t,"widget-type":"InsightsPageHeaderTitle"},l)}},67636:(n,e,l)=>{l.r(e),l.d(e,{default:()=>N});var t=l(93264),o=l.n(t),i=l(86896),c=l(80123),a=l(39173),r=l(14748),u=l(30893),s=l(86362),m=l(42982),d=l(4942),f=l(70885),p=l(45697),b=l.n(p),y=l(86706),v=l(18446),h=l.n(v),g=l(15952),_=l(31267),E=l(56161),C=l(76),x=l(42151),S=l(18246),T=l(90111),I=l.n(T),P=l(28672),w=l(59303),D=l(76913),O=l(52661),j=l(51014);function k(){var n="/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/ClustersListTable/ClustersListTable.js",e=new Function("return this")(),l="__coverage__",t=e[l]||(e[l]={});t[n]&&"73faab790cd9955a9dccbd4a49e6375f6b4b8d41"===t[n].hash||(t[n]={path:"/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/ClustersListTable/ClustersListTable.js",statementMap:{0:{start:{line:53,column:26},end:{line:302,column:1}},1:{start:{line:56,column:15},end:{line:56,column:24}},2:{start:{line:57,column:19},end:{line:57,column:32}},3:{start:{line:58,column:24},end:{line:59,column:48}},4:{start:{line:59,column:4},end:{line:59,column:48}},5:{start:{line:60,column:18},end:{line:60,column:73}},6:{start:{line:60,column:47},end:{line:60,column:72}},7:{start:{line:62,column:19},end:{line:62,column:35}},8:{start:{line:63,column:15},end:{line:63,column:49}},9:{start:{line:65,column:42},end:{line:65,column:54}},10:{start:{line:66,column:44},end:{line:66,column:56}},11:{start:{line:68,column:42},end:{line:68,column:57}},12:{start:{line:69,column:46},end:{line:69,column:60}},13:{start:{line:70,column:21},end:{line:70,column:34}},14:{start:{line:71,column:23},end:{line:71,column:69}},15:{start:{line:72,column:21},end:{line:72,column:28}},16:{start:{line:73,column:23},end:{line:73,column:32}},17:{start:{line:75,column:28},end:{line:76,column:53}},18:{start:{line:76,column:4},end:{line:76,column:53}},19:{start:{line:78,column:25},end:{line:79,column:58}},20:{start:{line:79,column:4},end:{line:79,column:58}},21:{start:{line:81,column:2},end:{line:91,column:5}},22:{start:{line:82,column:4},end:{line:84,column:6}},23:{start:{line:93,column:2},end:{line:98,column:41}},24:{start:{line:94,column:4},end:{line:94,column:58}},25:{start:{line:95,column:4},end:{line:97,column:5}},26:{start:{line:96,column:6},end:{line:96,column:28}},27:{start:{line:100,column:2},end:{line:121,column:9}},28:{start:{line:101,column:4},end:{line:119,column:5}},29:{start:{line:102,column:27},end:{line:102,column:46}},30:{start:{line:104,column:6},end:{line:110,column:7}},31:{start:{line:105,column:24},end:{line:105,column:62}},32:{start:{line:106,column:8},end:{line:108,column:10}},33:{start:{line:109,column:8},end:{line:109,column:55}},34:{start:{line:111,column:6},end:{line:112,column:63}},35:{start:{line:113,column:6},end:{line:114,column:61}},36:{start:{line:115,column:6},end:{line:117,column:65}},37:{start:{line:118,column:6},end:{line:118,column:53}},38:{start:{line:120,column:4},end:{line:120,column:29}},39:{start:{line:123,column:2},end:{line:127,column:32}},40:{start:{line:124,column:4},end:{line:126,column:5}},41:{start:{line:125,column:6},end:{line:125,column:62}},42:{start:{line:129,column:28},end:{line:132,column:5}},43:{start:{line:130,column:4},end:{line:132,column:5}},44:{start:{line:131,column:34},end:{line:131,column:70}},45:{start:{line:134,column:29},end:{line:159,column:3}},46:{start:{line:135,column:19},end:{line:135,column:28}},47:{start:{line:136,column:4},end:{line:154,column:9}},48:{start:{line:139,column:18},end:{line:139,column:60}},49:{start:{line:140,column:8},end:{line:153,column:9}},50:{start:{line:142,column:12},end:{line:142,column:65}},51:{start:{line:143,column:12},end:{line:143,column:65}},52:{start:{line:144,column:12},end:{line:144,column:75}},53:{start:{line:146,column:12},end:{line:146,column:59}},54:{start:{line:147,column:12},end:{line:147,column:59}},55:{start:{line:148,column:12},end:{line:148,column:54}},56:{start:{line:150,column:12},end:{line:150,column:33}},57:{start:{line:151,column:12},end:{line:151,column:33}},58:{start:{line:152,column:12},end:{line:152,column:54}},59:{start:{line:155,column:4},end:{line:158,column:6}},60:{start:{line:161,column:28},end:{line:184,column:3}},61:{start:{line:166,column:37},end:{line:166,column:79}},62:{start:{line:179,column:10},end:{line:179,column:73}},63:{start:{line:186,column:30},end:{line:212,column:3}},64:{start:{line:191,column:6},end:{line:210,column:7}},65:{start:{line:192,column:8},end:{line:196,column:9}},66:{start:{line:193,column:10},end:{line:193,column:20}},67:{start:{line:195,column:10},end:{line:195,column:53}},68:{start:{line:198,column:8},end:{line:209,column:11}},69:{start:{line:199,column:28},end:{line:205,column:11}},70:{start:{line:202,column:29},end:{line:202,column:74}},71:{start:{line:206,column:10},end:{line:208,column:47}},72:{start:{line:214,column:17},end:{line:216,column:3}},73:{start:{line:215,column:4},end:{line:215,column:78}},74:{start:{line:218,column:2},end:{line:301,column:4}},75:{start:{line:234,column:16},end:{line:237,column:18}},76:{start:{line:239,column:16},end:{line:239,column:72}},77:{start:{line:287,column:14},end:{line:290,column:16}},78:{start:{line:293,column:14},end:{line:293,column:70}},79:{start:{line:304,column:0},end:{line:306,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:53,column:26},end:{line:53,column:27}},loc:{start:{line:55,column:6},end:{line:302,column:1}},line:55},1:{name:"(anonymous_1)",decl:{start:{line:58,column:24},end:{line:58,column:25}},loc:{start:{line:59,column:4},end:{line:59,column:48}},line:59},2:{name:"(anonymous_2)",decl:{start:{line:60,column:30},end:{line:60,column:31}},loc:{start:{line:60,column:47},end:{line:60,column:72}},line:60},3:{name:"(anonymous_3)",decl:{start:{line:75,column:28},end:{line:75,column:29}},loc:{start:{line:76,column:4},end:{line:76,column:53}},line:76},4:{name:"(anonymous_4)",decl:{start:{line:78,column:25},end:{line:78,column:26}},loc:{start:{line:79,column:4},end:{line:79,column:58}},line:79},5:{name:"(anonymous_5)",decl:{start:{line:81,column:12},end:{line:81,column:13}},loc:{start:{line:81,column:18},end:{line:85,column:3}},line:81},6:{name:"(anonymous_6)",decl:{start:{line:93,column:12},end:{line:93,column:13}},loc:{start:{line:93,column:18},end:{line:98,column:3}},line:93},7:{name:"(anonymous_7)",decl:{start:{line:100,column:12},end:{line:100,column:13}},loc:{start:{line:100,column:18},end:{line:121,column:3}},line:100},8:{name:"(anonymous_8)",decl:{start:{line:123,column:12},end:{line:123,column:13}},loc:{start:{line:123,column:18},end:{line:127,column:3}},line:123},9:{name:"(anonymous_9)",decl:{start:{line:129,column:28},end:{line:129,column:29}},loc:{start:{line:130,column:4},end:{line:132,column:5}},line:130},10:{name:"(anonymous_10)",decl:{start:{line:131,column:21},end:{line:131,column:22}},loc:{start:{line:131,column:34},end:{line:131,column:70}},line:131},11:{name:"(anonymous_11)",decl:{start:{line:134,column:29},end:{line:134,column:30}},loc:{start:{line:134,column:57},end:{line:159,column:3}},line:134},12:{name:"(anonymous_12)",decl:{start:{line:137,column:18},end:{line:137,column:19}},loc:{start:{line:137,column:28},end:{line:154,column:7}},line:137},13:{name:"(anonymous_13)",decl:{start:{line:166,column:18},end:{line:166,column:19}},loc:{start:{line:166,column:37},end:{line:166,column:79}},line:166},14:{name:"(anonymous_14)",decl:{start:{line:178,column:18},end:{line:178,column:19}},loc:{start:{line:179,column:10},end:{line:179,column:73}},line:179},15:{name:"(anonymous_15)",decl:{start:{line:190,column:14},end:{line:190,column:15}},loc:{start:{line:190,column:48},end:{line:211,column:5}},line:190},16:{name:"(anonymous_16)",decl:{start:{line:198,column:26},end:{line:198,column:27}},loc:{start:{line:198,column:36},end:{line:209,column:9}},line:198},17:{name:"(anonymous_17)",decl:{start:{line:202,column:18},end:{line:202,column:19}},loc:{start:{line:202,column:29},end:{line:202,column:74}},line:202},18:{name:"(anonymous_18)",decl:{start:{line:214,column:17},end:{line:214,column:18}},loc:{start:{line:214,column:43},end:{line:216,column:3}},line:214},19:{name:"(anonymous_19)",decl:{start:{line:233,column:25},end:{line:233,column:26}},loc:{start:{line:234,column:16},end:{line:237,column:18}},line:234},20:{name:"(anonymous_20)",decl:{start:{line:238,column:31},end:{line:238,column:32}},loc:{start:{line:239,column:16},end:{line:239,column:72}},line:239},21:{name:"(anonymous_21)",decl:{start:{line:286,column:23},end:{line:286,column:24}},loc:{start:{line:287,column:14},end:{line:290,column:16}},line:287},22:{name:"(anonymous_22)",decl:{start:{line:292,column:29},end:{line:292,column:30}},loc:{start:{line:293,column:14},end:{line:293,column:70}},line:293}},branchMap:{0:{loc:{start:{line:62,column:19},end:{line:62,column:35}},type:"binary-expr",locations:[{start:{line:62,column:19},end:{line:62,column:29}},{start:{line:62,column:33},end:{line:62,column:35}}],line:62},1:{loc:{start:{line:71,column:23},end:{line:71,column:69}},type:"binary-expr",locations:[{start:{line:71,column:23},end:{line:71,column:38}},{start:{line:71,column:42},end:{line:71,column:52}},{start:{line:71,column:56},end:{line:71,column:69}}],line:71},2:{loc:{start:{line:95,column:4},end:{line:97,column:5}},type:"if",locations:[{start:{line:95,column:4},end:{line:97,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:95},3:{loc:{start:{line:95,column:8},end:{line:95,column:34}},type:"binary-expr",locations:[{start:{line:95,column:8},end:{line:95,column:17}},{start:{line:95,column:21},end:{line:95,column:34}}],line:95},4:{loc:{start:{line:101,column:4},end:{line:119,column:5}},type:"if",locations:[{start:{line:101,column:4},end:{line:119,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:101},5:{loc:{start:{line:101,column:8},end:{line:101,column:32}},type:"binary-expr",locations:[{start:{line:101,column:8},end:{line:101,column:14}},{start:{line:101,column:18},end:{line:101,column:32}}],line:101},6:{loc:{start:{line:104,column:6},end:{line:110,column:7}},type:"if",locations:[{start:{line:104,column:6},end:{line:110,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:104},7:{loc:{start:{line:111,column:6},end:{line:112,column:62}},type:"binary-expr",locations:[{start:{line:111,column:6},end:{line:111,column:25}},{start:{line:112,column:9},end:{line:112,column:61}}],line:111},8:{loc:{start:{line:113,column:6},end:{line:114,column:60}},type:"binary-expr",locations:[{start:{line:113,column:6},end:{line:113,column:24}},{start:{line:114,column:9},end:{line:114,column:59}}],line:113},9:{loc:{start:{line:115,column:6},end:{line:117,column:64}},type:"binary-expr",locations:[{start:{line:115,column:6},end:{line:115,column:28}},{start:{line:116,column:8},end:{line:116,column:46}},{start:{line:117,column:9},end:{line:117,column:63}}],line:115},10:{loc:{start:{line:124,column:4},end:{line:126,column:5}},type:"if",locations:[{start:{line:124,column:4},end:{line:126,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:124},11:{loc:{start:{line:136,column:4},end:{line:154,column:8}},type:"binary-expr",locations:[{start:{line:136,column:4},end:{line:136,column:16}},{start:{line:137,column:6},end:{line:154,column:8}}],line:136},12:{loc:{start:{line:139,column:18},end:{line:139,column:60}},type:"cond-expr",locations:[{start:{line:139,column:54},end:{line:139,column:55}},{start:{line:139,column:58},end:{line:139,column:60}}],line:139},13:{loc:{start:{line:140,column:8},end:{line:153,column:9}},type:"switch",locations:[{start:{line:141,column:10},end:{line:144,column:75}},{start:{line:145,column:10},end:{line:148,column:54}},{start:{line:149,column:10},end:{line:152,column:54}}],line:140},14:{loc:{start:{line:142,column:18},end:{line:142,column:64}},type:"binary-expr",locations:[{start:{line:142,column:18},end:{line:142,column:40}},{start:{line:142,column:44},end:{line:142,column:64}}],line:142},15:{loc:{start:{line:143,column:18},end:{line:143,column:64}},type:"binary-expr",locations:[{start:{line:143,column:18},end:{line:143,column:40}},{start:{line:143,column:44},end:{line:143,column:64}}],line:143},16:{loc:{start:{line:144,column:19},end:{line:144,column:74}},type:"cond-expr",locations:[{start:{line:144,column:44},end:{line:144,column:70}},{start:{line:144,column:73},end:{line:144,column:74}}],line:144},17:{loc:{start:{line:146,column:27},end:{line:146,column:57}},type:"binary-expr",locations:[{start:{line:146,column:27},end:{line:146,column:52}},{start:{line:146,column:56},end:{line:146,column:57}}],line:146},18:{loc:{start:{line:147,column:27},end:{line:147,column:57}},type:"binary-expr",locations:[{start:{line:147,column:27},end:{line:147,column:52}},{start:{line:147,column:56},end:{line:147,column:57}}],line:147},19:{loc:{start:{line:148,column:19},end:{line:148,column:53}},type:"cond-expr",locations:[{start:{line:148,column:31},end:{line:148,column:32}},{start:{line:148,column:35},end:{line:148,column:53}}],line:148},20:{loc:{start:{line:148,column:35},end:{line:148,column:53}},type:"cond-expr",locations:[{start:{line:148,column:47},end:{line:148,column:49}},{start:{line:148,column:52},end:{line:148,column:53}}],line:148},21:{loc:{start:{line:152,column:19},end:{line:152,column:53}},type:"cond-expr",locations:[{start:{line:152,column:31},end:{line:152,column:32}},{start:{line:152,column:35},end:{line:152,column:53}}],line:152},22:{loc:{start:{line:152,column:35},end:{line:152,column:53}},type:"cond-expr",locations:[{start:{line:152,column:47},end:{line:152,column:49}},{start:{line:152,column:52},end:{line:152,column:53}}],line:152},23:{loc:{start:{line:191,column:6},end:{line:210,column:7}},type:"if",locations:[{start:{line:191,column:6},end:{line:210,column:7}},{start:{line:197,column:13},end:{line:210,column:7}}],line:191},24:{loc:{start:{line:192,column:8},end:{line:196,column:9}},type:"if",locations:[{start:{line:192,column:8},end:{line:196,column:9}},{start:{line:194,column:15},end:{line:196,column:9}}],line:192},25:{loc:{start:{line:200,column:29},end:{line:204,column:18}},type:"cond-expr",locations:[{start:{line:201,column:16},end:{line:203,column:17}},{start:{line:204,column:16},end:{line:204,column:18}}],line:200},26:{loc:{start:{line:206,column:10},end:{line:208,column:46}},type:"cond-expr",locations:[{start:{line:207,column:14},end:{line:207,column:57}},{start:{line:208,column:14},end:{line:208,column:46}}],line:206},27:{loc:{start:{line:220,column:7},end:{line:299,column:7}},type:"cond-expr",locations:[{start:{line:221,column:8},end:{line:223,column:19}},{start:{line:224,column:10},end:{line:299,column:7}}],line:220},28:{loc:{start:{line:224,column:10},end:{line:299,column:7}},type:"cond-expr",locations:[{start:{line:225,column:8},end:{line:225,column:29}},{start:{line:227,column:8},end:{line:298,column:14}}],line:224},29:{loc:{start:{line:246,column:11},end:{line:246,column:38}},type:"binary-expr",locations:[{start:{line:246,column:11},end:{line:246,column:23}},{start:{line:246,column:27},end:{line:246,column:38}}],line:246},30:{loc:{start:{line:247,column:11},end:{line:253,column:11}},type:"binary-expr",locations:[{start:{line:247,column:11},end:{line:247,column:21}},{start:{line:248,column:12},end:{line:252,column:19}}],line:247},31:{loc:{start:{line:254,column:11},end:{line:280,column:11}},type:"binary-expr",locations:[{start:{line:254,column:11},end:{line:254,column:24}},{start:{line:254,column:28},end:{line:254,column:40}},{start:{line:255,column:12},end:{line:279,column:29}}],line:254},32:{loc:{start:{line:272,column:15},end:{line:278,column:15}},type:"binary-expr",locations:[{start:{line:272,column:15},end:{line:272,column:40}},{start:{line:273,column:16},end:{line:277,column:23}}],line:272}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0},b:{0:[0,0],1:[0,0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0,0],25:[0,0],26:[0,0],27:[0,0],28:[0,0],29:[0,0],30:[0,0],31:[0,0,0],32:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"73faab790cd9955a9dccbd4a49e6375f6b4b8d41"});var o=t[n];return k=function(){return o},o}function M(n,e){var l=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),l.push.apply(l,t)}return l}function Z(n){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?M(Object(l),!0).forEach((function(e){(0,d.Z)(n,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):M(Object(l)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(l,e))}))}return n}k(),k().s[0]++;var B=function(n){var e=n.query,l=e.isError,c=e.isUninitialized,a=e.isFetching,r=e.isSuccess,s=e.data,p=e.refetch;k().f[0]++;var b=(k().s[1]++,(0,i.Z)()),v=(k().s[2]++,(0,y.useDispatch)());k().s[3]++;var T=function(n){return k().f[1]++,k().s[4]++,v((0,P.$Q)(n))},M=(k().s[5]++,(0,y.useSelector)((function(n){var e=n.filters;return k().f[2]++,k().s[6]++,e.clustersListState}))),B=(k().s[7]++,k().b[0][0]++,(null==s?void 0:s.data)||(k().b[0][1]++,[])),A=(k().s[8]++,M.offset/M.limit+1),L=(k().s[9]++,(0,t.useState)([])),F=(0,f.Z)(L,2),N=F[0],R=F[1],V=(k().s[10]++,(0,t.useState)([])),H=(0,f.Z)(V,2),G=H[0],z=H[1],q=(k().s[11]++,(0,t.useState)(!1)),U=(0,f.Z)(q,2),K=U[0],Q=U[1],W=(k().s[12]++,(0,t.useState)(!0)),Y=(0,f.Z)(W,2),$=Y[0],J=Y[1],X=(k().s[13]++,(0,g.useLocation)()).search,nn=(k().s[14]++,k().b[1][0]++,c||(k().b[1][1]++,a)||(k().b[1][2]++,!K)),en=(k().s[15]++,l),ln=(k().s[16]++,r);k().s[17]++,k().s[19]++,k().s[21]++,(0,t.useEffect)((function(){k().f[5]++,k().s[22]++,z(on(N,M.sortIndex,M.sortDirection))}),[N,M.sortIndex,M.sortDirection,M.limit,M.offset]),k().s[23]++,(0,t.useEffect)((function(){k().f[6]++,k().s[24]++,R(tn(B,M)),k().s[25]++,k().b[3][0]++,r&&(k().b[3][1]++,!K)?(k().b[2][0]++,k().s[26]++,Q(!0)):k().b[2][1]++}),[s,M.hits,M.text]),k().s[27]++,(0,t.useEffect)((function(){if(k().f[7]++,k().s[28]++,k().b[5][0]++,X&&(k().b[5][1]++,$)){k().b[4][0]++;var n=(k().s[29]++,(0,D.yG)(X));if(k().s[30]++,n.sort){k().b[6][0]++;var e=(k().s[31]++,(0,D.Lg)(n.sort));k().s[32]++,n.sortIndex=w.lo.indexOf(e.name),k().s[33]++,n.sortDirection=e.direction}else k().b[6][1]++;k().s[34]++,k().b[7][0]++,n.offset&&(k().b[7][1]++,n.offset=Number(n.offset[0])),k().s[35]++,k().b[8][0]++,n.limit&&(k().b[8][1]++,n.limit=Number(n.limit[0])),k().s[36]++,k().b[9][0]++,n.impacting&&(k().b[9][1]++,!Array.isArray(n.impacting))&&(k().b[9][2]++,n.impacting=["".concat(n.impacting)]),k().s[37]++,T(Z(Z({},M),n))}else k().b[4][1]++;k().s[38]++,J(!1)}),[]),k().s[39]++,(0,t.useEffect)((function(){k().f[8]++,k().s[40]++,$?k().b[10][1]++:(k().b[10][0]++,k().s[41]++,(0,D.aM)(M,w.lo))}),[M,$]),k().s[42]++;var tn=function(n,e){return k().f[9]++,k().s[43]++,(0,D.io)(n.filter((function(n){return k().f[10]++,k().s[44]++,(0,D.im)(n,e)})))};k().s[45]++;var on=function(n,e,l){k().f[11]++;var t=(k().s[46]++,(0,m.Z)(n));return k().s[47]++,k().b[11][0]++,-1!==e&&(k().b[11][1]++,t.sort((function(n,t){var o,i;k().f[12]++;var c=(k().s[48]++,l===_.SortByDirection.asc?(k().b[12][0]++,1):(k().b[12][1]++,-1));switch(k().s[49]++,e){case w.T8:return k().b[13][0]++,k().s[50]++,k().b[14][0]++,o=n.cluster.cluster_name||(k().b[14][1]++,n.cluster.cluster_id),k().s[51]++,k().b[15][0]++,i=t.cluster.cluster_name||(k().b[15][1]++,t.cluster.cluster_id),k().s[52]++,o.localeCompare(i)?(k().b[16][0]++,o.localeCompare(i)*c):(k().b[16][1]++,0);case w.wz:return k().b[13][1]++,k().s[53]++,o=new Date((k().b[17][0]++,n.cluster.last_checked_at||(k().b[17][1]++,0))),k().s[54]++,i=new Date((k().b[18][0]++,t.cluster.last_checked_at||(k().b[18][1]++,0))),k().s[55]++,o>i?(k().b[19][0]++,c):(k().b[19][1]++,i>o?(k().b[20][0]++,-c):(k().b[20][1]++,0));default:return k().b[13][2]++,k().s[56]++,o=n.cells[e],k().s[57]++,i=t.cells[e],k().s[58]++,o>i?(k().b[21][0]++,c):(k().b[21][1]++,i>o?(k().b[22][0]++,-c):(k().b[22][1]++,0))}}))),k().s[59]++,t.slice(M.limit*(A-1),M.limit*(A-1)+M.limit)},cn=(k().s[60]++,[{label:b.formatMessage(u.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(n,e){return k().f[13]++,k().s[61]++,T(Z(Z({},M),{},{text:e}))},value:M.text,placeholder:b.formatMessage(u.Z.filterByName)}},{label:w.RT.hits.title,type:w.RT.hits.type,id:w.RT.hits.urlParam,value:"checkbox-".concat(w.RT.hits.urlParam),filterValues:{key:"".concat(w.RT.hits.urlParam,"-filter"),onChange:function(n,e){return k().f[14]++,k().s[62]++,function(n,e){return k().f[4]++,k().s[20]++,(0,D.Lv)(M,T,n,e)}(w.RT.hits.urlParam,e)},value:M.hits,items:w.RT.hits.values}}]),an=(k().s[63]++,{showDeleteButton:!0,deleteTitle:b.formatMessage(u.Z.resetFilters),filters:(0,D.mt)(M,w.RT),onDelete:function(n,e,l){k().f[15]++,k().s[64]++,l?(k().b[23][0]++,k().s[65]++,h()(M,P.Ly)?(k().b[24][0]++,k().s[66]++,p()):(k().b[24][1]++,k().s[67]++,T(P.Ly))):(k().b[23][1]++,k().s[68]++,e.map((function(n){k().f[16]++;var e,l=(k().s[69]++,(0,d.Z)({},n.urlParam,Array.isArray(M[n.urlParam])?(k().b[25][0]++,M[n.urlParam].filter((function(e){return k().f[17]++,k().s[70]++,String(e)!==String(n.chips[0].value)}))):(k().b[25][1]++,"")));k().s[71]++,l[n.urlParam].length>0?(k().b[26][0]++,T(Z(Z({},M),l))):(k().b[26][1]++,e=n.urlParam,k().f[3]++,k().s[18]++,(0,D.oo)(M,T,e))})))}});return k().s[72]++,k().s[74]++,o().createElement(o().Fragment,null,nn?(k().b[27][0]++,o().createElement(C.Bullseye,null,o().createElement(x.Spinner,null))):(k().b[27][1]++,0===B.length?(k().b[28][0]++,o().createElement(j.ER,null)):(k().b[28][1]++,o().createElement("div",{id:"clusters-list-table"},o().createElement(I(),{pagination:{itemCount:N.length,page:A,perPage:M.limit,onSetPage:function(n,e){return k().f[19]++,k().s[75]++,T(Z(Z({},M),{},{offset:M.limit*(e-1)}))},onPerPageSelect:function(n,e){return k().f[20]++,k().s[76]++,T(Z(Z({},M),{},{limit:e,offset:0}))},isCompact:!0,ouiaId:"pager"},filterConfig:{items:cn},activeFiltersConfig:an}),(k().b[29][0]++,nn&&(k().b[29][1]++,o().createElement(O.Z,null))),(k().b[30][0]++,en&&(k().b[30][1]++,o().createElement(E.Card,{ouiaId:"error-state"},o().createElement(E.CardBody,null,o().createElement(j.Te,null))))),(k().b[31][0]++,!nn&&(k().b[31][1]++,ln)&&(k().b[31][2]++,o().createElement(o().Fragment,null,o().createElement(_.Table,{"aria-label":"Table of clusters",ouiaId:"clusters",variant:_.TableVariant.compact,cells:w.Bg,rows:G,sortBy:{index:M.sortIndex,direction:M.sortDirection},onSort:function(n,e,l){k().f[18]++,k().s[73]++,T(Z(Z({},M),{},{sortIndex:e,sortDirection:l}))},isStickyHeader:!0},o().createElement(_.TableHeader,null),o().createElement(_.TableBody,null)),(k().b[32][0]++,0===N.length&&(k().b[32][1]++,o().createElement(E.Card,{ouiaId:"empty-state"},o().createElement(E.CardBody,null,o().createElement(j.VA,null)))))))),o().createElement(S.Pagination,{ouiaId:"pager",itemCount:N.length,page:M.offset/M.limit+1,perPage:Number(M.limit),onSetPage:function(n,e){return k().f[21]++,k().s[77]++,T(Z(Z({},M),{},{offset:M.limit*(e-1)}))},onPerPageSelect:function(n,e){return k().f[22]++,k().s[78]++,T(Z(Z({},M),{},{limit:e,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:S.PaginationVariant.bottom})))))};function A(){var n="/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/ClustersListTable/index.js",e=new Function("return this")(),l="__coverage__",t=e[l]||(e[l]={});t[n]&&"23bb173e04bd3dab5d1b7e29950b406706907c05"===t[n].hash||(t[n]={path:"/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/ClustersListTable/index.js",statementMap:{0:{start:{line:5,column:33},end:{line:9,column:1}},1:{start:{line:6,column:16},end:{line:6,column:37}},2:{start:{line:8,column:2},end:{line:8,column:45}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:33},end:{line:5,column:34}},loc:{start:{line:5,column:39},end:{line:9,column:1}},line:5}},branchMap:{},s:{0:0,1:0,2:0},f:{0:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"23bb173e04bd3dab5d1b7e29950b406706907c05"});var o=t[n];return A=function(){return o},o}k().s[79]++,B.propTypes={query:b().object.isRequired},A(),A().s[0]++;const L=function(){A().f[0]++;var n=(A().s[1]++,(0,s.Oj)());return A().s[2]++,o().createElement(B,{query:n})};function F(){var n="/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/ClustersList/index.js",e=new Function("return this")(),l="__coverage__",t=e[l]||(e[l]={});t[n]&&"7b4929bb325656b9027ca55dbc1729357f03136d"===t[n].hash||(t[n]={path:"/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/ClustersList/index.js",statementMap:{0:{start:{line:12,column:21},end:{line:34,column:1}},1:{start:{line:13,column:15},end:{line:13,column:24}},2:{start:{line:14,column:2},end:{line:18,column:4}},3:{start:{line:20,column:2},end:{line:33,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:12,column:21},end:{line:12,column:22}},loc:{start:{line:12,column:27},end:{line:34,column:1}},line:12}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7b4929bb325656b9027ca55dbc1729357f03136d"});var o=t[n];return F=function(){return o},o}F(),F().s[0]++;const N=function(){F().f[0]++;var n=(F().s[1]++,(0,i.Z)());return F().s[2]++,insights.chrome.updateDocumentTitle(n.formatMessage(u.Z.documentTitle,{subnav:n.formatMessage(u.Z.clusters)})),F().s[3]++,o().createElement(o().Fragment,null,o().createElement(c.Z,{className:"ins-c-clusters-header"},o().createElement(a.Z,{title:"".concat(n.formatMessage(u.Z.insightsHeader)," ").concat(n.formatMessage(u.Z.clusters).toLowerCase())})),o().createElement(r.Z,null,o().createElement(L,null)))}},52661:(n,e,l)=>{l.d(e,{Z:()=>d});var t=l(93264),o=l.n(t),i=l(45697),c=l.n(i),a=l(2095),r=l(85962),u=l(24561);function s(){var n="/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/Loading/Loading.js",e=new Function("return this")(),l="__coverage__",t=e[l]||(e[l]={});t[n]&&"6a4b6fe50c75ce41ff6050fe2605b748f6668685"===t[n].hash||(t[n]={path:"/home/travis/build/RedHatInsights/ocp-advisor-frontend/src/Components/Loading/Loading.js",statementMap:{0:{start:{line:7,column:16},end:{line:13,column:1}},1:{start:{line:8,column:2},end:{line:12,column:9}},2:{start:{line:15,column:0},end:{line:17,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:16},end:{line:7,column:17}},loc:{start:{line:8,column:2},end:{line:12,column:9}},line:8}},branchMap:{0:{loc:{start:{line:8,column:13},end:{line:8,column:29}},type:"cond-expr",locations:[{start:{line:8,column:18},end:{line:8,column:24}},{start:{line:8,column:27},end:{line:8,column:29}}],line:8}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6a4b6fe50c75ce41ff6050fe2605b748f6668685"});var o=t[n];return s=function(){return o},o}s(),s().s[0]++;var m=function(n){var e=n.id;return s().f[0]++,s().s[1]++,o().createElement(a.Card,e?(s().b[0][0]++,{id:e}):(s().b[0][1]++,{}),o().createElement(r.CardBody,null,o().createElement(u.aV,null)))};s().s[2]++,m.propTypes={id:c().string};const d=m},62354:(n,e,l)=>{l.r(e)}}]);
//# sourceMappingURL=../sourcemaps/ClustersList.5563711d00ece95e7161b01a1d28e682.js.map