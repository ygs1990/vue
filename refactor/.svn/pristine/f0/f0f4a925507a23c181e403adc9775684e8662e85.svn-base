<template>
  <div class="content" v-loading.body.lock="showContent" element-loading-text="拼命加载中...">
    <el-form :model="insMchnt" :rules="formRules" ref="mchnt" label-width="120px" >
      <!--通道商户基本信息-->
      <div v-show="showPage">
        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="通道机构：" prop="insId">
              <el-select v-model.trim="insMchnt.insId" placeholder="请选择" style="width: 100%" disabled>
                <el-option v-for="(ins, index) in insList" :label="ins.name" :value="ins.id | stringNumber" :key="ins.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="商户编号：" prop="code">
              <el-input v-model.trim="insMchnt.code" placeholder="必填" readonly></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="商户名称：" prop="name">
              <el-input v-model.trim="insMchnt.name" placeholder="必填" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="商户简称：" prop="shortName">
              <el-input v-model.trim="insMchnt.shortName" placeholder="必填" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="商户所在地：" prop="districtId">
              <el-row>
                <el-col :span="8">
                  <el-select v-model.trim="insMchnt.provinceId" filterable clearable @change="provinceChange" @visible-change="provinceClick" :disabled="disabled" placeholder="请选择省份">
                    <el-option v-for="(province, index) in provinceList" :label="province.name" :value="province.id | stringNumber" :key="province.id"></el-option>
                  </el-select>
                </el-col>

                <el-col :span="8">
                  <el-select v-model.trim="insMchnt.cityId" filterable clearable @change="cityChange" :disabled="disabled" placeholder="请选择城市">
                    <el-option v-for="(city, index) in cityList" :label="city.name" :value="city.id | stringNumber" :key="city.id"></el-option>
                  </el-select>
                </el-col>

                <el-col :span="8">
                  <el-select v-model.trim="insMchnt.districtId" filterable clearable :disabled="disabled" placeholder="请选择区县">
                    <el-option v-for="(region, index) in regionList" :label="region.name" :value="region.id | stringNumber" :key="region.id"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="详细地址：" prop="address">
              <el-input v-model.trim="insMchnt.address" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="结算户名：" prop="accountName">
              <el-input v-model.trim="insMchnt.accountName" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="结算账号：" prop="account">
              <el-input v-model.trim="insMchnt.account" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="商户类别：" prop="mccTypeId">
              <el-select v-model.trim="insMchnt.mccTypeId" filterable clearable placeholder="请选择" style="width: 100%" @change="mccChange" @visible-change="provinceClick" :disabled="disabled">
                <el-option v-for="(type, index) in mccType" :label="type.name" :value="type.id | stringNumber" :key="type.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="商户MCC：" prop="mccCode">
              <el-select v-model.trim="insMchnt.mccCode" filterable clearable :disabled="disabled" placeholder="请选择" style="width: 100%">
                <el-option v-for="(mcc, index) in mccList" :label="mcc.description" :value="mcc.code | stringNumber" :key="mcc.code"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="专属商户：">
              <el-select v-model.trim="insMchnt.mchntId" filterable clearable :disabled="disabled" placeholder="请选择" style="width: 100%">
                <el-option v-for="(mchnt, index) in mchntList" :label="mchnt.name +'--'+ mchnt.code" :value="mchnt.id | stringNumber" :key="mchnt.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </div>

      <!--通道商户费率-->
      <div v-show="!showPage">
        <el-row >
          <el-col :sm="23" :md="{span: 23, offset: 1}">
            <el-form-item label="产品类型：" v-if="mchntTypes.length">
              <el-checkbox-group v-model="checkedTypes">
                <el-checkbox v-for="(type, index) in mchntTypes" :label="type.code" :key="type.code" @change="selectType($event, type.code, index)" :disabled="disabled"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-tabs v-model="activeName" type="border-card" class="mb20" v-if="tabName.length" @tab-click="updateData">
          <el-tab-pane v-for="(tab, index) in tabName" :label="tab" :key="tab" :name="tab">
            <el-row>
              <el-col :sm="24">
                <el-form-item label="交易权限：">
                  <el-checkbox-group v-model="selectedPerm">
                    <el-checkbox v-for="(perm, index) in permList" :label="perm.code" :key="perm.code" @change="permChange(perm, index, $event)" :disabled="disabled">{{perm.name}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
            </el-row>

            <div v-show="activeName === 'POSP'">
              <el-row>
                <el-col :sm="24" :md="{span: 11}">
                  <el-form-item label="保底金额(元)：">
                    <el-input v-model.trim="insMchntType.POSP.minimumFeeTemp"
                              :readonly="readonly" placeholder="必填"
                              @blur="checkFixed(insMchntType.POSP.minimumFeeTemp, 'POSP', '保底金额')">
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :sm="24" :md="{span: 11, offset: 2}">
                  <el-form-item label="末尾取舍：">
                    <el-select v-model="insMchntType.POSP.roundingMode" placeholder="请选择" style="width: 100%" :disabled="disabled">
                      <el-option label="向上取整" value="ROUND_UP"></el-option>
                      <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                      <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-table :data="insMchntFee.POSP" border style="width: 100%">
                <el-table-column label="交易类型" prop="txCode" align="center">
                  <template scope="scope">
                    <el-input type="hidden" v-model="scope.row.txCode"></el-input>
                    <span>{{scope.row.txName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="卡类型" prop="cardType" align="center">
                  <template scope="scope">
                    <el-input type="hidden" v-model="scope.row.cardType"></el-input>
                    <span>{{scope.row.cardTypeName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="扣率类型" prop="feeType" align="center">
                  <template scope="scope">
                    <el-select v-model="scope.row.feeType" @change="typeChange(scope.row)" :disabled="disabled">
                      <el-option label="比例" value="1"></el-option>
                      <el-option label="固定值" value="2"></el-option>
                      <el-option label="比例加固定封顶" value="3"></el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="扣率值(%)" prop="feeRateTemp" align="center">
                  <template scope="scope">
                    <el-row :gutter="15">
                      <el-col>
                        <el-input v-model.trim="scope.row.feeRateTemp"
                                  :placeholder="scope.row.feeType === '2' ? '' : '必填'"
                                  :disabled="scope.row.feeType === '2'"
                                  :readonly="readonly" @blur="checkRate(scope.row.feeRateTemp, 'POSP')">
                        </el-input>
                      </el-col>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column label="封顶值(元)" prop="feeFixedTemp" align="center">
                  <template scope="scope">
                    <el-row :gutter="15">
                      <el-col>
                        <el-input v-model.trim="scope.row.feeFixedTemp"
                                  :placeholder="scope.row.feeType === '1' ? '' : '必填'"
                                  :disabled="scope.row.feeType === '1'"
                                  :readonly="readonly" @blur="checkFixed(scope.row.feeFixedTemp, 'POSP', '封顶值')">
                        </el-input>
                      </el-col>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column label="状态" prop="status" align="center">
                  <template scope="scope">
                    <el-select v-model="scope.row.status" :disabled="disabled">
                      <el-option label="关闭" value="0"></el-option>
                      <el-option label="启用" value="1"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <div v-show="activeName === 'PAY'">
              <el-row>
                <el-col :sm="24" :md="{span: 11}">
                  <el-form-item label="保底金额(元)：">
                    <el-input v-model.trim="insMchntType.PAY.minimumFeeTemp"
                              :readonly="readonly" placeholder="必填"
                              @blur="checkFixed(insMchntType.PAY.minimumFeeTemp, 'PAY', '保底金额')">
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :sm="24" :md="{span: 11, offset: 2}">
                  <el-form-item label="末尾取舍：">
                    <el-select v-model="insMchntType.PAY.roundingMode" clearable placeholder="请选择" style="width: 100%" :disabled="disabled">
                      <el-option label="向上取整" value="ROUND_UP"></el-option>
                      <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                      <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :sm="24" :md="{span: 11}">
                  <el-form-item label="终端号：">
                    <el-input v-model.trim="deviceList.PAY.deviceCode"
                              :readonly="readonly" placeholder="必填"
                              @blur="checkDevice(deviceList.PAY.deviceCode, 'PAY', '终端号')">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-table :data="insMchntFee.PAY" border style="width: 100%">
                <el-table-column label="交易类型" prop="txCode" align="center" width="100">
                  <template scope="scope">
                    <el-input type="hidden" v-model="scope.row.txCode"></el-input>
                    <span>{{scope.row.txName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="卡类型" prop="cardType" align="center" width="100">
                  <template scope="scope">
                    <el-input type="hidden" v-model="scope.row.cardType"></el-input>
                    <span>{{scope.row.cardTypeName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="扣率类型" prop="feeType" align="center" width="180">
                  <template scope="scope">
                    <el-select v-model="scope.row.feeType" @change="feeTypeChange(scope.row)" :disabled="disabled">
                      <el-option label="单笔固定" value="2"></el-option>
                      <el-option label="金额阶梯固定" value="4"></el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="扣率值" prop="feeFixedTemp" align="center" min-width="550">
                  <template scope="scope">
                    <el-row v-show="!scope.row.rateList.length">
                      <el-form-item label="固定手续费(元)：" class="mb0">
                        <el-input v-model.trim="scope.row.feeFixedTemp" placeholder="必填"
                                  :readonly="readonly" @blur="checkFixed(scope.row.feeFixedTemp, 'PAY', '固定手续费')">
                        </el-input>
                      </el-form-item>
                    </el-row>

                    <el-row :gutter="15"  v-for="(rate, index) in scope.row.rateList" :key="index">
                      <el-col :span="9">
                        <el-form-item label="金额(元)：" class="mv5" labelWidth="80px">
                          <el-input v-model.trim="rate.amount"
                                    :placeholder="index === scope.row.rateList.length - 1 ? '' : '必填'"
                                    :disabled="index === scope.row.rateList.length - 1"
                                    :readonly="readonly" @blur="checkFixed(rate.amount, 'PAY', '金额')">
                          </el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :span="11">
                        <el-form-item label="固定手续费(元)：" class="mv5">
                          <el-input v-model.trim="rate.fee" placeholder="必填"
                                    :readonly="readonly" @blur="checkFixed(rate.fee, 'PAY', '固定手续费')">
                          </el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :span="3">
                        <el-button class="venter" v-if="index === 0" size="small"
                                   @click="rateIncrease(scope.row)" icon="plus"
                                   :disabled="disabled">添加</el-button>
                        <el-button class="venter" v-if="index > 0" size="small"
                                   @click="rateDelete(scope.row, index)" icon="delete"
                                   :disabled="disabled">删除</el-button>
                      </el-col>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column label="品牌费" align="center" width="250">
                  <template scope="scope">
                    <el-form-item label="扣率值(%)：" class="mv5" labelWidth="100px">
                      <el-input v-model.trim="scope.row.brandRate" :readonly="readonly"
                                :placeholder="scope.row.cardType === 1 ? '' : '必填'"
                                :disabled="scope.row.cardType === 1"
                                @blur="checkRate(scope.row.brandRate, 'PAY')">
                      </el-input>
                    </el-form-item>

                    <el-form-item label="封顶值(元)：" class="mv5" labelWidth="100px">
                      <el-input v-model.trim="scope.row.brandFixed" :readonly="readonly"
                                :placeholder="scope.row.cardType === 1 ? '' : '必填'"
                                :disabled="scope.row.cardType === 1"
                                @blur="checkFixed(scope.row.brandFixed, 'PAY', '封顶值')">
                      </el-input>
                    </el-form-item>
                  </template>
                </el-table-column>

                <el-table-column label="支持银行" prop="supportBank" align="center" min-width="250">
                  <template scope="scope">
                    <el-select v-model.trim="scope.row.supportBank" multiple filterable
                               @visible-change="editUnable(scope.row)" placeholder="请输入关键字" :disabled="disabled">
                      <el-option
                        v-for="bank in banks"
                        :key="bank.bankCode"
                        :label="bank.bankName +'--'+ bank.bankCode"
                        :value="bank.bankCode">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="状态" prop="status" align="center" width="150">
                  <template scope="scope">
                    <el-select v-model="scope.row.status" :disabled="disabled">
                      <el-option label="关闭" value="0"></el-option>
                      <el-option label="启用" value="1"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <div v-show="activeName === 'WECHAT_PAY'">
              <el-row>
                <el-col :sm="24" :md="{span: 11}">
                  <el-form-item label="保底金额(元)：">
                    <el-input v-model.trim="insMchntType.WECHAT_PAY.minimumFeeTemp"
                              :readonly="readonly" placeholder="必填"
                              @blur="checkFixed(insMchntType.WECHAT_PAY.minimumFeeTemp, 'WECHAT_PAY', '保底金额')">
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :sm="24" :md="{span: 11, offset: 2}">
                  <el-form-item label="末尾取舍：">
                    <el-select v-model="insMchntType.WECHAT_PAY.roundingMode" placeholder="请选择" style="width: 100%" :disabled="disabled">
                      <el-option label="向上取整" value="ROUND_UP"></el-option>
                      <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                      <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-table :data="insMchntFee.WECHAT_PAY" border style="width: 100%">
                <el-table-column label="交易类型" prop="txCode" align="center">
                  <template scope="scope">
                    <el-input type="hidden" v-model="scope.row.txCode"></el-input>
                    <span>{{scope.row.txName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="扣率类型" prop="feeType" align="center">
                  <template scope="scope">
                    <el-select v-model="scope.row.feeType" :disabled="disabled">
                      <el-option label="比例" value="1"></el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="扣率值(%)" prop="feeRateTemp" align="center">
                  <template scope="scope">
                    <el-input v-model.trim="scope.row.feeRateTemp" placeholder="必填"
                              :readonly="readonly" @blur="checkRate(scope.row.feeRateTemp, 'WECHAT_PAY')">
                    </el-input>
                  </template>
                </el-table-column>

                <el-table-column label="状态" prop="status" align="center">
                  <template scope="scope">
                    <el-select v-model="scope.row.status" :disabled="disabled">
                      <el-option label="关闭" value="0"></el-option>
                      <el-option label="启用" value="1"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <div v-show="activeName === 'ALI_PAY'">
              <el-row>
                <el-col :sm="24" :md="{span: 11}">
                  <el-form-item label="保底金额(元)：">
                    <el-input v-model.trim="insMchntType.ALI_PAY.minimumFeeTemp"
                              :readonly="readonly" placeholder="必填"
                              @blur="checkFixed(insMchntType.ALI_PAY.minimumFeeTemp, 'ALI_PAY', '保底金额')">
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :sm="24" :md="{span: 11, offset: 2}">
                  <el-form-item label="末尾取舍：">
                    <el-select v-model="insMchntType.ALI_PAY.roundingMode" placeholder="请选择" style="width: 100%" :disabled="disabled">
                      <el-option label="向上取整" value="ROUND_UP"></el-option>
                      <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                      <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-table :data="insMchntFee.ALI_PAY" border style="width: 100%">
                <el-table-column label="交易类型" prop="txCode" align="center">
                  <template scope="scope">
                    <el-input type="hidden" v-model="scope.row.txCode"></el-input>
                    <span>{{scope.row.txName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="扣率类型" prop="feeType" align="center">
                  <template scope="scope">
                    <el-select v-model="scope.row.feeType" :disabled="disabled">
                      <el-option label="比例" value="1"></el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="扣率值(%)" prop="feeRateTemp" align="center">
                  <template scope="scope">
                    <el-input v-model.trim="scope.row.feeRateTemp" placeholder="必填"
                              :readonly="readonly" @blur="checkRate(scope.row.feeRateTemp, 'ALI_PAY')">
                    </el-input>
                  </template>
                </el-table-column>

                <el-table-column label="状态" prop="status" align="center">
                  <template scope="scope">
                    <el-select v-model="scope.row.status" :disabled="disabled">
                      <el-option label="关闭" value="0"></el-option>
                      <el-option label="启用" value="1"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <div v-show="activeName === 'VERIFY'">
              <el-row>
                <el-col :sm="24" :md="{span: 11}">
                  <el-form-item label="保底金额(元)：">
                    <el-input v-model.trim="insMchntType.VERIFY.minimumFeeTemp"
                              :readonly="readonly" placeholder="必填"
                              @blur="checkFixed(insMchntType.VERIFY.minimumFeeTemp, 'VERIFY', '保底金额')">
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :sm="24" :md="{span: 11, offset: 2}">
                  <el-form-item label="末尾取舍：">
                    <el-select v-model="insMchntType.VERIFY.roundingMode" placeholder="请选择" style="width: 100%" :disabled="disabled">
                      <el-option label="向上取整" value="ROUND_UP"></el-option>
                      <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                      <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :sm="24" :md="{span: 11}">
                  <el-form-item label="终端号：">
                    <el-input v-model.trim="deviceList.VERIFY.deviceCode"
                              :readonly="readonly" placeholder="必填"
                              @blur="checkDevice(deviceList.VERIFY.deviceCode, 'VERIFY', '终端号')">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-table :data="insMchntFee.VERIFY" border style="width: 100%">
                <el-table-column label="交易类型" prop="txCode" align="center" width="200">
                  <template scope="scope">
                    <el-input type="hidden" v-model="scope.row.txCode"></el-input>
                    <span>{{scope.row.txName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="卡类型" prop="cardType" align="center">
                  <template scope="scope" v-if="scope.row.txCode > '005002'">
                    <el-input type="hidden" v-model="scope.row.cardType"></el-input>
                    <span>{{scope.row.cardTypeName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="扣率类型" prop="feeType" align="center" width="250">
                  <template scope="scope">
                    <el-select v-model="scope.row.feeType" @change="feeTypeChange(scope.row)" :disabled="disabled">
                      <el-option label="单笔固定" value="2"></el-option>
                      <el-option label="笔数阶梯固定（月）" value="6"></el-option>
                      <el-option label="笔数阶梯固定（年）" value="8"></el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="手续费" prop="feeFixedTemp" align="center" width="550">
                  <template scope="scope">
                    <el-row v-show="!scope.row.rateList.length">
                      <el-form-item label="固定手续费(元)：" class="mb0">
                        <el-input v-model.trim="scope.row.feeFixedTemp" placeholder="必填"
                                  :readonly="readonly" @blur="checkFixed(scope.row.feeFixedTemp, 'VERIFY', '固定手续费')">
                        </el-input>
                      </el-form-item>
                    </el-row>

                    <el-row :gutter="15"  v-for="(rate, index) in scope.row.rateList" :key="index">
                      <el-col :span="9">
                        <el-form-item label="笔数(笔)：" class="mv5" labelWidth="80px">
                          <el-input v-model.trim="rate.amount" class="fee-width"
                                    :placeholder="index === scope.row.rateList.length - 1 ? '' : '必填'"
                                    :disabled="index === scope.row.rateList.length - 1"
                                    :readonly="readonly" @blur="checkFixed(rate.amount, 'VERIFY', '笔数')">
                          </el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :span="11">
                        <el-form-item label="固定手续费(元)：" class="mv5">
                          <el-input v-model.trim="rate.fee" class="fee-width" placeholder="必填"
                                    :readonly="readonly" @blur="checkFixed(rate.fee, 'VERIFY', '固定手续费')">
                          </el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :span="3">
                        <el-button class="venter" v-if="index === 0" size="small"
                                   @click="rateIncrease(scope.row)" icon="plus"
                                   :disabled="disabled">添加</el-button>
                        <el-button class="venter" v-if="index > 0" size="small"
                                   @click="rateDelete(scope.row, index)" icon="delete"
                                   :disabled="disabled">删除</el-button>
                      </el-col>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column label="支持银行" prop="supportBank" align="center" min-width="250">
                  <template scope="scope">
                    <el-select v-model.trim="scope.row.supportBank" multiple filterable
                               @visible-change="editUnable(scope.row)"
                               :disabled="disabled || !(scope.row.txCode > '005002')"
                               :placeholder="scope.row.txCode > '005002' ? '请输入关键字' : ''">
                      <el-option
                        v-for="bank in banks"
                        :key="bank.bankCode"
                        :label="bank.bankName +'--'+ bank.bankCode"
                        :value="bank.bankCode">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="状态" prop="status" align="center" width="150">
                  <template scope="scope">
                    <el-select v-model="scope.row.status" :disabled="disabled">
                      <el-option label="关闭" value="0"></el-option>
                      <el-option label="启用" value="1"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <div v-show="activeName === 'GATEWAY'">
              <el-row>
                <el-col :sm="24" :md="{span: 11}">
                  <el-form-item label="保底金额(元)：">
                    <el-input v-model.trim="insMchntType.GATEWAY.minimumFeeTemp"
                              :readonly="readonly" placeholder="必填"
                              @blur="checkFixed(insMchntType.GATEWAY.minimumFeeTemp, 'GATEWAY', '保底金额')">
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :sm="24" :md="{span: 11, offset: 2}">
                  <el-form-item label="末尾取舍：">
                    <el-select v-model="insMchntType.GATEWAY.roundingMode" placeholder="请选择" style="width: 100%" :disabled="disabled">
                      <el-option label="向上取整" value="ROUND_UP"></el-option>
                      <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                      <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :sm="24" :md="{span: 11}">
                  <el-form-item label="终端号：">
                    <el-input v-model.trim="deviceList.GATEWAY.deviceCode"
                              :readonly="readonly" placeholder="必填"
                              @blur="checkDevice(deviceList.GATEWAY.deviceCode, 'GATEWAY', '终端号')">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-table :data="insMchntFee.GATEWAY" border style="width: 100%">
                <el-table-column label="支持银行" prop="supportBank" align="center" min-width="250">
                  <template scope="scope">
                    <el-select v-model.trim="scope.row.supportBank" multiple filterable
                               @visible-change="editUnable(scope.row)" placeholder="请输入关键字" :disabled="disabled">
                      <el-option
                        v-for="bank in banks"
                        :key="bank.bankCode"
                        :label="bank.bankName +'--'+ bank.bankCode"
                        :value="bank.bankCode">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="交易类型" prop="txCode" align="center" width="200">
                  <template scope="scope">
                    <el-input type="hidden" v-model="scope.row.txCode"></el-input>
                    <span>{{scope.row.txName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="扣率类型" prop="feeType" align="center" width="200">
                  <template scope="scope">
                    <el-select v-model="scope.row.feeType" @change="feeTypeChange(scope.row)" :disabled="disabled">
                      <el-option label="单笔固定" value="2"></el-option>
                      <el-option label="金额阶梯固定" value="4"></el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="扣率值" prop="feeFixedTemp" align="center" min-width="500">
                  <template scope="scope">
                    <el-row v-show="!scope.row.rateList.length">
                      <el-form-item label="固定手续费(元)：" class="mb0">
                        <el-input v-model.trim="scope.row.feeFixedTemp" placeholder="必填"
                                  :readonly="readonly" @blur="checkFixed(scope.row.feeFixedTemp, 'GATEWAY', '固定手续费')">
                        </el-input>
                      </el-form-item>
                    </el-row>

                    <el-row :gutter="15"  v-for="(rate, index) in scope.row.rateList" :key="index">
                      <el-col :span="11">
                        <el-form-item label="金额(元)：" class="mv5">
                          <el-input v-model.trim="rate.amount"
                                    :placeholder="index === scope.row.rateList.length - 1 ? '' : '必填'"
                                    :disabled="index === scope.row.rateList.length - 1"
                                    :readonly="readonly" @blur="checkFixed(rate.amount, 'GATEWAY', '金额')">
                          </el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :span="10">
                        <el-form-item label="固定手续费(元)：" class="mv5">
                          <el-input v-model.trim="rate.fee" placeholder="必填"
                                    :readonly="readonly" @blur="checkFixed(rate.fee, 'GATEWAY', '固定手续费')">
                          </el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :span="3">
                        <el-button class="venter" v-if="index === 0" size="small"
                                   @click="rateIncrease(scope.row)" icon="plus"
                                   :disabled="disabled">添加</el-button>
                        <el-button class="venter" v-if="index > 0" size="small"
                                   @click="rateDelete(scope.row, index)" icon="delete"
                                   :disabled="disabled">删除</el-button>
                      </el-col>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column label="状态" prop="status" align="center" width="200">
                  <template scope="scope">
                    <el-select v-model="scope.row.status" :disabled="disabled">
                      <el-option label="关闭" value="0"></el-option>
                      <el-option label="启用" value="1"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <div v-show="activeName === 'COLLECT'">
              <el-row>
                <el-col :sm="24" :md="{span: 11}">
                  <el-form-item label="保底金额(元)：">
                    <el-input v-model.trim="insMchntType.COLLECT.minimumFeeTemp"
                              :readonly="readonly" placeholder="必填"
                              @blur="checkFixed(insMchntType.COLLECT.minimumFeeTemp, 'COLLECT', '保底金额')">
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :sm="24" :md="{span: 11, offset: 2}">
                  <el-form-item label="末尾取舍：">
                    <el-select v-model="insMchntType.COLLECT.roundingMode" placeholder="请选择" style="width: 100%" :disabled="disabled">
                      <el-option label="向上取整" value="ROUND_UP"></el-option>
                      <el-option label="向下取整" value="ROUND_DOWN"></el-option>
                      <el-option label="四舍五入" value="ROUND_HALF_UP"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-table :data="insMchntFee.COLLECT" border style="width: 100%">
                <el-table-column label="交易类型" prop="txCode" align="center">
                  <template scope="scope">
                    <el-input type="hidden" v-model="scope.row.txCode"></el-input>
                    <span>{{scope.row.txName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="卡类型" prop="cardType" align="center">
                  <template scope="scope">
                    <el-input type="hidden" v-model="scope.row.cardType"></el-input>
                    <span>{{scope.row.cardTypeName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="扣率类型" prop="feeType" align="center">
                  <template scope="scope">
                    <el-select v-model="scope.row.feeType" @change="typeChange(scope.row)" :disabled="disabled">
                      <el-option label="比例" value="1"></el-option>
                      <el-option label="固定值" value="2"></el-option>
                      <el-option label="比例加固定封顶" value="3"></el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column label="扣率值(%)" prop="feeRateTemp" align="center">
                  <template scope="scope">
                    <el-row :gutter="15">
                      <el-col>
                        <el-input v-model.trim="scope.row.feeRateTemp"
                                  :placeholder="scope.row.feeType === '2' ? '' : '必填'"
                                  :disabled="scope.row.feeType === '2'"
                                  :readonly="readonly" @blur="checkRate(scope.row.feeRateTemp, 'COLLECT')">
                        </el-input>
                      </el-col>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column label="封顶值(元)" prop="feeFixedTemp" align="center">
                  <template scope="scope">
                    <el-row :gutter="15">
                      <el-col>
                        <el-input v-model.trim="scope.row.feeFixedTemp"
                                  :placeholder="scope.row.feeType === '1' ? '' : '必填'"
                                  :disabled="scope.row.feeType === '1'"
                                  :readonly="readonly" @blur="checkFixed(scope.row.feeFixedTemp, 'COLLECT', '封顶值')">
                        </el-input>
                      </el-col>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column label="状态" prop="status" align="center">
                  <template scope="scope">
                    <el-select v-model="scope.row.status" :disabled="disabled">
                      <el-option label="关闭" value="0"></el-option>
                      <el-option label="启用" value="1"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <el-form-item>
        <el-button type="danger" @click="back('mchnt')" v-if="showBtn">返回</el-button>
        <el-button type="danger" @click="cancel('mchnt')" v-if="!showBtn">取消</el-button>
        <el-button @click="nextPage()" v-if="showPage">下一页</el-button>
        <el-button @click="previousPage()" v-if="!showPage">上一页</el-button>
        <el-button type="primary" @click="editMchnt()" v-if="showBtn">编辑</el-button>
        <el-button type="primary" @click="submitForm('mchnt')" v-if="!showBtn">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import ApiService from '@/services/API-servies'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        insMchnt: {
          insId: '',
          name: '',
          shortName: '',
          provinceId: '',
          cityId: '',
          districtId: '',
          address: '',
          mccTypeId: '',
          mccCode: '',
          accountName: '',
          account: '',
          mchntId: '',
        },
        insList: [],
        mchntList: [],
        mccType: [],
        mccList: [],
        cityList: [],
        regionList: [],
        businessList: [],
        mchntTypes: [],
        checkedTypes: [],
        insMchntFeeTemplate: [],
        tabName: [],
        selectedPerm: [],
        permList: [],
        bankList: [],
        banks: [],
        activeName: '',
        insMchntFee: {
          POSP: [],
          PAY: [],
          WECHAT_PAY: [],
          ALI_PAY: [],
          GATEWAY: [],
          VERIFY: [],
          COLLECT: []
        },
        insMchntType: {
          POSP: {
            minimumFeeTemp: '',
            roundingMode: ''
          },
          PAY: {
            minimumFeeTemp: '',
            roundingMode: ''
          },
          WECHAT_PAY: {
            minimumFeeTemp: '',
            roundingMode: ''
          },
          ALI_PAY: {
            minimumFeeTemp: '',
            roundingMode: ''
          },
          GATEWAY: {
            minimumFeeTemp: '',
            roundingMode: ''
          },
          VERIFY: {
            minimumFeeTemp: '',
            roundingMode: ''
          },
          COLLECT: {
            minimumFeeTemp: '',
            roundingMode: ''
          }
        },
        deviceList: {
          PAY: {
            deviceCode: ''
          },
          GATEWAY: {
            deviceCode: ''
          },
          VERIFY: {
            deviceCode: ''
          }
        },
        showPage: true,
        showBtn: true,
        editAble: true,
        readonly: true,
        disabled: true,
        provinceStatus: false,
        showContent: true,
        formRules: {
          insId: {required: true, message: '请选择所属通道机构！', trigger: 'change'},
          code: [
            {required: true, message: '请输入通道商户编号！', trigger: 'blur' },
            {pattern: /^\w+$/, message: '只支持字母、数字或下划线!', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入通道商户名称!', trigger: 'blur'},
            {pattern: /^([\u4E00-\u9FA5]|\w){0,20}$/, message: '请输入中文、字母、数字或下划线(至多20位)', trigger: 'blur'}
          ],
          shortName: [
            {required: true, message: '请输入通道商户简称!', trigger: 'blur'},
            {pattern: /^([\u4E00-\u9FA5]|\w){0,8}$/, message: '请输入中文、字母、数字或下划线(至多8位)', trigger: 'blur'}
          ],
          districtId: {required: true, message: '请选择通道商户所处省市区！', trigger: 'change'},
          address: [
            {pattern: /^([\u4E00-\u9FA5]|\w){0,50}$/, message: '请输入中文、字母、数字或下划线(至多50位)', trigger: 'blur'}
          ],
          mccTypeId: {required: true, message: '请选择商户类别！', trigger: 'change'},
          mccCode: {required: true, message: '请选择商户MCC！', trigger: 'change'},
          mchntId: {required: true, message: '请选择专属商户！', trigger: 'change'},
          accountName: [
            {pattern: /^([\u4E00-\u9FA5]|\w|\·){0,20}$/, message: '请输入中文、字母或"·"(至多20位)！', trigger: 'blur'}
          ],
          account: [
          	{pattern: /^\d{0,30}$/, message: '请输入数字(至多30位)！', trigger: 'blur'}
          ]
        }
      }
    },
    mounted() {
    	this.getData();
    },
    filters: {
      stringNumber(val) {
        return val.toString();
      }
    },
    computed:{
      ...mapGetters(['getRegion']),
      provinceList: function (){
        return this.getRegion;
      }
    },
    methods: {
      getData() {
        let _this = this;
        let postData = {id: _this.$route.query.mchntId};
        _this.$nextTick(()=> {
          // 获取通道机构列表信息
          ApiService.common.insList().then(data => {
            _this.insList = data.data;
          });

          // 获取商户类别信息
          ApiService.common.mccList().then(data => {
            _this.mccType = data.data;
          });

          // 获取专属商户列表信息
          ApiService.common.mchntList().then(data => {
            _this.mchntList = data.data;
          });

          // 获取银行列表信息
          ApiService.common.acquireBankList().then(data => {
            _this.bankList = data.data;
            _this.banks = data.data;
          });

          // 获取通道商户详情信息
          ApiService.insMchnt.detail(postData).then(data => {
          	if(data.code === 0) {
              // 通道商户产品类型
              _this.businessList = data.data.businessList;

              // 通道商户费率
              _this.insMchntFeeTemplate = data.data.insMchntFee;

              // 通道商户基本信息
              _this.insMchnt = data.data.insMchnt;
              // 数据类型转换
              _this.insMchnt.insId = _this.insMchnt.insId + '';
              _this.insMchnt.mchntId = _this.insMchnt.mchntId === null ? '' : _this.insMchnt.mchntId + '';
              _this.insMchnt.provinceId = _this.insMchnt.provinceId + '';
              _this.insMchnt.cityId = _this.insMchnt.cityId + '';
              _this.insMchnt.districtId = _this.insMchnt.districtId + '';
              _this.insMchnt.mccTypeId = _this.insMchnt.mccTypeId + '';

              // 通道商户各产品类型终端号
              let deviceCodeList = data.data.deviceList;
              for(let i = 0, len = deviceCodeList.length; i < len; i++) {
              	_this.deviceList[deviceCodeList[i].businessCode].deviceCode = deviceCodeList[i].deviceCode;
              }

              // 获取通道商户的产品类型
              for(let i = 0, len = _this.businessList.length; i < len; i++) {
                _this.mchntTypes.push({name: _this.businessList[i].name, code: _this.businessList[i].code});
                // 显示已选中的产品类型
                let checked = _this.businessList[i].check;
                if(checked) {
                  _this.checkedTypes.push(_this.businessList[i].code);
                }

                // 默认选中所有的交易权限
                for(let j = 0, leng = _this.businessList[i].txList.length; j < leng; j++) {
                  if(_this.businessList[i].check && _this.businessList[i].txList[j].checkAgent) {
                    _this.selectedPerm.push(_this.businessList[i].txList[j].code);
                  }
                }
              }

              // 默认激活第一个显示的标签页
              _this.tabName = _this.checkedTypes;
              _this.activeName = _this.checkedTypes[0];

              // 默认显示第一个激活标签对应的交易权限
              for(let i = 0, len = _this.businessList.length; i < len; i++) {
                if(_this.businessList[i].name === _this.activeName) {
                  _this.permList = _this.businessList[i].txList;
                }
              }

              // 获取通道商户对应的费率
              for(let i = 0, len = _this.insMchntFeeTemplate.length; i < len; i++) {
                for(let type in _this.insMchntFee) {
                  // 判断产品类型是否想匹配
                  if(_this.insMchntFeeTemplate[i].businessCode === type) {
                    let payBank = [];
                    for(let j = 0, len = _this.insMchntFeeTemplate[i].bankList.length; j < len; j++) {
                      payBank.push(_this.insMchntFeeTemplate[i].bankList[j].code);
                    }

                    // 获取保底金额
                    _this.insMchntType[type].minimumFeeTemp = _this.insMchntFeeTemplate[i].minimumFeeTemp + '';
                    // 获取末尾取舍
                    _this.insMchntType[type].roundingMode = _this.insMchntFeeTemplate[i].roundingMode;

                    // 获取阶梯扣率值
                    let feeList = [];
                    switch(type) {
                      case 'PAY':
                      case 'VERIFY':
                      case 'GATEWAY':
                        // 判断扣率类型以组织扣率值
                        if(_this.insMchntFeeTemplate[i].feeType !== 2) {
                          let insFeeList = _this.insMchntFeeTemplate[i].feeFixedTemp.split(';');
                          let amountList = insFeeList[0].split(',');
                          let money = insFeeList[1].split(',');

                          for(let i = 0; i < money.length; i++) {
                            feeList.push({amount: amountList[i], fee: money[i]});
                          }
                        }
                        break;
                    }

                    // 插入费率
                    _this.insMchntFee[type].push({
                      txCode: _this.insMchntFeeTemplate[i].txCode,
                      txName: _this.insMchntFeeTemplate[i].txName,
                      cardType: _this.insMchntFeeTemplate[i].cardType,
                      cardTypeName: _this.insMchntFeeTemplate[i].cardTypeName,
                      feeType: _this.insMchntFeeTemplate[i].feeType + '',
                      feeRateTemp: _this.insMchntFeeTemplate[i].feeRateTemp,
                      feeFixedTemp: _this.insMchntFeeTemplate[i].feeFixedTemp,
                      brandRate: _this.insMchntFeeTemplate[i].brandFeeExp.split(',')[0],
                      brandFixed: _this.insMchntFeeTemplate[i].brandFeeExp.split(',')[1],
                      supportBank: payBank,
                      status: _this.insMchntFeeTemplate[i].status + '',
                      rateList: feeList
                    });
                  }
                }
              }

              // 数据载完成时取消加载动效
              _this.showContent = false;
            }
          });
        })
      },
      provinceChange() {
        let _this = this;
        _this.cityList = [];
        for(let i = 0, len = _this.provinceList.length; i < len; i++) {
          if(_this.provinceList[i].id === _this.insMchnt.provinceId * 1) {
            _this.cityList = _this.provinceList[i].cityList;
          }
        }

        // 判断省份下拉菜单开启状态
        if(this.provinceStatus) {
          _this.insMchnt.cityId = '';
          _this.insMchnt.districtId = '';
        }
      },
      cityChange() {
        let _this = this;
        _this.regionList = [];
        for(let i = 0, len = _this.cityList.length; i < len; i++) {
          if(_this.cityList[i].id === _this.insMchnt.cityId * 1) {
            _this.regionList = _this.cityList[i].districtList;
          }
        }
      },
      provinceClick(val) {
        this.provinceStatus = val;
      },
      mccChange() {
        let _this = this;
        _this.mccList = [];
        for(let i = 0, len = _this.mccType.length; i < len; i++) {
          if(_this.mccType[i].id === _this.insMchnt.mccTypeId * 1) {
            _this.mccList = _this.mccType[i].mccCodeList;
          }
        }

        // MCC列表信息初始化
        if(this.provinceStatus) {
          _this.insMchnt.mccCode = '';
        }
      },
      selectType(event, key, index) {
        let _this = this;
        let checked = event.target.checked;

        if(checked) {
          _this.tabName.push(key);
          _this.activeName = key;
          _this.permList = _this.businessList[index].txList;

          // 默认选中无需配置费率的交易权限
          for(let i = 0, len = _this.permList.length; i < len; i++) {
            if(!_this.permList[i].needCharging) {
              _this.selectedPerm.push(_this.permList[i].code);
            }
          }
        }else {
          // 获取所取消产品类型在tab中的索引
          let tabIndex = _this.tabName.findIndex((value, index, arr) => {
            return value === key;
          });

          // 移除所取消产品类型对应的tab
          _this.tabName.splice(tabIndex, 1);

          // 移除相应tab下的费率
          _this.insMchntFee[key].splice(0);

          // 移除相应tab下已选中的交易权限
          let currentPerm = _this.businessList[index].txList;
          for(let i = 0, len = _this.selectedPerm.length; i < len; i++) {
            for(let j = 0; j < currentPerm.length; j++) {
              if(_this.selectedPerm[i] === currentPerm[j].code) {
                _this.selectedPerm.splice(i, 1);
              }
            }
          }

          // 默认激活第一个显示的标签
          let tabLen = _this.tabName.length;
          if(tabLen) {
            _this.activeName = _this.tabName[0];
          }

          // 显示第一个激活标签对应的交易权限
          for(let i = 0, len = _this.businessList.length; i < len; i++) {
            if(_this.businessList[i].name === _this.activeName) {
              _this.permList = _this.businessList[i].txList;
            }
          }

          // 移除保底金额及末尾取舍
          _this.insMchntType[key].minimumFeeTemp = '';
          _this.insMchntType[key].roundingMode = '';
          _this.deviceList[key] ? _this.deviceList[key].deviceCode = '' : null;
        }
      },
      updateData(tab, event) {
        let _this = this;
        // 切换标签时显示对应的交易权限
        let productType = _this.businessList;
        for(let i = 0, len = productType.length; i < len; i++) {
          if(productType[i].name === tab.name) {
            _this.permList = productType[i].txList;
          }
        }
      },
      permChange(perm, index, event) {
        let _this = this;
        let checked = event.target.checked;

        // 判断交易类型是否选中
        if(checked && perm.needCharging) {
          // 根据产品类型新增费率
          let cardTypes = [{cardType: 1, cardTypeName: '借记卡'}, {cardType: 2, cardTypeName: '贷记卡'}];
          let cardList = {
            POSP: cardTypes,
            PAY: cardTypes,
            COLLECT: cardTypes,
          };

          // 要素验证时，根据交易权限决定卡类型
          if(perm.code > '005002') {
            cardList.VERIFY = cardTypes;
          }

          // 根据产品类型确定默认扣率类型值
          let feeType = '';
          switch(perm.businessName) {
            case 'POSP':
            case 'COLLECT':
            case 'WECHAT_PAY':
            case 'ALI_PAY':
              feeType = '1';
              break;
            case 'PAY':
            case 'VERIFY':
            case 'GATEWAY':
              feeType = '2';
              break;
          }

          if(perm.businessName in cardList) {
            for(let i = 0; i < cardList[perm.businessName].length; i++) {
              if(perm.businessName === 'VERIFY' && perm.code < '005003') {
                _this.insMchntFee[perm.businessName].push({
                  txCode: perm.code,
                  txName: perm.name,
                  cardType: '',
                  cardTypeName: '',
                  feeType: feeType,
                  feeRateTemp: '',
                  feeFixedTemp: '',
                  brandRate: '',
                  brandFixed: '',
                  supportBank: [],
                  rateList: [],
                  status: '1'
                });
              }else {
                _this.insMchntFee[perm.businessName].push({
                  txCode: perm.code,
                  txName: perm.name,
                  cardType: cardList[perm.businessName][i].cardType,
                  cardTypeName: cardList[perm.businessName][i].cardTypeName,
                  feeType: feeType,
                  feeRateTemp: '',
                  feeFixedTemp: '',
                  brandRate: '',
                  brandFixed: '',
                  supportBank: [],
                  rateList: [],
                  status: '1'
                });
              }
            }
          }else {
            _this.insMchntFee[perm.businessName].push({
              txCode: perm.code,
              txName: perm.name,
              cardType: 0,
              cardTypeName: '任意',
              feeType: feeType,
              feeRateTemp: '',
              feeFixedTemp: '',
              brandRate: '',
              brandFixed: '',
              supportBank: [],
              rateList: [],
              status: '1'
            });
          }
        }else if(!checked && perm.needCharging) {
          // 移除费率
          for(let i = _this.insMchntFee[perm.businessName].length - 1; i >= 0; i--) {
            if(_this.insMchntFee[perm.businessName][i].txName === perm.name) {
              _this.insMchntFee[perm.businessName].splice(i, 1);
            }
          }
        }
      },
      editUnable(arr) {
        if(arr.supportBank.includes('88888888')) {
          arr.supportBank = ['88888888'];
        }
      },
      typeChange(row) {
        // 根据扣率类型初始化数据
        if(row.feeType === '1') {
          row.feeFixedTemp = '';
        }else if(row.feeType === '2') {
          row.feeRateTemp = '';
        }else if(row.feeType === '3') {
          row.feeRateTemp = '';
          row.feeFixedTemp = '';
        }
      },
      checkRate(val, type) {
        let pointIndex = val.indexOf('.');
        if(!val.trim()) {
          this.$message({
            type: 'warning',
            message: `[${type}]内扣率值不能为空！`
          });
          return false;
        }else {
          if(!Number(val)) {
            this.$message({
              type: 'warning',
              message: `请在[${type}]内扣率值中输入合法的数字！`
            });
            return false;
          }else if(val < 0 || val > 100) {
            this.$message({
              type: 'warning',
              message: `请在[${type}]内扣率值输入0-100的数字！`
            });
            return false;
          }else if(pointIndex !== -1 && val.slice(pointIndex + 1).length > 4) {
            this.$message({
              type: 'warning',
              message: `[${type}]内扣率值只能保留4位小数！`
            });
            return false;
          }else if(val.search(/\D/) === (val.length - 1)) {
            this.$message({
              type: 'warning',
              message: `[${type}]内扣率值末尾不能包含字母或特殊字符！`
            });
            return false;
          }else {
            return true;
          }
        }
      },
      checkFixed(val, type, msg) {
        let pointIndex = val.indexOf('.');
        if(!val.trim()) {
          this.$message({
            type: 'warning',
            message: `[${type}]内${msg}不能为空！`
          });
          return false;
        }else {
          if(!Number(val)) {
            this.$message({
              type: 'warning',
              message: `请在[${type}]内${msg}中输入合法的数字！`
            });
            return false;
          }else if(val < 0) {
            this.$message({
              type: 'warning',
              message: `请在[${type}]内${msg}输入不小于0的数字！`
            });
            return false;
          }else if(pointIndex !== -1 && val.slice(pointIndex + 1).length > 2) {
            this.$message({
              type: 'warning',
              message: `[${type}]内${msg}只能保留2位小数！`
            });
            return false;
          }else if(val.search(/\D/) === (val.length - 1)) {
            this.$message({
              type: 'warning',
              message: `[${type}]内${msg}末尾不能包含字母或特殊字符！`
            });
            return false;
          }else {
            return true;
          }
        }
      },
      checkAmount(val, type, msg) {
        if(!val.trim()) {
          this.$message({
            type: 'warning',
            message: `[${type}]内${msg}不能为空！`
          });
          return false;
        }else {
          if(val.search(/\D/) !== -1) {
            this.$message({
              type: 'warning',
              message: `请在[${type}]内${msg}中输入合法的数字！`
            });
            return false;
          }else if(val.search(/^0\d*/) !== -1) {
            this.$message({
              type: 'warning',
              message: `请在[${type}]内${msg}中输入首位不为0的整数！`
            });
            return false;
          }else {
            return true;
          }
        }
      },
      checkDevice(val, type, msg) {
        let reg = /^\d{8}$/;
        if(!val.trim()) {
          this.$message({
            type: 'warning',
            message: `[${type}]内${msg}不能为空！`
          });
          return false;
        }else if(val.search(reg) === -1) {
          this.$message({
            type: 'warning',
            message: `请在[${type}]内${msg}中输入8位数字`
          });
          return false;
        }else {
          return true;
        }
      },
      feeTypeChange(row) {
        if(row.feeType === '2') {
          row.rateList.splice(0);
        }else if(row.feeType === '4' || row.feeType === '6' || row.feeType === '8') {
          row.rateList.splice(0);
          row.rateList.push({amount: '', fee: ''});
        }
      },
      rateIncrease(row) {
        row.rateList.push({amount: '', fee: ''});
      },
      rateDelete(row, index) {
        row.rateList.splice(index, 1);
        row.rateList[row.rateList.length-1].amount = '';
      },
      nextPage() {
        this.showPage = false;
      },
      previousPage() {
        this.showPage = true;
      },
      back(formName) {
        this.$refs[formName].resetFields();
        this.$router.push({path: 'insMchnt'});
      },
      editMchnt() {
        this.showBtn = false;
        this.editAble = false;
        this.readonly = false;
        this.disabled = false
      },
      cancel() {
        this.showBtn = true;
        this.editAble = true;
        this.readonly = true;
        this.disabled = true;
      },
      submitForm(formName) {
        let _this = this;
        _this.$refs[formName].validate(valid => {
          // 判断是否选择产品类型
          let proTypeLength = _this.checkedTypes.length;
          if(!proTypeLength) {
            _this.$message({
              type: 'warning',
              message: '请至少选择一种产品类型！'
            });

            return false;
          }else {
            for(let i = 0, len = _this.checkedTypes.length; i < len; i++) {
              for(let key in _this.insMchntFee) {
                if(_this.checkedTypes[i] === key && !_this.insMchntFee[key].length) {
                  _this.$message({
                    type: 'warning',
                    message: `[${key}]内至少选择一种可配置费率的交易权限！`
                  });
                  return false;
                }
              }
            }
          }

          // 费率
          let insMchntFee = [];
          for(let key in _this.insMchntFee) {
            for(let i = 0, len = _this.insMchntFee[key].length; i < len; i++) {
              // 清空上一行费率的支持银行code
              let insTxAbility = [];
              if(_this.insMchntFee[key][i].supportBank) {
                for(let j = 0, leng = _this.insMchntFee[key][i].supportBank.length; j < leng; j++) {
                  insTxAbility.push({
                    bankCode: _this.insMchntFee[key][i].supportBank[j]
                  });
                }
              }

              // 验证费率下必填项
              let length = _this.insMchntFee[key].length;
              if(length) {
                // 校验保底金额
                let miniFeeStatus = _this.checkFixed(_this.insMchntType[key].minimumFeeTemp, key, '保底金额');
                if(!miniFeeStatus) {
                  return false;
                }

                // 校验末尾取舍
                if(!_this.insMchntType[key].roundingMode) {
                  _this.$message({
                    type: 'warning',
                    message: `请选择[${key}]内的末尾取舍！`
                  });
                  return false;
                }

                switch(key) {
                  case 'POSP':
                  case 'COLLECT':
                    switch(_this.insMchntFee[key][i].feeType) {
                      case '1':
                        let rateStatus = _this.checkRate(_this.insMchntFee[key][i].feeRateTemp, key);
                        if(!rateStatus) {
                          return false;
                        }
                        break;
                      case '2':
                        let fixedStatus = _this.checkFixed(_this.insMchntFee[key][i].feeFixedTemp, key, '封顶值');
                        if(!fixedStatus) {
                          return false;
                        }
                        break;
                      case '3':
                        let rateTempStatus = _this.checkRate(_this.insMchntFee[key][i].feeRateTemp, key);
                        let fixedTempStatus = _this.checkFixed(_this.insMchntFee[key][i].feeFixedTemp, key, '封顶值');
                        if(!rateTempStatus || !fixedTempStatus) {
                          return false;
                        }
                        break;
                    }
                    break;
                  case 'WECHAT_PAY':
                  case 'ALI_PAY':
                    let rateStatus = _this.checkRate(_this.insMchntFee[key][i].feeRateTemp, key);
                    if(!rateStatus) {
                      return false;
                    }
                    break;
                  case 'PAY':
                  case 'VERIFY':
                  case 'GATEWAY':
                    // 校验终端号
                    let deviceStatus = _this.checkDevice(_this.deviceList[key].deviceCode, key, '终端号');
                    if(!deviceStatus) {
                      return false;
                    }

                    if(key === 'VERIFY') {
                      if(_this.insMchntFee[key][i].txCode > '005002' && !_this.insMchntFee[key][i].supportBank.length) {
                        _this.$message({
                          type: 'warning',
                          message: `[${key}]内支持银行不能为空！`
                        });
                        return false;
                      }
                    }else {
                      if(!_this.insMchntFee[key][i].supportBank.length) {
                        _this.$message({
                          type: 'warning',
                          message: `[${key}]内支持银行不能为空！`
                        });
                        return false;
                      }
                    }

                    switch(_this.insMchntFee[key][i].feeType) {
                      case '2':
                        let fixedStatus = _this.checkFixed(_this.insMchntFee[key][i].feeFixedTemp, key, '固定手续费');
                        if(!fixedStatus) {
                          return false;
                        }
                        break;
                      case '4':
                      case '6':
                      case '8':
                        for(let j = 0, leng = _this.insMchntFee[key][i].rateList.length; j < leng; j++) {
                          if(leng === 1) {
                            let feeStatus = _this.checkFixed(_this.insMchntFee[key][i].rateList[j].fee, key, '固定手续费');
                            if(!feeStatus) {
                              return false;
                            }
                          }else if(leng > 1) {
                            // 验证金额/笔数
                            if(j < _this.insMchntFee[key][i].rateList.length - 1) {
                              let msg = _this.insMchntFee[key][i].feeType === '4'? '金额' : '笔数';

                              if(j > 0 && ((_this.insMchntFee[key][i].rateList[j-1].amount * 1) >= (_this.insMchntFee[key][i].rateList[j].amount * 1))) {
                                _this.$message({
                                  type: 'warning',
                                  message: `[${key}]内的${msg}值必须呈递增状态（不得小于前一项的值）`
                                });
                                return false;
                              }else if(_this.insMchntFee[key][i].feeType === '4') {
                                let amountStatus = _this.checkFixed(_this.insMchntFee[key][i].rateList[j].amount, key, '金额');

                                if(!amountStatus) {
                                  return false;
                                }
                              }else {
                                let numStatus = _this.checkAmount(_this.insMchntFee[key][i].rateList[j].amount, key, '笔数');

                                if(!numStatus) {
                                  return false;
                                }
                              }
                            }

                            // 验证固定手续费
                            /*if(j < _this.insMchntFee[key][i].rateList.length) {
                              let feeStatus = _this.checkFixed(_this.insMchntFee[key][i].rateList[j].fee, key, '固定手续费');
                              if(!feeStatus) {
                                return false;
                              }else if(j > 0 && ((_this.insMchntFee[key][i].rateList[j-1].fee * 1) >= (_this.insMchntFee[key][i].rateList[j].fee * 1))) {
                                _this.$message({
                                  type: 'warning',
                                  message: `[${key}]内的固定手续费必须呈递增状态（不得小于前一项的值）`
                                });
                                return false;
                              }
                            }*/
                          }
                        }
                        break;
                    }

                    if(key === 'PAY' && _this.insMchntFee[key][i].cardType > 1) {
                      let rateStatus = _this.checkRate(_this.insMchntFee[key][i].brandRate, key);
                      let feeStatus = _this.checkFixed(_this.insMchntFee[key][i].brandFixed, key, '封顶值');
                      if(!rateStatus || !feeStatus) {
                        return false;
                      }
                    }
                    break;
                }
              }

              // 组织扣率值
              let rateTemp = '';
              switch(key) {
                case 'POSP':
                case 'COLLECT':
                  rateTemp = _this.insMchntFee[key][i].feeFixedTemp;
                  break;
                case 'PAY':
                case 'VERIFY':
                case 'GATEWAY':
                  // 判断扣率类型以组织扣率值
                  if(_this.insMchntFee[key][i].feeType === '2') {
                    rateTemp = _this.insMchntFee[key][i].feeFixedTemp;
                  }else {
                    let amount = '';
                    let fee = '';
                    let feeList = _this.insMchntFee[key][i].rateList;

                    // 判断扣率值的长度
                    if(feeList.length && feeList.length > 1) {
                      for(let i = 0, len = feeList.length; i < len; i++) {
                        amount += feeList[i].amount + ',';
                        fee += feeList[i].fee + ',';
                      }

                      amount = amount.slice(0, amount.length - 2);
                      fee = fee.slice(0, fee.length - 1);
                      rateTemp = amount +';'+ fee;
                    }else if(feeList.length && feeList.length === 1) {
                      rateTemp = feeList[0].amount +';'+ feeList[0].fee;
                    }
                  }
              }

              // 费率模板
              let brandFee = _this.insMchntFee[key][i].brandFixed ? _this.insMchntFee[key][i].brandRate +','+ _this.insMchntFee[key][i].brandFixed : '';
              insMchntFee.push({
                txCode: _this.insMchntFee[key][i].txCode,
                cardType: _this.insMchntFee[key][i].cardType,
                feeType: _this.insMchntFee[key][i].feeType,
                feeRateTemp: _this.insMchntFee[key][i].feeRateTemp,
                feeFixedTemp: rateTemp,
                roundingMode: _this.insMchntType[key].roundingMode,
                minimumFeeTemp: _this.insMchntType[key].minimumFeeTemp,
                brandFeeExp: brandFee,
                status: _this.insMchntFee[key][i].status,
                insMchntTxAbilityList: insTxAbility
              });
            }
          }

          // 交易类型code
          let businessList = [];
          for(let i = 0, len = _this.selectedPerm.length; i < len; i++) {
            businessList.push({
              txList: [
                { code: _this.selectedPerm[i] }
              ]
            });
          }

          // 各产品类型终端号
          let deviceList = deviceList || [];
          for(let i = 0, len = _this.businessList.length; i < len; i++) {
            for(let key in _this.deviceList) {
              if(_this.businessList[i].name === key) {
                deviceList.push({
                  businessCode: _this.businessList[i].code,
                  deviceCode: _this.deviceList[key].deviceCode
                });
              }
            }
          }

          // 组织提交数据
          let postData = {
            insMchnt: {
              insId: _this.insMchnt.insId,
              id: _this.insMchnt.id,
              code: _this.insMchnt.code,
              name: _this.insMchnt.name,
              shortName: _this.insMchnt.shortName,
              provinceId: _this.insMchnt.provinceId,
              cityId: _this.insMchnt.cityId,
              districtId: _this.insMchnt.districtId,
              address: _this.insMchnt.address,
              accountName: _this.insMchnt.accountName,
              account: _this.insMchnt.account,
              mccTypeId: _this.insMchnt.mccTypeId,
              mccCode: _this.insMchnt.mccCode,
              mchntId: _this.insMchnt.mchntId ? _this.insMchnt.mchntId : null
            },
            insMchntFee: insMchntFee,
            businessList: businessList,
            deviceList: deviceList
          };

          if(valid) {
            ApiService.insMchnt.update(postData).then(data => {
              if(data.code === 0) {
                _this.$message({
                  type: 'success',
                  message: '通道商户修改成功！',
                  duration: 200,
                  onClose() {
                    _this.$router.push({path: 'insMchnt'});
                  }
                });
              }else {
                _this.$message({
                  type: 'warning',
                  message: data.message
                });

                return false;
              }
            });
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
