"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[9422],{66081:(e,n,a)=>{a.r(n),a.d(n,{Checkbox:()=>c,CheckboxGroup:()=>s});var l=a(9950),t=a(27079),r=a(44414);const s=t.CheckboxStyle.Group;function c(e){const{item:n,defaultSelect:a,checked:c,multiple:i,onChange:o,onChangeTriger:d,defaultChecked:u,disabled:h,children:p}=e,m=n,[x,v]=(0,l.useState)({checkedList:a,indeterminate:!0,checkAll:!1});(0,l.useEffect)((()=>{d&&d(x.checkedList)}),[x]);return i?(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{borderBottom:"1px solid #E9E9E9"},children:(0,r.jsx)(t.CheckboxStyle,{indeterminate:x.indeterminate,onChange:e=>{v({checkedList:e.target.checked?m:[],indeterminate:!1,checkAll:e.target.checked})},checked:x.checkAll,children:"Check all"})}),(0,r.jsx)("br",{}),(0,r.jsx)(s,{options:m,value:x.checkedList,onChange:e=>{v({checkedList:e,indeterminate:!!e.length&&e.length<m.length,checkAll:e.length===m.length})}})]}):(0,r.jsx)(t.CheckboxStyle,{checked:c,onChange:e=>o(e.target.checked,e.target.value),defaultChecked:u,disabled:h,children:p})}c.defaultProps={checked:!1}},27079:(e,n,a)=>{a.r(n),a.d(n,{CheckboxStyle:()=>s});var l,t=a(57528),r=a(52765);const s=(0,a(19335).Ay)(r.A)(l||(l=(0,t.A)(["\n\n"])))},88025:(e,n,a)=>{a.r(n),a.d(n,{Slider:()=>d});var l=a(54411),t=a(87094),r=a(41988),s=a(40577),c=a(9950),i=a(48463),o=a(44414);function d(e){const{defaultValue:n,range:a,min:d,max:u,step:h,input:p,icon:m,marks:x,vertical:v,defaultValues:b,onAfterChange:f,onChange:g}=e,[j,y]=(0,c.useState)({inputValue:1,mini:d,maxi:u}),C=e=>{isNaN(e)||(y({...j,inputValue:e}),g&&g(e))},{inputValue:k,value:A,mini:N,maxi:S}=j,F=((S-N)/2).toFixed(5),E=A>=F?"":"rgba(0, 0, 0, .45)",O=A>=F?"rgba(0, 0, 0, .45)":"";return p?(0,o.jsxs)(t.A,{children:[(0,o.jsx)(r.A,{xl:20,xs:24,children:(0,o.jsx)(i.SliderStyle,{min:d,max:u,onChange:C,value:"number"===typeof k?k:0,step:h})}),(0,o.jsx)(r.A,{xl:4,xs:24,children:(0,o.jsx)(s.A,{min:d,max:u,value:k,onChange:C,step:h})})]}):m?(0,o.jsxs)(i.IconWrapper,{children:[(0,o.jsx)(l.A,{style:{color:E}}),(0,o.jsx)(i.SliderStyle,{min:N,max:S,onChange:e=>{y({...j,value:e}),g&&g(e)},value:A}),(0,o.jsx)(l.A,{style:{color:O}})]}):(0,o.jsx)(i.SliderStyle,{marks:x,defaultValue:n||b,range:a,step:h,vertical:v,onAfterChange:e=>{f&&f(e)},onChange:g,max:u,min:d})}},48463:(e,n,a)=>{a.r(n),a.d(n,{IconWrapper:()=>i,SliderStyle:()=>o});var l,t,r=a(57528),s=a(80134),c=a(19335);const i=c.Ay.div(l||(l=(0,r.A)(["\n    position: relative;\n    padding: 0px 30px;\n    .anticon {\n      position: absolute;\n      top: -2px;\n      width: 16px;\n      height: 16px;\n      line-height: 1;\n      font-size: 16px;\n      color: rgba(0, 0, 0, 0.25);\n    }      \n    .anticon:first-child {\n      left: 0;\n    }      \n    .anticon:last-child {\n      right: 0;\n    }\n"]))),o=(0,c.Ay)(s.A)(t||(t=(0,r.A)(["\n\n"])))},59422:(e,n,a)=>{a.r(n),a.d(n,{default:()=>h});var l=a(7347),t=a(9950),r=a(42074),s=a(29355),c=a(66081),i=a(42017),o=a(88025),d=a(68724),u=a(44414);const h=t.memo((()=>{const[e,n]=(0,t.useState)({min:10,max:100}),{min:a,max:h}=e,p=[{label:(0,u.jsxs)(u.Fragment,{children:["Freelance ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"freelance"},{label:(0,u.jsxs)(u.Fragment,{children:["Full Time ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"full"},{label:(0,u.jsxs)(u.Fragment,{children:["Part Time ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"part"},{label:(0,u.jsxs)(u.Fragment,{children:["Internship ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"internship"},{label:(0,u.jsxs)(u.Fragment,{children:["Contract ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"contract"},{label:(0,u.jsxs)(u.Fragment,{children:["Temporary ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"temporary"}],m=[{label:(0,u.jsxs)(u.Fragment,{children:["Designer Graphics ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"Graphics"},{label:(0,u.jsxs)(u.Fragment,{children:["Development ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"Development"},{label:(0,u.jsxs)(u.Fragment,{children:["Management ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"Management"},{label:(0,u.jsxs)(u.Fragment,{children:["Finance ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"Finance"},{label:(0,u.jsxs)(u.Fragment,{children:["Banking ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"Banking"},{label:(0,u.jsxs)(u.Fragment,{children:["Customer Support ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"Customer Support"}],x=[{label:(0,u.jsxs)(u.Fragment,{children:["Hourly ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"Hourly"},{label:(0,u.jsxs)(u.Fragment,{children:["Weekly ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"Weekly"},{label:(0,u.jsxs)(u.Fragment,{children:["Monthly ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"Monthly"},{label:(0,u.jsxs)(u.Fragment,{children:["Yearly ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"Yearly"}],v=[{label:(0,u.jsxs)(u.Fragment,{children:["Last Hour ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"last"},{label:(0,u.jsxs)(u.Fragment,{children:["Last 24 hours ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"24h"},{label:(0,u.jsxs)(u.Fragment,{children:["7 days ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"7d"},{label:(0,u.jsxs)(u.Fragment,{children:["14 days ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"14d"},{label:(0,u.jsxs)(u.Fragment,{children:["30 days ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"30d"},{label:(0,u.jsxs)(u.Fragment,{children:["All ",(0,u.jsx)("span",{className:"brand-count",children:"25"})]}),value:"all"}];return(0,u.jsx)(d.Sidebar,{children:(0,u.jsxs)(s.Cards,{title:(0,u.jsxs)("span",{children:[(0,u.jsx)(l.A,{}),"Filters"]}),children:[(0,u.jsxs)(d.SidebarSingle,{className:"mb-30",children:[(0,u.jsx)(i.default,{as:"h5",children:"Distance"}),(0,u.jsxs)("p",{className:"price-range-text",children:["Within 30 miles of ",(0,u.jsx)("strong",{children:"New York, NY"})]}),(0,u.jsx)(o.Slider,{max:100,onChange:a=>{n({...e,min:a[0],max:a[1]})},defaultValue:30}),(0,u.jsxs)("p",{className:"price-range-value",children:[(0,u.jsxs)("span",{children:[a," miles"]})," ",(0,u.jsxs)("span",{children:[h," miles"]})]})]}),(0,u.jsxs)(d.SidebarSingle,{className:"mb-30",children:[(0,u.jsx)(i.default,{as:"h5",children:"Job Types"}),(0,u.jsx)(c.CheckboxGroup,{options:p}),(0,u.jsx)("div",{className:"sidebar-single__action",children:(0,u.jsx)(r.N_,{className:"btn-seeMore",to:"#",children:"See more"})})]}),(0,u.jsxs)(d.SidebarSingle,{className:"mb-30",children:[(0,u.jsx)(i.default,{as:"h5",children:"Industry"}),(0,u.jsx)(c.CheckboxGroup,{options:m}),(0,u.jsx)("div",{className:"sidebar-single__action",children:(0,u.jsx)(r.N_,{className:"btn-seeMore",to:"#",children:"See more"})})]}),(0,u.jsxs)(d.SidebarSingle,{className:"mb-30",children:[(0,u.jsx)(i.default,{as:"h5",children:"Salary"}),(0,u.jsx)(c.CheckboxGroup,{options:x})]}),(0,u.jsxs)(d.SidebarSingle,{children:[(0,u.jsx)(i.default,{as:"h5",children:"Date Posted"}),(0,u.jsx)(c.CheckboxGroup,{options:v})]})]})})}))},7347:(e,n,a)=>{a.d(n,{A:()=>c});var l=a(72603),t=a(11942),r=a.n(t);const s=e=>{const{color:n,size:a,...t}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:n,...t},l.createElement("path",{d:"M7,6H6V3A1,1,0,0,0,4,3V6H3A1,1,0,0,0,3,8H7A1,1,0,0,0,7,6ZM5,10a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V11A1,1,0,0,0,5,10Zm7,8a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,12,18Zm9-8H20V3a1,1,0,0,0-2,0v7H17a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-2,4a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V15A1,1,0,0,0,19,14Zm-5,0H13V3a1,1,0,0,0-2,0V14H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z"}))};s.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},s.defaultProps={color:"currentColor",size:"24"};const c=s},52765:(e,n,a)=>{a.d(n,{A:()=>A});var l=a(64467),t=a(58168),r=a(48738),s=a.n(r),c=a(14691),i=a(9950),o=a(5741),d=a(77643),u=a(60436),h=a(5544),p=a(15207),m=function(e,n){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(l=Object.getOwnPropertySymbols(e);t<l.length;t++)n.indexOf(l[t])<0&&Object.prototype.propertyIsEnumerable.call(e,l[t])&&(a[l[t]]=e[l[t]])}return a},x=i.createContext(null),v=function(e,n){var a=e.defaultValue,r=e.children,c=e.options,d=void 0===c?[]:c,v=e.prefixCls,b=e.className,f=e.style,g=e.onChange,j=m(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),y=i.useContext(o.QO),k=y.getPrefixCls,A=y.direction,N=i.useState(j.value||a||[]),S=(0,h.A)(N,2),F=S[0],E=S[1],O=i.useState([]),V=(0,h.A)(O,2),w=V[0],P=V[1];i.useEffect((function(){"value"in j&&E(j.value||[])}),[j.value]);var H=function(){return d.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},M=k("checkbox",v),G="".concat(M,"-group"),I=(0,p.A)(j,["value","disabled"]);d&&d.length>0&&(r=H().map((function(e){return i.createElement(C,{prefixCls:M,key:e.value.toString(),disabled:"disabled"in e?e.disabled:j.disabled,value:e.value,checked:F.includes(e.value),onChange:e.onChange,className:"".concat(G,"-item"),style:e.style},e.label)})));var L={toggleOption:function(e){var n=F.indexOf(e.value),a=(0,u.A)(F);-1===n?a.push(e.value):a.splice(n,1),"value"in j||E(a);var l=H();null===g||void 0===g||g(a.filter((function(e){return w.includes(e)})).sort((function(e,n){return l.findIndex((function(n){return n.value===e}))-l.findIndex((function(e){return e.value===n}))})))},value:F,disabled:j.disabled,name:j.name,registerValue:function(e){P((function(n){return[].concat((0,u.A)(n),[e])}))},cancelValue:function(e){P((function(n){return n.filter((function(n){return n!==e}))}))}},D=s()(G,(0,l.A)({},"".concat(G,"-rtl"),"rtl"===A),b);return i.createElement("div",(0,t.A)({className:D,style:f},I,{ref:n}),i.createElement(x.Provider,{value:L},r))},b=i.forwardRef(v);const f=i.memo(b);var g=a(19389),j=function(e,n){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(l=Object.getOwnPropertySymbols(e);t<l.length;t++)n.indexOf(l[t])<0&&Object.prototype.propertyIsEnumerable.call(e,l[t])&&(a[l[t]]=e[l[t]])}return a},y=function(e,n){var a,r=e.prefixCls,u=e.className,h=e.children,p=e.indeterminate,m=void 0!==p&&p,v=e.style,b=e.onMouseEnter,f=e.onMouseLeave,y=e.skipGroup,C=void 0!==y&&y,k=e.disabled,A=j(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),N=i.useContext(o.QO),S=N.getPrefixCls,F=N.direction,E=i.useContext(x),O=(0,i.useContext)(d.$W).isFormItemInput,V=(0,i.useContext)(g.A),w=null!==(a=(null===E||void 0===E?void 0:E.disabled)||k)&&void 0!==a?a:V,P=i.useRef(A.value);i.useEffect((function(){null===E||void 0===E||E.registerValue(A.value)}),[]),i.useEffect((function(){if(!C)return A.value!==P.current&&(null===E||void 0===E||E.cancelValue(P.current),null===E||void 0===E||E.registerValue(A.value),P.current=A.value),function(){return null===E||void 0===E?void 0:E.cancelValue(A.value)}}),[A.value]);var H=S("checkbox",r),M=(0,t.A)({},A);E&&!C&&(M.onChange=function(){A.onChange&&A.onChange.apply(A,arguments),E.toggleOption&&E.toggleOption({label:h,value:A.value})},M.name=E.name,M.checked=E.value.includes(A.value));var G=s()((0,l.A)((0,l.A)((0,l.A)((0,l.A)((0,l.A)({},"".concat(H,"-wrapper"),!0),"".concat(H,"-rtl"),"rtl"===F),"".concat(H,"-wrapper-checked"),M.checked),"".concat(H,"-wrapper-disabled"),w),"".concat(H,"-wrapper-in-form-item"),O),u),I=s()((0,l.A)({},"".concat(H,"-indeterminate"),m)),L=m?"mixed":void 0;return i.createElement("label",{className:G,style:v,onMouseEnter:b,onMouseLeave:f},i.createElement(c.default,(0,t.A)({"aria-checked":L},M,{prefixCls:H,className:I,disabled:w,ref:n})),void 0!==h&&i.createElement("span",null,h))};const C=i.forwardRef(y);var k=C;k.Group=f,k.__ANT_CHECKBOX=!0;const A=k},14691:(e,n,a)=>{a.r(n),a.d(n,{Checkbox:()=>p,default:()=>m});var l=a(58168),t=a(89379),r=a(64467),s=a(5544),c=a(80045),i=a(48738),o=a.n(i),d=a(71207),u=a(9950),h=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],p=(0,u.forwardRef)((function(e,n){var a,i=e.prefixCls,p=void 0===i?"rc-checkbox":i,m=e.className,x=e.style,v=e.checked,b=e.disabled,f=e.defaultChecked,g=void 0!==f&&f,j=e.type,y=void 0===j?"checkbox":j,C=e.onChange,k=(0,c.A)(e,h),A=(0,u.useRef)(null),N=(0,d.A)(g,{value:v}),S=(0,s.A)(N,2),F=S[0],E=S[1];(0,u.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=A.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=A.current)||void 0===e||e.blur()},input:A.current}}));var O=o()(p,m,(a={},(0,r.A)(a,"".concat(p,"-checked"),F),(0,r.A)(a,"".concat(p,"-disabled"),b),a));return u.createElement("span",{className:O,style:x},u.createElement("input",(0,l.A)({},k,{className:"".concat(p,"-input"),ref:A,onChange:function(n){b||("checked"in e||E(n.target.checked),null===C||void 0===C||C({target:(0,t.A)((0,t.A)({},e),{},{type:y,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:b,checked:!!F,type:y})),u.createElement("span",{className:"".concat(p,"-inner")}))}));const m=p}}]);