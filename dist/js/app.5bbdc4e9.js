(function(e){function t(t){for(var r,o,i=t[0],s=t[1],c=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"93a008aa","chunk-2d0c80c4":"2a8a1aad"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"ba872277","chunk-2d0c80c4":"31d6cfe0"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},4845:function(e,t,n){"use strict";var r=n("9c5a"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Login")]),e._v(" | "),n("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),n("div",{attrs:{id:"loggedin"}},[n("router-link",{attrs:{to:"/home"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],u=n("1157"),i=n.n(u),s={mounted:function(){""!=document.cookie?i()("#nav").addClass("d-none"):i()("#loggedin").addClass("d-none")}},c=s,l=(n("034f"),n("2877")),d=Object(l["a"])(c,o,a,!1,null,null,null),p=d.exports,f=(n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[e._m(0),n("input",{attrs:{id:"login-name",type:"text",placeholder:"Enter Username",name:"uname",required:""}}),n("span",{staticClass:"required d-none",attrs:{id:"l-error"}},[e._v("*Please enter login name")]),e._m(1),n("input",{attrs:{id:"password",type:"password",placeholder:"Enter Password",name:"psw",required:""}}),n("span",{staticClass:"required d-none",attrs:{id:"p-error"}},[e._v("*Please enter password")]),n("button",{attrs:{type:"submit"},on:{click:function(t){return e.checkCredentials()}}},[e._v("Login")])])])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"uname"}},[n("b",[e._v("Username")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"psw"}},[n("b",[e._v("Password")])])}],v=n("bc3a"),b=n.n(v),g={name:"Login",data:function(){return{response:!1}},methods:{checkCredentials:function(){var e=this,t=document.getElementById("login-name").value,n=document.getElementById("password").value;""==t?i()("#l-error").removeClass("d-none"):""==n?i()("#p-error").removeClass("d-none"):(i()("#l-error").addClass("d-none"),i()("#p-error").addClass("d-none"),b.a.get("UserManagement/checkCredentials",{params:{loginid:t,password:n}}).then((function(n){if(e.response=n.data,console.log(n),alert(n.data),1==n.data){var r=new Date;r.setTime(r.getTime()+864e5);var o="expires="+r.toUTCString();document.cookie="Token="+t+";"+o+";path=/",window.location.href="http://localhost:8080/Home"}})).catch((function(t){console.log(t),e.errored=!0})))}},mounted:function(){""!=document.cookie&&(window.location.href="http://localhost:8080/Home")}},y=g,w=(n("4845"),Object(l["a"])(y,m,h,!1,null,"8697f040",null)),_=w.exports;r["a"].use(f["a"]);var k=[{path:"/",name:"Login",component:_},{path:"/register",name:"Register",component:function(){return n.e("about").then(n.bind(null,"73cf"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/home",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/addfeedback/:id",name:"AddFeedback",component:function(){return n.e("chunk-2d0c80c4").then(n.bind(null,"52e6"))}}],C=new f["a"]({mode:"history",base:"/",routes:k}),E=C;b.a.defaults.baseURL="https://anonymousfeedback20200804045526.azurewebsites.net/api/",r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,n){},"9c5a":function(e,t,n){}});
//# sourceMappingURL=app.5bbdc4e9.js.map