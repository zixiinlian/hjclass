// require('./index.aspx');
//require('./js/calendar.js');
//var $ = require('../../../vendor/jquery-1.8.3.min.js');
//require("./js/person.js");
//require('../../../avalon.min.js');
__DEBUG__ && console.log($(document).height());
//
var Classinfo = require('./js/classinfo.js');
var Process = require('./js/process.js');
var Notice = require('./js/notice.js');
var Task = require('./js/Task.js');


$(function () {
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

})
