<template>
  <div class="content">
    <div><p>配置详情</p></div>
    <el-form label-width="140px" >
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="配置名称：" >
            <el-col :span="20">
              <el-input v-model="formData1.modelName" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账文件获取：" >
            <el-col :span="20">
              <el-input v-model="formData1.ftpTypeName" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="通道：">
            <el-col :span="20">
              <el-input v-model="formData1.channelCodeName"  :disabled="true" ></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="通道机构：" >
            <el-col :span="20">
              <el-input v-model="formData1.insCodeName"  :disabled="true"  ></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="用户名：">
            <el-col :span="20">
              <el-input v-model="formData1.ftpAccount" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="密码：">
            <el-col :span="20">
              <el-input v-model="formData1.ftpPwd" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账时间：" >
            <el-col :span="20">
              <el-input v-model="formData1.checkTime" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账周期：" >
            <el-col :span="20">
              <el-input v-model="formData1.periodName" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账文件地址：">
            <el-col :span="20">
              <el-input v-model="formData1.ftpAddress" placeholder="IP-目录地址" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账文件名称："  >
            <el-col :span="20">
              <el-input v-model="formData1.fileName" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}">
          <el-button  @click="onCance()">返回</el-button>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    props:'message',
    data() {
      return {
        formData1:{
          modelName:'',
          ftpCheckTime:'',
          ftpType:'2',
          insCode:'',
//          insName:'',
          ftpAccount:'',
          period:'',
          channelCode:'',
//          channelName:'',
          ftpAddress:'',
          ftpPwd:'',
          fileName:'',
          insCodeName:''
        },
      }
    },
    created() {
    	let self=this;
      let insCountId = self.$route.query.insCount;
      ApiService.actCheck.insFtpDetail({id:insCountId}).then(res => {
        self.formData1=res.data;
        self.formData1.insCodeName=self.formData1.insCode+' - '+self.formData1.insName;
        self.formData1.channelCodeName=self.formData1.channelCode+' - '+self.formData1.channelName;
        // 对账时间格式化  毫秒转转HH:mm时间格式
        self.formData1.checkTime=self.$moment(self.formData1.checkTime).format("HH:mm");
      });
    },
    methods: {
      onCance(){
        this.$router.push('/insFtp');
      }
    },
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
</style>

