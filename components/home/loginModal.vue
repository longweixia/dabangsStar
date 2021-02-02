<template>
	<view class="login-modals">
		<u-popup mode="bottom" v-model="showModal" border-radius="14">
			<view class="content">
				<view class="row1">
					<view></view>
					<text>超级爱豆榜</text>
					<text class="apply">申请</text>
				</view>
				<view class="row2"> 获取你的昵称、头像、地区及性别 </view>
				<!-- <scroll-view scroll-y="true" style="height: 300rpx">
					<view>
						<view v-for="index in 20" :key="index">
							第{{ index }}个Item
						</view>
					</view>
				</scroll-view> -->
				<view class="confrim-btn">
					<u-button @click="showModal = false" class="bottom"
						>取消</u-button
					>
					<button
						class="bottom bottom-login"
						type="primary"
						open-type="getUserInfo"
						withCredentials="true"
						lang="zh_CN"
						@getuserinfo="wxGetUserInfo"
					>
						允许
					</button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showModal: false,
		}
	},
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		show: {
			handler(newVal, oldVal) {
				this.showModal = newVal
			},
			immediate: true,
			deep: true,
		},
		showModal: {
			handler(newVal, oldVal) {
				this.$emit('closeLogin')
			},
			// immediate: true,
			// deep: true,
		},
	},
	methods: {
		wxGetUserInfo() {
			//第一授权获取用户信息===》按钮触发
			let _this = this
			// 获取用户信息
			uni.getUserInfo({
				provider: 'weixin',
				success: function (infoRes) {
					// console.log(infoRes, '用户信息')
					_this.encryptedData = infoRes.encryptedData
					_this.iv = infoRes.iv
					_this.rawData = infoRes.rawData
					_this.signature = infoRes.signature
					_this.nickName = infoRes.userInfo.nickName //昵称
					_this.avatarUrl = infoRes.userInfo.avatarUrl //头像
					uni.setStorageSync('isCanUse', false) //记录是否第一次授权 false:表示不是第一次授权
					_this.updateUserInfo()
				},
				fail: function (fail) {
					// console.log('fail:', fail)
				},
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.login-modals {
	.row1 {
		color: #000;
		font-size: 14px;
		font-weight: bold;
		.apply {
			margin-left: 20rpx;
		}
	}
	.row2 {
		font-size: 14px;
		font-weight: bold;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	.row3 {
		margin-top: 30rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		border-top: 0.5px solid #ddd;
		border-bottom: 0.5px solid #ddd;
	}
	.content {
		padding: 24rpx;
		padding-top: 50rpx;
		padding-bottom: 50rpx;
		// text-align: center;
		border-radius: 10rpx;
	}
	.confrim-btn {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.bottom {
		width: 200rpx;
		margin-top: 10rpx;
		// display: inline-block;
	}
	.bottom-login {
		width: 200rpx !important;
		// background: #007aff;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
}
</style>
