var i = 0;
var timer;
$('.swiper-container .swiper-next').on('click',function(){
	i++;
	if(i>2){
		i=0;
	}
		$('.swiper-container .swiper-item').hide().css({'opacity':0});
		$('.swiper-container .swiper-indicators li').removeClass('active');
		$('.swiper-container .swiper-item').eq(i).show().css({'transition':'all 1s','opacity':'1'});
		$('.swiper-container .swiper-indicators li').eq(i).addClass('active');
})
$('.swiper-container .swiper-prev').on('click',function(){
	i--;
	if(i<0){
		i=2;
	}
		$('.swiper-container .swiper-item').hide().css({'opacity':0});
		$('.swiper-container .swiper-indicators li').removeClass('active');
		$('.swiper-container .swiper-item').eq(i).show().css({'transition':'all 1s','opacity':'1'});
		$('.swiper-container .swiper-indicators li').eq(i).addClass('active');
})
function autoPlay(){
	timer = setInterval(function () {
		i++;
		if(i>2){
			i=0;
		}
		console.log(i)
		$('.swiper-container .swiper-item').hide().css({'opacity':0});
		$('.swiper-container .swiper-indicators li').removeClass('active');
		$('.swiper-container .swiper-item').eq(i).show().css({'transition':'all 1s','opacity':'1'});
		$('.swiper-container .swiper-indicators li').eq(i).addClass('active');
	},3000)
}
autoPlay();
$('.swiper-container').on('mouseenter',function(){
	clearInterval(timer)
}).on('mouseleave',function(){
	autoPlay()
})