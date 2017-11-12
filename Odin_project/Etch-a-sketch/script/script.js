$(document).ready(function() {
  var size = 16; /* set default size */ 
  var squareSize = Math.floor(445/size) + "px";
	console.log(squareSize);

  for (var i=0; i<size; i++){
	  for (var j=0; j<size; j++){
		 $('#box').append("<div class='squares'></div>");
	  }
  };
	
$('.squares').css({'height': squareSize, 'width': squareSize});;

  
  /* Set size of divs*/	
 /* $('#size').on('click', function() {
    size = prompt("How many squares wide?"); 
  });*/
  
  /* fill grid using default or set size - how will this rerun each time size button is reclicked */
  /* add class to square that is hovered over - default and using color button*/
  
  /* add opacity class when button clicked */
  
  /* clear entire grid of color */  
});

