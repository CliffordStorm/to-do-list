$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
});

$("ul").on("click", "span", function(event){

$(this).parent().fadeOut(500, function(){
	$(this).remove();
});
event.stopPropagation();
});

$(".input").keypress(function(event){
	if(event.which === 13) {
		var textInput = $(this).val(); 
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + textInput + "</li>");
		$("li").toggleClass("listColor");
		$(".input").val("");
	}
});

$("span").on("mouseenter", function(){
	$(this).slideUp(500);
});

$("span").on("mouseleave", function(){
	$(this).slideDown(500);
});


$(".fa-plus").click(function(){
	$(".input").fadeToggle(500);
});