<template>
	<!-- 榜单tag -->
	<view class="list-ranking-type">
		<u-row gutter="16" justify="center" class="guard-list" align="center">
			<u-col
				span="3"
				class="guard-card"
				v-for="(item, index) in raningTypeList"
				:key="index"
				@click="routerRangking(item.rankType)"
			>
				<view class="card-content" :class="'card-content' + index">
					<view class="card-left">
						<view class="guard-type">{{ item.type }}</view>
						<view class="img-content">
							<img :src="item.img" />
						</view>
					</view>
					<view class="card-right">
						<view class="img-content">
							<img :src="item.icon" />
						</view>
						<view class="text">{{ item.text }}</view>
					</view>
				</view>
			</u-col>
		</u-row>
	</view>
</template>

<script>
export default {
	name: 'ranking-tab-hasText',
	props: {
		tagList: {
			type: Array,
			default: [],
		},
	},
	watch: {
		tagList: {
			handler(newVal, oldVal) {
				// 判断是否有一项有值，有一项有值就显示输入文字，否则显示默认
				let hasallVal = newVal.some((item, index) => {
					return item.value != ''
				})

			
				if (!hasallVal) {
					newVal.forEach((item, i) => {
						this.raningTypeList[i].text = this.defaultTagList[
							i
						].text
					})
				} else {
					//只要输入框中有一个有值，就同步显示输入框内容
					newVal.forEach((item, i) => {
						this.raningTypeList[i].text = item.value
					})
				}
				this.$forceUpdate(this.raningTypeList)
			},
			immediate: true,
			deep: true,
		},
	},
	data() {
		return {
			// 榜单tag
			raningTypeList: [
				{
					type: '周榜',
					text: '标',
					img: '../../static/home/weekText.png',
					icon: '../../static/home/starIcon.png',
					rankType: 0,
				},
				{
					type: '月榜',
					text: '语',
					img: '../../static/home/mouthText.png',
					icon: '../../static/home/starIcon.png',
					rankType: 1,
				},
				{
					type: '粉丝榜',
					text: '内',
					img: '../../static/home/fansText.png',
					icon: '../../static/home/starIcon.png',
					rankType: 3,
				},
				{
					type: '总榜',
					text: '容',
					img: '../../static/home/totalText.png',
					icon: '../../static/home/starIcon.png',
					rankType: 2,
				},
			],
			// 默认榜单tag
			defaultTagList: [
				{
					type: '周榜',
					text: '标',
					img: '../../static/home/weekText.png',
					icon: '../../static/home/starIcon.png',
					rankType: 0,
				},
				{
					type: '月榜',
					text: '语',
					img: '../../static/home/mouthText.png',
					icon: '../../static/home/starIcon.png',
					rankType: 1,
				},
				{
					type: '粉丝榜',
					text: '内',
					img: '../../static/home/fansText.png',
					icon: '../../static/home/starIcon.png',
					rankType: 3,
				},
				{
					type: '总榜',
					text: '容',
					img: '../../static/home/totalText.png',
					icon: '../../static/home/starIcon.png',
					rankType: 2,
				},
			],
		}
	},
	methods: {
		routerRangking(rankType) {
			uni.navigateTo({
				url: `/pages/index/rangkingList?type=${rankType}`,
			})
		},
		changeTag() {
			// let params = {
			//   endTime:"", //周结束时间
			//   hitListType: 0,//榜单类型 0：周榜；1：月榜；2：总榜 --少了粉丝榜
			//   listType:" ",
			//   列表类型 默认空， 0：本周；1：近三个月周时间段；2：具体某个月份
			//   monthNum	integer($int32)
			//   具体月份值
			//   pageNum	integer($int32)
			//   example: 1
			//   当前页码
			//   pageSize	integer($int32)
			//   example: 20
			//   页面数量
			//   sortType	integer($int32)
			//   排序 0：正序；1：倒序；
			//   starId	integer($int64)
			//   明星ID
			//   starName	string
			//   明星姓名
			//   startTime	string
			//   周开始时间
			// }
		},
		routerStarDetail() {
			uni.navigateTo({
				url: '/pages/starDetail/starDetail',
			})
		},
	},
}
</script>

<style lang="scss" scoped>
// 榜单tag
.list-ranking-type {
	margin: 20rpx;
	position: relative;
	top: -100rpx;
	.guard-list {
		.guard-card {
			position: relative;
			.card-content {
				background: linear-gradient(to bottom, #feecb3, #f64d71);
				color: #fff;
				border-radius: 10rpx;
				height: 110rpx;
				position: relative;
				.card-left {
					display: inline-block;
					margin: 10rpx;
					margin-right: 0;
					.img-content {
						display: inline-block;
						position: relative;
						top: 10rpx;
						img {
							width: 40rpx;
							height: 40rpx;
						}
					}
				}
				.card-right {
					position: absolute;
					z-index: 10000;
					right: 20rpx;
					bottom: 10rpx;
					display: inline-block;
					width: 64rpx;
					height: 64rpx;
					.img-content {
						display: inline-block;
						position: relative;
						img {
							width: 64rpx;
							height: 64rpx;
						}
					}
					.text {
						position: absolute;
						top: 20rpx;
						left: 28rpx;
						font-size: 14px;
					}
				}
			}
			.card-content0 {
				background: linear-gradient(to right, #90f7ec, #32ccbc);
			}
			.card-content1 {
				background: linear-gradient(to right, #81fbb8, #2cc972);
			}
			.card-content2 {
				background: linear-gradient(to right, #e2b0ff, #9f44d3);
			}
			.card-content3 {
				background: linear-gradient(to right, #abdcff, #0396ff);
			}
		}
	}
}
</style>
