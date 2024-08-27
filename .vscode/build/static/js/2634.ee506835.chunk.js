"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2634],{72449:(n,e,t)=>{t.r(e),t.d(e,{BtnGroup:()=>l,Button:()=>a});var o=t(9950),r=t(8737),c=t(44414);function a(n){const{type:e,shape:t,icon:a,size:l,outlined:d,ghost:s,transparented:i,raised:u,squared:h,color:p,social:x,load:m,children:f,...g}=n,[b,y]=(0,o.useState)({loading:!1});return(0,c.jsx)(r.ButtonStyled,{squared:h,outlined:d?1:0,ghost:s,transparent:i?1:0,raised:u?1:0,data:e,size:l,shape:t,type:e,icon:a,color:p,social:x,onClick:m&&(()=>{y({loading:!0})}),loading:b.loading,...g,children:f})}function l(n){let{children:e}=n;return(0,c.jsx)(r.ButtonStyledGroup,{children:e})}a.defaultProps={type:"default"}},8737:(n,e,t)=>{t.r(e),t.d(e,{ButtonStyled:()=>s,ButtonStyledGroup:()=>i});var o,r,c=t(57528),a=t(48538),l=t(19335);const d=a.A.Group,s=(0,l.Ay)(a.A)(o||(o=(0,c.A)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(n=>{let{type:e,theme:t}=n;return"default"!==e&&t["".concat(e,"-color")]}),(n=>{let{type:e}=n;return"dashed"!==e?"solid":"dashed"}),(n=>{let{theme:e,type:t}=n;return"default"!==t?"#ffffff":e[e.mainContent]["gray-text"]}),(n=>{let{shape:e}=n;return e?"40px":"4px"}),(n=>{let{size:e,theme:t}=n;return"default"!==e?t["btn-height-".concat(e)]:"44px"}),(n=>{let{type:e,theme:t}=n;return"default"!==e?t["white-color"]:t["light-color"]}),(n=>{let{type:e,theme:t}=n;return"default"!==e&&t["".concat(e,"-hover")]}),(n=>{let{theme:e}=n;return e.rtl?"margin-right":"margin-left"}),(n=>{let{transparent:e,theme:t,type:o}=n;return e&&((n,e)=>"\n        background: ".concat(n["".concat(e,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(e,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==e&&n["".concat(e,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==e&&n["".concat(e,"-hover")],"; \n        }\n    "))(t,o)}),(n=>{let{outlined:e,theme:t,type:o}=n;return e&&((n,e)=>"\n        background: transparent;\n        border: 1px solid ".concat("light"!==e?n["".concat(e,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==e?n["".concat(e,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==e?n["".concat(e,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          }\n        }\n    "))(t,o)}),(n=>{let{ghost:e,theme:t}=n;return e&&(n=>"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    "))(t)}),(n=>{let{raised:e,theme:t,type:o}=n;return e&&((n,e)=>"\n        box-shadow: 0 8px 13px ".concat("white"!==e?n["".concat(e,"-color")]:n["light-color"],"20;\n    "))(t,o)}),(n=>{let{squared:e,theme:t,type:o}=n;return e&&((n,e)=>"\n    background: ".concat("default"!==e&&n["".concat(e,"-color")],";\n    border: 1px solid ").concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat("default"!==e&&"#ffffff",";\n    }\n"))(t,o)}),(n=>{let{squared:e,outlined:t,theme:o,type:r}=n;return e&&t&&((n,e)=>"\n    background: transparent;\n    border: 1px solid ".concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat((n=>{let{theme:e,type:t}=n;return"default"!==t&&e["white-color"]}),";\n    }\n"))(o,r)}),(n=>{let{social:e,color:t,shape:o}=n;return e&&((n,e)=>"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((n=>{let{theme:e}=n;return e["white-color"]}),";\n    border-radius: ").concat(e?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((n=>{let{theme:e}=n;return e["white-color"]}),";\n    }\n"))(t,o)})),i=(0,l.Ay)(d)(r||(r=(0,c.A)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(n=>{let{theme:e}=n;return e[e.mainContent].bgNormal}))},2634:(n,e,t)=>{t.r(e),t.d(e,{default:()=>x});var o=t(9950),r=t(87827),c=t(87094),a=t(41988),l=t(55902),d=t(36672),s=t(29355),i=t(72449),u=t(67482),h=t(42017),p=t(44414);const x=function(){const[n]=r.A.useForm(),[e,t]=(0,o.useState)({name:"clayton",values:null});return(0,p.jsx)(d.AccountWrapper,{children:(0,p.jsx)(s.Cards,{title:(0,p.jsxs)("div",{className:"setting-card-title",children:[(0,p.jsx)(h.default,{as:"h4",children:"Account Settings"}),(0,p.jsx)("span",{children:"Update your username and manage your account"})]}),children:(0,p.jsx)(c.A,{children:(0,p.jsx)(a.A,{xs:24,children:(0,p.jsx)(u.BasicFormWrapper,{children:(0,p.jsxs)(r.A,{form:n,name:"editAccount",onFinish:n=>{t({...e,values:n})},children:[(0,p.jsx)("div",{className:"account-form-top",children:(0,p.jsx)(c.A,{justify:"center",children:(0,p.jsx)(a.A,{xxl:10,lg:16,md:18,xs:24,children:(0,p.jsxs)("div",{className:"account-form",children:[(0,p.jsx)(r.A.Item,{name:"username",initialValue:e.name,label:"Username",children:(0,p.jsx)(l.A,{onChange:n=>{t({name:n.target.value})}})}),(0,p.jsxs)("p",{children:["Your Dashboard URL: http://dashboard.com/",(0,p.jsx)("span",{children:e.name})]}),(0,p.jsx)(r.A.Item,{name:"email",initialValue:"contact@example.com",rules:[{type:"email"}],label:"Email",children:(0,p.jsx)(l.A,{})})]})})})}),(0,p.jsx)("div",{className:"account-form-bottom",children:(0,p.jsx)(c.A,{justify:"center",children:(0,p.jsxs)(a.A,{xxl:10,lg:16,md:18,xs:24,children:[(0,p.jsx)("div",{className:"account-closing",children:(0,p.jsxs)(c.A,{children:[(0,p.jsxs)(a.A,{lg:18,md:24,sm:18,xs:24,children:[(0,p.jsx)(h.default,{className:"account-closing__title",as:"h4",children:"Close Account"}),(0,p.jsx)("p",{children:"Delete Your Account and Account data"})]}),(0,p.jsx)(a.A,{lg:6,md:24,sm:6,xs:24,children:(0,p.jsx)(i.Button,{size:"small",type:"danger",children:"Close Account"})})]})}),(0,p.jsx)("div",{className:"account-action",children:(0,p.jsxs)("div",{className:"setting-form-actions",children:[(0,p.jsx)(i.Button,{size:"default",htmlType:"submit",type:"primary",children:"Save Change"}),"\xa0 \xa0",(0,p.jsx)(i.Button,{size:"default",onClick:e=>{e.preventDefault(),n.resetFields()},type:"light",children:"Cancel"})]})})]})})})]})})})})})})}}}]);