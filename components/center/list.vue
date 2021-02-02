<template>
  <view class="fan-ranking">
    <!-- 导航栏 -->

    <view class="nav-top">
      <BtnNav
        :btnList="btnList"
        @changebtn="changebtn"
        :rankType="rankType"
      ></BtnNav>
    </view>
    <!-- 排行榜 -->
    <view class="list">
      <MycenterRankingList
        :rankingList="rankingList"
        v-if="hasData"
        :rankType="rankType" @getmyGuard="myGuard"
      ></MycenterRankingList>
      <view v-if="!hasData&&isLogin" class="nodata">
        当前榜单暂无数据，您可以查看其它榜单
      </view>
      <view v-if="!hasData&&!isLogin" class="nodata">
        请登录后查看
      </view>
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import BtnNav from "../../components/btn-nav/btn-nav.vue";
import MycenterRankingList from "../../components/ranking-list/mycenter-ranking-list.vue";
export default {
  components: {
    BtnNav,
    MycenterRankingList
  },
  data() {
    return {
      isLogin:true,// 未登录
      rankingList: [],
      hasData: true, // 是否有数据，默认有数据
      btnList: ["我的守护", "热力获取记录", "打榜记录"],
      rankType: 0 //0我的守护，1热力值获取记录，2打榜记录
    };
  },
 
  mounted() {
    this.changebtn(0);
  },
  methods: {
    changebtn(index) {
    
 
      this.rankType = index;
      if(index===0){
              console.log(index,'调用打榜')
          this.myGuard()
      }else if(index===2){
          this.selectHitList()
      
      }else if(index===1){
          this.selectVigourLog()
      }
    },
   
    //我的守护
    myGuard(){
         this.rankingList = []
         this.$u
        .post("/personalCenter/selectMyGuard", {
          pageNum: 1,
          pageSize: 20
        })
        .then(res => {
             console.log('我的守护信息',res)
          this.isLogin = true
          this.rankingList = res.list; //　少了头像
          // this.rankingList = [
          //   {"id":"1","name":"","avatar":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg","hotNums":10},
          //   {"id":"1","name":"","avatar":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg","hotNums":10},
          //   {"id":"1","name":"","avatar":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg","hotNums":10},
          //   {"id":"1","name":"","avatar":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg","hotNums":10},
          //   {"id":"1","name":"","avatar":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743749179,750499312&fm=26&gp=0.jpg","hotNums":10},
          //   ]
          if (res.list && res.list.length > 0) {
            this.hasData = true;
          } else {
            this.hasData = false;
          }
        })
         .catch((res) => {

            this.hasData = false;
          // this.$toLogin(res)
          if( res&&res.data.code ==401){
            this.isLogin = false
          }else{
             this.isLogin = true
          }
         
  
        });
    },
    //打榜记录
    selectHitList(){
         this.rankingList = []
         this.$u
        .post("/personalCenter/selectHitList", {
          pageNum: 1,
          pageSize: 20
        })
        .then(res => {
          this.rankingList = res.list; //　少了头像
          if (res.list && res.list.length > 0) {
            this.hasData = true;
          } else {
            this.hasData = false;
          }
        })
          .catch((res) => {
        //   this.$toLogin(res)
  
        });
    },
    //热力获取记录
    selectVigourLog(){
         this.rankingList = []
         this.$u
        .post("/personalCenter/selectVigourLog", {
          pageNum: 1,
          pageSize: 20
        })
        .then(res => {
          this.rankingList = res.list; //　少了头像
          if (res.list && res.list.length > 0) {
            this.hasData = true;
          } else {
            this.hasData = false;
          }
        })
        .catch((res) => {
          // this.$toLogin(res)
  
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.btns {
  width: 100px;
  height: 30px;
  background: #000;
  border-radius: 15px;
}
.flex-area {
  //   display: flex;
  //   align-items: center;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   padding-bottom: 20rpx;
  //   padding-top: 20rpx;
}
.nav-top {
  text-align: center;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}
.nodata {
  text-align: center;
  margin-top: 40rpx;
  padding-bottom: 40rpx;
}
</style>
