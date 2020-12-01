<template>

        <!-- 抽奖互动 -->
        <view class="star-card">
            <view class="list-top" v-for="(item,index) in prizeWrawList" :key="index">		
                <u-image class="img" width="100rpx" height="100rpx" :src="item.image" shape="circle" ></u-image>
                <view class="row-text">
                    <view>　{{item.name}}</view>　
                    <view>{{item.tips}}
                        
                    </view>
                </view>
                <view class="btn">{{item.name}}</view>
            </view>
        </view>


</template>

<script>
	export default {
        name:"resources",
		components: {
			
		},
		data() {
			return {
              
                //抽奖互动
				prizeWrawList: [
                    {
						tips: '100%中热力值',
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						num: '4',
						name: '抽奖',
						val: 500
                    },
                    {
						tips: '签到获得20热力值',
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						num: '4',
						name: '签到',
						val: 500
                    },
                    {
						tips: '观看视频获得30热力值',
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						num: '4',
						name: '看视频',
						val: 500
                    },
                    {
						tips: '分享获得30热力值',
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						num: '4',
						name: '分享',
						val: 500
                    },
                ],

			}
		},
		methods: {
		
		},
	}
</script>


	
		


<style lang="scss" scoped>

// 当前明星卡片
.star-card{
    margin: 20rpx;
    // 明星上方数据
    	.list-top{
            display: flex;
            align-items: center; 
            flex-direction: row;
            justify-content: space-between;
			padding-bottom: 20rpx;
			padding-top: 20rpx;
				.img{
					position: relative;
					display: inline-block;
				}
				.btn{
						right:50rpx;
						width:200rpx;
						text-align: center;
						padding: 10rpx;
						margin-left: 10rpx;
						display: inline-block;
						border-radius: 10rpx;
						background: blue;
						color: #fff;
				}
                .row-text{
                    width:200rpx;
                    text-align: left;
                    font-size: 10px;
                    font-family: Arial;
                }
		}	
	}


</style>

