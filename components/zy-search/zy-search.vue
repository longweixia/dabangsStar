<template name="zy-search">
	<view>
		<view class="search">
			
			<template v-if="isFocus">
				<input maxlength="20" focus type="text" value="" confirm-type="search" @confirm="searchStart()" placeholder="请输入关键词搜索" v-model.trim="searchText"/>
				<view class="cancle">取消</view>
			</template>
			<!-- #ifdef APP-PLUS -->
			<!-- <image src="../../static/zy-search/voice.svg" mode="aspectFit" @click="startRecognize()" class="voice-icon"></image> -->
			<!-- #endif -->
			<!-- <template v-else>
				<input maxlength="20" type="text" value="" confirm-type="search" @confirm="searchStart()" placeholder="请输入关键词搜索" v-model.trim="searchText"/>
			</template> -->
			<image src="../../static/zy-search/search.svg" mode="aspectFit" @click="searchStart()" class="search-icon"></image>
			
		</view>
		<!-- <view :class="'s-' + theme" v-if="hList.length > 0　&&　hasData"> -->
		<view :class="'s-' + theme" v-if="false">
			<view class="header">
				历史记录
				<image src="../../static/zy-search/delete.svg" mode="aspectFit" @click="delhistory"></image>
			</view>
			<view class="list">
				<view v-for="(item,index) in hList" :key="index" @click="keywordsClick(item)">{{item}}</view>
			</view>
		</view>
		<view :class="'wanted-' + theme" v-if="hasData">
			<view class="header">热门搜索</view>
			<view class="list">
				<view v-for="(item,index) in hotList" :key="index" @click="keywordsClick(item)">{{item}}</view>
			</view>
		</view>
		<view class="data-list" v-if="hasData">
				<view v-for="(item,index) in dataList" :key="index" @click="keywordsClick(item)" class="data-row">
					<view>{{item.name}}</view>
					<view>查看</view>
				</view>
		</view>
		<view class="data-no" v-if="!hasData">
				没有找到你搜的明星哦，是不是名字错了？
		</view>
	</view>
</template>

<script>
	export default{
		name:"zy-search",
		props:{
			isFocus:{	//是否自动获取焦点
				type: Boolean,
				default: false
			},
			theme:{	//选择块级显示还是圆形显示
				type: String,
				default: 'block'
			},
			showWant:{	//是否展示推荐菜单
				type: Boolean,
				default: false
			},
			hotList: { //推荐列表数据
				type: Array,
				default () {
					return []
				}
			},
			speechEngine: { //语音引擎=>讯飞:iFly,百度:'baidu'
				type: String,
				default: 'baidu'
			},
			dataList:{ //语音引擎=>讯飞:iFly,百度:'baidu'
				type: Array,
				default: [
					
				]
			}
		},
		watch:{
			dataList: {
		　　	handler(newVal,oldVal) {
			　　if(!newVal.length){
						this.hasData = false
					}else{
						this.hasData = true
					}
			　　},
			　　immediate: true
			},
			searchText: {
		　　	handler(newVal,oldVal) {
			　　if(!newVal){
						this.hasData = true
					}
			　　},
			　　immediate: true
			}
		},
	
		data() {
			return {
				searchText:'',								//搜索关键词
				hList:uni.getStorageSync('search_cache'),		//历史记录
				hasData: true, //默认有数据
			};
		},
		methods: {
			searchStart: function() {	//触发搜索
				let _this = this;
				if (_this.searchText == '') {
					uni.showToast({
						title: '请输入关键字',
						icon: 'none',
						duration: 1000
					});
				}else{
					_this.$emit('getSearchText', _this.searchText);
					uni.getStorage({
						key:'search_cache',
						success(res){
							let list = res.data;
							if(list.length > 5){
								for(let item of list){
									if(item == _this.searchText){
										return;
									}
								}
								list.pop();
								list.unshift(_this.searchText);
							}else{
								for(let item of list){
									if(item == _this.searchText){
										return;
									}
								}
								list.unshift(_this.searchText);
							}
							_this.hList = list;
							uni.setStorage({
								key: 'search_cache',
								data: _this.hList
							});
						},
						fail() {
							_this.hList = [];
							_this.hList.push(_this.searchText);
							uni.setStorage({
								key: 'search_cache',
								data: _this.hList
							});
							_this.$emit('getSearchText', _this.searchText);
						}
					})
				}
			},
			keywordsClick (item) {	//关键词搜索与历史搜索
				this.searchText = item;
				this.searchStart();
			},
			delhistory () {		//清空历史记录
				this.hList = [];
				uni.setStorage({
					key: 'search_cache',
					data: []
				});
			},
			startRecognize: function() {	//语音输入
				let _this = this;
				let options = {};
				options.engine = _this.speechEngine;
				options.punctuation = false; // 是否需要标点符号 
				options.timeout = 10 * 1000;
				plus.speech.startRecognize(options, function(s) {
					_this.searchText = _this.searchText + s;
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search{
		margin: 30rpx;
		padding-right: 120rpx;
		position: relative;
		input{
			background-color: #F3F4F8;
			padding: 10rpx 74rpx;
			font-size: 28rpx;
			border-radius: 50rpx;
		}
		.voice-icon{
			width: 36rpx;
			height: 36rpx;
			line-height: 36rpx;
			padding: 16rpx 20rpx 16rpx 0;
			position: absolute;
			right: 100rpx;
			top: 104rpx;
			z-index: 10;
		}
		.search-icon{
			width: 30rpx;
			height: 30rpx;
			padding: 16rpx 20rpx 16rpx 0;
			position: absolute;
			left: 30rpx;
			top: -2rpx;
			z-index: 10;
		}
		.cancle{
			height:32rpx;
			line-height:32rpx;
			position: absolute;
			right: 28rpx;
			top: 16rpx;
			z-index: 10;
			font-size: 17px;
			// font-weight: bold;
			// color: #000000;
		}
	}
	.s-block{
		margin-top: 30rpx;
		.header{
			font-size: 32rpx;
			padding: 30rpx;
			position: relative;
			image{
				width: 36rpx;
				height: 36rpx;
				padding: 10rpx;
				position: absolute;
				right: 40rpx;
				top: 24rpx;
			}
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			view{
				width: 50%;
				color: #8A8A8A;
				font-size: 28rpx;
				box-sizing: border-box;
				text-align: center;
				padding: 20rpx 0;
				border-top: 2rpx solid #FFF;
    			border-left: 2rpx solid #FFF;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				background-color: #F7F7F7;
			}
		}
	}
	.s-circle{
		// margin-top: 30rpx;
		.header{
			font-size: 32rpx;
			padding: 30rpx;
			border-bottom: 2rpx solid #F9F9F9;
			position: relative;
			font-weight: bold;
			color: #333333;
			image{
				width: 36rpx;
				height: 36rpx;
				padding: 10rpx;
				position: absolute;
				right: 40rpx;
				top: 24rpx;
			}
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			padding: 0 30rpx 20rpx;
			view{
				padding: 8rpx 30rpx;
				margin: 20rpx 30rpx 0 0;
				font-size: 28rpx;
				color: #8A8A8A;
				background-color: #F7F7F7;
				box-sizing: border-box;
				text-align: center;
				border-radius: 20rpx;
			}
		}
	}
	.wanted-block{
		margin-top: 30rpx;
		.header{
			font-size: 32rpx;
			padding: 0 30rpx 14rpx 30rpx;
		}
		.list{
			display: flex;
			flex-wrap: wrap;


			margin-left:30rpx;
			view{
				width: 106rpx;
				height:58rpx;
				line-height:58rpx;
				border-radius:10rpx;
				color: #333333;
				font-size: 12px;
				box-sizing: border-box;
				text-align: center;
				background-color: #FFEFEF;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin-right:20rpx;
			}
		}
	}
	.wanted-circle{
		margin-top: 30rpx;
		.header{
			font-size: 32rpx;
			padding: 30rpx;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			padding: 0 30rpx 20rpx;
			view{
				padding: 8rpx 30rpx;
				margin: 20rpx 30rpx 0 0;
				font-size: 28rpx;
				color: #8A8A8A;
				background-color: #F7F7F7;
				box-sizing: border-box;
				text-align: center;
				border-radius: 20rpx;
			}
		}
	}
	// 搜索结果列表
	.data-list{
		border: 1px solid #ddd;
		margin: 20rpx;
		border-radius: 10rpx;
		.data-row{
			margin: 20rpx;
			display:flex;
			justify-content: space-between;
			align-content: center;
		}
	}
	// 搜索无结果
	.data-no{
		font-size: 10px;
		font-weight: bold;
		color: #333333;
		margin-left: 28rpx;
		margin-top: 28rpx;
	}
</style>
