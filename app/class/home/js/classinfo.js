//console.log('classinfo');
//var ManagerTab = function () {
//    this.elem = $('.managers');
//}
//ManagerTab.prototype = {
//        init: function () {
//            this.initWidth();
//            this.clickFn();
//        },
//        initWidth: function () {
//            var list = this.elem.find('.list');
//            var item = list.find('>.item');
//            var num = item.length;
//            list.width(66 * num);
//
//        },
//        clickFn: function () {
//            var me = this;
//            var list = this.elem.find('.list');
//            var num = this.elem.find('.item').length;
//            var btn = this.elem.find('.arrow');
//            var rBtn = this.elem.find('.arrow.right');
//            var lBtn = this.elem.find('.arrow.left');
//            var count = 0;
//            if (num && num <= 4) {
//                btn.css('display', 'none');
//            } else {
//                rBtn.find('.icon').addClass('icon-mawr');
//            }
//            btn.click(function () {
//                if (!list.is(':animated')) {
//
//                    if (count > 0 && count <= (num - 4) && $(this).hasClass('left')) {
//                        list.animate({
//                            'left': '+=66px'
//                        }, function () {
//                            --count;
//                            me.count(count, lBtn, rBtn, num);
//                        })
//                    } else if (count >= 0 && count < (num - 4) && $(this).hasClass('right')) {
//                        list.animate({
//                            'left': '-=66px'
//                        }, function () {
//                            ++count;
//                            me.count(count, lBtn, rBtn, num);
//                        })
//                    }
//                }
//
//            })
//        },
//        count: function (count, lBtn, rBtn, num) {
//            if (count == 0) {
//                lBtn.find('.icon').removeClass('icon-mawl');
//                rBtn.find('.icon').addClass('icon-mawr');
//            } else if (count > 0 && count < (num - 4)) {
//                lBtn.find('.icon').addClass('icon-mawl');
//                rBtn.find('.icon').addClass('icon-mawr');
//            } else {
//                lBtn.find('.icon').addClass('icon-mawl');
//                rBtn.find('.icon').removeClass('icon-mawr');
//            }
//        }
//    }
//var path = require('path');
//var repath = path.relative('/app/class/home/js/', '/vendor/avalon.min.js');
//require(repath);
//console.log(__dirname);
//avalon.config({
//    loader: false
//})

//require(['mmAnimate'], function () {
//    console.log('animate')
//});


var className = (function () {
    avalon.ready(function () {
        avalon.define({
            $id: 'className',
            className: '沪江精英商务英语4级[外教口语1V1 6月班]',
            classmatesMeet: 'ALIHDOQW'
        })
    })
})()

var myInfo = (function () {
    avalon.ready(function () {
        var vm = avalon.define({
            $id: 'myInfo',
            me: {
                xuebi: 36,
                xuefen: 100,
                pic: 'images/1.jpg',
                canPunchIn: true
            },
            text: '班级打卡',
            cursor: 'pointer ',
            setTipsPosition: function () {
                if ($(window).width() > 1200 && $(window).width() < 1300) {
                    return 20
                } else {
                    return 0
                }
            },
            punchIn: function () {
                //                $.ajax({
                //                    url: '',
                //                    data: ''
                //                })
                vm.me.canPunchIn = false;
                vm.text = '今日已打卡';
                vm.cursor = 'default';

            }
        })
    })
})()





var ManagerTab = (function () {
    avalon.ready(function () {
        var vm = avalon.define({
            $id: 'managers',
            list: [{
                img: 'images/1.jpg',
                title: '班主任',
                link: ''
    }, {
                img: 'images/1.jpg',
                title: '班主任',
                link: ''
    }, {
                img: 'images/1.jpg',
                title: '班主任',
                link: ''
    }, {
                img: 'images/1.jpg',
                title: '班主任',
                link: ''
    }, {
                img: 'images/1.jpg',
                title: '班主任',
                link: ''
    }, {
                img: 'images/1.jpg',
                title: '班主任',
                link: ''
    }],
            count: 0,
            len: function () {
                return vm.list.length;
            },
            isAnimated: false,
            listEl: document.getElementById('managers-list'),
            moveL: function () {
                if (!vm.isAnimated && vm.count > 0 && vm.count <= (vm.len() - 4)) {
                    vm.isAnimated = true;
                    $(vm.listEl).animate({
                            'left': '+=66px'
                        },
                        function () {
                            --vm.count;
                            vm.isAnimated = false;
                        })
                }
            },
            moveR: function () {
                if (!vm.isAnimated && vm.count >= 0 && vm.count < (vm.len() - 4)) {
                    vm.isAnimated = true;
                    $(vm.listEl).animate({
                            'left': '-=66px'
                        },
                        function () {
                            ++vm.count;
                            vm.isAnimated = false;
                        })
                }
            }
        })

        avalon.scan();
    })
})()



exports.ManagerTab = ManagerTab;
exports.className = className;
//module.exports = ManagerTab;
