<template>
  <!-- //1我的守护，2热力值获取记录，3打榜记录 -->
  <!-- 个人中心用到的 -->
  <view>
    <!-- 1.首页周日月排行榜 -->
    <view class="list-th" v-if="rankType === 0">
      <view class="list-row" v-for="(item, index) in rankingList" :key="index">


      <view class="list-top">
        <view class="left-content">
          <u-image
            class="img-icon"
             width="80rpx"
            height="80rpx"
            :src="item.avatar"
            shape="circle"
          ></u-image>
          <view class="row-text">
            <view class="name">
            
             {{item.name}}
            </view>

            
            <view class="hotVal">{{ item.hotNums }}</view>
          </view>
        </view>

        <view class="btn-group">
          <view class="btn btn1" @click="dabang(item.id)">
            打榜
          </view>
          <view class="btn btn2" @click="removeMyGuard(item.id)">
            退出守护
          </view>
        </view>
      </view>
      </view>
    </view>
    <!-- 2.粉丝排行榜 -->
    <view class="list-th" v-if="rankType === 1">
      <view class="list-row" v-for="(item, index) in rankingList" :key="index">


      <view class="list-top">
        <view class="left-content">
          <!-- <u-image
            class="img-icon"
             width="80rpx"
            height="80rpx"
            :src="item.avatar"
            shape="circle"
          ></u-image> -->
          <view class="row-text">
            <view class="name">
            
             {{item.type | typeVal}}
            </view>

            
            <view class="hotVal">{{ item.addTime }}</view>
          </view>
        </view>

         
      </view>
        <view class="val"> +{{ item.vigourVal }} </view>
      </view>

    </view>
    <!-- 3.资源排行榜 -->
    <view class="list-th" v-if="rankType === 2">
     <view class="list-row" v-for="(item, index) in rankingList" :key="index">


      <view class="list-top">
        <view class="left-content">
          <u-image
            class="img-icon"
             width="80rpx"
            height="80rpx"
            :src="item.avatar"
            shape="circle"
          ></u-image>
          <view class="row-text">
            <view class="name">
            
             {{item.name}}
            </view>

            
            <view class="hotVal">{{ item.addTime }}</view>
          </view>
        </view>

         
      </view>
        <view class="val"> +{{ item.vigourVal }} </view>
      </view>
    </view>
     <view v-if="showModal">
      <DabangModal :showModal="showModal" :starId="starId"  @closeDabang="closeDabang"></DabangModal>
      
    </view>
  </view>
</template>

<script>
import DabangModal from "./../../components/dabangModal/index.vue";

export default {
    components: {
   
    DabangModal,

  },
  props: ["rankingList", "rankType"], //0我的守护，1热力值获取记录，2打榜记录
  filters: {
  typeVal: (b) =>{
    if (!b) return ''
    let arry = ['签到', '抽奖' ,'看视频' ,'分享' ,'赠送'];
    
    return arry[b-1]
  }
},
  data() {
    return {
      myData:{},
       showModal: false,//打榜弹窗
       starId:""
    };
  },
   methods: {
    //  推出守护
     removeMyGuard(id){
        this.$u
        .get("/personalCenter/removeMyGuard", {
          starId: id,
        })
        .then((res) => {
            uni.showToast({
            title: "退出成功",
            icon: "none",
            duration: 2000,
          });
          this.$emit("getmyGuard");
          // this.showInfo =true
          // this.StarGuardList = res;
          
        })
        .catch((res) => {});
     },
         closeDabang(){

      this.showModal = false
    },
    // 打榜弹窗
    dabang(id){
      console.log(id,'ui')
      this.starId = id
      this.showModal = true
    },
   }
   
};
</script>

<style lang="scss" scoped>
// 我的守护
.list-top {
      // margin: 20rpx;
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
      // padding: 20rpx;
      // padding-bottom: 200rpx;
      .left-content {
        display: flex;
        align-items: center;
        flex-direction: row;
        //   justify-content: space-between;
        width: 300rpx;
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
          margin-top: 10rpx;
          font-size: 10px;
        }
      }
      .btn-group {
        // width: 240rpx;
        .btn {
          display: inline-block;
          text-align: center;
          height: 54rpx;
          line-height: 54rpx;
          // width: 100%;
          padding: 0 30rpx;
          border-radius: 27rpx;
          text-align: center;
         
          color: #fff;
        
        }
        .btn1 {
           background: linear-gradient(to right, #f83a3a, #f7c18b);
          margin-right: 12rpx;
        }
        .btn2 {
          margin-top: 10rpx;
          background: #DBDBDB;
        }
      }
    }



.list-th {
  margin: 0 20rpx;
}
.list-row {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20rpx;
  //   justify-content: space-around;
}
.num-body {
  margin-right: 24rpx;
  .num {
    width: 50rpx;
    height: 50rpx;
    line-height: 50rpx;
    border-radius: 25rpx;
    color: #e34c4c;
    text-align: center;
    border: 1px solid #e34c4c;
  }

  .num0 {
    background: linear-gradient(#fe6925, #df372c);
    color: #fff;
    border: none;
  }
  .num1 {
    background: linear-gradient(#e8d81c, #e1792a);
    color: #fff;
    border: none;
  }
  .num2 {
    background: linear-gradient(#3bf2c9, #4ce8f3);
    color: #fff;
    border: none;
  }
}
.img-body {
  margin-right: 22rpx;
}
.name {
  width: 150rpx;
  text-align: left;
  color: #333333;
  font-weight: bold;
  font-size: 28rpx;
}
.val {
  text-align: right;
  position: absolute;
  right: 20rpx;
  margin-top: 40rpx;
  width: 200rpx;
  font-size: 24rpx;
  color: #b5b5b5;
}
.list-th0 {
  .list-row {
    .img-body{
      // display: flex;
      // justify-content: center;
      // align-items: center;
      width: 200rpx;
      position: relative;
      .text-area{
          position: absolute;
          width: 100rpx;
        top: 0;
        left: 0;
        .name{
      
      }
      }
      
    }
  }
}
</style>
