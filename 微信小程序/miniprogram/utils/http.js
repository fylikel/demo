// 下载 => 构建 => cv => 注释 => app导入执行
import http from 'wechat-http'

// 接口基础地址
http.baseURL = 'https://live-api.itheima.net/'

// 请求拦截器
http.intercept.request = (options) => {
  // 合并头信息
  options.header = {
    // 权限认证
    Authorization: getApp().token,
    // 默认头信息
    ...options.header,
  }
  // 拦截器处理后的请求参数
  return options
}

// 响应拦截器
http.intercept.response = (result) => {
  // console.log(result.statusCode) // http 响应状态码
  // console.log(result.config) // 发起请求时的参数
  // console.log(result)
  // 拦截器处理后的响应结果
  return result.data
}

// 作为模块导出
export default http

// 也可挂载到 wx 全局命名空间
wx.http = http
