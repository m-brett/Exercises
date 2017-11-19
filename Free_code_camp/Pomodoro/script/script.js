$(document).ready(function() {

	/* SIDE BUTTONS */
	$('#open').click(function(){
		$('#opts_cover').animate({top: 130}, 500);
	});

	$('#close').click(function(){
		$('#opts_cover').animate({top: 0}, 500);
	});
	
	
	var startTime = 25
	
	/* MAIN CONTROLS */
	$('#start').click(function(){
		/* if different start time isn't set, countdown from 25 */
		/* At 0, change time to five minutes and text to rest */
		/* Repeat */
	});
	
	$('#pause').click(function(){
		/* Pause Timer */
	});
	
	$('stop').click(function(){
		/* Rest time to 25 */
	});
	
	
	

	
});