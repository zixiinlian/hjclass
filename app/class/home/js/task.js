var dot = require('dot');
var Task = function () {

}

Task.prototype = {
    init: function () {

    },
    getData: function () {
        var me = this;
        $.ajax({
            url: '',
            data: '',
        }).done(function (data) {
            data = $.type(data) == 'string' ? $.parseJSON(data) : data;
            data = data.AjaxResponse;
            if (data) {
                //..
            }
        })



    }
}