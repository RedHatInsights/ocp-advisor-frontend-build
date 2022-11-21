var ocpAdvisor;(()=>{"use strict";var e,r,t,n,o,a,i,l,s,d,u,f,c,h,p,v,m,g,b,y={15394:(e,r,t)=>{var n={"./RootApp":()=>Promise.all([t.e(436),t.e(660),t.e(480),t.e(950),t.e(889),t.e(938),t.e(351),t.e(224)]).then((()=>()=>t(28412)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},w={};function C(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return y[e].call(t.exports,t,t.exports,C),t.loaded=!0,t.exports}C.m=y,C.c=w,C.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return C.d(r,{a:r}),r},C.d=(e,r)=>{for(var t in r)C.o(r,t)&&!C.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},C.f={},C.e=e=>Promise.all(Object.keys(C.f).reduce(((r,t)=>(C.f[t](e,r),r)),[])),C.u=e=>"js/"+({9:"RecsList",384:"RulesTable",420:"ClustersList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+".1669042460808."+C.h()+".js",C.miniCssF=e=>"css/"+({9:"RecsList",384:"RulesTable",420:"ClustersList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+{9:"e779714751ac0467814d",224:"422134e5695d3acf99a9",384:"6f41725b4746dea00772",420:"a5d16b940866124c9787",619:"56bb8a27a5cc1ddbe389",987:"1635787b17ae182fd238"}[e]+".css",C.h=()=>"1e9ec13a350f7d0c3d58",C.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),C.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ocp-advisor-frontend:",C.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+o){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,C.nc&&i.setAttribute("nonce",C.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},C.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{C.S={};var e={},r={};C.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];C.o(C.S,t)||(C.S[t]={});var a=C.S[t],i="ocp-advisor-frontend",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(l("@patternfly/react-core","4.250.1",(()=>Promise.all([C.e(437),C.e(114),C.e(680),C.e(436),C.e(162),C.e(471),C.e(950),C.e(889),C.e(479)]).then((()=>()=>C(21471))))),l("@patternfly/react-table","4.111.4",(()=>Promise.all([C.e(437),C.e(680),C.e(660),C.e(912),C.e(950),C.e(889),C.e(938),C.e(7)]).then((()=>()=>C(85993))))),l("axios","0.27.2",(()=>Promise.all([C.e(764),C.e(669),C.e(155)]).then((()=>()=>C(9669))))),l("react-dom","17.0.2",(()=>Promise.all([C.e(935),C.e(950)]).then((()=>()=>C(73935))))),l("react-router-dom","5.3.4",(()=>Promise.all([C.e(456),C.e(950),C.e(667)]).then((()=>()=>C(10456))))),l("react","17.0.2",(()=>C.e(294).then((()=>()=>C(67294)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),C.p="/apps/ocp-advisor/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():o(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,s=!0;;l++,i++){var d,u,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(u=(typeof(d=r[i]))[0]))return!s||("u"==f?l>n&&!o:""==f!=o);if("u"==u){if(!s||"u"!=f)return!1}else if(s)if(f==u)if(l<=n){if(d!=e[l])return!1}else{if(o?d>e[l]:d<e[l])return!1;d!=e[l]&&(s=!1)}else if("s"!=f&&"n"!=f){if(o||l<=n)return!1;s=!1,l--}else{if(l<=n||u<f!=o)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",s=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,o,n)),u(e[t][o])},d=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},u=e=>(e.loaded=1,e.get()),c=(f=e=>function(r,t,n,o){var a=C.I(r);return a&&a.then?a.then(e.bind(e,r,C.S[r],t,n,o)):e(r,C.S[r],t,n,o)})(((e,r,t,n,o)=>r&&C.o(r,t)?s(r,0,t,n):o())),h=f(((e,r,t,n,o)=>{var a=r&&C.o(r,t)&&d(r,t,n);return a?u(a):o()})),p={},v={92950:()=>c("default","react",[1,17,0,2],(()=>C.e(294).then((()=>()=>C(67294))))),12181:()=>c("default","react-dom",[1,17,0,2],(()=>C.e(935).then((()=>()=>C(73935))))),22938:()=>h("default","@patternfly/react-core",[1,4,224,1],(()=>Promise.all([C.e(437),C.e(114),C.e(680),C.e(436),C.e(162),C.e(471),C.e(977)]).then((()=>()=>C(21471))))),65564:()=>h("default","axios",[2,0,27,2],(()=>Promise.all([C.e(764),C.e(669)]).then((()=>()=>C(9669))))),68770:()=>h("default","@patternfly/react-table",[1,4,108,0],(()=>Promise.all([C.e(437),C.e(680),C.e(912),C.e(19)]).then((()=>()=>C(85993))))),96620:()=>h("default","react-router-dom",[1,5,3,4],(()=>C.e(456).then((()=>()=>C(10456)))))},m={351:[65564,68770,96620],889:[12181],938:[22938],950:[92950]},C.f.consumes=(e,r)=>{C.o(m,e)&&m[e].forEach((e=>{if(C.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,C.m[e]=t=>{delete C.c[e],t.exports=r()}},n=r=>{delete p[e],C.m[e]=t=>{throw delete C.c[e],r}};try{var o=v[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},g=e=>new Promise(((r,t)=>{var n=C.miniCssF(e),o=C.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),b={470:0},C.f.miniCss=(e,r)=>{b[e]?r.push(b[e]):0!==b[e]&&{9:1,224:1,384:1,420:1,619:1,987:1}[e]&&r.push(b[e]=g(e).then((()=>{b[e]=0}),(r=>{throw delete b[e],r})))},(()=>{var e={470:0};C.f.j=(r,t)=>{var n=C.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(889|938|950)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=C.p+C.u(r),i=new Error;C.l(a,(t=>{if(C.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)C.o(i,n)&&(C.m[n]=i[n]);l&&l(C)}for(r&&r(t);s<a.length;s++)o=a[s],C.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var P=C(15394);ocpAdvisor=P})();