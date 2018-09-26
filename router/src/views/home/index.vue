<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <template>
                <!-- <Button type="primary" @click="modal1 = true">Display dialog box</Button> -->
                <Modal v-model="modal1" title="是否开启后台监控" @on-ok="ok" @on-cancel="cancel">
                    <p>开启之后将持续监测主机运行状态</p>
                </Modal>
            </template>
            <!-- 顶部右侧导航 -->
            <Header>
                <Menu mode="horizontal" theme="dark">

                    <!-- 左上角的logo -->

                    <div class="layout-logo">
                        <img @click="logo_click" src="../../assets/xy_logo.png" alt="" style="margin-left:-56px;height:40px;width:184px;">
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                        <div v-show="icon">
                            <Icon type="ios-world"></Icon>监控中
                        </div>
                        <div v-show="icon1" @click="setup">
                            <Icon type="ios-world"></Icon>点击开启监控

                        </div>
                        </MenuItem>
                        <MenuItem name="2">
                        <a href="http://127.0.0.1:8000/excel/export" style="color:#ddd;">
                            <Icon type="ios-cloud-download-outline">
                            </Icon>下载
                        </a>
                        </MenuItem>

                        <MenuItem name="4">
                        <div @click="logout">
                            <Icon type="ios-cloud-download-outline">
                            </Icon>退出登录
                        </div>

                        </MenuItem>
                    </div>
                </Menu>
            </Header>

            <Layout>

                <!-- 中间左侧导航 -->
                <Sider hide-trigger :style="{background: '#fff'}">

                    <Menu @on-select="select" theme="light" width="auto" active-name="2-1" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                查看状态
                            </template>
                            <MenuItem name="1-1">Vlan621</MenuItem>
                            <MenuItem name="1-2">Vlan622</MenuItem>
                            <MenuItem name="1-3">Vlan623 </MenuItem>
                            <MenuItem name="1-4">Vlan624 </MenuItem>
                            <MenuItem name="1-5">Vlan625</MenuItem>
                            <MenuItem name="1-6">Vlan626</MenuItem>
                            <MenuItem name="1-7">Vlan627</MenuItem>
                            <MenuItem name="1-8">Vlan628</MenuItem>

                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
    <Icon type="ios-keypad"></Icon>
    分配ip
</template>
                            <MenuItem name="2-1">随机ip分配</MenuItem>
                            <MenuItem name="2-2">指定ip分配</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
    <Icon type="ios-analytics"></Icon>
    统计分析
</template>

                            <MenuItem name="3-1">主机运行情况</MenuItem>
                            <MenuItem name="3-2">警告</MenuItem>
                            <MenuItem name="3-3">添加用户</MenuItem>

                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">

                    <!-- 主要内容显示区域 -->
                    <Content :style="{padding: '24px', minHeight: '620px', background: '#fff'}">

                        <router-view style="text-decoration:none;" @viewIn="thing"></router-view>

                        <div v-show="ishome">

                            <h2>西安邮电大学虚拟主机记录及监控系统说明(v1.0)</h2>
                            <h4>一</h4>
                            <P>实时检测主机是否正常运行</P>
                            <p>对检测数据进行可视化处理</p>
                            <p>对数据的增删改查</p>
                            <p>自动产生可分配的ip，引导用户进行操作</p>
                            <p>Excel表格数据的导入和导出功能</p>
                            <p>用户登录,注册</p>
                            <P></P>
                        </div>

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>


<script>
// 使用顶部导航栏组件
// import HeaderItem from "../../components/HeaderItem";

// 使用步骤组件
import StepsItem from "../../components/StepsItem";
import UserItemVue from "../../components/UserItem.vue";
// import LeftItem from '../../components/LeftItem'

// 使用第一个主页的列表
// import FirstList from "../../components/FirstList";

export default {
    components: {
        // HeaderItem,
        StepsItem
        // FirstList
        // LeftItem
    },
    data() {
        return {
            step: false,
            fist_list: true,
            a: 0,
            modal1: false,
            ishome: true,
            icon: false, //监控图标
            icon1: false //开启监控的图标

            //   lala:['1'], //设置中间左侧的导航栏的开启和关闭
        };
    },
    created() {
        var _this = this;
        //初始化时获取数据
        // _this
        //     .$http({
        //         url: "http://127.0.0.1:8000/getAllData",
        //         method: "get",
        //         data: {}
        //     })
        //     .then(function(response) {
        //         var data = response.data;
        //         console.log(data);
        //     })
        //     .catch(function(error) {});

        //检测后台的检测是否在运行

        _this
            .$http({
                url: "/monitor",
                method: "get"
            })
            .then(function(response) {
                console.log(response);
                if (response.data.status == "0") {
                    //进程消失
                    _this.icon1 = true;
                } else if (response.data.status == "1") {
                    //进程未消失
                    _this.icon = true; //显示进程运行中的图标
                }
            })
            .catch(function(error) {});
    },
    methods: {
        setup: function() {
            //点击开启监控，打开对话框
            console.log("dd");
            this.modal1 = true;
        },
        ok() {
            //对话框确认
            this.icon1 = false;
            this.icon = true;
            this.$Message.info("开启监控");
            this.$http({
                url:'/start/ping',
                method:'get',
            }).then(function(response){

            }).catch(function(error){

            })
        },
        cancel() {
            //对话框取消
            this.$Message.info("开启监控失败");
        },
        logout: function() {
            var _this = this;
            this.$http({
                url: "/logout",
                method: "get"
            })
                .then(function(response) {
                    _this.$router.push({ name: "Login" });
                })
                .catch(function(error) {});
        },
        showSteps: function() {
            if (this.a == 0) {
                (this.step = true), (this.fist_list = false);
                this.a = 1;
                return 0;
            } else if (this.a == 1)
                (this.step = false), (this.fist_list = true);
            this.a = 0;
        },
        select: function(msg) {
            //用户点击左侧的选项栏的唯一标识
            var _this = this;
            console.log(msg);
            // console.log(msg[0])
            if (msg[0] == "1") {
                var vlan_id = msg[2];
                // console.log(vlan_id)
                var vv = "vlan62" + vlan_id;
                // console.log(vv)
                this.$router.push({
                    name: "MainItem621",
                    query: { vlans: vv }
                });
            } else if (msg[0] == "2") {
                if (msg[2] == "1") {
                    //随机分配ip
                    _this.ishome = false;
                    _this.$router.push({ name: "StepsItem", query: {} });
                } else if (msg[2] == "2") {
                    //指定分配ip
                }
            } else if (msg[0] == "3") {
                if (msg[2] == "2") {
                    //警告
                    _this.ishome = false;
                    _this.$router.push({
                        name: "ErrorItem",
                        query: { s: Date() }
                    });
                } else if (msg[2] == "3") {
                    _this.ishome = false;
                    _this.$router.push({
                        name: "UserItem",
                        query: { time: Date() }
                    });
                    //添加用户
                } else if (msg[2] == "1") {
                    _this.ishome = false;
                    _this.$router.push({
                        name: "MonitorItem",
                        query: { time: Date() }
                    });
                }
            }
        },
        num: function() {
            var time = String(Date.parse(new Date()));
            console.log(time);
            console.log(typeof time);
            return time;
        },
        thing: function() {
            console.log("触发");
            this.ishome = false;
        },
        logo_click: function() {
            console.log("点击标题触发");
            this.$router.push({ name: "Home" });
            this.ishome = true;
        }
    }
};
</script>

<style>
.div-conent {
    position: absolute;
    padding-top: 40px;
    top: 100px;
    left: 150px;
    width: 1186px;
    height: 400px;
    margin: 0 auto;
}
.main_btn {
    position: relative;
    display: block;
    padding-bottom: 3px;
}
.ivu-menu-dark {
    background: #3075ab;
}
.ivu-layout-header {
    background: #3075ab;
}
.ivu-layout-content {
    margin-top: 15px;
}
a {
    text-decoration: none;
    color: #333;
}
,
.logoss {
    width: 50px;
    height: 23px;
}
</style>

