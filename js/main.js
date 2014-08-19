
var navigateTo = function(handle){
	if($(".selected#"+handle, $("#navigation")).length == 1)
		return;
	$(".navigate.selected", $("#navigation")).removeClass("selected");
	$("#"+handle, $("#navigation")).addClass("selected");

	var prev_sel = $(".page.selected", $(".pages"));
	if(prev_sel.length == 1){
		prev_sel.removeClass("selected").fadeOut(300);
		$("#"+handle, $(".pages")).addClass("selected").fadeIn(600);
	}
	else
		$("#"+handle, $(".pages")).addClass("selected").fadeIn(600);
}

$(document).ready(function(){
	$("#office").html("#G730, Ray and Maria Stata Center<br>MIT, Cambridge, MA");
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