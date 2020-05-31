<template>
  <div class="userItem">
    <Button type="primary" @click="modal1 = true" class="userItemBtn">添加用户</Button>
    <Alert show-icon>打开开关的账号在主机发生异常时收到邮件</Alert>
    <Table border :columns="columns7" :data="userlist"></Table>

    <Modal
      v-model="modal1"
      title="添加用户"
      @on-ok="handleSubmit('formValidate')"
      @on-cancel="handleReset('formValidate')"
    >
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="name">
          <Input v-model="formValidate.name" placeholder="输入需要注册的用户名"></Input>
        </FormItem>

        <FormItem label="密码" prop="password">
          <Input v-model="formValidate.password" type="password" placeholder="输入用户密码"></Input>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
          <Input v-model="formValidate.mail" placeholder="输入用户的qq邮箱"></Input>
        </FormItem>

        <!-- <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
          <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>-->
      </Form>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        password: "",
        mail: ""
      },
      modal1: false,
      columns7: [
        {
          title: "账号",
          key: "user_number"
        },
        {
          title: "邮箱地址",
          key: "user_mail"
        },
        {
          title: "邮件通知",
          key: "user_type",
          render: (h, params) => {
            let _this = this;
            return h("div", [
              h("i-switch", {
                props: {
                  type: "primary",
                  size: "large",
                  value: params.row.user_type,
                  "true-value": "1",
                  "false-value": "0"
                },
                scopedSlots: {
                  open: function() {
                    return h("span", "开启");
                  },
                  close: function() {
                    return h("span", "关闭");
                  }
                },
                on: {
                  "on-change": function(value) {
                    const { user_id } = params.row;
                    console.log(user_id);
                    console.log(value);
                    _this.userTypeChange({ user_id, value });
                  }
                }
              })
            ]);
          }
        },
        {
          title: "操作",
          key: "user_type",
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
      userlist: [],
      ruleValidate: {
        name: [
          {
            required: true,
            message: "用户名不为空",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "邮箱不为空",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "密码不为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var _this = this;
      _this
        .$http({
          url: "/user/list",
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
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          var _this = this;
          console.log("dj");
          var parm = new URLSearchParams();
          parm.append("name", _this.formValidate.name);
          parm.append("password", _this.formValidate.password);
          parm.append("mail", _this.formValidate.mail);
          this.$http({
            url: "/setUser",
            method: "post",
            data: parm
          })
            .then(function(response) {
              if (response.data.status == "1") {
                _this.$Message.success("创建成功！");
                _this.$refs[name].resetFields();
                _this.$emit("cancel");
                _this.getData();
              } else {
                _this.$Message.error("用户名重复！");
              }
            })
            .catch(function(error) {});
        } else {
          this.$Message.error("创建失败！");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    remove(index) {
      console.log(index);
      const { user_id } = index;
      const _this = this;
      this.$http
        .get("/user/del", {
          params: {
            user_id
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
            _this.$Message.success("修改成功！");

            _this.userlist = response.data.data;
          }
        })
        .catch(function(eror) {});
    }
  }
};
</script>


<style scoped>
.userItem {
  /* width: 450px;
  margin: 0 auto;
  margin-top: 82px;
  margin-left: 290px;
  text-decoration: none; */
}
.userItemBtn {
  margin: 20px auto;
}
</style>