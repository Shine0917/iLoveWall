import React from 'react'
import { connect } from 'react-redux'
import { View, OpenData } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtAvatar, AtButton } from 'taro-ui'
import styles from './mine.module.scss'

import 'taro-ui/dist/style/components/avatar.scss' // 按需引入

const MinePage = (props) => {
  const { dispatch } = props
  const handleClear = () => {
    dispatch({
      type: `dynamic/fetchEffect`,
      payload: { apiName: 'clearDynamic' },
    }).then((res: any) => {
      console.log('%c AT-[ res ]-17', 'font-size:13px; background:#de4307; color:#f6d04d;', res)
    })
  }
  return (
    <View className={styles.MinePage}>
      <AtAvatar openData={{ type: 'userAvatarUrl' }} size="large" circle></AtAvatar>
      {/* <OpenData type="userAvatarUrl"></OpenData> */}
      <OpenData type="userNickName"></OpenData>
      <OpenData type="userGender" lang="zh_CN"></OpenData>
      <AtButton onClick={handleClear}>清空动态表</AtButton>
    </View>
  )
}

export default connect()(MinePage)
