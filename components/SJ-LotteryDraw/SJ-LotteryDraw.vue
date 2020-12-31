<template>
<view class="chou-jiang-area">
    <view class="top-img">
        <img class="img-area" src="../../static/choujiang.png" />
    </view>
	<view class="lottery_container">
		<view class="grid_wrap">
			<view class="lottery_wrap">
				<ul class="lottery_grid">
					<li v-for="(item, index) in grid_info" :class="{ active: current_index == index && index != 8 }" :key="index"
					 @click="luck_draw" :data-index="index">
						<image v-if="index != 8" class="grid_img" mode='aspectFit' :src="item.logo" alt="">
							{{ index == 8 ? '抽奖' : item.text }}
					</li>
				</ul>
			</view>
			<view class="lottery_wrap_border">
				<ul v-for="(item, index) in 4" :key="index">
					<li v-for="(item, index) in 12" :key="index"></li>
				</ul>
			</view>
		</view>
		<!-- 抽奖完成弹出的窗口 -->
		<!-- <view class="lottery_finish_wrap">
			
		</view> -->
        
	</view>
     <view class="bottom-describe">
            <view class="title">抽奖规则</view>
            <view class="row-text">1、每日可有2次抽奖次数</view>
            <view class="row-text">2、每日零点刷新抽奖机会数量</view>
            <view class="row-text">3、每天可邀请最多4位好友助力，助力成功
                一次可获得一次抽奖机会。</view>
        </view>
       
</view>
</template>

<script>
	import LotteryDraw from './SJ-LotteryDraw.js';
	
	export default {
		data() {
			return {
                current_index: -1,
                grid_info: [
                    {
                        logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
                        text: "100热力值"
                    },
                    {
                        logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
                        text: "50热力值"
                    },
                    {
                        logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
                        text: "10热力值"
                    },
                    {
                        logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
                        text: "20热力值"
                    },
                    {
                        logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
                        text: "200热力值"
                    },
                    {
                        logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
                        text: "150热力值"
                    },
                    {
                        logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
                        text: "250热力值"
                    },
                    {
                        logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
                        text: "30热力值"
                    },
                    {
                        logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
                        text: "谢谢参与"
                    },
                ]
			}
		},
		
		onLoad() {
		},

		methods: {
			luck_draw(event) {
				let index = event.currentTarget.dataset.index;
				let that = this;
				if (index == 8) {
					// 点击抽奖之后知道获奖位置，修改父组件中lottery_draw_param的值
					this.$emit('get_winingIndex', function(res){
						console.log(res);
						let lottery_draw_param=res;
						let win = new LotteryDraw({
								domData: that.grid_info,
								...lottery_draw_param
							},
							function(index, count) {
								that.current_index = index;
					
								if (lottery_draw_param.winingIndex == index && lottery_draw_param.totalCount == count) {
									that.$emit('luck_draw_finish', that.grid_info[index])
									// console.log('抽到了')
								}
							}
						);
					});
					
				}
			}
		}
	};
</script>

<style scoped lang="scss">
 @import './SJ-LotteryDraw.css';
    .top-img{
        width: 100%;
        /* height: 464rpx; */
    }
    .img-area{
        width: 100%;
        height: 100%;
    }
    .lottery_container{
        position: relative;
        top: -150rpx;
        display: flex;
        justify-content: center;
        // padding-bottom: 100px;
         /* text-align: center;
        position: absolute; 
         margin-left: 40px;
        margin-right: 40px;  */
    }
    .bottom-describe{
        position: relative;
        top: -150rpx;
        padding: 20rpx;
        margin: 0 auto;
        border-radius: 10rpx;
        width: 500rpx;
        background: #FDF9ED;
        color: #333333;
        .title{
            text-align: center;
            color: #E34C4C;
        }
        .row-text{
            padding: 20rpx;
        }

    }
</style>
