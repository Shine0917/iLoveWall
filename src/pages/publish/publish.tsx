import React ,{FC, useRef} from 'react'
import cx from 'classnames'
import { View,RichText } from '@tarojs/components'
import styles from './publish.module.less'


const PublishPage:FC =()=>{
  const textRef = useRef(null)
 const state={ nodes: [{
    name: 'div',
    attrs: {
      class: 'div_class',
      style: 'line-height: 60px; color: red;'
    },
    children: [{
      type: 'text',
      text: 'Hello World!'
    }]
  }]
}
  return <View className={cx(styles.PublishPage,'page')}>
    PublishPage
    <RichText nodes={state.nodes} space='emsp'></RichText>
  </View>
}

export default PublishPage
