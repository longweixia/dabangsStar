(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/lff-barrage/lff-barrage"],{232:
/*!*********************************************************************!*\
  !*** D:/app/xcx/dabangsStar/components/lff-barrage/lff-barrage.vue ***!
  \*********************************************************************/
/*! no static exports found */function(t,e,a){"use strict";a.r(e);var i=a(/*! ./lff-barrage.vue?vue&type=template&id=afab08f8& */233),n=a(/*! ./lff-barrage.vue?vue&type=script&lang=js& */235);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a(/*! ./lff-barrage.vue?vue&type=style&index=1&lang=scss& */237);var r,o=a(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),u=Object(o["default"])(n["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],r);u.options.__file="components/lff-barrage/lff-barrage.vue",e["default"]=u.exports},233:
/*!****************************************************************************************************!*\
  !*** D:/app/xcx/dabangsStar/components/lff-barrage/lff-barrage.vue?vue&type=template&id=afab08f8& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,a){"use strict";a.r(e);var i=a(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./lff-barrage.vue?vue&type=template&id=afab08f8& */234);a.d(e,"render",(function(){return i["render"]})),a.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),a.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),a.d(e,"components",(function(){return i["components"]}))},234:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/app/xcx/dabangsStar/components/lff-barrage/lff-barrage.vue?vue&type=template&id=afab08f8& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,a){"use strict";var i;a.r(e),a.d(e,"render",(function(){return n})),a.d(e,"staticRenderFns",(function(){return r})),a.d(e,"recyclableRender",(function(){return s})),a.d(e,"components",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.listData,(function(e,a){var i=t.__get_orig(e),n=t.__get_style([e.style]);return{$orig:i,s0:n}})));t.$mp.data=Object.assign({},{$root:{l0:a}})},s=!1,r=[];n._withStripped=!0},235:
/*!**********************************************************************************************!*\
  !*** D:/app/xcx/dabangsStar/components/lff-barrage/lff-barrage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */function(t,e,a){"use strict";a.r(e);var i=a(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./lff-barrage.vue?vue&type=script&lang=js& */236),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},236:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/app/xcx/dabangsStar/components/lff-barrage/lff-barrage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{type:{type:String,default:"leftBottom"},minTime:{type:Number,default:4},maxTime:{type:Number,default:9},minTop:{type:Number,default:0},maxTop:{type:Number,default:100},hrackH:{type:Number,default:40},noStacked:{type:Array,default:function(){return[]}}},data:function(){return{listData:[]}},mounted:function(){this.hrackNum=Math.floor((this.maxTop-this.minTop)/this.hrackH)},methods:{add:function(t){var e={item:t.item,id:Date.parse(new Date),time:Math.ceil(Math.floor(Math.random()*(this.maxTime-this.minTime+1)+this.minTime)),type:this.type};if("leftBottom"===this.type){var a={item:e.item,type:"leftBottomEnter",style:{transition:"all 0.5s",animationDuration:"0.5s",transform:"translateX(0%)",bottom:"".concat(this.minTop,"px")}},i=this.listData.length,n=this.hrackNum;for(var s in this.listData)"reuse"===this.listData[s].status?this.$set(this.listData,s,a):"reset"===this.listData[s].status?(this.listData[s].style.transition="none",this.listData[s].style.bottom=0,this.listData[s].status="reuse"):"recycle"===this.listData[s].status?(this.listData[s].type="leftBottomExit",this.listData[s].status="reset"):this.listData[s].style.bottom=parseInt(this.listData[s].style.bottom)+this.hrackH+"px",parseInt(this.listData[s].style.bottom)>=this.maxTop-this.hrackH&&"reset"!==this.listData[s].status&&(this.listData[s].status="recycle");i<n+3&&this.listData.push(a)}else if("rightToLeft"===this.type||"leftToRight"===this.type){var r=this.horStacked(e);for(var o in this.listData)if(this.listData[o].delTime<=Date.parse(new Date))return this.repaint(o,r.type),r.type="",void this.$set(this.listData,o,r);this.listData.push(r)}},horStacked:function(t){return{item:t.item,type:this.type,style:{animationDuration:"".concat(t.time,"s"),top:"".concat(Math.ceil(Math.random()*(this.maxTop-this.minTop+1)+this.minTop),"px")},delTime:Date.parse(new Date)+1200*t.time}},repaint:function(t,e){var a=this;setTimeout((function(){a.listData[t].type=e}),100)}}};e.default=i},237:
/*!*******************************************************************************************************!*\
  !*** D:/app/xcx/dabangsStar/components/lff-barrage/lff-barrage.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */function(t,e,a){"use strict";a.r(e);var i=a(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./lff-barrage.vue?vue&type=style&index=1&lang=scss& */238),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},238:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/app/xcx/dabangsStar/components/lff-barrage/lff-barrage.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,a){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/lff-barrage/lff-barrage.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/lff-barrage/lff-barrage-create-component',
    {
        'components/lff-barrage/lff-barrage-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(232))
        })
    },
    [['components/lff-barrage/lff-barrage-create-component']]
]);
