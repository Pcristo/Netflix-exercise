(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(10),i=n.n(s),c=(n(22),n(3)),o=n.n(c),l=n(4),u=n(5),d=(n(24),"ab43306b48ce1d7e4c112545959f6496"),m=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/discover/tv?with_network=213&language=pt-PT&api_key=".concat(d));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais da Netflix",items:e.t0},e.next=6,m("/trending/all/week?language=pt-PT&api_key=".concat(d));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para ti",items:e.t2},e.next=10,m("/movie/top_rated?language=pt-PT&api_key=".concat(d));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Mais Vistos",items:e.t4},e.next=14,m("/discover/movie?with_genres=28&language=pt-PT&api_key=".concat(d));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,m("/discover/movie?with_genres=35&language=pt-PT&api_key=".concat(d));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,m("/discover/movie?with_genres=27&language=pt-PT&api_key=".concat(d));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,m("/discover/movie?with_genres=10749&language=pt-PT&api_key=".concat(d));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,m("/discover/movie?with_genres=99&language=pt-PT&api_key=".concat(d));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rios",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={},!t){e.next=15;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,m("/movie/".concat(t,"?language=pt-PT&api_key=").concat(d));case 7:return a=e.sent,e.abrupt("break",15);case 9:return e.next=11,m("/tv/".concat(t,"?language=pt-PT&api_key=").concat(d));case 11:return a=e.sent,e.abrupt("break",15);case 13:return a=null,e.abrupt("break",15);case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},g=(n(25),n(12)),b=n.n(g),h=n(14),p=n.n(h),f=n(1),v=function(e){var t=e.title,n=e.items,r=Object(a.useState)(-400),s=Object(u.a)(r,2),i=s[0],c=s[1];return Object(f.jsxs)("div",{className:"movieRow",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("div",{className:"navigation--left",onClick:function(){var e=i+Math.round(window.innerWidth/2);e>0&&(e=0),c(e)},children:Object(f.jsx)(b.a,{style:{fontsize:50}})}),Object(f.jsx)("div",{className:"navigation--right",onClick:function(){var e=i-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),c(e)},children:Object(f.jsx)(p.a,{style:{fontsize:50}})}),Object(f.jsx)("div",{className:"movieRow--listarea",children:Object(f.jsx)("div",{className:"movieRow--list",style:{marginLeft:i,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(f.jsx)("div",{className:"movieRow--item",children:Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})},t)}))})})]})},x=(n(32),n(15)),O=n.n(x),w=n(16),k=n.n(w),_=function(e){var t=e.item,n=new Date(t.first_air_date),a=[];for(var r in t.genres)a.push(t.genres[r].name);return Object(f.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(f.jsx)("div",{className:"featured--vertical",children:Object(f.jsxs)("div",{className:"featured--horizontal",children:[Object(f.jsx)("div",{className:"featured--name",children:t.original_name}),Object(f.jsxs)("div",{className:"featured--info",children:[Object(f.jsx)("div",{className:"featured--points",children:t.vote_average}),Object(f.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(f.jsxs)("div",{className:"featured--season",children:[t.number_of_seasons," Temporada",1!=t.number_of_seasons?"s":""]})]}),Object(f.jsx)("div",{className:"featured--description",children:t.overview}),Object(f.jsxs)("div",{className:"featured--buttons",children:[Object(f.jsxs)("a",{href:"/watch/".concat(t.id),className:"button--left",children:[" ",Object(f.jsx)(O.a,{className:"playarrow"}),"Assistir"]}),Object(f.jsxs)("a",{href:"/list/add".concat(t.id),className:"button--right",children:[Object(f.jsx)(k.a,{className:"playarrow"})," Minha Lista"]})]}),Object(f.jsxs)("div",{className:"featured--genres",children:[Object(f.jsx)("strong",{children:"G\xeaneros:"})," ",a.join(", ")]})]})})})},N=(n(33),function(e){var t=e.black;return Object(f.jsxs)("header",{className:t?"black":"",children:[Object(f.jsx)("div",{className:"header--logo",children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png",alt:"Netflix-Logo"})})}),Object(f.jsx)("div",{className:"header--usuario",children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{src:"https://cdn.iconscout.com/icon/premium/png-512-thumb/user-log-in-or-signup-988719.png",alt:"Usu\xe1rio"})})})]})}),y=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),i=Object(u.a)(s,2),c=i[0],d=i[1],m=Object(a.useState)(!1),g=Object(u.a)(m,2),b=g[0],h=g[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getHomeList();case 2:return t=e.sent,r(t),n=t.filter((function(e){return"originals"===e.slug})),a=Math.floor(Math.random()*(n[0].items.results.length-1)),s=n[0].items.results[a],e.next=9,j.getMovieInfo(s.id,"tv");case 9:i=e.sent,d(i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e=function(){window.scrollY>20?h(!0):h(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(f.jsxs)("div",{className:"page",children:[Object(f.jsx)(N,{black:b}),c&&Object(f.jsx)(_,{item:c}),Object(f.jsx)("section",{className:"list",children:n.map((function(e,t){return Object(f.jsx)(v,{title:e.title,items:e.items},t)}))}),Object(f.jsx)("footer",{children:"Website Constru\xeddo Apenas Com O Objetivo de Aprendizagem Em Programa\xe7\xe3o  React JS"}),n.length<=0&&Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)("img",{src:"https://i.pinimg.com/originals/9a/02/aa/9a02aac51ed499e01518ac73dd954eb1.gif",alt:"Caregando"})})]})};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.6faeeeba.chunk.js.map