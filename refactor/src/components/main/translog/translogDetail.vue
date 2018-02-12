<template>
  <div class="content">
      <el-row>
        <el-col :span="3">
          <el-button type="primary" class="btn" @click="onBack()">返回</el-button>
        </el-col>
      </el-row>
      <v-detail :formDtl="formDataDtl"></v-detail>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  import vDetail from './Detail'
  export default {
    data() {
      return {
        formDataDtl:{
        }
      }
    },
    mounted() {
      this.loadDetail();
    },
    methods:{
    	loadDetail(){
    		let self=this;
        let transId = self.$route.query.transId;
        ApiService.translog.recordDetail({id:transId}).then(res => {
          self.formDataDtl=res.data ;
          self.timeFormat(self.formDataDtl.txTime);
        });
      },
      timeFormat(time){
        let times=time,self = this;
        if (!times) {
          self.formDataDtl.txTime='';
        }else{
          self.formDataDtl.txTime=self.$moment(times).format("YYYY-MM-DD HH:mm:ss");
        }
      },
      onBack(){
        this.$router.push("/tx");
      }
    },
    components: {
      vDetail
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";

</style>

