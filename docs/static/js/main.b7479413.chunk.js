(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(e,t,a){e.exports=a(317)},200:function(e,t,a){},201:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),o=a.n(r),l=(a(200),a(27)),c=a(28),s=a(30),m=a(29),u=a(31),d=a(5),g=(a(201),a(54)),h=a.n(g),p=a(10),f=a(55),b=a.n(f),E=a(21),w=a.n(E),y=a(57),v=a.n(y),k=a(56),x=a.n(k),O=a(20),j=a.n(O),N=a(110),H=a.n(N),C=a(37),S=a.n(C),T=a(38),B=a.n(T),L=a(53),R=a.n(L),I=a(39),D=a.n(I),W=a(40),z=a.n(W),G=a(41),A=a.n(G),M=a(102),F=a.n(M),P=a(105),J=a.n(P),U=a(109),X=a.n(U),Z=a(104),Y=a.n(Z),q=a(106),K=a.n(q),V=a(107),$=a.n(V),Q=a(108),_=a.n(Q),ee=[{text:"Home",icon:i.a.createElement(F.a,null)},{text:"Join Now",icon:i.a.createElement(Y.a,null)},{text:"Contact Us",icon:i.a.createElement(J.a,null)},{text:"Outreach",icon:i.a.createElement(K.a,null)},{text:"Alumni",icon:i.a.createElement($.a,null)},{text:"White Rose",icon:i.a.createElement(_.a,null)}],te=[{text:"Members",icon:i.a.createElement(X.a,null)}],ae=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=i.a.createElement("div",{className:e.list},i.a.createElement(B.a,null,ee.map(function(e,t){return i.a.createElement(D.a,{button:!0,key:e.text},i.a.createElement(z.a,null,e.icon),i.a.createElement(A.a,{primary:e.text}))})),i.a.createElement(R.a,null),i.a.createElement(B.a,null,te.map(function(e,t){return i.a.createElement(D.a,{button:!0,key:e.text},i.a.createElement(z.a,null,e.icon),i.a.createElement(A.a,{primary:e.text}))})));return i.a.createElement("div",null,i.a.createElement(S.a,{open:this.props.open,onClose:this.props.onToggleDrawer("left",!1),onOpen:this.props.onToggleDrawer("left",!0)},i.a.createElement("div",{tabIndex:0,role:"button",onClick:this.props.onToggleDrawer("left",!1),onKeyDown:this.props.onToggleDrawer("left",!1)},t)))}}]),t}(i.a.Component),ne=Object(d.withStyles)({list:{width:250},fullList:{width:"auto"}})(ae),ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={left:!1},a.toggleDrawer=function(e,t){return function(){a.setState(Object(p.a)({},e,t))}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.test;return i.a.createElement("div",null,i.a.createElement(ne,{open:this.state.left,onToggleDrawer:this.toggleDrawer}),i.a.createElement(b.a,{position:"fixed"},i.a.createElement(x.a,null,i.a.createElement(v.a,{onClick:this.toggleDrawer("left",!0),className:t.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(H.a,null)),i.a.createElement(j.a,{type:"title",component:"span",width:"full",className:t.grow},a," ",i.a.createElement("img",{className:t.headerImage,src:"/static/img/banner.png",alt:"Sig Tau",width:"150"})),i.a.createElement(w.a,{color:"inherit"},"Members"))))}}]),t}(i.a.Component),re=Object(d.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}}})(ie),oe=a(58),le=a.n(oe);var ce=Object(d.withStyles)(function(e){return{root:{textAlign:"center",borderRadius:4,fontWeight:e.typography.fontWeightMedium,fontFamily:e.typography.fontFamilySecondary,padding:"".concat(2*e.spacing.unit-1,"px ").concat(4*e.spacing.unit,"px"),fontSize:e.typography.pxToRem(18),boxShadow:"none","&:active, &:focus":{boxShadow:"none"}},sizeSmall:{padding:"".concat(e.spacing.unit,"px ").concat(3*e.spacing.unit,"px"),fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"".concat(3*e.spacing.unit-3,"px ").concat(6*e.spacing.unit,"px"),fontSize:e.typography.pxToRem(16)}}})(function(e){return i.a.createElement(w.a,e)}),se=a(59),me=a(17),ue={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};function de(e){var t=e.children,a=e.classes,n=e.marked,r=e.variant,o=Object(se.a)(e,["children","classes","marked","variant"]);return i.a.createElement(j.a,Object.assign({headlineMapping:ue,variant:r},o),t,n?i.a.createElement("span",{className:a["marked".concat(Object(me.capitalize)(r)+Object(me.capitalize)(n))]}):null)}de.defaultProps={marked:!1};var ge=Object(d.withStyles)(function(e){return{markedH2Center:{height:4,width:73,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH3Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH4Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH6Left:{height:2,width:28,display:"block",marginTop:e.spacing.unit/2,background:"currentColor"}}})(de),he=a(6),pe=a.n(he);function fe(e){return Math.round(1e4*e)/1e4}function be(e){var t,a=e.children,n=e.classes,r=e.className,o=e.component,l=e.fullHeight,c=e.fullWidth,s=e.margin,m=e.marginBottom,u=e.style,d=e.width,g=Object(se.a)(e,["children","classes","className","component","fullHeight","fullWidth","margin","marginBottom","style","width"]);return i.a.createElement(o,Object.assign({className:pe()(n.root,(t={},Object(p.a)(t,n["width".concat(Object(me.capitalize)(d))],!c),Object(p.a)(t,n.fullHeight,l),Object(p.a)(t,n.margin,s),Object(p.a)(t,n.marginBottom,m),t),r),style:u},g),a)}be.defaultProps={component:"div",fullHeight:!1,fullWidth:!1,margin:!1,marginBottom:!1,width:"medium"};var Ee=Object(d.withStyles)(function(e){var t,a;return{margin:{margin:7*e.spacing.unit},marginBottom:{marginBottom:12*e.spacing.unit},widthSmall:Object(p.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(660+6*e.spacing.unit),{width:660,marginLeft:"auto",marginRight:"auto"}),widthMedium:Object(p.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(850+6*e.spacing.unit),{width:850,marginLeft:"auto",marginRight:"auto"}),widthLarge:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(p.a)(t,e.breakpoints.up("md"),{width:880,marginLeft:"auto",marginRight:"auto"}),Object(p.a)(t,e.breakpoints.up(fe(880/.7777)),{width:"77.7777%"}),Object(p.a)(t,e.breakpoints.up(fe(1400/.7777)),{width:1400}),t),widthXlarge:(a={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(p.a)(a,e.breakpoints.up("md"),{width:900,marginLeft:"auto",marginRight:"auto"}),Object(p.a)(a,e.breakpoints.up(fe(1e3)),{width:"90%"}),Object(p.a)(a,e.breakpoints.up(fe(2e3)),{width:1800}),a),widthFull:{width:"100%"},fullHeight:{height:"100%"}}})(be);var we=Object(d.withStyles)(function(e){return{root:Object(p.a)({color:e.palette.common.white,position:"relative",display:"flex",alignItems:"center"},e.breakpoints.up("sm"),{height:"80vh",minHeight:500,maxHeight:1300}),layoutBody:{marginTop:3*e.spacing.unit,marginBottom:14*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center"},backdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.5,zIndex:-1},background:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundRepeat:"no-repeat",zIndex:-2},arrowDown:{position:"absolute",bottom:4*e.spacing.unit}}})(function(e){var t=e.backgroundClassName,a=e.children,n=e.classes;return i.a.createElement("section",{className:n.root},i.a.createElement(Ee,{className:n.layoutBody,width:"full"},i.a.createElement("div",{class:"colostate"},i.a.createElement("img",{src:"/static/img/colostatex3.png",alt:"wonder",width:"60%em"})),a,i.a.createElement("div",{className:n.backdrop}),i.a.createElement("div",{className:pe()(n.background,t)}),i.a.createElement("img",{className:n.arrowDown,src:"/static/img/arrow-down-secondary.png",height:"32",width:"32",alt:"arrow down",color:"white"})))}),ye="https://images.unsplash.com/photo-1486210284477-e900ad8a6820?ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80";var ve=Object(d.withStyles)(function(e){return{background:{backgroundImage:"url(".concat(ye,")"),backgroundColor:"0f07af",backgroundPosition:"center"},button:{minWidth:200},h5:Object(p.a)({marginBottom:4*e.spacing.unit,marginTop:4*e.spacing.unit},e.breakpoints.up("sm"),{marginTop:10*e.spacing.unit}),more:{marginTop:2*e.spacing.unit}}})(function(e){var t=e.classes;return i.a.createElement("div",{class:"Hero"},i.a.createElement(we,{backgroundClassName:t.background},i.a.createElement("img",{style:{display:"none"},src:ye,alt:""}),i.a.createElement(ge,{color:"inherit",align:"center",variant:"h5",className:t.h5},"LEARNING - INTEGRITY - EXCELLENCE - LEADERSHIP - CITIZENSHIP - BROTHERHOOD"),i.a.createElement(ce,{color:"secondary",variant:"contained",size:"large",className:t.button,component:function(e){return i.a.createElement(le.a,Object.assign({},e,{href:"../pages/Join.js",variant:"button"}))}},i.a.createElement("span",{class:"join"},"Join Now")),i.a.createElement(ge,{variant:"body1",color:"inherit",className:t.more},"Start your journey")))}),ke=a(26),xe=a.n(ke)()({palette:{primary:{main:"#002e6a"},secondary:{main:"#Fcd116"}},typography:{fontFamily:"'Oswald', sans-serif",button:{fontFamily:"'Oswald', sans- serif",fontWeight:"bold"},h5:{textAlign:"center"}}}),Oe=a(18),je=a.n(Oe);var Ne=Object(d.withStyles)(function(e){return{root:{display:"flex",overflow:"hidden",backgroundColor:"white"},layoutBody:{marginTop:15*e.spacing.unit,marginBottom:30*e.spacing.unit,display:"flex",position:"relative"},item:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0px ".concat(5*e.spacing.unit,"px")},image:{height:55},title:{marginTop:5*e.spacing.unit,marginBottom:5*e.spacing.unit},curvyLines:{pointerEvents:"none",position:"absolute",top:-180}}})(function(e){var t=e.classes;return i.a.createElement("section",{className:t.root},i.a.createElement(Ee,{className:t.layoutBody,width:"large"},i.a.createElement("img",{src:"/static/themes/onepirate/productCurvyLines.png",className:t.curvyLines,alt:"curvy lines"}),i.a.createElement(je.a,{container:!0,spacing:40},i.a.createElement(je.a,{item:!0,xs:12,md:6},i.a.createElement("div",{className:t.item},i.a.createElement("img",{className:t.image,src:"/static/img/vision.png",alt:"vision"}),i.a.createElement(ge,{variant:"h6",className:t.title},"Our vision"),i.a.createElement(ge,{variant:"h5"},"To build Noble Generations of Men that endeavor to enrich their own lives"," and the lives of their Community."))),i.a.createElement(je.a,{item:!0,xs:12,md:6},i.a.createElement("div",{className:t.item},i.a.createElement("img",{className:t.image,src:"/static/img/sheild-outline.png",alt:"purpose"}),i.a.createElement(ge,{variant:"h6",className:t.title},"Our Purpose"),i.a.createElement(ge,{variant:"h5"},"To be a Fraternity of Courageous and Noble Gentlemen who Always Endeavor ","Forward."))))))});var He=Object(d.withStyles)(function(e){return{root:{display:"flex",overflow:"hidden",backgroundColor:"white"},layoutBody:{marginTop:15*e.spacing.unit,marginBottom:10*e.spacing.unit,display:"flex",position:"relative"},item:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0px ".concat(5*e.spacing.unit,"px")},image:{height:55},title:{marginTop:5*e.spacing.unit,marginBottom:5*e.spacing.unit}}})(function(e){var t=e.classes;return i.a.createElement("section",{className:t.root},i.a.createElement(Ee,{className:t.layoutBody,width:"large"},i.a.createElement(je.a,{container:!0,spacing:40},i.a.createElement(je.a,{item:!0,xs:12,md:12},i.a.createElement("div",{className:t.item},i.a.createElement("img",{src:"/static/img/crest.png",alt:"crest"}),i.a.createElement("div",{classname:t.title},i.a.createElement(ge,{variant:"h4",className:t.title},i.a.createElement("strong",null,"Sigma Tau Gamma"))),i.a.createElement(ge,{align:"center",variant:"h6"},"We are a community of Noble Gentleman that endeavor to benefit our community and improve ourselves as men."),i.a.createElement("br",null),i.a.createElement(ge,{align:"center",variant:"h5"},"We encompass our 6 principles in all we do: "),i.a.createElement("br",null),i.a.createElement(ge,{align:"center",variant:"h6"},i.a.createElement("strong",null,"LEARNING:")," He is committed to the pursuit of wisdom and seeks to afford the environment for learning in all his personal and professional endeavors. He knows full well the obligation he has taken and seeks to pass what he has learned to others, knowledge that will rule and mold his thoughts, acts, and deeds. He is focused and goal-oriented.",i.a.createElement(ge,null),i.a.createElement("br",null),i.a.createElement(ge,{align:"center",variant:"h6"},i.a.createElement("strong",null,"INTEGRITY:")," He lives a life of personal integrity perfecting a structure of honor and living by the highest standard that keeps our Brotherhood alive, for, without it, we could not rely on each other or advance our cause. A man with integrity is an honorable man who lives up to promises made \u2013 to others and himself. He is confident, ethical, and honest. "),i.a.createElement("br",null),i.a.createElement(ge,{align:"center",variant:"h6"},i.a.createElement("strong",null,"EXCELLENCE:")," He consistently strives for superior performance and does not shrink from adversity or lofty goals. He is a man who is dedicated and purposeful who carries an unblemished reputation among men. His actions serve as an example and standard bearer for others. He is curious and bold."),i.a.createElement("br",null),i.a.createElement(ge,{align:"center",variant:"h6"},i.a.createElement("strong",null,"LEADERSHIP:")," He is compelled by a sacred trust and duty to develop good leaders for the world. He is a man who is humble and makes others feel like they are truly part of something special. He is the defender of good from evil. He is always prepared to lend assistance to a Brother in need. He is courageous, innovative, and strategic. "),i.a.createElement("br",null),i.a.createElement(ge,{align:"center",variant:"h6"},i.a.createElement("strong",null,"CITIZENSHIP:")," He is an outward defender of the common man and cares about more than just himself, demonstrating an unwavering commitment to serving his fraternity, college, and country. He is charitable in the broadest sense of the word, knowing those so richly blessed have an obligation to serve those less fortunate. He is generous and kind."),i.a.createElement("br",null),i.a.createElement(ge,{align:"center",variant:"h6"},i.a.createElement("strong",null,"BROTHERHOOD:")," He loves his fraternity and seeks to enhance the worth of belonging for others. His actions are emblematic of our shield, a protector of our secrets and our life-long commitment to one another. He holds our ideals in high regard and is forever bonded within the Chain of Honor. He is respectful and dignified and proudly represents the fraternity in all his affairs. He is loyal and proud.")))))))}),Ce=a(73);var Se=Object(d.withStyles)(function(e){return{root:{display:"flex",overflow:"hidden",backgroundColor:"white"},layoutBody:{marginTop:10*e.spacing.unit,marginBottom:30*e.spacing.unit,display:"flex",position:"relative"},item:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0px ".concat(5*e.spacing.unit,"px")},image:{height:55},title:{marginTop:1*e.spacing.unit,marginBottom:2*e.spacing.unit},curvyLines:{pointerEvents:"none",position:"absolute",top:-120}}})(function(e){var t=e.classes;return i.a.createElement("section",{className:t.root},i.a.createElement(Ee,{className:t.layoutBody,width:"large"},i.a.createElement(je.a,{container:!0,spacing:40},i.a.createElement(je.a,{item:!0,xs:12,md:12},i.a.createElement("div",{className:t.item},i.a.createElement(ge,{variant:"h4",className:t.title},i.a.createElement("strong",null,"Chapter History")),i.a.createElement(je.a,{container:!0,spacing:40},i.a.createElement(je.a,{item:!0,xs:12,md:12},i.a.createElement("div",{className:t.item},i.a.createElement(ge,{variant:"h6",align:"center"},"Sig Tau was founded on June 28, 1920 at the University of Central Missouri in Warrensburg, Missouri. We were founded by 17 Veterans of the the First World War. Sig Tau would grow to encompass 175 different chapters nationwide of which 82 are currently active. The Zeta Sigma Associate Chapter at Colorado State University was founded in the Spring Semester of 2017 by 11 men. However, these 11 men are not our only founding fathers as we continue on working to be chartered all men that become brothers are considered founding fathers. We look forward to chartering in the Spring of 2019!")))))))))}),Te=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.props.classes;return i.a.createElement(h.a,{theme:xe},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(re,{home:"Home Page"})),i.a.createElement("div",{class:"content"},i.a.createElement(ve,null),i.a.createElement(Ne,null),i.a.createElement(Ce.a,{class:"divider",variant:"middle"}),i.a.createElement(He,null),i.a.createElement(Ce.a,{class:"divider",variant:"middle"}),i.a.createElement(Se,null))))}}]),t}(i.a.Component),Be=Object(d.withStyles)(function(e){return{"@global":{},root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}}})(Te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[195,1,2]]]);
//# sourceMappingURL=main.b7479413.chunk.js.map