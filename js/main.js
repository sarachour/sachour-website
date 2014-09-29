
var travel = [
	{
		id:0,
		name:"Accomplice",
		place:"Manhattan,NY",
		description:"An interactive play that revolves around helping the mafia where attendees run through New York city doing errands for incognito actors.",

	},
	{
		id:1,
		name:"Sleep No More",
		place:"Manhattan,NY",
		description:"A Bioshock-esque retelling of MacBeth in 1950s america. Masked attendees wander through a hotel, following whatever interests them.",

	},
	{
		id:2,
		name:"mmuseumm",
		place:"Manhattan,NY",
		description:"A tiny museum in a freight elevator in a random alleyway. Filled with a lot of quirky exhibits - super fun.",

	},
	{
		id:3,
		name:"Prohibition Bakery",
		place:"Manhattan,NY",
		description:"cocktails and mixed drinks in alcoholic cupcake form.",

	}


]

var populateTravel = function(){
	var parent = $("#travel");
	for(var i=0; i < travel.length; i++){
		var e = travel[i];
		console.log(e);
		var elem = $("<div/>").addClass("travel entry");
		var title = $("<span/>").addClass("travel title").html(e.name);
		var place = $("<span/>").addClass("travel place").html(e.place);
		var desc = $("<span/>").addClass("travel description").html(e.description);
		elem.append(title, place, desc);
		parent.append(elem);
	}

}

var navigateTo = function(handle){
	if($(".selected#"+handle, $("#navigation")).length == 1)
		return;
	$(".navigate.selected", $("#navigation")).removeClass("selected");
	$("#"+handle, $("#navigation")).addClass("selected");

	$(".page.selected", $(".pages")).removeClass("selected").hide();
	$("#"+handle, $(".pages")).addClass("selected").fadeIn(300);
}

$(document).ready(function(){
	$("#resume").attr("href", "resources/resume.pdf").html("resume");
	$("#office").html("#G730, Ray and Maria Stata Center<br>MIT, Cambridge, MA, 02139");
	$("#email").attr("href","mailto:sachour@csail.mit.edu")
		.html("email");
	$("#github").attr("href","http://github.com/sarachour")
		.html("github");

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
	populateTravel();
})