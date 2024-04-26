const star = {
    10: '✨✨✨✨✨',
    20: '✨✨✨☆☆',
    30: '✨☆☆☆☆'
}
async function firstRender() {
    const res1 = (await axios.get('http://cba.itlike.com/public/index.php?s=/api/comment/total', {
        params: {
            goodsId: localStorage.getItem('goodsId')
        }
    })).data.data.total
    const res2 = (await axios.get('http://cba.itlike.com/public/index.php?s=/api/comment/listRows', {
        params: {
            goodsId: localStorage.getItem('goodsId'),
            limit: res1.all
        }
    })).data.data.list
    for (let k in res1) {
        document.querySelector(`.nav .${k}`).innerHTML = res1[k]
    }
    render(res2)
    document.querySelectorAll('.nav li').forEach((ele, index) => {
        ele.addEventListener('click', function () {
            document.querySelector('.active').classList.remove('active')
            ele.classList.add('active')
            document.querySelector('.line').style.left = (12.5 + 25 * index) + '%'
            render(res2.filter(e => e.score == ele.dataset.id))
        })
    })
}
firstRender()
function render(arr) {
    document.querySelector('.content').innerHTML = arr.map(ele => {
        let str = ''
        if (ele.is_picture) {
            str = `
            <div class="pic">
                <img src="${ele.user.avatar ? ele.user.avatar.external_url : 'C:\\Users\\Sonnsye\\Desktop\\图片\\1.jpg'}" alt="">
            </div>
            `
        }
        return `<div class="review">
                    <div class="user">
                        <img src="${ele.user.avatar_url ? ele.user.avatar_url : 'C:\\Users\\Sonnsye\\Desktop\\图片\\1.jpg'}" alt="">
                        <h4>${ele.user.nick_name}</h4>
                        <span>${star[ele.score]}</span>
                        <i>${ele.create_time}</i>
                    </div>
                    <p>${ele.content}</p>
                    ${str}
                </div>`
    }).join('')
}