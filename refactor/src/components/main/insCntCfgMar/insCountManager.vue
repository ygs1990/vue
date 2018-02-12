<template>
  <div class="content">
    <el-dialog title="搜索条件" :visible.sync="dialogVisible" size="tiny" top="30%" @close="closeSearch('formData1')">
      <el-form ref="formData1" :model="formData1" label-width="140px">
        <el-row>
          <el-col >
            <el-form-item label="通道" prop="channelCode" >
              <el-col :span="20">
                <el-select v-model="formData1.channelCode" filterable placeholder="请选择">
                  <el-option
                    v-for="item in formData.channelCode"
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
          <el-col >
            <el-form-item label="通道机构" prop="insCode">
              <el-col :span="20">
                <el-select v-model="formData1.insCode" filterable placeholder="请选择">
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
        <el-row class="row-last">
          <el-col >
            <el-form-item label="对账周期" prop="period">
              <el-col :span="20">
                <el-select v-model="formData1.period" filterable placeholder="请选择">
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
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSearch()">搜索</el-button>
          <el-button  @click="onClear('formData1')">清除</el-button>
        </span>
    </el-dialog>
    <el-row>
      <el-col :span="12">
        <el-button type="primary" @click="AddConfig">新增配置</el-button>
      </el-col>
      <el-col  :span="12">
        <el-button class="rightBtn" type="primary" @click="dialogVisible = true">搜索</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border class="itemStyle1"  ref="multipleTable" >
      <el-table-column prop="modelName" label="配置名称" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="channelCode" label="通道编号" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="channelName" label="通道名称" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="insCode" label="通道机构编号" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="insName" label="通道机构名称" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="checkTime" label="对账时间" align="center"  min-width="10%" :formatter="countFormat"></el-table-column>
      <el-table-column prop="periodName" label="对账周期" align="center"  min-width="9%"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center" min-width="11%" :formatter="createFormat"></el-table-column>
      <el-table-column label="操作" align="center" min-width="15%">
        <template scope="scope">
          <el-button type="info" size="small" @click="handleDetail(scope.$index, scope.row)">详情</el-button>
          <el-button type="warning" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      return {
        dialogVisible:false,
        formData1:{
          channelCode:'',
          insCode:'',
          period:'',
          pageSize:10,
          pageNo:1,
        },
        formData:{
          channelCode:[],
          insCode:[],
          period:[{
          	value:1,
            name:'自然日'
          },{
            value:2,
            name:'工作日'
          }]
        },
        tableData: [],
        pageSizes:[10,20,30],
        totalCount:0,
      }
    },
    created() {
    	// 通道 加载数据
      ApiService.common.channelList(this.formData1).then(res => {
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
      // 对账配置 列表
      this.loadTable();
    },
    methods: {
      handleDetail(index, row){
        this.$router.push({path: "/InsConfigDtl",query:{insCount: row.id}});
      },
      handleEdit(index, row) {
        this.$router.push({path: "/insConfigEdit",query:{insCount: row.id}});
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该配置, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          ApiService.actCheck.deleteInsFtp(row).then(res => {
            if(res.code==0){
              this.$alert(res.message,'删除结果',{
                confirmButtonText: '确定',
              });
              this.loadTable();
            }
          });
        })
      },
      handleSizeChange(val) {
        this.formData1.pageSize=val;
        this.loadTable();

      },
      handleCurrentChange(val) {
        this.formData1.pageNo=val;
        this.loadTable();
      },
      loadTable(){
        ApiService.actCheck.insFtpList(this.formData1).then(res => {
          this.tableData=[];
        	if(res.data){
            this.tableData=res.data;
          }

          //总条数
          this.totalCount=res.totalRows;
        });
      },
      countFormat(row, column){
        let date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return this.$moment(date).format("HH:mm:ss");
      },
      createFormat(row, column){
        let date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
      },
      onSearch(){
      	this.loadTable();
      	this.dialogVisible=false;
      },
      closeSearch(formData){
      	this.onClear(formData);
      },
      onClear(formData){
        this.$refs[formData].resetFields();
      },
      AddConfig(){
        this.$router.push('/addInsConfig');
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

