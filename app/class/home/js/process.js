var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;


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
        ajaxHandle();


        //test;
        data = {
            start: '2010',
            end: '2015',
            me: '60%',
            classMate: '60%',
            total: 136,
            curr: 225,
            hasBegin: true,
            rank: [{
                pic: '/app/class/home/images/1.jpg',
                num: 1
            }, {
                pic: '/app/class/home/images/1.jpg',
                num: 2
            }, {
                pic: '/app/class/home/images/1.jpg',
                num: 3
            }]
        };

        renderHandle($('#learningProcess'), $('#learningProcess-T'), data);

        $(document).click(function () {
                data.me = '100%';
                con.html(dot.template(template)(data));
            })
            //test;
    }

}


var Rank = function () {

}

Rank.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {
        var me = this;
        $.ajax({
            url: '',
            data: '',
        }).done(function (data) {
            data = $.type(data) == 'string' ? $.parseJSON(data) : data;
            data = data.AjaxResponse;
            //            if (data) {
            //                //..
            //            }
        });

    }
}

exports.Process = Process;
