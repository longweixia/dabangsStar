<template>
  <view class="fan-ranking-area">
    <!-- 资源榜 排行榜 -->
     <u-navbar :title="titles" :background="background" title-size='34' :title-bold="true"></u-navbar>
    <view class="list">
      <RankingList
        :rankingList="rankingList"
        v-if="hasData"
        listPage="resourcesRanking"
      ></RankingList>
      <view v-if="!hasData" class="nodata">
        当前榜单暂无数据，您可以查看其它榜单
      </view>
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import RankingList from "../../components/ranking-list/ranking-list.vue";
export default {
  components: {
    RankingList,
  },
  data() {
    return {
        titles:"",
      rankingList: [],
         background: {
           backgroundColor: '#F5F8FF'
      },
      hasData: true, // 是否有数据，默认有数据
      id: null,
    };
  },
  onLoad(option) {
    this.id = option.id;
    this.titles = option.titles;
  },
  mounted() {
    this.loadData(this.id);
  },
  methods: {
    loadData(id) {
      this.$u
        .post("/starDetail/selectResourcesRank", {
          resourcesRelId: this.id,
          pageNum: 1,
          pageSize: 20,
        })
        .then((res) => {
          this.rankingList = res.list; //　少了头像
          // this.rankingList = this.rankingList1;  //　少了头像
          if (res.list && res.list.length > 0) {
            this.hasData = true;
          } else {
            this.hasData = false;
          }
        })
        .catch((res) => {
        //   this.$toLogin(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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
//   margin-top: 20rpx;
}
}
</style>