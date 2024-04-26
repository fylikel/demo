const token = localStorage.getItem('user-token')
if (!token) location.href = './login.html'

window.addEventListener('DOMContentLoaded', async () => {
    const res = (await axios.get('/dashboard')).data.data
    console.log(res)
    for (let k in res.overview) {
        document.querySelector(`[name=${k}]`).innerHTML = res.overview[k]
    }

    initYearCharts(res.year)
    initClassCharts(res.salaryData)
    initGroupCharts(res.groupData)
    ininGenderCharts(res.salaryData)
    initMapChart(res.provinceData)

    document.querySelector('#btns').addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            document.querySelector('.btn-blue').classList.remove('btn-blue')
            e.target.classList.add('btn-blue')
            initGroupCharts(res.groupData, e.target.innerHTML)
        }
    })

})
function initYearCharts(year) {
    echarts.init(document.getElementById('line')).setOption({
        title: {
            text: '2023年全学科薪资走势',
            textStyle: {
                fontSize: 14,
            },
            top: 10,
            left: 10
        },
        xAxis: {
            type: 'category',
            // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
            data: year.map(ele => ele.month),
            // 修改x轴线的样式
            axisLine: {
                // 可以快速分辨是否是当前配置
                show: true,
                lineStyle: {
                    color: '#aaa',
                    type: 'dashed'
                }
            },
            // 修改x轴的刻度
            axisLabel: {
                show: true,
                color: '#333'
            }
        },
        // y轴
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        series: [
            {
                // data: [820, 932, 901, 934, 1290, 1330, 1320],
                data: year.map(ele => ele.salary),
                type: 'line',
                // 是否平滑
                smooth: true,
                symbolSize: 15,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'aqua' // 0% 处的颜色
                        }, {
                            offset: 0.8, color: 'beige' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#4a9aee' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#587bef' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    width: 10
                }
            }
        ]
    });
}
function initClassCharts(salary) {
    echarts.init(document.getElementById('salary')).setOption({
        title: {
            text: '班级薪资分布',
            textStyle: {
                fontSize: '14'
            },
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '5%',
            left: 'center'
        },
        color: ["#fda224", "#5097ff", "#3abcfa", "#34d39a"],
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '50%'],
                avoidLabelOverlap: true,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 5
                },
                label: {
                    show: false,
                    position: 'center'
                },
                // data: [
                //     { value: 1048, name: 'Search Engine' },
                //     { value: 735, name: 'Direct' },
                //     { value: 580, name: 'Email' },
                //     { value: 484, name: 'Union Ads' },
                // ],
                data: salary.map(ele => ({
                    name: ele.label,
                    value: ele.b_count + ele.g_count
                })
                )
            }
        ]
    })
}
function initGroupCharts(group, num = 1) {
    echarts.init(document.getElementById('lines')).setOption({
        xAxis: {
            type: 'category',
            data: group[num].map(ele => ele.name),
            // 修改x轴线的样式
            axisLine: {
                // 可以快速分辨是否是当前配置
                show: true,
                lineStyle: {
                    color: '#aaa',
                    type: 'dashed'
                }
            },
            // 修改x轴的刻度
            axisLabel: {
                show: true,
                color: '#333'
            }
        },
        // y轴
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        tooltip: {},
        grid: {
            left: '5%',
            right: '5%',
            top: '10%',
            bottom: '10%'
        },
        color: [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#3ed49f' // 0% 处的颜色
            }, {
                offset: 1, color: '#caf1e4'  // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#50a2ee' // 0% 处的颜色
            }, {
                offset: 1, color: '#d1e6fa' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }],
        series: [
            {
                name: '期望薪资',
                data: group[num].map(ele => ele.hope_salary),
                type: 'bar',
            },
            {
                name: '实际薪资',
                data: group[num].map(ele => ele.salary),
                type: 'bar',
            }
        ]
    })
}
function ininGenderCharts(gender) {
    echarts.init(document.getElementById('gender')).setOption({
        title: [{
            text: '男女薪资分布',
            textStyle: {
                fontSize: 14
            },
            left: 10,
            top: 10
        }, {
            text: '男生',
            textStyle: {
                fontSize: 14
            },
            left: 'center',
            top: '45%'
        }, {
            text: '女生',
            textStyle: {
                fontSize: 14
            },
            left: 'center',
            bottom: '5%'
        }],
        tooltip: {
            trigger: 'item'
        },
        color: ['#fda224', '#5097ff', '#3abcfa', '#34d39a'],
        series: [
            {
                name: '男生',
                type: 'pie',
                // 半径
                radius: ['15%', '25%'],
                // 圆心坐标
                center: ['50%', '25%'],
                // data: [
                //     { value: 1048, name: 'Search Engine' },
                //     { value: 735, name: 'Direct' },
                //     { value: 580, name: 'Email' },
                //     { value: 484, name: 'Union Ads' },
                // ]
                data: gender.map(ele => ({
                    name: ele.label,
                    value: ele.b_count
                }))
            },
            {
                name: '女生',
                type: 'pie',
                // 半径
                radius: ['15%', '25%'],
                // 圆心坐标
                center: ['50%', '70%'],
                // data: [
                //     { value: 1048, name: 'Search Engine' },
                //     { value: 735, name: 'Direct' },
                //     { value: 580, name: 'Email' },
                //     { value: 484, name: 'Union Ads' },
                // ]
                data: gender.map(ele => ({
                    name: ele.label,
                    value: ele.g_count
                }))
            }
        ]
    })
}
function initMapChart(province) {
    const myEchart = echarts.init(document.querySelector('#map'))
    const dataList = [
        { name: '南海诸岛', value: 0 },
        { name: '北京', value: 0 },
        { name: '天津', value: 0 },
        { name: '上海', value: 0 },
        { name: '重庆', value: 0 },
        { name: '河北', value: 0 },
        { name: '河南', value: 0 },
        { name: '云南', value: 0 },
        { name: '辽宁', value: 0 },
        { name: '黑龙江', value: 0 },
        { name: '湖南', value: 0 },
        { name: '安徽', value: 0 },
        { name: '山东', value: 0 },
        { name: '新疆', value: 0 },
        { name: '江苏', value: 0 },
        { name: '浙江', value: 0 },
        { name: '江西', value: 0 },
        { name: '湖北', value: 0 },
        { name: '广西', value: 0 },
        { name: '甘肃', value: 0 },
        { name: '山西', value: 0 },
        { name: '内蒙古', value: 0 },
        { name: '陕西', value: 0 },
        { name: '吉林', value: 0 },
        { name: '福建', value: 0 },
        { name: '贵州', value: 0 },
        { name: '广东', value: 0 },
        { name: '青海', value: 0 },
        { name: '西藏', value: 0 },
        { name: '四川', value: 0 },
        { name: '宁夏', value: 0 },
        { name: '海南', value: 0 },
        { name: '台湾', value: 0 },
        { name: '香港', value: 0 },
        { name: '澳门', value: 0 },
    ]
    dataList.forEach(item => {
        province.find(ele => ele.name.includes(item.name) ? item.value = ele.value : null)
    })
    let option = {
        title: {
            text: '籍贯分布',
            top: 10,
            left: 10,
            textStyle: {
                fontSize: 16,
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} 位学员',
            borderColor: 'transparent',
            backgroundColor: 'rgba(0,0,0,0.5)',
            textStyle: {
                color: '#fff',
            },
        },
        visualMap: {
            min: 0,
            max: 6,
            left: 'left',
            bottom: '20',
            text: ['6', '0'],
            inRange: {
                color: ['#ffffff', '#0075F0'],
            },
            show: true,
            left: 40,
        },
        geo: {
            map: 'china',
            roam: false,
            zoom: 1.0,
            label: {
                normal: {
                    show: true,
                    fontSize: '10',
                    color: 'rgba(0,0,0,0.7)',
                },
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    color: '#e0ffff',
                },
                emphasis: {
                    areaColor: '#34D39A',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        series: [
            {
                name: '籍贯分布',
                type: 'map',
                geoIndex: 0,
                data: dataList,
            },
        ],
    }
    myEchart.setOption(option)
}