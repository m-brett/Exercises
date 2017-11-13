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
	$(".squares").mouseenter(function(){
		$(this).css("background","#02baff");
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
	colorHover();
});

/* Change to Colour Settings */
$('#color').on('click', function(){
  colorHover();
});	
	
	
/* Clear Button */

  /* add class to square that is hovered over - default and using color button - uses multiple colours*/
  
  /* add opacity class when button clicked - adds to the opacity each time you hover over the square */
  
  /* clear entire grid of color */  
});

/*
  4. Set up a hover effect so it changes the color of the square when your mouse passes over it, leaving a (pixelated) trail through your grid like a pen would.
  5. What happens when you hover? Well, you're hovering, you need to enter the div with your mouse and you need to leave the div. Any of those events should be a useful place to start.
  6. There are again several ways to change the color -- adding a new class (addClass()), changing that div's background color individually, etc.
  7.Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) and now you've got a new sketch pad..
  8. Why is it so slow?? Remember that when you call a jQuery selector like $(".square"), it actually returns you ALL the elements that fit the description. So if you're doing those types of operations hundreds of times inside a loop, it can get very time consuming... try pulling those outside your loops.
  9. Instead of just changing the color of your grid from black to white (for example), have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it, so only after 10 passes is the square completely black. */
