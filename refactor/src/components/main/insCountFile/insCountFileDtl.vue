<template>
  <div class="content">
    <div><p>对账信息</p></div>
    <el-form   label-width="150px" class="demo-form-inline">
      <el-row>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账状态：" >
            <el-col :span="20">
              <el-input v-model="formDtl.statusName" :disabled="true" ></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
          <el-form-item label="对账详情：" >
            <el-col :span="20">
              <el-input v-model="formDtl.statusDescFriendly" :disabled="true" ></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2"><el-button type="text" @click="dataColletion()" :disabled="isClicks.datacollectStatus">数据采集</el-button></el-col>
        <el-col :span="2"><el-button type="text" @click="countCheck()" :disabled="isClicks.checkStatus">对账</el-button></el-col>
        <el-col :span="3"><el-button type="text" @click="createFile()" :disabled="isClicks.fileStatus">推送对账文件</el-button></el-col>
        <el-col :span="2"><a :href="href"><el-button type="text" @click="loadFile()">下载对账文件</el-button></a></el-col>
        <!--<el-col :span="2"><el-button type="text" @click="loadFile()">下载对账文件</el-button></el-col>-->
      </el-row>
      <el-row>
        <el-col>
          <el-button type="info" @click="onCance()">取消</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    data() {
      return {
      	href:'',
        formDtl:{},
        isClicks:{
          datacollectStatus:true,
          checkStatus:true,
          fileStatus:true
        }
      }
    },
    created() {
      let self=this;
      let insCountId = self.$route.query.countId;
    	// 详情页数据 加载
      ApiService.actCheck.insAccountCheckDetail({id:insCountId}).then(res => {
      	//加载详情信息
        self.loadDtlInfo(res.data);
        self.href=ApiService.actCheck.downloadAccountCheck+'?clearingDate='+self.formDtl.clearingDate+'&insCode='+self.formDtl.insCode+
          '&modelCode='+self.formDtl.modelCode+'&type=1';
      });
    },
    methods: {
    	formatTemp(){
    		let self=this,tempObj={channelCode:'',clearingDate:'',insCode:'',modelCode:''};
    		for(let key in tempObj){
          tempObj[key]=self.formDtl[key]
        }

        return tempObj;
      },
      dataColletion(){
        let self=this;
        self.$confirm('是否进行数据采集?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	let obj={};
        	// 置灰相应按钮
          self.allBtnChange();
          obj=self.formatTemp();
          // 数据采集
          ApiService.actCheck.dataCollect(obj).then(res => {
            if(res.code=='00000'){
              self.$confirm(res.message,'生成文件结果',{
                confirmButtonText: '确定',
              }).then(() => {
                self.onCance();
              });
            }else{
              self.$confirm(res.message,'生成文件结果',{
                confirmButtonText: '确定',
                type: 'warning'
              }).then(() => {
                self.onCance();
              });
            }
          });
        })

      },
      countCheck(){
        let self=this;
        self.$confirm('是否进行对账?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let obj={};
          // 置灰相应按钮
          self.allBtnChange();
          obj=self.formatTemp();
          // 对账
          ApiService.actCheck.accountCheck(obj).then(res => {
            if(res.code=='00000'){
              self.$confirm(res.message,'生成文件结果',{
                confirmButtonText: '确定',
              }).then(() => {
                self.onCance();
              });
            }else{
              self.$confirm(res.message,'生成文件结果',{
                confirmButtonText: '确定',
                type: 'warning'
              }).then(() => {
                self.onCance();
              });
            }
          });
        })

      },
      createFile(){
        let self=this;
        self.$confirm('是否生成对账文件?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let obj={};
          // 置灰相应按钮
          self.allBtnChange();
          obj=self.formatTemp();
          // 生成对账文件
          ApiService.actCheck.produceAccountCheck(obj).then(res => {
            if(res.code=='00000'){
              self.$confirm(res.message,'生成文件结果',{
                confirmButtonText: '确定',
              }).then(() => {
                self.onCance();
              });
            }else{
              self.$confirm(res.message,'生成文件结果',{
                confirmButtonText: '确定',
                type: 'warning'
              }).then(() => {
                self.onCance();
              });
            }
          });
        })
      },
      allBtnChange(){
      	let self=this;
      	for(let key in self.isClicks){
          self.isClicks[key]=true;
        }
      },
      loadDtlInfo(data){
        let self=this;
        self.formDtl={};
        if(data){
          self.formDtl=data;
        }

        // 判断按钮是否需要置灰 数据采集可点状态
        let Status=data.status;
        if(Status=='I'||Status=='F1'||Status=='F2'||Status=='F3'||Status=='F4'){
          self.isClicks.datacollectStatus=false;
        }

        // 对账按钮可点状态
        if(Status=='S2'||Status=='F3'||Status=='F4'){
          self.isClicks.checkStatus=false;
        }

        // 生成对账文件按钮可点状态
        if(Status=='S4'||Status=='F5'){
          self.isClicks.checkStatus=false;
        }
      },
      loadFile() {
        let self=this;
        self.onCance();
      },
      onCance(){
        this.$router.push('/insAccountCheck');
      }
    },
  }

</script>
<style lang="less" scoped>
  @import "../../../less/modules/base.less";
</style>

