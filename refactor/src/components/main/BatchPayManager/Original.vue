<template>
	<div class="content">
		<div class="detail">
			<p>汇总信息</p>
			<el-table :data="detail" border style="width: 100%" ref="detail">
				<el-table-column prop="mchntCode" label="商户编号"  width="180"></el-table-column>
				<el-table-column prop="mchntName" label="商户名称"></el-table-column>
				<el-table-column prop="batchNo" label="订单批次号" width="220"></el-table-column>
				<el-table-column prop="sumCount" label="明细数目" width="220"></el-table-column>
				<el-table-column prop="strSumAmount" label="金额(单位:元)" width="220"></el-table-column>
				<el-table-column prop="batchStatus" label="状态" :formatter="statusFormat"></el-table-column>
			</el-table>
		</div>
		<div class="pageOrders">
			<p>明细信息</p>
			<el-table :data="tableData" border style="width: 100%" ref="multipleTable">
				<el-table-column prop="serial" label="明细序号"></el-table-column>
				<el-table-column prop="accountType" label="收款账户类型" ></el-table-column>
				<el-table-column prop="accountNo" label="收款人账号"></el-table-column>
				<el-table-column prop="accountName" label="收款户名"></el-table-column>
				<el-table-column prop="mchntName" label="收款人身份证号（可空）"></el-table-column>
				<el-table-column prop="idNo" label="收款联行号（可空）"></el-table-column>
				<el-table-column prop="bankName" label="收款账户开户行名称"></el-table-column>
				<el-table-column prop="strAmt" label="金额（单位：元）"></el-table-column>
				<el-table-column prop="purpose" label="资金用途"></el-table-column>
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
   			detail:[],
   			tableData: [],
   			multipleSelection: [],
   			select_cate: '',
   			select_word: '',
   			totalCount: 0,
   			pageSize: 10,
   			pageNo: 1,
   			pageSizes: [10, 20, 30, 40]
   		}
   	},
   	created(){
   		this.batchId = this.$route.query.id;
   		this.getDetail();
   		this.getData();
   	},
   	methods: {
   		handleCurrentChange(val){
   			this.pageNo = val;
   			this.getData();
   		},
   		getDetail(){
   			let _this = this;
   			ApiService.batchPay.orderBatchDetail({
					batchId:this.batchId
				}).then(res => {
					_this.detail.push(res.data)
				})
   		},
   		getData(){
   			let self = this;
   			ApiService.batchPay.pageOrders({
   				batchId:this.batchId,
   				pageSize: self.pageSize,
   				pageNo: self.pageNo,
   			}).then((res) =>{
   				self.tableData = res.result;
   				self.totalCount = res.totalCount
   			})
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
  }
}
</script>
<style lang="less">
	.content{
		border: 1px solid #eee;
		margin-top: 25px;
		padding: 20px 20px 0;
	}
	.handle-box {
		margin-bottom: 20px;
	}
	p{
		margin:10px;
	}
</style>