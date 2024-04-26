
async function render() {
    const res = (await axios.get('http://cba.itlike.com/public/index.php?s=/api//page/detail')).data.data.pageData.items
    console.log((await axios.get('http://cba.itlike.com/public/index.php?s=/api//page/detail')).data.data.pageData.items)
    //搜索框
    document.querySelector('.search a').innerHTML = res[0].params.placeholder


    //轮播图
    document.querySelector('.banner .swiper-wrapper').innerHTML = res[1].data.map(ele => `
        <div class="swiper-slide">
            <a data-id='${ele.link.param.query.goodsId}'><img src="${ele.imgUrl}" alt=""></a>
        </div>
        `
    ).join('')
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

    //店铺公告
    document.querySelector('.notice p span').innerHTML = res[2].params.text

    //导航组
    document.querySelector('.navBar ul').innerHTML = res[3].data.map(ele => `
    <a href='./type.html'>
        <div class="pic">
            <img src="${ele.imgUrl}" alt="">
        </div>
        <h3>${ele.text}</h3>
    </a>
    `).join('')

    //图片
    document.querySelector('.image img').src = res[4].data[0].imgUrl

    //富文本
    document.querySelector('.richText').innerHTML = res[5].params.content

    //商品组
    document.querySelector('.goods ul').innerHTML = res[6].data.map(ele => `
        <a  data-id='${ele.goods_id}'>
            <div class="left">
                <img src=${ele.goods_image} alt="">
            </div>
            <div class="right">
                <h5 class="ellipsis-2">
                    ${ele.goods_name}
                </h5>
                <div class="sold"><span>已售${ele.goods_sales}件</span></div>
                <div class="price">
                    <span>${ele.goods_price_max}</span>
                    <del>${ele.line_price_max}</del>
                </div>
            </div>
        </a>
    `).join('')
    document.querySelectorAll('.goods ul a').forEach(ele => {
        ele.addEventListener('click', function () {
            localStorage.setItem('goodsId', ele.dataset.id)
            location.href = './product detail.html'
        })
    })
    document.querySelectorAll('.banner a').forEach(ele => {
        ele.addEventListener('click', function () {
            localStorage.setItem('goodsId', ele.dataset.id)
            location.href = './product detail.html'
        })
    })
}
render()


