//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "01 mar 2021 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	