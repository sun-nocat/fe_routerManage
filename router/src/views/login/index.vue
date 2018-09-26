<template>
    <div class="login-box">
        <img src="../../assets/login.png" alt="" class="img1">
        <div class="title">
            <h1>西安邮电大学虚拟主机分配系统</h1>
        </div>
        <form action="" class="form-login">
            <div>
                <login-form>
                       
                </login-form>
            </div>
        </form>
        <div class="logo-right">
            <img src="../../assets/logo.png" alt="">
        </div>
    </div>
</template>


<script>
import LoginForm from '../../components/LoginForm'

export default {



    components:{
        LoginForm
    }
}
</script>





<style scoped>

/* 设置背景颜色的方法 */
.login-box{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color:#3075ab;
}
    
    .img1{
        height: 500px;
        margin-left: 0%;
    }
    .img2{
        position: absolute;
        height: 20px;
        width: 20px;
    }
    .form-login{
        /* background-color: red; */
        position: absolute;
        top: 40%;
        left: 9%;
    }
    .title{
        position: absolute;
        top: 9%;
        left: 6%;


    }
        .logo-right{
            position: absolute;
            top: 32%;
            left: 30%;


        }

    

</style>