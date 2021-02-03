<template>
	<view class="my-edit">
		<u-navbar title="我"></u-navbar>
		<view class="cell-area">
			<u-cell-group :border-bottom="false" :border-top="false">
				<u-cell-item
					:border-bottom="false"
					:border-top="false"
					class="cell-center"
					title="头像"
					hover-class="cell-hover-class"
					@click="changeHeader"
				>
					<img :src="myData.avatarUrl" class="header-img" />
				</u-cell-item>
				<view class="line-center"></view>
				<u-line color="#CFCFCF" />
				<u-cell-item
					:border-bottom="false"
					:border-top="false"
					title="昵称"
					hover-class="cell-hover-class"
					:value="myData.nickName"
					@click="changeName"
				></u-cell-item>
				<u-line color="#CFCFCF" />
			</u-cell-group>
		</view>


		<!-- <u-action-sheet
			:list="listCamera"
			v-model="showCamera"
			:cancel-btn="true"
			@click="clickCamera"
			:mask-close-able="false"
		></u-action-sheet> -->
		<!-- 修改名字弹窗 -->
		<u-modal
			width="520"
			v-model="showNameModal"
			:show-confirm-button="false"
			:show-title="false"
			ref="uModal"
			:async-close="true"
			title="修改姓名"
		>
			<view class="slot-content">
				<view class="title-modal">
					<view class="title"> 修改姓名 </view>
					<view class="body-area">
						<u-input
							v-model="valueName"
							type="text"
							:border="true"
							clearable
							placeholder="请输入姓名"
						/>
						<view class="btn-group">
							<view
								class="btn"
								@click="changeNamevalue(valueName)"
							>
								确定
							</view>
							<view
								class="btn cancel-btn"
								@click="showNameModal = false"
							>
								取消
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-modal>
		<u-toast ref="uToast" />
		<view class="content">
			<!-- 上拉框 更换照片-->
			<u-action-sheet
				:list="listChangeImg"
				v-model="showChangeImg"
				:cancel-btn="true"
				@click="showMoreImgBtn"
				:mask-close-able="false"
			></u-action-sheet>
			<!-- <button @tap="chooseImage()">选择图片</button> -->
			<!-- <image class="image" :src="path"></image> -->
			<kps-image-cutter
				@ok="onok"
				@cancel="oncancle"
				:url="url"
				:fixed="true" 
				 :width="200" :height="200"
			></kps-image-cutter>
		</view>
	</view>
</template>

<script>
//   import Cropper from "./cropper.vue";
import kpsImageCutter from './ksp-image-cutter.vue'

export default {
	name: 'BtnNav',
	components: {
		kpsImageCutter,
	},
	props: ['btnList', 'rankType'],
	data() {
		return {
			url: '',
			path: '',

			valueName: '',
			showNameModal: false,
			myData: {}, //个人信息
			// 更换照片
			listChangeImg: [
				{
					text: '更换照片',
					color: 'black',
					fontSize: 28,
					fontWeight: 'bold',
				},
			],
			//   拍照-相册
			// listCamera: [
			// 	{
			// 		text: '拍照',
			// 		color: 'black',
			// 		fontSize: 28,
			// 		fontWeight: 'bold',
			// 	},
			// 	{
			// 		text: '从手机相册选择',
			// 		color: 'black',
			// 		fontSize: 28,
			// 		fontWeight: 'bold',
			// 	},
			// ],
			showChangeImg: false,
			showCamera: false
		}
	},
	mounted() {
		this.getMyInfo()
	},

	methods: {
       
		chooseImage() {
            this.url = ""
            this.path = ""
			uni.chooseImage({
				success: (res) => {
					// 设置url的值，显示控件
                    this.url = res.tempFilePaths[0]
                    //this.goUploadImg(res.tempFilePaths)
				},
			})
		},
		onok(ev) {
            this.path = ev.path
            console.log(ev,11111)
            // this.url = ''
            this.goUploadImg(this.path)
 
		},
		oncancle() {
			// url设置为空，隐藏控件
			this.url = ''
		},
		getMyInfo() {
			this.$u
				.get('/personalCenter/personalCenterInfo')
				.then((res) => {
                    this.myData = res
                   
				})
				.catch((res) => {})
		},
		changeHeader() {
			this.showChangeImg = true
        },
        	showMoreImgBtn(index) {
			//   this.showCamera = true;
			this.chooseImage()
		},
		
		// 调用上传接口上传图片
		goUploadImg(tempFilePaths) {
			uni.uploadFile({
				url: 'http://123.207.120.31:18001/common/upload', //服务器地址
				fileType: 'image', //ZFB必填,不然报错
				header: {
					Authorization: uni.getStorageSync('Authorization'),
				},
				filePath: tempFilePaths, //这个就是我们上面拍照返回或者先中照片返回的数组
				name: 'file',
				success: (uploadFileRes) => {
					let imgData = JSON.parse(uploadFileRes.data)
					//   this.myData.avatarUrl = imgData.data;
					this.changeAvatarUrlApi(imgData.data)
				},
			})
		},
		// 调用改变头像的接口
		changeAvatarUrlApi(data) {
			this.$u
				.post('/personalCenter/updatePersonalCenterInfo', {
					avatarUrl: data,
				})
				.then((res) => {
                    this.getMyInfo()
                   
                    this.showNameModal = false
                     this.url = "";
  
				})
				.catch((res) => {
					//   this.$toLogin(res)
				})
		},
		// 改变姓名
		changeNamevalue(data) {
			this.$u
				.post('/personalCenter/updatePersonalCenterInfo', {
					nickName: data,
				})
				.then((res) => {
					this.showNameModal = false
					this.getMyInfo()
				})
				.catch((res) => {
					//   this.$toLogin(res)
				})
		},
		confirm() {
			setTimeout(() => {
				// 3秒后自动关闭
				this.showNameModal = false
				// 如果不想关闭，而单是清除loading状态，需要通过ref手动调用方法
				// this.$refs.uModal.clearLoading();
			}, 3000)
		},
		// 更该用户名弹窗
		changeName() {
			this.showNameModal = true
        },
        // changeHeader() {
		//   this.showCamera = true;
		// },
		// uploadCamera() {
		// 	uni.chooseImage({
		// 		count: 1,
		// 		sizeType: ['original', 'compressed'],
		// 		sourceType: ['camera'], //这要注意，camera掉拍照，album是打开手机相册
		// 		success: (res) => {
		// 			const tempFilePaths = res.tempFilePaths
		// 		},
		// 	})
		// },
		// uploadAlbum() {
		// 	uni.chooseImage({
		// 		count: 1,
		// 		sizeType: ['original', 'compressed'],
		// 		sourceType: ['album'], //这要注意，camera掉拍照，album是打开手机相册
		// 		success: (res) => {
		// 			const tempFilePaths = res.tempFilePaths

		// 			this.goUploadImg(tempFilePaths)
		// 		},
		// 	})
		// },
		// 弹出拍照-相册选项
	
		// 拍照-相册选择
		// clickCamera(index) {
		// 	if (index === 0) {
			
		// 		this.uploadCamera()
		// 	} else if (index === 1) {
		// 		this.uploadAlbum()
		// 	}
		// },
	},
}
</script>

<style lang="scss">
.image {
	width: 200px;
	height: 200px;
}
.my-edit {
	/deep/ .u-border-bottom:after {
		border-bottom-width: 0;
	}
	.cell-area {
		border-top: 0.5px solid #cfcfcf;
		// margin: 0 auto;
		padding-left: 100rpx;
		padding-right: 100rpx;
	}
	// 头像
	.header-img {
		width: 64rpx;
		height: 64rpx;
		border-radius: 32rpx;
		border: 1px solid #ddd;
	}
	.u-cell {
		color: #c9c9c9;
		padding-left: 0;
		padding-right: 0;
		// border-bottom: 1px solid #c9c9c9;
	}

	/deep/ .u-cell_title {
		color: #c9c9c9 !important;
	}
	/deep/ .u-icon--right,
	/deep/ .u-cell__value {
		color: #000;
	}
	.cell-hover-class {
		background-color: rgb(235, 237, 238);
	}
	//   裁剪
	.wrap {
		padding: 40rpx;
	}

	.u-avatar-wrap {
		margin-top: 80rpx;
		overflow: hidden;
		margin-bottom: 80rpx;
		text-align: center;
	}

	.u-avatar-demo {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100rpx;
	}
	//   修改文字弹窗、
	.slot-content {
		.title-modal {
			.title {
				color: red;
				background: linear-gradient(to right, #f83a3a, #f7c18b);
				height: 80rpx;
				line-height: 80rpx;
				position: relative;
				color: #fff;
				text-align: center;
			}
			.body-area {
				margin: 20rpx 80rpx;
				.btn-group {
					margin-top: 40rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.btn {
						//   position: relative;
						//   top: -10rpx;
						//    position: absolute;

						right: 20rpx;
						height: 46rpx;
						line-height: 46rpx;
						width: 110rpx;
						padding: 0 10rpx;
						border-radius: 23rpx;
						text-align: center;
						background: #e34c4c;
						color: #fff;
					}
					.cancel-btn {
						background: #8b8b8b;
					}
				}
			}
		}
	}
}
</style>
