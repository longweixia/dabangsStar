<template>
<!-- 榜单-周榜，月榜，粉丝榜，总榜 -->
  <view class="fan-ranking">
    <!-- 导航栏 -->

    <view class="nav-top">
      <BtnNav :btnList="btnList" @changebtn="changebtn" :rankType="rankType"></BtnNav>
    </view>
    <!-- 排行榜 -->
    <view class="list">
        <RankingList v-if="hasData" :rankingList="rankingList" listPage="home"></RankingList>
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
      hasData: true,// 是否有数据，默认有数据
      rankingList: [],
      rankingList1: [
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "4",
          name: "邓伦周榜",
          val: 500
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "5",
          name: "周超",
          val: "+234234热力值"
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "6",
          name: "黄晓明",
          val: "+234234热力值"
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "7",
          name: "黄晓明",
          val: "+234234热力值"
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
      btnList: ["周榜", "月榜", "总榜","粉丝榜"],
      rankType: null, //显示周榜还是月榜,0是周榜，1是月榜  todo  粉丝榜传值是什么
    };
  },
  onLoad(option) {
    this.rankType = Number(option.type);
  },
  mounted() {
    this.changebtn(this.rankType);
  },
  methods: {
    // formatRankType(index){
    //   let text = index
    //   if(index==2){
    //     text=3
    //   }else if(index==3){
    //     text=3
    //   }
    //   return text
    // },
    changebtn(index) {
      console.log(index);
      this.rankType = index

      // if (index === 0) {
      //   this.rankingList = this.rankingList1;
      // } 
      // else if (index === 1) {
      //   this.rankingList = this.rankingList2;
      // }
      // else if (index === 2) {
      //   this.rankingList = this.rankingList2;
      // }
      // else if (index === 3) {
      //   this.rankingList = this.rankingList2;
      // }
       this.$u.post('/home/weekRank/list',{
         "pageNum": 1,
         "pageSize": 20,
          "rankType": index
       }).then(res => {
              this.rankingList = res.list;  //　少了头像
              if(res.list&&res.list.length>0){
                this.hasData = true
              }else{
                this.hasData = false
              }
        }).catch((res) => {
          this.$toLogin(res)
  
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
.nodata{
text-align:center;
margin-top:40rpx
}
</style>
