<template>
	<view
		style="
			background: #f5f8ff;
			padding-bottom: 20rpx;
			width: 100%;
			overflow-x: hidden;
		"
	>
		<view class="detail-bg-img">
			<img
				@click="routerTohome"
				:style="{ top: iconTop }"
				class="search-icon" 
				src="../../static/home/right-btn2.png"
			/>
			<!-- 弹幕 -->
			<view
				style="
					overflow: hidden;
					position: absolute;
					width: 100%;
					height: 200rpx;
					pointer-events: none;
					top: 260rpx;
					left: 20rpx;
					z-index: 100000;
				"
			>
				<view
					class="danmu-li"
					v-for="(item, index) in listData"
					:class="item.type"
					:style="[item.style]"
					:key="index"
				>
					<view class="danmu-inner">
						<view class="user-box">
							<view class="user-img">
								<view class="img-box">
									<image :src="item.item.avatarUrl"></image>
								</view>
							</view>
							<view class="user-text cl1">
								{{ item.item.nickName }}
							</view>
							<view class="user-status cl1">
								打榜了<text
									style="color: #e34c4c; font-weight: bold"
								>
									{{ item.item.vigourVal }}</text
								>热力值
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 弹幕结束 -->
			<img class="img" :src="detailImg" />
			<!-- 打榜弹窗 -->
			<!-- <view class="toast-db">
        <img class="imgs" :src="StarGuardList.avatarUrl" />
        <view class="text">
          {{ StarGuardList.nickName }}打榜<text class="red-num">
            {{ StarGuardList.vigourVal }}</text
          >热力值</view
        >
      </view> -->
			<!-- <view class="detail-title"> 为爱豆加油 </view> -->
		</view>

		<!-- 当前明星 -->
		<view class="star-card">
			<view class="card-img">
				<img src="../../static/home/starCard.png" class="bg-img" />

				<!-- 明星信息 -->
				<view class="card--content" style="z-index: 10000">
					<view class="list-top" style="z-index: 10000">
						<u-image
							class="img"
							width="100rpx"
							height="100rpx"
							:src="starInfo.avatar"
							shape="circle"
						></u-image>
						<view class="row-text">
							<view class="name"> {{ starInfo.name }}</view>
							<view class="rank-text"
								>本周排名：{{ starInfo.thisWeekRank }}
								<text style="margin-left: 20rpx"
									>本月排名：{{
										starInfo.thisMonthRank
									}}</text
								>
							</view>
						</view>
						<view class="btn-group" style="z-index: 10000">
							<view
								class="btn"
								@click="dabang(starInfo.id)"
								style="z-index: 10000"
							>
								为{{ starInfo.name }}打榜
							</view>
						</view>
					</view>
					<!-- 中间按钮 -->
					<view class="center-btn">
						<view class="btn">
							<img src="../../static/home/leftRow.png" />
							<view class="btn-text">粉丝周榜</view>
						</view>
						<view class="btn">
							<img src="../../static/home/rightRow.png" />
							<view class="btn-text btn-text2">粉丝月榜</view>
						</view>
					</view>
					<!-- 底部排名 -->
					<view class="list-bottom">
						<view class="star-ranking">
							<view
								v-for="(item, index) in rankingListWeek"
								:key="index"
								class="img-list"
							>
								<u-image
									class="img"
									width="60rpx"
									height="60rpx"
									:src="item.avatarUrl"
									shape="circle"
									v-if="index < 3"
								>
								</u-image>
								<view class="num" v-if="index < 3">{{
									index + 1
								}}</view>
							</view>
							<view class="more" @click="routerFanRanking(0)">
								<img src="../../static/home/more.png" />
							</view>
						</view>
						<view class="star-ranking ranking2">
							<view
								v-for="(item, index) in rankingListMouth"
								:key="index"
								class="img-list"
							>
								<u-image
									class="img"
									width="60rpx"
									height="60rpx"
									:src="item.avatarUrl"
									shape="circle"
									v-if="index < 3"
								>
								</u-image>
								<view class="num" v-if="index < 3">{{
									index + 1
								}}</view>
							</view>
							<view class="more" @click="routerFanRanking(1)">
								<img src="../../static/home/more.png" />
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 抽奖互动 -->
		<prizePraw :starId="ids" @getmyInfo="selectStarInfo"></prizePraw>
		<!-- 资源 -->
		<resources
			:ids="ids"
			style="margin-top: 20rpx"
			:starName="starName"
			@getstarName="selectStarInfo"
		></resources>
		<!-- <view class="home-bottom">
      <img class="home-bottom-img" src="../../static/home/homeBottom.png" />
      <view class="my">
        <view class="my-card" @click="routerToCenter">
          <img class="my-img" src="../../static/home/my.png" />
          <view>我的</view>
        </view>
      </view>
    </view> -->

		<u-toast ref="uToast" />
		<view v-if="showModal">
			<DabangModal
				:showModal="showModal"
				:starId="ids"
				@closeDabang="closeDabang"
			></DabangModal>
		</view>
		<view class="my" @click="routerToCenter">
			<u-icon name="account-fill" color="#E34C4C" size="40"></u-icon>
			<view class="my-text">我的</view>

			<!-- <img class="my-img" src="../../static/home/my.png" @click="routerToCenter" /> -->
		</view>
	</view>
</template>

<script>
import prizePraw from '../../components/prize-wraw/prize-wraw.vue'
import resources from '../../components/resources/resources.vue'
import DabangModal from './../../components/dabangModal/index.vue'
export default {
	components: {
		prizePraw,
		resources,
		DabangModal,
	},
	onShareAppMessage: function (res) {
		//     //可以通过res.from来判断是button分享还是menu分享（右上角）
		//     console.log(res);
		//     return {
		//       // 分享的标题如果没有则自定义为小程序名称全写
		//       title: "我是分享界面",
		//       //分享之后的路径如果没有则自定义为首页可以用模板字符串语法加入变量
		//       path:`pages/logs/logs`,
		//       //分享图片的本地地址如果不写则为默认当前屏幕截图可以是网络地址，本地要放到static里面
		//       imageUrl:"../../static/shareWechart.png"
		//     }
		//   // }
		if (!uni.getStorageSync('Authorization')) {
			uni.showModal({
				title: '请登录',
				content: '登录后可以获取更多功能',
				success: (res) => {
					if (res.confirm) {
						uni.navigateTo({
							url: '/pages/center/center',
						})
					} else if (res.cancel) {
					}
				},
			})
		} else {
			setTimeout(() => {
				this.shareinfo()
			}, 2000)
			// return eventHandler接收到的分享参数
			return {
				title: '超级爱豆榜', // 分享名称
				path: 'pages/index/index', // 这里写你这个页面的路径
				imageUrl: '../../static/shareWechart.png', //这个是显示的图片，不写就默认当前页面的截图
			}
		}
	},
	data() {
		return {
			iconTop: '', // 搜索icon距离顶部的距离
			looNum: 0, //弹幕次数
			listData: [],
			starName: '',
			showModal: false,
			starInfo: {}, // 明星详情数据
			detailImg: '', //顶部明星图
			// 当前明星数据
			listFourTh: [],
			// 周榜/月榜
			listWeek: [],
			ids: null,
			StarGuardList: {}, //明星打榜弹窗
			rankingListWeek: [], //粉丝周榜
			rankingListMouth: [], //粉丝月榜
		}
	},
	props: {
		//rightToLeft leftToRight leftBottom
		// showModal: {
		// 	type: Boolean,
		// 	default: false,
		// },
		rankType: {
			type: Number,
			default: 0,
		},
		starId: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'leftBottom',
		},
		minTime: {
			type: Number,
			default: 4,
		},
		maxTime: {
			type: Number,
			default: 9,
		},
		minTop: {
			type: Number,
			default: 0,
		},
		maxTop: {
			type: Number,
			default: 100,
		},
		hrackH: {
			//轨道高度
			type: Number,
			default: 40,
		},
		noStacked: {
			//不允许堆叠(暂不可用)
			type: Array,
			default() {
				return []
			},
		},

		title: {
			type: String,
			default: '提示',
		},
		placeholder: {
			type: String,
			default: '请点击输入',
		},
		name: {
			type: String,
			default: 'text',
		},
		typetext: {
			type: String,
			default: 'text',
		},
		value: {
			type: String,
			default: '',
		},
		cancelColor: {
			type: String,
			default: '#999999',
		},
		confirmColor: {
			type: String,
			default: '#333333',
		},
		cancelText: {
			type: String,
			default: '取消',
		},
		confirmText: {
			type: String,
			default: '确定',
		},
	},
	onLoad(option) {
		this.ids = option.id
	},
	watch: {
		starInfo: {
			handler(newVal, oldVal) {
				this.starName = newVal.name
				//  this.donghua();
			},
			immediate: true,
			deep: true,
		},
	},
	onShow() {
		this.iconTop = wx.getMenuButtonBoundingClientRect().top + 'px'
	},
	mounted() {
		// 明星详情
		this.selectStarInfo()
		// 打榜弹窗
		this.selectStarGuardList()
		// 粉丝周榜
		this.getrankList(0)
		// 粉丝周榜
		this.getrankList(1)

		this.hrackNum = Math.floor((this.maxTop - this.minTop) / this.hrackH)
	},
	methods: {
		// 分享接口
		shareinfo() {
			let params = {
				starId: this.ids,
				type: 4, //任务类型 1-签到 2-抽奖 3-看视频 4-分享
			}
			this.$u
				.post('/starDetail/getVigourVal', params)
				.then((res) => {
					uni.showToast({
						title: '分享成功，获得30热力值',
						icon: 'none',
						duration: 1000,
					})
					this.selectStarInfo()
				})
				.catch((res) => {
					uni.showToast({
						title: res.message,
						icon: 'none',
						duration: 1000,
					})
				})
		},
		closeDabang() {
			this.showModal = false
			this.selectStarInfo()
			this.getrankList(0)
			this.getrankList(1)
		},
		// 打榜弹窗
		dabang(id) {
			if (!uni.getStorageSync('Authorization')) {
				uni.showModal({
					title: '请登录',
					content: '登录后可以获取更多功能',
					success: (res) => {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/center/center',
							})
						} else if (res.cancel) {
						}
					},
				})
			} else {
				this.ids = id
				this.showModal = true
			}
		},
		routerToCenter() {
			uni.navigateTo({
				url: `/pages/center/index`,
			})
		},
		routerTohome() {
wx.navigateBack({
  delta: 1
})

            console.log(1)
			// uni.navigateTo({
			// 	url: `/pages/index/index`,
			// })
		},
		// 获取轮播
		carouselList() {
			this.$u.post('/home/carousel/list').then((res) => {
				this.swiperList = res
			})
		},
		routerFanRanking(type) {
			//0是周榜，1是月榜
			uni.navigateTo({
				url: `/pages/starDetail/fanRanking?type=${type}&id=${this.ids}&name=${this.starInfo.name}`,
			})
		},
		// 获取明星详情页明星信息
		selectStarInfo() {
			this.rankingList = []
			this.$u
				.get('/starDetail/selectStarInfo', {
					id: this.ids,
				})
				.then((res) => {
					this.starInfo = res //　少了头像
					this.detailImg = res.detailImg
					// if (res.list && res.list.length > 0) {
					//   this.hasData = true;
					// } else {
					//   this.hasData = false;
					// }
				})
				.catch((res) => {
					this.$refs.uToast.show({
						title: res.message,
						// 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
						type: 'error ',
						duration: 1000,
						// 如果不需要图标，请设置为false
						icon: true,
					})
				})
		},
		//明星打榜弹窗
		selectStarGuardList() {
			this.$u
				.get('/starDetail/selectStarGuardList', {
					starId: this.ids,
				})
				.then((res) => {
					this.StarGuardList = res
					this.colrdo()

					// if (res.list && res.list.length > 0) {
					//   this.hasData = true;
					// } else {
					//   this.hasData = false;
					// }
				})
				.catch((res) => {
					this.$refs.uToast.show({
						title: res.message,
						// 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
						type: 'error ',
						duration: 1000,
						// 如果不需要图标，请设置为false
						icon: true,
					})
				})
		},
		// 粉丝周榜/月榜
		getrankList(name) {
			this.$u
				.post('/starDetail/selectFensRank', {
					id: this.ids,
					pageNum: 1,
					pageSize: 20,
					rankType: name,
				})
				.then((res) => {
					if (name === 0) {
						this.rankingListWeek = res.list
					} else if (name === 1) {
						this.rankingListMouth = res.list
					}
				})
				.catch((res) => {})
		},
		// 添加弹幕
		addDanmu(obj) {
			let data = {
				item: obj.item,
				id: Date.parse(new Date()),
				time: Math.ceil(
					Math.floor(
						Math.random() * (this.maxTime - this.minTime + 1) +
							this.minTime
					)
				),
				type: this.types,
			}
			if (this.type === 'leftBottom') {
				let objData = {
					item: data.item,
					type: 'leftBottomEnter',
					style: {
						transition: `all 0.5s`,
						animationDuration: `0.5s`,
						transform: `translateX(0%)`,
						bottom: `${this.minTop}px`,
					},
				}

				let listLen = this.listData.length
				let hrackNum = this.hrackNum
				for (let i in this.listData) {
					if (this.listData[i].status === 'reuse') {
						//重用
						this.$set(this.listData, i, objData)
					} else if (this.listData[i].status === 'reset') {
						//重置
						this.listData[i].style.transition = 'none'
						this.listData[i].style.bottom = 0
						this.listData[i].status = 'reuse'
					} else if (this.listData[i].status === 'recycle') {
						//回收
						this.listData[i].type = 'leftBottomExit'
						this.listData[i].status = 'reset'
					} else {
						this.listData[i].style.bottom =
							parseInt(this.listData[i].style.bottom) +
							this.hrackH +
							'px'
					}
					if (
						parseInt(this.listData[i].style.bottom) >=
							this.maxTop - this.hrackH &&
						this.listData[i].status !== 'reset'
					) {
						//需要回收
						this.listData[i].status = 'recycle'
					}
				}

				if (listLen < hrackNum + 3) {
					this.listData.push(objData)
				}
			}
		},
		colrdo() {
			//插入一条弹幕
			let that = this
			let list = []
			for (var i = 1; i < 20; i++) {
				list = list.concat(this.StarGuardList)
			}

			if (list && list.length > 0) {
				let old
				list.forEach((e, index) => {
					if (index < list.length - 1) {
						old = setTimeout(() => {
							that.addDanmu({ item: e })
						}, 1000 * (index + 2))
					} else if (index == list.length - 1) {
						clearTimeout(old)
					}
				})
			}
		},
	},
}
</script>

<style lang="scss" scoped>
// 搜索区
.search-icon {
	position: absolute;
	top: 100rpx;
	left: 28rpx;
	width: 65rpx;
	height: 65rpx;
	z-index: 1000000;
}
// 顶部背景图
.detail-bg-img {
	width: 100%;
	height: 580rpx;
	position: relative;
	.img {
		width: 100%;
		height: 100%;
		z-index: -2;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
	}
}
// 当前明星卡片
.star-card {
	margin-top: -60rpx;
	// 卡片背景图
	.card-img {
		position: relative;
		margin: 10rpx;
		.bg-img {
			//   position: absolute;
			z-index: 0;
			width: 100%;
			height: 444rpx;
		}
	}
	//   明星信息
	.card--content {
		width: calc(100% - 80rpx);
		margin-left: 20rpx;
		margin-right: 20rpx;
		// height: 60rpx;
		// line-height: 60rpx;
		position: absolute;
		top: 20rpx;
		z-index: 10;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		// padding-bottom: 20rpx;
		padding-left: 20rpx;
		.list-top {
			padding-top: 20rpx;
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: space-between;
			.img {
				position: relative;
				display: inline-block;
			}
			.btn-group {
				display: inline-block;
				// width: 180rpx;
				.btn {
					text-align: center;
					height: 54rpx;
					line-height: 54rpx;
					//   width: 100%;
					padding: 0 20rpx;
					border-radius: 27rpx;
					text-align: center;
					background: linear-gradient(to right, #f83a3a, #f7c18b);
					color: #fff;
				}
			}
			.row-text {
				text-align: left;
				font-size: 10px;
				font-family: Arial;
				display: inline-block;
				padding-left: 10rpx;
				.name {
					color: #fff;
					font-size: 14px;
				}
				.rank-text {
					font-size: 10px;
					color: #e34c4c;
				}
			}
		}
		//中间按钮
		.center-btn {
			margin-top: 30rpx;
			margin-bottom: 30rpx;
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: space-between;
			.btn {
				display: inline-block;
				position: relative;
				width: 172rpx;
				height: 50rpx;
				img {
					width: 100%;
					height: 100%;
				}
				.btn-text {
					position: absolute;
					top: 0;
					height: 50rpx;
					line-height: 50rpx;
					left: 28rpx;
					font-size: 12px;
					color: #ffffff;
					text-align: left;
				}
				.btn-text2 {
					left: 0;
					text-align: right;
					right: 28rpx;
				}
			}
		}
		//底部排名
		// 粉丝榜单
		.list-bottom {
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: space-between;
			padding-bottom: 20rpx;
			padding-top: 20rpx;
			margin-right: -60rpx;
			.star-ranking {
				width: 50%;
				text-align: left;
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
		// .bottom-rank {
		//   .list {
		//     display: inline-block;
		//   }
		// }
	}
}
// 打榜弹窗
.toast-db {
	position: absolute;
	height: 40rpx;
	line-height: 40rpx;
	bottom: 150rpx;
	left: 20rpx;
	display: flex;
	align-items: center;
	opacity: 0.6;
	.imgs {
		width: 40rpx;
		height: 40rpx;
		border-radius: 20rpx;
		display: inline-block;
	}
	.text {
		display: inline-block;
		font-size: 10px;
		.red-num {
			// font-weight: bold;
			color: #e34c4c;
			font-size: 12px;
		}
	}
}
// 详情标题
.detail-title {
	width: 100%;
	text-align: center;
	position: absolute;
	color: #fff;
	font-weight: bold;
	font-size: 17px;
	top: 60rpx;
}
.home-bottom {
	position: relative;
	height: 132rpx;
	top: 100rpx;
	margin-left: 20rpx;
	margin-right: 20rpx;
	.home-bottom-img {
		width: 100%;
		height: 100%;
	}
}
.my {
	position: fixed;
	width: 40px;
	height: 40px;
	right: 20rpx;
	bottom: 50rpx;
	font-size: 6px;
	z-index: 100000;
	border-radius: 20px;

	box-shadow: 0px 0px 6px rgba(255, 113, 113, 0.3);
	text-align: center;
	.my-text {
		color: #e34c4c;
		font-size: 12px;
		margin-top: -2px;
	}
}
.danmu-li {
	margin-top: -30px;
	position: absolute;
	width: 100%;
	transform: translateX(100%);
	animation-timing-function: linear;

	&.leftBottomEnter {
		animation-name: leftBottomEnter;
	}
	&.leftBottomExit {
		animation-name: leftBottomExit;
		animation-fill-mode: forwards;
	}

	&.rightToLeft {
		animation-name: rightToLeft;
	}

	&.leftToRight {
		animation-name: leftToRight;
	}

	.danmu-inner {
		display: inline-block;

		.user-box {
			display: flex;
			padding: 3rpx 40rpx 3rpx 10rpx;
			background: rgba(255, 255, 255, 0.3);
			border-radius: 32rpx;
			align-items: center;

			.user-img {
				.img-box {
					display: flex;

					image {
						width: 24rpx;
						height: 24rpx;
						background: rgba(55, 55, 55, 1);
						border-radius: 50%;
					}
				}
			}

			.user-status {
				margin-left: 10rpx;
				white-space: nowrap;
				font-size: 28rpx;
				font-weight: 400;
				color: rgba(0, 0, 0, 1);
			}

			.user-text {
				margin-left: 10rpx;
				// white-space: nowrap;
				font-size: 28rpx;
				font-weight: 400;
				// width: 150rpx;
				color: rgba(0, 0, 0, 1);
			}
		}
	}
}
</style>
