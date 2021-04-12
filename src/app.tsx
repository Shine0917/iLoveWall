import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Provider } from 'react-redux'
import dva from './utils/dva'
import models from './models'

import './app.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models,
})
const store = dvaApp.getStore()

class App extends Component {
  componentDidMount() {
    this.envInit()
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  envInit = () => {
    const weappEnv = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
    if (weappEnv) {
      // 初始化云开发环境
      const env = process.env.NODE_ENV === 'development' ? 'dev-1gboiotta79671d6' : 'prod-c0yn7'
      Taro.cloud.init({ env, traceUser: true })
    }
  }

  render() {
    const { children } = this.props
    return <Provider store={store}> {children} </Provider>
  }
}

export default App
