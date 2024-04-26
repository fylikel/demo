// function toast(title = '数据加载失败...', icon = 'none', duration = 2000, mask = true) {
//   wx.showToast({
//     title: title,
//     mask: mask,
//     icon: icon,
//     duration,
//   })
// }

const utils = {
  toast(title = '数据加载失败...', icon = 'none', duration = 2000, mask = true) {
    wx.showToast({
      title: title,
      mask: mask,
      icon: icon,
      duration,
    })
  },

  fn() {},
}

wx.utils = utils // 需要再app.js中导入运行一下 => Vue.prototype.$xx = xx  this.$xx
export default utils

// utils.toast()
// utils.toast('恭喜')
// utils.toast('hahah', 'success', 3000, false)
// utils.fn()
