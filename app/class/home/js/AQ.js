var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;


var HotAQ = function () {};
HotAQ.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {



        ajaxHandle('./template/hotAQ.html', '#hotAQ', '#hotAQ-T', './json/guidOld.json', null, function (con, tmp, data) {
            var data = [{
                topicUrl: '/',
                questionName: '啊沙龙掉啊老师打死阿里斯顿',
                questionAnswer: 'aasjdoaisjdioasasda',
                answerCount: 99,
                usefulCount: 99
        }, {
                topicUrl: '/',
                questionName: '啊沙龙掉啊老师打死阿里斯顿',
                questionAnswer: 'aasjdoaisjdioasasda',
                answerCount: 99,
                usefulCount: 99
        }, {
                topicUrl: '/',
                questionName: '啊沙龙掉啊老师打死阿里斯顿',
                questionAnswer: 'aasjdoaisjdioasasda',
                answerCount: 99,
                usefulCount: 99
        }, {
                topicUrl: '/',
                questionName: '啊沙龙掉啊老师打死阿里斯顿',
                questionAnswer: 'aasjdoaisjdioasasda',
                answerCount: 99,
                usefulCount: 99
        }];
            renderHandle(con, tmp, data);
        })
    }
}

var Unsolve = function () {

}
Unsolve.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {


        ajaxHandle('./template/unsolve.html', '#unsolve', '#unsolve-T', './json/guidOld.json', null, function (con, tmp, data) {

            var data = [{
                topicUrl: '/',
                questionName: '啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿',
                publishTime: '1分钟前'
        }, {
                topicUrl: '/',
                questionName: '啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿',
                questionAnswer: 'aasjdoaisjdioasasda',
                publishTime: '1分钟前'
        }, {
                topicUrl: '/',
                questionName: '啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿',
                publishTime: '1分钟前'
        }, {
                topicUrl: '/',
                questionName: '啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿啊沙龙掉啊老师打死阿里斯顿',
                publishTime: '10分钟前'
        }];


            renderHandle(con, tmp, data);
        })


    }
}



exports.HotAQ = HotAQ;
exports.Unsolve = Unsolve;
