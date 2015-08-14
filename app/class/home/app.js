// require('./index.aspx');
//require('./js/calendar.js');
//require('../../../.temp/css/app.css');
// require('../sass/test.scss');
console.log("hello1");

__DEBUG__ && console.log($(document).height());
//
var ManagerTab = require('./js/classinfo.js');



$(function () {
    var managerTab = new ManagerTab();
    managerTab.init();
})
