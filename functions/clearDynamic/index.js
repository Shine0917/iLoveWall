// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'dev-1gboiotta79671d6',
})

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const res = await db
    .collection('dynamic')
    .where({ createdAt: _.exists(true) })
    .remove()
  console.log('%c AT-[ res ]-14', 'font-size:13px; background:#de4307; color:#f6d04d;', res)
}
