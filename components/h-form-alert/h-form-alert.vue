<template>
	<view class="a_mask">
		<form class="a_box" @submit="formSubmit" @reset="formReset">
			<view class="a_head">
				{{title}}
			</view>
			<view class="a_input">
			 <view class="slot-content">
      <view class="title-modal">

        <view
          style="
            overflow: hidden;
            position: fixed;
            width: 100%;
            height: 100%;
            pointer-events: none;
            top: -400px;
            z-index: 100000;
          "
        >
          <view
            class="danmu-li"
            v-for="(item, index) in listData"
            :class="item.type"
            :style="[item.style]"
            :key="index"
          >
            <view class="danmu-inner">
              <view class="user-box">
                <view class="user-img">
                  <view class="img-box">
                    <image :src="item.item.avatarUrl"></image>
                  </view>
                </view>
                <view class="user-text cl1"> {{ item.item.nickName }} </view>
                <view class="user-status cl1">
                  打榜了<text style="color: #e34c4c; font-weight: bold">
                    {{ item.item.vigourVal }}</text
                  >热力值
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="detail-bg-img">
          <view
            class="bg-img"
            :style="{
              background:
                'url(' + detailImg + ') center center / cover no-repeat',
            }"
          ></view>
        </view>

        <view class="body-area">
          <u-row gutter="16" style="margin-top: 20rpx">
            <u-col span="4">
              <view class="title"> 为{{ starName }}打榜</view>
            </u-col>

            <u-col span="8" class="right-btn">
              <view class="col-top">
                <view class="slice" @click="add('jian')">-</view>
                <input v-model="inpValue" type="number" class="inp-num" />
                <view class="add" @click="add('jia')">+</view>

                <view class="btn" @click="add('btn')"
                  >打榜<text v-if="btnVal">{{ btnVal }}</text>
                  <Dianzan
                    ref="dianzan"
                    :dabangVal="inpValue"
                    style="position: relative; top: -80rpx"
                  ></Dianzan>
                </view>
              </view>
              <view class="col-top col-top2">
                <view class="hot">我的热力值：{{ myInfo.vigourVal }}</view>

                <view class="hot-text" @click="routerStarDetail()"
                  >获得热力值>></view
                >
              </view>
            </u-col>
          </u-row>
          <u-row gutter="16" class="row-bottom">
            <u-col span="3" v-for="(item, index) in dabangValList" :key="index">
              <view class="btn" @click="addBtn(item.value)"
                >+{{ item.value }}</view
              >
            </u-col>
          </u-row>
        </view>
      </view>
    </view>
			</view>
			<view class="a_btn">
				
				<button form-type="reset" :style="{color:cancelColor}">{{cancelText}}</button>
				<button form-type="submit" :style="{color:confirmColor}" @click="close">{{confirmText}}</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:'提示'
			},
			placeholder:{
				type:String,
				default:'请点击输入'
			},
			name:{
				type:String,
				default:'text'
			},
			type:{
				type:String,
				default:'text'
			},
			value:{
				type:String,
				default:''
			},
			cancelColor:{
				type:String,
				default:'#999999'
			},
			confirmColor:{
				type:String,
				default:'#333333'
			},
			cancelText:{
				type:String,
				default:'取消'
			},
			confirmText:{
				type:String,
				default:'确定'
			},
		},
		data() {
			return {

			};
		},
		methods: {
			formSubmit: function(e) {
				// console.log(e)
				let _formdata = e.detail.value
				this.$emit('confirm',_formdata)
			},
			formReset: function(e) {
				this.$emit('cancel')
			}
		}
	}
</script>

<style lang="scss">
	.a_mask{
		position: fixed;
		z-index: 99999;
		background-color: rgba(0,0,0,0.5);
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		.a_box{
			width: 500upx;
			overflow: hidden;
			
			background-color: #fff;
			border-radius: 10upx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			
			.a_head{
				text-align: center;
				font-size: 30upx;
				line-height: 88upx;
			}
			.a_input{
				padding: 30upx 20upx;
				font-size: 28upx;
				input{
					text-align: center;
				}
			}
			.a_btn{
				text-align: center;
				font-size: 30upx;
				line-height: 88upx;
				display: flex;
				justify-content: space-between;
				border-top: 1upx solid #f5f5f5;
				button{
					width: 50%;
					background-color: #fff;
					font-size: 30upx;
					border-radius: 0upx;
					padding: 0;
					&::after{
						border:none
					}
					&:first-child{
						border-right: 1upx solid #f5f5f5;
						color: #999999;
						box-sizing: border-box;
					}
					&:last-child{
						color: #333;
					}
				}
				
			}
		}
	}
</style>
