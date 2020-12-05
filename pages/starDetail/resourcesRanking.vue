<template>
  <view class="fan-ranking">
    <!-- 排行榜 -->
    <view class="list">
        <RankingList :rankingList="rankingList"></RankingList>
    </view>
  </view>
</template>

<script>
import RankingList from "../../components/ranking-list/ranking-list.vue";
export default {
  components: {
    RankingList
  },
  data() {
    return {
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
          val: "已经完成30次"
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "2",
          name: "周超",
          val: "已经完成30次"
        },
        {
          icon: "皇冠",
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          num: "3",
          name: "黄晓明",
          val: "已经完成30次"
        }
      ],
      id: null,
    };
  },
  onLoad(option) {
    this.id = Number(option.id);
  },
  mounted() {
    this.changebtn(this.id);
  },
  methods: {
    changebtn(index) {
      console.log(index);
      this.id = index
      if (index === 0) {
        this.rankingList = this.rankingList1;
      } else if (index === 1) {
        this.rankingList = this.rankingList2;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
