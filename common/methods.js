
exports.toLogin =  (data) =>{  
    // console.log(data.data.code)
    let datas = data.data
    // 如果401，登录失效，报错，跳转到登陆页
    if(datas&&datas.code ==401){
         uni.showModal({
            title: '请登录',
            content: '登录后可以获取更多功能',
            success: (res)=> {
                if (res.confirm) {
                    uni.navigateTo({
                        url: "/pages/center/center"
                      });
                } else if (res.cancel) {
                 
                }
            }
        });
    }else{
        uni.showToast({
            title: data.message,
            icon:'none',
            duration: 1000,
      
        });
    }
   


  }