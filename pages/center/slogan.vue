<template>
  <view class="my-edit-slogan">
    <u-cell-group>
      <u-cell-item
        title="头像"
        hover-class="cell-hover-class"
        @click="changeHeader"
      >
        <img :src="myData.avatarUrl" class="header-img" />
      </u-cell-item>
      <u-cell-item
        title="昵称"
        hover-class="cell-hover-class"
        :value="myData.nickName"
        @click="changeName"
      ></u-cell-item>
    </u-cell-group>
    <u-cell-group>
      <u-cell-item title="个人标语" :arrow="false">
        <u-switch slot="right-icon" v-model="checked"></u-switch>
      </u-cell-item>
      <!-- 标语内容 -->
      <div class="tips">
        恭喜你解锁了我们的小秘密，你可以设置个人标语支持爱
        豆哦！标语在首页显示，只有你能看到
      </div>
      <div class="tips">发挥你的想象，试试看吧！比如：我爱XX、♥XXX</div>
      <!-- 输入表单 -->
      <view class="">
        <u-form :model="form" ref="uForm" class="slogan-form">
          <u-form-item prop="name">
            <view class="form-items" style="margin: 0 auto">
              <input
                v-model="item.value"
                class="inp"
                v-for="(item, i) in formArry"
                :key="i"
              />
            </view>
          </u-form-item>
        </u-form>
        <u-button @click="submit">清除</u-button>
        <u-button @click="submit">保存</u-button>
      </view>
    </u-cell-group>
  </view>
</template>

<script>
// import List from "../../components/center/list.vue";

export default {
  name: "BtnNav",
  components: {
    // List,
  },
  props: ["btnList", "rankType"],
  data() {
    return {
      form: {
        name: "",
        intro: "",
      },
      formArry: [
        {
          name: "inp1",
          value: "",
        },
        {
          name: "inp1",
          value: "",
        },
        {
          name: "inp1",
          value: "",
        },
        {
          name: "inp1",
          value: "",
        },
      ],
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
            // 可以单个或者同时写两个触发验证方式
            trigger: ["change", "blur"],
          },
        ],
        intro: [
          {
            min: 5,
            message: "简介不能少于5个字",
            trigger: "change",
          },
        ],
      },
      checked: false,
      valueName: "",
      showNameModal: false,
      myData: {}, //个人信息
      // 更换照片
      listChangeImg: [
        {
          text: "更换照片",
          color: "black",
          fontSize: 28,
          fontWeight: "bold",
        },
      ],
      //   拍照-相册
      listCamera: [
        {
          text: "拍照",
          color: "black",
          fontSize: 28,
          fontWeight: "bold",
        },
        {
          text: "从手机相册选择",
          color: "black",
          fontSize: 28,
          fontWeight: "bold",
        },
      ],

      showChangeImg: false,
      showCamera: false,
      avatar: "https://cdn.uviewui.com/uview/common/logo.png",
    };
  },
  mounted() {
    this.getMyInfo();
  },
  // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
  methods: {
    submit() {
      this.$refs.uForm.validate((valid) => {
        if (valid) {
          console.log("验证通过");
        } else {
          console.log("验证失败");
        }
      });
    },
    getMyInfo() {
      this.$u
        .get("/personalCenter/personalCenterInfo")
        .then((res) => {
          this.myData = res;
        })
        .catch((res) => {});
    },
    changeHeader() {
      this.showChangeImg = true;
    },
    // changeHeader() {
    //   this.showCamera = true;
    // },
    uploadCamera() {
      uni.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["camera"], //这要注意，camera掉拍照，album是打开手机相册
        success: (res) => {
          const tempFilePaths = res.tempFilePaths;
          console.log(tempFilePaths, "拍照");
        },
      });
    },
    uploadAlbum() {
      uni.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album"], //这要注意，camera掉拍照，album是打开手机相册
        success: (res) => {
          const tempFilePaths = res.tempFilePaths;
          console.log(tempFilePaths, "相册");
          this.goUploadImg(tempFilePaths);
        },
      });
    },
    // 弹出拍照-相册选项
    showMoreImgBtn(index) {
      this.showCamera = true;
    },
    // 拍照-相册选择
    clickCamera(index) {
      console.log(`点击了第${index + 1}项`);
      if (index === 0) {
        //   拍照
        this.uploadCamera();
      } else if (index === 1) {
        this.uploadAlbum();
      }
    },
    // 调用上传接口上传图片
    goUploadImg(tempFilePaths) {
      uni.uploadFile({
        url: "https://123.207.120.31:18001/common/upload", //服务器地址
        fileType: "image", //ZFB必填,不然报错
        header: {
          Authorization: localStorage.getItem("Authorization"),
        },
        filePath: tempFilePaths[0], //这个就是我们上面拍照返回或者先中照片返回的数组
        name: "file",
        success: (uploadFileRes) => {
          let imgData = JSON.parse(uploadFileRes.data);
          console.log(imgData.data);
          //   this.myData.avatarUrl = imgData.data;
          this.changeAvatarUrlApi("avatarUrl", imgData.data);
        },
      });
    },
    // 调用改变头像的接口
    changeAvatarUrlApi(name, data) {
      this.$u
        .get("/personalCenter/updatePersonalCenterInfo", {
          avatarUrl: name == "avatarUrl" ? data : "",
          nickName: name == "nickName" ? data : "",
          slogan: "",
        })
        .then((res) => {
          this.myData = res;
          this.showNameModal = false;
        })
        .catch((res) => {});
    },
    confirm() {
      setTimeout(() => {
        // 3秒后自动关闭
        this.showNameModal = false;
        // 如果不想关闭，而单是清除loading状态，需要通过ref手动调用方法
        // this.$refs.uModal.clearLoading();
      }, 3000);
    },
    // 更该用户名弹窗
    changeName() {
      this.showNameModal = true;
    },
  },
};
</script>

<style lang="scss">
.my-edit-slogan {
  .tips {
    color: #666;
    padding: 26rpx 34rpx;
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
        width: 80rpx;
        height: 80rpx;
        border: 1px solid #ddd;
        margin: 20rpx;
      }
    }
  }
  // 头像
  .header-img {
    width: 64rpx;
    height: 64rpx;
    border-radius: 32rpx;
    border: 1px solid #ddd;
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
