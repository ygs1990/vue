<template>
  <div class="content">
    <el-row>
      <el-col>
        <el-button type="primary" @click="onCance()">取消</el-button>
      </el-col>
    </el-row>
    <div>
      <el-form label-width="140px" ref="formData1">
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="调额编号：" >
              <el-col :span="20">
                <el-input v-model="formData1.id" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="商户编号：" >
              <el-col :span="20">
                <el-input v-model="formData1.mchntCode" :disabled="true" ></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="商户名称：" >
              <el-col :span="20">
                <el-input v-model="formData1.mchntName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="通道机构名称：" >
              <el-col :span="20">
                <el-input v-model="formData1.insName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="调额类型：" >
              <el-col :span="20">
                <el-input v-model="formData1.adjustDirectName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="额度类型：" >
              <el-col :span="20">
                <el-input v-model="formData1.settledTypeName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="调整金额：" >
              <el-col :span="20">
                <el-input v-model="formData1.adjustAmounts"  :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="调额状态：" >
              <el-col :span="20">
                <el-input v-model="formData1.adjustStatusName"  :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="调整原因：" >
              <el-col :span="20">
                <el-input v-model="formData1.adjustReasonName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="创建人：" >
              <el-col :span="20">
                <el-input v-model="formData1.submiter" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="复核人：" >
              <el-col :span="20">
                <el-input v-model="formData1.checker" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="复核时间：" >
              <el-col :span="20">
                <el-input v-model="formData1.reviewTime" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    data() {
      return {
        formData1:{
        }
      }
    },
    created() {
    	let self=this;
      let idVal=self.$route.query.id;
      ApiService.mchntAccountTmp.mchntAccountTmpDetail({id:idVal}).then(res => {
        self.formData1={};
        if(res.data){
          self.formData1=res.data;
          if(self.formData1.reviewTime){
            self.formData1.reviewTime=self.$moment(self.formData1.reviewTime).format("YYYY-MM-DD HH:mm:ss");
          }
        }
      });
    },
    methods: {
      onCance(){
      	this.$router.push('/accountAdjust');
      }
    },
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
</style>

