// logic examples 
$(document).ready(function(){



	var soyIt = function(tag, statement) {
		var openTag = "<" + tag + ">";
		var closeTag = "</" + tag + ">";
		var output = openTag + statement + closeTag;

		$("body").append(output)

	}

	soyIt("h1", "this is 1"),
	soyIt("h2", "this is 2")

});
