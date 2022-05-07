// pages/begin/begin.js
// let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图配置 
    // paymentIndex:0,
    // index:0,
    // date:"",
    // goal_info:""    
    lunboData:[],

    // 日期选择器
    date:'',

    usergoal:"",
    usernow:"",
    usertoday:"",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 轮播图
  onLoad: function () {
    var that = this;
    var data = {
      "datas":[
        {
          "id" : 1,
          "imgurl":"../icon/one.jpg"
        },
        {
          "id" : 2 ,
          "imgurl":"../icon/two.jpg"
        },
        {
        "id" : 3,
        "imgurl":"../icon/three.jpg"          
        }
      ]
    };
  that.setData({
    lunboData: data.datas
  })
  },
  // 时间选择器
  changeDate(e){
    this.setData({
      date: e.detail.value
    })
  },
  //记录输入的数据
  getUsergoal:function(usergoal){ 
    console.log(usergoal.detail.value)
    this.setData({ 
      usergoal: usergoal.detail.value
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
  }

})