import { fetchFn } from '../api/index'
import { userInfoType } from '../@type/common'

export interface UserModelState {
  userInfo: userInfoType
}

export interface CommonModelType {
  namespace: string
  state: UserModelState
  effects: {}
  reducers: {}
}

const initialState = {
  userInfo: {},
}

const CommonModel: CommonModelType = {
  namespace: 'user',
  state: initialState,
  effects: {
    *login({ payload }, { call }) {
      return yield call(fetchFn, payload)
    },
    *getUserInfo({ payload }, { call }) {
      return yield call(fetchFn, payload)
    },
    *updateUserInfo({ payload }, { call }) {
      return yield call(fetchFn, payload)
    },
  },
  reducers: {
    saveUserInfo(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}
export default CommonModel
