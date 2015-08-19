var dot = require('dot');

var Process = function () {
    this.mod = $('.learningProcess');
    this.myPro = $('.learningProcess').find('.me');
    this.classMatePro = $('.learningProcess').find('.classMate');
};
Process.prototype = {
    init: function () {
        this.getData()
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

                }
            });
            //
        data = [{
            me: '60%',
            classMate: '80%'
                }];
        //
        me.myPro.width(data[0].me);
        me.classMatePro.width(data[0].classMate);
        if (parseInt(data[0].me) > parseInt(data[0].classMate)) {

}
    }

}


exports.Process = Process;
