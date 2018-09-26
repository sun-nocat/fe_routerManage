<template>
  <div style="width: 550px;text-decoration: none;margin: auto;">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="用户名" prop="name">
        <Input v-model="formValidate.name" placeholder="输入需要注册的用户名"></Input>
      </FormItem>

      <FormItem label="密码" prop="password">
        <Input v-model="formValidate.password" placeholder="输入用户密码"></Input>
      </FormItem>
      <FormItem label="邮箱" prop="mail">
        <Input v-model="formValidate.mail" placeholder="输入用户的qq邮箱"></Input>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
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
  methods: {
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
              console.log(response);

              if (response.data.status == "1") {
                _this.$Message.success("Success!");
                _this.$refs[name].resetFields();
              } else {
                _this.$Message.error("用户名重复");
              }
            })
            .catch(function(error) {});
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
