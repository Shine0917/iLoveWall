import {useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton,AtTabBar } from 'taro-ui'
import Taro, {  Config } from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

 const Index =()=> {
  const [current,setCurrent] = useState<number>(0)

  // componentWillMount () { }

  // componentDidMount () { }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }
const switchTab =(value?:any) => {
  console.log('%c [ value ]', 'font-size:13px; background:pink; color:#bf2c9f;', value)
  if (value !== 1) return;
  Taro.reLaunch({
    url: "/pages/my/my"
  });
}
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
        {/* <AtTabBar
          fixed
          selectedColor="#d43c33"
          tabList={[
            { title: "发现", iconPrefixClass: "fa", iconType: "feed" },
            { title: "我的", iconPrefixClass: "fa", iconType: "music" }
          ]}
          // onClick={this.switchTab.bind(this)}
          // current={this.state.current}
          onClick={(current) => switchTab(current)}
          current={current}
        /> */}
      </View>
    )
  }
  export default Index