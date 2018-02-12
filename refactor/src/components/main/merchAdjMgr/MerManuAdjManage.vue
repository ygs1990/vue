<template>
  <div class="content">
    <div>
      <el-dialog title="搜索条件" :visible.sync="dialogVisible" size="small" top="30%" @close="closeSearch('formData1')">
        <el-form  :model="formData1" :rules="formRules" ref="formData1" label-width="110px" class="demo-form-inline">
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
              <el-form-item label="通道机构" prop="insCode">
                <el-col :span="20">
                  <el-select v-model="formData1.insCode" filterable placeholder="全部">
                    <el-option
                      v-for="item in formData.insCode"
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
              <el-form-item label="调额状态" prop="adjustStatus">
                <el-col :span="20">
                  <el-select v-model="formData1.adjustStatus" placeholder="全部">
                    <el-option
                      v-for="item in formData.adjustStatus"
                      :key="item.id"
                      :label="item.value"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="额度类型" prop="settledType">
                <el-col :span="20">
                  <el-select v-model="formData1.settledType" filterable placeholder="全部">
                    <el-option
                      v-for="item in formData.settledType"
                      :key="item.id"
                      :label="item.value"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="调额类型" prop="adjustDirect">
                <el-col :span="20">
                  <el-select v-model="formData1.adjustDirect" filterable placeholder="全部">
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
          </el-row>
          <el-row class="row-last">
            <el-col :span="12">
              <el-form-item label="调额起始时间" prop="startApplyTime">
                <el-col :span="20">
                  <el-date-picker
                    v-model="formData1.startApplyTime"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions0">
                  </el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="调额结束时间" prop="endAppleTime">
                <el-col :span="20">
                  <el-date-picker
                    v-model="formData1.endAppleTime"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions1">
                  </el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSearch('formData1')">搜索</el-button>
          <el-button  @click="onClear('formData1')">清除</el-button>
        </span>
      </el-dialog>
      <el-row>
        <el-col :span="12">
          <el-button type="primary"  @click="onAddManu()">手工调额新增</el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" class="rightBtn" icon="search" @click="dialogVisible = true">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" border class="itemStyle1"  ref="multipleTable" >
      <el-table-column prop="id" label="调额编号" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="mchntCode" label="商户编号" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="mchntName" label="商户名称" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="insName" label="通道机构名称" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="adjustDirectName" label="调额类型" align="center" sortabel="true"  min-width="11%"></el-table-column>
      <el-table-column prop="adjustAmounts" label="调整金额（元）" align="center" min-width="11%" ></el-table-column>
      <el-table-column prop="adjustStatusName" label="调额状态" align="center" min-width="11%" ></el-table-column>
      <el-table-column prop="applyTime" label="调额时间" align="center" min-width="12%" :formatter="timeFormat"></el-table-column>
      <el-table-column label="操作" align="center" min-width="11%">
        <template scope="scope">
          <el-button type="info" size="small" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination" >
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
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    props:'message',
    data() {
      let self=this;
      var startTimeValid=(rule, value, callback) =>{
        if (self.formData1.endAppleTime&&(value==''||isNaN(value))) {
          callback(new Error('不能为空'));
        }else{
          callback();
        }
      };
      var endTimeValid=(rule, value, callback) =>{
        if (self.formData1.startApplyTime&&(value==''||isNaN(value))) {
          callback(new Error('不能为空'));
        }else{
          callback();
        }
      };
      return {
        dialogVisible:false,
        formData: {
          mchntCode:[],
          insCode:[],
          adjustStatus:[{
            id:'0',
            value:'待复核'
          },{
            id:'1',
            value:'复核生效'
          },{
            id:'2',
            value:'复核不通过'
          }],
          settledType:[{
            id:'1',
            value:'可用额度（T1）'
          },{
            id:'0',
            value:'在途额度（T0）'
          }],
          adjustDirect:[{
            id:'1',
            value:'增大额度'
          },
            {
              id:'0',
              value:'降低额度'
            }],
        },
        formData1:{
          mchntCode:'',
          insCode:'',
          adjustStatus:'',
          settledType:'',
          adjustDirect:'',
          startApplyTime:'',
          endAppleTime:'',
          pageSize:10,
          pageNo:1,
        },
        tableData: [],
        pageSizes:[10,20,30],
        totalCount:0,
        formRules:{
          startApplyTime:{validator: startTimeValid, trigger: 'blur' },
          endAppleTime: { validator: endTimeValid, trigger: 'blur' }
        },
        pickerOptions0: {
          disabledDate:(time) =>{
            let endTime=(new Date(this.formData1.endAppleTime)).getTime();
            return endTime && (!(endTime - 8.64e7 * 31 <= time.getTime() && time.getTime() <= endTime))||
              (time.getTime() >= new Date());
          }
        },
        pickerOptions1: {
          disabledDate:(time) =>{
            let startTime=(new Date(this.formData1.startApplyTime)).getTime();
            return startTime && (!( startTime <= time.getTime() && time.getTime() <= startTime + 8.64e7 * 31))||
              (time.getTime() >= new Date());
          }
        },
      }
    },
    created() {
      // 商户数据加载
      ApiService.common.mchntList().then(res => {
        this.formData.mchntCode=[];
        if(res.data){
          this.formData.mchntCode=res.data;
        }
      });

      // 通道机构数据加载
      ApiService.common.insList().then(res => {
        this.formData.insCode=[];
        if(res.data){
          this.formData.insCode=res.data;
        }
      });
      this.loadTable();
    },
    methods: {
    	loadTable(){
    		// 标准时间 转 ms
        let self=this,startApplyTime,endAppleTime;
        startApplyTime=new Date(self.formData1.startApplyTime).getTime();
        endAppleTime=new Date(self.formData1.endAppleTime).getTime();
        self.formData1.startApplyTime=startApplyTime;
        self.formData1.endAppleTime=endAppleTime;
        ApiService.mchntAccountTmp.mchntAccountList(self.formData1).then(res => {
          self.tableData=[];
        	if(res.data){
            self.tableData=res.data;
          }
          //总条数
          this.totalCount=res.totalRows;
        });
      },
      handleEdit(index, row) {
        this.$router.push({path: "/MerManuAdjDtlMge",query:{id: row.id}});
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
      onAddManu(){
    		this.$router.push('/MerManuAdjAdd');
      },
      onSearch(formData){
        let self=this;
        self.$refs[formData].validate((valid) => {
          if(valid){
            self.dialogVisible=false;
            self.loadTable();
            self.$refs[formData].resetFields();
          }
        })
      },
      onClear(formData){
      	this.$refs[formData].resetFields();
      },
      closeSearch(formData){
      	this.onClear(formData);
      }
    },
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";

  .el-button + .el-button{
    margin-left:0;
  }
</style>

