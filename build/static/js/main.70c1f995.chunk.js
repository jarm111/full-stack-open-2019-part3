(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(40)},21:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=(t(21),t(14)),i=t(2),l=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.onSubmit,t=e.name,a=e.onNameChange,o=e.number,c=e.onNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:o,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=function(e){var n=e.person,t=e.onRemove,a=n.name,o=n.number;return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,o),r.a.createElement("td",null,r.a.createElement("button",{type:"button",onClick:t},"delete")))},s=function(e){var n=e.persons,t=e.nameFilter,a=e.onRemove;return r.a.createElement("table",null,r.a.createElement("tbody",null,(t?n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}):n).map(function(e,n){return r.a.createElement(f,{key:e.id,person:e,onRemove:function(){return a(e.id)}})})))},d=t(3),b=t.n(d),v="/api/persons",h=function(){return b.a.get(v).then(function(e){return e.data})},E=function(e){return b.a.post(v,e).then(function(e){return e.data})},p=function(e){return b.a.delete("".concat(v,"/").concat(e))},w=function(e,n){return b.a.put("".concat(v,"/").concat(e),n).then(function(e){return e.data})},g=(t(39),function(e){var n=e.message,t=e.type;if(null===n)return null;return r.a.createElement("div",{className:"notification ".concat({success:"notification-success",error:"notification-error"}[t])},n)}),j=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),f=Object(i.a)(c,2),d=f[0],b=f[1],v=Object(a.useState)(""),j=Object(i.a)(v,2),C=j[0],O=j[1],y=Object(a.useState)(""),S=Object(i.a)(y,2),k=S[0],N=S[1],R=Object(a.useState)(null),L=Object(i.a)(R,2),I=L[0],D=L[1],F=Object(a.useState)("success"),J=Object(i.a)(F,2),x=J[0],A=J[1];Object(a.useEffect)(function(){h().then(function(e){o(e)})},[]);var B=function(e,n){D(e),A(n),setTimeout(function(){D(null)},5e3)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(g,{message:I,type:x}),r.a.createElement(l,{value:k,onChange:function(e){return N(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{onSubmit:function(e){e.preventDefault();var n=t.find(function(e){return e.name.toLowerCase()===d.trim().toLowerCase()});void 0!==n?function(e){if(window.confirm("".concat(e.name," is already added to phonebook, replace the old number with a new one?"))){var n=Object(u.a)({},e,{number:C});w(e.id,n).then(function(e){return o(t.map(function(n){return n.id!==e.id?n:e})),e}).then(function(e){B("Updated ".concat(e.name,"'s number"),"success")}).catch(function(n){B("Information of ".concat(e.name," has already been removed from the server"),"error"),o(t.filter(function(n){return n.id!==e.id}))})}}(n):(E({name:d.trim(),number:C.trim()}).then(function(e){return o(t.concat(e)),e}).then(function(e){B("Added ".concat(e.name),"success")}),b(""),O(""))},name:d,onNameChange:function(e){return b(e.target.value)},number:C,onNumberChange:function(e){return O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{persons:t,nameFilter:k,onRemove:function(e){var n=t.find(function(n){return n.id===e}).name;window.confirm("Delete ".concat(n," ?"))&&p(e).then(function(){o(t.filter(function(n){return n.id!==e}))}).then(function(){B("Removed ".concat(n),"success")}).catch(function(a){B("Information of ".concat(n," has already been removed from the server"),"error"),o(t.filter(function(n){return n.id!==e}))})}}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.70c1f995.chunk.js.map