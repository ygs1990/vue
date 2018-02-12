<template>
  <div class="content">
    <el-form :model="queryKey" ref="user" label-width="100px">
      <el-row>
        <el-col :sm="24" :md="{span: 10}" :lg="{span: 7}">
          <el-form-item label="角色名称：" prop="name">
            <el-input v-model.trim="queryKey.name" placeholder="请输入角色名称" :maxlength="20"></el-input>
          </el-form-item>
        </el-col>

        <el-col :sm="24" :md="{span: 13}" :lg="{span: 16}" style="text-align: right;">
          <el-button type="primary" @click="userQuery()">搜索</el-button>
          <el-button @click="formReset('user')">清除</el-button>
        </el-col>
      </el-row>
    </el-form>

    <div class="new">
      <el-button type="primary" @click="newStatus=true">新增角色</el-button>

      <!-- 弹窗-新增角色-->
      <el-dialog title="新增角色" :visible.sync="newStatus" size="tiny" @close="closeDialog">
        <el-form :model="role" :rules="formRule" ref="createRole" label-width="100px">
          <el-row>
            <el-col :span="23">
              <el-form-item label="角色名称：" prop="name">
                <el-input v-model="role.name" placeholder="必填" :maxlength="20"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="23">
              <el-form-item label="角色描述：">
                <el-input v-model="role.description" placeholder="必填" :maxlength="60"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="newStatus = false">取 消</el-button>
          <el-button type="primary" @click="createRole('createRole')">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 弹窗-修改角色-->
      <el-dialog title="修改角色" :visible.sync="editStatus" size="tiny">
        <el-form :model="roleDetail" :rules="formRule" ref="updateRole" label-width="100px">
          <el-row>
            <el-col :span="23">
              <el-form-item label="角色名称：" prop="name">
                <el-input v-model="roleDetail.name" placeholder="必填" :maxlength="20"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="23">
              <el-form-item label="角色描述：">
                <el-input v-model="roleDetail.description" placeholder="必填" :maxlength="60"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="editStatus = false">取 消</el-button>
          <el-button type="primary" @click="updateRole('updateRole')">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <div>
      <el-table :data="roleList" border style="width: 100%">
        <el-table-column label="角色名称" prop="name" align="center"></el-table-column>

        <el-table-column label="角色描述" prop="description" align="center"></el-table-column>

        <el-table-column label="操作" align="center" width="150px">
          <template scope="scope">
            <el-button type="success" size="small" @click="editUser(scope.$index, scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="deleteUser(scope.$index, scope.row)">删除</el-button>
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
          @current-change="currentEvent"
          style="text-align: center">
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
        roleList: [],
        pager: [],
        roleDetail: {},
        queryKey: {
          name: ''
        },
        newStatus: false,
        role: {
          name: '',
          description: ''
        },
        editStatus: false,
        formRule: {
          name: {required: true, message: '请输入角色名称', trigger: 'blur'},
          description: {required: true, message: '请输入角色描述', trigger: 'blur'},
        }
      }
    },
    mounted() {
      let _this = this;
      let postData = {pageNo: 1, pageSize: 10};
      // 获取用户列表数据
      _this.getUserList(postData);
    },
    methods: {
      getUserList(postData) {
        let _this = this;
        _this.$nextTick(function() {
          ApiService.role.roleList(postData).then( data => {
            // 用户列表数据
            _this.roleList = data.data;
            // 表格分页
            _this.pager = data;
          } )
        });
      },
      getRoleDetail(postData) {
        let _this = this;
        _this.$nextTick(function() {
          ApiService.role.detail(postData).then( data => {
            // 用户详情信息
            _this.roleDetail = data.data;
          } )
        });
      },
      userQuery() {
        let _this = this;
        let name = _this.queryKey.name;
        let postData = {pageNo: 1, pageSize: 10, name: name};
        // 查找符合条件的用户
        _this.getUserList(postData);
      },
      formReset(formName) {
        this.$refs[formName].resetFields();
      },
      statusFormat(row, col) {
        if (row.status === 1) {
          row.text = '冻结';
          return '有效';
        }else if (row.status === 2){
          row.text = '解冻';
          return '冻结';
        }
      },
      editUser(index, row) {
        this.editStatus = true;
        let postData = {id: row.id};

        // 获取用户详情信息
        this.getRoleDetail(postData);
      },
      createRole(formName) {
        let _this = this;
        let postData = {
          name: _this.role.name,
          description: _this.role.description
        };

        _this.$refs[formName].validate(valid => {
          if(valid) {
            _this.$nextTick(function() {
              ApiService.role.create(postData).then( data => {
              	if(data.code === 0) {
              		// 隐藏弹框
                  this.newStatus = false;
                  _this.$message({
                    type: 'success',
                    message: '新增角色成功！',
                    duration: 200,
                    onClose() {
                      document.location.reload();
                    }
                  });
                }else {
                  // 隐藏弹框
                  this.newStatus = false;
                  _this.$message({
                    type: 'warning',
                    message: '新增角色失败！'
                  })
                }
              } )
            });
          }
        });
      },
      closeDialog() {
        this.$refs['createRole'].resetFields();
      },
      updateRole(formName) {
        let _this = this;
        let postData = {
          id: _this.roleDetail.id,
          name: _this.roleDetail.name,
          description: _this.roleDetail.description
        };

        _this.$refs[formName].validate(valid => {
          if(valid) {
            _this.$nextTick(function() {
              ApiService.role.update(postData).then( data => {
                if(data.code === 0) {
                  // 隐藏弹框
                  this.editStatus = false;

                  if(data.code === 0) {
                    _this.$message({
                      type: 'success',
                      message: '角色信息更新成功！',
                      duration: 200,
                      onClose() {
                        document.location.reload();
                      }
                    });
                  }
                }else {
                  // 隐藏弹框
                  this.editStatus = false;
                  _this.$message({
                    type: 'warning',
                    message: '角色信息更新失败！'
                  })
                }
              } )
            });
          }
        });
      },
      deleteUser(index, row) {
        let _this = this;
        _this.$confirm('是否确定删除该角色？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          ApiService.role.delete({id: row.id}).then( data => {
            // 点击确定按钮时，弹出如下信息及操作
            if(data.code === 0) {
              _this.$message({
                type: 'success',
                message: '角色删除成功！',
                duration: 200,
                onClose() {
                  document.location.reload();
                }
              });
            }else {
              _this.$message({
                type: 'warning',
                message: '角色删除失败！'
              });
            }
          });
        }).catch(() => {
          // 点击取消按钮时，弹出如下信息
          _this.$message({
            type: 'info',
            message: '已取消删除用户！'
          });
        });
      },
      sizeEvent(pageSize) {
        let postData = {pageNo: 1, pageSize: pageSize, name: ''};
        this.getUserList(postData);
      },
      currentEvent(page) {
        let postData = {pageNo: page, pageSize: 10, name: ''};
        this.getUserList(postData);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
