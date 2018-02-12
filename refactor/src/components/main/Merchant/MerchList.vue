<template>
  <div class="content">
    <el-form :model="mchnt" ref="mchnt" label-width="90px">
      <el-row>
        <el-col :xs="12" :sm="{span: 12}">
          <el-form-item label="通道商戶：" prop="code">
            <el-select v-model.trim="mchnt.code" filterable clearable placeholder="请输入关键字">
              <el-option
                v-for="channel in channels"
                :key="channel.code"
                :label="channel.name +'--'+ channel.code"
                :value="channel.code">
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
      <router-link to="/newMerch" ><el-button type="success">新增通道商戶</el-button></router-link>
      <el-upload
        name="filename1"
        :action="batchAddInsMchnt"
        :auto-upload="true"
        :before-upload="fileTypeCheck"
        :on-success="uploadSuccess"
        :show-file-list="false"
        style="display: inline-block;">
        <el-button>批量新增通道商戶</el-button>
        <span slot="tip" class="note">注：只支持上传xls/xlsx格式的Excel文件，且大小不得超过500kb.</span>
      </el-upload>
    </div>

    <div>
      <el-table :data="mchntList" border style="width: 100%">
        <el-table-column label="通道商戶编号" prop="code" align="center" class="hidden-columns">
        </el-table-column>

        <el-table-column label="通道商戶名称" prop="name" align="center">
        </el-table-column>

        <el-table-column label="通道商戶状态" prop="status" align="center" :formatter="statusFormat">
        </el-table-column>

        <el-table-column label="创建时间" prop="createTime" align="center" :formatter="dateFormat">
        </el-table-column>

        <el-table-column label="操作" align="center" width="150px">
          <template scope="scope">
            <el-button type="info" size="small" @click="detail(scope.$index, scope.row)">详情</el-button>
            <el-button type="warning" size="small" @click="freeze(scope.$index, scope.row)">{{scope.row.operation}}</el-button>
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
        },
        batchAddInsMchnt: ApiService.insMchnt.uploadExcel
      }
    },
    mounted() {
      let _this = this;
      let postData = {pageNo: 1, pageSize: 10, code: ''};
      // 获取通道商户列表数据
      _this.getMchntList(postData);
    },
    methods: {
      getMchntList(postData) {
        let _this = this;
        _this.$nextTick(function() {
          ApiService.insMchnt.insMchntList(postData).then( data => {
            // 用户列表数据
            _this.mchntList = data.data;
            // 表格分页
            _this.pager = data;
          } );

          ApiService.common.insMchntList().then( data => {
            // 通道商户列表信息
            _this.channels = data.data;
          } )
        });
      },
      userQuery(code) {
        let postData = {pageNo: 1, pageSize: 10, code: code};
        // 获取通道商户列表数据
        this.getMchntList(postData);
      },
      formReset(formName) {
        this.$refs[formName].resetFields();
      },
      fileTypeCheck(file) {
      	const xlsStatus = file.type === 'application/vnd.ms-excel';
      	const xlsxStatus = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      	if(!xlsStatus && !xlsxStatus) {
      		this.$message({
            type: 'warning',
            message: '文件类型不匹配，只支持上传xls/xlsx格式的Excel文件！'
          });
          return false;
        }
      },
      uploadSuccess(data) {
      	let _this = this;
      	if(data.code === 0) {
          _this.$message({
            type: 'success',
            message: '文件上传成功！',
            duration: 1000,
            onClose() {
              let postData = {pageNo: 1, pageSize: 10, code: ''};
              // 获取通道商户列表数据
              _this.getMchntList(postData);
            }
          })
        }else {
          this.$message({
            type: 'warning',
            message: data.message
          })
        }
      },
      statusFormat(row, col) {
        if(row.status === 1) {
          row.operation = '关闭';
          return '开启';
        }else if(row.status === 0) {
          row.operation = '开启';
          return '关闭';
        }else {
          return '未知'
        }
      },
      dateFormat(row, col) {
        let time = row.createTime;
        return this.$moment(time).format('YYYY-MM-DD HH:mm:ss');
      },
      detail(index, row) {
        this.$router.push({path: 'merchDetail', query: {mchntId: row.id}});
      },
      freeze(index, row) {
        let _this = this;
        _this.$confirm('是否确定'+ row.operation +'该通道商戶？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 重置通道状态及操作
          if(row.status === 1) {
            ApiService.insMchnt.freeze({id: row.id}).then( data => {
              // 点击确定按钮时，弹出如下信息及操作
              _this.$message({
                type: 'success',
                message: '通道商戶'+ row.operation +'成功!',
                duration: 1000,
                onClose() {
                  let postData = {pageNo: 1, pageSize: 10, code: ''};
                  // 获取通道商户列表数据
                  _this.getMchntList(postData);
                }
              });

              row.operation = '开启';
            });
          }else if(row.status === 0) {
            ApiService.insMchnt.unfreeze({id: row.id}).then( data => {
              // 点击确定按钮时，弹出如下信息及操作
              _this.$message({
                type: 'success',
                message: '通道商戶'+ row.operation +'成功!',
                duration: 1000,
                onClose() {
                  let postData = {pageNo: 1, pageSize: 10, code: ''};
                  // 获取通道商户列表数据
                  _this.getMchntList(postData);
                }
              });

              row.operation = '关闭';
            });
          }
        }).catch(() => {
          // 点击取消按钮时，弹出如下信息
          _this.$message({
            type: 'info',
            message: '已取消'+ row.operation +'通道商戶'
          });
        });
      },
      sizeEvent(pageSize) {
        let _this = this;
        let postData = {pageNo: 1, pageSize: pageSize, code: ''};
        // 获取通道商户列表数据
        _this.getMchntList(postData);
      },
      currentEvent(page) {
        let _this = this;
        let postData = {pageNo: page, pageSize: 10, code: ''};
        // 获取通道商户列表数据
        _this.getMchntList(postData);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
