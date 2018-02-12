<template>
  <div class="content">
    <p>商户路由详情</p>
    <div>
      <el-form ref="formData" :model="formData"   label-width="120px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="商户编号：" >
              <el-col :span="20">
                <el-input v-model="formData.mchntForRoute.code" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="商户名称:" >
              <el-col :span="20">
                <el-input v-model="formData.mchntForRoute.name" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="产品类型：" >
              <el-col :span="24">
                  <el-checkbox v-for="(item,index) in formData.businessList" v-model="item.check" :label="item.name" :key="item.code" disabled>{{item.name}}</el-checkbox>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <div>
          <el-tabs v-model="formConf.actionName" type="border-card"  >
            <el-tab-pane :key="item0.code" v-for="(item0, index) in formData.businessList" :label="item0.name" :name="item0.code">
              <el-row>
              <el-col :span="8">
                <el-form-item label="交易权限：" label-width="90px">
                </el-form-item>
              </el-col>
            </el-row>
              <div v-if="item0.code=='POSP'">
                <el-row>
                  <el-checkbox v-for="item1 in item0.pospTxList" v-model="item1.checkAgent" :label="item1.name" :key="item1.code" disabled>
                    {{item1.name}}
                  </el-checkbox>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="路由配置：" label-width="90px">
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-table :data="tableData.pospTxList" border class="itemStyle1"  ref="multipleTable" >
                  <el-table-column prop="txName" label="交易类型" align="center" min-width="10%"></el-table-column>
                  <el-table-column prop="cardType" label="卡类型" align="center" min-width="11%" :formatter="cardTypeFormat"></el-table-column>
                  <el-table-column label="通道商户"   align="center" min-width="11%">
                    <template scope="scope" >
                      <el-select v-model="scope.row.insMchntId"  @change="handleChange(scope.$index, scope.row)" :disabled="formConf.isAbled" filterable placeholder="请选择">
                        <el-option
                          v-for="item in scope.row.channelList"
                          :key="item.insMchntCode"
                          :label="item.insMchntCode+' - '+item.insMchntName"
                          :value="item.insMchntId">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div v-if="item0.code=='COLLECT'">
                <el-row>
                  <el-checkbox v-for="item1 in item0.collectTxList" v-model="item1.checkAgent" :label="item1.name" :key="item1.code" disabled>
                    {{item1.name}}
                  </el-checkbox>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="路由配置：" label-width="90px">
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-table :data="tableData.collectTxList" border class="itemStyle1"  ref="multipleTable" >
                  <el-table-column prop="txName" label="交易类型" align="center" min-width="10%"></el-table-column>
                  <el-table-column prop="cardType" label="卡类型" align="center" min-width="11%" :formatter="cardTypeFormat"></el-table-column>
                  <el-table-column label="通道商户"   align="center" min-width="11%">
                    <template scope="scope" >
                      <el-select v-model="scope.row.insMchntId"  @change="handleChange(scope.$index, scope.row)" :disabled="formConf.isAbled" filterable placeholder="请选择">
                        <el-option
                          v-for="item in scope.row.channelList"
                          :key="item.insMchntCode"
                          :label="item.insMchntCode+' - '+item.insMchntName"
                          :value="item.insMchntId">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div v-if="item0.code=='PAY'">
                <el-row>
                  <el-checkbox v-for="item1 in item0.payTxList" v-model="item1.checkAgent" :label="item1.name" :key="item1.code" disabled>
                    {{item1.name}}
                  </el-checkbox>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="路由配置：" label-width="90px">
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-table :data="tableData.payTxList" border class="itemStyle1"  ref="multipleTable" >
                  <el-table-column prop="txName" label="交易类型" align="center" min-width="10%"></el-table-column>
                  <el-table-column prop="cardType" label="卡类型" align="center" min-width="11%" :formatter="cardTypeFormat"></el-table-column>
                  <el-table-column label="通道商户"   align="center" min-width="11%">
                    <template scope="scope" >
                      <el-select v-model="scope.row.insMchntId" @change="handleChange(scope.$index, scope.row)" :disabled="formConf.isAbled" filterable placeholder="请选择">
                        <el-option
                          v-for="item in scope.row.channelList"
                          :key="item.insMchntCode"
                          :label="item.insMchntCode+' - '+item.insMchntName"
                          :value="item.insMchntId">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column label="支持银行"   align="center" min-width="11%">
                    <template scope="scope" >
                      <el-checkbox-group v-model="scope.row.bankCodeList">
                        <el-checkbox v-for="item in scope.row.juBankList" :label="item.bankCode" :key="item.bankCode" :disabled="formConf.isAbled">{{item.bankName}}</el-checkbox>
                      </el-checkbox-group>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div v-if="item0.code=='WECHAT_PAY'">
                <el-row>
                  <el-checkbox v-for="item1 in item0.wechatPayTxList" v-model="item1.checkAgent" :label="item1.name" :key="item1.code" disabled>
                    {{item1.name}}
                  </el-checkbox>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="路由配置：" label-width="90px">
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-table :data="tableData.wechatPayTxList" border class="itemStyle1"  ref="multipleTable" >
                  <el-table-column prop="txName" label="交易类型" align="center" min-width="10%"></el-table-column>
                  <el-table-column label="通道商户"   align="center" min-width="11%">
                    <template scope="scope" >
                      <el-select v-model="scope.row.insMchntId" @change="handleChange(scope.$index, scope.row)" :disabled="formConf.isAbled" filterable placeholder="请选择">
                        <el-option
                          v-for="item in scope.row.channelList"
                          :key="item.insMchntCode"
                          :label="item.insMchntCode+' - '+item.insMchntName"
                          :value="item.insMchntId">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div v-if="item0.code=='ALI_PAY'">
                <el-row>
                  <el-checkbox v-for="item1 in item0.aliPayTxList" v-model="item1.checkAgent" :label="item1.name" :key="item1.code" disabled>
                    {{item1.name}}
                  </el-checkbox>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="路由配置：" label-width="90px">
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-table :data="tableData.aliPayTxList" border class="itemStyle1"  ref="multipleTable" >
                  <el-table-column prop="txName" label="交易类型" align="center" min-width="10%"></el-table-column>
                  <el-table-column label="通道商户"   align="center" min-width="11%">
                    <template scope="scope" >
                      <el-select v-model="scope.row.insMchntId" @change="handleChange(scope.$index, scope.row)" :disabled="formConf.isAbled" filterable placeholder="请选择">
                        <el-option
                          v-for="item in scope.row.channelList"
                          :key="item.insMchntCode"
                          :label="item.insMchntCode+' - '+item.insMchntName"
                          :value="item.insMchntId">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div v-if="item0.code=='VERIFY'">
                <el-row>
                  <el-checkbox v-for="item1 in item0.verifyTxList" v-model="item1.checkAgent" :label="item1.name" :key="item1.code" disabled>
                    {{item1.name}}
                  </el-checkbox>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="路由配置：" label-width="90px">
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-table :data="tableData.verifyTxList" border class="itemStyle1"  ref="multipleTable" >
                  <el-table-column prop="txName" label="交易类型" align="center" min-width="10%"></el-table-column>
                  <el-table-column prop="cardType" label="卡类型" align="center" min-width="10%" :formatter="cardTypeFormat"></el-table-column>
                  <el-table-column label="通道商户"   align="center" min-width="11%">
                    <template scope="scope" >
                      <el-select v-model="scope.row.insMchntId" @change="handleChange(scope.$index, scope.row)" :disabled="formConf.isAbled" filterable placeholder="请选择">
                        <el-option
                          v-for="item in scope.row.channelList"
                          :key="item.insMchntCode"
                          :label="item.insMchntCode+' - '+item.insMchntName"
                          :value="item.insMchntId">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column label="支持银行"   align="center" min-width="11%">
                    <template scope="scope" >
                      <el-checkbox-group v-model="scope.row.bankCodeList">
                         <el-checkbox v-for="item in scope.row.juBankList" :label="item.bankCode" :key="item.bankCode" :disabled="formConf.isAbled">{{item.bankName}}</el-checkbox>
                      </el-checkbox-group>
                    </template>
                  </el-table-column>
                </el-table>
              </div>

              <div v-if="item0.code=='GATEWAY'">
                <el-row>
                  <el-checkbox v-for="item1 in item0.gatewayTxList" v-model="item1.checkAgent" :label="item1.name" :key="item1.code" disabled>
                    {{item1.name}}
                  </el-checkbox>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="路由配置：" label-width="90px">
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-table :data="tableData.gatewayTxList" border class="itemStyle1"  ref="multipleTable" >
                  <el-table-column prop="txName" label="交易类型" align="center" min-width="10%"></el-table-column>
                  <el-table-column label="通道商户"   align="center" min-width="11%">
                    <template scope="scope" >
                      <el-select v-model="scope.row.insMchntId" @change="handleChange(scope.$index, scope.row)" :disabled="formConf.isAbled" filterable placeholder="请选择">
                        <el-option
                          v-for="item in scope.row.channelList"
                          :key="item.insMchntCode"
                          :label="item.insMchntCode+' - '+item.insMchntName"
                          :value="item.insMchntId">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column label="支持银行"   align="center" min-width="11%">
                    <template scope="scope" >
                      <el-checkbox-group v-model="scope.row.bankCodeList">
                        <el-checkbox v-for="item in scope.row.juBankList" :label="item.bankCode" :key="item.bankCode"  :disabled="formConf.isAbled">{{item.bankName}}</el-checkbox>
                      </el-checkbox-group>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-form>
      <el-row>
        <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}" v-show="formConf.isShow">
          <el-button type="primary" @click="onSubmit()" >保存</el-button>
        </el-col>
        <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}" v-show="!formConf.isShow">
          <el-button type="primary" @click="onConfig()" >配置</el-button>
        </el-col>
        <el-col :lg="{span:2}" :md="{span:3}" :sm="{span: 4}" :xs="{span:6}">
          <el-button @click="onCance('formData')">取消</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    data() {
      return {
      	formConf:{
          actionName:'',
          isAbled:true,
          isShow:false,
        },
        formData:{
          mchntForRoute:{}
        },
        tableData:{
          pospTxList:[],
          collectTxList:[],
          payTxList:[],
          verifyTxList:[],
          aliPayTxList:[],
          wechatPayTxList:[],
          gatewayTxList:[],
        },
      }
    },
    created() {
      let self=this,idVal=self.$route.query.id;
      ApiService.mchntRoute.mchnRoutetDetail({id:idVal}).then(res => {
      	if(res.data){
      		let tempObj=res.data.businessList,channelList=res.data.mchntRouteForInsMchnt,listTemp,routeList=[];
      		//另外的数据
          routeList=res.data.mchntRouteList;
          self.formData={};
          self.formData=res.data;
          // 遍历产品类型数据
          for(let i=0,len=tempObj.length;i<len;i++){
          	//激活第0项tab
            self.formConf.actionName=tempObj[0].code;
            //posp模板数据
          	if(tempObj[i].code=="POSP"){
              self.tableData.pospList=[];
          		//查看是否有 消费D0 消费T1 之后确定对应模板
              for(let j=0,lent=tempObj[i].pospTxList.length;j<lent;j++){
              	//确定交易权限是 消费D0 或 消费T1
              	if(tempObj[i].pospTxList[j].needCharging){
              		for(let k=0,length=tempObj[i].pospTxList[j].cardTypeList.length;k<length;k++){
                    listTemp={};
              			//卡类型
                    listTemp.cardType=tempObj[i].pospTxList[j].cardTypeList[k];
              			//交易类型
                    listTemp.txCode=tempObj[i].pospTxList[j].code;
                    listTemp.channelList=[];
                    listTemp.juBankList=[];
                    listTemp.bankCodeList=[];
                    listTemp.idList=[];
                    listTemp.insMchntId='';
                    listTemp.id=null;
                    for(let g=0,routeLen=routeList.length;g<routeLen;g++){
                    	if(routeList[g].txCode==listTemp.txCode&&routeList[g].cardType==listTemp.cardType){
                        listTemp.insMchntId=routeList[g].insMchntId;
                        listTemp.juBankList=routeList[g].juBankList;
                        listTemp.id=routeList[g].id;
                        listTemp.idList=routeList[g].idList;
                        if(listTemp.juBankList){
                          for(let y=0,chaLen=listTemp.juBankList.length;y<chaLen;y++){
                          	if(listTemp.juBankList[y].selectFlag){
                              listTemp.bankCodeList.push(listTemp.juBankList[y].bankCode);
                            }
                          }
                        }
                      }
                    }
                    //请求通道商户
                    for(let a=0,chaLen=channelList.length;a<chaLen;a++){
                    	if(channelList[a].txCode==listTemp.txCode&&channelList[a].cardType==listTemp.cardType){
                       listTemp.channelList.push(channelList[a]);
                    	}
                    }
                    // 在通道商户首部压入一个非选对象
                    listTemp.channelList.unshift({insMchntId:'',insMchntCode:'',insMchntName:"请选择 -"});
                    listTemp.txName=tempObj[i].pospTxList[j].name;
              			//通道商户
                    self.tableData.pospTxList.push(listTemp);
                  }
                }
              }
            }
            // 代扣模板数据
          	if(tempObj[i].code=="COLLECT"){
              self.tableData.collectTxList=[];
          		//查看是否有 消费D0 消费T1 之后确定对应模板
              for(let j=0,lent=tempObj[i].collectTxList.length;j<lent;j++){
              	//确定交易权限是
              	if(tempObj[i].collectTxList[j].needCharging){
              		for(let k=0,length=tempObj[i].collectTxList[j].cardTypeList.length;k<length;k++){
                    listTemp={};
              			//卡类型
                    listTemp.cardType=tempObj[i].collectTxList[j].cardTypeList[k];
              			//交易类型
                    listTemp.txCode=tempObj[i].collectTxList[j].code;
                    listTemp.channelList=[];
                    listTemp.juBankList=[];
                    listTemp.bankCodeList=[];
                    listTemp.idList=[];
                    listTemp.insMchntId='';
                    listTemp.id=null;
                    for(let g=0,routeLen=routeList.length;g<routeLen;g++){
                    	if(routeList[g].txCode==listTemp.txCode&&routeList[g].cardType==listTemp.cardType){
                        listTemp.insMchntId=routeList[g].insMchntId;
                        listTemp.juBankList=routeList[g].juBankList;
                        listTemp.id=routeList[g].id;
                        listTemp.idList=routeList[g].idList;
                        if(listTemp.juBankList){
                          for(let y=0,chaLen=listTemp.juBankList.length;y<chaLen;y++){
                          	if(listTemp.juBankList[y].selectFlag){
                              listTemp.bankCodeList.push(listTemp.juBankList[y].bankCode);
                            }
                          }
                        }
                      }
                    }
                    //请求通道商户
                    for(let a=0,chaLen=channelList.length;a<chaLen;a++){
                    	if(channelList[a].txCode==listTemp.txCode&&channelList[a].cardType==listTemp.cardType){
                       listTemp.channelList.push(channelList[a]);
                    	}
                    }
                    // 在通道商户首部压入一个非选对象
                    listTemp.channelList.unshift({insMchntId:'',insMchntCode:'',insMchntName:"请选择 -"});
                    listTemp.txName=tempObj[i].collectTxList[j].name;
              			//通道商户
                    self.tableData.collectTxList.push(listTemp);
                  }
                }
              }
            }
//            资金代付
            if(tempObj[i].code=="PAY"){
              self.tableData.payTxList=[];
              for(let j=0,lent=tempObj[i].payTxList.length;j<lent;j++){
                //确定交易权限是 消费D0 或 消费T1
                if(tempObj[i].payTxList[j].needCharging){
                  for(let k=0,length=tempObj[i].payTxList[j].cardTypeList.length;k<length;k++){
                    listTemp={};
                    //卡类型
                    listTemp.cardType=tempObj[i].payTxList[j].cardTypeList[k];
                    //交易类型
                    listTemp.txCode=tempObj[i].payTxList[j].code;
                    listTemp.channelList=[];
                    listTemp.juBankList=[];
                    listTemp.bankCodeList=[];
                    listTemp.idList=[];
                    listTemp.insMchntId='';
                    listTemp.id=null;
                    listTemp.txName=tempObj[i].payTxList[j].name;
                    for(let g=0,routeLen=routeList.length;g<routeLen;g++){
                      if(routeList[g].txCode==listTemp.txCode&&routeList[g].cardType==listTemp.cardType){
                        listTemp.insMchntId=routeList[g].insMchntId;
                        listTemp.juBankList=routeList[g].juBankList;
                        listTemp.id=routeList[g].id;
                        listTemp.idList=routeList[g].idList;
                        if(listTemp.juBankList){
                          for(let y=0,chaLen=listTemp.juBankList.length;y<chaLen;y++){
                            if(listTemp.juBankList[y].selectFlag){
                              listTemp.bankCodeList.push(listTemp.juBankList[y].bankCode);
                            }
                          }
                        }
                      }
                    }
                    //请求通道商户
                    for(let a=0,chaLen=channelList.length;a<chaLen;a++){
                      if(channelList[a].txCode==listTemp.txCode&&channelList[a].cardType==listTemp.cardType){
                        listTemp.channelList.push(channelList[a]);
                      }
                    }
                    // 在通道商户首部压入一个非选对象
                    listTemp.channelList.unshift({insMchntId:'',insMchntCode:'',insMchntName:"请选择 -"});
                    //通道商户
                    self.tableData.payTxList.push(listTemp);
                  }
                }
              }
            }
//            微信支付
            if(tempObj[i].code=="WECHAT_PAY"){
              self.tableData.wechatPayTxList=[];
              for(let j=0,lent=tempObj[i].wechatPayTxList.length;j<lent;j++){
                //确定 交易权限
                if(tempObj[i].wechatPayTxList[j].needCharging){
                  for(let k=0,length=tempObj[i].wechatPayTxList[j].cardTypeList.length;k<length;k++){
                    listTemp={};
                    //卡类型
                    listTemp.cardType=tempObj[i].wechatPayTxList[j].cardTypeList[k];
                    //交易类型
                    listTemp.txCode=tempObj[i].wechatPayTxList[j].code;
                    listTemp.channelList=[];
                    listTemp.juBankList=[];
                    listTemp.bankCodeList=[];
                    listTemp.idList=[];
                    listTemp.insMchntId='';
                    listTemp.id=null;
                    for(let g=0,routeLen=routeList.length;g<routeLen;g++){
                      if(routeList[g].txCode==listTemp.txCode&&routeList[g].cardType==listTemp.cardType){
                        listTemp.insMchntId=routeList[g].insMchntId;
                        listTemp.juBankList=routeList[g].juBankList;
                        listTemp.id=routeList[g].id;
                        listTemp.idList=routeList[g].idList;
                        if(listTemp.juBankList){
                          for(let y=0,chaLen=listTemp.juBankList.length;y<chaLen;y++){
                            if(listTemp.juBankList[y].selectFlag){
                              listTemp.bankCodeList.push(listTemp.juBankList[y].bankCode);
                            }
                          }
                        }
                      }
                    }
                    listTemp.txName=tempObj[i].wechatPayTxList[j].name;
                    //请求通道商户
                    for(let a=0,chaLen=channelList.length;a<chaLen;a++){
                      if(channelList[a].txCode==listTemp.txCode&&channelList[a].cardType==listTemp.cardType){
                        listTemp.channelList.push(channelList[a]);
                      }
                    }
                    // 在通道商户首部压入一个非选对象
                    listTemp.channelList.unshift({insMchntId:'',insMchntCode:'',insMchntName:"请选择 -"});
                    //通道商户
                    self.tableData.wechatPayTxList.push(listTemp);
                  }
                }
              }
            }
//            身份要素验证
            if(tempObj[i].code=="VERIFY"){
              self.tableData.verifyTxList=[];
              for(let j=0,lent=tempObj[i].verifyTxList.length;j<lent;j++){
                //确定 交易权限
                if(tempObj[i].verifyTxList[j].needCharging){
                  for(let k=0,length=tempObj[i].verifyTxList[j].cardTypeList.length;k<length;k++){
                    listTemp={};
                    //卡类型
                    listTemp.cardType=tempObj[i].verifyTxList[j].cardTypeList[k];
                    //交易类型
                    listTemp.txCode=tempObj[i].verifyTxList[j].code;
                    listTemp.channelList=[];
                    listTemp.juBankList=[];
                    listTemp.idList=[];
                    listTemp.bankCodeList=[];
                    listTemp.txName=tempObj[i].verifyTxList[j].name;
                    listTemp.insMchntId='';
                    listTemp.id=null;
                    for(let g=0,routeLen=routeList.length;g<routeLen;g++){
                      if(routeList[g].txCode==listTemp.txCode&&routeList[g].cardType==listTemp.cardType){
                        listTemp.insMchntId=routeList[g].insMchntId;
                        listTemp.juBankList=routeList[g].juBankList;
                        listTemp.id=routeList[g].id;
                        listTemp.idList=routeList[g].idList;
                        if(listTemp.juBankList){
                          for(let y=0,chaLen=listTemp.juBankList.length;y<chaLen;y++){
                            if(listTemp.juBankList[y].selectFlag){
                              listTemp.bankCodeList.push(listTemp.juBankList[y].bankCode);
                            }
                          }
                        }
                      }
                    }
                    //请求通道商户
                    for(let a=0,chaLen=channelList.length;a<chaLen;a++){
                      if(channelList[a].txCode==listTemp.txCode&&channelList[a].cardType==listTemp.cardType){
                        listTemp.channelList.push(channelList[a]);
                      }
                    }
                    // 在通道商户首部压入一个非选对象
                    listTemp.channelList.unshift({insMchntId:'',insMchntCode:'',insMchntName:"请选择 -"});
                    //通道商户
                    self.tableData.verifyTxList.push(listTemp);
                  }
                }
              }
            }
//            支付宝
            if(tempObj[i].code=="ALI_PAY"){
              self.tableData.aliPayTxList=[];
              for(let j=0,lent=tempObj[i].aliPayTxList.length;j<lent;j++){
                //确定 交易权限
                if(tempObj[i].aliPayTxList[j].needCharging){
                  for(let k=0,length=tempObj[i].aliPayTxList[j].cardTypeList.length;k<length;k++){
                    listTemp={};
                    //卡类型
                    listTemp.cardType=tempObj[i].aliPayTxList[j].cardTypeList[k];
                    //交易类型
                    listTemp.txCode=tempObj[i].aliPayTxList[j].code;
                    listTemp.channelList=[];
                    listTemp.juBankList=[];
                    listTemp.bankCodeList=[];
                    listTemp.idList=[];
                    listTemp.insMchntId='';
                    listTemp.id=null;
                    for(let g=0,routeLen=routeList.length;g<routeLen;g++){
                      if(routeList[g].txCode==listTemp.txCode&&routeList[g].cardType==listTemp.cardType){
                        listTemp.insMchntId=routeList[g].insMchntId;
                        listTemp.juBankList=routeList[g].juBankList;
                        listTemp.id=routeList[g].id;
                        listTemp.idList=routeList[g].idList;
                        if(listTemp.juBankList){
                          for(let y=0,chaLen=listTemp.juBankList.length;y<chaLen;y++){
                            if(listTemp.juBankList[y].selectFlag){
                              listTemp.bankCodeList.push(listTemp.juBankList[y].bankCode);
                            }
                          }
                        }
                      }
                    }
                    listTemp.txName=tempObj[i].aliPayTxList[j].name;
                    //请求通道商户
                    for(let a=0,chaLen=channelList.length;a<chaLen;a++){
                      if(channelList[a].txCode==listTemp.txCode&&channelList[a].cardType==listTemp.cardType){
                        listTemp.channelList.push(channelList[a]);
                      }
                    }
                    // 在通道商户首部压入一个非选对象
                    listTemp.channelList.unshift({insMchntId:'',insMchntCode:'',insMchntName:"请选择 -"});
                    //通道商户
                    self.tableData.aliPayTxList.push(listTemp);
                  }
                }
              }
            }
//            网关
            if(tempObj[i].code=="GATEWAY"){
              self.tableData.gatewayTxList=[];
              for(let j=0,lent=tempObj[i].gatewayTxList.length;j<lent;j++){
                //确定 交易权限
                if(tempObj[i].gatewayTxList[j].needCharging){
                  for(let k=0,length=tempObj[i].gatewayTxList[j].cardTypeList.length;k<length;k++){
                    listTemp={};
                    //卡类型
                    listTemp.cardType=tempObj[i].gatewayTxList[j].cardTypeList[k];
                    //交易类型
                    listTemp.txCode=tempObj[i].gatewayTxList[j].code;
                    listTemp.channelList=[];
                    listTemp.juBankList=[];
                    listTemp.bankCodeList=[];
                    listTemp.idList=[];
                    listTemp.insMchntId='';
                    listTemp.id=null;
                    for(let g=0,routeLen=routeList.length;g<routeLen;g++){
                      if(routeList[g].txCode==listTemp.txCode&&routeList[g].cardType==listTemp.cardType){
                        listTemp.insMchntId=routeList[g].insMchntId;
                        listTemp.juBankList=routeList[g].juBankList;
                        listTemp.id=routeList[g].id;
                        listTemp.idList=routeList[g].idList;
                        if(listTemp.juBankList){
                          for(let y=0,chaLen=listTemp.juBankList.length;y<chaLen;y++){
                            if(listTemp.juBankList[y].selectFlag){
                              listTemp.bankCodeList.push(listTemp.juBankList[y].bankCode);
                            }
                          }
                        }
                      }
                    }
                    listTemp.txName=tempObj[i].gatewayTxList[j].name;
                    //请求通道商户
                    for(let a=0,chaLen=channelList.length;a<chaLen;a++){
                      if(channelList[a].txCode==listTemp.txCode&&channelList[a].cardType==listTemp.cardType){
                        listTemp.channelList.push(channelList[a]);
                      }
                    }
                    // 在通道商户首部压入一个非选对象
                    listTemp.channelList.unshift({insMchntId:'',insMchntCode:'',insMchntName:"请选择 -"});
                    //通道商户
                    self.tableData.gatewayTxList.push(listTemp);
                  }
                }
              }
            }
          }
        }
      })
    },
    methods:{
    	//加载通道商户
    	loadMchnt(product,listObj){
    		let self=this,list=product,tempObj={};
    		tempObj.cardType=listObj.cardType;
    		tempObj.txCode=listObj.txCode;
        ApiService.mchntRoute.insMchntByParams(tempObj).then(res => {
          self.tableData.list.channelList=res.data;
        })
      },
      cardTypeFormat(row, column){
        let code = row[column.property];
        if (code == 0) {
          return "";
        }else if(code == 1){
        	return "借记卡"
        }else if(code == 2){
        	return "贷记卡"
        }else if(code == 3){
        	return "准贷记卡"
        }
      },
      handleChange(index,row){
        //操作支持银行数据
        let tempObj={};
        row.bankCodeList=[];
        tempObj.cardType=row.cardType;
        tempObj.txCode=row.txCode;
        tempObj.insMchntId=row.insMchntId;
        if(tempObj.txCode=="002001"||tempObj.txCode=="002002"||tempObj.txCode=="005003"||tempObj.txCode=="005004"||tempObj.txCode=="006001"||tempObj.txCode=="006002"){
          ApiService.mchntRoute.bankByParams(tempObj).then(res => {
            row.juBankList=res.data;
            for(let key in row.juBankList){
              row.bankCodeList.push(row.juBankList[key].bankCode);
            }
          })
        }
      },
      onConfig(){
      	let self=this;
        self.formConf.isAbled=!self.formConf.isAbled;
        self.formConf.isShow=true;
      },
      onSubmit() {
      	let merchId,self=this,objArr,objTemp,listObj={},listArr=[];
        objArr=[];
      	objTemp=self.tableData;
      	for(let key in objTemp){
          objArr=objArr.concat(objTemp[key]);
        }
        //过滤不满足条件的字段channelList txName
        for(let i=0,len=objArr.length;i<len;i++){
          listObj={};
      		for(let key0 in objArr[i]){
      			if(key0!="channelList"&&key0!="txName"){
      				if(key0=="juBankList"){
      					// 遍历支持银行的code
      					for(let s=0,len=objArr[i][key0].length;s<len;s++){
                	let flag=false;
      						for(let z=0,lenZ=objArr[i].bankCodeList.length;z<lenZ;z++){
                    if(objArr[i][key0][s].bankCode==objArr[i].bankCodeList[z]){
      								flag=true;
                    }
                  }
                  objArr[i][key0][s].selectFlag=flag;
                }
              }
      				if(key0=="insMchntId"&&objArr[i][key0]==''){
                listObj[key0]=null;
              }else{
                listObj[key0]=objArr[i][key0];
              }
            }
          }
          listArr.push(listObj);
        }
        //拼接当前详情商户Id
        merchId=parseInt(self.$route.query.id);
        // 提交路由
        ApiService.mchntRoute.saveMchntRoute({mchntRouteList:listArr,mchnt:{id:merchId}}).then(res => {
          if(res.code==0){
            self.$alert(res.message,'保存配置结果',{
              confirmButtonText: '确定',
            });
          }else if(res.code==-1){
            self.$alert(res.message,'保存配置结果',{
              confirmButtonText: '确定',
              type: 'warning'
            });
          }
          this.onCance();
        });
      },
      onCance(){
        this.$router.push('/routeManager');
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";

 textarea{
   width:200px;
   height:100px;
 }
</style>

