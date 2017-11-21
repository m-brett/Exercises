$(document).ready(function() {
	
	var rest = 5;
	var work = 25;
	var count = 25;
	
	$('#countdown').text(count);
	$('#rest_time').text(rest);
	$('#work_time').text(work);
	
	
	/* SIDE BUTTONS */
	$('#open').click(function(){
		$('#opts_cover').animate({top: 130}, 500);
	});

	$('#close').click(function(){
		$('#opts_cover').animate({top: 0}, 500);
	});
	
	
	
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
	
	
//	/* ADJUST TIME */
//	$('#work_up').click(function(){
//		// add 1 to current work time. Max out time				   
//	)};
//						
//	$('#work_down').click(function(){
//		// remove 1 to current work time. Max out time				   
//	)};
//						  
//	$('#rest_up').click(function(){
//		// add 1 to current work time. Max out time				   
//	)};
//						
//	$('#rest_down').click(function(){
//		// remove 1 to current work time. Max out time				   
//	)};
			
	
	/* WRITE TWO FUNCTIONS THAT CAN BE REPEATED? */					  
						  
						  
});