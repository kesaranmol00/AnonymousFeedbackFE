(function(e){function t(t){for(var n,a,i=t[0],u=t[1],l=t[2],c=0,d=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({"about~register":"about~register",about:"about",register:"register","add feeback":"add feeback",home:"home"}[e]||e)+"."+{"about~register":"b124b9cd",about:"ff8d2f8b",register:"d7529756","add feeback":"6e70b8fa",home:"fd57f07f"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={about:1,register:1,"add feeback":1,home:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({"about~register":"about~register",about:"about",register:"register","add feeback":"add feeback",home:"home"}[e]||e)+"."+{"about~register":"31d6cfe0",about:"e5899464",register:"2da57682","add feeback":"dd058adf",home:"f0ada71c"}[e]+".css",o=u.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],c=l.getAttribute("data-href");if(c===n||c===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],m.parentNode.removeChild(m),r(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(m);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/AnonymousFeedbackFE/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"24d9":function(e,t,r){e.exports=r.p+"img/personal.0847dcbf.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("UnAuthHeader")],1),r("div",{attrs:{id:"loggedin"}},[r("AuthHeader")],1),r("router-view"),r("Footer"),r("div",{staticClass:"loader"})],1)},o=[],s=r("1157"),i=r.n(s),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("router-link",{attrs:{to:"/home"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.DeleteCookie()}}},[e._v("Log out")])],1)},l=[],c={methods:{DeleteCookie:function(){confirm("Are you sure you want to log out ?")&&(this.$cookies.remove("token"),i()("#nav").removeClass("d-none"),i()("#loggedin").addClass("d-none"),this.$router.push("/"))}}},d=c,m=r("2877"),f=Object(m["a"])(d,u,l,!1,null,null,null),p=f.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("router-link",{attrs:{to:"/"}},[e._v("Login")]),e._v(" | "),r("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)},g=[],b={},v=Object(m["a"])(b,h,g,!1,null,null,null),w=v.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"media-icon"},[n("span",[e._v(" For any query or complain, or want to know more about me "),n("i",{staticClass:"arrow right"})]),n("a",{attrs:{href:"mailto:anmolkesar24@gmail.com"}},[n("img",{staticClass:"social-media-icon",attrs:{alt:"img",src:r("f99c")}})]),n("a",{attrs:{href:"https://www.instagram.com/anmolkesar/",target:"_blank"}},[n("img",{staticClass:"social-media-icon",attrs:{alt:"img",src:r("c7f8")}})]),n("a",{attrs:{href:"https://www.linkedin.com/in/anmol-kesar-12872694/",target:"_blank"}},[n("img",{staticClass:"social-media-icon",attrs:{alt:"img",src:r("dd32")}})]),n("a",{attrs:{href:"https://twitter.com/KesarAnmol",target:"_blank"}},[n("img",{staticClass:"social-media-icon",attrs:{alt:"img",src:r("e4d7")}})]),n("a",{attrs:{href:"https://kesaranmol00.github.io/standardresume/",target:"_blank"}},[n("img",{staticClass:"social-media-icon",attrs:{alt:"img",src:r("24d9")}})])])])}],C=(r("7287"),{}),y=Object(m["a"])(C,k,_,!1,null,"6aab2409",null),x=y.exports,E={components:{AuthHeader:p,UnAuthHeader:w,Footer:x},data:function(){return{mobileView:!0}},mounted:function(){""!=document.cookie?i()("#nav").addClass("d-none"):i()("#loggedin").addClass("d-none")},methods:{handleView:function(){this.mobileView=window.innerWidth<=425}},created:function(){this.handleView()}},j=E,A=(r("034f"),Object(m["a"])(j,a,o,!1,null,null,null)),O=A.exports,P=(r("d3b7"),r("8c4f")),$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"unauth"},[r("form",{staticClass:"border border-light",attrs:{id:"login"},on:{submit:e.checkCredentials}},[e._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userid,expression:"userid"}],staticClass:"form-control mb-4 ",attrs:{id:"defaultLoginFormEmail",type:"text",placeholder:"Enter Username",required:""},domProps:{value:e.userid},on:{input:function(t){t.target.composing||(e.userid=t.target.value)}}}),e._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control mb-4",attrs:{id:"defaultLoginFormPassword",type:"password",placeholder:"Enter Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("br"),r("input",{staticClass:"btn btn-info btn-block my-4",attrs:{type:"submit",value:"Submit"}})])])},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",{staticClass:"text-left"},[r("span",{staticClass:"label label-default"},[e._v("Username :")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",{staticClass:"text-left"},[r("span",{staticClass:"label label-default"},[e._v("Password :")])])}],F=r("bc3a"),S=r.n(F),T={name:"Login",data:function(){return{response:!1,password:null,userid:null}},methods:{checkCredentials:function(){var e=this;i()(".loader").show(),S.a.get("UserManagement/checkCredentials",{params:{loginid:this.userid,password:this.password}}).then((function(t){e.response=t.data,console.log(t),alert(t.data),i()(".loader").hide(),1==t.data&&(e.$cookies.set("token",e.userid,2592e3),i()("#nav").addClass("d-none"),i()("#loggedin").removeClass("d-none"),e.$router.push("home"))})).catch((function(t){console.log(t),e.errored=!0}))}},mounted:function(){""!=document.cookie&&(i()("#nav").addClass("d-none"),i()("#loggedin").removeClass("d-none"),this.$router.push("home"))}},H=T,N=Object(m["a"])(H,$,L,!1,null,"0d792244",null),U=N.exports,q=r("2b27"),M=r.n(q);n["a"].use(M.a),n["a"].use(P["a"]);var D=[{path:"/",name:"Login",component:U},{path:"/register",name:"Register",component:function(){return Promise.all([r.e("about~register"),r.e("register")]).then(r.bind(null,"73cf"))}},{path:"/about",name:"About",component:function(){return Promise.all([r.e("about~register"),r.e("about")]).then(r.bind(null,"f820"))}},{path:"/home",name:"Home",component:function(){return r.e("home").then(r.bind(null,"bb51"))}},{path:"/addfeedback/:id",name:"AddFeedback",component:function(){return r.e("add feeback").then(r.bind(null,"52e6"))}}],V=new P["a"]({mode:"hash",base:"/AnonymousFeedbackFE/",routes:D}),B=V;r("4989"),r("ab8b");S.a.defaults.baseURL="https://anonymousfeedback20200804045526.azurewebsites.net/api/",n["a"].config.productionTip=!1,new n["a"]({router:B,render:function(e){return e(O)}}).$mount("#app")},7287:function(e,t,r){"use strict";var n=r("91e0"),a=r.n(n);a.a},"85ec":function(e,t,r){},"91e0":function(e,t,r){},c7f8:function(e,t,r){e.exports=r.p+"img/instagram.ed205532.png"},dd32:function(e,t,r){e.exports=r.p+"img/linkedin.5748590d.png"},e4d7:function(e,t,r){e.exports=r.p+"img/twitter.5f4016bd.png"},f99c:function(e,t,r){e.exports=r.p+"img/emailme.b3dfcee3.png"}});
//# sourceMappingURL=app.64adf699.js.map