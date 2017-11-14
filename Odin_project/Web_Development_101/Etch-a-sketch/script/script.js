$(document).ready(function() {

/* Load Squares*/
function loadSquare(size){
	var squareSize = Math.floor(445/size) + "px";

	for (var i=0; i<size; i++){
        for (var j=0; j<size; j++){
			 $('#box').append("<div class='squares'></div>");
	    };
	 }
	
	 $('.squares').css({'height': squareSize, 'width': squareSize});
}
	
function colorHover(){
	$('.squares').mouseenter(function(){
		var colours = ["#5A2671", "#8747a3", "#c994e0", "#e8d2f2", "#250833"]
		var selected = Math.floor(Math.random()*colours.length);
		$(this).css('background',colours[selected]);
  	});
}
	
/* Default Sizing */
var size = 16;
loadSquare(size); 
	
/* Default Colour Setting */
colorHover();

	
	
/* BUTTONS */
	
/* Change Box Sizing*/	
$('#size').on('click', function() {
    var size = prompt("How many squares wide?");
	$('#box').empty();
	loadSquare(size);
	/* add clear function*/
	colorHover();
});

	
/* Change to Colour Settings */
$('#color').on('click', function(){
	colorHover();	
});
	
	
/* Change to Opacity Colour Settings */
$('#opacity').on('click', function(){
	$('.squares').mouseenter(function(){
		if ($(this).hasClass('black')){
			$(this).css({'background': 'black', 'opacity': '+=0.3'});
		}
		else {
			$(this).addClass('black');
		}
  	});
})
	

/* Clear Button */
$('#clear').on('click', function(){
	$('.squares').css('background-color', '');	
});
		   
  
});
