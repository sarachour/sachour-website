
var navigateTo = function(handle){
	if($(".selected#"+handle, $("#navigation")).length == 1)
		return;
	$(".navigate.selected", $("#navigation")).removeClass("selected");
	$("#"+handle, $("#navigation")).addClass("selected");

	$(".page.selected", $(".pages")).removeClass("selected").hide();
	$("#"+handle, $(".pages")).addClass("selected").fadeIn(300);
}

$(document).ready(function(){
	$("#office").html("#G730, Ray and Maria Stata Center<br>MIT, Cambridge, MA, 02139");
	$("#email").attr("href","mailto:sachour@csail.mit.edu")
		.html("sachour&#64;csail.mit.edu");
	$("#github").attr("href","http://github.com/sarachour")
		.html("github.com/sarachour");

	$(".page").hide();
	navigateTo("about");
	$(".navigate").hover(function(v){
		var id=v.target.id;
		navigateTo(id);
	})
	$(".navigate").click(function(v){
		var id=v.target.id;
		navigateTo(id);
	})
})