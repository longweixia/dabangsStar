<template name="zy-search">
	<view>
		<view class="search">
			<template v-if="isFocus">
				<input
					maxlength="20"
					focus
					type="text"
					@input="searchStart('input')"
					confirm-type="search"
					@confirm="searchStart('input')"
					placeholder="搜索"
					v-model.trim="searchText"
					clearabled
				/>
				<u-icon
					color="#b1b1b1"
					name="close-circle"
					v-if="searchText"
					class="cancle close-btn"
					@click="clearDate"
				></u-icon>
				<view class="cancle" @click="cancle">取消</view>
			</template>
			<!-- #ifdef APP-PLUS -->
			<!-- <image src="../../static/zy-search/voice.svg" mode="aspectFit" @click="startRecognize()" class="voice-icon"></image> -->
			<!-- #endif -->
			<!-- <template v-else>
				<input maxlength="20" type="text" value="" confirm-type="search" @confirm="searchStart()" placeholder="请输入关键词搜索" v-model.trim="searchText"/>
			</template> -->
			<image
				src="../../static/zy-search/search.svg"
				mode="aspectFit"
				class="search-icon"
			></image>
		</view>
		<!-- <view :class="'s-' + theme" v-if="hList.length > 0　&&　hasData"> -->
		<view class="wanted-block" v-if="!searchInput">
			<view class="header">
				历史记录
				<image
					src="../../static/zy-search/delete.svg"
					mode="aspectFit"
					@click="delhistory"
				></image>
			</view>
			<!-- <view class="list">
				<view
					v-for="(item, index) in hList"
					:key="index"
					@click="keywordsClick(item)"
					>{{ item }}</view
				>
			</view> -->
			<view class="list listRecond">
				<view
					v-for="(item, index) in hList"
					:key="index"
					 @click="seeSaterLocal(item)"
					class="views"
				>
					{{ item.name }}
				</view>
			</view>
		</view>
		<view :class="'wanted-' + theme" v-if="hasData && !searchInput">
			<view class="header">热门搜索</view>
			<view class="list">
				<view
					class="views"
					v-for="(item, index) in hotList"
					:key="index"
					@click="keywordsClick(item.name)"
					>{{ item.name }}</view
				>
			</view>
		</view>
		<!-- 搜索结果 -->
		<view class="data-list" v-if="dataList.length > 0">
			<view
				v-for="(item, index) in dataList"
				:key="index"
				class="data-row"
			>
				<u-image
					class="guard-img"
					width="80rpx"
					height="80rpx"
					:src="item.avatar"
					shape="circle"
				></u-image>
				<!-- <img :src="item.avatar == 'string' ? imgtext : item.avatar" /> -->
				<view class="name">{{ item.name }}</view>
				<view class="btn" @click="seeSater(item)">查看</view>
			</view>
		</view>

		<view class="data-no" v-if="dataList.length == 0 && searchText">
			没有找到你搜的明星哦，是不是名字错了？
		</view>
	</view>
</template>

<script>
export default {
	name: 'zy-search',
	props: {
		isFocus: {
			//是否自动获取焦点
			type: Boolean,
			default: true,
		},
		theme: {
			//选择块级显示还是圆形显示
			type: String,
			default: 'block',
		},
		showWant: {
			//是否展示推荐菜单
			type: Boolean,
			default: false,
		},

		hotList: {
			//推荐列表数据
			type: Array,
			default() {
				return []
			},
		},
		speechEngine: {
			//语音引擎=>讯飞:iFly,百度:'baidu'
			type: String,
			default: 'baidu',
		},
		dataList: {
			//语音引擎=>讯飞:iFly,百度:'baidu'
			type: Array,
			default: [],
		},
	},
	watch: {
		dataList: {
			handler(newVal, oldVal) {
				console.log(newVal, 'dataList')
				if (!newVal.length) {
					this.hasData = false
				} else {
					this.hasData = true
				}
			},
			immediate: true,
		},
		searchText: {
			handler(newVal, oldVal) {
				console.log(newVal, 'searchText')
				if (!newVal) {
					this.hasData = true
				}
			},
			immediate: true,
		},
	},
    
	data() {
		return {
			searchInput: false, //是否是输入字符来搜索关键词的，如果是就隐藏热门搜索和历史记录
			imgtext: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
			searchText: '', //搜索关键词
			hList: uni.getStorageSync('search_cache'), //历史记录
			hasData: true, //默认有数据
		}
	},
	methods: {
		clearDate() {
            let _this = this
			this.searchText = ''
			this.searchInput = false
            this.hasData = true
            uni.getStorage({
				key: 'search_cache',
				success(res) {
				
				 _this.hList = res.data
                 
				},
				fail() {},
            })
           
		},
		// 明星详情
		seeSater(item1) {
			// uni.getStorage({
			// 	key: 'search_cache',
			// 	success(res) {
            //         console.log(res,"空")
            //     },
			// 	fail() {
			// 		uni.setStorage({
			// 			key: 'search_cache',
			// 			data: []
			// 		})
			// 	},
			// })

			uni.getStorage({
				key: 'search_cache',
				success(res) {
				
					let list = res.data.concat({
						name: item1.name,
						id: item1.id,
					})
				
					uni.setStorage({
						key: 'search_cache',
						data: list,
                    })
                 
				},
				fail() {},
            })
          

			uni.navigateTo({
				url: `/pages/starDetail/starDetail?id=${item1.id}`,
			})
		},
		// 点点击本地记录-明星详情
		seeSaterLocal(item1) {
			uni.navigateTo({
				url: `/pages/starDetail/starDetail?id=${item1.id}`,
			})
		},
		// 取消
		cancle() {
			uni.navigateTo({
				url: `/pages/index/index`,
			})
		},
		searchStart: function (name) {
			if (name == 'input') {
				this.searchInput = true
			}

			//触发搜索
			let _this = this
			if (_this.searchText == '') {
				this.searchInput = false
				_this.$emit('clear')
				uni.showToast({
					title: '请输入关键字',
					icon: 'none',
					duration: 1000,
				})
			} else {
				_this.$emit('getSearchText', _this.searchText)

				// uni.getStorage({
				// 	key: 'search_cache',
				// 	success(res) {
				// 		let list = res.data
				// 		if (list.length > 9) {
				// 			for (let item of list) {
				// 				if (item == _this.searchText) {
				// 					return
				// 				}
				// 			}
				// 			list.pop()
				// 			list.unshift(_this.searchText)
				// 		} else {
				// 			for (let item of list) {
				// 				if (item == _this.searchText) {
				// 					return
				// 				}
				// 			}
				// 			list.unshift(_this.searchText)
				// 		}
				// 		// _this.hList = list
				// 		// uni.setStorage({
				// 		// 	key: 'search_cache',
				// 		// 	data: _this.hList,
				// 		// })
				// 	},
				// 	fail() {
				// 		_this.hList = []
				// 		_this.hList.push(_this.searchText)
				// 		// uni.setStorage({
				// 		// 	key: 'search_cache',
				// 		// 	data: _this.hList,
				// 		// })
				// 		_this.$emit('getSearchText', _this.searchText)
				// 	},
				// })
			}
		},
		keywordsClick(item) {
			//关键词搜索与历史搜索
			this.searchText = item
			this.searchStart()
		},
		delhistory() {
			//清空历史记录
			this.hList = []
			uni.setStorage({
				key: 'search_cache',
				data: [],
			})
		},
		startRecognize: function () {
			//语音输入
			let _this = this
			let options = {}
			options.engine = _this.speechEngine
			options.punctuation = false // 是否需要标点符号
			options.timeout = 10 * 1000
			plus.speech.startRecognize(options, function (s) {
				_this.searchText = _this.searchText + s
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.search {
	margin: 30rpx;
	padding-right: 120rpx;
	position: relative;
	input {
		background-color: #f3f4f8;
		padding: 10rpx 74rpx;
		font-size: 28rpx;
		border-radius: 50rpx;
	}
	.voice-icon {
		width: 36rpx;
		height: 36rpx;
		line-height: 36rpx;
		padding: 16rpx 20rpx 16rpx 0;
		position: absolute;
		right: 100rpx;
		top: 104rpx;
		z-index: 10;
	}
	.search-icon {
		width: 30rpx;
		height: 30rpx;
		padding: 16rpx 20rpx 16rpx 0;
		position: absolute;
		left: 30rpx;
		top: -2rpx;
		z-index: 10;
	}
	.cancle {
		z-index: 10000;
		height: 32rpx;
		line-height: 32rpx;
		position: absolute;
		right: 28rpx;
		top: 16rpx;
		z-index: 10;
		font-size: 17px;
		font-weight: bold;
		color: #000;
	}
}
.s-block {
	margin-top: 30rpx;
	.header {
		font-size: 32rpx;
		padding: 30rpx;
		position: relative;
		image {
			width: 36rpx;
			height: 36rpx;
			padding: 10rpx;
			position: absolute;
			right: 40rpx;
			top: 24rpx;
		}
	}
	.list {
		display: flex;
		flex-wrap: wrap;
		view {
			width: 50%;
			color: #8a8a8a;
			font-size: 28rpx;
			box-sizing: border-box;
			text-align: center;
			padding: 20rpx 0;
			border-top: 2rpx solid #fff;
			border-left: 2rpx solid #fff;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			background-color: #f7f7f7;
		}
	}
}
.header {
	font-family: PingFang SC;
	font-size: 32rpx;
	padding: 30rpx;
	border-bottom: 2rpx solid #f9f9f9;
	position: relative;
	font-weight: bold;
	color: #333;
	image {
		width: 36rpx;
		height: 36rpx;
		padding: 10rpx;
		position: absolute;
		right: 40rpx;
		top: 24rpx;
	}
}
.s-circle {
	// margin-top: 30rpx;

	.list {
		display: flex;
		flex-wrap: wrap;
		padding: 0 30rpx 20rpx;
		view {
			padding: 8rpx 30rpx;
			margin: 20rpx 30rpx 0 0;
			font-size: 28rpx;
			color: #8a8a8a;
			background-color: #f7f7f7;
			box-sizing: border-box;
			text-align: center;
			border-radius: 20rpx;
		}
	}
}
.wanted-block {
	margin-top: 40rpx;
	margin-bottom: 30rpx;
	.header {
		font-size: 32rpx;
		padding: 0 30rpx 14rpx 30rpx;
		margin-bottom: 10rpx;
	}
	.list {
		// display: flex;
		// flex-wrap: wrap;
		// justify-content: center;
		// align-items: center;

		// margin-left: 30rpx;

		.views {
			display: inline-block;
			margin-top: 20rpx;
			width: calc(20% - 10px);
			margin: 10px;
			// width:100%;
			height: 58rpx;
			line-height: 58rpx;
			border-radius: 10rpx;
			color: #333333;
			font-size: 12px;
			box-sizing: border-box;
			text-align: center;
			background-color: #ffefef;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			padding-left: 5rpx;
			padding-right: 5rpx;
		}
	}
}
.wanted-circle {
	margin-top: 30rpx;
	.header {
		font-size: 32rpx;
		padding: 30rpx;
	}
	.list {
		display: flex;
		flex-wrap: wrap;
		padding: 0 30rpx 20rpx;
		view {
			padding: 8rpx 30rpx;
			margin: 20rpx 30rpx 0 0;
			font-size: 28rpx;
			color: #8a8a8a;
			background-color: #f7f7f7;
			box-sizing: border-box;
			text-align: center;
			border-radius: 20rpx;
		}
	}
}
// 搜索结果列表
.data-list {
	// border: 1px solid #ddd;
	margin: 20rpx;
	border-radius: 10rpx;
	.data-row {
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 124rpx;
		line-height: 124rpx;
		border: 2rpx solid #ddd;
		border-radius: 10rpx;
		// margin-bottom: 20rpx;
		img {
			width: 80rpx;
			height: 80rpx;
			border-radius: 40rpx;
		}
		.name {
			position: absolute;
			left: 150rpx;
			font-size: 14px;
			font-weight: bold;
			color: #333333;
		}
		.btn {
			font-size: 14px;
			color: #e34c4c;
		}
	}
}
// 搜索无结果
.data-no {
	font-size: 14px;
	font-weight: bold;
	color: #333333;
	margin-left: 28rpx;
	margin-top: 28rpx;
}
.close-btn {
	position: relative;
	margin-right: 100rpx;
}
.listRecond {
	margin: 10rpx;
	.views {
	}
}
</style>
