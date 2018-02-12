<template>
  <div class="sidebar">
    <el-menu :default-active="getSide[1].secResourceList[1].key" class="el-menu-vertical-demo" unique-opened router>
      <template v-for="item in getSide">
      <el-submenu :index="item.key">
        <template slot="title"><img :src="item.name | addIcon" alt="图片加载异常">{{item.name}}</template>
        <el-menu-item v-for="(subItem,i) in item.secResourceList" :key="subItem.key" :index="subItem.key">{{subItem.name}}</el-menu-item>
      </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script type="text/ecmascript-6">
  import Filter from '@/filters/index'
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default {
    data() {
      return {

      }
    },
    computed:{
      ...mapGetters(['getSide'])
    },
    filters: {
      addIcon(val) {
      	switch(val) {
          case '系统管理':
          	return '../../../static/image/system.png';
            break;
          case '商户管理':
            return '../../../static/image/merchant.png';
            break;
          case '通道管理':
            return '../../../static/image/channel.png';
            break;
          case '交易管理':
            return '../../../static/image/tranction.png';
            break;
          case '批量代付管理':
            return '../../../static/image/batch.png';
            break;
          case '对账管理':
            return '../../../static/image/reconciliation.png';
            break;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.sidebar img {
  margin-right: 10px;
  vertical-align: -3px;
}
</style>
