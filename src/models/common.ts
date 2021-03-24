import Taro from '@tarojs/taro'

export default {
  namespace: 'common', // 全局 state 上的 key
  state: {
    // 初始值 - 同步更新
    accessToken: Taro.getStorageSync('accessToken'),
    userInfo: Taro.getStorageSync('userInfo'),
  },
  effects: {}, // 处理异步逻辑
  reducers: {
    // 等同于 redux 里的 reducer，接收 action，同步更新 state
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}
