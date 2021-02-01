<template>
	<view>
		<u-action-sheet :list="list" v-model="show"></u-action-sheet>
		<u-button @click="show = true">打开ActionSheet</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					text: '点赞',
					color: 'blue',
					fontSize: 28,
					subText: '感谢您的点赞',
				},
				{
					text: '分享',
				},
				{
					text: '评论',
				},
			],
			show: false,
		}
	},
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
}
</script>
