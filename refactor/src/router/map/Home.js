// 首页
const Home = resolve => require(['@/components/part/Home.vue'], resolve);
// 公共
const Public = resolve => require(['@/components/main/Public.vue'], resolve);
// 商户管理-代理商
const AgencyList = resolve => require(['@/components/main/Agency/AgencyList.vue'], resolve);
const AddAgency = resolve => require(['@/components/main/Agency/AddAgency.vue'], resolve);
const DetailAgency = resolve => require(['@/components/main/Agency/DetailAgency.vue'], resolve);
//商户管理 路由管理
const MerRouteManager = resolve => require(['@/components/main/merchRoute/MerRouteManager.vue'], resolve);
const MerRouteMngDtl = resolve => require(['@/components/main/merchRoute/merRouteMngDtl.vue'], resolve);
//商户管理 商户余额管理
const MerAcntBalce = resolve => require(['@/components/main/merAcntBalce/MerAcntBalce.vue'], resolve);
//商户管理  手工调额管理
const MerManuAdjAdd = resolve => require(['@/components/main/merchAdjMgr/MerManuAdjAdd.vue'], resolve);
const MerManuAdjManage = resolve => require(['@/components/main/merchAdjMgr/MerManuAdjManage.vue'], resolve);
const MerManuAdjDtlManage = resolve => require(['@/components/main/merchAdjMgr/MerManuAdjDtlManage.vue'], resolve);
//商户管理  商户调额复核
const MerManuAdjCheck = resolve => require(['@/components/main/merchAdjCheck/MerManuAdjCheck.vue'], resolve);
const MerManuAdjDtlCheck = resolve => require(['@/components/main/merchAdjCheck/MerManuAdjDtlCheck.vue'], resolve);
// 商户管理-机构商户
const MchntList = resolve => require(['@/components/main/Mchnt/MchntList.vue'], resolve);
const AddMchnt = resolve => require(['@/components/main/Mchnt/AddMchnt.vue'], resolve);
const DetailMchnt = resolve => require(['@/components/main/Mchnt/DetailMchnt.vue'], resolve);
// 批量代付管理
const BatchPayUpload = resolve => require(['@/components/main/BatchPayManager/BatchPayUpload.vue'], resolve);
const BatchPay = resolve => require(['@/components/main/BatchPayManager/BatchPay.vue'], resolve);
const DdetailBatchPay = resolve => require(['@/components/main/BatchPayManager/DetailBatchPay.vue'], resolve);
const BatchPayCheck = resolve => require(['@/components/main/BatchPayManager/BatchPayCheck.vue'], resolve);
const DetailCollectBatchCheck = resolve => require(['@/components/main/BatchPayManager/DetailCollectBatchCheck.vue'], resolve);
const Original = resolve => require(['@/components/main/BatchPayManager/Original.vue'], resolve);
// 通道管理-通道管理
const Channel = resolve => require(['@/components/main/Channel/ChannelList.vue'], resolve);
const NewChannel = resolve => require(['@/components/main/Channel/NewChannel.vue'], resolve);
const ChannelDetail = resolve => require(['@/components/main/Channel/ChannelDetail.vue'], resolve);
// 通道管理-通道机构管理
const Ins = resolve => require(['@/components/main/Ins/InsList.vue'], resolve);
const NewIns = resolve => require(['@/components/main/Ins/NewIns.vue'], resolve);
const InsDetail = resolve => require(['@/components/main/Ins/InsDetail.vue'], resolve);
// 通道管理-通道商户管理
const Merchant = resolve => require(['@/components/main/Merchant/MerchList.vue'], resolve);
const NewMerch = resolve => require(['@/components/main/Merchant/NewMerch.vue'], resolve);
const MerchDetail = resolve => require(['@/components/main/Merchant/MerchDetail.vue'], resolve);
// 通道管理-恒丰通道商户管理
const HFMerchList = resolve => require(['@/components/main/HFInsMchnt/HFMerchList.vue'], resolve);
const MerchEnroll = resolve => require(['@/components/main/HFInsMchnt/MerchEnroll.vue'], resolve);
const SyncMerch = resolve => require(['@/components/main/HFInsMchnt/SyncMerch.vue'], resolve);
const SyncRate = resolve => require(['@/components/main/HFInsMchnt/SyncRate.vue'], resolve);
// 交易管理 -当日交易查询 详情
const Translog = resolve => require(['@/components/main/translog/translog.vue'], resolve);
const TranslogDtl = resolve => require(['@/components/main/translog/translogDetail.vue'], resolve);
// 交易管理 -历史交易查询 详情
const TranslogHis = resolve => require(['@/components/main/translogHis/translogHis.vue'], resolve);
const TranslogHisDtl = resolve => require(['@/components/main/translogHis/translogHisDetail.vue'], resolve);
// 交易管理 -差错交易查询
const TranslogErr = resolve => require(['@/components/main/translogErr/translogErr.vue'], resolve);
// 系统管理-用户管理
const User = resolve => require(['@/components/main/User/UserList.vue'], resolve);
// 系统管理-组织管理
const Org = resolve => require(['@/components/main/Org/OrgList.vue'], resolve);
// 系统管理-角色管理
const Role = resolve => require(['@/components/main/Role/RoleList.vue'], resolve);
//对账管理 -通道机构对账管理
const InsCountManager = resolve => require(['@/components/main/insCntCfgMar/insCountManager.vue'], resolve);
const AddInsConfig = resolve => require(['@/components/main/insCntCfgMar/addInsConfig.vue'], resolve);
const InsConfigEdit = resolve => require(['@/components/main/insCntCfgMar/InsConfigEdit.vue'], resolve);
const InsConfigDtl = resolve => require(['@/components/main/insCntCfgMar/InsConfigDtl.vue'], resolve);
//对账管理 -代理商推送配置管理
const AgentPushCountManager = resolve => require(['@/components/main/agentPushCfgMgr/agentPushCountManager.vue'], resolve);
const AgentConfigEdit = resolve => require(['@/components/main/agentPushCfgMgr/agentConfigEdit.vue'], resolve);
const AgentConfigDtl = resolve => require(['@/components/main/agentPushCfgMgr/agentConfigDtl.vue'], resolve);
const AgentAddConfig = resolve => require(['@/components/main/agentPushCfgMgr/agentAddConfig.vue'], resolve);
// 对账管理 -通道机构对账文件
const InsCountFileDtl = resolve => require(['@/components/main/insCountFile/insCountFileDtl.vue'], resolve);
const InsCountFile = resolve => require(['@/components/main/insCountFile/insCountFile.vue'], resolve);
// 对账管理 代理商对账文件
const AgentCountFile = resolve => require(['@/components/main/agentCountFile/agentCountFile.vue'], resolve);

export default {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/merchant',
        component: Merchant,
        meta: ['系统管理', '用户管理', '用户列表']
      },
      {
        path: '/agent',
        component: Public,
        children: [
          {path: '/agent', component: AgencyList, meta: ['商户管理', '代理商管理', '代理商列表']},
          {path: '/addAgency', component: AddAgency,meta: ['商户管理', '代理商管理', '新增代理商']},
          {path: '/detailAgency', component: DetailAgency,meta: ['商户管理', '代理商管理', '代理商详情']},
        ]
      },
      {
        path: '/mchnt',
        component: Public,
        children: [
          {path: '/mchnt', component: MchntList,meta: ['商户管理', '商户信息管理', '商户列表']},
          {path: '/addMchnt', component: AddMchnt,meta: ['商户管理', '商户信息管理', '商户详情']},
          {path: '/detailMchnt', component: DetailMchnt,meta: ['商户管理', '商户信息管理', '商户详情']},
          {path: '/accountManager', component: MerAcntBalce,meta: ['商户管理', '商户余额管理','商户余额管理列表']},
          {path: '/accountAdjust', component: MerManuAdjManage,meta: ['商户管理', '商户手工调额管理','商户手工调额管理列表']},
          {path: '/MerManuAdjDtlMge', component: MerManuAdjDtlManage,meta: ['商户管理', '商户手工调额管理', '商户手工调额管理详情']},
          {path: '/MerManuAdjDtlCheck', component: MerManuAdjDtlCheck,meta: ['商户管理', '商户手工调额复核', '商户手工调额复核详情']},
          {path: '/accountAdjustCheck', component: MerManuAdjCheck,meta: ['商户管理', '商户手工调额复核','商户手工调额复核列表']},
          {path: '/routeManager', component: MerRouteManager,meta: ['商户管理', '商户路由管理', '商户详情']},
          {path: '/merRouteMngDtl', component: MerRouteMngDtl,meta: ['商户管理', '商户路由管理', '商户路由管理详情']},
          {path: '/MerManuAdjAdd', component: MerManuAdjAdd,meta: ['商户管理', '商户手工调额管理', '商户手工调额管理新增']}
        ]
      },
      {
        path: '/user',
        component: Public,
        children: [
          {path: '/', component: User, meta: ['系统管理', '用户管理', '用户列表']}
        ]
      },
      {
        path: '/org',
        component: Public,
        children: [
          {path: '/', component: Org, meta: ['系统管理', '组织管理', '组织列表']}
        ]
      },
      {
        path: '/role',
        component: Public,
        children: [
          {path: '/', component: Role, meta: ['系统管理', '角色管理', '角色列表']}
        ]
      },
      {
        path: '/channel',
        component: Public,
        children: [
          {path: '/', component: Channel, meta: ['通道管理', '通道管理', '通道列表']},
          {path: '/newChannel', component: NewChannel, meta: ['通道管理', '通道管理', '新增通道']},
          {path: '/channelDetail', component: ChannelDetail, meta: ['通道管理', '通道管理', '通道详情']}
        ]
      },
      {
        path: '/ins',
        component: Public,
        children: [
          {path: '/', component: Ins, meta: ['通道管理', '通道机构管理', '通道机构列表']},
          {path: '/newIns', component: NewIns, meta: ['通道管理', '通道机构管理', '新增通道机构']},
          {path: '/insDetail', component: InsDetail, meta: ['通道管理', '通道机构管理', '通道机构详情']}
        ]
      },
      {
        path: '/insMchnt',
        component: Public,
        children: [
          {path: '/', component: Merchant, meta: ['通道管理', '通道商户管理', '通道商户列表']},
          {path: '/newMerch', component: NewMerch, meta: ['通道管理', '通道商户管理', '新增通道商户']},
          {path: '/merchDetail', component: MerchDetail, meta: ['通道管理', '通道商户管理', '通道商户详情']}
        ]
      },
      {
        path: '/hfInsMchnt',
        component: Public,
        children: [
          {path: '/', component: HFMerchList, meta: ['通道管理', '恒丰通道商户管理', '恒丰通道商户列表']},
          {path: '/merchEnroll', component: MerchEnroll, meta: ['通道管理', '恒丰通道商户管理', '商户注册']},
          {path: '/SyncMerch', component: SyncMerch, meta: ['通道管理', '恒丰通道商户管理', '商户同步']},
          {path: '/SyncRate', component: SyncRate, meta: ['通道管理', '恒丰通道商户管理', '费率同步']}
        ]
      },
      {
        path: '/tx',
        component: Public,
        children: [
          {path: '/', component: Translog,meta: ['交易管理', '当日交易查询', '当日交易查询列表']},
          {path: '/histx', component: TranslogHis,meta: ['交易管理', '历史交易查询', '历史交易查询列表']},
          {path: '/errtx', component: TranslogErr,meta: ['交易管理', '差错交易查询', '差错交易查询列表']},
          {path: '/translogDtl', component: TranslogDtl,meta: ['交易管理', '当日交易查询', '当日交易查询详情']},
          {path: '/translogHisDtl', component: TranslogHisDtl,meta: ['交易管理', '历史交易查询', '历史交易查询详情']}
        ]
      },
      {
        path: '/batchPay',
        component: Public,
        children: [
          {path: '/batchPay', component: BatchPay, meta: ['批量代付管理', '批量代付列表']},
          {path: '/batchPayUpload', component: BatchPayUpload, meta: ['批量代付管理', '批量代付上传']},
          {path: '/detailBatchPay', component: DdetailBatchPay, meta: ['批量代付管理', '批量代付详情']},
          {path: '/batchPayCheck', component: BatchPayCheck, meta: ['批量代付管理', '批量代付复核列表']},
          {path: '/detailCollectBatchCheck', component: DetailCollectBatchCheck, meta: ['批量代付管理', '批量代付复核']},
          {path: '/original', component: Original, meta: ['批量代付管理', '批量代付原始文件']},
        ]
      },
      {
        path: '/insFtp',
        component: Public,
        children: [
          {path: '/', component: InsCountManager,meta: ['对账管理', '通道机构对账配置管理', '通道机构对账配置管理列表']},
          {path: '/agentFtp', component: AgentPushCountManager,meta: ['对账管理', '代理商推送配置管理', '代理商推送配置管理列表']},
          {path: '/agentAccountCheck', component: AgentCountFile,meta: ['对账管理', '代理商对账文件', '代理商对账文件下载']},
          {path: '/insAccountCheck', component: InsCountFile,meta: ['对账管理', '通道机构对账文件', '通道机构对账文件列表']},
          {path: '/agentAddConfig', component: AgentAddConfig,meta: ['对账管理', '代理商推送配置管理', '代理商推送配置管理新增配置']},
          {path: '/addInsConfig', component: AddInsConfig,meta: ['对账管理', '通道机构对账配置管理', '通道机构对账配置管理新增配置']},
          {path: '/insCountFileDtl', component: InsCountFileDtl,meta: ['对账管理', '通道机构对账文件', '通道机构对账文件详情']},
          {path: '/insConfigDtl', component: InsConfigDtl,meta: ['对账管理', '通道对账配置管理', '通道对账配置管理详情']},
          {path: '/insConfigEdit', component: InsConfigEdit,meta: ['对账管理', '通道机构对账配置管理', '通道机构对账配置管理编辑配置']},
          {path: '/agentConfigDtl', component: AgentConfigDtl,meta: ['对账管理', '代理商推送配置管理', '代理商推送配置管理详情']},
          {path: '/agentConfigEdit', component: AgentConfigEdit,meta: ['对账管理', '代理商推送配置管理', '代理商推送配置管理编辑配置']},
          {path: '/insCountFileDtl', component: InsCountFileDtl,meta: ['对账管理', '通道机构对账文件', '通道机构对账文件详情']},
        ]
      },
      {
        path: '/',
        redirect:'/mchnt',
        component: MchntList
      },
    ]
}

