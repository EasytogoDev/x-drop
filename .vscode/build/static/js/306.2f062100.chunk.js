"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[306],{13269:(n,t,e)=>{e.r(t),e.d(t,{default:()=>g});var a=e(29680),r=e(42140),s=e(34574),i=e(34683),o=(e(9950),e(73878)),l=e(42074),c=e(19026),d=e(79251),x=e(97871),p=e(29355),h=e(59377),m=e(44414);const g=function(n){let{data:t,listeners:e}=n;const g=(0,o.wA)(),{noteData:u}=(0,o.d4)((n=>({noteData:n.Note.data}))),{title:j,key:b,description:v,stared:k,label:f}=t,C=n=>{g((0,x.onLabelUpdate)(u,b,n))},w=(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"nav-labels",children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsxs)(l.N_,{onClick:()=>C("personal"),to:"#",children:[(0,m.jsx)(d.Bullet,{className:"personal"})," Personal"]})}),(0,m.jsx)("li",{children:(0,m.jsxs)(l.N_,{onClick:()=>C("work"),to:"#",children:[(0,m.jsx)(d.Bullet,{className:"work"})," Work"]})}),(0,m.jsx)("li",{children:(0,m.jsxs)(l.N_,{onClick:()=>C("social"),to:"#",children:[(0,m.jsx)(d.Bullet,{className:"social"})," Social"]})}),(0,m.jsx)("li",{children:(0,m.jsxs)(l.N_,{onClick:()=>C("important"),to:"#",children:[(0,m.jsx)(d.Bullet,{className:"important"})," Important"]})})]})})});return(0,m.jsx)(c.Card,{className:f,children:(0,m.jsxs)(p.Cards,{headless:!0,children:[(0,m.jsxs)("h4",{children:[(0,m.jsxs)("span",{children:[j,(0,m.jsx)("span",{className:"status-bullet ".concat(f)})]}),(0,m.jsx)("div",{...e,children:(0,m.jsx)(i.A,{})})]}),(0,m.jsx)("p",{children:v}),(0,m.jsxs)("div",{className:"actions",children:[(0,m.jsxs)("span",{children:[(0,m.jsx)(l.N_,{className:k?"star active":"star",onClick:()=>g((0,x.onStarUpdate)(u,b)),to:"#",children:(0,m.jsx)(r.A,{})}),(0,m.jsx)(l.N_,{onClick:()=>(()=>{const n=u.filter((n=>n.key!==b));g((0,x.noteDeleteData)(n))})(),to:"#",children:(0,m.jsx)(s.A,{})})]}),(0,m.jsx)(h.Dropdown,{content:w,children:(0,m.jsx)(l.N_,{to:"#",children:(0,m.jsx)(a.A,{})})})]})]})})}},19026:(n,t,e)=>{e.r(t),e.d(t,{Card:()=>s});var a,r=e(57528);const s=e(19335).Ay.div(a||(a=(0,r.A)(["\n    .ant-card{\n        border-radius: 15px !important;\n    }\n    .ant-card .ant-card-body{        \n        border-radius: 15px !important;\n        color: ",";    \n        padding-bottom: 20px !important;\n        padding-top: 20px !important;\n        transition: .35s;\n        h4{\n            display: flex;\n            align-items: flex-start;\n            font-size: 16px;\n            margin-bottom: 16px;\n            color: ","; \n            justify-content: space-between;\n            svg{\n                min-width: 16px;\n                width: 16px;\n                height: 16px;\n                cursor: move;\n                position: relative;\n                top: 4px;\n                "," : 6px;\n                color: "," !important;\n            }\n            .status-bullet{\n                position: relative;\n                bottom: 2px;\n                min-width: 7px;\n                height: 7px;\n                display: inline-block;\n                border-radius: 50%;\n               "," : 8px;\n               &.personal{\n                background: #5F63F2;\n               }\n               &.work{\n                background: #20C997;\n               }\n               &.social{\n                background: #FA8B0C;\n               }\n               &.important{\n                background: #2C99FF;\n               }\n            }\n        }\n        .actions{\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-top: 18px;\n            .star{\n                svg,\n                i,\n                span{\n                    color: ","  !important;\n                }\n                &.active{\n                    svg,\n                    i,\n                    span{\n                        color: "," !important;\n                    } \n                } \n            }\n            span{\n                display: inline-block;\n                margin: -5px;\n                a {\n                    margin: 5px;\n                    svg,\n                    i,\n                    span{\n                        color: "," !important;\n                    }\n                    svg{\n                        width: 16px;\n                        height: 16px;\n                    }\n                }\n            }\n            .ant-dropdown-trigger{\n                svg{\n                    width: 16px;\n                    height: 16px;\n                    color: ","\n                }\n            }\n        }        \n    } \n    &.personal .ant-card .ant-card-body{\n        background: #5F63F240;\n        &:hover{\n            background: #5F63F290;\n        }\n    }\n    &.work .ant-card .ant-card-body{\n        background: #20C99740;\n        &:hover{\n            background: #20C99790;\n        }\n    }\n    &.social .ant-card .ant-card-body{\n        background: #FA8B0C40;\n        &:hover{\n            background: #FA8B0C90;\n        }\n    }\n    &.important .ant-card .ant-card-body{\n        background: #2C99FF40;\n        &:hover{\n            background: #2C99FF90;\n        }\n    }  \n"])),(n=>{let{theme:t}=n;return t[t.mainContent]["gray-text"]}),(n=>{let{theme:t}=n;return t[t.mainContent]["dark-text"]}),(n=>{let{theme:t}=n;return t.rtl?"margin-right":"margin-left"}),(n=>{let{theme:t}=n;return t[t.mainContent]["gray-text"]}),(n=>{let{theme:t}=n;return t.rtl?"margin-right":"margin-left"}),(n=>{let{theme:t}=n;return t[t.mainContent]["gray-text"]}),(n=>{let{theme:t}=n;return t["warning-color"]}),(n=>{let{theme:t}=n;return t[t.mainContent]["gray-text"]}),(n=>{let{theme:t}=n;return t[t.mainContent]["gray-light-text"]}))},306:(n,t,e)=>{e.r(t),e.d(t,{default:()=>g});e(9950);var a=e(73878),r=e(71370),s=e(93718),i=e(78045),o=e(41988),l=e(87094),c=e(79251),d=e(13269),x=e(29355),p=e(97871),h=e(44414);function m(n){const t=n.value,{attributes:e,listeners:a,setNodeRef:s,transform:l,transition:c}=(0,i.gl)({id:t}),x={transform:r.Ks.Transform.toString(l),transition:c};return(0,h.jsx)(o.A,{xxl:8,xl:12,lg:12,sm:12,xs:24,children:(0,h.jsx)("div",{ref:s,style:x,...e,...a,children:(0,h.jsx)(d.default,{data:t})})},t)}const g=function(){const n=(0,a.wA)(),{noteData:t}=(0,a.d4)((n=>({noteData:n.Note.data})));return(0,h.jsx)(s.Mp,{collisionDetection:s.fp,onDragEnd:function(e){const{active:a,over:r}=e;if(a&&r&&a.id!==r.id){const e=t.indexOf(a.id),s=t.indexOf(r.id);n((0,p.noteDragData)((0,i.be)(t,e,s)))}},children:(0,h.jsx)(x.Cards,{title:"Favorite",children:(0,h.jsx)(c.NoteCardWrap,{children:(0,h.jsx)(l.A,{gutter:24,children:(0,h.jsx)(i.gB,{items:t,strategy:i.kL,children:t.filter((n=>n.stared)).map(((n,t)=>(0,h.jsx)(m,{index:t,value:n},n.key)))})})})})})}},34574:(n,t,e)=>{e.d(t,{A:()=>o});var a=e(72603),r=e(11942),s=e.n(r);const i=n=>{const{color:t,size:e,...r}=n;return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:t,...r},a.createElement("path",{d:"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"}))};i.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},i.defaultProps={color:"currentColor",size:"24"};const o=i}}]);