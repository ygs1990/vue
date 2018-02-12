<template>
  <div class="content">
    <div class="table">
    <div class="handle-box">
      <el-form :inline="true" ref="formInline" :model="formInline" class="demo-form-inline">
        <!-- <el-row>
          <el-col :span="6">
            <el-form-item label="商户编号:" prop="mchntCode">
              <el-select v-model="formInline.mchntCode" filterable placeholder="请输入名称或商户编号">
                <el-option
                  v-for="item in mchntAll"
                  :key="item.code"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="批次号:" prop="batchNo">
              <el-input v-model="formInline.batchNo" placeholder="批次号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="状态:" prop="batchStatus">
              <el-select v-model="formInline.batchStatus" placeholder="全部">
                <el-option label="--全部--" value=""></el-option>
                <el-option label="无效" value="0"></el-option>
                <el-option label="待复核" value="1"></el-option>
                <el-option label="订单待处理" value="2"></el-option>
                <el-option label="订单处理中" value="3"></el-option>
                <el-option label="订单处理结束" value="4"></el-option>
                <el-option label="已生成报表" value="5"></el-option>
                <el-option label="异常同步中" value="6"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item class="button-from">
              <el-button type="primary" @click="formInlineSubmit">搜索</el-button>
              <el-button type="default" @click="formRes('formInline')">清除</el-button>
            </el-form-item>
          </el-col>
        </el-row> -->
      </el-form>
    </div>
    <el-table :data="tableData" border style="width: 100%" ref="multipleTable">
      <el-table-column prop="batchNo" label="订单批次号" width="220"></el-table-column>
      <el-table-column prop="mchntCode" label="商户编号"  width="180"></el-table-column>
      <el-table-column prop="mchntName" label="商户名称"></el-table-column>
      <el-table-column prop="batchStatus" label="状态" :formatter="statusFormat"></el-table-column>
      <el-table-column prop="createTime" width="180" label="创建时间" :formatter="dateFormat"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span class="wrapper">
            <el-button size="small" type="success" @click="toDetail(scope.$index, scope.row)">详情</el-button>
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
          mchntCode: '',
          batchNo:'',
          batchStatus: '1'
        },
        mchntAll: []
      }
    },
    created(){
      this.getData();
      ApiService.mchnt.findMchntNameOrCode().then((res) =>{
        this.mchntAll.push({value: '', label: '--请选择--'});
        for (let i = 0; i < res.length; i++) {
          this.mchntAll.push({value: res[i].code, label: res[i].name + '--' + res[i].code});
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
        ApiService.batchPay.pageOrderBatch({
          pageSize: self.pageSize,
          pageNo: self.pageNo,
          mchntCode: self.formInline.mchntCode,
          batchStatus: self.formInline.batchStatus
        }).then((res) =>{
          self.tableData = res.result;
          self.totalCount = res.totalCount
        })
      },
      toDetail(index, row) {
        this.$router.push({path: 'detailCollectBatchCheck', query: {id: row.batchId}});
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
      //状态格式化
      statusFormat(row, col){
        if (row.batchStatus === 0) {
          return '无效'
        } else if (row.batchStatus === 1) {
          return '待复核'
        } else if (row.batchStatus === 2) {
          return '订单待处理'
        } else if (row.batchStatus === 3) {
          return '订单处理中'
        } else if (row.batchStatus === 4) {
          return '订单处理结束'
        } else if (row.batchStatus === 5) {
          return '已生成报表'
        } else if (row.batchStatus === 6) {
          return '异常同步中'
        }
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
