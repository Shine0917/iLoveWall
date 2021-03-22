import React, { useEffect } from 'react'
import cx from 'classnames'
import { View, OpenData } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtAvatar } from 'taro-ui'
import styles from './mine.module.scss'

import 'taro-ui/dist/style/components/avatar.scss' // 按需引入

const MinePage = () => {
  return (
    <View className={styles.MinePage}>
      <AtAvatar openData={{ type: 'userAvatarUrl' }} size="large" circle></AtAvatar>
      {/* <OpenData type="userAvatarUrl"></OpenData> */}
      <OpenData type="userNickName"></OpenData>
      <OpenData type="userGender" lang="zh_CN"></OpenData>
    </View>
  )
}

export default MinePage
