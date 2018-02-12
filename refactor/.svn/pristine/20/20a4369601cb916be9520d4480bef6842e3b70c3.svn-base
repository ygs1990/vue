<template>
  <div class="content">
    <div>
      <el-dialog title="搜索条件"  :visible.sync="dialogVisible1" size="tiny" top="30%" @close="closeSearch()">
        <el-form ref="formData1" :model="formData1" label-width="140px">
          <el-row>
            <el-col >
              <el-form-item label="商户" prop="mchntCode" >
                <el-col :span="20">
                  <el-select v-model="formData1.mchntCode" filterable placeholder="全部">
                    <el-option
                      v-for="item in formData.mchntCom"
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
              <el-form-item label="所属通道机构" prop="insCode">
                <el-col :span="20">
                  <el-select v-model="formData1.insCode" filterable placeholder="全部">
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
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="loadTable()">搜索</el-button>
          <el-button  @click="onClear('formData1')">清除</el-button>
        </span>
      </el-dialog>
      <el-dialog title="余额初始化" :visible.sync="dialogVisible" size="tiny" top="30%" @close="closeInit('formData2')" custom-class="myClass">
        <el-form label-width="120px" ref="formData2" :rules="rules" :model="formData2">
          <el-row>
            <el-col :span="22" :xs="24">
              <el-form-item label="产品类型：" prop="businessCode">
                <el-col :span="24">
                  <el-select v-model="formData2.businessCode" placeholder="请选择">
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
          </el-row>
          <el-row>
            <el-col :span="22" :xs="24">
              <el-form-item label="商户：" prop="mchntCode">
                <el-col :span="24">
                  <el-select v-model="formData2.mchntCode" filterable placeholder="请选择" >
                    <el-option
                      v-for="item in formData.mchntAcc"
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
            <el-col :span="22" :xs="24">
              <el-form-item label="通道机构：" prop="insCode" >
                <el-col :span="24">
                  <el-select v-model="formData2.insCode" filterable placeholder="请选择">
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
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="onCance('formData2')">取 消</el-button>
          <el-button type="primary" @click="onSearch('formData2')">确 定</el-button>
        </span>
      </el-dialog>
      <el-row>
        <el-col :span="12">
          <el-button type="primary" @click="dialogVisible = true">余额初始化</el-button>
        </el-col>
        <el-col  :span="12">
          <el-button class="rightBtn" type="primary" icon="search" @click="dialogVisible1 = true">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" border  class="itemStyle1"  ref="multipleTable" >
      <el-table-column prop="mchntCode" label="商户编号" align="center" min-width="12%"></el-table-column>
      <el-table-column prop="mchntName" label="商户名称" align="center" min-width="12%"></el-table-column>
      <el-table-column prop="businessName" label="产品类型" align="center" min-width="12%"></el-table-column>
      <el-table-column prop="channelName" label="通道名称" align="center" min-width="12%"></el-table-column>
      <el-table-column prop="insCode" label="通道机构编号" align="center" min-width="14%"></el-table-column>
      <el-table-column prop="insName" label="通道机构名称" align="center" min-width="14%" ></el-table-column>
      <el-table-column prop="balances" label="通道总余额" align="center" min-width="12%" ></el-table-column>
      <el-table-column prop="settleds" label="商户可用余额" align="center" min-width="12%" ></el-table-column>
      <el-table-column prop="unsettleds" label="商户在途余额" align="center" min-width="12%" ></el-table-column>
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
  import ElDialog from "../../../../node_modules/element-ui/packages/dialog/src/component";
  export default {
    components: {ElDialog},
    props:'formData1',
    data() {
      return {
        dialogVisible: false,
        dialogVisible1: false,
      	formData1:{
          mchntCode:'',
          insCode:'',
          pageSize:10,
          pageNo:1,
        },
        formData2:{
          mchntCode:'',
          businessCode:'',
          insCode:''
        },
        formData:{
        	code:[{
            name:'VERIFY',
            code:'VERIFY'
          },{
        		name:'PAY',
            code:'PAY'
          }],
          mchntAcc:[],
          mchntCom:[],
          txListTemp:[],
          insMchntCode:[],
          txCode:[]
        },
        rules:{
          mchntCode: [{ required: true, message: '不能为空', trigger: 'change' }],
          businessCode: [{ required: true, message: '不能为空', trigger: 'change' }],
          insCode: [{ required: true, message: '不能为空', trigger: 'change' }],
        },
        tableData: [],
        pageSizes:[10,20,30],
        totalCount:0
      }
    },
    created() {
    	this.loadTable();
      this.loadSearch();
    },
    methods: {
    	loadTable(){
    		let self=this;
        ApiService.mchntAccount.mchntAccountList(self.formData1).then(res => {
          self.tableData=[];
          if(res.data){
            self.tableData=res.data;
          }

          //总条数
          self.totalCount=res.totalRows;
        });
        self.dialogVisible1=false;

      },
      loadSearch(){
    		let self=this;
        // 商户 加载
        ApiService.common.mchntList().then(res => {
          self.formData.mchntCom=[];
          if(res.data){
            self.formData.mchntCom=res.data;
          }
        });
        // 通道机构数据加载
        ApiService.common.insList().then(res => {
          self.formData.insMchntCode=[];
          if(res.data){
            self.formData.insMchntCode=res.data;
          }
        });
      },
      handleEdit(index, row) {
        this.$router.push({path: "/home/agency/translogDetail",query:{transId: row.id}});
      },
      handleSizeChange(val) {
        this.formData1.pageSize=val;
        this.loadTable();

      },
      handleCurrentChange(val) {
        this.formData1.pageNo=val;
        this.loadTable();
      },
      onSearch(formData) {
      	//必填项不能为空
        this.$refs[formData].validate((valid) => {
          if(valid){
            ApiService.mchntAccount.initMchntAccountList(this.formData2).then(res => {
              if(res.code==-1){
                this.dialogVisible=false;
                this.$alert('初始化不成功','初始化结果',{
                  confirmButtonText: '确定',
                  type: 'warning'
                });
                this.$refs[formData].resetFields();
              }else if(res.code==0){
                this.dialogVisible=false;
                this.$alert('成功初始化余额','初始化结果',{
                  confirmButtonText: '确定',
                });
                this.loadTable();
                this.loadSearch();
                this.$refs[formData].resetFields();
              }else if(res.code==-2){
                this.$alert(res.message,'初始化结果',{
                  confirmButtonText: '确定',
                  type: 'warning'
                })
              }
            });
          }
        })
      },
      onCance(formData){
        this.dialogVisible=false;
        this.$refs[formData].resetFields();
      },
      onClear(formData){
        this.$refs[formData].resetFields();
      },
      closeInit(formData){
        this.$refs[formData].resetFields();
      },
      closeSearch(){
      	let  formData2Temp={
          mchntCode:'',
          insCode:'',
        }
        for(let key in formData2Temp){
          this.formData1[key]='';
        }
      }
    },
    computed:{
      checkBussiness:function () {
        return  this.formData2.businessCode
      }
    },
    watch:{
      checkBussiness:function (newValue) {
        // 商户数据加载
        let self=this;
        self.formData2.mchntCode='';
        if(newValue!=""){
          ApiService.mchntAccount.mchntList({businessCode:newValue}).then(res => {
            self.formData.mchntAcc=[];
            if(res.data){
              self.formData.mchntAcc=res.data;
            }
          });
        }

      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
  .el-table  th,.el-table td{
    text-align: center !important;
  }
</style>

