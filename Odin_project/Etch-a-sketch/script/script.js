$(document).ready(function() {
  var size = 16;
  loadSquare(size); 


function loadSquare(size){
	var squareSize = Math.floor(445/size) + "px";

	for (var i=0; i<size; i++){
        for (var j=0; j<size; j++){
			 $('#box').append("<div class='squares'></div>");
	    };
	 }

	 $('.squares').css({'height': squareSize, 'width': squareSize});
}
	
$('#size').on('click', function() {
    var size = prompt("How many squares wide?");
	$('#box').empty();
	loadSquare(size);
});

  
  /* fill grid using default or set size - how will this rerun each time size button is reclicked */
  /* add class to square that is hovered over - default and using color button*/
  
  /* add opacity class when button clicked */
  
  /* clear entire grid of color */  
});

