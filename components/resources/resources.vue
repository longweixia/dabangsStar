<template>
	<!-- 资源 -->
	<view>
    
		<view
			class="star-card"
			v-for="(item, index) in resourcesList"
			:key="index"
		>
			<view class="list-top">
				<view class="row-text">
					资源剩余：{{ item.endTime | getTimeSecond }}
				</view>
				<!-- <view class="btn" @click="join(item)">立即参与</view> -->
                <button
							@getuserinfo="wxGetUserInfo(item)"
							class="btn"
							open-type="getUserInfo"
							withCredentials="true"
							lang="zh_CN"
						>
							立即参与
						</button>
			</view>
			<view class="title">{{ item.titles }}</view>
			<view class="slider-area">
				<u-slider
					:disabled="true"
					class="slider-resource"
					v-model="resourcesLists[index]"
					:use-slot="true"
					height="10"
					block-width="40"
					block-color="#F64F71"
					active-color="#F64F71"
					inactive-color="#F5F5F5"
				>
					<!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
					<view class="">
						<view class="badge-button">
							<!-- 40 -->
						</view>
					</view>
				</u-slider>
				<view class="btn-slider">{{ item.targetValue + '%' }}</view>
			</view>
			<view class="slider-area">
				<u-slider
					:disabled="true"
					class="slider-resource"
					v-model="resourcesLists1[index]"
					:use-slot="true"
					height="10"
					block-width="40"
					block-color="#E9C046"
					active-color="#E9C046"
					inactive-color="#F5F5F5"
				>
					<!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
					<view class="">
						<view class="badge-button badge-button1">
							<!-- 40 -->
						</view>
					</view>
				</u-slider>
				<view class="btn-slider btn-slider1">{{
					item.reachNumValue + '%'
				}}</view>
			</view>
			<view class="flex-area">
				<view class="target">目标人数：{{ item.target }}</view>
				<view class="target join">参与人数：{{ item.joinNum }}</view>
				<view class="target reach">达成人数：{{ item.reachNum }}</view>
			</view>
			<view class="list-bottom">
				<view class="star-ranking">
					<view
						v-for="(item1, index1) in item.fensList"
						:key="index1"
						class="img-list"
					>
						<u-image
							class="img"
							width="60rpx"
							height="60rpx"
							:src="item1"
							shape="circle"
						>
						</u-image>
						<view class="num">{{ index1 + 1 }}</view>
					</view>
					<!-- <view v-if="item.fensList.length>6" class="more" @click="routerResourcesRanking(0)"> -->
					<view
						class="more"
						v-if="item.fensList && item.fensList.length > 5"
						@click="
							routerResourcesRanking(
								item.resourcesRelId,
								item.titles
							)
						"
					>
						<img src="../../static/home/moreWhite.png" />
					</view>
				</view>
			</view>
		</view>
		<u-toast ref="join" />
	</view>
</template>

<script>
export default {
	name: 'resources',
	props: ['ids', 'starName'],
	watch: {
		starName: {
			handler(newVal, oldVal) {
				// this.starName = newVal
				if (newVal) {
					this.selectResources(newVal)
				}
				//  this.donghua();
			},
			immediate: true,
			deep: true,
		},
	},

	components: {},
	data() {
		return {
            code: '',
			SessionKey: '',
			encryptedData: '',
			iv: '',
			OpenId: '',
			nickName: null,
			avatarUrl: null,
			isCanUse: true,
			rawData: '',
            signature: '',
            // 用户信息
			titles: '',
			value: 30,
			resourcesLists: [],
			resourcesLists1: [],
			resourcesList: [], //资源列表
		}
	},
	created() {
		//获取资源列表
		// if(this.starName){
		// 	this.$emit('getstarName')
		// 	   this.selectResources(this.starName);
		// }else{
		// 	   this.selectResources(this.starName);
		// }
	},
	filters: {
		getTimeSecond(e) {
			if (e) {
				let time =
					new Date(e.replace(/-/g, '/')).getTime() -
					new Date().getTime()
				let day = Math.floor(time / 86400000) //天
				let hours = Math.floor((time % 86400000) / 3600000) //时
				let minutes = Math.floor((time % 3600000) / 60000) //分
				let seconds = Math.floor((time % 60000) / 1000) //秒
				return (
					day +
					'天' +
					hours +
					'小时' +
					minutes +
					'分' +
					seconds +
					'秒'
				)
			}
		},
    },
    mounted() {
		this.login()
	},
	methods: {
		getTimeday(e) {
			let time =
				new Date(e.replace(/-/g, '/')).getTime() - new Date().getTime()
			let day = Math.floor(time / 86400000) //天
			return day
		},
		routerResourcesRanking(resouceId, titles) {
			uni.navigateTo({
				url: `/pages/starDetail/resourcesRanking?id=${resouceId}&titles=${titles}`,
			})
		},
		//获取资源列表
		selectResources(starName) {
			this.$u
				.post('/starDetail/selectResources', {
					id: this.ids,
					pageNum: 1,
					pageSize: 20,
					name: '',
				})
				.then((res) => {
					this.resourcesList = res.list
					this.resourcesList.forEach((item, index) => {
						//  处理参与人数比
						this.resourcesList[index].targetValue = Math.round(
							(item.joinNum / item.target) * 100
						)
						this.resourcesLists.push(
							Math.round((item.joinNum / item.target) * 100)
						)
						//  处理达成人数比
						this.resourcesList[index].reachNumValue = Math.round(
							(item.reachNum / item.target) * 100
						)
						this.resourcesLists1.push(
							Math.round((item.reachNum / item.target) * 100)
						)
					})

					// 处理资源名称
					if (this.resourcesList && this.resourcesList.length > 0) {
						this.resourcesList.forEach((item, index) => {
							if (item.type == 1) {
								this.resourcesList[
									index
								].titles = `为${starName}看视频${this.getTimeday(
									item.endTime
								)}天，解锁${item.mark}应援金`
							} else if (item.type == 2) {
								this.resourcesList[
									index
								].titles = `为${starName}看视频${this.getTimeday(
									item.endTime
								)}天，解锁${item.mark}小程序开展`
							} else if (item.type == 3) {
								this.resourcesList[
									index
								].titles = `为${starName}看视频${this.getTimeday(
									item.endTime
								)}天，解锁${item.mark}首页轮播`
							} else if (item.type == 4) {
								this.resourcesList[index].titles = `为${
									this.starName
								}看视频${this.getTimeday(
									item.endTime
								)}天，解锁${item.mark}`
							}
						})
					}
				})
				.catch((res) => {})
        },
        login() {
			let _this = this
			// 1.wx获取登录用户code
			uni.login({
				provider: 'weixin',
				success: function (loginRes) {
					_this.code = loginRes.code
					if (!_this.isCanUse) {
						//非第一次授权获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function (infoRes) {
								// console.log('login用户信息：', infoRes) //获取用户信息后向调用信息更新方法
								_this.nickName = infoRes.userInfo.nickName //昵称
								_this.avatarUrl = infoRes.userInfo.avatarUrl //头像
								_this.updateUserInfo() //调用更新信息方法
							},
						})
					}
					// 将用户登录code传递到后台置换用户SessionKey、OpenId等信息
				},
			})
		},
		//向后台更新信息
		updateUserInfo(item) {
			let _this = this
			this.$u
				.post(`/common/weiXinLong`, {
					code: _this.code,
					encrypteData: this.encryptedData,
					iv: this.iv,
					rawData: this.rawData,
					signature: this.signature,
				})
				.then((res) => {
                    uni.setStorageSync('Authorization', res.token)
                    this.join(item)
				
				})
				.catch((res) => {
				this.join(item)
				})
		},
		wxGetUserInfo(item) {
			this.$u
				.get('/personalCenter/personalCenterInfo')
				.then((res) => {
					this.join(item)
				})
				.catch((res) => {
					let _this = this
					uni.getUserInfo({
						provider: 'weixin',
						success: function (infoRes) {
							console.log(infoRes, '用户信息')
							_this.encryptedData = infoRes.encryptedData
							_this.iv = infoRes.iv
							_this.rawData = infoRes.rawData
							_this.signature = infoRes.signature
							_this.nickName = infoRes.userInfo.nickName //昵称
							_this.avatarUrl = infoRes.userInfo.avatarUrl //头像
							uni.setStorageSync('isCanUse', false) //记录是否第一次授权 false:表示不是第一次授权
							_this.updateUserInfo(item)
						},
						fail: function (fail) {
							console.log(fail, 'fail用户信息')
						},
					})
				})
		},
		//参加活动
		join(item) {
			// if (!uni.getStorageSync('Authorization')) {
			// 	uni.showModal({
			// 		title: '请登录',
			// 		content: '登录后可以获取更多功能',
			// 		success: (res) => {
			// 			if (res.confirm) {
			// 				uni.navigateTo({
			// 					url: '/pages/center/center',
			// 				})
			// 			} else if (res.cancel) {
			// 			}
			// 		},
			// 	})
			// } else {
				this.$u
					.post(
						`/starDetail/joinResources?resourcesRelId=${item.resourcesRelId}&status=0`
					)
					.then((res) => {
						//   uni.showToast({
						//     title: "参与成功",
						//     duration: 2000,
						//   });
						this.$refs.join.show({
							title: '参与成功',
							type: 'success',
							duration: 2000,
						})
						this.selectResources(this.starName)
					})
					.catch((res) => {})
			// }
		},
	},
}
</script>
<style lang="scss" scoped>
// 当前明星卡片
.star-card {
	background: #fff;
	border-radius: 20rpx;
	margin: 20rpx;
	box-shadow: 0 0 15rpx #e6e6e6;
	padding: 10rpx;
	// 明星上方数据
	.list-top {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 20rpx;
		padding-top: 20rpx;
		.row-text {
			font-size: 10px !important;
			padding: 10rpx 30rpx;
			right: 50rpx;
			height: 42rpx;
			text-align: center;
			margin-left: 10rpx;
			display: inline-block;
			border-radius: 30rpx;
			background: #f3c3c3;
			color: #e34c4c;
		}
		.btn {
            margin: 0;
					padding: 0;
					border-radius: 0;
					border: none;
					font-size: 1em;
					background-color: transparent;
            // 重置按钮完成        
			text-align: center;
			height: 46rpx;
			line-height: 46rpx;
			padding: 0 30rpx;
			border-radius: 27rpx;
			text-align: center;
			background: linear-gradient(to right, #f83a3a, #f7c18b);
			color: #fff;
			font-size: 12px;
		}
	}
}
.title {
	text-align: center;
	font-size: 14px;
	font-weight: bold;
	color: #333333;
	margin-top: 10rpx;
	margin-bottom: 10rpx;
}
.badge-button {
	// padding: 20rpx 20rpx;
	width: 30rpx;
	height: 30rpx;
	background-color: #f64f71;
	color: #fff;
	border-radius: 25rpx;
	border: none;
	font-size: 22rpx;
	line-height: 1;
}
.badge-button1 {
	background-color: #e9c046;
}
.slider-resource {
	margin-right: 240rpx !important;
}
.btn-slider {
	float: right;
	width: 100rpx;
	padding-left: 10rpx;
	padding-right: 10rpx;
	text-align: center;
	height: 40rpx;
	line-height: 40rpx;
	background: #f64f71;
	border-radius: 20rpx;
	color: #fff;
	position: relative;
	right: -120rpx;
	top: -30rpx;
}
.btn-slider1 {
	background-color: #e9c046;
}
.u-slider-disabled {
	opacity: 1 !important;
	//   margin-right:100rpx;
}
.slider-area {
	margin-top: 15rpx;
	margin-bottom: 15rpx;
	margin-left: 40rpx;
	margin-right: 120rpx;
}
.flex-area {
	margin-left: 30rpx;
	display: flex;
	align-items: center;
	// flex-direction: row;
	justify-content: space-between;
	.target {
		display: inline-block;
		color: #333;
		font-weight: bold;
		font-size: 12px;
	}
	.join {
		color: #f64f71;
	}
	.reach {
		text-align: right;
		color: #e9c046;
		// margin-right: -30rpx;
	}
}
.flex-area-rank {
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
}
// .img-list {
//   //   text-align: center;
//   position: relative;
//   display: inline-block;
//   padding: 10rpx;
//   .img {
//     position: relative;
//   }
//   .num {
//     position: absolute;
//     right: 30rpx;
//     top: 0;
//     font-size: 14px;
//     font-weight: bold;
//   }
//   .num::after {
//     clear: both;
//     height: 0;
//   }
// }
// .more {
//   display: inline-block;
//   text-align: center;
//   position: relative;
//   top: 15rpx;
// }
//底部排名
// 粉丝榜单
.list-bottom {
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
	padding-bottom: 20rpx;
	padding-top: 20rpx;
	.star-ranking {
		width: 100%;
		text-align: center;
		.img-list {
			position: relative;
			display: inline-block;
			padding: 5rpx;
			.img {
				position: relative;
			}
			.num {
				position: absolute;
				right: 0;
				top: 40rpx;
				font-size: 5px;
				background: #e34c4c;
				color: #fff;
				width: 24rpx;
				height: 24rpx;
				line-height: 24rpx;
				text-align: center;
				border-radius: 12rpx;
			}
			.num::after {
				clear: both;
				height: 0;
			}
		}
		.more {
			display: inline-block;
			text-align: center;
			width: 60rpx;
			height: 60rpx;
			line-height: 60rpx;
			position: relative;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.ranking2 {
		text-align: right;
	}
}
</style>
