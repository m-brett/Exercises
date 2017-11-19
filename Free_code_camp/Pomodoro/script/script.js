$(document).ready(function() {


$('#open').click(function(){
	$('#opts_cover').animate({top: 130}, 500);
});
	
$('#close').click(function(){
	$('#opts_cover').animate({top: 0}, 500);
});

	
});