<template>
	<div class="handle-box">
		<el-form :model="mchntInfo" label-width="120px">
			<el-row>
				<el-col :span="10" :offset="1">
					<el-form-item label="批次号：" prop="batchNo">
						<el-input v-model="mchntInfo.batchNo" placeholder="必填" :disabled='disabled'></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="10" :offset="1">
					<el-form-item label="商户编号：" prop="mchntCode">
						<el-input v-model="mchntInfo.mchntCode" placeholder="必填" :disabled='disabled'></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="10" :offset="1">
					<el-form-item label="商户中文名称：" prop="batchNo">
						<el-input v-model="mchntInfo.batchNo" placeholder="必填" :disabled='disabled'></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="10" :offset="1">
					<el-form-item label="批量代付状态：" prop="batchStatus">
						<el-select v-model="mchntInfo.batchStatus" placeholder="全部" :disabled='disabled'>
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
			</el-row>
			<el-row>
				<el-col :span="10" :offset="1">
					<el-form-item label="总共笔数：" prop="sumCount">
						<el-input v-model="mchntInfo.sumCount" placeholder="必填" :disabled='disabled'></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="10" :offset="1">
					<el-form-item label="总共金额(元)：" prop="sumAmount">
						<el-input v-model="mchntInfo.sumAmount" placeholder="必填" :disabled='disabled'></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="10" :offset="1">
					<el-form-item label="文件：">
						<a :href='downloadOrderBatchFile'>下载原始文件</a>
						<span>|</span>
						<a :href='downloadOrderBatchFile'>打开原始文件</a>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="10" :offset="1">
					<el-form-item label="审核结果：">
						<el-radio-group v-model="mchntInfo.batchStatus">
						    <el-radio :label="2">通过</el-radio>
						    <el-radio :label="0">拒绝</el-radio>
						</el-radio-group>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row v-if="mchntInfo.batchStatus==0">
				<el-col :span="10" :offset="1">
					<el-form-item label="*拒绝原因:">
						<el-input
						  class='rejectReason'
						  type="textarea"
						  :autosize='autosize'
						  :rows="2"
						  placeholder="请输入内容"
						  v-model="mchntInfo.rejectReason">
						</el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<div class="button">
              <el-button type="primary" @click="onSubmit()">审核</el-button>
              <el-button type="default" @click="back()">返回</el-button>
            </div>
          </el-form>
	</div>
</template>
<script>
import ApiService from '@/services/API-servies'
	export default {
		data(){
			return {
				disabled:true,
				batchId:'',
				downloadOrderBatchFile:'',
				autosize:true,
				mchntInfo:{
					batchNo:'',
					mchntCode:'',
					batchStatus:'',
					sumCount:'',
					sumAmount:'',
					mchntInfo:'',
					rejectReason:''
				}
			}
		},
		created(){
			this.batchId = this.$route.query.id;
			this.downloadOrderBatchFile = `${ApiService.batchPay.downloadOrderBatchFile}?type=1&&batchId=${this.batchId}`;
			this._getDetail()
		},
		methods:{
			_getDetail(){
				ApiService.batchPay.orderBatchDetail({
					batchId:this.batchId
				}).then(res => {
					res.data.batchStatus = res.data.batchStatus + '';
					this.mchntInfo=res.data
				})
			},
			onSubmit(){
				ApiService.batchPay.checkOrderBatch({
					batchStatus:this.mchntInfo.batchStatus,
					batchId:this.batchId
		        }).then((res) =>{
		          if(res.code === 0){
		            this.$message.success('审核成功');
		            this.$router.push({path: 'batchPayCheck'})
		          }else {
		            this.$message.error('审核失败');
		          }
		        }).catch((res) =>{
		          this.$message.error('审核失败');
		        })
			},
			back(){
		        this.$router.push("/batchPayCheck")
		      },
		}
	}
</script>
<style lang="less" scoped>
	.handle-box {
		margin-top: 20px;
		position: relative;
	}
</style>