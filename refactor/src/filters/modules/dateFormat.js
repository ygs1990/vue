import Vue from 'vue'

// 注册全局过滤器
export default Vue.filter('dateFormat', function(val) {
    // 返回处理后的值
    return this.$moment(val).format('YYYY-MM-DD HH:mm:ss');
})
