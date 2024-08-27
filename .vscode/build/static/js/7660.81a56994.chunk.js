"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[7660],{72449:(e,n,t)=>{t.r(n),t.d(n,{BtnGroup:()=>c,Button:()=>l});var o=t(9950),a=t(8737),r=t(44414);function l(e){const{type:n,shape:t,icon:l,size:c,outlined:i,ghost:s,transparented:d,raised:u,squared:p,color:h,social:m,load:g,children:f,...x}=e,[b,y]=(0,o.useState)({loading:!1});return(0,r.jsx)(a.ButtonStyled,{squared:p,outlined:i?1:0,ghost:s,transparent:d?1:0,raised:u?1:0,data:n,size:c,shape:t,type:n,icon:l,color:h,social:m,onClick:g&&(()=>{y({loading:!0})}),loading:b.loading,...x,children:f})}function c(e){let{children:n}=e;return(0,r.jsx)(a.ButtonStyledGroup,{children:n})}l.defaultProps={type:"default"}},8737:(e,n,t)=>{t.r(n),t.d(n,{ButtonStyled:()=>s,ButtonStyledGroup:()=>d});var o,a,r=t(57528),l=t(48538),c=t(19335);const i=l.A.Group,s=(0,c.Ay)(l.A)(o||(o=(0,r.A)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(e=>{let{type:n,theme:t}=e;return"default"!==n&&t["".concat(n,"-color")]}),(e=>{let{type:n}=e;return"dashed"!==n?"solid":"dashed"}),(e=>{let{theme:n,type:t}=e;return"default"!==t?"#ffffff":n[n.mainContent]["gray-text"]}),(e=>{let{shape:n}=e;return n?"40px":"4px"}),(e=>{let{size:n,theme:t}=e;return"default"!==n?t["btn-height-".concat(n)]:"44px"}),(e=>{let{type:n,theme:t}=e;return"default"!==n?t["white-color"]:t["light-color"]}),(e=>{let{type:n,theme:t}=e;return"default"!==n&&t["".concat(n,"-hover")]}),(e=>{let{theme:n}=e;return n.rtl?"margin-right":"margin-left"}),(e=>{let{transparent:n,theme:t,type:o}=e;return n&&((e,n)=>"\n        background: ".concat(e["".concat(n,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(e["".concat(n,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==n&&e["".concat(n,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==n&&e["".concat(n,"-hover")],"; \n        }\n    "))(t,o)}),(e=>{let{outlined:n,theme:t,type:o}=e;return n&&((e,n)=>"\n        background: transparent;\n        border: 1px solid ".concat("light"!==n?e["".concat(n,"-color")]:e[e.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==n?e["".concat(n,"-color")]:e["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==n?e["".concat(n,"-hover")]:e["primary-color"],";\n          color: ").concat("light"!==n?e["".concat(n,"-color")]:e["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==n?e["".concat(n,"-color")]:e["primary-color"],";\n          }\n        }\n    "))(t,o)}),(e=>{let{ghost:n,theme:t}=e;return n&&(e=>"\n          background: transparent;\n          border: 1px solid ".concat(e["border-color-normal"]," !important;\n          color: ").concat(e["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(e["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(e["border-color-normal"]," !important;\n        }\n    "))(t)}),(e=>{let{raised:n,theme:t,type:o}=e;return n&&((e,n)=>"\n        box-shadow: 0 8px 13px ".concat("white"!==n?e["".concat(n,"-color")]:e["light-color"],"20;\n    "))(t,o)}),(e=>{let{squared:n,theme:t,type:o}=e;return n&&((e,n)=>"\n    background: ".concat("default"!==n&&e["".concat(n,"-color")],";\n    border: 1px solid ").concat("default"!==n?e["".concat(n,"-color")]:e["disabled-color"],";\n    color: ").concat("default"!==n&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==n&&e["".concat(n,"-hover")],";\n        border: 1px solid ").concat("default"!==n&&e["".concat(n,"-hover")],";\n        color: ").concat("default"!==n&&"#ffffff",";\n    }\n"))(t,o)}),(e=>{let{squared:n,outlined:t,theme:o,type:a}=e;return n&&t&&((e,n)=>"\n    background: transparent;\n    border: 1px solid ".concat("default"!==n?e["".concat(n,"-color")]:e["disabled-color"],";\n    color: ").concat("default"!==n&&e["".concat(n,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==n&&e["".concat(n,"-hover")],";\n        border: 1px solid ").concat("default"!==n&&e["".concat(n,"-hover")],";\n        color: ").concat((e=>{let{theme:n,type:t}=e;return"default"!==t&&n["white-color"]}),";\n    }\n"))(o,a)}),(e=>{let{social:n,color:t,shape:o}=e;return n&&((e,n)=>"\n    background: ".concat(e,";\n    background: ").concat(e,";\n    border: 1px solid ").concat(e,";\n    color: ").concat((e=>{let{theme:n}=e;return n["white-color"]}),";\n    border-radius: ").concat(n?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(e,"90;\n        border: 1px solid ").concat(e,"90;\n        color: ").concat((e=>{let{theme:n}=e;return n["white-color"]}),";\n    }\n"))(t,o)})),d=(0,c.Ay)(i)(a||(a=(0,r.A)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(e=>{let{theme:n}=e;return n[n.mainContent].bgNormal}))},8755:(e,n,t)=>{t.r(n),t.d(n,{TagStyle:()=>l});var o,a=t(57528),r=t(12916);const l=(0,t(19335).Ay)(r.A)(o||(o=(0,a.A)(["\n    &.ninjadash-tag-new{\n        .ant-tag{\n            background-color: ",";\n        }\n    }\n"])),(e=>{let{theme:n}=e;return n[n.mainContent]["white-background"]}))},27785:(e,n,t)=>{t.r(n),t.d(n,{Tag:()=>s});var o=t(8750),a=t(55902),r=t(9950),l=t(8755),c=t(44414);const{CheckableTag:i}=l.TagStyle;function s(e){const[n,t]=(0,r.useState)({checked:!0,selectedTags:[]}),{closable:o,onClose:a,color:s,checked:u,onChange:p,data:h,hottags:m,animate:g,children:f}=e,x=h,{selectedTags:b}=n;return u?(0,c.jsx)(i,{props:e,checked:n.checked,onChange:e=>{t({...n,checke:e}),p&&p(e)}}):m?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{style:{marginRight:8},children:"Categories:"}),x.map((e=>(0,c.jsx)(i,{checked:b.indexOf(e)>-1,onChange:o=>((e,o)=>{const{selectedTags:a}=n,r=o?[...a,e]:a.filter((n=>n!==e));t({...n,selectedTags:r}),p&&p(r)})(e,o),children:e},e)))]}):g?(0,c.jsx)(d,{data:h,onChange:p}):(0,c.jsx)(l.TagStyle,{closable:o,onClose:e=>{a(e)},color:s,children:f})}function d(e){const{data:n,onChange:t}=e,[i,s]=(0,r.useState)({tags:n,inputVisible:!1,inputValue:""}),d=()=>{const{inputValue:e}=i;let{tags:n}=i;e&&-1===n.indexOf(e)&&(n=[...n,e]),t&&t(n),s({...i,tags:n,inputVisible:!1,inputValue:""})},{tags:u,inputVisible:p,inputValue:h}=i,m=u.map((e=>{const n=(0,c.jsx)(l.TagStyle,{closable:!0,onClose:n=>{n.preventDefault(),(e=>{const n=i.tags.filter((n=>n!==e));s({tags:n}),t&&t(n)})(e)},children:e});return(0,c.jsx)("span",{style:{display:"inline-block"},children:n},e)}));return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{marginBottom:10},children:m}),p&&(0,c.jsx)(a.A,{autoFocus:!0,type:"text",size:"small",style:{width:78},value:h,onChange:e=>{s({...i,inputValue:e.target.value})},onBlur:d,onPressEnter:d}),!p&&(0,c.jsxs)(l.TagStyle,{className:"ninjadash-tag-new",onClick:()=>{s({...i,inputVisible:!0})},style:{borderStyle:"dashed"},children:[(0,c.jsx)(o.A,{})," New Tag"]})]})}},75e3:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var o=t(9950),a=t(99674),r=t(87827),l=t(87094),c=t(41988),i=t(55902),s=t(29355),d=t(72449),u=t(67482),p=t(42017),h=t(27785),m=t(44414);const{Option:g}=a.A;const f=function(){const[e]=r.A.useForm(),[n,t]=(0,o.useState)({tags:["UI/UX","Branding","Product Design","Web Design"],values:null});return(0,m.jsx)(s.Cards,{title:(0,m.jsxs)("div",{className:"setting-card-title",children:[(0,m.jsx)(p.default,{as:"h4",children:"Edit Profile"}),(0,m.jsx)("span",{children:"Set Up Your Personal Information"})]}),children:(0,m.jsx)(l.A,{justify:"center",children:(0,m.jsx)(c.A,{xl:12,lg:16,xs:24,children:(0,m.jsx)(u.BasicFormWrapper,{children:(0,m.jsxs)(r.A,{name:"editProfile",onFinish:e=>{t({...n,values:{...e,tags:n.tags}})},children:[(0,m.jsx)(r.A.Item,{name:"name",initialValue:"Duran Clayton",label:"Name",children:(0,m.jsx)(i.A,{})}),(0,m.jsx)(r.A.Item,{name:"phone",initialValue:"01742920502",label:"Phone Number",children:(0,m.jsx)(i.A,{})}),(0,m.jsx)(r.A.Item,{name:"country",initialValue:"",label:"Country",children:(0,m.jsxs)(a.A,{style:{width:"100%"},children:[(0,m.jsx)(g,{value:"",children:"Please Select"}),(0,m.jsx)(g,{value:"bangladesh",children:"Bangladesh"}),(0,m.jsx)(g,{value:"india",children:"India"}),(0,m.jsx)(g,{value:"pakistan",children:"Pakistan"})]})}),(0,m.jsx)(r.A.Item,{name:"city",initialValue:"",label:"City",children:(0,m.jsxs)(a.A,{style:{width:"100%"},children:[(0,m.jsx)(g,{value:"",children:"Please Select"}),(0,m.jsx)(g,{value:"dhaka",children:"Dhaka"}),(0,m.jsx)(g,{value:"mymensingh",children:"Mymensingh"}),(0,m.jsx)(g,{value:"khulna",children:"Khulna"})]})}),(0,m.jsx)(r.A.Item,{name:"company",initialValue:"Example",label:"Company Name",children:(0,m.jsx)(i.A,{})}),(0,m.jsx)(r.A.Item,{name:"website",initialValue:"www.example.com",label:"Website",children:(0,m.jsx)(i.A,{})}),(0,m.jsx)(r.A.Item,{name:"userBio",initialValue:"Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee.",label:"User Bio",children:(0,m.jsx)(i.A.TextArea,{rows:3})}),(0,m.jsx)(r.A.Item,{name:"skills",label:"Skills",children:(0,m.jsx)(u.TagInput,{children:(0,m.jsx)(h.Tag,{animate:!0,onChange:e=>{t({tags:e})},data:n.tags})})}),(0,m.jsxs)("div",{className:"setting-form-actions",children:[(0,m.jsx)(d.Button,{size:"default",htmlType:"submit",type:"primary",children:"Update Profile"}),"\xa0 \xa0",(0,m.jsx)(d.Button,{size:"default",onClick:n=>{n.preventDefault(),e.resetFields()},type:"light",children:"Cancel"})]})]})})})})})}},13239:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(89379),a=t(9950);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var l=t(47484),c=function(e,n){return a.createElement(l.A,(0,o.A)((0,o.A)({},e),{},{ref:n,icon:r}))};const i=a.forwardRef(c)},99674:(e,n,t)=>{t.d(n,{A:()=>j});var o=t(64467),a=t(58168),r=t(48738),l=t.n(r),c=t(97611),i=t(15207),s=t(9950),d=t(5741),u=t(45534),p=t(19389),h=t(87126),m=t(77643),g=t(49437),f=t(91396),x=t(15735),b=t(93457),y=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},v="SECRET_COMBOBOX_MODE_DO_NOT_USE",C=function(e,n){var t,r=e.prefixCls,C=e.bordered,A=void 0===C||C,j=e.className,k=e.getPopupContainer,w=e.dropdownClassName,O=e.popupClassName,I=e.listHeight,S=void 0===I?256:I,N=e.placement,P=e.listItemHeight,E=void 0===P?32:P,T=e.size,B=e.disabled,V=e.notFoundContent,z=e.status,F=e.showArrow,D=y(e,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),M=s.useContext(d.QO),R=M.getPopupContainer,_=M.getPrefixCls,H=M.renderEmpty,U=M.direction,q=M.virtual,W=M.dropdownMatchSelectWidth,G=s.useContext(h.A),L=_("select",r),Q=_(),$=(0,b.RQ)(L,U),X=$.compactSize,J=$.compactItemClassnames,K=s.useMemo((function(){var e=D.mode;if("combobox"!==e)return e===v?"combobox":e}),[D.mode]),Y="multiple"===K||"tags"===K,Z=void 0!==F?F:D.loading||!(Y||"combobox"===K),ee=(0,s.useContext)(m.$W),ne=ee.status,te=ee.hasFeedback,oe=ee.isFormItemInput,ae=ee.feedbackIcon,re=(0,f.v)(ne,z);t=void 0!==V?V:"combobox"===K?null:(H||u.A)("Select");var le=(0,x.A)((0,a.A)((0,a.A)({},D),{multiple:Y,hasFeedback:te,feedbackIcon:ae,showArrow:Z,prefixCls:L})),ce=le.suffixIcon,ie=le.itemIcon,se=le.removeIcon,de=le.clearIcon,ue=(0,i.A)(D,["suffixIcon","itemIcon"]),pe=l()(O||w,(0,o.A)({},"".concat(L,"-dropdown-").concat(U),"rtl"===U)),he=X||T||G,me=s.useContext(p.A),ge=null!==B&&void 0!==B?B:me,fe=l()((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)({},"".concat(L,"-lg"),"large"===he),"".concat(L,"-sm"),"small"===he),"".concat(L,"-rtl"),"rtl"===U),"".concat(L,"-borderless"),!A),"".concat(L,"-in-form-item"),oe),(0,f.L)(L,re,te),J,j);return s.createElement(c.Ay,(0,a.A)({ref:n,virtual:q,dropdownMatchSelectWidth:W},ue,{transitionName:(0,g.by)(Q,(0,g.TL)(N),D.transitionName),listHeight:S,listItemHeight:E,mode:K,prefixCls:L,placement:void 0!==N?N:"rtl"===U?"bottomRight":"bottomLeft",direction:U,inputIcon:ce,menuItemSelectedIcon:ie,removeIcon:se,clearIcon:de,notFoundContent:t,className:fe,getPopupContainer:k||R,dropdownClassName:pe,showArrow:te||F,disabled:ge}))},A=s.forwardRef(C);A.SECRET_COMBOBOX_MODE_DO_NOT_USE=v,A.Option=c.c$,A.OptGroup=c.JM;const j=A},12916:(e,n,t)=>{t.d(n,{A:()=>C});var o=t(64467),a=t(58168),r=t(5544),l=t(94118),c=t(48738),i=t.n(c),s=t(15207),d=t(9950),u=t(5741),p=t(78011),h=t(52370),m=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t};const g=function(e){var n=e.prefixCls,t=e.className,r=e.checked,l=e.onChange,c=e.onClick,s=m(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,d.useContext(u.QO).getPrefixCls)("tag",n),h=i()(p,(0,o.A)((0,o.A)({},"".concat(p,"-checkable"),!0),"".concat(p,"-checkable-checked"),r),t);return d.createElement("span",(0,a.A)({},s,{className:h,onClick:function(e){null===l||void 0===l||l(!r),null===c||void 0===c||c(e)}}))};var f=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},x=new RegExp("^(".concat(p.w.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(p.C.join("|"),")$")),y=function(e,n){var t=e.prefixCls,c=e.className,p=e.style,m=e.children,g=e.icon,y=e.color,v=e.onClose,C=e.closeIcon,A=e.closable,j=void 0!==A&&A,k=f(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=d.useContext(u.QO),O=w.getPrefixCls,I=w.direction,S=d.useState(!0),N=(0,r.A)(S,2),P=N[0],E=N[1];d.useEffect((function(){"visible"in k&&E(k.visible)}),[k.visible]);var T=function(){return!!y&&(x.test(y)||b.test(y))},B=(0,a.A)({backgroundColor:y&&!T()?y:void 0},p),V=T(),z=O("tag",t),F=i()(z,(0,o.A)((0,o.A)((0,o.A)((0,o.A)({},"".concat(z,"-").concat(y),V),"".concat(z,"-has-color"),y&&!V),"".concat(z,"-hidden"),!P),"".concat(z,"-rtl"),"rtl"===I),c),D=function(e){e.stopPropagation(),null===v||void 0===v||v(e),e.defaultPrevented||"visible"in k||E(!1)},M="onClick"in k||m&&"a"===m.type,R=(0,s.A)(k,["visible"]),_=g||null,H=_?d.createElement(d.Fragment,null,_,d.createElement("span",null,m)):m,U=d.createElement("span",(0,a.A)({},R,{ref:n,className:F,style:B}),H,j?C?d.createElement("span",{className:"".concat(z,"-close-icon"),onClick:D},C):d.createElement(l.A,{className:"".concat(z,"-close-icon"),onClick:D}):null);return M?d.createElement(h.A,null,U):U},v=d.forwardRef(y);v.CheckableTag=g;const C=v}}]);