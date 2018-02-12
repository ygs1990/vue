<template>
  <div class="content">
    <el-table :data="tableData" border class="itemStyle1"  ref="multipleTable" >
      <el-table-column prop="id" label="调额编号" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="mchntCode" label="商户编号" align="center" min-width="12%"></el-table-column>
      <el-table-column prop="mchntName" label="商户名称" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="insName" label="通道机构名称" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="settledTypeName" label="额度类型" align="center" sortabel="true"  min-width="11%"></el-table-column>
      <el-table-column prop="adjustDirectName" label="调额类型" align="center" min-width="11%" ></el-table-column>
      <el-table-column prop="adjustAmounts" label="调整金额" align="center" min-width="11%" ></el-table-column>
      <el-table-column prop="adjustStatusName" label="调额状态" align="center" min-width="11%" ></el-table-column>
      <el-table-column label="操作" align="center" min-width="11%">
        <template scope="scope">
          <el-button type="info" size="small" @click="handleEdit(scope.$index, scope.row)">复核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination" >
      <el-pagination
        @size-change="handleSizeChange"
        @current-change ="handleCurrentChange"
        :current-page="formData.pageNo"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="pageSizes"
        :page-size="formData.pageSize"
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
        tableData: [],
        formData:{
          pageNo:1,
          pageSize:10
        },
        pageSizes:[10,20,30],
        totalCount:0,
      }
    },
    created() {
      this.loadTable();
    },
    methods: {
    	loadTable(){
        ApiService.mchntAccountTmp.pageCheckMchntList(this.formData).then(res => {
          if(res.data){
            this.$data.tableData=[];
            for(let i=0,len=res.data.length;i<len;i++){
              this.$data.tableData.push(res.data[i]);
            }
          }

          //总条数
          this.totalCount=res.totalRows;
        });
      },
      handleEdit(index, row) {
        this.$router.push({path: "/MerManuAdjDtlCheck",query:{id: row.id}});
      },
      handleSizeChange(val) {
        this.formData.pageSize=val;
        this.loadTable();
      },
      handleCurrentChange(val) {
        this.formData.pageNo=val;
        this.loadTable();
      }
    },
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
</style>

