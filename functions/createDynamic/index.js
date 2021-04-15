const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database()

// 创建动态
const createDynamic = async (content) => {
  return await db.collection('dynamic').add({
    data: {
      content,
      createdAt: db.serverDate(),
      updatedAt: db.serverDate(),
    },
  })
}

// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID, APPID, UNIONID } = cloud.getWXContext()
  const { content } = event
  const result = await createDynamic(content)
  return response({ code: 200, data: result })
}

const response = ({ code, data, errorMsg = '' }) => {
  return {
    code,
    data,
    errorMsg,
  }
}
