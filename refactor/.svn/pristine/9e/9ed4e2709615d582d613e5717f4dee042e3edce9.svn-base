<template>
  <div>
      <el-row>
        <el-col :span="24">
          <p class="title">订单批量上传(excel)</p>
        </el-col>
        <el-col :span="24">
          <el-button-group class='button'>
            <a class="down" href="http://localhost:8081/business/orderBatchPay/dowLoadBatchExcelTemp.do">
              <i class="el-icon-arrow-down"></i>
            下载模版</a>
          </el-button-group>
        </el-col>
      </el-row>
     <el-row :span="24" class='update'>
      <el-col :span="8">
       <el-upload
          :name='name'
          :action="uploadAction"
          :auto-upload="autoUpload"
          :before-upload="fileTypeCheck"
          :file-list="fileList"
          :on-success="onSuccess">
          <el-button size="small" type="primary">上传文件<i class="el-icon-upload el-icon--right"></i></el-button>
          <div slot="tip" class="el-upload__tip">只能上传xls,xlsx文件，且不超过500kb</div>
        </el-upload>
      </el-col>
     </el-row>
     <el-row>
      <div class="remarks">
        <p>备注：</p>
        <p>1、为了上传成功，请严格按照excel模板填写需要批量代付文件</p>
        <p>2、excel文件名必须要按照"商户号+代付批次号"格式命名</p>
      </div>
     </el-row>
<!--      <el-row>
 <div class="submit">
   <el-button size="small" @click="submit" type="primary">点击上传<i class="el-icon-upload el-icon--right"></i></el-button>
 </div>
</el-row> -->
   </div>
</template>

<script type="text/ecmascript-6">
  import ApiService from '@/services/API-servies';
  import {mapState, mapActions, mapGetters} from 'vuex';
  const BASE = process.env.API_ROOT;
  export default {
    data() {
      return {
        // uploadAction:`${BASE}/business/orderBatchPay/upLoadBatchExcel.do`,
        uploadAction:ApiService.batchPay.upLoadBatchExcel,
        fileList: [],
        name:'batchPayExcel',
        autoUpload:true
      }
    },
    methods: {
      onSuccess(res,file){
        this.$message(res.message)
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .title{
    font-size: 20px;
    margin-top: 20px
  }
  .button {
      margin-top: 20px;
    }
  .down{
    font-size: 12px;
    display: block;
    padding: 7px;
    border-radius: 5px;
    color: #fff;
    background: #20a0ff;
    text-decoration:none
  }
  .down:hover{
      text-decoration: none;
      background: #4DB3FF
    }
  .down:active{
    text-decoration: none;
    background: #1D90E6
  }
  .update{
    margin-top: 60px
  }
  .remarks{
    margin-top: 20px;
    color: red
  }
  .submit{
    margin-top: 20px;
  }
</style>
