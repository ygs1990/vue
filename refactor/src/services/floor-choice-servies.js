//
//  floorChoice.js
//  <project>
//  楼层nav选择
//  Created by yann_liang on 2017-06-10.
//  Copyright 2017 yann_liang. All rights reserved.
//

/*
 * fun init(navClassName, navParIdName, floorIdList, addClassName) 初始化
 *  @param navClassName 必传 导航a标签类名
 *  @param navParIdName 必传  导航a标签父元素类名
 *  @param floorIdList 必传 楼层ID名 从上到下
 *  @param addClassName 必传 导航a标签激活需要添加的类名
 *
 * fun
 * fun
 * fun
 */

import isBottom from './is-scrolling-bottom.js'

class FloorChoiceServies {
    constructor() {
        this.navParELe = null;
        this.navClassEle = [];
    }
    init(navClassName, navParIdName, floorIdList, addClassName) {
        this.navClassName = navClassName;
        this.navParELe = document.getElementById(navParIdName);
        this.navClassEle = this.getClassEle(navClassName, navParIdName); //获取所有nav
        this.floorList = this.getFloorEle(floorIdList);
        this.addClassName = addClassName;
        this.scroll();

        navParIdName && this.addClickEvent();

        let that = this;
        window.onscroll = function() {
            that.scroll();
        }
    }

    scroll() {

        let scroll = document.documentElement.scrollTop || document.body.scrollTop;

        let currentID = '';
        if(isBottom()) {

            currentID = this.floorList[this.floorList.length - 1].id;
        } else {

            for(let i = 0; i < this.floorList.length; i++) {

                let top = this.floorList[i].offsetTop; //遍历获取每一个div的offsetTOP值
                if(scroll > top - 400) {
                    //如果滚动条到顶部的距离大于哪一个div的offsetTOP到顶部的距离就把items的ID复制给currentID;

                    currentID = this.floorList[i].id;

                } else {

                    break; //退出循环

                }

            }
        }

        if(currentID) {
            //循环导航元素
            for(let i = 0; i < this.navClassEle.length; i++) {

                //获取a元素的链接，用#号分隔成数组

                let href = this.navClassEle[i].href.split("#");
                //如果数组的最后一项的值等于currentID，那么给这个a赋值类名current

                if(href[href.length - 1] == currentID) {

                    this.navClassEle[i].className = this.navClassName + ' ' + this.addClassName;

                } else {
                    this.removeClass(this.navClassEle[i], this.addClassName)
                }

            }

        }
    }

    addClickEvent() {
        this.navParELe.addEventListener("click", (event) => {
            let target = event.target;
            //循环导航元素
            for(let i = 0; i < this.navClassEle.length; i++) {

                if(event.target == this.navClassEle[i]) {
                    this.navClassEle[i].className = this.navClassName + ' ' + this.addClassName;

                } else {
                    this.removeClass(this.navClassEle[i], this.addClassName)
                }

            }

        })
    }

    getFloorEle(idList) {
        let result = [];
        for(let i = 0; i < idList.length; i++) {
            result.push(document.getElementById(idList[i]));
        }
        return result;
    }

    getClassEle(className, parent) {
        if(document.getElementsByClassName) { //支持这个函数
            return document.getElementsByClassName(className);
        } else {
            let odiv = parent.getElementsByTagName("*"),
                result = [];
            for(let i = 0; i < odiv.length; i++) {

                if(odiv[i].className == cls) {

                    result.push(odiv[i])

                }

            }
            return result;
        }
    }

    hasClass(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    removeClass(obj, cls) {
        if(this.hasClass(obj, cls)) {
            let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    }
}

export default new FloorChoiceServies();