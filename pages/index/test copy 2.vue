<template>
  <view
    class="container"
    @touchmove="handletouchstart"
    @touchend="handletouchend"
  >
    <!-- <view class="column popupfx" :class="specClass" @click="createHaibao"
      >我是要发生变化的元素</view
    > -->
    <view
      ref="ani"
     
      class="message popupfx "
      :class="'message' + index"
      
      v-for="(item, index) in infoText"
      :key="index" 
    >
      <view
        class="round bg-gradual-orange flex justify-start shadow"
        style="padding: 3px" :class="specClass" v-if="specClass=='show'"
      >
        <view
          class="cu-avatar cu-a-sm round"
          :style="{ backgroundImage: `url(${item.avatarUrl})` }"
        >
          <!-- <image :src="item.img" class="avatarimg"></image> -->
        </view>
        <view class="padding-lr-sm flex align-center">
          <text class="text-sm"
            >{{ item.nickName }}：打榜了{{ item.vigourVal }}</text
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "ranking-tab-hasText",
  props: {
    //数据
    info: {
      type: [Array, Object],
      default: () => {
        return;
        {
        }
      },
    },
  },
  watch: {},
  data() {
    return {
      infoText: [
        {
          fensId: "385747665628753920",
          nickName: "六月清晨1",
          vigourVal: 1,
          avatarUrl:
            "https://thirdwx.qlogo.cn/mmopen/vi_32/KCwvjicqndD3ddKicsl7HpHVKWPWnTBaLVD17qyCRIrO6DpgiaHLSZzmqAJP8HGR3Ptly31XyvUbl9eUHpODZYqVw/132",
        },
        // {
        //   fensId: "1",
        //   nickName: "粉丝1号",
        //   vigourVal: 1,
        //   avatarUrl:
        //     "http://star-1254802359.cos.ap-guangzhou.myqcloud.com/385519996395909120.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDsdFgvSs8B2xmPqA5tysDONDrJbhaotHV%26q-sign-time%3D1609329529%3B1610423534%26q-key-time%3D1609329529%3B1610423534%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D763f31ecc8c67dbb3d9a62b791c10425c09b3185",
        // },
        // {
        //   fensId: "1",
        //   nickName: "粉丝2号",
        //   vigourVal: 10,
        //   avatarUrl:
        //     "http://star-1254802359.cos.ap-guangzhou.myqcloud.com/385519996395909120.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDsdFgvSs8B2xmPqA5tysDONDrJbhaotHV%26q-sign-time%3D1609329529%3B1610423534%26q-key-time%3D1609329529%3B1610423534%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D763f31ecc8c67dbb3d9a62b791c10425c09b3185",
        // },
      ],
      specClass: "hide",
    };
  },
  mounted() {
	  this.handletouchstart()
  },
  methods: {
    handletouchstart() {
      this.specClass = "show";
    },
    handletouchend() {
      this.specClass = "hide";
    },
    createHaibao() {},
  },
};
</script>

<style lang="scss" scoped>
.popupfx {
  position: fixed;
  top: 80%;
  right: 20upx;
  z-index: 10;

  &.show {
    animation: showLayer 2s linear both;
  }

  &.hide {
    animation: hideLayer 2s linear both;
  }

  @keyframes showLayer {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(80px); //这里可以通过变大变小调整偏移量
    }
  }

  @keyframes hideLayer {
    0% {
      transform: translateY(80px);
      opacity: 1;
    }

    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
}
</style>
