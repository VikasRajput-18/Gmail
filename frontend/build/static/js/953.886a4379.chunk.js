"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[953],{6148:function(e,n,t){t.d(n,{Fr:function(){return s},Pv:function(){return i},RJ:function(){return a}});var i="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",a="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",s={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},4373:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(4165),a=t(5861),s=t(9439),r=t(2791),o=t(1243),c=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n,t,a){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({method:n.method,url:"".concat("","/").concat(n.endPoint,"/").concat(a),data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,i){return e.apply(this,arguments)}}(),l=function(e){var n=(0,r.useState)(null),t=(0,s.Z)(n,2),o=t[0],l=t[1],d=(0,r.useState)(""),u=(0,s.Z)(d,2),p=u[0],f=u[1],m=(0,r.useState)(!1),x=(0,s.Z)(m,2),h=x[0],g=x[1],Z=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(t){var a,s,r=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:"",l(null),f(""),n.prev=3,g(!0),n.next=7,c(e,t,a);case 7:s=n.sent,l(s.data.result),g(!1),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(3),g(!1),console.log(p),f(p);case 17:return n.prev=17,g(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[3,12,17,20]])})));return function(e){return n.apply(this,arguments)}}();return{call:Z,response:o,error:p,isLoading:h}}},3953:function(e,n,t){t.r(n),t.d(n,{default:function(){return re}});var i=t(2791),a=t(7630),s=t(4395),r=t(4554),o=t(4663),c=t(6098),l=t(7607),d=t(2167),u=t(4035),p=t(4371),f=t(2155),m=t(3512),x=t(5652),h=t(6148),g=t(4483),Z=t(184),j=(0,a.ZP)(s.Z)({background:"#f5f5f5",boxShadow:"none"}),v=(0,a.ZP)(r.Z)({background:"#eaf1f8",marginLeft:80,borderRadius:8,minWidth:690,maxWidth:720,height:48,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0px 20px","& > div":{width:"100%",padding:"0 10px"}}),b=(0,a.ZP)(r.Z)({display:"flex",width:"100%",justifyContent:"flex-end",alignItems:"center",gap:15,"& > svg":{cursor:"pointer"}}),k=function(){var e=(0,i.useContext)(g.R).setSidebarisOpen;return(0,Z.jsx)(j,{position:"static",children:(0,Z.jsxs)(o.Z,{children:[(0,Z.jsx)(l.Z,{sx:{cursor:"pointer"},color:"action",onClick:function(){e((function(e){return!e}))}}),(0,Z.jsx)("img",{src:h.Pv,alt:"logo",style:{width:110,marginLeft:15}}),(0,Z.jsxs)(v,{children:[(0,Z.jsx)(d.Z,{color:"action"}),(0,Z.jsx)(c.ZP,{placeholder:"Search Mail",id:"outlined-basic",label:"Outlined",variant:"outlined"}),(0,Z.jsx)(u.Z,{color:"action"})]}),(0,Z.jsxs)(b,{children:[(0,Z.jsx)(p.Z,{color:"action"}),(0,Z.jsx)(f.Z,{color:"action"}),(0,Z.jsx)(m.Z,{color:"action"}),(0,Z.jsx)(x.Z,{color:"action"})]})]})})},y=t(9953),w=t(9439),S=t(6151),P=t(493),C=t(4852),T=t(5905),D=t(4287),E=t(3026),O=t(2192),R=t(3513),B=t(4220),I=t(662),F=[{name:"inbox",title:"Inbox",icon:D.Z},{name:"starred",title:"Starred",icon:E.Z},{name:"sent",title:"Sent",icon:O.Z},{name:"drafts",title:"Draft",icon:R.Z},{name:"bin",title:"Bin",icon:B.Z},{name:"allmail",title:"All Mails",icon:I.Z}],M=t(4942),H=t(1413),L=t(9818),W=t(890),_=t(8666),z=t(6739),Y=t(9825),N=t(225),A=t(5372),U=t(4373),V={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0px 0px"},G=(0,N.Z)(r.Z)({background:"#f2f6fc",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px","& > p":{fontSize:14,fontWeight:500}}),J=(0,N.Z)(r.Z)({display:"flex",flexDirection:"column",paddingLeft:16,"& > div":{fontSize:14,borderBottom:"1px solid #f5f5f5",marginTop:10}}),q=(0,N.Z)(r.Z)({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px"}),K=(0,N.Z)(S.Z)({background:"#0b57d0",color:"#fff",borderRadius:30,width:100,fontWeight:500,textTransform:"none"}),Q=function(e){var n=e.handleClose,t=e.isOpen,a=(0,U.Z)(A.Y.saveSentEmail),s=(0,U.Z)(A.Y.saveDraftEmails),o=(0,i.useState)({recipients:"",subject:"",message:""}),l=(0,w.Z)(o,2),d=l[0],u=l[1],p={Host:"smtp.elasticemail.com",Username:"vikasrajput@yopmail.com",Password:"990DFBABB75563F3364674BDCC10A8212DFB",Port:2525},f=function(e){var n=e.target,t=n.value,i=n.name;u((function(e){return(0,H.Z)((0,H.Z)({},e),{},(0,M.Z)({},i,t))}))};return(0,Z.jsxs)(L.Z,{onClose:n,open:t,PaperProps:{sx:V},children:[(0,Z.jsxs)(G,{children:[(0,Z.jsx)(W.Z,{children:"New Message"}),(0,Z.jsx)(z.Z,{onClick:function(e){e.preventDefault();var t={to:d.recipients,from:"vikasvikas988099@gmail.com",subject:d.subject,body:d.message,date:new Date,image:"",name:"Vikas Rajput",starred:!1,type:"drafts"};s.call(t),s.error||(n(),u({recipients:"",subject:"",message:""})),n()},sx:{cursor:"pointer"},fontSize:"small",color:"action"})]}),(0,Z.jsxs)(J,{children:[(0,Z.jsx)(c.ZP,{name:"recipients",value:d.recipients,onChange:f,placeholder:"Recipients"}),(0,Z.jsx)(c.ZP,{name:"subject",value:d.subject,onChange:f,placeholder:"Subject"})]}),(0,Z.jsx)(r.Z,{sx:{flex:1},children:(0,Z.jsx)(_.Z,{multiline:!0,name:"message",value:d.message,onChange:f,style:{width:"100%",height:"100%"},rows:20,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}}})}),(0,Z.jsxs)(q,{children:[(0,Z.jsx)(K,{variant:"contained",onClick:function(){window.Email&&window.Email.send((0,H.Z)((0,H.Z)({},p),{},{To:d.recipients,From:"vikasvikas988099@gmail.com",Subject:d.subject,Body:d.message})).then((function(e){return alert(e)}));var e={to:d.recipients,from:"vikasvikas988099@gmail.com",subject:d.subject,body:d.message,date:new Date,image:"",name:"Vikas Rajput",starred:!1,type:"sent"};a.call(e),a.error||(n(),u({recipients:"",subject:"",message:""})),n()},children:"Send"}),(0,Z.jsx)(Y.Z,{onClick:function(e){e.preventDefault(),n()},style:{cursor:"pointer"},color:"action"})]})]})},X=t(7689),$=t(1087),ee=t(5806),ne=(0,a.ZP)(S.Z)({background:"#c2e7ff",color:"#001d35",padding:15,borderRadius:16,minWidth:140,textTransform:"none",display:"flex",alignItems:"center",gap:12}),te=(0,a.ZP)(r.Z)({padding:8,"& > ul":{padding:"10px 0px 0px 5px",fontSize:14,fontWeight:500,cursor:"pointer","& > a":{textDecoration:"none",color:"inherit"}},"& > ul > li":{display:"flex",alignItems:"center",gap:8,marginTop:8}}),ie=function(){var e=(0,i.useState)(!1),n=(0,w.Z)(e,2),t=n[0],a=n[1],s=(0,X.UO)().type;console.log(s);return(0,Z.jsxs)(te,{children:[(0,Z.jsxs)(ne,{onClick:function(){return a(!0)},children:[(0,Z.jsx)(T.Z,{}),"Compose"]}),(0,Z.jsx)(P.Z,{children:null===F||void 0===F?void 0:F.map((function(e,n){return(0,Z.jsx)($.OL,{to:"".concat(ee._.emails.path,"/").concat(e.name),children:(0,Z.jsxs)(C.ZP,{style:s===e.name.toLowerCase()?{background:"#d3e3fd",borderRadius:"8px"}:{},children:[(0,Z.jsx)(e.icon,{fontSize:"small",style:{marginRight:10}}),e.title]})},n)}))}),(0,Z.jsx)(Q,{handleClose:function(){a(!1)},isOpen:t})]})},ae=function(){var e=(0,i.useContext)(g.R).sidebarIsOpen;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(y.ZP,{anchor:"left",open:e,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{marginTop:"64px",width:250,background:"#f5f5f5",borderRight:"none",height:"calc(100vh-64px)"}},children:(0,Z.jsx)(ie,{})})})},se=t(2247),re=function(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(k,{}),(0,Z.jsxs)(r.Z,{children:[(0,Z.jsx)(ae,{}),(0,Z.jsx)(i.Suspense,{fallback:(0,Z.jsx)(se.Z,{}),children:(0,Z.jsx)(X.j3,{})})]})]})}},5372:function(e,n,t){t.d(n,{Y:function(){return i}});var i={saveSentEmail:{endPoint:"save",method:"POST"},getEmailFromTypes:{endPoint:"emails",method:"GET"},saveDraftEmails:{endPoint:"save-draft",method:"POST"},moveEmailsToBin:{endPoint:"bin",method:"POST"},toggleStarredEmail:{endPoint:"starred",method:"POST"},deleteEmail:{endPoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=953.886a4379.chunk.js.map