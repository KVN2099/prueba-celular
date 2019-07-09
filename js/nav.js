$(function(){
         $('#menu-trigger').on('click',function(){
            $('body').toggleClass('menu-active');
         });
    });

    $(document).ready(function(){
    	$(".hamburger").click(function(){
    		$(this).toggleClass("open");
    	});
    });
