import Vue from 'vue'
import VueRouter from 'vue-router'
import denglu from '../components/denglu.vue'
import Home from '../components/Home.vue'
//welcome作为子路由嵌套于home页面当中
import Welcome from '../components/Welcome.vue'
import Users from '../components/User/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}




Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
	routes: [{
			path: '/',
			redirect: '/denglu'
		},
		{
			path: '/denglu',
			component: denglu
		},
		{
			path: '/home',
			component: Home,
			redirect: '/welcome',
			children: [
				{path: '/welcome',component: Welcome}, 
				{path: '/users',component: Users},
				{path: '/rights',component: Rights},
				{path: '/roles',component: Roles}
			]
		}
	]
})

//挂载路由
router.beforeEach((to, from, next) => {
	//to 代表将要访问的路径
	//from 代表从哪个路径跳转而来
	//next 是一个函数，表示放行
	//1.next()代表直接放行 2.next('/login')强制跳转到某路径
	if (to.path === '/denglu') return next();
	//获取token
	const tokenStr = window.sessionStorage.getItem('token')
	if (!tokenStr) return next('/denglu')
	next()
})

export default router
