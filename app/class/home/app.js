// require('./index.aspx');
//require('./js/calendar.js');
//var $ = require('../../../vendor/jquery-1.8.3.min.js');
//require("./js/person.js");
//require('../../../avalon.min.js');
__DEBUG__ && console.log($(document).height());
//
var classinfo = require('./js/classinfo.js');
var process = require('./js/process.js');
var Notice = require('./js/notice.js');
var Task = require('./js/Task.js');
var FinshClass = require('./js/FinshClass.js');
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
    var className = new Classinfo.ClassName();
    className.init();
    //班级管理头像;
    var managerTab = new Classinfo.ManagerTab();
    managerTab.init();
    //myInfo;
    var managerTab = new Classinfo.MyInfo();
    managerTab.init();
    //进度;
    var processInfo = new Process.Process();
    processInfo.init();

    //公告;
    var notice = new Notice.Notice();
    notice.init();
    //task;
    var task = new Task.Task();
    task.init();

    //结课操作;
    var finshHandle = new FinshClass.FinshHandle();
    finshHandle.init();

    //同学录;
    var classmatesList = new FinshClass.ClassmatesList();
    classmatesList.init();

    //同学会
    var classmateMeeting = new classmate.ClassmateMeetingTab();
    classmateMeeting.init();
})
