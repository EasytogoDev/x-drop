"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[8486],{14910:(e,t,n)=>{n.d(t,{A:()=>a});n(9950);const a=n.p+"static/media/google-plus.ff5ae61510aa58cedbe9855922094f21.svg"},66081:(e,t,n)=>{n.r(t),n.d(t,{Checkbox:()=>l,CheckboxGroup:()=>c});var a=n(9950),r=n(27079),i=n(44414);const c=r.CheckboxStyle.Group;function l(e){const{item:t,defaultSelect:n,checked:l,multiple:s,onChange:o,onChangeTriger:u,defaultChecked:d,disabled:h,children:f}=e,p=t,[g,m]=(0,a.useState)({checkedList:n,indeterminate:!0,checkAll:!1});(0,a.useEffect)((()=>{u&&u(g.checkedList)}),[g]);return s?(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{borderBottom:"1px solid #E9E9E9"},children:(0,i.jsx)(r.CheckboxStyle,{indeterminate:g.indeterminate,onChange:e=>{m({checkedList:e.target.checked?p:[],indeterminate:!1,checkAll:e.target.checked})},checked:g.checkAll,children:"Check all"})}),(0,i.jsx)("br",{}),(0,i.jsx)(c,{options:p,value:g.checkedList,onChange:e=>{m({checkedList:e,indeterminate:!!e.length&&e.length<p.length,checkAll:e.length===p.length})}})]}):(0,i.jsx)(r.CheckboxStyle,{checked:l,onChange:e=>o(e.target.checked,e.target.value),defaultChecked:d,disabled:h,children:f})}l.defaultProps={checked:!1}},27079:(e,t,n)=>{n.r(t),n.d(t,{CheckboxStyle:()=>c});var a,r=n(57528),i=n(52765);const c=(0,n(19335).Ay)(i.A)(a||(a=(0,r.A)(["\n\n"])))},58486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(9950),r=n(28429),i=n(42074),c=n(87827),l=n(87094),s=n(41988),o=n(55902),u=n(48538),d=n(73878),h=n(34774),f=n(90743),p=n(64833),g=n(19831),m=n(82771),v=n(25299),b=n(4774),x=n(66081),A=n(44414);const w=function(){const e=(0,r.Zp)(),t=(0,d.wA)(),{isLoading:w,error:k,isFbAuthenticate:y}=(0,d.d4)((e=>({error:e.firebaseAuth.error,isLoading:e.firebaseAuth.loading,isFbAuthenticate:e.fb.auth.uid}))),[j]=c.A.useForm(),[C,E]=(0,a.useState)({checked:null});return(0,a.useEffect)((()=>{y&&t((0,v.login)((()=>e("/admin"))))}),[y,e,t]),(0,A.jsx)(l.A,{justify:"center",children:(0,A.jsx)(s.A,{xxl:6,xl:8,md:12,sm:18,children:(0,A.jsxs)(m.AuthFormWrap,{children:[(0,A.jsx)("div",{className:"ninjadash-authentication-top",children:(0,A.jsx)("h2",{className:"ninjadash-authentication-top__title",children:"Firebase Sign in GoDash"})}),(0,A.jsx)("div",{className:"ninjadash-authentication-content",children:(0,A.jsxs)(c.A,{name:"login",form:j,onFinish:e=>{t((0,b.fbAuthLogin)(e))},layout:"vertical",children:[(0,A.jsx)(c.A.Item,{name:"username",rules:[{message:"Please input your username or Email!",required:!0}],initialValue:"name@example.com",label:"Username or Email Address",children:(0,A.jsx)(o.A,{placeholder:"name@example.com"})}),(0,A.jsx)(c.A.Item,{name:"password",initialValue:"123456",label:"Password",children:(0,A.jsx)(o.A.Password,{placeholder:"Password"})}),(0,A.jsxs)("div",{className:"ninjadash-auth-extra-links",children:[(0,A.jsx)(x.Checkbox,{onChange:e=>{E({...C,checked:e})},checked:C.checked,children:"Keep me logged in"}),(0,A.jsx)(i.k2,{className:"forgot-pass-link",to:"/forgotPassword",children:"Forgot password?"})]}),k?(0,A.jsx)("p",{children:k.message}):null,(0,A.jsx)(c.A.Item,{children:(0,A.jsx)(u.A,{className:"btn-signin",htmlType:"submit",type:"primary",size:"large",children:w?"Loading...":"Sign In"})}),(0,A.jsx)("p",{className:"ninjadash-form-divider",children:(0,A.jsx)("span",{children:"Or"})}),(0,A.jsxs)("ul",{className:"ninjadash-social-login",children:[(0,A.jsx)("li",{children:(0,A.jsx)(i.N_,{onClick:()=>t((0,b.fbAuthLoginWithGoogle)()),className:"google-social",to:"#",children:(0,A.jsx)(h.k,{src:n(14910).A})})}),(0,A.jsx)("li",{children:(0,A.jsx)(i.N_,{onClick:()=>t((0,b.fbAuthLoginWithFacebook)()),className:"facebook-social",to:"#",children:(0,A.jsx)(f.A,{})})}),(0,A.jsx)("li",{children:(0,A.jsx)(i.N_,{className:"twitter-social",to:"#",children:(0,A.jsx)(p.A,{})})}),(0,A.jsx)("li",{children:(0,A.jsx)(i.N_,{className:"github-social",to:"#",children:(0,A.jsx)(g.A,{})})})]})]})}),(0,A.jsx)("div",{className:"ninjadash-authentication-bottom",children:(0,A.jsxs)("p",{children:["Don`t have an account?",(0,A.jsx)(i.N_,{to:"/fbRegister",children:"Sign up"})]})})]})})})}},4774:(e,t,n)=>{n.r(t),n.d(t,{fbAuthLogin:()=>f,fbAuthLoginWithFacebook:()=>v,fbAuthLoginWithGoogle:()=>m,fbAuthLogout:()=>p,fbAuthSignUp:()=>g});var a=n(67936);const{fbLoginBegin:r,fbLoginSuccess:i,fbLoginErr:c,fbLogOutBegin:l,fbLogOutSuccess:s,fbLogOutErr:o,fbSignUpBegin:u,fbSignUpSuccess:d,fbSignUpErr:h}=a.default,f=e=>async(t,n,a)=>{let{getFirebase:l}=a;const s=l();try{await t(r()),await s.auth().signInWithEmailAndPassword(e.username,e.password),await t(i())}catch(o){await t(c(o))}},p=e=>async(t,n,a)=>{let{getFirebase:r}=a;const i=r();try{await t(l()),await i.auth().signOut(),await t(s()),e()}catch(c){await t(o(c))}},g=e=>async(t,n,a)=>{let{getFirebase:r,getFirestore:i}=a;const c=i(),l=r();try{await t(u());const n=await l.auth().createUserWithEmailAndPassword(e.email,e.password);await c.collection("users").doc(n.user.uid).set({...e}),await t(d())}catch(s){await t(h(s))}},m=()=>async(e,t,n)=>{let{getFirebase:a}=n;const l=a(),s=new l.auth.GoogleAuthProvider;try{await e(r());const t=await l.auth().signInWithPopup(s);await e(i(t))}catch(o){await e(c(o))}},v=()=>async(e,t,n)=>{let{getFirebase:a}=n;const l=a(),s=new l.auth.FacebookAuthProvider;try{await e(r());const t=await l.auth().signInWithPopup(s);await e(i(t))}catch(o){await e(c(o))}}},90743:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(72603),r=n(11942),i=n.n(r);const c=e=>{const{color:t,size:n,...r}=e;return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},a.createElement("path",{d:"M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"}))};c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.defaultProps={color:"currentColor",size:"24"};const l=c},19831:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(72603),r=n(11942),i=n.n(r);const c=e=>{const{color:t,size:n,...r}=e;return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},a.createElement("path",{d:"M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"}))};c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.defaultProps={color:"currentColor",size:"24"};const l=c},64833:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(72603),r=n(11942),i=n.n(r);const c=e=>{const{color:t,size:n,...r}=e;return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},a.createElement("path",{d:"M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"}))};c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.defaultProps={color:"currentColor",size:"24"};const l=c},52765:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(64467),r=n(58168),i=n(48738),c=n.n(i),l=n(14691),s=n(9950),o=n(5741),u=n(77643),d=n(60436),h=n(5544),f=n(15207),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=s.createContext(null),m=function(e,t){var n=e.defaultValue,i=e.children,l=e.options,u=void 0===l?[]:l,m=e.prefixCls,v=e.className,b=e.style,x=e.onChange,A=p(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),w=s.useContext(o.QO),y=w.getPrefixCls,j=w.direction,C=s.useState(A.value||n||[]),E=(0,h.A)(C,2),O=E[0],N=E[1],P=s.useState([]),L=(0,h.A)(P,2),S=L[0],F=L[1];s.useEffect((function(){"value"in A&&N(A.value||[])}),[A.value]);var V=function(){return u.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},I=y("checkbox",m),z="".concat(I,"-group"),W=(0,f.A)(A,["value","disabled"]);u&&u.length>0&&(i=V().map((function(e){return s.createElement(k,{prefixCls:I,key:e.value.toString(),disabled:"disabled"in e?e.disabled:A.disabled,value:e.value,checked:O.includes(e.value),onChange:e.onChange,className:"".concat(z,"-item"),style:e.style},e.label)})));var _={toggleOption:function(e){var t=O.indexOf(e.value),n=(0,d.A)(O);-1===t?n.push(e.value):n.splice(t,1),"value"in A||N(n);var a=V();null===x||void 0===x||x(n.filter((function(e){return S.includes(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:O,disabled:A.disabled,name:A.name,registerValue:function(e){F((function(t){return[].concat((0,d.A)(t),[e])}))},cancelValue:function(e){F((function(t){return t.filter((function(t){return t!==e}))}))}},G=c()(z,(0,a.A)({},"".concat(z,"-rtl"),"rtl"===j),v);return s.createElement("div",(0,r.A)({className:G,style:b},W,{ref:t}),s.createElement(g.Provider,{value:_},i))},v=s.forwardRef(m);const b=s.memo(v);var x=n(19389),A=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},w=function(e,t){var n,i=e.prefixCls,d=e.className,h=e.children,f=e.indeterminate,p=void 0!==f&&f,m=e.style,v=e.onMouseEnter,b=e.onMouseLeave,w=e.skipGroup,k=void 0!==w&&w,y=e.disabled,j=A(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),C=s.useContext(o.QO),E=C.getPrefixCls,O=C.direction,N=s.useContext(g),P=(0,s.useContext)(u.$W).isFormItemInput,L=(0,s.useContext)(x.A),S=null!==(n=(null===N||void 0===N?void 0:N.disabled)||y)&&void 0!==n?n:L,F=s.useRef(j.value);s.useEffect((function(){null===N||void 0===N||N.registerValue(j.value)}),[]),s.useEffect((function(){if(!k)return j.value!==F.current&&(null===N||void 0===N||N.cancelValue(F.current),null===N||void 0===N||N.registerValue(j.value),F.current=j.value),function(){return null===N||void 0===N?void 0:N.cancelValue(j.value)}}),[j.value]);var V=E("checkbox",i),I=(0,r.A)({},j);N&&!k&&(I.onChange=function(){j.onChange&&j.onChange.apply(j,arguments),N.toggleOption&&N.toggleOption({label:h,value:j.value})},I.name=N.name,I.checked=N.value.includes(j.value));var z=c()((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(V,"-wrapper"),!0),"".concat(V,"-rtl"),"rtl"===O),"".concat(V,"-wrapper-checked"),I.checked),"".concat(V,"-wrapper-disabled"),S),"".concat(V,"-wrapper-in-form-item"),P),d),W=c()((0,a.A)({},"".concat(V,"-indeterminate"),p)),_=p?"mixed":void 0;return s.createElement("label",{className:z,style:m,onMouseEnter:v,onMouseLeave:b},s.createElement(l.default,(0,r.A)({"aria-checked":_},I,{prefixCls:V,className:W,disabled:S,ref:t})),void 0!==h&&s.createElement("span",null,h))};const k=s.forwardRef(w);var y=k;y.Group=b,y.__ANT_CHECKBOX=!0;const j=y},14691:(e,t,n)=>{n.r(t),n.d(t,{Checkbox:()=>f,default:()=>p});var a=n(58168),r=n(89379),i=n(64467),c=n(5544),l=n(80045),s=n(48738),o=n.n(s),u=n(71207),d=n(9950),h=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],f=(0,d.forwardRef)((function(e,t){var n,s=e.prefixCls,f=void 0===s?"rc-checkbox":s,p=e.className,g=e.style,m=e.checked,v=e.disabled,b=e.defaultChecked,x=void 0!==b&&b,A=e.type,w=void 0===A?"checkbox":A,k=e.onChange,y=(0,l.A)(e,h),j=(0,d.useRef)(null),C=(0,u.A)(x,{value:m}),E=(0,c.A)(C,2),O=E[0],N=E[1];(0,d.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=j.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=j.current)||void 0===e||e.blur()},input:j.current}}));var P=o()(f,p,(n={},(0,i.A)(n,"".concat(f,"-checked"),O),(0,i.A)(n,"".concat(f,"-disabled"),v),n));return d.createElement("span",{className:P,style:g},d.createElement("input",(0,a.A)({},y,{className:"".concat(f,"-input"),ref:j,onChange:function(t){v||("checked"in e||N(t.target.checked),null===k||void 0===k||k({target:(0,r.A)((0,r.A)({},e),{},{type:w,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:v,checked:!!O,type:w})),d.createElement("span",{className:"".concat(f,"-inner")}))}));const p=f}}]);