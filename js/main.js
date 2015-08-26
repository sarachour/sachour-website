
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var populateTravel = function(){
	var parent = $("#travel");
	for(var i=0; i < travel.length; i++){
		var e = travel[i];
		var elem = $("<div/>").addClass("travel entry");
		var title = $("<span/>").addClass("travel title").html(e.name);
		var place = $("<span/>").addClass("travel place").html(e.place);
		var desc = $("<span/>").addClass("travel description").html(e.description);
		elem.append(title, place, desc);
		parent.append(elem);
	}

}



var get_authstr = function(auths){
	var author_str = "";
	for(var j=0; j < auths.length; j++){
		var auth = auths[j];

		if(j < auths.length-2) 
			var delim = ", "
		else if(j == auths.length-2) 
			var delim = " and "
		else 
			var delim = "";

		if(auth == "Sara Achour"){
			author_str += "<u>"+auth+"</u>"+delim
		}
		else{
			author_str += auth+delim
		}
	}
	return author_str;
}

var load_pubs = function(){
	var cntr = $("#pub_cont");
	var tmpl = $("#pub_tmpl");

	
	for(var i=0; i < PUBS.length; i++){
		var vl = PUBS[i];
		var el = tmpl.clone();
		var date = new Date(vl.date);
		$("#title",el).html(vl.title);
		$("#authors",el).html(get_authstr(vl.authors));
		if(vl.kind == "conf"){
			$("#conf",el).html(vl.conf);
		}
		else if(vl.kind == "tr") {
			$("#conf",el).html("Technical Report");
		}
		else if(vl.kind == "thesis") {
			$("#conf",el).html("Thesis");
		}
		$("#date",el).html(monthNames[date.getMonth()] +" "+ date.getFullYear());
		if(vl.url != "" && vl.url != undefined){
			$("#link",el).attr("href",vl.url)
		}
		else{
			$("#link",el).attr("href","")
				.html("paper unavailable")
				.css("pointer-events","none")
				.css("color","grey")
		}
		if(vl.artifact != "" && vl.artifact != undefined){
			$("#artifact",el).attr("href",vl.artifact)
		}
		else{
			$("#artifact",el).attr("href","")
				.html("no artifact")
				.css("pointer-events","none")
				.css("color","grey")
		}
		cntr.append(el)
	}
	tmpl.remove();

}
var load_news = function(){
	var cntr = $("#news_cont");
	var tmpl = $("#news_tmpl");

	for(var i=0; i < NEWS.length; i++){
		var vl = NEWS[i];
		var el = tmpl.clone();
		var date = new Date(vl.date);
		$("#title",el).html(vl.title);
		$("#desc",el).html(vl.desc);
		$("#date",el).html(date.toDateString());
		cntr.append(el)
	}
	tmpl.remove();
}

var load_research_summaries = function(){
	var cntr = $("#research_summ_cont");
	var tmpl = $("#research_summ_tmpl");

	for(var i=0; i < RESEARCH.length; i++){
		var vl = RESEARCH[i];
		if(vl.show_summary == true){
			var el = tmpl.clone();
			var startdate = new Date(vl.startdate);
			var enddate = new Date(vl.enddate);
			$("#title",el).html(vl.title);
			$("#desc",el).html(vl.desc);
			$("#icon",el).attr("src",vl.icon);
			$("#date",el).html(startdate.getFullYear()+"-"+enddate.getFullYear());
			cntr.append(el)
		}
	}
	tmpl.remove();
}

var load_research = function(){
	var cntr = $("#research_cont");
	var tmpl = $("#research_tmpl");

	for(var i=0; i < RESEARCH.length; i++){
		var vl = RESEARCH[i];
		var el = tmpl.clone();
		var startdate = new Date(vl.startdate);
		var enddate = new Date(vl.enddate);
		$("#title",el).html(vl.title);
		$("#desc",el).html(vl.desc);
		$("#icon",el).attr("src",vl.icon);
		$("#date",el).html(startdate.getFullYear()+"-"+enddate.getFullYear());
		cntr.append(el)
	}
	tmpl.remove();
}

var load_aboutme = function(){
	$("#aboutme").html(ABOUTME);
}
var load_links = function(){
	$("#resume").attr("href", "resources/resume.pdf").html("resume");
	$("#office").html("#G730, Ray and Maria Stata Center<br>MIT, Cambridge, MA, 02139");
	$("#email").attr("href","mailto:sachour@csail.mit.edu")
		.html("email");
	$("#github").attr("href","http://github.com/sarachour")
		.html("github");

}
var load_industry = function(){
	var cntr = $("#industry_cont");
	var tmpl = $("#industry_tmpl");

	for(var i=0; i < WORK.length; i++){
		var vl = WORK[i];
		var el = tmpl.clone();
		var startdate = new Date(vl.startdate);
		var enddate = new Date(vl.enddate);
		$("#title",el).html(vl.title);
		$("#desc",el).html(vl.desc);
		$("#date",el).html(startdate.getFullYear()+"-"+enddate.getFullYear());
		cntr.append(el)
	}
	tmpl.remove();
}

var load_sideproj = function(){
	var cntr = $("#side_cont");
	var tmpl = $("#side_tmpl");

	for(var i=0; i < SIDEPROJ.length; i++){
		var vl = SIDEPROJ[i];
		var el = tmpl.clone();
		$("#title",el).html(vl.title);
		$("#desc",el).html(vl.desc);
		$("#icon",el).attr("src",vl.icon);
		cntr.append(el)
	}
	tmpl.remove();
}

//statcounter

var load_personal = function(){
	var cntr = $("#pers_cont");
	var tmpl = $("#pers_tmpl");

	for(var i=0; i < HOBBIES.length; i++){
		var vl = HOBBIES[i];
		var el = tmpl.clone();
		$("#title",el).html(vl.title);
		$("#desc",el).html(vl.desc);
		$("#icon",el).attr("src",vl.icon);
		cntr.append(el)
	}
	tmpl.remove();
}
var load_all = function(){
	load_links();
	load_aboutme();
	load_news();
	load_pubs();
	load_research_summaries();
	load_research();
	load_industry();
	load_sideproj();
	load_personal();
}

var navigateTo = function(handle){
	if($(".selected#"+handle, $("#navigation")).length == 1)
		return;

	$(".navigate", $("#navigation")).addClass("unselected").removeClass("selected");
	$("#"+handle, $("#navigation")).addClass("selected").removeClass("unselected");

	$(".page.selected", $(".pages")).removeClass("selected").hide();
	$("#"+handle, $(".pages")).addClass("selected").fadeIn(300);
}


$(document).ready(function(){
	
	$(".page").hide();
	navigateTo("about");
	$(".navigate").click(function(v){
		var id=v.target.id;
		navigateTo(id);
	})
	load_all();
})