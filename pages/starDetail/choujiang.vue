<template>
	<view class="chou-jiang-page">
                <u-navbar title="抽奖"></u-navbar>
		<LotteryDraw
			@get_winingIndex="get_winingIndex"
			@luck_draw_finish="luck_draw_finish"
		></LotteryDraw>
	</view>
</template>

<script>
import LotteryDraw from '../../components/SJ-LotteryDraw/SJ-LotteryDraw.vue'

export default {
	components: {
		LotteryDraw,
	},
	data() {
		return {
			lottery_draw_param: {
				startIndex: 0, //开始抽奖位置，从0开始
				totalCount: 4, //一共要转的圈数
				winingIndex: 4, //中奖的位置，从0开始
				speed: 50, //抽奖动画的速度 [数字越大越慢,默认100]
			},
		}
	},
	onLoad() {},
	methods: {
		// 修改获奖位置（可以在这里获取后台的数据
		get_winingIndex(callback) {
			this.lottery_draw_param.winingIndex = 7 //这个位置由后台返回
			//props修改在小程序和APP端不成功，所以在这里使用回调函数传参，
			callback(this.lottery_draw_param)
		},
		// 抽奖完成
		luck_draw_finish(param) {
              uni.showToast({
            title: `恭喜你，抽中${param.text}`,
            icon:'none',
            duration: 2000
        });
			// console.log(param)
			// console.log(`抽到第${param+1}个方格的奖品`)
		},
	},
}
</script>
<style scoped>
.chou-jiang-page {
	background: #e34c4c;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
