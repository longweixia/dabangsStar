(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/edit"],{"363a":function(e,n,t){"use strict";(function(e){t("da3e");o(t("66fd"));var n=o(t("7581"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},4854:function(e,n,t){},7581:function(e,n,t){"use strict";t.r(n);var o=t("fe12"),u=t("c262");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("c01a");var i,c=t("f0c5"),l=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=l.exports},c01a:function(e,n,t){"use strict";var o=t("4854"),u=t.n(o);u.a},c262:function(e,n,t){"use strict";t.r(n);var o=t("f1c1"),u=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=u.a},f1c1:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"BtnNav",components:{},props:["btnList","rankType"],data:function(){return{valueName:"",showNameModal:!1,myData:{},listChangeImg:[{text:"更换照片",color:"black",fontSize:28,fontWeight:"bold"}],listCamera:[{text:"拍照",color:"black",fontSize:28,fontWeight:"bold"},{text:"从手机相册选择",color:"black",fontSize:28,fontWeight:"bold"}],showChangeImg:!1,showCamera:!1,avatar:"https://cdn.uviewui.com/uview/common/logo.png"}},mounted:function(){this.getMyInfo()},methods:{getMyInfo:function(){var e=this;this.$u.get("/personalCenter/personalCenterInfo").then((function(n){e.myData=n})).catch((function(e){}))},changeHeader:function(){this.showChangeImg=!0},uploadCamera:function(){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["camera"],success:function(e){var n=e.tempFilePaths;console.log(n,"拍照")}})},uploadAlbum:function(){var n=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){var t=e.tempFilePaths;console.log(t,"相册"),n.goUploadImg(t)}})},showMoreImgBtn:function(e){this.showCamera=!0},clickCamera:function(e){console.log("点击了第".concat(e+1,"项")),0===e?this.uploadCamera():1===e&&this.uploadAlbum()},goUploadImg:function(n){var t=this;e.uploadFile({url:"https://123.207.120.31:18001/common/upload",fileType:"image",header:{Authorization:localStorage.getItem("Authorization")},filePath:n[0],name:"file",success:function(e){var n=JSON.parse(e.data);console.log(n.data),t.changeAvatarUrlApi(n.data)}})},changeAvatarUrlApi:function(e){var n=this;this.$u.post("/personalCenter/updatePersonalCenterInfo",{avatarUrl:e}).then((function(e){n.getMyInfo(),n.showNameModal=!1})).catch((function(e){n.$toLogin(e)}))},changeNamevalue:function(e){var n=this;this.$u.post("/personalCenter/updatePersonalCenterInfo",{nickName:e}).then((function(e){n.showNameModal=!1,n.getMyInfo()})).catch((function(e){n.$toLogin(e)}))},confirm:function(){var e=this;setTimeout((function(){e.showNameModal=!1}),3e3)},changeName:function(){this.showNameModal=!0}}};n.default=t}).call(this,t("543d")["default"])},fe12:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var o={uCellGroup:function(){return t.e("node-modules/uview-ui/components/u-cell-group/u-cell-group").then(t.bind(null,"1e22"))},uCellItem:function(){return t.e("node-modules/uview-ui/components/u-cell-item/u-cell-item").then(t.bind(null,"1823"))},uActionSheet:function(){return t.e("node-modules/uview-ui/components/u-action-sheet/u-action-sheet").then(t.bind(null,"43df"))},uModal:function(){return t.e("node-modules/uview-ui/components/u-modal/u-modal").then(t.bind(null,"df44"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,"e19c"))},uToast:function(){return t.e("node-modules/uview-ui/components/u-toast/u-toast").then(t.bind(null,"1664"))}},u=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.showNameModal=!1})},a=[]}},[["363a","common/runtime","common/vendor"]]]);