<template>
  <div class="content">
    <el-form  :model="formData1" ref="formData1" :rules="rules" label-width="120px" class="demo-form-inline">
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="代理商" prop="agentCode">
              <el-col :span="20">
                <el-select v-model="formData1.agentCode" filterable placeholder="请选择">
                  <el-option
                    v-for="item in formData.AgentLists"
                    :label="item.code+' - '+item.name"
                    :key="item.code"
                    :value="item.code+' - '+item.name">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="对账模板" prop="modelCode">
              <el-col :span="20">
                <el-select v-model="formData1.modelCode" placeholder="请选择">
                  <el-option
                    v-for="item in formData.modelCode"
                    :label="item.modelName"
                    :key="item.modelCode"
                    :value="item.modelCode">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="用户名" prop="ftpAccount">
              <el-col :span="20">
                <el-input v-model="formData1.ftpAccount" placeholder="请输入"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="密码" prop="ftpPwd">
              <el-col :span="20">
                <el-input v-model="formData1.ftpPwd" placeholder="请输入" ></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="SFTP目录" prop="sftpAdress">
              <el-col :span="20">
                <el-input v-model="formData1.sftpAdress"  placeholder="IP地址：端口号 - / 目录地址  "></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="对账周期" prop="period">
              <el-col :span="20">
                <el-select v-model="formData1.period" placeholder="请选择">
                  <el-option
                    v-for="item in formData.period"
                    :label="item.name"
                    :key="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="对账文件目录" prop="localDir">
              <el-col :span="20">
                <el-input v-model="formData1.localDir"  placeholder="/ 目录地址  "></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}">
            <el-button type="primary" class="btn" @click="onSave('formData1')">保存</el-button>
          </el-col>
          <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}">
            <el-button class="btn" @click="onCance('formData1')">取消</el-button>
          </el-col>
        </el-row>
      </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    data() {
      var checkFtp=(rule, value, callback) =>{
        if (value=='') {
          callback(new Error('不能为空'));
        }else{
          var regex = /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[:]([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])[-][\/][0-9a-zA-Z]/;
          if (!(regex.test(value))) {
            callback(new Error("请输入正确' IP地址：端口号 - /目录地址 '格式"));
          }else{
            callback();
          }
        }
      };
      return {
        formData: {
          AgentLists:[],
          modelCode:[],
          period:[{
            value:'1',
            name:'自然日'
          },{
            value:'2',
            name:'工作日'
          }]
        },
        formData1:{
          agentCode:'',
          modelCode:'',
          period:'',
          ftpAccount:'',
          ftpPwd:'',
          sftpAdress:'',
          localDir:'',
        },
        rules:{
          agentCode:{ required: true, message: '不能为空', trigger: 'change' },
          modelCode:{ required: true, message: '不能为空', trigger: 'change' },
          period:{ required: true, message: '不能为空', trigger: 'change' },
          ftpAccount:{ required: true, message: '不能为空', trigger: 'blur' },
          ftpPwd:{ required: true, message: '不能为空', trigger: 'blur' },
          localDir:[
          	{ required: true, message: '不能为空', trigger: 'blur' },
            { pattern: /[/].+/, message: '请输入\"/目录地址\"格式', trigger: 'blur' }],
          sftpAdress:{ validator: checkFtp, trigger: 'blur' },
        }
      }
    },
    created() {
      // 代理商 数据加载
      ApiService.common.actAgentList().then(res => {
        this.formData.agentLists=[];
        if(res.data){
          this.formData.AgentLists=res.data;
        }
      });
      // 配置名称 数据加载
      ApiService.common.modelList().then(res => {
        this.formData.modelCode=[];
        if(res.data){
          this.formData.modelCode=res.data;
        }
      });
    },
    methods: {
      onSave(formData) {
        this.$refs[formData].validate((valid) =>{
          // 验证是否通过
          if(valid){
            let objtemp={},timeTmp;
            for(let key in this.formData1){
              objtemp[key]=this.formData1[key];
            }
            if(objtemp.period=='1'){
              objtemp.period=1;
            }else if(objtemp.period=='2'){
              objtemp.period=2;
            }
            // 保存代理商新增配置结果
            ApiService.actCheck.addAgentFtp(objtemp).then(res => {
              if(res.code==0){
                this.$alert(res.message,'配置结果',{
                  confirmButtonText: '确定',
                });
                this.onCance();
              }else if(res.code==-1){
                this.$alert(res.message,'配置结果',{
                  confirmButtonText: '确定',
                  type: 'warning'
                })
                this.onCance();
              }else if(res.code==-2){
                this.$alert(res.message,'配置结果',{
                  confirmButtonText: '确定',
                  type: 'warning'
                })
              }
            });
          }
        })
      },
      onCance(formData) {
//        this.$refs[formData].resetFields();
        this.$router.push('/agentFtp');
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
</style>

