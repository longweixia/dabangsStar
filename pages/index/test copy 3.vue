<template>
  <view
    class="container"
    @touchmove="handletouchstart"
    @touchend="handletouchend"
  >
    <view v-for="(item, index) in namelist" :key="index"  >
      <!-- <view class="column popupfx" :class="specClass+index" @click="createHaibao" -->
      <!-- <view
        class="column popupfx"
        :style="getIndexClass(index)"
        @click="createHaibao"
        >{{ item.name }}</view
      > -->
      <view class="column popupfx"
        :class="specClass+index"
        @click="createHaibao"
        >{{ item.name }}</view
      >
    </view>
  </view>
</template>

<script>
export default {
  name: "ranking-tab-hasText",
  props: {},
  watch: {},
  data() {
    return {
      specClass: "hide",
      namelist: [
        {
          name: "龙伟",
        },
        {
          name: "夏彤",
        },
        {
          name: "美丽",
        },
        {
          name: "帅气",
        },
        {
          name: "帅气1",
        },
        // {
        //   name: "帅气2",
        // },
        // {
        //   name: "帅气3",
        // },
        // {
        //   name: "帅气4",
        // },
      ],
    };
  },
  methods: {
    handletouchstart() {
      this.specClass = "show";
    },
    handletouchend() {
      this.specClass = "hide0";
    },
    createHaibao() {},
    getIndexClass(index) {

      let t = `animation: ${"hideLayer" + index} ${index + 2}s linear both;`;
      return t;
	},
	 mounted() {
	  this.handletouchstart()
  },
  },
};
</script>

<style lang="scss" scoped>
.popupfx {
    // position: fixed;
//   top: 80%;
  right: 20upx;
  z-index: 10;
  //   padding-top:10px;

  //   &.show {
  //     animation: showLayer 2s linear both;
  //   }
  //     @keyframes showLayer {
  //     0% {
  //       transform: translateY(0%);
  //     }

  //     100% {
  //       transform: translateY(80px); //这里可以通过变大变小调整偏移量
  //     }
  //   }

  //   &.hide0 {
  //     animation: hideLayer0 3s linear both;
  //   }
  //     &.hide1 {
  //     animation: hideLayer1 6s linear both;
  //   }
  //   &.hide2 {
  //     animation: hideLayer2 9s linear both;
  //   }
  //   &.hide3 {
  //     animation: hideLayer2 6s linear both;
  //   }
  //   &.hide4 {
  //     animation: hideLayer2 7s linear both;
  //   }
  //   &.hide5 {
  //     animation: hideLayer2 8s linear both;
  //   }
  //   &.hide6 {
  //     animation: hideLayer2 9s linear both;
  //   }
  //   &.hide7 {
  //     animation: hideLayer2 10s linear both;
  //   }
  // @keyframes hideLayer0 {
  //   0% {
  //     transform: translateY(80px);
  //     opacity: 1;
  //   }

  //   100% {
  //     transform: translateY(0);
  //     opacity: 0;
	//   display: none;
  //   }
  // }

  // @keyframes hideLayer1 {
  //   0% {
  //     transform: translateY(80px);
  //     opacity: 1;
  //   }

  //   100% {
  //     transform: translateY(0);
  //     opacity: 0;
	//   display: none;
  //   }
  // }
  // @keyframes hideLayer2 {
  //   0% {
  //     transform: translateY(80px);
  //     opacity: 1;
  //   }

  //   100% {
  //     transform: translateY(0);
  //     opacity: 0;
	//   display: none;
  //   }
  // }
  // @keyframes hideLayer3 {
  //   0% {
  //     transform: translateY(80px);
  //     opacity: 1;
  //   }

  //   100% {
  //     transform: translateY(0);
  //     opacity: 0;
  //   }
  // }
  // @keyframes hideLayer4 {
  //   0% {
  //     transform: translateY(80px);
  //     opacity: 1;
  //   }

  //   100% {
  //     transform: translateY(0);
  //     opacity: 0;
  //   }
  // }
  // @keyframes hideLayer5 {
  //   0% {
  //     transform: translateY(80px);
  //     opacity: 1;
  //   }

  //   100% {
  //     transform: translateY(0);
  //     opacity: 0;
  //   }
  // }
  // @keyframes hideLayer6 {
  //   0% {
  //     transform: translateY(80px);
  //     opacity: 1;
  //   }

  //   100% {
  //     transform: translateY(0);
  //     opacity: 0;
  //   }
  // }
  // @keyframes hideLayer7 {
  //   0% {
  //     transform: translateY(80px);
  //     opacity: 1;
  //   }

  //   100% {
  //     transform: translateY(0);
  //     opacity: 0;
  //   }
  // }
  // @keyframes hideLayer8 {
  //   0% {
  //     transform: translateY(80px);
  //     opacity: 1;
  //   }

  //   100% {
  //     transform: translateY(0);
  //     opacity: 0;
  //   }
  // }
}
</style>
