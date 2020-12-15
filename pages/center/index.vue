<template>
  <view class="content">
    <view class="top">
      <img src="../../static/home/centerbg.png" class="bg-img" />
      <view class="list-top" v-for="(item, index) in listFourTh" :key="index">
       <view class="left-content">
             <u-image
            class="img-icon"
            width="120rpx"
            height="120rpx"
            :src="item.image"
            shape="circle"
            ></u-image>
            <view class="row-text">
            <view class="name"> {{ item.name }}</view>
            <view class="id"> id：123455</view>
            <view class="hotVal">我的热力值：2345</view>
            </view>
       </view>
      
        <view class="btn-group">
          <view class="btn">
            <img class="btn-img" src="../../static/home/kefu.png" />联系客服
          </view>
          <view class="btn btn2">
            <img class="btn-img" src="../../static/home/jiang.png" />
            榜单有奖</view
          >
        </view>
      </view>
    </view>
    <view class="list"> </view>
  </view>
</template>

<script>
export default {
  name: "BtnNav",
  components: {},
  props: ["btnList", "rankType"],
  data() {
    return {
      // 当前明星数据
      listFourTh: [
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          name: "朱一龙",
          val: 500,
          id: 1
        }
      ]
    };
  },
  methods: {
    changeBTn(index) {
      this.$emit("changebtn", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  .top {
    position: relative;
    .bg-img {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 444rpx;
    }
    .list-top {
      margin: 20rpx;
      margin-top: 0;
      //   background-image:url()
      background: #fff;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 20rpx;
      padding-top: 20rpx;
      border-radius: 10rpx;
      position: relative;
      top: 20rpx;
      padding: 20rpx;
      .left-content{
     display: flex;
      align-items: center;
      flex-direction: row;
    //   justify-content: space-between;
      width: 350rpx;
      }
      .img-icon {
        position: relative;
        display: inline-block;
      }
      .row-text {
        // width:180rpx;
        // display: inline-block;
        text-align: left;
        font-size: 10px;
        font-family: Arial;
        margin-left: 10rpx;
        .name {
          color: #000;
          font-size: 14px;
          font-weight: bold;
        }
        .id,
        .hotVal {
          color: #d2d2d2;
          font-size: 10px;
        }
      }
      .btn-group {
        width: 180rpx;
        // margin:0 auto;
        // position: absolute;
        // right: 10px;
        
        .btn {
            text-align: center;
          //   position: absolute;
          //   right: 20rpx;
          height: 54rpx;
          line-height: 54rpx;
          width: 100%;
          padding: 0 10rpx;
          border-radius: 27rpx;
          text-align: center;
          background: linear-gradient(to right, #f83a3a, #f7c18b);
          color: #fff;
          .btn-img {
            padding-right: 10rpx;
          }
        }
        .btn2 {
          margin-top: 10rpx;
        }
      }
    }
  }
  .list {
  }
}
</style>
