import React,{useEffect} from 'react'
import cx from 'classnames'
import { View,OpenData } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtAvatar } from 'taro-ui'
// import  './mine.less'
import styles from './mine.module.less'

import "taro-ui/dist/style/components/avatar.scss" // 按需引入


const MinePage=() =>{
  // useEffect(() =>{

  //   Taro.getUserInfo({
  //     success: function(res) {
  //       console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res)
  //       var userInfo = res.userInfo
  //       var nickName = userInfo.nickName
  //       var avatarUrl = userInfo.avatarUrl
  //       var gender = userInfo.gender //性别 0：未知、1：男、2：女
  //       var province = userInfo.province
  //       var city = userInfo.city
  //       var country = userInfo.country
  //     }
  //   })
  // },[])

  return (
    <View className={styles.MinePage}>
      <AtAvatar openData={{type:"userAvatarUrl"}} size='large' circle></AtAvatar>
      {/* <OpenData type="userAvatarUrl"></OpenData> */}
      <OpenData type='userNickName'></OpenData>
      <OpenData type='userGender' lang='zh_CN'></OpenData>
    </View>
  )

  
}

export default MinePage
