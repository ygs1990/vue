<template>
  <div class="content">
    <div>
      <el-dialog title="搜索条件" :visible.sync="dialogVisible" size="small" top="30%" @close="closeSearch('formData1')">
        <el-form  :model="formData1" :rules="formRules" ref="formData1" label-width="100px" class="demo-form-inline">
          <el-row>
            <el-col :span="12">
              <el-form-item label="产品类型" prop="code">
                <el-col :span="20">
                  <el-select v-model="formData1.code" placeholder="请选择">
                    <el-option
                      v-for="item in formData.code"
                      :key="item.code"
                      :label="item.name"
                      :value="item.code">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="差错类型" prop="errorCode">
                <el-col :span="20">
                  <el-select v-model="formData1.errorCode" placeholder="请选择">
                    <el-option
                      v-for="item in formData.errorType"
                      :key="item.errorCode"
                      :label="item.errorCode+'-'+item.errorDesc"
                      :value="item.errorCode">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="商户" prop="mchntCode">
                <el-col :span="20">
                  <el-select v-model="formData1.mchntCode" filterable placeholder="全部">
                    <el-option
                      v-for="item in formData.mchntCode"
                      :key="item.code"
                      :label="item.code+' - '+item.name"
                      :value="item.code">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="通道商户" prop="insMchntCode">
                <el-col :span="20">
                  <el-select v-model="formData1.insMchntCode" filterable placeholder="全部">
                    <el-option
                      v-for="item in formData.insMchntCode"
                      :key="item.code"
                      :label="item.code+' - '+item.name"
                      :value="item.code">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="商户订单号" prop="mchntTxNo">
                <el-col :span="20">
                  <el-input v-model="formData1.mchntTxNo" placeholder="请输入"></el-input>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="通道订单号" prop="channelTxNo">
                <el-col :span="20">
                  <el-input v-model="formData1.channelTxNo" placeholder="请输入"></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="row-last">
            <el-col :lg="{span:3}":md="{span:5}" :sm="{span:7}" :xs="{span:24}">
              <el-radio class="radio" v-model="radio" label="1" >清算时间</el-radio>
            </el-col>
            <el-col :lg="{span:9}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
              <el-form-item label="起始日期" prop="startTime">
                <el-date-picker
                  v-model="formData1.startTime"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions0">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :lg="{span:9}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
              <span class="demonstration"></span>
              <el-form-item label="截止日期" prop="endTime">
                <el-date-picker
                  v-model="formData1.endTime"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions1">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <span slot="footer" >
          <el-button type="primary" icon="search" @click="onSearch('formData1')">搜索</el-button>
          <el-button  @click="onClear('formData1')">清除</el-button>
        </span>
      </el-dialog>
      <el-row>
        <el-col >
          <el-button type="primary" icon="search" class="rightBtn" @click="dialogVisible = true">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div >
      <el-table :data="tableData" border class="itemStyle1" ref="multipleTable" >
        <el-table-column prop="mchntName" label="商户名称" align="center" min-width="9%"></el-table-column>
        <el-table-column prop="businessName" label="产品类型" align="center" min-width="9%"></el-table-column>
        <el-table-column prop="insMchntName" label="通道商户名称" align="center" min-width="9%"></el-table-column>
        <el-table-column prop="mchntTxNo" label="商户订单号" align="center" min-width="9%"></el-table-column>
        <el-table-column prop="channelTxNo" label="通道订单号" align="center" min-width="9%"></el-table-column>
        <el-table-column prop="txTime" label="交易时间" align="center" min-width="9%" :formatter="timeFormat"></el-table-column>
        <el-table-column prop="clearingDate" label="清算日期" align="center" min-width="10%" :formatter="dateFormat"></el-table-column>
        <el-table-column prop="txAmounts" label="交易金额(元)" align="center" min-width="9%" ></el-table-column>
        <el-table-column prop="errorStatusName" label="差错状态" align="center" min-width="9%" ></el-table-column>
        <el-table-column prop="errorCode" label="差错类型" align="center" min-width="9%"></el-table-column>
        <el-table-column prop="errorCodeName" label="差错描述" align="center" min-width="9%"></el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change ="handleCurrentChange"
          :current-page="formData1.pageNo"
          layout="total, sizes, prev, pager, next, jumper"
          :page-sizes="pageSizes"
          :page-size="formData1.pageSize"
          :total='totalCount'>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    data() {
      var startTimeValid=(rule, value, callback) =>{
        let self=this;
        if (self.formData1.endTime&&(value==''||isNaN(value))) {
          callback(new Error('不能为空'));
        }else{
          callback();
        }
      };
      var endTimeValid=(rule, value, callback) =>{
        let self=this;
        if (self.formData1.startTime&&(value==''||isNaN(value))) {
          callback(new Error('不能为空'));
        }else{
          callback();
        }
      };
      return {
        dialogVisible:false,
        formData: {
          code:[],
          errorType:[],
          mchntCode:[],
          insMchntCode:[]
        },
        formData1:{
          code:'' ,
          errorCode:'',
          mchntCode:'',
          insMchntCode:'',
          mchntTxNo:'',
          channelTxNo:'',
          startTime:'',
          endTime:'',
          pageSize:10,
          timeType:'',
          pageNo:1,
        },
        tableData: [],
        pageSizes:[10,20,30],
        totalCount:0,
        value1:'',
        radio:'1',
        formRules:{
          startTime:{validator: startTimeValid, trigger: 'blur' },
          endTime: { validator: endTimeValid, trigger: 'blur' }
        },
        pickerOptions0: {
          disabledDate:(time) =>{
            let endTime=(new Date(this.formData1.endTime)).getTime();
            return endTime && (!(endTime - 8.64e7 * 31 <= time.getTime() && time.getTime() <= endTime))||
              (time.getTime() >= new Date());
          }
        },
        pickerOptions1: {
          disabledDate:(time) =>{
            let startTime=(new Date(this.formData1.startTime)).getTime();
            return startTime && (!( startTime <= time.getTime() && time.getTime() <= startTime + 8.64e7 * 31))||
              (time.getTime() >= new Date());
          }
        },
      }
    },
    created() {
    	let self=this;
      // 产品类型 数据加载 差错类型数据加载
      ApiService.common.errorTypes().then(res => {
        self.formData.code=[];
        if(res.data){
          self.formData.code=res.data;
        }
      });
      // 商户数据加载
      ApiService.common.mchntList().then(res => {
        self.formData.mchntCode=[];
        if(res.data){
          self.formData.mchntCode=res.data;
        }
      });
      // 通道商户数据加载
      ApiService.common.insMchntList().then(res => {
        self.formData.insMchntCode=[];
        if(res.data){
          self.formData.insMchntCode=res.data;
        }
      });
//      this.loadTable();
    },
    methods: {
      dateTimes(){
        let self=this;
        //对账时间 标准时间 转毫秒数
        self.formData1.startTime=new Date(self.formData1.startTime).getTime();
        self.formData1.endTime=new Date(self.formData1.endTime).getTime();
      },
    	loadTable(){
      	this.dateTimes();
        ApiService.translog.errorList(this.formData1).then(res => {
          this.tableData=[];
          if(res.data){
            this.tableData=res.data;
          }
          //总条数
          this.totalCount=res.totalRows;
        });
      },
      handleSizeChange(val) {
        this.formData1.pageSize=val;
        this.loadTable();
      },
      handleCurrentChange(val) {
        this.formData1.pageNo=val;
        this.loadTable();
      },
      timeFormat(row, column){
        let date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
      },
      dateFormat(row, column){
        let date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return this.$moment(date).format("YYYY-MM-DD");
      },
      onSearch(formData) {
        let self=this;
        self.$refs[formData].validate((valid) => {
          if(valid){
            this.loadTable();
            this.dialogVisible=false;
          }
        })
      },
      onClear(formData) {
        this.$refs[formData].resetFields();
      },
      closeSearch(formData){
      	this.onClear(formData);
      }
    },
    computed:{
      checkCode() {
        return this.formData1.code;
      },
    },
    watch:{
      checkCode(newValue, oldValue) {
      	let self=this,objTemp=self.formData.code;
        self.formData1.errorCode='';
        self.formData.errorType=[];
      	for(let i=0,len=objTemp.length;i<len;i++){
      		if(objTemp[i].code==newValue){
            self.formData.errorType=objTemp[i].settleErrorList;
          }
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
</style>

