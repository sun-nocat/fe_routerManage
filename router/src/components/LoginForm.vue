<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline">
    <FormItem prop="user">
      <Input type="text" v-model="formInline.user" placeholder="账号"></Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="formInline.password" placeholder="密码"></Input>
    </FormItem>
    <FormItem class="submit-button">
      <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
    </FormItem>
  </Form>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },

      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
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

          console.log("点击");

          var parm = new URLSearchParams();
          parm.append("user_number", _this.formInline.user);
          parm.append("user_password", _this.formInline.password);

          _this
            .$http({
              url: "/login",
              method: "post",
              data: parm
            })
            .then(function(response) {
              console.log("收到服务器回复");
              var data = response.data;
              if (data.status == "1") {
                _this.$Message.success("登录成功!");
                //    window.location.href = '/home'
                _this.$router.push("/home");
              } else {
                _this.$Message.error("登录失败！");
              }
            })
            .catch(function(error) {
              console.log("失败");
            });
        } else {
        }
      });
    }
  }
};
</script >

<style scoped>
.submit-button {
  text-align: center;
}
</style>