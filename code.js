// logic examples 
$(document).ready(function(){

	var showStuff = function(words){
		$("body").append(words);
	}

	var showMoreStuff = function(words){
		$("body").append("<h1>" + words + "</h1>")
	}

	var output = {
		"log":showStuff,
		"morelog":showMoreStuff
	};

	output.log("fdsHI");
	output.morelog("oh wow");

});
