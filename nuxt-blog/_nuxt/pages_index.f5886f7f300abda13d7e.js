webpackJsonp([5],{"/TYz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Wfs3"),r=n("r/O4"),a=n("XyMi"),i=Object(a.a)(s.a,r.a,r.b,!1,null,null,null);i.options.__file="pages\\index.vue",e.default=i.exports},Wfs3:function(t,e,n){"use strict";var s=n("Xxa5"),r=n.n(s),a=n("exGp"),i=n.n(a);e.a={fetch:function(){var t=i()(r.a.mark(function t(e){var n=e.store;e.params;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.dispatch("setPosts");case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},"r/O4":function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return r});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{staticClass:"intro",attrs:{wrap:""}},[n("v-flex",[n("h1",{staticClass:"display-1"},[t._v("Get the latest tech news!")]),n("v-btn",{on:{click:function(e){t.$router.push("/admin")}}},[t._v("admin")])],1),n("PostsPostList",{attrs:{posts:t.$store.getters.posts}})],1)],1)},r=[];s._withStripped=!0}});