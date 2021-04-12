import { fetchFn } from '../api/index'

export interface CommonModelState {}
export interface CommonModelType {
  namespace: string
  state: CommonModelState
  effects: {}
  reducers: {}
}
const initialState = {}

const CommonModel: CommonModelType = {
  namespace: 'login',
  state: initialState,
  effects: {
    *login({ payload }, { call }) {
      return yield call(fetchFn, payload)
    },
  },
  reducers: {},
}
export default CommonModel
