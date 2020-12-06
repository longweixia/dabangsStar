<template>
  <!-- 资源 -->
  <view class="star-card">
    <view class="list-top" v-for="(item, index) in prizeWrawList" :key="index">
      <view>资源</view>
      <view class="row-text">
        <view> 剩余 8天6时34分30秒</view>
      </view>
      <view class="btn">立即参与</view>
    </view>
    <view class="title">为XXX观看视频10天，解锁深圳华强北广场屏</view>
    <view class="slider-area">
      <u-slider
        :disabled="true"
        class="slider-resource"
        v-model="value"
        :use-slot="true"
        height="20"
        block-width="40"
        block-color="red"
        active-color="red"
        inactive-color="#ddd"
      >
        <!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
        <view class="">
          <view class="badge-button">
            <!-- 40 -->
          </view>
        </view>
      </u-slider>
      <view class="btn-slider">{{ value }}</view>
    </view>
    <view class="slider-area">
      <u-slider
        :disabled="true"
        class="slider-resource"
        v-model="value"
        :use-slot="true"
        height="20"
        block-width="40"
        block-color="red"
        active-color="red"
        inactive-color="#ddd"
      >
        <!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
        <view class="">
          <view class="badge-button">
            <!-- 40 -->
          </view>
        </view>
      </u-slider>
      <view class="btn-slider">{{ value }}</view>
    </view>
    <view class="flex-area">
      <view>目标人数：5000</view>
      <view>参与人数：5000</view>
      <view>达成人数：5000</view>
    </view>
      <view class="flex-area">

                    <view v-for="(item,index) in listWeek" :key="index" class="img-list">
                            <u-image  class="img" width="60rpx" height="60rpx" :src="item.image" shape="circle" >
                            </u-image>
                            <view class="num">{{index}}</view>
                    
                     </view>
                    <view class="more" @click="routerResourcesRanking('resouceId')">...</view>   
                </view>	
  </view>
</template>

<script>
export default {
  name: "resources",
  props:["id"],
  components: {},
  data() {
    return {
      value: 30,
      //抽奖互动
      prizeWrawList: [
        {
          tips: "100%中热力值",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          name: "抽奖",
          val: 500
        },
        {
          tips: "签到获得20热力值",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "5",
          name: "签到",
          val: 500
        },
        {
          tips: "观看视频获得30热力值",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "6",
          name: "看视频",
          val: 500
        },
        {
          tips: "分享获得30热力值",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "7",
          name: "分享",
          val: 500
        }
      ],
      // 周榜/月榜
      listWeek: [
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "49",
          name: "邓伦",
          val: 500
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "10",
          name: "邓伦",
          val: 500
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "11",
          name: "邓伦",
          val: 500
        }
      ]
    };
  },
  methods: {
      routerResourcesRanking(resouceId){ 
        let id = Number(this.id)
                uni.navigateTo({
					      url: `/pages/starDetail/resourcesRanking?id=${id}`
				});
       },
  }
};
</script>


	
		


<style lang="scss" scoped>
// 当前明星卡片
.star-card {
  margin: 20rpx;
  // 明星上方数据
  .list-top {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20rpx;
    padding-top: 20rpx;
    .img {
      position: relative;
      display: inline-block;
    }
    .btn {
      width: 150rpx;
      text-align: center;
      height: 80rpx;
      line-height: 80rpx;
      background: #666;
      color: #fff;
      position: relative;
      right: 40rpx;
    }
    .btn::before {
      position: absolute;
      content: ""; //必须设置这个值才会看到半圆
      left: -38rpx;
      width: 40rpx;
      height: 80rpx;
      border-radius: 40px 0 0 40px;
      line-height: 80rpx;
      background: #666;
    }
    .btn::after {
      position: absolute;
      content: ""; //必须设置这个值才会看到半圆
      right: -38rpx;
      width: 40rpx;
      height: 80rpx;
      border-radius: 0 40px 40px 0;
      line-height: 80rpx;
      background: #666;
    }
    .row-text {
      // width:20rpx;
      text-align: left;
      font-size: 10px;
      font-family: Arial;
    }
  }
}
.title {
  fonst-size: 16px;
  font-weight: bold;
}
.badge-button {
  // padding: 20rpx 20rpx;
  width: 50rpx;
  height: 50rpx;
  background-color: red;
  color: #fff;
  border-radius: 25rpx;
  border: none;
  font-size: 22rpx;
  line-height: 1;
}
.slider-resource {
  margin-right: 150rpx;
}
.btn-slider {
  width: 80rpx;
  text-align: center;
  height: 40rpx;
  line-height: 40rpx;
  background: #666;
  color: #fff;
  position: relative;
  right: 40rpx;
  top: -20rpx;
  float: right;
}
.btn-slider::before {
  position: absolute;
  content: ""; //必须设置这个值才会看到半圆
  left: -18rpx;
  width: 30rpx;
  height: 40rpx;
  border-radius: 20px 0 0 20px;
  line-height: 40rpx;
  background: #666;
}
.btn-slider::after {
  position: absolute;
  content: ""; //必须设置这个值才会看到半圆
  right: -18rpx;
  width: 30rpx;
  height: 40rpx;
  border-radius: 0 20px 20px 0;
  line-height: 40rpx;
  background: #666;
}
.u-slider--disabled {
  opacity: 1 !important;
}
.slider-area {
  margin-top: 20rpx;
  margin-bottom: 30rpx;
}
.flex-area {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.img-list {
//   text-align: center;
  position: relative;
  display: inline-block;
  padding: 10rpx;
  .img {
    position: relative;
  }
  .num {
    position: absolute;
    right: 30rpx;
    top: 0;
    font-size: 14px;
    font-weight: bold;
  }
  .num::after {
    clear: both;
    height: 0;
  }
}
.more {
  display: inline-block;
  text-align: center;
  position: relative;
  top: 15rpx;
}
</style>

