<template>
  <div class="content">
    <el-form label-width="140px" ref="formData1" :rules="rules" :model="formData1">
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="代理商：" prop="agentCode">
            <el-col :span="20">
              <el-select v-model="formData1.agentCode" filterable placeholder="请选择">
                <el-option
                  v-for="item in formData.AgentLists"
                  :label="item.agentCode+' - '+item.agentName"
                  :key="item.agentCode"
                  :value="item.agentCode">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账模板：" prop="modelCode">
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
          <el-form-item label="对账日期："  prop="clearingDate">
            <el-col :span="20">
              <el-date-picker
                v-model="formData1.clearingDate"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <!--两个button来回切换是避免页面跳动-->
        <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}" v-show="!show"><el-button type="primary" @click="LoadFile('formData1',$event)" >下载</el-button></el-col>
        <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}" v-show="show"><a :href="href" ><el-button type="primary" @click="LoadFile('formData1',$event)" >下载</el-button></a></el-col>
        <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}"><el-button  @click="onClear('formData1')">清除</el-button></el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    data() {
      var CheckDate= (rule, value, callback) => {
        if (value=='') {
          callback(new Error('不能为空'));
        }else{
          callback();
        }
      };
      return {
        show:false,
      	href:'',
        formData1:{
        	agentCode:'',
          clearingDate:'',
          modelCode:'',
        },
        formData:{
          modelCode:[],
          AgentLists:[]
        },
        rules:{
          agentCode:[{ required: true, message: '不能为空', trigger: 'change' }],
          clearingDate:[{ validator: CheckDate, trigger: 'blur' }],
          modelCode:[{ required: true, message: '不能为空', trigger: 'change' }],
        },
        pickerOptions: {
          disabledDate:(time) =>{
            return time.getTime() > Date.now();
          }
        }
      }
    },
    created() {
      // 代理商 对账模块 数据加载
      ApiService.actCheck.agentAndModel().then(res => {
        this.formData.agentLists=[];
        if(res.data){
          this.formData.AgentLists=res.data;
        }
      });
    },
    methods: {
      LoadFile(formData,event) {
        let self=this,clearingDate;
        self.$refs[formData].validate((valid) => {
          if(valid){
            clearingDate=(new Date(self.formData1.clearingDate)).getTime();
            self.href=ApiService.actCheck.downloadAccountCheck+'?agentCode='+self.formData1.agentCode+
              '&modelCode='+self.formData1.modelCode+'&clearingDate='+clearingDate+'&type=2';
          }
        })
      },
      onClear(formData){
        this.$refs[formData].resetFields();
      }
    },
    computed:{
    	inputLen(){
    		let len=0;
    		for(let key in this.formData1){
    			if(this.formData1[key]!=''){
    				len++;
          }
        }
        return len;
      },
      checkAgent(){
    		return this.formData1.agentCode;
      }
    },
    watch:{
      inputLen(newValue,oldValue){
    		if(newValue==3){
    			this.show=true;
        }else{
          this.show=false;
        }
      },
      checkAgent(value1){
      	let self=this,modelList=self.formData.AgentLists;
        self.formData.modelCode=[];
        self.formData1.modelCode='';
      	for(let i=0,len=modelList.length;i<len;i++){
      		if(modelList[i].agentCode==value1){
            // 配置名称 数据加载
            self.formData.modelCode=modelList[i].checkModelList;
          }
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/public.less";
  @import "../../../less/modules/base.less";
</style>

