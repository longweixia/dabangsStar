<template>
<!-- 首页-粉丝-资源 用到的排名榜单 -->
    <view>
      <!-- <view class="wrap">
		<view class="item u-border-bottom" v-for="(item, index) in list" :key="index">
			{{'第' + item + '条数据'}}
		</view>
		<u-loadmore :status="status" />
	</view> -->
      <!-- 1.首页周日月排行榜 -->
      <view class="list-th" v-if="listPage == 'home'">
        <view class="list-row" v-for="(item, index) in rankingList" :key="index">
          <view class="num-body">
            <view class="num" :class="'num' + index">{{item.rank}}</view>
          </view>
          <view class="img-body">
            <u-image
              class="img"
              width="80rpx"
              height="80rpx"
              :src="item.starAvatar"
              shape="circle"
            ></u-image>
          </view>
          <view class="name">
            {{ item.starName }}
          </view>
          <view class="val val1">
                <!-- <img
              src="../../static/home/hotVal.png"
              style="width:66rpx;height:66rpx;"
            /> -->
            {{ item.totalVigourVal }}
          </view>
        </view>
    </view>
      <!-- 2.粉丝排行榜 -->
      <view class="list-th" v-if="listPage == 'starDetail'">
        <view class="list-row" v-for="(item, index) in rankingList" :key="index">
          <view class="num-body">
            <view class="num" :class="'num' + index">{{index+1}}</view>
          </view>
          <view class="img-body">
            <u-image
              class="img"
              width="80rpx"
              height="80rpx"
              :src="item.avatarUrl"
              shape="circle"
            ></u-image>
          </view>
          <view class="name">
            {{ item.nickName }}
          </view>
           
          <view class="val">
            <!-- <img
              src="../../static/home/hotVal.png"
              style="width:66rpx;height:66rpx;"
            /> -->
            +{{ item.vigourVal }}热力值
          </view>
        </view>
    </view>
      <!-- 3.资源排行榜 -->
      <view class="list-th" v-if="listPage == 'resourcesRanking'">
        <view class="list-row" v-for="(item, index) in rankingList" :key="index">
          <view class="num-body">
            <view class="num" :class="'num' + index">{{index+1}}</view>
          </view>
          <view class="img-body">
            <u-image
              class="img"
              width="80rpx"
              height="80rpx"
              :src="item.avatarUrl"
              shape="circle"
            ></u-image>
          </view>
          <view class="name">
            {{ item.nickName }}
          </view>
          <view class="val">
            已完成{{ item.completeNum }}次
          </view>
        </view>
    </view>
  </view>
</template>

<script>
export default {
  props:["rankingList","listPage"], //榜单数据，页面来源
  data() {
    return {
       status: 'loadmore',
				list: 15,
				page: 0
    };
  },

  onReachBottom() {
			// if(this.page >= 3) return ;
			// this.status = 'loading';
			// this.page = ++ this.page;
			// setTimeout(() => {
			// 	this.list += 10;
			// 	if(this.page >= 3) this.status = 'nomore';
			// 	else this.status = 'loading';
			// }, 2000)
		}

};
</script>

<style lang="scss" scoped>

// 榜单
.list-th{
    margin: 0 20rpx;
}
.list-row {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20rpx;
  //   justify-content: space-around;
}
.num-body {
  margin-right:24rpx;
  .num {
    width: 50rpx;
    height: 50rpx;
    line-height: 50rpx;
    border-radius: 25rpx;
    color: #e34c4c;
    text-align: center;
    border: 1px solid #e34c4c;
  }

  .num0 {
    background: linear-gradient(#fe6925, #df372c);
    color: #fff;
    border: none;
  }
  .num1 {
    background: linear-gradient(#e8d81c, #e1792a);
    color: #fff;
    border: none;
  }
  .num2 {
    background: linear-gradient(#3bf2c9, #4ce8f3);
    color: #fff;
    border: none;
  }
}
.img-body{
    margin-right: 22rpx;
}
.name {
  width: 200rpx;
  text-align: left;
  color: #333333;
  font-weight: bold;
  font-size: 28rpx;
}
.val {
  // display: flex;
  // align-items: center;
  text-align: right;
  position: absolute;
  right:40rpx;
  width: 200rpx;
  font-size: 24rpx;
  color: #b5b5b5;
}
.val1{
  // width: 180rpx;
}
</style>
