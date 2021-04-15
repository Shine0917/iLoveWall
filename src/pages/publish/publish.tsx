import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import cx from 'classnames'
import { View } from '@tarojs/components'
import { AtTextarea, AtButton, AtToast } from 'taro-ui'
import { connect } from 'react-redux'
import { UserModelState, ConnectProps, ConnectState } from '@models/connect'
import styles from './publish.module.scss'

interface PublishProps extends ConnectProps {
  user: UserModelState
}

const PublishPage: React.FC<PublishProps> = (props: any) => {
  const { dispatch, userInfo } = props
  const [content, setContent] = useState('')
  const [tostText, setTostText] = useState('')
  const [isOpened, setIsOpened] = useState(false)

  const handleContentChange = (value) => {
    setContent(value)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = () => {
    const GET_USER_INFO = 'getUserInfo'
    dispatch({
      type: `user/${GET_USER_INFO}`,
      payload: { apiName: GET_USER_INFO },
    }).then((res) => {
      if (res.code === 200) {
        dispatch({
          type: 'user/saveUserInfo',
          payload: { userInfo: res.data },
        })
      }
    })
  }

  const updateUserInfo = (authUserInfo) => {
    const GET_USER_INFO = 'updateUserInfo'
    dispatch({
      type: `user/${GET_USER_INFO}`,
      payload: { apiName: GET_USER_INFO, data: { authUserInfo } },
    }).then((res) => {
      if (res.code === 200) {
        dispatch({
          type: 'user/saveUserInfo',
          payload: { userInfo: res.data },
        })
      }
    })
  }

  const onSubmit = () => {
    if (!userInfo.userInfo) {
      Taro.getUserProfile({
        desc: '用于完善会员资料',
        lang: 'zh_CN',
        success: (result) => {
          updateUserInfo(result.userInfo)
        },
      })
    }
    dispatch({
      type: `common/createDynamic`,
      payload: { apiName: 'createDynamic', data: { content } },
    }).then((res) => {
      const { code } = res
      if (code === 200) {
        setIsOpened(true)
        setTostText('发布成功')
        setTimeout(() => {
          Taro.reLaunch({
            url: '/pages/index/index',
          })
        }, 1000)
      }
    })
  }

  return (
    <View className={cx(styles.PublishPage)}>
      <AtTextarea height={500} value={content} onChange={handleContentChange} maxLength={500} placeholder="请填写内容..." />
      <AtButton disabled={!content} className={cx(styles['mt-10'])} onClick={onSubmit}>
        确认发布
      </AtButton>
      <AtToast isOpened={isOpened} text={tostText} />
    </View>
  )
}

export default connect(({ user }: ConnectState) => ({ ...user }))(PublishPage)
