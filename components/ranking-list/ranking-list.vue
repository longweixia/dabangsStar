<template>

    <!-- 排行榜 -->
    <view class="list-th">
      <view class="list-row" v-for="(item, index) in rankingList" :key="index">
        <view class="num-body">
          <view class="num" :class="'num' + index">{{ index + 1 }}</view>
        </view>
        <view class="img-body">
          <u-image
            class="img"
            width="80rpx"
            height="80rpx"
            :src="item.image"
            shape="circle"
          ></u-image>
        </view>
        <view class="name">
          {{ item.name }}
        </view>
        <view class="val">
          {{ item.val }}
        </view>
      </view>
  </view>
</template>

<script>
export default {
  props:["rankingList"],
  data() {
    return {
     
    };
  },

};
</script>

<style lang="scss" scoped>

// 榜单
.list-th{
    margin: 0 20rpx;
}
.list-row {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20rpx;
  //   justify-content: space-around;
}
.num-body {
  margin-right:24rpx;
  .num {
    width: 50rpx;
    height: 50rpx;
    line-height: 50rpx;
    border-radius: 25rpx;
    color: #e34c4c;
    text-align: center;
    border: 1px solid #e34c4c;
  }

  .num0 {
    background: linear-gradient(#fe6925, #df372c);
    color: #fff;
    border: none;
  }
  .num1 {
    background: linear-gradient(#e8d81c, #e1792a);
    color: #fff;
    border: none;
  }
  .num2 {
    background: linear-gradient(#3bf2c9, #4ce8f3);
    color: #fff;
    border: none;
  }
}
.img-body{
    margin-right: 22rpx;
}
.name {
  width: 150rpx;
  text-align: left;
  color: #333333;
  font-weight: bold;
  font-size: 28rpx;
}
.val {
  position: absolute;
  right:20rpx;
  width: 200rpx;
  font-size: 24rpx;
  color: #b5b5b5;
}
</style>
