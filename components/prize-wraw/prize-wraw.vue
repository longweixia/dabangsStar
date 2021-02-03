<template>
  <!-- 抽奖互动 -->
  <view class="star-card">
    <view class="list-top" v-for="(item, index) in prizeWrawList" :key="index">
      <img class="img" :src="item.image" />
      <view class="row-text">
        <view class="name"> {{ item.name }}</view>
        <view class="tip">{{ item.tips }} </view>
      </view>
      <!-- <view
        v-if="index !== 3"
        class="btn"
        style="z-index: 100"
        @click="clickBtn(index)"
        >{{ item.name }}</view
      > -->
            <button v-if="index !== 3" style="z-index: 100"
							@getuserinfo="wxGetUserInfo(index)"
							class="btn"
							open-type="getUserInfo"
							withCredentials="true"
							lang="zh_CN"
						>
							{{ item.name }}
						</button>
      <button v-if="index == 3" class="btn-share btn" open-type="share">
        立即分享
      </button>
    </view>
  </view>
</template>

<script>
export default {
  name: "prize-wraw",
  props: ["starId"],

  onLoad() {},
  components: {},
  data() {
    return {
        code: '',
			SessionKey: '',
			encryptedData: '',
			iv: '',
			OpenId: '',
			nickName: null,
			avatarUrl: null,
			isCanUse: true,
			rawData: '',
            signature: '',
            // 用户信息
      //抽奖互动
      prizeWrawList: [
        {
          tips: "100%中热力值",
          image: "../../static/home/choujiang.png",

          name: "抽奖",
          val: 500,
        },
        {
          tips: "签到获得20热力值",
          image: "../../static/home/sigin.png",

          name: "签到",
          val: 500,
        },
        {
          tips: "观看视频获得30热力值",
          image: "../../static/home/bofang.png",

          name: "看视频",
          val: 500,
        },
        {
          tips: "分享获得30热力值",
          image: "../../static/home/share.png",

          name: "分享",
          val: 500,
        },
      ],
      //设置默认的分享参数
      share: {
        title: "ALAPI",
        path: "/pages/index/index",
        imageUrl: "",
        desc: "",
        content: "",
      },
    };
  },
  mounted() {
		this.login()
	},
  methods: {
       login() {
			let _this = this
			// 1.wx获取登录用户code
			uni.login({
				provider: 'weixin',
				success: function (loginRes) {
					_this.code = loginRes.code
					if (!_this.isCanUse) {
						//非第一次授权获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function (infoRes) {
								// console.log('login用户信息：', infoRes) //获取用户信息后向调用信息更新方法
								_this.nickName = infoRes.userInfo.nickName //昵称
								_this.avatarUrl = infoRes.userInfo.avatarUrl //头像
								_this.updateUserInfo() //调用更新信息方法
							},
						})
					}
					// 将用户登录code传递到后台置换用户SessionKey、OpenId等信息
				},
			})
		},
		//向后台更新信息
		updateUserInfo(item) {
			let _this = this
			this.$u
				.post(`/common/weiXinLong`, {
					code: _this.code,
					encrypteData: this.encryptedData,
					iv: this.iv,
					rawData: this.rawData,
					signature: this.signature,
				})
				.then((res) => {
                    uni.setStorageSync('Authorization', res.token)
                    this.clickBtn(item)
				
				})
				.catch((res) => {
				this.clickBtn(item)
				})
		},
		wxGetUserInfo(item) {
			this.$u
				.get('/personalCenter/personalCenterInfo')
				.then((res) => {
					this.clickBtn(item)
				})
				.catch((res) => {
					let _this = this
					uni.getUserInfo({
						provider: 'weixin',
						success: function (infoRes) {
							console.log(infoRes, '用户信息')
							_this.encryptedData = infoRes.encryptedData
							_this.iv = infoRes.iv
							_this.rawData = infoRes.rawData
							_this.signature = infoRes.signature
							_this.nickName = infoRes.userInfo.nickName //昵称
							_this.avatarUrl = infoRes.userInfo.avatarUrl //头像
							uni.setStorageSync('isCanUse', false) //记录是否第一次授权 false:表示不是第一次授权
							_this.updateUserInfo(item)
						},
						fail: function (fail) {
							console.log(fail, 'fail用户信息')
						},
					})
				})
		},
    clickBtn(i) {
    //   if (!uni.getStorageSync("Authorization")) {
    //     uni.showModal({
    //       title: "请登录",
    //       content: "登录后可以获取更多功能",
    //       success: (res) => {
    //         if (res.confirm) {
    //           uni.navigateTo({
    //             url: "/pages/center/center",
    //           });
    //         } else if (res.cancel) {
    //         }
    //       },
    //     });
    //   } else {
        if (i === 0) {
          //抽奖
          uni.navigateTo({
            url: "/pages/starDetail/choujiang",
          });
        } else if (i === 1) {
          // 签到
          this.signiIn();
        }
    //   }
    },
    // 签到
    signiIn() {
      let params = {
        starId: this.starId,
        type: 1, //任务类型 1-签到 2-抽奖 3-看视频 4-分享
      };
      this.$u
        .post("/starDetail/getVigourVal", params)
        .then((res) => {
          uni.showToast({
            title: "签到成功，获得20热力值",
            icon: "none",
            duration: 1000,
          });
          this.$emit("getmyInfo");
        })
        .catch((res) => {
          uni.showToast({
            title: res.message,
            icon: "none",
            duration: 1000,
          });
        });
    },
    // 获取热力值设置
    getHitSettings() {
      let params = {
        starId: this.starId,
      };
      this.$u
        .get("/starDetail/selectHitSettings", params)
        .then((res) => {
          // 抽奖
          this.prizeWrawList[0].tips = "100%中热力值";
          // 签到
          this.prizeWrawList[1].tips = `签到获得${res.data.vigourSignNum}热力值`;
        })
        .catch((res) => {
          uni.showToast({
            title: res.message,
            icon: "none",
            duration: 1000,
          });
        });
    },
    // 签到
    signiIn() {
      let params = {
        starId: this.starId,
        type: 1, //任务类型 1-签到 2-抽奖 3-看视频 4-分享
      };
      this.$u
        .post("/starDetail/getVigourVal", params)
        .then((res) => {
          uni.showToast({
            title: "签到成功，获得20热力值",
            icon: "none",
            duration: 1000,
          });
          this.$emit("getmyInfo");
        })
        .catch((res) => {
          uni.showToast({
            title: res.message,
            icon: "none",
            duration: 1000,
          });
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-share {
  margin-right: 0 !important;
  right: 0 !important;
  height: 60rpx;
  line-height: 50rpx;

  font-size: 30rpx !important;
}
// 当前明星卡片
.star-card {
    z-index: 10000;
  margin: 20rpx;
  margin-top:-80rpx;
  // 明星上方数据
  .list-top {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20rpx;
    padding-top: 20rpx;
    border-bottom: 1px solid #e6e6e6;
    .img {
      position: relative;
      display: inline-block;
      left: 10rpx;
      width: 46rpx;
      height: 46rpx;
    }
    .btn {
               margin: 0;
					padding: 0;
					border-radius: 0;
					border: none;
					font-size: 1em;
					background-color: transparent;
            // 重置按钮完成  
      right: 0;
      width: 200rpx;
      height: 60rpx;
      display: flex;
    align-items: center;
    justify-content: center;
 
      padding: 10rpx;
      margin-left: 10rpx;
    //   display: inline-block;
      border-radius: 30rpx;
      background: #e34c4c;
      color: #fff;
    }
    .row-text {
      min-width: 220rpx;
      text-align: left;
      font-size: 10px;
      font-family: Arial;
      position: relative;
      left: -100rpx;
      .name {
        font-size: 12px;
        color: #000;
        font-weight: bold;
      }
      .tip {
        font-size: 10px;
        color: #b8b8b8;
      }
    }
  }
  .list-top:nth-child(4) {
    border: none;
  }
}
</style>

