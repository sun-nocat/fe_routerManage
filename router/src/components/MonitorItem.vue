<template>
    <div>
        <div id="myChart" style="width:1200px;height:600px;"></div>

    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {
        //在生成试图的时候调用
        this.getData();

        // this.drawLine();
    },

    methods: {
        //echarts画图函数
        drawLine: function(list_name,list_count0,list_count1) {





            //两条数据 以列表的形式展示
            var count1 = list_count1;
            var count0 = list_count0;
            var _this = this;
            _this.$echarts.init(document.getElementById("myChart")).setOption({
                title: {
                    text: "主机运行情况"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: [
                        "正在运行",
                        "未运行"

                    ]
                },
                grid: {
                    left: "5%",
                    right: "5%",
                    bottom: "0%",
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: list_name
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        name: "正在运行",
                        type: "line",
                        stack: "总量",
                        data: count1
                    },
                    {
                        name: "未运行",
                        type: "line",
                        stack: "总量",
                        data: count0
                    }
                ]
            });
        },
        //获取数据接口
        getData:function() {
            var _this = this
            _this.$http({
                url:"/getWorkData",
                method:"GET"
            }).then(function(response){
                console.log(response.data)
                if(response.data.status == '1'){ 
                    var list_name = [] //保存名称
                    var list_count1 = []
                    var list_count0 = []
                    console.log(response.data.data.length)
                    var datas = response.data.data
                    // console.log(datas[1])
                    for(var i=0; i<datas.length;i++){
                        list_name.push(datas[i].time)
                        list_count1.push(datas[i].count1)
                        list_count0.push(datas[i].count0)
                    }
                    console.log(list_name)
                    _this.drawLine(list_name,list_count1,list_count0)

                }

            }).catch(function(eror){

            })
        }
    }
};
</script>

<style>
</style>
