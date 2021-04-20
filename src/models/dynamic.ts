import { fetchFn } from '../api/index'

export interface CommonModelType {
  namespace: string
  state: {}
  effects: {}
  reducers: {}
}

const CommonModel: CommonModelType = {
  namespace: 'dynamic',
  state: {},
  effects: {
    *fetchEffect({ payload }, { call }) {
      return yield call(fetchFn, payload)
    },
  },
  reducers: {},
}
export default CommonModel
