(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[2339],{85991:(o,l,e)=>{"use strict";l.a=void 0;const n=e(70655),t=n.__importStar(e(92950)),a=n.__importDefault(e(44303)),r=e(38296),f=e(23053);l.a=o=>{var{children:e=null,className:s="","aria-label":m="Breadcrumb",ouiaId:i,ouiaSafe:c=!0}=o,d=n.__rest(o,["children","className","aria-label","ouiaId","ouiaSafe"]);const p=(0,f.useOUIAProps)(l.a.displayName,i,c);return t.createElement("nav",Object.assign({},d,{"aria-label":m,className:(0,r.css)(a.default.breadcrumb,s)},p),t.createElement("ol",{className:a.default.breadcrumbList},t.Children.map(e,((o,l)=>{const e=l>0;return t.isValidElement(o)?t.cloneElement(o,{showDivider:e}):o}))))},l.a.displayName="Breadcrumb"},49489:(o,l,e)=>{"use strict";l.g=void 0;const n=e(70655),t=n.__importStar(e(92950)),a=n.__importDefault(e(95511)),r=n.__importDefault(e(44303)),f=e(38296);l.g=o=>{var{children:l=null,className:e="",to:s,isActive:m=!1,isDropdown:i=!1,showDivider:c,target:d,component:p="a",render:u}=o,g=n.__rest(o,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const O=p,_=m?"page":void 0,C=(0,f.css)(r.default.breadcrumbLink,m&&r.default.modifiers.current);return t.createElement("li",Object.assign({},g,{className:(0,f.css)(r.default.breadcrumbItem,e)}),c&&t.createElement("span",{className:r.default.breadcrumbItemDivider},t.createElement(a.default,null)),"button"===p&&t.createElement("button",{className:C,"aria-current":_,type:"button"},l),i&&t.createElement("span",{className:(0,f.css)(r.default.breadcrumbDropdown)},l),u&&u({className:C,ariaCurrent:_}),s&&!u&&t.createElement(O,{href:s,target:d,className:C,"aria-current":_},l),!s&&"button"!==p&&!i&&l)},l.g.displayName="BreadcrumbItem"},29360:(o,l,e)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.PageContextConsumer=l.PageContextProvider=l.PageContext=l.pageContextDefaults=void 0;const n=e(70655).__importStar(e(92950)),t=e(42319);l.pageContextDefaults={isManagedSidebar:!1,isNavOpen:!1,onNavToggle:()=>null,width:null,height:null,getBreakpoint:t.getBreakpoint,getVerticalBreakpoint:t.getVerticalBreakpoint},l.PageContext=n.createContext(l.pageContextDefaults),l.PageContextProvider=l.PageContext.Provider,l.PageContextConsumer=l.PageContext.Consumer},29572:(o,l,e)=>{"use strict";l.NP=l.xB=l.Dk=void 0;const n=e(70655),t=n.__importStar(e(92950)),a=n.__importDefault(e(41145)),r=e(38296),f=e(42319),s=e(29360);var m,i;!function(o){o.default="default",o.light="light",o.dark="dark",o.darker="darker"}(m=l.Dk||(l.Dk={})),function(o){o.default="default",o.nav="nav",o.subNav="subnav",o.breadcrumb="breadcrumb",o.tabs="tabs",o.wizard="wizard"}(i=l.xB||(l.xB={}));const c={[i.default]:a.default.pageMainSection,[i.nav]:a.default.pageMainNav,[i.subNav]:a.default.pageMainSubnav,[i.breadcrumb]:a.default.pageMainBreadcrumb,[i.tabs]:a.default.pageMainTabs,[i.wizard]:a.default.pageMainWizard},d={[m.default]:"",[m.light]:a.default.modifiers.light,[m.dark]:a.default.modifiers.dark_200,[m.darker]:a.default.modifiers.dark_100};l.NP=o=>{var{className:l="",children:e,variant:m="default",type:p="default",padding:u,isFilled:g,isWidthLimited:O=!1,isCenterAligned:_=!1,sticky:C,stickyOnBreakpoint:x,hasShadowTop:w=!1,hasShadowBottom:h=!1,hasOverflowScroll:v=!1,"aria-label":b,component:k="section"}=o,y=n.__rest(o,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","sticky","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:S,getVerticalBreakpoint:M}=t.useContext(s.PageContext);t.useEffect((()=>{v&&!b&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[v,b]);const R=k;return t.createElement(R,Object.assign({},y,{className:(0,r.css)(c[p],(0,f.formatBreakpointMods)(u,a.default),(0,f.formatBreakpointMods)(x,a.default,"sticky-",M(S),!0),d[m],!1===g&&a.default.modifiers.noFill,!0===g&&a.default.modifiers.fill,O&&a.default.modifiers.limitWidth,O&&_&&p!==i.subNav&&a.default.modifiers.alignCenter,"top"===C&&a.default.modifiers.stickyTop,"bottom"===C&&a.default.modifiers.stickyBottom,w&&a.default.modifiers.shadowTop,h&&a.default.modifiers.shadowBottom,v&&a.default.modifiers.overflowScroll,l)},v&&{tabIndex:0},{"aria-label":b}),O&&t.createElement("div",{className:(0,r.css)(a.default.pageMainBody)},e),!O&&e)},l.NP.displayName="PageSection"},36001:(o,l,e)=>{"use strict";l.k=void 0;const n=e(70655),t=n.__importStar(e(92950)),a=e(38296),r=n.__importDefault(e(61370)),f=n.__importStar(e(51969)),s=e(42319);l.k=o=>{var{children:l=null,className:e="",component:m="div",spacer:i,spaceItems:c,grow:d,shrink:p,flex:u,direction:g,alignItems:O,alignContent:_,alignSelf:C,align:x,justifyContent:w,display:h,fullWidth:v,flexWrap:b,order:k,style:y}=o,S=n.__rest(o,["children","className","component","spacer","spaceItems","grow","shrink","flex","direction","alignItems","alignContent","alignSelf","align","justifyContent","display","fullWidth","flexWrap","order","style"]);const M=m;return t.createElement(M,Object.assign({className:(0,a.css)(r.default.flex,(0,s.formatBreakpointMods)(i,r.default),(0,s.formatBreakpointMods)(c,r.default),(0,s.formatBreakpointMods)(d,r.default),(0,s.formatBreakpointMods)(p,r.default),(0,s.formatBreakpointMods)(u,r.default),(0,s.formatBreakpointMods)(g,r.default),(0,s.formatBreakpointMods)(O,r.default),(0,s.formatBreakpointMods)(_,r.default),(0,s.formatBreakpointMods)(C,r.default),(0,s.formatBreakpointMods)(x,r.default),(0,s.formatBreakpointMods)(w,r.default),(0,s.formatBreakpointMods)(h,r.default),(0,s.formatBreakpointMods)(v,r.default),(0,s.formatBreakpointMods)(b,r.default),e),style:y||k?Object.assign(Object.assign({},y),(0,s.setBreakpointCssVars)(k,f.l_flex_item_Order.name)):void 0},S),l)},l.k.displayName="Flex"},42057:(o,l,e)=>{"use strict";l.B=void 0;const n=e(70655),t=n.__importStar(e(92950)),a=e(38296),r=n.__importDefault(e(61370)),f=n.__importStar(e(51969)),s=e(42319);l.B=o=>{var{children:l=null,className:e="",component:m="div",spacer:i,grow:c,shrink:d,flex:p,alignSelf:u,align:g,fullWidth:O,order:_,style:C}=o,x=n.__rest(o,["children","className","component","spacer","grow","shrink","flex","alignSelf","align","fullWidth","order","style"]);const w=m;return t.createElement(w,Object.assign({},x,{className:(0,a.css)((0,s.formatBreakpointMods)(i,r.default),(0,s.formatBreakpointMods)(c,r.default),(0,s.formatBreakpointMods)(d,r.default),(0,s.formatBreakpointMods)(p,r.default),(0,s.formatBreakpointMods)(u,r.default),(0,s.formatBreakpointMods)(g,r.default),(0,s.formatBreakpointMods)(O,r.default),e),style:C||_?Object.assign(Object.assign({},C),(0,s.setBreakpointCssVars)(_,f.l_flex_item_Order.name)):void 0}),l)},l.B.displayName="FlexItem"},49287:(o,l,e)=>{"use strict";l.r=void 0;const n=e(70655),t=n.__importStar(e(92950)),a=n.__importDefault(e(3246)),r=e(38296),f=e(39383),s=n.__importStar(e(24936)),m=e(42319);l.r=o=>{var{children:l=null,className:e="",component:i="div",hasGutter:c,span:d=null,order:p,style:u}=o,g=n.__rest(o,["children","className","component","hasGutter","span","order","style"]);const O=[a.default.grid,d&&a.default.modifiers[`all_${d}Col`]],_=i;return Object.entries(f.DeviceSizes).forEach((([o,l])=>{const e=o,n=g[e];n&&O.push(a.default.modifiers[`all_${n}ColOn${l}`]),delete g[e]})),t.createElement(_,Object.assign({className:(0,r.css)(...O,c&&a.default.modifiers.gutter,e),style:u||p?Object.assign(Object.assign({},u),(0,m.setBreakpointCssVars)(p,s.l_grid_item_Order.name)):void 0},g),l)},l.r.displayName="Grid"},18038:(o,l,e)=>{"use strict";l.P=void 0;const n=e(70655),t=n.__importStar(e(92950)),a=n.__importDefault(e(3246)),r=e(38296),f=e(39383),s=n.__importStar(e(24936)),m=e(42319);l.P=o=>{var{children:l=null,className:e="",component:i="div",span:c=null,rowSpan:d=null,offset:p=null,order:u,style:g}=o,O=n.__rest(o,["children","className","component","span","rowSpan","offset","order","style"]);const _=[a.default.gridItem,c&&a.default.modifiers[`${c}Col`],d&&a.default.modifiers[`${d}Row`],p&&a.default.modifiers[`offset_${p}Col`]],C=i;return Object.entries(f.DeviceSizes).forEach((([o,l])=>{const e=o,n=`${e}RowSpan`,t=`${e}Offset`,r=O[e],f=O[n],s=O[t];r&&_.push(a.default.modifiers[`${r}ColOn${l}`]),f&&_.push(a.default.modifiers[`${f}RowOn${l}`]),s&&_.push(a.default.modifiers[`offset_${s}ColOn${l}`]),delete O[e],delete O[n],delete O[t]})),t.createElement(C,Object.assign({className:(0,r.css)(..._,e),style:g||u?Object.assign(Object.assign({},g),(0,m.setBreakpointCssVars)(u,s.l_grid_item_Order.name)):void 0},O),l)},l.P.displayName="GridItem"},39383:(o,l)=>{"use strict";var e,n;Object.defineProperty(l,"__esModule",{value:!0}),l.DeviceSizes=l.BaseSizes=void 0,(n=l.BaseSizes||(l.BaseSizes={})).xs="xs",n.sm="sm",n.md="md",n.lg="lg",n.xl="xl",n["2xl"]="2xl",n["3xl"]="3xl",n["4xl"]="4xl",(e=l.DeviceSizes||(l.DeviceSizes={})).sm="Sm",e.md="Md",e.lg="Lg",e.xl="Xl",e.xl2="_2xl"},9003:(o,l,e)=>{"use strict";e.d(l,{LC:()=>a,ZP:()=>r,sl:()=>t});var n=e(40400);const t={name:"AngleDownIcon",height:512,width:320,svgPath:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",yOffset:0,xOffset:0},a=(0,n.IU)(t),r=a},41145:(o,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>n}),e(92084);const n={avatar:"pf-c-avatar",brand:"pf-c-brand",button:"pf-c-button",card:"pf-c-card",contextSelector:"pf-c-context-selector",drawer:"pf-c-drawer",masthead:"pf-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",fullHeight:"pf-m-full-height",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",fill:"pf-m-fill",noFill:"pf-m-no-fill",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-c-nav",notificationBadge:"pf-c-notification-badge",page:"pf-c-page",pageDrawer:"pf-c-page__drawer",pageHeader:"pf-c-page__header",pageHeaderBrand:"pf-c-page__header-brand",pageHeaderBrandLink:"pf-c-page__header-brand-link",pageHeaderBrandToggle:"pf-c-page__header-brand-toggle",pageHeaderNav:"pf-c-page__header-nav",pageHeaderTools:"pf-c-page__header-tools",pageHeaderToolsGroup:"pf-c-page__header-tools-group",pageHeaderToolsItem:"pf-c-page__header-tools-item",pageMain:"pf-c-page__main",pageMainBody:"pf-c-page__main-body",pageMainBreadcrumb:"pf-c-page__main-breadcrumb",pageMainDrawer:"pf-c-page__main-drawer",pageMainGroup:"pf-c-page__main-group",pageMainNav:"pf-c-page__main-nav",pageMainSection:"pf-c-page__main-section",pageMainSubnav:"pf-c-page__main-subnav",pageMainTabs:"pf-c-page__main-tabs",pageMainWizard:"pf-c-page__main-wizard",pageSidebar:"pf-c-page__sidebar",pageSidebarBody:"pf-c-page__sidebar-body",themeDark:"pf-theme-dark"}},3246:(o,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>n}),e(72816);const n={grid:"pf-l-grid",gridItem:"pf-l-grid__item",modifiers:{all_1Col:"pf-m-all-1-col",all_2Col:"pf-m-all-2-col",all_3Col:"pf-m-all-3-col",all_4Col:"pf-m-all-4-col",all_5Col:"pf-m-all-5-col",all_6Col:"pf-m-all-6-col",all_7Col:"pf-m-all-7-col",all_8Col:"pf-m-all-8-col",all_9Col:"pf-m-all-9-col",all_10Col:"pf-m-all-10-col",all_11Col:"pf-m-all-11-col",all_12Col:"pf-m-all-12-col",all_1ColOnSm:"pf-m-all-1-col-on-sm",all_2ColOnSm:"pf-m-all-2-col-on-sm",all_3ColOnSm:"pf-m-all-3-col-on-sm",all_4ColOnSm:"pf-m-all-4-col-on-sm",all_5ColOnSm:"pf-m-all-5-col-on-sm",all_6ColOnSm:"pf-m-all-6-col-on-sm",all_7ColOnSm:"pf-m-all-7-col-on-sm",all_8ColOnSm:"pf-m-all-8-col-on-sm",all_9ColOnSm:"pf-m-all-9-col-on-sm",all_10ColOnSm:"pf-m-all-10-col-on-sm",all_11ColOnSm:"pf-m-all-11-col-on-sm",all_12ColOnSm:"pf-m-all-12-col-on-sm",all_1ColOnMd:"pf-m-all-1-col-on-md",all_2ColOnMd:"pf-m-all-2-col-on-md",all_3ColOnMd:"pf-m-all-3-col-on-md",all_4ColOnMd:"pf-m-all-4-col-on-md",all_5ColOnMd:"pf-m-all-5-col-on-md",all_6ColOnMd:"pf-m-all-6-col-on-md",all_7ColOnMd:"pf-m-all-7-col-on-md",all_8ColOnMd:"pf-m-all-8-col-on-md",all_9ColOnMd:"pf-m-all-9-col-on-md",all_10ColOnMd:"pf-m-all-10-col-on-md",all_11ColOnMd:"pf-m-all-11-col-on-md",all_12ColOnMd:"pf-m-all-12-col-on-md",all_1ColOnLg:"pf-m-all-1-col-on-lg",all_2ColOnLg:"pf-m-all-2-col-on-lg",all_3ColOnLg:"pf-m-all-3-col-on-lg",all_4ColOnLg:"pf-m-all-4-col-on-lg",all_5ColOnLg:"pf-m-all-5-col-on-lg",all_6ColOnLg:"pf-m-all-6-col-on-lg",all_7ColOnLg:"pf-m-all-7-col-on-lg",all_8ColOnLg:"pf-m-all-8-col-on-lg",all_9ColOnLg:"pf-m-all-9-col-on-lg",all_10ColOnLg:"pf-m-all-10-col-on-lg",all_11ColOnLg:"pf-m-all-11-col-on-lg",all_12ColOnLg:"pf-m-all-12-col-on-lg",all_1ColOnXl:"pf-m-all-1-col-on-xl",all_2ColOnXl:"pf-m-all-2-col-on-xl",all_3ColOnXl:"pf-m-all-3-col-on-xl",all_4ColOnXl:"pf-m-all-4-col-on-xl",all_5ColOnXl:"pf-m-all-5-col-on-xl",all_6ColOnXl:"pf-m-all-6-col-on-xl",all_7ColOnXl:"pf-m-all-7-col-on-xl",all_8ColOnXl:"pf-m-all-8-col-on-xl",all_9ColOnXl:"pf-m-all-9-col-on-xl",all_10ColOnXl:"pf-m-all-10-col-on-xl",all_11ColOnXl:"pf-m-all-11-col-on-xl",all_12ColOnXl:"pf-m-all-12-col-on-xl",all_1ColOn_2xl:"pf-m-all-1-col-on-2xl",all_2ColOn_2xl:"pf-m-all-2-col-on-2xl",all_3ColOn_2xl:"pf-m-all-3-col-on-2xl",all_4ColOn_2xl:"pf-m-all-4-col-on-2xl",all_5ColOn_2xl:"pf-m-all-5-col-on-2xl",all_6ColOn_2xl:"pf-m-all-6-col-on-2xl",all_7ColOn_2xl:"pf-m-all-7-col-on-2xl",all_8ColOn_2xl:"pf-m-all-8-col-on-2xl",all_9ColOn_2xl:"pf-m-all-9-col-on-2xl",all_10ColOn_2xl:"pf-m-all-10-col-on-2xl",all_11ColOn_2xl:"pf-m-all-11-col-on-2xl",all_12ColOn_2xl:"pf-m-all-12-col-on-2xl","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col","4Col":"pf-m-4-col","5Col":"pf-m-5-col","6Col":"pf-m-6-col","7Col":"pf-m-7-col","8Col":"pf-m-8-col","9Col":"pf-m-9-col","10Col":"pf-m-10-col","11Col":"pf-m-11-col","12Col":"pf-m-12-col",offset_1Col:"pf-m-offset-1-col",offset_2Col:"pf-m-offset-2-col",offset_3Col:"pf-m-offset-3-col",offset_4Col:"pf-m-offset-4-col",offset_5Col:"pf-m-offset-5-col",offset_6Col:"pf-m-offset-6-col",offset_7Col:"pf-m-offset-7-col",offset_8Col:"pf-m-offset-8-col",offset_9Col:"pf-m-offset-9-col",offset_10Col:"pf-m-offset-10-col",offset_11Col:"pf-m-offset-11-col",offset_12Col:"pf-m-offset-12-col","1Row":"pf-m-1-row","2Row":"pf-m-2-row","3Row":"pf-m-3-row","4Row":"pf-m-4-row","5Row":"pf-m-5-row","6Row":"pf-m-6-row","7Row":"pf-m-7-row","8Row":"pf-m-8-row","9Row":"pf-m-9-row","10Row":"pf-m-10-row","11Row":"pf-m-11-row","12Row":"pf-m-12-row","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm","4ColOnSm":"pf-m-4-col-on-sm","5ColOnSm":"pf-m-5-col-on-sm","6ColOnSm":"pf-m-6-col-on-sm","7ColOnSm":"pf-m-7-col-on-sm","8ColOnSm":"pf-m-8-col-on-sm","9ColOnSm":"pf-m-9-col-on-sm","10ColOnSm":"pf-m-10-col-on-sm","11ColOnSm":"pf-m-11-col-on-sm","12ColOnSm":"pf-m-12-col-on-sm",offset_1ColOnSm:"pf-m-offset-1-col-on-sm",offset_2ColOnSm:"pf-m-offset-2-col-on-sm",offset_3ColOnSm:"pf-m-offset-3-col-on-sm",offset_4ColOnSm:"pf-m-offset-4-col-on-sm",offset_5ColOnSm:"pf-m-offset-5-col-on-sm",offset_6ColOnSm:"pf-m-offset-6-col-on-sm",offset_7ColOnSm:"pf-m-offset-7-col-on-sm",offset_8ColOnSm:"pf-m-offset-8-col-on-sm",offset_9ColOnSm:"pf-m-offset-9-col-on-sm",offset_10ColOnSm:"pf-m-offset-10-col-on-sm",offset_11ColOnSm:"pf-m-offset-11-col-on-sm",offset_12ColOnSm:"pf-m-offset-12-col-on-sm","1RowOnSm":"pf-m-1-row-on-sm","2RowOnSm":"pf-m-2-row-on-sm","3RowOnSm":"pf-m-3-row-on-sm","4RowOnSm":"pf-m-4-row-on-sm","5RowOnSm":"pf-m-5-row-on-sm","6RowOnSm":"pf-m-6-row-on-sm","7RowOnSm":"pf-m-7-row-on-sm","8RowOnSm":"pf-m-8-row-on-sm","9RowOnSm":"pf-m-9-row-on-sm","10RowOnSm":"pf-m-10-row-on-sm","11RowOnSm":"pf-m-11-row-on-sm","12RowOnSm":"pf-m-12-row-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md","4ColOnMd":"pf-m-4-col-on-md","5ColOnMd":"pf-m-5-col-on-md","6ColOnMd":"pf-m-6-col-on-md","7ColOnMd":"pf-m-7-col-on-md","8ColOnMd":"pf-m-8-col-on-md","9ColOnMd":"pf-m-9-col-on-md","10ColOnMd":"pf-m-10-col-on-md","11ColOnMd":"pf-m-11-col-on-md","12ColOnMd":"pf-m-12-col-on-md",offset_1ColOnMd:"pf-m-offset-1-col-on-md",offset_2ColOnMd:"pf-m-offset-2-col-on-md",offset_3ColOnMd:"pf-m-offset-3-col-on-md",offset_4ColOnMd:"pf-m-offset-4-col-on-md",offset_5ColOnMd:"pf-m-offset-5-col-on-md",offset_6ColOnMd:"pf-m-offset-6-col-on-md",offset_7ColOnMd:"pf-m-offset-7-col-on-md",offset_8ColOnMd:"pf-m-offset-8-col-on-md",offset_9ColOnMd:"pf-m-offset-9-col-on-md",offset_10ColOnMd:"pf-m-offset-10-col-on-md",offset_11ColOnMd:"pf-m-offset-11-col-on-md",offset_12ColOnMd:"pf-m-offset-12-col-on-md","1RowOnMd":"pf-m-1-row-on-md","2RowOnMd":"pf-m-2-row-on-md","3RowOnMd":"pf-m-3-row-on-md","4RowOnMd":"pf-m-4-row-on-md","5RowOnMd":"pf-m-5-row-on-md","6RowOnMd":"pf-m-6-row-on-md","7RowOnMd":"pf-m-7-row-on-md","8RowOnMd":"pf-m-8-row-on-md","9RowOnMd":"pf-m-9-row-on-md","10RowOnMd":"pf-m-10-row-on-md","11RowOnMd":"pf-m-11-row-on-md","12RowOnMd":"pf-m-12-row-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg","4ColOnLg":"pf-m-4-col-on-lg","5ColOnLg":"pf-m-5-col-on-lg","6ColOnLg":"pf-m-6-col-on-lg","7ColOnLg":"pf-m-7-col-on-lg","8ColOnLg":"pf-m-8-col-on-lg","9ColOnLg":"pf-m-9-col-on-lg","10ColOnLg":"pf-m-10-col-on-lg","11ColOnLg":"pf-m-11-col-on-lg","12ColOnLg":"pf-m-12-col-on-lg",offset_1ColOnLg:"pf-m-offset-1-col-on-lg",offset_2ColOnLg:"pf-m-offset-2-col-on-lg",offset_3ColOnLg:"pf-m-offset-3-col-on-lg",offset_4ColOnLg:"pf-m-offset-4-col-on-lg",offset_5ColOnLg:"pf-m-offset-5-col-on-lg",offset_6ColOnLg:"pf-m-offset-6-col-on-lg",offset_7ColOnLg:"pf-m-offset-7-col-on-lg",offset_8ColOnLg:"pf-m-offset-8-col-on-lg",offset_9ColOnLg:"pf-m-offset-9-col-on-lg",offset_10ColOnLg:"pf-m-offset-10-col-on-lg",offset_11ColOnLg:"pf-m-offset-11-col-on-lg",offset_12ColOnLg:"pf-m-offset-12-col-on-lg","1RowOnLg":"pf-m-1-row-on-lg","2RowOnLg":"pf-m-2-row-on-lg","3RowOnLg":"pf-m-3-row-on-lg","4RowOnLg":"pf-m-4-row-on-lg","5RowOnLg":"pf-m-5-row-on-lg","6RowOnLg":"pf-m-6-row-on-lg","7RowOnLg":"pf-m-7-row-on-lg","8RowOnLg":"pf-m-8-row-on-lg","9RowOnLg":"pf-m-9-row-on-lg","10RowOnLg":"pf-m-10-row-on-lg","11RowOnLg":"pf-m-11-row-on-lg","12RowOnLg":"pf-m-12-row-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl","4ColOnXl":"pf-m-4-col-on-xl","5ColOnXl":"pf-m-5-col-on-xl","6ColOnXl":"pf-m-6-col-on-xl","7ColOnXl":"pf-m-7-col-on-xl","8ColOnXl":"pf-m-8-col-on-xl","9ColOnXl":"pf-m-9-col-on-xl","10ColOnXl":"pf-m-10-col-on-xl","11ColOnXl":"pf-m-11-col-on-xl","12ColOnXl":"pf-m-12-col-on-xl",offset_1ColOnXl:"pf-m-offset-1-col-on-xl",offset_2ColOnXl:"pf-m-offset-2-col-on-xl",offset_3ColOnXl:"pf-m-offset-3-col-on-xl",offset_4ColOnXl:"pf-m-offset-4-col-on-xl",offset_5ColOnXl:"pf-m-offset-5-col-on-xl",offset_6ColOnXl:"pf-m-offset-6-col-on-xl",offset_7ColOnXl:"pf-m-offset-7-col-on-xl",offset_8ColOnXl:"pf-m-offset-8-col-on-xl",offset_9ColOnXl:"pf-m-offset-9-col-on-xl",offset_10ColOnXl:"pf-m-offset-10-col-on-xl",offset_11ColOnXl:"pf-m-offset-11-col-on-xl",offset_12ColOnXl:"pf-m-offset-12-col-on-xl","1RowOnXl":"pf-m-1-row-on-xl","2RowOnXl":"pf-m-2-row-on-xl","3RowOnXl":"pf-m-3-row-on-xl","4RowOnXl":"pf-m-4-row-on-xl","5RowOnXl":"pf-m-5-row-on-xl","6RowOnXl":"pf-m-6-row-on-xl","7RowOnXl":"pf-m-7-row-on-xl","8RowOnXl":"pf-m-8-row-on-xl","9RowOnXl":"pf-m-9-row-on-xl","10RowOnXl":"pf-m-10-row-on-xl","11RowOnXl":"pf-m-11-row-on-xl","12RowOnXl":"pf-m-12-row-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl","4ColOn_2xl":"pf-m-4-col-on-2xl","5ColOn_2xl":"pf-m-5-col-on-2xl","6ColOn_2xl":"pf-m-6-col-on-2xl","7ColOn_2xl":"pf-m-7-col-on-2xl","8ColOn_2xl":"pf-m-8-col-on-2xl","9ColOn_2xl":"pf-m-9-col-on-2xl","10ColOn_2xl":"pf-m-10-col-on-2xl","11ColOn_2xl":"pf-m-11-col-on-2xl","12ColOn_2xl":"pf-m-12-col-on-2xl",offset_1ColOn_2xl:"pf-m-offset-1-col-on-2xl",offset_2ColOn_2xl:"pf-m-offset-2-col-on-2xl",offset_3ColOn_2xl:"pf-m-offset-3-col-on-2xl",offset_4ColOn_2xl:"pf-m-offset-4-col-on-2xl",offset_5ColOn_2xl:"pf-m-offset-5-col-on-2xl",offset_6ColOn_2xl:"pf-m-offset-6-col-on-2xl",offset_7ColOn_2xl:"pf-m-offset-7-col-on-2xl",offset_8ColOn_2xl:"pf-m-offset-8-col-on-2xl",offset_9ColOn_2xl:"pf-m-offset-9-col-on-2xl",offset_10ColOn_2xl:"pf-m-offset-10-col-on-2xl",offset_11ColOn_2xl:"pf-m-offset-11-col-on-2xl",offset_12ColOn_2xl:"pf-m-offset-12-col-on-2xl","1RowOn_2xl":"pf-m-1-row-on-2xl","2RowOn_2xl":"pf-m-2-row-on-2xl","3RowOn_2xl":"pf-m-3-row-on-2xl","4RowOn_2xl":"pf-m-4-row-on-2xl","5RowOn_2xl":"pf-m-5-row-on-2xl","6RowOn_2xl":"pf-m-6-row-on-2xl","7RowOn_2xl":"pf-m-7-row-on-2xl","8RowOn_2xl":"pf-m-8-row-on-2xl","9RowOn_2xl":"pf-m-9-row-on-2xl","10RowOn_2xl":"pf-m-10-row-on-2xl","11RowOn_2xl":"pf-m-11-row-on-2xl","12RowOn_2xl":"pf-m-12-row-on-2xl",gutter:"pf-m-gutter"}}},51969:(o,l)=>{"use strict";l.__esModule=!0,l.l_flex_item_Order={name:"--pf-l-flex--item--Order",value:"0",var:"var(--pf-l-flex--item--Order)"},l.default=l.l_flex_item_Order},24936:(o,l)=>{"use strict";l.__esModule=!0,l.l_grid_item_Order={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"},l.default=l.l_grid_item_Order},62410:(o,l,e)=>{"use strict";e.d(l,{Z:()=>_});var n=e(85893),t=e(92950),a=e.n(t),r=e(58209),f=function(){return f=Object.assign||function(o){for(var l,e=1,n=arguments.length;e<n;e++)for(var t in l=arguments[e])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},f.apply(this,arguments)},s=36e5,m=24*s,i=30*m,c=365*m,d=function(o,l){return"".concat(o," ").concat(o>1?"".concat(l,"s"):l," ago")},p=[{rightBound:1/0,description:function(o){return d(Math.round(o/c),"year")}},{rightBound:c,description:function(o){return d(Math.round(o/i),"month")}},{rightBound:i,description:function(o){return d(Math.round(o/m),"day")}},{rightBound:m,description:function(o){return d(Math.round(o/s),"hour")}},{rightBound:s,description:function(o){return d(Math.round(o/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],u=function(o){return o.toUTCString().split(",")[1].slice(0,-7).trim()},g=function(o){return{exact:function(o){return u(o)+" UTC"},onlyDate:function(o){return u(o).slice(0,-6)},relative:function(o){return p.reduce((function(l,e){return e.rightBound>Date.now()-o.getTime()?e.description(Date.now()-o.getTime()):l}),u(o))},invalid:function(){return"Invalid date"}}[o]},O=function(o,l,e){return{exact:function(l){return g(o)(l)},onlyDate:function(l){return g(o)(l)},relative:function(t){return function(o,l,e,t){return void 0===t&&(t=""),(0,n.jsx)(r.Tooltip,f({},e,{content:(0,n.jsxs)("div",{children:[t,o]})},{children:l}))}(g("exact")(t),(0,n.jsx)("span",{children:g(o)(t)}),l,e)},invalid:function(){return"Invalid date"}}[o]};const _=function(o){var l=o.date,e=o.type,t=void 0===e?"relative":e,r=o.extraTitle,f=o.tooltipProps,s=l instanceof Date?l:new Date(l),m=null==l||"Invalid Date"===s.toString()?"invalid":t;return(0,n.jsx)(a().Fragment,{children:O(m,f,r)(s)})}},90693:(o,l,e)=>{"use strict";e.d(l,{Z:()=>c});var n=e(85893),t=e(97857),a=e(28955),r=e(25280),f=e(40393),s=e(58209),m=function(){return m=Object.assign||function(o){for(var l,e=1,n=arguments.length;e<n;e++)for(var t in l=arguments[e])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},m.apply(this,arguments)},i={1:{icon:(0,n.jsx)(t.II,{}),text:"Low",color:"blue"},2:{icon:(0,n.jsx)(f.Qv,{}),text:"Moderate",color:"gold"},3:{icon:(0,n.jsx)(a.DW,{}),text:"Important",color:"orange"},4:{icon:(0,n.jsx)(r.HX,{}),text:"Critical",color:"red"}};const c=function(o){var l=o.value,e=void 0===l?1:l,t=o.text,a=o.hideIcon,r=o.rest,f=function(o,l){var e={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&l.indexOf(n)<0&&(e[n]=o[n]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(o);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(e[n[t]]=o[n[t]])}return e}(o,["value","text","hideIcon","rest"]);return(0,n.jsx)(s.Label,m({},r,f,{color:i[e].color,icon:!a&&i[e].icon},{children:t||i[e].text}))}},35664:(o,l,e)=>{"use strict";e.d(l,{i:()=>s,Z:()=>m});var n=e(85893),t=e(58209),a=e(94184),r=e.n(a),f=function(){return f=Object.assign||function(o){for(var l,e=1,n=arguments.length;e<n;e++)for(var t in l=arguments[e])Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);return o},f.apply(this,arguments)},s={xs:"xs",sm:"sm",md:"md",lg:"lg"};const m=function(o){var l,e=o.size,a=void 0===e?s.md:e,m=o.isDark,i=void 0!==m&&m,c=o.className,d=function(o,l){var e={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&l.indexOf(n)<0&&(e[n]=o[n]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(o);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(e[n[t]]=o[n[t]])}return e}(o,["size","isDark","className"]);return(0,n.jsx)(t.Skeleton,f({className:r()("ins-c-skeleton","ins-c-skeleton__".concat(a),(l={},l["ins-m-dark"]=i,l),c)},d))}},56276:(o,l,e)=>{"use strict";e.d(l,{Z:()=>p});var n=e(92950),t=e.n(n),a=e(45697),r=e.n(a),f=e(86896),s=e(62012),m=e(85991),i=e(49489),c=e(15967),d=function(o){var l=o.current,e=(0,f.Z)(),n=(0,s.useLocation)().pathname.split("/");return t().createElement("div",null,t().createElement(m.a,{ouiaId:"detail"},t().createElement(i.g,{className:"breadcrumb-item"},t().createElement(s.Link,{to:"..",relative:"path"},"".concat(e.formatMessage(c.Z.insightsHeader)," ").concat(n[4]))),t().createElement(i.g,{className:"breadcrumb-item",isActive:!0},l)))};d.propTypes={current:r().string};const p=d},52661:(o,l,e)=>{"use strict";e.d(l,{Z:()=>s});var n=e(92950),t=e.n(n),a=e(2095),r=e(85962),f=e(24561);const s=function(){return t().createElement(a.Card,{ouiaId:"loading-skeleton"},t().createElement(r.CardBody,null,t().createElement(f.aV,null)))}},71441:(o,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>T});var n=e(92950),t=e.n(n),a=e(89376),r=e(36001),f=e(42057),s=e(29572),m=e(34348),i=e(56276),c=e(49287),d=e(18038),p=e(81159),u=e(34023),g=e(35664),O=e(73845),_=e(62410),C=e(45697),x=e.n(C),w=function(o){var l,e=o.workloadData,n=o.namespaceId,a=o.clusterId,r=e.isUninitialized,f=e.isFetching,s=e.data;return t().createElement(c.r,{id:"workload-header",md:12,hasGutter:!0},t().createElement(d.P,{span:8},t().createElement(m.Dx,{size:"2xl",headingLevel:"h1",id:"cluster-header-title",ouiaId:"cluster-name"},r||f?t().createElement(t().Fragment,null,t().createElement(g.Z,{size:"sm"}),t().createElement(g.Z,{size:"sm"})):t().createElement(t().Fragment,null,t().createElement("p",null,s.cluster.display_name),t().createElement("p",null,s.namespace.name)))),t().createElement(d.P,null,t().createElement(p.K,null,t().createElement(u.v,{id:"workload-header-uuid"},t().createElement("span",null,"Cluster UUID:")," ",t().createElement("span",null,a)," ",t().createElement("span",null,"Namespace UUID:")," ",t().createElement("span",null,n)),t().createElement(u.v,{id:"workload-header-last-seen"},t().createElement("span",null,"Last seen: "),t().createElement("span",null,r||f?t().createElement(O.F,null):null!=s&&null!==(l=s.metadata)&&void 0!==l&&l.last_checked_at?t().createElement(_.Z,{date:s.metadata.last_checked_at,type:"exact"}):t().createElement(t().Fragment,null,"Unknown"))))))};w.propTypes={clusterId:x().string.isRequired,namespaceId:x().string.isRequired,workloadData:x().shape({isUninitialized:x().bool.isRequired,isFetching:x().bool.isRequired,data:x().shape({namespace:x().shape({uuid:x().string,name:x().string}),cluster:x().shape({uuid:x().string,display_name:x().string}),status:x().string})})};var h=e(62012),v=e(86362);const b=function(){var o=(0,h.useParams)(),l=o.namespaceId,e=o.clusterId,n=(0,v.k0)({namespaceId:l,clusterId:e});return t().createElement(w,{workloadData:n,namespaceId:l,clusterId:e})};var k=e(4942),y=e(70885),S=e(20535),M=e(56021),R=e(59303),E=e(52661),B=e(51014),L=e(90693);function j(o,l){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable}))),e.push.apply(e,n)}return e}function P(o){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?j(Object(e),!0).forEach((function(l){(0,k.Z)(o,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach((function(l){Object.defineProperty(o,l,Object.getOwnPropertyDescriptor(e,l))}))}return o}var I=function(o){var l=o.workload,e=l.isError,a=l.isUninitialized,r=l.isFetching,f=l.isSuccess,s=l.data,m=(l.error,(null==s?void 0:s.recommendations)||[]),i=e,c=f,d=(0,n.useState)([]),p=(0,y.Z)(d,2),u=p[0],g=(p[1],(0,n.useState)(!1)),O=(0,y.Z)(g,2),_=O[0],C=O[1],x=(0,n.useState)([]),w=(0,y.Z)(x,2),h=w[0],v=w[1],b=(0,n.useState)([]),k=(0,y.Z)(b,2),j=k[0],I=k[1],N=(0,n.useState)(!1),X=(0,y.Z)(N,2),D=X[0],T=X[1],z=a||r||!D;(0,n.useEffect)((function(){v(W(m,u))}),[s,u]),(0,n.useEffect)((function(){I(Z(h,u.sortIndex,u.sortDirection)),T(!0)}),[h]);var H=[{label:"description",filterValues:{key:"text-filter"}},{label:R.W2.total_risk.title,type:R.W2.total_risk.type,id:R.W2.total_risk.urlParam,value:"checkbox-".concat(R.W2.total_risk.urlParam),filterValues:{key:"".concat(R.W2.total_risk.urlParam,"-filter"),value:u.total_risk,items:R.W2.total_risk.values}},{label:"object ID",filterValues:{key:"text-filter"}}],Z=function(o,l,e){return o.flatMap((function(o,l){return[o[0],P(P({},o[1]),{},{parent:2*l})]}))},W=function(o,l){return T(!1),o.map((function(o,l){return[{rule:o,isOpen:_,cells:[{title:o.description},{title:t().createElement("div",{key:l},t().createElement(L.Z,{value:4,rest:{isCompact:!0}}))},{title:o.objects.length},{title:t().createElement("div",{key:l})}]},{cells:[{title:"test"}]}]}))};return t().createElement("div",{id:"workload-recs-list-table"},t().createElement(M.Z,{filterConfig:{items:H,isDisabled:z||i||0===m.length},pagination:t().createElement("span",{className:"pf-u-font-weight-bold"},1===(null==m?void 0:m.length)?"".concat(m.length," Recommendation"):"".concat(m.length," Recommendations"))}),t().createElement(S.Table,{"aria-label":"Workload recommendations table",ouiaId:"workload-recommendations",cells:R.x2,ouiaSafe:!z,onCollapse:function(o,l,e){void 0===l?(C(e),I(j.map((function(o){return P(P({},o),Object.hasOwn(o,"parent")?null:{isOpen:e})})))):I(j.map((function(o,n){return n===l?P(P({},o),{},{isOpen:e}):o})))},rows:i||z?[{fullWidth:!0,cells:[{props:{colSpan:R.x2.length+1},title:t().createElement(E.Z,null)}]}]:c?j:t().createElement(B.Te,null),variant:S.TableVariant.compact,isStickyHeader:!0,canCollapseAll:!0},t().createElement(S.TableHeader,null),t().createElement(S.TableBody,null)))};const N=I;I.propTypes={workload:x().shape({isUninitialized:x().bool.isRequired,isFetching:x().bool.isRequired,isError:x().bool.isRequired,isSuccess:x().bool.isRequired,error:x().object,data:x().shape({namespace:x().shape({uuid:x().string,name:x().string}),cluster:x().shape({uuid:x().string,display_name:x().string}),status:x().string,recommendations:x().arrayOf(x().shape({check:x().string,description:x().string,objects:x().arrayOf(x().shape({kind:x().string,uid:x().string})),remediation:x().string}))})})};var X=function(o){var l,e=o.workload,n=o.namespaceId,c=o.clusterId;return t().createElement(t().Fragment,null,t().createElement(a.Z,{className:"pf-m-light ins-inventory-detail"},t().createElement(r.k,{direction:{default:"column"}},t().createElement(f.B,null,t().createElement(i.Z,{current:"ok"===(null==e||null===(l=e.data)||void 0===l?void 0:l.status)?"".concat(e.data.cluster.display_name," | ").concat(e.data.namespace.name):"".concat(c," | ").concat(n)}),t().createElement(b,null)))),t().createElement(s.NP,null,t().createElement(m.Dx,{className:"pf-u-mb-lg",headingLevel:"h3",size:"2xl"},"Recommendations"),t().createElement(N,{workload:e})))};X.propTypes={clusterId:x().string.isRequired,namespaceId:x().string.isRequired,workload:x().shape({isUninitialized:x().bool.isRequired,isFetching:x().bool.isRequired,data:x().shape({namespace:x().shape({uuid:x().string,name:x().string}),cluster:x().shape({uuid:x().string,display_name:x().string}),status:x().string})})};var D=e(55140);const T=function(){var o=(0,D.Z)(),l=(0,h.useParams)(),e=l.namespaceId,a=l.clusterId,r=(0,v.k0)({namespaceId:e,clusterId:a});return(0,n.useEffect)((function(){r.refetch()}),[e,a]),(0,n.useEffect)((function(){var l,n,t,f="".concat("ok"===(null==r||null===(l=r.data)||void 0===l?void 0:l.status)?"".concat(null==r||null===(n=r.data)||void 0===n?void 0:n.cluster.display_name," | ").concat(null==r||null===(t=r.data)||void 0===t?void 0:t.namespace.name," - Workloads"):"".concat(a," | ").concat(e," - Workloads"));o.updateDocumentTitle("".concat(f," - OCP Advisor | Red Hat Insights"))}),[r,e,a]),t().createElement(X,{workload:r,namespaceId:e,clusterId:a})}},73845:(o,l,e)=>{"use strict";e.d(l,{F:()=>r});var n=e(92950),t=e.n(n),a=e(24561),r=function(){return t().createElement(a.ZP,{height:20},t().createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"300",height:"20"}))}},14259:o=>{o.exports=function(o,l,e){var n=-1,t=o.length;l<0&&(l=-l>t?0:t+l),(e=e>t?t:e)<0&&(e+=t),t=l>e?0:e-l>>>0,l>>>=0;for(var a=Array(t);++n<t;)a[n]=o[n+l];return a}},58392:()=>{},80598:()=>{},92084:()=>{},38299:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Workload.2c39ebb71a134ceae70fb62ab6128588.js.map