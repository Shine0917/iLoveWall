// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'dev-1gboiotta79671d6',
})

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID, APPID, UNIONID } = cloud.getWXContext()
  const authUserInfo = event.authUserInfo || null
  const { roles } = event
  // 在 users 表中根据 openId 查找用户，返回的是数组
  const { data: userList } = await db.collection('users').where({ openId: OPENID }).get()

  if (userList.length) {
    const [user] = userList
    const { _id } = user
    return updateUserService(_id, authUserInfo, roles)
  }
}

// 更新用户中间层
const updateUserService = async (_id, authUserInfo, roles) => {
  await updateUserInfo(_id, authUserInfo, roles) // 返回创建的用户的 _id
  // 创建成功后返回用户信息
  let { data: userInfo } = await db.collection('users').doc(_id).get()
  return response({ code: 200, data: userInfo })
}

// 从数据库更新用户
const updateUserInfo = async (_id, authUserInfo, roles) => {
  const data = {
    updatedAt: db.serverDate(),
    userInfo: authUserInfo,
  }
  roles && (data.roles = roles)
  return await db.collection('users').doc(_id).update({
    data,
  })
}

const response = ({ code, data, errorMsg = '' }) => {
  return {
    code,
    data,
    errorMsg,
  }
}
