(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/dash-board_dev.ca6d0303.svg"},101:function(e,t,a){e.exports=a.p+"static/media/dash-board_event.30f66341.svg"},102:function(e,t,a){e.exports=a.p+"static/media/dash-board_org.2935ac4b.svg"},103:function(e,t,a){e.exports={dash_board_cards:"DashboardScreen_dash_board_cards__1cYb-"}},104:function(e,t,a){e.exports={header_big:"Footer_header_big__1gt9V",top_bar:"Footer_top_bar__z3cZ9"}},121:function(e,t,a){e.exports=a(154)},149:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),s=a(6);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(107),l=a(195),u=a(10),p=a.n(u),m=a(19),d=a(40),_=a.n(d),h={authToken:""};function f(e,t){return _.a.post("/api/v1/login",{user:{email:e,password:t}})}function v(e){return b.apply(this,arguments)}function b(){return(b=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/users/".concat(t),{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/organisations/",{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return j.apply(this,arguments)}function j(){return(j=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/organisations/".concat(t),{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/devices",{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return k.apply(this,arguments)}function k(){return(k=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/devices/".concat(t),{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=a(11),S=a(8),C=a(12),D=a(13),P=a(14),I=a(34),T=a(27),L=a(2);function B(e){var t=e.children,a=Object(L.a)(e,["children"]),n=Object(s.d)((function(e){return e.user.loggedIn}));return r.a.createElement(T.b,Object.assign({},a,{render:function(e){var a=e.location;return n?t:r.a.createElement(T.a,{to:{pathname:"/login",state:{from:a}}})}}))}var U=a(5),z=a(192),G=a(201),A=a(18);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(A.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H="USER_LOGIN",M="USER_LOGOUT",V="USER_SET_ORGANISATION",W={loggedIn:!1,authToken:null,id:-1,email:"",name:"",organisation:{id:-1,name:""},role:{id:-1,name:"",rights:0}};function J(e){return{type:H,payload:e}}a(149);var Z=a(90),X=a.n(Z),Y=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.history,i=t.location,c="",s="";return this.props.loggedIn?r.a.createElement(T.a,{to:{pathname:"/",state:{from:i}}}):r.a.createElement("div",{className:X.a.login},r.a.createElement("h1",{className:"header_big"},"Login"),r.a.createElement("div",null,r.a.createElement(G.a,{id:"standard-basic",className:a.textField,label:"E-Mail",margin:"normal",color:"secondary",type:"email",onChange:function(e){c=e.target.value},InputProps:{classes:{input:a.resize}},InputLabelProps:{classes:{root:a.resize}}})),r.a.createElement("div",null,r.a.createElement(G.a,{id:"standard-password-input",label:"Password",className:a.textField,type:"password",autoComplete:"current-password",margin:"normal",color:"secondary",onChange:function(e){s=e.target.value},InputProps:{classes:{input:a.resize}},InputLabelProps:{classes:{root:a.resize}}})),r.a.createElement(z.a,{variant:"contained",color:"secondary",classes:{label:a.resize},className:a.button,onClick:function(){e.props.userLogin(c,s).then((function(){return n.replace("/")}))}},"Login"))}}]),t}(r.a.Component);var q={userLogin:function(e,t){return function(){var a=Object(m.a)(p.a.mark((function a(n){var r,i;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f(e,t);case 3:r=a.sent,i=F({},r.data,{authToken:r.headers.authorization}),console.log(i),localStorage.setItem("user",JSON.stringify(i)),n(J(i)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}},K=Object(s.b)((function(e){return{loggedIn:e.user.loggedIn}}),q)(Object(U.a)({button:{marginTop:"8rem",padding:"0 4rem",width:"40rem"},textField:{marginTop:"4rem",width:"40rem"},resize:{fontSize:"2rem",color:"white"},input:{color:"white"}})(Object(T.h)(Y))),Q=a(108),$=a(193),ee=a(199),te=a(198),ae=a(197),ne=a(96),re=a.n(ne),ie=a(95),ce=a.n(ie),se=a(94),oe=a.n(se),le=a(93),ue=a.n(le),pe=a(92),me=a.n(pe),de=a(91),_e=a.n(de),he=Object($.a)((function(e){return{SpeedDialfab:{width:"8rem",height:"8rem"},SpeedDialFabIcon:{height:"6rem"},fab:{width:"6rem",height:"6rem"}}}));function fe(){var e=Object(T.g)(),t=he(),a=Object(s.c)(),n=Object(s.d)((function(e){return e.user.loggedIn})),i=Object(s.d)((function(e){return e.user.id})),c=r.a.useState(!1),o=Object(Q.a)(c,2),l=o[0],u=o[1],d=[{icon:r.a.createElement(me.a,null),name:"Dashboard",onClick:function(){return e.push("/")}},{icon:r.a.createElement(ue.a,null),name:"Einstellungen",onClick:function(){return e.push("/settings")}},{icon:r.a.createElement(oe.a,null),name:"Benutzer",onClick:function(){return e.push("/user/".concat(i))}},{icon:r.a.createElement(ce.a,null),name:"Logout",onClick:function(){return a(function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.delete("/api/v1/logout");case 3:localStorage.removeItem("user"),t({type:M}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}}];return r.a.createElement("div",{className:_e.a.navigation_wrapper},r.a.createElement(ee.a,{ariaLabel:"SpeedDial example",classes:{fab:t.SpeedDialfab},hidden:!n,icon:r.a.createElement(te.a,{classes:{root:t.SpeedDialFabIcon},icon:r.a.createElement(re.a,{style:{fontSize:"6rem"}})}),onClose:function(){u(!1)},onOpen:function(){u(!0)},open:l&&n,direction:"up"},d.map((function(e){return r.a.createElement(ae.a,{key:e.name,icon:e.icon,tooltipPlacement:"right",tooltipTitle:e.name,onClick:e.onClick,classes:{fab:t.fab}})}))))}var ve=a(196),be=a(203),ge=a(189),Oe=a(200),Ee=a(31);function je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ye(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?je(a,!0).forEach((function(t){Object(A.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var we="ORGANISATIONS_SET",Ne="ORGANISATION_SET",ke={allOrganisations:[],selectedOrganisation:{id:-1,name:"",organisationUnits:[]}};function xe(e){return{type:we,payload:e}}function Se(e){return{type:Ne,payload:e}}var Ce=a(98),De=a.n(Ce),Pe=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(C.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=e.target.value,n=a.props.organisations.find((function(e){return e.id===t}));a.props.userSetOrganisation(n.id,n.name)},a}return Object(P.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.organisationsGet()}},{key:"render",value:function(){var e=this.props.classes,t=this.props.selectedOrganisation>0&&this.props.organisations.length?this.props.selectedOrganisation:"";return r.a.createElement("div",{className:De.a.admin_tool_bar_wrapper},r.a.createElement(ge.a,{className:e.formControl},r.a.createElement(Oe.a,{id:"organisation_select_label"},"Organisation"),r.a.createElement(ve.a,{labelId:"organisation_select_label",id:"demo-simple-select",value:t,onChange:this.handleChange},this.props.organisations.map((function(e,t){return r.a.createElement(be.a,{key:t,value:e.id},e.name)})))))}}]),t}(r.a.Component);var Ie={organisationsGet:function(){return function(){var e=Object(m.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:a=e.sent,n=a.data,t(xe(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},userSetOrganisation:function(e,t){return{type:V,payload:{id:e,name:t}}}},Te=Object(s.b)((function(e){var t=e.organisations,a=e.user;return{organisations:t.allOrganisations,selectedOrganisation:a.organisation.id}}),Ie)(Object(U.a)({formControl:{minWidth:220}})(Pe)),Le=a(99),Be=a.n(Le),Ue=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Be.a.header_wrapper})}}]),t}(r.a.Component);var ze=Object(s.b)((function(){return{}}),{})(Ue),Ge=a(100),Ae=a.n(Ge),Re=a(101),Fe=a.n(Re),He=a(102),Me=a.n(He),Ve=a(64),We=a.n(Ve);function Je(e){var t=e.mainTitle,a=e.subTitle;return r.a.createElement("div",{className:We.a.site_header},r.a.createElement("div",{className:We.a.site_header__sub},a,"\xa0"),r.a.createElement("div",{className:We.a.site_header__main},t))}var Ze=a(57),Xe=a.n(Ze);function Ye(e){var t=e.title,a=e.icon,n=e.targetPath,i=void 0===n?"/":n,c=Object(T.g)();return r.a.createElement("div",{className:Xe.a.dashBoardCardWrapper,onClick:function(){return c.push(i)}},r.a.createElement("div",{className:Xe.a.dashBoardCard},r.a.createElement("div",{className:Xe.a.dashBoardCard__title},t,"\xa0"),r.a.createElement("div",{className:Xe.a.dashBoardCard__image,style:{backgroundImage:"url(".concat(a,")")}})))}a(33);var qe=a(103),Ke=a.n(qe),Qe=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(Je,{mainTitle:"Dashboard",subTitle:this.props.userOrganisationName}),r.a.createElement("div",{className:Ke.a.dash_board_cards},r.a.createElement(Ye,{title:"Ger\xe4te",icon:Ae.a,targetPath:"/devices"}),r.a.createElement(Ye,{title:"Organisation",icon:Me.a,targetPath:"/organisation"}),r.a.createElement(Ye,{title:"Events",icon:Fe.a,targetPath:"/events"}))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var $e=Object(s.b)((function(e){return{userOrganisationName:e.user.organisation.name}}),{})(Qe),et=a(70),tt=a.n(et);function at(e){var t=e.name,a=e.id,n=Object(T.g)();return r.a.createElement("div",{className:tt.a.deviceListElement,onClick:function(){return n.push("/device/".concat(a))}},r.a.createElement("div",{className:tt.a.deviceListElement__name},t))}function nt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function rt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?nt(a,!0).forEach((function(t){Object(A.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):nt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var it="DEVICES_SET",ct="DEVICE_SET",st={allDevices:[],selectedDevice:{}};function ot(e){return{type:it,payload:e}}function lt(e){return{type:ct,payload:e}}var ut=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.devicesGet()}},{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(Je,{mainTitle:"Ger\xe4te \xdcbersicht",subTitle:this.props.userOrganisationName}),this.props.devices.map((function(e,t){return r.a.createElement(at,{key:t,name:e.name,id:e.id})}))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var pt={devicesGet:function(){return function(){var e=Object(m.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:a=e.sent,n=Object(Ee.a)(a.data),t(ot(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}},mt=Object(s.b)((function(e){var t=e.user,a=e.devices;return{userOrganisationId:t.organisation.id,userOrganisationName:t.organisation.name,devices:a.allDevices}}),pt)(ut),dt=a(65),_t=a.n(dt);function ht(e){var t=e.name,a=e.role,n=e.id,i=Object(T.g)();return r.a.createElement("div",{className:_t.a.user_list_element,onClick:function(){return i.push("/user/".concat(n))}},r.a.createElement("div",{className:_t.a.user_list_element__name},t),r.a.createElement("div",{className:_t.a.user_list_element__role},a))}var ft=a(71),vt=a.n(ft),bt=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.organisationGet(this.props.userOrganisationId)}},{key:"componentDidUpdate",value:function(e){this.props.userOrganisationId!==e.userOrganisationId&&this.props.organisationGet(this.props.userOrganisationId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(Je,{mainTitle:"Organisation",subTitle:this.props.userOrganisationName}),this.props.organisationUnits.map((function(e,t){return r.a.createElement("div",{className:vt.a.organisatioin_unit,key:t},r.a.createElement("div",{className:vt.a.organisatioin_unit_name},e.name),e.users.map((function(e,t){return r.a.createElement(ht,{key:t,name:e.name,role:e.role.name,id:e.id})})))}))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var gt={organisationGet:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(e);case 3:n=t.sent,r=n.data,a(Se(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},Ot=Object(s.b)((function(e){var t=e.user,a=e.organisations;return{userOrganisationId:t.organisation.id,userOrganisationName:a.selectedOrganisation.name,organisationUnits:a.selectedOrganisation.organisationUnits}}),gt)(bt),Et=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(Je,{mainTitle:"Events"})),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var jt=Object(s.b)((function(e){return{}}),{})(Et),yt=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(Je,{mainTitle:"Zonen"})),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var wt=Object(s.b)((function(e){return{}}),{})(yt),Nt=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(Je,{mainTitle:"Einstellungen",subTitle:"IoT-Rex"})),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var kt=Object(s.b)((function(e){return{}}),{})(Nt);function xt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var St="USER_INFO_SET",Ct={id:-1,email:"",name:"",role:{id:-1,name:"",rights:0}};function Dt(e){return{type:St,payload:e}}var Pt=a(72),It=a.n(Pt),Tt=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.userInfoGet(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.props.userInfoGet(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(Je,{mainTitle:e.name,subTitle:this.props.userOrganisationName}),r.a.createElement("p",{className:It.a.email},"Email: ".concat(e.email)),r.a.createElement("p",{className:It.a.role},"Role: ".concat(e.role.name))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var Lt={userInfoGet:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e);case 3:n=t.sent,r=n.data,a(Dt(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},Bt=Object(s.b)((function(e){var t=e.user,a=e.userInfo;return{userOrganisationName:t.organisation.name,user:a}}),Lt)(Object(T.h)(Tt)),Ut=(a(151),function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.deviceGet(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.props.deviceGet(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props.device;return console.log(e),r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(Je,{mainTitle:e.name,subTitle:this.props.userOrganisationName}),r.a.createElement("p",{className:"dev_eui"},"Device EUI: ".concat(e.dev_eui)),r.a.createElement("p",{className:"app_eui"},"APP EUI: ".concat(e.app_eui)),r.a.createElement("p",{className:"app_key"},"APP KEY: ".concat(e.app_key)),r.a.createElement("p",{className:"fw_version"},"FW Version: ".concat(e.fw_version)),r.a.createElement("p",{className:"hw_version"},"HW Version: ".concat(e.hw_version)),r.a.createElement("p",{className:"battery"},"Battery: ".concat(e.battery))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component));var zt={deviceGet:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(e);case 3:n=t.sent,r=n.data,a(lt(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},Gt=Object(s.b)((function(e){var t=e.user,a=e.devices;return{userOrganisationName:t.organisation.name,device:a.selectedDevice}}),zt)(Object(T.h)(Ut)),At=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(Je,{mainTitle:"Seite nicht gefunden",subTitle:"Error 404"})),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var Rt=Object(s.b)((function(e){return{}}),{})(At),Ft=a(104),Ht=a.n(Ft);function Mt(){return r.a.createElement("div",{className:Ht.a.top_bar})}a(152);var Vt=function(e){function t(){return Object(x.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(I.a,null,r.a.createElement("div",{className:"app_root"},r.a.createElement(fe,null),r.a.createElement("div",{className:"app_main"},this.props.userRights>9e3&&r.a.createElement(Te,null),r.a.createElement(ze,null),r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/login",component:K}),r.a.createElement(B,{exact:!0,path:"/"},r.a.createElement($e,null)),r.a.createElement(B,{path:"/devices"},r.a.createElement(mt,null)),r.a.createElement(B,{path:"/organisation"},r.a.createElement(Ot,null)),r.a.createElement(B,{path:"/events"},r.a.createElement(jt,null)),r.a.createElement(B,{path:"/zones"},r.a.createElement(wt,null)),r.a.createElement(B,{path:"/settings"},r.a.createElement(kt,null)),r.a.createElement(B,{path:"/user/:id"},r.a.createElement(Bt,null)),r.a.createElement(B,{path:"/device/:id"},r.a.createElement(Gt,null)),r.a.createElement(B,{path:"*"},r.a.createElement(Rt,null))),r.a.createElement(Mt,null))))}}]),t}(r.a.Component);var Wt,Jt=Object(s.b)((function(e){var t=e.user;return{loggedIn:t.loggedIn,userRights:t.role.rights}}),{})(Vt),Zt=a(50),Xt=a(105),Yt=a(106),qt=a.n(Yt),Kt=Object(Zt.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case H:return F({},e,{},t.payload,{loggedIn:!0});case M:return F({},W);case V:return F({},e,{organisation:t.payload});default:return e}},devices:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case it:return rt({},e,{allDevices:t.payload});case ct:return rt({},e,{selectedDevice:t.payload});default:return e}},organisations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case we:return ye({},e,{allOrganisations:Object(Ee.a)(t.payload)});case Ne:var a=t.payload;return ye({},e,{selectedOrganisation:{id:a.id,name:a.name,organisationUnits:a.organisation_units}});default:return e}},userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case St:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?xt(a,!0).forEach((function(t){Object(A.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):xt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{},t.payload);default:return e}}}),Qt=function(e){var t=[Xt.a,qt.a];return Object(Zt.d)(Kt,e,Zt.a.apply(void 0,t))},$t=(a(153),Object(o.a)({typography:{htmlFontSize:10,fontSize:18},palette:{primary:{main:"#1f262b"},secondary:{main:"#417cce",contrastText:"#e1e1e1"}}})),ea=Qt();(Wt=ea).subscribe((function(){var e=Wt.getState().user.authToken;h.authToken=e||""})),ea.dispatch((function(e){var t=JSON.parse(localStorage.getItem("user"));t&&e(J(t))})),c.a.render(r.a.createElement(s.a,{store:ea},r.a.createElement(l.a,{theme:$t},r.a.createElement(Jt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,a){},57:function(e,t,a){e.exports={header_big:"DashBoardCard_header_big__2shsm",dashBoardCardWrapper:"DashBoardCard_dashBoardCardWrapper__3rxgq",dashBoardCard:"DashBoardCard_dashBoardCard__2pVS-",dashBoardCard__title:"DashBoardCard_dashBoardCard__title__300ax",dashBoardCard__image:"DashBoardCard_dashBoardCard__image__1XXOY"}},64:function(e,t,a){e.exports={header_big:"SiteHeader_header_big__17v9r",site_header:"SiteHeader_site_header__BH3Bh",site_header__main:"SiteHeader_site_header__main__3fJJN",site_header__sub:"SiteHeader_site_header__sub__14xV-"}},65:function(e,t,a){e.exports={header_big:"UserListElement_header_big__akOSf",user_list_element:"UserListElement_user_list_element__3EtDr",user_list_element__name:"UserListElement_user_list_element__name__1Ni1r",user_list_element__role:"UserListElement_user_list_element__role__ZrDNL"}},70:function(e,t,a){e.exports={header_big:"DeviceListElement_header_big__2xCRZ",deviceListElement:"DeviceListElement_deviceListElement__-alHS",deviceListElement__name:"DeviceListElement_deviceListElement__name__1g6VD",deviceListElement__type:"DeviceListElement_deviceListElement__type__37idR"}},71:function(e,t,a){e.exports={organisatioin_unit:"OrganisationScreen_organisatioin_unit__Mm144",organisatioin_unit_name:"OrganisationScreen_organisatioin_unit_name__1d1J6"}},72:function(e,t,a){e.exports={email:"UserScreen_email__2ao9q",role:"UserScreen_role__26a_a"}},90:function(e,t,a){e.exports={login:"LoginScreen_login__2UXA9"}},91:function(e,t,a){e.exports={header_big:"Navigation_header_big__3zAj4",navigation_wrapper:"Navigation_navigation_wrapper__aBCuN"}},98:function(e,t,a){e.exports={header_big:"AdminToolBar_header_big__3poFN",admin_tool_bar_wrapper:"AdminToolBar_admin_tool_bar_wrapper__3Zvyn"}},99:function(e,t,a){e.exports={header_big:"Header_header_big__3Qja8",header_wrapper:"Header_header_wrapper__3MrEh"}}},[[121,1,2]]]);
//# sourceMappingURL=main.eab73b92.chunk.js.map