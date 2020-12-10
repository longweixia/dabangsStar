<template>
  <view>
    <zy-search
      :is-focus="true"
      :theme="themeClass"
      :show-want="true"
      :speechEngine="speechEngine"
      :hot-list="hotList" 
	   :dataList="dataList"
      @getSearchText="getSearchText" 
    ></zy-search>
  </view>
</template>

<script>
import zySearch from "../../components/zy-search/zy-search.vue";
export default {
  components: {
    zySearch
  },
  data() {
    return {
      themeClass: "block",
      speechEngine: "baidu", //语音识别引擎
	  hotList: ["栏目1", "栏目2", "栏目3", "栏目4"], //初始化推荐列表
	  dataList:[
		  {"avatar":"string","detailImg":"string","hitPopupImg":"string","name":"梁静茹","thisMonthRank":3,"thisWeekRank":1},
					{"avatar":"string","detailImg":"string","hitPopupImg":"string","name":"梁静茹","thisMonthRank":3,"thisWeekRank":1},
					{"avatar":"string","detailImg":"string","hitPopupImg":"string","name":"梁静茹","thisMonthRank":3,"thisWeekRank":1}
	  ]
    };
  },
  methods: {
    getSearchText(e) {
      uni.showToast({
        title: "回调的搜索信息: " + e,
        icon: "none"
	  });
	  this.selectMyGuard(e)
    },
    selectMyGuard(name) {
      this.$u.get("/home/selectStarInfo",{name:name}).then(res => {
		//  this.dataList = res || []
		 this.dataList = []
      });
    }
  }
};
</script>

<style>
</style>
