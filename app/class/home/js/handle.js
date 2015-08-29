var dot = require('dot');

var renderHandle = function (con, tmp, data) {
    $(con).html(dot.template(tmp)(data));
}


var ajaxHandle = function (tempUrl, con, tmp, handleUrl, dataInfo, callback) {
    $.when($.ajax(tempUrl), $.ajax({
        type: "get",
        url: handleUrl,
        data: dataInfo,
        async: true
    })).done(function (data1, data2) {
        $(con).html(data1[0]);
        data2 = $.type(data2[0]) == 'string' ? $.parseJSON(data2[0]) : data2[0];
        callback && callback(con, $(tmp).html(), data2);

    }).fail(function (data1, data2) {
        console.log(data1);
        console.log(data2)
    });


    //    $.ajax({
    //        type: "get",
    //        url: handleUrl,
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




exports.ajaxHandle = ajaxHandle;
exports.renderHandle = renderHandle;
