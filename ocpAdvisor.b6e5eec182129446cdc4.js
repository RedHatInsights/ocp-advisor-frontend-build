var ocpAdvisor;(()=>{"use strict";var e,t,a,n,c,r,o,d,i,l,s,f,p,m,y,b,u,h,P,v,g,w,x,k,S={91877:(e,t,a)=>{var n={"./RootApp":()=>Promise.all([a.e(7794),a.e(164),a.e(9121),a.e(5149),a.e(9526),a.e(8416),a.e(1051),a.e(3996),a.e(8178)]).then((()=>()=>a(60167)))},c=(e,t)=>(a.R=t,t=a.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),a.R=void 0,t),r=(e,t)=>{if(a.S){var n="default",c=a.S[n];if(c&&c!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return a.S[n]=e,a.I(n,t)}};a.d(t,{get:()=>c,init:()=>r})}},C={};function T(e){var t=C[e];if(void 0!==t)return t.exports;var a=C[e]={id:e,loaded:!1,exports:{}};return S[e].call(a.exports,a,a.exports,T),a.loaded=!0,a.exports}T.m=S,T.c=C,T.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return T.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,T.t=function(a,n){if(1&n&&(a=this(a)),8&n)return a;if("object"==typeof a&&a){if(4&n&&a.__esModule)return a;if(16&n&&"function"==typeof a.then)return a}var c=Object.create(null);T.r(c);var r={};e=e||[null,t({}),t([]),t(t)];for(var o=2&n&&a;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>r[e]=()=>a[e]));return r.default=()=>a,T.d(c,r),c},T.d=(e,t)=>{for(var a in t)T.o(t,a)&&!T.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},T.f={},T.e=e=>Promise.all(Object.keys(T.f).reduce(((t,a)=>(T.f[a](e,t),t)),[])),T.u=e=>"js/"+({384:"RulesTable",2339:"Workload",6488:"WorkloadsList",7009:"RecsList",8178:"exposed-./RootApp",8987:"Recommendation",9420:"ClustersList",9619:"ClusterDetails"}[e]||e)+"."+{31:"59924773b7948a252717",49:"79e0cca2cd2bff445c0f",84:"c03c56f8fcfa56415fe8",97:"2c4f3db4ed2192732d16",111:"8f959650eba9f6e57c3d",164:"dcd8a317240c688558bb",182:"db2798b004ed486b21e7",244:"eb81a4baad30ec9f0c98",253:"89583ddbafdebf2281e3",323:"dc4dee8779f51f84e058",384:"430e149afed45073068a",393:"8ff015ab18841bb2d891",395:"496d8c8be5d64333dd6c",397:"46a79319815c182aa864",450:"be7f3f8a78d55355fc33",532:"7a3e6d3e29e52564da17",534:"3faa6959d3ba9c035728",544:"409be3c47a161b798b82",546:"3abbaa5ecbc4c2865a5a",696:"985ac008461e74764507",810:"17390aa6f04e2e7b9ce5",847:"3e8c58b3e027f2be5f1a",911:"659d1d590ac56a1f142c",921:"455bf393c0ee7bca04be",1024:"286d18ca46c03663cf9c",1028:"dc33f175ac4420698b76",1051:"7525bd4b51d999862b5a",1156:"fec1116a0b12c43d228f",1191:"d1d23bc3da0940305013",1201:"05810ba3d57b9316a5a9",1242:"24c915728b97c18981bf",1290:"7c120f90323cc2a69819",1468:"dd2fb6236ed500d2c8a8",1581:"25871fc4e30ba438c21e",1630:"3ec75b1cbd73175b9db9",1640:"9be49892d093b3821e4d",1917:"6f23de7ac90fd00f6b05",2006:"4d41233597219df31340",2031:"659e520fad71cbb7e811",2065:"26030c47e58578f69059",2079:"2f270a0bda4a0aaf7f2c",2080:"207d94741897db944ae1",2097:"deba839ea16132f7bb33",2130:"494879ef242cce729060",2136:"f1184a783c3e590557d4",2165:"8be4d71b4e62c7e323f5",2189:"cd0e44c8d7ba1038c2d1",2293:"9f262c2f7ed4f2e096fa",2317:"dcaf935d6c809023c88b",2339:"0f3790ab6a949ec8ad4c",2359:"8752d3d379b47f080ce5",2455:"5ef4bf1d3f73476b9451",2471:"62709000e3001bdefedb",2632:"5e81b5450c6a1a1d8864",2645:"a7613d11c30231c3aed7",2677:"9dd02cd6cb957130952c",2694:"52394c924ec63edd68d2",2713:"503e5c25d815e406c7e4",2842:"ee8d7a150ec85db24efb",2843:"a06b0d064b74c486ab69",2873:"425174f8da4edfdad85e",2902:"9f6e6e067ca698b548b4",2984:"d61459318461eeb3161e",3008:"2fb4657da91e4e25059c",3151:"0a50d6cae5e036ff4264",3174:"6e58cb78c44cad326819",3224:"04b28533d0fad1d1ac69",3264:"9c6b461dfc2d717b75d5",3321:"c88de59c007e25931097",3397:"379e8cacf0657765ada5",3400:"400ace05ba55ba124a26",3473:"3c0095aac8b1c0ab6302",3536:"ac46b0e34c0bdc906b46",3663:"c3a26852e579f8eb2145",3679:"310fba08799c310a6451",3688:"949ad011172adba7c613",3729:"c039e8e774b244389cd9",3768:"dfe445dc7e2b00a2ae21",3790:"93f241ff3ffb7bdc7466",3793:"53e0896c2f9b2b0658c8",3917:"d3f4a30f371f8a017d96",3935:"4c4313ed725edb1a22f0",3989:"56b06456b789ca411470",3996:"2810936ebbcf561df1cf",4044:"fa5112be033e2e43ebaa",4089:"e5e1db7ff8aae9509894",4118:"31902fdc3f2adcb13857",4155:"df3f1a711306ab5ca402",4171:"3bcc6fb4ebc42cc6fae6",4207:"161aa773aba61a7b20fe",4212:"594f6f5611fcb83fe397",4474:"e5ec9f64ff210297a7cc",4609:"0a3d9ecb423228a883b8",4610:"2a0f1d0409c4d2149ac9",4644:"c88b92d5415b4a021055",4693:"911bd9a85a42f470f742",4695:"20d7b1cf92b48b888dbd",4762:"ad36edc01d741cc9aca7",4933:"d864e2e5d323c3101f2f",4978:"008654388f30410c0965",5149:"162c476a6f5d73126416",5255:"9ac0b180d0e67297bfc3",5265:"b5e8ee9d03451de2d4fc",5280:"6cb1a1e0936b538eb3f0",5314:"5a35fb8aaa08d182b78d",5353:"defc740af53bbb33cd83",5396:"c465afa478145375f64f",5406:"76f09b671b3fc5b7a8ab",5468:"2d656b461f52652d9721",5471:"c457eee2d885a3bf42ca",5571:"8887752d885fbc500c38",5623:"864ac1cbcbc517935934",5638:"0a7ffbc5f2f71d051a52",5672:"f0f44d8b2897571fa604",6076:"782a2a14701538f7bbba",6438:"34f52a858c7e94eedcc3",6486:"171e63e4e127cbb34e06",6488:"81fd6e71d73e575e3379",6580:"ad24ee72ddd15eb40e75",6785:"2fda72c9e87ab41688d2",6889:"5af246c28105ff63f819",6990:"2110c4013bdab1898faf",7009:"3bdc4ec635357c2e093f",7035:"857280e2edafe8b58144",7133:"aa3e0d2c58446baef94c",7286:"ac3c74fa93ca7b627385",7294:"f08c16dbb5f09834989f",7355:"b33cd80958cb80eea81c",7400:"016a79773d9da0a19f9e",7468:"c85441f0e8272e800e92",7685:"165b13d758dd9d286234",7794:"0bdb1b3939be3fa86e95",7857:"50f7e54f532d465e7fbf",7912:"9cb59f294e2f7b5475f4",8001:"74e9e82857ab3df98992",8024:"ca481f517eb877a135d6",8072:"23d3176afffa2886a88b",8100:"6b341941182ee6bc8218",8120:"69ba7e98929289b1b262",8178:"0f2db9f894f661526d22",8188:"cfb82bf05f69afdc6105",8254:"4fec6e29eb8fa9127597",8280:"6af0251fd9d76d505d17",8299:"ac816fa025b6da2f2545",8400:"d2770899d88f34494a11",8416:"e01f80e955e635753156",8425:"d683b12166b84628a848",8490:"98271813cb64d707f6ac",8508:"12b2437f9082736e3692",8537:"50b67ad813350aa84d7c",8596:"0fe8756344ec75877c8f",8764:"f733838d8d79f57a524a",8868:"8f9df85a180fef852bc9",8955:"6963f76d11c837efa8f1",8983:"8bc17c59966ba4fa8202",8987:"5c56617f4418776094af",9003:"fc3e691f1491c386b327",9005:"d3430a9c4d71aadf4c6b",9006:"e661dded1e57a0325769",9009:"78978dcbba98ec3a4d9e",9121:"687890f1a81962cce4ec",9125:"c3cbf3d8095eff3de778",9142:"fc55ab046150a7fc1490",9148:"efc721d7465a3853fe73",9152:"9f1b831eddf8bb813b79",9219:"4ae8450cedce9e09ef3b",9293:"9d520998cd234371534a",9303:"efc3759e24939aeec310",9371:"65ef766cb7bbcc9c7737",9420:"26cb8ba9a61a14eab2e0",9526:"b5c7ac616f9682df35a6",9578:"f5bc51a07370755fa0c5",9619:"f385474184030dfaf357",9640:"32f47ce1b28d34991a99",9650:"792c467f214992035378",9868:"bfc2ae83598da051b0e7",9964:"b0b56ec9f0c45ac42e72",9985:"77667812ccb4c8fcf6fe"}[e]+".js",T.miniCssF=e=>"css/"+{384:"RulesTable",2339:"Workload",6488:"WorkloadsList",7009:"RecsList",8178:"exposed-./RootApp",8987:"Recommendation",9420:"ClustersList",9619:"ClusterDetails"}[e]+"."+{384:"83081f50e3248350429b",2339:"0d236f2ab053491203e4",6488:"f9c95158da4698af8b4f",7009:"0b71b1b3a318e53b5106",8178:"4c37baeb54d223e27c54",8987:"ae296c4eb8c6719a8254",9420:"81a4567b696aed54ad2f",9619:"21937404b459e3342201"}[e]+".css",T.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),T.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),T.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},n="ocpAdvisor:",T.l=(e,t,c,r)=>{if(a[e])a[e].push(t);else{var o,d;if(void 0!==c)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var s=i[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+c){o=s;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,T.nc&&o.setAttribute("nonce",T.nc),o.setAttribute("data-webpack",n+c),o.src=e),a[e]=[t];var f=(t,n)=>{o.onerror=o.onload=null,clearTimeout(p);var c=a[e];if(delete a[e],o.parentNode&&o.parentNode.removeChild(o),c&&c.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),d&&document.head.appendChild(o)}},T.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{T.S={};var e={},t={};T.I=(a,n)=>{n||(n=[]);var c=t[a];if(c||(c=t[a]={}),!(n.indexOf(c)>=0)){if(n.push(c),e[a])return e[a];T.o(T.S,a)||(T.S[a]={});var r=T.S[a],o="ocpAdvisor",d=(e,t,a,n)=>{var c=r[e]=r[e]||{},d=c[t];(!d||!d.loaded&&(!n!=!d.eager?n:o>d.from))&&(c[t]={get:a,from:o,eager:!!n})},i=[];return"default"===a&&(d("@patternfly/react-core/dist/dynamic/components/Alert","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(8416),T.e(1051),T.e(4474)]).then((()=>()=>T(37685))))),d("@patternfly/react-core/dist/dynamic/components/Badge","^5.2.2",(()=>Promise.all([T.e(8416),T.e(4089)]).then((()=>()=>T(64089))))),d("@patternfly/react-core/dist/dynamic/components/Breadcrumb","^5.2.2",(()=>Promise.all([T.e(7794),T.e(8416),T.e(9142)]).then((()=>()=>T(59142))))),d("@patternfly/react-core/dist/dynamic/components/Button","^5.2.2",(()=>Promise.all([T.e(7794),T.e(8416),T.e(9219)]).then((()=>()=>T(1468))))),d("@patternfly/react-core/dist/dynamic/components/Card","^5.2.2",(()=>Promise.all([T.e(7794),T.e(8416),T.e(8072)]).then((()=>()=>T(58072))))),d("@patternfly/react-core/dist/dynamic/components/Checkbox","^5.2.2",(()=>Promise.all([T.e(7794),T.e(8416),T.e(3679)]).then((()=>()=>T(43679))))),d("@patternfly/react-core/dist/dynamic/components/Chip","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(8416),T.e(1051),T.e(2189)]).then((()=>()=>T(15623))))),d("@patternfly/react-core/dist/dynamic/components/ClipboardCopy","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(8416),T.e(1051),T.e(253)]).then((()=>()=>T(4695))))),d("@patternfly/react-core/dist/dynamic/components/CodeBlock","^5.2.2",(()=>Promise.all([T.e(8416),T.e(1191)]).then((()=>()=>T(31191))))),d("@patternfly/react-core/dist/dynamic/components/Divider","^5.2.2",(()=>Promise.all([T.e(164),T.e(8416),T.e(1051),T.e(397)]).then((()=>()=>T(40397))))),d("@patternfly/react-core/dist/dynamic/components/Dropdown","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(8188),T.e(8416),T.e(1051),T.e(4044)]).then((()=>()=>T(72677))))),d("@patternfly/react-core/dist/dynamic/components/EmptyState","^5.2.2",(()=>Promise.all([T.e(8416),T.e(6580)]).then((()=>()=>T(36580))))),d("@patternfly/react-core/dist/dynamic/components/Form","^5.2.2",(()=>Promise.all([T.e(7794),T.e(8416),T.e(3536)]).then((()=>()=>T(73536))))),d("@patternfly/react-core/dist/dynamic/components/Icon","^5.2.2",(()=>Promise.all([T.e(8416),T.e(5314)]).then((()=>()=>T(5314))))),d("@patternfly/react-core/dist/dynamic/components/Label","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(8416),T.e(1051),T.e(3264)]).then((()=>()=>T(93224))))),d("@patternfly/react-core/dist/dynamic/components/Menu","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(8188),T.e(8416),T.e(1051),T.e(8120)]).then((()=>()=>T(53989))))),d("@patternfly/react-core/dist/dynamic/components/MenuToggle","^5.2.2",(()=>Promise.all([T.e(7794),T.e(8416),T.e(8280)]).then((()=>()=>T(8280))))),d("@patternfly/react-core/dist/dynamic/components/Modal","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(9578),T.e(8425),T.e(8416),T.e(1051),T.e(4118)]).then((()=>()=>T(78425))))),d("@patternfly/react-core/dist/dynamic/components/Page","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9578),T.e(7035),T.e(8416),T.e(1051),T.e(2136)]).then((()=>()=>T(37035))))),d("@patternfly/react-core/dist/dynamic/components/Pagination","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(8188),T.e(9005),T.e(8416),T.e(1051),T.e(9009)]).then((()=>()=>T(39005))))),d("@patternfly/react-core/dist/dynamic/components/Radio","^5.2.2",(()=>Promise.all([T.e(7794),T.e(8416),T.e(2645)]).then((()=>()=>T(42645))))),d("@patternfly/react-core/dist/dynamic/components/Select","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(8188),T.e(8416),T.e(1051),T.e(4609)]).then((()=>()=>T(68596))))),d("@patternfly/react-core/dist/dynamic/components/Skeleton","^5.2.2",(()=>Promise.all([T.e(8416),T.e(8001)]).then((()=>()=>T(48001))))),d("@patternfly/react-core/dist/dynamic/components/Spinner","^5.2.2",(()=>Promise.all([T.e(8416),T.e(2842)]).then((()=>()=>T(72842))))),d("@patternfly/react-core/dist/dynamic/components/Tabs","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(8188),T.e(4933),T.e(8416),T.e(1051),T.e(8508)]).then((()=>()=>T(14933))))),d("@patternfly/react-core/dist/dynamic/components/Text","^5.2.2",(()=>Promise.all([T.e(7794),T.e(8416),T.e(2902)]).then((()=>()=>T(32902))))),d("@patternfly/react-core/dist/dynamic/components/TextInput","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(8416),T.e(1051),T.e(6990)]).then((()=>()=>T(96990))))),d("@patternfly/react-core/dist/dynamic/components/TextInputGroup","^5.2.2",(()=>Promise.all([T.e(8416),T.e(9148)]).then((()=>()=>T(69148))))),d("@patternfly/react-core/dist/dynamic/components/Title","^5.2.2",(()=>Promise.all([T.e(7794),T.e(8416),T.e(7355)]).then((()=>()=>T(17355))))),d("@patternfly/react-core/dist/dynamic/components/Toolbar","^5.2.2",(()=>Promise.all([T.e(7794),T.e(164),T.e(9121),T.e(1640),T.e(8416),T.e(1051),T.e(3397)]).then((()=>()=>T(71640))))),d("@patternfly/react-core/dist/dynamic/components/Tooltip","^5.2.2",(()=>Promise.all([T.e(164),T.e(9121),T.e(8416),T.e(1051),T.e(9006)]).then((()=>()=>T(62359))))),d("@patternfly/react-core/dist/dynamic/components/TreeView","^5.2.2",(()=>Promise.all([T.e(164),T.e(8100),T.e(8416),T.e(1051),T.e(84)]).then((()=>()=>T(88100))))),d("@patternfly/react-core/dist/dynamic/helpers/Popper/Popper","^5.2.2",(()=>Promise.all([T.e(164),T.e(9121),T.e(8416),T.e(1051),T.e(8983)]).then((()=>()=>T(69121))))),d("@patternfly/react-core/dist/dynamic/layouts/Bullseye","^5.2.2",(()=>Promise.all([T.e(8416),T.e(3729)]).then((()=>()=>T(73729))))),d("@patternfly/react-core/dist/dynamic/layouts/Flex","^5.2.2",(()=>Promise.all([T.e(164),T.e(9868),T.e(8416),T.e(1051),T.e(534)]).then((()=>()=>T(29868))))),d("@patternfly/react-core/dist/dynamic/layouts/Grid","^5.2.2",(()=>Promise.all([T.e(164),T.e(8416),T.e(1051),T.e(9371)]).then((()=>()=>T(59371))))),d("@patternfly/react-core/dist/dynamic/layouts/Level","^5.2.2",(()=>Promise.all([T.e(8416),T.e(7133)]).then((()=>()=>T(67133))))),d("@patternfly/react-core/dist/dynamic/layouts/Split","^5.2.2",(()=>Promise.all([T.e(8416),T.e(2031)]).then((()=>()=>T(82031))))),d("@patternfly/react-core/dist/dynamic/layouts/Stack","^5.2.2",(()=>Promise.all([T.e(8416),T.e(9964)]).then((()=>()=>T(3473))))),d("@patternfly/react-icons/dist/dynamic/icons/angle-double-down-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(7857)]).then((()=>()=>T(97857))))),d("@patternfly/react-icons/dist/dynamic/icons/angle-double-up-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(5396)]).then((()=>()=>T(28955))))),d("@patternfly/react-icons/dist/dynamic/icons/angle-down-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(9003)]).then((()=>()=>T(9003))))),d("@patternfly/react-icons/dist/dynamic/icons/angle-right-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(3174)]).then((()=>()=>T(93174))))),d("@patternfly/react-icons/dist/dynamic/icons/bullseye-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(8254)]).then((()=>()=>T(98254))))),d("@patternfly/react-icons/dist/dynamic/icons/close-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(7912)]).then((()=>()=>T(36438))))),d("@patternfly/react-icons/dist/dynamic/icons/critical-risk-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(9293)]).then((()=>()=>T(25280))))),d("@patternfly/react-icons/dist/dynamic/icons/ellipsis-v-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(2165)]).then((()=>()=>T(62165))))),d("@patternfly/react-icons/dist/dynamic/icons/equals-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(5571)]).then((()=>()=>T(40393))))),d("@patternfly/react-icons/dist/dynamic/icons/export-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(4978)]).then((()=>()=>T(74978))))),d("@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(5265)]).then((()=>()=>T(15265))))),d("@patternfly/react-icons/dist/dynamic/icons/filter-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(6889)]).then((()=>()=>T(76889))))),d("@patternfly/react-icons/dist/dynamic/icons/info-circle-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(3688)]).then((()=>()=>T(53688))))),d("@patternfly/react-icons/dist/dynamic/icons/lightbulb-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(3790)]).then((()=>()=>T(53790))))),d("@patternfly/react-icons/dist/dynamic/icons/outlined-question-circle-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(1290)]).then((()=>()=>T(91290))))),d("@patternfly/react-icons/dist/dynamic/icons/outlined-thumbs-down-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(4171)]).then((()=>()=>T(54171))))),d("@patternfly/react-icons/dist/dynamic/icons/outlined-thumbs-up-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(1156)]).then((()=>()=>T(71156))))),d("@patternfly/react-icons/dist/dynamic/icons/power-off-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(4644)]).then((()=>()=>T(26076))))),d("@patternfly/react-icons/dist/dynamic/icons/search-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(810)]).then((()=>()=>T(80810))))),d("@patternfly/react-icons/dist/dynamic/icons/sort-amount-down-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(532)]).then((()=>()=>T(60532))))),d("@patternfly/react-icons/dist/dynamic/icons/sort-amount-up-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(4610)]).then((()=>()=>T(44610))))),d("@patternfly/react-icons/dist/dynamic/icons/thumbs-down-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(3151)]).then((()=>()=>T(53151))))),d("@patternfly/react-icons/dist/dynamic/icons/thumbs-up-icon","^5.2.0",(()=>Promise.all([T.e(8416),T.e(921)]).then((()=>()=>T(50921))))),d("@scalprum/react-core","0.7.1",(()=>Promise.all([T.e(9125),T.e(5149),T.e(1024),T.e(8416),T.e(5353)]).then((()=>()=>T(61024))))),d("@unleash/proxy-client-react","4.1.2",(()=>Promise.all([T.e(2080),T.e(8416)]).then((()=>()=>T(12080))))),d("axios","0.28.1",(()=>Promise.all([T.e(8764),T.e(9640),T.e(4155)]).then((()=>()=>T(69640))))),d("axios","1.6.7",(()=>Promise.all([T.e(8764),T.e(2632)]).then((()=>()=>T(12632))))),d("lodash","4.17.21",(()=>T.e(6486).then((()=>()=>T(96486))))),d("react-dom","18.2.0",(()=>Promise.all([T.e(3935),T.e(8416)]).then((()=>()=>T(73935))))),d("react","18.2.0",(()=>T.e(7294).then((()=>()=>T(67294)))))),e[a]=i.length?Promise.all(i).then((()=>e[a]=1)):1}}})(),T.p="/beta/apps/ocp-advisor/",c=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=a[1]?t(a[1]):[];return a[2]&&(n.length++,n.push.apply(n,t(a[2]))),a[3]&&(n.push([]),n.push.apply(n,t(a[3]))),n},r=(e,t)=>{e=c(e),t=c(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var n=e[a],r=(typeof n)[0];if(a>=t.length)return"u"==r;var o=t[a],d=(typeof o)[0];if(r!=d)return"o"==r&&"n"==d||"s"==d||"u"==r;if("o"!=r&&"u"!=r&&n!=o)return n<o;a++}},o=e=>{var t=e[0],a="";if(1===e.length)return"*";if(t+.5){a+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,c=1;c<e.length;c++)n--,a+="u"==(typeof(d=e[c]))[0]?"-":(n>0?".":"")+(n=2,d);return a}var r=[];for(c=1;c<e.length;c++){var d=e[c];r.push(0===d?"not("+i()+")":1===d?"("+i()+" || "+i()+")":2===d?r.pop()+" "+r.pop():o(d))}return i();function i(){return r.pop().replace(/^\((.+)\)$/,"$1")}},d=(e,t)=>{if(0 in e){t=c(t);var a=e[0],n=a<0;n&&(a=-a-1);for(var r=0,o=1,i=!0;;o++,r++){var l,s,f=o<e.length?(typeof e[o])[0]:"";if(r>=t.length||"o"==(s=(typeof(l=t[r]))[0]))return!i||("u"==f?o>a&&!n:""==f!=n);if("u"==s){if(!i||"u"!=f)return!1}else if(i)if(f==s)if(o<=a){if(l!=e[o])return!1}else{if(n?l>e[o]:l<e[o])return!1;l!=e[o]&&(i=!1)}else if("s"!=f&&"n"!=f){if(n||o<=a)return!1;i=!1,o--}else{if(o<=a||s<f!=n)return!1;i=!1}else"s"!=f&&"n"!=f&&(i=!1,o--)}}var p=[],m=p.pop.bind(p);for(r=1;r<e.length;r++){var y=e[r];p.push(1==y?m()|m():2==y?m()&m():y?d(y,t):!m())}return!!m()},i=(e,t)=>{var a=T.S[e];if(!a||!T.o(a,t))throw new Error("Shared module "+t+" doesn't exist in shared scope "+e);return a},l=(e,t)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&a[t]},s=(e,t)=>{var a=e[t];return Object.keys(a).reduce(((e,t)=>!e||!a[e].loaded&&r(e,t)?t:e),0)},f=(e,t,a,n)=>"Unsatisfied version "+a+" from "+(a&&e[t][a].from)+" of shared singleton module "+t+" (required "+o(n)+")",p=(e,t,a,n)=>{var c=s(e,a);return d(n,c)||y(f(e,a,c,n)),b(e[a][c])},m=(e,t,a)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!d(a,t)||e&&!r(e,t)?e:t),0))&&n[t]},y=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},b=e=>(e.loaded=1,e.get()),h=(u=e=>function(t,a,n,c){var r=T.I(t);return r&&r.then?r.then(e.bind(e,t,T.S[t],a,n,c)):e(t,T.S[t],a,n,c)})(((e,t,a,n)=>t&&T.o(t,a)?b(l(t,a)):n())),P=u(((e,t,a,n)=>(i(e,a),p(t,0,a,n)))),v=u(((e,t,a,n,c)=>t&&T.o(t,a)?p(t,0,a,n):c())),g=u(((e,t,a,n,c)=>{var r=t&&T.o(t,a)&&m(t,a,n);return r?b(r):c()})),w={},x={28416:()=>v("default","react",[1,18,2,0],(()=>T.e(7294).then((()=>()=>T(67294))))),31051:()=>v("default","react-dom",[1,18,2,0],(()=>T.e(3935).then((()=>()=>T(73935))))),4440:()=>g("default","@patternfly/react-core/dist/dynamic/components/Alert",[1,5,0,0],(()=>T.e(7685).then((()=>()=>T(37685))))),5311:()=>g("default","@patternfly/react-core/dist/dynamic/layouts/Stack",[1,5,2,2],(()=>T.e(3473).then((()=>()=>T(3473))))),5527:()=>g("default","axios",[1,1,6,7],(()=>Promise.all([T.e(8764),T.e(2632)]).then((()=>()=>T(12632))))),11454:()=>g("default","@patternfly/react-core/dist/dynamic/components/Button",[1,5,0,0],(()=>T.e(1468).then((()=>()=>T(1468))))),15338:()=>g("default","@patternfly/react-core/dist/dynamic/components/Spinner",[1,5,2,2],(()=>T.e(97).then((()=>()=>T(72842))))),34324:()=>g("default","@patternfly/react-core/dist/dynamic/components/Pagination",[1,5,0,0],(()=>Promise.all([T.e(8188),T.e(9005),T.e(2455)]).then((()=>()=>T(39005))))),38595:()=>g("default","@patternfly/react-core/dist/dynamic/components/Tooltip",[1,5,2,2],(()=>T.e(2359).then((()=>()=>T(62359))))),43669:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/close-icon",[1,5,0,0],(()=>T.e(6438).then((()=>()=>T(36438))))),46166:()=>g("default","@patternfly/react-core/dist/dynamic/components/Icon",[1,5,2,2],(()=>T.e(3400).then((()=>()=>T(5314))))),56800:()=>P("default","react-router-dom",[1,6,22,0]),59816:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/outlined-question-circle-icon",[1,5,2,0],(()=>T.e(2065).then((()=>()=>T(91290))))),64129:()=>g("default","@patternfly/react-core/dist/dynamic/components/Text",[1,5,0,0],(()=>T.e(8537).then((()=>()=>T(32902))))),64227:()=>v("default","@unleash/proxy-client-react",[1,4,1,2],(()=>T.e(2080).then((()=>()=>T(12080))))),65771:()=>v("default","@scalprum/react-core",[0],(()=>Promise.all([T.e(9125),T.e(1024)]).then((()=>()=>T(61024))))),76635:()=>g("default","@patternfly/react-core/dist/dynamic/layouts/Level",[1,5,0,0],(()=>T.e(9303).then((()=>()=>T(67133))))),80555:()=>g("default","@patternfly/react-core/dist/dynamic/components/EmptyState",[1,5,2,2],(()=>T.e(7468).then((()=>()=>T(36580))))),84018:()=>g("default","@patternfly/react-core/dist/dynamic/components/Button",[1,5,2,2],(()=>T.e(1468).then((()=>()=>T(1468))))),89266:()=>g("default","@patternfly/react-core/dist/dynamic/components/Card",[1,5,0,0],(()=>T.e(3768).then((()=>()=>T(58072))))),96694:()=>g("default","@patternfly/react-core/dist/dynamic/layouts/Bullseye",[1,5,2,2],(()=>T.e(323).then((()=>()=>T(73729))))),83887:()=>g("default","@patternfly/react-core/dist/dynamic/components/Badge",[1,5,0,0],(()=>T.e(7286).then((()=>()=>T(64089))))),1804:()=>g("default","@patternfly/react-core/dist/dynamic/components/Checkbox",[1,5,0,0],(()=>T.e(450).then((()=>()=>T(43679))))),83813:()=>g("default","@patternfly/react-core/dist/dynamic/components/Chip",[1,5,0,0],(()=>T.e(5623).then((()=>()=>T(15623))))),72996:()=>g("default","@patternfly/react-core/dist/dynamic/components/Dropdown",[1,5,0,0],(()=>T.e(2677).then((()=>()=>T(72677))))),74437:()=>g("default","@patternfly/react-core/dist/dynamic/components/Icon",[1,5,0,0],(()=>T.e(3400).then((()=>()=>T(5314))))),88009:()=>g("default","@patternfly/react-core/dist/dynamic/components/MenuToggle",[1,5,0,0],(()=>T.e(2130).then((()=>()=>T(8280))))),51843:()=>g("default","@patternfly/react-core/dist/dynamic/components/Menu",[1,5,0,0],(()=>T.e(3989).then((()=>()=>T(53989))))),78411:()=>g("default","@patternfly/react-core/dist/dynamic/components/Radio",[1,5,0,0],(()=>T.e(546).then((()=>()=>T(42645))))),3779:()=>g("default","@patternfly/react-core/dist/dynamic/components/Select",[1,5,0,0],(()=>T.e(8596).then((()=>()=>T(68596))))),35789:()=>g("default","@patternfly/react-core/dist/dynamic/components/TextInputGroup",[1,5,0,0],(()=>T.e(2471).then((()=>()=>T(69148))))),99389:()=>g("default","@patternfly/react-core/dist/dynamic/components/TextInput",[1,5,0,0],(()=>T.e(4212).then((()=>()=>T(96990))))),10747:()=>g("default","@patternfly/react-core/dist/dynamic/components/Toolbar",[1,5,0,0],(()=>Promise.all([T.e(1640),T.e(4693)]).then((()=>()=>T(71640))))),31190:()=>g("default","@patternfly/react-core/dist/dynamic/components/Tooltip",[1,5,0,0],(()=>T.e(2359).then((()=>()=>T(62359))))),49564:()=>g("default","@patternfly/react-core/dist/dynamic/components/TreeView",[1,5,0,0],(()=>Promise.all([T.e(8100),T.e(8024)]).then((()=>()=>T(88100))))),76453:()=>g("default","@patternfly/react-core/dist/dynamic/helpers/Popper/Popper",[1,5,0,0],(()=>()=>T(69121))),18090:()=>g("default","@patternfly/react-core/dist/dynamic/layouts/Split",[1,5,0,0],(()=>T.e(847).then((()=>()=>T(82031))))),90197:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/export-icon",[1,5,0,0],(()=>T.e(5468).then((()=>()=>T(74978))))),57051:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/filter-icon",[1,5,0,0],(()=>T.e(2984).then((()=>()=>T(76889))))),64553:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/search-icon",[1,5,0,0],(()=>T.e(31).then((()=>()=>T(80810))))),44439:()=>g("default","lodash",[1,4,17,21],(()=>T.e(6486).then((()=>()=>T(96486))))),58009:()=>g("default","@patternfly/react-core/dist/dynamic/components/Card",[1,5,2,2],(()=>T.e(3768).then((()=>()=>T(58072))))),77697:()=>g("default","@patternfly/react-core/dist/dynamic/components/Title",[1,5,2,2],(()=>T.e(7400).then((()=>()=>T(17355))))),52006:()=>g("default","@patternfly/react-core/dist/dynamic/components/Divider",[1,5,0,0],(()=>T.e(1201).then((()=>()=>T(40397))))),41868:()=>g("default","@patternfly/react-core/dist/dynamic/components/Label",[1,5,0,0],(()=>T.e(3224).then((()=>()=>T(93224))))),45237:()=>g("default","@patternfly/react-core/dist/dynamic/components/Skeleton",[1,5,0,0],(()=>T.e(2694).then((()=>()=>T(48001))))),81728:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/angle-double-down-icon",[1,5,0,0],(()=>T.e(2843).then((()=>()=>T(97857))))),1983:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/angle-double-up-icon",[1,5,0,0],(()=>T.e(8955).then((()=>()=>T(28955))))),86912:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/critical-risk-icon",[1,5,0,0],(()=>T.e(5280).then((()=>()=>T(25280))))),9268:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/equals-icon",[1,5,0,0],(()=>T.e(393).then((()=>()=>T(40393))))),22964:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/angle-down-icon",[1,5,0,0],(()=>()=>T(9003))),51341:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/angle-right-icon",[1,5,0,0],(()=>()=>T(93174))),9030:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/ellipsis-v-icon",[1,5,0,0],(()=>()=>T(62165))),94759:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/sort-amount-down-icon",[1,5,0,0],(()=>T.e(544).then((()=>()=>T(60532))))),75412:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/sort-amount-up-icon",[1,5,0,0],(()=>T.e(244).then((()=>()=>T(44610))))),62632:()=>g("default","@patternfly/react-core/dist/dynamic/components/Label",[1,5,2,2],(()=>()=>T(93224))),8746:()=>g("default","@patternfly/react-core/dist/dynamic/layouts/Stack",[1,5,0,0],(()=>()=>T(3473))),36530:()=>g("default","@patternfly/react-core/dist/dynamic/layouts/Flex",[1,5,0,0],(()=>()=>T(29868))),40063:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/outlined-thumbs-up-icon",[1,5,0,0],(()=>T.e(5672).then((()=>()=>T(71156))))),40773:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon",[1,5,0,0],(()=>()=>T(15265))),42285:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/outlined-thumbs-down-icon",[1,5,0,0],(()=>T.e(182).then((()=>()=>T(54171))))),57271:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/thumbs-down-icon",[1,5,0,0],(()=>T.e(911).then((()=>()=>T(53151))))),62413:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/thumbs-up-icon",[1,5,0,0],(()=>T.e(5406).then((()=>()=>T(50921))))),78748:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/bullseye-icon",[1,5,0,0],(()=>T.e(9985).then((()=>()=>T(98254))))),81610:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/lightbulb-icon",[1,5,0,0],(()=>T.e(2097).then((()=>()=>T(53790))))),89052:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/info-circle-icon",[1,5,0,0],(()=>()=>T(53688))),99433:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/power-off-icon",[1,5,0,0],(()=>T.e(6076).then((()=>()=>T(26076))))),25377:()=>g("default","@patternfly/react-core/dist/dynamic/components/Breadcrumb",[1,5,2,2],(()=>T.e(3793).then((()=>()=>T(59142))))),37007:()=>g("default","@patternfly/react-core/dist/dynamic/layouts/Flex",[1,5,2,2],(()=>Promise.all([T.e(9868),T.e(8299)]).then((()=>()=>T(29868))))),158:()=>g("default","@patternfly/react-core/dist/dynamic/components/Dropdown",[1,5,2,2],(()=>()=>T(72677))),61111:()=>g("default","@patternfly/react-core/dist/dynamic/components/MenuToggle",[1,5,2,2],(()=>()=>T(8280))),83321:()=>g("default","@patternfly/react-core/dist/dynamic/components/Page",[1,5,2,2],(()=>Promise.all([T.e(7035),T.e(3663)]).then((()=>()=>T(37035))))),47635:()=>g("default","@patternfly/react-core/dist/dynamic/components/Tabs",[1,5,2,2],(()=>()=>T(14933))),86160:()=>g("default","@patternfly/react-core/dist/dynamic/components/Alert",[1,5,2,2],(()=>()=>T(37685))),31630:()=>g("default","@patternfly/react-core/dist/dynamic/components/Pagination",[1,5,2,2],(()=>T.e(9005).then((()=>()=>T(39005))))),65638:()=>g("default","@patternfly/react-core/dist/dynamic/components/Modal",[1,5,2,2],(()=>Promise.all([T.e(8425),T.e(2713)]).then((()=>()=>T(78425))))),66835:()=>g("default","@patternfly/react-core/dist/dynamic/components/Checkbox",[1,5,2,2],(()=>()=>T(43679))),20956:()=>g("default","@patternfly/react-core/dist/dynamic/components/Form",[1,5,2,2],(()=>()=>T(73536))),37824:()=>g("default","@patternfly/react-core/dist/dynamic/components/TextInput",[1,5,2,2],(()=>()=>T(96990))),78956:()=>g("default","@patternfly/react-core/dist/dynamic/components/Title",[1,5,0,0],(()=>()=>T(17355))),54762:()=>h("default","@patternfly/react-icons/dist/dynamic/icons/ellipsis-v-icon",(()=>()=>T(62165))),30934:()=>g("default","axios",[1,1,6,7],(()=>Promise.all([T.e(8764),T.e(9640)]).then((()=>()=>T(69640))))),46847:()=>g("default","@patternfly/react-core/dist/dynamic/layouts/Grid",[1,5,2,2],(()=>T.e(9650).then((()=>()=>T(59371))))),46764:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/bullseye-icon",[1,5,2,0],(()=>T.e(9985).then((()=>()=>T(98254))))),54711:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/info-circle-icon",[1,5,2,0],(()=>T.e(49).then((()=>()=>T(53688))))),59649:()=>g("default","@patternfly/react-icons/dist/dynamic/icons/thumbs-up-icon",[1,5,2,0],(()=>T.e(5406).then((()=>()=>T(50921))))),91742:()=>g("default","@patternfly/react-core/dist/dynamic/components/ClipboardCopy",[1,5,2,2],(()=>T.e(4695).then((()=>()=>T(4695))))),46819:()=>g("default","@patternfly/react-core/dist/dynamic/components/CodeBlock",[1,5,2,2],(()=>T.e(6785).then((()=>()=>T(31191))))),87986:()=>g("default","@patternfly/react-core/dist/dynamic/components/Divider",[1,5,2,2],(()=>T.e(1201).then((()=>()=>T(40397)))))},k={395:[22964,51341,9030,94759,75412],1051:[31051],1242:[8746,36530,40063,40773,42285,57271,62413,78748,81610,89052,99433],1581:[83887,1804,83813,72996,74437,88009,51843,78411,3779,35789,99389,10747,31190,49564,76453,18090,90197,57051,64553,44439],1630:[31630],1917:[25377,37007],2006:[52006],2339:[46847,46764,54711,59649,91742,46819,87986],3008:[58009,77697],3321:[83321],3917:[62632],3996:[4440,5311,5527,11454,15338,34324,38595,43669,46166,56800,59816,64129,64227,65771,76635,80555,84018,89266,96694],4762:[54762],5255:[41868,45237,81728,1983,86912,9268],5638:[65638],8400:[158,61111],8416:[28416],8987:[78956],9152:[66835,20956,37824],9420:[30934],9619:[47635,86160]},T.f.consumes=(e,t)=>{T.o(k,e)&&k[e].forEach((e=>{if(T.o(w,e))return t.push(w[e]);var a=t=>{w[e]=0,T.m[e]=a=>{delete T.c[e],a.exports=t()}},n=t=>{delete w[e],T.m[e]=a=>{throw delete T.c[e],t}};try{var c=x[e]();c.then?t.push(w[e]=c.then(a).catch(n)):a(c)}catch(e){n(e)}}))},(()=>{if("undefined"!=typeof document){var e={6470:0};T.f.miniCss=(t,a)=>{e[t]?a.push(e[t]):0!==e[t]&&{384:1,2339:1,6488:1,7009:1,8178:1,8987:1,9420:1,9619:1}[t]&&a.push(e[t]=(e=>new Promise(((t,a)=>{var n=T.miniCssF(e),c=T.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var c=(o=a[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===e||c===t))return o}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){var o;if((c=(o=r[n]).getAttribute("data-href"))===e||c===t)return o}})(n,c))return t();((e,t,a,n,c)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=a=>{if(r.onerror=r.onload=null,"load"===a.type)n();else{var o=a&&a.type,d=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+d+")");i.name="ChunkLoadError",i.code="CSS_CHUNK_LOAD_FAILED",i.type=o,i.request=d,r.parentNode&&r.parentNode.removeChild(r),c(i)}},r.href=t,document.head.appendChild(r)})(e,c,0,t,a)})))(t).then((()=>{e[t]=0}),(a=>{throw delete e[t],a})))}}})(),(()=>{var e={6470:0};T.f.j=(t,a)=>{var n=T.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else if(/^(1(051|581|630|917)|3(008|321|917|95)|84(00|16)|2006|4762|5255|5638|9152)$/.test(t))e[t]=0;else{var c=new Promise(((a,c)=>n=e[t]=[a,c]));a.push(n[2]=c);var r=T.p+T.u(t),o=new Error;T.l(r,(a=>{if(T.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var c=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+c+": "+r+")",o.name="ChunkLoadError",o.type=c,o.request=r,n[1](o)}}),"chunk-"+t,t)}};var t=(t,a)=>{var n,c,[r,o,d]=a,i=0;if(r.some((t=>0!==e[t]))){for(n in o)T.o(o,n)&&(T.m[n]=o[n]);d&&d(T)}for(t&&t(a);i<r.length;i++)c=r[i],T.o(e,c)&&e[c]&&e[c][0](),e[c]=0},a=self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var E=T(91877);ocpAdvisor=E})();