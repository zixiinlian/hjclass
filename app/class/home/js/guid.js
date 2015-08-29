var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;
//var dot = require('dot');

var GuidNew = function () {};
GuidNew.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {



        ajaxHandle('./template/guidNew.html', '#guidNew', '#guidNew-T', './json/guidOld.json', null, function (con, tmp, data) {
            var data = {
                userName: 'yasdas',
                step: 0,
                get: {
                    stepCount: function () {
                        ++data.step;
                    }
                }
            };
            renderHandle(con, tmp, data);
            $('body').on('click', '.btn', function () {
                if (data.step <= 4) {
                    data.get.stepCount();
                    renderHandle(con, tmp, data);
                }
            });
            $('body').on('click', '.close', function () {
                $('.guid').remove();
                data.step = 4;
            })
        })




        //        var tmp = $('#guidNew-T').html();
        //        $('#guidNew').html(dot.template(tmp)(data));

        //        $('body').on('click', '.btn', function () {
        //            if (data.step <= 4) {
        //                data.get.stepCount();
        //                $('#guidNew').html(dot.template(tmp)(data));
        //            }
        //        });
        //        $('body').on('click', '.close', function () {
        //            $('.guid').remove();
        //            data.step = 4;
        //        })


    }
}


var GuidOld = function () {};
GuidOld.prototype = {
    init: function () {
        this.getData();
    },
    getTmp: function () {
        var me = this;
        $('#guidOld').load('./template/guidOld.html', function () {
            me.getData();
        })
    },
    getData: function () {
        ajaxHandle('./template/guidOld.html', '#guidOld', '#guidOld-T', './json/guidOld.json', null, function (con, tmp, data) {
            data.get = {
                stepCount: function () {
                    ++data.step;
                },
                getStep1offsetL: function () {
                    return $('.punchIn').offset().left - 90;
                },
                getStep2offsetL: function () {
                    return $('.nav').offset().left + $('.nav').width() + 70;
                }
            };
            renderHandle(con, tmp, data);
            $('body').on('click', '.btn,.punchIn', function () {
                if (data.step <= 3) {
                    data.get.stepCount();
                    renderHandle(con, tmp, data);
                }
            });
            $('body').on('click', '.close', function () {
                $('.guid,.mark').remove();
                data.step = 4;
            })

        });

    }
}


exports.GuidNew = GuidNew;
exports.GuidOld = GuidOld;
