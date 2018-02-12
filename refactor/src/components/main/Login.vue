<template>
  <div>
    <div class="login-wrap">
      <div class="header">
        <div class="header-logo clearfix">
          <img class="fl" src="../../../static/image/top_logo.png" alt="">
        </div>
      </div>
      <div class="ms-warp clearfix">
        <div class="ms-img fl"></div>
        <div class="ms-login fr">
          <el-form ref="form" :model="ruleForm" :rules="rules" labelWidth="0">
            <el-form-item  prop="loginName">
              <el-input v-model="ruleForm.loginName" placeholder="请输入用户名" autofocus></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="googleToken">
              <el-input placeholder="请输入验证码" v-model="ruleForm.googleToken" @keyup.enter.native="submitForm('form')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="login-btn" @click="submitForm('form')">登录</el-button>
              <el-col class="tips" :span="24">Tips : 用户名和密码不能为空</el-col>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="foot">
      <v-foot></v-foot>
    </div>
  </div>
</template>

<script>
  import ApiService from '@/services/API-servies'
  import CryptoJS from 'crypto-js/core'
  import MD5 from 'crypto-js/md5'
  import vFoot from '../part/Foot'
  export default {
    data() {
      return {
        ruleForm: {
          loginName:'admin',
          password: 'admin123',
          googleToken: ''
        },
        rules: {
          loginName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        const self = this;
        self.$refs[formName].validate((valid) =>{
          if (valid) {
            this.$emit('login', formName);
            this.login();
            return true;
          }else {
            this.$message({
              showClose: true,
              message: '请输入账号和密码',
              type: 'warning',
              duration: 1500
            });
            return false
          }
        })
      },
      login() {
        ApiService.login.login({
          loginName: this.ruleForm.loginName,
          password: CryptoJS.MD5(CryptoJS.MD5(this.ruleForm.password).toString()+this.ruleForm.loginName).toString(),
          googleToken: this.ruleForm.googleToken
        }).then((res) => {
          if(res.code == 0) {
            localStorage.login = JSON.stringify(this.ruleForm);
            localStorage.sessionid = res.data;
            this.$message({
              showClose: true,
              message: '登陆成功',
              type: 'success',
              duration: 1500
            })
            this.$router.push("/home")
            //重定向
//          let path = this.$root.redirectPath;
//          path ? this.$router.push(path) : '';
//          //清空定向路径
//          path = '';
            //关闭登录弹窗
//          this.close();
          } else {
            this.$message.error(res.message);
          }

        })
      }
    },
    components:{
      vFoot
    }
  }
</script>

<style lang="less" scoped>
  .foot{
    background: #F5F5F5;
    color: #999;
  }
</style>
