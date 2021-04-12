import React, { FC, useEffect, useState } from 'react'
import cx from 'classnames'
import { View } from '@tarojs/components'
import { AtTextarea, AtButton } from 'taro-ui'
import { connect } from 'react-redux'
import styles from './publish.module.scss'

const PublishPage: FC = (props: any) => {
  const { dispatch } = props
  const [content, setContent] = useState('')

  const handleContentChange = (value) => {
    setContent(value)
  }

  useEffect(() => {
    const CREATE_DYNAMIC = 'createDynamic'
    dispatch({
      type: `common/${CREATE_DYNAMIC}`,
      payload: { apiName: CREATE_DYNAMIC, data: {} },
    }).then((res) => {
      console.log('%c AT-[ res ]-22', 'font-size:13px; background:#de4307; color:#f6d04d;', res)
    })
  })

  const onSubmit = () => {}

  return (
    <View className={cx(styles.PublishPage)}>
      <AtTextarea height={500} value={content} onChange={handleContentChange} maxLength={500} placeholder="请填写内容..." />
      <AtButton disabled={!content} className={cx(styles['mt-10'])} onClick={onSubmit}>
        确认发布
      </AtButton>
    </View>
  )
}

export default connect()(PublishPage)
