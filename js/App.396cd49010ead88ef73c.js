(()=>{var e,r,t,a,n,o,l,d,i,f,s,c,u,h,p,b,m,v,g,y,w={31288:(e,r,t)=>{document.getElementById("root").classList.add("ocp-advisor"),window.insights&&window.insights.chrome&&window.insights.chrome.isChrome2||Promise.all([t.e(410),t.e(252),t.e(736),t.e(264),t.e(644),t.e(530),t.e(414),t.e(491)]).then(t.bind(t,36491))}},P={};function O(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={id:e,loaded:!1,exports:{}};return w[e].call(t.exports,t,t.exports,O),t.loaded=!0,t.exports}O.m=w,O.c=P,e=[],O.O=(r,t,a,n)=>{if(!t){var o=1/0;for(f=0;f<e.length;f++){for(var[t,a,n]=e[f],l=!0,d=0;d<t.length;d++)(!1&n||o>=n)&&Object.keys(O.O).every((e=>O.O[e](t[d])))?t.splice(d--,1):(l=!1,n<o&&(o=n));if(l){e.splice(f--,1);var i=a();void 0!==i&&(r=i)}}return r}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[t,a,n]},O.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return O.d(r,{a:r}),r},O.d=(e,r)=>{for(var t in r)O.o(r,t)&&!O.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},O.f={},O.e=e=>Promise.all(Object.keys(O.f).reduce(((r,t)=>(O.f[t](e,r),r)),[])),O.u=e=>"js/"+({9:"RecsList",252:"rhcsVendor",293:"reactVendor",384:"RulesTable",410:"pfVendor",420:"ClustersList",619:"ClusterDetails",736:"vendor",987:"Recommendation"}[e]||e)+"."+{9:"11ce8f80bf2e15e9af95",23:"71a1964a0b52b9d2835e",252:"fa3c8008b403226538f5",264:"4c33c9666cf7d49a61c0",293:"7dcbcbd3ed3437d86fb3",303:"456f0ff4c52078848be7",384:"87ff320a47eade3eb4fe",410:"be3a31b5f869a79f7124",414:"2bc41137e0ee4a95f027",420:"0b9ae75bbfd99a43972b",491:"2b8185cfe5f0601c8c84",530:"4bc6ba4770450f147940",619:"8b0aa9145cd03520fd65",644:"eb1b62fc9fb4fabd18fb",661:"f13ccbcf2708129b84f7",736:"535898245a26cea36cd7",788:"6d224ef0be2b08d145ea",873:"84424b881bc91e5965a1",913:"bbb0983913b07482d2fc",985:"bc70ad9fd3ea2f6aeec2",987:"0108b1cecd0aeecaff8d"}[e]+".js",O.miniCssF=e=>"css/"+({252:"rhcsVendor",384:"RulesTable",410:"pfVendor",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+{252:"925ed7d2da9e4924dbf8",384:"288b7dc6002273e46e9c",410:"1905b9fa3c3f3e97bd32",414:"9ac0f6d0035d66afe3d7",619:"a693c88044af1a54d07a",987:"c0c3397f20847532735d"}[e]+".css",O.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),O.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="ocp-advisor-frontend:",O.l=(e,a,n,o)=>{if(r[e])r[e].push(a);else{var l,d;if(void 0!==n)for(var i=document.getElementsByTagName("script"),f=0;f<i.length;f++){var s=i[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==t+n){l=s;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,O.nc&&l.setAttribute("nonce",O.nc),l.setAttribute("data-webpack",t+n),l.src=e),r[e]=[a];var c=(t,a)=>{l.onerror=l.onload=null,clearTimeout(u);var n=r[e];if(delete r[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(a))),t)return t(a)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),d&&document.head.appendChild(l)}},O.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},O.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{O.S={};var e={},r={};O.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];O.o(O.S,t)||(O.S[t]={});var o=O.S[t],l="ocp-advisor-frontend",d=(e,r,t,a)=>{var n=o[e]=o[e]||{},d=n[r];(!d||!d.loaded&&(!a!=!d.eager?a:l>d.from))&&(n[r]={get:t,from:l,eager:!!a})},i=[];return"default"===t&&(d("@patternfly/react-core","4.135.0",(()=>Promise.all([O.e(410),O.e(736),O.e(264),O.e(644)]).then((()=>()=>O(62308))))),d("@patternfly/react-table","4.29.0",(()=>Promise.all([O.e(410),O.e(736),O.e(264),O.e(644),O.e(788)]).then((()=>()=>O(80361))))),d("@scalprum/react-core","0.1.1",(()=>Promise.all([O.e(736),O.e(264),O.e(644),O.e(530)]).then((()=>()=>O(25977))))),d("axios","0.21.4",(()=>O.e(736).then((()=>()=>O(9669))))),d("lodash","4.17.21",(()=>O.e(736).then((()=>()=>O(96486))))),d("react-dom","17.0.2",(()=>Promise.all([O.e(293),O.e(736),O.e(264)]).then((()=>()=>O(73935))))),d("react-redux","7.2.4",(()=>Promise.all([O.e(736),O.e(264),O.e(644)]).then((()=>()=>O(14494))))),d("react-router-dom","5.2.0",(()=>Promise.all([O.e(736),O.e(264)]).then((()=>()=>O(77382))))),d("react","17.0.2",(()=>Promise.all([O.e(293),O.e(736)]).then((()=>()=>O(67294))))),d("redux","4.1.0",(()=>O.e(736).then((()=>()=>O(97779)))))),e[t]=i.length?Promise.all(i).then((()=>e[t]=1)):1}}})(),O.p="/beta/apps/ocp-advisor/",a=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},n=(e,r)=>{e=a(e),r=a(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],o=(typeof n)[0];if(t>=r.length)return"u"==o;var l=r[t],d=(typeof l)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;t++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,t+="u"==(typeof(d=e[n]))[0]?"-":(a>0?".":"")+(a=2,d);return t}var l=[];for(n=1;n<e.length;n++){var d=e[n];l.push(0===d?"not("+i()+")":1===d?"("+i()+" || "+i()+")":2===d?l.pop()+" "+l.pop():o(d))}return i();function i(){return l.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=a(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var o=0,d=1,i=!0;;d++,o++){var f,s,c=d<e.length?(typeof e[d])[0]:"";if(o>=r.length||"o"==(s=(typeof(f=r[o]))[0]))return!i||("u"==c?d>t&&!n:""==c!=n);if("u"==s){if(!i||"u"!=c)return!1}else if(i)if(c==s)if(d<=t){if(f!=e[d])return!1}else{if(n?f>e[d]:f<e[d])return!1;f!=e[d]&&(i=!1)}else if("s"!=c&&"n"!=c){if(n||d<=t)return!1;i=!1,d--}else{if(d<=t||s<c!=n)return!1;i=!1}else"s"!=c&&"n"!=c&&(i=!1,d--)}}var u=[],h=u.pop.bind(u);for(o=1;o<e.length;o++){var p=e[o];u.push(1==p?h()|h():2==p?h()&h():p?l(p,r):!h())}return!!h()},d=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},i=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",f=(e,r,t,a)=>{var n=d(e,t);return l(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(i(t,n,a)),c(e[t][n])},s=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!l(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},c=e=>(e.loaded=1,e.get()),h=(u=e=>function(r,t,a,n){var o=O.I(r);return o&&o.then?o.then(e.bind(e,r,O.S[r],t,a,n)):e(r,O.S[r],t,a,n)})(((e,r,t,a,n)=>r&&O.o(r,t)?f(r,0,t,a):n())),p=u(((e,r,t,a,n)=>{var o=r&&O.o(r,t)&&s(r,t,a);return o?c(o):n()})),b={},m={93264:()=>h("default","react",[4,17,0,2],(()=>Promise.all([O.e(293),O.e(736)]).then((()=>()=>O(67294))))),3644:()=>h("default","react-dom",[4,17,0,2],(()=>Promise.all([O.e(293),O.e(736)]).then((()=>()=>O(73935))))),16530:()=>p("default","react-router-dom",[4,5,2,0],(()=>O.e(736).then((()=>()=>O(77382))))),11521:()=>p("default","axios",[2,0,21,4],(()=>O.e(736).then((()=>()=>O(9669))))),61919:()=>p("default","redux",[4,4,1,0],(()=>O.e(736).then((()=>()=>O(97779))))),88931:()=>p("default","react-redux",[4,7,2,4],(()=>O.e(736).then((()=>()=>O(14494))))),58788:()=>p("default","@patternfly/react-core",[4,4,135,0],(()=>Promise.all([O.e(410),O.e(736)]).then((()=>()=>O(62308))))),94550:()=>p("default","@patternfly/react-table",[4,4,29,0],(()=>Promise.all([O.e(410),O.e(736),O.e(788)]).then((()=>()=>O(80361))))),54025:()=>h("default","@scalprum/react-core",[0],(()=>O.e(736).then((()=>()=>O(25977))))),44439:()=>p("default","lodash",[1,4,17,21],(()=>O.e(736).then((()=>()=>O(96486)))))},v={264:[93264],303:[94550],414:[11521,61919,88931],530:[16530],644:[3644],788:[58788],873:[54025],913:[44439]},O.f.consumes=(e,r)=>{O.o(v,e)&&v[e].forEach((e=>{if(O.o(b,e))return r.push(b[e]);var t=r=>{b[e]=0,O.m[e]=t=>{delete O.c[e],t.exports=r()}},a=r=>{delete b[e],O.m[e]=t=>{throw delete O.c[e],r}};try{var n=m[e]();n.then?r.push(b[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},g=e=>new Promise(((r,t)=>{var a=O.miniCssF(e),n=O.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var n=(l=t[a]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===r))return l}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var l;if((n=(l=o[a]).getAttribute("data-href"))===e||n===r)return l}})(a,n))return r();((e,r,t,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)t();else{var l=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.href||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=l,i.request=d,n.parentNode.removeChild(n),a(i)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),y={768:0},O.f.miniCss=(e,r)=>{y[e]?r.push(y[e]):0!==y[e]&&{252:1,384:1,410:1,414:1,619:1,987:1}[e]&&r.push(y[e]=g(e).then((()=>{y[e]=0}),(r=>{throw delete y[e],r})))},(()=>{var e={768:0,398:0};O.f.j=(r,t)=>{var a=O.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(264|398|530|644|788)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=O.p+O.u(r),l=new Error;O.l(o,(t=>{if(O.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}}),"chunk-"+r,r)}},O.O.j=r=>0===e[r];var r=(r,t)=>{var a,n,[o,l,d]=t,i=0;if(o.some((r=>0!==e[r]))){for(a in l)O.o(l,a)&&(O.m[a]=l[a]);if(d)var f=d(O)}for(r&&r(t);i<o.length;i++)n=o[i],O.o(e,n)&&e[n]&&e[n][0](),e[o[i]]=0;return O.O(f)},t=self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var k=O.O(void 0,[398],(()=>O(31288)));k=O.O(k)})();
//# sourceMappingURL=../sourcemaps/App.a99faadbe71818224a38cb6790595c94.js.map