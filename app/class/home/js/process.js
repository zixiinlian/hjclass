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
        var data = {
            get: {
                rSurplus: function () {
                    return (1 - data.planLessonLearnRate) * 497;
                },
                lSurplus: function () {
                    return data.planLessonLearnRate * 497;
                },
                compare: function () {
                    var text = data.planLessonCount - data.myLearnedCount > 0 ? '落后' : '领先';
                    return text;
                },
                calcLessons: function () {
                    return Math.abs(data.planLessonCount - data.myLearnedCount);
                }
            }
        };
        //        if (data.me == data.classMate) {
        //            me.classMatePro.find('.pic').addClass('icon-processOtherRotate').css({
        //                'right': 0
        //            }).hover(function () {
        //                $(this).css('zIndex', 1);
        //            }, function () {
        //                $(this).css('zIndex', 0);
        //            });
        //        }

        renderHandle($('#learningProcess'), $('#learningProcess-T'), data);


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
