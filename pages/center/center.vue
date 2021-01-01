<template>
  <view>
    <view>
      <view>
        <view class="header">
          <!-- <image src='../../static/wx_login.png'></image> -->
        </view>
        <view class="content">
          <view>申请获取以下权限</view>
          <text>获得你的公开信息(昵称，头像、地区等)</text>
        </view>
        <!-- withCredentials=true  获取到除用户基本信息之外的encryptedData以及iv等数据 -->
        <button
          class="bottom"
          type="primary"
          open-type="getUserInfo"
          withCredentials="true"
          lang="zh_CN"
          @getuserinfo="wxGetUserInfo"
        >
          （微信）授权登录
        </button>
        <!-- <button
					class="bottom"
					type="primary"
					open-type="getPhoneNumber"
					withCredentials="true"
					lang="zh_CN"
					@getuserinfo="wxGetUserInfo"
				>
					授权登录
				</button> -->
        <!-- <button class="bottom" type="primary" @click="getUserinfo">
          获取个人中心数据
        </button> -->
        <button class="bottom" type="primary" @click="getToken">
          （浏览器）登录
        </button>

        <!-- <button class='bottom' type='primary' open-type="getPhoneNumber"  @getphonenumber="getPhoneNumber">
			  授权登录
			</button> -->
      </view>
    </view>
  </view>
</template>

<script>
// import { htxcx } from "@/store/api.js"
// import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      code: "",
      SessionKey: "",
      encryptedData: "",
      iv: "",
      OpenId: "",
      nickName: null,
      avatarUrl: null,
      isCanUse: true,
      rawData: "",
      signature: "",
    };
  },

  onLoad() {
    this.login();
  },
  methods: {
    // ...mapMutations(["setName"]),
    // wxGetUserInfo(){

    // },
    getUserinfo() {
      this.$u.get(`/personalCenter/personalCenterInfo`).then((res) => {
        console.log(res, "个人");

        // this.swiperList = res;
      });
    },
    getToken() {
      this.$u.post(`/common/testLogin?id=1`).then((res) => {
        console.log(res, "拿到token");
		uni.setStorageSync("Authorization", res.token);
		 uni.navigateTo({
        url: "/pages/index/index",
      });
        // this.swiperList = res;
      });
    },
    wxGetUserInfo() {
      //第一授权获取用户信息===》按钮触发
      let _this = this;
      // 获取用户信息
      uni.getUserInfo({
        provider: "weixin",
        success: function (infoRes) {
          console.log(infoRes, "用户信息");
          _this.encryptedData = infoRes.encryptedData;
          _this.iv = infoRes.iv;
          _this.rawData = infoRes.rawData;
          _this.signature = infoRes.signature;
          _this.nickName = infoRes.userInfo.nickName; //昵称
          _this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
          uni.setStorageSync("isCanUse", false); //记录是否第一次授权 false:表示不是第一次授权
          _this.updateUserInfo();
        },
        fail: function (fail) {
          console.log("fail:", fail);
        },
      });
    },
    login() {
      let _this = this;
      // uni.showLoading({
      // 	title: '登录中...',
      // })

      // 1.wx获取登录用户code
      uni.login({
        provider: "weixin",
        success: function (loginRes) {
          _this.code = loginRes.code;
          if (!_this.isCanUse) {
            //非第一次授权获取用户信息
            uni.getUserInfo({
              provider: "weixin",
              success: function (infoRes) {
                console.log("login用户信息：", infoRes); //获取用户信息后向调用信息更新方法
                _this.nickName = infoRes.userInfo.nickName; //昵称
                _this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
                _this.updateUserInfo(); //调用更新信息方法
              },
            });
          }
          // 将用户登录code传递到后台置换用户SessionKey、OpenId等信息

          uni.hideLoading();
        },
      });
    },
    updateUserInfo() {
      //向后台更新信息
      // this.setName(this.nickName,this.avatarUrl)
      let _this = this;
      var obj = {
        appid: "wxcf8c06040676fecd",
        secret: "bfa8089fdfbb2addeb5de83af974561f",
        code: this.code,
      };
      // 这个接口要在后端调用(https://api.weixin.qq.com无法加入白名单)
      // https://api.weixin.qq.com/sns/jscode2session?appid="+appid+"&secret="+secret+"&js_code="+code+"&grant_type=authorization_code
      // 请求微信端地址获取用户唯一标识的

      // htxcx(obj.appid,obj.secret,obj.code).then(res=>{
      // 	console.log("res:",res)
      // 	res.data.openid // 唯一
      // 	res.data.session_key
      // 	this.encryptedData
      // 	this.iv
      // 	uni.reLaunch({//信息更新成功后跳转到小程序首页
      // 		url: '/pages/index/index'
      // 	});
      // },err=>{
      // 	console.log("err:",err)
      // })
      let encryptedData = JSON.stringify(_this.encryptedData);
      this.$u
        .post(`/common/weiXinLong`, {
          code: _this.code,
          encrypteData: this.encryptedData,
          iv: this.iv,
          rawData: this.rawData,
          signature: this.signature,
        })
        .then((res) => {
          uni.setStorageSync("Authorization", res.token);
          // this.swiperList = res;
        });
    },
  },
};
</script>

<style scoped>
.header {
  margin: 90rpx 0 90rpx 50rpx;
  border-bottom: 1px solid #ccc;
  text-align: center;
  width: 650rpx;
  height: 300rpx;
  line-height: 450rpx;
}

.header image {
  width: 200rpx;
  height: 200rpx;
}

.content {
  margin-left: 50rpx;
  margin-bottom: 90rpx;
}

.content text {
  display: block;
  color: #9d9d9d;
  margin-top: 40rpx;
}

.bottom {
  border-radius: 80rpx;
  margin: 70rpx 50rpx;
  font-size: 35rpx;
}
</style>
