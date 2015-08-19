// require('./index.aspx');
//require('./js/calendar.js');
//require('../../../.temp/css/app.css');
// require('../sass/test.scss');
//var $ = require('../../../vendor/jquery-1.8.3.min.js');
console.log("hello1");
//require('../../../avalon.min.js');
__DEBUG__ && console.log($(document).height());
//
//var $ = require('jQuery');
var classinfo = require('./js/classinfo.js');
var process = require('./js/process.js');

$(function () {
    //班级管理头像;
    var managerTab = new classinfo.ManagerTab();
    managerTab.init();

    //进度;
    var processInfo = new process.Process();
    //    processInfo.init();

    //task;
})
