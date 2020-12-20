  <template> 
    <view class="home-bottom">
      <img class="home-bottom-img" src="../../static/home/homeBottom.png" />
        <view class="my">
          <view class="my-card" @click="routerToCenter">
          <img class="my-img" src="../../static/home/my.png"/>
          </view>
      </view>
    </view>
 
</template>
<script>

export default {
  name: "home",
  components: {

  },
  data() {
    return {
      // 轮播
      swiperList: [
        // {
        //   image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
        //   title: "昨夜星辰昨夜风，画楼西畔桂堂东"
        // },
        // {
        //   image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
        //   title: "身无彩凤双飞翼，心有灵犀一点通"
        // },
        // {
        //   image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
        //   title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"
        // }
      ],
      // 我的守护
      myGuardList: [
        {
          image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
          name: "邓伦"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          name: "邓伦"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          name: "邓伦"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          name: "邓伦"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          name: "邓伦"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          name: "邓伦"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          name: "邓伦"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          name: "邓伦"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          name: "邓伦"
        }

      ],
      // 榜单tag 排名类型：0周榜；1月榜；2总榜
      raningTypeList: [
        {
          type: "周榜",
          text: "我",
          rankType: 0
        },
        {
          type: "月榜",
          text: "爱",
           rankType: 1
        },
        {
          type: "粉丝榜",
          text: "邓",
          rankType: 2
        },
        {
          type: "月总榜",
          text: "伦",
          rankType: 3
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
          val: 600,
          star:"../../static/home/oneStart.png"
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
          num: "4",
          name: "邓伦",
          val: "10872"
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "5",
          name: "周超",
          val: "10872"
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "6",
          name: "黄晓明",
          val: "24242"
        }
      ],
      hasTagText: true //是否在个人中心设置明星tag文字
    };
  },
  onLoad(){
      this.carouselList()
            this.selectMyGuard()
     
  },
  methods: {
    // 获取我的守护
    selectMyGuard(){
       this.$u.post('/home/selectMyGuard').then(res => {
              this.myGuardList = res.list;  //　少了头像
            })
    },
    // 获取轮播
    carouselList(){
     this.$u.post('/home/carousel/list').then(res => {
              this.swiperList = res;
            })
    },
    clickSwiper(index) {
      console.log(index);
    },
    routerSearch() {
      uni.navigateTo({
        url: "/pages/search/search"
      });
    },
    routerStarDetail(id) {
      uni.navigateTo({
        url: `/pages/starDetail/starDetail?id=${id}`
      });
    },
    routerToCenter(){
       uni.navigateTo({
        url: `/pages/center/index`
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
    z-index: -2;

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
    .card-area {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 80rpx;
    }
    .guard-card {
      position: relative;
      color: #fff;
      height: 260rpx;
      width: 33%;
      display: flex;
      //  justify-content: center;
      align-items: center;
      flex-direction: column;
      .name {
        font-weight: bold;
      }
      .img-area {
         position: relative;
        .img-head {
          width: 118rpx;
          height: 118rpx;
          border-radius: 59rpx;
          z-index: 100;
        }
        .img-star{
          position: absolute;
           width: 222rpx;
            height: 232rpx;
            top: -40rpx;
            left:-30rpx;
            z-index: -1;
        }
        .num {
            transform: rotate(325deg);
            font-size: 7px;
            position: absolute;
           left: 8rpx;
            top: -12rpx;
            z-index: 1000 !important;
          }
          .img-icon {
            position: absolute;
            left: -12rpx;
            top: -20rpx;
            width: 46rpx;
            height: 46rpx;
          }
      }
      .img-area1 {
        .img-head {
          width: 168rpx;
          height: 168rpx;
          border-radius: 84rpx;
        }
        .num {
            transform: rotate(325deg);
            font-size: 7px;
            position: absolute;
            left: 20rpx;
            top: -6rpx;
            z-index: 1000 !important;
          }
          .img-icon {
            position: absolute;
            left: -16rpx;
            top: -32rpx;
            width: 68rpx;
            height: 68rpx;
          }
      }
       .btn-area {
          text-align: center;
          margin-top: 14rpx;
          .btn {
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
    .guard-card1{
      top: -50rpx;
    }
  }

  // 榜单前三以外
  .list-four-th {
    // margin: 20rpx;
    position: relative;
    top: -100rpx;
    margin-bottom: 80rpx;
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

.home-bottom{
 position: relative;
 height: 132rpx;
  .home-bottom-img{
    width: 100%;
    height: 100%;
  }
  .my{
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
  .my-card{
    width: 100rpx;
    height: 100rpx;
    // padding: 10rpx;
    // background: #fff;
    // border-radius: 40rpx;
    // border: 2px solid #ddd;
    // color: #E34C4C;
     .my-img{
      width:100%;
      height:100%;
    }
  }
}

}
</style>