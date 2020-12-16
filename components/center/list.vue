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
      rankingList: [],
      hasData: true, // 是否有数据，默认有数据
      btnList: ["我的守护", "热力获取记录", "打榜记录"],
      rankType: null //显示周榜还是月榜,0是周榜，1是月榜
    };
  },
  onLoad(option) {
    this.rankType = Number(option.type);
    this.id = Number(option.id);
  },
  mounted() {
    this.changebtn(this.rankType);
  },
  methods: {
    changebtn(index) {
      console.log(index);
      this.rankType = index;
      if(index===0){
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
          this.rankingList = res.list; //　少了头像
          if (res.list && res.list.length > 0) {
            this.hasData = true;
          } else {
            this.hasData = false;
          }
        })
        .catch(res => {
          this.$refs.uToast.show({
            title: res.message,
            // 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
            type: "error ",
            duration: 1000,
            // 如果不需要图标，请设置为false
            icon: true
          });
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
        .catch(res => {
          this.$refs.uToast.show({
            title: res.message,
            // 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
            type: "error ",
            duration: 1000,
            // 如果不需要图标，请设置为false
            icon: true
          });
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
        .catch(res => {
          this.$refs.uToast.show({
            title: res.message,
            // 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
            type: "error ",
            duration: 1000,
            // 如果不需要图标，请设置为false
            icon: true
          });
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
}
</style>
