// require('./index.aspx');
//require('./js/calendar.js');
//require('../../../.temp/css/app.css');
// require('../sass/test.scss');
//var $ = require('../../../vendor/jquery-1.8.3.min.js');
console.log("hello1");
//require('../../../avalon.min.js');
__DEBUG__ && console.log($(document).height());
//
var classinfo = require('./js/classinfo.js');
var process = require('./js/process.js');
var classmate = require('./js/classmateMeeting.js');

$(function () {
    function resizeIEWindow( minW){
        if($(window).width() < minW){
            $("body").addClass("w" + minW);
        }else{
            $("body").removeClass("w" + minW);
        }    
    }
    if(navigator.userAgent.indexOf("MSIE") != -1 && praseInt(navigator.userAgent.match(/MSIE\s(\d+)\./i)[1]) < 9){
        resizeIEWindow(1200);
        window.onresize = function(){
            resizeIEWindow(1200);
        };
    }
    //className;
    var className = new classinfo.ClassName();
    className.init();
    //班级管理头像;
    var managerTab = new classinfo.ManagerTab();
    managerTab.init();
    //myInfo;
    var managerTab = new classinfo.MyInfo();
    managerTab.init();
    //进度;
    var processInfo = new process.Process();
    processInfo.init();

    //task;
    //同学会
    var classmateMeeting = new classmate.ClassmateMeetingTab();
    classmateMeeting.init();
})
