
<template>
  <div class="mailList">
    <Button type="primary" @click="value3 = true" class="userItemBtn">添加白名单</Button>
    <Alert show-icon>添加为白名单之后，将不再发送此主机的邮件</Alert>
    <Table border :columns="columns7" :data="userlist"></Table>

    <Drawer title="主机邮件通知白名单" v-model="value3" width="720" :mask-closable="false" :styles="styles">
      <Form ref="formData" :model="formData" :rules="ruleValidate">
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="ip" prop="host" label-position="top">
              <Input v-model="formData.host" placeholder="请输入白名单地址" />
            </FormItem>
          </Col>
        </Row>
        <FormItem label="备注" prop="des" label-position="top">
          <Input type="textarea" v-model="formData.des" :rows="4" placeholder="请输入加入白名单的原因" />
        </FormItem>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="value3 = false">返回</Button>
        <Button type="primary" @click="handleSubmit('formData')">提交</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
import myVue from "./../main";
export default {
  data() {
    return {
      ruleValidate: {
        host: [
          {
            required: true,
            message: "ip地址不为空",
            trigger: "blur"
          }
        ],
        des: [
          {
            required: true,
            message: "描述不为空",
            trigger: "blur"
          }
        ]
      },
      value3: false,
      styles: {
        height: "calc(100% - 55px)",
        overflow: "auto",
        paddingBottom: "53px",
        position: "static"
      },
      formData: {
        host: "",
        des: ""
      },
      columns7: [
        {
          title: "ip",
          key: "host"
        },
        {
          title: "备注",
          key: "des"
        },
        {
          title: "操作",
          width: 150,
          align: "center",
          render: (h, params) => {
            let _this = this;
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      userlist: []
    };
  },
  created() {
    var _this = this;
    this.getData();
  },
  mounted() {
    //在生成试图的时候调用
    // this.getData();
    // this.drawLine();
  },

  methods: {
    handleSubmit(name) {
      console.log(name);
      const _this = this;

      this.$refs[name].validate(valid => {
        if (valid) {
          console.log("jiaoyan");
          var parm = new URLSearchParams();
          parm.append("host", _this.formData.host);
          parm.append("des", _this.formData.des);

          myVue
            .$http({
              url: "/ip/add",
              method: "post",
              data: parm
            })
            .then(function(response) {
              console.log(response);
              if (response.data.status == true) {
                _this.$Message.success("创建成功！");
                _this.$refs[name].resetFields();
                _this.getData();
                _this.value3 = false;
              } else {
                _this.$Message.error("创建失败！");
              }
            })
            .catch(function(error) {});
        } else {
          this.$Message.error("创建失败！");
        }
      });
    },
    remove(index) {
      console.log(index);
      const { ip_id } = index;
      const _this = this;
      this.$http
        .get("/ip/del", {
          params: {
            ip_id
          }
        })
        .then(function(response) {
          console.log(response.data);

          if (response.data.status == true) {
            _this.getData();
            _this.$Message.success("删除成功！");
          }
        })
        .catch(function(eror) {
          _this.$Message.error("删除失败！");
        });
    },
    //echarts画图函数
    drawLine: function(list_name, list_count0, list_count1) {
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
          data: ["正在运行", "未运行"]
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
    getData: function() {
      var _this = this;
      _this
        .$http({
          url: "/ip/info",
          method: "GET"
        })
        .then(function(response) {
          console.log(response.data);

          if (response.data.status == true) {
            _this.userlist = response.data.data;
          }
        })
        .catch(function(eror) {});
    },

    userTypeChange: payload => {
      console.log("payload", payload);
      var _this = this;

      myVue.$http
        .get("/user/typechange", {
          params: payload
        })
        .then(function(response) {
          console.log(response.data);

          if (response.data.status == true) {
            _this.userlist = response.data.data;
          }
        })
        .catch(function(eror) {});
    }
  }
};
</script>

<style scoped>
.mailList {
  /* margin-top: 25px; */
}
.userItemBtn {
  margin: 20px auto;
}
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
</style>