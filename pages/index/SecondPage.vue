<template>
  <view class="listAwards-areas">
    <view>
      <u-image mode="widthFix" :src="srcImg" :border-radius="10"></u-image>
      <img
        @click="routerTohome"
        class="search-icon"
        src="../../static/home/right-btn2.png"
      />
    </view>
  </view>
</template>

<script>
export default {
  name: "listAwards",
  data() {
    return {
      current: null,
      awardsList: [],
      srcImg: "",
    };
  },
  mounted() {},
  onLoad(option) {
    this.current = option.current;
  },
  onShow() {
    this.getMyInfo();
  },

  methods: {
    routerTohome() {
      uni.navigateTo({
        url: `/pages/index/index`,
      });
    },
    getMyInfo() {
      this.$u
        .get("/home/seleclCarouseDeatil")
        .then((res) => {
          this.awardsList = res;
          if (this.current == 0) {
            this.srcImg = this.awardsList.level1;
          } else if (this.current == 1) {
            this.srcImg = this.awardsList.level2;
          }
        })
        .catch((res) => {
          //   uni.showToast({
          //     title: "请求失败",
          //     icon: "none",
          //     duration: 1000,
          //   });
        });
    },
  },
};
</script>

<style lang="scss">
.listAwards-areas {
  .nav-top {
    text-align: center;
  }
  .search-icon {
    position: absolute;
    top: 100rpx;
    left: 28rpx;
    width: 50rpx;
    height: 50rpx;
  }
}
</style>