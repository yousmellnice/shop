<template>
	<el-container class="home-container">
		<!-- 头部区域 -->
		<el-header>
			<div>
				<img src="../assets/dianshang.png" alt="">
				<span>电商后台管理系统</span>
			</div>
			<el-button type="info" @click="logout()">退出</el-button>
		</el-header>
		<!-- 页面主体区域 -->
		<el-container>
			<!-- 侧边栏 -->
			<el-aside :width="isCollapse ? '64px' : '200px'">
				<!-- 设置侧边栏折叠 -->
				<div class="toggle-button" @click="toggleCollapse">|||</div>
				<!-- 侧边栏菜单区域 -->
				<el-menu background-color="#454545"
				      text-color="#fff"
				      active-text-color="#4fadff" unique-opened :collapse="isCollapse" 
					  :collapse-transition="false" router :default-active='activePath'>
					  <!-- 一级菜单 -->
				      <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
						  <!-- 一级菜单的模板区域 -->
				        <template slot="title">
							<!-- 图标 -->
				          <i :class="iconsObj[item.id]"></i>
						  <!-- 文本 -->
				          <span>{{item.authName}}</span>
				        </template>
				       
				        <!-- 二级菜单 -->
				          <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" 
						  :key="subItem.id" @click="saveNavState('/' + subItem.path)">
							  <template slot="title">
							  	<!-- 图标 -->
							    <i class="el-icon-menu"></i>
							    <!-- 文本 -->
							    <span>{{subItem.authName}}</span>
							  </template>
						  </el-menu-item>
				        </el-submenu>
				      </el-submenu>
				     
				    </el-menu>
			</el-aside>
			<!-- 右侧内容主体 -->
			<el-main>
				<!-- 路由占位符 -->
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				//左侧菜单数据
				menulist: [],
				iconsObj:{
					'125' : 'el-icon-user-solid',
					'103' : 'el-icon-s-home',
					'101' : 'el-icon-s-goods',
					'102' : 'el-icon-s-order',
					'145' : 'el-icon-s-platform'
				},
				//是否折叠
				isCollapse: false,
				//被激活的链接地址
				activePath:''
			}
		},
		created() {
			this.getMenuList()
			this.activePath = window.sessionStorage.getItem('activePath')
		},
		methods: {
			logout() {
				window.sessionStorage.clear()
				this.$router.push('/denglu')
			},
			//获取所有的菜单
			async getMenuList(){
				const { data:res } = await this.$http.get('menus')
				if(res.meta.status !== 200) return this.$message.error(res.meta.msg)
				this.menulist = res.data
				console.log(res)
			},
			//点击按钮切换菜单的折叠与展开
			toggleCollapse() {
				this.isCollapse = !this.isCollapse
			},
			//保存链接的激活状态
			saveNavState(activePath) {
				window.sessionStorage.setItem('activePath',activePath)
				this.activePath = activePath
			}
		}
	};
</script>

<style lang="less" scoped>
	.home-container{
		height: 100%;
		
	}
	.el-header{
		background-color: #A8A297;
		display: flex;
		justify-content: space-between;
		padding-left: 3px;
		align-items: center;
		color: #ffffff;
		font-size: 20px;
		div{
			display: flex;
			align-items: center;
		span{
			margin-left: 15px;
		}
		}
		img{
			
			height: 50px;
			width: 50px;
		}
	}
	.el-aside{
		background-color: #454545;
		.el-menu{
			border-right: none;
		}
	}
	.el-main{
		background-color: #d6d6d6;
		}
	.toggle-button{
		background-color: #66617e;
		font-size: 10px;
		line-height: 24px;
		color: #fff;
		text-align: center;
		letter-spacing: 0.3em;
		cursor: pointer;
	}
	
</style>
