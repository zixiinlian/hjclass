var PopWin = function (width, heigth) {

};
PopWin.prototype = {
    init: function (html) {
        $('body').append(html);
        $('html').css('overflow', 'hidden');
        this.close();
    },
    close: function () {
        $('body').on('click', '#close', function () {
            $(this).parents('.popWin').remove();
            $('html').css('overflow', 'initial');
        })
    },
    download: function () {
        var html = '<div class="popWin">' + '<div class="inner">' + '<div class="close" id="close">&times;</div>' + '<p class="text">您还没有安装CCTalk<br/> 是否要下载并安装？</p>' + '<a href="" class="btn">下载</a>' + '</div>' + '</div>';
        this.init(html);
    },
    onlyWindows: function () {
        var html = '<div class="popWin onlyWindwos">' + '<div class="inner">' + '<p class="text">抱歉，CCTalk客户端暂时仅支持Windows系统。</p>' + '<a class="btn" id="close">关闭</a>' + '</div>' + '</div>';
        this.init(html);
    },
    notice: function () {
        var html = '<div class="popWin notice">' + '<div class="inner">' + '<div class="title">同桌通知</div>' + '<div class="close" id="close">&times;</div>' + '<p class="text">您有<span class="orange-text">30</span>条同桌通知</p>' + '<a class="btn btn-hasknow" id="close">知道了</a>' + '<a href="" class="btn">去看看</a>' + '<p class="label-line">' + '<label><input type="checkbox" class="check">一段时间内不再显示</label>' + '</p>' + '</div>' + '</div>';
        this.init(html);
    }

}



module.exports = PopWin;
