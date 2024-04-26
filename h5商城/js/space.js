const token = localStorage.getItem('token')
async function render() {
    const res = (await axios.get('http://cba.itlike.com/public/index.php?s=/api//user/info', {
        headers: {
            'Access-Token': token
        }
    })).data.data.userInfo
    console.log(res)
    document.querySelector('.txt h2').innerHTML = res.nick_name
    document.querySelector('.txt p').innerHTML = res.mobile
    document.querySelectorAll('.info span')[0].innerHTML = res.balance
    document.querySelectorAll('.info span')[1].innerHTML = res.points
    document.querySelectorAll('.info span')[2].innerHTML = res.grade_id
    document.querySelector('.logout').style.display = 'flex'

}
if (token) render()
document.querySelector('.logout p').addEventListener('click', function () {
    localStorage.removeItem('token')
    document.querySelector('.logout').style.display = 'none'
    location.reload()
})