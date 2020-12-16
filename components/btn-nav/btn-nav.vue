<template>
    <view class="btn-list">
       <view class="btn-nav" :class="{activated: index==rankType}" v-for="(item, index) in btnList"
        :key="index" @click="changeBTn(index)">{{item}}</view>
    </view>
</template>

<script>
export default {
  name:"BtnNav",
  components: {},
  props:["btnList","rankType"],
  data() {
    return {
    
    };
  },
  methods: {
      changeBTn(index){
          this.$emit("changebtn",index)
      }
  }
};
</script>

<style lang="scss" scoped>
.btn-list{
    // text-align: center;
    background: #FFE6E6;
    // width:530rpx;
    margin: 0 auto;
    display: inline-block;
    border-radius:  30rpx;
    .btn-nav {
    //   width: 180rpx;
      text-align: center;
      height: 60rpx;
      border-radius: 30rpx;
      line-height: 60rpx;
      color: #F97777;
      position: relative;
      display: inline-block;
      padding-right: 30rpx;
      padding-left: 30rpx;
      z-index: 100;
    }
    .btn-nav:nth-child(2){
        margin-left: 10rpx;
        margin-right:10rpx;
    }
    .activated{
        border-radius: 30rpx;
        background: linear-gradient(to right,#F83A3A,#F7C18B);
        color:#fff;
         z-index: 1000;
    }
}

</style>
