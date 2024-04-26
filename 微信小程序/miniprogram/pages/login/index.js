Page({
  data: {
    countDownVisible: false, // 倒计时显示的布尔值
    mobile: '16767896789', // 手机号
    code: '', // 后端返回的验证码 将来用于模拟快速复制粘贴
    code2: '', // 绑定表单的
    redirectURL: '', // 存回跳地址的
  },

  validateMobile() {
    const reg = /^1[3-9]\d{9}$/
    const mobile = this.data.mobile.trim()

    const flag = reg.test(mobile)
    if (!flag) wx.utils.toast('你手机号有问题')
    return flag
  },

  validateCode() {
    const reg = /^\d{6}$/
    const code2 = this.data.code2.trim()
    const flag = reg.test(code2)
    if (!flag) wx.utils.toast('你验证码有问题')
    return flag
  },

  async submit() {
    // 校验一下手机号 + 验证码
    if (!this.validateMobile()) return
    if (!this.validateCode()) return
    console.log('登录啦...')

    const { code, data } = await wx.http.post('/login', {
      mobile: this.data.mobile.trim(),
      code: this.data.code2.trim(),
    })
    // console.log(res)
    if (code !== 10000) return wx.utils.toast()

    // 提示 + 存token(本地+全局) + 页面跳转
    // wx.setStorageSync('token', data.token)
    // getApp().token = data.token
    getApp().setToken(data.token)

    // console.log(getApp().token) // 小程序开发者工具中没有可以直接看到全局数据的地方

    if (this.data.redirectURL === '/pages/my/index') {
      // 跳转tab页
      wx.switchTab({
        url: this.data.redirectURL,
      })
    } else {
      // 跳转正常页
      wx.redirectTo({
        url: this.data.redirectURL,
      })
    }
  },

  onLoad({ redirectURL }) {
    // console.log(redirectURL)
    this.setData({
      redirectURL: redirectURL,
    })
  },

  countDownChange(ev) {
    this.setData({
      timeData: ev.detail, // 剩余时间存下来
      countDownVisible: ev.detail.minutes === 1 || ev.detail.seconds > 0, // 更新countDownVisible
    })
  },

  async getCode() {
    // 校验
    if (!this.validateMobile()) return

    console.log('手机号通过校验, 可以获取验证码, 可以显示倒计时')

    // 请求后端接口发送验证码
    const res = await wx.http.get('/code', { mobile: this.data.mobile.trim() })
    // 保证200 => 不能保证真的操作成功了
    if (res.code !== 10000) return wx.utils.toast('验证码发送失败')

    wx.utils.toast('请查收短信', 'none', 2000, false)
    console.log(res.data.code, '验证码:') // 用户收到验证码了(上课通过相应拿到验证码的)

    // 开启倒计时
    // this.countDownVisible = true
    this.setData({
      countDownVisible: true,
      code: res.data.code,
    })
  },

  cv() {
    wx.setClipboardData({ data: this.data.code })
  },
})
