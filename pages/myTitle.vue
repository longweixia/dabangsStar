<template>
	<view class="my-title-area" :class="classType">
		<text class="icon-left"></text>
		<text class="text">111</text>
	</view>
</template>

<script>
export default {
	props: ['btnList', 'rankType', 'classType'],
	data() {
		return {}
	},
	mounted() {},

	methods: {},
}
</script>

<style lang="scss">
.my-title-area {
	position: relative;
	height: 150rpx;
	line-height: 150rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	.text {
		position: absolute;
		bottom: -50rpx;
	}
}
.center {
	background: #f64d71;
	color: #ddd;
}
</style>
