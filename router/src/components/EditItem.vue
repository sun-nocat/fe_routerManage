<template>
    <div>
        <h2>信息修改</h2>

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
                <FormItem label="ip" prop="ip">
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
                <FormItem label="主机密码" prop="host_password">
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
                    <Button type="primary" @click="handleSubmit('formValidate')">提交
                        <BackTop></BackTop>
                    </Button>
                    <Button type="primary" @click="back">返回
                        <BackTop></BackTop>
                    </Button>

                </FormItem>
            </Form>
        </template>

    </div>

</template>
<script>
export default {
    // props:[
    //   "msg" //接收父子间的数据
    // ],
    props: {
        msg: Object
    },
    data() {
        return {
            num: 0,

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
                cpu: 1,
                momory: 1,
                storage: 1,
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
                //表单验证
                ip: [
                    { required: true, message: "此项不能为空", trigger: "blur" }
                ],

                vlan: [
                    { required: true, message: "此项不能为空", trigger: "blur" }
                ],
                name: [
                    { required: true, message: "此项不能为空", trigger: "blur" }
                ],
                thing: [
                    { required: true, message: "此项不能为空", trigger: "blur" }
                ],
                domain: [
                    {
                        required: false,
                        type: "string",
                        message: "请输入域名",
                        trigger: "change"
                    }
                ],
                person_name: [
                    {
                        required: true,
                        message: "填写负责人的姓名",
                        trigger: "blur"
                    }
                ],
                person_tel: [
                    {
                        required: true,
                        message: "填写负责人的电话",
                        trigger: "blur"
                    }
                ],
                system_type: [
                    {
                        required: true,
                        message: "选择系统类型 ",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    created() {
        //子组件向父组件传递信息
        this.$emit("viewIn", "修改");
        //将之前表单的内容填写填写进去
        this.formValidate.vlan = this.msg.vlan;
        this.formValidate.ip = this.msg.host;
        this.formValidate.name = this.msg.name;
        this.formValidate.thing = this.msg.thing;
        this.formValidate.domain = this.msg.domain;
        this.formValidate.person_name = this.msg.person_name;
        this.formValidate.person_tel = this.msg.person_tel;
        this.formValidate.admin_name = this.msg.admin_name;
        this.formValidate.admin_tel = this.msg.admin_tel;
        this.formValidate.system_type = this.msg.system_type;
        this.formValidate.cpu = this.msg.cpu;
        this.formValidate.momory = this.msg.momory;
        this.formValidate.storage = this.msg.storage;
        this.formValidate.assistance = this.msg.assistance;
        this.formValidate.ssh = this.msg.ssh;
        this.formValidate.telnet = this.msg.telnet;
        this.formValidate.host_user = this.msg.host_user;
        this.formValidate.host_password = this.msg.host_password;
        this.formValidate.host_manage_type = this.msg.host_manage_type;
        this.formValidate.sql_type = this.msg.sql_type;
        this.formValidate.is_post = this.msg.is_post;
        this.formValidate.post = this.msg.post;
        this.formValidate.remark = this.msg.remark;
        this.formValidate.colony = this.msg.colony;
    },
    methods: {
        back: function() {
            window.history.back(-1);
        },
        confirm() {
            this.$Modal.confirm({
                title: "确认",
                content: "<p>请确认您的信息</p><p>点击确认将更新数据</p>",
                onOk: () => {
                    this.handleSub("formValidate"); //调用数据提交接口
                    // this.$router.push({name:'Home'}) //分配成功之后的跳转
                },
                onCancel: () => {
                    this.$Message.info("取消修改");
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
            //提交按钮的事件
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.confirm(); //调用·确认框
                } else {
                    this.$Message.error("必填项未填!");
                }
            });
        },

        handleSub(name) {
            //将数据提交发哦接口
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
                    parms.append(
                        "host_password",
                        _this.formValidate.host_password
                    );
                    parms.append(
                        "host_manage_type",
                        _this.formValidate.host_manage_type
                    );
                    parms.append("sql_type", _this.formValidate.sql_type);
                    parms.append("is_post", _this.formValidate.is_post);
                    parms.append("post", _this.formValidate.post);
                    parms.append("remark", _this.formValidate.remark);
                    parms.append("colony", _this.formValidate.colony);

                    _this
                        .$http({
                            url: "/changeOneIp",
                            method: "post",
                            data: parms
                        })
                        .then(function(response) {
                            if (response.data.status == "1") {
                                _this.$Message.success("修改成功");
                                // _this.$router.push({name:''})

                                window.history.back(-1); //修改成功之后回退页面
                            } else if (response.data.status == "0") {
                                _this.$Message.success("修改失败");
                            }

                            console.log(response);
                        })
                        .catch(function(error) {
                            console.log(error);
                        });

                    // this.next = false; //按钮的转换
                } else {
                    this.$Message.error("必填项未填!");
                }
            });
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



