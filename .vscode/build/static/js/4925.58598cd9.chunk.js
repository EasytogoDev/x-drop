"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[4925],{53965:(n,e,t)=>{t.d(e,{A:()=>a});t(9950);const a=t.p+"static/media/home.86b39a0ae5b4b6dd596b6963557ed8ed.svg"},72449:(n,e,t)=>{t.r(e),t.d(e,{BtnGroup:()=>l,Button:()=>i});var a=t(9950),r=t(8737),o=t(44414);function i(n){const{type:e,shape:t,icon:i,size:l,outlined:d,ghost:c,transparented:s,raised:p,squared:h,color:g,social:m,load:u,children:x,...b}=n,[f,y]=(0,a.useState)({loading:!1});return(0,o.jsx)(r.ButtonStyled,{squared:h,outlined:d?1:0,ghost:c,transparent:s?1:0,raised:p?1:0,data:e,size:l,shape:t,type:e,icon:i,color:g,social:m,onClick:u&&(()=>{y({loading:!0})}),loading:f.loading,...b,children:x})}function l(n){let{children:e}=n;return(0,o.jsx)(r.ButtonStyledGroup,{children:e})}i.defaultProps={type:"default"}},8737:(n,e,t)=>{t.r(e),t.d(e,{ButtonStyled:()=>c,ButtonStyledGroup:()=>s});var a,r,o=t(57528),i=t(48538),l=t(19335);const d=i.A.Group,c=(0,l.Ay)(i.A)(a||(a=(0,o.A)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(n=>{let{type:e,theme:t}=n;return"default"!==e&&t["".concat(e,"-color")]}),(n=>{let{type:e}=n;return"dashed"!==e?"solid":"dashed"}),(n=>{let{theme:e,type:t}=n;return"default"!==t?"#ffffff":e[e.mainContent]["gray-text"]}),(n=>{let{shape:e}=n;return e?"40px":"4px"}),(n=>{let{size:e,theme:t}=n;return"default"!==e?t["btn-height-".concat(e)]:"44px"}),(n=>{let{type:e,theme:t}=n;return"default"!==e?t["white-color"]:t["light-color"]}),(n=>{let{type:e,theme:t}=n;return"default"!==e&&t["".concat(e,"-hover")]}),(n=>{let{theme:e}=n;return e.rtl?"margin-right":"margin-left"}),(n=>{let{transparent:e,theme:t,type:a}=n;return e&&((n,e)=>"\n        background: ".concat(n["".concat(e,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(e,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==e&&n["".concat(e,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==e&&n["".concat(e,"-hover")],"; \n        }\n    "))(t,a)}),(n=>{let{outlined:e,theme:t,type:a}=n;return e&&((n,e)=>"\n        background: transparent;\n        border: 1px solid ".concat("light"!==e?n["".concat(e,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==e?n["".concat(e,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==e?n["".concat(e,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          }\n        }\n    "))(t,a)}),(n=>{let{ghost:e,theme:t}=n;return e&&(n=>"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    "))(t)}),(n=>{let{raised:e,theme:t,type:a}=n;return e&&((n,e)=>"\n        box-shadow: 0 8px 13px ".concat("white"!==e?n["".concat(e,"-color")]:n["light-color"],"20;\n    "))(t,a)}),(n=>{let{squared:e,theme:t,type:a}=n;return e&&((n,e)=>"\n    background: ".concat("default"!==e&&n["".concat(e,"-color")],";\n    border: 1px solid ").concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat("default"!==e&&"#ffffff",";\n    }\n"))(t,a)}),(n=>{let{squared:e,outlined:t,theme:a,type:r}=n;return e&&t&&((n,e)=>"\n    background: transparent;\n    border: 1px solid ".concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat((n=>{let{theme:e,type:t}=n;return"default"!==t&&e["white-color"]}),";\n    }\n"))(a,r)}),(n=>{let{social:e,color:t,shape:a}=n;return e&&((n,e)=>"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((n=>{let{theme:e}=n;return e["white-color"]}),";\n    border-radius: ").concat(e?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((n=>{let{theme:e}=n;return e["white-color"]}),";\n    }\n"))(t,a)})),s=(0,l.Ay)(d)(r||(r=(0,o.A)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(n=>{let{theme:e}=n;return e[e.mainContent].bgNormal}))},29355:(n,e,t)=>{t.r(e),t.d(e,{Cards:()=>c});var a=t(24062),r=(t(9950),t(42074)),o=t(56205),i=t(59377),l=t(42017),d=t(44414);function c(n){const{title:e,children:t,more:c,moreText:s,size:p,headless:h,caption:g,isbutton:m,bodyStyle:u,headStyle:x,border:b,bodypadding:f,className:y}=n;return(0,d.jsx)(d.Fragment,{children:h?(0,d.jsxs)(o.CardFrame,{bodypadding:f&&f,bodyStyle:u&&u,size:p,style:{width:"100%"},bordered:b,className:y,children:[e&&(0,d.jsx)(l.default,{as:"h4",children:e}),g&&(0,d.jsx)("p",{children:g}),t]}):(0,d.jsx)(o.CardFrame,{size:p,title:e,bodyStyle:u&&u,headStyle:x&&x,bordered:b,className:y,bodypadding:f&&f,extra:(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(i.Dropdown,{content:c,placement:"bottom",children:(0,d.jsx)(r.N_,{onClick:n=>n.preventDefault(),to:"#",children:s?"More":(0,d.jsx)(a.A,{})})}),m&&m]}),style:{width:"100%"},children:t})})}c.defaultProps={border:!1}},56205:(n,e,t)=>{t.r(e),t.d(e,{CardFrame:()=>l});var a,r=t(57528),o=t(2557),i=t(19335);const l=(0,i.Ay)(o.A)(a||(a=(0,r.A)(["\n\n  ","\n  margin-bottom: 25px !important;\n\n  background-color: ",";\n  .ant-card-head{\n    border-color: ",";\n    .ant-card-head-title{\n      padding: 18px 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: ",";\n    }\n  }\n  .ant-card-body{\n    padding: ",";\n    @media only screen and (max-width: 575px){\n      padding: ",";\n    }\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ","\n        }\n        &.late{\n          background: ","\n        }\n        &.complete{\n          background: ","\n        }\n        &.progress{\n          background: ","\n        }\n      }\n    }\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n\n  .ant-card-extra  {\n    padding: 12px 0;\n    .ant-dropdown-trigger{\n      line-height: 0;\n      order: 1;\n      ",": 20px !important;\n      @media only screen and (max-width: 575px){\n        ",": 0 !important;\n      }\n    }\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(n=>{let{isbutton:e,theme:t}=n;return e&&(n=>"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n"))(t)}),(n=>{let{theme:e}=n;return e[e.mainContent]["white-background"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["border-color-default"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["dark-text"]}),(n=>{let{bodypadding:e}=n;return e?"".concat(e," !important"):"25px !important"}),(n=>{let{bodypadding:e}=n;return e?"".concat(e," !important"):"15px !important"}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e[e.mainContent].Warning}),(n=>{let{theme:e}=n;return e[e.mainContent].success}),(n=>{let{theme:e}=n;return e[e.mainContent].danger}),(n=>{let{theme:e}=n;return e.rtl?" margin-left":" margin-right"}),(n=>{let{theme:e}=n;return e.rtl?" margin-left":" margin-right"}),(n=>{let{theme:e}=n;return e.rtl?" margin-right":" margin-left"}),(n=>{let{theme:e}=n;return e.rtl?" margin-right":" margin-left"}),(n=>{let{theme:e}=n;return e.rtl?" right":" left"}))},57687:(n,e,t)=>{t.r(e),t.d(e,{PageHeader:()=>d});var a=t(73414),r=t(42074),o=t(34774),i=t(16438),l=t(44414);function d(n){const{title:e,subTitle:d,routes:c,buttons:s,ghost:p,bgColor:h,className:g}=n,m=c?(0,l.jsx)(a.A,{separator:(0,l.jsx)("span",{className:"ninjadash-seperator"}),children:c.map(((n,e)=>e+1===c.length?(0,l.jsx)(a.A.Item,{children:n.breadcrumbName},e):(0,l.jsxs)(a.A.Item,{children:[(0,l.jsx)(o.k,{src:t(53965).A})," ",(0,l.jsx)(r.N_,{to:n.path,children:n.breadcrumbName})]},e)))}):"";return(0,l.jsx)(i.HeaderWrapper,{bgColor:h,children:(0,l.jsx)(i.PageHeaderStyle,{className:g,title:e,subTitle:d,breadcrumb:m,extra:s,ghost:p})})}},16438:(n,e,t)=>{t.r(e),t.d(e,{HeaderWrapper:()=>c,PageHeaderStyle:()=>d});var a,r,o=t(57528),i=t(62693),l=t(19335);const d=(0,l.Ay)(i.A)(a||(a=(0,o.A)(["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"],["\n  \n  &.ant-page-header {  \n    padding: 16px 24px 25px;  \n    background-color: ",";\n    &.ninjadash-page-header-main{\n      background-color: ",";\n    }\n    &.ant-page-header-ghost{\n      padding: 18px 24px 18px;\n    }\n  }\n  &.ant-page-header.has-breadcrumb{\n    padding-top: 15px;\n    .ant-breadcrumb{\n      ol li{\n        display: flex;\n        .ant-breadcrumb-link{\n          display: flex;\n          transition: color 0.3s;\n          div{\n            line-height: 1;\n            svg{\n              position: relative;\n              top: 2px;\n              ",": 8px;\n              path{\n                transition: color 0.3s;\n              }\n            }\n          }\n          &:hover{\n            div{\n              svg path{\n                fill: ",";\n              }\n            }\n          }\n        }\n        .ant-breadcrumb-separator{\n          display: flex;\n          align-items: center;\n          .ninjadash-seperator{\n            display: block;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background-color: ",";\n          }\n        }\n        &:last-child{\n          .ant-breadcrumb-separator{\n            display: none;\n          }\n        }\n      }\n    }\n  }\n  .page-header-actions button.ant-btn-primary svg {\n    color: #fff;\n  }\n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: ",";\n    position: relative;\n    top: -1px;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n\n  .ant-breadcrumb ol{\n    @media only screen and (max-width: 767px){\n      justify-content: center;\n    }\n  }\n\n  /* Main Page Header Style */\n  &.ninjadash-pageheader-with-back{\n    &.ninjadash-page-header-main{\n      padding: 32px 30px 25px;\n    }\n    .ant-page-header-heading-title{\n      .back-link{\n        display: inline-block;\n        margin-top: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        a{\n          color: ",";\n          display: flex;\n          align-items: center;\n          &:hover{\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  &.ninjadash-page-header-main{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 34px 30px 24px;\n    @media only screen and (max-width: 991px){\n      padding: 18px 15px 12px;\n    }\n    @media only screen and (max-width: 767px){\n      flex-direction: column;\n      align-items: center;\n      padding: 20px 15px 30px;\n    }\n    .ant-page-header-heading-title{\n      @media only screen and (max-width: 767px){\n        margin-right: 0;\n        ",": 0;\n      }\n    }\n    .ant-page-header-heading-sub-title{\n      padding-bottom: 2px;\n    }\n    .ant-breadcrumb{\n      order: 2;\n      position: relative;\n      top: 10px;\n      >span{\n        position: relative;\n        ",": 10px;\n        color: ",";\n        &:first-child{\n          ",": 20px;\n          .ant-breadcrumb-link{\n            &:hover{\n              &:before{\n                color: ",";\n              }\n              a{\n                color: ",";\n              }\n            }\n            a{\n              color: ",";\n            }\n            &:before{\n              position: absolute;\n              ",": 0;\n              top: 0;\n              line-height: 1.45;\n              font-family: 'FontAwesome';\n              font-weight: 900;\n              content: \"\\f015\";\n              color: ",";\n              visibility: visible;\n            }\n            &:after{\n              display: none;\n            }\n          }\n        }\n\n        &:last-child{\n          .ant-breadcrumb-link{\n            color: ",";\n            &:hover{\n              &:after{\n                background-color: ",";\n              }\n            }\n          }\n        }\n\n        .ant-breadcrumb-link{\n          &:after{\n            position: absolute;\n            ",": 0;\n            ",": 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 4px;\n            height: 4px;\n            content: '';\n            background-color: ",";\n            border-radius: 50%;\n          }\n        }\n\n        .ant-breadcrumb-separator{\n          display: none;\n        }\n      }\n      span + span{\n        ",": 8px;\n      }\n      .ant-breadcrumb-link{\n        &:hover{\n          &:after{\n            background-color: ",";\n          }\n          a{\n              color: ",";\n          }\n        }\n        a,\n        span{\n          font-size: 14px;\n          color: ",";\n        }\n      }\n      &+.ant-page-header-heading {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        @media only screen and (max-width: 767px){\n          margin-bottom: 0;\n        }\n      }\n    }\n\n    .ant-page-header-heading{\n      margin: 4px  0;\n      flex: 1;\n      .ant-page-header-heading-left{\n        margin: 0;\n      }\n      .ant-page-header-heading-title{\n        font-size: 22px;\n        font-weight: 600;\n        color: ",";\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6{\n          font-weight: 600;\n          margin-bottom: 0;\n          color: ",";\n        }\n      }\n    }\n  }\n"])),(n=>{let{theme:e}=n;return e[e.mainContent]["main-background-light"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["main-background"]}),(n=>{let{theme:e}=n;return e.rtl?"margin-left":"margin-right"}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["extra-light"]}),(n=>{let{theme:e}=n;return e.rtl?"margin-left":"margin-right"}),(n=>{let{theme:e}=n;return e[e.mainContent]["menu-active"]}),(n=>{let{theme:e}=n;return e.rtl?"margin-right":"margin-left"}),(n=>{let{theme:e}=n;return e[e.mainContent]["gray-text"]}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e.rtl?"margin-left":"margin-right"}),(n=>{let{theme:e}=n;return e.rtl?"padding-right":"padding-left"}),(n=>{let{theme:e}=n;return e[e.mainContent]["gray-text"]}),(n=>{let{theme:e}=n;return e.rtl?"padding-right":"padding-left"}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["gray-text"]}),(n=>{let{theme:e}=n;return e.rtl?"right":"left"}),(n=>{let{theme:e}=n;return e[e.mainContent]["gray-text"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["light-text"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["light-text"]}),(n=>{let{theme:e}=n;return e.rtl?"right":"left"}),(n=>{let{theme:e}=n;return e.rtl?"padding-right":"padding-left"}),(n=>{let{theme:e}=n;return e[e.mainContent]["light-text"]}),(n=>{let{theme:e}=n;return e.rtl?"margin-right":"margin-left"}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["gray-light-text"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["dark-text"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["dark-text"]})),c=l.Ay.div(r||(r=(0,o.A)(["\n  background: ","};\n  border-radius: 5px;\n  .ant-page-header-heading-title{\n    color: ",";\n  }\n  .ant-page-header-heading-sub-title{\n    color: ",";\n  }\n"])),(n=>{let{theme:e,bgColor:t}=n;return t||e[e.mainContent]["main-background-light"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["dark-text"]}),(n=>{let{theme:e}=n;return e[e.mainContent]["gray-text"]}))},49181:(n,e,t)=>{t.r(e),t.d(e,{default:()=>f});var a=t(9950),r=t(92759),o=t(87094),i=t(41988),l=t(48874),d=t(2260),c=t(8750),s=t(51598),p=t(57687),h=t(67482),g=t(29355),m=t(72449),u=t(44414);const x={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},onChange(n){n.file.status,"done"===n.file.status?r.Ay.success("".concat(n.file.name," file uploaded successfully")):"error"===n.file.status&&r.Ay.error("".concat(n.file.name," file upload failed."))}},b=n=>{const e="image/jpeg"===n.type||"image/png"===n.type;e||r.Ay.error("You can only upload JPG/PNG file!");const t=n.size/1024/1024<2;return t||r.Ay.error("Image must smaller than 2MB!"),e&&t};const f=function(){const[n,e]=(0,a.useState)({fileList:[{uid:"-1",name:"xxx.png",status:"done",url:"http://www.baidu.com/xxx.png"}],loading:!1,defaultFilelist:[{uid:"-1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"-2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"-3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]}),t=(0,u.jsxs)("div",{children:[n.loading?(0,u.jsx)(d.A,{}):(0,u.jsx)(c.A,{}),(0,u.jsx)("div",{className:"ant-upload-text",children:"Upload"})]}),{imageUrl:r,defaultFilelist:f}=n,y={action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange(t){let{file:a,fileList:r}=t;"uploading"!==a.status&&e({...n,defaultFilelist:[...f,r]})}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.PageHeader,{className:"ninjadash-page-header-main",title:"Upload",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Upload"}]}),(0,u.jsx)(h.Main,{children:(0,u.jsxs)(o.A,{gutter:15,children:[(0,u.jsxs)(i.A,{sm:12,xs:24,children:[(0,u.jsx)(g.Cards,{title:"Basic",children:(0,u.jsx)(l.A,{...x,children:(0,u.jsxs)(m.Button,{className:"btn-outlined",size:"large",type:"light",outlined:!0,children:[(0,u.jsx)(s.A,{})," Click to Upload"]})})}),(0,u.jsx)(g.Cards,{title:"Avatar",children:(0,u.jsx)(l.A,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",beforeUpload:b,onChange:t=>{"uploading"!==t.file.status?"done"===t.file.status&&((n,e)=>{const t=new FileReader;t.addEventListener("load",(()=>e(t.result))),t.readAsDataURL(n)})(t.file.originFileObj,(n=>e({imageUrl:n,loading:!1}))):e({...n,loading:!0})},children:r?(0,u.jsx)("img",{src:r,alt:"avatar",style:{width:"100%"}}):t})})]}),(0,u.jsxs)(i.A,{sm:12,xs:24,children:[(0,u.jsx)(g.Cards,{title:"Complete Control",children:(0,u.jsx)(l.A,{props:{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:t=>{let a=[...t.fileList];a=a.slice(-2),a=a.map((n=>(n.response&&(n.url=n.response.url),n))),e({...n,fileList:a})},multiple:!0},fileList:n.fileList,children:(0,u.jsxs)(m.Button,{className:"btn-outlined",size:"large",type:"light",outlined:!0,children:[(0,u.jsx)(s.A,{})," Upload"]})})}),(0,u.jsx)(g.Cards,{title:"Upload Default",children:(0,u.jsx)(l.A,{props:y,fileList:f,children:(0,u.jsxs)(m.Button,{className:"btn-outlined",size:"large",type:"light",outlined:!0,children:[(0,u.jsx)(s.A,{})," Upload"]})})})]})]})})]})}},13239:(n,e,t)=>{t.d(e,{A:()=>d});var a=t(89379),r=t(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var i=t(47484),l=function(n,e){return r.createElement(i.A,(0,a.A)((0,a.A)({},n),{},{ref:e,icon:o}))};const d=r.forwardRef(l)},51598:(n,e,t)=>{t.d(e,{A:()=>d});var a=t(89379),r=t(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};var i=t(47484),l=function(n,e){return r.createElement(i.A,(0,a.A)((0,a.A)({},n),{},{ref:e,icon:o}))};const d=r.forwardRef(l)},24062:(n,e,t)=>{t.d(e,{A:()=>l});var a=t(72603),r=t(11942),o=t.n(r);const i=n=>{const{color:e,size:t,...r}=n;return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e,...r},a.createElement("path",{d:"M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"}))};i.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},i.defaultProps={color:"currentColor",size:"24"};const l=i},82795:(n,e,t)=>{t.d(e,{A:()=>d});var a=t(89379),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),o="aria-",i="data-";function l(n,e){return 0===n.indexOf(e)}function d(n){var e,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,a.A)({},t);var d={};return Object.keys(n).forEach((function(t){(e.aria&&("role"===t||l(t,o))||e.data&&l(t,i)||e.attr&&r.includes(t))&&(d[t]=n[t])})),d}}}]);