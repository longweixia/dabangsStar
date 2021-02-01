<template>
	<view class="home-page">
		<!-- 轮播 -->
		<view class="home-swiper">
			<u-swiper
				:list="swiperList"
				@click="clickSwiper"
				@change="changeSwiper"
				height="590"
				mode="dot"
				indicator-pos="bottomCenter"
				:autoplay="true"
				interval="2000"
				name="img"
			>
			</u-swiper>
			<img
				@click="routerSearch"
				class="search-icon"
				src="../../static/home/searchBtn.png"
			/>
		</view>
		<!-- 我的守护 -->
		<view class="home-my-guard">
			<!-- 周冠军 -->
			<view class="week-area" v-if="current === 2">
				<view class="row-title">
					上周周榜冠军
					<text class="row-name">
						{{ weekName }}
					</text>
				</view>
				<!-- <img
        @click="routerSearch"
        class="week-img"
        src="./weekOne.png"
      />
        <img
        @click="routerSearch"
        class="week-img-ai"list-top-three
        src="./weekOneAi.png"
      /> -->
			</view>
			<!-- 月冠军 -->
			<view class="week-area" v-if="current === 3">
				<view class="row-title"> {{ monthNum + 1 }}月月榜冠军 
                    <text class="row-name">
					{{ monthName }}
				</text>
                </view>
			
				<!-- <img
        @click="routerSearch"
        class="week-img"
        src="./monthOne.png"
      /> -->
				<!-- <img
        @click="routerSearch"
        class="week-img-ai"
        src="./monthOneAi.png"
      />
        <img
        @click="routerSearch"
        class="week-img-star"
        src="./monthOneStar.png"
      /> -->
			</view>
			<text class="guard-title"> 我的守护 </text>
			<view class="guard-list" align="center">
				<view
					class="guard-card"
					v-for="(item, index) in myGuardList"
					:key="index"
				>
					<u-image
						class="guard-img"
						width="80rpx"
						height="80rpx"
						:src="item.avatar"
						shape="circle"
						@click="routerStarDetail(item.id, item.name)"
					></u-image>
					<view class="guard-right">
						<view
							class="guard-name"
							@click="routerStarDetail(item.id, item.name)"
							>{{ item.name }}</view
						>
						<view class="guard-btn" @click="dabang(item.id)"
							>打榜</view
						>
					</view>
				</view>
			</view>
		</view>
		<!-- 榜单tag -->
		<view class="home-tag">
			<rankingTabHasText
				v-if="sloganTextFlag"
				:tagList="tagList"
				@getRankTypeIndex="getRankTypeIndex"
			></rankingTabHasText>
			<rankingTabNo
				v-if="!sloganTextFlag"
				@getRankTypeIndex="getRankTypeIndex"
			></rankingTabNo>
		</view>
		<!-- 榜单前三 -->
		<view class="list-top-three" style="z-index: 10000">
			<view class="card-time">
				<view class="time-text">
					截至：
					<u-count-down
						color="#e34c4c"
						border-color="#909399"
						:show-days="true"
						:timestamp="timesecond"
						separator="zh"
						separator-size="14"
						font-size="24"
						separator-color="#606266"
					></u-count-down>
				</view>
			</view>
			<!-- 只有一个明星数据 -->
			<view class="card-area card-area1" v-if="topThreeList.length == 1">
				<view
					class="guard-card"
					v-for="(item, index) in topThreeList"
					:key="index"
					:class="'guard-card' + index"
				>
					<view
						class="img-area img-area1"
						@click="routerStarDetail(item.id, item.name)"
					>
						<view class="num">{{ item.rank }}</view>

						<img
							class="img-icon"
							:class="'img-head' + index"
							:src="iconList.icon2"
						/>

						<img
							class="img-star"
							src="../../static/home/oneStart.png"
						/>
						<img
							class="img-head"
							:class="'img-head' + index"
							:src="item.starAvatar"
							style="border: 1px solid #ddd"
						/>
					</view>

					<view
						class="name"
						@click="routerStarDetail(item.id, item.name)"
						>{{ item.starName }}</view
					>
					<!-- <view class="val" @click="routerStarDetail(item.id, item.name)">
             <img
              class="img-head"
              src="../../static/home/hotVal.png"
              style="border: 1px solid #ddd"
            />
          </view> -->
					<view
						class="val"
						@click="routerStarDetail(item.id, item.name)"
						>{{ item.totalVigourVal }}</view
					>
					<view class="btn-area">
						<view class="btn" @click="dabang(item.starId)"
							>打榜</view
						>
					</view>
				</view>
			</view>

			<!--有2个以上明星数据 -->
			<view
				class="card-area"
				v-if="topThreeList.length > 1"
				style="z-index: 10000"
			>
				<view
					class="guard-card"
					v-for="(item, index) in topThreeList"
					:key="index"
					:class="'guard-card' + index"
					style="z-index: 10000"
				>
					<view
						class="img-area"
						:class="'img-area' + index"
						style="z-index: 10000"
						@click="routerStarDetail(item.id, item.name)"
					>
						<view class="num">{{ item.rank }}</view>
						<!-- 第二名 -->
						<img
							v-if="index === 0"
							class="img-icon"
							:class="'img-head' + index"
							:src="iconList.icon1"
						/>
						<!-- 第一名 -->
						<img
							v-if="index === 1"
							class="img-icon"
							:class="'img-head' + index"
							:src="iconList.icon2"
						/>
						<!-- 第三名 -->
						<img
							v-if="index === 2"
							class="img-icon"
							:class="'img-head' + index"
							:src="iconList.icon3"
						/>
						<!-- 第一名的背景五角星 -->
						<img
							class="img-star"
							v-if="index === 1"
							src="../../static/home/oneStart.png"
						/>
						<!-- 头像 -->
						<img
							class="img-head"
							:class="'img-head' + index"
							:src="item.starAvatar"
							style="border: 1px solid #ddd"
						/>
					</view>

					<view
						class="name"
						@click="routerStarDetail(item.id, item.name)"
						>{{ item.starName || '无' }}</view
					>
					<view
						class="val"
						@click="routerStarDetail(item.id, item.name)"
					>
						<!-- <img
              class="img-head" 
              src="../../static/home/hotVal.png"
              style="width:66rpx;height:66rpx"
            /> -->
					</view>
					<view
						class="val"
						@click="routerStarDetail(item.id, item.name)"
					>{{ item.totalVigourVal }}
						<img
							src="../../static/home/hotVal.png"
							style="width: 66rpx; height: 66rpx"
						/></view
					>
					<view
						class="btn-area"
						style="z-index: 10000"
						@click="dabang(item.id)"
					>
						<view class="btn" style="z-index: 10000">打榜</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view @click="routerTExt" style="height:100px;width:100px"> 去测试数据</view> -->
		<!-- 榜单前三以外 -->
		<view class="list-four-th">
			<starRankingList
				:rankingList="rankingList"
				@loadData="closeDabang"
				style="
					background: #fff;
					padding-left: 10px;
					padding-right: 10px;
				"
			></starRankingList>
		</view>

		<!-- <view class="home-bottom" >
      <img class="home-bottom-img" src="../../static/home/homeBottom.png" />
      
    </view> -->
		<view class="my" @click="routerToCenter">
			<u-icon name="account-fill" color="#E34C4C" size="40"></u-icon>
			<view class="my-text">我的</view>

			<!-- <img class="my-img" src="../../static/home/my.png" @click="routerToCenter" /> -->
		</view>
		<u-toast ref="uToast" />

		<view v-if="showModal">
			<DabangModal
				:showModal="showModal"
				:starId="starId"
				@closeDabang="closeDabang"
			></DabangModal>
		</view>
		<!-- <button class="bottom" type="primary" @click="getToken">
          （浏览器）登录
        </button> -->

		<!-- 登录弹窗 -->
        <view v-if="showLogin">
          <LoginModal :show="showLogin" @closeLogin="closeLogin"></LoginModal>
	    </view>
	</view>
</template>

<script>
import rankingTabNo from '../../components/home/ranking-tab-no.vue'
import rankingTabHasText from '../../components/home/ranking-tab-hasText.vue'
import starRankingList from '../../components/home/star-ranking-list.vue'
import DabangModal from './../../components/dabangModal/index.vue'
import LoginModal from '../../components/home/loginModal.vue'
export default {
	name: 'home',
	components: {
		rankingTabNo,
		rankingTabHasText,
		starRankingList,
        DabangModal,
        LoginModal
	},
	data() {
		return {
            showLogin: false, //默认不展示登录弹窗
			weekName: '',
			current: 0,
			sloganOpen: false,
			starId: '', //明星id
			showModal: false, //打榜弹窗
			// 轮播
			swiperList: [],
			// 我的守护
			myGuardList: [
				// {
				//   image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
				//   name: "邓伦",
				// }
			],
			// 榜单前三
			iconList: {
				icon3: '../../static/home/AnCrown3.png',
				icon1: '../../static/home/AnCrown2.png',
				icon2: '../../static/home/AnCrown1.png',
			},
			topThreeList: [],
			// 榜单前三以外
			rankingList: [],
			tagList: [
				{
					text: '',
				},
				{
					text: '',
				},
				{
					text: '',
				},
				{
					text: '',
				},
			],
			timeVal: '',
			sloganTextFlag: false, //是否在个人中心设置明星tag文字
			timesecond: 0,
			flagWeek: 0, //当前点击的是周榜
			monthNum: null,
			monthName: '',
		}
	},

	watch: {
		flagWeek: {
			handler(newVal, oldVal) {
				if (newVal) {
					//  月榜
					this.getDaojishiMouth()
				} else if (newVal === 0) {
					//  周榜
					this.getDaojishiWeek()
				}
			},
			// immediate: true,
			deep: true,
		},
	},

	mounted() {
		this.monthNum = new Date().getMonth()
		this.getDaojishiWeek()

		this.$emit('footer', false)
	},
	onShow() {
		// 个人信息-标语
		console.log('刷新页面')
		// this.getWeekOne(0)
		// this.getWeekOne(1)
		// 明星排行榜,默认查总榜
		this.getRankList(0)
		// 轮播图
		this.carouselList()
		// 我的守护
		this.selectMyGuard()
		this.getMyInfo()
	},
	methods: {
        // 关闭登录框
        closeLogin(){
            this.showLogin = false
        },
		changeSwiper(index) {
			this.current = index
		},
		// 获取当前月的最后一天时间
		getlastMoutnTime() {
			var date = new Date()
			///获取当前月份
			var currentmonth = date.getMonth()
			//获取下一个月份
			var nextmonth = currentmonth + 1
			//获取下一月份的第一天
			var nextmonthfirstday = new Date(date.getFullYear(), nextmonth, 1)
			//一天的毫秒数
			var oneday = 1 * 24 * 3600 * 1000
			//下一个月的第一天减去一天时间就是当前月份的最后一天时间
			var lasttime = new Date(nextmonthfirstday - oneday).getTime()
			return lasttime
		},
		getDaojishiMouth() {
			let times = this.getlastMoutnTime() - new Date().getTime()
			this.timesecond = times / 1000
		},
		//     getlastMoutnTime() {
		//   var date = new Date();
		//   ///获取当前月份
		//   var currentmonth = date.getMonth();
		//   //获取下一个月份
		//   var nextmonth = currentmonth + 1;
		//   //获取下一月份的第一天
		//   var nextmonthfirstday = new Date(date.getFullYear(), nextmonth, 1);
		//   //一天的毫秒数
		//   var oneday = 1 * 24 * 3600 * 1000;
		//   //下一个月的第一天减去一天时间就是当前月份的最后一天时间
		//   var lasttime = new Date(nextmonthfirstday - oneday).getTime();
		//   return lasttime;
		// },
		getDaojishiWeek() {
			let nowData = new Date()
			//获取今天的是周几
			let currentDay = nowData.getDay()
			//把currentDay == 0赋值给周日
			if (currentDay == 0) {
				currentDay = 7
			}

			let times = (7 - currentDay) * 24 * 3600 + Number(this.getDayLat())
			this.timesecond = times
			//   console.log(this.timesecond, times,this.getDayLat(),"描述");

			// 获取当前时间的具体时间
			// console.log("当前时间" +new Date(monDayTime).toLocaleTimeString());
		},
		getDayLat() {
			let now = new Date()
			let hour = now.getHours() // 时
			let min = now.getMinutes() // 分
			let sec = now.getSeconds() // 秒

			let h = 24 - hour // 倒计时 时
			if (min > 0 || sec > 0) {
				h -= 1
			}
			let m = 60 - min // 倒计时 分
			if (sec > 0) {
				m -= 1
			}
			if (m == 60) {
				m = 0
			}
			let s = 60 - sec // 倒计时 秒
			if (s == 60) {
				s = 0
			}

			let result = h * 3600 + m * 60 + s
			//   console.log(result);
			return result
		},

		getToken() {
			this.$u
				.post(`https://123.207.120.31:18001/common/testLogin?id=1`)
				.then((res) => {
					//   console.log(res, "拿到token");
					uni.setStorageSync('Authorization', res.token)
				})
		},

		closeDabang() {
			this.showModal = false
			this.selectMyGuard()
			this.getRankTypeIndex(2)
		},
		// 打榜弹窗
		dabang(id) {
                this.$u
				.get('/personalCenter/personalCenterInfo')
				.then((res) => {
                this.starId = id
				this.showModal = true
				})
				.catch((res) => {
                 
                    if(!this.$toLogin(res)){
                        this.showLogin = true
                    };
                    return false
				})
		},
		// 获取个人信息--我的标语
		getMyInfo() {
			this.$u
				.get('/personalCenter/personalCenterInfo')
				.then((res) => {
					// 回显标语
					// 如果有标语且开启了就显示带icon的tag
					if (res.slogan && res.sloganOpen) {
						// this.sloganOpen = true;
						this.sloganTextFlag = true //有标语
						this.tagList.forEach((item, index) => {
							this.tagList[index].text = res.slogan[index]
						})
					} else {
						this.sloganTextFlag = false //有标语
						//   否则显示原有的icon
						// this.sloganOpen = false; //无标语
					}
				})
				.catch((res) => {
				
				})
		},
		// 获取我的守护
		selectMyGuard() {
			this.$u
				.post('/home/selectMyGuard')
				.then((res) => {
					this.myGuardList = res.list
				})
				.catch((res) => {
					//   this.$toLogin(res);
				})
		},
		// 点击周榜/月榜
		getRankTypeIndex(data) {
			this.flagWeek = data
			this.rankingList = []
			this.getRankList(data)
		},
		getWeekOne(index) {
			this.$u
				.post('/home/weekRank/list', {
					pageNum: 1,
					pageSize: 20,
					rankType: index,
				})
				.then((res) => {
					if (index === 0) {
						this.weekName = res.list[0].starName
					} else if (index === 1) {
						this.monthName = res.list[0].starName
					}
				})
		},
		// 获取明星榜单--总榜
		// 0周榜；1月榜；2总榜
		getRankList(data) {
			this.$u
				.post('/home/weekRank/list', {
					pageNum: 1,
					pageSize: 20,
					rankType: data,
				})
				.then((res) => {
					// 按原型图，第一名在第二的位置，所以要把第一名和第二名换一下
					// 处理排名前三的明星
					let list = res.list.slice(0, 3)
					if (list.length > 1) {
						// debugger
						;[list[0], list[1]] = [list[1], list[0]]
					}
					this.topThreeList = list
					// 处理排名第四以后的明星
					if (res.list.length > 3) {
						this.rankingList = res.list.slice(3)
					}
				})
				.catch((res) => {
					//   this.$toLogin(res);
				})
		},
		// 获取轮播
		carouselList() {
			this.$u.get('/home/carousel/list').then((res) => {
				this.swiperList = res
				if (this.swiperList && this.swiperList.length > 0) {
					this.weekName = this.swiperList[2].starName
					this.monthName = this.swiperList[3].starName
				}
			})
		},
		clickSwiper(index) {
			if (index < 2) {
				uni.navigateTo({
					url: `/pages/index/SecondPage?current=${index}`,
				})
			}
		},
		routerSearch() {
			uni.navigateTo({
				url: '/pages/search/search',
				// url: "/pages/center/center"
			})
		},
		routerStarDetail(id, name) {
			uni.navigateTo({
				url: `/pages/starDetail/starDetail?id=${id}&name=${name}`,
			})
		},
		routerToCenter() {
			uni.navigateTo({
				url: `/pages/center/index`,
			})
		},
		routerTExt() {
			uni.navigateTo({
				url: `/pages/index/test`,
			})
		},
	},
}
</script>

<style lang="scss" scoped>
/deep/ .u-countdown-item {
	background: none !important;
}
.home-page {
	background: #f5f8ff;
	// 轮播区
	.home-swiper {
		position: relative;
	}
	// 周冠军
	.week-area {
		position: absolute;
		bottom: 20rpx;
		left: 10rpx;
		width: 327rpx;
		height: 267rpx;
		.row-title {
			font-size: 20px;
			font-weight: bold;
			color: #fff;
            text-shadow: 2px 2px 1px #000;
		}
		.row-name {
			//    position: absolute;
			margin-left: 10rpx;
			font-size: 20px;
			font-weight: bold;
			color: #ff3c3c;
            text-shadow: 2px 2px 1px #fff;
		}
		.month-name {
			top: 160rpx;
			left: 115rpx;
		}
		.week-img {
			width: 100%;
			height: 100%;
		}
		.week-img-ai {
			width: 194rpx;
			height: 224rpx;
			position: absolute;
			top: 240rpx;
			left: 40rpx;
		}
		.week-img-star {
			width: 52rpx;
			height: 45rpx;
			position: absolute;
			top: 30rpx;
			left: 240rpx;
		}
	}
	/deep/ .u-swiper-indicator {
		bottom: 120rpx !important;
	}
	// 搜索区
	.search-icon {
		position: absolute;
		top: 100rpx;
		left: 28rpx;
		width: 50rpx;
		height: 50rpx;
	}
	// 我的守护
	.home-my-guard {
		position: relative;
		top: -100rpx;
		margin-left: 20rpx;
		z-index: 10000;
		min-height: 100rpx;
		margin-right: 20rpx;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.2),
			rgba(255, 255, 255, 0.6),
			rgba(255, 255, 255, 1)
		);
		// box-shadow: 0px 0px 6px rgba(177, 177, 177, 0.16);
		border-top-right-radius: 10rpx;
		padding-bottom: 20rpx;
		.guard-title {
			color: #e34c4c;
			position: absolute;
			top: -40rpx;
			height: 40rpx;
			line-height: 40rpx;
			background: rgba(233, 233, 234, 0.26);
			padding: 10rpx 20rpx 0 20rpx;
			padding-bottom: 0;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			font-size: 22rpx;
			font-weight: bold;
		}
		.guard-list {
			margin-top: 0;
			overflow-y: scroll;
			white-space: nowrap;
			width: 700rpx;
			.guard-card {
				display: inline-block;
				width: 240rpx;
				height: 100rpx;
				margin-left: 20rpx;
				height: 130rpx;
				border-radius: 10rpx;
				background: #fff;
				margin-top: 24rpx;
				margin-bottom: 5rpx;
				box-shadow: 0 0 12px rgba(105, 105, 105, 0.16);
				.guard-img {
					display: inline-block;
					margin-top: 25rpx;
					margin-left: 25rpx;
				}
				.guard-right {
					position: relative;
					display: inline-block;
					margin-left: 24rpx;
					text-align: center;
					.guard-name {
						position: relative;
						top: -15rpx;
					}
					.guard-btn {
						position: relative;
						top: -10rpx;
						height: 46rpx;
						line-height: 46rpx;
						width: 100rpx;
						padding: 0 10rpx;
						border-radius: 23rpx;
						text-align: center;
						background: linear-gradient(to right, #f83a3a, #f7c18b);
						color: #fff;
					}
				}
			}
			.guard-card:last-child {
				margin-right: 20rpx;
			}
		}
	}
	// 榜单tag
	.home-tag {
	}
	// 榜单前三
	.list-top-three {
		height: 464rpx;
		margin-top: 20rpx;
		padding-top: 14rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		position: relative;
		top: -100rpx;
		background: linear-gradient(to bottom, #feecb3, #f64d71);
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
		z-index: -2;
		.card-time {
			background: #feecca;
			width: 350rpx;
			height: 42rpx;
			line-height: 42rpx;
			text-align: center;
			margin-bottom: 40rpx;
			border-radius: 21rpx;
			margin-left: 26rpx;
			.time-text {
				color: #e34c4c;
				font-size: 10px;
			}
		}
		.card-area {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 80rpx;
		}
		.card-area1 {
			margin-top: 0;
		}
		.guard-card {
			position: relative;
			color: #fff;
			height: 260rpx;
			width: 33%;
			display: flex;
			//  justify-content: center;
			align-items: center;
			flex-direction: column;
			.name {
				font-weight: bold;
			}
			.name1 {
				font-weight: bold;
				margin-top: 20rpx;
			}
			.img-area {
				position: relative;
				.img-head {
					width: 118rpx;
					height: 118rpx;
					border-radius: 59rpx;
					z-index: 100;
				}
				.img-star {
					position: absolute;
					width: 222rpx;
					height: 232rpx;
					top: -40rpx;
					left: -30rpx;
					z-index: -1;
				}
				.img-star1 {
					position: absolute;
					width: 222rpx;
					height: 232rpx;
					top: -50rpx;
					left: -55rpx;
					z-index: -1;
				}
				.num {
					transform: rotate(325deg);
					font-size: 7px;
					position: absolute;
					left: 8rpx;
					top: -12rpx;
					z-index: 1000 !important;
				}
				.img-icon {
					position: absolute;
					left: -12rpx;
					top: -20rpx;
					width: 46rpx;
					height: 46rpx;
				}
			}
			.img-area1 {
				.img-head {
					width: 168rpx;
					height: 168rpx;
					border-radius: 84rpx;
				}
				.num {
					transform: rotate(325deg);
					font-size: 7px;
					position: absolute;
					left: 20rpx;
					top: -6rpx;
					z-index: 1000 !important;
				}
				.img-icon {
					position: absolute;
					left: -16rpx;
					top: -32rpx;
					width: 68rpx;
					height: 68rpx;
				}
			}
			.btn-area {
				text-align: center;
				margin-top: 14rpx;
				.btn {
					height: 46rpx;
					line-height: 46rpx;
					width: 110rpx;
					padding: 0 10rpx;
					border-radius: 23rpx;
					text-align: center;
					background: linear-gradient(to right, #f83a3a, #f7c18b);
					color: #fff;
				}
			}
			.btn-area1 {
				text-align: center;
				margin-top: 44rpx;
				.btn {
					height: 46rpx;
					line-height: 46rpx;
					width: 110rpx;
					padding: 0 10rpx;
					border-radius: 23rpx;
					text-align: center;
					background: linear-gradient(to right, #f83a3a, #f7c18b);
					color: #fff;
				}
			}
		}
		.guard-card1 {
			top: -50rpx;
		}
	}
	// 榜单前三以外
	.list-four-th {
		// margin: 20rpx;
		position: relative;
		top: -135rpx;
		margin-bottom: 80rpx;
	}
}
.wrap {
	padding: 40rpx;
}
.u-row {
	margin: 40rpx 0;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
.bg-purple-dark {
	background: #99a9bf;
}
.home-bottom {
	position: relative;
	margin-left: 20rpx;
	margin-right: 20rpx;
	height: 132rpx;
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
.val {
	display: flex;
	align-items: center;
    justify-content: center;
    display: -webkit-flex;
	margin-left: 20rpx;
}
</style>
