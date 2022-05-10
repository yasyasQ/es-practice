// pages/user/user.js

Page({
  data: {
    username:'',
    password:'',
    success:false,
    test:''
  },
// 获取输入用户名
usernameInput:function(e){
    this.setData({
      username: e.detail.value
    })
  },
// 获取输入密码
passwordInput:function(e){
  this.setData({
    password: e.detail.value
  })
},

// 登录
login: function(){
  var that = this;
  var warn= null;
  // warn表示当用户名为空或格式不正确时给出提示
  if(that.data.username.length === 0 ){
    wx.showToast({
      title: '请输入用户名',
      icon:'loading',
      duration:1000
    })
  }else if (that.data.password.length === 0 ){
    wx.showToast({
      title: '请输入密码',
      icon:'loading',
      duration:1000
    })
  } else {
    wx.request({
      url: 'http://域名ID/login',
      method:"POST",
      data:{
        user:that.data.username,
        password:that.data.password
      },
      header:{
        'content-type':'application/es-form-urlencode'
      },
      success:function(res){
        if(res.data.state === 1 ){
          // 判断能否登录
          warn = "用户名或密码错误";
          wx.showModal({
            title: '提示',
            content:warn
          })
          return;
        }
        that.setData({
          success:true,
          text:res.data.url
        })
      }
    })
  }

},
// 注册（未完成）
register: function() {
  wx.navigateTo({
    url: '/pages/begin/begin.js',
  })
}

})