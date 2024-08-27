"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[6103],{63348:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(60270),o=a(9950),s=a(50989),r=a(44414);function i(e){let{type:t,height:a,width:i,scales:c,labels:l,id:d,datasets:h,tooltip:p,layout:u,legend:m,elements:x,option:g,...b}=e;return(0,o.useEffect)((()=>{let e=null,a=!1;return a||(e=new n.t1(document.getElementById(d).getContext("2d"),{type:t,data:{labels:l,datasets:h},options:{responsive:!0,maintainAspectRatio:!0,layout:u,hover:{mode:"index",intersect:!1},plugins:{legend:m,tooltip:{yAlign:"bottom",xAlign:"right",mode:"index",intersect:!1,backgroundColor:"#ffffff",boxShadow:"0 8px 5px #ADB5D915",position:"nearest",titleColor:"#ADB5D9",color:"#ADB5D9",titleFontSize:12,titleSpacing:10,bodyColor:"#525768",bodyFontSize:11,bodyFontStyle:"normal",bodyFontFamily:"'Jost', sans-serif",borderColor:"#F1F2F6",usePointStyle:!0,borderWidth:1,bodySpacing:10,padding:{x:10,y:8},z:999999,enabled:!1,external:s.customTooltips,...p}},elements:x,scales:c,...g}})),()=>{e.destroy(),a=!0}}),[t,h,l,d,u,m,x,c,p,g]),(0,r.jsx)("canvas",{width:i,height:a,id:d,...b})}n.t1.register(n.Bs,n.No,n.E8,n.FN,n.A6,n.Jb,n.ju,n.ZT,n.P$,n.G5,n.h9,n.Pz,n.PP,n.kc,n.OJ,n.pr,n.UA,n.iw,n.gO,n.dN,n.s$,n.hE,n.m_,n.tK),i.defaultProps={height:479,type:"line",width:null,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!1},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!1}],layout:{},legend:{display:!1,labels:{display:!1,position:"center"}},id:"myChart",elements:{line:{tension:.6,borderCapStyle:"round",borderJoinStyle:"round",capBezierPoints:!0},point:{radius:0,z:5}},scales:{y:{beginAtZero:!0,grid:{color:"#485e9029",borderDash:[3,3],zeroLineColor:"#485e9029",zeroLineWidth:1},ticks:{beginAtZero:!0,fontSize:14,fontFamily:"Jost",color:"#8C90A4",max:80,stepStartValue:5,stepSize:20,padding:10,callback:e=>"".concat(e,"k")}},x:{grid:{display:!1,drawBorder:!1,zeroLineWidth:0,color:"transparent",z:1},ticks:{beginAtZero:!0,fontSize:14,fontFamily:"Jost",color:"#8C90A4"}}},tooltip:{callbacks:{label(e){const t=e.dataset.label,{formattedValue:a}=e;return"  ".concat(a," ").concat(t)},labelColor:e=>({backgroundColor:e.dataset.backgroundColor,borderColor:"transparent"})}},option:{}};const c=i},50989:(e,t,a)=>{a.r(t),a.d(t,{chartLinearGradient:()=>o,customTooltips:()=>s,textRefactor:()=>n});const n=(e,t)=>"".concat(e.split(" ").slice(0,t).join(" "),"..."),o=(e,t,a)=>{const n=e.getContext("2d").createLinearGradient(0,0,0,t);return n.addColorStop(0,"".concat(a.start)),n.addColorStop(1,"".concat(a.end)),n},s=function(e){let t=document.querySelector(".chartjs-tooltip");const a=this._chart.canvas.closest(".ninjadash-chart-container");if(a&&!a.contains(t)&&(t=document.createElement("div"),t.className="chartjs-tooltip",t.innerHTML="<table></table>",document.querySelectorAll(".ninjadash-chart-container").forEach((e=>{e.contains(t)&&t.remove()})),a.appendChild(t)),null!==t){const a=e.tooltip;if(0===a.opacity)return void(t.style.opacity=0);if(t.classList.remove("above","below","no-transform"),a.yAlign?t.classList.add(a.yAlign):t.classList.add("no-transform"),a.body){const e=a.title||[],n=a.body.map((function(e){return e.lines}));let o="<thead>";e.forEach((function(e){o+="<div class='tooltip-title'>".concat(e,"</div>")})),o+="</thead><tbody>",n.forEach((function(e,t){const n=a.labelColors[t];let s="background:".concat(n.backgroundColor);s+="; border-color:".concat(n.borderColor),s+="; border-width: 2px",s+="; border-radius: 30px";const r='<span class="chartjs-tooltip-key" style="'.concat(s,'"></span>');o+="<tr><td>".concat(r).concat(e,"</td></tr>")})),o+="</tbody>";t.querySelector("table").innerHTML=o}const n=this._chart.canvas.offsetTop,o=this._chart.canvas.offsetLeft,s=document.querySelector(".chartjs-tooltip").clientHeight;t.style.opacity=1,t.style.left="".concat(o+a.caretX,"px"),t.style.top="".concat(n+a.caretY-(a.caretY>10?s>100?s+5:s+15:70),"px"),t.style.fontFamily=a.options.bodyFontFamily,t.style.fontSize="".concat(a.options.bodyFontSize,"px"),t.style.fontStyle=a.options.bodyFontStyle,t.style.padding="".concat(a.yPadding,"px ").concat(a.xPadding,"px")}}},76103:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(9950),o=a(73878),s=a(42074),r=a(34774),i=a(77638),c=a(49806),l=a(1560),d=a(64005),h=a(67128),p=a(90743),u=a(64833);const m=a.p+"static/media/google-customIcon.d3641275457c11f70518e20ff287dfb7.svg";var x=a(62880),g=a(67482),b=a(35999),j=a(29355),v=a(63348),y=a(44414);const f=n.memo((()=>{const{mainContent:e}=(0,o.d4)((e=>({mainContent:e.ChangeLayoutMode.mode}))),{themeColor:t}=x.default,a={height:window.innerWidth<=1699?window.innerWidth<=991?300:200:300,width:window.innerWidth<=1699?window.innerWidth<=991?300:200:300,labels:["Twitter","Google","Facebook"],datasets:[{data:[1540,1540,5346],backgroundColor:["#00AAFF","#8231D3","#5840FF"]}],scales:{x:{display:!1},y:{display:!1}},option:{borderColor:t[e]["white-background"],maintainAspectRatio:!0,responsive:!1},tooltip:{mode:"index",callbacks:{label(e){const{dataset:t,label:a,dataIndex:n}=e;return"  ".concat(a," ").concat(t.data[n])},labelColor(e){let{dataIndex:t,dataset:a}=e;return{backgroundColor:a.backgroundColor[t],borderColor:"transparent"}}}}},n=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(s.k2,{to:"#",children:[(0,y.jsx)(d.A,{}),(0,y.jsx)("span",{children:"Printer"})]}),(0,y.jsxs)(s.k2,{to:"#",children:[(0,y.jsx)(i.A,{}),(0,y.jsx)("span",{children:"PDF"})]}),(0,y.jsxs)(s.k2,{to:"#",children:[(0,y.jsx)(l.A,{}),(0,y.jsx)("span",{children:"Google Sheets"})]}),(0,y.jsxs)(s.k2,{to:"#",children:[(0,y.jsx)(h.A,{}),(0,y.jsx)("span",{children:"Excel (XLSX)"})]}),(0,y.jsxs)(s.k2,{to:"#",children:[(0,y.jsx)(c.A,{}),(0,y.jsx)("span",{children:"CSV"})]})]});return(0,y.jsx)(g.BorderLessHeading,{children:(0,y.jsx)(b.RevenueGeneratedWrapper,{children:(0,y.jsx)(j.Cards,{title:"Source Of Revenue Generated",size:"large",more:n,children:(0,y.jsxs)("div",{className:"ninjadsh-revenue-wrap",children:[(0,y.jsx)("div",{className:"ninjadsh-revenue-chart",children:(0,y.jsx)(b.ChartContainer,{className:"ninjadash-chart-pie",children:(0,y.jsx)("div",{className:"ninjadash-chart-container",children:(0,y.jsx)(v.default,{...a,type:"pie",id:"pieChart"})})})}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source",children:[(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__single",children:[(0,y.jsx)("div",{className:"ninjadsh-revenue-chart-source__icon ninjadash-twitter",children:(0,y.jsx)(u.A,{})}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__text",children:[(0,y.jsx)("span",{className:"ninjadsh-revenue-chart-source__title",children:a.labels[0]}),(0,y.jsxs)("span",{className:"ninjadsh-revenue-chart-source__count",children:["$",a.datasets[0].data[0]]})]})]}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__single",children:[(0,y.jsx)("div",{className:"ninjadsh-revenue-chart-source__icon ninjadash-google",children:(0,y.jsx)(r.k,{src:m})}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__text",children:[(0,y.jsx)("span",{className:"ninjadsh-revenue-chart-source__title",children:a.labels[1]}),(0,y.jsxs)("span",{className:"ninjadsh-revenue-chart-source__count",children:["$",a.datasets[0].data[1]]})]})]}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__single",children:[(0,y.jsx)("div",{className:"ninjadsh-revenue-chart-source__icon ninjadash-facebook",children:(0,y.jsx)(p.A,{})}),(0,y.jsxs)("div",{className:"ninjadsh-revenue-chart-source__text",children:[(0,y.jsx)("span",{className:"ninjadsh-revenue-chart-source__title",children:a.labels[2]}),(0,y.jsxs)("span",{className:"ninjadsh-revenue-chart-source__count",children:["$",a.datasets[0].data[2]]})]})]})]})]})})})})}))},90743:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(72603),o=a(11942),s=a.n(o);const r=e=>{const{color:t,size:a,...o}=e;return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:t,...o},n.createElement("path",{d:"M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"}))};r.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r},1560:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(72603),o=a(11942),s=a.n(o);const r=e=>{const{color:t,size:a,...o}=e;return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:t,...o},n.createElement("path",{d:"M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"}))};r.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r},64005:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(72603),o=a(11942),s=a.n(o);const r=e=>{const{color:t,size:a,...o}=e;return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:t,...o},n.createElement("path",{d:"M7,10a1,1,0,1,0,1,1A1,1,0,0,0,7,10ZM19,6H18V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H6v3a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V18h1a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM8,4h8V6H8Zm8,16H8V16h8Zm4-5a1,1,0,0,1-1,1H18V15a1,1,0,0,0-1-1H7a1,1,0,0,0-1,1v1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z"}))};r.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r},64833:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(72603),o=a(11942),s=a.n(o);const r=e=>{const{color:t,size:a,...o}=e;return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:t,...o},n.createElement("path",{d:"M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"}))};r.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},r.defaultProps={color:"currentColor",size:"24"};const i=r}}]);