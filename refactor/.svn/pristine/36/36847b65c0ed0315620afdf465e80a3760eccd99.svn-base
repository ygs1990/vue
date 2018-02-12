<template>
  <div class="content">
    <div><p>编辑配置</p></div>
    <el-form label-width="140px" ref="formData1" :rules="rules" :model="formData1">
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="配置名称：" prop="modelCode">
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
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账文件获取：" >
            <el-col :span="20">
              <el-select v-model="formData1.ftpType" placeholder="请选择">
                <el-option
                  v-for="item in formData.ftpType"
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
          <el-form-item label="通道：" prop="channelCode">
            <el-col :span="20">
              <el-select v-model="formData1.channelCode" filterable placeholder="请选择">
                <el-option
                  v-for="item in formData.channelCode"
                  :label="item.code+' - ' +item.name"
                  :key="item.code"
                  :value="item.code+' - ' +item.name">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="通道机构：" prop="insCode">
            <el-col :span="20">
              <el-select v-model="formData1.insCode" filterable placeholder="请选择">
                <el-option
                  v-for="item in formData.insCode"
                  :label="item.code+' - '+ item.name"
                  :key="item.code"
                  :value="item.code+' - '+ item.name">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="用户名：" prop="ftpAccount">
            <el-col :span="20">
              <el-input v-model="formData1.ftpAccount"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="密码：" prop="ftpPwd">
            <el-col :span="20">
              <el-input v-model="formData1.ftpPwd" ></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账时间：" prop="ftpCheckTime">
            <el-col :span="20">
              <el-time-picker
                v-model="formData1.ftpCheckTime" format="HH:mm"
                placeholder="选择时间">
              </el-time-picker>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账周期：" prop="period">
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
          <el-form-item label="对账文件地址：" prop="ftpAddress">
            <el-col :span="20">
              <el-input v-model="formData1.ftpAddress" placeholder="IP地址：端口号 - / 目录地址  "></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账文件名称：" prop="fileName" >
            <el-col :span="20">
              <el-input v-model="formData1.fileName" ></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}"><el-button type="primary" @click="onSubmit('formData1')">保存</el-button></el-col>
        <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}"><el-button  @click="onCance()">取消</el-button></el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    props:'message',
    data() {
      var checkFtp=(rule, value, callback) =>{
        if (value=='') {
          callback(new Error('不能为空'));
        }else{
          var regex = /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[:]([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])[-][\/][0-9a-zA-Z]/;
          if (!(regex.test(value))) {
            callback(new Error("请输入正确' IP地址：端口号 - / 路径 '格式"));
          }else{
              callback();
          }
        }
      };
      var checkPeriod= (rule, value, callback) => {
        if (value=='') {
          callback(new Error('不能为空'));
        }else{
          callback();
        }
      };
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        formData1:{
          modelCode:'',
          ftpCheckTime:'',
          ftpType:'2',
          insCode:'',
          ftpAccount:'',
          period:'',
          channelCode:'',
          ftpAddress:'',
          ftpPwd:'',
          fileName:'',

        },
        formData:{
          modelCode:[],
          ftpType:[
            {
            	value:'1',
              name:'FTP'
            },
            {
              value:'2',
              name:'SFTP'
            }
          ],
          insCode:[],
          channelCode:[],
          period:[{
            value:'1',
            name:'自然日'
          },{
            value:'2',
            name:'工作日'
          }]

        },
        rules:{
          modelCode:[
            { required: true, message: '不能为空', trigger: 'change' }
          ],
          insCode:[
            { required: true, message: '不能为空', trigger: 'change' }
          ],
          channelCode:[
            { required: true, message: '不能为空', trigger: 'change' }
          ],
          ftpAccount:{ required: true, message: '不能为空', trigger: 'blur' },
          ftpPwd:{ required: true, message: '不能为空', trigger: 'blur' },
          ftpCheckTime:{ validator: checkPeriod,  trigger: 'change'},
          period:{ required: true, message: '不能为空', trigger: 'change'  },
          ftpAddress:{ validator: checkFtp, trigger: 'blur' },
          fileName:{ required: true, message: '不能为空', trigger: 'blur' },
        }
      }
    },
    created() {
      // 配置名称 数据加载
      ApiService.common.modelList().then(res => {
        this.formData.modelCode=[];
        if(res.data){
          this.formData.modelCode=res.data;
        }
      });
      // 通道 加载数据
      ApiService.common.channelList().then(res => {
        this.formData.channelCode=[];
        if(res.data){
          this.formData.channelCode=res.data;
        }
      });
      // 通道机构 加载数据
      ApiService.common.insList(this.formData1).then(res => {
        this.formData.insCode=[];
        if(res.data){
          this.formData.insCode=res.data;
        }
      });
      let insCountId = this.$route.query.insCount;
      ApiService.actCheck.insFtpDetail({id:insCountId}).then(res => {
        this.formData1=res.data ;
        // 对账周期整形转字符串
        if(this.formData1.period==1){
          this.formData1.period='1';
        }else if(this.formData1.period==2){
          this.formData1.period='2';
        }
        this.formData1.insCode=this.formData1.insCode+' - '+this.formData1.insName;
        this.formData1.channelCode=this.formData1.channelCode+' - '+this.formData1.channelName;
        // 对账时间格式化  毫秒转转标准时间 HH:mm
        this.formData1.ftpCheckTime=this.formData1.checkTime;
      });
    },
    methods: {
      onSubmit(formData) {
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
            //对账时间 标准时间 转毫秒数
            timeTmp=(new Date(objtemp.ftpCheckTime)).getTime();
            objtemp.ftpCheckTime=timeTmp;
            ApiService.actCheck.editInsFtp(objtemp).then(res => {
              if(res.code==0){
                this.$alert(res.message,'编辑结果',{
                  confirmButtonText: '确定',
                });
                this.onCance();
              }else if(res.code==-1){
                this.$alert(res.message,'编辑结果',{
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
      onCance(){
        this.$router.push('/insFtp');
      }
    },
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
</style>

