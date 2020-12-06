<template>
  <view class="home-page">
    <!-- 轮播 -->
    <view class="home-swiper">
      <u-swiper
        :list="swiperList"
        @click="clickSwiper"
        height="590"
        mode="dot"
        indicator-pos="bottomCenter"
        :autoplay="true"
        interval="2000"
      ></u-swiper>
      <img
        @click="routerSearch"
        class="search-icon"
        src="../../static/home/searchBtn.png"
      />
    </view>
    <!-- 搜索 -->

    <!--       
    <view class="home-search">

      <u-search shape="round" :clearabled="true" placeholder="搜索爱豆" action-text=" "></u-search>
      <view @click="routerSearch">搜索</view>
    </view> -->
    <!-- 我的守护 -->
    <view class="home-my-guard">
      <text class="guard-title">
        我的守护
      </text>
      <view class="guard-list" align="center">
        <view
          class="guard-card"
          v-for="(item, index) in myGuardList"
          :key="index"
          @click="routerStarDetail"
        >
          <u-image
            class="guard-img"
            width="80rpx"
            height="80rpx"
            :src="item.image"
            shape="circle"
          ></u-image>
          <view class="guard-right">
            <view class="guard-name">邓超伦</view>
            <view class="guard-btn">打榜</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 榜单tag -->
    <view class="home-tag">
      <rankingTabHasText v-if="hasTagText"></rankingTabHasText>
      <rankingTabNo v-if="!hasTagText"></rankingTabNo>
    </view>
    <!-- 榜单前三 -->
    <view class="list-top-three">
      <view class="card-time">
        <view class="time-text">
          截至：10天9小时20分21秒
        </view>
      </view>
      <u-row >
        <u-col
          span="4"
          class="guard-card"
          text-align="center"
          v-for="(item, index) in topThreeList"
          :key="index"
          :class="'guard-card' + index"
        >
          <!-- <view>{{ item.icon }}</view> -->
          <view class="img-area" :class="'img-area' + index">


            
            <view class="num">{{ item.num }}</view>
            <img
              class="img-icon"
              :class="'img-head' + index"
              :src="item.icon"
            />
            <img
              class="img-head"
              :class="'img-head' + index"
              :src="item.image"
            />
            </view>
     

          <view class="name">{{ item.name }}</view>
          <view class="val">{{ item.val }}</view>
          <view class="btn-area">
            <view class="btn">打榜</view>
          </view>
        </u-col>
      </u-row>
    </view>
    <!-- 榜单前三以外 -->
    <view class="list-four-th">
      <starRankingList :rankingList="rankingList"></starRankingList>
    </view>
  </view>
</template>

<script>
import rankingTabNo from "../../components/home/ranking-tab-no.vue";
import rankingTabHasText from "../../components/home/ranking-tab-hasText.vue";
import starRankingList from "../../components/home/star-ranking-list.vue";

export default {
  name: "home",
  components: {
    rankingTabNo,
    rankingTabHasText,
    starRankingList
  },
  data() {
    return {
      // 轮播
      swiperList: [
        {
          image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"
        }
      ],
      // 我的守护
      myGuardList: [
        {
          image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        }
        // {
        // 	image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        // 	title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
        // }
      ],
      // 榜单tag
      raningTypeList: [
        {
          type: "周榜",
          text: "我"
        },
        {
          type: "月榜",
          text: "爱"
        },
        {
          type: "粉丝榜",
          text: "邓"
        },
        {
          type: "月总榜",
          text: "伦"
        }
        // {
        // 	image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        // 	title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
        // }
      ],
      // 榜单前三
      topThreeList: [
        {
          icon: "../../static/home/AnCrown2.png",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "2",
          name: "邓伦",
          val: 500
        },
        {
          icon: "../../static/home/AnCrown1.png",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "1",
          name: "周超",
          val: 600
        },
        {
          icon: "../../static/home/AnCrown3.png",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "3",
          name: "黄晓明",
          val: 100
        }
        // {
        // 	image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        // 	title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
        // }
      ],
      // 榜单前三以外
      rankingList: [
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "1",
          name: "邓伦",
          val: "10872"
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "2",
          name: "周超",
          val: "10872"
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "3",
          name: "黄晓明",
          val: "24242"
        }
      ],
      hasTagText: true //是否在个人中心设置明星tag文字
    };
  },
  methods: {
    clickSwiper(index) {
      console.log(index);
    },
    routerSearch() {
      uni.navigateTo({
        url: "/pages/search/search"
      });
    },
    routerStarDetail() {
      uni.navigateTo({
        url: "/pages/starDetail/starDetail"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  // 轮播区
  .home-swiper {
    position: relative;
  }
  /deep/ .u-swiper-indicator {
    bottom: 120rpx !important;
  }
  // 搜索区
  .search-icon {
    position: absolute;
    top: 100rpx;
    left: 28rpx;
    width: 38rpx;
    height: 38rpx;
  }
  // 我的守护
  .home-my-guard {
    position: relative;
    top: -100rpx;
    margin-left: 20rpx;
    margin-right: 20rpx;
    background: linear-gradient(
      to bottom,
      rgba(233, 233, 234, 0.36),
      rgba(233, 233, 234, 0.16)
    );
    // box-shadow: 0px 0px 6px rgba(177, 177, 177, 0.16);
    border-top-right-radius: 10rpx;
    padding-bottom: 20rpx;
    .guard-title {
      color: #e34c4c;
      position: absolute;
      top: -40rpx;
      height: 40rpx;
      line-height: 40rpx;
      background: rgba(233, 233, 234, 0.26);
      padding: 10rpx 20rpx 0 20rpx;
      padding-bottom: 0;
      border-top-left-radius: 20rpx;
      border-top-right-radius: 20rpx;
      font-size: 22rpx;
      font-weight: bold;
    }
    .guard-list {
      margin-top: 0;
      overflow-y: scroll;
      white-space: nowrap;
      width: 700rpx;
      .guard-card {
        display: inline-block;
        width: 240rpx;
        height: 100rpx;
        margin-left: 20rpx;
        height: 150rpx;
        border-radius: 10rpx;
        background: #fff;
        margin-top: 24rpx;
        box-shadow: 0 0 12px rgba(177, 177, 177, 0.16);
        .guard-img {
          display: inline-block;
          margin-top: 25rpx;
          margin-left: 25rpx;
        }
        .guard-right {
          position: relative;
          display: inline-block;
          margin-left: 24rpx;
          text-align: center;
          .guard-name {
            position: relative;
            top: -15rpx;
          }
          .guard-btn {
            position: relative;
            top: -10rpx;
            height: 46rpx;
            line-height: 46rpx;
            width: 100rpx;
            padding: 0 10rpx;
            border-radius: 23rpx;
            text-align: center;
            background: linear-gradient(to right, #f83a3a, #f7c18b);
            color: #fff;
          }
        }
      }
      .guard-card:last-child {
        margin-right: 20rpx;
      }
    }
  }
  // 榜单tag
  .home-tag {
  }
  // 榜单前三
  .list-top-three {
    height: 434rpx;
    margin-top: 20rpx;
    padding-top: 14rpx;
    position: relative;
    top: -100rpx;
    background: linear-gradient(to bottom, #feecb3, #f64d71);
    border-top-right-radius: 20rpx;
    border-top-left-radius: 20rpx;
    .card-time {
      background: #feecca;
      width: 296rpx;
      height: 42rpx;
      line-height: 42rpx;
      text-align: center;
      margin-bottom: 40rpx;

      border-radius: 21rpx;
      margin-left: 26rpx;
      .time-text {
        color: #e34c4c;
        font-size: 10px;
      }
    }
    .guard-card {
      position: relative;
      padding: 0 !important;
      color: #fff;
      text-align: center;
      height: 260rpx;
      .name{
        font-weight: bold;
      }
      .img-area {
        margin-right: 40rpx;
        .num {
          //  width: 18rpx;
          //  height: 18rpx;;
          transform: rotate(325deg);
          font-size: 7px;
          position: relative;
          right: 24rpx;
          top: 22rpx;
          // font-weight: bold;
          // margin-top: -20rpx;
          z-index: 1000 !important;
        }
        .img-icon {
          position: relative;
          left: 34rpx;
          top: -92rpx;
          width: 46rpx;
          height: 46rpx;
        }
        .img-head {
          position: relative;
          // left: calc(50% - 50rpx);
          width: 118rpx;
          height: 118rpx;
          border-radius: 59rpx;
          border: none;
        }
        // .img-head1{
        //   width: 118rpx;
        //   height: 118rpx;
        // }
      }
      .img-area1 {
        position: relative;
        margin-right: 20rpx;
        top: -40rpx;
        .num {
          //  width: 18rpx;
          //  height: 18rpx;;
          font-size: 7px;
          position: relative;
          right: 58rpx;
          top: 26rpx;
          // font-weight: bold;
          // margin-top: -20rpx;
          z-index: 1000 !important;
        }
        .img-icon {
          position: relative;
          left: 24rpx;
          top: -136rpx;
        }
        .img-head {
          position: relative;
          // left: calc(50% - 50rpx);
          width: 168rpx;
          height: 168rpx;
          left:-20rpx;
          border-radius: 84rpx;
          border: none;
        }
//         .name{
// top: -40rpx;
//         }
//         .btn-area{
// top: -40rpx;
//         }
      }
      .btn-area {
        text-align: center;
        margin-top: 14rpx;
        .btn {
          margin: auto;
          height: 46rpx;
          line-height: 46rpx;
          width: 110rpx;
          padding: 0 10rpx;
          border-radius: 23rpx;
          text-align: center;
          background: linear-gradient(to right, #f83a3a, #f7c18b);
          color: #fff;
        }
      }
    }
    .guard-card1 {
    
    //  top: -50rpx;
     height: 308rpx;
     .name, .val, .btn-area{
         position: relative;
     
        top: -30rpx;
     }
   
    }
  }
  // 榜单前三以外
  .list-four-th {
    // margin: 20rpx;
    position: relative;
    top: -100rpx;
  }
}
.wrap {
  padding: 40rpx;
}
.u-row {
  margin: 40rpx 0;
}
.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.bg-purple-dark {
  background: #99a9bf;
}
</style>