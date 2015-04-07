// logic examples 
$(document).ready(function(){

	var showStuff = function(words){
		$("body").append(words);
	}

	var output = {
		"log":showStuff
	};

	output.log("hihi hi HIHI")

});
