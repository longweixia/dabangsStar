<template>
  <view class="fan-ranking">
    <!-- 排行榜 -->
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
      rankingList: [],
      hasData: true, // 是否有数据，默认有数据
      rankingList1: [
        {
          icon: "皇冠",
          avatarUrl: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          nickName: "邓伦",
          completeNum: 500,
        },
        {
          icon: "皇冠",
          avatarUrl: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          nickName: "邓伦",
          completeNum: 500,
        },
        {
          icon: "皇冠",
          avatarUrl: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          nickName: "邓伦",
          completeNum: 500,
        },
        {
          icon: "皇冠",
          avatarUrl: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          nickName: "邓伦",
          completeNum: 500,
        },
        {
          icon: "皇冠",
          avatarUrl: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          nickName: "邓伦",
          completeNum: 500,
        },
      ],
      rankingList2: [
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "1",
          name: "邓伦月榜",
          val: "已经完成30次",
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "2",
          name: "周超",
          val: "已经完成30次",
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "3",
          name: "黄晓明",
          val: "已经完成30次",
        },
      ],
      id: null,
    };
  },
  onLoad(option) {
    this.id = Number(option.id);
  },
  mounted() {
    this.loadData(this.id);
  },
  methods: {
    loadData(id) {
      this.$u
        .post("/starDetail/selectResourcesRank", {
          id: this.id,
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
          this.$toLogin(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.nodata {
  text-align: center;
  margin-top: 40rpx;
}
</style>
