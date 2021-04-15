### 表白墙项目

- [] 获取用户信息
- [x] commit 规范
- [x] 项目初始化

## 项目初始化

使用 yarn 管理 npm 包

## 注意

### 本地云开发调试

#### 问题 1

云开发本地调试，小程序的版本库为 2.16.0 时，请求依然会发送到远程。
解决办法是调整小程序的版本库为 2.12.0，该问题是系小程序版本库的 bug。

#### 问题 2
本地 env 配置为 cloud.DYNAMIC_CURRENT_ENV 导致找不到本地的表。
![env 导致找不到表](https://qn.xiesz.com/AT/2021-04-12-141215.png)

修改前
```typescript
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
```

将环境变量改为对应数据库的环境变量 id，在开发者工具 设置 -> 环境设置中可以看到
```typescript
cloud.init({
  env: 'dev-1gboiotta79671d6',
})
```
