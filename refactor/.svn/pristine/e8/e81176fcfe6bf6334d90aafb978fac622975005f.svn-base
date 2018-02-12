<template>
  <div class="content">
    <el-form ref="formData" :model="formData" :rules="formRules"  label-width="120px">
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="调额编号">
            <el-col :span="20">
              <el-input v-model="formData.id" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="商户编号" >
            <el-col :span="20">
              <el-input v-model="formData.mchntCode" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="商户名称" >
            <el-col :span="20">
              <el-input v-model="formData.mchntName" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="通道机构名称" >
            <el-col :span="20">
              <el-input v-model="formData.insName" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="调额类型" >
            <el-col :span="20">
              <el-input v-model="formData.adjustDirectName" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="额度类型" >
            <el-col :span="20">
              <el-input v-model="formData.settledTypeName" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="调整金额" >
            <el-col :span="20">
              <el-input v-model="formData.adjustAmounts" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="调额状态" >
            <el-col :span="20">
              <el-input v-model="formData.adjustStatusName" :disabled="true" ></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="调整原因">
            <el-col :span="20">
              <el-input v-model="formData.adjustReasonName" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="创建人" >
            <el-col :span="20">
              <el-input v-model="formData.submiter" :disabled="true"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="复核" >
            <el-row>
              <el-col :lg="{span:3}" :md="{span:4}" :sm="{span:3}" :xs="{span:5}">
                <el-radio class="radio" v-model="formData.check" label="1" >通过</el-radio>
              </el-col>
              <el-col :lg="{span:3}" :md="{span:4}" :sm="{span:3}" :xs="{span:5}">
                <el-radio class="radio" v-model="formData.check" label="0">拒绝</el-radio>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :style="{display:isShow}">
        <el-col :span="8">
          <el-form-item label="拒绝原因" prop="rejectReason">
            <el-input v-model="formData.rejectReason" type="textarea">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row>
      <el-col :span="2"><el-button type="primary" @click="onSubmit('formData')" :disabled="isAbled">提交</el-button></el-col>
      <el-col :span="3"><el-button @click="onCance('formData')">取消</el-button></el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    data() {
      return {
        isShow:"none",
        isAbled:true,
        formData:{},
        formRules:{
          rejectReason: { required: false, message: '不能为空', trigger: 'blur' }
        },
      }
    },
    created() {
      let self=this;
      let idVal=self.$route.query.id;
      ApiService.mchntAccountTmp.mchntAccountTmpDetail({id:idVal}).then(res => {
        self.formData=res.data;
      })
    },
    methods:{
      onSubmit(formData) {
        this.$refs[formData].validate((valid) => {
        	if(valid){
            ApiService.mchntAccountTmp.checkMchntAccountTmp(this.formData).then(res => {
              if(res.code=='0'){
                this.$alert(res.message,'初始化结果',{
                  confirmButtonText: '确定',
                });
              }else if(res.code==-1){
                this.$alert(res.message,'初始化结果',{
                  confirmButtonText: '确定',
                  type: 'warning'
                })
              }
              this.onCance();
            });
          }
        })
      },
      onCance(formData){
        this.$router.push('/accountAdjustCheck');
      }
    },
    computed:{
    	checkVal() {
        return this.$data.formData.check;
      }
    },
    watch:{
      checkVal(newValue, oldValue){
      	if(newValue=='1'){
      		this.isShow='none';
          this.isAbled=false;
          this.formData.rejectReason='';
          this.formRules.rejectReason.required=false;
        }else if(newValue=='0'){
          this.isShow='block';
          this.isAbled=false;
          this.formRules.rejectReason.required=true;
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";

 textarea{
   width:200px;
   height:100px;
 }
</style>

