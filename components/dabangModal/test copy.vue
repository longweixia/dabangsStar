<template>
  <view>
    <!-- <view v-for="(item, index) in namelist" :key="index" class="animation">
   
      <view
        class="column popupfx"
        :class="specClass + index"
        :animation="animationData"
        >{{ item.name }}</view
      >
    </view> -->

    <!-- <button @click="colrdo">别跑</button> -->
    <Danmu ref="lffBarrage" class="dan-mu"></Danmu>
  </view>
</template>

<script>
import Danmu from "../lff-barrage/lff-barrage.vue";

export default {
  name: "text",
  components: {
  Danmu
  },
 props: {
			//rightToLeft leftToRight leftBottom
			// info: {
			// 	type: Array,
			// 	default: []
			// },
			starId: {
				type: String,
				default: ""
			},
  },
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
        {
          name: "帅气2",
        },
        {
          name: "帅气3",
        },
        {
          name: "帅气4",
        },
      ],
      animationData: {},

      // 在data中初始化animationData
    };
  },
  onUnload() {
    // this.animationData = {};
    // 页面关闭后清空数据
  },

  mounted() {
 
    this.getData()
  },

  created() {
    // 创建动画实例
  },
  methods: {
    getData(){
       this.$u
        .get("/starDetail/selectStarGuardList", {
          starId: this.starId,
        })
        .then((res) => {
    
          this.StarGuardList = res;
          this.colrdo();
        })
        .catch((res) => {});
    },
    colrdo() {

    //插入一条弹幕
    let that = this
	  this.StarGuardList.forEach((e,index) => {
		  setTimeout(() => {
			   that.$refs.lffBarrage.add({ item: e});
		  }, 1000*(index+2));
	  });
     
    },
    // running() {
    // //   this.animation = uni.createAnimation();
    //   this.animation = uni.createAnimation();
    //   this.animation.translateY(-100).opacity(0).step({ duration: 2000 });
    //   this.animationData = this.animation.export();

    // //   setTimeout(() => {
    // //     this.animation.translateX(0).opacity(0).step({ duration: 0 });
    // //     this.animationData = this.animation.export();
    // //   }, 800);
    // },
  },
};
</script>

<style lang="scss" scoped>
.dan-mu{
  position: relative;
}
.animation {
  // position: absolute;
  // top: 200px;
}
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
  //   &.hide1 {
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
  //   @keyframes hideLayer0 {
  //     0% {
  //       transform: translateY(80px);
  //       opacity: 1;
  //     }

  //     100% {
  //       transform: translateY(0);
  //       opacity: 0;
  //       display: none;
  //     }
  //   }

  //   @keyframes hideLayer1 {
  //     0% {
  //       transform: translateY(80px);
  //       opacity: 1;
  //     }

  //     100% {
  //       transform: translateY(0);
  //       opacity: 0;
  //       display: none;
  //     }
  //   }
  //   @keyframes hideLayer2 {
  //     0% {
  //       transform: translateY(80px);
  //       opacity: 1;
  //     }

  //     100% {
  //       transform: translateY(0);
  //       opacity: 0;
  //       display: none;
  //     }
  //   }
  //   @keyframes hideLayer3 {
  //     0% {
  //       transform: translateY(80px);
  //       opacity: 1;
  //     }

  //     100% {
  //       transform: translateY(0);
  //       opacity: 0;
  //     }
  //   }
  //   @keyframes hideLayer4 {
  //     0% {
  //       transform: translateY(80px);
  //       opacity: 1;
  //     }

  //     100% {
  //       transform: translateY(0);
  //       opacity: 0;
  //     }
  //   }
  //   @keyframes hideLayer5 {
  //     0% {
  //       transform: translateY(80px);
  //       opacity: 1;
  //     }

  //     100% {
  //       transform: translateY(0);
  //       opacity: 0;
  //     }
  //   }
  //   @keyframes hideLayer6 {
  //     0% {
  //       transform: translateY(80px);
  //       opacity: 1;
  //     }

  //     100% {
  //       transform: translateY(0);
  //       opacity: 0;
  //     }
  //   }
  //   @keyframes hideLayer7 {
  //     0% {
  //       transform: translateY(80px);
  //       opacity: 1;
  //     }

  //     100% {
  //       transform: translateY(0);
  //       opacity: 0;
  //     }
  //   }
  //   @keyframes hideLayer8 {
  //     0% {
  //       transform: translateY(80px);
  //       opacity: 1;
  //     }

  //     100% {
  //       transform: translateY(0);
  //       opacity: 0;
  //     }
  //   }
}
</style>
