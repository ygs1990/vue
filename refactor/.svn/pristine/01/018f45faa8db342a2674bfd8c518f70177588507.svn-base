<template >
  <div >
    <div>
      <el-form  :model="formDtl" ref="formDtl" label-width="150px"  class="demo-form-inline">
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="商户编号："  >
              <el-col :span="24">
                <el-input v-model="formDtl.mchntCode" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="商户名称："  >
              <el-col :span="24">
                <el-input v-model="formDtl.mchntName" :disabled="true" ></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="通道名称：" >
              <el-col :span="24">
                <el-input v-model="formDtl.channelName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="通道机构名称：" >
              <el-col :span="24">
                <el-input v-model="formDtl.insName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="通道商户名称：" >
              <el-col :span="24">
                <el-input v-model="formDtl.insMchntName" :disabled="true" ></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="商户订单号：" >
              <el-col :span="24">
                <el-input v-model="formDtl.mchntTxNo" :disabled="true" ></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="通道订单号：">
              <el-col :span="24">
                <el-input v-model="formDtl.channelTxNo" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="客户名称：" >
              <el-col :span="24">
                <el-input v-model="formDtl.name" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="证件类型：">
              <el-col :span="24">
                <el-input v-model="formDtl.idTypeName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="证件号：">
              <el-col :span="24">
                <el-input v-model="formDtl.idNo" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="所属银行：">
              <el-col :span="24">
                <el-input v-model="formDtl.bankName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="卡种：">
              <el-col :span="24">
                <el-input v-model="formDtl.cardTypeName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="银行卡号：">
              <el-col :span="24">
                <el-input v-model="formDtl.cardNo" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="产品类型：">
              <el-col :span="24">
                <el-input v-model="formDtl.businessName" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="交易类型：">
              <el-col :span="24">
                <el-input v-model="formDtl.txCodeName" :disabled="true" ></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="交易金额(元)：">
              <el-col :span="24">
                <el-input v-model="formDtl.txAmounts" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="交易时间：">
              <el-col :span="24">
                <el-input v-model="formDtl.txTime" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="交易状态：">
              <el-col :span="24">
                <el-input v-model="formDtl.txResultName" :disabled="true" ></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="代理商分润(元)：">
              <el-col :span="24">
                <el-input v-model="formDtl.agentProfits" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="商户手续费(元)：">
              <el-col :span="24">
                <el-input v-model="formDtl.mchntCosts" :disabled="true" ></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="钜真收益(元)：">
              <el-col :span="24">
                <el-input v-model="formDtl.juProfits" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="通道成本(元)：">
              <el-col :span="24">
                <el-input v-model="formDtl.channelCosts" :disabled="true" ></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="结算金额(元)：">
              <el-col :span="24">
                <el-input v-model="formDtl.settledAmounts" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="交易描述：">
              <el-col :span="24">
                <el-input v-model="formDtl.txResultDesc" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="原消费检索参考号：">
              <el-col :span="24">
                <el-input v-model="formDtl.origTxRecordId" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="{span:10}" :md="{span:12}" :sm="{span:18}" :xs="{span:24}">
            <el-form-item label="原消费编号：">
              <el-col :span="24">
                <el-input v-model="formDtl.mchntTxNo" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  	props:['formDtl'],
    data() {
      return {
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../../less/modules/base.less";
  .el-form-item__content{
    width: 100% !important;
  }
</style>

