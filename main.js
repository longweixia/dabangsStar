import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
// const vconsole = require('vconsole')
// Vue.prototype.$vconsole = new vconsole() // 使用vconsole
Vue.use(uView);
Vue.config.productionTip = false


import global from './common/methods.js'
Object.keys(global).forEach(key => {
    Vue.prototype["$" + key] = global[key];
})

App.mpType = 'app'

const app = new Vue({
        ...App
    })
    // http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from './common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)
app.$mount()