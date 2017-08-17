/**
 * Created by createc on 2017/7/17.
 */

var swiperV = new Swiper('.swiper-container-v', {
    pagination: '.swiper-pagination-v',
    noSwipingClass : 'stop-swiping',
    paginationClickable: true,
    slidesPerView: 'auto',
});

var swiperC = new Swiper('.swiper-container-c', {
    pagination: '.swiper-pagination-c',
    paginationClickable: true,
    loop:true,
    onSlideChangeStart: function(swiperC){
        if(swiperC.activeIndex!=1){
            $(".icon").eq(2).show();
        }

    }
});

var swiperH = new Swiper('.swiper-container-h', {
    pagination: '.swiper-pagination-h',
    paginationClickable: true,
    freeMode : true,
    direction: 'vertical',
    slidesPerView: 'auto',
    onSlideChangeStart: function(swiperH){
        if(swiperH.activeIndex==4){
            $(".icon").eq(2).hide();
        }else{
            $(".icon").eq(2).show();
        }
    }
});
var width = swiperV.width;
var height = swiperV.height;
var height1 = 396*width/1080;
var height2 = 829*width/908;
var height3 = 823*width/908;


$(".frool1").height(height1);
$(".frool2").height(height2);
$(".frool3").height(height3);

var btn_style = $(".btn-style").eq(0).width();
var left1 = width*0.17;
var top1 = parseInt(height*0.764)+btn_style-62;

$(".btn").css({left:left1+'px',top:top1+"px"});
$(".btn").click(function () {
    $(".icon").show();
    swiperV.slideTo(1, 1000, false);//切换到第一个slide，速度为1秒
})
