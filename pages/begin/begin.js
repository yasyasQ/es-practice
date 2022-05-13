// pages/begin/begin.js
let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图配置 
    // lunboData:[],
    // autoplay:true,
    // interval:3000,
    // duration:1200, 

    // 日期选择器
    date:'',
    datenow:'',
    usergoal:0,
    usernow:0,
    usertoday:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 轮播图
  onLoad: function () {
    // var DATE = that.formDate(new Date());
    // this.setData({
    // date: DATE,
  // });
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datenow: e.detail.value
    })
  },
  // 时间选择器
  // changeDate(e){
  //   this.setData({
  //     date: e.detail.value
  //   })
  // },


  //记录输入的数据
  getUsergoal:function(usergoal){ 
   console.log(usergoal.detail.value)
    this.setData({ 
      usergoal:usergoal.detail.value
    })
  },

  getUsernow:function(usernow){ 
    console.log(usernow.detail.value)
    this.setData({ 
      usernow: usernow.detail.value
    })
  },

  getUsertoday:function(usertoday){ 
      console.log(usertoday.detail.value)
    this.setData({ 
      usertoday: usertoday.detail.value
    })
  },

  submitBtnClick:function() {
    console.log("目标：" +this.data.usergoal+"目前钻石数：" +this.data.usernow+ "日期:" +this.data.datenow+"本日挖砖:" +this.data.usertoday);
  },

  buttonListener:function(){
    var that = this
    wx.navigateTo({
      url: 'pages/record/record?usergoalData=' + that.data.usergoal + '&usernowData=' + that.data.usernow + '&datenowData=' + that.data.datenow + '&usertodayData=' + that.data.usertoday
    })

  }


})
