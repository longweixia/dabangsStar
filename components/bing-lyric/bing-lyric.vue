<template>
  <view>
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
// #ifdef APP-NVUE
const animation = uni.requireNativePlugin("animation");
// #endif
export default {
  name: "Pengpai-FadeInOut",
  props: {
    //持续时间
    duration: {
      type: Number,
      default: 2000,
    },
    //停留时间
    wait: {
      type: Number,
      default: 2000,
    },
    //顶部距离px
    top: {
      type: Number,
      default: 200,
    },
    //左边距离px
    left: {
      type: Number,
      default: 10,
    },
    //动画半径
    radius: {
      type: Number,
      default: 30,
    },
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
  data() {
    return {
      animationData: {},
      animationNumber: {},
      show: true,
    };
  },
  mounted() {
    this.donghua();
  },
  watch: {
    info: {
      handler(newVal, oldVal) {
      this.info = newVal
        //  this.donghua();
      },
      immediate: true,
      deep: true
    },
  },
  methods: {
    donghua() {
   
      //进入
      // #ifndef APP-NVUE
      this.animationData = uni
        .createAnimation({
          duration: this.duration / 2,
          timingFunction: "linear",
        })
        .top(this.top - this.radius)
        .opacity(0.9)
        .step()
        .export();
      // #endif

      // #ifdef APP-NVUE
      if (!this.$refs["ani"]) return;
      animation.transition(this.$refs["ani"].ref, {
        styles: {
          transform: `translateY(-${this.radius / 2}px)`,
          opacity: 1,
        },
        duration: this.duration / 2,
        timingFunction: "linear",
        needLayout: false,
        delay: 0,
      });


      // #endif

      //停留
      setTimeout(() => {
        //消失
        // #ifndef APP-NVUE
        this.animationData = uni
          .createAnimation({
            duration: this.duration / 2,
            timingFunction: "ease",
          })
          .top(this.top - this.radius * 2)
          .opacity(0)
          .step()
          .export();
        // #endif
     this.$emit("loopDanmu")
        // this.donghua()
        // #ifdef APP-NVUE
        if (!this.$refs["ani"]) return;
        animation.transition(this.$refs["ani"].ref, {
          styles: {
            transform: `translateY(-${this.radius}px)`,
            opacity: 0,
          },
          duration: this.duration / 2,
          timingFunction: "linear",
          needLayout: false,
          delay: 0,
        });
           
        // #endif
      }, this.wait);
    },
  },
};
</script>

<style scoped>
.message {
  position: fixed;
  z-index: 99999;
  opacity: 0;
   
}
.round {
  border-radius: 5000px;

}
.bg-gradual-orange {
  /* #ifndef APP-NVUE */
  background-image: linear-gradient(45deg, #ff9700, #ed1c24);
  /* #endif */
  /* #ifdef APP-NVUE */
  background-image: linear-gradient(to bottom right, #ff9700, #ed1c24);
  /* #endif */
  color: #ffffff;
}
.shadow {
  box-shadow: 4px 4px 5px rgba(217, 109, 26, 0.2);
}
.flex {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
}
.justify-start {
  justify-content: flex-start;
}
.cu-avatar {
  /* #ifndef APP-NVUE */
  font-variant: small-caps;
  display: inline-flex;
  white-space: nowrap;
  background-size: cover;
  background-position: center;
  vertical-align: middle;
  /* #endif */
  margin: 0;
  padding: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  color: #ffffff;
  position: relative;
  width: 30rpx;
  height: 30rpx;
  font-size: 1.5em;
}

/* #ifdef APP-NVUE */
.avatarimg {
  width: 30rpx;
  height: 30rpx;
  border-radius: 50rpx;
}
/* #endif */

.cu-a-sm {
  width: 30rpx;
  height: 30rpx;
  font-size: 1em;
}
.padding-lr-sm {
  padding-left: 20rpx;
  padding-right: 20rpx;
  bottom: 250rpx;
}
.align-center {
  align-items: center;
}
.margin-left-xs {
  margin-left: 10rpx;
}
.text-bold {
  font-weight: bold;
}
.margin-lr-sm {
  margin-left: 20rpx;
  margin-right: 20rpx;
}
.text-sm {
  font-size: 15rpx;
  color: #ffffff;
}
</style>
