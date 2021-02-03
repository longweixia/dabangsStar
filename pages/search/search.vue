<template>
	<view>
		<u-navbar title="搜索爱豆" back-icon-color="#000" title-color="#000" :title-bold="true"></u-navbar>
		<zy-search
			:is-focus="true"
			:theme="themeClass"
			:show-want="true"
			:speechEngine="speechEngine"
			:hotList="hotList"
			:dataList="dataList" 
			@getSearchText="getSearchText" @clear="clear"
		></zy-search>
	</view>
</template>

<script>
import zySearch from '../../components/zy-search/zy-search.vue'
export default {
	components: {
		zySearch,
	},
	data() {
		return {
			themeClass: 'block',
			speechEngine: 'baidu', //语音识别引擎
			hotList: [], //初始化推荐列表
            dataList: [],
       
		}
    },
    
	mounted() {
        this.getHotSearch()
 
        	uni.getStorage({
				key: 'search_cache',
				success(res) {
                    console.log(res,"空")
                },
				fail(err) {
                    console.log(err,"失败")
					uni.setStorage({
						key: 'search_cache',
						data: []
					})
				},
			})

	},
	methods: {
		getSearchText(e) {
			this.selectMyGuard(e)
		},
		selectMyGuard(name) {
			this.$u.get('/home/selectStarInfo', { name: name }).then((res) => {
                this.dataList = res || []
               
			})
		},
		getHotSearch() {
			this.$u
				.get('/home/hotSearch')
				.then((res) => {
					// this.hotList = res //　少了头像
				})
				.catch((res) => {
					// this.$toLogin(res)
				})
        },
        clear(){
            this.dataList = []
          
        }
	},
}
</script>

<style></style>
