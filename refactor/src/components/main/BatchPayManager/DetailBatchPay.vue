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
					<el-form-item label="总共金额(元)：" prop="strSumAmount">
						<el-input v-model="mchntInfo.strSumAmount" placeholder="必填" :disabled='disabled'></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="10" :offset="1">
					<el-form-item label="成功笔数：" prop="sucessCount">
						<el-input v-model="mchntInfo.sucessCount" placeholder="必填" :disabled='disabled'></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="10" :offset="1">
					<el-form-item label="成功金额(元)：" prop="strSucessAmount">
						<el-input v-model="mchntInfo.strSucessAmount" placeholder="必填" :disabled='disabled'></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="10" :offset="1">
					<el-form-item label="失败笔数：" prop="failCount">
						<el-input v-model="mchntInfo.failCount" placeholder="必填" :disabled='disabled'></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="10" :offset="1">
					<el-form-item label="失败金额(元)" prop="strFailAmount">
						<el-input v-model="mchntInfo.strFailAmount" placeholder="必填" :disabled='disabled'></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="10" :offset="1">
					<el-form-item label="文件：">
						<a :href='downloadOrderBatchFile'>下载原始文件</a>
						<span>|</span>
						<a href='javascript:;' @click='openOriginal(batchId)'>打开原始文件</a>
					</el-form-item>
				</el-col>
			</el-row>
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
				mchntInfo:{
					batchNo:'',
					mchntCode:'',
					batchStatus:'',
					sumCount:'',
					sumAmount:'',
					sucessCount:'',
					sucessAmount:'',
					failCount:'',
					failAmount:'',
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
			openOriginal(batchId){
				this.$router.push({path: 'original', query: {id:batchId}})
			}
		}
	}
</script>
<style lang="less" scoped>
	.handle-box {
		margin-top: 20px;
		position: relative;
	}
</style>