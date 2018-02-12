<template>
  <div class="content">
    <div>
      <el-form :model="formData1" ref="formData1">
        <el-row>
          <el-col :md="{span: 10, push: 1}" :sm="{span: 14, push: 1}" :xs="{span: 15, push: 1}">
            <el-form-item label="商户" prop="code">
              <el-col :sm="{span:20}" :xs="{span:18}">
                <el-select v-model="formData1.code" filterable placeholder="请选择">
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
          <el-col  :lg="{span: 6, push: 8}" :md="{span: 6, push: 8}" :sm="{span: 6, push: 4}" :xs="{span: 9}"   >
            <el-col :lg="{span:6,push:12}" :md="{span:10,push:6}" :sm="{span: 12}" :xs="{span: 24}">
              <el-button type="primary" @click="onSearch('formData1')" class="search_btn">搜索</el-button>
            </el-col>
            <el-col :lg="{span:6,push:13}" :md="{span:10,push:6}" :sm="{span: 12}" :xs="{span: 24}" >
              <el-button  @click="onClear('formData1')" class="search_btn">清除</el-button>
            </el-col>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-table :data="tableData" border class="itemStyle1"  ref="multipleTable" >
      <el-table-column prop="code" label="商户编号" align="center" min-width="10%"></el-table-column>
      <el-table-column prop="name" label="商户名称" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="statusName" label="商户状态" align="center" min-width="11%"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center"   min-width="11%" :formatter="timeFormat"></el-table-column>
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
      return {
        tableData: [],
        formData1:{
          code:'',
          pageNo:0,
          pageSize:10
        },
        formData:{
          mchntCode:[]
        },
        pageSizes:[10,20,30],
        totalCount:0,
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
      this.loadTable();
    },
    methods: {
    	loadTable(){
        ApiService.mchntRoute.mchntRouteList(this.formData1).then(res => {
          this.tableData=[];
          if(res.data){
            this.tableData=res.data;
          }

          //总条数
          this.totalCount=res.totalRows;
        });
      },
      timeFormat(row, column){
        let date = row[column.property];
        if (!date) {
          return "";
        }
        return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
      },
      onClear(formData){
        this.$refs[formData].resetFields();
      },
      onSearch(){
      	this.loadTable();
      },
      handleEdit(index, row) {
        this.$router.push({path: "/merRouteMngDtl",query:{id: row.id}});
      },
      handleSizeChange(val) {
        this.formData1.pageSize=val;
        this.loadTable();
      },
      handleCurrentChange(val) {
        this.formData1.pageNo=val;
        this.loadTable();
      }
    },
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
</style>

