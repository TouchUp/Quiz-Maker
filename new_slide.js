function createNewSlide() {
	var new_slide = document.createElement('div');
	document.body.appendChild(new_slide);
	new_slide.className = 'slide';
	/** this slide has a unique ID **/
	//new_slide.id = 
	new_slide.innerHTML += '<form>ID:</form>';
	//Add new button to slide
	new_slide.innerHTML += '<button onclick = "createNewOption()">Create New Option </button>';
}

function createNewOption(){
	var new_option = document.createElement('div');
	new_slide.appendChild(new_option);
	new_option.innerHTML += '<h2>Option 1</h2>';	
}