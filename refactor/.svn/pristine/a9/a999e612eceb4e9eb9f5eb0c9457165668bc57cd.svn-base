<template>
  <div class="content">
    <el-form  :model="formData1" :rules="rules" ref="formData1" label-width="140px" class="demo-form-inline">
        <el-row>
          <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}">
            <el-button  @click="onCance()">取消</el-button>
          </el-col>
          <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}">
            <el-button type="primary" @click="onSave('formData1')">保存</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="商户：" prop="mchntId" >
              <el-col :span="20">
                <el-select v-model="formData1.mchntId" filterable placeholder="请选择">
                  <el-option
                    v-for="item in formData.merch"
                    :key="item.mchntCode"
                    :label="item.mchntCode+' - '+item.mchntName"
                    :value="''+item.mchntId">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="产品类型：" prop="businessCode">
              <el-col :span="20">
                <el-select v-model="formData1.businessCode" placeholder="请选择">
                  <el-option
                    v-for="item in formData.productTypes"
                    :label="item.name"
                    :key="item.code"
                    :value="item.code">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="通道机构：">
              <el-col :span="20">
                <el-input v-model="formData.insAgencyName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}" v-show="isShow">
            <el-form-item label="额度类型：" prop="settledType">
              <el-col :span="20">
                <el-select v-model="formData1.settledType" placeholder="请选择">
                  <el-option
                    v-for="item in formData.settledType"
                    :label="item.value"
                    :key="item.id"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="调额类型：" prop="adjustDirect">
              <el-col :span="20">
                <el-select v-model="formData1.adjustDirect" placeholder="请选择">
                  <el-option
                    v-for="item in formData.adjustDirect"
                    :key="item.id"
                    :label="item.value"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="调整金额（元）：" prop="adjustAmounts">
              <el-col :span="20">
                <el-input v-model="formData1.adjustAmounts" placeholder="请输入"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="调整原因：" prop="adjuctReason">
              <el-col :span="20">
                <el-select v-model="formData1.adjuctReason"  placeholder="请选择">
                  <el-option
                    v-for="item in formData.adjuctReason"
                    :key="item.id"
                    :label="item.value"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
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
      var checkAmount=(rule, value, callback) =>{
        if (value=='') {
           callback(new Error('不能为空'));
        }else{
          if (!Number(value)) {
             callback(new Error('不是合法數字'));
          }else {
            if (value < 0) {
              callback(new Error('金额必须为正值'));
            }else if(String(value * 100).indexOf('.')!=-1){
              callback(new Error('请输入至多两位小数的正数'));
            }else{
            	callback();
            }
          }
        }
      };
      return {
        isShow:true,
        formData: {
          insAgencyName:'',
          merch:[],
          productTypes:[],
          settledType:[{
          	id:'1',
            value:'可用额度（T1）'
          },{
            id:'0',
            value:'在途额度（D0）'
          }],
          adjustDirect:[
            {
            	id:'1',
              value:'增大额度'
            },
            {
              id:'0',
              value:'降低额度'
            }
          ],
          adjustAmounts:'',
          adjuctReason:[
            {id:'1',value:'商户跨行汇入'},
            {id:'2',value:'POSP消费结算'},
            {id:'3',value:'差错额度'},
            {id:'4',value:'清算划出'},
            {id:'5',value:'费用收入调整'},
            {id:'6',value:'结息汇入'},
            {id:'7',value:'盈余划出'},
          ],
        },
        formData1:{
        	mchntId:'',
          businessCode:'' ,
          insId:'',
          adjustAmounts:'',
          adjuctReason:'',
          settledType:'',
          adjustDirect:''
        },
        rules:{
          mchntId: [{ required: true, message: '不能为空', trigger: 'change' }],
          businessCode: [{ required: true, message: '不能为空', trigger: 'change' }],
          settledType: [{ required: true, message: '不能为空', trigger: 'change' }],
          adjustDirect: [{ required: true, message: '不能为空', trigger: 'change' }],
          adjustAmounts: [
            { validator: checkAmount, trigger: 'blur' },
          ],
          adjuctReason:[ { required: true, message: '不能为空', trigger: 'change'  }],
        }
      }
    },
    created() {
      // 商户编号\名称 数据加载
      let self=this;
      ApiService.mchntAccountTmp.mchntBusinessList().then(res => {
        self.formData.merch=[];
       if(res.data){
         self.formData.merch=res.data;
       }
      });
    },
    methods: {
      onCance() {
        this.$router.push('/accountAdjust');
      },
      onSave(formData){
      	let self=this;
        self.$refs[formData].validate((valid) => {
      		if(valid){
            ApiService.mchntAccountTmp.merManuAdjAdd(self.formData1).then(res => {
              if(res.code==0){
                this.$alert(res.message,'调额结果',{
                  confirmButtonText: '确定',
                });
                self.onCance();
              }else if(res.code==-2){
                this.$alert(res.message,'调额结果',{
                  confirmButtonText: '确定',
                  type: 'warning'
                });
              }else{
                this.$alert('手工调额新增失败','调额结果',{
                  confirmButtonText: '确定',
                  type: 'warning'
                });
                self.onCance();
              };
            });
          }
        })

      }
    },
    computed:{
      checkCode() {
        return this.formData1.mchntId;
      },
      checkProType(){
      	return this.formData1.businessCode;
      }
    },
    watch:{
      checkCode(newValue) {
        let self=this,merch;
        merch=self.formData.merch;
        self.formData1.businessCode='';
        self.formData.insAgencyName='';
        self.formData.productTypes=[];
        for(let i=0,len=merch.length;i<len;i++){
          if(merch[i].mchntId==newValue){
            self.formData.productTypes=merch[i].businessList;
          }
        }
      },
      checkProType(newValue){
      	let self=this,objTemp;
        if(newValue=='VERIFY'){
          self.isShow=false;
          self.formData1.settledType='1';
        }else {
          self.isShow=true;
          self.formData1.settledType='';
        }
        objTemp={};
        for(let key in self.formData1){
          objTemp[key]=self.formData1[key];
        }
        if(objTemp.insId==""){
          objTemp.insId=null;
        }
        objTemp.mchntId=parseInt(objTemp.mchntId);
        if(objTemp.businessCode!=''){
          ApiService.common.byMchntCode(objTemp).then(res => {
            if(res.data){
              self.formData.insAgencyName=res.data.code+'-'+res.data.name;
              self.formData1.insId=res.data.id;
            }
          });
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
</style>

