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
            <view class="text">{{item.text}}</view>
          </view>
        </view>
      </u-col>
    </u-row>
  </view>
</template>

<script>
export default {
  name: "ranking-tab-hasText",
  data() {
    return {
      // 榜单tag
      raningTypeList: [
        {
          type: "周榜",
          text: "我",
          img: "../../static/home/weekText.png",
          icon:"../../static/home/starIcon.png"
        },
        {
          type: "月榜",
          text: "爱",
          img: "../../static/home/mouthText.png",
           icon:"../../static/home/starIcon.png"
        },
        {
          type: "粉丝榜",
          text: "邓",
          img: "../../static/home/fansText.png",
           icon:"../../static/home/starIcon.png"
        },
        {
          type: "总榜",
          text: "伦",
          img: "../../static/home/totalText.png",
           icon:"../../static/home/starIcon.png"
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
      .card-content {
        background: linear-gradient(to bottom, #feecb3, #f64d71);
        color: #fff;
        border-radius: 10rpx;
        height: 110rpx;
        position: relative;
        .card-left{
          display: inline-block;
          margin: 10rpx;
          margin-right:0;
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
          width:64rpx;
          height:64rpx;
          .img-content {
            display: inline-block;
            position: relative;
            img {
             width: 64rpx;
              height: 64rpx;
            }
          }
          .text{
            position: absolute;
            top: 20rpx;
            left:28rpx;
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