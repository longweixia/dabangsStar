<template>
  <view class="fan-ranking-area">
    <!-- 导航栏 -->
   
  <u-navbar :title="starname" :background="background" title-size='34' :title-bold="true"></u-navbar>
   
    <view class="nav-top">
      <BtnNav
        :btnList="btnList"
        @changebtn="changebtn"
        :rankType="rankType"
      ></BtnNav>
    </view>
    <!-- 排行榜 -->
    <view class="list">
      <RankingList
        :rankingList="rankingList"
        v-if="hasData"
        listPage="starDetail"
      ></RankingList>
      <view v-if="!hasData" class="nodata">
        当前榜单暂无数据，您可以查看其它榜单
      </view>
    </view>
    <u-toast ref="uToast" />
  </view>

</template>

<script>
import BtnNav from "../../components/btn-nav/btn-nav.vue";
import RankingList from "../../components/ranking-list/ranking-list.vue";
export default {
  components: {
    BtnNav,
    RankingList
  },
  data() {
    return {
   
       starname:'',//明星名
      rankingList: [],
      background: {
          backgroundColor: '#F5F8FF'
      },
      hasData: true, // 是否有数据，默认有数据
     
     
      btnList: ["粉丝周榜", "粉丝月榜", "粉丝总榜"],
      rankType: null, //显示周榜还是月榜,0是周榜，1是月榜
      titles:"",//标题
    };
  },
  onLoad(option) {
    this.rankType = option.type;
    this.id = option.id;
    this.starname = option.name+"粉丝榜";
  },
  mounted() {
    this.changebtn(this.rankType);
  },
  methods: {
    changebtn(index) {
    
      this.rankType = index;
    
      this.$u
        .post("/starDetail/selectFensRank", {
          id: this.id,
          pageNum: 1,
          pageSize: 20,
          rankType: index
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
    }
  }
};
</script>

<style lang="scss">
.fan-ranking-area{
  background: #F5F8FF;
  height: 100vh;
  .list{
    background: #fff;
    margin: 20rpx;
    border-radius: 10rpx;
    padding: 10rpx;
    padding: 20rpx;
  }
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
//   margin-top: 40rpx;
}
}
</style>