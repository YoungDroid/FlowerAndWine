//flower.js
Page({
  data: {
    text: "花与酒都有故事作伴.",
    vol: "VOL.001",
    day: "04",
    year_month: "02 /2018"
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    // Todo 增加定位自动获取当前地区天气信息
    this.getNowWeather()
    this.getNowDate()
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
    this.getNowWeather()
    this.getNowDate()
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  getNowWeather: function () {
    var that = this;
    wx.request({
      url: 'http://www.sojson.com/open/api/weather/json.shtml?city=北京', //天气接口
      data: {
        city: '黔江'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          text: res.data.data.forecast[0].notice
        })
      }
    })
  },
  getNowDate: function () {
    var that = this;
    wx.request({
      url: 'http://www.sojson.com/open/api/lunar/json.shtml', //农历接口
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          day: res.data.data.day,
          year_month: res.data.data.month + " /" + res.data.data.year
        })
      }
    })
  }
})