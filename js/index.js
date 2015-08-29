//首页的轮播
$(document).ready(function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        roundLengths: true,
        initialSlide: 2,
        effect: 'coverflow',
        mousewheelControl: true,
        mousewheelReleaseOnEdges: true,
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