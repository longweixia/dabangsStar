(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/rangkingList"],{

/***/ 62:
/*!**************************************************************************!*\
  !*** D:/xcx/dabangsStar/main.js?{"page":"pages%2Findex%2FrangkingList"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _rangkingList = _interopRequireDefault(__webpack_require__(/*! ./pages/index/rangkingList.vue */ 63));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_rangkingList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 63:
/*!*******************************************************!*\
  !*** D:/xcx/dabangsStar/pages/index/rangkingList.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rangkingList_vue_vue_type_template_id_2fc9ba53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rangkingList.vue?vue&type=template&id=2fc9ba53&scoped=true& */ 64);
/* harmony import */ var _rangkingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rangkingList.vue?vue&type=script&lang=js& */ 66);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _rangkingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _rangkingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _rangkingList_vue_vue_type_style_index_0_id_2fc9ba53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rangkingList.vue?vue&type=style&index=0&id=2fc9ba53&lang=scss&scoped=true& */ 68);
/* harmony import */ var _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _rangkingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _rangkingList_vue_vue_type_template_id_2fc9ba53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _rangkingList_vue_vue_type_template_id_2fc9ba53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2fc9ba53",
  null,
  false,
  _rangkingList_vue_vue_type_template_id_2fc9ba53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/rangkingList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/*!**************************************************************************************************!*\
  !*** D:/xcx/dabangsStar/pages/index/rangkingList.vue?vue&type=template&id=2fc9ba53&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_template_id_2fc9ba53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./rangkingList.vue?vue&type=template&id=2fc9ba53&scoped=true& */ 65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_template_id_2fc9ba53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_template_id_2fc9ba53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_template_id_2fc9ba53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_template_id_2fc9ba53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 65:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/xcx/dabangsStar/pages/index/rangkingList.vue?vue&type=template&id=2fc9ba53&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uNavbar: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-navbar/u-navbar */ "node-modules/uview-ui/components/u-navbar/u-navbar").then(__webpack_require__.bind(null, /*! uview-ui/components/u-navbar/u-navbar.vue */ 211))
  },
  uToast: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-toast/u-toast */ "node-modules/uview-ui/components/u-toast/u-toast").then(__webpack_require__.bind(null, /*! uview-ui/components/u-toast/u-toast.vue */ 162))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 66:
/*!********************************************************************************!*\
  !*** D:/xcx/dabangsStar/pages/index/rangkingList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./rangkingList.vue?vue&type=script&lang=js& */ 67);
/* harmony import */ var _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 67:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/xcx/dabangsStar/pages/index/rangkingList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var BtnNav = function BtnNav() {__webpack_require__.e(/*! require.ensure | components/btn-nav/btn-nav */ "components/btn-nav/btn-nav").then((function () {return resolve(__webpack_require__(/*! ../../components/btn-nav/btn-nav.vue */ 197));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var RankingList = function RankingList() {__webpack_require__.e(/*! require.ensure | components/ranking-list/ranking-list */ "components/ranking-list/ranking-list").then((function () {return resolve(__webpack_require__(/*! ../../components/ranking-list/ranking-list.vue */ 204));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =






















{
  components: {
    BtnNav: BtnNav,
    RankingList: RankingList },

  data: function data() {
    return {
      hasData: true, // 是否有数据，默认有数据
      rankingList: [],
      rankingList1: [
      {
        icon: "皇冠",
        image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
        num: "4",
        name: "邓伦周榜",
        val: 500 },

      {
        icon: "皇冠",
        image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
        num: "5",
        name: "周超",
        val: "+234234热力值" },

      {
        icon: "皇冠",
        image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
        num: "6",
        name: "黄晓明",
        val: "+234234热力值" },

      {
        icon: "皇冠",
        image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
        num: "7",
        name: "黄晓明",
        val: "+234234热力值" }],


      rankingList2: [
      {
        icon: "皇冠",
        image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
        num: "1",
        name: "邓伦月榜",
        val: "+234234热力值" },

      {
        icon: "皇冠",
        image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
        num: "2",
        name: "周超",
        val: "+234234热力值" },

      {
        icon: "皇冠",
        image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
        num: "3",
        name: "黄晓明",
        val: 100 }],


      btnList: ["周榜", "月榜", "总榜", "粉丝榜"],
      rankType: null //显示周榜还是月榜,0是周榜，1是月榜  todo  粉丝榜传值是什么
    };
  },
  onLoad: function onLoad(option) {
    this.rankType = Number(option.type);
  },
  mounted: function mounted() {
    this.changebtn(this.rankType);
  },
  methods: {

    changebtn: function changebtn(index) {var _this = this;
      console.log(index);
      this.rankType = index;

      this.$u.post('/home/weekRank/list', {
        "pageNum": 1,
        "pageSize": 20,
        "rankType": index }).
      then(function (res) {
        _this.rankingList = res.list; //　少了头像
        if (res.list && res.list.length > 0) {
          _this.hasData = true;
        } else {
          _this.hasData = false;
        }
      }).catch(function (res) {
        //   this.$toLogin(res)

      });
    } } };exports.default = _default;

/***/ }),

/***/ 68:
/*!*****************************************************************************************************************!*\
  !*** D:/xcx/dabangsStar/pages/index/rangkingList.vue?vue&type=style&index=0&id=2fc9ba53&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_style_index_0_id_2fc9ba53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./rangkingList.vue?vue&type=style&index=0&id=2fc9ba53&lang=scss&scoped=true& */ 69);
/* harmony import */ var _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_style_index_0_id_2fc9ba53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_style_index_0_id_2fc9ba53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_style_index_0_id_2fc9ba53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_style_index_0_id_2fc9ba53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_unapp_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rangkingList_vue_vue_type_style_index_0_id_2fc9ba53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/xcx/dabangsStar/pages/index/rangkingList.vue?vue&type=style&index=0&id=2fc9ba53&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[62,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/rangkingList.js.map