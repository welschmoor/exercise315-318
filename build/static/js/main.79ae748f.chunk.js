(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{27:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(20),i=t.n(a),o=(t(27),t(22)),u=t(10),s=t(3),d=t(4),l=t.n(d),j=t(21),b=t.n(j),h=t(0),f=function(e){var n=e.onChange;return Object(h.jsxs)(h.Fragment,{children:["Search: ",Object(h.jsx)("input",{input:"text",placeholder:"search contacts",onChange:n})]})},O=function(e){var n=e.sending,t=n.submitHandler,c=n.newName,r=n.inputHandler,a=n.inputHandler2,i=n.newPhone;return Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:c,onChange:r,required:!0})]}),Object(h.jsxs)("div",{children:["phone: ",Object(h.jsx)("input",{value:i,onChange:a,required:!0})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},m=function(e){var n=e.children,t=e.clickHandler,c=e.id;return Object(h.jsxs)("button",{onClick:function(){window.confirm("you sure?")&&t(c)},children:[" ",n]})},p=function(e){var n=e.sending,t=n.filter,c=n.persons,r=n.deleteHandler;return console.log(c),Object(h.jsxs)("ul",{children:[!t&&c.map((function(e){return Object(h.jsxs)("li",{children:[e.name," ",e.number," ",Object(h.jsx)(m,{children:"delete",clickHandler:r,id:e.id})]},e.id)})),t&&c.filter((function(e){if(e.name.toLowerCase().includes(t.toLowerCase()))return!0})).map((function(e){return Object(h.jsxs)("li",{children:[e.name," ",e.number," ",Object(h.jsx)(m,{children:"delete",clickHandler:r,id:e.id})]},e.id)}))]})},x="/api/persons",v=function(e){var n=e.message,t=e.whatkind;return null===n?null:Object(h.jsx)("div",{className:t,children:n})},g=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),d=i[0],j=i[1],m=Object(c.useState)(""),g=Object(s.a)(m,2),w=g[0],k=g[1],C=Object(c.useState)(""),H=Object(s.a)(C,2),S=H[0],L=H[1],y=Object(c.useState)(null),N=Object(s.a)(y,2),E=N[0],P=N[1],q=Object(c.useState)(null),D=Object(s.a)(q,2),J=D[0],T=D[1];Object(c.useEffect)((function(){var e=!1;return l.a.get(x,{headers:{accepts:"application/json"}}).then((function(e){return e.data})).then((function(n){e||r(n)})).catch((function(e){return console.error(e)})),function(){e=!0}}),[]);return Object(h.jsxs)("center",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(f,{onChange:function(e){L(e.target.value)}}),Object(h.jsx)("h2",{children:"+Add contact"}),Object(h.jsx)(v,{message:E,whatkind:"success"}),Object(h.jsx)(v,{message:J,whatkind:"error"}),Object(h.jsx)(O,{sending:{submitHandler:function(e){e.preventDefault();var n,c,a=!1;if(t.forEach((function(e){e.name.toLowerCase()===d.toLowerCase()&&(a=!0)})),a){if(window.confirm("Do you want to change the number?")){var i=t.find((function(e){return e.name.toLowerCase()===d.toLowerCase()})),s=Object(u.a)(Object(u.a)({},i),{},{number:w});return void(n=i.id,c=s,l.a.put(x+"/".concat(n),c).then((function(e){return e.data}))).then((function(e){r(t.map((function(e){return e.name===i.name?s:e})))})).catch((function(e){console.log(s),T("".concat(s.name," no longer in phone book!")),setTimeout((function(){T(null)}),4e3)}))}return alert("name ".concat(d," already exists!")),j(""),void k("")}var h,f={name:d.trim(),number:w.trim(),id:b()()};(h=f,l.a.post(x,h).then((function(e){return e.data}))).then((function(e){r([].concat(Object(o.a)(t),[e])),j(""),k(""),P("".concat(e.name," added to contacts!")),setTimeout((function(){P(null)}),4e3)}))},newName:d,inputHandler:function(e){j(e.target.value)},inputHandler2:function(e){k(e.target.value)},newPhone:w}}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(p,{sending:{filter:S,persons:t,deleteHandler:function(e){var n;(n=e,l.a.delete(x+"/".concat(n)).then((function(e){return e.data}))).then((function(n){r(t.filter((function(n){return n.id!==e})))}))}}})]})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.79ae748f.chunk.js.map