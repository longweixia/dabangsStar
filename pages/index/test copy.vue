<template>
  <!-- 榜单tag -->
  <view class="list-ranking-type">
<view id="app">
    <!-- <transition>
        <h1 v-show="flag1">使用过渡类名实现动画效果</h1>
    </transition> -->

    <transition name="private">
        <view v-show="flag2">demo</view>
    </transition>
    <!-- <input type="button" value="按钮1" @click="flag1 = !flag1"> -->
    <input type="button" value="按钮2" @click="flag2 = true">
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
       flag1: true,
        flag2: true
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
// 榜单tag
.list-ranking-type {
.v-enter, /* 时间点,开始动画之前元素的起始状态 */
.v-leave-to{ /* 时间点,元素完成动画离开的终止状态 */
    opacity: 0;
    transform: translateX(70px)
}
.v-enter-active, /* 入场动画时间段 */
.v-leave-active{ /* 离场动画时间段 */
    transition: all 0.8s ease;
}

.private-enter{
    opacity: 1;
    // transform:  translateY(0);
}
.private-leave-to{
    opacity: 0;
    transform: translateY(70px)
}
.private-enter-active,
.private-leave-active{
    transition: all 0.9s ease;
}

}
</style>
