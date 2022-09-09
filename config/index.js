const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "44b07a04508c939d266d4b8d59189b5c",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx7750bef1d66dbee6",

  // 微信公众号的appsecret
  APP_SECRET: "422454f30a78bac04b0e7cd74d3b9c07",

  // 微信公众号的模板ID
  TEMPLATE_ID: "RKxcie8NvHgY1ijoImNtppJAC8lup-ZTH2W77QEgWkk",

  // 天行API的key
  TXApiKey: "44b07a04508c939d266d4b8d59189b5c",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "小明明吖",
      // 用户列表的`微信号`
      userId: "oWAWa6Kozhppumh90gnfoBHsO22s",
      // 星座
      star: "摩羯座",
      // 生日 - 格式：08-22
      birthday: "01-28",
      // 城市 - 格式：支持省市县区
      city: "武汉市",
    },
  ],
  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: false,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 2,
    // 星座运势
    star: false,
    // 土味情话
    saylove: true,
    // 健康小提示
    healthtip: false,
    // 毒鸡汤
    duJiTang: false,
    // 早安心语
    zaoAn: false,
    // 晚安心语
    wanAn: false,
    // 彩虹屁
    caiHongPi: false,
  },
};

module.exports = {
  CONFIG,
};
