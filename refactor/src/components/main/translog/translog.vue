<template>
  <div class="content">
    <div>
      <el-dialog title="搜索条件" :visible.sync="dialogVisible" size="small" top="30%" @close="closeSearch('formData1')">
        <el-form  :model="formData1" ref="formData1" label-width="90px" class="demo-form-inline">
          <el-row>
            <el-col :span="12">
              <el-form-item label="产品类型" prop="code">
                <el-col :span="20">
                  <el-select v-model="formData1.code" placeholder="请选择">
                    <el-option
                      v-for="item in formData.code"
                      :key="item.code"
                      :label="item.name"
                      :value="item.code">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="交易类型" prop="txCode">
                <el-col :span="20">
                  <el-select v-model="formData1.txCode" placeholder="请选择">
                    <el-option
                      v-for="item in formData.txCode"
                      :key="item.code"
                      :label="item.name"
                      :value="item.code">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="交易状态" prop="txResult">
                <el-col :span="20">
                  <el-select v-model="formData1.txResult" placeholder="请选择">
                    <el-option
                      v-for="item in formData.txResult"
                      :key="item.id"
                      :label="item.value"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="商户" prop="mchntCode">
                <el-col :span="20">
                  <el-select v-model="formData1.mchntCode" filterable placeholder="全部">
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
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="通道商户" prop="insMchntCode">
                <el-col :span="20">
                  <el-select v-model="formData1.insMchntCode" filterable placeholder="全部">
                    <el-option
                      v-for="item in formData.insMchntCode"
                      :key="item.code"
                      :label="item.code+' - '+item.name"
                      :value="item.code">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="商户订单号" prop="mchntTxNo">
                <el-col :span="20">
                  <el-input v-model="formData1.mchntTxNo" placeholder="请输入"></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="row-last">
            <el-col :span="12">
              <el-form-item label="通道订单号" prop="channelTxNo">
                <el-col :span="20">
                  <el-input v-model="formData1.channelTxNo" placeholder="请输入"></el-input>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="银行卡号" prop="cardNo">
                <el-col :span="20">
                  <el-input v-model="formData1.cardNo" placeholder="请输入"></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <span slot="footer" >
          <el-button type="primary" icon="search" @click="onSearch()">搜索</el-button>
          <el-button  @click="onClear('formData1')">清除</el-button>
        </span>
      </el-dialog>
      <el-row>
        <el-col >
          <el-button type="primary" class="rightBtn" icon="search" @click="dialogVisible = true">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div >
      <div>
        <el-table :data="tableData0" border class="itemStyle"  ref="multipleTable" >
          <el-table-column prop="countNum" label="总笔数" align="center" min-width="16%"></el-table-column>
          <el-table-column prop="txAmounts" label="总金额（元）" align="center" min-width="16%"></el-table-column>
          <el-table-column prop="agentProfits" label="代理商分润总额（元）" align="center" min-width="18%"></el-table-column>
          <el-table-column prop="mchntCosts" label="商户手续费总额（元）" align="center" min-width="18%"></el-table-column>
          <el-table-column prop="juProfits" label="钜真收益总额（元）" align="center" min-width="17%"></el-table-column>
          <el-table-column prop="channelCosts" label="通道成本总额（元）" align="center" min-width="17%"></el-table-column>
          <el-table-column prop="settledAmounts" label="结算金额总额（元）" align="center" min-width="17%"></el-table-column>
        </el-table>
      </div>
      <el-table :data="tableData" border class="itemStyle1"  ref="multipleTable" >
        <el-table-column prop="mchntName" label="商户名称" align="center" min-width="6%"></el-table-column>
        <el-table-column prop="insMchntName" label="通道商户名称" align="center" min-width="8%"></el-table-column>
        <el-table-column prop="mchntTxNo" label="商户订单号" align="center" min-width="8%"></el-table-column>
        <el-table-column prop="channelTxNo" label="通道订单号" align="center" min-width="8%"></el-table-column>
        <el-table-column prop="txTime" label="交易时间" align="center" sortabel="true" :formatter="timeFormat" min-width="8%"></el-table-column>
        <el-table-column prop="txAmounts" label="交易金额(元)" align="center" min-width="8%" ></el-table-column>
        <el-table-column prop="agentProfits" label="代理商分润(元)" align="center" min-width="8%" ></el-table-column>
        <el-table-column prop="mchntCosts" label="商户手续费(元)" align="center" min-width="8%" ></el-table-column>
        <el-table-column prop="juProfits" label="钜真收益(元)" align="center" min-width="8%" ></el-table-column>
        <el-table-column prop="channelCosts" label="通道成本(元)" align="center" min-width="7%" ></el-table-column>
        <el-table-column prop="txResultName" label="交易状态" align="center" min-width="7%" ></el-table-column>
        <el-table-column prop="txCodeName" label="交易类型" align="center" min-width="7%" ></el-table-column>
        <el-table-column label="操作" align="center" min-width="9%" >
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
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
  	props:'message',
    data() {
      return {
        dialogVisible: false,
        formData: {
          code:[],
          txCode:[],
          txResult:[],
          mchntCode:[],
          insMchntCode:[]
        },
        formData1:{
          code:'' ,
          txCode:'',
          txResult:'',
          mchntCode:'',
          insMchntCode:'',
          mchntTxNo:'',
          channelTxNo:'',
          cardNo:'',
          type:1,
          pageSize:10,
          pageNo:1,
        },
        tableData0:[
          {
            countNum:'',
            txAmounts:'',
            agentProfits:'',
            mchntCosts:'',
            juProfits:'',
            channelCosts:''
          }
        ],
        tableData: [],
        pageSizes:[10,20,30],
        totalCount:0,
      }
    },
    created() {
  		// 产品类型 交易类型数据加载
      ApiService.common.businessList().then(res => {
        this.formData.code=[];
        if(res.data){
          this.formData.code=res.data;
        }
      });
      // 交易状态数据加载
      ApiService.common.resultNames().then(res => {
        // 加载产品类型
        this.formData.txResult=[];
        if(res.data){
          this.formData.txResult=res.data;
        }
      });
      // 商户数据加载
      ApiService.common.mchntList().then(res => {
        this.formData.mchntCode=[];
        if(res.data){
          this.formData.mchntCode=res.data;
        }
      });
      // 通道商户数据加载
      ApiService.common.insMchntList().then(res => {
        this.formData.insMchntCode=[];
        if(res.data){
          this.formData.insMchntCode=res.data;
        }
      });
      //默认加载列表数据
//      this.loadTable();
    },
    methods: {
  		loadTable(){
  			let self=this;
        ApiService.translog.list(this.formData1).then(res => {
          self.tableData=[];
          if(res.data){
            self.tableData=res.data;
          }
          //总条数
          this.totalCount=res.totalRows;
        });
      },
      handleEdit(index, row) {
        this.$router.push({path: "/translogDtl",query:{transId: row.id}});
      },
      timeFormat(row, column){
        let date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
      },
      handleSizeChange(val) {
        this.formData1.pageSize=val;
        this.loadTable();

      },
      handleCurrentChange(val) {
        this.formData1.pageNo=val;
        this.loadTable();
      },
      onSearch() {
      	let self=this;
        ApiService.translog.sumTxCount(self.formData1).then(res => {
          self.tableData0=[];
          if(res.data){
            self.tableData0.push(res.data);
          }
        });
        this.loadTable();
        this.dialogVisible=false;
      },
      onClear(formData) {
        this.$refs[formData].resetFields();
      },
      closeSearch(formData){
      	this.onClear(formData);
      }
    },
    computed:{
      checkCode() {
        return this.formData1.code;
      },
    },
    watch:{
      checkCode(newValue) {
        this.formData.txCode=[];
        this.formData1.txCode='';
        let dataTemp=this.formData.code;
        for(let i=0,len=dataTemp.length;i<len;i++){
        	if(dataTemp[i].code==newValue){
            this.formData.txCode=dataTemp[i].txList;
          }
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
.el-button + .el-button{
  margin-left:0;
}
</style>

