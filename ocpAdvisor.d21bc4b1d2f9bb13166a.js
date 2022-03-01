var ocpAdvisor;(()=>{"use strict";var e,r,t,a,n,o,i,l,d,f,s,c,u,h,p,b,v,m,g,y,w={15394:(e,r,t)=>{var a={"./RootApp":()=>Promise.all([t.e(410),t.e(252),t.e(736),t.e(264),t.e(644),t.e(530),t.e(484),t.e(412)]).then((()=>()=>t(28412)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a=t.S.default,n="default";if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>n,init:()=>o})}},P={};function O(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={id:e,loaded:!1,exports:{}};return w[e].call(t.exports,t,t.exports,O),t.loaded=!0,t.exports}O.m=w,O.c=P,e=[],O.O=(r,t,a,n)=>{if(!t){var o=1/0;for(f=0;f<e.length;f++){for(var[t,a,n]=e[f],i=!0,l=0;l<t.length;l++)(!1&n||o>=n)&&Object.keys(O.O).every((e=>O.O[e](t[l])))?t.splice(l--,1):(i=!1,n<o&&(o=n));if(i){e.splice(f--,1);var d=a();void 0!==d&&(r=d)}}return r}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[t,a,n]},O.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return O.d(r,{a:r}),r},O.d=(e,r)=>{for(var t in r)O.o(r,t)&&!O.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},O.f={},O.e=e=>Promise.all(Object.keys(O.f).reduce(((r,t)=>(O.f[t](e,r),r)),[])),O.u=e=>"js/"+({9:"RecsList",252:"rhcsVendor",293:"reactVendor",384:"RulesTable",410:"pfVendor",420:"ClustersList",619:"ClusterDetails",736:"vendor",987:"Recommendation"}[e]||e)+"."+{9:"0db5fcf473198e71cbbd",23:"b0e4c37ffb5307a09fd6",252:"f01c94d4fa26df78493a",264:"4c33c9666cf7d49a61c0",293:"88b17bea4b30a6ed4aaf",303:"4e6c32e822bd534e2c6b",384:"dca3b797e0f441b5c805",410:"c3e3c91bdf73060518a2",412:"48c0fb0107f94ff352d6",420:"1c47af5f0a0357ba65d4",484:"77786243c42a6624fa13",530:"4bc6ba4770450f147940",556:"0cc6a19ac04f8b5482ff",606:"57ca12dc43a0a75fbd70",619:"c2a670fb2c41fb7201e9",644:"eb1b62fc9fb4fabd18fb",661:"4d4b4820901d001c8033",670:"99a92dda501ac4f2843e",736:"630d6aa1f4bf66865454",913:"c539c05e6784dc7e7ff1",987:"4340ae27026bd5c91a11"}[e]+".js",O.miniCssF=e=>"css/"+({252:"rhcsVendor",384:"RulesTable",410:"pfVendor",619:"ClusterDetails",987:"Recommendation"}[e]||e)+"."+{252:"0ab6b4651dd02de8dc0b",384:"288b7dc6002273e46e9c",410:"39bd061507299880e16c",484:"e3619e3d608fb21edd2e",606:"9347b7587434caad6c66",619:"a693c88044af1a54d07a",987:"c0c3397f20847532735d"}[e]+".css",O.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),O.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="ocp-advisor-frontend:",O.l=(e,a,n,o)=>{if(r[e])r[e].push(a);else{var i,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var s=d[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==t+n){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,O.nc&&i.setAttribute("nonce",O.nc),i.setAttribute("data-webpack",t+n),i.src=e),r[e]=[a];var c=(t,a)=>{i.onerror=i.onload=null,clearTimeout(u);var n=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),t)return t(a)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},O.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},O.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{O.S={};var e={},r={};O.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];O.o(O.S,t)||(O.S[t]={});var o=O.S[t],i="ocp-advisor-frontend",l=(e,r,t,a)=>{var n=o[e]=o[e]||{},l=n[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(n[r]={get:t,from:i,eager:!!a})},d=[];return"default"===t&&(l("@patternfly/react-core","4.182.0",(()=>Promise.all([O.e(410),O.e(736),O.e(264),O.e(644)]).then((()=>()=>O(11441))))),l("@patternfly/react-table","4.51.0",(()=>Promise.all([O.e(410),O.e(736),O.e(264),O.e(644),O.e(556)]).then((()=>()=>O(91644))))),l("@scalprum/react-core","0.1.1",(()=>Promise.all([O.e(736),O.e(264),O.e(644),O.e(530)]).then((()=>()=>O(25977))))),l("axios","0.21.4",(()=>O.e(736).then((()=>()=>O(9669))))),l("react-dom","17.0.2",(()=>Promise.all([O.e(293),O.e(736),O.e(264)]).then((()=>()=>O(73935))))),l("react-redux","7.2.4",(()=>Promise.all([O.e(736),O.e(264),O.e(644)]).then((()=>()=>O(14494))))),l("react-router-dom","5.2.0",(()=>Promise.all([O.e(736),O.e(264)]).then((()=>()=>O(77382))))),l("react","17.0.2",(()=>Promise.all([O.e(293),O.e(736)]).then((()=>()=>O(67294))))),l("redux","4.1.0",(()=>O.e(736).then((()=>()=>O(97779)))))),e[t]=d.length?Promise.all(d).then((()=>e[t]=1)):1}}})(),O.p="/beta/apps/ocp-advisor/",a=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},n=(e,r)=>{e=a(e),r=a(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],o=(typeof n)[0];if(t>=r.length)return"u"==o;var i=r[t],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;t++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,t+="u"==(typeof(l=e[n]))[0]?"-":(a>0?".":"")+(a=2,l);return t}var i=[];for(n=1;n<e.length;n++){var l=e[n];i.push(0===l?"not("+d()+")":1===l?"("+d()+" || "+d()+")":2===l?i.pop()+" "+i.pop():o(l))}return d();function d(){return i.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=a(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var o=0,l=1,d=!0;;l++,o++){var f,s,c=l<e.length?(typeof e[l])[0]:"";if(o>=r.length||"o"==(s=(typeof(f=r[o]))[0]))return!d||("u"==c?l>t&&!n:""==c!=n);if("u"==s){if(!d||"u"!=c)return!1}else if(d)if(c==s)if(l<=t){if(f!=e[l])return!1}else{if(n?f>e[l]:f<e[l])return!1;f!=e[l]&&(d=!1)}else if("s"!=c&&"n"!=c){if(n||l<=t)return!1;d=!1,l--}else{if(l<=t||s<c!=n)return!1;d=!1}else"s"!=c&&"n"!=c&&(d=!1,l--)}}var u=[],h=u.pop.bind(u);for(o=1;o<e.length;o++){var p=e[o];u.push(1==p?h()|h():2==p?h()&h():p?i(p,r):!h())}return!!h()},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},d=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",f=(e,r,t,a)=>{var n=l(e,t);return i(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(d(t,n,a)),c(e[t][n])},s=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!i(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},c=e=>(e.loaded=1,e.get()),h=(u=e=>function(r,t,a,n){var o=O.I(r);return o&&o.then?o.then(e.bind(e,r,O.S[r],t,a,n)):e(r,O.S[r],t,a,n)})(((e,r,t,a,n)=>r&&O.o(r,t)?f(r,0,t,a):n())),p=u(((e,r,t,a,n)=>{var o=r&&O.o(r,t)&&s(r,t,a);return o?c(o):n()})),b={},v={93264:()=>h("default","react",[4,17,0,2],(()=>Promise.all([O.e(293),O.e(736)]).then((()=>()=>O(67294))))),3644:()=>h("default","react-dom",[4,17,0,2],(()=>Promise.all([O.e(293),O.e(736)]).then((()=>()=>O(73935))))),52384:()=>p("default","@patternfly/react-core",[1,4,182,0],(()=>Promise.all([O.e(410),O.e(736)]).then((()=>()=>O(11441))))),16530:()=>p("default","react-router-dom",[4,5,2,0],(()=>O.e(736).then((()=>()=>O(77382))))),11521:()=>p("default","axios",[2,0,21,4],(()=>O.e(736).then((()=>()=>O(9669))))),61919:()=>p("default","redux",[4,4,1,0],(()=>O.e(736).then((()=>()=>O(97779))))),88931:()=>p("default","react-redux",[4,7,2,4],(()=>O.e(736).then((()=>()=>O(14494))))),30097:()=>p("default","@patternfly/react-table",[1,4,51,0],(()=>Promise.all([O.e(410),O.e(736),O.e(556)]).then((()=>()=>O(91644))))),54025:()=>h("default","@scalprum/react-core",[0],(()=>O.e(736).then((()=>()=>O(25977)))))},m={264:[93264],303:[30097],484:[11521,61919,88931],530:[16530],556:[52384],619:[54025],644:[3644]},O.f.consumes=(e,r)=>{O.o(m,e)&&m[e].forEach((e=>{if(O.o(b,e))return r.push(b[e]);var t=r=>{b[e]=0,O.m[e]=t=>{delete O.c[e],t.exports=r()}},a=r=>{delete b[e],O.m[e]=t=>{throw delete O.c[e],r}};try{var n=v[e]();n.then?r.push(b[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},g=e=>new Promise(((r,t)=>{var a=O.miniCssF(e),n=O.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var n=(i=t[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var i;if((n=(i=o[a]).getAttribute("data-href"))===e||n===r)return i}})(a,n))return r();((e,r,t,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,n.parentNode.removeChild(n),a(d)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),y={470:0},O.f.miniCss=(e,r)=>{y[e]?r.push(y[e]):0!==y[e]&&{252:1,384:1,410:1,484:1,606:1,619:1,987:1}[e]&&r.push(y[e]=g(e).then((()=>{y[e]=0}),(r=>{throw delete y[e],r})))},(()=>{var e={470:0,145:0};O.f.j=(r,t)=>{var a=O.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(145|264|530|556|644)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=O.p+O.u(r),i=new Error;O.l(o,(t=>{if(O.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}},O.O.j=r=>0===e[r];var r=(r,t)=>{var a,n,[o,i,l]=t,d=0;if(o.some((r=>0!==e[r]))){for(a in i)O.o(i,a)&&(O.m[a]=i[a]);if(l)var f=l(O)}for(r&&r(t);d<o.length;d++)n=o[d],O.o(e,n)&&e[n]&&e[n][0](),e[o[d]]=0;return O.O(f)},t=self.webpackChunkocp_advisor_frontend=self.webpackChunkocp_advisor_frontend||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S=O.O(void 0,[145],(()=>O(15394)));S=O.O(S),ocpAdvisor=S})();