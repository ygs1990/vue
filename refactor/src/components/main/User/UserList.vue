<template>
  <div class="content">
    <el-form :model="queryKey" ref="user" label-width="100px">
      <el-row>
        <el-col :sm="23" :md="{span: 8}">
          <el-form-item label="姓名：" prop="name">
            <el-input v-model.trim="queryKey.name" placeholder="请输入姓名" :maxlength="20"></el-input>
          </el-form-item>
        </el-col>

        <el-col :sm="23" :md="{span: 8}">
          <el-form-item label="所属部门：" prop="orgName">
            <el-select v-model="queryKey.orgName" filterable placeholder="请选择部门" style="width: 100%">
              <el-option v-for="org in orgList"
                :key="org"
                :value="org.name">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :sm="23" :md="{span: 8}">
          <el-form-item label="状态：" prop="status">
            <el-select v-model="queryKey.status" placeholder="请选择状态" style="width: 100%">
              <el-option label="有效" value="1"></el-option>
              <el-option label="冻结" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :sm="12" :md="{span: 8}">
          <el-form-item label="用户名：" prop="loginName">
            <el-input v-model.trim="queryKey.loginName" placeholder="请输入用户名" :maxlength="20"></el-input>
          </el-form-item>
        </el-col>

        <el-col :sm="{span: 11}" :md="{span: 15}" style="text-align: right">
          <el-button type="primary" @click="userQuery()">搜索</el-button>
          <el-button @click="formReset('user')">清除</el-button>
        </el-col>
      </el-row>
    </el-form>

    <div class="new">
      <el-button type="primary" @click="newStatus=true">新增用户</el-button>

      <!-- 弹窗-新增用户-->
      <el-dialog title="新增用户" :visible.sync="newStatus" @close="closeDialog">
        <el-form :model="createUser" :rules="formRule" ref="createUser" label-width="100px">
          <el-row>
            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="用户名：" prop="loginName">
                <el-input v-model="createUser.loginName" placeholder="必填" :maxlength="20"></el-input>
              </el-form-item>
            </el-col>

            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="姓名：" prop="name">
                <el-input v-model="createUser.name" placeholder="必填" :maxlength="20"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="性别：" prop="sex">
                <el-radio-group v-model="createUser.sex">
                  <el-radio label="1">男</el-radio>
                  <el-radio label="0">女</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>

            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="手机号码：" prop="mobile">
                <el-input v-model="createUser.mobile" placeholder="必填"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="邮箱：" prop="mail">
                <el-input v-model="createUser.mail" placeholder="必填" :maxlength="40"></el-input>
              </el-form-item>
            </el-col>

            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="部门：" prop="orgId">
                <el-select v-model="createUser.orgId" placeholder="必填" @change="changeRole" style="width:100%;">
                  <el-option v-for="org in orgList" :label="org.name" :value="org.id | stringNumber" :key="org.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :sm="23" :md="{span: 22}">
              <el-form-item label="角色：">
                <div class="roleContainer">
                  <el-form-item>
                    <el-checkbox-group v-model="createUser.roleIdList">
                      <el-checkbox v-for="role in roleList" :label="role.id" :key="role.id">{{role.name}}</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="cancelAdd('createUser')">取 消</el-button>
          <el-button type="primary" @click="addUser('createUser')">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 弹窗-修改用户-->
      <el-dialog title="修改用户" :visible.sync="editStatus">
        <el-form :model="userDetail" :rules="formRule" ref="updateUser" label-width="100px">
          <el-row>
            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="用户名：" prop="loginName">
                <el-input v-model="userDetail.loginName" placeholder="必填" :maxlength="20" readonly></el-input>
              </el-form-item>
            </el-col>

            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="姓名：" prop="name">
                <el-input v-model="userDetail.name" placeholder="必填" :maxlength="20"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="性别：" prop="sex">
                <el-radio-group v-model="userDetail.sex">
                  <el-radio label="1">男</el-radio>
                  <el-radio label="0">女</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>

            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="手机号码：" prop="mobile">
                <el-input v-model="userDetail.mobile" placeholder="必填"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :sm="23" :md="{span: 11}">
              <el-form-item label="邮箱：" prop="mail">
                <el-input v-model="userDetail.mail" placeholder="必填" :maxlength="40"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="editStatus = false">取 消</el-button>
          <el-button type="primary" @click="updateUser('updateUser')">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <div>
      <el-table :data="userList" border style="width: 100%">
        <el-table-column label="用户名" prop="loginName" align="center"></el-table-column>

        <el-table-column label="姓名" prop="name" align="center"></el-table-column>

        <el-table-column label="手机号码" prop="mobile" align="center"></el-table-column>

        <el-table-column label="邮箱" prop="mail" align="center"></el-table-column>

        <el-table-column label="部门" prop="orgName" align="center"></el-table-column>

        <el-table-column label="用户角色" prop="roleName" align="center"></el-table-column>

        <el-table-column label="状态" prop="status" align="center" :formatter="statusFormat"></el-table-column>

        <el-table-column label="操作" align="center" width="280px">
          <template scope="scope">
            <el-button type="success" size="small" @click="editUser(scope.$index, scope.row)">编辑</el-button>
            <el-button type="warning" size="small" @click="freezeUser(scope.$index, scope.row)">{{scope.row.text}}</el-button>
            <el-button type="danger" size="small" @click="deleteUser(scope.$index, scope.row)">删除</el-button>
            <el-button type="info" size="small" @click="resetPassword(scope.$index, scope.row)">重置密码</el-button>
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
        userList: [],
        pager: [],
        orgList: [],
        roleList: [],
        userDetail: {},
        queryKey: {
          name: '',
          orgName: '',
          status: '',
          loginName: ''
        },
        createUser: {
          loginName: '',
          name: '',
          sex: '',
          mobile: '',
          mail: '',
          orgId: '',
          roleIdList: []
        },
        newStatus: false,
        editStatus: false,
        formRule: {
          loginName: {required: true, message: '请输入用户名', trigger: 'blur'},
          name: {required: true, message: '请输入姓名', trigger: 'blur'},
          sex: {required: true, message: '请选择性别', trigger: 'blur'},
          mobile: [
          	{required: true, message: '请输入手机号码', trigger: 'blur'},
            {pattern: /\d{11}/, message: '手机号码位数不正确', trigger: 'blur'},
            {pattern: /^1[3,5,7,8]\d{9}$/, message: '手机号码格式不匹配', trigger: 'blur'}
          ],
          mail: [{required: true, message: '请输入邮箱', trigger: 'blur'},
                { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
              ],
          orgId: {required: true, message: '请选择部门', trigger: 'change'},
          roleIdList: {required: true, message: '请至少分配一个角色', trigger: 'blur'},
          }
        }
    },
    mounted() {
      let _this = this;
      let postData = {pageNo: 1, pageSize: 10, name: '', orgName: '', loginName: '', status: ''};
      // 获取用户列表数据
      _this.getUserList(postData);

      // 获取组织列表数据
      _this.getOrgList();

      // 获取角色列表数据
      _this.getRoleList();
    },
    filters: {
      stringNumber(val) {
      	return val.toString();
      }
    },
    methods: {
    	getUserList(postData) {
        let _this = this;
        _this.$nextTick(function() {
          ApiService.user.userList(postData).then( data => {
            // 用户列表数据
            _this.userList = data.data;
            // 表格分页
            _this.pager = data;
          } )
        });
      },
      getOrgList() {
        let _this = this;
        _this.$nextTick(function() {
          ApiService.common.orgList().then( data => {
            _this.orgList = data.data;
          } )
        })
      },
      getRoleList() {
        let _this = this;
        _this.$nextTick(function() {
          ApiService.common.roleList().then( data => {
            _this.roleList = data.data;
          } )
        })
      },
      getUserDetail(postData) {
        let _this = this;
        _this.$nextTick(function() {
          ApiService.user.detail(postData).then( data => {
            // 用户详情信息
            _this.userDetail = data.data;
            _this.userDetail.sex = _this.userDetail.sex + '';
          } )
        });
      },
      userQuery() {
        let _this = this;
        let name = _this.queryKey.name;
        let orgName = _this.queryKey.orgName;
        let status = _this.queryKey.status;
        let loginName = _this.queryKey.loginName;
        let postData = {pageNo: 1, pageSize: 10, name: name, orgName: orgName, loginName: loginName, status: status};
        // 查找符合条件的用户
        _this.getUserList(postData);
      },
      formReset(formName) {
        this.$refs[formName].resetFields();
      },
      cancelAdd(formName) {
        this.newStatus = false;
      },
      addUser(formName) {
        let _this = this;
        let postData = {
          loginName: _this.createUser.loginName,
          name: _this.createUser.name,
          sex: _this.createUser.sex,
          mobile: _this.createUser.mobile,
          mail: _this.createUser.mail,
          orgId: _this.createUser.orgId,
          roleIdList: _this.createUser.roleIdList,
        };

        _this.$refs[formName].validate(valid => {
          // 判断是否分配角色
          let roleLength = _this.createUser.roleIdList.length;
          if(!roleLength) {
            _this.$message({
              type: 'warning',
              message: '请至少分配一个角色！'
            });
            return;
          }

          if(valid) {
            _this.$nextTick(function() {
              ApiService.user.create(postData).then( data => {
                this.newStatus = false;
                if(data.code === 0) {
                  _this.$message({
                    type: 'success',
                    message: '新增用户成功！',
                    duration: 200,
                    onClose() {
                      document.location.reload();
                    }
                  });
                }else {
                  _this.$message({
                    type: 'warning',
                    message: '新增用户失败！'
                  })
                }
              } )
            });
          }
        });
      },
      closeDialog() {
        this.$refs['createUser'].resetFields();
      },
      changeRole() {
    		let _this = this;
    		let postData = {orgId: _this.createUser.orgId * 1};

        ApiService.user.availableRole(postData).then(data => {
          if(data.code === 0) {
            _this.roleList = data.data;
          }else {
          	_this.$message({
              type: 'warning',
              message: '部门数据获取失败！'
            })
          }
        })
      },
      statusFormat(row, col) {
        if(row.status === 1) {
        	row.text = '冻结';
          return '有效';
        }else if (row.status === 2){
          row.text = '解冻';
          return '冻结';
        }else {
        	return '未知'
        }
      },
      editUser(index, row) {
        this.editStatus = true;
        let postData = {id: row.id};

        // 获取用户详情信息
        this.getUserDetail(postData);
      },
      updateUser(formName) {
        let _this = this;
        let postData = {
        	id: _this.userDetail.id,
        	loginName: _this.userDetail.loginName,
        	name: _this.userDetail.name,
        	sex: _this.userDetail.sex,
        	mobile: _this.userDetail.mobile,
        	mail: _this.userDetail.mail
        };

        _this.$refs[formName].validate(valid => {
        	if(valid) {
            _this.$nextTick(function() {
              ApiService.user.update(postData).then( data => {
                this.editStatus = false;
                if(data.code === 0) {
                	_this.$message({
                    type: 'success',
                    message: '用户信息更新成功！',
                    duration: 200,
                    onClose() {
                      document.location.reload();
                    }
                  });
                }else {
                  _this.$message({
                    type: 'warning',
                    message: '用户信息更新失败！'
                  })
                }
              } )
            });
          }
        });
      },
      freezeUser(index, row) {
      	let _this = this;
      	if(row.text === '冻结') {
          row.operation = 'lock';
        }else if(row.text === '解冻') {
          row.operation = 'unlock';
        }

        _this.$confirm('是否确定'+ row.text +'该用户？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          ApiService.user.lock({id: row.id, operation: row.operation}).then( data => {
            // 点击确定按钮时，弹出如下信息及操作
            if(data.code === 0) {
              _this.$message({
                type: 'success',
                message: '用户'+ row.text +'成功！',
                duration: 200,
                onClose() {
                  document.location.reload();
                }
              });

              row.status = row.status === 1 ? 2 : 1;
            }else {
              _this.$message({
                type: 'warning',
                message: '用户'+ row.text +'失败！'
              });
            }
          });
        }).catch(() => {
          // 点击取消按钮时，弹出如下信息
          _this.$message({
            type: 'info',
            message: '已取消'+ row.text +'用户'
          });
        });
      },
      deleteUser(index, row) {
    		let _this = this;
        _this.$confirm('是否确定删除该用户？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          ApiService.user.delete({id: row.id}).then( data => {
            // 点击确定按钮时，弹出如下信息及操作
            if(data.code === 0) {
              _this.$message({
                type: 'success',
                message: '用户删除成功！',
                duration: 200,
                onClose() {
                  document.location.reload();
                }
              });

              // 刷新页面
              setTimeout(() => {
                location.reload();
              },1000)
            }else {
              _this.$message({
                type: 'warning',
                message: '用户删除失败！'
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
      resetPassword(index, row) {
        let _this = this;
        _this.$confirm('是否确定重置该用户密码？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          ApiService.user.resetPassword({id: row.id}).then( data => {
            // 点击确定按钮时，弹出如下信息及操作
            if(data.code === 0) {
              _this.$message({
                type: 'success',
                message: '密码重置成功！'
              });
            }else {
              _this.$message({
                type: 'warning',
                message: '密码重置失败！'
              });
            }
          });
        }).catch(() => {
          // 点击取消按钮时，弹出如下信息
          _this.$message({
            type: 'info',
            message: '已取消重置密码！'
          });
        });
      },
      sizeEvent(pageSize) {
        let postData = {pageNo: 1, pageSize: pageSize, name: '', orgName: '', loginName: '', status: ''};
        this.getUserList(postData);
      },
      currentEvent(page) {
        let postData = {pageNo: page, pageSize: 10, name: '', orgName: '', loginName: '', status: ''};
        this.getUserList(postData);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
