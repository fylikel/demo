async function imgRender() {
    const res = (await axios.get('http://cba.itlike.com/public/index.php?s=/api//captcha/image', {
        headers: {
            platform: 'H5'
        }
    })).data.data
    console.log(res)
    document.querySelector('.input img').src = res.base64
    localStorage.setItem('key', res.key)
}
imgRender()

document.querySelector('.input img').addEventListener('click', function () {
    imgRender()
})

function timeout() {
    let i = 5
    document.querySelector('.input span').innerHTML = i + '秒后重新发送'
    let timer = setInterval(function () {
        i--
        document.querySelector('.input span').innerHTML = i + '秒后重新发送'
        if (i === 0) {
            clearInterval(timer)
            document.querySelector('.input span').innerHTML = '点击重新发送'
        }
    }, 1000)
}
function throttle(fn, t = 500) {
    //声明一个参数接受延时器返回的id
    //对于调用返回的函数(return后的函数)来说,timer是一个外部声明的变量,因此
    //每次调用返回的函数时,它是不会重新声明的
    //在延时器结束后,下次被重新调用时,timer才会被重新声明成null,以此来开启延时器
    let timer = null
    //同防抖
    return function () {
        //判断是否有延时器开启,如果有则不开启延时器
        if (!timer) {
            fn()
            timer = setTimeout(function () {
                //在定时器触发后内部清空延时器
                timer = null
            }, t)
        }
    }
}
document.querySelector('.input span').addEventListener('click', throttle(timeout, 5000))

document.querySelector('.djs').addEventListener('click', async function () {
    const form = serialize(document.querySelector('form'), { hash: true })
    form.captchaKey = localStorage.getItem('key')
    // console.log((await axios.post('http://cba.itlike.com/public/index.php?s=/api/captcha/sendSmsCaptcha', { form })))
})

document.querySelector('button').addEventListener('click', async function (e) {
    e.preventDefault()
    const res = (await axios.post('http://cba.itlike.com/public/index.php?s=/api//passport/login', {
        "form": {
            "smsCode": "246810",
            "mobile": document.querySelector('#mobile').value,
            "isParty": false,
            "partyData": {}
        }
    })).data.data
    localStorage.setItem('token', res.token)
    location.href = './space.html'
})
