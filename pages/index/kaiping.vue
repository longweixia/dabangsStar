<template>
	<view class="fan-ranking">
		<img src="./kaiping.jpg" style="width: 100%; height: 750px" />
	</view>
</template>

<script>
export default {
	data() {
		return {}
	},
	onLoad(option) {
		if (wx.getStorageSync('Authorization')) {
			this.direct()
		} else {
			var timer = setTimeout(() => {
				clearTimeout(timer)
				this.direct()
			
			}, 2000)
		}
	},
	mounted() {},
	methods: {
		direct() {
             uni.navigateTo({
        url: `/pages/index/index`,
      });
			// wx.redirectTo({
			// 	url: '/pages/index/index',
			// })
		},
		
	},
}
</script>

<style lang="scss" scoped></style>
