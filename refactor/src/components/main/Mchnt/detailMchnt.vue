<template>
  <div class="form">
    <div class="handle-box">
        <transition name="el-fade-in">
          <el-form :model="mchnt" v-show="showpage" class="form-module" label-width="130px">
          <div class="mchnt">
            <div class="sm-box">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="代理商:" prop="agentId">
                    <el-select v-model="mchnt.agentId" filterable placeholder="请选择" style='width:100%' disabled="disabled">
                      <el-option
                        v-for="item in agentAll"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="商户名称:">
                    <el-input v-model="mchnt.name" placeholder="必填" :disabled="disabled"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div class="sm-box">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="联系人:">
                    <el-input v-model="mchnt.contactName" placeholder="必填" :disabled="disabled"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="联系方式:">
                    <el-input v-model="mchnt.phone" placeholder="必填" :disabled="disabled"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="邮箱:">
                    <el-input v-model="mchnt.email" placeholder="必填" :disabled="disabled"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                   <el-form-item label="城市:" prop="provinceId">
                    <el-select size="small" style="width: 32%"
                               v-model="mchnt.provinceId"
                               :disabled="disabled"
                               placeholder="请选择省份"
                               @change="provinceChange($event)"
                               @visible-change="visible($event)">
                      <el-option
                        v-for="(item,i) in provinceList"
                        :key="i"
                        :label="item.name"
                        :value="item.id | stringNumber">
                      </el-option>
                    </el-select>

                    <el-select size="small" style="width: 32%"
                               v-model="mchnt.cityId"
                               placeholder="请选择城市"
                               :disabled="disabled"
                               @change="cityChange($event)"
                               @visible-change="visible($event)">
                      <el-option
                        v-for="item in cityList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id | stringNumber">
                      </el-option>
                    </el-select>

                    <el-select size="small" style="width: 32%"
                               v-model="mchnt.districtId"
                               :disabled="disabled"
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
                <el-col :span="12">
                  <el-form-item label="地址:">
                    <el-input v-model="mchnt.addr" placeholder="必填" :disabled="disabled"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div class="sm-box">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="结算户名:">
                    <el-input v-model="mchnt.settleAccountName" placeholder="必填" :disabled="disabled"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="结算账号:">
                    <el-input v-model="mchnt.settleAccount" placeholder="必填" :disabled="disabled"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                    <el-form-item label="是否自营:" prop="isSelfOperated">
                      <el-select v-model="mchnt.isSelfOperated" placeholder="必选" disabled="disabled" style='width:100%'>
                        <el-option label="是" :value="1 | stringNumber"></el-option>
                        <el-option label="否" :value="0 | stringNumber"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                <!-- <el-col :span="12">
                  <el-form-item label="验证方式:">
                    <el-select v-model="mchnt.settleAccount" placeholder="必填" :disabled="disabled">
                      <el-option label="是" value="1"></el-option>
                      <el-option label="否" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col> -->
                <!-- <el-col :span="12">
                  <el-form-item label="ZMK索引值:">
                    <el-input v-model="mchnt.zmk" placeholder="必填" disabled='disabled'></el-input>
                  </el-form-item>
                </el-col> -->
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label="商户类别:" prop="mccTypeId">
                    <el-select size="small" style="width: 100%"
                    v-model.trim="mccTypeId"
                    filterable
                    placeholder="请选择"
                    @change="mccChange"
                    @visible-change="visible($event)"
                    :disabled='disabled'>
                      <el-option
                      v-for="(item,i) in mccType"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id | stringNumber">
                    </el-option>
                  </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="12">
                <el-form-item label="商户mcc:" prop="mccCode">
                  <el-select size="small" style="width: 100%"
                    v-model.trim="mchnt.mccCode"
                    filterable
                    placeholder="请选择"
                    :disabled='disabled'>
                      <el-option
                      v-for="(item,i) in mccChildList"
                      :key="i"
                      :label="item.description"
                      :value="item.code | stringNumber">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
            </el-row>
            </div>
            <div class="sm-box">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="法人代表:">
                    <el-input v-model="mchnt.legalPersonName" placeholder="必填" :disabled="disabled"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="法人身份证:">
                    <el-input v-model="mchnt.legalPersonIdNo" placeholder="必填" :disabled="disabled"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="法人身份证电子版:">
                    <el-upload
                      class="upload-demo"
                      name="legalPersonUrl"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :action="uploadAction"
                      :on-success="uploadlegalPerson"
                      :on-remove="removelegalPerson"
                      :file-list="legalPersonUrlList"
                      :before-upload='beforeAvatarUpload'
                      :disabled='dislegal'>
                      <i class="el-icon-plus"></i>
                      <div slot="tip" class="el-upload__tip">只能上传一个jpg/png文件，且不超过2M</div>
                    </el-upload>
                    <el-dialog v-model="dialogVisible" size="tiny">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="营业执照电子版:">
                    <el-upload
                      class="upload-demo"
                      name="businessLicenseUrl"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :action="uploadAction"
                      :on-success="uploadbusiness"
                      :on-remove="removebusiness"
                      :file-list="businessLicenseUrlList"
                      :before-upload='beforeAvatarUpload'
                      :disabled='disbusiness'>
                      <i class="el-icon-plus"></i>
                      <div slot="tip" class="el-upload__tip">只能上传一个jpg/png文件，且不超过2M</div>
                    </el-upload>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item>
                <div class="button">
                  <el-button type="primary" @click="nextpage()">下一页</el-button>
                  <el-button v-show="disabled" type="primary" @click="edit()">编辑</el-button>
                  <el-button v-show="!disabled" type="primary" @click="onSubmit()">提交</el-button>
                  <el-button type="default" @click="back()">取消</el-button>
                </div>
              </el-form-item>
            </div>
          </div>
          </el-form>
      </transition>
      <transition name="el-fade-in">
        <el-form :model="mchntFee" v-show="!showpage" class="form-module" label-width="120px">
          <div class="mchntFee">
            <el-row>
              <div class="checkTab">
                <el-col :span="2">
                  <p class="labeltit">产品类型:</p>
                </el-col>
                <el-col :span="20">
                  <el-checkbox-group v-model="txName">
                    <el-checkbox v-for="tx in txList" :key="tx.code" :label="tx.businessName" @change="chanTxName(txName,'true',$event)" :disabled="disabled">{{tx.businessName}}
                    </el-checkbox>
                  </el-checkbox-group>
                </el-col>
              </div>
            </el-row>
            <div class="sm-box">
              <el-row>
                <el-col :span="2">
                  <p class="labeltit">接入信息:</p>
                </el-col>
                <el-col :span="20">
                  <el-row>
                    <el-col :span="10" :offset="1">
                      <el-form-item label="接入IP1:">
                        <el-input v-model="mchntFee.mchntNode.ip1" placeholder="必填" :disabled="disabled"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="1">
                      <el-form-item label="接入IP2:">
                        <el-input v-model="mchntFee.mchntNode.ip2" placeholder="必填" :disabled="disabled"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="10" :offset="1">
                      <el-form-item label="接入IP3:">
                        <el-input v-model="mchntFee.mchntNode.ip3" placeholder="必填" :disabled="disabled"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="1">
                      <el-form-item label="通讯类型:">
                        <el-select v-model="mchntFee.mchntNode.protocol" placeholder="必选" :disabled="disabled">
                          <el-option label="HTTP" value="1"></el-option>
                          <el-option label="SOCKET" value="2"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="10" :offset="1">
                      <el-form-item label="最大流量:">
                        <el-input v-model="mchntFee.mchntNode.maxTps" placeholder="必选" :disabled="disabled"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>

            <!--{{txName}} 选中的产品类型-->
            <el-row>
              <div class="tabs">
                <!--{{checkTab}} 当前tab-->
                <el-tabs type="border-card" v-model="checkTab" @tab-click="chanTxName(checkTab)">
                  <el-tab-pane v-for="tab in txName" :key="tab" :label="tab" :name="tab">
                    <div class="sm-box">
                      <el-row>
                        <el-col :span="2">
                          <p class="labeltit">交易权限:</p>
                        </el-col>
                        <el-col :span="20">
                          <el-checkbox-group v-model="mchntFee.txs">
                            <el-checkbox v-for="tx in childrenTx" :key="tx.code" :label="tx.code" :name="tx.name" :disabled="disabled" @change="chanlis($event,tx.needCharging,checkTab,tx.needRiskCtrl)">{{tx.name}}
                            </el-checkbox>
                          </el-checkbox-group>
                        </el-col>
                      </el-row>
                      <!-- {{mchntFee.txs}} -->
                      <!--{{checked}} 当前tab-->
                      <!--{{mchntFee.txs}} 选中的交易权限 -->
                      <!-- {{childrenTx}} -->
                    </div>
                    <div v-show="checkTab=='POSP'">
                      <div class="sm-box">
                        <el-row>
                          <template v-for="(value,key) in zmksList">
                            <el-col :span="10" :key="key">
                              <el-form-item label="终端号:">
                                <el-input v-model="zmksList[key]" placeholder="非必填" :disabled="disabled"></el-input>
                              </el-form-item>
                            </el-col>
                            <el-col :span="2" class='btn' :key="value">
                              <el-button v-if="key=='zmk0'" @click="addZmk" :disabled="disabled">添加</el-button>
                              <el-button v-if="key!='zmk0'" @click="deleteZmk(key)" :disabled="disabled">删除</el-button>
                            </el-col>
                          </template>
                        </el-row>
                    </div>
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="mchntFee.tableFee['POSP']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="cardType" label="卡类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.cardType" style="width: 0"></el-input>
                                <span>{{scope.row.cardTypeName}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选" @change="feeTypeTab(scope.row)" :disabled="!scope.row.showFee">
                                  <el-option label="比例" value="1"></el-option>
                                  <el-option label="比例封顶" value="2"></el-option>
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
                                <el-input size="small" type="text" v-model="scope.row.minimumFeeTemp" :disabled="!scope.row.showFee" placeholder="必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="maxThresholdTemp" label="单卡单笔限额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp"  :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdPerCardTemp" label="单卡单日限额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdPerCardTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>

                            <el-table-column prop="status" label="状态">
                              <template scope="scope">
                                <el-select v-model="scope.row.status" placeholder="必选" :disabled="disabled">
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
                          <el-table :data="mchntFee.tableFee['COLLECT']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="cardType" label="卡类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.cardType" style="width: 0"></el-input>
                                <span>{{scope.row.cardTypeName}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选" @change="feeTypeTab(scope.row)" :disabled="!scope.row.showFee">
                                  <el-option label="比例" value="1"></el-option>
                                  <el-option label="比例封顶" value="2"></el-option>
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
                                <el-input size="small" type="text" v-model="scope.row.minimumFeeTemp" :disabled="!scope.row.showFee" placeholder="必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="maxThresholdTemp" label="单卡单笔限额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp"  :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdPerCardTemp" label="单卡单日限额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdPerCardTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>

                            <el-table-column prop="status" label="状态">
                              <template scope="scope">
                                <el-select v-model="scope.row.status" placeholder="必选" :disabled="disabled">
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
                      <div v-show="mchntFee.txs.indexOf('002001') !== -1" class="sm-box">
                        <el-row>
                          <el-col :span="10">
                            <el-form-item label="风控类型:">
                              <el-select v-model="mchnt.d0payType" placeholder="必选" :disabled="disabled">
                                <el-option label="--请选择--" value=""></el-option>
                                <el-option label="逐笔风控" :value="1"></el-option>
                                <el-option label="总额风控" :value="2"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col :span="10">
                            <el-form-item label="垫资费率:">
                              <el-input v-model="mchntCredit.interestRateTemp" placeholder="非必填" :disabled="disabled"></el-input>
                            </el-form-item>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="10">
                            <el-form-item label="授信比:">
                              <el-input v-model="mchntCredit.rateOfUnsettledTemp" placeholder="非必填" :disabled="disabled"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="10">
                            <el-form-item label="授信额:">
                              <el-input v-model="mchntCredit.lineOfCreditTemp" placeholder="非必填" :disabled="disabled"></el-input>
                            </el-form-item>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="mchntFee.tableFee['PAY']" border style="width: 100%">
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
                            <el-table-column prop="feeType" label="扣率类型"  width="180" align="center">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选"  @change="changeFeeType(scope.row)" :disabled="!scope.row.showFee">
                                  <el-option label="单笔固定" value="2"></el-option>
                                  <el-option label="金额阶梯固定" value="4"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeRateTemp" label="扣率值（%）"  width="600" align="center">
                              <template scope="scope">
                                <el-row v-if="scope.row.feeType == 2">
                                  <el-form-item label="固定手续费(元)：">
                                    <el-input v-model.trim="scope.row.feeFixedTemp" placeholder="必填" :disabled="!scope.row.showFee"></el-input>
                                  </el-form-item>
                                </el-row>

                                <el-row v-if="scope.row.feeType == 4" :gutter="15"  v-for="(rate, index) in scope.row.ladder" :key="rate">
                                  <el-col :span="10">
                                    <el-form-item label="金额(元)：">
                                      <el-input v-model.trim="rate.m" placeholder="必填" :disabled="index == scope.row.ladder.length - 1 || !scope.row.showFee"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="10">
                                    <el-form-item label="固定手续费(元)：">
                                      <el-input v-model.trim="rate.f" placeholder="必填" :disabled="!scope.row.showFee"></el-input>
                                    </el-form-item>
                                  </el-col>
 
                                  <el-col :span="2">
                                    <el-button v-show="index == scope.row.ladder.length - 1" size="small" @click="addLadder(scope.row)" icon="plus" :disabled="!scope.row.showFee">添加</el-button>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index != scope.row.ladder.length - 1" size="small" @click="deleteLadder(scope.row, index)" icon="delete" :disabled="!scope.row.showFee">删除</el-button>
                                  </el-col>
                                </el-row>
                              </template>
                            </el-table-column>
                            <el-table-column prop="brandFeeExp" label="品牌费（元）" align="center"  width='450'>
                              <template scope="scope">
                                <el-row v-if="scope.row.cardType != 1">
                                  <el-col :span="12">
                                    <el-form-item label="费率(%)：">
                                      <el-input v-model.trim="scope.row.brandFeeExp.count" placeholder="必填" :disabled="!scope.row.showFee"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="12">
                                    <el-form-item label="封顶值(元)：">
                                      <el-input v-model.trim="scope.row.brandFeeExp.sum" placeholder="必填" :disabled="!scope.row.showFee"></el-input>
                                    </el-form-item>
                                  </el-col>
                                </el-row>
                              </template>
                            </el-table-column>
                            <el-table-column prop="minThresholdTemp" label="单笔最小限额" align="center"  width='150'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.minThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="maxThresholdTemp" label="单笔最大限额" align="center"  width='150'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdPerCardTemp" label="单卡单日限额" align="center"  width='150'>
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.dailyMaxThresholdPerCardTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额" align="center"  width='150'>
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
                    <div v-show="checkTab=='WECHAT_PAY'">
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="mchntFee.tableFee['WECHAT_PAY']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选">
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
                            <el-table-column prop="maxThresholdTemp" label="单笔限额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额">
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
                          <el-table :data="mchntFee.tableFee['ALI_PAY']" border style="width: 100%">
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
                            <el-table-column prop="maxThresholdTemp" label="单笔限额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额">
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
                          <el-table :data="mchntFee.tableFee['GATEWAY']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型"  width="180" align="center">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选"  @change="changeFeeType(scope.row)"  :disabled="!scope.row.showFee">
                                  <el-option label="单笔固定" value="2"></el-option>
                                  <el-option label="金额阶梯固定" value="4"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeFixedTemp" label="扣率值（元）"  width="600" align="center">
                              <template scope="scope">
                                <el-row v-if="scope.row.feeType == 2">
                                  <el-form-item label="固定手续费(元)：" class="mb0">
                                    <el-input v-model.trim="scope.row.feeFixedTemp" placeholder="必填" :disabled="!scope.row.showFee"></el-input>
                                  </el-form-item>
                                </el-row>

                                <el-row v-if="scope.row.feeType == 4" :gutter="15"  v-for="(rate, index) in scope.row.ladder" :key="rate">
                                  <el-col :span="10">
                                    <el-form-item label="金额(元)：">
                                      <el-input v-model.trim="rate.m" placeholder="必填" :disabled="index == scope.row.ladder.length - 1 || !scope.row.showFee"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="10">
                                    <el-form-item label="固定手续费(元)：">
                                      <el-input v-model.trim="rate.f" placeholder="必填" :disabled="!scope.row.showFee"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index == scope.row.ladder.length - 1" size="small" @click="addLadder(scope.row)" icon="plus" :disabled="!scope.row.showFee">添加</el-button>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index != scope.row.ladder.length - 1" size="small" @click="deleteLadder(scope.row, index)" icon="delete" :disabled="!scope.row.showFee">删除</el-button>
                                  </el-col>
                                </el-row>
                              </template>
                            </el-table-column>
                            <el-table-column prop="maxThresholdTemp" label="单笔限额">
                              <template scope="scope">
                                <el-input size="small" type="text" v-model="scope.row.maxThresholdTemp" :disabled="!scope.row.showRisk" placeholder="非必填"></el-input>
                              </template>
                            </el-table-column>
                            <el-table-column prop="dailyMaxThresholdTemp" label="单日总限额">
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
                        <el-row>
                          <el-col :span="10">
                            <el-form-item label="结算方式:">
                              <el-select v-model="mchnt.settleType" placeholder="必选" :disabled="disabled">
                                <el-option label="--请选择--" value=""></el-option>
                                <el-option label="预付费" :value="1 | stringNumber"></el-option>
                                <el-option label="后付费" :value="2 | stringNumber"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="sm-box">
                        <p class="labeltit">费率设置</p>
                        <el-row>
                          <el-table :data="mchntFee.tableFee['VERIFY']" border style="width: 100%">
                            <el-table-column prop="cardType" label="交易类型">
                              <template scope="scope">
                                <el-input type="hidden" v-model="scope.row.txCode"
                                          style="width: 0"></el-input>
                                <span>{{scope.row.txNameTab}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeType" label="扣率类型"  width="180" align="center">
                              <template scope="scope">
                                <el-select v-model="scope.row.feeType" placeholder="必选"  @change="changeFeeType(scope.row)"  :disabled="!scope.row.showFee">
                                  <el-option label="单笔固定" value="2"></el-option>
                                  <el-option label="笔数阶梯固定(月)" value="6"></el-option>
                                  <el-option label="笔数阶梯固定(年)" value="8"></el-option>
                                </el-select>
                              </template>
                            </el-table-column>
                            <el-table-column prop="feeFixedTemp" label="扣率值（元）"  width="600" align="center">
                              <template scope="scope">
                                <el-row v-if="scope.row.feeType == 2">
                                  <el-form-item label="固定手续费(元)：">
                                    <el-input v-model.trim="scope.row.feeFixedTemp" placeholder="必填" :disabled="!scope.row.showFee"></el-input>
                                  </el-form-item>
                                </el-row>

                                <el-row v-if="scope.row.feeType == 6 || scope.row.feeType == 8" :gutter="15"  v-for="(rate, index) in scope.row.ladder" :key="rate">
                                  <el-col :span="10">
                                    <el-form-item label="金额(元)：">
                                      <el-input v-model.trim="rate.m" placeholder="必填" :disabled="index == scope.row.ladder.length - 1 || !scope.row.showFee"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="10">
                                    <el-form-item label="固定手续费(元)：">
                                      <el-input v-model.trim="rate.f" placeholder="必填" :disabled="!scope.row.showFee"></el-input>
                                    </el-form-item>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index == scope.row.ladder.length - 1" size="small" @click="addLadder(scope.row)" icon="plus" :disabled="!scope.row.showFee">添加</el-button>
                                  </el-col>

                                  <el-col :span="2">
                                    <el-button v-show="index != scope.row.ladder.length - 1" size="small" @click="deleteLadder(scope.row, index)" icon="delete" :disabled="!scope.row.showFee">删除</el-button>
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
                <el-button v-show="disabled" type="primary" @click="edit()">编辑</el-button>
                <el-button v-show="!disabled" type="primary" @click="onSubmit()">提交</el-button>
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
  import ApiService from '@/services/API-servies';
  import {mapState, mapActions, mapGetters} from 'vuex';
  const BASE = process.env.API_ROOT;
  export default {
    data() {
      return {
        mchnt: {
          agentId:'',
          code: '',
          name: '',
          contactName: '',
          phone: '',
          email: '',
          provinceId:'',
          cityId: '',
          districtId: '',
          addr: '',
          isSelfOperated:'',
          settlePeriodType: '',
          settleAccountName: '',
          settleAccount: '',
          legalPersonUrl:'',
          businessLicenseUrl:'',
          legalPersonName:'',
          legalPersonIdNo:'',
          mccCode:'',
          d0payType:'',
          settleType:'',
        },
        mchntFee:{
          mchntNode: {
              ip1: '',
              ip2: '',
              ip3: '',
              protocol: '',
              maxTps: ''
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
        },
        mchntCredit:{
          interestRateTemp:'',
          rateOfUnsettledTemp:'',
          lineOfCreditTemp:'',
        },
        agentAll: [],
        cityList: [],//市列表
        regionList:[],//区列表
        legalPersonUrlList: [],//身份证照片上传
        businessLicenseUrlList: [],//营业执照照片上传
        showpage:true,
        txList: [],//所有数据
        txCode: [],//产品类型选择项
        txName: [],//产品类型选择项
        childrenTx: [],
        checkTab: '',
        checked: '',
        disabled: true,
        uploadAction: ApiService.mchnt.uploadjpg,
        allNeed:{},
        dialogImageUrl: '',
        dialogVisible: false,
        dislegal:false,
        disbusiness:false,
        zmksList:{
          'zmk0':''
        },
        zmksCount:0,
        zmks:[],
        mccChildList:[],
        mccType:[],
        mccTypeId:'',
        muskFixedDefa:false,
        mccEmpty:false,
        allowChange:false,
      }
    },
    mounted: function (){
      this.$nextTick(()=> {
        // 获取商户类别信息
        ApiService.common.mccList().then(data => {
          this.mccType = data.data;
        });
        //获取上级机构
        ApiService.agency.findAgentNameOrCode().then((res) =>{
          this.agentAll.push({value: '', label: '--请选择--'});
          for (let i = 0; i < res.length; i++) {
            this.agentAll.push({value: res[i].id, label: res[i].name + '--' + res[i].code});
          }
        })
        this.getDetail();//获取详情 fee risk
      })
    },
    computed: {
      ...mapGetters(['getRegion']),
      provinceList: function (){
        return this.getRegion;
      }
    },
    filters: {
        stringNumber(val) {
          return val.toString();
        }
      },
      watch:{
      'mccTypeId': {
        handler: function (val, oldVal) {
          if(val){
            this.mccChange();
          }
        },
      }
    },
    methods: {
      //获取详情
      getDetail() {
        let _this=this;
        let id = _this.$route.query.id;
        _this.disabled = this.$route.query.disabled === true;
        // 获取详情信息
        ApiService.mchnt.detailMchnt({id: id}).then((data) =>{
          data.mchnt.provinceId = data.mchnt.provinceId+'';
          data.mchnt.cityId = data.mchnt.cityId+'';
          data.mchnt.districtId = data.mchnt.districtId+'';
          data.mchnt.isSelfOperated = data.mchnt.isSelfOperated+'';
          data.mchnt.settleType = data.mchnt.settleType+'';
          _this.mccTypeId = data.mchnt.mccTypeId +'';
          //授信额
          if(data.mchntCredit){
            _this.mchntCredit = data.mchntCredit;
          }
          //拆分终端号
          for(let [index,i] of data.zmks.entries()){
            this.zmksList['zmk'+index] = i
          };
          this.zmksCount = data.zmks.length;
          _this.mchnt = data.mchnt;
          _this.mchntFee.mchntNode = data.mchntNode;
          _this.getFee=data.mchntFee;
          //获取图片
          if(data.mchnt.legalPersonUrl){
            this.legalPersonUrlList.push({url:BASE+'/business/mchnt/findImg.do?legalPersonUrl='+data.mchnt.legalPersonUrl});
            this.dislegal=true;
          }
          if(data.mchnt.businessLicenseUrl){
            this.businessLicenseUrlList.push({url:BASE+'/business/mchnt/findImg.do?businessLicenseUrl='+data.mchnt.businessLicenseUrl});
            this.disbusiness=true;
          }
          //加载费率
          for(let i=0;i<data.mchntFee.length;i++){
          let feeMultiStepExp = [];
            //切割阶梯费率
            if(data.mchntFee[i].feeMultiStepExp && data.mchntFee[i].feeMultiStepExp != ''){
              let arr = data.mchntFee[i].feeMultiStepExp.split(';');
              let arr1 = arr[0].split(',');
              let arr2 = arr[1].split(',');
              for(let j in arr2){
                feeMultiStepExp.push({m:arr1[j],f:arr2[j]})
              }
            };
            let brandFeeExp={count:'',sum:''};
            if(data.mchntFee[i].brandFeeExp){
              brandFeeExp.count = data.mchntFee[i].brandFeeExp.split(';')[0];
              brandFeeExp.sum = data.mchntFee[i].brandFeeExp.split(';')[1];
            };
            let feeRisk = {
              txNameTab: data.mchntFee[i].txCodeName,
              txCode: data.mchntFee[i].txCode,
              cardTypeName: data.mchntFee[i].cardTypeName,
              cardType: data.mchntFee[i].cardType,
              feeType: data.mchntFee[i].feeType+'',
              feeRateTemp: data.mchntFee[i].feeRateTemp,
              feeFixedTemp: data.mchntFee[i].feeFixedTemp,
              ladder:feeMultiStepExp,
              brandFeeExp: brandFeeExp,
              roundingMode: data.mchntFee[i].roundingMode,
              minimumFeeTemp: data.mchntFee[i].minimumFeeTemp,
              showFee: false,
              muskFixed:true,
              status: data.mchntFee[i].status+'',
            }
            //加载风控
            for(let j=0;j<data.mchntRisk.length;j++){
              if(data.mchntRisk[j].txCode == data.mchntFee[i].txCode && data.mchntRisk[j].cardType == data.mchntFee[i].cardType){
                feeRisk['minThresholdTemp'] = data.mchntRisk[j].minThresholdTemp;
                feeRisk['maxThresholdTemp'] = data.mchntRisk[j].maxThresholdTemp;
                feeRisk['dailyMaxThresholdPerCardTemp'] = data.mchntRisk[j].dailyMaxThresholdPerCardTemp;
                feeRisk['dailyMaxThresholdTemp'] = data.mchntRisk[j].dailyMaxThresholdTemp;
                feeRisk['showRisk'] = false;
              }
            }
            _this.mchntFee.tableFee[data.mchntFee[i].businessName].push(feeRisk);
          };
          //假如没有费率 但存在风控
          for(let j=0;j<data.mchntRisk.length;j++){
            let overRisk=false;//判断是否存在于表格中相同的txCode
            for(let i=0;i<this.mchntFee.tableFee[data.mchntRisk[j].businessName].length;i++){
              if(data.mchntRisk[j].txCode == this.mchntFee.tableFee[data.mchntRisk[j].businessName][i].txCode && data.mchntRisk[j].cardType == this.mchntFee.tableFee[data.mchntRisk[j].businessName][i].cardType){
                overRisk=true;
              }
            }
            if(!overRisk){
              let feeRisk = {
                txNameTab: data.mchntRisk[j].txCodeName,
                txCode: data.mchntRisk[j].txCode,
                cardTypeName: data.mchntRisk[j].cardTypeName,
                cardType: data.mchntRisk[j].cardType,
                minThresholdTemp: data.mchntRisk[j].minThresholdTemp,
                maxThresholdTemp: data.mchntRisk[j].maxThresholdTemp,
                dailyMaxThresholdPerCardTemp: data.mchntRisk[j].dailyMaxThresholdPerCardTemp,
                dailyMaxThresholdTemp: data.mchntRisk[j].dailyMaxThresholdTemp,
                showRisk: false
              };
              _this.mchntFee.tableFee[data.mchntRisk[j].businessName].push(feeRisk);
            }
          }
          this.getTx();//获取交易权限 
        })
      },
      //获取交易权限
      getTx:function (){
        let id = this.$route.query.id;
        let agentId = this.mchnt.agentId;
        let _this=this;
        let activeIndex=0;
        _this.txList = [];
        _this.txName=[];
        ApiService.mchnt.findMchntTxByMchntId({id: id,agentId:agentId}).then((res) =>{
          for(let i=0;i<res.length;i++){
            this.txList.push(res[i]);
            if(res[i].checkAgent){
              this.txName.push(res[i].businessName);
            }
          };
          this.checkTab = this.txName[this.txName.length-1];//默认选中最后一个tab
          let _this=this;
          for (let i = 0; i < _this.txList.length; i++) {
            for (var j=0;j<_this.txList[i].childrenTx.length;j++){
              //统计所有的needCharging needRiskCtrl
              _this.allNeed[_this.txList[i].childrenTx[j].code] = {
                'needCharging':_this.txList[i].childrenTx[j].needCharging,
                'needRiskCtrl':_this.txList[i].childrenTx[j].needRiskCtrl
              }
            };
            //判断选中的产品类型赋值勾选
            for (var j=0;j<_this.txList[i].childrenTx.length;j++){
              if(_this.txList[i].childrenTx[j].checkAgent){
                _this.mchntFee.txs.push(_this.txList[i].childrenTx[j].code)
              };
            }
            //机构所有的交易权限
            if (this.checkTab == _this.txList[i].businessName) {
              _this.childrenTx = _this.txList[i].childrenTx;
            }
          };
          /*let arr = [];
          for(let p=0;p<_this.childrenTx.length;p++){
            if(_this.childrenTx[p].checkAgent){
              arr.push(_this.childrenTx[p])
            };
          };
          _this.childrenTx = arr;*/
        });
      },
      chanTxName: function (txName,defaultActive,event){
        if(event){
          if(!event.target.checked){
            for(let txSing of this.txList){
              if(event.target.value == txSing.businessName){
                for(let txChild of txSing.childrenTx){
                  let inOf = this.mchntFee.txs.indexOf(txChild.code);
                  if(inOf!=-1){
                    this.mchntFee.txs.splice(inOf,1)
                  }
                }
              }
            }
            this.mchntFee.tableFee[event.target.value]=[];
            if(event.target.value=='POSP'){
              this.zmksList = {'zmk0':''}
            }
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
        /*let arr = [];
        for(let p=0;p<_this.childrenTx.length;p++){
          if(_this.childrenTx[p].checkAgent){
            arr.push(_this.childrenTx[p])
          }
        };
        _this.childrenTx = arr;*/
      },
      chanlis: function (event, needCharging, tabName,needRiskCtrl){
        let _this=this;
        if (event.target.checked && needCharging || event.target.checked && needRiskCtrl) {
          for (let i = 0; i < _this.childrenTx.length; i++) {
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
                GATEWAY:[],
                COLLECT : [{
                  cardTypeName: '借记卡',
                  cardType: '1',
                },
                {
                  cardTypeName: '贷记卡',
                  cardType: '2',
                }],
              };
              let json = {
                    'txNameTab':this.childrenTx[i].name,
                    'txCode':this.childrenTx[i].code,
                    'feeType': '',
                    'feeRateTemp': '',
                    'feeFixedTemp': '',
                    'roundingMode': '',
                    'brandFeeExp':{count:'',sum:''},
                    'minimumFeeTemp': '',
                    'minThresholdTemp': '',
                    'maxThresholdTemp': '',
                    'dailyMaxThresholdPerCardTemp': '',
                    'dailyMaxThresholdTemp': '',
                    'status': '0',
                    'showRisk':needRiskCtrl,
                    'showFee':needCharging,
                    'muskFixed':!needCharging
                  }
              for(let item in card){
                if(item == tabName){
                  if(card[item].length){
                    for(let lis in card[item]){
                      let jsoncard = Object.assign({},json);
                      jsoncard['cardTypeName']=card[item][lis].cardTypeName;
                      jsoncard['cardType']=card[item][lis].cardType;
                      this.mchntFee.tableFee[tabName].push(jsoncard);
                    }
                  }else {
                      this.mchntFee.tableFee[tabName].push(json);
                  }
                }
              }
            }
          }
        } else if (!event.target.checked && needCharging || !event.target.checked && needRiskCtrl) {
          for (let i = 0; i < this.mchntFee.tableFee[tabName].length; i++) {
            if (this.mchntFee.tableFee[tabName][i].txCode == event.target.value) {
              this.mchntFee.tableFee[tabName].splice(i, 1);
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
      onSubmit() {
        let _this = this;
        let mchntRisk = [];
        let mchntFee = [];
        // 拼接终端号
        for(let item in this.zmksList){
          this.zmks.push(this.zmksList[item])
        }
        for(let tableTx in this.mchntFee.tableFee){//循环所有表格提取费率tr
          for (let i = 0; i < this.mchntFee.tableFee[tableTx].length; i++){
            let feeMultiStepExp='';
            if(this.mchntFee.tableFee[tableTx][i].ladder){
              let m=[],f=[];
              for(let j in this.mchntFee.tableFee[tableTx][i].ladder){
                m.push(this.mchntFee.tableFee[tableTx][i].ladder[j].m);
                f.push(this.mchntFee.tableFee[tableTx][i].ladder[j].f);
                feeMultiStepExp = m.join(',')+';'+f.join(',')
              }
            };
            let brandFeeExp=null;
            if(_this.mchntFee.tableFee[tableTx][i].brandFeeExp.count && _this.mchntFee.tableFee[tableTx][i].brandFeeExp.sum){
              brandFeeExp = _this.mchntFee.tableFee[tableTx][i].brandFeeExp.count + ";" +_this.mchntFee.tableFee[tableTx][i].brandFeeExp.sum
            };
            mchntRisk.push({
              txCode: this.mchntFee.tableFee[tableTx][i].txCode,
              cardType: this.mchntFee.tableFee[tableTx][i].cardType,
              minThresholdTemp: this.mchntFee.tableFee[tableTx][i].minThresholdTemp,
              maxThresholdTemp: this.mchntFee.tableFee[tableTx][i].maxThresholdTemp,
              dailyMaxThresholdPerCardTemp: this.mchntFee.tableFee[tableTx][i].dailyMaxThresholdPerCardTemp,
              dailyMaxThresholdTemp: this.mchntFee.tableFee[tableTx][i].dailyMaxThresholdTemp
            });
            mchntFee.push({
              txCode: this.mchntFee.tableFee[tableTx][i].txCode,
              cardType: this.mchntFee.tableFee[tableTx][i].cardType,
              feeType: this.mchntFee.tableFee[tableTx][i].feeType,
              feeRateTemp: this.mchntFee.tableFee[tableTx][i].feeRateTemp,
              feeFixedTemp: this.mchntFee.tableFee[tableTx][i].feeFixedTemp,
              feeMultiStepExp:feeMultiStepExp,
              brandFeeExp: brandFeeExp,
              roundingMode: this.mchntFee.tableFee[tableTx][i].roundingMode,
              minimumFeeTemp: this.mchntFee.tableFee[tableTx][i].minimumFeeTemp,
              status: this.mchntFee.tableFee[tableTx][i].status,
            })
          };
        }
        ApiService.mchnt.uptMchnt({
          mchnt: this.mchnt,
          txs: this.mchntFee.txs,
          mchntNode: this.mchntFee.mchntNode,
          mchntRisk: mchntRisk,
          mchntFee: mchntFee,
        }).then((res) =>{
          if(res.code === 0){
            this.$message.success(res.message);
            this.$router.push({path: 'mchnt'})
          }else {
            this.$message.error(res.message);
          }
        }).catch((res) =>{
          this.$message.error('更新失败');
        })
      },
      mccChange(){
        let _this=this;
        if(_this.mccEmpty){
          this.mchnt.mccCode = '';
        }
        this.mccChildList = [];
        for(let i=0;i<_this.mccType.length;i++){
          if(this.mccTypeId == _this.mccType[i].id){
            this.mccChildList = _this.mccType[i].mccCodeList
          }
        }
      },
      //处理商户类别mcc change事件
      mccVisible(event){
        if(event){
          this.mccEmpty=true
        }
      },
      uploadlegalPerson(file, fileList) {
        this.mchnt.legalPersonUrl = file.data;
        this.dislegal=true;
      },
      removelegalPerson(){
        this.mchnt.legalPersonUrl = '';
        this.dislegal=false;
      },
      uploadbusiness(file, fileList) {
        this.mchnt.businessLicenseUrl = file.data;
        this.disbusiness=true;
      },
      removebusiness(file){
        this.mchnt.businessLicenseUrl = '';
        this.disbusiness=false;
      },
       handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //在图片提交前进行验证
      beforeAvatarUpload(file) {    
        const isJPG = file.type === 'image/jpeg'
        const isPNG = file.type === 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG&&!isPNG) {
          this.$message.error('上传图片只能是 JPG/PNG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!')
        }
        return (isJPG && isLt2M) || (isPNG && isLt2M) ;
      },
      //添加终端号
      addZmk(){
        this.zmksCount++;
        let count = 'zmk' + this.zmksCount;
        this.zmksList = Object.assign({},this.zmksList);
        this.$set(this.zmksList,count, '');
      },
      deleteZmk(key){
        this.$delete(this.zmksList,key);
      },
       nextpage(agentInfo){
        this.showpage = false;
      },
      prevpage(){
        this.showpage = true;
      },
      back(){
        this.$router.push("/mchnt")
      },
      //处理省市区change事件
      visible(event){
        if(event){
          this.allowChange=true
        }
      },
      /*二级联动选择地区*/
      provinceChange(event) {
        let _this = this;
        if(this.allowChange){
          _this.mchnt.cityId='';
        }
        _this.cityList = [];
        for(let i = 0, len = _this.provinceList.length; i < len; i++) {
          if(_this.provinceList[i].id === _this.mchnt.provinceId * 1) {
            _this.cityList = _this.provinceList[i].cityList;
          }
        }
      },
      cityChange(ev) {
        let _this = this;
        if(this.allowChange){
          _this.mchnt.districtId='';
        }
        _this.regionList = [];
        for(let i = 0, len = _this.cityList.length; i < len; i++) {
          if(_this.cityList[i].id === _this.mchnt.cityId * 1) {
            _this.regionList = _this.cityList[i].districtList;
          }
        }
      },
      //更改扣率类型
      changeFeeType(row){
        if(row.ladder){
          row.ladder.splice(0)
        }
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
      //第一页编辑按钮
      edit(){
        this.disabled=false;
        this.muskFixedDefa=true;
        //表格中费率是否可编辑
        //表格中风控是否可编辑
        for (let item in this.mchntFee.tableFee){
          for(let j=0;j<this.mchntFee.tableFee[item].length;j++){
            this.mchntFee.tableFee[item][j].showRisk = this.allNeed[this.mchntFee.tableFee[item][j].txCode].needRiskCtrl;
            this.mchntFee.tableFee[item][j].showFee = this.allNeed[this.mchntFee.tableFee[item][j].txCode].needCharging
          }
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  .handle-box {
    margin-top: 20px;
    position: relative;
    .mchnt, .mchntFee {
      width: 100%;
      position: absolute;
      top: 20px;
      left: 0;
      border: 1px solid #ddd;
      margin: 0 10px;
      padding: 20px 5px;
    }
  }

  .crumbs {
    margin-bottom: 20px;
  }

  .sm-box {
    margin-top: 20px;
    border-bottom: 1px solid #bfcbd9;
    &:last-child {
      border-bottom: none;
    }
  }

  .el-form-item {
    width: 100%;
    .el-form-item__content {
      width: 60%;
      .el-select {
        width: 30%;
      }
    }
  }

  .button-from {
    margin-top: 20px;
  }
  .labeltit{
    margin-bottom: 20px;
    font-size: 14px
  }

  .checkTab {
    margin-top: 20px;
    p {
      font-size: 14px;
    }
  }
  .button {
    margin-top: 20px;
  }
  .tabs {
    margin-top: 40px;
  }
  .btn{
    text-align: right;
  }
</style>