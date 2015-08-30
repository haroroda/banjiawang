//首页的轮播
$(document).ready(function() {
    var mySwiper = new Swiper('.swiper-container', {

        //横着转动页面
        direction: 'horizontal',

        //自动播放
        autoplay: 5000,
        //当手动播放后，自动播放仍不停
        autoplayDisableOnInteraction: false,

        //环形轮播
        loop : true,

        roundLengths: true,

        //进入时的页面 ：若有张图，分别为 0 1 2 3 4 ，不过如今页面有闪烁的情况，弃用
        // initialSlide: 4,

        // 页面滚动效果
        effect: 'coverflow',

        //鼠标控制
        // mousewheelControl: true,
        // mousewheelReleaseOnEdges: true,

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

    });
});

// 取得时间
getTime();
// 搜索框入住日期
$("#search_start_day").datetimepicker({
    format: 'yyyy-mm-dd',
    todayHighlight: true,
    todayBtn: "linked",
    autoclose: true,
    minView: 2,
    startDate: TODAY,
    language: 'zh-CN',
});
// 入住日期的改变导致退房日期的改变
$("#search_start_day").on('changeDate', function() {
    console.log("search_start_day change");
});
// 搜索框退房日期
$("#search_end_day").datetimepicker({
    format: 'yyyy-mm-dd',
    todayHighlight: true,
    todayBtn: "linked",
    autoclose: true,
    minView: 2,
    startDate: TOMORROW,
    language: 'zh-CN',
});