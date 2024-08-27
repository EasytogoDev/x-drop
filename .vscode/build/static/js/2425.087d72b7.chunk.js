"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2425],{10818:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(9950),o=n(72896),r=n(42074),l=n(29355),c=n(67482),i=n(39452),s=n(44414);const{activeUserData:u}=i,d=[{title:"Username Name",dataIndex:"username",key:"username"},{title:"Company",dataIndex:"company",key:"company"},{title:"Product",dataIndex:"product",key:"product"},{title:"Revenue",dataIndex:"revenue",key:"revenue"},{title:"Status",dataIndex:"status",key:"status"}],p=a.memo((()=>{const[e,t]=(0,a.useState)("today"),i=(e,n)=>{n.preventDefault(),t(e)},p=[];return u[e].map((e=>{const{key:t,img:a,name:o,company:r,product:l,revenue:c,status:i}=e;return p.push({key:t,username:(0,s.jsxs)("div",{className:"ninjadash-info-element align-center-v",children:[(0,s.jsx)("img",{src:n(998)("./".concat(a)),alt:"ninjadash Img"}),(0,s.jsx)("span",{className:"ninjadash-info-element__text",children:o})]}),company:r,product:l,revenue:c,status:(0,s.jsx)("span",{className:"status ".concat(i.toLowerCase()),children:i})})})),(0,s.jsx)("div",{className:"full-width-table",children:(0,s.jsx)(c.BorderLessHeading,{children:(0,s.jsx)(l.Cards,{isbutton:(0,s.jsx)("div",{className:"ninjadash-card-nav",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"today"===e?"ninjadash-active":"ninjadash-year",children:(0,s.jsx)(r.N_,{onClick:e=>i("today",e),to:"#",children:"Year"})}),(0,s.jsx)("li",{className:"week"===e?"ninjadash-active":"ninjadash-week",children:(0,s.jsx)(r.N_,{onClick:e=>i("week",e),to:"#",children:"Week"})}),(0,s.jsx)("li",{className:"month"===e?"ninjadash-active":"ninjadash-month",children:(0,s.jsx)(r.N_,{onClick:e=>i("month",e),to:"#",children:"Month"})})]})}),title:"Active User",size:"large",children:(0,s.jsx)(c.TableDefaultStyle,{className:"ninjadash-having-header-bg",children:(0,s.jsx)("div",{className:"table-responsive",children:(0,s.jsx)(o.A,{columns:d,dataSource:p,pagination:!1})})})})})})}))},13239:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(89379),o=n(9950);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var l=n(47484),c=function(e,t){return o.createElement(l.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:r}))};const i=o.forwardRef(c)},27373:(e,t,n)=>{function a(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}n.d(t,{A:()=>a})},52765:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(64467),o=n(58168),r=n(48738),l=n.n(r),c=n(14691),i=n(9950),s=n(5741),u=n(77643),d=n(60436),p=n(5544),f=n(15207),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},m=i.createContext(null),h=function(e,t){var n=e.defaultValue,r=e.children,c=e.options,u=void 0===c?[]:c,h=e.prefixCls,b=e.className,y=e.style,g=e.onChange,x=v(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),C=i.useContext(s.QO),O=C.getPrefixCls,w=C.direction,k=i.useState(x.value||n||[]),N=(0,p.A)(k,2),E=N[0],j=N[1],I=i.useState([]),P=(0,p.A)(I,2),S=P[0],M=P[1];i.useEffect((function(){"value"in x&&j(x.value||[])}),[x.value]);var _=function(){return u.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},R=O("checkbox",h),H="".concat(R,"-group"),D=(0,f.A)(x,["value","disabled"]);u&&u.length>0&&(r=_().map((function(e){return i.createElement(A,{prefixCls:R,key:e.value.toString(),disabled:"disabled"in e?e.disabled:x.disabled,value:e.value,checked:E.includes(e.value),onChange:e.onChange,className:"".concat(H,"-item"),style:e.style},e.label)})));var L={toggleOption:function(e){var t=E.indexOf(e.value),n=(0,d.A)(E);-1===t?n.push(e.value):n.splice(t,1),"value"in x||j(n);var a=_();null===g||void 0===g||g(n.filter((function(e){return S.includes(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:E,disabled:x.disabled,name:x.name,registerValue:function(e){M((function(t){return[].concat((0,d.A)(t),[e])}))},cancelValue:function(e){M((function(t){return t.filter((function(t){return t!==e}))}))}},W=l()(H,(0,a.A)({},"".concat(H,"-rtl"),"rtl"===w),b);return i.createElement("div",(0,o.A)({className:W,style:y},D,{ref:t}),i.createElement(m.Provider,{value:L},r))},b=i.forwardRef(h);const y=i.memo(b);var g=n(19389),x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},C=function(e,t){var n,r=e.prefixCls,d=e.className,p=e.children,f=e.indeterminate,v=void 0!==f&&f,h=e.style,b=e.onMouseEnter,y=e.onMouseLeave,C=e.skipGroup,A=void 0!==C&&C,O=e.disabled,w=x(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),k=i.useContext(s.QO),N=k.getPrefixCls,E=k.direction,j=i.useContext(m),I=(0,i.useContext)(u.$W).isFormItemInput,P=(0,i.useContext)(g.A),S=null!==(n=(null===j||void 0===j?void 0:j.disabled)||O)&&void 0!==n?n:P,M=i.useRef(w.value);i.useEffect((function(){null===j||void 0===j||j.registerValue(w.value)}),[]),i.useEffect((function(){if(!A)return w.value!==M.current&&(null===j||void 0===j||j.cancelValue(M.current),null===j||void 0===j||j.registerValue(w.value),M.current=w.value),function(){return null===j||void 0===j?void 0:j.cancelValue(w.value)}}),[w.value]);var _=N("checkbox",r),R=(0,o.A)({},w);j&&!A&&(R.onChange=function(){w.onChange&&w.onChange.apply(w,arguments),j.toggleOption&&j.toggleOption({label:p,value:w.value})},R.name=j.name,R.checked=j.value.includes(w.value));var H=l()((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(_,"-wrapper"),!0),"".concat(_,"-rtl"),"rtl"===E),"".concat(_,"-wrapper-checked"),R.checked),"".concat(_,"-wrapper-disabled"),S),"".concat(_,"-wrapper-in-form-item"),I),d),D=l()((0,a.A)({},"".concat(_,"-indeterminate"),v)),L=v?"mixed":void 0;return i.createElement("label",{className:H,style:h,onMouseEnter:b,onMouseLeave:y},i.createElement(c.default,(0,o.A)({"aria-checked":L},R,{prefixCls:_,className:D,disabled:S,ref:t})),void 0!==p&&i.createElement("span",null,p))};const A=i.forwardRef(C);var O=A;O.Group=y,O.__ANT_CHECKBOX=!0;const w=O},84266:(e,t,n)=>{n.d(t,{Ay:()=>l,Eb:()=>c,Ng:()=>i,XO:()=>r});var a=n(9950),o=a.createContext(null),r=o.Provider;const l=o;var c=a.createContext(null),i=c.Provider},32690:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(58168),o=n(64467),r=n(5544),l=n(48738),c=n.n(l),i=n(71207),s=n(9950),u=n(5741),d=n(87126),p=n(27373),f=n(84266),v=n(76166),m=s.forwardRef((function(e,t){var n=s.useContext(u.QO),l=n.getPrefixCls,m=n.direction,h=s.useContext(d.A),b=(0,i.A)(e.defaultValue,{value:e.value}),y=(0,r.A)(b,2),g=y[0],x=y[1],C=e.prefixCls,A=e.className,O=void 0===A?"":A,w=e.options,k=e.buttonStyle,N=void 0===k?"outline":k,E=e.disabled,j=e.children,I=e.size,P=e.style,S=e.id,M=e.onMouseEnter,_=e.onMouseLeave,R=e.onFocus,H=e.onBlur,D=l("radio",C),L="".concat(D,"-group"),W=j;w&&w.length>0&&(W=w.map((function(e){return"string"===typeof e||"number"===typeof e?s.createElement(v.A,{key:e.toString(),prefixCls:D,disabled:E,value:e,checked:g===e},e):s.createElement(v.A,{key:"radio-group-value-options-".concat(e.value),prefixCls:D,disabled:e.disabled||E,value:e.value,checked:g===e.value,style:e.style},e.label)})));var B=I||h,T=c()(L,"".concat(L,"-").concat(N),(0,o.A)((0,o.A)({},"".concat(L,"-").concat(B),B),"".concat(L,"-rtl"),"rtl"===m),O);return s.createElement("div",(0,a.A)({},(0,p.A)(e),{className:T,style:P,onMouseEnter:M,onMouseLeave:_,onFocus:R,onBlur:H,id:S,ref:t}),s.createElement(f.XO,{value:{onChange:function(t){var n=g,a=t.target.value;"value"in e||x(a);var o=e.onChange;o&&a!==n&&o(t)},value:g,disabled:e.disabled,name:e.name,optionType:e.optionType}},W))}));const h=s.memo(m)},24893:(e,t,n)=>{n.d(t,{Ay:()=>c});var a=n(32690),o=n(76166),r=n(98338),l=o.A;l.Button=r.A,l.Group=a.A,l.__ANT_RADIO=!0;const c=l},76166:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(64467),o=n(58168),r=n(48738),l=n.n(r),c=n(14691),i=n(41929),s=n(9950),u=n(5741),d=n(19389),p=n(77643),f=n(84266),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},m=function(e,t){var n,r,m=s.useContext(f.Ay),h=s.useContext(f.Eb),b=s.useContext(u.QO),y=b.getPrefixCls,g=b.direction,x=s.useRef(),C=(0,i.K4)(t,x),A=(0,s.useContext)(p.$W).isFormItemInput,O=e.prefixCls,w=e.className,k=e.children,N=e.style,E=v(e,["prefixCls","className","children","style"]),j=y("radio",O),I="button"===((null===m||void 0===m?void 0:m.optionType)||h)?"".concat(j,"-button"):j,P=(0,o.A)({},E),S=s.useContext(d.A);m&&(P.name=m.name,P.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===m||void 0===m?void 0:m.onChange)||void 0===a||a.call(m,t)},P.checked=e.value===m.value,P.disabled=null!==(n=P.disabled)&&void 0!==n?n:m.disabled),P.disabled=null!==(r=P.disabled)&&void 0!==r?r:S;var M=l()("".concat(I,"-wrapper"),(0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(I,"-wrapper-checked"),P.checked),"".concat(I,"-wrapper-disabled"),P.disabled),"".concat(I,"-wrapper-rtl"),"rtl"===g),"".concat(I,"-wrapper-in-form-item"),A),w);return s.createElement("label",{className:M,style:N,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},s.createElement(c.default,(0,o.A)({},P,{type:"radio",prefixCls:I,ref:C})),void 0!==k?s.createElement("span",null,k):null)};const h=s.forwardRef(m)},98338:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(58168),o=n(9950),r=n(5741),l=n(84266),c=n(76166),i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},s=function(e,t){var n=o.useContext(r.QO).getPrefixCls,s=e.prefixCls,u=i(e,["prefixCls"]),d=n("radio",s);return o.createElement(l.Ng,{value:"button"},o.createElement(c.A,(0,a.A)({prefixCls:d},u,{type:"radio",ref:t})))};const u=o.forwardRef(s)},99674:(e,t,n)=>{n.d(t,{A:()=>O});var a=n(64467),o=n(58168),r=n(48738),l=n.n(r),c=n(97611),i=n(15207),s=n(9950),u=n(5741),d=n(45534),p=n(19389),f=n(87126),v=n(77643),m=n(49437),h=n(91396),b=n(15735),y=n(93457),g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},x="SECRET_COMBOBOX_MODE_DO_NOT_USE",C=function(e,t){var n,r=e.prefixCls,C=e.bordered,A=void 0===C||C,O=e.className,w=e.getPopupContainer,k=e.dropdownClassName,N=e.popupClassName,E=e.listHeight,j=void 0===E?256:E,I=e.placement,P=e.listItemHeight,S=void 0===P?32:P,M=e.size,_=e.disabled,R=e.notFoundContent,H=e.status,D=e.showArrow,L=g(e,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),W=s.useContext(u.QO),B=W.getPopupContainer,T=W.getPrefixCls,F=W.renderEmpty,V=W.direction,Q=W.virtual,z=W.dropdownMatchSelectWidth,G=s.useContext(f.A),U=T("select",r),X=T(),$=(0,y.RQ)(U,V),K=$.compactSize,J=$.compactItemClassnames,Y=s.useMemo((function(){var e=L.mode;if("combobox"!==e)return e===x?"combobox":e}),[L.mode]),q="multiple"===Y||"tags"===Y,Z=void 0!==D?D:L.loading||!(q||"combobox"===Y),ee=(0,s.useContext)(v.$W),te=ee.status,ne=ee.hasFeedback,ae=ee.isFormItemInput,oe=ee.feedbackIcon,re=(0,h.v)(te,H);n=void 0!==R?R:"combobox"===Y?null:(F||d.A)("Select");var le=(0,b.A)((0,o.A)((0,o.A)({},L),{multiple:q,hasFeedback:ne,feedbackIcon:oe,showArrow:Z,prefixCls:U})),ce=le.suffixIcon,ie=le.itemIcon,se=le.removeIcon,ue=le.clearIcon,de=(0,i.A)(L,["suffixIcon","itemIcon"]),pe=l()(N||k,(0,a.A)({},"".concat(U,"-dropdown-").concat(V),"rtl"===V)),fe=K||M||G,ve=s.useContext(p.A),me=null!==_&&void 0!==_?_:ve,he=l()((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(U,"-lg"),"large"===fe),"".concat(U,"-sm"),"small"===fe),"".concat(U,"-rtl"),"rtl"===V),"".concat(U,"-borderless"),!A),"".concat(U,"-in-form-item"),ae),(0,h.L)(U,re,ne),J,O);return s.createElement(c.Ay,(0,o.A)({ref:t,virtual:Q,dropdownMatchSelectWidth:z},de,{transitionName:(0,m.by)(X,(0,m.TL)(I),L.transitionName),listHeight:j,listItemHeight:S,mode:Y,prefixCls:U,placement:void 0!==I?I:"rtl"===V?"bottomRight":"bottomLeft",direction:V,inputIcon:ce,menuItemSelectedIcon:ie,removeIcon:se,clearIcon:ue,notFoundContent:n,className:he,getPopupContainer:w||B,dropdownClassName:pe,showArrow:ne||D,disabled:me}))},A=s.forwardRef(C);A.SECRET_COMBOBOX_MODE_DO_NOT_USE=x,A.Option=c.c$,A.OptGroup=c.JM;const O=A},14691:(e,t,n)=>{n.r(t),n.d(t,{Checkbox:()=>f,default:()=>v});var a=n(58168),o=n(89379),r=n(64467),l=n(5544),c=n(80045),i=n(48738),s=n.n(i),u=n(71207),d=n(9950),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],f=(0,d.forwardRef)((function(e,t){var n,i=e.prefixCls,f=void 0===i?"rc-checkbox":i,v=e.className,m=e.style,h=e.checked,b=e.disabled,y=e.defaultChecked,g=void 0!==y&&y,x=e.type,C=void 0===x?"checkbox":x,A=e.onChange,O=(0,c.A)(e,p),w=(0,d.useRef)(null),k=(0,u.A)(g,{value:h}),N=(0,l.A)(k,2),E=N[0],j=N[1];(0,d.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=w.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=w.current)||void 0===e||e.blur()},input:w.current}}));var I=s()(f,v,(n={},(0,r.A)(n,"".concat(f,"-checked"),E),(0,r.A)(n,"".concat(f,"-disabled"),b),n));return d.createElement("span",{className:I,style:m},d.createElement("input",(0,a.A)({},O,{className:"".concat(f,"-input"),ref:w,onChange:function(t){b||("checked"in e||j(t.target.checked),null===A||void 0===A||A({target:(0,o.A)((0,o.A)({},e),{},{type:C,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:b,checked:!!E,type:C})),d.createElement("span",{className:"".concat(f,"-inner")}))}));const v=f},47653:(e,t,n)=>{n.d(t,{A:()=>l,V:()=>c});var a,o=n(28619);function r(e){var t="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),n=document.createElement("div");n.id=t;var a,r,l=n.style;if(l.position="absolute",l.left="0",l.top="0",l.width="100px",l.height="100px",l.overflow="scroll",e){var c=getComputedStyle(e);l.scrollbarColor=c.scrollbarColor,l.scrollbarWidth=c.scrollbarWidth;var i=getComputedStyle(e,"::-webkit-scrollbar"),s=parseInt(i.width,10),u=parseInt(i.height,10);try{var d=s?"width: ".concat(i.width,";"):"",p=u?"height: ".concat(i.height,";"):"";(0,o.BD)("\n#".concat(t,"::-webkit-scrollbar {\n").concat(d,"\n").concat(p,"\n}"),t)}catch(m){console.error(m),a=s,r=u}}document.body.appendChild(n);var f=e&&a&&!isNaN(a)?a:n.offsetWidth-n.clientWidth,v=e&&r&&!isNaN(r)?r:n.offsetHeight-n.clientHeight;return document.body.removeChild(n),(0,o.m6)(t),{width:f,height:v}}function l(e){return"undefined"===typeof document?0:((e||void 0===a)&&(a=r()),a.width)}function c(e){return"undefined"!==typeof document&&e&&e instanceof Element?r(e):{width:0,height:0}}}}]);