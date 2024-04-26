// app.js
import './utils/index'
import './utils/http'

App({
  token: '',

  setToken(token) {
    // 存本地 存全局
    token = 'Bearer ' + token
    wx.setStorageSync('token', token)
    this.token = token
  },

  onLaunch() {
    // 小程序启动时 先从本地尝试获取一份token
    const res = wx.getStorageSync('token')
    this.token = res // 页面中才需要this.setData修改数据
  },
})
