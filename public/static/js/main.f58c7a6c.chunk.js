(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){e.exports={header_big:"AdminToolBar_header_big__t8CL1",admin_tool_bar_wrapper:"AdminToolBar_admin_tool_bar_wrapper__1m2ER"}},103:function(e,t,a){e.exports={header_big:"Header_header_big__3ucJo",header_wrapper:"Header_header_wrapper__1QnRJ"}},104:function(e,t,a){e.exports=a.p+"static/media/dash-board_dev.ec8c3bc0.svg"},105:function(e,t,a){e.exports=a.p+"static/media/dash-board_event.e216aa12.svg"},106:function(e,t,a){e.exports=a.p+"static/media/dash-board_org.b5b7bb37.svg"},107:function(e,t,a){e.exports={dash_board_cards:"DashboardScreen_dash_board_cards__2DoWC"}},108:function(e,t,a){e.exports={header_big:"Footer_header_big__yzNn0",top_bar:"Footer_top_bar__2bO-I"}},126:function(e,t,a){e.exports=a(161)},154:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),s=a(7);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(111),l=a(202),u=a(6),p=a.n(u),m=a(18),d=a(34),_=a.n(d),h={authToken:""};function v(e,t){return _.a.post("/api/v1/login",{user:{email:e,password:t}})}function f(e){return b.apply(this,arguments)}function b(){return(b=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/users/".concat(t),{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/organisations/",{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/organisations/".concat(t),{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/devices",{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return k.apply(this,arguments)}function k(){return(k=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/devices/".concat(t),{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return D.apply(this,arguments)}function D(){return(D=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/v1/events",{headers:{Authorization:h.authToken}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=a(10),P=a(11),C=a(13),T=a(12),I=a(14),L=a(30),B=a(27),G=a(113);function U(e){var t=e.children,a=Object(G.a)(e,["children"]),n=Object(s.d)((function(e){return e.user.loggedIn}));return r.a.createElement(B.b,Object.assign({},a,{render:function(e){var a=e.location;return n?t:r.a.createElement(B.a,{to:{pathname:"/login",state:{from:a}}})}}))}var z=a(5),A=a(199),R=a(207),F=a(31);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(F.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H="USER_LOGIN",J="USER_LOGOUT",V="USER_SET_ORGANISATION",Y={loggedIn:!1,authToken:null,id:-1,email:"",name:"",organisation:{id:-1,name:""},role:{id:-1,name:"",rights:0}};function q(e){return{type:H,payload:e}}a(154);var X=a(94),K=a.n(X),Q=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.history,i=t.location,c="",s="";return this.props.loggedIn?r.a.createElement(B.a,{to:{pathname:"/",state:{from:i}}}):r.a.createElement("div",{className:K.a.login},r.a.createElement("h1",{className:"header_big"},"Login"),r.a.createElement("div",null,r.a.createElement(R.a,{id:"standard-basic",className:a.textField,label:"E-Mail",margin:"normal",color:"secondary",type:"email",onChange:function(e){c=e.target.value},InputProps:{classes:{input:a.resize}},InputLabelProps:{classes:{root:a.resize}}})),r.a.createElement("div",null,r.a.createElement(R.a,{id:"standard-password-input",label:"Password",className:a.textField,type:"password",autoComplete:"current-password",margin:"normal",color:"secondary",onChange:function(e){s=e.target.value},InputProps:{classes:{input:a.resize}},InputLabelProps:{classes:{root:a.resize}}})),r.a.createElement(A.a,{variant:"contained",color:"secondary",classes:{label:a.resize},className:a.button,onClick:function(){e.props.userLogin(c,s).then((function(){return n.replace("/")}))}},"Login"))}}]),t}(r.a.Component);var Z={userLogin:function(e,t){return function(){var a=Object(m.a)(p.a.mark((function a(n){var r,i;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v(e,t);case 3:r=a.sent,i=W({},r.data,{authToken:r.headers.authorization}),console.log(i),localStorage.setItem("user",JSON.stringify(i)),n(q(i)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}},$=Object(s.b)((function(e){return{loggedIn:e.user.loggedIn}}),Z)(Object(z.a)({button:{marginTop:"8rem",padding:"0 4rem",width:"40rem"},textField:{marginTop:"4rem",width:"40rem"},resize:{fontSize:"2rem",color:"white"},input:{color:"white"}})(Object(B.h)(Q))),ee=a(112),te=a(200),ae=a(206),ne=a(204),re=a(205),ie=a(100),ce=a.n(ie),se=a(99),oe=a.n(se),le=a(98),ue=a.n(le),pe=a(97),me=a.n(pe),de=a(96),_e=a.n(de),he=a(95),ve=a.n(he),fe=Object(te.a)((function(e){return{SpeedDialfab:{width:"8rem",height:"8rem"},SpeedDialFabIcon:{height:"6rem"},fab:{width:"6rem",height:"6rem"}}}));function be(){var e=Object(B.g)(),t=fe(),a=Object(s.c)(),n=Object(s.d)((function(e){return e.user.loggedIn})),i=Object(s.d)((function(e){return e.user.id})),c=r.a.useState(!1),o=Object(ee.a)(c,2),l=o[0],u=o[1],d=[{icon:r.a.createElement(_e.a,null),name:"Dashboard",onClick:function(){return e.push("/")}},{icon:r.a.createElement(me.a,null),name:"Einstellungen",onClick:function(){return e.push("/settings")}},{icon:r.a.createElement(ue.a,null),name:"Benutzer",onClick:function(){return e.push("/user/".concat(i))}},{icon:r.a.createElement(oe.a,null),name:"Logout",onClick:function(){return a(function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.delete("/api/v1/logout");case 3:localStorage.removeItem("user"),t({type:J}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}}];return r.a.createElement("div",{className:ve.a.navigation_wrapper},r.a.createElement(ae.a,{ariaLabel:"SpeedDial example",classes:{fab:t.SpeedDialfab},hidden:!n,icon:r.a.createElement(ne.a,{classes:{root:t.SpeedDialFabIcon},icon:r.a.createElement(ce.a,{style:{fontSize:"6rem"}})}),onClose:function(){u(!1)},onOpen:function(){u(!0)},open:l&&n,direction:"up"},d.map((function(e){return r.a.createElement(re.a,{key:e.name,icon:e.icon,tooltipPlacement:"right",tooltipTitle:e.name,onClick:e.onClick,classes:{fab:t.fab}})}))))}var ge=a(203),Oe=a(210),Ee=a(196),ye=a(208),je=a(49);function we(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?we(a,!0).forEach((function(t){Object(F.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):we(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ke="ORGANISATIONS_SET",xe="ORGANISATION_SET",De={allOrganisations:[],selectedOrganisation:{id:-1,name:"",organisationUnits:[]}};function Se(e){return{type:ke,payload:e}}function Pe(e){return{type:xe,payload:e}}var Ce=a(102),Te=a.n(Ce),Ie=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(C.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=e.target.value,n=a.props.organisations.find((function(e){return e.id===t}));a.props.userSetOrganisation(n.id,n.name)},a}return Object(I.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.organisationsGet()}},{key:"render",value:function(){var e=this.props.classes,t=this.props.selectedOrganisation>0&&this.props.organisations.length?this.props.selectedOrganisation:"";return r.a.createElement("div",{className:Te.a.admin_tool_bar_wrapper},r.a.createElement(Ee.a,{className:e.formControl},r.a.createElement(ye.a,{id:"organisation_select_label"},"Organisation"),r.a.createElement(ge.a,{labelId:"organisation_select_label",id:"demo-simple-select",value:t,onChange:this.handleChange},this.props.organisations.map((function(e,t){return r.a.createElement(Oe.a,{key:t,value:e.id},e.name)})))))}}]),t}(r.a.Component);var Le={organisationsGet:function(){return function(){var e=Object(m.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:a=e.sent,n=a.data,t(Se(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},userSetOrganisation:function(e,t){return{type:V,payload:{id:e,name:t}}}},Be=Object(s.b)((function(e){var t=e.organisations,a=e.user;return{organisations:t.allOrganisations,selectedOrganisation:a.organisation.id}}),Le)(Object(z.a)({formControl:{minWidth:220}})(Ie)),Ge=a(103),Ue=a.n(Ge),ze=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Ue.a.header_wrapper})}}]),t}(r.a.Component);var Ae=Object(s.b)((function(){return{}}),{})(ze),Re=a(104),Fe=a.n(Re),Me=a(105),We=a.n(Me),He=a(106),Je=a.n(He),Ve=a(67),Ye=a.n(Ve);function qe(e){var t=e.mainTitle,a=e.subTitle;return r.a.createElement("div",{className:Ye.a.site_header},r.a.createElement("div",{className:Ye.a.site_header__sub},a,"\xa0"),r.a.createElement("div",{className:Ye.a.site_header__main},t))}var Xe=a(59),Ke=a.n(Xe);function Qe(e){var t=e.title,a=e.icon,n=e.targetPath,i=void 0===n?"/":n,c=Object(B.g)();return r.a.createElement("div",{className:Ke.a.dashBoardCardWrapper,onClick:function(){return c.push(i)}},r.a.createElement("div",{className:Ke.a.dashBoardCard},r.a.createElement("div",{className:Ke.a.dashBoardCard__title},t,"\xa0"),r.a.createElement("div",{className:Ke.a.dashBoardCard__image,style:{backgroundImage:"url(".concat(a,")")}})))}a(35);var Ze=a(107),$e=a.n(Ze),et=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(qe,{mainTitle:"Dashboard",subTitle:this.props.userOrganisationName}),r.a.createElement("div",{className:$e.a.dash_board_cards},r.a.createElement(Qe,{title:"Ger\xe4te",icon:Fe.a,targetPath:"/devices"}),r.a.createElement(Qe,{title:"Organisation",icon:Je.a,targetPath:"/organisation"}),r.a.createElement(Qe,{title:"Events",icon:We.a,targetPath:"/events"}))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var tt=Object(s.b)((function(e){return{userOrganisationName:e.user.organisation.name}}),{})(et),at=a(73),nt=a.n(at);function rt(e){var t=e.name,a=e.id,n=Object(B.g)();return r.a.createElement("div",{className:nt.a.deviceListElement,onClick:function(){return n.push("/device/".concat(a))}},r.a.createElement("div",{className:nt.a.deviceListElement__name},t))}function it(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ct(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?it(a,!0).forEach((function(t){Object(F.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):it(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var st="DEVICES_SET",ot="DEVICE_SET",lt={allDevices:[],selectedDevice:{}};function ut(e){return{type:st,payload:e}}function pt(e){return{type:ot,payload:e}}var mt=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.devicesGet()}},{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(qe,{mainTitle:"Ger\xe4te \xdcbersicht",subTitle:this.props.userOrganisationName}),this.props.devices.map((function(e,t){return r.a.createElement(rt,{key:t,name:e.name,id:e.id})}))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var dt={devicesGet:function(){return function(){var e=Object(m.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:a=e.sent,n=Object(je.a)(a.data),t(ut(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}},_t=Object(s.b)((function(e){var t=e.user,a=e.devices;return{userOrganisationId:t.organisation.id,userOrganisationName:t.organisation.name,devices:a.allDevices}}),dt)(mt),ht=a(68),vt=a.n(ht);function ft(e){var t=e.name,a=e.role,n=e.id,i=Object(B.g)();return r.a.createElement("div",{className:vt.a.user_list_element,onClick:function(){return i.push("/user/".concat(n))}},r.a.createElement("div",{className:vt.a.user_list_element__name},t),r.a.createElement("div",{className:vt.a.user_list_element__role},a))}var bt=a(74),gt=a.n(bt),Ot=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.organisationGet(this.props.userOrganisationId)}},{key:"componentDidUpdate",value:function(e){this.props.userOrganisationId!==e.userOrganisationId&&this.props.organisationGet(this.props.userOrganisationId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(qe,{mainTitle:"Organisation",subTitle:this.props.userOrganisationName}),this.props.organisationUnits.map((function(e,t){return r.a.createElement("div",{className:gt.a.organisatioin_unit,key:t},r.a.createElement("div",{className:gt.a.organisatioin_unit_name},e.name),e.users.map((function(e,t){return r.a.createElement(ft,{key:t,name:e.name,role:e.role.name,id:e.id})})))}))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var Et={organisationGet:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(e);case 3:n=t.sent,r=n.data,a(Pe(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},yt=Object(s.b)((function(e){var t=e.user,a=e.organisations;return{userOrganisationId:t.organisation.id,userOrganisationName:a.selectedOrganisation.name,organisationUnits:a.selectedOrganisation.organisationUnits}}),Et)(Ot),jt=a(75),wt=a.n(jt);function Nt(e){var t=e.time,a=e.text,n=e.id,i=Object(B.g)(),c=new Date(t),s=c.getHours(),o=c.getMinutes();return r.a.createElement("div",{className:wt.a.eventListElement,onClick:function(){return i.push("/event/".concat(n))}},r.a.createElement("div",{className:wt.a.eventListElement__text},s,":",o," | ",a))}function kt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function xt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?kt(a,!0).forEach((function(t){Object(F.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):kt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Dt="EVENTS_SET",St="EVENT_SET",Pt={allEvents:[],selectedEvent:{}};function Ct(e){return{type:Dt,payload:e}}var Tt=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.eventsGet()}},{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(qe,{mainTitle:"Events"}),this.props.events.map((function(e,t){return r.a.createElement(Nt,{key:t,text:e.text,time:Date.parse(e.created_at),id:e.id})}))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var It={eventsGet:function(){return function(){var e=Object(m.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:a=e.sent,n=Object(je.a)(a.data),t(Ct(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}},Lt=Object(s.b)((function(e){return e.user,{events:e.events.allEvents}}),It)(Tt),Bt=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(qe,{mainTitle:"Zonen"})),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var Gt=Object(s.b)((function(e){return{}}),{})(Bt),Ut=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(qe,{mainTitle:"Einstellungen",subTitle:"IoT-Rex"})),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var zt=Object(s.b)((function(e){return{}}),{})(Ut);function At(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Rt="USER_INFO_SET",Ft={id:-1,email:"",name:"",role:{id:-1,name:"",rights:0}};function Mt(e){return{type:Rt,payload:e}}var Wt=a(76),Ht=a.n(Wt),Jt=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.userInfoGet(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.props.userInfoGet(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(qe,{mainTitle:e.name,subTitle:this.props.userOrganisationName}),r.a.createElement("p",{className:Ht.a.email},"Email: ".concat(e.email)),r.a.createElement("p",{className:Ht.a.role},"Role: ".concat(e.role.name))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var Vt={userInfoGet:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e);case 3:n=t.sent,r=n.data,a(Mt(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},Yt=Object(s.b)((function(e){var t=e.user,a=e.userInfo;return{userOrganisationName:t.organisation.name,user:a}}),Vt)(Object(B.h)(Jt)),qt=(a(158),function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.deviceGet(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.props.deviceGet(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props.device;return console.log(e),r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(qe,{mainTitle:e.name,subTitle:this.props.userOrganisationName}),r.a.createElement("p",{className:"dev_eui"},"Device EUI: ".concat(e.dev_eui)),r.a.createElement("p",{className:"app_eui"},"APP EUI: ".concat(e.app_eui)),r.a.createElement("p",{className:"app_key"},"APP KEY: ".concat(e.app_key)),r.a.createElement("p",{className:"fw_version"},"FW Version: ".concat(e.fw_version)),r.a.createElement("p",{className:"hw_version"},"HW Version: ".concat(e.hw_version)),r.a.createElement("p",{className:"battery"},"Battery: ".concat(e.battery))),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component));var Xt={deviceGet:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(e);case 3:n=t.sent,r=n.data,a(pt(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},Kt=Object(s.b)((function(e){var t=e.user,a=e.devices;return{userOrganisationName:t.organisation.name,device:a.selectedDevice}}),Xt)(Object(B.h)(qt)),Qt=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"screen_wrapper"},r.a.createElement("div",{className:"screen_wrapper__left"}),r.a.createElement("div",{className:"screen_wrapper__center"},r.a.createElement(qe,{mainTitle:"Seite nicht gefunden",subTitle:"Error 404"})),r.a.createElement("div",{className:"screen_wrapper__right"}))}}]),t}(r.a.Component);var Zt=Object(s.b)((function(e){return{}}),{})(Qt),$t=a(108),ea=a.n($t);function ta(){return r.a.createElement("div",{className:ea.a.top_bar})}a(159);var aa=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement(L.a,null,r.a.createElement("div",{className:"app_root"},r.a.createElement(be,null),r.a.createElement("div",{className:"app_main"},this.props.userRights>9e3&&r.a.createElement(Be,null),r.a.createElement(Ae,null),r.a.createElement(B.d,null,r.a.createElement(B.b,{exact:!0,path:"/login",component:$}),r.a.createElement(U,{exact:!0,path:"/"},r.a.createElement(tt,null)),r.a.createElement(U,{path:"/devices"},r.a.createElement(_t,null)),r.a.createElement(U,{path:"/organisation"},r.a.createElement(yt,null)),r.a.createElement(U,{path:"/events"},r.a.createElement(Lt,null)),r.a.createElement(U,{path:"/zones"},r.a.createElement(Gt,null)),r.a.createElement(U,{path:"/settings"},r.a.createElement(zt,null)),r.a.createElement(U,{path:"/user/:id"},r.a.createElement(Yt,null)),r.a.createElement(U,{path:"/device/:id"},r.a.createElement(Kt,null)),r.a.createElement(U,{path:"*"},r.a.createElement(Zt,null))),r.a.createElement(ta,null))))}}]),t}(r.a.Component);var na,ra=Object(s.b)((function(e){var t=e.user;return{loggedIn:t.loggedIn,userRights:t.role.rights}}),{})(aa),ia=a(50),ca=a(109),sa=a(110),oa=a.n(sa),la=Object(ia.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case H:return W({},e,{},t.payload,{loggedIn:!0});case J:return W({},Y);case V:return W({},e,{organisation:t.payload});default:return e}},devices:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case st:return ct({},e,{allDevices:t.payload});case ot:return ct({},e,{selectedDevice:t.payload});default:return e}},organisations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case ke:return Ne({},e,{allOrganisations:Object(je.a)(t.payload)});case xe:var a=t.payload;return Ne({},e,{selectedOrganisation:{id:a.id,name:a.name,organisationUnits:a.organisation_units}});default:return e}},userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case Rt:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?At(a,!0).forEach((function(t){Object(F.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):At(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{},t.payload);default:return e}},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case Dt:return xt({},e,{allEvents:t.payload});case St:return xt({},e,{selectedEvent:t.payload});default:return e}}}),ua=function(e){var t=[ca.a,oa.a];return Object(ia.d)(la,e,ia.a.apply(void 0,t))},pa=(a(160),Object(o.a)({typography:{htmlFontSize:10,fontSize:18},palette:{primary:{main:"#1f262b"},secondary:{main:"#417cce",contrastText:"#e1e1e1"}}})),ma=ua();(na=ma).subscribe((function(){var e=na.getState().user.authToken;h.authToken=e||""})),ma.dispatch((function(e){var t=JSON.parse(localStorage.getItem("user"));t&&e(q(t))})),c.a.render(r.a.createElement(s.a,{store:ma},r.a.createElement(l.a,{theme:pa},r.a.createElement(ra,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e,t,a){},59:function(e,t,a){e.exports={header_big:"DashBoardCard_header_big__3JM0h",dashBoardCardWrapper:"DashBoardCard_dashBoardCardWrapper__NXbaI",dashBoardCard:"DashBoardCard_dashBoardCard__2EE5_",dashBoardCard__title:"DashBoardCard_dashBoardCard__title__1NTOq",dashBoardCard__image:"DashBoardCard_dashBoardCard__image__5pI2o"}},67:function(e,t,a){e.exports={header_big:"SiteHeader_header_big__1pk4x",site_header:"SiteHeader_site_header__kDwIb",site_header__main:"SiteHeader_site_header__main__5UDnc",site_header__sub:"SiteHeader_site_header__sub__30e5S"}},68:function(e,t,a){e.exports={header_big:"UserListElement_header_big__3w1vL",user_list_element:"UserListElement_user_list_element__1IV2B",user_list_element__name:"UserListElement_user_list_element__name__3g5gb",user_list_element__role:"UserListElement_user_list_element__role__1AxNX"}},73:function(e,t,a){e.exports={header_big:"DeviceListElement_header_big__9e5TJ",deviceListElement:"DeviceListElement_deviceListElement__1wh8E",deviceListElement__name:"DeviceListElement_deviceListElement__name__MlNvX",deviceListElement__type:"DeviceListElement_deviceListElement__type__Fb3qA"}},74:function(e,t,a){e.exports={organisatioin_unit:"OrganisationScreen_organisatioin_unit__1OU3_",organisatioin_unit_name:"OrganisationScreen_organisatioin_unit_name__14TGY"}},75:function(e,t,a){e.exports={header_big:"EventListElement_header_big__qNoQi",eventListElement:"EventListElement_eventListElement__1DjYZ",eventListElement__text:"EventListElement_eventListElement__text__2L9lM"}},76:function(e,t,a){e.exports={email:"UserScreen_email__w516K",role:"UserScreen_role__3YsRe"}},94:function(e,t,a){e.exports={login:"LoginScreen_login__1kYxy"}},95:function(e,t,a){e.exports={header_big:"Navigation_header_big__2mPtA",navigation_wrapper:"Navigation_navigation_wrapper__12z7l"}}},[[126,1,2]]]);
//# sourceMappingURL=main.f58c7a6c.chunk.js.map