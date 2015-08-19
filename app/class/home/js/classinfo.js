var ManagerTab = function () {
    this.elem = $('.managers');
}
ManagerTab.prototype = {
    init: function () {
        this.initWidth();
        this.clickFn();
    },
    initWidth: function () {
        var list = this.elem.find('.list');
        var item = list.find('>.item');
        var num = item.length;
        list.width(66 * num);

    },
    clickFn: function () {
        var me = this;
        var list = this.elem.find('.list');
        var num = this.elem.find('.item').length;
        var btn = this.elem.find('.arrow');
        var rBtn = this.elem.find('.arrow.right');
        var lBtn = this.elem.find('.arrow.left');
        var count = 0;
        if (num && num <= 4) {
            btn.css('display', 'none');
        } else {
            rBtn.find('.icon').addClass('icon-mawr');
        }
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
        this.handle();
    },
    getData: function () {
        var me = this;
        $.ajax({
            url: '',
            data: ''
        }).done(function (data) {
            data = $.type(data) == 'string' ? $.parseJSON(data) : data;
            data = data.AjaxResponse;
            if (data) {
                me.text.text('今日已打卡');
                me.xuebi.text();
                me.xuefen.text();
                //...
            }
        })
    },
    handle: function () {
        var me = this;
        me.btn.click(function () {
            me.text.text('打卡中...');
            me.getData()
        })
    }
}



exports.ManagerTab = ManagerTab;
//exports.MyInfo = MyInfo;

//exports.className = className;
//module.exports = ManagerTab;
