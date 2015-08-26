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
        var data = {
            classStatus: 'closed'
        }
        renderHandle($('#finshHandle'), $('#finshHandle-T'), data);
    }
}
var ClassmatesList = function () {}
ClassmatesList.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {
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
        renderHandle($('#classMatesList'), $('#classMatesList-T'), data);
    }
}
exports.FinshHandle = FinshHandle;
exports.ClassmatesList = ClassmatesList;
