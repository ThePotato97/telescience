(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,n){e.exports=n.p+"static/media/space.d4bd4642.png"},5416:function(e,t,n){e.exports=n(5568)},5566:function(e,t,n){},5568:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),i=n.n(l),c=n(15),o=n(2),s=n(17),u=n(128),m=n.n(u),p=function(e){var t=e.selectedMap,n=e.image,a=function(e){return{cogmap1:{nW:8,nH:8,url:"https://goonhub.com/images/maps/cogmap/z1"},cogmap2:{nW:8,nH:8,url:"https://goonhub.com/images/maps/cogmap2/z1"},faintSignal:{nW:8,nH:8,url:"https://goonhub.com/images/maps/cogmap2/z3"},oshan:{nW:8,nH:8,url:"https://goonhub.com/images/maps/oshan/z1"},clarion:{nW:8,nH:8,url:"https://goonhub.com/images/maps/clarion/z1"}}[e]}(t);return r.a.createElement(r.a.Fragment,null,function(){for(var e=[],t=0;t<a.nW;t++)for(var n=0;n<a.nH;n++)e.push("".concat(t,",").concat(n));return e}().map(function(e){return r.a.createElement("img",{onMouseDown:function(e){return e.preventDefault()},className:n,key:e,alt:e,src:"".concat(a.url,"/").concat(e,".png")})}))},d=n(26),g=Object(c.withStyles)(function(e){return{main:{marginTop:-48+e.spacing.unit},line:{fontSize:e.typography.caption.fontSize},list:{maxHeight:"297px",overflow:"auto"},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},headerText:{marginLeft:2*e.spacing.unit}}})(function(e){var t=e.classes,n=e.math,l=Object(a.useState)(!1),i=Object(s.a)(l,2),c=i[0],u=i[1];return r.a.createElement(o.g,{className:t.main},r.a.createElement(o.o,{onClick:function(){return u(!c)},align:"center",variant:"overline",className:t.headerText},"expedition locations",r.a.createElement(o.d,{disabled:!0,className:c?t.arrow:t.arrowShift},r.a.createElement(d.b,null))),r.a.createElement(o.b,{in:c},r.a.createElement(o.o,{component:"div",variant:"body2",className:t.list},r.a.createElement("ul",null,[{name:"meat station",location:[209,23]},{name:"sun observatory",location:[99,85]},{name:"lava moon",location:[88,106]},{name:"mars",location:[191,135]},{name:"ice moon",location:[15,150]},{name:"biodome",location:[120,164]},{name:"unknown",location:[131,212]},{name:"unknown",location:[236,223]}].map(function(e){var a=Object(s.a)(n.modifiers,2),l=a[0],i=a[1],c=Object(s.a)(n.divisors,2),o=c[0],u=c[1];return e.location[0]=e.location[0]/o+l,e.location[1]=e.location[1]/u+i,r.a.createElement("li",null,r.a.createElement("p",{className:t.line},e.name.toUpperCase()),"X: ".concat(e.location[0],", Y: ").concat(e.location[1]))})))))}),h=Object(c.withStyles)(function(e){return{textField:{width:75},main:{zIndex:2,position:"fixed",marginLeft:e.spacing.unit,marginTop:e.spacing.unit,width:257},resultsPos:{zIndex:2,position:"relative",marginTop:e.spacing.unit},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},headerText:{marginLeft:2*e.spacing.unit},popOver:{marginLeft:e.spacing.unit},popOverText:{margin:e.spacing.unit,maxWidth:257+5*e.spacing.unit},goto:{zIndex:2,transform:"translate(102px, -127px)"}}})(function(e){var t=e.classes,n=e.selectedTile,l=e.centerFunc,i=Object(a.useState)(null),c=Object(s.a)(i,2),u=c[0],m=c[1],p=Object(a.useState)({input:[100,50],actualX:[6,7],actualY:[49,51]}),h=Object(s.a)(p,2),E=h[0],f=h[1],v=Object(a.useState)(!0),b=Object(s.a)(v,2),w=b[0],O=b[1],k=E.actualX[1]-E.actualX[0],x=E.actualY[1]-E.actualY[0],S=E.input[0]-E.actualX[0]/k,N=E.input[1]-E.actualY[0]/x;return r.a.createElement("div",{className:t.main},r.a.createElement(o.g,null,r.a.createElement(o.o,{className:t.headerText,onClick:function(){return O(!w)},variant:"overline",align:"center",id:"tableTitle"},"Do telescience math",r.a.createElement(o.d,{disabled:!0,className:w?t.arrow:t.arrowShift},r.a.createElement(d.b,null))),r.a.createElement(o.b,{in:w},r.a.createElement(o.i,{padding:"dense"},r.a.createElement(o.l,null,r.a.createElement(o.m,null,r.a.createElement(o.k,{align:"center"},"Console coord"),r.a.createElement(o.k,{align:"center"},"GPS coord"))),r.a.createElement(o.j,null,r.a.createElement(o.m,null,r.a.createElement(o.k,null,r.a.createElement(o.n,{className:t.textField,disabled:!w,onChange:function(e){return T(e,"input",0)},value:E.input[0],InputProps:{startAdornment:r.a.createElement(o.e,{position:"start"},"X1")}})),r.a.createElement(o.k,null,r.a.createElement(o.n,{className:t.textField,disabled:!w,onChange:function(e){return T(e,"actualX",0)},value:E.actualX[0]}))),r.a.createElement(o.m,null,r.a.createElement(o.k,null,r.a.createElement(o.n,{className:t.textField,disabled:!w,onChange:function(e){return T(e,"input",1)},value:E.input[1],InputProps:{startAdornment:r.a.createElement(o.e,{position:"start"},"Y1")}})),r.a.createElement(o.k,null,r.a.createElement(o.n,{className:t.textField,disabled:!w,onChange:function(e){return T(e,"actualY",0)},value:E.actualY[0]}))),r.a.createElement(o.m,null,r.a.createElement(o.k,null,r.a.createElement(o.n,{className:t.textField,key:"gpsX1",value:E.input[0]+1,disabled:!0,InputProps:{startAdornment:r.a.createElement(o.e,{position:"start"},"X2")}})),r.a.createElement(o.k,null,r.a.createElement(o.n,{className:t.textField,disabled:!w,onChange:function(e){return T(e,"actualX",1)},value:E.actualX[1]}))),r.a.createElement(o.m,null,r.a.createElement(o.k,null,r.a.createElement(o.n,{className:t.textField,value:E.input[1]+1,disabled:!0,InputProps:{startAdornment:r.a.createElement(o.e,{position:"start"},"Y2")}})),r.a.createElement(o.k,null,r.a.createElement(o.n,{className:t.textField,disabled:!w,onChange:function(e){return T(e,"actualY",1)},value:E.actualY[1]}))))))),r.a.createElement(o.g,{className:t.resultsPos},r.a.createElement(o.o,{className:t.headerText,variant:"overline",align:"center",id:"tableTitle",onClick:function(e){var t=e.currentTarget;m(t)}},"Real Coordinates",r.a.createElement(o.d,{disabled:!0},r.a.createElement(d.a,null))),r.a.createElement(o.i,{padding:"dense"},r.a.createElement(o.j,null,r.a.createElement(o.m,null,r.a.createElement(o.k,null,r.a.createElement(o.n,{className:t.textField,value:n[0],onChange:function(t){var n=parseInt(t.target.value);n||(n=0),e.transform(function(e){return e.selectedTile[0]=n,e})},InputProps:{startAdornment:r.a.createElement(o.e,{position:"start"},"X")}})),r.a.createElement(o.k,null,r.a.createElement(o.n,{className:t.textField,value:n[1],onChange:function(t){var n=parseInt(t.target.value);n||(n=0),e.transform(function(e){return e.selectedTile[1]=n,e})},InputProps:{startAdornment:r.a.createElement(o.e,{position:"start"},"Y")}}))))),r.a.createElement(o.o,{variant:"overline",align:"center"},"Console Coordinates"),r.a.createElement(o.i,{padding:"dense"},r.a.createElement(o.j,null,r.a.createElement(o.m,null,r.a.createElement(o.k,null,r.a.createElement(o.n,{disabled:!0,className:t.textField,value:n[0]/k+S,InputProps:{startAdornment:r.a.createElement(o.e,{position:"start"},"X")}})),r.a.createElement(o.k,null,r.a.createElement(o.n,{disabled:!0,className:t.textField,value:n[1]/x+N,InputProps:{startAdornment:r.a.createElement(o.e,{position:"start"},"Y")}})))))),r.a.createElement(o.h,{className:t.popOver,"aria-label":"Math help",id:"math-tips",open:Boolean(u),anchorEl:u,onClose:function(){return m(null)},anchorOrigin:{vertical:"top",horizontal:"right"}},r.a.createElement(o.o,{align:"center",variant:"caption",className:t.popOverText},"Stuck? Check the SS13 wiki on",r.a.createElement(o.a,{size:"small",href:"https://wiki.ss13.co/Telescience#Decoding_the_teleporter",target:"_blank",rel:"noopener noreferrer"},"decoding the teleporter"),r.a.createElement("p",null,'Fill in the relevant fields under "DO TELESCIENCE MATH". The website will handle the math for you, and your new console coordinates will be shown under "CONSOLE COORDINATES"'),r.a.createElement("p",null,'When you\'re done, you can close the math table by clicking the "DO TELESCIENCE MATH" header.'),r.a.createElement("p",null,'If you want to center the screen on custom coordinates, input any coordinate you want under the "REAL COORDINATES" table, then click the center button icon, inbetween the two rows.'),r.a.createElement("p",null,'Click the "EXPEDITION LOCATIONS" header for a list of telescience expedition locations, their values will already have the math applied to them.'))),r.a.createElement(o.d,{tabIndex:-1,className:t.goto,onClick:function(){return l()}},r.a.createElement(d.c,null)),r.a.createElement(g,{math:{divisors:[k,x],modifiers:[S,N]}}));function T(e,t,n){var a=parseInt(e.target.value);a||(a=0),f(function(e){return e[t][n]=a,e})}}),E=Object(c.withStyles)(function(e){return{paper:{zIndex:2,position:"absolute",top:0,right:0,marginTop:e.spacing.unit,marginRight:e.spacing.unit,width:150},textField:{margin:e.spacing.unit,width:150-2*e.spacing.unit},menu:{width:200}}})(function(e){var t=e.classes,n=e.selectMap,a=e.selectedMap;return r.a.createElement(o.g,{className:t.paper},r.a.createElement(o.n,{InputProps:{inputProps:{tabIndex:-1}},className:t.textField,select:!0,label:"Select Map",value:a,onChange:function(e){var t=e.target.value;n(t)},SelectProps:{MenuProps:{className:t.menu}}},r.a.createElement(o.f,{value:"cogmap1"},"Cogmap 1"),r.a.createElement(o.f,{value:"cogmap2"},"Cogmap 2"),r.a.createElement(o.f,{value:"faintSignal"},"Debris Field"),r.a.createElement(o.f,{value:"oshan"},"Oshan"),r.a.createElement(o.f,{value:"clarion"},"Clarion")))}),f=Object(c.withStyles)(function(e){return{main:{backgroundImage:"url(".concat(m.a,")"),display:"block",width:9600,height:9600},image:{verticalAlign:"middle",width:1200,height:1200},noClick:{userSelect:"none"}}})(function(e){var t=e.classes,n=Object(a.useState)({initial:[0,0],pos:[-1300,-1300],selectedTile:[137,146]}),l=Object(s.a)(n,2),i=l[0],c=l[1],o=Object(a.useState)(5),u=Object(s.a)(o,2),m=u[0],d=u[1],g=m/10,f=Object(a.useState)(!1),v=Object(s.a)(f,2),b=v[0],w=v[1],O=Object(a.useState)(!1),k=Object(s.a)(O,2),x=k[0],S=k[1],N=Object(a.useState)("cogmap1"),T=Object(s.a)(N,2),C=T[0],y=T[1],j={divStyle:{transformOrigin:"0 0",transform:"translate3D(".concat(i.pos[0],"px, ").concat(i.pos[1],"px, 0) scale(").concat(g,")")},svgStyle:{zIndex:1,position:"absolute",left:32*(i.selectedTile[0]-1)*g+i.pos[0],top:32*-(i.selectedTile[1]-300)*g+i.pos[1]}};return r.a.createElement("div",{className:t.noClick},r.a.createElement(E,{selectMap:y,selectedMap:C}),r.a.createElement(h,{selectedTile:i.selectedTile,transform:c,centerFunc:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15;d(e);var t=e/10,n=32*(i.selectedTile[0]-1)*t,a=32*-(i.selectedTile[1]-303)*t,r=window.screen.width/2,l=window.screen.height/2;return c(function(e){return e.pos[0]=-n+r,e.pos[1]=-a+l,e})}}),r.a.createElement("div",{className:t.main,style:j.divStyle,onMouseLeave:function(){return S(!1)},onMouseUp:function(e){return function(e){if(S(!1),b)return w(!1);b&&w(!1);var t=e.clientX,n=e.clientY,a=[t-i.pos[0],n-i.pos[1]].map(function(e){return e/g}),r=Object(s.a)(a,2),l=r[0],o=r[1];c(function(e){return e.selectedTile=[1+(l-l%32)/32,300-(o-o%32)/32],e})}(e)},onMouseDown:function(e){return function(e){S(!0);var t=e.clientX,n=e.clientY;return c(function(e){return e.initial=[t-e.pos[0],n-e.pos[1]],e})}(e)},onMouseMove:function(e){return function(e){if(x){w(!0);var t=e.clientX,n=e.clientY;return c(function(e){return e.pos=[t-e.initial[0],n-e.initial[1]],e})}}(e)},onWheel:function(e){return I(e)}},r.a.createElement(p,{image:"".concat(t.image," ").concat(t.noClick),selectedMap:C})),r.a.createElement(function(){return r.a.createElement("svg",{onClick:function(){return c(function(e){return e.selectedTile=[1,1],e})},onWheel:function(e){return I(e)},className:t.noClick,width:32*g,height:32*g,style:j.svgStyle},r.a.createElement("rect",{width:"".concat(32*g,"px"),height:"".concat(32*g,"px"),stroke:"white",fill:"transparent",strokeWidth:"4"}))},null));function I(e){if(!x){var t=e.deltaY,n=e.clientX,a=e.clientY;if(t>0){if(2===m)return;d(m-1)}else{if(15===m)return;d(m+1)}return c(function(e){var r=(t>0?m-1:m+1)/10,l=[n-e.pos[0],a-e.pos[1]].map(function(e){return e/g}),i=Object(s.a)(l,2),c=i[0],o=i[1];return e.pos[0]=-c*r+n,e.pos[1]=-o*r+a,e})}}}),v=Object(c.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),b=function(e){return r.a.createElement(c.MuiThemeProvider,{theme:v},r.a.createElement(o.c,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(5566);i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5416,2,1]]]);
//# sourceMappingURL=main.9a9fb2c3.chunk.js.map