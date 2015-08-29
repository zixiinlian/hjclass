var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;

var Task = function () {}
Task.prototype = {
    init: function () {
        this.getData();
        //        this.reSetWidth();
    },
    reSetWidth: function () {
        $('#task .slideBtn').on('click', function () {
            if (!$.cookie('isTaskWider')) {
                $(this).addClass('icon-open');
                $.cookie('isTaskWider', true);
                $('#task').addClass('wider').parent().find('>.right').hide();
            } else {
                $.cookie('isTaskWider', null);
                $(this).removeClass('icon-open');
                $('#task').removeClass('wider').parent().find('>.right').show();
            }
        });
        if ($.cookie('isTaskWider')) {
            $('#task .slideBtn').addClass('icon-open');
            $('#task').addClass('wider').parent().find('>.right').hide();
        }
    },
    getData: function () {
        var me = this;


        ajaxHandle('./template/task.html', '#task', '#task-T', './json/guidOld.json', null, function (con, tmp, data) {
            var data = {
                get: {
                    // setTaskWidth: function () {
                    //     return $.cookie('isTaskWidther');
                    // }
                }
            };

            renderHandle(con, tmp, data);
            me.reSetWidth();
        })

    }
}



exports.Task = Task;
