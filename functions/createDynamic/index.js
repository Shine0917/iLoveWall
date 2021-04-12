const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID, APPID, UNIONID } = cloud.getWXContext()
  const { content } = event
  const user = await db.collection('users').doc(OPENID).get()
  console.log('%c AT-[ user ]-14', 'font-size:13px; background:#de4307; color:#f6d04d;', user)
  // const { _id } = await db.collection('post').add({
  //   data: {
  //     ...postData,
  //     user: user.data,
  //     createdAt: db.serverDate(),
  //     updatedAt: db.serverDate(),
  //   },
  // })
  // // 查数据库中有无 openId 数据，若无则添加，有则说明是新用户
  // const { _id } = await db.collection('dynamic').add({
  //   data: {
  //     content,
  //     openId: OPENID,
  //     createdAt: db.serverDate(),
  //     updatedAt: db.serverDate(),
  //   },
  // })
  return {
    ...user,
  }
}
