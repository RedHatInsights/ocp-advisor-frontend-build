(()=>{var e,r,t,n,o,a,l,i,s,u,d,f,c,h,p,m,v,b,g,y={31288:(e,r,t)=>{document.getElementById("root").classList.add("ocp-advisor"),window.insights&&window.insights.chrome&&window.insights.chrome.isChrome2||Promise.all([t.e(939),t.e(436),t.e(911),t.e(424),t.e(950),t.e(889),t.e(356),t.e(212),t.e(919)]).then(t.bind(t,36491))}},w={};function C(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return y[e].call(t.exports,t,t.exports,C),t.loaded=!0,t.exports}C.m=y,C.c=w,C.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return C.d(r,{a:r}),r},C.d=(e,r)=>{for(var t in r)C.o(r,t)&&!C.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},C.f={},C.e=e=>Promise.all(Object.keys(C.f).reduce(((r,t)=>(C.f[t](e,r),r)),[])),C.u=e=>"js/"+({9:"RecsList",384:"RulesTable",420:"ClustersList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+C.h()+".js",C.miniCssF=e=>"css/"+({9:"RecsList",384:"RulesTable",420:"ClustersList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+{9:"482d50f2bea190e99fe1",384:"1e2e87ab0af707c1f0eb",420:"4fd39e8d21b053c8ac00",619:"10525179d3c720b281bd",919:"422134e5695d3acf99a9",987:"4fd991083bb039c86349"}[e]+".css",C.h=()=>"74fb2782164cb3ff7efa",C.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),C.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ocp-advisor-frontend:",C.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var l,i;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){l=d;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,C.nc&&l.setAttribute("nonce",C.nc),l.setAttribute("data-webpack",r+o),l.src=t),e[t]=[n];var f=(r,n)=>{l.onerror=l.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),i&&document.head.appendChild(l)}},C.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{C.S={};var e={},r={};C.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];C.o(C.S,t)||(C.S[t]={});var a=C.S[t],l="ocp-advisor-frontend",i=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:l>i.from))&&(o[r]={get:t,from:l,eager:!!n})},s=[];return"default"===t&&(i("@patternfly/react-core","4.276.6",(()=>Promise.all([C.e(437),C.e(114),C.e(680),C.e(436),C.e(261),C.e(840),C.e(950),C.e(889),C.e(479)]).then((()=>()=>C(71840))))),i("@patternfly/react-table","4.112.39",(()=>Promise.all([C.e(437),C.e(939),C.e(680),C.e(911),C.e(912),C.e(950),C.e(889),C.e(356),C.e(7)]).then((()=>()=>C(85993))))),i("@scalprum/react-core","0.2.8",(()=>Promise.all([C.e(939),C.e(185),C.e(950)]).then((()=>()=>C(32185))))),i("axios","0.27.2",(()=>Promise.all([C.e(764),C.e(669),C.e(155)]).then((()=>()=>C(9669))))),i("react-dom","17.0.2",(()=>Promise.all([C.e(935),C.e(950)]).then((()=>()=>C(73935))))),i("react-router-dom","6.8.1",(()=>Promise.all([C.e(818),C.e(950)]).then((()=>()=>C(49818))))),i("react","17.0.2",(()=>C.e(294).then((()=>()=>C(67294)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),C.p="/beta/apps/ocp-advisor/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var l=r[n],i=(typeof l)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=l)return o<l;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var l=[];for(a=1;a<e.length;a++){var i=e[a];l.push(0===i?"not("+s()+")":1===i?"("+s()+" || "+s()+")":2===i?l.pop()+" "+l.pop():o(i))}return s();function s(){return l.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var l=0,i=1,s=!0;;i++,l++){var u,d,f=i<e.length?(typeof e[i])[0]:"";if(l>=r.length||"o"==(d=(typeof(u=r[l]))[0]))return!s||("u"==f?i>n&&!o:""==f!=o);if("u"==d){if(!s||"u"!=f)return!1}else if(s)if(f==d)if(i<=n){if(u!=e[i])return!1}else{if(o?u>e[i]:u<e[i])return!1;u!=e[i]&&(s=!1)}else if("s"!=f&&"n"!=f){if(o||i<=n)return!1;s=!1,i--}else{if(i<=n||d<f!=o)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,i--)}}var c=[],h=c.pop.bind(c);for(l=1;l<e.length;l++){var p=e[l];c.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},i=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",s=(e,r,t,n)=>{var o=l(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(i(e,t,o,n)),d(e[t][o])},u=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},d=e=>(e.loaded=1,e.get()),c=(f=e=>function(r,t,n,o){var a=C.I(r);return a&&a.then?a.then(e.bind(e,r,C.S[r],t,n,o)):e(r,C.S[r],t,n,o)})(((e,r,t,n,o)=>r&&C.o(r,t)?s(r,0,t,n):o())),h=f(((e,r,t,n,o)=>{var a=r&&C.o(r,t)&&u(r,t,n);return a?d(a):o()})),p={},m={92950:()=>c("default","react",[1,17,0,2],(()=>C.e(294).then((()=>()=>C(67294))))),12181:()=>c("default","react-dom",[1,17,0,2],(()=>C.e(935).then((()=>()=>C(73935))))),35356:()=>h("default","@patternfly/react-core",[1,4,276,6],(()=>Promise.all([C.e(437),C.e(114),C.e(680),C.e(436),C.e(261),C.e(840),C.e(977)]).then((()=>()=>C(71840))))),4259:()=>h("default","@patternfly/react-table",[1,4,112,39],(()=>Promise.all([C.e(437),C.e(680),C.e(912),C.e(19)]).then((()=>()=>C(85993))))),54025:()=>c("default","@scalprum/react-core",[0],(()=>C.e(185).then((()=>()=>C(32185))))),62012:()=>c("default","react-router-dom",[0],(()=>C.e(818).then((()=>()=>C(49818))))),65564:()=>h("default","axios",[2,0,27,2],(()=>Promise.all([C.e(764),C.e(669)]).then((()=>()=>C(9669)))))},v={212:[4259,54025,62012,65564],356:[35356],889:[12181],950:[92950]},C.f.consumes=(e,r)=>{C.o(v,e)&&v[e].forEach((e=>{if(C.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,C.m[e]=t=>{delete C.c[e],t.exports=r()}},n=r=>{delete p[e],C.m[e]=t=>{throw delete C.c[e],r}};try{var o=m[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},b=e=>new Promise(((r,t)=>{var n=C.miniCssF(e),o=C.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(l=t[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===e||o===r))return l}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var l;if((o=(l=a[n]).getAttribute("data-href"))===e||o===r)return l}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var l=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,o.parentNode.removeChild(o),n(s)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),g={768:0},C.f.miniCss=(e,r)=>{g[e]?r.push(g[e]):0!==g[e]&&{9:1,384:1,420:1,619:1,919:1,987:1}[e]&&r.push(g[e]=b(e).then((()=>{g[e]=0}),(r=>{throw delete g[e],r})))},(()=>{var e={768:0};C.f.j=(r,t)=>{var n=C.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(356|889|950)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=C.p+C.u(r),l=new Error;C.l(a,(t=>{if(C.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,l,i]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in l)C.o(l,n)&&(C.m[n]=l[n]);i&&i(C)}for(r&&r(t);s<a.length;s++)o=a[s],C.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),C(31288)})();