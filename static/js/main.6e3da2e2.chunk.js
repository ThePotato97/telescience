(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,n){e.exports=n.p+"static/media/space.d4bd4642.png"},5419:function(e,t,n){e.exports=n(5571)},5569:function(e,t,n){},5571:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=n(15),l=n(2),s=n(36),u=n(37),m=n(16),p=n(19),d=n(136),g=n.n(d),f=function(e){var t=e.selectedMap,n=e.image,a=function(e){var t={cogmap1:"https://goonhub.com/images/maps/cogmap/z1",cogmap2:"https://goonhub.com/images/maps/cogmap2/z1",faintSignal:"https://goonhub.com/images/maps/cogmap2/z3",oshan:"https://goonhub.com/images/maps/oshan/z1",clarion:"https://goonhub.com/images/maps/clarion/z1",destiny:"https://goonhub.com/images/maps/destiny/z1",samedi:"https://goonhub.com/images/maps/samedi/z1"};return t[e]?t[e]:t.cogmap1}(t);return r.a.createElement("div",{onDragStart:function(e){return e.preventDefault()}},function(){for(var e=[],t=0;t<8;t++)for(var n=0;n<8;n++)e.push("".concat(t,",").concat(n));return e}().map(function(e){return r.a.createElement("img",{className:n,key:e,alt:e,src:"".concat(a,"/").concat(e,".png")})}))},h=Object(c.withStyles)(function(e){return{main:{marginTop:-48+e.spacing.unit},line:{fontSize:e.typography.caption.fontSize},list:{maxHeight:"297px",overflow:"auto"},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},headerText:{marginLeft:2*e.spacing.unit}}})(function(e){var t=e.classes,n=e.math,o=Object(a.useState)(!1),i=Object(m.a)(o,2),c=i[0],s=i[1];return r.a.createElement(l.k,{className:t.main},r.a.createElement(l.s,{onClick:function(){return s(!c)},align:"center",variant:"overline",className:t.headerText},"expedition locations",r.a.createElement(l.e,{disabled:!0,className:c?t.arrow:t.arrowShift},r.a.createElement(p.d,null))),r.a.createElement(l.b,{in:c},r.a.createElement(l.s,{component:"div",variant:"body2",className:t.list},r.a.createElement("ul",null,[{name:"meat station",location:[209,23]},{name:"solar observatory",location:[99,85]},{name:"lava moon",location:[88,106]},{name:"mars",location:[191,135]},{name:"ice moon",location:[15,150]},{name:"biodome",location:[120,164]},{name:"unknown",location:[131,212]},{name:"unknown",location:[236,223]}].map(function(e){var a=Object(m.a)(n.modifiers,2),o=a[0],i=a[1],c=Object(m.a)(n.divisors,2),l=c[0],s=c[1];return e.location[0]=e.location[0]/l+o,e.location[1]=e.location[1]/s+i,r.a.createElement("li",{key:"".concat(e.name,"_").concat(e.location.toString())},r.a.createElement("p",{className:t.line},e.name.toUpperCase()),"X: ".concat(e.location[0],", Y: ").concat(e.location[1]))})))))}),E=Object(c.withStyles)(function(e){return{paper:{position:"relative",marginTop:e.spacing.unit,marginRight:e.spacing.unit},textField:{margin:e.spacing.unit,width:"calc(100% - ".concat(2*e.spacing.unit,"px)")}}})(function(e){var t=e.classes,n=e.selectMap,a=e.selectedMap;return r.a.createElement(l.k,{className:t.paper},r.a.createElement(l.r,{InputProps:{inputProps:{tabIndex:-1}},className:t.textField,select:!0,label:"Select Map",value:a,onChange:function(e){var t=e.target.value;return n(t)},SelectProps:{MenuProps:{className:t.menu}}},r.a.createElement(l.j,{value:"cogmap1"},"Cogmap 1"),r.a.createElement(l.j,{value:"cogmap2"},"Cogmap 2"),r.a.createElement(l.j,{value:"faintSignal"},"Debris Field"),r.a.createElement(l.j,{value:"oshan"},"Oshan"),r.a.createElement(l.j,{value:"clarion"},"Clarion"),r.a.createElement(l.j,{value:"destiny"},"Destiny"),r.a.createElement(l.j,{value:"samedi"},"Samedi")))}),v=Object(c.withStyles)(function(e){return{paper:{position:"relative",marginTop:2*e.spacing.unit,marginRight:e.spacing.unit},headerText:{marginRight:6*e.spacing.unit},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},listHeight:{maxHeight:442-4*e.spacing.unit,overflowY:"auto"}}})(function(e){var t=e.classes,n=e.centerCoords,o=e.zoom,i=e.favorites,c=e.modFavorites,s=e.math,u=e.selectedMap,d=Object(a.useState)(!1),g=Object(m.a)(d,2),f=g[0],h=g[1],E=Object(a.useState)(!1),v=Object(m.a)(E,2),b=v[0],y=v[1];return Object(a.useEffect)(function(){return i[u].length>=1&&!f&&!b?h(!0):i[u].length<1?h(!1):void 0},[e]),r.a.createElement(l.k,{className:t.paper},r.a.createElement(l.s,{className:t.headerText,"aria-owns":f?"favorites-menu":void 0,"aria-haspopup":"true",variant:"overline",align:"center",onClick:function(){return i[u].length?(y(!0),h(!f)):h(!1)}},r.a.createElement(l.e,{disabled:!0,className:f?t.arrow:t.arrowShift},r.a.createElement(p.d,null)),"Favorites"),r.a.createElement(l.b,{in:f},r.a.createElement(l.g,{id:"favorites-menu",className:t.listHeight},i[u].map(function(e,t){return r.a.createElement(l.h,{key:"".concat(e.location,"_key")},r.a.createElement(l.r,{value:e.name,onChange:function(e){var n=e.target.value;return c(function(e){return e[u][t].name=n,e})},FormHelperTextProps:{style:{textAlign:"center"}},helperText:"Real: [".concat(e.location.toString(),"] ----- Console: [").concat(e.location[0]/s.divisors[0]+s.modifiers[0],",").concat(e.location[1]/s.divisors[1]+s.modifiers[1],"]"),InputProps:{startAdornment:r.a.createElement(l.f,{position:"start"},r.a.createElement(l.e,{onClick:function(){return n(o,[0,0],e.location)},"aria-label":"go to"},r.a.createElement(p.e,null))),endAdornment:r.a.createElement(l.f,{position:"end"},r.a.createElement(l.e,{onClick:function(){return 1===i.length&&h(!1),c(function(t){return t[u]=t[u].filter(function(t){return t!==e}),t})},"aria-label":"delete"},r.a.createElement(p.a,null)))}}))}))))}),b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Help, I'm stuck!"),r.a.createElement("hr",null),r.a.createElement("p",null,"Send two Space GPS's through the teleporter at the console coord values, and record their actual position under GPS coord."),r.a.createElement("p",null,'When you\'re done, you can close the math table by clicking the "DO TELESCIENCE MATH" header.'),r.a.createElement("p",null,"ALT + WASD, Arrow Keys, or Numpad to navigate via keyboard."),r.a.createElement("p",null,"Right click anywhere to add favorites."),r.a.createElement("p",null,"Stuck? Check the SS13 wiki on","\t",r.a.createElement(l.a,{color:"secondary",variant:"outlined",size:"small",href:"https://wiki.ss13.co/Telescience#Decoding_the_teleporter",rel:"noopener noreferrer",target:"_blank"},"decoding the teleporter")),r.a.createElement("p",null,"Need more info?","\t",r.a.createElement(l.a,{color:"secondary",variant:"outlined",size:"small",href:"https://github.com/Kayle7777/telescience",rel:"noopener noreferrer",target:"_blank"},"Click here"),"\t","for a detailed readme."),r.a.createElement("hr",null),r.a.createElement("p",null,"Check out the alpha version of my ChemHelper site. Plenty more features are in store!"),r.a.createElement(l.a,{color:"secondary",variant:"outlined",size:"small",href:"https://kayle7777.github.io/chemhelper/",rel:"noopener noreferrer",target:"_blank"},"ChemHelper"))},y=function(e){var t=e.classes,n=e.open,a=e.anchorEl,o=e.onClose,i=e.anchorOrigin;return r.a.createElement(l.l,{className:t.popOver,"aria-label":"Math help",id:"math-tips",open:n,anchorEl:a,onClose:o,anchorOrigin:i},r.a.createElement(l.s,{variant:"caption",className:t.popOverText},r.a.createElement(b,null)))},w=Object(c.withStyles)(function(e){return{textField:{width:75},main:{zIndex:2,position:"fixed",marginLeft:e.spacing.unit,marginTop:e.spacing.unit,width:257},resultsPos:{zIndex:2,position:"relative",marginTop:e.spacing.unit},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},headerText:{marginLeft:2*e.spacing.unit},popOver:{marginLeft:e.spacing.unit},popOverText:{margin:e.spacing.unit,maxWidth:257+30*e.spacing.unit},goto:{zIndex:2,transform:"translate(102px, -127px)"},rightPanel:{position:"absolute",zIndex:2,top:0,right:0,width:300},helpButton:{position:"fixed",bottom:0,right:0,marginBottom:2*e.spacing.unit,marginRight:2*e.spacing.unit}}})(function(e){var t=e.classes,n=e.selectedTile,o=e.centerCoords,i=e.selectMap,c=e.selectedMap,s=e.zoom,u=e.favorites,d=e.modFavorites,g=Object(a.useState)(null),f=Object(m.a)(g,2),b=f[0],w=f[1],k=Object(a.useState)(!0),x=Object(m.a)(k,2),O=x[0],S=x[1],C=Object(a.useState)({input:[100,50],actualX:[6,7],actualY:[49,51]}),j=Object(m.a)(C,2),N=j[0],T=j[1],I=N.actualX[1]-N.actualX[0],M=N.actualY[1]-N.actualY[0],P=N.input[0]-N.actualX[0]/I,F=N.input[1]-N.actualY[0]/M;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.main},r.a.createElement(l.k,null,r.a.createElement(l.s,{className:t.headerText,onClick:function(){return S(!O)},variant:"overline",align:"center",id:"tableTitle"},"Do telescience math",r.a.createElement(l.e,{disabled:!0,className:O?t.arrow:t.arrowShift},r.a.createElement(p.d,null))),r.a.createElement(l.b,{in:O},r.a.createElement(l.m,{padding:"dense"},r.a.createElement(l.p,null,r.a.createElement(l.q,null,r.a.createElement(l.o,{align:"center"},"Console coord"),r.a.createElement(l.o,{align:"center"},"GPS coord"))),r.a.createElement(l.n,{"data-testid":"telescience-gps"},r.a.createElement(l.q,null,r.a.createElement(l.o,null,r.a.createElement(l.r,{className:t.textField,disabled:!O,onChange:function(e){return A(e,"input",0)},value:N.input[0],InputProps:{startAdornment:r.a.createElement(l.f,{position:"start"},"X1"),"data-testid":"input-1-0"}})),r.a.createElement(l.o,null,r.a.createElement(l.r,{className:t.textField,disabled:!O,onChange:function(e){return A(e,"actualX",0)},value:N.actualX[0],InputProps:{"data-testid":"actual-x-0"}}))),r.a.createElement(l.q,null,r.a.createElement(l.o,null,r.a.createElement(l.r,{className:t.textField,disabled:!O,onChange:function(e){return A(e,"input",1)},value:N.input[1],InputProps:{startAdornment:r.a.createElement(l.f,{position:"start"},"Y1"),"data-testid":"input-1-1"}})),r.a.createElement(l.o,null,r.a.createElement(l.r,{className:t.textField,disabled:!O,onChange:function(e){return A(e,"actualY",0)},value:N.actualY[0],InputProps:{"data-testid":"actual-y-0"}}))),r.a.createElement(l.q,null,r.a.createElement(l.o,null,r.a.createElement(l.r,{className:t.textField,value:N.input[0]+1,disabled:!0,InputProps:{startAdornment:r.a.createElement(l.f,{position:"start"},"X2"),"data-testid":"input-2-0"}})),r.a.createElement(l.o,null,r.a.createElement(l.r,{className:t.textField,disabled:!O,onChange:function(e){return A(e,"actualX",1)},value:N.actualX[1],InputProps:{"data-testid":"actual-x-1"}}))),r.a.createElement(l.q,null,r.a.createElement(l.o,null,r.a.createElement(l.r,{className:t.textField,value:N.input[1]+1,disabled:!0,InputProps:{startAdornment:r.a.createElement(l.f,{position:"start"},"Y2"),"data-testid":"input-2-1"}})),r.a.createElement(l.o,null,r.a.createElement(l.r,{className:t.textField,disabled:!O,onChange:function(e){return A(e,"actualY",1)},value:N.actualY[1],InputProps:{"data-testid":"actual-y-1"}}))))))),r.a.createElement(l.k,{className:t.resultsPos},r.a.createElement(l.s,{className:t.headerText,variant:"overline",align:"center",id:"tableTitle"},"Real Coordinates"),r.a.createElement(l.m,{padding:"dense"},r.a.createElement(l.n,null,r.a.createElement(l.q,null,r.a.createElement(l.o,null,r.a.createElement(l.r,{className:t.textField,value:n[0],onChange:function(t){var n=parseInt(t.target.value);return n||(n=0),e.transform(function(e){return e.selectedTile[0]=n,e})},InputProps:{startAdornment:r.a.createElement(l.f,{position:"start"},"X"),"data-testid":"selected-x"}})),r.a.createElement(l.o,null,r.a.createElement(l.r,{className:t.textField,value:n[1],onChange:function(t){var n=parseInt(t.target.value);return n||(n=0),e.transform(function(e){return e.selectedTile[1]=n,e})},InputProps:{startAdornment:r.a.createElement(l.f,{position:"start"},"Y"),"data-testid":"selected-y"}}))))),r.a.createElement(l.s,{variant:"overline",align:"center"},"Console Coordinates"),r.a.createElement(l.m,{padding:"dense"},r.a.createElement(l.n,null,r.a.createElement(l.q,null,r.a.createElement(l.o,null,r.a.createElement(l.r,{disabled:!0,className:t.textField,value:n[0]/I+P,InputProps:{startAdornment:r.a.createElement(l.f,{position:"start"},"X"),"data-testid":"console-x"}})),r.a.createElement(l.o,null,r.a.createElement(l.r,{disabled:!0,className:t.textField,value:n[1]/M+F,InputProps:{startAdornment:r.a.createElement(l.f,{position:"start"},"Y"),"data-testid":"console-y"}})))))),r.a.createElement(y,{classes:t,open:Boolean(b),anchorEl:b,onClose:function(){return w(null)},anchorOrigin:{vertical:"top",horizontal:"right"}}),r.a.createElement(l.e,{tabIndex:-1,className:t.goto,onClick:function(){return o()}},r.a.createElement(p.f,null)),r.a.createElement(h,{math:{divisors:[I,M],modifiers:[P,F]}})),r.a.createElement("div",{className:t.rightPanel},r.a.createElement(E,{selectMap:i,selectedMap:c}),r.a.createElement(v,{zoom:s,centerCoords:o,favorites:u,selectedMap:c,modFavorites:d,math:{divisors:[I,M],modifiers:[P,F]}}),r.a.createElement(l.d,{className:t.helpButton,onClick:function(e){var t=e.currentTarget;w(t)}},r.a.createElement(p.b,{style:{height:"100%",width:"100%",transform:"scale(1.21, 1.21)"}}))));function A(e,t,n){var a=parseInt(e.target.value);return a||(a=0),T(function(e){return e[t][n]=a,e})}}),k=Object(c.withStyles)(function(e){return{main:{backgroundImage:"url(".concat(g.a,")"),display:"block",width:9600,height:9600},image:{verticalAlign:"middle",width:1200,height:1200},imageUnclicked:{cursor:"grab"},imageClicked:{cursor:"grabbing"},noClick:{userSelect:"none"}}})(function(e){var t=e.classes,n=Object(a.useState)({initial:[0,0],mouse:[0,0],pos:[-2200,-2e3],selectedTile:[139,192]}),o=Object(m.a)(n,2),i=o[0],c=o[1],d=Object(a.useState)("cogmap1"),g=Object(m.a)(d,2),h=g[0],E=g[1],v=Object(a.useState)({cogmap1:[{name:"Telescience",location:[112,123]},{name:"AI core",location:[137,146]},{name:"Captain's Locker",location:[85,166]}],cogmap2:[{name:"Telescience",location:[104,120]},{name:"AI core",location:[190,220]}],faintSignal:[{name:"RobustTec Implants",location:[266,132]},{name:"Phaser",location:[285,162]}],oshan:[{name:"AI Core",location:[196,160]},{name:"Telescience",location:[181,174]}],clarion:[{name:"AI Core",location:[133,99]},{name:"Telescience",location:[153,107]}],destiny:[],samedi:[]}),b=Object(m.a)(v,2),y=b[0],k=b[1],x=Object(a.useState)(7),O=Object(m.a)(x,2),S=O[0],C=O[1],j=S/10,N=Object(a.useState)(!1),T=Object(m.a)(N,2),I=T[0],M=T[1],P=Object(a.useState)(!1),F=Object(m.a)(P,2),A=F[0],z=F[1],D=Object(a.useState)({mouse:[0,0],target:null}),X=Object(m.a)(D,2),Y=X[0],W=X[1];Object(a.useEffect)(function(){var e=function(){var e=localStorage.getItem("telescienceFavorites");if(!e)return!1;e=JSON.parse(e);var t=Object.keys(e),n=Object.keys(y);if(t.length!==n.length||JSON.stringify(t)!==JSON.stringify(n)){var a=n.filter(function(e){return!t.includes(e)}),r=t.filter(function(e){return!n.includes(e)});a.length&&a.forEach(function(t){var n={};n[t]=y[t],e=Object(u.a)({},e,n)}),r.length&&r.forEach(function(n){var a={};t.pop.apply(t,Object(s.a)(r)),t.forEach(function(t){a[t]=e[t]}),e=a})}return e}();e&&k(e)},[]),Object(a.useEffect)(function(){var e;"string"!==typeof(e=y)&&(e=JSON.stringify(e)),localStorage.setItem("telescienceFavorites",e)},[JSON.stringify(y)]);var L={divStyle:{transformOrigin:"0 0",transform:"translate3D(".concat(i.pos[0],"px, ").concat(i.pos[1],"px, 0) scale(").concat(j,")")},selectorStyle:Object(u.a)({zIndex:1,position:"fixed"},_(i.selectedTile))};return r.a.createElement("div",{className:t.noClick,onKeyDown:function(e){return function(e){if(A){var t=e.key;if(e.altKey){if("5"===t||" "===t)return J(S);var n={w:[0,1],a:[-1,0],s:[0,-1],d:[1,0],ArrowUp:[0,1],ArrowLeft:[-1,0],ArrowDown:[0,-1],ArrowRight:[1,0],1:[-1,-1],2:[0,-1],3:[1,-1],4:[-1,0],6:[1,0],7:[-1,1],8:[0,1],9:[1,1],"+":2,"-":-2};if(Object.keys(n).includes(t)){var a=n[t];if("+"===t||"-"===t){if("+"===t&&S>=15)return;if("-"===t&&S<=3)return;return C(S+a),J(S+a)}return J(S,a),c(function(e){return e.selectedTile[0]+=a[0],e.selectedTile[1]+=a[1],e})}}}}(e)},tabIndex:0},"oshan"===h&&function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return e.pos||(e.pos=[150+t,151+t]),e.pos[0]--,e.pos[1]=300-e.pos[1],r.a.createElement("a",{key:"easteregg#".concat(t+1),style:{color:"inherit"},href:e.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(p.c,{style:Object(u.a)({},G.apply(void 0,Object(s.a)(e.pos)),{color:e.color})}))}))}({link:0===Math.round(Math.random())?"https://www.youtube.com/watch?v=6E5m_XtCX3c":"https://youtu.be/3PgwDlbdew8?t=10",pos:[150,150]},{link:"https://youtu.be/dJBD0F-1V00?t=21",pos:[3,4],color:"#6D7373"}),r.a.createElement(w,{selectedTile:i.selectedTile,centerCoords:J,selectMap:E,selectedMap:h,zoom:S,favorites:y,modFavorites:k}),r.a.createElement("div",{onMouseLeave:function(){return M(!1),z(!1)},onMouseEnter:function(){return z(!0)},onContextMenu:q,onClick:function(e){var t=e.clientX,n=e.clientY;if(i.mouse[0]===t&&i.mouse[1]===n)return c(function(e){return e.selectedTile=R.apply(void 0,Object(s.a)(H(t,n))),e})},onMouseDown:function(e){M(!0);var t=e.clientX,n=e.clientY;return c(function(e){return e.mouse=[t,n],e.initial=H(t,n,1),e})},onMouseUp:function(){return M(!1)},onMouseMove:function(e){if(I){var t=e.clientX,n=e.clientY;return c(function(e){return e.pos=H(t,n,1,e.initial),e})}},onWheel:B},r.a.createElement("div",{className:t.main,style:L.divStyle},r.a.createElement(f,{image:"".concat(t.image," ").concat(t.noClick," ").concat(I?t.imageClicked:t.imageUnclicked),selectedMap:h})),y[h].length>0&&y[h].map(function(e){return r.a.createElement("svg",{key:"".concat(e.location.toString(),"_SVG"),onContextMenu:function(t){return t.stopPropagation(),t.preventDefault(),k(function(t){return t[h]=t[h].filter(function(t){return t!==e}),t})},style:Object(u.a)({zIndex:1,position:"fixed"},_(e.location)),className:"".concat(t.noClick," ").concat(t.imageUnclicked),width:32*j,height:32*j},r.a.createElement("rect",{width:"".concat(32*j,"px"),height:"".concat(32*j,"px"),stroke:"#39FF14",fill:"transparent",strokeWidth:"4"}))})),r.a.createElement(function(e){return r.a.createElement("svg",{onClick:e.onClick,onWheel:e.onWheel?e.onWheel:B,onMouseDown:e.mouseDown,onMouseEnter:function(){return z(!0)},onContextMenu:e.onContextMenu?e.onContextMenu:function(e){return e.preventDefault()},className:"".concat(t.noClick," ").concat(t.imageUnclicked),width:32*j,height:32*j,style:e.style},r.a.createElement("rect",{width:"".concat(32*j,"px"),height:"".concat(32*j,"px"),stroke:e.color,fill:"transparent",strokeWidth:"4"}))},{color:"white",style:L.selectorStyle,onClick:function(){return c(function(e){return e.selectedTile=[1,1],e})},onContextMenu:q}),r.a.createElement(l.i,{MenuListProps:{disablePadding:!0},open:Boolean(Y.target),anchorEl:Y.target,anchorPosition:{top:Y.mouse[1],left:Y.mouse[0]},anchorReference:"anchorPosition",onContextMenu:function(e){return e.preventDefault(),U()},onClose:function(){return U()}},r.a.createElement(l.a,{size:"small",onClick:function(e){return U(),k(function(e){return e[h].push({name:"Favorite #".concat(e[h].length+1),location:R.apply(void 0,Object(s.a)(H(Y.mouse[0],Y.mouse[1])))}),e})}},"favorite")));function R(e,t){return[1+(e-e%32)/32,300-(t-t%32)/32]}function _(e,t){if(!t&&"object"===typeof e){var n=e,a=Object(m.a)(n,2);e=a[0],t=a[1]}return{left:32*(e-1)*j+i.pos[0],top:32*-(t-300)*j+i.pos[1]}}function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.pos;return[e-a[0],t-a[1]].map(function(e){return e/n})}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!I){var n=e.deltaY,a=e.clientX,r=e.clientY;if(n>0){if(2===S)return;C(S-t)}else{if(15===S)return;C(S+t)}return c(function(e){var o=(n>0?S-t:S+t)/10,i=H(a,r),c=Object(m.a)(i,2),l=c[0],s=c[1];return e.pos[0]=-l*o+a,e.pos[1]=-s*o+r,e})}}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],n=arguments.length>2?arguments[2]:void 0,a=n||i.selectedTile;C(e);var r=e/10,o=32*(a[0]-1+t[0])*r,l=32*-(a[1]-303+t[1])*r,s=window.screen.width/2,u=window.screen.height/2;return c(function(e){return e.pos[0]=-o+s,e.pos[1]=-l+u,e})}function q(e){e.preventDefault();var t=e.clientX,n=e.clientY,a=e.target;return W(function(e){return e.target=a,e.mouse=[t,n],e})}function U(){return W(function(e){return e.target=null,e})}function G(e,t){return{zIndex:2,position:"absolute",left:32*e*j+i.pos[0],top:32*t*j+i.pos[1],width:32*j,height:32*j}}}),x=Object(c.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),O=function(e){return r.a.createElement(c.MuiThemeProvider,{theme:x},r.a.createElement(l.c,null),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(5569);i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5419,2,1]]]);
//# sourceMappingURL=main.6e3da2e2.chunk.js.map