import Taro from '@tarojs/taro'
import { Reducer } from 'redux'
import { userInfoType } from '../@type/common'

export interface CommonModelState {
  accessToken: string
  userInfo: userInfoType
  count: number
}
export interface CommonModelType {
  namespace: string
  state: CommonModelState
  effects: {}
  reducers: { save: Reducer<CommonModelState>; addCount: Reducer<any> }
}
const initialState = {
  // 初始值 - 同步更新
  accessToken: Taro.getStorageSync('accessToken'),
  userInfo: Taro.getStorageSync('userInfo'),
  count: 0,
}

const CommonModel: CommonModelType = {
  namespace: 'common', // 全局 state 上的 key
  state: initialState,
  effects: {}, // 处理异步逻辑
  reducers: {
    // 等同于 redux 里的 reducer，接收 action，同步更新 state
    save(state, { payload }) {
      return { ...state, ...payload }
    },
    addCount(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}
export default CommonModel
