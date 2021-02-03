<template>
	<!-- 首页排行榜，第4名开始 -->
	<view class="list-th">
		<view
			class="list-row"
			v-for="(item, index) in rankingList"
			:key="index"
		>
			<view class="num-body" @click="routerStarDetail(item.id)">
				<view class="num">{{ index + 4 }}</view>
			</view>
			<view class="img-body" @click="routerStarDetail(item.id)">
				<u-image
					class="img"
					width="80rpx"
					height="80rpx"
					:src="item.starAvatar"
					error-icon="../../static/home/noImg.png"
					shape="circle"
				></u-image>
			</view>
			<view class="name" @click="routerStarDetail(item.id)">
				{{ item.starName }}
			</view>
			<view class="btn-area">
				<view class="val">
					<view class="val-text">{{ item.totalVigourVal }} </view>
					<img
						src="../../static/home/hotVal.png"
						style="
							width: 66rpx;
							height: 66rpx;
							display: inline-block;
						"
					/>
				</view>

				<button
					@getuserinfo="wxGetUserInfo(item.id)"
					class="btn"
					type="primary"
					open-type="getUserInfo"
					withCredentials="true"
					lang="zh_CN"
				>
					打榜
				</button>
			</view>
		</view>
		<view v-if="showModal">
			<DabangModal
				:showModal="showModal"
				:starId="starId"
				@closeDabang="closeDabang"
			></DabangModal>
		</view>
		<!-- 登录弹窗 -->
		<!-- <view v-if="showLogin">
			<LoginModal :show="showLogin" @closeLogin="closeLogin"></LoginModal>
		</view> -->
	</view>
</template>

<script>
import DabangModal from './../../components/dabangModal/index.vue'
import LoginModal from '../../components/home/loginModal.vue'
export default {
	props: ['rankingList'],
	components: {
		DabangModal,
		LoginModal,
	},
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

			starId: '', //明星id
			showModal: false, //打榜弹窗
			showLogin: false, //默认不展示登录弹窗
		}
	},
	onLoad() {
		this.login()
	},
	onShow() {
		this.login()
	},
	created() {
		this.login()
	},
	mounted() {
		this.login()
	},
	methods: {
		// 关闭登录框
		closeLogin() {
			this.showLogin = false
		},
		closeDabang(data) {
			this.showModal = false

			this.$emit('loadData', data)
		},
		routerStarDetail(id) {
			uni.navigateTo({
				url: `/pages/starDetail/starDetail?id=${id}`,
			})
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
		updateUserInfo(id) {
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
					_this.starId = id
					_this.showModal = true
				})
				.catch((res) => {
					this.starId = id
					this.showModal = true
				})
		},
		wxGetUserInfo(id) {
			this.$u
				.get('/personalCenter/personalCenterInfo')
				.then((res) => {
					this.starId = id
					this.showModal = true
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
							_this.updateUserInfo(id)
						},
						fail: function (fail) {
							console.log(fail, 'fail用户信息')
						},
					})
				})
		},
	},
}
</script>

<style lang="scss" scoped>
// 榜单
.list-th {
	margin: 0 20rpx;
	border-radius: 5rpx;
	background: #fff;
}
.list-row {
	display: flex;
	align-items: center;
	flex-direction: row;
	// margin-top: 20rpx;
	border-bottom: 1px solid #ddd;
	padding-bottom: 20rpx;
	padding-top: 20rpx;
	//   justify-content: space-around;
}
.list-row:last-child {
	border: none;
}
.num-body {
	margin-right: 24rpx;
	.num {
		width: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
	}
}
.img-body {
	margin-right: 22rpx;
}
.name {
	width: 150rpx;
	text-align: left;
	color: #333333;
	font-weight: bold;
	font-size: 28rpx;
}
// 按钮区
.btn-area {
	display: flex;
	justify-content: center;
	align-items: center;
	.val {
		display: flex;
		align-items: center;
        justify-content:flex-end;
		position: absolute;
		right: 150rpx;
		width: 200rpx;
		margin-top: 5rpx;
		font-size: 24rpx;
		color: #333333;
		font-size: 12px;
		margin-top: -5rpx;
		.val-text {
			display: inline-block;
			position: relative;
		}
	}
	.btn {
		margin: 0;
		padding: 0;
		border-radius: 0;
		border: none;
		font-size: 1em;
		background-color: transparent;

		// 重置按钮完成
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 30rpx;
        
					
						height: 42rpx;
						line-height: 42rpx;
						width: 100rpx;
						padding: 0 10rpx;
						border-radius: 23rpx;
						text-align: center;
						background: linear-gradient(to right, #f83a3a, #f7c18b);
						color: #fff;
	
	}
}
</style>
