(()=>{var e,r,t,n,o,a,l,i,s,u,d,f,c,h,p,m,v,g,y,b={31288:(e,r,t)=>{document.getElementById("root").classList.add("ocp-advisor"),window.insights&&window.insights.chrome&&window.insights.chrome.isChrome2||Promise.all([t.e(324),t.e(948),t.e(911),t.e(10),t.e(424),t.e(950),t.e(181),t.e(356),t.e(212),t.e(930)]).then(t.bind(t,36491))}},w={};function P(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,P),t.loaded=!0,t.exports}P.m=b,P.c=w,P.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return P.d(r,{a:r}),r},P.d=(e,r)=>{for(var t in r)P.o(r,t)&&!P.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((r,t)=>(P.f[t](e,r),r)),[])),P.u=e=>"js/"+({9:"RecsList",384:"RulesTable",420:"ClustersList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+P.h()+".js",P.miniCssF=e=>"css/"+({384:"RulesTable",420:"ClustersList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+{384:"e04df133521da8d08e8b",420:"f18c04f31ca8d84f809f",619:"4cbd81c81fa47494f655",930:"00e335d466dd9d93f4d9",987:"d3242c7654fb8d0c5da1"}[e]+".css",P.h=()=>"4df560c3335f776f91df",P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ocp-advisor-frontend:",P.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var l,i;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){l=d;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,P.nc&&l.setAttribute("nonce",P.nc),l.setAttribute("data-webpack",r+o),l.src=t),e[t]=[n];var f=(r,n)=>{l.onerror=l.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),i&&document.head.appendChild(l)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{P.S={};var e={},r={};P.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];P.o(P.S,t)||(P.S[t]={});var a=P.S[t],l="ocp-advisor-frontend",i=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:l>i.from))&&(o[r]={get:t,from:l,eager:!!n})},s=[];return"default"===t&&(i("@patternfly/react-core","4.276.6",(()=>Promise.all([P.e(453),P.e(350),P.e(944),P.e(948),P.e(132),P.e(198),P.e(721),P.e(950),P.e(181),P.e(479)]).then((()=>()=>P(94721))))),i("@patternfly/react-table","4.112.39",(()=>Promise.all([P.e(453),P.e(324),P.e(944),P.e(911),P.e(912),P.e(950),P.e(181),P.e(356),P.e(7)]).then((()=>()=>P(85993))))),i("@scalprum/react-core","0.5.1",(()=>Promise.all([P.e(231),P.e(324),P.e(10),P.e(981),P.e(950)]).then((()=>()=>P(93981))))),i("@unleash/proxy-client-react","3.5.2",(()=>Promise.all([P.e(913),P.e(950)]).then((()=>()=>P(80913))))),i("axios","0.27.2",(()=>Promise.all([P.e(764),P.e(669),P.e(155)]).then((()=>()=>P(9669))))),i("react-dom","17.0.2",(()=>Promise.all([P.e(935),P.e(950)]).then((()=>()=>P(73935))))),i("react-router-dom","6.8.1",(()=>Promise.all([P.e(818),P.e(950)]).then((()=>()=>P(49818))))),i("react","17.0.2",(()=>P.e(294).then((()=>()=>P(67294)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),P.p="/beta/apps/ocp-advisor/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var l=r[n],i=(typeof l)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=l)return o<l;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var l=[];for(a=1;a<e.length;a++){var i=e[a];l.push(0===i?"not("+s()+")":1===i?"("+s()+" || "+s()+")":2===i?l.pop()+" "+l.pop():o(i))}return s();function s(){return l.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var l=0,i=1,s=!0;;i++,l++){var u,d,f=i<e.length?(typeof e[i])[0]:"";if(l>=r.length||"o"==(d=(typeof(u=r[l]))[0]))return!s||("u"==f?i>n&&!o:""==f!=o);if("u"==d){if(!s||"u"!=f)return!1}else if(s)if(f==d)if(i<=n){if(u!=e[i])return!1}else{if(o?u>e[i]:u<e[i])return!1;u!=e[i]&&(s=!1)}else if("s"!=f&&"n"!=f){if(o||i<=n)return!1;s=!1,i--}else{if(i<=n||d<f!=o)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,i--)}}var c=[],h=c.pop.bind(c);for(l=1;l<e.length;l++){var p=e[l];c.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},i=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",s=(e,r,t,n)=>{var o=l(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(i(e,t,o,n)),d(e[t][o])},u=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},d=e=>(e.loaded=1,e.get()),c=(f=e=>function(r,t,n,o){var a=P.I(r);return a&&a.then?a.then(e.bind(e,r,P.S[r],t,n,o)):e(r,P.S[r],t,n,o)})(((e,r,t,n,o)=>r&&P.o(r,t)?s(r,0,t,n):o())),h=f(((e,r,t,n,o)=>{var a=r&&P.o(r,t)&&u(r,t,n);return a?d(a):o()})),p={},m={92950:()=>c("default","react",[1,17,0,2],(()=>P.e(294).then((()=>()=>P(67294))))),12181:()=>c("default","react-dom",[1,17,0,2],(()=>P.e(935).then((()=>()=>P(73935))))),35356:()=>h("default","@patternfly/react-core",[1,4,276,6],(()=>Promise.all([P.e(453),P.e(350),P.e(944),P.e(948),P.e(132),P.e(198),P.e(721),P.e(977)]).then((()=>()=>P(94721))))),4259:()=>h("default","@patternfly/react-table",[1,4,112,39],(()=>Promise.all([P.e(453),P.e(944),P.e(912),P.e(19)]).then((()=>()=>P(85993))))),54025:()=>c("default","@scalprum/react-core",[0],(()=>Promise.all([P.e(231),P.e(981)]).then((()=>()=>P(93981))))),62012:()=>c("default","react-router-dom",[0],(()=>P.e(818).then((()=>()=>P(49818))))),65564:()=>h("default","axios",[2,0,27,2],(()=>Promise.all([P.e(764),P.e(669)]).then((()=>()=>P(9669))))),57223:()=>c("default","@unleash/proxy-client-react",[1,3,5,2],(()=>P.e(913).then((()=>()=>P(80913)))))},v={181:[12181],212:[4259,54025,62012,65564],356:[35356],619:[57223],950:[92950]},P.f.consumes=(e,r)=>{P.o(v,e)&&v[e].forEach((e=>{if(P.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,P.m[e]=t=>{delete P.c[e],t.exports=r()}},n=r=>{delete p[e],P.m[e]=t=>{throw delete P.c[e],r}};try{var o=m[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},g=e=>new Promise(((r,t)=>{var n=P.miniCssF(e),o=P.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(l=t[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===e||o===r))return l}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var l;if((o=(l=a[n]).getAttribute("data-href"))===e||o===r)return l}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var l=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,o.parentNode.removeChild(o),n(s)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),y={768:0},P.f.miniCss=(e,r)=>{y[e]?r.push(y[e]):0!==y[e]&&{384:1,420:1,619:1,930:1,987:1}[e]&&r.push(y[e]=g(e).then((()=>{y[e]=0}),(r=>{throw delete y[e],r})))},(()=>{var e={768:0};P.f.j=(r,t)=>{var n=P.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(181|356|950)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=P.p+P.u(r),l=new Error;P.l(a,(t=>{if(P.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,l,i]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in l)P.o(l,n)&&(P.m[n]=l[n]);i&&i(P)}for(r&&r(t);s<a.length;s++)o=a[s],P.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),P(31288)})();
//# sourceMappingURL=../sourcemaps/App.aea6ce88eece9a3279d2e261ddcde509.js.map