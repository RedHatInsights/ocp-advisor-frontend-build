"use strict";(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[9005],{49644:(e,t,a)=>{a.d(t,{J:()=>d});var i=a(65353),s=a(28416),n=a(12455),r=a(38296),o=a(68778),l=a(43047),c=a(69957);const u={success:o.ZP,error:l.ZP,warning:c.ZP},d=e=>{var{status:t,customIcon:a,className:o}=e,l=(0,i.__rest)(e,["status","customIcon","className"]);const c=t&&u[t];return s.createElement("span",Object.assign({className:(0,r.css)(n.default.formControlIcon,t&&n.default.modifiers.status,o)},l),a||s.createElement(c,null))}},39005:(e,t,a)=>{a.r(t),a.d(t,{Pagination:()=>y,PaginationVariant:()=>E,ToggleTemplate:()=>n});var i=a(65353),s=a(28416);const n=({firstIndex:e=0,lastIndex:t=0,itemCount:a=0,itemsTitle:i="items",ofWord:n="of"})=>s.createElement(s.Fragment,null,s.createElement("b",null,e," - ",t)," ",n," ",s.createElement("b",null,a)," ",i);n.displayName="ToggleTemplate";var r=a(46754),o=a(38296),l=a(80164),c=a(71973),u=a(94949),d=a(93174),p=a(94086),g=a(47173),m=a(92607),f=a(1774);class P extends s.Component{constructor(e){super(e),this.handleNewPage=(e,t)=>{const{perPage:a,onSetPage:i}=this.props;return i(e,t,a,(t-1)*a,t*a)},this.state={userInputPage:this.props.page}}static parseInteger(e,t){let a=Number.parseInt(e,10);return Number.isNaN(a)||(a=a>t?t:a,a=a<1?1:a),a}onChange(e,t){const a=P.parseInteger(e.currentTarget.value,t);this.setState({userInputPage:Number.isNaN(a)?e.currentTarget.value:a})}onKeyDown(e,t,a,i){if(e.key===f.yu.Enter){const s=P.parseInteger(this.state.userInputPage,a);i(e,Number.isNaN(s)?t:s),this.handleNewPage(e,Number.isNaN(s)?t:s)}else/^\d*$/.test(e.key)||["Tab","Backspace","Delete","ArrowLeft","ArrowRight","Home","End","ArrowUp","ArrowDown"].includes(e.key)||e.preventDefault()}componentDidUpdate(e){this.props.page!==e.page&&this.props.page<=this.props.lastPage&&this.state.userInputPage!==this.props.page&&this.setState({userInputPage:this.props.page})}render(){const e=this.props,{page:t,perPage:a,onSetPage:n,isDisabled:f,itemCount:P,lastPage:h,firstPage:v,pagesTitle:b,pagesTitlePlural:L,toLastPageAriaLabel:C,toNextPageAriaLabel:N,toFirstPageAriaLabel:x,toPreviousPageAriaLabel:I,currPageAriaLabel:T,paginationAriaLabel:E,ofWord:S,onNextClick:y,onPreviousClick:k,onFirstClick:A,onLastClick:w,onPageInput:D,className:R,isCompact:W}=e,F=(0,i.__rest)(e,["page","perPage","onSetPage","isDisabled","itemCount","lastPage","firstPage","pagesTitle","pagesTitlePlural","toLastPageAriaLabel","toNextPageAriaLabel","toFirstPageAriaLabel","toPreviousPageAriaLabel","currPageAriaLabel","paginationAriaLabel","ofWord","onNextClick","onPreviousClick","onFirstClick","onLastClick","onPageInput","className","isCompact"]),{userInputPage:O}=this.state;return s.createElement("nav",Object.assign({className:(0,o.css)(r.default.paginationNav,R),"aria-label":E},F),!W&&s.createElement("div",{className:(0,o.css)(r.default.paginationNavControl,r.default.modifiers.first)},s.createElement(g.zx,{variant:g.Wu.plain,isDisabled:f||t===v||0===t,"aria-label":x,"data-action":"first",onClick:e=>{A(e,1),this.handleNewPage(e,1),this.setState({userInputPage:1})}},s.createElement(u.ZP,null))),s.createElement("div",{className:r.default.paginationNavControl},s.createElement(g.zx,{variant:g.Wu.plain,isDisabled:f||t===v||0===t,"data-action":"previous",onClick:e=>{const a=t-1>=1?t-1:1;k(e,a),this.handleNewPage(e,a),this.setState({userInputPage:a})},"aria-label":I},s.createElement(c.ZP,null))),!W&&s.createElement("div",{className:r.default.paginationNavPageSelect},s.createElement(m.oi,{"aria-label":T,type:"number",isDisabled:f||P&&t===v&&t===h&&P>=0||0===t,min:h<=0&&v<=0?0:1,max:h,value:O,onKeyDown:e=>this.onKeyDown(e,t,h,D),onChange:e=>this.onChange(e,h)}),(P||0===P)&&s.createElement("span",{"aria-hidden":"true"},S," ",b?(0,l._6)(h,b,L):h)),s.createElement("div",{className:r.default.paginationNavControl},s.createElement(g.zx,{variant:g.Wu.plain,isDisabled:f||t===h,"aria-label":N,"data-action":"next",onClick:e=>{const a=t+1<=h?t+1:h;y(e,a),this.handleNewPage(e,a),this.setState({userInputPage:a})}},s.createElement(d.default,null))),!W&&s.createElement("div",{className:(0,o.css)(r.default.paginationNavControl,r.default.modifiers.last)},s.createElement(g.zx,{variant:g.Wu.plain,isDisabled:f||t===h,"aria-label":C,"data-action":"last",onClick:e=>{w(e,h),this.handleNewPage(e,h),this.setState({userInputPage:h})}},s.createElement(p.ZP,null))))}}P.displayName="Navigation",P.defaultProps={className:"",isDisabled:!1,isCompact:!1,lastPage:0,firstPage:0,pagesTitle:"",pagesTitlePlural:"",toLastPageAriaLabel:"Go to last page",toNextPageAriaLabel:"Go to next page",toFirstPageAriaLabel:"Go to first page",toPreviousPageAriaLabel:"Go to previous page",currPageAriaLabel:"Current page",paginationAriaLabel:"Pagination",ofWord:"of",onNextClick:()=>{},onPreviousClick:()=>{},onFirstClick:()=>{},onLastClick:()=>{},onPageInput:()=>{}};var h=a(49732),v=a(47680),b=a(69579),L=a(46820),C=a(23971),N=a(69121);const x=({className:e,widgetId:t,page:a,itemCount:i,isDisabled:r=!1,minWidth:c,dropDirection:u="down",perPageOptions:d=[],itemsPerPageTitle:p="Items per page",perPageSuffix:g="per page",optionsToggleAriaLabel:m,ofWord:f="of",perPage:P=0,firstIndex:x=0,lastIndex:I=0,isLastFullPageShown:T=!1,itemsTitle:E="items",toggleTemplate:S,onPerPageSelect:y=(()=>null)})=>{const[k,A]=s.useState(!1),w=s.useRef(null),D=s.useRef(null),R=s.useRef(null);s.useEffect((()=>{const e=e=>{var t,a,i;(k&&(null===(t=D.current)||void 0===t?void 0:t.contains(e.target))||(null===(a=w.current)||void 0===a?void 0:a.contains(e.target)))&&("Escape"!==e.key&&"Tab"!==e.key||(A(!1),null===(i=w.current)||void 0===i||i.focus()))},t=e=>{var t,a,i;k&&(null===(t=w.current)||void 0===t?void 0:t.contains(e.target))&&setTimeout((()=>{var e;const t=null===(e=null==D?void 0:D.current)||void 0===e?void 0:e.querySelector("li button:not(:disabled)");t&&t.focus()}),0),!k||(null===(a=null==w?void 0:w.current)||void 0===a?void 0:a.contains(e.target))||(null===(i=D.current)||void 0===i?void 0:i.contains(e.target))||A(!1)};return window.addEventListener("keydown",e),window.addEventListener("click",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("click",t)}}),[k,D]);const W=s.createElement(C.O,Object.assign({ref:w,onClick:()=>{A((e=>!e))}},m&&{"aria-label":m},{isDisabled:r||i&&i<=0,isExpanded:k},t&&{id:`${t}-toggle`},{variant:"plainText","aria-haspopup":"listbox"}),S&&"string"==typeof S&&(0,l.tJ)(S,{firstIndex:x,lastIndex:I,ofWord:f,itemCount:i,itemsTitle:E}),S&&"string"!=typeof S&&S({firstIndex:x,lastIndex:I,ofWord:f,itemCount:i,itemsTitle:E}),!S&&s.createElement(n,{firstIndex:x,lastIndex:I,ofWord:f,itemCount:i,itemsTitle:E})),F=s.createElement(v.v,{className:(0,o.css)(e),onSelect:()=>{var e;A((e=>!e)),null===(e=w.current)||void 0===e||e.focus()},ref:D},s.createElement(b.D,null,s.createElement(L.q,null,d.map((({value:e,title:t})=>s.createElement(h.s,{key:e,"data-action":`per-page-${e}`,isSelected:P===e,onClick:t=>((e,t)=>{let s=a;for(;Math.ceil(i/t)<s;)s--;if(T&&i/t!==s)for(;s>1&&i-t*s<0;)s--;return y(e,t,s,(s-1)*t,s*t)})(t,e)},t,` ${g}`))))));return s.createElement("div",{ref:R},s.createElement(N.Popper,{trigger:W,triggerRef:w,popper:F,popperRef:D,isVisible:k,direction:u,appendTo:R.current||void 0,minWidth:void 0!==c?c:"revert"}))};x.displayName="PaginationOptionsMenu";var I=a(62472);const T="--pf-v5-c-pagination__nav-page-select--c-form-control--width-chars";var E;!function(e){e.bottom="bottom",e.top="top"}(E||(E={}));const S=[{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],y=e=>{var{children:t,className:a="",variant:c=E.top,isDisabled:u=!1,isCompact:d=!1,isSticky:p=!1,isStatic:g=!1,dropDirection:m,toggleTemplate:f,perPage:h=S[0].value,titles:v={items:"",page:"",pages:"",itemsPerPage:"Items per page",perPageSuffix:"per page",toFirstPageAriaLabel:"Go to first page",toPreviousPageAriaLabel:"Go to previous page",toLastPageAriaLabel:"Go to last page",toNextPageAriaLabel:"Go to next page",optionsToggleAriaLabel:"",currPageAriaLabel:"Current page",paginationAriaLabel:"Pagination",ofWord:"of"},firstPage:b=1,page:L=1,offset:C=null,isLastFullPageShown:N=!1,itemsStart:k=null,itemsEnd:A=null,itemCount:w,perPageOptions:D=S,widgetId:R="options-menu",onSetPage:W=(()=>{}),onPerPageSelect:F=(()=>{}),onFirstClick:O=(()=>{}),onPreviousClick:z=(()=>{}),onNextClick:_=(()=>{}),onPageInput:$=(()=>{}),onLastClick:B=(()=>{}),ouiaId:q,ouiaSafe:G=!0,usePageInsets:M,inset:Z}=e,j=(0,i.__rest)(e,["children","className","variant","isDisabled","isCompact","isSticky","isStatic","dropDirection","toggleTemplate","perPage","titles","firstPage","page","offset","isLastFullPageShown","itemsStart","itemsEnd","itemCount","perPageOptions","widgetId","onSetPage","onPerPageSelect","onFirstClick","onPreviousClick","onNextClick","onPageInput","onLastClick","ouiaId","ouiaSafe","usePageInsets","inset"]);const J=s.useRef(null),V=()=>w||0===w?Math.ceil(w/h)||0:U+1;s.useEffect((()=>{const e=J.current;((e,t)=>{if(!t)return;const a=String(e).length;a>=3?t.style.setProperty(T,`${a}`):t.style.setProperty(T,"2")})(V(),e)}),[h,w]);const K=m||("bottom"!==c||g?"down":"up");let U=L;null!==C&&(k=C+1,U=Math.max(Math.ceil(k/h),1),A=C+h);const H=V();let Y=(U-1)*h+1,Q=U*h;(w||0===w)&&(Y=w<=0?0:(U-1)*h+1,U<b&&w>0?U=b:U>H&&(U=H),w>=0&&(Q=U===H||0===w?w:U*h));const X={firstIndex:Y,lastIndex:Q,itemCount:w,itemsTitle:v.items,ofWord:v.ofWord};return s.createElement("div",Object.assign({ref:J,className:(0,o.css)(r.default.pagination,c===E.bottom&&r.default.modifiers.bottom,M&&r.default.modifiers.pageInsets,(0,l.wt)(Z,r.default),d&&r.default.modifiers.compact,g&&r.default.modifiers.static,p&&r.default.modifiers.sticky,a)},R&&{id:`${R}-${c}-pagination`},(0,I.S$)(y.displayName,q,G,c),j),c===E.top&&s.createElement("div",{className:(0,o.css)(r.default.paginationTotalItems)},f&&"string"==typeof f&&(0,l.tJ)(f,X),f&&"string"!=typeof f&&f(X),!f&&s.createElement(n,{firstIndex:Y,lastIndex:Q,itemCount:w,itemsTitle:v.items,ofWord:v.ofWord})),D&&D.length>0&&s.createElement(x,{itemsPerPageTitle:v.itemsPerPage,perPageSuffix:v.perPageSuffix,itemsTitle:d?"":v.items,optionsToggleAriaLabel:v.optionsToggleAriaLabel,perPageOptions:D,firstIndex:null!==k?k:Y,lastIndex:null!==A?A:Q,ofWord:v.ofWord,isLastFullPageShown:N,itemCount:w,page:U,perPage:h,lastPage:H,onPerPageSelect:F,dropDirection:K,widgetId:`${R}-${c}`,toggleTemplate:f,isDisabled:u}),s.createElement(P,{pagesTitle:v.page,pagesTitlePlural:v.pages,toLastPageAriaLabel:v.toLastPageAriaLabel,toPreviousPageAriaLabel:v.toPreviousPageAriaLabel,toNextPageAriaLabel:v.toNextPageAriaLabel,toFirstPageAriaLabel:v.toFirstPageAriaLabel,currPageAriaLabel:v.currPageAriaLabel,paginationAriaLabel:v.paginationAriaLabel,ofWord:v.ofWord,page:w&&w<=0?0:U,perPage:h,itemCount:w,firstPage:null!==k?k:1,lastPage:H,onSetPage:W,onFirstClick:O,onPreviousClick:z,onNextClick:_,onLastClick:B,onPageInput:$,isDisabled:u,isCompact:d}),t)};y.displayName="Pagination"},92607:(e,t,a)=>{a.d(t,{BJ:()=>s,oi:()=>f,x:()=>i,y5:()=>m});var i,s,n=a(65353),r=a(28416),o=a(12455),l=a(38296),c=a(1774),u=a(80164),d=a(62472),p=a(84709),g=a(49644);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(i||(i={})),function(e){e.default="default",e.plain="plain"}(s||(s={}));class m extends r.Component{constructor(e){super(e),this.inputRef=r.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,u.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,isStartTruncated:a,onFocus:i}=this.props;(t||a)&&this.restoreText(),i&&i(e)},this.onBlur=e=>{const{isLeftTruncated:t,isStartTruncated:a,onBlur:i}=this.props;(t||a)&&this.handleResize(),i&&i(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,d.ql)(m.displayName)}}componentDidMount(){if(this.props.isLeftTruncated||this.props.isStartTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,p.p)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){(this.props.isLeftTruncated||this.props.isStartTruncated)&&this.observer()}render(){const e=this.props,{innerRef:t,className:a,type:i,value:s,placeholder:u,validated:p,onChange:m,onFocus:P,onBlur:h,isLeftTruncated:v,isStartTruncated:b,isExpanded:L,expandedProps:C,readOnly:N,readOnlyVariant:x,isRequired:I,isDisabled:T,customIcon:E,ouiaId:S,ouiaSafe:y}=e,k=(0,n.__rest)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isStartTruncated","isExpanded","expandedProps","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),A=["success","error","warning"].includes(p),w=C?{"aria-expanded":null==C?void 0:C.isExpanded,"aria-controls":null==C?void 0:C.ariaControls,role:"combobox"}:{};return r.createElement("span",{className:(0,l.css)(o.default.formControl,x&&o.default.modifiers.readonly,"plain"===x&&o.default.modifiers.plain,T&&o.default.modifiers.disabled,(L||(null==C?void 0:C.isExpanded))&&o.default.modifiers.expanded,E&&o.default.modifiers.icon,A&&o.default.modifiers[p],a)},r.createElement("input",Object.assign({},k,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:i,value:this.sanitizeInputValue(s),"aria-invalid":k["aria-invalid"]?k["aria-invalid"]:p===c.LD.error},w,{required:I,disabled:T,readOnly:!!x||N,ref:t||this.inputRef,placeholder:u},(0,d.dp)(f.displayName,void 0!==S?S:this.state.ouiaStateId,y))),(E||A)&&r.createElement("span",{className:(0,l.css)(o.default.formControlUtilities)},E&&r.createElement(g.J,{customIcon:E}),A&&r.createElement(g.J,{status:p})))}}m.displayName="TextInputBase",m.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:i.text,isLeftTruncated:!1,isStartTruncated:!1,onChange:()=>{},ouiaSafe:!0};const f=r.forwardRef(((e,t)=>r.createElement(m,Object.assign({},e,{innerRef:t}))));f.displayName="TextInput"},94949:(e,t,a)=>{a.d(t,{Yw:()=>n,ZP:()=>r,tH:()=>s});var i=a(40400);const s={name:"AngleDoubleLeftIcon",height:512,width:448,svgPath:"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z",yOffset:0,xOffset:0},n=(0,i.I)(s),r=n},94086:(e,t,a)=>{a.d(t,{Ki:()=>s,ZP:()=>r,jN:()=>n});var i=a(40400);const s={name:"AngleDoubleRightIcon",height:512,width:448,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z",yOffset:0,xOffset:0},n=(0,i.I)(s),r=n}}]);
//# sourceMappingURL=../sourcemaps/9005.550c38c75551fc73d174ff54fabaf4cb.js.map