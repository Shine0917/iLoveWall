import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtTabBar } from 'taro-ui'
import Taro, { Config } from '@tarojs/taro'
import 'taro-ui/dist/style/components/button.scss' // 按需引入
import './index.less'

const Index = () => {
  const [current, setCurrent] = useState<number>(0)

  const goToPublish = () => {
    Taro.reLaunch({
      url: '/pages/publish/publish',
    })
  }

  return (
    <View className="index">
      index
      <AtButton onClick={goToPublish}>发布动态</AtButton>
    </View>
  )
}
export default Index
