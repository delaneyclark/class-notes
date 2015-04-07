// logic examples 
$(document).ready(function(){
	$.getJSON("http://cooper-union-weather-proxy.herokuapp.com/weather/NY/Manhattan", function(response) {

		var weather = response.current_observation.feelslike_f;
		var condition = response.current_observation.weather.toLowerCase();

		if (
			(condition == "clear") || (condition == "snow") || (condition == "fog")) {
				console.log("moist airs");
		}

		var rainyConditions = ["rain", "snow", "fog"];

		if((rainyConditions.indexOf(condition) >= 0) && (weather > 40)){
			console.log("its rainy and over fourty degrees")
		}

		if ((weather < 50) && (weather > 32) || (weather < 0)) {
			console.log("it is ok")
		} else {
			console.log("its ah")
		}	
	});

})