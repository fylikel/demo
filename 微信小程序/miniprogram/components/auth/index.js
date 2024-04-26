// components/auth/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    isLogin: false,
  },

  lifetimes: {
    created() {},

    attached() {
      // 只要组件一加载   根据全局token 立即跟新isLogin
      const token = getApp().token
      this.setData({
        isLogin: token ? true : false,
      })

      const res = getCurrentPages()
      const currentPage = res[res.length - 1]
      const currentPagePath = currentPage.route

      console.log('当前页: ', currentPage)

      if (!token) {
        // 既然已经没有登录了 那么这个页面的请求逻辑也不用执行了
        currentPage.onLoad = () => {}
        currentPage.onReady = () => {}
        currentPage.onShow = () => {}

        // 除了不显示 还得去登录(带上将来的回跳地址)
        wx.redirectTo({
          url: '/pages/login/index?redirectURL=/' + currentPagePath,
        })
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {},
})
