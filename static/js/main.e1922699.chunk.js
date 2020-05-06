(this.webpackJsonpletters=this.webpackJsonpletters||[]).push([[0],{19:function(e,t,n){e.exports=n(37)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),o=n.n(c),i=(n(24),n(25),n(26),n(4)),u=(n(27),n(2)),l="ARTICLE_RANDOM_REQUEST",s="ARTICLE_RANDOM_SUCCESS",m="ARTICLE_RANDOM_FAILURE",f="ARTICLE_VOICE_SUCCESS",E="ARTICLE_VOICE_FAILURE",d="ARTICLE_CLEAR",v="https://letter-to.herokuapp.com",p={getRandom:function(){return fetch("".concat(v,"/article/random"),{method:"GET"}).then(h)},createArticle:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(v,"/article/create"),t).then(h)}};function h(e){return e.text().then((function(e){return e&&JSON.parse(e)}))}var b={random:function(){return function(e){e({type:l}),p.getRandom().then((function(t){return e(function(e){return{type:s,article:e}}(t.data.article[0]))}),(function(t){return e(function(e){return{type:m,error:e}}(t.toString()))}))}},successVoice:function(e){return{type:f,voice:e}},errorVoice:function(e){return{type:E,voice:e}}};var S="Daniel",T="Carmit",R={getTimer:function(){return fetch("".concat("https://letter-to.herokuapp.com","/timer"),{method:"GET"}).then(g)}};function g(e){return e.text().then((function(e){return e&&JSON.parse(e)}))}var O=function(e){var t=new SpeechSynthesisUtterance,n=speechSynthesis.getVoices(),c=Object(r.useState)(!1),o=Object(i.a)(c,2),l=o[0],s=o[1],m=Object(u.c)((function(e){return e.article})),f=Object(u.b)();Object(r.useEffect)((function(){f(b.random()),document.querySelector('[name="voice"]')}),[]);var E=function(e){if(console.log(e),console.log(S,T),e!==S&&e!==T)f(b.random());else{var r=e;t.voice=n.find((function(e){return e.name===r}))}setTimeout((function(){t.text=document.getElementById("tsx").innerHTML,speechSynthesis.speak(t)}),2e3)};return a.a.createElement("div",{id:"message",className:" "},a.a.createElement("div",null,a.a.createElement("button",{className:"btn btn-primary",onClick:function(){s(!l)}},"Voice")),a.a.createElement("div",{className:l?"show":"none"},a.a.createElement("button",{className:"btn btn-primary",onClick:function(){return E(S)}},"English"),a.a.createElement("button",{className:"btn btn-primary",onClick:function(){return E(T)}},"Hebrew")),a.a.createElement("div",{className:"border border-1 child-borders note  "},a.a.createElement("div",{id:"tttt",className:""},m.loading&&a.a.createElement("em",null,"Loading random-article..."),m.error&&a.a.createElement("span",{className:"text-danger"},"ERROR: ",m.error),m.randomArticle&&a.a.createElement("div",{id:"tsx",className:"note"},m.randomArticle.article))),a.a.createElement("button",{className:"btn btn-primary",onClick:E},"Next"))},C=n(7),y=n(14),I=(n(33),"ARTICLE_POST_REQUEST"),_="ARTICLE_POST_SUCCESS",j="ARTICLE_POST_FAILURE",A="ARTICLE_FORM",N=n(18),w=Object(N.a)(),L={postArticle:function(e){return function(t){t(function(e){return{type:I,article:e}}(e)),p.createArticle(e).then((function(e){t(function(e){return{type:_,article:e}}(e)),w.push("/")}),(function(e){t(function(e){return{type:j,error:e}}(e.toString()))}))}}};var U=function(e){var t=Object(r.useState)({article:"Dear WebSite,"}),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(r.useState)(!1),s=Object(i.a)(l,2),m=(s[0],s[1]),f=c.article,E=Object(u.b)();Object(r.useEffect)((function(){E({type:A})}),[]);return a.a.createElement("div",{id:"form"},a.a.createElement("div",{className:" "},a.a.createElement("form",{id:"article-text",name:"form",onSubmit:function(t){t.preventDefault(),m(!0),f&&"Dear WebSite,"!==f&&(E(L.postArticle({article:f,type:"crazy"})),e.handleTimer(),console.log(t.target),o({article:"Dear WebSite,"}))}},a.a.createElement("div",{className:"form-group"},a.a.createElement("textarea",{className:"note",id:"article-text",name:"article",value:f,onChange:function(e){var t=e.target,n=t.name,r=t.value;o((function(e){return Object(y.a)({},e,Object(C.a)({},n,r))}))}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("button",{className:"btn btn-primary"},"Send")))))},M=n(5),k=n.n(M),x=(n(35),Object(r.forwardRef)((function(e,t){var n,c=Object(r.useState)(864e5),o=Object(i.a)(c,2),u=o[0],l=o[1];return Object(r.useImperativeHandle)(t,(function(){return{updateCounter:function(){clearTimeout(n),l(864e5)}}})),Object(r.useEffect)((function(){u>0&&(n=setTimeout((function(){return l(u-1e3)}),1e3))}),[u]),a.a.createElement("div",{className:"timer"},a.a.createElement("div",null,"Countdown: ",k.a.duration(u-e.startCounter,"milliseconds").format("hh:mm:ss")))}))),D=(n(36),function(){return a.a.createElement("div",{className:"footer border border-1 note"},a.a.createElement("div",{className:"footer-container"},a.a.createElement("a",{href:"https://ko-fi.com/buy_me_cofee"},"Buy me a coffee "),a.a.createElement("a",{href:"https://www.patreon.com/support_startup"},"Support me on Patreon")))}),F={TIMER_SUCCESS:"TIMER_SUCCESS",TIMER_REQUEST:"TIMER_REQUEST",TIMER_FAILURE:"TIMER_FAILURE"},Q={successTimer:function(){return function(e){e({type:F.TIMER_REQUEST}),R.getTimer().then((function(t){console.log(t);var n=t.data.timer[0].startTime;console.log(n);var r=new Date;console.log(r);var a=k()(r).diff(k()(n));return e(function(e){return{type:F.TIMER_SUCCESS,timer:e}}(a))}),(function(t){return e(function(e){return{type:F.TIMER_FAILURE,error:e}}(t.toString()))}))}}};var V=function(){var e=Object(u.c)((function(e){return e.timer}));console.log(e);var t=Object(r.useRef)(),n=Object(u.b)();Object(r.useEffect)((function(){n(Q.successTimer()),setInterval((function(){return n(Q.successTimer())}),6e4)}),[]);return a.a.createElement("div",null,a.a.createElement("div",{id:"header",className:"full-rotate"},a.a.createElement("h1",null,"This website will self destruct ",a.a.createElement("span",null,a.a.createElement(x,{ref:t,startCounter:e.timer}))),a.a.createElement(O,null)),a.a.createElement("div",{id:"header",className:"full-rotate"},a.a.createElement(U,{handleTimer:function(){console.log("handleTimer"),n(Q.successTimer()),t.current.updateCounter()}})),a.a.createElement("div",{id:"header",className:"full-rotate"},a.a.createElement(D,null)))};var W=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(3),P=n(15),B=n(16);var H=Object(J.combineReducers)({article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return{loading:!0};case s:return{randomArticle:t.article};case m:return{error:t.error};case d:return{};default:return e}},form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{post:!0};case _:case j:case A:return{};default:return e}},voice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{voice:t.voice};case E:return{error:t.error};default:return e}},timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.TIMER_REQUEST:return{loading:!0};case F.TIMER_SUCCESS:return{timer:t.timer};case F.TIMER_FAILURE:return{error:t.error};default:return e}}}),G=n(17),q=Object(B.createLogger)(),z=Object(J.createStore)(H,Object(G.composeWithDevTools)(Object(J.applyMiddleware)(P.a,q)));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{store:z},a.a.createElement(W,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e1922699.chunk.js.map