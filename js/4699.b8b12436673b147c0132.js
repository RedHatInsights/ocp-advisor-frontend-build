(self.webpackChunkocpAdvisor=self.webpackChunkocpAdvisor||[]).push([[4699,3663],{31495:(e,r,i)=>{"use strict";i.d(r,{Mi:()=>d,Uv:()=>s,wk:()=>a,z1:()=>o});var t=i(28416),n=i(80164);const s={isManagedSidebar:!1,isSidebarOpen:!1,onSidebarToggle:()=>null,width:null,height:null,getBreakpoint:n.iu,getVerticalBreakpoint:n.xb},o=t.createContext(s),d=o.Provider,a=o.Consumer},41724:(e,r,i)=>{"use strict";i.d(r,{w:()=>o});var t=i(28416),n=i(80164);let s=0;class o extends t.Component{constructor(){super(...arguments),this.uniqueElement=this.props.isRandom?"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():(0,n.Ki)():s++,this.id=`${this.props.prefix}${this.uniqueElement}`}render(){return this.props.children(this.id)}}o.displayName="GenerateId",o.defaultProps={prefix:"pf-random-id-",isRandom:!1}},84709:(e,r,i)=>{"use strict";i.d(r,{p:()=>n});var t=i(80164);const n=(e,r,i)=>{let n;if(t.Nq){const{ResizeObserver:t}=window;if(e&&t){const s=new t((e=>{i?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&r()})):Array.isArray(e)&&e.length>0&&r()}));s.observe(e),n=()=>s.unobserve(e)}else window.addEventListener("resize",r),n=()=>window.removeEventListener("resize",r)}return()=>{n&&n()}}},11452:()=>{},34946:()=>{},80897:()=>{},92084:()=>{},66822:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4699.805e1969551248df3950e79ee43f0127.js.map