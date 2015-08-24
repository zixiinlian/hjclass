// require('./index.aspx');
//require('./js/calendar.js');
//var $ = require('../../../vendor/jquery-1.8.3.min.js');
require("./js/person.js");
//require('../../../avalon.min.js');
__DEBUG__ && console.log($(document).height());
//
var classinfo = require('./js/classinfo.js');
var process = require('./js/process.js');

$(function () {
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
})
