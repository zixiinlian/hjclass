var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;

var ClassmateMeetingTab = function () {
    this.elem = $('#classmateMeeting');
}
ClassmateMeetingTab.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {
        //        ajaxHandle();



        ajaxHandle('./template/classmateMeeting.html', '#classmateMeeting', '#classmateMeeting-T', './json/guidOld.json', null, function (con, tmp, data) {

            var data = [{
                reviewType: '置顶',
                detail: '上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上',
                thumbUp: 122,
                review: 144
        }, {
                reviewType: '置顶',
                detail: '上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上',
                thumbUp: 231,
                review: 122
        }, {
                reviewType: '置顶',
                detail: '上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上',
                thumbUp: 35,
                review: 14
        }, {
                reviewType: '精华',
                detail: '上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上',
                thumbUp: 78,
                review: 17
        }, {
                reviewType: '精华',
                detail: '上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上',
                thumbUp: 89,
                review: 5
        }, {
                reviewType: '',
                detail: '上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上',
                thumbUp: 33,
                review: 21
        }, {
                reviewType: '',
                detail: '上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上班族的吓唬大比拼上',
                thumbUp: 7,
                review: 1
        }];


            renderHandle(con, tmp, data);
        })



    }
}

exports.ClassmateMeetingTab = ClassmateMeetingTab;
