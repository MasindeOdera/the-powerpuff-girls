(this["webpackJsonpthe-powerpuff-girls"]=this["webpackJsonpthe-powerpuff-girls"]||[]).push([[0],{119:function(e,t,n){e.exports=n(248)},124:function(e,t,n){},125:function(e,t,n){},130:function(e,t,n){},246:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r);n(124),n(125);var l=function(){return o.a.createElement("div",{className:"Path"},o.a.createElement("b",null,"Home / Shows / The Powerpuff Girls"))},i=n(14);n(130);var u=function(){var e=Object(i.c)((function(e){return e})),t=Object(i.b)();return console.log("State from Navigation: ",e),o.a.createElement("div",{className:"Navigation"},o.a.createElement("button",{onClick:function(){return t({type:"DISPLAY",payload:e.initialData})}},o.a.createElement("b",null,"Main")),o.a.createElement("button",null,o.a.createElement("b",null,"Episodes")))},s=n(110),m=n(254),f=n(99),E=n.n(f);var p=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(i.b)();Object(a.useEffect)((function(){fetch("https://api.tvmaze.com/singlesearch/shows?q=the-powerpuff-girls").then((function(e){return e.json()})).then((function(e){console.log({data:e}),r(e)}))}),[]),Object(a.useEffect)((function(){c({type:"DISPLAY",payload:n})}));var l=Object(i.c)((function(e){return e.initialData.image}));return console.log("State from Main.js: ",{initialData:n}),console.log(n.image),n&&console.log(n.image.medium),o.a.createElement("div",null,o.a.createElement(m.a.Group,null,o.a.createElement(m.a,null,o.a.createElement(m.a.Image,{size:"small",src:void 0!==l?l.medium:E.a}),o.a.createElement(m.a.Description,null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.summary}})))))};n(246);var h=function(){var e=Object(i.c)((function(e){return e.counter})),t=Object(i.b)();return o.a.createElement("div",{className:"App"},o.a.createElement(l,null),o.a.createElement("header",{className:"App-header"},o.a.createElement("h3",null,"The Powerpuff Girls")),o.a.createElement(u,null),o.a.createElement("h2",null,"Counter: ",e),o.a.createElement("button",{onClick:function(){return t({type:"INCREMENT"})}},"INCREMENT"),o.a.createElement("button",{onClick:function(){return t({type:"DECREMENT"})}},"DECREMENT"),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=n(43),b=n(23),v={counter:0,info:"Hello World!",description:"Not a lot options on the horizon, but you never know...",initialData:{}};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return Object(b.a)(Object(b.a)({},e),{},{counter:e.counter+1});case"DECREMENT":return Object(b.a)(Object(b.a)({},e),{},{counter:e.counter-1});case"DISPLAY":return Object(b.a)(Object(b.a)({},e),{},{initialData:t.payload});default:return e}},j=(n(247),Object(d.b)(g));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:j},o.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,n){e.exports=n.p+"static/media/placeholder.d6af9c9e.png"}},[[119,1,2]]]);
//# sourceMappingURL=main.d63c16da.chunk.js.map