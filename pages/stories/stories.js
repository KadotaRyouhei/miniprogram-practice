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
            img: "../../images/thingsToDo.png",
            loc:"曼谷",
            des:"泰国时髦星人喜欢的Roast，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/thingsToDo.png",
            loc: "成都",
            des: "一场关于自然的巡演，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/thingsToDo.png",
            loc: "上海",
            des: "世界规模最大的模型展，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/thingsToDo.png",
            loc: "佛罗伦萨",
            des: "学会享受生活，你连一次基本的野餐都组织不起来"
          },
        ]
      },
      {
        storyName: "餐厅",
        storyContent: [
          {
            img: "../../images/thingsToDo.png",
            loc: "曼谷",
            des: "泰国时髦星人喜欢的Roast，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/thingsToDo.png",
            loc: "成都",
            des: "一场关于自然的巡演，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/thingsToDo.png",
            loc: "上海",
            des: "世界规模最大的模型展，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/thingsToDo.png",
            loc: "佛罗伦萨",
            des: "学会享受生活，你连一次基本的野餐都组织不起来"
          },
        ]
      },
    ],
    storyDatasOther: [
      {
        storyName: "欧洲",
        storyContent: [
          {
            img: "../../images/helpfinditem1.png",
            loc: "意大利",
            des: "佛罗伦萨百花圣母大教堂，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/helpfinditem1.png",
            loc: "法国",
            des: "卢浮宫附近的精致房间，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/helpfinditem1.png",
            loc: "西班牙",
            des: "在马德里享受城市的喧嚣，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/helpfinditem1.png",
            loc: "卢森堡",
            des: "什么是优质的生活，你连一次基本的野餐都组织不起来"
          },
        ]
      },
      {
        storyName: "亚洲",
        storyContent: [
          {
            img: "../../images/helpfinditem1.png",
            loc: "日本",
            des: "麻雀虽小五脏俱全，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/helpfinditem1.png",
            loc: "韩国",
            des: "首尔有哪些值得去的地方，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/helpfinditem1.png",
            loc: "厦门",
            des: "鼓浪屿你去过一次就不会忘记，你连一次基本的野餐都组织不起来"
          },
          {
            img: "../../images/helpfinditem1.png",
            loc: "北京",
            des: "胡同巷子四合院，你连一次基本的野餐都组织不起来"
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