// 上面这个代码处理过度动画（默认加上不用管）
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('sidenav-pinned')
    document.body.classList.add('ready')
  }, 200)
})

function tip(txt) {
  const toast = new bootstrap.Toast(document.querySelector('#myToast'), {
    animation: true,
    autohide: true,
    delay: 2000
  })
  document.querySelector('.toast-body').innerHTML = txt
  toast.show()
}
//axios中的可以设置基础地址,会自动进行拼接
axios.defaults.baseURL = 'http://ajax-api.itheima.net'

const username = document.querySelector('.mb-0.text-sm.font-weight-bold')
if (username) username.innerHTML = localStorage.getItem('user-name')

const logout = document.querySelector('#logout')
if (logout) logout.addEventListener('click', () => {
  localStorage.removeItem('user-token')
  localStorage.removeItem('user-name')
  location.href = './login.html'
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = localStorage.getItem('user-token')
  if (token) config.headers.Authorization = token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 如果token过期, 对本地数据进行清除, 并跳回登录页
  if (error.response.status === 401) {
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-name')
    location.href = './login.html'
  }
  return Promise.reject(error);
});