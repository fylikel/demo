async function render() {
    const res = (await axios.get('http://cba.itlike.com/public/index.php?s=/api/goods/detail', {
        params: {
            goodsId: localStorage.getItem('goodsId')
        }
    })).data.data.detail
    const res1 = (await axios.get('http://cba.itlike.com/public/index.php?s=/api/comment/total', {
        params: {
            goodsId: localStorage.getItem('goodsId')
        }
    })).data.data.total
    const res2 = (await axios.get('http://cba.itlike.com/public/index.php?s=/api/comment/listRows', {
        params: {
            goodsId: localStorage.getItem('goodsId'),
            limit: 2
        }
    })).data.data.list
    const star = {
        10: '✨✨✨✨✨',
        20: '✨✨✨☆☆',
        30: '✨☆☆☆☆'
    }
    console.log(res1)
    console.log(res2)
    document.querySelector('.price span').innerHTML = res.goods_price_max
    document.querySelector('.price del').innerHTML = res.line_price_max
    document.querySelector('.sold span').innerHTML = `已售${res.goods_sales}件`
    document.querySelector('.description h3').innerHTML = res.goods_name
    document.querySelector('.banner .swiper-wrapper').innerHTML = res.goods_images.map(ele => `
    <div class="swiper-slide">
        <img src=${ele.external_url} alt="">
    </div>
    `).join('')
    document.querySelector('.l span').innerHTML = `商品评价 (${res1.all}条)`
    document.querySelector('.b').innerHTML = res2.map(ele => `
    <div class="users">
        <div class="user">
            <img src=${ele.user.avatar_url ? ele.user.avatar_url : "C:\\Users\\Sonnsye\\Desktop\\图片\\1.jpg"} alt="">
            <h4>${ele.user.nick_name}</h4>
            <span>${star[ele.score]}</span>
        </div>
        <p>${ele.content}</p>
        <div class="time">${ele.create_time}</div>
    </div>
    `)
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 0,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });

}
render()
