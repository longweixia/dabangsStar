(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"08b9":function(t,e,n){"use strict";n.r(e);var i=n("2e1c"),a=n("7dda");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3616");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6537be65",null,!1,i["a"],s);e["default"]=r.exports},"2e1c":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uSwiper:function(){return n.e("node-modules/uview-ui/components/u-swiper/u-swiper").then(n.bind(null,"e118"))},uImage:function(){return n.e("node-modules/uview-ui/components/u-image/u-image").then(n.bind(null,"2bec"))},uToast:function(){return n.e("node-modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,"1664"))}},a=function(){var t=this,e=t.$createElement,i=(t._self._c,n("06e1")),a=n("0b97"),o=t.topThreeList.length>1?t.__map(t.topThreeList,(function(e,i){var a=t.__get_orig(e),o=1===i?n("0b97"):null;return{$orig:a,m2:o}})):null,s=n("2264"),u=n("8d79");t.$mp.data=Object.assign({},{$root:{m0:i,m1:a,l0:o,m3:s,m4:u}})},o=[]},3616:function(t,e,n){"use strict";var i=n("9188"),a=n.n(i);a.a},"7dda":function(t,e,n){"use strict";n.r(e);var i=n("7fcd"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"7fcd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){n.e("components/home/ranking-tab-no").then(function(){return resolve(n("106b"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/home/ranking-tab-hasText").then(function(){return resolve(n("f23c"))}.bind(null,n)).catch(n.oe)},o=function(){n.e("components/home/star-ranking-list").then(function(){return resolve(n("8209"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/dabangModal/index").then(function(){return resolve(n("218f"))}.bind(null,n)).catch(n.oe)},u={name:"home",components:{rankingTabNo:i,rankingTabHasText:a,starRankingList:o,DabangModal:s},data:function(){return{starId:"",showModal:!1,swiperList:[],myGuardList:[{image:"https://cdn.uviewui.com/uview/swiper/1.jpg",name:"邓伦"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",name:"邓伦"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",name:"邓伦"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",name:"邓伦"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",name:"邓伦"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",name:"邓伦"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",name:"邓伦"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",name:"邓伦"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",name:"邓伦"}],raningTypeList:[{type:"周榜",text:"我",rankType:0},{type:"月榜",text:"爱",rankType:1},{type:"粉丝榜",text:"邓",rankType:2},{type:"月总榜",text:"伦",rankType:3}],iconList:{icon3:"../../static/home/AnCrown3.png",icon1:"../../static/home/AnCrown2.png",icon2:"../../static/home/AnCrown1.png"},topThreeList:[],rankingList:[],tagList:[{text:""},{text:""},{text:""},{text:""}],sloganTextFlag:!1}},mounted:function(){this.$emit("footer",!1),this.getMyInfo(),this.getRankList(),this.carouselList(),this.selectMyGuard()},methods:{colrdo:function(){this.$refs.lffBarrage.add({item:"王明 打榜了20热力值"})},closeDabang:function(){this.showModal=!1},dabang:function(t){console.log(t,"ui"),this.starId=t,this.showModal=!0},getMyInfo:function(){var t=this;this.$u.get("/personalCenter/personalCenterInfo").then((function(e){e.slogan?(t.sloganTextFlag=!0,t.tagList.forEach((function(n,i){t.tagList[i].text=e.slogan[i]}))):t.sloganFlag=!1})).catch((function(e){t.$toLogin(e)}))},selectMyGuard:function(){var t=this;this.$u.post("/home/selectMyGuard").then((function(e){t.myGuardList=e.list})).catch((function(e){t.$toLogin(e)}))},getRankList:function(){var t=this;this.$u.post("/home/weekRank/list",{pageNum:1,pageSize:20,rankType:2}).then((function(e){var n={list:[{weekTime:null,month:null,starName:"test0",starAvatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg",starId:"1",rank:1,totalVigourVal:"20",sortType:0},{weekTime:null,month:null,starName:"test1",starAvatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg",starId:"1",rank:2,totalVigourVal:"20",sortType:0},{weekTime:null,month:null,starName:"test2",starAvatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg",starId:"1",rank:3,totalVigourVal:"20",sortType:0},{weekTime:null,month:null,starName:"test3",starAvatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg",starId:"1",rank:1,totalVigourVal:"20",sortType:0},{weekTime:null,month:null,starName:"test4",starAvatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg",starId:"1",rank:1,totalVigourVal:"20",sortType:0}]},i=n.list.slice(0,3);if(i.length>1){var a=[i[1],i[0]];i[0]=a[0],i[1]=a[1]}t.topThreeList=i,n.list.length>3&&(t.rankingList=n.list.slice(3))})).catch((function(e){t.$toLogin(e)}))},carouselList:function(){var t=this;this.$u.get("/home/carousel/list").then((function(e){t.swiperList=e}))},clickSwiper:function(t){console.log(t)},routerSearch:function(){t.navigateTo({url:"/pages/search/search"})},routerStarDetail:function(e){t.navigateTo({url:"/pages/starDetail/starDetail?id=".concat(e)})},routerToCenter:function(){t.navigateTo({url:"/pages/center/index"})}}};e.default=u}).call(this,n("543d")["default"])},9188:function(t,e,n){},b20a:function(t,e,n){"use strict";(function(t){n("da3e");i(n("66fd"));var e=i(n("08b9"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["b20a","common/runtime","common/vendor"]]]);