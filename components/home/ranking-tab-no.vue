<template>
  <!-- 榜单tag -->
  <view class="list-ranking-type">
    <u-row gutter="16" justify="center" class="guard-list" align="center">
      <u-col
        span="3"
        class="guard-card"
        v-for="(item, index) in raningTypeList"
        :key="index"
      >
        <view class="card-content">
          <view class="guard-type">{{ item.type }}</view>
          <view class="img-content">
               <img :src="item.img">
          </view>
         
          <!-- <view class="guard-btn">{{ item.text }}</view> -->
        </view>
      </u-col>
    </u-row>
  </view>
</template>

<script>
export default {
  name: "ranking-tab-no",
  data() {
    return {
      // 榜单tag
      raningTypeList: [
        {
          type: "周榜",
          text: "我",
          img:"../../static/home/week.png"
        },
        {
          type: "月榜",
          text: "爱",
          img:"../../static/home/mouth.png"
        },
        {
          type: "粉丝榜",
          text: "邓",
          img:"../../static/home/fans.png"
        },
        {
          type: "总榜",
          text: "伦",
          img:"../../static/home/total.png"
        }
      ]
    };
  },
  methods: {
    routerStarDetail() {
      uni.navigateTo({
        url: "/pages/starDetail/starDetail"
      });
    }
  }
};
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
        // left: -10rpx;
      .card-content {
          background: linear-gradient(to bottom, #feecb3, #f64d71);
          color: #fff;
          border-radius: 10rpx;
        //   margin-left: 2rpx;
          height: 80rpx;
          line-height: 80rpx;
          display: flex;
          justify-content: center;
          align-items: center;
        .guard-type {
        //   padding: 10rpx 20rpx;
        // margin-left: 20rpx;
        margin-right: 20rpx;
        }
        .img-content{
            display: inline-block;
            position: relative;
            top: 10rpx;
            img{
                width:40rpx;
                height:40rpx;
            }
        }
        .guard-btn {
          text-align: right;
          padding: 10rpx 20rpx;
          font-size: 40rpx;
          font-weight: bold;
        }
      }
    }
  }
}
</style>