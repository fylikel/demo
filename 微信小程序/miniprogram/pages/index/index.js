// 小程序中如果默认是index文件 是需要提供文件名的
// import utils from '../../utils/index'   基础建设(项目搭建 请求配置 公共的方法)

Page({
  data: {
    notifyList: [],
    seconds: 0,
  },
  async onLoad() {
    // 这种方法 导致所有页面都充斥这个逻辑 => 有其他方案 我们这次选择 封装组件 完成登录访问控制
    // 1. 封装一个组件 auth 鉴权组件
    // 2. 组件内部提供 slot 插槽 => 控制页面显示隐藏
    // 3. 组件内获取全局token 更新slot的控制变量
    // 4. 组件内判断如果未登录 跳转登录页

    // if (!getApp().token)
    //   return wx.navigateTo({
    //     url: '/pages/login/index',
    //   })
    // console.log(getApp().token)

    // fn('数据正在加载.')
    // utils.toast()
    // console.log(wx.utils)
    // wx.utils.toast()

    // 测试请求
    // wx.http.get('/xxx', {})
    // wx.http.post('/xxx', {})
    // wx.http.put('/xxx', {})
    // wx.http.delete('/xxx', {})
    // wx.http({})
    
    const res = await wx.http.get('/announcement')
    // console.log(res)

    if (res.code !== 10000) return wx.utils.toast()
    // 请求200 且获取到数据
    this.setData({
      notifyList: res.data,
    })

    // 配白名单
  },
  test(ev) {
    // console.log(ev.detail.seconds)
    this.setData({
      seconds: ev.detail.seconds,
    })
  },
})
