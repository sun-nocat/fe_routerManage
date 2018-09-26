<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
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
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 4,
            message: "The password length cannot be less than 6 bits",
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
              console.log(response);
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

<style >
</style>