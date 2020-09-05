(this.webpackJsonpgitsite=this.webpackJsonpgitsite||[]).push([[0],{202:function(e,t,a){e.exports=a(448)},207:function(e,t,a){},288:function(e,t,a){},446:function(e,t,a){},447:function(e,t,a){},448:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=(a(207),a(208),a(86)),i=a(25),u=a(450),s=a(452),m=a(454),d=a(455),f=a(456),p=a(83),b=a.n(p),h=a(34),E=u.a.Content,g=u.a.Sider,v=function(e){var t=e.children,a=Object(n.useState)(!1),l=Object(i.a)(a,2),c=l[0],o=l[1],p=Object(h.f)();return r.a.createElement(u.a,{style:{height:"100vh"}},r.a.createElement(g,{collapsed:c,collapsible:!0,onCollapse:function(e){o(e)}},r.a.createElement(s.a,{theme:"dark",mode:"inline",onClick:function(e){switch(e.key){case"2":p.push("/brainfuck");break;case"3":p.push("/pixelart");break;default:p.push("/")}}},r.a.createElement(s.a.Item,{key:"1"},r.a.createElement(m.a,null),r.a.createElement("span",null,"home.js")),r.a.createElement(s.a.Item,{key:"2"},r.a.createElement(d.a,null),r.a.createElement("span",null,"Brainfuck.js")),r.a.createElement(s.a.Item,{key:"3"},r.a.createElement(f.a,null),r.a.createElement("span",null,"Pixelart.js")))),r.a.createElement(u.a,null,r.a.createElement(E,{style:{margin:"0 16px"}},t)))},k=function(){return r.a.createElement("div",{"data-testid":"home-page"},"Home")},y=a(131),j=a(453),x=a(451),O=j.a.TextArea,S=function(e){var t=e.title,a=e.value,n=e.onChange,l=e.disabled,c=e.placeholder;return r.a.createElement(x.a,{title:t,bodyStyle:{height:"100%"},headStyle:{textAlign:"center"}},r.a.createElement("div",{className:"text-container"},r.a.createElement(O,{placeholder:c,className:"textarea-input",value:a,autoSize:{minRows:10},onChange:function(e){return n(e.target.value)},disabled:l})))};S.defaultProps={title:"",value:"",onChange:function(){},disabled:!1,placeholder:b.a.string};var C=S,w=(a(288),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),u=o[0],s=o[1];return r.a.createElement("div",{className:"app","data-testid":"brainfuck-page"},r.a.createElement(C,{disabled:!1,value:a,onChange:function(e){var t=e.replace(/[^.[\] +\-><\n]/g,"");l(t)},title:"Code",placeholder:"Insert brainfuck code here"}),r.a.createElement(y.a,{className:"translate-button",onClick:function(){for(var e=a.replace(/[ \n]/g,""),t=0,n=[0],r="",l=0,c=0;c<e.length;){switch(e[c]){case".":r+=String.fromCharCode(n[t]);break;case"[":if(0===n[t])for(c+=1;"]"!==e[c]||0!==l;)"["===e[c]&&(l+=1),"]"===e[c]&&(l-=1),c+=1;break;case"]":if(0!==n[t])for(c-=1;"["!==e[c]||0!==l;)"]"===e[c]&&(l+=1),"["===e[c]&&(l-=1),c-=1;break;case"+":255===n[t]&&(n[t]=-1),n[t]+=1;break;case"-":0===n[t]&&(n[t]=256),n[t]-=1;break;case">":n[t+=1]||n.push(0);break;case"<":t>0&&(t-=1)}c+=1}s(r)},type:"primary"},"Translate ->"),r.a.createElement(C,{disabled:!0,value:u,title:"Translation",placeholder:"Translation here"}))}),N=a(199),M=function(e){var t=e.color,a=e.index,n=e.onMouseDown,l=e.onHover,c=e.testid;return r.a.createElement("div",{"data-testid":c,style:{backgroundColor:t,height:"100%",width:"100%",borderRight:"1px solid black",borderBottom:"1px solid black"},onMouseDown:function(){return n(a)},onMouseOver:function(){return l(a)}})};M.defaultProps={color:"",onMouseDown:function(){},onHover:function(){},testid:null};var D=M,I=(a(446),function(){var e=Object(n.useState)({r:0,g:0,b:0,a:1}),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(Array.from(Array(256)).fill({r:0,g:0,b:0,a:0})),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),f=d[0],p=d[1],b=function(e){var t=JSON.parse(JSON.stringify(u));t[e]=a,s(t)},h=function(e){p(!0),b(e)},E=function(e){f&&b(e)},g=u.map((function(e,t){return r.a.createElement(D,{key:t,color:"rgba(".concat(e.r,",").concat(e.g,",").concat(e.b,",").concat(e.a,")"),index:t,onHover:E,onMouseDown:h})}));return r.a.createElement("div",{style:{display:"flex"},"data-testid":"pixelart-page",onMouseUp:function(){p(!1)},draggable:!1,onDragStart:function(){return!1},className:"unselectable"},r.a.createElement("div",{className:"pixel-grid"},g),r.a.createElement(N.ChromePicker,{onChange:function(e){l(e.rgb)},color:a}))}),P=function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/brainfuck",component:w}),r.a.createElement(h.a,{path:"/pixelart",component:I}),r.a.createElement(h.a,{path:"/",component:k}))};a(447);var A=function(){return r.a.createElement(o.a,{basename:"/myPortfolioSite"},r.a.createElement(v,null,r.a.createElement(P,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.618730d9.chunk.js.map