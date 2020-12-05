<template>
  <view class="home-page">
    <!-- 轮播 -->
    <view class="home-swiper">
      <u-swiper
        :list="swiperList"
        @click="clickSwiper" height='590'
        mode="dot"
        indicator-pos="bottomCenter"
        :autoplay="true"
        interval="2000"
      ></u-swiper>
       <img @click="routerSearch"
             class="search-icon"
              src="../../static/home/searchBtn.png"
            >
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
          :key="index" @click="routerStarDetail"
        >
         
            <u-image
              class="guard-img"
              width="80rpx"
              height="80rpx"
              :src="item.image"
              shape="circle"
            ></u-image>
            <view  class="guard-right">
               <view class="guard-name">邓超伦</view>
                <view class="guard-btn">打榜</view>
            </view>
           
            <!-- <u-button class="guard-btn" :custom-style="customBtnStyle">打榜</u-button> -->
        
        </view>
        <!-- <u-col span="9" class="guard-card">
					<view class="demo-layout bg-purple-light"></view>
				</u-col> -->
      </view>
    </view>
    
    <!-- 榜单tag -->
    <view class="list-ranking-type">
      <u-row gutter="16" justify="center" class="guard-list" align="center">
        <u-col
          span="3"
          class="guard-card"
          v-for="(item, index) in raningTypeList"
          :key="index"
        >
          <view class="demo-layout bg-purple-light">
            <view class="guard-type">{{ item.type }}</view>
            <view class="guard-btn">{{ item.text }}</view>
            <!-- <u-button class="guard-btn" :custom-style="customBtnStyle">打榜</u-button> -->
          </view>
        </u-col>
        <!-- <u-col span="9" class="guard-card">
					<view class="demo-layout bg-purple-light"></view>
				</u-col> -->
      </u-row>
    </view>
    <!-- 榜单前三 -->
    <view class="list-top-three">
      <u-row gutter="16" justify="center" align="center">
        <u-col
          span="4"
          class="guard-card"
          text-align="center"
          v-for="(item, index) in topThreeList"
          :key="index"
        >
          <view class="demo-layout bg-purple-light">
            <view>{{ item.icon }}</view>
            <u-image
              class="img"
              width="100rpx"
              height="100rpx"
              :src="item.image"
              shape="circle"
            ></u-image>
            <view class="num">{{ item.num }}</view>
            <view class="name">{{ item.name }}</view>
            <view class="name">{{ item.val }}</view>
            <view class="btn">打榜</view>
          </view>
        </u-col>
      </u-row>
    </view>
    <!-- 榜单前三以外 -->
    <view class="list-four-th">
      <view
        class="list-row"
        v-for="(item, index) in listFourTh"
        :key="index"
        style="display: flex;align-items: center; flex-direction: row;justify-content:  space-around"
      >
        <view>{{ item.num }}</view>
        <u-image
          class="img"
          width="100rpx"
          height="100rpx"
          :src="item.image"
          shape="circle"
        ></u-image>
        <view style="text-align: center;font-size: 10px;font-family: Arial;">
          {{ item.name }}
        </view>
        <view style="text-align: center;font-size: 10px;">
          {{ item.val }}
        </view>
        <view class="btn">打榜</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
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
        },
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
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "2",
          name: "邓伦",
          val: 500
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "1",
          name: "周超",
          val: 600
        },
        {
          icon: "皇冠",
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
      listFourTh: [
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          name: "邓伦",
          val: 500
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "5",
          name: "周超",
          val: 600
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "6",
          name: "黄晓明",
          val: 100
        }
        // {
        // 	image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        // 	title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
        // }
      ]
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
      /deep/ .u-swiper-indicator{
      bottom: 120rpx!important;
    }
  // 搜索区
  .search-icon{
    position: absolute;
    top: 100rpx;
    left: 28rpx;
    width:38rpx;
    height:38rpx;
  }
  // 我的守护
  .home-my-guard {
 
    position: relative;
    top: -100rpx;
    margin-left: 20rpx;
    margin-right: 20rpx;
    background: linear-gradient(to bottom,rgba(233, 233, 234, .36),rgba(233, 233, 234, .16));
    // box-shadow: 0px 0px 6px rgba(177, 177, 177, 0.16);
    border-top-right-radius: 10rpx;
    padding-bottom: 20rpx;
    .guard-title{
      color:#E34C4C;
      position: absolute;
      top: -40rpx;
      height: 40rpx;
      line-height: 40rpx;
      background: rgba(233, 233, 234, .26);
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
        width:240rpx;
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
          .guard-right{
             position: relative;
             display: inline-block;
             margin-left:24rpx;
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
               background: linear-gradient(to right,#F83A3A,#F7C18B);
              color:#fff;
            }
          }
      
        
       
      }
       .guard-card:last-child{
          margin-right:20rpx;
        }
    }
  }
  // 榜单tag
  .list-ranking-type {
    margin: 20rpx;
    position: relative;
    top: -100rpx;
    .guard-list {
      .guard-card {
        // height: 80rpx;
        .guard-type {
          padding: 10rpx 20rpx;
        }
        .guard-btn {
          text-align: right;
          padding: 10rpx 20rpx;
          font-size: 40rpx;
          font-weight: bold;
        }
      }
    }
  }
  // 榜单前三
  .list-top-three {
    margin: 20rpx;
     position: relative;
    top: -100rpx;
    .guard-card {
      .img {
        position: relative;
        left: calc(50% - 50rpx);
        // margin:  0 auto;
      }
      .num {
        position: relative;
        font-weight: bold;
        margin-top: -20rpx;
        z-index: 1000 !important;
      }
      .btn {
        position: relative;
        top: -30rpx;
        width: 100rpx;
        text-align: center;
        padding: 5rpx 10rpx;
        margin-left: 10rpx;
        display: inline-block;
        border-radius: 10rpx;
        background: blue;
        color: #fff;
      }
    }
  }
  // 榜单前三以外
  .list-four-th {
    margin: 20rpx;
     position: relative;
    top: -100rpx;
    .list-row {
      border-bottom: 2px solid #ddd;
      padding-bottom: 20rpx;
      padding-top: 20rpx;
      .img {
        position: relative;
        display: inline-block;
      }
      .num {
        font-weight: bold;
        z-index: 1000 !important;
        position: absolute;
        top: 50%;
      }
      .name {
      }
      .btn {
        right: 50rpx;
        width: 100rpx;
        text-align: center;
        padding: 5rpx 10rpx;
        margin-left: 10rpx;
        display: inline-block;
        border-radius: 10rpx;
        background: blue;
        color: #fff;
      }
    }
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