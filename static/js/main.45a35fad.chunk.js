(this.webpackJsonpletters=this.webpackJsonpletters||[]).push([[0],{19:function(e,t,n){e.exports=n(37)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),i=(n(24),n(25),n(26),n(4)),l=(n(27),n(2)),u="ARTICLE_RANDOM_REQUEST",s="ARTICLE_RANDOM_SUCCESS",m="ARTICLE_RANDOM_FAILURE",f="ARTICLE_VOICE_SUCCESS",d="ARTICLE_VOICE_FAILURE",E="ARTICLE_CLEAR",v=n(18),b=Object(v.a)(),h="https://letter-to.herokuapp.com",p={getRandom:function(){return fetch("".concat(h,"/article/random"),{method:"GET"}).then(O)},createArticle:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(h,"/article/create"),t).then(O)}};function O(e){return e.text().then((function(e){return e&&JSON.parse(e)}))}var S={random:function(){return function(e){e({type:u}),p.getRandom().then((function(t){return e(function(e){return{type:s,article:e}}(t.data.article[0]))}),(function(t){return e(function(e){return{type:m,error:e}}(t.toString()))}))}},successVoice:function(e){return{type:f,voice:e}},errorVoice:function(e){return{type:d,voice:e}}};var g="Daniel",y="Carmit",C=function(e){var t=new SpeechSynthesisUtterance,n=speechSynthesis.getVoices(),c=Object(r.useState)(!1),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(l.c)((function(e){return e.article})),f=(Object(l.c)((function(e){return e.voice})),Object(l.b)());Object(r.useEffect)((function(){f(S.random()),document.querySelector('[name="voice"]')}),[]);var d=function(e){if(console.log(e),console.log(g,y),e!==g&&e!==y)f(S.random());else{var r=e;t.voice=n.find((function(e){return e.name===r}))}setTimeout((function(){t.text=document.getElementById("tsx").innerHTML,speechSynthesis.speak(t)}),3e3)};return a.a.createElement("div",{id:"message",className:" "},a.a.createElement("div",null,a.a.createElement("button",{className:"btn btn-primary",onClick:function(){s(!u)}},"Voice")),a.a.createElement("div",{className:u?"show":"none"},a.a.createElement("button",{className:"btn btn-primary",onClick:function(){return d(g)}},"English"),a.a.createElement("button",{className:"btn btn-primary",onClick:function(){return d(y)}},"Hebrew")),a.a.createElement("div",{className:"border border-1 child-borders note  "},a.a.createElement("div",{id:"tttt",className:""},m.loading&&a.a.createElement("em",null,"Loading random-article..."),m.error&&a.a.createElement("span",{className:"text-danger"},"ERROR: ",m.error),m.randomArticle&&a.a.createElement("div",{id:"tsx",className:"note"},m.randomArticle.article))),a.a.createElement("button",{className:"btn btn-primary",onClick:d},"Next"))},N=n(6),R=n(14),A=(n(33),"ARTICLE_POST_REQUEST"),j="ARTICLE_POST_SUCCESS",T="ARTICLE_POST_FAILURE",_="ARTICLE_FORM",w={postArticle:function(e){return function(t){t(function(e){return{type:A,article:e}}(e)),p.createArticle(e).then((function(e){t(function(e){return{type:j,article:e}}(e)),b.push("/")}),(function(e){t(function(e){return{type:T,error:e}}(e.toString()))}))}}};var I=function(){var e=Object(r.useState)({article:"Dear WebSite,"}),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),s=(u[0],u[1]),m=n.article,f=Object(l.b)();return Object(r.useEffect)((function(){f({type:_})}),[]),a.a.createElement("div",{id:"form"},a.a.createElement("div",{className:" "},a.a.createElement("form",{id:"article-text",name:"form",onSubmit:function(e){e.preventDefault(),s(!0),m&&"Dear WebSite,"!==m&&(f(w.postArticle({article:m,type:"crazy"})),console.log(e.target),c({article:"Dear WebSite,"}))}},a.a.createElement("div",{className:"form-group"},a.a.createElement("textarea",{className:"note",id:"article-text",name:"article",value:m,onChange:function(e){var t=e.target,n=t.name,r=t.value;c((function(e){return Object(R.a)({},e,Object(N.a)({},n,r))}))}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("button",{className:"btn btn-primary"},"Send")))))},L=n(8),k=n.n(L),x=(n(35),function(){var e=Object(r.useState)(86400),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){n>0&&setTimeout((function(){return c(n-1)}),1e3)}),[n]),a.a.createElement("div",{className:"timer"},a.a.createElement("div",null,"Countdown: ",k.a.duration(n,"seconds").format("hh:mm:ss")))}),D=(n(36),function(){return a.a.createElement("div",{className:"footer border border-1 note"},a.a.createElement("div",null,a.a.createElement("a",{href:"https://ko-fi.com/buy_me_cofee"},"Buy me a coffee on Ko-fi "),"\xb7 Support me on Patreon"))}),U=function(){return a.a.createElement("div",null,a.a.createElement("div",{id:"header",className:"full-rotate"},a.a.createElement("h1",null,"This website will self destruct ",a.a.createElement("span",null,a.a.createElement(x,null))),a.a.createElement(C,null)),a.a.createElement("div",{id:"header",className:"full-rotate"},a.a.createElement(I,null)),a.a.createElement("div",{id:"header",className:"full-rotate"},a.a.createElement(D,null)))};var M=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=n(3),W=n(15),P=n(16);var B=Object(V.combineReducers)({article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{loading:!0};case s:return{randomArticle:t.article};case m:return{error:t.error};case E:return{};default:return e}},form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{post:!0};case j:case T:case _:return{};default:return e}},voice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{voice:t.voice};case d:return{error:t.error};default:return e}}}),F=n(17),J=Object(P.createLogger)(),H=Object(V.createStore)(B,Object(F.composeWithDevTools)(Object(V.applyMiddleware)(W.a,J)));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:H},a.a.createElement(M,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.45a35fad.chunk.js.map