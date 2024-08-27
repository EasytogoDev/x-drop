"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[1596],{72449:(e,n,t)=>{t.r(n),t.d(n,{BtnGroup:()=>c,Button:()=>l});var o=t(9950),r=t(8737),a=t(44414);function l(e){const{type:n,shape:t,icon:l,size:c,outlined:s,ghost:i,transparented:d,raised:u,squared:p,color:h,social:f,load:b,children:m,...x}=e,[g,y]=(0,o.useState)({loading:!1});return(0,a.jsx)(r.ButtonStyled,{squared:p,outlined:s?1:0,ghost:i,transparent:d?1:0,raised:u?1:0,data:n,size:c,shape:t,type:n,icon:l,color:h,social:f,onClick:b&&(()=>{y({loading:!0})}),loading:g.loading,...x,children:m})}function c(e){let{children:n}=e;return(0,a.jsx)(r.ButtonStyledGroup,{children:n})}l.defaultProps={type:"default"}},8737:(e,n,t)=>{t.r(n),t.d(n,{ButtonStyled:()=>i,ButtonStyledGroup:()=>d});var o,r,a=t(57528),l=t(48538),c=t(19335);const s=l.A.Group,i=(0,c.Ay)(l.A)(o||(o=(0,a.A)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(e=>{let{type:n,theme:t}=e;return"default"!==n&&t["".concat(n,"-color")]}),(e=>{let{type:n}=e;return"dashed"!==n?"solid":"dashed"}),(e=>{let{theme:n,type:t}=e;return"default"!==t?"#ffffff":n[n.mainContent]["gray-text"]}),(e=>{let{shape:n}=e;return n?"40px":"4px"}),(e=>{let{size:n,theme:t}=e;return"default"!==n?t["btn-height-".concat(n)]:"44px"}),(e=>{let{type:n,theme:t}=e;return"default"!==n?t["white-color"]:t["light-color"]}),(e=>{let{type:n,theme:t}=e;return"default"!==n&&t["".concat(n,"-hover")]}),(e=>{let{theme:n}=e;return n.rtl?"margin-right":"margin-left"}),(e=>{let{transparent:n,theme:t,type:o}=e;return n&&((e,n)=>"\n        background: ".concat(e["".concat(n,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(e["".concat(n,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==n&&e["".concat(n,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==n&&e["".concat(n,"-hover")],"; \n        }\n    "))(t,o)}),(e=>{let{outlined:n,theme:t,type:o}=e;return n&&((e,n)=>"\n        background: transparent;\n        border: 1px solid ".concat("light"!==n?e["".concat(n,"-color")]:e[e.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==n?e["".concat(n,"-color")]:e["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==n?e["".concat(n,"-hover")]:e["primary-color"],";\n          color: ").concat("light"!==n?e["".concat(n,"-color")]:e["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==n?e["".concat(n,"-color")]:e["primary-color"],";\n          }\n        }\n    "))(t,o)}),(e=>{let{ghost:n,theme:t}=e;return n&&(e=>"\n          background: transparent;\n          border: 1px solid ".concat(e["border-color-normal"]," !important;\n          color: ").concat(e["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(e["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(e["border-color-normal"]," !important;\n        }\n    "))(t)}),(e=>{let{raised:n,theme:t,type:o}=e;return n&&((e,n)=>"\n        box-shadow: 0 8px 13px ".concat("white"!==n?e["".concat(n,"-color")]:e["light-color"],"20;\n    "))(t,o)}),(e=>{let{squared:n,theme:t,type:o}=e;return n&&((e,n)=>"\n    background: ".concat("default"!==n&&e["".concat(n,"-color")],";\n    border: 1px solid ").concat("default"!==n?e["".concat(n,"-color")]:e["disabled-color"],";\n    color: ").concat("default"!==n&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==n&&e["".concat(n,"-hover")],";\n        border: 1px solid ").concat("default"!==n&&e["".concat(n,"-hover")],";\n        color: ").concat("default"!==n&&"#ffffff",";\n    }\n"))(t,o)}),(e=>{let{squared:n,outlined:t,theme:o,type:r}=e;return n&&t&&((e,n)=>"\n    background: transparent;\n    border: 1px solid ".concat("default"!==n?e["".concat(n,"-color")]:e["disabled-color"],";\n    color: ").concat("default"!==n&&e["".concat(n,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==n&&e["".concat(n,"-hover")],";\n        border: 1px solid ").concat("default"!==n&&e["".concat(n,"-hover")],";\n        color: ").concat((e=>{let{theme:n,type:t}=e;return"default"!==t&&n["white-color"]}),";\n    }\n"))(o,r)}),(e=>{let{social:n,color:t,shape:o}=e;return n&&((e,n)=>"\n    background: ".concat(e,";\n    background: ").concat(e,";\n    border: 1px solid ").concat(e,";\n    color: ").concat((e=>{let{theme:n}=e;return n["white-color"]}),";\n    border-radius: ").concat(n?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(e,"90;\n        border: 1px solid ").concat(e,"90;\n        color: ").concat((e=>{let{theme:n}=e;return n["white-color"]}),";\n    }\n"))(t,o)})),d=(0,c.Ay)(s)(r||(r=(0,a.A)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(e=>{let{theme:n}=e;return n[n.mainContent].bgNormal}))},91596:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});t(9950);var o=t(82370),r=t(82887),a=t(42860),l=t(54963),c=t.n(l),s=t(42074),i=t(84394),d=t(29355),u=t(72449),p=t(44414);const h=function(){return(0,p.jsx)(i.UserBioBox,{children:(0,p.jsxs)(d.Cards,{headless:!0,children:[(0,p.jsxs)("article",{className:"user-info",children:[(0,p.jsx)("h5",{className:"user-info__title",children:"User Bio"}),(0,p.jsx)("p",{children:"Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestie nisl tempor quis odio habitant."})]}),(0,p.jsxs)("address",{className:"user-info",children:[(0,p.jsx)("h5",{className:"user-info__title",children:"Contact Info"}),(0,p.jsxs)("ul",{className:"user-info__contact",children:[(0,p.jsxs)("li",{children:[(0,p.jsx)(a.A,{})," ",(0,p.jsx)("span",{children:"Clayton@example.com"})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(o.A,{})," ",(0,p.jsx)("span",{children:"+44 (0161) 347 8854"})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(r.A,{})," ",(0,p.jsx)("span",{children:"www.example.com"})]})]})]}),(0,p.jsxs)("div",{className:"user-info",children:[(0,p.jsx)("h5",{className:"user-info__title",children:"Skills"}),(0,p.jsxs)("div",{className:"user-info__skills",children:[(0,p.jsx)(u.Button,{type:"light",outlined:!0,className:"btn-outlined",children:"UI/UX"}),(0,p.jsx)(u.Button,{type:"light",outlined:!0,className:"btn-outlined",children:"Branding"}),(0,p.jsx)(u.Button,{type:"light",outlined:!0,className:"btn-outlined",children:"product design"}),(0,p.jsx)(u.Button,{type:"light",outlined:!0,className:"btn-outlined",children:"web design"}),(0,p.jsx)(u.Button,{type:"light",outlined:!0,className:"btn-outlined",children:"Application"})]})]}),(0,p.jsxs)("div",{className:"user-info",children:[(0,p.jsx)("h5",{className:"user-info__title",children:"Social Profiles"}),(0,p.jsxs)("div",{className:"card__social",children:[(0,p.jsx)(s.N_,{className:"btn-icon facebook",to:"#",children:(0,p.jsx)(c(),{name:"facebook"})}),(0,p.jsx)(s.N_,{className:"btn-icon twitter",to:"#",children:(0,p.jsx)(c(),{name:"twitter"})}),(0,p.jsx)(s.N_,{className:"btn-icon dribble",to:"#",children:(0,p.jsx)(c(),{name:"dribbble"})}),(0,p.jsx)(s.N_,{className:"btn-icon instagram",to:"#",children:(0,p.jsx)(c(),{name:"instagram"})})]})]})]})})}},82887:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(72603),r=t(11942),a=t.n(r);const l=e=>{const{color:n,size:t,...r}=e;return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:n,...r},o.createElement("path",{d:"M21.41,8.64s0,0,0-.05a10,10,0,0,0-18.78,0s0,0,0,.05a9.86,9.86,0,0,0,0,6.72s0,0,0,.05a10,10,0,0,0,18.78,0s0,0,0-.05a9.86,9.86,0,0,0,0-6.72ZM4.26,14a7.82,7.82,0,0,1,0-4H6.12a16.73,16.73,0,0,0,0,4Zm.82,2h1.4a12.15,12.15,0,0,0,1,2.57A8,8,0,0,1,5.08,16Zm1.4-8H5.08A8,8,0,0,1,7.45,5.43,12.15,12.15,0,0,0,6.48,8ZM11,19.7A6.34,6.34,0,0,1,8.57,16H11ZM11,14H8.14a14.36,14.36,0,0,1,0-4H11Zm0-6H8.57A6.34,6.34,0,0,1,11,4.3Zm7.92,0h-1.4a12.15,12.15,0,0,0-1-2.57A8,8,0,0,1,18.92,8ZM13,4.3A6.34,6.34,0,0,1,15.43,8H13Zm0,15.4V16h2.43A6.34,6.34,0,0,1,13,19.7ZM15.86,14H13V10h2.86a14.36,14.36,0,0,1,0,4Zm.69,4.57a12.15,12.15,0,0,0,1-2.57h1.4A8,8,0,0,1,16.55,18.57ZM19.74,14H17.88A16.16,16.16,0,0,0,18,12a16.28,16.28,0,0,0-.12-2h1.86a7.82,7.82,0,0,1,0,4Z"}))};l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.defaultProps={color:"currentColor",size:"24"};const c=l},82370:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(72603),r=t(11942),a=t.n(r);const l=e=>{const{color:n,size:t,...r}=e;return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:n,...r},o.createElement("path",{d:"M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"}))};l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.defaultProps={color:"currentColor",size:"24"};const c=l},54963:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=c(t(9950)),l=c(t(11942));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.displayName="FontAwesome",e}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),r(n,[{key:"render",value:function(){var e=this.props,n=e.border,t=e.cssModule,r=e.className,l=e.fixedWidth,c=e.flip,s=e.inverse,i=e.name,d=e.pulse,u=e.rotate,p=e.size,h=e.spin,f=e.stack,b=e.tag,m=void 0===b?"span":b,x=e.ariaLabel,g=function(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(e,["border","cssModule","className","fixedWidth","flip","inverse","name","pulse","rotate","size","spin","stack","tag","ariaLabel"]),y=x?{"aria-label":x}:{"aria-hidden":!0},v=[];return t?(v.push(t.fa),v.push(t["fa-"+i]),p&&v.push(t["fa-"+p]),h&&v.push(t["fa-spin"]),d&&v.push(t["fa-pulse"]),n&&v.push(t["fa-border"]),l&&v.push(t["fa-fw"]),s&&v.push(t["fa-inverse"]),c&&v.push(t["fa-flip-"+c]),u&&v.push(t["fa-rotate-"+u]),f&&v.push(t["fa-stack-"+f])):(v.push("fa"),v.push("fa-"+i),p&&v.push("fa-"+p),h&&v.push("fa-spin"),d&&v.push("fa-pulse"),n&&v.push("fa-border"),l&&v.push("fa-fw"),s&&v.push("fa-inverse"),c&&v.push("fa-flip-"+c),u&&v.push("fa-rotate-"+u),f&&v.push("fa-stack-"+f)),r&&v.push(r),a.default.createElement(m,o({},g,y,{className:v.join(" ")}))}}]),n}(a.default.Component);s.propTypes={ariaLabel:l.default.string,border:l.default.bool,className:l.default.string,cssModule:l.default.object,fixedWidth:l.default.bool,flip:l.default.oneOf(["horizontal","vertical"]),inverse:l.default.bool,name:l.default.string.isRequired,pulse:l.default.bool,rotate:l.default.oneOf([90,180,270]),size:l.default.oneOf(["lg","2x","3x","4x","5x"]),spin:l.default.bool,stack:l.default.oneOf(["1x","2x"]),tag:l.default.string},n.default=s,e.exports=n.default}}]);