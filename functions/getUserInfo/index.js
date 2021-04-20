// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID, APPID, UNIONID } = cloud.getWXContext()
  const authUserInfo = event.authUserInfo || {}
  const roles = event.roles || []
  // 在 users 表中根据 openId 查找用户，返回的是数组
  const { data: userList } = await db.collection('users').where({ openId: OPENID }).get()

  // 1创建用户 用户列表为空，调用接口时[没传]头像等信息 / 如果传了头像信息也可以创建
  if (!userList.length) {
    return cerateUserService(OPENID, authUserInfo, roles)
  }

  // 3获取用户 用户列表不为空, 调用接口时[没传]头像等信息
  const [userInfo] = userList
  return response({ code: 200, data: userInfo })
}

// 创建用户中间层
const cerateUserService = async (OPENID, authUserInfo, roles) => {
  const { _id } = await createUser(OPENID, authUserInfo, roles) // 返回创建的用户的 _id
  // 创建成功后返回用户信息
  let { data: userInfo } = await db.collection('users').doc(_id).get()
  return response({ code: 200, data: userInfo })
}

// 创建用户
const createUser = async (OPENID, authUserInfo, roles) => {
  const data = {
    openId: OPENID,
    createdAt: db.serverDate(),
    updatedAt: db.serverDate(),
    roles,
    userInfo: authUserInfo,
  }
  return await db.collection('users').add({
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
