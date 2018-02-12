<template>
  <div class="content">
    <el-dialog title="搜索条件"  :visible.sync="dialogVisible" size="tiny" top="30%" @close="closeDialog('formData1')">
      <el-form ref="formData1" :model="formData1" label-width="140px">
        <el-row>
          <el-col >
            <el-form-item label="对账日期" prop="strClearingDate" >
              <el-col :span="20">
                <el-date-picker
                  v-model="formData1.strClearingDate"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col >
            <el-form-item label="通道机构" prop="insCode">
              <el-col :span="20">
                <el-select v-model="formData1.insCode" filterable placeholder="请选择">
                  <el-option
                    v-for="item in formData.insCode"
                    :label="item.code+' - '+item.name"
                    :key="item.code"
                    :value="item.code">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="row-last">
          <el-col >
            <el-form-item label="对账状态" prop="status">
              <el-col :span="20">
                <el-select v-model="formData1.status" filterable placeholder="请选择">
                  <el-option
                    v-for="item in formData.statusList"
                    :key="item.key"
                    :label="item.key+'-'+item.value"
                    :value="item.key">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSearch()">搜索</el-button>
          <el-button  @click="onClear('formData1')">清除</el-button>
        </span>
    </el-dialog>
    <el-row>
      <el-col >
        <el-button class="rightBtn" type="primary" @click="dialogVisible = true">搜索</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border class="itemStyle1"  ref="multipleTable" >
      <el-table-column prop="clearingDate" label="对账日期" align="center" min-width="11%" :formatter="dateFormat"></el-table-column>
      <el-table-column prop="modelName" label="配置名称" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="channelCode" label="通道编号" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="channelName" label="通道名称" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="insCode" label="通道机构编号" align="center"   min-width="11%"></el-table-column>
      <el-table-column prop="insName" label="通道机构名称" align="center"  min-width="11%"></el-table-column>
      <el-table-column prop="periodName" label="对账周期" align="center"  min-width="11%"></el-table-column>
      <el-table-column prop="statusName" label="对账状态" align="center"   min-width="11%"></el-table-column>
      <el-table-column label="操作" align="center" min-width="12%">
        <template scope="scope">
          <el-button type="info" size="small" @click="handleDetail(scope.$index, scope.row)">详情</el-button>
          <a :href="href"><el-button type="success" size="small" @click="loadFile(scope.$index, scope.row)">下载对账文件</el-button></a>
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
    data() {
      return {
        dialogVisible:false,
        href:'',
        formData1:{
          insCode:'',
          status:'',
          strClearingDate:'',
          pageSize:10,
          pageNo:1,
        },
        formData:{
          strClearingDate:[],
          insCode:[],
          statusList:[]
        },
        pickerOptions: {
          disabledDate:(time) =>{
            return time.getTime() > (this.formData1.endAppleTime||Date.now());
          }
        },
        tableData: [],
        pageSizes:[10,20,30],
        totalCount:0,
      }
    },
    created() {
      // 通道机构 加载数据
      ApiService.common.insList(this.formData1).then(res => {
        this.formData.insCode=[];
        if(res.data){
            this.formData.insCode=res.data;
        }
      });
      // 对账状态 数据查询
      ApiService.actCheck.checkStatus().then(res => {
        this.formData.statusList=[];
        if(res.data){
          this.formData.statusList=res.data;
        }
      });
      // 对账文件列表数据加载
      this.loadTable();
    },
    methods: {
      loadFile(index, row){
        this.href=ApiService.actCheck.downloadAccountCheck+'?clearingDate='+row.clearingDate+'&insCode='+row.insCode+
        '&modelCode='+row.modelCode+'&type=1';
      },
      handleDetail(index, row) {
        this.$router.push({path: "/insCountFileDtl",query:{countId: row.id}});
      },
      handleSizeChange(val) {
        this.formData1.pageSize=val;
        this.loadTable();

      },
      handleCurrentChange(val) {
        this.formData1.pageNo=val;
        this.loadTable();
      },
      dateFormat(row, column){
        let date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return this.$moment(date).format("YYYY-MM-DD");
      },
      loadTable(){
        this.tableData=[];
        let objtemp={};
        for(let key in this.formData1){
          objtemp[key]=this.formData1[key];
        }
        if(objtemp.period=='1'){
          objtemp.period=1;
        }else if(objtemp.period=='2'){
          objtemp.period=2;
        }
        //对账时间 标准时间 转毫秒数
        let timeTmp=(new Date(objtemp.strClearingDate)).getTime();
        objtemp.strClearingDate=timeTmp;
        ApiService.actCheck.pageInsAccountCheckList(objtemp).then(res => {
          this.tableData=[];
          if(res.data){
            for(let i=0,len=res.data.length; i<len; i++){
              this.tableData.push(res.data[i]);
            }
          }

          //总条数
          this.totalCount=res.totalRows;
        });
      },
      closeDialog(formData){
      	this.dialogVisible=false;
      	this.onClear(formData);
      },
      onSearch() {
        this.loadTable();
        this.dialogVisible=false;
      },
      onClear(formData){
        this.$refs[formData].resetFields();
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

