<template>
	<view class="listAwards-area">
		<u-navbar title="榜单奖励"></u-navbar>
		<view class="nav-top">
			<BtnNav
				:btnList="btnList"
				@changebtn="changebtn"
				:rankType="rankType"
			></BtnNav>
		</view>
        <view style="margin:20rpx">
            <u-image mode="widthFix" :src="srcImg"></u-image>
        </view>
	</view>
</template>

<script>
import BtnNav from "../../components/btn-nav/btn-nav";
export default {
	name: 'listAwards',
	components: {
        BtnNav
    },
	data() {
		return {
			btnList: ['周榜奖励', '月榜奖励'],
			rankType: 0,
            awardsList: [],
            srcImg:""
		}
	},
	mounted() {
		this.getMyInfo()
	},
	methods: {
		changebtn(index) {
            this.rankType = index
            this.srcImg = this.awardsList[index].img
		},
		getMyInfo() {
			this.$u
				.get('/personalCenter/listAward')
				.then((res) => {
          
                    this.awardsList = res
                     this.srcImg = this.awardsList[0].img
				})
				.catch((res) => {})
		},
	},
}
</script>

<style lang="scss">
.listAwards-area {
    .nav-top{
        text-align: center;
    }
}
</style>