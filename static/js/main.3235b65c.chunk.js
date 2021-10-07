(this["webpackJsonplist-of-notes"]=this["webpackJsonplist-of-notes"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(11),c=n.n(a),r=(n(96),n(37)),d=n(12),l=n(142),s=n(50),j=n(62),b=n(39),p=[{title:"Greetings",description:"Hello! My name is Nikita and i'm study React",date:"Monday 6 September",id:1},{title:"What i can do today",description:"Clear house , study all day , sleep 3 hours",date:"Tuesday 7 September",id:2},{title:"Learn material-ui",description:"Try to deal with the library material-ui",date:"Wednesday 8 September",id:3}],x=n(8),u=n(145),h=Object(x.a)(u.a)({display:"flex",justifyContent:"flex-start",paddingTop:"20px"}),O=Object(x.a)("div")({backgroundColor:"#3AAFA9",minHeight:"100vh"}),f=n(136),g=n(137),m=n(138),v=n(79),y=n.n(v),C="/notes",k="/shared-notes",w="/about",N="/not-found",S=Object(x.a)("div")({display:"flex",justifyContent:"center",alignItems:"center","@media (max-width: 780px)":{display:"none"}}),A=Object(x.a)(r.b)({marginLeft:"10px",textDecoration:"none",color:"#b4fdff",border:"1px solid",padding:"5px",borderRadius:"15px",boxShadow:"0px 0px 25px #b4fdff","&:hover":{color:"#3AAFA9"}}),F=n(2),P=function(){return Object(F.jsxs)(S,{children:[Object(F.jsx)(A,{to:C,children:"My Notes"}),Object(F.jsx)(A,{to:k,children:"Shared Notes"}),Object(F.jsx)(A,{to:w,children:"About"})]})},M=n(134),B=Object(x.a)(M.a)({display:"none !important","@media (max-width: 780px)":{display:"block !important"}}),L=function(e){var t=e.openNavBar;return Object(F.jsx)(f.a,{children:Object(F.jsxs)(g.a,{fixed:!0,children:[Object(F.jsx)(m.a,{children:Object(F.jsx)(B,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return t(!0)},children:Object(F.jsx)(y.a,{})})}),Object(F.jsx)(P,{})]})})},R=n(147),H=n(139),E=n(140),T=n(149),U=Object(x.a)(r.b)({textDecoration:"none",color:"#000","&:hover":{color:"#fff"}}),I=function(e){var t=e.isNavBarOpen,n=e.openNavBar;return Object(F.jsx)(R.a,{anchor:"left",open:t,onClose:function(){return n(!1)},children:Object(F.jsxs)(H.a,{children:[Object(F.jsx)(E.a,{onClick:function(){return n(!1)},children:Object(F.jsx)(U,{to:C,children:Object(F.jsx)(T.a,{primary:"My Notes"})})}),Object(F.jsx)(E.a,{onClick:function(){return n(!1)},children:Object(F.jsx)(U,{to:k,children:Object(F.jsx)(T.a,{primary:"Shared Notes"})})}),Object(F.jsx)(E.a,{onClick:function(){return n(!1)},children:Object(F.jsx)(U,{to:w,children:Object(F.jsx)(T.a,{primary:"About"})})})]})})},W=function(e){var t=e.children,n=Object(i.useState)(!1),o=Object(b.a)(n,2),a=o[0],c=o[1],r=function(e){c(e)};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(L,{openNavBar:r}),t,Object(F.jsx)(I,{isNavBarOpen:a,openNavBar:r})]})},D=n(143),Y=n(141),J=Object(x.a)("div")({display:"flex",flexDirection:"column",border:"1px solid black",marginTop:"20px",padding:"20px",borderRadius:"20px"}),z=Object(x.a)("div")({display:"flex",justifyContent:"space-between"}),G=function(e){var t=e.title,n=e.onChange,i=e.description,o=e.onUpdate,a=e.onCancel;return Object(F.jsxs)(J,{children:[Object(F.jsx)(D.a,{id:"filled-basic",label:"Filled",variant:"filled",value:t,name:"title",onChange:function(e){return n(e)}}),Object(F.jsx)(D.a,{id:"filled-basic",label:"Filled",variant:"filled",value:i,name:"description",onChange:function(e){return n(e)}}),Object(F.jsxs)(z,{children:[Object(F.jsx)(Y.a,{variant:"contained",color:"secondary",onClick:function(){return o()},children:"Update"}),Object(F.jsx)(Y.a,{variant:"contained",color:"secondary",onClick:a,children:"Exit"})]})]})},q=function(e){return e.length>20?"".concat(e.substring(0,20),"..."):e},K=Object(x.a)("p")({fontWeight:"bold",wordWrap:"break-word",width:"300px",margin:"0"}),Q=Object(x.a)("div")({fontSize:"10px"}),V=Object(x.a)(u.a)({border:"1px solid black",margin:"0 20px 20px 10px",display:"flex",flexDirection:"column",cursor:"pointer",padding:"20px",transition:"1s",color:"#000",borderRadius:"20px",backgroundColor:"#b3ece9"}),X=Object(x.a)(u.a)({border:"1px solid #00258a",margin:"0 20px 20px 10px",display:"flex",flexDirection:"column",cursor:"pointer",color:"#fff",padding:"20px",transition:"1s",boxShadow:"0px 4px 6px rgb(26 46 53 / 40%)",borderRadius:"20px",backgroundColor:"#000"}),Z=function(e){var t=e.activeNote,n=t.title,i=t.description,o=t.date,a=t.id,c=e.notActive,r=e.changeNoteContent;return Object(F.jsx)(F.Fragment,{children:c===a?Object(F.jsxs)(X,{onClick:function(){r(n,i,o,a)},children:[Object(F.jsx)(K,{children:n}),i&&Object(F.jsx)("p",{children:q(i)}),Object(F.jsx)(Q,{children:o})]}):Object(F.jsxs)(V,{onClick:function(){r(n,i,o,a)},children:[Object(F.jsx)(K,{children:n}),i&&Object(F.jsx)("p",{children:q(i)}),Object(F.jsx)(Q,{children:o})]})})};Z.defaultProps={activeNote:"Hello"};var $=Z,_=n(80),ee=n.n(_),te=n(81),ne=n.n(te),ie=Object(x.a)("div")({display:"flex"}),oe=Object(x.a)(Y.a)({height:"30px"}),ae=function(e){var t=e.openEditPannel;return Object(F.jsxs)(ie,{children:[Object(F.jsx)(oe,{variant:"contained",color:"primary",onClick:function(){return t(!0)},children:Object(F.jsx)(ee.a,{})}),Object(F.jsx)(oe,{variant:"contained",color:"primary",children:Object(F.jsx)(ne.a,{})})]})},ce=Object(x.a)("p")({fontWeight:"bold",wordWrap:"break-word",width:"300px",margin:"0"}),re=Object(x.a)("p")({wordWrap:"break-word",width:"300px"}),de=Object(x.a)("p")({fontSize:"10px"}),le=Object(x.a)("div")({marginRight:"30px"}),se=Object(x.a)("div")({border:"1px solid black",padding:"25px",borderRadius:"20px",display:"flex"}),je=function(e){var t=e.initialNote,n=t.title,i=t.description,o=t.date,a=e.editPanel,c=e.openEditPannel,r=e.onChange,d=e.onUpdate,l=e.onCancel;return Object(F.jsxs)(se,{children:[Object(F.jsxs)(le,{children:[Object(F.jsx)(ce,{children:n}),Object(F.jsx)(re,{children:i}),Object(F.jsx)(de,{children:o})]}),"Select note to display"===n?null:Object(F.jsx)(ae,{editPanel:a,openEditPannel:c,title:n,description:i,onChange:r,onUpdate:d,onCancel:l})]})};je.defaultProps={initialNote:"Hello"};var be=je,pe=function(e){var t=e.notActiveNote,n=e.changeNoteContent,i=e.initialNote,o=e.editPanel,a=e.openEditPannel,c=e.notesList,r=e.onChange,d=e.onUpdate,l=e.onCancel;return Object(F.jsx)(W,{children:Object(F.jsxs)(h,{children:[Object(F.jsx)(u.a,{children:c.map((function(e){return Object(F.jsx)($,{notActive:t,changeNoteContent:n,activeNote:e},e.id)}))}),Object(F.jsxs)(u.a,{children:[Object(F.jsx)(be,{initialNote:i,editPanel:o,openEditPannel:a,onChange:r,onUpdate:d,onCancel:l}),o&&Object(F.jsx)(G,{editPanel:o,onChange:r,title:i.title,description:i.description,onUpdate:d,onCancel:l})]})]})})};pe.defaultProps={initialNote:"Hello",notesList:"Hi"};var xe=pe,ue=function(){var e=Object(i.useState)(0),t=Object(b.a)(e,2),n=t[0],o=t[1],a=Object(i.useState)({title:"Select note to display",description:"",date:"",id:null}),c=Object(b.a)(a,2),r=c[0],d=c[1],l=Object(i.useState)(!1),x=Object(b.a)(l,2),u=x[0],h=x[1],f=function(e){h(e)},g=JSON.parse(localStorage.getItem("notes")),m=Object(i.useState)(g||p),v=Object(b.a)(m,2),y=v[0],C=v[1];return Object(F.jsx)(O,{children:Object(F.jsx)(xe,{initialNote:r,notActiveNote:n,changeNoteContent:function(e,t,n,i){d({title:e,description:t,date:n,id:i}),o(i)},openEditPannel:f,editPanel:u,notesList:y,onChange:function(e){var t=e.target,n=t.name,i=t.value;d((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},n,i))}))},onUpdate:function(){var e=y.filter((function(e){return e.id===r.id}))[0];e.title=r.title,e.description=r.description,C(y),f(!1),localStorage.setItem("notes",JSON.stringify(y))},onCancel:function(){var e=y.filter((function(e){return e.id===r.id}))[0],t=e.title,n=e.description,i=e.date,o=e.id;d({title:t,description:n,date:i,id:o}),f(!1)}})})},he=n.p+"static/media/aboutBackGround.6218fa7a.jpg",Oe=Object(x.a)(u.a)({paddingTop:"20px",display:"flex",flexDirection:"column",textAlign:"center",minHeight:"100vh",backgroundImage:"url(".concat(he,")"),backgroundSize:"cover"}),fe=Object(x.a)("p")({color:"#fff"}),ge=Object(x.a)("h2")({margin:0,paddingTop:"20px",color:"#FFFF00"}),me=function(){return Object(F.jsx)(W,{children:Object(F.jsxs)(Oe,{children:[Object(F.jsxs)(u.a,{children:[Object(F.jsx)(ge,{children:"Possibilities"}),Object(F.jsx)(fe,{children:"You will never forget about your business because you can use this site with the ability to save, create and delete notes."})]}),Object(F.jsxs)(u.a,{children:[Object(F.jsx)(ge,{children:"Functionality"}),Object(F.jsx)(fe,{children:"You can easily create your own note with title and description"}),Object(F.jsx)(fe,{children:"You can edit your already created note"}),Object(F.jsx)(fe,{children:"You can add a new note"}),Object(F.jsx)(fe,{children:"You can delete an existing one"}),Object(F.jsx)(fe,{children:"You can also go through a simple registration and watch the notes of other people"})]}),Object(F.jsxs)(u.a,{children:[Object(F.jsx)(ge,{children:"How the project can be developed:"}),Object(F.jsx)(fe,{children:"Add functionality to share your notes on social networks."}),Object(F.jsx)(fe,{children:"Add the ability to select a frame for a note"}),Object(F.jsx)(fe,{children:"Add the ability to create your own,with unique frame design"})]})]})})},ve=Object(x.a)("div")({backgroundColor:"#3AAFA9",minHeight:"100vh"}),ye=function(){return Object(F.jsx)(ve,{children:Object(F.jsx)(W,{})})},Ce=n.p+"static/media/errorImage404.849f8a7d.jpg",ke=Object(x.a)("div")({display:"flex",justifyContent:"center"}),we=function(){var e=Object(d.g)();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ke,{children:Object(F.jsx)("img",{src:Ce,alt:"errorImage404"})}),Object(F.jsx)(ke,{children:Object(F.jsx)(Y.a,{variant:"outlined",color:"secondary",onClick:function(){e.goBack()},children:"\u0421lick here to return to the previous page"})})]})},Ne=n(82),Se=Object(Ne.a)({overrides:{MuiButton:{root:{margin:"0 20px 0 0"},containedPrimary:{backgroundColor:"#000","&:hover":{backgroundColor:"#fff",color:"#000"}},containedSecondary:{backgroundColor:"#000","&:hover":{backgroundColor:"#fff",color:"#000"}},outlinedSecondary:{backgroundColor:"#FFFF00"}},MuiFormControl:{root:{margin:"20px 0"}},MuiAppBar:{colorPrimary:{backgroundColor:"#000"},positionFixed:{position:"relative"}},MuiContainer:{root:{marginLeft:"0",marginRight:"0",display:"flex","@media (min-width: 600px)":{paddingLeft:"16px",paddingRight:0}}},MuiPaper:{root:{backgroundColor:"#3AAFA9"}},MuiList:{padding:{paddingTop:"55px"}},MuiToolbar:{gutters:{paddingLeft:0,paddingRight:0,"@media (min-width: 600px)":{paddingLeft:0,paddingRight:0}}}}}),Ae=function(){return Object(F.jsx)(l.a,{theme:Se,children:Object(F.jsx)(r.a,{basename:"/Notes-List",children:Object(F.jsxs)(d.d,{children:[Object(F.jsx)(d.b,{exact:!0,path:"/",children:Object(F.jsx)(d.a,{to:C})}),Object(F.jsx)(d.b,{path:C,exact:!0,component:ue}),Object(F.jsx)(d.b,{path:w,component:me}),Object(F.jsx)(d.b,{path:k,component:ye}),Object(F.jsx)(d.b,{path:N,component:we}),Object(F.jsx)(d.a,{to:N})]})})})};c.a.render(Object(F.jsx)(o.a.StrictMode,{children:Object(F.jsx)(Ae,{})}),document.getElementById("root"))},96:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.3235b65c.chunk.js.map