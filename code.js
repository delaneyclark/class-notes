// logic examples 
$(document).ready(function(){



	var soyIt = function(tag, statement) {
		if (tag === "img") {
			$("body").append("<img src=" + statement + "/>")
		} else {
			var openTag = "<" + tag + ">";
			var closeTag = "</" + tag + ">";
			var output = openTag + statement + closeTag;
		}	
		$("body").append(output);
	}

	soyIt("h1", "this is 1");
	soyIt("h2", "this is 2");
	soyIt("img", "http://farm8.staticflickr.com/7341/9721390539_97c6cc53e1.jpg");

});
