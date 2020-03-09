(this["webpackJsonpnote-app"]=this["webpackJsonpnote-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),o=a.n(c),l=a(28),s=a.n(l),u=(a(37),a(13)),i=a(8),m=a(11),p=Object(c.createContext)(),E=Object(c.createContext)(),d=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(c.useContext)(p),l=Object(c.useContext)(E);return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.trim()?(l.addNote(a.trim()).then((function(){r.show("Note created","success")})).catch((function(){r.show("Oops, something wrong","danger")})),n("")):r.show("Enter note name")}},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter note name",value:a,onChange:function(e){return n(e.target.value)}})))},b=function(e){var t=e.notes,a=e.onRemove,n=Object(c.useContext)(p);return o.a.createElement("ul",{className:"list-group"},t.map((function(e){return o.a.createElement("li",{className:"list-group-item note",key:e.id},o.a.createElement("div",null,o.a.createElement("strong",null,e.title),o.a.createElement("small",null,e.date)),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:function(){a(e.id),n.show("Note deleted","danger")}},"\xd7"))})))},v=function(){return o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{className:"spinner-border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")))},f=function(){var e=Object(c.useContext)(E),t=e.loading,a=e.notes,n=e.fetchNotes,r=e.removeNote;return Object(c.useEffect)((function(){n()}),[]),o.a.createElement(c.Fragment,null,o.a.createElement(d,null),o.a.createElement("hr",null),t?o.a.createElement(v,null):o.a.createElement(b,{notes:a,onRemove:r}))},O=function(){return o.a.createElement("div",{className:"jumbotron"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"React Note App"),o.a.createElement("p",{className:"lead"},"version ",o.a.createElement("strong",null,"1.0"))))},N=function(){return o.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg bg-primary"},o.a.createElement("div",{className:"navbar-brand"},"Note App"),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(u.b,{className:"nav-link",to:"note-app/",exact:!0},"Main")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(u.b,{className:"nav-link",to:"note-app/about"},"About"))))},j=function(){var e=Object(c.useContext)(p),t=e.alert,a=e.hide;return t.visible?o.a.createElement("div",{className:"alert alert-".concat(t.type||"warning"," alert-dismissible")},o.a.createElement("strong",null,"Alert"),"\xa0",t.text,o.a.createElement("button",{onClick:a,type:"button",className:"close","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):null},h=a(4),y=a(6),g=(n={},Object(h.a)(n,"SHOW_ALERT",(function(e,t){var a=t.payload;return Object(y.a)({},a,{visible:!0})})),Object(h.a)(n,"HIDE_ALERT",(function(e){return Object(y.a)({},e,{visible:!1})})),Object(h.a)(n,"DEFAULT",(function(e){return e})),n),x=function(e,t){return(g[t.type]||g.DEFAULT)(e,t)},w=function(e){var t=e.children,a=Object(c.useReducer)(x,{visible:!1}),n=Object(m.a)(a,2),r=n[0],l=n[1];return o.a.createElement(p.Provider,{value:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";l({type:"SHOW_ALERT",payload:{text:e,type:t}})},hide:function(){return l({type:"HIDE_ALERT"})},alert:r}},t)},A=a(10),T=a.n(A),D=a(14),C=a.n(D),R=a(31),L=(r={},Object(h.a)(r,"SHOW_LOADER",(function(e){return Object(y.a)({},e,{loading:!0})})),Object(h.a)(r,"ADD_NOTE",(function(e,t){var a=t.payload;return Object(y.a)({},e,{notes:[].concat(Object(R.a)(e.notes),[a])})})),Object(h.a)(r,"FETCH_NOTES",(function(e,t){var a=t.payload;return Object(y.a)({},e,{notes:a,loading:!1})})),Object(h.a)(r,"REMOVE_NOTE",(function(e,t){var a=t.payload;return Object(y.a)({},e,{notes:e.notes.filter((function(e){return e.id!==a}))})})),Object(h.a)(r,"DEFAULT",(function(e){return e})),r),_=function(e,t){return(L[t.type]||L.DEFAULT)(e,t)},k="https://note-app-dc40f.firebaseio.com",S=function(e){var t=e.children,a=Object(c.useReducer)(_,{notes:[],loading:!1}),n=Object(m.a)(a,2),r=n[0],l=n[1],s=function(){return l({type:"SHOW_LOADER"})};return o.a.createElement(E.Provider,{value:{showLoader:s,addNote:function(e){var t,a,n;return T.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t={title:e,date:(new Date).toJSON()},r.prev=1,r.next=4,T.a.awrap(C.a.post("".concat(k,"/notes.json"),t));case 4:a=r.sent,n=Object(y.a)({},t,{id:a.data.name}),l({type:"ADD_NOTE",payload:n}),r.next=12;break;case 9:throw r.prev=9,r.t0=r.catch(1),new Error(r.t0.message);case 12:case"end":return r.stop()}}),null,null,[[1,9]])},removeNote:function(e){return T.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.awrap(C.a.delete("".concat(k,"/notes/").concat(e,".json")));case 2:l({type:"REMOVE_NOTE",payload:e});case 3:case"end":return t.stop()}}))},fetchNotes:function(){var e,t;return T.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return s(),a.next=3,T.a.awrap(C.a.get("".concat(k,"/notes.json")));case 3:e=a.sent,t=Object.keys(e.data||[]).map((function(t){return Object(y.a)({},e.data[t],{id:t})})),l({type:"FETCH_NOTES",payload:t});case 6:case"end":return a.stop()}}))},loading:r.loading,notes:r.notes}},t)};var H=function(){return o.a.createElement(S,null,o.a.createElement(w,null,o.a.createElement(u.a,null,o.a.createElement(N,null),o.a.createElement("div",{className:"container pt-4"},o.a.createElement(j,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"note-app/",exact:!0,component:f}),o.a.createElement(i.a,{path:"note-app/about",exact:!0,component:O}))))))};s.a.render(o.a.createElement(H,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d1e1f794.chunk.js.map