(()=>{var e,r,t,n,o,a,l,i,s,u,d,f,c,h,p,m,v,g,y={31288:(e,r,t)=>{document.getElementById("root").classList.add("ocp-advisor"),window.insights&&window.insights.chrome&&window.insights.chrome.isChrome2||Promise.all([t.e(112),t.e(77),t.e(510),t.e(950),t.e(181),t.e(466),t.e(433)]).then(t.bind(t,36491))}},b={};function w(e){var r=b[e];if(void 0!==r)return r.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return y[e].call(t.exports,t,t.exports,w),t.loaded=!0,t.exports}w.m=y,w.c=b,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>"js/"+({9:"RecsList",384:"RulesTable",420:"ClustersList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+w.h()+".js",w.miniCssF=e=>"css/"+({384:"RulesTable",420:"ClustersList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+{384:"93205860ba4d4885f2fa",420:"8b9b0a858fb4e5d71b27",433:"00e335d466dd9d93f4d9",619:"f2b916cf3a06bcf92317",987:"2fd434ef497171ebd463"}[e]+".css",w.h=()=>"4c987d5721335a50f7e5",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ocpAdvisor:",w.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var l,i;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){l=d;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,w.nc&&l.setAttribute("nonce",w.nc),l.setAttribute("data-webpack",r+o),l.src=t),e[t]=[n];var f=(r,n)=>{l.onerror=l.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),i&&document.head.appendChild(l)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var a=w.S[t],l="ocpAdvisor",i=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:l>i.from))&&(o[r]={get:t,from:l,eager:!!n})},s=[];return"default"===t&&(i("@patternfly/react-core","4.276.11",(()=>Promise.all([w.e(453),w.e(776),w.e(613),w.e(112),w.e(836),w.e(435),w.e(555),w.e(950),w.e(181),w.e(566)]).then((()=>()=>w(53555))))),i("@patternfly/react-table","4.113.3",(()=>Promise.all([w.e(958),w.e(453),w.e(613),w.e(112),w.e(77),w.e(51),w.e(950),w.e(181),w.e(224)]).then((()=>()=>w(85993))))),i("@scalprum/react-core","0.5.1",(()=>Promise.all([w.e(958),w.e(218),w.e(77),w.e(981),w.e(950),w.e(149)]).then((()=>()=>w(93981))))),i("@unleash/proxy-client-react","3.5.2",(()=>Promise.all([w.e(913),w.e(950)]).then((()=>()=>w(80913))))),i("axios","0.27.2",(()=>Promise.all([w.e(764),w.e(669),w.e(155)]).then((()=>()=>w(9669))))),i("react-dom","17.0.2",(()=>Promise.all([w.e(935),w.e(950)]).then((()=>()=>w(73935))))),i("react-router-dom","6.8.1",(()=>Promise.all([w.e(818),w.e(950)]).then((()=>()=>w(49818))))),i("react","17.0.2",(()=>w.e(294).then((()=>()=>w(67294)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),w.p="/beta/apps/ocp-advisor/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var l=r[n],i=(typeof l)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=l)return o<l;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var l=[];for(a=1;a<e.length;a++){var i=e[a];l.push(0===i?"not("+s()+")":1===i?"("+s()+" || "+s()+")":2===i?l.pop()+" "+l.pop():o(i))}return s();function s(){return l.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var l=0,i=1,s=!0;;i++,l++){var u,d,f=i<e.length?(typeof e[i])[0]:"";if(l>=r.length||"o"==(d=(typeof(u=r[l]))[0]))return!s||("u"==f?i>n&&!o:""==f!=o);if("u"==d){if(!s||"u"!=f)return!1}else if(s)if(f==d)if(i<=n){if(u!=e[i])return!1}else{if(o?u>e[i]:u<e[i])return!1;u!=e[i]&&(s=!1)}else if("s"!=f&&"n"!=f){if(o||i<=n)return!1;s=!1,i--}else{if(i<=n||d<f!=o)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,i--)}}var c=[],h=c.pop.bind(c);for(l=1;l<e.length;l++){var p=e[l];c.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},i=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",s=(e,r,t,n)=>{var o=l(e,t);return a(n,o)||d(i(e,t,o,n)),f(e[t][o])},u=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},d=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),h=(c=e=>function(r,t,n,o){var a=w.I(r);return a&&a.then?a.then(e.bind(e,r,w.S[r],t,n,o)):e(r,w.S[r],t,n,o)})(((e,r,t,n,o)=>r&&w.o(r,t)?s(r,0,t,n):o())),p=c(((e,r,t,n,o)=>{var a=r&&w.o(r,t)&&u(r,t,n);return a?f(a):o()})),m={},v={92950:()=>h("default","react",[1,17,0,2],(()=>w.e(294).then((()=>()=>w(67294))))),12181:()=>h("default","react-dom",[1,17,0,2],(()=>w.e(935).then((()=>()=>w(73935))))),6848:()=>p("default","@patternfly/react-core",[1,4,276,8],(()=>Promise.all([w.e(453),w.e(776),w.e(613),w.e(836),w.e(435),w.e(555),w.e(187)]).then((()=>()=>w(53555))))),44518:()=>p("default","@patternfly/react-table",[1,4,113,3],(()=>Promise.all([w.e(958),w.e(453),w.e(613),w.e(51),w.e(111)]).then((()=>()=>w(85993))))),54025:()=>h("default","@scalprum/react-core",[0],(()=>Promise.all([w.e(958),w.e(218),w.e(981)]).then((()=>()=>w(93981))))),62012:()=>h("default","react-router-dom",[0],(()=>w.e(818).then((()=>()=>w(49818))))),65564:()=>p("default","axios",[2,0,27,2],(()=>Promise.all([w.e(764),w.e(669)]).then((()=>()=>w(9669))))),57223:()=>h("default","@unleash/proxy-client-react",[1,3,5,2],(()=>w.e(913).then((()=>()=>w(80913)))))},g={181:[12181],466:[6848,44518,54025,62012,65564],619:[57223],950:[92950]},w.f.consumes=(e,r)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(m,e))return r.push(m[e]);var t=r=>{m[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},n=r=>{delete m[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var o=v[e]();o.then?r.push(m[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{if("undefined"!=typeof document){var e={768:0};w.f.miniCss=(r,t)=>{e[r]?t.push(e[r]):0!==e[r]&&{384:1,420:1,433:1,619:1,987:1}[r]&&t.push(e[r]=(e=>new Promise(((r,t)=>{var n=w.miniCssF(e),o=w.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(l=t[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===e||o===r))return l}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var l;if((o=(l=a[n]).getAttribute("data-href"))===e||o===r)return l}})(n,o))return r();((e,r,t,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=t=>{if(a.onerror=a.onload=null,"load"===t.type)n();else{var l=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,a.parentNode&&a.parentNode.removeChild(a),o(s)}},a.href=r,document.head.appendChild(a)})(e,o,0,r,t)})))(r).then((()=>{e[r]=0}),(t=>{throw delete e[r],t})))}}})(),(()=>{var e={768:0};w.f.j=(r,t)=>{var n=w.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(181|950)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=w.p+w.u(r),l=new Error;w.l(a,(t=>{if(w.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,l,i]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in l)w.o(l,n)&&(w.m[n]=l[n]);i&&i(w)}for(r&&r(t);s<a.length;s++)o=a[s],w.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),w(31288)})();