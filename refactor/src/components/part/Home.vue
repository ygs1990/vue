<template>
  <transition name="move" mode="out-in">
    <div class="warp">
      <div class="warpchi">
        <!--页面头部-->
        <div class="logo-header">
          <v-header></v-header>
        </div>

        <!--页面侧边栏-->
        <div class="side warpchi">
          <sideBar></sideBar>
        </div>

        <!--页面主体-->
        <div class="container">
          <div class="main-header">
            <div class="crumbs">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>

          <div class="main">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
          </div>
        </div>

        <!--页面尾部-->
        <div  class="foot">
          <v-foot></v-foot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import vHeader from '@/components/part/Header'
  import sideBar from '@/components/part/SideBar'
  import vFoot from '@/components/part/Foot'
  import ElRow from "element-ui/packages/row/src/row";
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default {
    name: 'main',
    components: {
      ElRow,
      vHeader, sideBar, vFoot
    },
    methods: {
      ...mapActions(['postRegInfo','postSideInfo']),
    },
    created() {
      this.postRegInfo();
      this.postSideInfo();
    }
  }
</script>

<style lang="less" scoped>
  .logo-header{
    height: 59px;
  }
  .side{
    position: absolute;
    top:59px;
    bottom: 0;
    z-index: 2;
    width:230px;
  }
  .container {
    position: relative;
    margin-left:230px;
  }
  .main-header {
    background-color: #f1f1f1;
    font-size: 13px;
    padding: 19px 30px;
  }
  .main{
    background: none repeat scroll 0 0 #fff;
    width: auto;
    margin:0 30px 30px;
    box-sizing: border-box;
  }
  .warp{
    height: 100%;
  }
</style>
