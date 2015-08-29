var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;



var Notice = function () {

}

Notice.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {




        ajaxHandle('./template/notice.html', '#notice', '#notice-T', './json/guidOld.json', null, function (con, tmp, data) {
            var data = {

            }
            renderHandle(con, tmp, data);
        })
    }
}

exports.Notice = Notice;
