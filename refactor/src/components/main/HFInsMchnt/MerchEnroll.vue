<template>
  <div>
    <div class="content">
      <el-form :model="mchnt" :rules="mchntRules" ref="mchnt" label-width="120px" >
        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="商户编号：" prop="mchntCode">
              <el-input v-model.trim="mchnt.mchntCode" placeholder="必填"></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="商户密码：" prop="mchntPwd">
              <el-input v-model.trim="mchnt.mchntPwd" placeholder="必填"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="推广码：" prop="spreadCode">
              <el-input v-model.trim="mchnt.spreadCode" placeholder="必填" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="商户标识：" prop="cbzid">
              <el-input v-model.trim="mchnt.cbzid" placeholder="必填" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button @click="cancel()">取消</el-button>
          <el-button type="primary" @click="submitForm('mchnt')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import ApiService from '@/services/API-servies'
  export default {
    data() {
      return {
        mchnt: {
          mchntCode: '',
          mchntPwd: '',
          spreadCode: '',
          cbzid: ''
        },
        mchntRules: {
          mchntCode: [
            { required: true, message: '请输入手机号码！', trigger: 'blur'},
            { pattern: /^1[3|4|5|7|8]\d{9}$/, message: '手机号码格式不匹配，请重新输入!', trigger: 'blur'}
          ],
          mchntPwd: [
            {required: true, message: '请输入商户密码！', trigger: 'blur'},
            {pattern: /^\w{6,}$/, message: '请输入字母、数字或下划线(至少6位)', trigger: 'blur'}
          ],
          spreadCode: { required: true, message: '请输入推广码！', trigger: 'blur'},
          cbzid: { required: true, message: '请输入商户标识！', trigger: 'blur'}
        }
      }
    },
    mounted() {
    	this.getData();
    },
    methods: {
    	getData() {
    		let _this = this;
    		ApiService.hfInsMchnt.getHFInsMchntProperties().then(data => {
    			if(data.code === 0) {
            _this.mchnt.spreadCode = data.data.spreadCode;
            _this.mchnt.cbzid = data.data.cbzid;
          }
        })
      },
      submitForm(formName) {
        let _this = this;
        _this.$refs[formName].validate(valid => {
          if(valid) {
            let postData = {
              mchntCode: _this.mchnt.mchntCode,
              mchntPwd: _this.mchnt.mchntPwd,
              spreadCode: _this.mchnt.spreadCode,
              cbzid: _this.mchnt.cbzid
            };

            ApiService.hfInsMchnt.merchEnroll(postData).then(data => {
              if(data.code === 0) {
                _this.$message({
                  type: 'success',
                  message: '商户注册成功!',
                  onClose() {
                    _this.$router.push({path: 'hfInsMchnt'});
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
      },
      cancel() {
        this.$router.push({path: 'hfInsMchnt'})
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
