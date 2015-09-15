__DEBUG__ && console.log($(document).height());
//
var Classinfo = require('./js/classinfo.js');
var Process = require('./js/process.js');
var Notice = require('./js/notice.js');
var Task = require('./js/Task.js');
var FinshClass = require('./js/FinshClass.js');
//var Classmate = require('./js/classmateMeeting.js');
var ClassDiscussion = require('./js/classDiscussion.js');
var AQ = require('./js/AQ.js');
var PopWin = require('./js/popWin.js');
var Guid = require('./js/guid.js');


$(function () {
    function resizeIEWindow(minW) {
        if ($(window).width() < minW) {
            $("body").addClass("w" + minW);
        } else {
            $("body").removeClass("w" + minW);
        }
    }
    if (navigator.userAgent.indexOf("MSIE") != -1 && praseInt(navigator.userAgent.match(/MSIE\s(\d+)\./i)[1]) < 9) {
        resizeIEWindow(1200);
        window.onresize = function () {
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

    //班级讨论区;
    var classDiscussion = new ClassDiscussion.ClassDiscussion();
    classDiscussion.init();



    //同学会
    //    var classmateMeeting = new Classmate.ClassmateMeetingTab();
    //    classmateMeeting.init();

    //答疑;
    var hotAQ = new AQ.HotAQ();
    hotAQ.init();

    var unsolve = new AQ.Unsolve();
    //    unsolve.init();


    $('.AQ').on('click', '.tab', function () {
        var _index = $(this).index();
        var pannel = $('.tabBox .pannel').eq(_index);
        var hasloaded = pannel.data('loaded');
        $(this).addClass('on').siblings().removeClass('on');

        if (_index == 1 && !hasloaded) {
            unsolve.init();
            pannel.data('loaded', 'true');
        }
        pannel.removeClass('hide').siblings().addClass('hide');

    })


    //弹框;
    var popWin = new PopWin();
    //    popWin.download();
    //    popWin.onlyWindows();
    //    popWin.notice();


    //引导;
    var guidOld = new Guid.GuidOld();
    guidOld.init();



    var guidNew = new Guid.GuidNew();
    //    guidNew.init();

})
