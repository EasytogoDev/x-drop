"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[1717],{76675:(t,e,n)=>{n.d(e,{Ay:()=>S});var o=n(9950),r=n(11942);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function f(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=c(t);if(e){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function m(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),r=o?o[1]:"",a=o?o[3]:"",i=o?o[2]:n,s=i.length>=e?i:(m(Array(e)).map((function(){return"0"})).join("")+i).slice(-1*e);return"".concat(r).concat(s).concat(a)}var v={daysInHours:!1,zeroPadTime:2};function y(t,e){var n=t.days,o=t.hours,r=t.minutes,a=t.seconds,i=Object.assign(Object.assign({},v),e),s=i.daysInHours,u=i.zeroPadTime,c=i.zeroPadDays,l=void 0===c?u:c,f=Math.min(2,u),p=s?h(o+24*n,u):h(o,f);return{days:s?"":h(n,l),hours:p,minutes:h(r,f),seconds:h(a,f)}}var b=function(t){u(n,t);var e=p(n);function n(){var t;return a(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return s(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,o.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(o.Component);b.propTypes={count:r.number,children:r.element,onComplete:r.func};var T=function(t){u(n,t);var e=p(n);function n(t){var r;if(a(this,n),(r=e.call(this,t)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=(0,o.createRef)(),r.tick=function(){var t=r.calcTimeDelta(),e=t.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(t,void 0,e)},r.start=function(){if(!r.isStarted()){var t=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=t?r.calcOffsetStartTimestamp()-t:0;var e=r.calcTimeDelta();r.setTimeDeltaState(e,"STARTED",r.props.onStart),r.props.controlled||e.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},t.date){var i=r.calcTimeDelta();r.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return s(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,o=t.precision,r=t.controlled,a=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,r=void 0===o?Date.now:o,a=n.precision,i=void 0===a?0:a,s=n.controlled,u=n.offsetTime,c=void 0===u?0:u,l=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=c);var f=s?e:e-r(),p=Math.min(20,Math.max(0,i)),m=Math.round(1e3*parseFloat(((l?f:Math.max(0,f))/1e3).toFixed(p))),d=Math.abs(m)/1e3;return{total:m,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:m<=0}}(e,{now:n,precision:o,controlled:r,offsetTime:this.offsetTime,overtime:a})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var o=this;if(this.mounted){var r=t.completed&&!this.state.timeDelta.completed,a=t.completed&&"STARTED"===e;r&&!this.props.overtime&&this.clearTimer();return this.setState((function(n){var r=e||n.status;return t.completed&&!o.props.overtime?r="COMPLETED":e||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:t,status:r}}),(function(){n&&n(o.state.timeDelta),o.props.onComplete&&(r||a)&&o.props.onComplete(t,a)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,o=t.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:y(r,{daysInHours:e,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,r=t.onComplete;return(0,o.createElement)(b,{ref:this.legacyCountdownRef,count:e,onComplete:r},n)}var a=this.props,i=a.className,s=a.overtime,u=a.children,c=a.renderer,l=this.getRenderProps();if(c)return c(l);if(u&&this.state.timeDelta.completed&&!s)return(0,o.cloneElement)(u,{countdown:l});var f=l.formatted,p=f.days,m=f.hours,d=f.minutes,h=f.seconds;return(0,o.createElement)("span",{className:i},l.total<0?"-":"",p,p?":":"",m,":",d,":",h)}}]),n}(o.Component);T.defaultProps=Object.assign(Object.assign({},v),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),T.propTypes={date:(0,r.oneOfType)([(0,r.instanceOf)(Date),r.string,r.number]),daysInHours:r.bool,zeroPadTime:r.number,zeroPadDays:r.number,controlled:r.bool,intervalDelay:r.number,precision:r.number,autoStart:r.bool,overtime:r.bool,className:r.string,children:r.element,renderer:r.func,now:r.func,onMount:r.func,onStart:r.func,onPause:r.func,onStop:r.func,onTick:r.func,onComplete:r.func};const S=T},54963:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=s(n(9950)),i=s(n(11942));function s(t){return t&&t.__esModule?t:{default:t}}var u=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.displayName="FontAwesome",t}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"render",value:function(){var t=this.props,e=t.border,n=t.cssModule,r=t.className,i=t.fixedWidth,s=t.flip,u=t.inverse,c=t.name,l=t.pulse,f=t.rotate,p=t.size,m=t.spin,d=t.stack,h=t.tag,v=void 0===h?"span":h,y=t.ariaLabel,b=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["border","cssModule","className","fixedWidth","flip","inverse","name","pulse","rotate","size","spin","stack","tag","ariaLabel"]),T=y?{"aria-label":y}:{"aria-hidden":!0},S=[];return n?(S.push(n.fa),S.push(n["fa-"+c]),p&&S.push(n["fa-"+p]),m&&S.push(n["fa-spin"]),l&&S.push(n["fa-pulse"]),e&&S.push(n["fa-border"]),i&&S.push(n["fa-fw"]),u&&S.push(n["fa-inverse"]),s&&S.push(n["fa-flip-"+s]),f&&S.push(n["fa-rotate-"+f]),d&&S.push(n["fa-stack-"+d])):(S.push("fa"),S.push("fa-"+c),p&&S.push("fa-"+p),m&&S.push("fa-spin"),l&&S.push("fa-pulse"),e&&S.push("fa-border"),i&&S.push("fa-fw"),u&&S.push("fa-inverse"),s&&S.push("fa-flip-"+s),f&&S.push("fa-rotate-"+f),d&&S.push("fa-stack-"+d)),r&&S.push(r),a.default.createElement(v,o({},b,T,{className:S.join(" ")}))}}]),e}(a.default.Component);u.propTypes={ariaLabel:i.default.string,border:i.default.bool,className:i.default.string,cssModule:i.default.object,fixedWidth:i.default.bool,flip:i.default.oneOf(["horizontal","vertical"]),inverse:i.default.bool,name:i.default.string.isRequired,pulse:i.default.bool,rotate:i.default.oneOf([90,180,270]),size:i.default.oneOf(["lg","2x","3x","4x","5x"]),spin:i.default.bool,stack:i.default.oneOf(["1x","2x"]),tag:i.default.string},e.default=u,t.exports=e.default}}]);