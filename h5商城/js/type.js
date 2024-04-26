async function renderAll() {
    const res = ((await axios.get('http://cba.itlike.com/public/index.php?s=/api//category/list'))).data.data.list
    document.querySelector('.left').innerHTML = res.map(ele => `
    <a href="" class="" data-id = '${ele.category_id}'>
        <span>${ele.name}</span>
    </a>
    `).join('')
    document.querySelector('.left a').classList.add('active')
    render(res[0].category_id)
}
renderAll()
async function render(id) {
    const res = ((await axios.get('http://cba.itlike.com/public/index.php?s=/api//category/list'))).data.data.list
    res.forEach(ele => {
        if (id == ele.category_id) {
            document.querySelector('.right ul').innerHTML = ele.children.map(ele => `
            <a href="" data-goodId = '${ele.category_id}'>
                <div class="pic">
                    <img src=${ele.image.external_url} alt="">
                </div>
                <div class="txt">
                    <span>${ele.name}</span>
                </div>
            </a>
            `).join('')
        }
    })
}

document.querySelector('.left').addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.tagName === 'A') {
        render(e.target.dataset.id)
        document.querySelector('.left .active').classList.remove('active')
        e.target.classList.add('active')
    }
})