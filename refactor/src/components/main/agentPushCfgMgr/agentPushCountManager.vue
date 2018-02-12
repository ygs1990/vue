<template>
  <div class="content">
    <el-dialog title="搜索条件" :visible.sync="dialogVisible" size="tiny" top="30%" @close="closeSearch('formData1')">
      <el-form ref="formData1" :model="formData1" label-width="140px">
        <el-row>
          <el-col>
            <el-form-item label="代理商" prop="agentCode" >
              <el-col :span="20">
                <el-select v-model="formData1.agentCode" filterable placeholder="请选择">
                  <el-option
                    v-for="item in formData.AgentLists"
                    :label="item.code+' - '+item.name"
                    :key="item.code"
                    :value="item.code">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col >
            <el-form-item label="对账模板" prop="modelCode">
              <el-col :span="20">
                <el-select v-model="formData1.modelCode" filterable placeholder="请选择">
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
        <el-row class="row-last">
          <el-col >
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
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="onSearch('formData1')">搜索</el-button>
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
      <el-table-column prop="agentCode" label="代理商编号" align="center" min-width="17%"></el-table-column>
      <el-table-column prop="agentName" label="代理商名称" align="center" min-width="16%"></el-table-column>
      <el-table-column prop="modelName" label="对账模板" align="center" min-width="16%"></el-table-column>
      <el-table-column prop="periodName" label="对账周期" align="center" min-width="12%"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center" :formatter="createFormat"  min-width="17%"></el-table-column>
      <el-table-column label="操作" align="center" min-width="22%" >
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
          agentCode:'',
          modelCode:'',
          period:'',
          pageSize:10,
          pageNo:1,
        },
        formData:{
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
        tableData: [],
        pageSizes:[10,20,30],
        totalCount:0,
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

      // 代理商配置列表数据加载
      this.loadTable();
    },
    methods: {
      handleDetail(index, row){
        this.$router.push({path: "/agentConfigDtl",query:{agentCount: row.id}});
      },
      handleEdit(index, row) {
        this.$router.push({path: "/agentConfigEdit",query:{agentCount: row.id}});
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该配置, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          ApiService.actCheck.deleteAgentFtp(row).then(res => {
            if(res.code==0){
              this.$alert(res.message,'删除结果',{
                confirmButtonText: '确定',
              });
              this.loadTable();
            }else if(res.code==-1){
              this.$alert(res.message,'删除结果',{
                confirmButtonText: '确定',
                type: 'warning'
              });
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
        let objtemp={};
        for(let key in this.formData1){
          objtemp[key]=this.formData1[key];
        }
        if(objtemp.period=='1'){
          objtemp.period=1;
        }else if(objtemp.period=='2'){
          objtemp.period=2;
        }
        ApiService.actCheck.pageAgentFtpList(objtemp).then(res => {
          this.tableData=[];
          if(res.data){
            this.tableData=res.data;
          }

          //总条数
          this.totalCount=res.totalRows;
        });
      },
      createFormat(row, column){
        let date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
      },
      onSearch(formData) {
        this.loadTable();
        this.dialogVisible=false;
        this.onClear(formData);
      },
      AddConfig(){
        this.$router.push('/agentAddConfig');
      },
      onClear(formData){
        this.$refs[formData].resetFields();
      },
      closeSearch(formData){
      	this.dialogVisible=false;
      	this.onClear(formData);
      }
    },
  }

</script>
<style lang="less" scoped>
  @import "../../../less/modules/base.less";
</style>

