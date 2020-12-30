<template>
	<view class="my-edit-slogan">
		<view class="bg-img"></view>
		<view class="edit-card">
			<u-cell-group class="card-content">
				<!-- <u-cell-item title="个人标语" :arrow="false">
					<u-switch slot="right-icon" v-model="checked"></u-switch>
				</u-cell-item> -->
				<!-- 标语内容 -->
				<div class="tips-top">
					恭喜你解锁了我们的小秘密，你可以设置个人标语支持爱豆哦！标语在首页显示，只有你能看到
				</div>
				<!-- 榜单tag -->
				<view class="home-tag">
					<RankingTabSlogan></RankingTabSlogan>
					<!-- <rankingTabNo v-if="!hasTagText"></rankingTabNo> -->
				</view>
				<div class="tips-content">
					<span class="tips-grey">发挥你的想象，试试看吧！ </span
					>比如：我爱xx、
					<u-icon
						name="heart-fill"
						color="#e90403"
						size="28"
					></u-icon>
					xxx
				</div>
				<!-- 输入表单 -->
				<view>
					<u-form ref="uForm" class="slogan-form">
						<u-form-item prop="name">
							<view class="form-items" style="margin: 0 auto">
								<input
									v-model="item.value"
									class="inp"
									v-for="(item, i) in formArry"
									maxlength="1"
									:key="i"
								/>
							</view>
						</u-form-item>
					</u-form>
					<view class="btn-group">
						<view class="btn" @click="clearForm">清除</view>
						<view class="btn btn1" @click="changeSlogan">保存</view>
					</view>
				</view>
			</u-cell-group>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
import RankingTabSlogan from '../../components/home/ranking-tab-slogan.vue'

export default {
	name: 'BtnNav',
	components: {
		RankingTabSlogan,
	},
	props: ['btnList', 'rankType'],
	data() {
		return {
			formArry: [
				{
					name: 'inp1',
					value: '',
				},
				{
					name: 'inp2',
					value: '',
				},
				{
					name: 'inp3',
					value: '',
				},
				{
					name: 'inp4',
					value: '',
				},
			],

			myData: {}, //个人信息
			checked: false, //默认没选中
		}
	},
	mounted() {
		this.getMyInfo()
	},

	methods: {
		clearForm() {
			this.formArry.forEach((item, index) => {
				this.formArry[index].value = ''
			})
		},
		submit() {
			this.$refs.uForm.validate((valid) => {
				if (valid) {
					console.log('验证通过')
				} else {
					console.log('验证失败')
				}
			})
		},
		// 调用改变标语的接口
		changeSlogan() {
			// 拼接入参
			let str = ''
			this.formArry.forEach((item, index) => {
				str = str + item.value
			})

			this.$u
				.post('/personalCenter/updatePersonalCenterInfo', {
					slogan: str,
				})
				.then((res) => {
                 
                     	this.$refs.uToast.show({
						title: '修改成功',
						// 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
						type: 'success ',
						duration: 1000,
						// 如果不需要图标，请设置为false
						icon: true,
					})

					this.getMyInfo()
				})
				.catch((err) => {
					this.$refs.uToast.show({
						title: err,
						// 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
						type: 'error ',
						duration: 1000,
						// 如果不需要图标，请设置为false
						icon: true,
					})
				})
		},
		getMyInfo() {
			this.$u
				.get('/personalCenter/personalCenterInfo')
				.then((res) => {
					// let res = {
					//   slogan:'你是我的'
					// }
					this.myData = res
					// 回显标语
					if (res.slogan) {
						this.formArry.forEach((item, index) => {
							this.formArry[index].value = res.slogan[index]
						})
					}
				})
				.catch((res) => {})
		},
		changeHeader() {
			this.showChangeImg = true
		},
	},
}
</script>

<style lang="scss">
.my-edit-slogan {
	.bg-img {
		width: 100%;
		height: 444rpx;
		background: linear-gradient(to bottom, #f64d71, #feecb3);
	}
	.edit-card {
		top: 20rpx;
		position: absolute;
		margin: 20rpx;
		border-radius: 10rpx;

		// border: 1px solid #A2A2A2;
		box-shadow: 0 0 20px rgba(134, 134, 134, 0.16);
		.card-content {
			// margin: 20rpx;
			/deep/ .u-cell-item-box {
				padding: 20rpx !important;
				border-radius: 10rpx;
			}
		}
	}
	.tips-top {
		color: #333;
		padding: 26rpx 34rpx;
	}
	.tips-content {
		color: #333;
		text-align: center;
		padding: 0 34rpx;
		.tips-grey {
			color: #999999;
		}
	}
	.home-tag {
		top: 80rpx;
		position: relative;
	}

	.slogan-form {
		color: #666;
		padding: 26rpx 34rpx;
		.form-items {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			.inp {
				width: 100rpx;
				height: 100rpx;
				border: 1px solid #ddd;
				margin: 20rpx;
			}
		}
	}
	.btn-group {
		text-align: center;
		.btn {
			margin-right: 50rpx;
			margin-left: 50rpx;
			display: inline-block;
			width: 200rpx;
			text-align: center;
			height: 74rpx;
			line-height: 74rpx;
			padding: 0 20rpx;
			border-radius: 37rpx;
			text-align: center;
			background: #e1e1e1;
			color: #fff;
		}
		.btn1 {
			background: #e34c4c;
		}
	}
}
</style>
