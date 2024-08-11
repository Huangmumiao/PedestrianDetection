<template>
    <div class="LineChartsRenderContainer">
        <span class="titlePart">
            <a class="titleName">
                运 行 指 标
            </a>
        </span>
        <div class="CenterCube" id="coal_amount_trend_data"></div>
    </div>
</template>

<script setup>
import {ref,inject, reactive,onMounted} from 'vue';
const axios = inject('axios');
const edge_coal_amount_trend_curve = inject("echarts");

// 开环模型输出曲线
const rollData = reactive([])
// 图表
function get_coal_amount_trend_data(id, y_chart_axios, y_chart_data1, y_chart_data2, y_chart_data3, y_chart_data4) {
    let chartBox1 = edge_coal_amount_trend_curve.getInstanceByDom(document.getElementById(id));
    if (chartBox1== null) { // 如果不存在，就进行初始化。
        chartBox1= edge_coal_amount_trend_curve.init(document.getElementById(id));
        let option1 = {
            title: {
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend: {
            //     textStyle: {
            //         color: '!rgb(0, 0, 0)',
            //         fontFamily:'Microsoft YaHei',
            //         fontSize: 17,
            //     },
            //     left:'67%',
            //     top:'10%',
            // },
            grid:{
                left: '3%',
                right: '4%',
                top: "30%",
                bottom: '3%',
                containLabel: true,
                // 不显示轴线
            },
            xAxis: {
                type: 'category',
                splitLine: {
                    show:false
                },
                boundaryGap: false,
                axisLabel: {
                    /*inside: true,*/
                    interval:225,
                    // 横轴坐标颜色
                    color: 'rgb(200, 200, 200)',
                    fontFamily: 'Microsoft YaHei',
                    fontWeight: 'bold',
                    fontSize: 14
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    symbol:['none', 'arrow'],
                    symbolOffset: 12,
                    // 轴线颜色
                    lineStyle:{
                        color: 'rgb(200, 200, 200)',
                    }
                },
                data: y_chart_axios,
            },
            yAxis: {
                min: 600,
                max: 1300,
                type: "value",
                splitLine: {
                    show:false
                },
                axisLine: {
                    show: true,
                    symbol: ['none', 'arrow'],
                    symbolOffset: 12,
                    // x轴颜色
                    lineStyle:{
                        color: 'rgb(200, 200, 200)',
                    },
                },
                scale:true,
                // 纵坐标轴自适应
                axisTick: {
                    show: false
                },
                axisLabel: {
                        color: 'rgb(200, 200, 200)',
                        fontFamily:'Microsoft YaHei',
                        fontSize: 14
                },
                // y轴分隔线(横向)
                splitLine:{
                    lineStyle:{
                        color: "gray",
                        width: "2",
                        type: "dotted",
                },
            },
            },
            visualMap: {
                show: false,
                type: 'piecewise',
                seriesIndex:1,//控制series 对应的区域
                // pieces: [{
                //     gt: y_linechart_data1,
                //     color: 'green'
                // }, {
                //     gt: y_linechart_data1,
                //     lte: y_linechart_data2,
                //     color: '#ffff44'
                // },{
                //   lt:y_linechart_data2,
                //   color:'blue'
                // }
                // ]
            },
            series: [
                {
                    name: '给煤量实际值',
                    type: 'line',
                    yAxisIndex: 0,
                    data: y_chart_data1,
                    itemStyle: {
                            color: "#0efdff",//折线点的颜色#67c23A绿色
                            lineStyles: {
                                color: "#0efdff",//折线的颜色#0efdff蓝色
                                width:30,
                            }
                    }
                },
                {
                    // name: '给煤量目标值',
                    type: 'line',
                    yAxisIndex: 0,
                    data: [],
                    itemStyle: []
                },
                {
                    name: '给煤量目标值',
                    type: 'line',
                    yAxisIndex: 0,
                    data: y_chart_data2,
                    itemStyle: {
                            color: "#4169e1",//折线点的颜色
                            lineStyles: {
                                color: "#4169e1",//折线的颜色
                                width:2,
                            }
                    }
                },
                {
                    name: '给煤量上限',
                    type: 'line',
                    yAxisIndex: 0,
                    data:y_chart_data3,
                    itemStyle: {
                            color: "#FFE4E1",//折线点的颜色
                            lineStyles: {
                                color: "#FFE4E1",//折线的颜色
                                width:2,
                            }
                    }
                },
                {
                    name: '给煤量下限',
                    type: 'line',
                    yAxisIndex: 0,
                    data:y_chart_data4,
                    itemStyle: {
                            color: "#E6E6FA",//折线点的颜色
                            lineStyles: {
                                color: "#E6E6FA",//折线的颜色
                                width:2,
                            }
                    }
                },
            ]
        };
        chartBox1.setOption(option1);
    }
    else {
        let option1 = {
        xAxis: {
            data: y_chart_axios,
        },
        series: [
            {   
                data: y_chart_data1,
            },
            {
                data: [],
            },
            {
                data: y_chart_data2,
            },
            {
                data: y_chart_data3,
            },
            {
                data:y_chart_data4,
            },            
        ]
        };
        chartBox1.setOption(option1);
    }
    // 根据页面大小自动响应图表大小
    window.addEventListener("resize", function () {
        chartBox1.resize();
    });
};

// 获取初始数据
let openFinished = false
function initValues() {
    if (!openFinished) {
        openFinished = true;
        const api = "http://127.0.0.24:5000/edge_init_coal_amount_trend_curve";
        axios
            .get(api)
            .then((data) => {
                for (let i = 0; i < data.data.time.length; i++)
                {
                    let obj0 = {
                        y_open_axios:data.data.time[i],
                        y_open_data1:data.data.pv[i],
                        y_open_data2:data.data.sp[i],
                        y_open_data3:data.data.sp_up[i],
                        y_open_data4:data.data.sp_down[i],
                    }
                    rollData.push(obj0)
                    obj0 = null;
                }
                let y_chart_axios = [];
                let y_chart_data1 = [];
                let y_chart_data2 = [];
                let y_chart_data3 = [];
                let y_chart_data4 = [];

                for (let i = 0; i < rollData.length; i++) { 
                    y_chart_axios.push(rollData[i].y_open_axios);
                    y_chart_data1.push(rollData[i].y_open_data1);
                    y_chart_data2.push(rollData[i].y_open_data2);
                    y_chart_data3.push(rollData[i].y_open_data3);
                    y_chart_data4.push(rollData[i].y_open_data4);
                }
                get_coal_amount_trend_data("coal_amount_trend_data",y_chart_axios,y_chart_data1,y_chart_data2,y_chart_data3,y_chart_data4)
                // 修改标志位
                openFinished = false;
                y_chart_axios = null;
                y_chart_data1 = null;
                y_chart_data2 = null;
                y_chart_data3 = null;
                y_chart_data4 = null;
            }
            )
            .catch((err) => {
                console.log(err);
                // 修改标志位
                openFinished = false;
            }
            );
    }
}
// 新数据插入
function refreshValues() {
    if (!openFinished) {
        axios.post('http://127.0.0.24:5000/edge_refresh_coal_amount_trend_curve')
            .then((data) => {
            let obj={
                y_open_axios:data.data.time,
                y_open_data1:data.data.pv,
                y_open_data2:data.data.sp,
                y_open_data3:data.data.sp_up,
                y_open_data4:data.data.sp_down,
                }
                rollData.push(obj)
                rollData.splice(0, 1)
                obj = null;
                let y_chart_axios=[];
                let y_chart_data1=[];
                let y_chart_data2=[];
                let y_chart_data3=[];
                let y_chart_data4=[];
                for (let i = 0; i < rollData.length; i++) { 
                    y_chart_axios.push(rollData[i].y_open_axios);
                    y_chart_data1.push(rollData[i].y_open_data1);
                    y_chart_data2.push(rollData[i].y_open_data2);
                    y_chart_data3.push(rollData[i].y_open_data3);
                    y_chart_data4.push(rollData[i].y_open_data4);
                    }
                get_coal_amount_trend_data("coal_amount_trend_data",y_chart_axios,y_chart_data1,y_chart_data2,y_chart_data3,y_chart_data4)
                // 修改标志位
                openFinished = false;
                y_chart_axios = null;
                y_chart_data1 = null;
                y_chart_data2 = null;
                y_chart_data3 = null;
                y_chart_data4 = null;
            })
            .catch((err) => {
                console.log(err);           
                // 修改标志位
                openFinished = false;
            });
    }
}

onMounted(() => {
    initValues();
    var intervalID = setInterval(() => {
        refreshValues()
    }, 1000);
});
</script>
<style lang="scss" scoped>
.LineChartsRenderContainer {
    width: 95%;
    height: 92%;

    border-radius: 13px;

    z-index: 3;

    position: relative;
    left: 0px;
    bottom: 0;
    right: 0;
    top: 20px;
    margin: auto;

    .titlePart {
        width: 300px;
        position: absolute;
        background: url("../../../assets/images/filter-bg1.png");
        // background-repeat: repeat-x;
        background-size: 100% 100%;

        .titleName {
            position: relative;
            left: 20px;
            font-size: 18px;
            font-weight: bolder;
            color: aliceblue;
        }
    }

    .CenterCube {
        // background: pink;
        width: 102%;
        height: 100%;
        z-index: 100;
        margin-top: 5px;
        margin-left: -10px;
    }
}


</style>

<style>
.el-date-editor{
    background-color: RGB(0,0,23,0.8) !important;
    border-color:#1808f8;
    box-shadow: 1px 1px 5px 1px  RGB(128,255,255,0.8) inset;
    height: 30px;
}

</style>