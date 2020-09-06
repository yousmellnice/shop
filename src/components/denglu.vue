<template>
	<div class="login_container">
		<div class="login_box">
			<!-- 头像区域 -->
			<div class="avatar_box">
				<img src="../assets/logo.png" alt="">
			</div>
			<!-- 登录表单区域 -->
			<el-form :model="loginForm" ref="loginFormRef111" :rules="loginFormRules" label-width="0px" class="login_form">
				<!-- 用户名 -->
			  <el-form-item prop="username">
			    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-usercenter"></el-input>
			  </el-form-item>
			  <!-- 密码 -->
			  <el-form-item prop="password">
			    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-password" type="password"></el-input>
			  </el-form-item>
			  <!-- 按钮区域 -->
			  <el-form-item class="btns">
			    <el-button type="primary" @click="login">登录</el-button>
				<el-button type="info" @click="resetLoginForm">重置</el-button>
			  </el-form-item>
			 </el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				//这是登录表单的数据绑定对象
				loginForm:{
					username:'admin',
					password:'123456'
				},
				//这是表单的验证规则对象
				loginFormRules:{
					//验证用户名是否合法
					username :[
						 { required: true, message: '请输入登录名称', trigger: 'blur' },
						 { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
					],
					//验证密码是否合法
					password :[
						 { required: true, message: '请输入密码', trigger: 'blur' },
						 { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
					]
				},
			}
		},
		methods:{
			//点击重置按钮，重置登录表单
			resetLoginForm() {
				//console.log(this)
				this.$refs.loginFormRef111.resetFields();
			},
			login() {
				this.$refs.loginFormRef111.validate(async valid => {
					//console.log(valid);
					if (!valid) return;
					const { data:res } = await this.$http.post("login",this.loginForm);
					if(res.meta.status !== 200) return this.$message.error('登录失败');
					this.$message.success('登录成功');
					window.sessionStorage.setItem("token",res.data.token);
					//通过编程式导航跳转到后台主页，路由地址是 /home
					this.$router.push("/home");
				});
			}
		}
	};
</script>

<style lang="less" scoped>
	.login_container {
		background-color: #2b4b6b;
		height: 100%;
		position: relative;
	}

	.login_box {
		width: 450px;
		height: 300px;
		background-color: #fff;
		border-radius: 5px;
		// margin: 0 auto;
		 position: absolute;
		// top: 50%;
		// left: 50%;
		// transform: translate(-50%,-50%);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		//图片
		.avatar_box{
			height: 130px;
			width: 130px;
			border: 2px solid #111111;
			border-radius: 50%;
			padding: 10px;
			box-shadow: 0 0 10px #DDDDDD;
			position: absolute;
			left: 50%;
			transform: translate(-50%,-50%);
			background-color: #fff;
			// margin: -50px auto;
			img{
				width: 100%x;
				height: 100%;
				border-radius: 50%;
				background-color: #eee;
			}			
		}		
		
    }
	.login_form{
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.btns{
		display: flex;
		justify-content: flex-end;
	}
</style>
