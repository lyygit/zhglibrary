$(function() {
    // 响应式布局

    // deicePixelRatio ：设备像素
    var scale = 1 / devicePixelRatio;
    //设置meta 压缩界面 模拟设备的高分辨率
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    //debounce 为节流函数，自己实现。或者引入underscoure即可。
    var debounce = function(idle, action) {
        var last
        return function() {
            var ctx = this,
                args = arguments
            clearTimeout(last)
            last = setTimeout(function() {
                action.apply(ctx, args)
            }, idle)
        }
    }

    var reSize = debounce(function() {
        var deviceWidth = document.documentElement.clientWidth > 1300 ? 1300 : document.documentElement.clientWidth;
        //按照640像素下字体为100px的标准来，得到一个字体缩放比例值 6.4
        document.documentElement.style.fontSize = (deviceWidth / 6.4) + 'px';
    }, 50);
    window.onresize = reSize;
    // 响应式布局

    var deviceH = document.documentElement.clientHeight;
    var bannerH = deviceH*0.8;
    $("#banner").css("height",""+bannerH+"px");
});
