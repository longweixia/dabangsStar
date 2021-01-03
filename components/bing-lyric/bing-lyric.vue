<template>
  <div class="demo-comment-container">
    <div class="scroll-container" :style="{ height: `${height / 100}rem` }">
      <ul
        class="scroll-ul"
        :style="{
          transform: `translate3d(0, ${y / 100}rem, 0)`,
          transition: `${transition}`,
        }"
      >
        <div
          v-for="(item, index) in list"
          :key="index"
         
          :bgColor="baseStyle.style.bgColor__bg"
          :style="[{ color: rgba(baseStyle.color__nf) },baseStyle.style]"
          :class="['c-item-bg', 'c-item', !item.content && 'empty']"
        >
          <li class="c-item">
            <div class="avatar">
              <img v-if="item.content" class="avatar-item" :src="item.photo" />
            </div>
            <div v-if="item.content" class="c-content" v-html="item.content" />
          </li>
        </div>
      </ul>
    </div>
    <div class="comment-entry">
      <div class="f">
        <div class="text-c">
          <span v-if="entry.type === 1" class="text" v-text="entry.text" />
          <div v-else class="img-container">
            <img :src="entry.image" />
          </div>
          <i v-if="count" class="c-c">{{ count }}</i>
        </div>
        <div>
          <span class="fake-input">来发表你的看法吧~</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  inject: ["rgba"],
  props: {
    urlConfig: {
      type: Object,
      default: function () {
        return {};
      },
    },
    type: {
      type: String,
      default: "hot",
    },
    pageSize: {
      type: Number,
      default: 50,
    },
    open: {
      type: Boolean,
      default: true,
    },
    entry: {
      type: Object,
      default: function () {
        return {
          type: 1, // 1 文字 2 自定义
          text: "",
          image: "",
        };
      },
    },
    number: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      count: 2334,
      dom: null,
      height: 0, // 单项高度
      y: 0, // 每次移动距离
      list: [], // 接口列表
      originLength: 0, // 原始数组长度
      transition: "ease all .4s",
      round: 0, // 需要滚动多少轮
    };
  },
  created() {
    this.getCommentList();
  },
  mounted() {
    this.dom = document.querySelector(".c-item");
    // 计算可视区域高度
    this.height = 64 * this.number + 12 * (this.number - 1);
  },
  methods: {
    getCommentList() {
      // 接口数据
      const _list = [];
      this.originLength = _list.length;
      const mod = this.originLength % this.number;
      let need =
        this.originLength < this.number
          ? this.number - this.originLength
          : mod > 0
          ? this.number - mod
          : 0; // 计算出要添加的空白元素个数
      this.list = _list;

      // set empty item
      const empty = JSON.parse(JSON.stringify(_list[0]));
      empty.content = "";

      // 补齐空白元素
      while (need) {
        this.list.push(empty);
        need--;
      }

      // 填充重复元素
      let repeat = this.number;
      let index = 0;
      while (repeat) {
        this.list.push(_list[index]);
        index++;
        repeat--;
      }

      this.round = this.list.length / this.number;

      this.scroll();
    },
    scroll() {
      let count = 1;
      setInterval(() => {
        count++;
        this.y -= this.height + 12; // 移动可视区域高度 + 最后一个 item 的 margin-bottom
        this.transition = ".4s ease all";
        setTimeout(() => {
          if (count === this.round) {
            count = 1;
            this.transition = "";
            this.y = 0;
          }
        }, 800);
      }, 2000);
    },
  },
};
</script>