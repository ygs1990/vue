<template>
  <div>
    <el-row class="header clearfix">
      <span>
        <img src="../../../static/image/logo.png">
      </span>
      <el-col :span="4" class="fr usein">
        <el-dropdown  @command="handleCommand" trigger="click">
          <div class="cursor">
            <img src="../../../static/image/portrait.png" alt="头像" class="portrait fl"/>
            <div class="fr">
              <p>欢迎您,</p>
              <p>{{loginName}}</p>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown" style="color: #48576a;font-size: 15px;" class="menu">
            <el-dropdown-item command="editPassword"><img src="../../../static/image/editPass.png"><span>修改密码</span></el-dropdown-item>
            <el-dropdown-item command="editAccount"><img src="../../../static/image/editAccount.png"><span>修改账户信息</span></el-dropdown-item>
            <el-dropdown-item command="logout"><img src="../../../static/image/logout.png"><span>退出系统</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'com-header',
    data() {
      return {
        name: 'ever'
      }
    },
    computed:{
      loginName(){
        let login = localStorage.getItem('login');
        let loginName = JSON.parse(login).loginName;
        return loginName ? loginName : this.name;
      }
    },
    methods: {
      handleCommand(command){
        if(command === 'logout'){
          localStorage.removeItem('login');
          localStorage.removeItem('sessionid');
          this.$router.push('/login');
        }else if(command === 'editPassword') {

        }else if(command ==='editAccount') {

        }
      }
    },
    created(){
    },

  }
</script>

<style lang="less" scoped>
  .header{
    position: fixed;
    width: 100%;
    z-index: 5;
    height: 59px;
    background: #5890C1;
    .usein{
      .portrait {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top:5px;
      }
      .fr{
        margin: 10px 0 0 6px;
        p{
          color: #fff;
        }
      }
    }
  }
  .menu img {
    margin-right: 10px;
  }
  .cursor{
    cursor:pointer;
  }
</style>
