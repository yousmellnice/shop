import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入全局样式表
import './assets/css/global.css'
//导入字体图标
import './assets/fonts/iconfont.css'
//导入axios到全局中
import axios from 'axios'

//设置请求的根路径
axios.defaults.baseURL = 'http://47.115.124.102:8888/api/private/v1/'
//设置拦截器
axios.interceptors.request.use(config => {
	console.log(config)
	config.headers.Authorization = window.sessionStorage.getItem('token')
	//最后必须return config
	return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
