$(document).ready(function(){
    $(".drop-down").hover(function() {
		$('.sub-menu').addClass('display-on');
    });
    $(".drop-down").mouseleave(function() {
		$('.sub-menu').removeClass('display-on');
    });	
});
