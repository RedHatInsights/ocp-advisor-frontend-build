(()=>{var e,r,t,o,n,a,l,i,s,d,u,f,c,h,p,m,v,b,g={31288:(e,r,t)=>{document.getElementById("root").classList.add("ocp-advisor"),window.insights&&window.insights.chrome&&window.insights.chrome.isChrome2||Promise.all([t.e(701),t.e(77),t.e(557),t.e(950),t.e(181),t.e(818),t.e(433)]).then(t.bind(t,36491))}},y={};function w(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,w),t.loaded=!0,t.exports}w.m=g,w.c=y,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>"js/"+({9:"RecsList",339:"Workload",384:"RulesTable",420:"ClustersList",488:"WorkloadsList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+w.h()+".js",w.miniCssF=e=>"css/"+({339:"Workload",384:"RulesTable",420:"ClustersList",488:"WorkloadsList",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+{339:"6cb3457d1c68dc949134",384:"93205860ba4d4885f2fa",420:"8b9b0a858fb4e5d71b27",433:"73a7ea9013b4178e9e8e",488:"689aa8a73ed565c64a28",619:"f2b916cf3a06bcf92317",987:"2fd434ef497171ebd463"}[e]+".css",w.h=()=>"3fba2b1fe5dd6705131a",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ocpAdvisor:",w.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var l,i;if(void 0!==n)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+n){l=u;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,w.nc&&l.setAttribute("nonce",w.nc),l.setAttribute("data-webpack",r+n),l.src=t),e[t]=[o];var f=(r,o)=>{l.onerror=l.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),r)return r(o)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),i&&document.head.appendChild(l)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},r={};w.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var a=w.S[t],l="ocpAdvisor",i=(e,r,t,o)=>{var n=a[e]=a[e]||{},i=n[r];(!i||!i.loaded&&(!o!=!i.eager?o:l>i.from))&&(n[r]={get:t,from:l,eager:!!o})},s=[];return"default"===t&&(i("@patternfly/react-core","4.278.0",(()=>Promise.all([w.e(453),w.e(776),w.e(613),w.e(701),w.e(630),w.e(555),w.e(950),w.e(181),w.e(566)]).then((()=>()=>w(53555))))),i("@patternfly/react-table","4.113.6",(()=>Promise.all([w.e(958),w.e(453),w.e(613),w.e(701),w.e(77),w.e(51),w.e(950),w.e(181),w.e(224)]).then((()=>()=>w(85993))))),i("@scalprum/react-core","0.5.1",(()=>Promise.all([w.e(958),w.e(218),w.e(77),w.e(981),w.e(950),w.e(149)]).then((()=>()=>w(93981))))),i("@unleash/proxy-client-react","3.5.2",(()=>Promise.all([w.e(913),w.e(950)]).then((()=>()=>w(80913))))),i("axios","0.27.2",(()=>Promise.all([w.e(976),w.e(669),w.e(155)]).then((()=>()=>w(9669))))),i("lodash","4.17.21",(()=>w.e(486).then((()=>()=>w(96486))))),i("react-dom","17.0.2",(()=>Promise.all([w.e(935),w.e(950)]).then((()=>()=>w(73935))))),i("react-router-dom","6.8.1",(()=>Promise.all([w.e(689),w.e(950)]).then((()=>()=>w(49818))))),i("react","17.0.2",(()=>w.e(294).then((()=>()=>w(67294)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),w.p="/beta/apps/ocp-advisor/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},o=(e,r)=>{e=t(e),r=t(r);for(var o=0;;){if(o>=e.length)return o<r.length&&"u"!=(typeof r[o])[0];var n=e[o],a=(typeof n)[0];if(o>=r.length)return"u"==a;var l=r[o],i=(typeof l)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&n!=l)return n<l;o++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(i=e[a]))[0]?"-":(o>0?".":"")+(o=2,i);return t}var l=[];for(a=1;a<e.length;a++){var i=e[a];l.push(0===i?"not("+s()+")":1===i?"("+s()+" || "+s()+")":2===i?l.pop()+" "+l.pop():n(i))}return s();function s(){return l.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var o=e[0],n=o<0;n&&(o=-o-1);for(var l=0,i=1,s=!0;;i++,l++){var d,u,f=i<e.length?(typeof e[i])[0]:"";if(l>=r.length||"o"==(u=(typeof(d=r[l]))[0]))return!s||("u"==f?i>o&&!n:""==f!=n);if("u"==u){if(!s||"u"!=f)return!1}else if(s)if(f==u)if(i<=o){if(d!=e[i])return!1}else{if(n?d>e[i]:d<e[i])return!1;d!=e[i]&&(s=!1)}else if("s"!=f&&"n"!=f){if(n||i<=o)return!1;s=!1,i--}else{if(i<=o||u<f!=n)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,i--)}}var c=[],h=c.pop.bind(c);for(l=1;l<e.length;l++){var p=e[l];c.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&o(e,r)?r:e),0)},i=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",s=(e,r,t,o)=>{var n=l(e,t);return a(o,n)||u(i(e,t,n,o)),f(e[t][n])},d=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!a(t,r)||e&&!o(e,r)?e:r),0))&&n[r]},u=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),h=(c=e=>function(r,t,o,n){var a=w.I(r);return a&&a.then?a.then(e.bind(e,r,w.S[r],t,o,n)):e(r,w.S[r],t,o,n)})(((e,r,t,o,n)=>r&&w.o(r,t)?s(r,0,t,o):n())),p=c(((e,r,t,o,n)=>{var a=r&&w.o(r,t)&&d(r,t,o);return a?f(a):n()})),m={},v={92950:()=>h("default","react",[1,17,0,2],(()=>w.e(294).then((()=>()=>w(67294))))),12181:()=>h("default","react-dom",[1,17,0,2],(()=>w.e(935).then((()=>()=>w(73935))))),15021:()=>p("default","@patternfly/react-core",[1,4,278,0],(()=>Promise.all([w.e(453),w.e(776),w.e(613),w.e(630),w.e(555),w.e(691)]).then((()=>()=>w(53555))))),20535:()=>p("default","@patternfly/react-table",[1,4,113,6],(()=>Promise.all([w.e(958),w.e(453),w.e(613),w.e(51),w.e(764)]).then((()=>()=>w(85993))))),54025:()=>h("default","@scalprum/react-core",[0],(()=>Promise.all([w.e(958),w.e(218),w.e(981)]).then((()=>()=>w(93981))))),57223:()=>h("default","@unleash/proxy-client-react",[1,3,5,2],(()=>w.e(913).then((()=>()=>w(80913))))),62012:()=>h("default","react-router-dom",[0],(()=>w.e(689).then((()=>()=>w(49818))))),65564:()=>p("default","axios",[2,0,27,2],(()=>Promise.all([w.e(976),w.e(669)]).then((()=>()=>w(9669))))),44439:()=>p("default","lodash",[1,4,17,21],(()=>w.e(486).then((()=>()=>w(96486)))))},b={181:[12181],366:[44439],818:[15021,20535,54025,57223,62012,65564],950:[92950]},w.f.consumes=(e,r)=>{w.o(b,e)&&b[e].forEach((e=>{if(w.o(m,e))return r.push(m[e]);var t=r=>{m[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},o=r=>{delete m[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var n=v[e]();n.then?r.push(m[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}))},(()=>{if("undefined"!=typeof document){var e={768:0};w.f.miniCss=(r,t)=>{e[r]?t.push(e[r]):0!==e[r]&&{339:1,384:1,420:1,433:1,488:1,619:1,987:1}[r]&&t.push(e[r]=(e=>new Promise(((r,t)=>{var o=w.miniCssF(e),n=w.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(l=t[o]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===r))return l}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var l;if((n=(l=a[o]).getAttribute("data-href"))===e||n===r)return l}})(o,n))return r();((e,r,t,o,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=t=>{if(a.onerror=a.onload=null,"load"===t.type)o();else{var l=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,a.parentNode&&a.parentNode.removeChild(a),n(s)}},a.href=r,document.head.appendChild(a)})(e,n,0,r,t)})))(r).then((()=>{e[r]=0}),(t=>{throw delete e[r],t})))}}})(),(()=>{var e={768:0};w.f.j=(r,t)=>{var o=w.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(181|950)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=w.p+w.u(r),l=new Error;w.l(a,(t=>{if(w.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,l,i]=t,s=0;if(a.some((r=>0!==e[r]))){for(o in l)w.o(l,o)&&(w.m[o]=l[o]);i&&i(w)}for(r&&r(t);s<a.length;s++)n=a[s],w.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),w(31288)})();
//# sourceMappingURL=../sourcemaps/App.5598303c2cc16c7219c98a15854adf9c.js.map