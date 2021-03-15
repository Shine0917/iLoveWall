export default {
  pages: ['pages/index/index',"pages/mine/mine",],
  tabBar: {
    list: [
      {
      // 'iconPath': 'resource/latest.png',
      // 'selectedIconPath': 'resource/lastest_on.png',
      pagePath: 'pages/index/index',
      text: '动态'
    },
     {
      // 'iconPath': 'resource/hotest.png',
      // 'selectedIconPath': 'resource/hotest_on.png',
      pagePath: 'pages/mine/mine',
      text: '我的'
    }, 
    // {
    //   'iconPath': 'resource/node.png',
    //   'selectedIconPath': 'resource/node_on.png',
    //   pagePath: 'pages/nodes/nodes',
    //   text: '节点'
    // }
  ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'black',
    "fontSize":'16px',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
};