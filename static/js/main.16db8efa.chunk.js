(this.webpackJsonppostboard=this.webpackJsonppostboard||[]).push([[0],{100:function(e,a,t){},101:function(e,a){},102:function(e,a,t){},140:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),o=(t(100),t(75)),i=t(32),m=t(10),u=(t(101),t(102),t(173)),s=t(175),d=t(70),p=t.n(d),E=Object(u.a)((function(e){return{root:{flexGrow:1},backGround:{flexGrow:1,backgroundImage:"url(".concat(p.a,")"),height:"100vh",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",backgroundAttachment:"fixed"}}}));function f(){var e=E(),a=Object(m.f)();return r.a.createElement("div",{className:e.backGround},r.a.createElement("div",{className:"mainCoverGrid"},r.a.createElement("div",{className:"mainCover"},r.a.createElement("h1",{className:"mainHeader"},"Post-Board"),r.a.createElement("h3",{className:"mainSubHeader"},"Share your thoughts pictures and work or what ever is on your to mind"),r.a.createElement(s.a,{variant:"contained",color:"primary",className:"mainJoinButton",onClick:function(){a.push("/sign-up")}},"Join"))))}var g=t(185),b=t(178),v=t(182),h=t(180),N=t(179),w=t(183),x=t(44),y=t.n(x),A=t(77),j=t(177),D=t(26),O=t(73),S=t.n(O),k=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function C(){var e=k(),a=Object(D.b)(),t=(Object(D.c)((function(e){return e})),function(e){a({type:e.target.name,value:e.target.value})});return r.a.createElement(j.a,{component:"main",maxWidth:"xs"},r.a.createElement(b.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(g.a,{className:e.avatar},r.a.createElement(y.a,null)),r.a.createElement(A.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){S.a.post()}},r.a.createElement(N.a,{container:!0,spacing:2},r.a.createElement(N.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{autoComplete:"fname",name:"ADD_FIRST_NAME",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:t})),r.a.createElement(N.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"ADD_LAST_NAME",autoComplete:"lname",onChange:t})),r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"ADD_EMAIL",autoComplete:"email",onChange:t})),r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,name:"ADD_PASSWORD",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:t}))),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(N.a,{container:!0,justify:"flex-end"},r.a.createElement(N.a,{item:!0},r.a.createElement(h.a,{href:"#/sign-in",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(w.a,{mt:5}))}var W=t(181),_=t(184),I=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function M(){var e=I();Object(D.c)((function(e){return e.name})),Object(D.b)();return r.a.createElement(j.a,{component:"main",maxWidth:"xs"},r.a.createElement(b.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(g.a,{className:e.avatar},r.a.createElement(y.a,null)),r.a.createElement(A.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email Address",name:"email",autoComplete:"off",autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",autoComplete:"current-password"}),r.a.createElement(W.a,{control:r.a.createElement(_.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),r.a.createElement(N.a,{container:!0},r.a.createElement(N.a,{item:!0},r.a.createElement(h.a,{href:"#/sign-up",variant:"body2"},"Don't have an account? Sign Up"))))))}function T(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0];a[1];return t?r.a.createElement(i.a,null,r.a.createElement(i.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:function(){return r.a.createElement(M,null)}})))):r.a.createElement(i.a,null,r.a.createElement(i.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:function(){return r.a.createElement(f,null)}}),r.a.createElement(m.a,{exact:!0,path:"/sign-in",component:function(){return r.a.createElement(M,null)}}),r.a.createElement(m.a,{exact:!0,path:"/sign-up",component:function(){return r.a.createElement(C,null)}}))))}var q=function(){return r.a.createElement(T,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=t(42),P=t(20),R=t(74),F={firstName:"",lastName:"",email:"",password:"",id:t.n(R)()()};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_FIRST_NAME":return Object(P.a)(Object(P.a)({},e),{},{firstName:a.value});case"ADD_LAST_NAME":return Object(P.a)(Object(P.a)({},e),{},{lastName:a.value});case"ADD_EMAIL":return Object(P.a)(Object(P.a)({},e),{},{email:a.value});case"ADD_PASSWORD":return Object(P.a)(Object(P.a)({},e),{},{password:a.value});default:return e}},B=Object(G.b)(L);l.a.render(r.a.createElement(D.a,{store:B},r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,a,t){e.exports=t.p+"static/media/backGroundMain.3214051d.jpg"},93:function(e,a,t){e.exports=t(140)}},[[93,1,2]]]);
//# sourceMappingURL=main.16db8efa.chunk.js.map