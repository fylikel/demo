Page({
  data: {
    nickname: '',
  },
  // ev 事件对象
  async handleChange(ev) {
    console.log(ev.detail.value)

    // 请求后端接口更新昵称
    const res = await wx.http.put('/userInfo', {
      nickName: ev.detail.value,
    })
    if (res.code !== 10000) return wx.utils.toast()

    // 更新数据
    this.setData({
      nickname: ev.detail.value,
    })
  },
})
