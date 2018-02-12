//js
import Vue from 'vue';
import ChartServices from '@/services/echarts/chart-services';

Vue.directive('lineChartDir', {

    bind(el, binding) {
        console.log('bind:',el, binding);
        let lineChartServices = new ChartServices();
        lineChartServices.init(el, 'line');

    },
    inserted(el, binding) {
        console.log('insert:', binding.value);
    },
    update(el, binding, vnode, oldVnode) {
        console.log('update:', binding, vnode, oldVnode);
    },
    componentUpdated(el, binding) {
        console.log('componentUpdated:', binding.name);
    }

});