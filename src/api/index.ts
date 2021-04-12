import Taro from '@tarojs/taro'

export const fetchFn = async ({ apiName, data = {} }) => {
  try {
    if (!apiName) throw new Error('apiName 不能为空')
    const { result }: any = await Taro.cloud.callFunction({
      name: apiName,
      data,
    })
    return result
  } catch (err) {
    console.log('api err', err)
  }
}
