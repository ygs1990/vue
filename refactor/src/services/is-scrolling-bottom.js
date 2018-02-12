//
//  is-scrolling-bottom.js
//  <project>
//  判断浏览器是否滚动到底部
//  Created by yann_liang on 2017-06-10.
//  Copyright 2017 yann_liang. All rights reserved.
//

/*
 * isbottom 执行返回bool值
 *      true 已经到达底部
 *      false 没有到达底部
 */

const isbottom=()=>{
    //滚动条在Y轴上的滚动距离
    function getScrollTop() {
        var scrollTop = 0,
            bodyScrollTop = 0,
            documentScrollTop = 0;
        if(document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if(document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }
    //文档的总高度
    function getScrollHeight() {
        var scrollHeight = 0,
            bodyScrollHeight = 0,
            documentScrollHeight = 0;
        if(document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if(document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }
    //浏览器视口的高度
    function getWindowHeight() {
        var windowHeight = 0;
        if(document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }

    return getScrollTop() + getWindowHeight() == getScrollHeight()

}

export default isbottom;
