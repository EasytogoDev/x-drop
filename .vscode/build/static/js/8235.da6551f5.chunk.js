"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[8235],{68235:(e,s,t)=>{t.r(s),t.d(s,{default:()=>T});var l=t(9950),a=t(92759),n=t(48874),r=t(73878),i=t(42074),o=t(34189),c=t(35250),d=t(63795),h=t(13182),x=t(24062),m=t(20551),j=t(34574),u=t(11876),p=t(78732),g=t(59051),f=t.n(g),v=t(14227),N=t.n(v),w=t(89689),_=t(13918),A=t(72906),b=t(61837),y=t(42017),C=t(72449),z=t(75177),k=t(29355),H=t(59377),L=t(44414);const T=function(e){let{match:s}=e;const g=(0,r.wA)(),{rtl:v,chat:T}=(0,r.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData,chat:e.chatSingle.data}))),V=v?"right":"left",[Z,D]=(0,l.useState)({chatData:T,me:"woadud@gmail.com",singleContent:T[0].content,name:T[0].groupName,inputValue:"",fileList:[],fileList2:[]}),[E,M]=(0,l.useState)(!1),{singleContent:F,name:B,me:Y,inputValue:O}=Z;(0,l.useEffect)((()=>{let e=!1;return e||D({chatData:T,singleContent:T[0].content,name:T[0].groupName,inputValue:O,me:"woadud@gmail.com",fileList:[],fileList2:[]}),()=>{e=!0}}),[s,T,O]);const P=e=>{e.preventDefault();const t={content:O,time:(new Date).getTime(),seen:!1,reaction:!1,email:Y,userName:"Woadud Akand"};g((0,z.updateGroupChat)(parseInt(s.params.id,10),t)),D({...Z,singleContent:[...F,t],inputValue:""})},R={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},listType:"picture-card",onChange(e){"uploading"!==e.file.status&&D({...Z,fileList:e.fileList}),"done"===e.file.status?a.Ay.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&a.Ay.error("".concat(e.file.name," file upload failed."))}},S={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},onChange(e){"uploading"!==e.file.status&&D({...Z,fileList2:e.fileList}),"done"===e.file.status?a.Ay.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&a.Ay.error("".concat(e.file.name," file upload failed."))}},I=(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(i.k2,{to:"#",children:[(0,L.jsx)(u.A,{}),(0,L.jsx)("span",{children:"Create new group"})]}),(0,L.jsxs)(i.k2,{to:"#",children:[(0,L.jsx)(j.A,{}),(0,L.jsx)("span",{children:"Delete conversation"})]}),(0,L.jsxs)(i.k2,{to:"#",children:[(0,L.jsx)(m.A,{}),(0,L.jsx)("span",{children:"Block & Report"})]})]});return(0,L.jsxs)(b.SingleChatWrapper,{className:"group-chat",children:[E&&(0,L.jsx)(b.BackShadowEmoji,{onClick:()=>M(!1)}),(0,L.jsxs)(k.Cards,{title:(0,L.jsxs)("div",{className:"group-chat-header d-flex",children:[(0,L.jsx)(y.default,{as:"h5",children:B}),(0,L.jsxs)("div",{className:"members",children:[(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("img",{src:t(42164),alt:""})}),(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("img",{src:t(42164),alt:""})}),(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("img",{src:t(42164),alt:""})}),(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("img",{src:t(42164),alt:""})}),(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("img",{src:t(42164),alt:""})}),(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("img",{src:t(42164),alt:""})}),(0,L.jsx)(i.N_,{to:"#",className:"show-more",children:(0,L.jsx)("span",{children:"20+"})}),(0,L.jsx)(i.N_,{to:"#",className:"add-more",children:(0,L.jsx)("span",{className:"add-icon",children:(0,L.jsx)(p.A,{})})})]})]}),more:I,children:[(0,L.jsx)("ul",{className:"atbd-chatbox",children:(0,L.jsx)(w.ur,{className:"custom-scrollbar",autoHide:!0,autoHideTimeout:500,autoHideDuration:200,renderThumbHorizontal:function(){return(0,L.jsx)("div",{style:{borderRadius:6,backgroundColor:"#F1F2F6"}})},renderThumbVertical:e=>{let{style:s}=e;const t={borderRadius:6,backgroundColor:"#F1F2F6",[V]:"2px"};return(0,L.jsx)("div",{style:{...s,...t}})},renderView:e=>{let{style:s}=e;const t={marginRight:"auto",[v?"left":"right"]:"2px",[v?"marginLeft":"marginRight"]:"-19px"};return(0,L.jsx)("div",{style:{...s,...t}})},renderTrackVertical:e=>(0,L.jsx)("div",{...e,className:"ninjadash-track-vertical"}),children:F.length?F.map(((e,s)=>{const l=e.time,a=f()(l).format("MM-DD-YYYY")===f()().format("MM-DD-YYYY");return(0,L.jsx)("li",{className:"atbd-chatbox__single",style:{overflow:"hidden"},children:(0,L.jsxs)("div",{className:e.email!==Y?"left":"right",children:[e.email!==Y?(0,L.jsx)("img",{src:t(42164),alt:""}):null,(0,L.jsxs)("div",{className:"atbd-chatbox__content",children:[(0,L.jsxs)(y.default,{as:"h5",className:"atbd-chatbox__name",children:[e.email!==Y&&B,(0,L.jsx)("span",{children:a?f()(l).format("hh:mm A"):f()(l).format("LL")})]}),e.email!==Y?(0,L.jsxs)("div",{className:"atbd-chatbox__contentInner d-flex",children:[(0,L.jsx)("div",{className:"atbd-chatbox__message",children:(0,L.jsx)(b.MessageList,{className:"message-box",children:e.content})}),(0,L.jsxs)("div",{className:"atbd-chatbox__actions",children:[(0,L.jsx)(H.Dropdown,{action:["hover"],content:(0,L.jsx)("div",{className:"atbd-chatbox__emoji",children:(0,L.jsxs)("ul",{children:[(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("span",{role:"img",children:"\ud83c\udf1d"})})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("span",{role:"img",children:"\ud83d\udc74"})})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("span",{role:"img",children:"\ud83d\udc7f"})})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("span",{role:"img",children:"\ud83d\udc97"})})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)("span",{role:"img",children:"\ud83d\udd90"})})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{onClick:e=>e.preventDefault(),to:"#",children:(0,L.jsx)(x.A,{})})})]})}),placement:"bottom",children:(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)(_.A,{})})}),(0,L.jsx)(H.Dropdown,{action:["hover"],content:(0,L.jsx)("div",{className:"atbd-chatbox__messageControl",children:(0,L.jsxs)("ul",{children:[(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"Edit"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"Copy"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"Quote"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"Forward"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"Remove"})})]})}),placement:"bottom",children:(0,L.jsx)(i.N_,{onClick:e=>e.preventDefault(),to:"#",children:(0,L.jsx)(x.A,{})})})]})]}):(0,L.jsxs)("div",{className:"atbd-chatbox__contentInner d-flex",children:[(0,L.jsxs)("div",{className:"atbd-chatbox__actions",children:[(0,L.jsx)(H.Dropdown,{action:["hover"],content:(0,L.jsx)("div",{className:"atbd-chatbox__messageControl",children:(0,L.jsxs)("ul",{children:[(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"Edit"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"Copy"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"Quote"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"Forward"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"Remove"})})]})}),placement:"bottom",children:(0,L.jsx)(i.N_,{onClick:e=>e.preventDefault(),to:"#",children:(0,L.jsx)(x.A,{})})}),(0,L.jsx)(H.Dropdown,{action:["hover"],content:(0,L.jsx)("div",{className:"atbd-chatbox__emoji",children:(0,L.jsxs)("ul",{children:[(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"\ud83c\udf1d"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"\ud83d\udc74"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"\ud83d\udc7f"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"\ud83d\udc97"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:"\ud83d\udd90"})}),(0,L.jsx)("li",{children:(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)(A.A,{})})})]})}),placement:"bottom",children:(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)(_.A,{})})})]}),(0,L.jsx)("div",{className:"atbd-chatbox__message",children:(0,L.jsx)(b.MessageList,{className:"message-box",children:e.content})})]}),F.length===s+1?(0,L.jsxs)("div",{className:"group-seen",children:[(0,L.jsx)("img",{src:t(42164),alt:""}),(0,L.jsx)("img",{src:t(42164),alt:""}),(0,L.jsx)("img",{src:t(42164),alt:""}),(0,L.jsx)("img",{src:t(42164),alt:""}),(0,L.jsx)("img",{src:t(42164),alt:""}),(0,L.jsx)("img",{src:t(42164),alt:""})]}):null]})]})},l)})):(0,L.jsx)("p",{children:"No data found"})})}),(0,L.jsx)(b.Footer,{children:(0,L.jsx)("form",{onSubmit:P,children:(0,L.jsxs)("div",{className:"chatbox-reply-form d-flex ".concat(Z.fileList.length&&"hasImage"," ").concat(Z.fileList2.length&&"hasFile"),children:[(0,L.jsxs)("span",{className:"smile-icon",children:[E&&(0,L.jsx)(N(),{onEmojiClick:(e,s)=>{D({...Z,inputValue:O+s.emoji})}}),(0,L.jsx)(i.N_,{onClick:()=>{M(!E)},to:"#",children:(0,L.jsx)(h.A,{})})]}),(0,L.jsx)("div",{className:"chatbox-reply-input",children:(0,L.jsx)("input",{onChange:e=>{D({...Z,inputValue:e.target.value})},placeholder:"Type your message...",name:"chat",id:"chat",style:{width:"100%"},value:O})}),(0,L.jsxs)("div",{className:"chatbox-reply-action d-flex",children:[(0,L.jsx)(n.A,{...R,children:(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)(d.A,{})})}),(0,L.jsx)(n.A,{...S,children:(0,L.jsx)(i.N_,{to:"#",children:(0,L.jsx)(c.A,{})})}),(0,L.jsx)(C.Button,{onClick:P,type:"primary",children:(0,L.jsx)(o.A,{})})]})]})})})]})]})}},63795:(e,s,t)=>{t.d(s,{A:()=>i});var l=t(72603),a=t(11942),n=t.n(a);const r=e=>{const{color:s,size:t,...a}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:s,...a},l.createElement("path",{d:"M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z"}))};r.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r},20551:(e,s,t)=>{t.d(s,{A:()=>i});var l=t(72603),a=t(11942),n=t.n(a);const r=e=>{const{color:s,size:t,...a}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:s,...a},l.createElement("path",{d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-8-8A7.92,7.92,0,0,1,5.69,7.1L7.2,8.61A3,3,0,0,0,6,11v2a3,3,0,0,0,5.59,1.5,1,1,0,1,0-1.72-1,1,1,0,0,1-1.58.19A.93.93,0,0,1,8,13V11a1,1,0,0,1,.67-.92L12,13.46A3,3,0,0,0,14.54,16l2.36,2.36A7.92,7.92,0,0,1,12,20Zm6.31-3.1-1.52-1.52a2.94,2.94,0,0,0,.8-.88,1,1,0,1,0-1.72-1,1,1,0,0,1-.55.41L14,12.59V11a1,1,0,0,1,1.88-.48,1,1,0,0,0,1.37.34,1,1,0,0,0,.34-1.38,3.08,3.08,0,0,0-.46-.59A3,3,0,0,0,12,10.62l-.35-.35a1,1,0,0,0-.1-.79,3.08,3.08,0,0,0-.46-.59,2.94,2.94,0,0,0-1.67-.84L7.1,5.69A7.92,7.92,0,0,1,12,4a8,8,0,0,1,8,8A7.92,7.92,0,0,1,18.31,16.9Z"}))};r.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r},34189:(e,s,t)=>{t.d(s,{A:()=>i});var l=t(72603),a=t(11942),n=t.n(a);const r=e=>{const{color:s,size:t,...a}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:s,...a},l.createElement("path",{d:"M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"}))};r.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r},35250:(e,s,t)=>{t.d(s,{A:()=>i});var l=t(72603),a=t(11942),n=t.n(a);const r=e=>{const{color:s,size:t,...a}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:s,...a},l.createElement("path",{d:"M18.08,12.42,11.9,18.61a4.25,4.25,0,0,1-6-6l8-8a2.57,2.57,0,0,1,3.54,0,2.52,2.52,0,0,1,0,3.54l-6.9,6.89A.75.75,0,1,1,9.42,14l5.13-5.12a1,1,0,0,0-1.42-1.42L8,12.6a2.74,2.74,0,0,0,0,3.89,2.82,2.82,0,0,0,3.89,0l6.89-6.9a4.5,4.5,0,0,0-6.36-6.36l-8,8A6.25,6.25,0,0,0,13.31,20l6.19-6.18a1,1,0,1,0-1.42-1.42Z"}))};r.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r},78732:(e,s,t)=>{t.d(s,{A:()=>i});var l=t(72603),a=t(11942),n=t.n(a);const r=e=>{const{color:s,size:t,...a}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:s,...a},l.createElement("path",{d:"M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"}))};r.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r},13182:(e,s,t)=>{t.d(s,{A:()=>i});var l=t(72603),a=t(11942),n=t.n(a);const r=e=>{const{color:s,size:t,...a}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:s,...a},l.createElement("path",{d:"M14.36,14.23a3.76,3.76,0,0,1-4.72,0,1,1,0,0,0-1.28,1.54,5.68,5.68,0,0,0,7.28,0,1,1,0,1,0-1.28-1.54ZM9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm6-2a1,1,0,1,0,1,1A1,1,0,0,0,15,9ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"}))};r.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r},34574:(e,s,t)=>{t.d(s,{A:()=>i});var l=t(72603),a=t(11942),n=t.n(a);const r=e=>{const{color:s,size:t,...a}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:s,...a},l.createElement("path",{d:"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"}))};r.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r}}]);