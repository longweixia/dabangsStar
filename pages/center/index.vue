<template>
  <view class="content">
    <!-- 个人中心顶部 -->
    <view class="top">
      <img src="../../static/home/centerbg.png" class="bg-img" />
      <view class="list-top">
        <view class="left-content">
          <u-image
            class="img-icon"
            width="120rpx"
            height="120rpx"
            :src="myData.avatarUrl"
            shape="circle"
          ></u-image>
          <view class="row-text">
            <view class="name">
              {{ myData.nickName }}
              <u-icon
                @click="routerPath('edit')"
                name="edit-pen-fill"
                color="#666"
                size="28"
                class="edit-btn"
              ></u-icon
            ></view>

            <view class="id"> id：{{ myData.fensId }}</view>
            <view class="hotVal">我的热力值：{{ myData.vigourVal }}</view>
          </view>
        </view>

        <view class="btn-group">
          <view class="btn">
            <img class="btn-img" src="../../static/home/kefu.png" />联系客服
          </view>
          <view class="btn btn2">
            <img class="btn-img" src="../../static/home/jiang.png" />
            榜单有奖
          </view>
        </view>
      </view>
      <!-- 个人标语 -->
      <view class="slogan">
        <view class="row-text">
          <view class="text">个人标语：{{ myData.slogan }}</view>
          <img class="btn-img" src="../../static/home/right.png" />
        </view>
      </view>
    </view>
    <view class="list">
      <List></List>
    </view>
  </view>
</template>

<script>
import List from "../../components/center/list.vue";

export default {
  name: "BtnNav",
  components: {
    List,
  },
  props: ["btnList", "rankType"],
  data() {
    return {
      // 当前明星数据
      // listFourTh: [
      //   {
      //     icon: "皇冠",
      //     image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
      //     num: "4",
      //     name: "朱一龙",
      //     val: 500,
      //     id: 1
      //   }
      // ]
      myData: {}, //个人信息
    };
  },
  mounted() {
    this.getMyInfo();
  },
  methods: {
    changeBTn(index) {
      this.$emit("changebtn", index);
    },
    getMyInfo() {
      this.$u
        .get("/personalCenter/personalCenterInfo")
        .then((res) => {
          this.myData = res;
        })
        .catch((res) => {});
    },
    routerPath(name) {
      if (name == "edit") {
        uni.navigateTo({
          url: "/pages/center/edit",
        });
      }
    },
  },
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
      padding-bottom: 200rpx;
      .left-content {
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
            width: 22rpx;
            height: 22rpx;
          }
        }
        .btn2 {
          margin-top: 10rpx;
        }
      }
    }
    // 个人标语
    .slogan {
      position: relative;
      top: -100rpx;
      text-align: left;
      margin-left: 40rpx;
      margin-right: 40rpx;
      // width: 580rpx;
      height: 56rpx;
      line-height: 56rpx;
      // width: 100%;
      padding: 0 10rpx;
      border-radius: 28rpx;
      background: #feeeef;
      color: #ef6a75;
      .row-text {
        margin-left: 10rpx;
        .text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 60rpx;
        }
      }
      .btn-img {
        // padding-right: 10rpx;
        width: 14rpx;
        height: 24rpx;
        line-height: 24rpx;
        position: absolute;
        right: 40rpx;
        top: 16rpx;
      }
    }
  }
  .list {
    margin-left: 20rpx;
    margin-right: 20rpx;
    margin-top: 100rpx;
    padding-top: 50rpx;
    border-top: 1px solid #000;
  }
  // 编辑
  .edit-btn {
    padding-left: 10rpx;
  }
}
</style>
