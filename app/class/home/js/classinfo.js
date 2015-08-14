//console.log('classinfo');
var ManagerTab = function () {
    this.elem = $('.managers');
}
ManagerTab.prototype = {
        init: function () {
            this.initWidth();
            this.clickFn();
        },
        initWidth: function () {
            //初始化ul宽度 = 66 * num;
            var list = this.elem.find('.list');
            var item = list.find('>.item');
            var num = item.length;
            list.width(66 * num);

        },
        clickFn: function () {
            var list = this.elem.find('.list');
            var num = this.elem.find('.item').length;
            var btn = this.elem.find('.arrow');
            var rBtn = this.elem.find('.arrow.right');
            var leftNum = btn.offset().left;
            var count = 0;
            if (num && num <= 4) {
                btn.css('display', 'none');
            } else {
                rBtn.find('.icon').addClass('icon-mawr');
            }
            btn.click(function () {
                if (Math.abs(count) < num && !list.is(':animated')) {
                    console.log(count)
                    if ($(this).hasClass('left')) {
                        list.animate({
                            'left': '+=66px'
                        }, function () {
                            count = count - 1
                        })
                    } else {
                        list.animate({
                            'left': '-=66px'
                        }, function () {
                            count = count + 1
                        })
                    }
                }

            })
        },
        tabLeft: function () {
            var me = this;
            var list = this.elem.find('.list');

        },
        tabRight: function () {

        }
    }
    //

module.exports = ManagerTab;
