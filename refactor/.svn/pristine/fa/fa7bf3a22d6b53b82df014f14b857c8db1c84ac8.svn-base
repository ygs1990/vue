<template>
  <div class="content">
      <el-form :model="channel" :rules="channelRules" ref="channel" label-width="120px">
        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="通道编号：" prop="code">
              <el-input v-model.trim="channel.code" placeholder="必填" readonly></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="通道名称：" prop="name">
              <el-input v-model.trim="channel.name" placeholder="必填" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="交易请求地址：" prop="hostAddr">
              <el-input v-model.trim="channel.hostAddr" placeholder="必填" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="交易通知地址：" prop="whiteIp">
              <el-input v-model.trim="channel.whiteIp" placeholder="必填" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="等待时间(秒)：" prop="recheckWaitTime">
              <el-input v-model.trim="channel.recheckWaitTime" placeholder="必填" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="重试次数(次)：" prop="recheckTimes">
              <el-input v-model.trim="channel.recheckTimes" placeholder="必填" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="23" :md="{span: 10, offset: 1}">
            <el-form-item label="重试间隔(秒)：" prop="recheckInterval">
              <el-input v-model.trim="channel.recheckInterval" placeholder="必填" :readonly="readonly"></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="23" :md="{span: 10, offset: 2}">
            <el-form-item label="协议类型：" prop="netProtocol">
              <el-select v-model.trim="channel.netProtocol" placeholder="必填" :disabled="disabled" style="width:100%;">
                <el-option label="socket" value="socket"></el-option>
                <el-option label="http" value="http"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <div>
            <div v-if="showBtn">
              <el-button @click="back()">返回</el-button>
              <el-button type="primary" @click="editChannel()">编辑</el-button>
            </div>

            <div v-else>
              <el-button @click="cancel()">取消</el-button>
              <el-button type="primary" @click="updateChannel('channel')">保存</el-button>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import ApiService from '@/services/API-servies'
  export default {
    data () {
      return {
        channel: {
          code: '',
          name: '',
          hostAddr: '',
          whiteIp: '',
          recheckWaitTime: '',
          recheckTimes: '',
          recheckInterval: '',
          netProtocol: ''
        },
        channelRules: {
          code: [
            { required: true, message: '请输入通道编号!', trigger: 'blur'},
            { pattern: /^[1-9]\d{7,11}$/, message: '请输入首位不为0的数字(8-12位)', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入通道名称!', trigger: 'blur'},
            {pattern: /^([\u4E00-\u9FA5]|\w){0,20}$/, message: '请输入中文、字母、数字或下划线(至多20位)', trigger: 'blur'}
          ],
          hostAddr: { required: true, message: '请输入交易请求地址!', trigger: 'blur'},
          whiteIp: { required: true, message: '请输入交易通知地址!', trigger: 'blur'},
          recheckWaitTime: [
            { required: true, message: '请输入等待时间!', trigger: 'blur'},
            { pattern: /^\d+$/, message: '请输入数字(不小于0)', trigger: 'blur'}
          ],
          recheckTimes: [
            { required: true, message: '请输入重试次数!', trigger: 'blur'},
            { pattern: /^\d+$/, message: '请输入数字(不小于0)', trigger: 'blur'}
          ],
          recheckInterval: [
            { required: true, message: '请输入重试间隔!', trigger: 'blur'},
            { pattern: /^\d+$/, message: '请输入数字(不小于0)', trigger: 'blur'}
          ],
          netProtocol: { required: true, message: '请选择协议类型!', trigger: 'change'}
        },
        showBtn: true,
        editAble: true,
        readonly: true,
        disabled: true
      }
    },
    mounted() {
      let _this = this;
      _this.$nextTick(() => {
        _this.getDetail();
      })
    },
    methods: {
      back() {
        this.$router.push('/channel');
      },
      editChannel() {
        this.showBtn = false;
        this.editAble = false;
        this.readonly = false;
        this.disabled = false;
      },
      cancel() {
        this.showBtn = true;
        this.editAble = true;
        this.readonly = true;
        this.disabled = true;
      },
      updateChannel(formName) {
      	let _this = this;
        _this.$refs[formName].validate(valid => {
          if(valid) {
            let postData = {
            	channel: {
                id: _this.channel.id,
                code: _this.channel.code,
                name: _this.channel.name,
                hostAddr: _this.channel.hostAddr,
                whiteIp: _this.channel.whiteIp,
                recheckWaitTime: _this.channel.recheckWaitTime,
                recheckTimes: _this.channel.recheckTimes,
                recheckInterval: _this.channel.recheckInterval,
                netProtocol: _this.channel.netProtocol
              }
            };

            ApiService.channel.update(postData).then(data => {
              if(data.code === 0) {
                _this.$message({
                  type: 'success',
                  message: '通道修改成功!',
                  duration: 200,
                  onClose() {
                    _this.$router.push({path: '/channel'});
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
      getDetail() {
      	let _this = this;
      	let channelId = this.$route.query.channelId;
      	// 获取通道详情信息
      	ApiService.channel.detail({id: channelId}).then( data => {
      		if(data.code === 0) {
            _this.channel = data.data.channel;
            _this.channel.recheckWaitTime =_this.channel.recheckWaitTime + '';
            _this.channel.recheckTimes =_this.channel.recheckTimes + '';
            _this.channel.recheckInterval = _this.channel.recheckInterval + '';
          }
        } );
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
