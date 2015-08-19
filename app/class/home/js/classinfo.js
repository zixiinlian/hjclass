var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;

var ManagerTab = function () {
    this.elem = $('.managers');
}
ManagerTab.prototype = {
    init: function () {
        this.getData();
        this.clickFn();
    },
    getData: function () {
        ajaxHandle();
        var data = [{
            title: '班主任',
            pic: '/app/class/home/images/1.jpg'
        }, {
            title: '班主任',
            pic: '/app/class/home/images/1.jpg'
        }, {
            title: '班主任',
            pic: '/app/class/home/images/1.jpg'
        }, {
            title: '班主任',
            pic: '/app/class/home/images/1.jpg'
        }, {
            title: '班主任',
            pic: '/app/class/home/images/1.jpg'
        }, {
            title: '校长',
            pic: '/app/class/home/images/1.jpg'
        }];
        renderHandle($('#managers'), $('#managers-T'), data);
    },
    clickFn: function () {
        var me = this;
        var list = this.elem.find('.list');
        var num = this.elem.find('.item').length;
        var btn = this.elem.find('.arrow');
        var rBtn = this.elem.find('.arrow.right');
        var lBtn = this.elem.find('.arrow.left');
        var count = 0;
        btn.click(function () {
            if (!list.is(':animated')) {

                if (count > 0 && count <= (num - 4) && $(this).hasClass('left')) {
                    list.animate({
                        'left': '+=66px'
                    }, function () {
                        --count;
                        me.count(count, lBtn, rBtn, num);
                    })
                } else if (count >= 0 && count < (num - 4) && $(this).hasClass('right')) {
                    list.animate({
                        'left': '-=66px'
                    }, function () {
                        ++count;
                        me.count(count, lBtn, rBtn, num);
                    })
                }
            }

        })
    },
    count: function (count, lBtn, rBtn, num) {
        if (count == 0) {
            lBtn.find('.icon').removeClass('icon-mawl');
            rBtn.find('.icon').addClass('icon-mawr');
        } else if (count > 0 && count < (num - 4)) {
            lBtn.find('.icon').addClass('icon-mawl');
            rBtn.find('.icon').addClass('icon-mawr');
        } else {
            lBtn.find('.icon').addClass('icon-mawl');
            rBtn.find('.icon').removeClass('icon-mawr');
        }
    }
}


var MyInfo = function () {
    this.mod = $('.myInfo');
    this.text = {
        can: '班级打卡',
        has: '今日已打卡'
    };
    this.btn = $('.myInfo .punchIn');
    this.xuefen = $('.myInfo .xuefen');
    this.xuebi = $('.myInfo .xuebi');
    this.text = $('.myInfo .text');
}

MyInfo.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {
        var me = this;
        ajaxHandle();

        //test;
        var data = {
            xuebi: 100,
            xuefen: 200,
            pundInState: 3, //1本版无打卡;2今日已打卡;3已打满五个班;4可以打卡;
            pic: '/app/class/home/images/1.jpg'
        }
        renderHandle($('#myInfo'), $('#myInfo-T'), data);
    }
}


//className
var ClassName = function () {

}
ClassName.prototype = {
    init: function () {
        this.getData();
    },
    getData: function () {
        ajaxHandle();

        //test;
        data = {
            className: '阿里肯定会 i 了无比纹路部分 i 礼物饿吧',
            hasClassMate: true
        };
        renderHandle($('#className'), $('#className-T'), data)
            //test

    }
}




exports.ManagerTab = ManagerTab;
exports.MyInfo = MyInfo;
exports.ClassName = ClassName;
