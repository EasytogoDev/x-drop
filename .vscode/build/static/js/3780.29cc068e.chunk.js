"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[3780],{73780:(e,n,t)=>{t.d(n,{A:()=>D});var o=t(58168),a=t(64467),r=t(5544),l=t(94118),i=t(48738),c=t.n(i),s=t(89379),u=t(9950),d=t(24818),v=t(13511),f=t(87418),m=t(91478),p=t(82795);const y=u.createContext(null);const h=function(e){var n=e.prefixCls,t=e.className,a=e.style,r=e.children,l=e.containerRef,i=e.id,d={onMouseEnter:e.onMouseEnter,onMouseOver:e.onMouseOver,onMouseLeave:e.onMouseLeave,onClick:e.onClick,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp};return u.createElement(u.Fragment,null,u.createElement("div",(0,o.A)({id:i,className:c()("".concat(n,"-content"),t),style:(0,s.A)({},a),"aria-modal":"true",role:"dialog",ref:l},d),r))};var C=t(99424);function b(e){return"string"===typeof e&&String(Number(e))===e?((0,C.Ay)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var E={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function k(e,n){var t,l,i,d,v=e.prefixCls,C=e.open,k=e.placement,A=e.inline,g=e.push,w=e.forceRender,x=e.autoFocus,N=e.keyboard,O=e.rootClassName,M=e.rootStyle,S=e.zIndex,K=e.className,D=e.id,R=e.style,I=e.motion,L=e.width,P=e.height,U=e.children,j=e.contentWrapperStyle,z=e.mask,F=e.maskClosable,V=e.maskMotion,B=e.maskClassName,H=e.maskStyle,X=e.afterOpenChange,T=e.onClose,Y=e.onMouseEnter,Q=e.onMouseOver,W=e.onMouseLeave,q=e.onClick,G=e.onKeyDown,J=e.onKeyUp,Z=u.useRef(),$=u.useRef(),_=u.useRef();u.useImperativeHandle(n,(function(){return Z.current}));u.useEffect((function(){var e;C&&x&&(null===(e=Z.current)||void 0===e||e.focus({preventScroll:!0}))}),[C]);var ee=u.useState(!1),ne=(0,r.A)(ee,2),te=ne[0],oe=ne[1],ae=u.useContext(y),re=null!==(t=null!==(l=null===(i=!1===g?{distance:0}:!0===g?{}:g||{})||void 0===i?void 0:i.distance)&&void 0!==l?l:null===ae||void 0===ae?void 0:ae.pushDistance)&&void 0!==t?t:180,le=u.useMemo((function(){return{pushDistance:re,push:function(){oe(!0)},pull:function(){oe(!1)}}}),[re]);u.useEffect((function(){var e,n;C?null===ae||void 0===ae||null===(e=ae.push)||void 0===e||e.call(ae):null===ae||void 0===ae||null===(n=ae.pull)||void 0===n||n.call(ae)}),[C]),u.useEffect((function(){return function(){var e;null===ae||void 0===ae||null===(e=ae.pull)||void 0===e||e.call(ae)}}),[]);var ie=z&&u.createElement(f.Ay,(0,o.A)({key:"mask"},V,{visible:C}),(function(e,n){var t=e.className,o=e.style;return u.createElement("div",{className:c()("".concat(v,"-mask"),t,B),style:(0,s.A)((0,s.A)({},o),H),onClick:F&&C?T:void 0,ref:n})})),ce="function"===typeof I?I(k):I,se={};if(te&&re)switch(k){case"top":se.transform="translateY(".concat(re,"px)");break;case"bottom":se.transform="translateY(".concat(-re,"px)");break;case"left":se.transform="translateX(".concat(re,"px)");break;default:se.transform="translateX(".concat(-re,"px)")}"left"===k||"right"===k?se.width=b(L):se.height=b(P);var ue={onMouseEnter:Y,onMouseOver:Q,onMouseLeave:W,onClick:q,onKeyDown:G,onKeyUp:J},de=u.createElement(f.Ay,(0,o.A)({key:"panel"},ce,{visible:C,forceRender:w,onVisibleChanged:function(e){null===X||void 0===X||X(e)},removeOnLeave:!1,leavedClassName:"".concat(v,"-content-wrapper-hidden")}),(function(n,t){var a=n.className,r=n.style;return u.createElement("div",(0,o.A)({className:c()("".concat(v,"-content-wrapper"),a),style:(0,s.A)((0,s.A)((0,s.A)({},se),r),j)},(0,p.A)(e,{data:!0})),u.createElement(h,(0,o.A)({id:D,containerRef:t,prefixCls:v,className:K,style:R},ue),U))})),ve=(0,s.A)({},M);return S&&(ve.zIndex=S),u.createElement(y.Provider,{value:le},u.createElement("div",{className:c()(v,"".concat(v,"-").concat(k),O,(d={},(0,a.A)(d,"".concat(v,"-open"),C),(0,a.A)(d,"".concat(v,"-inline"),A),d)),style:ve,tabIndex:-1,ref:Z,onKeyDown:function(e){var n=e.keyCode,t=e.shiftKey;switch(n){case m.A.TAB:var o;if(n===m.A.TAB)if(t||document.activeElement!==_.current){if(t&&document.activeElement===$.current){var a;null===(a=_.current)||void 0===a||a.focus({preventScroll:!0})}}else null===(o=$.current)||void 0===o||o.focus({preventScroll:!0});break;case m.A.ESC:T&&N&&(e.stopPropagation(),T(e))}}},ie,u.createElement("div",{tabIndex:0,ref:$,style:E,"aria-hidden":"true","data-sentinel":"start"}),de,u.createElement("div",{tabIndex:0,ref:_,style:E,"aria-hidden":"true","data-sentinel":"end"})))}const A=u.forwardRef(k);const g=function(e){var n=e.open,t=void 0!==n&&n,o=e.prefixCls,a=void 0===o?"rc-drawer":o,l=e.placement,i=void 0===l?"right":l,c=e.autoFocus,f=void 0===c||c,m=e.keyboard,p=void 0===m||m,y=e.width,h=void 0===y?378:y,C=e.mask,b=void 0===C||C,E=e.maskClosable,k=void 0===E||E,g=e.getContainer,w=e.forceRender,x=e.afterOpenChange,N=e.destroyOnClose,O=e.onMouseEnter,M=e.onMouseOver,S=e.onMouseLeave,K=e.onClick,D=e.onKeyDown,R=e.onKeyUp,I=u.useState(!1),L=(0,r.A)(I,2),P=L[0],U=L[1];var j=u.useState(!1),z=(0,r.A)(j,2),F=z[0],V=z[1];(0,v.A)((function(){V(!0)}),[]);var B=!!F&&t,H=u.useRef(),X=u.useRef();(0,v.A)((function(){B&&(X.current=document.activeElement)}),[B]);if(!w&&!P&&!B&&N)return null;var T={onMouseEnter:O,onMouseOver:M,onMouseLeave:S,onClick:K,onKeyDown:D,onKeyUp:R},Y=(0,s.A)((0,s.A)({},e),{},{open:B,prefixCls:a,placement:i,autoFocus:f,keyboard:p,width:h,mask:b,maskClosable:k,inline:!1===g,afterOpenChange:function(e){var n,t;(U(e),null===x||void 0===x||x(e),e||!X.current||(null===(n=H.current)||void 0===n?void 0:n.contains(X.current)))||(null===(t=X.current)||void 0===t||t.focus({preventScroll:!0}))},ref:H},T);return u.createElement(d.A,{open:B||w||P,autoDestroy:!1,getContainer:g,autoLock:b&&(B||P)},u.createElement(A,Y))};var w=t(5741),x=t(77643),N=t(49437),O=t(27895),M=t(93457),S=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},K=((0,O.P)("default","large"),{distance:180});const D=function(e){var n=e.width,t=e.height,i=e.size,s=void 0===i?"default":i,d=e.closable,v=void 0===d||d,f=e.mask,m=void 0===f||f,p=e.push,y=void 0===p?K:p,h=e.closeIcon,C=void 0===h?u.createElement(l.A,null):h,b=e.bodyStyle,E=e.drawerStyle,k=e.className,A=e.visible,O=e.open,D=e.children,R=e.style,I=e.title,L=e.headerStyle,P=e.onClose,U=e.footer,j=e.footerStyle,z=e.prefixCls,F=e.getContainer,V=e.extra,B=e.afterVisibleChange,H=e.afterOpenChange,X=S(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","open","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange","afterOpenChange"]),T=u.useContext(w.QO),Y=T.getPopupContainer,Q=T.getPrefixCls,W=T.direction,q=Q("drawer",z),G=void 0===F&&Y?function(){return Y(document.body)}:F,J=v&&u.createElement("button",{type:"button",onClick:P,"aria-label":"Close",className:"".concat(q,"-close")},C);[["visible","open"],["afterVisibleChange","afterOpenChange"]].forEach((function(e){var n=(0,r.A)(e,2);n[0],n[1]}));var Z=c()((0,a.A)({"no-mask":!m},"".concat(q,"-rtl"),"rtl"===W),k),$=u.useMemo((function(){return null!==n&&void 0!==n?n:"large"===s?736:378}),[n,s]),_=u.useMemo((function(){return null!==t&&void 0!==t?t:"large"===s?736:378}),[t,s]),ee={motionName:(0,N.by)(q,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500};return u.createElement(M.K6,null,u.createElement(x.XB,{status:!0,override:!0},u.createElement(g,(0,o.A)({prefixCls:q,onClose:P},X,{open:null!==O&&void 0!==O?O:A,mask:m,push:y,width:$,height:_,rootClassName:Z,getContainer:G,afterOpenChange:function(e){null===H||void 0===H||H(e),null===B||void 0===B||B(e)},maskMotion:ee,motion:function(e){return{motionName:(0,N.by)(q,"panel-motion-".concat(e)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},rootStyle:R}),u.createElement("div",{className:"".concat(q,"-wrapper-body"),style:(0,o.A)({},E)},I||v?u.createElement("div",{className:c()("".concat(q,"-header"),(0,a.A)({},"".concat(q,"-header-close-only"),v&&!I&&!V)),style:L},u.createElement("div",{className:"".concat(q,"-header-title")},J,I&&u.createElement("div",{className:"".concat(q,"-title")},I)),V&&u.createElement("div",{className:"".concat(q,"-extra")},V)):null,u.createElement("div",{className:"".concat(q,"-body"),style:b},D),function(){if(!U)return null;var e="".concat(q,"-footer");return u.createElement("div",{className:e,style:j},U)}()))))}}}]);