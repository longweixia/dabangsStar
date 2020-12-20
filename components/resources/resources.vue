<template>
  <!-- 资源 -->
  <view>
    <view class="star-card" v-for="(item, index) in resourcesList" :key="index">
      <view class="list-top">
        <view class="row-text"> 资源 {{ item.endTime }} </view>
        <view class="btn">立即参与</view>
      </view>
      <view class="title">{{ item.mark }}</view>
      <view class="slider-area">
        <u-slider
          :disabled="true"
          class="slider-resource"
          v-model="item.targetValue"
          :use-slot="true"
          height="20"
          block-width="40"
          block-color="#F64F71"
          active-color="#F64F71"
          inactive-color="#F5F5F5"
        >
          <!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
          <view class="">
            <view class="badge-button">
              <!-- 40 -->
            </view>
          </view>
        </u-slider>
        <view class="btn-slider">{{ item.targetValue + "%" }}</view>
      </view>
      <view class="slider-area">
        <u-slider
          :disabled="true"
          class="slider-resource"
          v-model="item.reachNumValue"
          :use-slot="true"
          height="20"
          block-width="40"
          block-color="#E9C046"
          active-color="#E9C046"
          inactive-color="#F5F5F5"
        >
          <!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
          <view class="">
            <view class="badge-button badge-button1">
              <!-- 40 -->
            </view>
          </view>
        </u-slider>
        <view class="btn-slider btn-slider1">{{
          item.reachNumValue + "%"
        }}</view>
      </view>
      <view class="flex-area">
        <view class="target">目标人数：{{ item.target }}</view>
        <view class="target join">参与人数：{{ item.joinNum }}</view>
        <view class="target reach">达成人数：{{ item.reachNum }}</view>
      </view>
      <view class="list-bottom">
        <view class="star-ranking">
          <view
            v-for="(item1, index1) in item.fensList"
            :key="index1"
            class="img-list"
          >
            <u-image
              class="img"
              width="60rpx"
              height="60rpx"
              :src="item1.avatarUrl"
              shape="circle"
            >
            </u-image>
            <view class="num">{{ index1 }}</view>
          </view>
          <view class="more" @click="routerResourcesRanking(0)">
            <img src="../../static/home/moreWhite.png" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "resources",
  props: ["id"],
  components: {},
  data() {
    return {
      value: 30,
      // targetValue: 0, //目标值
      // reachNumValue: 0, //达成值
      //抽奖互动
      prizeWrawList: [
        {
          tips: "100%中热力值",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          name: "抽奖",
          val: 500
        },
        {
          tips: "签到获得20热力值",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "5",
          name: "签到",
          val: 500
        },
        {
          tips: "观看视频获得30热力值",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "6",
          name: "看视频",
          val: 500
        },
        {
          tips: "分享获得30热力值",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "7",
          name: "分享",
          val: 500
        }
      ],
      // 周榜/月榜
      listWeek: [
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "49",
          name: "邓伦",
          val: 500
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "10",
          name: "邓伦",
          val: 500
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "11",
          name: "邓伦",
          val: 500
        }
      ],
      resourcesList: [
        {
          beginTime: "2020-12-20T10:13:02.985Z",
          endTime: "2020-12-20T10:13:02.985Z",
          fensList: [
            {
              avatarUrl:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg",
              fensId: 0,
              flag: true,
              nickName: "string",
              vigourVal: 0
            }
          ],
          id: 0,
          joinNum: 4000,
          mark: "为朱一龙观看视频10天，获得1000应援金",
          reachNum: 1000,
          resourcesRelId: 0,
          target: 5000,
          type: 0
        },
        {
          beginTime: "2020-12-20T10:13:02.985Z",
          endTime: "2020-12-20T10:13:02.985Z",
          fensList: [
            {
              avatarUrl:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg",
              fensId: 0,
              flag: true,
              nickName: "string",
              vigourVal: 0
            }
          ],
          id: 0,
          joinNum: 1000,
          mark: "为朱一龙观看视频10天，获得1000应援金",
          reachNum: 4000,
          resourcesRelId: 0,
          target: 5000,
          type: 0
        }
      ] //资源列表
    };
  },
  mounted() {
    //获取资源列表
    this.selectResources();
  },
  methods: {
    routerResourcesRanking(resouceId) {
      let id = Number(this.id);
      uni.navigateTo({
        url: `/pages/starDetail/resourcesRanking?id=${id}`
      });
    },
    //获取资源列表
    selectResources(name) {
      this.$u
        .post("/starDetail/selectResources", {
          id: this.id,
          pageNum: 1,
          pageSize: 20,
          name: name
        })
        .then(res => {
          this.resourcesList = res.list;
        })
        .catch(res => {
          this.resourcesList.forEach((item, index) => {
            //  处理参与人数比
            this.resourcesList[index].targetValue =
              (item.joinNum / item.target) * 100;
            //  处理达成人数比
            this.resourcesList[index].reachNumValue =
              (item.reachNum / item.target) * 100;
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
// 当前明星卡片
.star-card {
  background: #fff;
  border-radius: 20rpx;
  margin: 20rpx;
  box-shadow: 0 0 15rpx #e6e6e6;
  padding: 10rpx;
  // 明星上方数据
  .list-top {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20rpx;
    padding-top: 20rpx;
    .row-text {
      right: 50rpx;
      height: 60rpx;
      text-align: center;
      padding: 10rpx;
      margin-left: 10rpx;
      display: inline-block;
      border-radius: 30rpx;
      background: #f3c3c3;
      color: #e34c4c;
    }
    .btn {
      text-align: center;
      height: 54rpx;
      line-height: 54rpx;
      padding: 0 20rpx;
      border-radius: 27rpx;
      text-align: center;
      background: linear-gradient(to right, #f83a3a, #f7c18b);
      color: #fff;
    }
  }
}
.title {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}
.badge-button {
  // padding: 20rpx 20rpx;
  width: 50rpx;
  height: 50rpx;
  background-color: #f64f71;
  color: #fff;
  border-radius: 25rpx;
  border: none;
  font-size: 22rpx;
  line-height: 1;
}
.badge-button1 {
  background-color: #e9c046;
}
.slider-resource {
  margin-right: 150rpx;
}
.btn-slider {
  float: right;
  width: 80rpx;
  text-align: center;
  height: 40rpx;
  line-height: 40rpx;
  background: #f64f71;
  border-radius: 20rpx;
  color: #fff;
  position: relative;
  right: 40rpx;
  top: -30rpx;
}
.btn-slider1 {
  background-color: #e9c046;
}

.u-slider--disabled {
  opacity: 1 !important;
}
.slider-area {
  margin-top: 30rpx;
  margin-bottom: 30rpx;
}
.flex-area {
  display: flex;
  align-items: center;
  // flex-direction: row;
  justify-content: space-between;
  .target {
    display: inline-block;
    color: #333;
    font-weight: bold;
    font-size: 12px;
  }
  .join {
    color: #f64f71;
  }
  .reach {
    text-align: right;
    color: #e9c046;
    margin-right: -30rpx;
  }
}
.flex-area-rank {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
// .img-list {
//   //   text-align: center;
//   position: relative;
//   display: inline-block;
//   padding: 10rpx;
//   .img {
//     position: relative;
//   }
//   .num {
//     position: absolute;
//     right: 30rpx;
//     top: 0;
//     font-size: 14px;
//     font-weight: bold;
//   }
//   .num::after {
//     clear: both;
//     height: 0;
//   }
// }
// .more {
//   display: inline-block;
//   text-align: center;
//   position: relative;
//   top: 15rpx;
// }
//底部排名
// 粉丝榜单
.list-bottom {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
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
</style>

