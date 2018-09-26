<template>
<div>
        <Steps :current="num">
        <Step title="选择Vlan并生成ip" content="这里是该步骤的描述信息"></Step>
        <!-- <Step title="随机产生ip" content="这里是该步骤的描述信息"></Step> -->
        <Step title="必要信息填写" content="这里是该步骤的描述信息"></Step>
        <Step title="信息再次确认" content="这里是该步骤的描述信息"></Step>
        <Step title="分配完成" content="这里是该步骤的描述信息"></Step>
        </Steps>

        <!-- 主要部分的显示 -->
    
        <!-- 选择vlan部分 -->
        <div class="button_div" v-show="form_show">
                    <!-- <i-button type="info" @click="click_button(vlan)" v-for="(vlan,index) in vlanlist" >{{vlan}}</i-button> -->

            <!-- vlan的选择按钮 -->
                    <template>
                        <br>
                    
                        <RadioGroup v-model="value">
                                <Radio label='vlan621'  v-model="single">vlan621</Radio>
                                <Radio label='vlan622'  v-model="single">vlan622</Radio>
                                <Radio label='vlan623'  v-model="single">vlan623</Radio>
                                <Radio label='vlan624'  v-model="single">vlan624</Radio>
                                <Radio label='vlan625'  v-model="single">vlan625</Radio>
                                <Radio label='vlan626'  v-model="single">vlan626</Radio>
                                <Radio label='vlan627'  v-model="single">vlan627</Radio>
                                <Radio label='vlan628'  v-model="single">vlan628</Radio>
                            

                        </RadioGroup>
                    </template>
                    <br>
                    <div style="height:0px">
                        <Alert type="error" v-show="showmsg">{{msg}}</Alert> 
                    </div>
               
<br>
            <!-- 详细信息输入的表单 -->
                    <template class="ff">
                        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" style="width:550px;   margin: 0 auto;">
                                                     <br>
                        
                            <br>
                            <p>基本信息</p>
                            <br>
                            <FormItem label="vlan" prop="vlan" style="">
                                <Input v-model="formValidate.vlan" placeholder="请在上方选择对应的vlan" disabled></Input>
                            </FormItem>
                            <FormItem label="ip" prop="ip" >
                                <Input v-model="formValidate.ip" placeholder="随机生成未分配的ip" disabled></Input>
                            </FormItem>
                            <!-- name -->
                            <FormItem label="单位|组织" prop="name">
                                <Input v-model="formValidate.name" placeholder="输入单位|组织"></Input>
                            </FormItem>
                            <!-- thing -->
                            <FormItem label="用途" prop="thing">
                                <Input v-model="formValidate.thing" placeholder="输入主机用途"></Input>
                            </FormItem>
                            <!-- domain -->
                            <FormItem label="域名" prop="domain">
                                <Input v-model="formValidate.domain" placeholder="输入主机域名"></Input>
                            </FormItem>
                            <!-- person_name -->
                            <FormItem label="负责人" prop="person_name">
                                <Input v-model="formValidate.person_name" placeholder="输入负责人姓名"></Input>
                            </FormItem>
                            <!-- person_tel -->
                            <FormItem label="负责人联系电话" prop="person_tel">
                                <Input v-model="formValidate.person_tel" placeholder="输入负责人联系电话"></Input>
                            </FormItem>
                            <!-- admin_name -->
                            <FormItem label="管理员" prop="admin_name">
                                <Input v-model="formValidate.admin_name" placeholder="输入管理员姓名"></Input>
                            </FormItem>
                            <!-- admin_tel -->
                            <FormItem label="管理员联系电话" prop="admin_tel">
                                <Input v-model="formValidate.admin_tel" placeholder="输入管理员电话"></Input>
                            </FormItem>

                            <!-- system_type -->
                            <FormItem label="系统类型" prop="system_type">
                                <Select v-model="formValidate.system_type" placeholder="选择系统类型">
                                    <Option value="Asianux">Asianux</Option>
                                    <Option value="CentOS">CentOS</Option>
                                    <Option value="Debian">Debian</Option>
                                    <Option value="Oracle Linux">Oracle Linux</Option>
                                    <Option value="Red Hat">Red Hat</Option>
                                    <Option value="Fedora">Fedora</Option>
                                    <Option value="SUSE">SUSE</Option>
                                    <Option value="Ubuntu">Ubuntu</Option>
                                    <Option value="其他Linux">其他Linux</Option>
                                    <Option value="windows 10(32位)">windows 10(32位)</Option>
                                    <Option value="windows 10(64位)">windows 10(64位)</Option>
                                    <Option value="windows 2000">windows 2000</Option>
                                    <Option value="windows 2000 server">windows 2000 server</Option>
                                    <Option value="windows 7">windows 7</Option>
                                    <Option value="windows 8">windows 8</Option>
                                    <Option value="windows Server 2003">windows Server 2003</Option>
                                    <Option value="windows Server 2008">windows Server 2008</Option>
                                    <Option value="windows Server 2012">windows Server 2012</Option>
                                    <Option value="windows Server 2016">windows Server 2016</Option>
                                    <Option value="windows XP">windows XP</Option>
                                    <Option value="windows Vista">windows Vista</Option>
                                </Select>
                            </FormItem>
                            <br>
                            <p>硬件需求</p>
                            <br>
                            <!-- cpu -->
                            <FormItem label="Cpu" prop="cpu">
                                    <Input v-model="formValidate.cpu" placeholder="输入cup个数"></Input>

                            </FormItem>

                            <!-- momory -->
                            <FormItem label="内存" prop="momory">
                                <Input v-model="formValidate.momory" placeholder="输入内存大小"></Input>

                            </FormItem>
                            <!-- storage -->
                            <FormItem label="存储" prop="storage">
                                    <Input v-model="formValidate.storage" placeholder="输入存储大小"></Input>

                            </FormItem>

                            <br>
                            <p>开放管理端口</p>
                            <br>


                            <!-- assistance -->
                            <FormItem label="远程协助" prop="assistance">
                                <Input v-model="formValidate.assistance" placeholder="输入远程协助"></Input>
                            </FormItem>

                            <!-- ssh -->
                            <FormItem label="SSH" prop="ssh">
                                <Select v-model="formValidate.ssh" placeholder="选择SSH">
                                    <Option value="RDP_3389">RDP_3389</Option>
                                    <Option value="SSH_22">SSH_22</Option>
                                </Select>
                            </FormItem>   

                            <FormItem label="Telnet" prop="telnet">
                                <Input v-model="formValidate.telnet" placeholder="输入telnet"></Input>
                            </FormItem>

                            <br>
                            <p>其他</p>
                            <br>

                            <!-- host_user -->
                            <FormItem label="主机用户名" prop="host_user">
                                <Input v-model="formValidate.host_user" placeholder="输入主机用户名"></Input>
                            </FormItem>
                            <!-- host_password -->
                            <FormItem label="主机密码" prop="host_password" >
                                <Input v-model="formValidate.host_password" placeholder="输入主机密码" type="password"></Input>
                            </FormItem>

                            <!-- host_manage_type -->
                            <FormItem label="主机管理方式 托管|自营" prop="host_manage_type">
                                <Select v-model="formValidate.host_manage_type" placeholder="托管|自营">
                                    <Option value="托管">托管</Option>
                                    <Option value="自营">自营</Option>
                                </Select>
                            </FormItem>

                            <!-- sql_type -->
                            <FormItem label="数据库类型" prop="sql_type">
                                <Input v-model="formValidate.sql_type" placeholder="输入数据库类型"></Input>
                            </FormItem>

                            <!-- is_post -->
                            <FormItem label="能否开放接口" prop="is_post">
                                <Select v-model="formValidate.is_post" placeholder="是/否">
                                    <Option value="是">是</Option>
                                    <Option value="否">否</Option>
                                </Select>
                            </FormItem>

                            <!-- post -->
                            <FormItem label="外网开放端口" prop="post">
                                <Input v-model="formValidate.post" placeholder="输入外网开放的端口"></Input>
                            </FormItem>
                            <!-- colony -->
                            <FormItem label="集群" prop="colony">
                                <Input v-model="formValidate.colony" placeholder="输入集群"></Input>
                            </FormItem>
                              
                            <!-- remark -->
                            <FormItem label="备注" prop="remark">
                                <Input v-model="formValidate.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="填写备注"></Input>
                            </FormItem>
                            
                            <FormItem>
                                <Button v-show="next" type="primary"  @click="handleSubmit('formValidate')">下一步<BackTop></BackTop></Button>
                                <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                            </FormItem>
                        </Form>
                    </template>






        </div>



<!-- 提交表单完成之后的页面 -->
    <div v-show="list_show">

    <br>
    <h3>基本信息</h3>
    <Table :columns="columns1" :data="data1"></Table>
    <br>
    <h3>硬件需求</h3>
    <Table :columns="columns2" :data="data2"></Table>
    <br>
    <h3>开放端口管理</h3>
    <Table :columns="columns3" :data="data3"></Table>
    <br>
    <h3>其他</h3>
    <Table :columns="columns4" :data="data4"></Table>
    <div  style="text-align: center;">

    <Button style="margin : 0 auto;" v-show="sub" type="primary" @click="confirm" >提交<BackTop></BackTop></Button>

<Button style="margin : 0 auto;" v-show="sub" type="primary" @click="handleChange('formValidate')">更改<BackTop></BackTop></Button>

  
    </div>




    </div>




</div>

</template>
<script>
export default {
  data() {
    return {
      num: 0,
      vlanlist: [
        "vlan621",
        "vlan622",
        "vlan623",
        "vlan624",
        "vlan625",
        "vlan626",
        "vlan627",
        "vlan628"
      ],
      single: true,
      value: "", //选择需要分配的vlan
      ip: "", //选择分配的ip
      msg: "",
      showmsg: false,
      submit_btn: false,
      next: true, //下一步按钮
      sub: false, //提交按钮
      form_show: true,
      list_show: false,
      formValidate: {
        //共计22
        vlan: "",
        ip: "",
        name: "",
        thing: "",
        domain: "",
        person_name: "",
        person_tel: "",
        admin_name: "",
        admin_tel: "",
        system_type: "",
        cpu: '',
        momory: '',
        storage: '',
        assistance: "",
        ssh: "",
        telnet: "",
        host_user: "",
        host_password: "",
        host_manage_type: "",
        sql_type: "",
        is_post: "",
        post: "",
        remark: "",
        colony: ""
      },
      ruleValidate: {
        ip: [{ required: true, message: "此项不能为空", trigger: "blur" }],

        vlan: [{ required: true, message: "此项不能为空", trigger: "blur" }],
        name: [{ required: true, message: "此项不能为空", trigger: "blur" }],
        thing: [{ required: true, message: "此项不能为空", trigger: "blur" }],
        domain: [
          {
            required: false,
            type: "string",
            message: "请输入域名",
            trigger: "change"
          }
        ],
        person_name: [
          { required: true, message: "填写负责人的姓名", trigger: "blur" }
        ],
        person_tel: [
          { required: true, message: "填写负责人的电话", trigger: "blur" }
        ],
        system_type: [
          { required: true, message: "选择系统类型 ", trigger: "blur" }
        ]
      },
      columns1: [
        {
          title: "Vlan",
          key: "vlan"
        },
        {
          title: "IP",
          key: "ip"
        },
        {
          title: "单位|组织",
          key: "name"
        },
        {
          title: "用途",
          key: "thing"
        },
        {
          title: "域名",
          key: "domain"
        },
        {
          title: "负责人",
          key: "person_name"
        },
        {
          title: "负责人电话",
          key: "person_tel"
        },
        {
          title: "管理员",
          key: "admin_name"
        },
        {
          title: "管理员电话",
          key: "admin_tel"
        },
        {
          title: "系统类型",
          key: "system_type"
        }
      ],
      columns2: [
        //硬件需求
        {
          title: "Cpu",
          key: "cpu"
        },
        {
          title: "内存",
          key: "momory"
        },
        {
          title: "存储",
          key: "storage"
        }
      ],
      columns3: [
        //开放管理端口
        {
          title: "远程协助",
          key: "assistance"
        },
        {
          title: "SSH",
          key: "ssh"
        },
        {
          title: "Telnet",
          key: "telnet"
        }
      ],
      columns4: [
        //其他
        {
          title: "主机名",
          key: "host_user"
        },
        {
          title: "主机密码",
          key: "host_password"
        },
        {
          title: "主机管理方式",
          key: "host_manage_type"
        },
        {
          title: "数据库类型",
          key: "sql_type"
        },
        {
          title: "能否开放端口",
          key: "is_post"
        },
        {
          title: "外网开放端口",
          key: "post"
        },
        {
          title: "集群",
          key: "colony"
        },
        {
          title: "备注",
          key: "remark"
        }
      ],

      data1: [
        {
          vlan: "",
          ip: "",
          name: "",
          thing: "",
          domain: "",
          person_name: "",
          person_tel: "",
          admin_name: "",
          admin_tel: "",
          system_type: ""
        }
      ],

      data2: [
        {
          cpu: '',
          momory: "",
          storage: ""
        }
      ],
      
      data3: [
        {
          assistance: "",
          ssh: "",
          telnet: ""
        }
      ],
      data4: [
        {
          host_user: "",
          host_password: "",
          host_manage_type: "",
          sql_type: "",
          is_post: "",
          post: "",
          colony: "",
          remark: ""
        }
      ]
    };
  },
  methods: {
    confirm () {
                this.$Modal.confirm({
                    title: '确认',
                    content: '<p>点击确定将提交信息</p><p>点击取消将不会提交</p>',
                    onOk: () => {
                        this.handleSub('formValidate')
                        // this.$router.push({name:'Home'}) //分配成功之后的跳转
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
    change1: function() {
      this.num = 1;
    },
    click_button: function(index) {
      console.log(index);
      console.log(this);
    },

    handleSubmit(name) {
      //下一步按钮的事件
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("请认证核实信息!");
          this.num = 2;
          // this.next = false; //按钮的转换
          this.sub = true;


        // 基本信息表格内容展示
          this.data1[0].vlan = this.formValidate.vlan;
          this.data1[0].ip = this.formValidate.ip;
          this.data1[0].name = this.formValidate.name;
          this.data1[0].thing = this.formValidate.thing;
          this.data1[0].domain = this.formValidate.domain;
          this.data1[0].person_name = this.formValidate.person_name;
          this.data1[0].person_tel = this.formValidate.person_tel;
          this.data1[0].admin_name = this.formValidate.admin_name;
          this.data1[0].admin_tel = this.formValidate.admin_tel;
          this.data1[0].system_type = this.formValidate.system_type;

        // 硬件需求内容展示

        this.data2[0].cpu = this.formValidate.cpu;
        this.data2[0].momory = this.formValidate.momory;
        this.data2[0].storage =  this.formValidate.storage ;

        //开放

        this.data3[0].assistance = this.formValidate.assistance
        this.data3[0].ssh = this.formValidate.ssh
        this.data3[0].telnet = this.formValidate.telnet

        //其他

        this.data4[0].host_user = this.formValidate.host_user
        this.data4[0].host_password = this.formValidate.host_password
        this.data4[0].host_manage_type = this.formValidate.host_manage_type
        this.data4[0].sql_type = this.formValidate.sql_type
        this.data4[0].is_post = this.formValidate.is_post
        this.data4[0].post = this.formValidate.post
        this.data4[0].is_post = this.formValidate.is_post
        this.data4[0].colony = this.formValidate.colony
        this.data4[0].remark = this.formValidate.remark



        


          //切换页面内容
          this.form_show = false;
          this.list_show = true;
        } else {
          this.$Message.error("必填项未填!");
        }
      });
    },
    handleSub(name) {
      //提交按钮的事件
      var _this = this;
      this.$refs[name].validate(valid => {
        if (valid) {
          //这里写表单提交的代码

          //通过post传递的参数
          var parms = new URLSearchParams();
          parms.append("host", _this.formValidate.ip);
          parms.append("name", _this.formValidate.name);
          parms.append("thing", _this.formValidate.thing);
          parms.append("domain", _this.formValidate.domain);
          parms.append("person_name", _this.formValidate.person_name);
          parms.append("person_tel", _this.formValidate.person_tel);
          parms.append("admin_name", _this.formValidate.admin_name);
          parms.append("admin_tel", _this.formValidate.admin_tel);
          parms.append("system_type", _this.formValidate.system_type);
          parms.append("cpu", _this.formValidate.cpu);
          parms.append("momory", _this.formValidate.momory);
          parms.append("storage", _this.formValidate.storage);
          parms.append("assistance", _this.formValidate.assistance);
          parms.append("ssh", _this.formValidate.ssh);
          parms.append("telnet", _this.formValidate.telnet);
          parms.append("host_user", _this.formValidate.host_user);
          parms.append("host_password", _this.formValidate.host_password);
          parms.append("host_manage_type", _this.formValidate.host_manage_type);
          parms.append("sql_type", _this.formValidate.sql_type);
          parms.append("is_post", _this.formValidate.is_post);
          parms.append("post", _this.formValidate.post);
          parms.append("remark", _this.formValidate.remark);
          parms.append("colony", _this.formValidate.colony);

          _this
            .$http({
              url: "/setOneIp",
              method: "post",
              data: parms
            })
            .then(function(response) {
              if (response.data.status == "1") {
                _this.$Message.success("ip分配成功");
                _this.num = 3;
                _this.form_show = false;
                _this.list_show = true;
              } else if (response.data.status == "0") {
                _this.$Message.success("ip分配失败，请重新选择ip进行分配");
              }

              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });

          this.num = 2;
          // this.next = false; //按钮的转换
          this.sub = true;
        } else {
          this.$Message.error("必填项未填!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    handleChange(name) {
      //点击更改按钮
      var _this = this
      this.$refs[name].validate(valid => {
        if (valid) {
          _this.list_show = false
          _this.form_show = true

        } else {
          this.$Message.error('');
        }
      });

    }
  },

  watch: {
    value: function() {
      //在用户选择vlan的时候触发---请求一个随机的ip
      console.log("变化");
      var _this = this;
      _this
        .$http({
          url: "/getOneIp",
          method: "get",
          params: {
            vlan: _this.value
          }
        })
        .then(function(response) {
          {
            //请求成功的回调
            console.log(response);
            var data = response.data;
            if (data.status == "0") {
              //不可以分配
              console.log(data.msg);
              _this.msg = data.msg;
              _this.showmsg = true;
            } else if (data.status == "1") {
              //可以分配
              console.log(data.msg);
              _this.ip = data.data;
              //   _this.msg = ''
              _this.num = 1;
              _this.showmsg = false;
              //将vlan和ip信息直接显示在页面上
              _this.formValidate.vlan = _this.value;
              _this.formValidate.ip = data.data;
            }
          }
        })
        .catch(function(error) {});
    },

    //提示信息发生变化的时候
    msg: function() {
      showmsg: true;
    }
  }
};
</script>


<style>
.button_div {
  text-align: center;
}
.ivu-btn-info {
  margin: 13px;
}
</style>



