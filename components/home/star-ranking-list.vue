<template>
  <!-- 首页排行榜，第4名开始 -->
  <view class="list-th">
    <view class="list-row" v-for="(item, index) in rankingList" :key="index">
      <view class="num-body" @click="routerStarDetail(item.id)">
        <view class="num">{{ index+4 }}</view>
      </view>
      <view class="img-body" @click="routerStarDetail(item.id)">
        <u-image
          class="img"
          width="80rpx"
          height="80rpx"
          :src="item.starAvatar"
          shape="circle"
        ></u-image>
      </view>
      <view class="name" @click="routerStarDetail(item.id)">
        {{ item.starName }}
      </view>
      <view class="val" @click="routerStarDetail(item.id)">
        {{ item.totalVigourVal }}
      </view>
      <view class="btn"  @click="dabang(item.id)">
        打榜
      </view>
    </view>
        <view v-if="showModal">
      <DabangModal :showModal="showModal" :starId="starId"  @closeDabang="closeDabang"></DabangModal>
    </view>
  </view>
</template>

<script>
import DabangModal from "./../../components/dabangModal/index.vue";
export default {
  props: ["rankingList"],
    components: {
    DabangModal,
  },
  data() {
    return {
       starId:'',//明星id
      showModal: false,//打榜弹窗
    };
  },
  methods: {
      // 打榜弹窗
    dabang(id){
      console.log(id,'ui')
      this.starId = id
      this.showModal = true
    },
       closeDabang(){
      this.showModal = false
      this.$emit("loadData")
    },
        routerStarDetail(id) {
      uni.navigateTo({
        url: `/pages/starDetail/starDetail?id=${id}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// 榜单
.list-th {
  margin: 0 20rpx;
  border-radius: 5rpx;
  background: #fff;
}
.list-row {
  display: flex;
  align-items: center;
  flex-direction: row;
  // margin-top: 20rpx;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20rpx;
  padding-top: 20rpx;
  //   justify-content: space-around;
}
.list-row:last-child{
  border: none;
}
.num-body {
  margin-right: 24rpx;
  .num {
    width: 50rpx;
    height: 50rpx;
    line-height: 50rpx;
    text-align: center;
  }
}
.img-body {
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
  right: 28rpx;
  width: 200rpx;
  font-size: 24rpx;
  color: #333333;
  font-size: 12px;
}
.btn {
//   position: relative;
//   top: -10rpx;
   position: absolute;
   right: 40rpx;
  height: 46rpx;
  line-height: 46rpx;
  width: 110rpx;
  padding: 0 10rpx;
  border-radius: 23rpx;
  text-align: center;
  background: linear-gradient(to right, #f83a3a, #f7c18b);
  color: #fff;
}
</style>