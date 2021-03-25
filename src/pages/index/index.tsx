import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import styles from './index.module.scss'
import { connect } from 'react-redux'
import { CommonModelState, ConnectProps, ConnectState } from '@models/connect'

interface IndexProps extends ConnectProps {
  common: CommonModelState
}

const Index: React.FC<IndexProps> = (common) => {
  console.log('%c AT-[ common ]-14', 'font-size:13px; background:#de4307; color:#f6d04d;', common)

  const goToPublish = () => {
    Taro.reLaunch({
      url: '/pages/publish/publish',
    })
  }

  useEffect(() => {}, [])

  return (
    <View className={styles.index}>
      <AtButton onClick={goToPublish}>发布动态</AtButton>
    </View>
  )
}

export default connect(({ common }: ConnectState) => ({ common }))(Index)
