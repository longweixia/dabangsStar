(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/rangkingList"],{"1bdb":function(n,t,e){"use strict";(function(n){e("da3e");i(e("66fd"));var t=i(e("6f5e"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},6444:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){e.e("components/btn-nav/btn-nav").then(function(){return resolve(e("65a0"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/ranking-list/ranking-list").then(function(){return resolve(e("dc90"))}.bind(null,e)).catch(e.oe)},a={components:{BtnNav:i,RankingList:u},data:function(){return{hasData:!0,rankingList:[],rankingList1:[{icon:"皇冠",image:"https://cdn.uviewui.com/uview/swiper/3.jpg",num:"4",name:"邓伦周榜",val:500},{icon:"皇冠",image:"https://cdn.uviewui.com/uview/swiper/3.jpg",num:"5",name:"周超",val:"+234234热力值"},{icon:"皇冠",image:"https://cdn.uviewui.com/uview/swiper/3.jpg",num:"6",name:"黄晓明",val:"+234234热力值"},{icon:"皇冠",image:"https://cdn.uviewui.com/uview/swiper/3.jpg",num:"7",name:"黄晓明",val:"+234234热力值"}],rankingList2:[{icon:"皇冠",image:"https://cdn.uviewui.com/uview/swiper/3.jpg",num:"1",name:"邓伦月榜",val:"+234234热力值"},{icon:"皇冠",image:"https://cdn.uviewui.com/uview/swiper/3.jpg",num:"2",name:"周超",val:"+234234热力值"},{icon:"皇冠",image:"https://cdn.uviewui.com/uview/swiper/3.jpg",num:"3",name:"黄晓明",val:100}],btnList:["周榜","月榜","总榜","粉丝榜"],rankType:null}},onLoad:function(n){this.rankType=Number(n.type)},mounted:function(){this.changebtn(this.rankType)},methods:{changebtn:function(n){var t=this;console.log(n),this.rankType=n,this.$u.post("/home/weekRank/list",{pageNum:1,pageSize:20,rankType:n}).then((function(n){t.rankingList=n.list,n.list&&n.list.length>0?t.hasData=!0:t.hasData=!1})).catch((function(n){t.$toLogin(n)}))}}};t.default=a},"6f5e":function(n,t,e){"use strict";e.r(t);var i=e("9b35"),u=e("d518");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("7cc5");var c,o=e("f0c5"),s=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"5fabd328",null,!1,i["a"],c);t["default"]=s.exports},"7cc5":function(n,t,e){"use strict";var i=e("9753"),u=e.n(i);u.a},9753:function(n,t,e){},"9b35":function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var i={uToast:function(){return e.e("node-modules/uview-ui/components/u-toast/u-toast").then(e.bind(null,"1664"))}},u=function(){var n=this,t=n.$createElement;n._self._c},a=[]},d518:function(n,t,e){"use strict";e.r(t);var i=e("6444"),u=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=u.a}},[["1bdb","common/runtime","common/vendor"]]]);