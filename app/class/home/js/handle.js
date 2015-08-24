var dot = require('dot');

var ajaxHandle = function (con, tmp, url, dataInfo, callback) {
//    $.ajax({
            //        type: "get",
            //        url: url,
            //        data: dataInfo,
            //        async: true
            //    }).done(function (data) {
            //        data = $.type(data) == 'string' ? $.parseJSON(data) : data;
            //        data = data.AjaxResponse;
            //        if (data) {
            //            callback && callback(con, tmp, data);
            //        }
            //    });
}


var renderHandle = function (con, tmp, data) {
    con.html(dot.template(tmp.html())(data));
}

exports.ajaxHandle = ajaxHandle;
exports.renderHandle = renderHandle;
