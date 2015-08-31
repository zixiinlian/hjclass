var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;

var FinshHandle = function () {

}
FinshHandle.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {


        ajaxHandle('./template/finshHandle.html', '#finshHandle', '#finshHandle-T', './json/guidOld.json', null, function (con, tmp, data) {
            var data = {
                classStatus: 'closed'
            }


            renderHandle(con, tmp, data);
        })

    }
}
var ClassmatesList = function () {}
ClassmatesList.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {




        ajaxHandle('./template/classMatesList.html', '#classMatesList', '#classMatesList-T', './json/guidOld.json', null, function (con, tmp, data) {
            var data = [{
                avatorUrl: '/app/class/home/images/1.jpg',
                userName: '1号'
}, {
                avatorUrl: '/app/class/home/images/1.jpg',
                userName: '1号'
}, {
                avatorUrl: '/app/class/home/images/1.jpg',
                userName: '1号'
}, {
                avatorUrl: '/app/class/home/images/1.jpg',
                userName: '1号'
}, {
                avatorUrl: '/app/class/home/images/1.jpg',
                userName: '1号'
}, {
                avatorUrl: '/app/class/home/images/1.jpg',
                userName: '1号'
}, {
                avatorUrl: '/app/class/home/images/1.jpg',
                userName: '1号'
}, {
                avatorUrl: '/app/class/home/images/1.jpg',
                userName: '1号'
}, {
                avatorUrl: '/app/class/home/images/1.jpg',
                userName: '9号'
}];
            renderHandle(con, tmp, data);
            $('#classMatesList').on('click', '#refresh', function () {
                renderHandle(con, tmp, data);
            })

        })

    }
}
exports.FinshHandle = FinshHandle;
exports.ClassmatesList = ClassmatesList;
