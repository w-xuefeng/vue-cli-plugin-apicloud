import App from './App.vue'
import Vue from 'vue'
import VAQ from 'vue-apicloud-quickstart'
import pages from '@/config/pages'

Vue.config.productionTip = false

Vue
  .use(VAQ, {
    pages,
    debugOnPC: true
    // 是否开启 PC 调试，默认 false
    // Enable PC debugging or not, false by default
  })
  .init({
    el: '#app',
    render: h => h(App)
  })
/**
 * 链式调用 init 方法， 即创建 Vue 实例
 * Chained-calls init method, that will create a Vue instance
 * 
 * 开启 PC 调试时与 new Vue() 等同
 * Same as new vue() when turning on PC debugging
 * 
 * 未开启时将在 apiready 的回调中创建 Vue 实例
 * Vue instance will be created in apiready's callback when it is not turned on
 */

