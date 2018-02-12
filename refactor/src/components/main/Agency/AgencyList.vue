<template>
  <div class="content">
    <div class="table">
    <div class="handle-box">
      <el-form :inline="true" ref="formInline" :model="formInline" class="demo-form-inline">
        <el-row>
          <el-col :span="8">
            <el-form-item label="代理商:" prop="agentCode">
              <el-select v-model="formInline.agentCode" filterable placeholder="请选择">
                <el-option
                  v-for="item in agentAll"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="是否自营:" prop="isSelfOperated">
              <el-select v-model="formInline.isSelfOperated" placeholder="全部">
                <el-option label="--请选择--" value=''></el-option>
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item class="button-from">
              <el-button type="primary" @click="formInlineSubmit">搜索</el-button>
              <el-button type="default" @click="formRes('formInline')">清除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="handle-box">
      <router-link to="/addAgency">
        <el-button type="primary">新增机构</el-button>
      </router-link>
    </div>
    <el-table :data="tableData" border style="width: 100%" ref="multipleTable">
      <el-table-column prop="code" label="编号" width="180"></el-table-column>
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="contact" label="联系人"></el-table-column>
      <el-table-column prop="phone" label="联系方式" width="180"></el-table-column>
      <el-table-column prop="clearingType" width="110" label="清算方式" :formatter="settlePeriodTypeFormat"></el-table-column>
      <el-table-column prop="agentTxName" label="开通产品" width="190"></el-table-column>
      <el-table-column prop="isSelfOperated" label="是否自营" :formatter="isSelfFormat"></el-table-column>
      <el-table-column prop="status" label="状态" :formatter="statusFormat"></el-table-column>
      <el-table-column prop="createTime" width="180" label="创建时间" :formatter="dateFormat"></el-table-column>
      <el-table-column label="操作" width="270">
        <template scope="scope">
          <span class="wrapper">
            <el-button size="small" type="success" @click="insDetail(scope.$index, scope.row,true)">详情</el-button>
            <el-button size="small" type="warning" @click="insDetail(scope.$index, scope.row,false)">编辑</el-button>
            <el-button size="small" type="danger" @click="freezeIns(scope.$index, scope.row)">{{scope.row.operation}}</el-button>
            <el-button size="small" type="info" @click="handleDelete(scope.$index, scope.row)">重置密码</el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="pager">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNo"
        layout="total, sizes, prev, pager, next"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :total='totalCount'>
      </el-pagination>
    </div>
  </div>
  </div>
</template>

<script>
  import ApiService from '@/services/API-servies'
  import Vue from 'vue'
  /*@current-change ="handleCurrentChange"
   :current-page="1" //当前页
   layout="total, sizes, prev, pager, next"
   :page-sizes="[1, 2, 3, 4]" //每页几条数据选择
   :page-size="1" //每页几条数据
   :total='4'>  //数据总数
   */
  export default {
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        select_cate: '',
        select_word: '',
        totalCount: 0,
        pageSize: 10,
        pageNo: 1,
        pageSizes: [10, 20, 30, 40],
        formInline: {
          agentCode: '',
          isSelfOperated: ''
        },
        agentAll: []
      }
    },
    created(){
      this.getData();
      ApiService.agency.findAgentNameOrCode().then((res) =>{
        this.agentAll.push({value: '', label: '--请选择--'});
        for (let i = 0; i < res.length; i++) {
          this.agentAll.push({value: res[i].code, label: res[i].name + '--' + res[i].code});
        }
        ;
      })
    },
    methods: {
      handleCurrentChange(val){
        this.pageNo = val;
        this.getData();
      },
      getData(){
        let self = this;
        ApiService.agency.agencyList({
          pageSize: self.pageSize,
          pageNo: self.pageNo,
          code: self.formInline.agentCode,
          isSelfOperated: self.formInline.isSelfOperated
        }).then((res) =>{
          self.tableData = res.result;
          self.totalCount = res.totalCount
        })
      },
      insDetail(index, row,disabled) {
        this.$router.push({path: 'detailAgency', query: {agencyId: row.id,disabled:disabled}});
      },
      handleDelete(index, row) {
        this.$confirm('确定重置密码?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then((res) =>{
          this.$message({
            type: 'info',
            message: '已成功'
          });
        }).catch(() =>{ 
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      },
      handleSizeChange: function (val){
        this.pageSize = val;
        this.getData();
      },
      //时间格式化
      dateFormat: function (row, column){
        let time = row.createTime;
        return this.$moment(time).format('YYYY-MM-DD HH:mm:ss')
      },
      //是自营
      isSelfFormat(row, col){
        if (row.isSelfOperated === 0) {
          return '非自营'
        } else if (row.isSelfOperated === 1) {
          return '自营'
        }
      },
      //清算方式
      settlePeriodTypeFormat(row, col){
        if (row.clearingType === 1) {
          return '通道直清'
        } else if (row.clearingType === 2) {
          return '钜真清算'
        } else if (row.clearingType === 3) {
          return '代理商清算'
        }
      },
      //状态格式化
      statusFormat(row, col){
        if (row.status === 1) {
          row.operation = '冻结';
          row.statusId = 0;
          return '启用'
        } else if (row.status === 0) {
          row.operation = '解冻';
          row.statusId = 1;
          return '关闭'
        }
      },
      //冻结解冻
      freezeIns(index, row) {
        let _this = this;
        _this.$confirm('是否确定' + row.operation + '该机构？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() =>{
          // 重置通道状态及操作
          ApiService.agency.reBlockeAgent({
            id: row.id,
            status: row.statusId
          }).then(data =>{
            if (data.code === 0) {
              // 点击确定按钮时，弹出如下信息及操作
              this.$message({
                type: 'success',
                message: '机构' + row.operation + '成功!'
              });
              this.getData();
            }else{
              this.$message({
                message: '机构更新失败'
              });
            }
          });
        }).catch(() =>{
          // 点击取消按钮时，弹出如下信息
          _this.$message({
            type: 'info',
            message: '已取消' + row.operation + '该机构'
          });
        });
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      formInlineSubmit() {
        this.getData();
      },
      formRes(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>

<style scoped lang="less">
  .content{
    border: 1px solid #eee;
    margin-top: 25px;
    padding: 20px 20px 0;
  }
  .handle-box {
    margin-bottom: 20px;
  }
  .handle-del {
    border-color: #bfcbd9;
    color: #999;
  }

  .el-breadcrumb {
    margin-bottom: 20px;
  }

  .el-form-item div {
    width: 100%;
  }
  .cell .el-button +, .el-button {
    margin: 0;
  }
</style>
