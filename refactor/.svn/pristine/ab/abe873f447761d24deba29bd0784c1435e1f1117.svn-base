<template>
  <div class="form">
    <div class="handle-box">
      <transition name="el-fade-in">
        <el-form :model="agentInfo" :rules="formRulesInfo" ref="agentInfo" v-show="showpage" class="form-module"
                 label-width="120px">
          <div class="agencyInfo">
            <div class="sm-box">
              <el-row>
                <el-col :span="10" :offset="1">
                  <el-form-item label="编号:" prop="code">
                    <el-input v-model="agentInfo.code" placeholder="必填"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="1">
                  <el-form-item label="名称:" prop="name">
                    <el-input v-model="agentInfo.name" placeholder="必填"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div class="sm-box">
              <el-row>
                <el-col :span="10" :offset="1">
                  <el-form-item label="联系人:" prop="contact">
                    <el-input v-model="agentInfo.contact" placeholder="必填"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="1">
                  <el-form-item label="联系方式:" prop="phone">
                    <el-input v-model="agentInfo.phone" placeholder="必填"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <el-form-item label="邮箱:" prop="email">
                    <el-input v-model="agentInfo.email" placeholder="必填"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="1">
                  <el-form-item label="城市:" prop="districtId">
                    <el-select size="small" style="width: 32%"
                               v-model.trim="agentInfo.provinceId"
                               filterable
                               placeholder="请选择省份"
                               @visible-change="visible($event)"
                               @change="provinceChange($event)">
                      <el-option
                        v-for="(item,i) in provinceList"
                        :key="i"
                        :label="item.name"
                        :value="item.id | stringNumber">
                      </el-option>
                    </el-select>
                    <el-select size="small" style="width:32%"
                               v-model.trim="agentInfo.cityId"
                               filterable
                               placeholder="请选择城市"
                               @visible-change="visible($event)"
                               @change="cityChange($event)">
                      <el-option
                        v-for="item in cityList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id | stringNumber">
                      </el-option>
                    </el-select>
                    
                    <el-select size="small" style="width: 32%"
                               v-model.trim="agentInfo.districtId"
                               filterable
                               placeholder="请选择区">
                      <el-option
                        v-for="item in regionList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id | stringNumber">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <el-form-item label="地址:" prop="addr">
                    <el-input v-model="agentInfo.addr" placeholder="必填"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div class="sm-box">
              <el-row>
                <el-col :span="10" :offset="1">
                  <el-form-item label="清算方式:" prop="clearingType">
                    <el-select v-model="agentInfo.clearingType" placeholder="必填">
                      <el-option label="通道直清" value="1"></el-option>
                      <el-option label="钜真清算" value="2"></el-option>
                      <el-option label="代理商清算" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="1">
                  <el-form-item label="结算户名:" prop="settleAccountName">
                    <el-input v-model="agentInfo.settleAccountName" placeholder="非必填"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <el-form-item label="结算账号:">
                    <el-input v-model="agentInfo.settleAccount" placeholder="非必填"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="1">
                  <el-form-item label="是否自营:" prop="isSelfOperated">
                    <el-select v-model="agentInfo.isSelfOperated" @change='changeIsSelf' placeholder="必填">
                      <el-option label="是" value="1"></el-option>
                      <el-option label="否" value="0"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <el-form-item label="ZMK索引值:"  prop="zmk">
                    <el-input v-model="agentInfo.zmk" placeholder="必填"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item>
                <div class="button">
                  <el-button type="primary" @click="nextpage('agentInfo')">下一页</el-button>
                  <el-button type="default" @click="back()">取消</el-button>
                </div>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </transition>
      <transition name="el-fade-in">
        <el-form :model="agentFee" ref="agentFee" :rules="formRulesFee" v-show="!showpage" class="form-module" label-width="120px">
          <div class="agencyFee">
            <el-row>
              <div class="checkTab">
              <el-form-item label="产品类型:" prop="txName">
                 <el-checkbox-group v-model="agentFee.txName">
                      <el-checkbox v-for="tx in txList" :key="tx.code" :label="tx.businessName"  @change="chanTxName(agentFee.txName,'true',$event)">{{tx.businessName}}
                      </el-checkbox>
                 </el-checkbox-group>
             </el-form-item>
              </div>
            </el-row>
            <div class="sm-box">
              <el-row>
                <el-col :span="2">
                  <p class="labeltit">接入信息:</p>
                </el-col>
                <el-col :span="20">
                  <el-row>
                    <el-col :span="10">
                      <el-form-item label="接入IP1:" prop="ip1">
                        <el-input v-model="agentFee.agentNode.ip1" placeholder="必填"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item label="接入IP2:">
                        <el-input v-model="agentFee.agentNode.ip2" placeholder="非必填"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="10">
                      <el-form-item label="接入IP3:">
                        <el-input v-model="agentFee.agentNode.ip3" placeholder="非必填"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item label="通讯类型:">
                        <el-select v-model="agentFee.agentNode.protocol" placeholder="必选">
                          <el-option label="HTTP" value="1"></el-option>
                          <el-option label="SOCKET" value="2"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="10">
                      <el-form-item label="最大流量:">
                        <el-input v-model="agentFee.agentNode.maxTps" placeholder="必选"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <!--{{txName}} 选中的产品类型-->
            <el-row>
              <div class="tabs" v-show='agentFee.txName.length'>
                <!--{{checkTab}} 当前tab-->
        <!-- {{agentFee.tableFee.PAY}} -->
                <el-tabs type="border-card" v-model="checkTab">
                  <el-tab-pane v-for="tab in agentFee.txName" :key="tab" :label="tab" :name="tab"
                               :tab-click="chanTxName(checkTab)">
                    <div class="sm-box">
                      <el-row>
                        <el-col :span="2">
                          <p class="labeltit">交易权限:</p>
                        </el-col>
                        <el-col :span="20">
                          <el-checkbox-group v-model="agentFee.txs">
                            <el-checkbox v-for="tx in childrenTx" :key="tx.code" :label="tx.code" :name="tx.name"
                                         @change="chanlis($event,tx.needCharging,checkTab,tx.needRiskCtrl)">{{tx.name}}
                            </el-checkbox>
                          </el-checkbox-group>
                        </el-col>
                      </el-row>
                      <!--{{checked}} 当前tab-->
                      <!--{{agentFee.txs}} 选中的交易权限 -->
                      <!-- {{childrenTx}} -->
                    </div>
                    <div v-show="checkTab=='POSP'">
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="agentFee.tableFee['POSP']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="cardType" label="卡类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.cardType" style="width: 0" :disabled="!scope.row.showFee"></el-input>
                                <span>{{scope.row.cardTypeName}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选" @change="feeTypeTab(scope.row)" :disabled="!scope.row.showFee" >
                                  <el-option label="比例" value="1"></el-option>
                                  <el-option label="比例封顶" value="3"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeRateTemp" label="扣率值（%）">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.feeRateTemp" placeholder="必填" :disabled="!scope.row.showFee"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeFixedTemp" label="封顶值（元）">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.feeFixedTemp" :disabled="scope.row.muskFixed"
                                          placeholder="必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="roundingMode" label="末尾取舍">
                              <template scope="scope">
                                <el-select v-model="scope.row.roundingMode" placeholder="必填" :disabled="!scope.row.showFee">
                                  <el-option label="向上取整" value="ROUND_UP"></el-option>
                                  <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                                  <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                                  <!-- <el-option label="分位进位" value="ROUND_HALF_DOWN"></el-option> -->
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="minimumFeeTemp" label="保底金额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.minimumFeeTemp" :disabled="!scope.row.showFee"
                                          placeholder="必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="maxThresholdTemp" label="单卡单笔限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp"  :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdPerCardTemp" label="单卡单日限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdPerCardTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>

                            <el-table-column prop="status" label="状态">
                              <template scope="scope">
                                <el-select v-model="scope.row.status" placeholder="必选" :disabled="!scope.row.showFee">
                                  <el-option label="启用" value="0"></el-option>
                                  <el-option label="关闭" value="1"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                          </el-table>
                        </el-row>
                      </div>
                    </div>

                    <div v-show="checkTab=='COLLECT'">
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="agentFee.tableFee['COLLECT']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="cardType" label="卡类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.cardType" style="width: 0" :disabled="!scope.row.showFee"></el-input>
                                <span>{{scope.row.cardTypeName}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选" @change="feeTypeTab(scope.row)" :disabled="!scope.row.showFee" >
                                  <el-option label="比例" value="1"></el-option>
                                  <el-option label="比例封顶" value="3"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeRateTemp" label="扣率值（%）">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.feeRateTemp" placeholder="必填" :disabled="!scope.row.showFee"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeFixedTemp" label="封顶值（元）">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.feeFixedTemp" :disabled="scope.row.muskFixed"
                                          placeholder="必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="roundingMode" label="末尾取舍">
                              <template scope="scope">
                                <el-select v-model="scope.row.roundingMode" placeholder="必填" :disabled="!scope.row.showFee">
                                  <el-option label="向上取整" value="ROUND_UP"></el-option>
                                  <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                                  <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                                  <!-- <el-option label="分位进位" value="ROUND_HALF_DOWN"></el-option> -->
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="minimumFeeTemp" label="保底金额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.minimumFeeTemp" :disabled="!scope.row.showFee"
                                          placeholder="必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="maxThresholdTemp" label="单卡单笔限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp"  :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdPerCardTemp" label="单卡单日限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdPerCardTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>

                            <el-table-column prop="status" label="状态">
                              <template scope="scope">
                                <el-select v-model="scope.row.status" placeholder="必选" :disabled="!scope.row.showFee">
                                  <el-option label="启用" value="0"></el-option>
                                  <el-option label="关闭" value="1"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                          </el-table>
                        </el-row>
                      </div>
                    </div>

                    <div v-show="checkTab=='PAY'">
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="agentFee.tableFee['PAY']" border align="center" style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="cardType" label="卡类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.cardType"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.cardTypeName}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型" width="180" align="center">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选" @change="changeFeeType(scope.row)" :disabled="!scope.row.showFee">
                                  <el-option label="单笔固定" value="2"></el-option>
                                  <el-option label="金额阶梯固定" value="4"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeFixedTemp" label="扣率值（元）" align="center" width="600">
                              <template scope="scope">
                                <el-row v-if="scope.row.feeType == 2">
                                  <el-form-item label="固定手续费(元)：" class="mb0">
                                    <el-input v-model.trim="scope.row.feeRateTemp" placeholder="必填"></el-input>
                                  </el-form-item>
                                </el-row>

                                <el-row v-if="scope.row.feeType == 4" :gutter="15"  v-for="(rate, index) in scope.row.ladder" :key="rate">
                                  <el-col :span="10">
                                    <el-form-item label="金额(元)：">
                                      <el-input v-model.trim="rate.m" placeholder="必填" :disabled="index == scope.row.ladder.length - 1"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="10">
                                    <el-form-item label="固定手续费(元)：">
                                      <el-input v-model.trim="rate.f" placeholder="必填"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index == scope.row.ladder.length - 1" size="small" @click="addLadder(scope.row)" icon="plus">添加</el-button>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index != scope.row.ladder.length - 1" size="small" @click="deleteLadder(scope.row, index)" icon="delete">删除</el-button>
                                  </el-col>
                                </el-row>
                              </template>
                            </el-table-column>
                            <el-table-column prop="brandFeeExp" label="品牌费（元）" align="center"  width='450'>
                              <!-- <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.brandFeeExp" :disabled="!scope.row.showFee"
                                          placeholder="必填"></el-input>
                                <el-input size="small" type="text" v-model="scope.row.brandFeeExp" :disabled="!scope.row.showFee"
                                          placeholder="必填"></el-input>
                              </template> -->
                              <template scope="scope">
                                <el-row v-if="scope.row.cardType != 1">
                                  <el-col :span="12">
                                    <el-form-item label="费率(%)：">
                                      <el-input v-model.trim="scope.row.brandFeeExp.count" placeholder="必填"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="12">
                                    <el-form-item label="封顶值(元)：">
                                      <el-input v-model.trim="scope.row.brandFeeExp.sum" placeholder="必填"></el-input>
                                    </el-form-item>
                                  </el-col>
                                </el-row>
                              </template>

                            </el-table-column>
                            <el-table-column prop="minThresholdTemp" label="单笔最小限额" v-if='agentInfo.isSelfOperated != 1' align="center"  width='150'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.minThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="maxThresholdTemp" label="单笔最大限额" v-if='agentInfo.isSelfOperated != 1' align="center"  width='150'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdPerCardTemp" label="单卡单日限额" v-if='agentInfo.isSelfOperated != 1' align="center"  width='150'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdPerCardTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额" v-if='agentInfo.isSelfOperated != 1' align="center"  width='150'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="status" label="状态" >
                              <template scope="scope">
                                <el-select v-model="scope.row.status" placeholder="必选" :disabled="!scope.row.showFee">
                                  <el-option label="启用" value="0"></el-option>
                                  <el-option label="关闭" value="1"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                          </el-table>
                        </el-row>
                      </div>
                    </div>

                    <div v-show="checkTab=='WECHAT_PAY'">
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="agentFee.tableFee['WECHAT_PAY']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选" :disabled="!scope.row.showFee">
                                  <el-option label="比例" value="1"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeRateTemp" label="扣率值（%）">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.feeRateTemp" :disabled="!scope.row.showFee"
                                          placeholder="必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="roundingMode" label="末尾取舍">
                              <template scope="scope">
                                <el-select v-model="scope.row.roundingMode" placeholder="必填" :disabled="!scope.row.showFee">
                                  <el-option label="向上取整" value="ROUND_UP"></el-option>
                                  <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                                  <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                                  <!-- <el-option label="分位进位" value="ROUND_HALF_DOWN"></el-option> -->
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="minimumFeeTemp" label="保底金额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.minimumFeeTemp" :disabled="!scope.row.showFee"
                                          placeholder="必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="maxThresholdTemp" label="单笔限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="status" label="状态">
                              <template scope="scope">
                                <el-select v-model="scope.row.status" placeholder="必选" :disabled="!scope.row.showFee">
                                  <el-option label="启用" value="0"></el-option>
                                  <el-option label="关闭" value="1"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                          </el-table>
                        </el-row>
                      </div>
                    </div>
                    <div v-show="checkTab=='ALI_PAY'">
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="agentFee.tableFee['ALI_PAY']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选" :disabled="!scope.row.showFee">
                                  <el-option label="比例" value="1"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeRateTemp" label="扣率值（%）">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.feeRateTemp" :disabled="!scope.row.showFee"
                                          placeholder="必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="roundingMode" label="末尾取舍">
                              <template scope="scope">
                                <el-select v-model="scope.row.roundingMode" placeholder="必填" :disabled="!scope.row.showFee">
                                  <el-option label="向上取整" value="ROUND_UP"></el-option>
                                  <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                                  <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                                  <!-- <el-option label="分位进位" value="ROUND_HALF_DOWN"></el-option> -->
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="minimumFeeTemp" label="保底金额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.minimumFeeTemp" :disabled="!scope.row.showFee"
                                          placeholder="必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="maxThresholdTemp" label="单笔限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="status" label="状态">
                              <template scope="scope">
                                <el-select v-model="scope.row.status" placeholder="必选" :disabled="!scope.row.showFee">
                                  <el-option label="启用" value="0"></el-option>
                                  <el-option label="关闭" value="1"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                          </el-table>
                        </el-row>
                      </div>
                    </div>
                    <div v-show="checkTab=='GATEWAY'">
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="agentFee.tableFee['GATEWAY']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选" @change="changeFeeType(scope.row)" :disabled="!scope.row.showFee">
                                  <el-option label="单笔固定" value="2"></el-option>
                                  <el-option label="金额阶梯固定" value="4"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeFixedTemp" label="扣率值（元）" align='center' width='600'>
                              <template scope="scope">
                                <el-row v-if="scope.row.feeType == 2">
                                  <el-form-item label="固定手续费(元)：">
                                    <el-input v-model.trim="scope.row.feeFixedTemp" placeholder="必填"></el-input>
                                  </el-form-item>
                                </el-row>

                                <el-row v-if="scope.row.feeType == 4" :gutter="15"  v-for="(rate, index) in scope.row.ladder" :key="rate">
                                  <el-col :span="10">
                                    <el-form-item label="金额(元)：">
                                      <el-input v-model.trim="rate.m" placeholder="必填" :disabled="index == scope.row.ladder.length - 1"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="10">
                                    <el-form-item label="固定手续费(元)：">
                                      <el-input v-model.trim="rate.f" placeholder="必填"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index == scope.row.ladder.length - 1" size="small" @click="addLadder(scope.row)" icon="plus">添加</el-button>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index != scope.row.ladder.length - 1" size="small" @click="deleteLadder(scope.row, index)" icon="delete">删除</el-button>
                                  </el-col>
                                </el-row>
                              </template>
                            </el-table-column>
                            <el-table-column prop="maxThresholdTemp" label="单笔限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额" v-if='agentInfo.isSelfOperated != 1'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="status" label="状态">
                              <template scope="scope">
                                <el-select v-model="scope.row.status" placeholder="必选" :disabled="!scope.row.showFee">
                                  <el-option label="启用" value="0"></el-option>
                                  <el-option label="关闭" value="1"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                          </el-table>
                        </el-row>
                      </div>
                    </div>
                    <div v-show="checkTab=='VERIFY'">
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="agentFee.tableFee['VERIFY']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选" @change="changeFeeType(scope.row)" :disabled="!scope.row.showFee">
                                  <el-option label="单笔固定" value="2"></el-option>
                                  <el-option label="笔数阶梯固定(月)" value="6"></el-option>
                                  <el-option label="笔数阶梯固定(年)" value="8"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeFixedTemp" label="扣率值（元）" align='center' width='600'>
                              <template scope="scope">
                                <el-row v-if="scope.row.feeType == 2">
                                  <el-form-item label="手续费(元)：" class="mb0">
                                    <el-input v-model.trim="scope.row.feeFixedTemp" placeholder="必填"></el-input>
                                  </el-form-item>
                                </el-row>

                                <el-row v-if="scope.row.feeType == 4 || scope.row.feeType == 6 || scope.row.feeType == 8" :gutter="15"  v-for="(rate, index) in scope.row.ladder" :key="rate">
                                  <el-col :span="10">
                                    <el-form-item label="数量(笔)：">
                                      <el-input v-model.trim="rate.m" placeholder="必填" :disabled="index == scope.row.ladder.length - 1"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="10">
                                    <el-form-item label="手续费(元)：">
                                      <el-input v-model.trim="rate.f" placeholder="必填"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index == scope.row.ladder.length - 1" size="small" @click="addLadder(scope.row)" icon="plus">添加</el-button>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index != scope.row.ladder.length - 1" size="small" @click="deleteLadder(scope.row, index)" icon="delete">删除</el-button>
                                  </el-col>
                                </el-row>
                              </template>
                            </el-table-column>
                            <el-table-column prop="status" label="状态">
                              <template scope="scope">
                                <el-select v-model="scope.row.status" placeholder="必选" :disabled="!scope.row.showFee">
                                  <el-option label="启用" value="0"></el-option>
                                  <el-option label="关闭" value="1"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                          </el-table>
                        </el-row>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-row>
            <el-form-item>
              <div class="button">
                <el-button type="primary" @click="onSubmit()">提交</el-button>
                <el-button type="default" @click="prevpage()">上一页</el-button>
                <el-button type="default" @click="back()">取消</el-button>
              </div>
            </el-form-item>
          </div>
        </el-form>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default {
    data() {
      return {
        agentInfo: {
          code: '',
          name: '',
          contact: '',
          phone: '',
          email: '',
          provinceId:'',
          cityId: '',
          districtId: '',
          addr: '',
          clearingType:'',
          settlePeriodType: '',
          settleAccountName: '',
          settleAccount: '',
          isSelfOperated: '',
        },
        agentFee: {
          agentNode:{
              ip1: '',
              ip2: '',
              ip3: '',
              protocol: '',
              maxTps: '',
            },
          tableFee: {
            'POSP': [],//posp
            'PAY': [],//代付
            'WECHAT_PAY': [],//微信
            'ALI_PAY': [],//支付宝
            'GATEWAY': [],//网关
            'VERIFY': [],//验证
            'COLLECT': [],//代扣
          },
          txs: [],
          txName: [],//产品类型选择项
        },
        formRulesInfo: {
          code: [
                {required: true, message: '请输入机构编号', trigger: 'blur'},
                { pattern: /^[1-9]\d{7}$/, message: '请输入8位数的正整数', trigger: 'change' }
              ],
          name: {required: true, message: '请输入机构名称', trigger: 'blur'},
          contact: {required: true, message: '请输入联系人', trigger: 'blur'},
          phone: {required: true, message: '请输入联系方式', trigger: 'blur'},
          email: {required: true, message: '请输入邮箱', trigger: 'blur'},
          districtId: {required: true, message: '请选择城市', trigger: 'change'},
          addr: {required: true, message: '请输入地址', trigger: 'blur'},
          clearingType: {required: true, message: '请选择清算方式', trigger: 'change'},
          settleAccountName: {required: true, message: '请输入结算户名', trigger: 'blur'},
          isSelfOperated: {required: true, message: '请选择是否自营', trigger: 'change'},
          zmk: {required: true, message: '请输入ZMK索引值', trigger: 'blur'},
        },
        formRulesFee:{
          txName: { type: 'array', required: true, message: '请至少选择一个产品类型', trigger: 'change' },
            // ip1: { required: true, message: '请输入IP地址', trigger: 'blur' }
        },
        cityList: [],//市列表
        regionList:[],//区列表
        showpage: true,
        txList: [],//所有数据
        txCode: [],//产品类型选择项
        childrenTx: [],
        checkTab: '',
        checked: '',
        fixlad:true,
        allowChange:false
      }
    },
    computed: {
      ...mapGetters(['getRegion']),
      provinceList: function (){
        return this.getRegion;
      },
    },
    created: function (){
      ApiService.agency.istBusinessInfo().then((res) =>{//获取所有的产品类型 子集交易权限 是否有table交易类型
        this.txList = res.data;
      });
    },
    filters: {
      stringNumber(val) {
        return val.toString();
      }
    },
    methods: {
      visible(event){
        if(event){
          this.allowChange=true
        }
      },
      chanTxName: function (txName,defaultActive,event){
        if(event){
          if(!event.target.checked){
            for(let txSing of this.txList){
              if(event.target.value == txSing.businessName){
                for(let txChild of txSing.childrenTx){
                  let inOf = this.agentFee.txs.indexOf(txChild.code);
                  if(inOf!=-1){
                    this.agentFee.txs.splice(inOf,1)
                  }
                }
              }
            }
            this.agentFee.tableFee[event.target.value]=[];
          };
        };
        let _this=this;
        let txNa;
        if (defaultActive) {
          txNa = txName[txName.length - 1]
        }else {
          txNa = txName;
        };
        for (let i = 0; i < this.txList.length; i++) {
          if (txNa == this.txList[i].businessName) {
            this.childrenTx = this.txList[i].childrenTx;
          }
        };
        if(defaultActive){
        	this.checkTab=txNa;
        }
      },
      changeIsSelf(){
        this.agentFee.txName.splice(0);
        this.agentFee.txs.splice(0);
        for(let item in this.agentFee.tableFee){
          this.agentFee.tableFee[item].splice(0)
        }
      },
      chanlis: function (event, needCharging, tabName,needRiskCtrl){
        if (event.target.checked && needCharging || event.target.checked && needRiskCtrl) {
          for (let i = 0; i < this.childrenTx.length; i++) {
            if (this.childrenTx[i].code == event.target.value) {
                let card = {
                 POSP : [{
                  cardTypeName: '借记卡',
                  cardType: '1',
                },
                {
                  cardTypeName: '贷记卡',
                  cardType: '2',
                }],
                PAY : [{
                  cardTypeName: '借记卡',
                  cardType: '1',
                },
                {
                  cardTypeName: '贷记卡',
                  cardType: '2',
                }],
                WECHAT_PAY : [],
                ALI_PAY : [],
                VERIFY : [],
                GATEWAY: [],
                COLLECT:[{
                  cardTypeName: '借记卡',
                  cardType: '1',
                },
                {
                  cardTypeName: '贷记卡',
                  cardType: '2',
                }],
              };
              for(let item in card){
                if(item == tabName){
                  if(card[item].length){
                    for(let lis in card[item]){
                      this.agentFee.tableFee[tabName].push({
                        'txNameTab':this.childrenTx[i].name,
                        'txCode':this.childrenTx[i].code,
                        'feeType': '',
                        'feeRateTemp': '',
                        'feeFixedTemp': '',
                        'ladder':[],
                        'roundingMode': '',
                        'brandFeeExp':{count:'',sum:''},
                        'minimumFeeTemp': '',
                        'minThresholdTemp':'',
                        'maxThresholdTemp': '',
                        'dailyMaxThresholdPerCardTemp': '',
                        'dailyMaxThresholdTemp': '',
                        'status': '0',
                        'showRisk':needRiskCtrl,
                        'showFee':needCharging,
                        'muskFixed':!needCharging,
                        'cardTypeName':card[item][lis].cardTypeName,
                        'cardType':card[item][lis].cardType
                      });
                    }
                  }else {
                      this.agentFee.tableFee[tabName].push({
                        'txNameTab':this.childrenTx[i].name,
                        'txCode':this.childrenTx[i].code,
                        'feeType': '',
                        'feeRateTemp': '',
                        'feeFixedTemp': '',
                        'ladder':[],
                        'roundingMode': '',
                        'brandFeeExp':{count:'',sum:''},
                        'minimumFeeTemp': '',
                        'minThresholdTemp':'',
                        'maxThresholdTemp': '',
                        'dailyMaxThresholdPerCardTemp': '',
                        'dailyMaxThresholdTemp': '',
                        'status': '0',
                        'showRisk':needRiskCtrl,
                        'showFee':needCharging,
                        'muskFixed':!needCharging
                      });
                  }
                }
              }
            }
          }
        } else if (!event.target.checked && needCharging) {
          for (let i = 0; i < this.agentFee.tableFee[tabName].length; i++) {
            if (this.agentFee.tableFee[tabName][i].txCode == event.target.value) {
              this.agentFee.tableFee[tabName].splice(i, 1);
              i--;
            }
          }
        }
      },
      feeTypeTab:function (feeTypeTab){//切换扣率类型
        if(feeTypeTab.feeType==1){
          feeTypeTab.muskFixed=true;
          feeTypeTab.feeFixedTemp='';
        }else if(feeTypeTab.feeType==2){
          feeTypeTab.muskFixed=false;
        }
      },
      /*二级联动选择地区*/
      provinceChange() {
        if(this.allowChange){
          let _this = this;
          _this.agentInfo.cityId='';
          _this.cityList = [];
          for(let i = 0, len = _this.provinceList.length; i < len; i++) {
            if(_this.provinceList[i].id === _this.agentInfo.provinceId * 1) {
              _this.cityList = _this.provinceList[i].cityList;
            }
          }
        }
      },
      cityChange() {
        if(this.allowChange){
          let _this = this;
          _this.agentInfo.districtId='';
          _this.regionList = [];
          for(let i = 0, len = _this.cityList.length; i < len; i++) {
            if(_this.cityList[i].id === _this.agentInfo.cityId * 1) {
              _this.regionList = _this.cityList[i].districtList;
            }
          }
        }
      },
      //更改扣率类型
      changeFeeType(row){
          row.ladder.splice(0)
          if(row.feeType==='4' || row.feeType==='6' || row.feeType==='8') {
            row.ladder.push({m:'',f:''});
          }
      },
      addLadder(row){
        row.ladder.unshift({m:'',f:''});
      },
      deleteLadder(row,index){
        row.ladder.splice(index,1);
      },
      onSubmitValid(agentFee){
        this.$refs[agentFee].validate((valid) => {
          console.log(valid)
        })
      },
      onSubmit() {
        let _this=this;
        let agentRisk = [];
        let agentFee = [];
        for(let tableTx in _this.agentFee.tableFee){//循环所有表格提取费率tr
          for (let i = 0; i < _this.agentFee.tableFee[tableTx].length; i++){
            let feeMultiStepExp='';
            if(_this.agentFee.tableFee[tableTx][i].ladder){
              let m=[],f=[];
              for(let j in _this.agentFee.tableFee[tableTx][i].ladder){
                m.push(_this.agentFee.tableFee[tableTx][i].ladder[j].m);
                f.push(_this.agentFee.tableFee[tableTx][i].ladder[j].f);
                feeMultiStepExp = m.join(',')+';'+f.join(',')
              }
            };
            
            let brandFeeExp=null;
            if(_this.agentFee.tableFee[tableTx][i].brandFeeExp.count && _this.agentFee.tableFee[tableTx][i].brandFeeExp.sum){
              brandFeeExp = _this.agentFee.tableFee[tableTx][i].brandFeeExp.count + ";" +_this.agentFee.tableFee[tableTx][i].brandFeeExp.sum
            };
            agentRisk.push({
              txCode: _this.agentFee.tableFee[tableTx][i].txCode,
              cardType: _this.agentFee.tableFee[tableTx][i].cardType,
              minThresholdTemp:_this.agentFee.tableFee[tableTx][i].minThresholdTemp,
              maxThresholdTemp: _this.agentFee.tableFee[tableTx][i].maxThresholdTemp,
              dailyMaxThresholdPerCardTemp: _this.agentFee.tableFee[tableTx][i].dailyMaxThresholdPerCardTemp,
              dailyMaxThresholdTemp: _this.agentFee.tableFee[tableTx][i].dailyMaxThresholdTemp
            });
            agentFee.push({
              txCode: _this.agentFee.tableFee[tableTx][i].txCode,
              cardType: _this.agentFee.tableFee[tableTx][i].cardType,
              feeType: _this.agentFee.tableFee[tableTx][i].feeType,
              feeRateTemp: _this.agentFee.tableFee[tableTx][i].feeRateTemp,
              feeFixedTemp: _this.agentFee.tableFee[tableTx][i].feeFixedTemp,
              feeMultiStepExp:feeMultiStepExp,
              brandFeeExp:brandFeeExp,
              roundingMode: _this.agentFee.tableFee[tableTx][i].roundingMode,
              minimumFeeTemp: _this.agentFee.tableFee[tableTx][i].minimumFeeTemp,
              status: _this.agentFee.tableFee[tableTx][i].status,
            })
          };
        };
        ApiService.agency.saveAgent({
          agent: this.agentInfo,
          txs: this.agentFee.txs,
          agentNode: this.agentFee.agentNode,
          agentRisk: agentRisk,
          agentFee: agentFee,
        }).then((res) =>{
          if(res.code === 0){
            this.$message.success(res.message);
            this.$router.push({path: 'agent'})
          }else {
            this.$message.error(res.message);
          }
        }).catch((res) =>{
          this.$message.error('新增失败');
        })
      },
      nextpage(agentInfo){
        // this.$refs[agentInfo].validate((valid) => {
        //    if (valid) {
        //    this.showpage = false;
        //  } else {
        //    return false;
        //    }
        //  })
        this.showpage = false;
      },
      prevpage(){
        this.showpage = true;
      },
      back(){
        this.$router.push("/agent")
      },
    },
  }
</script>

<style lang="less" scoped>
  .handle-box {
    margin-top: 20px;
    position: relative;
    .agencyInfo, .agencyFee {
      width: 100%;
      position: absolute;
      top: 20px;
      left: 0;
      border: 1px solid #ddd;
      margin: 0 10px;
      padding: 20px 5px;
    }
  }

  .sm-box {
    margin-top: 20px;
    border-bottom: 1px solid #bfcbd9;
    &:last-child {
      border-bottom: none;
    }
  }

  .button-from {
    margin-top: 20px;
  }

  .checkTab {
    margin-top: 20px;
  }

  .tabs {
    margin-top: 40px;
  }

  .labeltit {
    margin-bottom: 20px;
    font-size: 14px
  }

  .el-checkbox {
    margin: 0 0 10px 15px;
  }

  .button {
    margin-top: 20px;
  }
</style>
