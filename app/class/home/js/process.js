var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;


var Process = function () {
    //    this.mod = $('.learningProcess');
    //    this.myPro = $('.learningProcess').find('.me');
    //    this.classMatePro = $('.learningProcess').find('.classMate');
};
Process.prototype = {
    init: function () {
        this.getData();
        this.showPlan();
    },
    showPlan: function () {
        $('#learningProcess .showPlanEl').hover(function () {
            $('#learningProcess .plan').show();
        }, function () {
            // setTimeout(function(){
            $('#learningProcess .plan').hide();
            // },1000)
        })

    },
    getData: function () {
        var me = this;
        //        ajaxHandle();

        //test;

        //        if (data.me == data.classMate) {
        //            me.classMatePro.find('.pic').addClass('icon-processOtherRotate').css({
        //                'right': 0
        //            }).hover(function () {
        //                $(this).css('zIndex', 1);
        //            }, function () {
        //                $(this).css('zIndex', 0);
        //            });
        //        }


        ajaxHandle('./template/lessonType.html', '#lessonType', '#lessonType-T', './json/guidOld.json', null, function (con, tmp, data) {
            var data = {
                classType: 'mixed',
                hasCt: false,
                classStatus: 'active',
                myLearnCount: 10,
                totalLessonCount: 100,
                planLessonLearnRate: .9,
                myLessonLearnRate: 0.6,
                avatar: '/app/class/home/images/1.jpg',
                deskmateLessonLearnRate: 0.61,
                hasDeskmate: true,
                deskmateAvatar: '/app/class/home/images/1.jpg',
                beginDate: '2015.1.1',
                end: '2015.8.1',
                learningUrl: null,
                planLessonCount: 5,
                myLearnedCount: 70,
                userName: 'edson',
                myMark: 10,
                myTaskCount: 100,
                deskmateMrak: 20,
                deskmateTaskCount: 200,
                isShowDiploma: true,
                get: {
                    rSurplus: function () {
                        return (1 - data.planLessonLearnRate) * 497;
                    },
                    lSurplus: function () {
                        return data.planLessonLearnRate * 497;
                    },
                    compare: function () {
                        var text = data.planLessonCount - data.myLearnedCount > 0 ? '落后' : '领先';
                        return text;
                    },
                    calcLessons: function () {
                        return Math.abs(data.planLessonCount - data.myLearnedCount);
                    },
                    deskmatePic: function () {
                        if (data.hasDeskmate) {
                            if (data.myLessonLearnRate != data.deskmateLessonLearnRate) {
                                return 'icon-processOther';
                            } else {
                                if (data.myLessonLearnRate == 0) {
                                    return 'icon-processOtherRotateR';
                                } else {
                                    return 'icon-processOtherRotate';
                                }
                            }
                        } else {
                            if (data.myLessonLearnRate == 0) {
                                return 'icon-processNoneRotate';
                            } else {
                                return 'icon-processNone';
                            }
                        }
                    }
                }
            };

            renderHandle(con, tmp, data);

            $('#learningProcess .showPlanEl').hover(function () {
                $(this).next().show();
            }, function () {
                $(this).next().hide();
            })
        })

        //test;
    }

}




exports.Process = Process;
