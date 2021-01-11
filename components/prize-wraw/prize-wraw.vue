<template>
  <!-- 抽奖互动 -->
  <view class="star-card">
    <view class="list-top" v-for="(item, index) in prizeWrawList" :key="index">
      <img class="img" :src="item.image" />
      <view class="row-text">
        <view class="name"> {{ item.name }}</view>
        <view class="tip">{{ item.tips }} </view>
      </view>
      <view  v-if="index!==3" class="btn" style="z-index: 100" @click="clickBtn(index)">{{
        item.name
      }}</view>
       <button v-if="index==3"  class="btn-share btn" open-type="share">立即分享</button>
    </view>
  </view>
</template>

<script>
export default {
  name: "prize-wraw",
  props:["starId"],


  onLoad(){},
  components: {},
  data() {
    return {
      //抽奖互动
      prizeWrawList: [
        {
          tips: "100%中热力值",
          image: "../../static/home/choujiang.png",
     
          name: "抽奖",
          val: 500,
        },
        {
          tips: "签到获得20热力值",
          image: "../../static/home/choujiang.png",
  
          name: "签到",
          val: 500,
        },
        {
          tips: "观看视频获得30热力值",
          image: "../../static/home/bofang.png",
  
          name: "看视频",
          val: 500,
        },
        {
          tips: "分享获得30热力值",
          image: "../../static/home/share.png",

          name: "分享",
          val: 500,
        },
      ],
        //设置默认的分享参数
            share:{
                title:'ALAPI',
                path:'/pages/index/index',
                imageUrl:'',
                desc:'',
                content:''
            }
    };
  },
 
    
  methods: {
    clickBtn(i) {
      if (i === 0) {
        //抽奖
        uni.navigateTo({
          url: "/pages/starDetail/choujiang",
        });
      } else if (i === 1) {
        // 签到
        this.signiIn()
 
      
      }
    },
    // 签到
    signiIn() {
      let params = {
        starId: this.starId,
        type:1//任务类型 1-签到 2-抽奖 3-看视频 4-分享
      }
      this.$u
        .post("/starDetail/getVigourVal",params)
        .then((res) => {
             uni.showToast({
            title: "签到成功，获得20热力值",
            icon:'none',
            duration: 1000
        
        });   
         this.$emit("getmyInfo")
        })
        .catch((res) => {
            uni.showToast({
            title: res.message,
            icon:'none',
            duration: 1000,
      
        });
        });
    },
    // 获取热力值设置
    getHitSettings() {
      let params = {
        starId: this.starId
      }
      this.$u
        .get("/starDetail/selectHitSettings",params)
        .then((res) => {
          // 抽奖
           this.prizeWrawList[0].tips= "100%中热力值"
          // 签到
           this.prizeWrawList[1].tips= `签到获得${res.data.vigourSignNum}热力值`
        })
        .catch((res) => {
            uni.showToast({
            title: res.message,
            icon:'none',
            duration: 1000,
      
        });
        });
    },
    // 签到
    signiIn() {
      let params = {
        starId: this.starId,
        type:1//任务类型 1-签到 2-抽奖 3-看视频 4-分享
      }
      this.$u
        .post("/starDetail/getVigourVal",params)
        .then((res) => {
             uni.showToast({
            title: "签到成功，获得20热力值",
            icon:'none',
            duration: 1000
        
        });   
         this.$emit("getmyInfo")
        })
        .catch((res) => {
            uni.showToast({
            title: res.message,
            icon:'none',
            duration: 1000,
      
        });
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-share{
  margin-right: 0!important;
  right: 0!important;
  height: 60rpx;
  line-height: 50rpx;
     
  font-size: 30rpx!important;
}
// 当前明星卡片
.star-card {
  margin: 20rpx;
  // 明星上方数据
  .list-top {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20rpx;
    padding-top: 20rpx;
    border-bottom: 1px solid #e6e6e6;
    .img {
      position: relative;
      display: inline-block;
      left: 10rpx;
      width: 46rpx;
      height: 46rpx;
    }
    .btn {
      right: 50rpx;
      width: 200rpx;
      height: 60rpx;
      text-align: center;
      padding: 10rpx;
      margin-left: 10rpx;
      display: inline-block;
      border-radius: 30rpx;
      background: #e34c4c;
      color: #fff;
    }
    .row-text {
      min-width: 220rpx;
      text-align: left;
      font-size: 10px;
      font-family: Arial;
      position: relative;
      left: -100rpx;
      .name {
        font-size: 12px;
        color: #000;
        font-weight: bold;
      }
      .tip {
        font-size: 10px;
        color: #b8b8b8;
      }
    }
  }
  .list-top:nth-child(4) {
    border: none;
  }
}
</style>

