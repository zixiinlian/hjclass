var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;


var ClassDiscussion = function () {};
ClassDiscussion.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {



        ajaxHandle('./template/classmateMeeting.html', '#classmateMeeting', '#classmateMeeting-T', './json/guidOld.json', null, function (con, tmp, data) {

            var data = [{
                topicUrl: '/',
                topicName: '啊沙龙掉啊老师打死阿里斯顿',
                commentCount: 99,
                likeCount: 99,
                topicType: 'Top'

        }, {
                topicUrl: '/',
                topicName: '啊沙龙掉啊老师打死阿里斯顿',
                commentCount: 99,
                likeCount: 99,
                topicType: 'Best'

        }, {
                topicUrl: '/',
                topicName: '啊沙龙掉啊老师打死阿里斯顿',
                commentCount: 99,
                likeCount: 99,
                topicType: 'default'

        }, {
                topicUrl: '/',
                topicName: '啊沙龙掉啊老师打死阿里斯顿',
                commentCount: 99,
                likeCount: 99,
                topicType: 'default'

        }, {
                topicUrl: '/',
                topicName: '啊沙龙掉啊老师打死阿里斯顿',
                commentCount: 99,
                likeCount: 99,
                topicType: 'default'

        }, {
                topicUrl: '/',
                topicName: '啊沙龙掉啊老师打死阿里斯顿',
                commentCount: 99,
                likeCount: 99,
                topicType: 'default'

        }, {
                topicUrl: '/',
                topicName: '啊沙龙掉啊老师打死阿里斯顿',
                commentCount: 99,
                likeCount: 99,
                topicType: 'default'

        }];

            renderHandle(con, tmp, data);

        })
    }
}

exports.ClassDiscussion = ClassDiscussion;
