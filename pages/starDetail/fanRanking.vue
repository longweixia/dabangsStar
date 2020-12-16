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
      rankingList1: [
        {
          icon: "皇冠",
          avatarUrl: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          nickName: "邓伦",
          vigourVal: 500
        },
        {
          icon: "皇冠",
          avatarUrl: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          nickName: "邓伦",
          vigourVal: 500
        },
        {
          icon: "皇冠",
          avatarUrl: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          nickName: "邓伦",
          vigourVal: 500
        }
      ],
      rankingList2: [
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "1",
          name: "邓伦月榜",
          val: "+234234热力值"
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "2",
          name: "周超",
          val: "+234234热力值"
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "3",
          name: "黄晓明",
          val: 100
        }
      ],
      btnList: ["粉丝周榜", "粉丝月榜", "粉丝总榜"],
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
      // if (index === 0) {
      // this.rankingList = this.rankingList1;
      // } else if (index === 1) {
      //   this.rankingList = this.rankingList2;
      // }
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
