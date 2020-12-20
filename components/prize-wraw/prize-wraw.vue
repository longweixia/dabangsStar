<template>
  <!-- 抽奖互动 -->
  <view class="star-card">
    <view class="list-top" v-for="(item, index) in prizeWrawList" :key="index">
      <img
        class="img"
        :src="item.image"/>
      <view class="row-text">
        <view class="name"> {{ item.name }}</view>
        <view class="tip">{{ item.tips }} </view>
      </view>
      <view class="btn">{{ item.name }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "prize-wraw",
  components: {},
  data() {
    return {
      //抽奖互动
      prizeWrawList: [
        {
          tips: "100%中热力值",
          image: "../../static/home/choujiang.png",
          num: "4",
          name: "抽奖",
          val: 500
        },
        {
          tips: "签到获得20热力值",
          image: "../../static/home/choujiang.png",
          num: "4",
          name: "签到",
          val: 500
        },
        {
          tips: "观看视频获得30热力值",
          image: "../../static/home/bofang.png",
          num: "4",
          name: "看视频",
          val: 500
        },
        {
          tips: "分享获得30热力值",
          image: "../../static/home/share.png",
          num: "4",
          name: "分享",
          val: 500
        }
      ]
    };
  },
  methods: {}
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
	border-bottom: 1px solid #E6E6E6;
    .img {
      position: relative;
      display: inline-block;
	  left: 10rpx;
	  width:46rpx;
     height:46rpx;
	  
    }
    .btn {
      right: 50rpx;
      width: 200rpx;
	  height: 60rpx;
      text-align: center;
      padding: 10rpx;
      margin-left: 10rpx;
      display: inline-block;
      border-radius: 30rpx;
      background: #E34C4C;
      color: #fff;
    }
    .row-text {
      min-width: 220rpx;
      text-align: left;
      font-size: 10px;
      font-family: Arial;
	  position: relative;
	  left:-100rpx;
	  .name{
		  font-size: 12px;
		  color: #000;
		  font-weight: bold;
	  }
	  .tip{
		  font-size: 10px;
		  color: #B8B8B8;
	  }
    }
  }
  .list-top:nth-child(4){
	  border: none;
  }
}
</style>

