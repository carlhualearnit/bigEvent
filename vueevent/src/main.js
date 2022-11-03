import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式初始化
// import '@/styles/global.css'
import '@/assets/global.less'

// 导入elementUi 不写文件名默认导入的就是index文件
import '@/elementUi'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
