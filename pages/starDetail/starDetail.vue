<template>
  <view style="background: #f5f8ff; padding-bottom: 20rpx">
    <view class="detail-bg-img">
      <img class="img" :src="detailImg" />
      <!-- 打榜弹窗 -->
      <view class="toast-db">
        <img class="imgs" :src="StarGuardList.avatarUrl" />
        <view class="text">
          {{ StarGuardList.nickName }}打榜<text class="red-num">
            {{ StarGuardList.vigourVal }}</text
          >热力值</view
        >
      </view>
      <view class="detail-title"> 为爱豆加油 </view>
    </view>

    <!-- 当前明星 -->
    <view class="star-card" style="z-index: 10000">
      <view class="card-img" style="z-index: 10000">
        <img src="../../static/home/starCard.png" class="bg-img" />

        <!-- 明星信息 -->
        <view class="card--content" style="z-index: 10000">
          <view class="list-top" style="z-index: 10000">
            <u-image
              class="img"
              width="100rpx"
              height="100rpx"
              :src="starInfo.avatar"
              shape="circle"
            ></u-image>
            <view class="row-text">
              <view class="name"> {{ starInfo.name }}</view>
              <view class="rank-text"
                >本周排名：{{ starInfo.thisWeekRank }}
                <text>本月排名：{{ starInfo.thisMonthRank }}</text>
              </view>
            </view>
            <view class="btn-group" style="z-index: 10000">
              <view
                class="btn"
                @click="dabang(starInfo.id)"
                style="z-index: 10000"
              >
                为{{ starInfo.name }}打榜
              </view>
            </view>
          </view>
          <!-- 中间按钮 -->
          <view class="center-btn">
            <view class="btn">
              <img src="../../static/home/leftRow.png" />
              <view class="btn-text">粉丝周榜</view>
            </view>
            <view class="btn">
              <img src="../../static/home/rightRow.png" />
              <view class="btn-text btn-text2">粉丝月榜</view>
            </view>
          </view>
          <!-- 底部排名 -->
          <view class="list-bottom">
            <view class="star-ranking">
              <view
                v-for="(item, index) in rankingListWeek"
                :key="index"
                class="img-list"
              >
                <u-image
                  class="img"
                  width="60rpx"
                  height="60rpx"
                  :src="item.avatarUrl"
                  shape="circle"
                >
                </u-image>
                <view class="num">{{ index + 1 }}</view>
              </view>
              <view class="more" @click="routerFanRanking(0)">
                <img src="../../static/home/more.png" />
              </view>
            </view>
            <view class="star-ranking ranking2">
              <view
                v-for="(item, index) in rankingListMouth"
                :key="index"
                class="img-list"
              >
                <u-image
                  class="img"
                  width="60rpx"
                  height="60rpx"
                  :src="item.avatarUrl"
                  shape="circle"
                >
                </u-image>
                <view class="num">{{ index + 1 }}</view>
              </view>
              <view class="more" @click="routerFanRanking(1)">
                <img src="../../static/home/more.png" />
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 抽奖互动 -->
    <prizePraw></prizePraw>
    <!-- 资源 -->
    <resources :ids="id" style="margin-top: 20rpx"></resources>
    <view class="home-bottom">
      <img class="home-bottom-img" src="../../static/home/homeBottom.png" />
      <view class="my">
        <view class="my-card" @click="routerToCenter">
          <img class="my-img" src="../../static/home/my.png" />
          <!-- <view>我的</view> -->
        </view>
      </view>
    </view>
    <u-toast ref="uToast" />
    <view v-if="showModal">
      <DabangModal
        :showModal="showModal"
        :starId="id"
        @closeDabang="closeDabang"
      ></DabangModal>
    </view>
  </view>
</template>

<script>
import prizePraw from "../../components/prize-wraw/prize-wraw.vue";
import resources from "../../components/resources/resources.vue";
import DabangModal from "./../../components/dabangModal/index.vue";
export default {
  components: {
    prizePraw,
    resources,
    DabangModal,
  },
  onShareAppMessage: function (res) {
      setTimeout(() => {
           uni.showToast({
          title: `分享获得热力值`,
          icon: "none",
          duration: 2000,
        });
      }, 2000);
    // return eventHandler接收到的分享参数
    return {
      title: "打榜小程序", // 分享名称
      path: "pages/index/index", // 这里写你这个页面的路径
      imageUrl:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg", //这个是显示的图片，不写就默认当前页面的截图
      // success: function (shareTickets) {
      //   console.log(shareTickets + "成功");
      //   uni.showToast({
      //     title: `恭喜你，抽中`,
      //     icon: "none",
      //     duration: 2000,
      //   });
      //   alert(0);
      //   // 转发成功
      // },
      // fail: function (res) {
      //   console.log(res + "失败");
      //   // 转发失败
      //   alert(1);
      // },
      // complete: function (res) {
      //   // 不管成功失败都会执行
      //   alert(2);
      // },
    };
  },
  data() {
    return {
      showModal: false,
      starInfo: {}, // 明星详情数据
      detailImg: "", //顶部明星图
      // 当前明星数据
      listFourTh: [
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          name: "邓伦",
          val: 500,
          id: 1,
        },
      ],
      // 周榜/月榜
      listWeek: [
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          name: "邓伦",
          val: 500,
          id: 2,
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          name: "邓伦",
          val: 500,
          id: 3,
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          name: "邓伦",
          val: 500,
        },
      ],
      ids: null,
      StarGuardList: {}, //明星打榜弹窗
      rankingListWeek: [], //粉丝周榜
      rankingListMouth: [], //粉丝月榜
    };
  },
  onLoad(option) {
    this.ids = Number(option.id);
  },
  mounted() {
    // 明星详情
    this.selectStarInfo();
    // 打榜弹窗
    this.selectStarGuardList();
    // 粉丝周榜
    this.getrankList(0);
    // 粉丝周榜
    this.getrankList(1);
  },

  methods: {
    closeDabang() {
      this.showModal = false;
    },
    // 打榜弹窗
    dabang(id) {
      this.ids = id;
      this.showModal = true;
    },
    routerToCenter() {
      uni.navigateTo({
        url: `/pages/center/index`,
      });
    },
    // 获取轮播
    carouselList() {
      this.$u.post("/home/carousel/list").then((res) => {
        this.swiperList = res;
      });
    },
    routerFanRanking(type) {
      //0是周榜，1是月榜
      uni.navigateTo({
        url: `/pages/starDetail/fanRanking?type=${type}&id=${this.ids}`,
      });
    },
    // 获取明星详情页明星信息
    selectStarInfo() {
      this.rankingList = [];
      this.$u
        .get("/starDetail/selectStarInfo", {
          id: this.ids,
        })
        .then((res) => {
          this.starInfo = res; //　少了头像
          this.detailImg = res.detailImg;
          // if (res.list && res.list.length > 0) {
          //   this.hasData = true;
          // } else {
          //   this.hasData = false;
          // }
        })
        .catch((res) => {
          this.$refs.uToast.show({
            title: res.message,
            // 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
            type: "error ",
            duration: 1000,
            // 如果不需要图标，请设置为false
            icon: true,
          });
        });
    },
    //明星打榜弹窗
    selectStarGuardList() {
      this.$u
        .get("/starDetail/selectStarGuardList", {
          starId: this.ids,
        })
        .then((res) => {
          this.StarGuardList = res;
          // if (res.list && res.list.length > 0) {
          //   this.hasData = true;
          // } else {
          //   this.hasData = false;
          // }
        })
        .catch((res) => {
          this.$refs.uToast.show({
            title: res.message,
            // 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
            type: "error ",
            duration: 1000,
            // 如果不需要图标，请设置为false
            icon: true,
          });
        });
    },
    // 粉丝周榜/月榜
    getrankList(name) {
      this.$u
        .post("/starDetail/selectFensRank", {
          id: this.ids,
          pageNum: 1,
          pageSize: 20,
          rankType: name,
        })
        .then((res) => {
          if (name === 0) {
            this.rankingListWeek = res.list;
          } else if (name === 1) {
            this.rankingListMouth = res.list;
          }
        })
        .catch((res) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
// 顶部背景图
.detail-bg-img {
  width: 100%;
  height: 580rpx;
  position: relative;
  .img {
    width: 100%;
    height: 100%;
    z-index: -2;
    border-bottom-left-radius: 20rpx;
    border-bottom-right-radius: 20rpx;
  }
}

// 当前明星卡片
.star-card {
  margin-top: -60rpx;
  // 卡片背景图
  .card-img {
    position: relative;
    margin: 10rpx;
    .bg-img {
      //   position: absolute;
      z-index: 0;
      width: 100%;
      height: 444rpx;
    }
  }
  //   明星信息
  .card--content {
    width: 600rpx;
    margin-left: 20rpx;
    margin-right: 20rpx;
    height: 60rpx;
    line-height: 60rpx;
    position: absolute;
    top: 20rpx;
    z-index: 10;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    // padding-bottom: 20rpx;
    padding-left: 20rpx;
    .list-top {
      padding-top: 20rpx;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      .img {
        position: relative;
        display: inline-block;
      }
      .btn-group {
        display: inline-block;
        // width: 180rpx;

        .btn {
          text-align: center;
          height: 54rpx;
          line-height: 54rpx;
          //   width: 100%;
          padding: 0 10rpx;
          border-radius: 27rpx;
          text-align: center;
          background: linear-gradient(to right, #f83a3a, #f7c18b);
          color: #fff;
        }
      }
      .row-text {
        text-align: left;
        font-size: 10px;
        font-family: Arial;
        display: inline-block;
        padding-left: 10rpx;
        .name {
          color: #fff;
          font-size: 14px;
        }
        .rank-text {
          font-size: 10px;
          color: #e34c4c;
        }
      }
    }

    //中间按钮
    .center-btn {
      margin-top: 30rpx;
      margin-bottom: 30rpx;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      .btn {
        display: inline-block;
        position: relative;
        width: 172rpx;
        height: 50rpx;
        img {
          width: 100%;
          height: 100%;
        }
        .btn-text {
          position: absolute;
          top: 0;
          height: 50rpx;
          line-height: 50rpx;
          left: 28rpx;
          font-size: 12px;
          color: #ffffff;
          text-align: left;
        }
        .btn-text2 {
          left: 0;
          text-align: right;
          right: 28rpx;
        }
      }
    }
    //底部排名
    // 粉丝榜单
    .list-bottom {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 20rpx;
      padding-top: 20rpx;
      .star-ranking {
        width: 50%;
        text-align: left;
        .img-list {
          position: relative;
          display: inline-block;
          padding: 5rpx;
          .img {
            position: relative;
          }
          .num {
            position: absolute;
            right: 0;
            top: 40rpx;
            font-size: 5px;
            background: #e34c4c;
            color: #fff;
            width: 24rpx;
            height: 24rpx;
            line-height: 24rpx;
            text-align: center;
            border-radius: 12rpx;
          }
          .num::after {
            clear: both;
            height: 0;
          }
        }
        .more {
          display: inline-block;
          text-align: center;
          width: 60rpx;
          height: 60rpx;
          line-height: 60rpx;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .ranking2 {
        text-align: right;
      }
    }
    // .bottom-rank {
    //   .list {
    //     display: inline-block;
    //   }
    // }
  }
}
.home-bottom {
  position: relative;
  height: 132rpx;
  top: 100rpx;
  margin-left: 20rpx;
  margin-right: 20rpx;
  .home-bottom-img {
    width: 100%;
    height: 100%;
  }
  .my {
    // background: #99a9bf;
    width: 100rpx;
    height: 100rpx;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20rpx;
    bottom: 150rpx;
    font-size: 6px;
    .my-card {
      width: 100rpx;
      height: 100rpx;
      // padding: 10rpx;
      // background: #fff;
      // border-radius: 40rpx;
      // border: 2px solid #ddd;
      // color: #E34C4C;
      .my-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
// 打榜弹窗
.toast-db {
  position: absolute;
  height: 40rpx;
  line-height: 40rpx;
  bottom: 150rpx;
  left: 20rpx;
  display: flex;
  align-items: center;
  opacity: 0.6;
  .imgs {
    width: 40rpx;
    height: 40rpx;
    border-radius: 20rpx;
    display: inline-block;
  }
  .text {
    display: inline-block;
    font-size: 10px;
    .red-num {
      // font-weight: bold;
      color: #e34c4c;
      font-size: 12px;
    }
  }
}
// 详情标题
.detail-title {
  width: 100%;
  text-align: center;
  position: absolute;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  top: 20rpx;
}
</style>
