//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
//全局引入混合
import {hunhe, hunhe2} from './mixin'

Vue.mixin(hunhe)
Vue.mixin(hunhe2)

//创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})