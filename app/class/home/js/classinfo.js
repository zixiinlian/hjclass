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
                            count = count - 1;
                            me.count(count, lBtn, rBtn, num);
                        })
                    } else if (count >= 0 && count < (num - 4) && $(this).hasClass('right')) {
                        list.animate({
                            'left': '-=66px'
                        }, function () {
                            count = count + 1;
                            me.count(count, lBtn, rBtn, num);
                        })
                    }
                }

            })
        },
        count: function (count, lBtn, rBtn, num) {
            if (count == 0) {
                lBtn.find('.icon').removeClass('icon-mawl');
            } else if (count > 0 && count < (num - 4)) {
                lBtn.find('.icon').addClass('icon-mawl');
                rBtn.find('.icon').addClass('icon-mawr');
            } else {
                rBtn.find('.icon').removeClass('icon-mawr');
            }
        }
    }
    //

module.exports = ManagerTab;
