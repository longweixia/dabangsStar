<template>
  <view
    class="container"
    @touchmove="handletouchstart"
    @touchend="handletouchend"
  >
    <view class="column popupfx" :class="specClass" @click="createHaibao"
      >我是要发生变化的元素</view
    >
	 <view
      ref="ani"
      :animation="animationData"
      class="message" :class="'message'+index"
      :style="{ top: top + 'px', left: left + 'px' }"
      v-for="(item,index) in info" :key="index"
    >
      <view
        class="round bg-gradual-orange flex justify-start shadow"
        style="padding: 3px"
      >
        <view
          class="cu-avatar cu-a-sm round"
          :style="{ backgroundImage: `url(${item.avatarUrl})` }"
        >
          <!-- <image :src="item.img" class="avatarimg"></image> -->
        </view>
        <view class="padding-lr-sm flex align-center">
          <text class="text-sm">{{item.nickName}}：打榜了{{ item.vigourVal }}</text>
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
        return
        {
          
        }
      },
    },
  },
  watch: {},
  data() {
    return {
      specClass: "hide",
    };
  },
  methods: {
    handletouchstart() {
      this.specClass = "show";
    },
    handletouchend() {
      this.specClass = "hide";
	},
	createHaibao(){},
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
