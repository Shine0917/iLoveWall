import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import styles from './index.module.scss'
import { connect } from 'react-redux'
import { CommonModelState, ConnectProps, ConnectState } from '@models/connect'

interface IndexProps extends ConnectProps {
  common: CommonModelState
  count: number
}

const Index: React.FC<IndexProps> = (props) => {
  const { count, dispatch } = props
  const goToPublish = () => {
    Taro.reLaunch({
      url: '/pages/publish/publish',
    })
  }

  useEffect(() => {}, [])

  const handleClick = () => {
    dispatch({
      type: 'common/addCount',
      payload: { count: count + 1 },
    })
  }

  return (
    <View className={styles.index}>
      <AtButton onClick={goToPublish}>发布动态</AtButton>
      <AtButton onClick={handleClick}>+1</AtButton>
      <AtButton>{count}</AtButton>
    </View>
  )
}

export default connect(({ common }: ConnectState) => ({ ...common }))(Index)
