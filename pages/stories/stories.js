Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryDatas:[
      {
        cateId:"001",
        cateName:"所有故事"
      },
      {
        cateId: "002",
        cateName: "民宿"
      },
      {
        cateId: "003",
        cateName: "美食"
      },
      {
        cateId: "004",
        cateName: "景点"
      },
      {
        cateId: "005",
        cateName: "艺术"
      },
      {
        cateId: "006",
        cateName: "灵感"
      },
      {
        cateId: "007",
        cateName: "娱乐"
      },
    ],
    currentCate:0,
    storyDatas:[
      {
        storyName:"咖啡店",
        storyContent:[
          {
            loc:"曼谷",
            des:"泰国时髦星人喜欢的Roast，你连一次基本的野餐都组织不起来"
          },
          {
            loc: "成都",
            des: "一场关于自然的巡演，你连一次基本的野餐都组织不起来"
          },
          {
            loc: "上海",
            des: "世界规模最大的模型展，你连一次基本的野餐都组织不起来"
          },
          {
            loc: "佛罗伦萨",
            des: "学会享受生活，你连一次基本的野餐都组织不起来"
          },
        ]
      },
      {
        storyName: "餐厅",
        storyContent: [
          {
            loc: "曼谷",
            des: "泰国时髦星人喜欢的Roast，你连一次基本的野餐都组织不起来"
          },
          {
            loc: "成都",
            des: "一场关于自然的巡演，你连一次基本的野餐都组织不起来"
          },
          {
            loc: "上海",
            des: "世界规模最大的模型展，你连一次基本的野餐都组织不起来"
          },
          {
            loc: "佛罗伦萨",
            des: "学会享受生活，你连一次基本的野餐都组织不起来"
          },
        ]
      },
    ]

  },
  onCateSelect:function (event) {
    this.setData({
      currentCate: event.currentTarget.dataset['index']
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})