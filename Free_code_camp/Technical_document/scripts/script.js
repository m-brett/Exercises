function drop_down(num){
	var section = document.getElementById("sub_"+num);
	var current = section.style.display;
	current == "block" ? section.style.display = "none" : section.style.display = "block";
}