<template>
	<view>
        <!-- top -->
		<view class="top">
            <view class="bg-img"></view>
        </view>
        <!-- 当前明星 -->
		<view class="star-card">
            <view class="list-top" v-for="(item,index) in listFourTh" :key="index">		
                <u-image class="img" width="100rpx" height="100rpx" :src="item.image" shape="circle" ></u-image>
                <view class="row-text">
                    <view>　{{item.name}}</view>　
                    <view>本周排名：1
                        <text>本月排名：2</text>
                    </view>
                </view>
                <view class="btn">为朱一龙打榜</view>
            </view>
            <view class="list-bottom">
                <view class="star-ranking">
                    <view>粉丝周榜</view>
                    <view v-for="(item,index) in listWeek" :key="index" class="img-list">
                            <u-image  class="img" width="60rpx" height="60rpx" :src="item.image" shape="circle" >
                            </u-image>
                            <view class="num">{{index}}</view>
                    
                     </view>
                    <view class="more" @click="routerFanRanking(0,123)">更多</view>   
                </view>	
                <view class="star-ranking">
                    <view>粉丝月榜</view>
                    <view v-for="(item,index) in listWeek" :key="index" class="img-list">
                            <u-image  class="img" width="60rpx" height="60rpx" :src="item.image" shape="circle" >
                            </u-image>
                            <view class="num">{{index}}</view>
                    
                     </view>
                    <view class="more"  @click="routerFanRanking(1,123)">更多</view>   
                </view>	
            </view>
        </view>
        <!-- 抽奖互动 -->
        <prizePraw></prizePraw>
        <!-- 资源 -->
        <resources id="1"></resources>

	</view>
</template>

<script>
import prizePraw from '../../components/prize-wraw/prize-wraw.vue'
import resources from '../../components/resources/resources.vue'
	export default {
		components: {
            prizePraw,
            resources
		},
		data() {
			return {
                // 当前明星数据
				listFourTh: [{
						icon: '皇冠',
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						num: '4',
						name: '邓伦',
                        val: 500,
                        id:1
                    }
                ],
                // 周榜/月榜
				listWeek: [
                    {
						icon: '皇冠',
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						num: '4',
						name: '邓伦',
                        val: 500,
                        id:2
                    },
                    {
						icon: '皇冠',
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						num: '4',
						name: '邓伦',
                        val: 500,
                        id:3
                    },
                    {
						icon: '皇冠',
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						num: '4',
						name: '邓伦',
						val: 500
                    },
                ],
                

			}
        },
       
		methods: {
            routerFanRanking(type,id){ //0是周榜，1是月榜
                uni.navigateTo({
					url: `/pages/starDetail/fanRanking?type=${type}&id=${id}`
				});
            },
          
		},
	}
</script>

<style lang="scss" scoped>
.top{
    height: 300rpx;
    width: 100%;
    .bg-img{
        width:100%;
        height:100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size:contain;   //关键属性
        background-image: url(https://cdn.uviewui.com/uview/swiper/1.jpg);
    }
    
}
// 当前明星卡片
.star-card{
    margin: 20rpx;
    // 明星上方数据
    	.list-top{
            display: flex;
            align-items: center; 
            flex-direction: row;
            justify-content:  space-between;
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
                    text-align: left;
                    font-size: 10px;
                    font-family: Arial;
                }
		}
        // 明星榜单
    	.list-bottom{
            display: flex;
            align-items: center; 
            flex-direction: row;
            justify-content:  space-between;
			padding-bottom: 20rpx;
			padding-top: 20rpx;
            .star-ranking{
                width: 50%;
                .img-list{
                    position:relative;
                    display: inline-block;
                    padding:10rpx;
                    .img{
					    position: relative;
				    }
                    .num{
                        position: absolute;
                        right: 30rpx;
                        top:0;
                        font-size: 14px;
                        font-weight: bold;
                    }
                    .num::after{
                        clear: both;
                        height:0;
                    }
                }
                .more{
                    display: inline-block;
                    text-align: center;
                    width: 60rpx;
                    height: 60rpx;
                    line-height: 60rpx;
                    border-radius: 30rpx;
                    border: 1px solid #666;
                    position: relative;
                    top: -15rpx;
                }
              
               
            }
				
				
		}
}

</style>
