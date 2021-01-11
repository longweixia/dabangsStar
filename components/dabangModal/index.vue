<template>
  <u-modal
    width="700"
    v-model="show"
    :show-confirm-button="false"
    :mask-close-able="true"
    :show-title="false"
    ref="uModal"
    class="dabang-modal"
  >
    <view class="close-btn" @click="close"> x </view>
    <Binglyric
      ref="lffBarrage"
      :info="dabangInfo"
      @loopDanmu="loopDanmu"
      style="bottom: 50rpx; position: relative"
    ></Binglyric>

    <view class="slot-content">
      <view class="title-modal">
        <view class="detail-bg-img">
          <img class="img" :src="detailImg" />
          <!--  -->

          <!-- 打榜弹窗 -->
          <!-- <view class="toast-db">
            <img class="imgs" :src="StarGuardList.avatarUrl" />
            <view class="text">
              {{ StarGuardList.nickName }}打榜<text class="red-num">
                {{ StarGuardList.vigourVal }}</text
              >热力值</view
            >
          </view> -->
        </view>

        <view class="body-area">
          <u-row gutter="16" style="margin-top: 20rpx">
            <u-col span="4">
              <view class="title"> 为{{ starName }}打榜</view>
            </u-col>

            <u-col span="8" class="right-btn">
              <view class="col-top">
                <view class="slice" @click="add('jian')">-</view>
                <input v-model="inpValue" type="number" class="inp-num" />
                <view class="add" @click="add('jia')">+</view>

                <view class="btn" @click="add('btn')"
                  >打榜+99
                  <Dianzan
                    ref="dianzan"
                    :dabangVal="inpValue"
                    style="position: relative; top: -80rpx"
                  ></Dianzan>
                </view>
              </view>
              <view class="col-top col-top2">
                <view class="hot">我的热力值：{{ myInfo.vigourVal }}</view>

                <view class="hot-text" @click="routerStarDetail()"
                  >获得热力值>></view
                >
              </view>
            </u-col>
          </u-row>
          <u-row gutter="16" class="row-bottom">
            <u-col span="3" v-for="(item, index) in dabangValList" :key="index">
              <view class="btn" @click="addBtn(item.value)"
                >+{{ item.value }}</view
              >
            </u-col>
          </u-row>
        </view>
      </view>
    </view>
  </u-modal>
</template>

<script>
// import RankingTabSlogan from '../../components/home/ranking-tab-slogan.vue'
import Binglyric from "./../bing-lyric/bing-lyric.vue";
import Dianzan from "./dianzan.vue";

export default {
  name: "BtnNav",
  components: {
    // 00,
    Binglyric,
    Dianzan,
  },
  props: ["showModal", "rankType", "starId"],
  watch: {
    showModal: {
      handler(newVal, oldVal) {
        this.show = newVal;
      },
      immediate: true,
    },

    show: {
      handler(newVal, oldVal) {
        if (!newVal) {
          this.$emit("closeDabang");
          clearInterval(this.danmu);
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      showInfo: false,
      danmu: "",
      myInfo: {},
      inpValue: 0,
      show: this.showModal,
      formArry: [
        {
          name: "inp1",
          value: "",
        },
        {
          name: "inp2",
          value: "",
        },
        {
          name: "inp3",
          value: "",
        },
        {
          name: "inp4",
          value: "",
        },
      ],
      dabangValList: [
        {
          name: "inp1",
          value: 99,
        },
        {
          name: "inp2",
          value: 520,
        },
        {
          name: "inp3",
          value: 999,
        },
        {
          name: "inp4",
          value: 1314,
        },
        {
          name: "inp1",
          value: 3344,
        },
        {
          name: "inp2",
          value: 5920,
        },
        {
          name: "inp3",
          value: 8888,
        },
        {
          name: "inp4",
          value: 9999,
        },
      ],
      starName: "", //明星名字

      myData: {}, //个人信息
      checked: false, //默认没选中
      StarGuardList: [], //打榜弹窗数据
      detailImg: "",
      starInfo: [],
      dabangInfo: [
        {
          title: "踮起脚尖走向阳光 刚刚浏览本店",
          avatarUrl:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3672480879,3772984794&fm=26&gp=0.jpg",
        },
        // {
        //   title: "sb",
        //   img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3672480879,3772984794&fm=26&gp=0.jpg"
        // },
        // {
        //   title: "sb1",
        //   img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3672480879,3772984794&fm=26&gp=0.jpg"
        // },
        // {
        //   title: "sb1",
        //   img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3672480879,3772984794&fm=26&gp=0.jpg"
        // },
      ],
    };
  },
  mounted() {
    //明星打榜弹窗
    this.selectStarGuardList();
    // 获取明星详情页明星信息
    this.selectStarInfo();
    // 获取我的热力值
    this.selectFensInfo();

    // this.colrdo()
  },
  onLoad(option) {
    this.starId = Number(option.id);
  },
  methods: {
    close() {
      this.$emit("closeDabang");
    },
    loopDanmu() {
      this.dabangInfo = this.dabangInfo.concat(this.StarGuardList);
    },
    colrdo() {
      //  this.dabangInfo =this.dabangInfo.concat(
      //     this.StarGuardList
      //  )
      for (let i = 0; i < this.StarGuardList.length; i++) {
        ((j) => {
          this.danmu = setTimeout(() => {
            // console.log(i)
            this.dabangInfo = this.dabangInfo.concat(this.StarGuardList[i]);
          }, 1000 * i);
        })(i);
      }

      //插入一条弹幕
      // this.StarGuardList.forEach((e, i) => {
      //   var pre = Date.now();

      //   // this.dabangInfo = this.dabangInfo.concat(e);
      //   // this.throttle(this.dabangInfo.concat(e),1000)
      //   this.danmu = setInterval((()=>{
      //      var now = Date.now();
      //     if (now - pre >= 1000) {
      //   this.dabangInfo = this.dabangInfo.concat(e);
      //   }
      //   }),500)
      // });
    },
    //   加减input
    add(name) {
      if (name == "jian") {
        if (Number(this.inpValue)) {
          this.inpValue = Number(this.inpValue) - 1;
          // this.myInfo.vigourVal =this.inpValue;
        }
      } else if (name == "jia") {
        this.inpValue = Number(this.inpValue) + 1;
        // this.myInfo.vigourVal =-this.inpValue;
      } else if (name == "btn") {
        if (this.inpValue == 0) {
          uni.showToast({
            title: "请先选中对应的热力值",
            icon: "none",
            duration: 2000,
          });
          return false;
        }
        // this.myInfo.vigourVal =  Number(this.inpValue);
        this.hit();
       
      }
    },

    //明星打榜弹窗
    selectStarGuardList() {
      this.$u
        .get("/starDetail/selectStarGuardList", {
          starId: this.starId,
        })
        .then((res) => {
          // this.showInfo =true
          this.StarGuardList = res;
          this.colrdo();
        })
        .catch((res) => {});
    },
    //打榜
    hit() {
      this.$u
        .post("/home/hit", {
          starId: this.starId,
          vigourVal: Number(this.inpValue),
        })
        .then((res) => {
          // this.StarGuardList = res;
 this.$refs.dianzan.handleClick();
          this.selectFensInfo();
          // if (res.list && res.list.length > 0) {
          //   this.hasData = true;
          // } else {
          //   this.hasData = false;
          // }
        })
        .catch((res) => {});
    },
    // 获取明星详情页明星信息
    selectStarInfo() {
      this.$u
        .get("/starDetail/selectStarInfo", {
          id: this.starId,
        })
        .then((res) => {
          this.starInfo = res; //　少了头像
          this.detailImg = res.detailImg;
          this.starName = res.name;

          // if (res.list && res.list.length > 0) {
          //   this.hasData = true;
          // } else {
          //   this.hasData = false;
          // }
        })
        .catch((res) => {});
    },
    addBtn(val) {
      if (val > this.myInfo.vigourVal) {
        uni.showToast({
          title: "您的热力值不足哦！",
          icon: "none",
          duration: 2000,
        });
        return false;
      }
      this.inpValue = val;
    },
    // 获取我的信息
    selectFensInfo() {
      this.$u
        .post("/home/fens")
        .then((res) => {
          this.myInfo = res; //　少了头像
          //  this.inpValue=0
        })
        .catch((res) => {});
    },
    routerStarDetail() {
      uni.navigateTo({
        url: `/pages/starDetail/starDetail?id=${this.starId}`,
      });
    },
  },
};
</script>

<style lang="scss">
.u-mode-center-box {
  border-radius: 0 !important;
}
.dabang-modal {
  position: relative;

  position: relative;
  .close-btn {
    text-align: center;
    position: absolute;
    color: #fff;
    width: 40rpx;
    margin: 0 auto;
    height: 40rpx;
    line-height: 40rpx;
    margin: 0 auto;
    border-radius: 20rpx;
    border: 1px solid #fff;
    right: 0;
    top: 0;

    z-index: 10000;
  }

  // 顶部背景图
  .detail-bg-img {
    width: 100%;
    height: 280rpx;
    position: relative;
    .img {
      width: 100%;
      height: 100%;
      z-index: -2;
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
    border: none;
    .imgs {
      width: 40rpx;
      height: 40rpx;
      border-radius: 20rpx;
      display: inline-block;
      background: #fff;
    }
    .text {
      color: #fff;
      display: inline-block;
      font-size: 10px;
      .red-num {
        // font-weight: bold;
        color: #e34c4c;
        font-size: 12px;
      }
    }
  }
  //   打榜内容
  .body-area {
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #333333;
    }
    .right-btn {
      margin-top: 20rpx;
      margin-bottom: 20rpx;
      .col-top {
        display: flex;
        justify-content: center;
        align-items: center;
        .slice,
        .add {
          background: #e34c4c;
          display: inline-block;
          color: #fff;
          width: 34rpx;
          height: 34rpx;
          line-height: 34rpx;
          text-align: center;
          border-radius: 17rpx;
          margin-left: 10rpx;
          margin-right: 10rpx;
        }
        .inp-num {
          display: inline-block;
          width: 100rpx;
          height: 50rpx;
          border: 1px solid #ddd;
          background: #febcbc;
          color: #fff;
          //   opacity: .16;
        }
        .add {
          display: inline-block;
        }
        .btn {
          width: 100rpx;
          height: 40rpx;
          text-align: center;
          line-height: 40rpx;
          border-radius: 10rpx;
          font-size: 10px;
          background: #e34c4c;
          color: #fff;
          pad: 5rpx;
        }
        .hot {
          color: #d1d1d1;
          font-size: 10px;
        }
        .hot-text {
          color: #2163a5;
          font-size: 10px;
          margin-left: 20rpx;
          cursor: pointer;
        }
      }
      .col-top2 {
        margin-top: 10rpx;
      }
    }
  }
  .row-bottom {
    .btn {
      width: 140rpx;
      height: 64rpx;
      line-height: 64rpx;
      text-align: center;
      border-radius: 10rpx;
      color: #fff;
      margin-top: 20rpx;
      margin-bottom: 20rpx;
      background: linear-gradient(to right, #f83a3a, #f7c18b);
    }
  }
}
</style>
