webpackJsonp([5],{"4j/J":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("UOqr"),r=s("blCe"),a=s("XyMi"),i=Object(a.a)(n.a,r.a,r.b,!1,null,null,null);i.options.__file="pages\\posts\\index.vue",e.default=i.exports},UOqr:function(t,e,s){"use strict";var n=s("Dd8w"),r=s.n(n);e.a={asyncData:function(t){return t.app.$axios.$get("/posts.json").then(function(t){var e=[];for(var s in t)e.push(r()({},t[s],{id:s}));return{loadedPosts:e}}).catch(function(e){return t.error()})}}},blCe:function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return r});var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-layout",{staticClass:"intro",attrs:{tag:"section"}},[e("h1",{staticClass:"display-1"},[this._v("Get the latest tech news!")])]),e("PostList",{attrs:{posts:this.loadedPosts}})],1)},r=[];n._withStripped=!0}});