<template>
  <u-modal
    width="700"
    v-model="show"
 negative-top="50"
    :mask-close-able="true"
    :show-title="false"
    ref="uModal"
    class="dabang-modal"
  >
   

    <view class="slot-content">
      <view class="title-modal">
        <!-- 弹幕 -->
        <view
          style="
            overflow: hidden;
            position: fixed;
            width: 100%;
            height: 100%;
            pointer-events: none;
            top: -440px;
            z-index: 100000;
          "
        >
          <view
            class="danmu-li"
            v-for="(item, index) in listData"
            :class="item.type"
            :style="[item.style]"
            :key="index"
          >
            <view class="danmu-inner">
              <view class="user-box">
                <view class="user-img">
                  <view class="img-box">
                    <image :src="item.item.avatarUrl"></image>
                  </view>
                </view>
                <view class="user-text cl1"> {{ item.item.nickName }} </view>
                <view class="user-status cl1">
                  打榜了<text style="color: #e34c4c; font-weight: bold">
                    {{ item.item.vigourVal }}</text
                  >热力值
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="detail-bg-img">
          <view
            class="bg-img"
            :style="{
              background:
                'url(' + detailImg + ') center center / cover no-repeat',
            }"
          ></view>
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
                  >打榜<text v-if="btnVal">{{ btnVal }}</text>
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
     <view class="close-btn" @click="close"> x </view>
  </u-modal>
</template>

<script>
// import RankingTabSlogan from '../../components/home/ranking-tab-slogan.vue'
import Binglyric from "./../bing-lyric/bing-lyric.vue";
import Test from "./test.vue";
import Dianzan from "./dianzan.vue";

export default {
  name: "BtnNav",
  components: {
    // 00,Binglyric
    // ,
    Dianzan,
    Test,
  },
  props: ["showModal", "rankType", "starId"],
  props: {
    //rightToLeft leftToRight leftBottom
    showModal: {
      type: Boolean,
      default: false,
    },
    rankType: {
      type: Number,
      default: 0,
    },
    starId: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "leftBottom",
    },
    minTime: {
      type: Number,
      default: 4,
    },
    maxTime: {
      type: Number,
      default: 9,
    },
    minTop: {
      type: Number,
      default: 0,
    },
    maxTop: {
      type: Number,
      default: 100,
    },
    hrackH: {
      //轨道高度
      type: Number,
      default: 40,
    },
    noStacked: {
      //不允许堆叠(暂不可用)
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    showModal: {
      handler(newVal, oldVal) {
        this.show = newVal;
        // if(!show){
        //     this.$emit("loadData")
        // }
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
      looNum: 0, //弹幕次数
      btnVal: 0, //打榜按钮选中的值
      listData: [],
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
      dabangInfo: [],
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
    this.hrackNum = Math.floor((this.maxTop - this.minTop) / this.hrackH);
  },
  onLoad(option) {
    this.starId = Number(option.id);
  },
  methods: {
    // 添加弹幕
    addDanmu(obj) {
      let data = {
        item: obj.item,
        id: Date.parse(new Date()),
        time: Math.ceil(
          Math.floor(
            Math.random() * (this.maxTime - this.minTime + 1) + this.minTime
          )
        ),
        type: this.type,
      };
      if (this.type === "leftBottom") {
        let objData = {
          item: data.item,
          type: "leftBottomEnter",
          style: {
            transition: `all 0.5s`,
            animationDuration: `0.5s`,
            transform: `translateX(0%)`,
            bottom: `${this.minTop}px`,
          },
        };
        let listLen = this.listData.length;
        let hrackNum = this.hrackNum;
        for (let i in this.listData) {
          if (this.listData[i].status === "reuse") {
            //重用
            this.$set(this.listData, i, objData);
          } else if (this.listData[i].status === "reset") {
            //重置
            this.listData[i].style.transition = "none";
            this.listData[i].style.bottom = 0;
            this.listData[i].status = "reuse";
          } else if (this.listData[i].status === "recycle") {
            //回收
            this.listData[i].type = "leftBottomExit";
            this.listData[i].status = "reset";
          } else {
            this.listData[i].style.bottom =
              parseInt(this.listData[i].style.bottom) + this.hrackH + "px";
          }
          if (
            parseInt(this.listData[i].style.bottom) >=
              this.maxTop - this.hrackH &&
            this.listData[i].status !== "reset"
          ) {
            //需要回收
            this.listData[i].status = "recycle";
          }
        }

        if (listLen < hrackNum + 3) {
          this.listData.push(objData);
        }
        // console.log(
        //   listLen,
        //   "listLen",
        //   hrackNum,
        //   "hrackNum",
        //   this.listData,
        //   "this.listData"
        // );
      }
      // else if (this.type === "rightToLeft" || this.type === "leftToRight") {
      //   let objData = this.horStacked(data);
      //   for (let i in this.listData) {
      //     if (this.listData[i].delTime <= Date.parse(new Date())) {
      //       this.repaint(i, objData.type);
      //       objData.type = "";
      //       this.$set(this.listData, i, objData);
      //       return;
      //     }
      //   }
      //   this.listData.push(objData);
      // }
    },
    horStacked(data) {
      return {
        item: data.item,
        type: this.type,
        style: {
          animationDuration: `${data.time}s`,
          top: `${Math.ceil(
            Math.random() * (this.maxTop - this.minTop + 1) + this.minTop
          )}px`,
        },
        delTime: Date.parse(new Date()) + data.time * 1200,
      };
    },
    repaint(index, type) {
      setTimeout(() => {
        this.listData[index].type = type;
      }, 100);
    },
    close() {
      this.$emit("closeDabang");
    },
    loopDanmu() {
      this.dabangInfo = this.dabangInfo.concat(this.StarGuardList);
    },
    colrdo() {
      //插入一条弹幕
      let that = this;
       let list = []
        for(var i =1;i<20;i++){
          list=  list.concat(this.StarGuardList)
        }
  


      if (list && list.length > 0) {
        let old;
        list.forEach((e, index) => {
          if (index < list.length - 1) {
           old= setTimeout(() => {
              that.addDanmu({ item: e });
            }, 1000 * (index + 2));
          } else if (index == list.length - 1) {
            clearTimeout(old)
          //  this.colrdo1()
          }
        });
      }
    },
    colrdo1() {
      //插入一条弹幕
      let that = this;
      let list = []
        for(var i =1;i<20;i++){
            list.push(this.StarGuardList)
        }
        // console.log(list)

      if (this.StarGuardList && this.StarGuardList.length > 0) {
        
        
        list.forEach((e, index) => {
          if (index < list - 1) {
            setTimeout(() => {
              that.addDanmu({ item: e });
            }, 1000 * (index + 2));
          } else if (index == list - 1) {
           
          }
        });
      }
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
          vigourVal: this.inpValue,
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
          this.detailImg = res.hitPopupImg;
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

      this.btnVal = val;
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
@keyframes leftBottomEnter {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes leftBottomExit {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }

  100% {
    transform: translateY(-200%);
    opacity: 0;
  }
}

@keyframes leftToRight {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes rightToLeft {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.danmu-li {
    margin-top: -30px;
  position: absolute;
  width: 100%;
  transform: translateX(100%);
  animation-timing-function: linear;

  &.leftBottomEnter {
    animation-name: leftBottomEnter;
  }
  &.leftBottomExit {
    animation-name: leftBottomExit;
    animation-fill-mode: forwards;
  }

  &.rightToLeft {
    animation-name: rightToLeft;
  }

  &.leftToRight {
    animation-name: leftToRight;
  }

  .danmu-inner {
    display: inline-block;

    .user-box {
      display: flex;
      padding: 3rpx 40rpx 3rpx 10rpx;
      background: rgba(255, 255, 255, .3);
      border-radius: 32rpx;
      align-items: center;

      .user-img {
        .img-box {
          display: flex;

          image {
            width: 24rpx;
            height: 24rpx;
            background: rgba(55, 55, 55, 1);
            border-radius: 50%;
          }
        }
      }

      .user-status {
        margin-left: 10rpx;
        white-space: nowrap;
        font-size: 28rpx;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }

      .user-text {
        margin-left: 10rpx;
        // white-space: nowrap;
        font-size: 28rpx;
        font-weight: 400;
        // width: 150rpx;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
}
.title-modal{
    background: #fff;
}

/deep/ .u-mode-center-box,/deep/ .u-model {
  border-radius: 0 !important;
  background: none;
}
.dabang-modal {
  position: relative;

  background: none;
  .close-btn {
      display: flex;
      justify-content: center;
      align-items: center;

    position: relative;
    color: #fff;
    width: 50rpx;
    margin: 0 auto;
    height: 50rpx;
 
    margin: 0 auto;
    border-radius: 25rpx;
    border: 1px solid #fff;
    right: 0;
    margin-top: 60px;

    z-index: 10000;
  }

  // 顶部背景图
  .detail-bg-img {
    width: 100%;
    height: 280rpx;
    position: relative;
    margin-bottom: 40rpx;
    .bg-img {
      width: 100%;
      height: 100%;
      // z-index: -2;
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
          min-width: 120rpx;
          height: 50rpx;
          text-align: center;
          line-height: 50rpx;
          border-radius: 10rpx;
          font-size: 10px;
          background: #e34c4c;
          color: #fff;
          padding: 0 10rpx;
          font-size: 14px;
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
