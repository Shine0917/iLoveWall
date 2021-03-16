import {useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton,AtTabBar } from 'taro-ui'
import Taro, {  Config } from "@tarojs/taro";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

 const Index =()=> {
  const [current,setCurrent] = useState<number>(0)



    return (
      <View className='index'>
        {/* <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        // <AtButton type='secondary' circle={true}>来</AtButton> */}
      index
      </View>
    )
  }
  export default Index