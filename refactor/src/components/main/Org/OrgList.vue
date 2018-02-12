<template>
  <div class="content">
    <el-row>
      <el-col :sm="{span: 24}" :md="{span: 8}">
        <div class="header" style="min-width: 300px;">部门列表</div>
        <div style="border: 1px solid #20a0ff; padding-bottom: 100px; min-width: 298px;">
          <el-row>
            <el-col :span="22" style="margin: 15px 0;">
              <el-input
                placeholder="请输入部门关键字"
                v-model.trim="keyWord" style="margin-left: 15px; ">
              </el-input>
            </el-col>
          </el-row>
          <el-tree
            :data="orgList"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps"
            :filter-node-method="filterNode"
            @node-click="nodeClick"
            :expand-on-click-node="false"
            :render-content="renderContent"
            style="border: 1px solid transparent; min-width: 250px;">
          </el-tree>
        </div>
      </el-col>

      <el-col :sm="{span: 24}" :md="{span: 14, offset:2}" style="border: 1px solid #20a0ff;">
        <div class="header">{{orgName ? orgName : '矩阵金融'}}</div>
        <div class="body">
          <div class="org" style="margin-bottom: 40px;">
            <el-row class="orgHeader">
              <el-col>部门角色</el-col>
            </el-row>

            <el-row class="orgBody">
              <el-col>
                <span v-for="role in roleList" :key="role.name" class="mr">{{role.name}}</span>
              </el-col>
            </el-row>
          </div>

          <div class="org">
            <el-row class="orgHeader">
              <el-col>部门用户</el-col>
            </el-row>

            <el-row class="orgBody">
              <el-col>
                <span v-for="user in userList" :key="user.name" class="mr">{{user.name}}</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="new">
      <!-- 弹窗-新增组织-->
      <el-dialog title="新增组织" :visible.sync="newStatus" size="tiny" @close="closeDialog">
        <el-form :model="org" :rules="formRule" ref="createOrg" label-width="100px">
          <el-row>
            <el-col :span="23">
              <el-form-item label="组织名称：" prop="name">
                <el-input v-model="org.name" placeholder="必填" :maxlength="20"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="23">
              <el-form-item label="组织描述：">
                <el-input v-model="org.description" :maxlength="60"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="23">
              <el-form-item label="组织角色：">
                <div class="roleContainer">
                  <el-checkbox-group v-model="org.roleIdList">
                    <el-checkbox v-for="role in roleList" :label="role.id" :key="role.id">{{role.name}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="newStatus = false">取 消</el-button>
          <el-button type="primary" @click="createOrg('createOrg')">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 弹窗-修改组织-->
      <el-dialog title="编辑组织" :visible.sync="editStatus" size="tiny">
        <el-form :model="orgDetail" :rules="formRule" ref="updateOrg" label-width="100px">
          <el-row>
            <el-col :span="23">
              <el-form-item label="组织名称：" prop="name">
                <el-input v-model="orgDetail.name" placeholder="必填" :maxlength="20"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="23">
              <el-form-item label="组织描述：">
                <el-input v-model="orgDetail.description" :maxlength="60"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="23">
              <el-form-item label="组织角色：">
                <div class="roleContainer">
                  <el-checkbox-group v-model="selectedRole">
                    <el-checkbox v-for="role in roleList" :label="role.id" :key="role.id">{{role.name}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="editStatus = false">取 消</el-button>
          <el-button type="primary" @click="updateOrg('updateOrg')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies'
  export default {
    data () {
      return {
        orgList: [],
        roleList: [],
        userList: [],
        defaultProps: {
          children: 'childrenList',
          label: 'name'
        },
        keyWord:'',
        orgName: '',
        createOrgId: '',
        orgDetail: {},
        selectedRole: [],
        newStatus: false,
        org: {
          name: '',
          description: '',
          roleIdList: []
        },
        editStatus: false,
        formRule: {
          name: {required: true, message: '请输入角色名称', trigger: 'blur'},
          description: {required: true, message: '请输入角色描述', trigger: 'blur'},
          roleIdList: {required: true, message: '请分配组织角色', trigger: 'blur'},
        }
      }
    },
    mounted() {
      let _this = this;
      let postData = {pageNo: 1, pageSize: 10};
      // 获取用户列表数据
      _this.getOrgList(postData);
    },
    watch: {
      keyWord(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      getOrgList(postData) {
        let _this = this;
        _this.$nextTick(function() {
          ApiService.org.orgList(postData).then( data => {
            // 用户列表数据
            _this.orgList = data.data;
          } )
        });
      },
      getRoleDetail(postData) {
        let _this = this;
        _this.$nextTick(function() {
          ApiService.org.detail(postData).then( data => {
            // 用户详情信息
            _this.orgDetail = data.data;
          } )
        });
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.name.includes(value);
      },
      nodeClick(data, obj, vue) {
        let _this = this;
        let postData = {id: data.id};
        _this.orgName = data.name;

        _this.$nextTick(function() {
          ApiService.org.detail(postData).then( data => {
            // 组织详情信息
            _this.orgDetail = data.data;
            // 组织用户
            _this.userList = data.data.userList;
            // 组织角色
            _this.roleList = data.data.roleList;

            // 显示已选中的角色
            _this.selectedRole = [];
            for(let i = 0, len = _this.roleList.length; i < len; i++) {
            	if(_this.roleList[i].dynamicFields.check) {
                _this.selectedRole.push(_this.roleList[i].id);
              }
            }
          } )
        });
      },
      renderContent(createElement, { node, data, store }) {
        let _this = this;
        return createElement('span', [
            createElement('span', node.label),
            createElement('span', {attrs: {style:"margin-left: 15px"}},[
            createElement('el-button',{
            	attrs: {type:"", size:"mini", icon:"plus"},
              on: {
            		click:function() {
                  _this.newStatus = true;
                  _this.createOrgId = data.id;
                }
              }
            }),
            createElement('el-button',{
            	attrs: {type:"primary", size:"mini",icon:"edit"},
              on: {
            		click:function() {
                  _this.editStatus = true;
                }
              }
            }),
            createElement('el-button',{
            	attrs: {type:"danger", size:"mini",icon:"delete"},
              on: {
            		click:function() {
                  _this.deleteOrg(data.id);
                }
              }
            }),
          ]),
        ]);
      },
      createOrg(formName) {
        let _this = this;
        let postData = {
        	parentId: _this.createOrgId,
          name: _this.org.name,
          description: _this.org.description,
          roleIdList: _this.org.roleIdList
        };

        _this.$refs[formName].validate(valid => {
          // 判断是否分配角色
          let roleLength = _this.org.roleIdList.length;
          if(!roleLength) {
            _this.$message({
              type: 'warning',
              message: '请至少分配一个角色！'
            });
            return;
          }

          if(valid) {
            _this.$nextTick(function() {
              ApiService.org.createOrgWithRole(postData).then( data => {
                if(data.code === 0) {
                  // 隐藏弹框
                  this.newStatus = false;
                  if(data.code === 0) {
                    _this.$message({
                      type: 'success',
                      message: '新增组织成功！',
                      duration: 200,
                      onClose() {
                        document.location.reload();
                      }
                    });
                  }
                }else {
                  // 隐藏弹框
                  this.newStatus = false;
                  _this.$message({
                    type: 'warning',
                    message: '新增组织失败！'
                  })
                }
              } )
            });
          }
        });
      },
      closeDialog() {
        this.$refs['createOrg'].resetFields();
      },
      updateOrg(formName) {
        let _this = this;
        let postData = {
          id: _this.orgDetail.id,
          name: _this.orgDetail.name,
          description: _this.orgDetail.description,
          roleIdList: _this.selectedRole
        };

        _this.$refs[formName].validate(valid => {
          // 判断是否分配角色
          let roleLength = _this.org.roleIdList.length;
          if(!roleLength) {
            _this.$message({
              type: 'warning',
              message: '请至少分配一个角色！'
            });
            return;
          }

          if(valid) {
            _this.$nextTick(function() {
              ApiService.org.updateOrgWithRole(postData).then( data => {
                if(data.code === 0) {
                  // 隐藏弹框
                  this.editStatus = false;
                  if(data.code === 0) {
                    _this.$message({
                      type: 'success',
                      message: '组织信息更新成功！'
                    })
                  }
                }else {
                  // 隐藏弹框
                  this.editStatus = false;
                  _this.$message({
                    type: 'warning',
                    message: '组织信息更新失败！'
                  })
                }
              } )
            });
          }
        });
      },
      deleteOrg(orgId) {
        let _this = this;
        _this.$confirm('是否确定删除该组织？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          ApiService.org.delete({id: orgId}).then( data => {
            // 点击确定按钮时，弹出如下信息及操作
            if(data.code === 0) {
              _this.$message({
                type: 'success',
                message: '组织删除成功！',
                duration: 200,
                onClose() {
                  document.location.reload();
                }
              });
            }else {
              _this.$message({
                type: 'warning',
                message: '组织删除失败！'
              });
            }
          });
        }).catch(() => {
          // 点击取消按钮时，弹出如下信息
          _this.$message({
            type: 'info',
            message: '已取消删除组织！'
          });
        });
      }
    }
  }
</script>

<style lang="less" scoped >
  .header {
    padding: 10px 0;
    text-align: center;
    background: #20a0ff;
    color: #fff;
  }
  .body {
    padding: 40px 20px;
  }
  .org {
    border: 1px solid #d1dbe5;
  }
  .orgHeader {
    padding: 10px 20px;
    border-bottom: 1px solid #d1dbe5;
    font-size: 14px;
  }
  .orgBody {
    padding: 18px 20px;
    font-size: 12px;
    color: #989898;
  }
  .mr {
    margin-right: 20px;
  }
</style>
