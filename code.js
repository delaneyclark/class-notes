// logic examples 
$(document).ready(function(){
	$.getJSON("http://cooper-union-weather-proxy.herokuapp.com/weather/NY/Manhattan", function(response) {

		var weather = response.current_observation.feelslike_f;

		if ((weather < 50) && (weather > 32) || (weather < 0)) {
			console.log("it is ok")
		} else {
			console.log("its ah")
		}	
	});

})