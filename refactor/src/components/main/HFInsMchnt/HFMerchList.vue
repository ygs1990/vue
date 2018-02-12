<template>
  <div class="content">
    <el-form :model="mchnt" ref="mchnt" label-width="90px">
      <el-row>
        <el-col :xs="12" :sm="{span: 12}">
          <el-form-item label="通道商戶：" prop="code">
            <el-select v-model.trim="mchnt.code" filterable clearable placeholder="请输入关键字">
              <el-option
                v-for="channel in channels"
                :key="channel.id"
                :label="channel.mchntCode"
                :value="channel.mchntCode">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="{span: 10, offset: 2}" :sm="{span: 9, offset: 2}" style="text-align: right">
          <el-button type="primary" @click="userQuery(mchnt.code)">搜索</el-button>
          <el-button @click="formReset('mchnt')">清除</el-button>
        </el-col>
      </el-row>
    </el-form>

    <div class="new">
      <router-link to="/merchEnroll" ><el-button type="success">商户注册</el-button></router-link>
    </div>

    <div>
      <el-table :data="mchntList" border style="width: 100%">
        <el-table-column label="通道商戶编号" prop="mchntCode" align="center" class="hidden-columns"></el-table-column>

        <el-table-column label="密码" prop="mchntPwd" align="center"></el-table-column>

        <el-table-column label="创建时间" prop="createTime" align="center" :formatter="dateFormat"></el-table-column>

        <el-table-column label="密钥状态" prop="keyStatus" align="center" :formatter="statusFormat"></el-table-column>

        <el-table-column label="操作" align="center" width="270px">
          <template scope="scope">
            <el-button type="info" size="small" @click="downloadKey(scope.$index, scope.row)">下载密钥</el-button>
            <el-button type="success" size="small"
                       @click="syncMerch(scope.$index, scope.row)"
                       :disabled="scope.row.keyStatus === 0">商户同步
            </el-button>
            <el-button type="success" size="small"
                       @click="syncRate(scope.$index, scope.row)"
                       :disabled="scope.row.keyStatus === 0">费率同步</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pager">
        <el-pagination
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pager.pageSize"
          :current-page="pager.pageNo"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pager.totalRows"
          @size-change="sizeEvent"
          @current-change="currentEvent">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    data () {
      return {
        mchntList: [],
        pager: [],
        channels: [],
        mchnt: {
          code: ''
        }
      }
    },
    mounted() {
      let _this = this;
      let postData = {pageNo: 1, pageSize: 10, code: ''};
      // 获取用户列表数据
      _this.getMchntList(postData);
    },
    methods: {
      getMchntList(postData) {
        let _this = this;
        _this.$nextTick(function() {
          ApiService.hfInsMchnt.insMchntList(postData).then( data => {
            // 用户列表数据
            _this.mchntList = data.data;
            // 表格分页
            _this.pager = data;
          } );

          ApiService.common.hfInsMchntList().then( data => {
            // 通道商户列表信息
            _this.channels = data.data;
          } );
        });
      },
      userQuery(code) {
        let postData = {pageNo: 1, pageSize: 10, code: code};
        // 获取用户列表数据
        this.getMchntList(postData);
      },
      formReset(formName) {
        this.$refs[formName].resetFields();
      },
      statusFormat(row, col) {
        if (row.keyStatus === 1) {
          return '已下载';
        }else {
          return '未下载';
        }
      },
      dateFormat(row, col) {
        let time = row.createTime;
        return this.$moment(time).format('YYYY-MM-DD HH:mm:ss');
      },
      syncMerch(index, row) {
        this.$router.push({path: 'syncMerch', query: {mchntId: row.hfMchntId}});
      },
      syncRate(index, row) {
        this.$router.push({path: 'syncRate', query: {mchntId: row.hfMchntId}});
      },
      downloadKey(index, row) {
        let _this = this;
        _this.$confirm('是否确定下载该商戶密钥？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          ApiService.hfInsMchnt.downloadKey({insMchntId: row.hfMchntId}).then( data => {
            // 点击确定按钮时，弹出如下信息及操作
            _this.$message({
              type: 'success',
              message: '密钥下载成功!',
              duration: 1000,
              onClose() {
                let postData = {pageNo: 1, pageSize: 10, code: ''};
                // 刷新用户列表数据
                _this.getMchntList(postData);
              }
            });
          });
        }).catch(() => {
          // 点击取消按钮时，弹出如下信息
          _this.$message({
            type: 'info',
            message: '已取消下载商戶密钥！'
          });
        });
      },
      sizeEvent(pageSize) {
        let _this = this;
        let postData = {pageNo: 1, pageSize: pageSize, code: ''};
        // 获取用户列表数据
        _this.getMchntList(postData);
      },
      currentEvent(page) {
        let _this = this;
        let postData = {pageNo: page, pageSize: 10, code: ''};
        // 获取用户列表数据
        _this.getMchntList(postData);
      }
    }
  }
</script>

<style lang="less" scoped>
  .file-upload ul {
    position: absolute;
    top: 50px;
    left: 0;
  }
</style>
