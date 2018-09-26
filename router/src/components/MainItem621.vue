<template>
    <Tabs value="name1">
        <TabPane label="主机分配情况" name="name1" style="display:inline">
            <!-- //echarts的html部分 -->
            <div id="myChart" style="width:600px;height:400px;"></div>

            <!-- 主页面右侧的数据说明 -->
            <div style="visibility: visible;position: absolute;width: 500px;top: 100px;left: 570px;height: 400px;">
                <Row style="background:#eee;padding:20px">
                    <Col span="11" style="text-align: center;">
                        <Card :bordered="false" >

                            <p slot="title">{{vlan.vlan1}} </p>
                            <p>正在使用的ip地址</p>

                        </Card>
                    </Col>
                    <Col span="11" offset="2" style="text-align: center;">
                        <Card shadow>
                            <p slot="title">{{vlan.vlan0}}</p>
                            <p>未使用的ip地址</p>

                        </Card>
                    </Col>
                </Row>
            </div>

        </TabPane>
        <TabPane label="主机运行状态" name="name2">
        <div id="myChart2" style="width:600px;height:400px;"></div>

<div style="
    position: absolute;
    top: 25px;
    /* left: 20px; */
    margin-left: 110px;
">
            <!-- 主页面右侧的数据说明 -->
            <div style="visibility: visible;position: absolute;width: 500px;top: 100px;left: 610px;height: 400px;">
                <Row style="background:#eee;padding:20px">
                    <Col span="11" style="text-align: center;">
                        <Card :bordered="false" >

                            <p slot="title">{{ip[0]}} </p>
                            <p>当前正在运行的主机</p>

                        </Card>
                    </Col>
                    <Col span="11" offset="2" style="text-align: center;">
                        <Card shadow>
                            <p slot="title">{{ip[1]}}</p>
                            <p>当前未运行的主机</p>

                        </Card>
                    </Col>
                </Row>
            </div>


</div>
        </TabPane>
        <TabPane label="主机详细信息" name="name3">
                <Table width="1200" height="500" border :columns="columns2" :data="data4" v-show="show_table" ></Table>
                    <router-view style="text-decoration:none;" :msg='change_data' @viewIn="thing"></router-view>
      <Modal
        v-model="modal6"
        title="Title"
        :loading="loading"
        @on-ok="asyncOK">
        <p>确定清空此条记录吗？</p></br><p>清空之后不可恢复</p>
    </Modal>


        </TabPane>
        
    </Tabs>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      vlan_id: "",
      all_data: "",
      ip: "",
      vlan: "",
      all_data: "",
      draw2_data: "",
      draw2_value: "",
      show_table: "true", //主机详情页的表格的显示
      change_data: "", //用户点击修改时，向子组件传递的数据
      modal6: false,
      loading: true,
      data4: [],
      n_data: "",
      del_host: "", //保存要删除数据的ip号码

      columns2: [
        {
          title: "IP",
          key: "host",
          width: 120,
          fixed: "left"
        },
        {
          title: "单位|组织",
          key: "name",
          width: 150
        },
        {
          title: "用途",
          key: "thing",
          width: 118
        },

        {
          title: "负责人",
          key: "person_name",
          width: 100
        },
        {
          title: "负责人联系电话",
          key: "person_tel",
          width: 125
        },
        {
          title: "最近修改时间",
          key: "times",
          width: 150
        },
        {
          title: "延迟(ms)",
          key: "ms",
          width: 100
        },
        {
          title: "是否运行(1-运行 0-未运行)",
          key: "status",
          width: 125
        },
        {
          title: "集群",
          key: "colony",
          width: 100
        },
        {
          title: "备注",
          key: "remark",
          width: 100
        },
        {
          title: "管理员",
          key: "admin_name",
          width: 100
        },
        {
          title: "管理员联系电话",
          key: "admin_tel",
          width: 100
        },
        {
          title: "系统类型",
          key: "system_type",
          width: 100
        },
          {
          title: "域名",
          key: "domain",
          width: 100
        },      
        {
          title: "CPU",
          key: "cpu",
          width: 100
        },
        {
          title: "内存",
          key: "momory",
          width: 100
        },
        {
          title: "存储",
          key: "storage",
          width: 100
        },
        {
          title: "远程协助",
          key: "assistance",
          width: 100
        },
        {
          title: "SSH",
          key: "ssh",
          width: 100
        },
        {
          title: "Telnet",
          key: "telnet",
          width: 100
        },
        {
          title: "主机用户名",
          key: "host_user",
          width: 100
        },
        {
          title: "主机管理方式",
          key: "host_manage_type",
          width: 100
        },
        {
          title: "数据库类型",
          key: "sql_type",
          width: 100
        },
        {
          title: "能否开放接口",
          key: "is_post",
          width: 100
        },
        {
          title: "外网开放端口",
          key: "post",
          width: 100
        },


        {
          title: "当前是否运行",
          key: "当前是否运行",
          fixed: "right",
          width: 120,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },

                  on: {
                    click: () => {
                      this.change(params.row, params.index); //点击之后 传递参数  params.row是这一行的所有数据，  params.index是这一行的一个索引
                    }
                  }
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.row, params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ]
    };
  },
  created() {},

  mounted() {
    //在生成视图的时候进行调用
    this.vlan_id = this.$route.query.vlans;

    //向后端发送请求  用来获取数据
    var _this = this;
    this.getdata(this.vlan_id); //调用获取数据的函数
    console.log("mounted函数-----");
    console.log(_this.vlan);
    console.log(_this.ip);
    this.drawLine(); //调用使用echarts画图的函数
    this.drawLine2();
  },
  watch: {
    $route: function() {
      //路由发生变化的时候触发
      this.vlan_id = this.$route.query.vlans; //胡获取vlan
      this.show_table = true;

      //在调用自己组件中的函数的时候，一定要加上 this
      if (this.vlan_id) {
        this.getdata(this.vlan_id);
        console.log(this.vlan); //数据慢一拍
        this.drawLine();
        this.drawLine2();
      }
    }
  },

  methods: {
    thing: function() {
      //路由跳转之后执行
      console.log("路由跳转之后触发");
      this.show_table = false;
    },

    change: function(params, index) {
      //表格点击修改
      console.log(params);
      console.log(index);
      var _this = this;
      _this.change_data = params;
      _this.$router.push({ name: "EditItem" });
    },
    remove: function(params, index) {
      //表格点击删除
      console.log(params.host); //获取点击的数据项的ip地址
      this.del_host = params.host;
      console.log(index);
      this.modal6 = true; //进行弹窗，让用户选择是否删除
    },

    asyncOK: function() {
      var _this = this;
      //这里写删除数据的接口代码
      if (this.del_host) {
        //如果要删除的数据存在的话

        var parms = new URLSearchParams();
        parms.append("host", _this.del_host);
        _this
          .$http({
            url: "/delHost",
            method: "post",
            data: parms
          })
          .then(function(response) {
            console.log(response);
            _this.getdata(_this.vlan_id)
          })
          .catch(function(error) {});
      }

      setTimeout(() => {
        this.modal6 = false;
      }, 200);
    },

    getdata: function getdata(vlan_id) {
      //从后台获取数据

      var _this = this;

      _this.$emit("viewIn");
      //使用jquery改写

      // 坑--之前使用axios异步那数据，每次拿到的实际数据并不是自己想要的数据，最后只能通过使用jquery来拿数据
      $.ajax({
        url: "/getAllDataByVlanId",
        type: "GET",
        async: false, //必须同步拿数据
        data: {
          vlan: _this.vlan_id
        },
        success: function(data) {
          //数据回调地址

          _this.$data.data4 = data.data.all_data; //使用这个方法改变数组的值
          // for(var i=0; i<data.data.all_data.length;i++){
          //         _this.data4.push(data.data.all_data[i])

          // }

          _this.ip = data.data.ip;
          _this.vlan = data.data.vlan;
          _this.datas = data.data.all_data;
          _this.addData(data.data.all_data); //将数据作为参数传递给addData函数
        },
        error: function() {}
      });
    },
    addData: function(data) {
      //将请求的数据渲染进echarts中
      var _this = this;
      console.log(data);

      var draw2_data = []; //用来保存每一个列的名称
      var draw2_value = []; //用来保存每一个列的具体数据
      for (var i = 0; i < data.length; i++) {
        draw2_data.push(data[i].host); //将表行信息保存在数组中
        draw2_value.push(parseInt(data[i].ms));
      }
      _this.draw2_data = draw2_data; //将数据保存在vue中
      _this.draw2_value = draw2_value;
    },
    drawLine: function() {
      var _this = this;
      console.log("画图函数中-------");
      console.log(this.vlan); //数据慢一拍
      //调用echarts的js部分
      this.$echarts.init(document.getElementById("myChart")).setOption({
        title: {
          text: _this.vlan_id+"主机分配情况",
          // subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["已分配ip", "剩余可分配ip"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            data: [
              { value: _this.vlan.vlan0, name: "剩余可分配ip" },
              { value: _this.vlan.vlan1, name: "已分配ip" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba (0,0,0,0.5)"
              }
            },
            color: ["#7171C6", "#CD3700"]
          }
        ]
      });
    },

    drawLine2: function() {
      //第二个图表的位置--------
      var _this = this;

      _this.$echarts.init(document.getElementById("myChart2")).setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "5%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",

            data: _this.draw2_data,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "延迟/ms"
          }
        ],
        series: [
          {
            name: "网络延迟",
            type: "bar",
            barWidth: "80%",
            data: _this.draw2_value
          }
        ]
      });
    }
  }
};
</script>
