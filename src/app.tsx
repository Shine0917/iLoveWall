import React, { Component } from 'react'
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
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    const { children } = this.props
    return <Provider store={store}> {children} </Provider>
  }
}

export default App
