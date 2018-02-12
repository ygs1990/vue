// 请求地址
const BASE = process.env.API_ROOT, //http://192.168|.1.251:8080
      COMMON_URL = `${BASE}/business/common`,// 通用接口
      USER_URL = `${BASE}/business/api/user`, // 系统管理-用户管理
      ORG_URL = `${BASE}/business/api/org`, // 系统管理-组织管理
      ROLE_URL = `${BASE}/business/api/role`, // 系统管理-角色管理
      LOGIN_URL = `${BASE}/business/api/security/`, //登录模块
      AGENCY_URL = `${BASE}/business/agent/`,//机构管理
      MCHNT_URL = `${BASE}/business/mchnt/`,//商户管理
      BATCHPAY_URL = `${BASE}/business/orderBatchPay/`,//批量代付管理
      CHANNEL_URL = `${BASE}/business/channel`, // 通道管理-通道管理
      INS_URL = `${BASE}/business/ins`, // 通道管理-通道机构管理
      INS_MCHNT_URL = `${BASE}/business/insMchnt`, // 通道管理-通道商户管理
      HF_INS_MCHNT_URL = `${BASE}/business/hfInsMchnt`, // 通道管理-恒丰通道商户管理
      TRANSLOG_URL = `${BASE}/business/txRecord/`, //交易管理
      ActCheck_URL=`${BASE}/business/accountCheck/`, //对账管理
      MchntAccount_URL=`${BASE}/business/mchntAccount/`, //商户管理 - 商户余额管理
      MchntRoute_URL=`${BASE}/business/mchntRoute/`, //商户管理 - 商户路由管理
      MchntAccountTmp_URL=`${BASE}/business/mchntAccountTmp/`, //商户管理 - 商户手工调额

      // 登录模块后台API接口
      LOGIN = {
        login: `${LOGIN_URL}login.do`,//登录
        listMenu : `${LOGIN_URL}listMenu.do`,//侧边栏
      },

      // 机构模块后台API接口
      AGENCY = {
        agencyList: `${AGENCY_URL}pageAgent.do`,//代理商列表
        istBusinessInfo:`${AGENCY_URL}findTxList.do`,//产品类型
        findAgentNameOrCode:`${AGENCY_URL}findAgentNameOrCode.do`,//模糊查询代理商列表
        resetPwdAgent:`${AGENCY_URL}resetPwdAgent.do`,//重置代理商密码
        reBlockeAgent:`${AGENCY_URL}reBlockeAgent.do`,//冻结解冻代理商
        detailAgent:`${AGENCY_URL}detailAgent.do`,//获取代理商详情
        saveAgent:`${AGENCY_URL}saveAgent.do`,//新增代理商
        findAgentTx:`${AGENCY_URL}findAgentTx.do`,//查询代理商支持交易权限
        uptAgent:`${AGENCY_URL}uptAgent.do`,//详情修改代理商
      },

      //  商户模块后台API接口
      MCHNT = {
        pageMchnt :`${MCHNT_URL}pageMchnt.do`,//商户列表
        findMchntNameOrCode :`${MCHNT_URL}findMchntNameOrCode.do`,//模糊查找商户列表
        reBlockeMchnt :`${MCHNT_URL}reBlockeMchnt.do`,//冻结解冻商户
        reMchntKey :`${MCHNT_URL}reMchntKey.do`,//重置商户秘钥
        saveMchnt :`${MCHNT_URL}saveMchnt.do`,//新增商户
        detailMchnt :`${MCHNT_URL}detailMchnt.do`,//商户详情
        findMchntTxByMchntId :`${MCHNT_URL}findMchntTxByMchntId.do`,//获取商户交易权限
        uptMchnt :`${MCHNT_URL}uptMchnt.do`,//修改商户商户
        uploadjpg :`${MCHNT_URL}uploadjpg.do`,//上传图片
      },

      //批量代付后台API接口
      BATCHPAY = {
        pageOrderBatch :`${BATCHPAY_URL}pageOrderBatch.do`,//商户列表
        orderBatchDetail :`${BATCHPAY_URL}orderBatchDetail.do`,//详情页
        checkOrderBatch :`${BATCHPAY_URL}checkOrderBatch.do`,//审核
        upLoadBatchExcel :`${BATCHPAY_URL}upLoadBatchExcel.do`,//上传excel
        downloadOrderBatchFile :`${BATCHPAY_URL}downloadOrderBatchFile.do`,//下载原始文件
        pageOrders :`${BATCHPAY_URL}pageOrders.do`,//原始文件明细
      },

      //商户管理  商户路由管理
      MchntRoute ={
        mchntRouteList:`${MchntRoute_URL}pageMchntRoute.do`,//商户路由信息列表 查询
        mchnRoutetDetail:`${MchntRoute_URL}mchnRouteDetail.do`,//商户路由信息详情接口
        findInsMchnt:`${MchntRoute_URL}findInsMchnt.do`,//商户路由获取通道商户接口
        InsMchntByParams:`${MchntRoute_URL}findInsMchntByParams.do`,//商户路由 获取模板中的商户信息
        BankByParams:`${MchntRoute_URL}findBankByParams.do`,//商户路由 获取模板中的支持银行
        saveMchntRoute:`${MchntRoute_URL}saveMchntRoute.do`,//商户路由信息保存
      },

      //商户管理  商户余额管理
      MchntAccount ={
        mchntAccountList:`${MchntAccount_URL}pageMchntAccount.do`,//商户余额列表查询
        mchntList:`${MchntAccount_URL}listMchntInfo.do`,//商户查询
        initMchntAccountList:`${MchntAccount_URL}initMchntAccount.do`,//余额初始化
      },

      //商户管理 商户手工调额
      MchntAccountTmp = {
        mchntAccountList:`${MchntAccountTmp_URL}pageMchntAccountTmp.do`,//商户手工调额管理列表
        MerManuAdjAdd:`${MchntAccountTmp_URL}addMchntAccountTmp.do`,//商户手工调额管理 新增  保存
        mchntBusinessList:`${MchntAccountTmp_URL}getMchntAndBusinessList.do`,//商户手工调额管理 新增  获取商户和产品类型
        mchntAccountTmpDetail:`${MchntAccountTmp_URL}mchntAccountTmpDetail.do`,//商户手工调额管理\复核 详情
        pageCheckMchntList:`${MchntAccountTmp_URL}pageCheckMchntAccountTmp.do`,//商户手工调额复核 列表
        checkMchntAccountTmp:`${MchntAccountTmp_URL}checkMchntAccountTmp.do`,//商户手工调额复核详情保存
      },

      // 用户模块后台API接口(共10个)
      USER = {
        userList: `${USER_URL}/list.do`, // 用户列表
        query: `${USER_URL}/query.do`, // 用户查询
        create: `${USER_URL}/addUser.do`, // 新增用户
        detail: `${USER_URL}/details.do`, // 用户详情
        update: `${USER_URL}/update.do`, // 用户修改
        delete: `${USER_URL}/delete.do`, // 删除用户
        lock: `${USER_URL}/lock.do`, // 锁定/解锁用户
        listRole: `${USER_URL}/listRole.do`, // 查询用户角色
        assignRole: `${USER_URL}/assignRole.do`, // 分配角色
        availableRole: `${USER_URL}/listUserOrgRole.do`, // 查询可分配给用户的角色列表
        resetPassword: `${USER_URL}/resetPassword.do` // 重置用户密码
      },

      // 组织模块后台API接口(共7个)
      ORG = {
        orgList: `${ORG_URL}/list.do`, // 组织列表
        detail: `${ORG_URL}/details.do`, // 组织详情
        delete: `${ORG_URL}/delete.do`, // 删除组织
        assignRole: `${ORG_URL}/assignRole.do`, // 分配组织角色
        createOrgWithRole: `${ORG_URL}/createOrgWithRole.do`, // 新增组织
        updateOrgWithRole: `${ORG_URL}/updateOrgWithRole.do`, // 修改组织
        createUserWithRole: `${ORG_URL}/createUserWithRole.do` // 添加组织成员
      },

      // 角色模块后台API接口(共9个)
      ROLE = {
        roleList: `${ROLE_URL}/list.do`, // 角色列表
        create: `${ROLE_URL}/create.do`, // 新增角色
        detail: `${ROLE_URL}/detail.do`, // 角色详情
        update: `${ROLE_URL}/update.do`, // 修改角色
        delete: `${ROLE_URL}/delete.do`, // 刪除角色
        assignResource: `${ROLE_URL}/assignResource.do`, // 给角色授权资源
        orgRoleList: `${ROLE_URL}/listAssignedForOrg.do`, // 已经分配给组织的角色
        parentRoleList: `${ROLE_URL}/listAssignedForParentOrg.do`, // 已经分配给组织的父组织的角色
        roleResourceID: `${ROLE_URL}/listAssignedResourceId.do` // 列出角色的授权资源ID
      },

      // 通道管理模块后台API接口(共6个)
      CHANNEL = {
        channelList: `${CHANNEL_URL}/list.do`, // 通道列表
        add: `${CHANNEL_URL}/add.do`, // 新增通道
        detail: `${CHANNEL_URL}/detail.do`, // 通道详情
        update: `${CHANNEL_URL}/update.do`, // 通道修改
        freeze: `${CHANNEL_URL}/freeze.do`, // 通道关闭
        unfreeze: `${CHANNEL_URL}/unfreeze.do` // 通道启用
      },

      // 通道机构管理模块后台API接口(共6个)
      INS = {
        insList: `${INS_URL}/list.do`, // 通道机构列表
        add: `${INS_URL}/add.do`, // 新增通道机构
        detail: `${INS_URL}/detail.do`, // 通道机构详情
        update: `${INS_URL}/update.do`, // 通道机构修改
        freeze: `${INS_URL}/freeze.do`, // 通道机构关闭
        unfreeze: `${INS_URL}/unfreeze.do` // 通道机构启用
      },

      // 通道商户管理模块后台API接口(共9个)
      INSMCHNT = {
        insMchntList: `${INS_MCHNT_URL}/list.do`, // 通道商户列表
        add: `${INS_MCHNT_URL}/add.do`, // 新增通道商户
        detail: `${INS_MCHNT_URL}/detail.do`, // 通道商户详情
        update: `${INS_MCHNT_URL}/update.do`, // 通道商户修改
        freeze: `${INS_MCHNT_URL}/freeze.do`, // 通道商户关闭
        unfreeze: `${INS_MCHNT_URL}/unfreeze.do`, // 通道商户启用
        insBusinessList: `${INS_MCHNT_URL}/insBusinessList.do`, // 通道机构产品类型
        insFeeList: `${INS_MCHNT_URL}/insFeeList.do`, // 通道机构费率模板
        uploadExcel: `${INS_MCHNT_URL}/uploadExcel.do` // 批量新增通道商户上传Excel文件
      },

      // 恒丰通道商户管理模块后台API接口(共12个)
      HFINSMCHNT = {
        insMchntList: `${HF_INS_MCHNT_URL}/list.do`, // 恒丰通道商户列表
        merchEnroll: `${HF_INS_MCHNT_URL}/registerInsMchnt.do`, // 注册恒丰通道商户
        downloadKey: `${HF_INS_MCHNT_URL}/downloadKey.do`, // 恒丰通道商户秘钥下载
        detail: `${HF_INS_MCHNT_URL}/detail.do`, // 恒丰通道商户详情
        syncMerch: `${HF_INS_MCHNT_URL}/synchronizeInsMchntInfo.do`, // 同步恒丰通道商户信息
        rateDetail: `${HF_INS_MCHNT_URL}/detailHFInsMchntFee.do`, // 恒丰通道商户费率详情
        syncRate: `${HF_INS_MCHNT_URL}/synchronizeInsMchntFee.do`, // 同步恒丰通道商户费率信息
        getHFInsMchntProperties: `${HF_INS_MCHNT_URL}/getHFInsMchntProperties.do`, // 同步恒丰通道商户公共属性
        mccList: `${HF_INS_MCHNT_URL}/selectHFMchntMcc.do`, // 恒丰通道商户商户类别
        regionList: `${HF_INS_MCHNT_URL}/listRegionCodeInfo.do`, // 恒丰通道商户区域码
        uploadPhotos: `${HF_INS_MCHNT_URL}/uploadjpg.do`, // 恒丰通道商户同步上传图片
        previewPhotos: `${HF_INS_MCHNT_URL}/findImg.do` // 恒丰通道商户图片预览
      },

      // 通用查询接口后台API接口(共13个)
      COMMON = {
        orgList: `${COMMON_URL}/listAllOrg.do`, // 所属组织列表
        roleList: `${COMMON_URL}/listAllRole.do`, // 所属组织列表
        checkCode : `${COMMON_URL}/checkUniqueness.do`, // 编号验重
        region : `${COMMON_URL}/listProvinces.do`, // 查询省份信息
        appType : `${COMMON_URL}/listAppType.do`, // 查询MCC大类信息
        mccList : `${COMMON_URL}/listMcc.do`, // 查询mcc信息
        agentList : `${COMMON_URL}/listAgent.do`, // 查询代理商信息
        mchntList : `${COMMON_URL}/listMchntInfo.do`, // 查询商户信息
        channelList : `${COMMON_URL}/listChannel.do`, // 查询通道信息
        insList : `${COMMON_URL}/listInsInfo.do`, // 查询通道机构信息
        insMchntList : `${COMMON_URL}/listInsMchntInfo.do`, // 查询通道商户信息
        hfInsMchntList : `${COMMON_URL}/listHfInsMchntInfo.do`, // 查询恒丰通道商户信息
        businessList : `${COMMON_URL}/listBusinessInfo.do`, // 查询JU业务交易信息 获取产品类型与交易类型接口
        acquireBankList : `${COMMON_URL}/listAcquiringBankInfo.do`, // 查询收单银行信息
        resultNames:`${COMMON_URL}/getTxResultNames.do`,// 交易状态
        ModelList:`${COMMON_URL}/getCheckModelList.do`,// 对账配置
        actAgentList:`${COMMON_URL}/getAgentList.do`,// 代理商
        ErrorTypes:`${COMMON_URL}/getSettleErrorTypes.do`,// 差错类型
        // 特别说明 该通道机构接口需要联动商户 手工调额新增通道机构接口
        ByMchntCode:`${COMMON_URL}/getInsInfoByMchntIdAndCode.do`,
        // 通道机构对账配置管理 通道 与 通道机构 级联操作
        ChannelAndInsList:`${COMMON_URL}/getChannelAndInsList.do`,
      },

      //交易管理模块后台接口
      TRANSLOG = {
        list:`${TRANSLOG_URL}pageTxRecordByParams.do`,  //当日及历史交易查询列表
        sumTxCount:`${TRANSLOG_URL}sumTxCountByParams.do`, //当日及历史交易汇总
        errorList:`${TRANSLOG_URL}pageSettleErrorByParams.do`,//差错查询列表
        RecordDetail:`${TRANSLOG_URL}getTxRecordDetail.do`, //当日交易详情
        HisDetail:`${TRANSLOG_URL}getTxRecordHisDetail.do`, //历史交易详情

      },

      //对账管理
      ActCheck = {
        InsFtpList:`${ActCheck_URL}pageInsFtpList.do`,//通道机构对账配置列表
        addInsFtp:`${ActCheck_URL}addInsFtp.do`,//新增通道机构对账配置
        insFtpDetail:`${ActCheck_URL}insFtpDetail.do`,//通道机构对账配置进入详情/编辑
        editInsFtp:`${ActCheck_URL}editInsFtp.do`,//编辑通道机构对账配置
        deleteInsFtp:`${ActCheck_URL}deleteInsFtp.do`,//删除通道机构对账配置
        pageAgentFtpList:`${ActCheck_URL}pageAgentFtpList.do`,//代理商推送配置列表
        addAgentFtp:`${ActCheck_URL}addAgentFtp.do`,//新增代理商推送配置
        editAgentFtp:`${ActCheck_URL}editAgentFtp.do`,//编辑代理商推送配置
        agentFtpDetail:`${ActCheck_URL}agentFtpDetail.do`,//代理商推送配置详情
        deleteAgentFtp:`${ActCheck_URL}deleteAgentFtp.do`,//删除代理商推送配置
        pageInsAccountCheckList:`${ActCheck_URL}pageInsAccountCheckList.do`,//通道机构对账文件列表
        insAccountCheckDetail:`${ActCheck_URL}insAccountCheckDetail.do`,//通道机构对账文件详情
        checkStatus:`${ActCheck_URL}getAccountCheckStatus.do`,//通道机构对账文件 获取对账状态
        downloadAccountCheck:`${ActCheck_URL}downloadInsOrAgentAccountCheck.do`,//下载 通道机构 和 代理商 对账文件
        dataCollect:`${ActCheck_URL}dataCollect.do`,//数据采集
        accountCheck:`${ActCheck_URL}accountCheck.do`,//对账
        produceAccountCheck:`${ActCheck_URL}produceAccountCheck.do`,//生成对账文件
        AgentAndModel:`${ActCheck_URL}getAgentAndModelList.do`,//代理商 对账模板联动

      };

// 导出模块
export default {
  COMMON,
  BASE,
  LOGIN,
  AGENCY,
  MCHNT,
  USER,
  ORG,
  ROLE,
  CHANNEL,
  INS,
  INSMCHNT,
  HFINSMCHNT,
  MchntRoute,
  TRANSLOG,
  ActCheck,
  MchntAccount,
  MchntAccountTmp,
  BATCHPAY
}
