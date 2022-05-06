// pages/begin/begin.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    array:[],
    // 轮播图配置
    autoplay:true,
    interval:3000,
    duration:1200,
    // paymentIndex:0,
    // index:0,
    // date:"",
    // goal_info:""
  },
//   onLoad: function (options) {
//     //获取当前时间
//     var DATE = util.formDate(new Date());
//     this.setData({
//     date: DATE,
// });
//   },
//   bindDateChange: function (e) {
//     console.log( e.detail.value)
//     this.setData({
//       date: e.detail.value
//     })
//   },

  /**
   * 生命周期函数--监听页面加载
   */
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
  }
})