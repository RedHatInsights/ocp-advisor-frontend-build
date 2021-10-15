var ocpAdvisor;(()=>{"use strict";var e,r,t,a,n,o,i,d,l,f,s,u,c,h,p,v,b,m,g,y,w={15394:(e,r,t)=>{var a={"./RootApp":()=>Promise.all([t.e(410),t.e(252),t.e(736),t.e(264),t.e(644),t.e(530),t.e(816),t.e(412)]).then((()=>()=>t(28412)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a=t.S.default,n="default";if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>n,init:()=>o})}},P={};function O(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={id:e,loaded:!1,exports:{}};return w[e].call(t.exports,t,t.exports,O),t.loaded=!0,t.exports}O.m=w,O.c=P,e=[],O.O=(r,t,a,n)=>{if(!t){var o=1/0;for(f=0;f<e.length;f++){for(var[t,a,n]=e[f],i=!0,d=0;d<t.length;d++)(!1&n||o>=n)&&Object.keys(O.O).every((e=>O.O[e](t[d])))?t.splice(d--,1):(i=!1,n<o&&(o=n));if(i){e.splice(f--,1);var l=a();void 0!==l&&(r=l)}}return r}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[t,a,n]},O.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return O.d(r,{a:r}),r},O.d=(e,r)=>{for(var t in r)O.o(r,t)&&!O.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},O.f={},O.e=e=>Promise.all(Object.keys(O.f).reduce(((r,t)=>(O.f[t](e,r),r)),[])),O.u=e=>"js/"+({9:"RecsList",252:"rhcsVendor",293:"reactVendor",384:"RulesTable",410:"pfVendor",619:"ClusterDetails",736:"vendor",987:"Recommendation"}[e]||e)+"."+{9:"bace3dc49a87e7d9df60",212:"07a84a4c6c3b4759563a",252:"73f591899c6e1dd5cd74",264:"b98b1bbacc7531295a8c",293:"5b007bf42205f8004234",384:"fcefb99475e18c9361da",410:"47d310d79c7e02015ba6",412:"d4782e8796709a3d4731",530:"fe03bd4d72a577516489",545:"3d568e4e76db75933072",619:"ad19b4b56d5acd16d9ee",644:"a6ad277d63012fe30811",736:"10f45c4f7a709f6b3c00",788:"fba6893d511dddda05b5",816:"cc0b64035e5ca1f69276",908:"82acf3937316056f45c6",987:"34416dbcddd294da52e0",990:"7e8267f57e6a8c225978"}[e]+".js",O.miniCssF=e=>"css/"+({252:"rhcsVendor",410:"pfVendor",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+{252:"d9c1cd6eabbf305eadcb",410:"24d1c5d3795ed24cf75e",619:"a693c88044af1a54d07a",816:"081122ebbe4540ab1349",987:"89b694462581021e2f17"}[e]+".css",O.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),O.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="ocp-advisor-frontend:",O.l=(e,a,n,o)=>{if(r[e])r[e].push(a);else{var i,d;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==t+n){i=s;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,O.nc&&i.setAttribute("nonce",O.nc),i.setAttribute("data-webpack",t+n),i.src=e),r[e]=[a];var u=(t,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),t)return t(a)},c=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),d&&document.head.appendChild(i)}},O.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},O.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{O.S={};var e={},r={};O.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];O.o(O.S,t)||(O.S[t]={});var o=O.S[t],i="ocp-advisor-frontend",d=(e,r,t,a)=>{var n=o[e]=o[e]||{},d=n[r];(!d||!d.loaded&&(!a!=!d.eager?a:i>d.from))&&(n[r]={get:t,from:i,eager:!!a})},l=[];switch(t){case"default":d("@patternfly/react-core","4.135.0",(()=>Promise.all([O.e(410),O.e(736),O.e(264),O.e(644)]).then((()=>()=>O(62308))))),d("@patternfly/react-table","4.29.0",(()=>Promise.all([O.e(410),O.e(736),O.e(264),O.e(644),O.e(788)]).then((()=>()=>O(80361))))),d("@scalprum/react-core","0.1.1",(()=>Promise.all([O.e(736),O.e(264),O.e(644),O.e(530)]).then((()=>()=>O(25977))))),d("react-dom","17.0.2",(()=>Promise.all([O.e(293),O.e(736),O.e(264)]).then((()=>()=>O(73935))))),d("react-redux","7.2.4",(()=>Promise.all([O.e(736),O.e(264),O.e(644)]).then((()=>()=>O(14494))))),d("react-router-dom","5.2.0",(()=>Promise.all([O.e(736),O.e(264)]).then((()=>()=>O(77382))))),d("react","17.0.2",(()=>Promise.all([O.e(293),O.e(736)]).then((()=>()=>O(67294))))),d("redux","4.1.0",(()=>O.e(736).then((()=>()=>O(97779)))))}return e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),O.p="/beta/apps/ocp-advisor/",a=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},n=(e,r)=>{e=a(e),r=a(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],o=(typeof n)[0];if(t>=r.length)return"u"==o;var i=r[t],d=(typeof i)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;t++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,t+="u"==(typeof(d=e[n]))[0]?"-":(a>0?".":"")+(a=2,d);return t}var i=[];for(n=1;n<e.length;n++){var d=e[n];i.push(0===d?"not("+l()+")":1===d?"("+l()+" || "+l()+")":2===d?i.pop()+" "+i.pop():o(d))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=a(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var o=0,d=1,l=!0;;d++,o++){var f,s,u=d<e.length?(typeof e[d])[0]:"";if(o>=r.length||"o"==(s=(typeof(f=r[o]))[0]))return!l||("u"==u?d>t&&!n:""==u!=n);if("u"==s){if(!l||"u"!=u)return!1}else if(l)if(u==s)if(d<=t){if(f!=e[d])return!1}else{if(n?f>e[d]:f<e[d])return!1;f!=e[d]&&(l=!1)}else if("s"!=u&&"n"!=u){if(n||d<=t)return!1;l=!1,d--}else{if(d<=t||s<u!=n)return!1;l=!1}else"s"!=u&&"n"!=u&&(l=!1,d--)}}var c=[],h=c.pop.bind(c);for(o=1;o<e.length;o++){var p=e[o];c.push(1==p?h()|h():2==p?h()&h():p?i(p,r):!h())}return!!h()},d=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",f=(e,r,t,a)=>{var n=d(e,t);return i(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(l(t,n,a)),u(e[t][n])},s=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!i(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},u=e=>(e.loaded=1,e.get()),h=(c=e=>function(r,t,a,n){var o=O.I(r);return o&&o.then?o.then(e.bind(e,r,O.S[r],t,a,n)):e(r,O.S[r],t,a,n)})(((e,r,t,a,n)=>r&&O.o(r,t)?f(r,0,t,a):n())),p=c(((e,r,t,a,n)=>{var o=r&&O.o(r,t)&&s(r,t,a);return o?u(o):n()})),v={},b={93264:()=>h("default","react",[4,17,0,2],(()=>Promise.all([O.e(293),O.e(736)]).then((()=>()=>O(67294))))),3644:()=>h("default","react-dom",[4,17,0,2],(()=>Promise.all([O.e(293),O.e(736)]).then((()=>()=>O(73935))))),58788:()=>p("default","@patternfly/react-core",[4,4,135,0],(()=>Promise.all([O.e(410),O.e(736)]).then((()=>()=>O(62308))))),16530:()=>p("default","react-router-dom",[4,5,2,0],(()=>O.e(736).then((()=>()=>O(77382))))),61919:()=>p("default","redux",[4,4,1,0],(()=>O.e(736).then((()=>()=>O(97779))))),88931:()=>p("default","react-redux",[4,7,2,4],(()=>O.e(736).then((()=>()=>O(14494))))),54025:()=>h("default","@scalprum/react-core",[0],(()=>O.e(736).then((()=>()=>O(25977))))),94550:()=>p("default","@patternfly/react-table",[4,4,29,0],(()=>Promise.all([O.e(410),O.e(736),O.e(788)]).then((()=>()=>O(80361)))))},m={264:[93264],530:[16530],644:[3644],788:[58788],816:[61919,88931],908:[54025,94550]},O.f.consumes=(e,r)=>{O.o(m,e)&&m[e].forEach((e=>{if(O.o(v,e))return r.push(v[e]);var t=r=>{v[e]=0,O.m[e]=t=>{delete O.c[e],t.exports=r()}},a=r=>{delete v[e],O.m[e]=t=>{throw delete O.c[e],r}};try{var n=b[e]();n.then?r.push(v[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},g=e=>new Promise(((r,t)=>{var a=O.miniCssF(e),n=O.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var n=(i=t[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var i;if((n=(i=o[a]).getAttribute("data-href"))===e||n===r)return i}})(a,n))return r();((e,r,t,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.href||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=d,n.parentNode.removeChild(n),a(l)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),y={470:0},O.f.miniCss=(e,r)=>{y[e]?r.push(y[e]):0!==y[e]&&{252:1,410:1,619:1,816:1,987:1}[e]&&r.push(y[e]=g(e).then((()=>{y[e]=0}),(r=>{throw delete y[e],r})))},(()=>{var e={470:0,183:0};O.f.j=(r,t)=>{var a=O.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(183|264|530|644|788)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=O.p+O.u(r),i=new Error;O.l(o,(t=>{if(O.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}},O.O.j=r=>0===e[r];var r=(r,t)=>{var a,n,[o,i,d]=t,l=0;if(o.some((r=>0!==e[r]))){for(a in i)O.o(i,a)&&(O.m[a]=i[a]);if(d)var f=d(O)}for(r&&r(t);l<o.length;l++)n=o[l],O.o(e,n)&&e[n]&&e[n][0](),e[o[l]]=0;return O.O(f)},t=self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S=O.O(void 0,[183],(()=>O(15394)));S=O.O(S),ocpAdvisor=S})();