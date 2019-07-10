var header=$(".navigation-panel");

window.onscroll=function(e){
	if(header.height()/2<window.scrollY){
		header.addClass("scrolled");
	}else{
		header.removeClass("scrolled");
	}

	if($("#side-panel.left-side").length>0&&$("#side-panel.left-side").is(":visible")){
		$("#side-panel.left-side").css("top",window.scrollY);
	}

}

$(window).on("load",window.onscroll);

$(".redir_line").click(function(e){
	if(e.currentTarget.dataset.place){
		var target=$("#"+e.currentTarget.dataset.place).prev();
		target.length>0 ? window.scrollTo(0,target.offset().top+target.height()) : window.scrollTo(0,0);
	}
});

$(".nav-open").click(function(){$(".nav").parent().addClass("opened")});
$(".nav-close").click(function(){$(".nav").parent().removeClass("opened")});