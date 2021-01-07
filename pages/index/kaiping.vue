<template>
  <view class="fan-ranking">
    <img src="./kaiping.jpg" style="width:100%;height:100%"/>
  </view>
</template>

<script>

export default {

  data() {
    return {
     
    };
  },
  onLoad(option) {
  let timer = setTimeout(() => {
      clearTimeout(timer)
      this.direct()
    }, 2000)
  },
  mounted() {
   
  },
  methods: {
direct() { 
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
    changebtn(index) {
      console.log(index);
      this.rankType = index

       this.$u.post('/home/weekRank/list',{
         "pageNum": 1,
         "pageSize": 20,
          "rankType": index
       }).then(res => {
              this.rankingList = res.list;  //　少了头像
              if(res.list&&res.list.length>0){
                this.hasData = true
              }else{
                this.hasData = false
              }
        }).catch((res) => {
          this.$toLogin(res)
  
        });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
