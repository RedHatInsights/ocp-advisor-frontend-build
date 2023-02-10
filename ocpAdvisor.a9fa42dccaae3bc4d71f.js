var ocpAdvisor;(()=>{"use strict";var e,r,t,a,n,o,i,l,s,u,d,f,c,h,p,v,m,b,g,y={15394:(e,r,t)=>{var a={"./RootApp":()=>Promise.all([t.e(939),t.e(436),t.e(911),t.e(671),t.e(950),t.e(889),t.e(356),t.e(826),t.e(224)]).then((()=>()=>t(28412)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},w={};function P(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return y[e].call(t.exports,t,t.exports,P),t.loaded=!0,t.exports}P.m=y,P.c=w,P.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return P.d(r,{a:r}),r},P.d=(e,r)=>{for(var t in r)P.o(r,t)&&!P.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((r,t)=>(P.f[t](e,r),r)),[])),P.u=e=>"js/"+({9:"RecsList",384:"RulesTable",420:"ClustersList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+P.h()+".js",P.miniCssF=e=>"css/"+({9:"RecsList",384:"RulesTable",420:"ClustersList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+{9:"482d50f2bea190e99fe1",224:"422134e5695d3acf99a9",384:"1e2e87ab0af707c1f0eb",420:"4fd39e8d21b053c8ac00",619:"10525179d3c720b281bd",987:"4fd991083bb039c86349"}[e]+".css",P.h=()=>"a9fa42dccaae3bc4d71f",P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ocp-advisor-frontend:",P.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==n)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+n){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,P.nc&&i.setAttribute("nonce",P.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var f=(r,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{P.S={};var e={},r={};P.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];P.o(P.S,t)||(P.S[t]={});var o=P.S[t],i="ocp-advisor-frontend",l=(e,r,t,a)=>{var n=o[e]=o[e]||{},l=n[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(n[r]={get:t,from:i,eager:!!a})},s=[];return"default"===t&&(l("@patternfly/react-core","4.276.6",(()=>Promise.all([P.e(437),P.e(114),P.e(680),P.e(436),P.e(261),P.e(840),P.e(950),P.e(889),P.e(479)]).then((()=>()=>P(71840))))),l("@patternfly/react-table","4.112.39",(()=>Promise.all([P.e(437),P.e(939),P.e(680),P.e(911),P.e(912),P.e(950),P.e(889),P.e(356),P.e(7)]).then((()=>()=>P(85993))))),l("@scalprum/react-core","0.2.8",(()=>Promise.all([P.e(939),P.e(185),P.e(950)]).then((()=>()=>P(32185))))),l("axios","0.27.2",(()=>Promise.all([P.e(764),P.e(669),P.e(155)]).then((()=>()=>P(9669))))),l("react-dom","17.0.2",(()=>Promise.all([P.e(935),P.e(950)]).then((()=>()=>P(73935))))),l("react-router-dom","5.3.4",(()=>Promise.all([P.e(456),P.e(950),P.e(667)]).then((()=>()=>P(10456))))),l("react","17.0.2",(()=>P.e(294).then((()=>()=>P(67294)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),P.p="/beta/apps/ocp-advisor/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():n(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,l=1,s=!0;;l++,i++){var u,d,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(u=r[i]))[0]))return!s||("u"==f?l>a&&!n:""==f!=n);if("u"==d){if(!s||"u"!=f)return!1}else if(s)if(f==d)if(l<=a){if(u!=e[l])return!1}else{if(n?u>e[l]:u<e[l])return!1;u!=e[l]&&(s=!1)}else if("s"!=f&&"n"!=f){if(n||l<=a)return!1;s=!1,l--}else{if(l<=a||d<f!=n)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},l=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",s=(e,r,t,a)=>{var n=i(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,n,a)),d(e[t][n])},u=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},d=e=>(e.loaded=1,e.get()),c=(f=e=>function(r,t,a,n){var o=P.I(r);return o&&o.then?o.then(e.bind(e,r,P.S[r],t,a,n)):e(r,P.S[r],t,a,n)})(((e,r,t,a,n)=>r&&P.o(r,t)?s(r,0,t,a):n())),h=f(((e,r,t,a,n)=>{var o=r&&P.o(r,t)&&u(r,t,a);return o?d(o):n()})),p={},v={92950:()=>c("default","react",[1,17,0,2],(()=>P.e(294).then((()=>()=>P(67294))))),12181:()=>c("default","react-dom",[1,17,0,2],(()=>P.e(935).then((()=>()=>P(73935))))),35356:()=>h("default","@patternfly/react-core",[1,4,276,6],(()=>Promise.all([P.e(437),P.e(114),P.e(680),P.e(436),P.e(261),P.e(840),P.e(977)]).then((()=>()=>P(71840))))),4259:()=>h("default","@patternfly/react-table",[1,4,112,39],(()=>Promise.all([P.e(437),P.e(680),P.e(912),P.e(19)]).then((()=>()=>P(85993))))),54025:()=>c("default","@scalprum/react-core",[0],(()=>P.e(185).then((()=>()=>P(32185))))),65564:()=>h("default","axios",[2,0,27,2],(()=>Promise.all([P.e(764),P.e(669)]).then((()=>()=>P(9669))))),96620:()=>h("default","react-router-dom",[1,5,3,4],(()=>P.e(456).then((()=>()=>P(10456)))))},m={356:[35356],826:[4259,54025,65564,96620],889:[12181],950:[92950]},P.f.consumes=(e,r)=>{P.o(m,e)&&m[e].forEach((e=>{if(P.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,P.m[e]=t=>{delete P.c[e],t.exports=r()}},a=r=>{delete p[e],P.m[e]=t=>{throw delete P.c[e],r}};try{var n=v[e]();n.then?r.push(p[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},b=e=>new Promise(((r,t)=>{var a=P.miniCssF(e),n=P.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var n=(i=t[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var i;if((n=(i=o[a]).getAttribute("data-href"))===e||n===r)return i}})(a,n))return r();((e,r,t,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),a(s)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),g={470:0},P.f.miniCss=(e,r)=>{g[e]?r.push(g[e]):0!==g[e]&&{9:1,224:1,384:1,420:1,619:1,987:1}[e]&&r.push(g[e]=b(e).then((()=>{g[e]=0}),(r=>{throw delete g[e],r})))},(()=>{var e={470:0};P.f.j=(r,t)=>{var a=P.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(356|889|950)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=P.p+P.u(r),i=new Error;P.l(o,(t=>{if(P.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,l]=t,s=0;if(o.some((r=>0!==e[r]))){for(a in i)P.o(i,a)&&(P.m[a]=i[a]);l&&l(P)}for(r&&r(t);s<o.length;s++)n=o[s],P.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var C=P(15394);ocpAdvisor=C})();