export default {
  pages: ["pages/publish/publish", 'pages/index/index', "pages/mine/mine"],
  tabBar: {
    list: [{
      // 'iconPath': 'resource/latest.png',
      // 'selectedIconPath': 'resource/lastest_on.png',
      pagePath: 'pages/index/index',
      text: '动态'
    }, {
      // 'iconPath': 'resource/hotest.png',
      // 'selectedIconPath': 'resource/hotest_on.png',
      pagePath: 'pages/mine/mine',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'black'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
};