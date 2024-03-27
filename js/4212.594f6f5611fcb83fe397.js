"use strict";(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[4212],{49644:(e,t,a)=>{a.d(t,{J:()=>u});var s=a(65353),i=a(28416),n=a(12455),r=a(38296),o=a(68778),l=a(43047),d=a(69957);const c={success:o.ZP,error:l.ZP,warning:d.ZP},u=e=>{var{status:t,customIcon:a,className:o}=e,l=(0,s.__rest)(e,["status","customIcon","className"]);const d=t&&c[t];return i.createElement("span",Object.assign({className:(0,r.css)(n.default.formControlIcon,t&&n.default.modifiers.status,o)},l),a||i.createElement(d,null))}},92607:(e,t,a)=>{a.d(t,{BJ:()=>i,oi:()=>m,x:()=>s,y5:()=>f});var s,i,n=a(65353),r=a(28416),o=a(12455),l=a(38296),d=a(1774),c=a(80164),u=a(62472),p=a(84709),h=a(49644);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(s||(s={})),function(e){e.default="default",e.plain="plain"}(i||(i={}));class f extends r.Component{constructor(e){super(e),this.inputRef=r.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,c.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,isStartTruncated:a,onFocus:s}=this.props;(t||a)&&this.restoreText(),s&&s(e)},this.onBlur=e=>{const{isLeftTruncated:t,isStartTruncated:a,onBlur:s}=this.props;(t||a)&&this.handleResize(),s&&s(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,u.ql)(f.displayName)}}componentDidMount(){if(this.props.isLeftTruncated||this.props.isStartTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,p.p)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){(this.props.isLeftTruncated||this.props.isStartTruncated)&&this.observer()}render(){const e=this.props,{innerRef:t,className:a,type:s,value:i,placeholder:c,validated:p,onChange:f,onFocus:v,onBlur:x,isLeftTruncated:T,isStartTruncated:b,isExpanded:g,expandedProps:I,readOnly:R,readOnlyVariant:y,isRequired:C,isDisabled:E,customIcon:S,ouiaId:L,ouiaSafe:O}=e,z=(0,n.__rest)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isStartTruncated","isExpanded","expandedProps","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),N=["success","error","warning"].includes(p),P=I?{"aria-expanded":null==I?void 0:I.isExpanded,"aria-controls":null==I?void 0:I.ariaControls,role:"combobox"}:{};return r.createElement("span",{className:(0,l.css)(o.default.formControl,y&&o.default.modifiers.readonly,"plain"===y&&o.default.modifiers.plain,E&&o.default.modifiers.disabled,(g||(null==I?void 0:I.isExpanded))&&o.default.modifiers.expanded,S&&o.default.modifiers.icon,N&&o.default.modifiers[p],a)},r.createElement("input",Object.assign({},z,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:s,value:this.sanitizeInputValue(i),"aria-invalid":z["aria-invalid"]?z["aria-invalid"]:p===d.LD.error},P,{required:C,disabled:E,readOnly:!!y||R,ref:t||this.inputRef,placeholder:c},(0,u.dp)(m.displayName,void 0!==L?L:this.state.ouiaStateId,O))),(S||N)&&r.createElement("span",{className:(0,l.css)(o.default.formControlUtilities)},S&&r.createElement(h.J,{customIcon:S}),N&&r.createElement(h.J,{status:p})))}}f.displayName="TextInputBase",f.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:s.text,isLeftTruncated:!1,isStartTruncated:!1,onChange:()=>{},ouiaSafe:!0};const m=r.forwardRef(((e,t)=>r.createElement(f,Object.assign({},e,{innerRef:t}))));m.displayName="TextInput"},96990:(e,t,a)=>{a.r(t),a.d(t,{TextInput:()=>s.oi,TextInputBase:()=>s.y5,TextInputReadOnlyVariant:()=>s.BJ,TextInputTypes:()=>s.x});var s=a(92607)},68778:(e,t,a)=>{a.d(t,{GR:()=>i,ZP:()=>r,rE:()=>n});var s=a(40400);const i={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},n=(0,s.I)(i),r=n},69957:(e,t,a)=>{a.d(t,{LP:()=>n,RI:()=>i,ZP:()=>r});var s=a(40400);const i={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},n=(0,s.I)(i),r=n}}]);
//# sourceMappingURL=../sourcemaps/4212.5e6785343e89b0a37f682d53029ebbfc.js.map