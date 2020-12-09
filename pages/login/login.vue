<template>
	<view class="login">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image :src="logoImage"></image>
			</view>
			<!-- 主体表单 -->
			<view class="main">
				<wInput
					v-model="phoneData"
					type="text"
					maxlength="11"
					placeholder="用户名/电话"
					:focus="isFocus"
				></wInput>
				<wInput
					v-model="passData"
					type="password"
					maxlength="11"
					placeholder="密码"
				></wInput>
			</view>
			<wButton 
				class="wbutton"
				text="登 录"
				:rotate="isRotate" 
				@click="startLogin"
			></wButton>
			
			<!-- 其他登录 -->
			<view class="other_login cuIcon">
				<view class="login_icon">
					<view class="cuIcon-weixin" @tap="login_weixin"></view>
				</view>
				<view class="login_icon">
					<view class="cuIcon-weibo" @tap="login_weibo"></view>
				</view>
				<view class="login_icon">
					<view class="cuIcon-github" @tap="login_github"></view>
				</view>
			</view>
			
			<!-- 底部信息 -->
			<view class="footer">
				<navigator url="forget" open-type="navigate">找回密码</navigator>
				<text>|</text>
				<navigator url="register" open-type="navigate">注册账号</navigator>
			</view>
					<button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
			  授权登录
			</button>
		</view>
	</view>
</template>

<script>
	let _this;
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	
	export default {
		data() {
			return {
					code:"",
				SessionKey: '',
				encryptedData:"",
				iv:"",
				OpenId: '',
				nickName: null,
				avatarUrl: null,
				isCanUse: true,
				//logo图片 base64
				logoImage: "",
				passData:'', //密码
				isRotate: false, //是否加载旋转
				isFocus: true // 是否聚焦
			};
		},
		components:{
			wInput,
			wButton,
		},
		mounted() {
			_this= this;
			//this.isLogin();
		},
		methods: {
			isLogin(){
				//判断缓存中是否登录过，直接登录
				// try {
				// 	const value = uni.getStorageSync('setUserData');
				// 	if (value) {
				// 		//有登录信息
				// 		console.log("已登录用户：",value);
				// 		_this.$store.dispatch("setUserData",value); //存入状态
				// 		uni.reLaunch({
				// 			url: '../../../pages/index',
				// 		});
				// 	}
				// } catch (e) {
				// 	// error
				// }
			},
		    startLogin(e){
                console.log(e)
				//登录
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.phoneData.length == "") {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '用户名不能为空'
				    });
				    return;
				}
		        if (this.passData.length < 5) {
		            uni.showToast({
		                icon: 'none',
						position: 'bottom',
		                title: '密码不正确'
		            });
		            return;
		        }
				
				console.log("登录成功")
				
				_this.isRotate=true
				setTimeout(function(){
					_this.isRotate=false
				},3000)
				// uni.showLoading({
				// 	title: '登录中'
				// });
				// getLogin()
				// .then(res => {
				// 	//console.log(res)
				// 	//简单验证下登录（不安全）
				// 	if(_this.phoneData==res.data.username && _this.passData==res.data.password){
				// 		let userdata={
				// 			"username":res.data.username,
				// 			"nickname":res.data.nickname,
				// 			"accesstoken":res.data.accesstoken,
				// 		} //保存用户信息和accesstoken
				// 		_this.$store.dispatch("setUserData",userdata); //存入状态
				// 		try {
				// 			uni.setStorageSync('setUserData', userdata); //存入缓存
				// 		} catch (e) {
				// 			// error
				// 		}
				// 		uni.showToast({
				// 			icon: 'success',
				// 			position: 'bottom',
				// 			title: '登录成功'
				// 		});
				// 		uni.reLaunch({
				// 			url: '../../../pages/index',
				// 		});
				// 	}else{
				// 		_this.passData=""
				// 		uni.showToast({
				// 			icon: 'error',
				// 			position: 'bottom',
				// 			title: '账号或密码错误，账号admin密码admin'
				// 		});
				// 	}
				// 	uni.hideLoading();
				// }).catch(err => {
				// 	uni.hideLoading();
				// })
				
		    },
			login_weixin() {
				//微信登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
				let _this = this;
				// 获取用户信息
				uni.getUserInfo({
					provider: 'weixin',
					success: function (infoRes) {
						_this.encryptedData = infoRes.encryptedData
						_this.iv = infoRes.iv
						_this.nickName = infoRes.userInfo.nickName; //昵称
						_this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
						uni.setStorageSync('isCanUse', false);//记录是否第一次授权 false:表示不是第一次授权
						_this.updateUserInfo();
					},fail:function (fail){console.log("fail:",fail)}
				});
			},
			login_weibo() {
				//微博登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
			},
			login_github() {
				//github登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
			},
		
		wxGetUserInfo(){ //第一授权获取用户信息===》按钮触发
				let _this = this;
				// 获取用户信息
				uni.getUserInfo({
					provider: 'weixin',
					success: function (infoRes) {
						_this.encryptedData = infoRes.encryptedData
						_this.iv = infoRes.iv
						_this.nickName = infoRes.userInfo.nickName; //昵称
						_this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
						uni.setStorageSync('isCanUse', false);//记录是否第一次授权 false:表示不是第一次授权
						_this.updateUserInfo();
					},fail:function (fail){console.log("fail:",fail)}
				});
			},
			login(){
				let _this = this;
				uni.showLoading({
				  title: '登录中...'
				});
				
				// 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						_this.code = loginRes.code;
						if (!_this.isCanUse) {
							//非第一次授权获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: function(infoRes) {
									console.log('login用户信息：',infoRes);
				 　　　　　　　　　　　//获取用户信息后向调用信息更新方法
									_this.nickName = infoRes.userInfo.nickName; //昵称
									_this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
									_this.updateUserInfo();//调用更新信息方法
								}
							});
						}
						// 将用户登录code传递到后台置换用户SessionKey、OpenId等信息
						
						uni.hideLoading();
					},
				})
					
			},
			updateUserInfo(){ //向后台更新信息
				this.setName(this.nickName,this.avatarUrl)
				let _this = this;
				var obj ={
					appid:"wx8a93893c751e3f4d",
					secret:"af4a61ed135bee289857da945990a49f",
					code:this.code
				}
				// 这个接口要在后端调用(https://api.weixin.qq.com无法加入白名单)
				// https://api.weixin.qq.com/sns/jscode2session?appid="+appid+"&secret="+secret+"&js_code="+code+"&grant_type=authorization_code
				// 请求微信端地址获取用户唯一标识的
				htxcx(obj.appid,obj.secret,obj.code).then(res=>{
					console.log("res:",res)
									
					res.data.openid // 唯一
					res.data.session_key 
					this.encryptedData
					this.iv
					
					
					
					
					uni.reLaunch({//信息更新成功后跳转到小程序首页
						url: '/pages/index/index'
					});
				},err=>{
					console.log("err:",err)
				})
				
				
				
				
			}
			}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
</style>
