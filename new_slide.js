var counter = 0;
var slide_array = [];

function createNewSlide(no) {
	for (i = 0; i < no; i++) {
		var new_slide = document.createElement('div');
		document.getElementById('slide_list').appendChild(new_slide);
		new_slide.className = 'slide';
		/** this slide has a unique ID **/
		new_slide.id = "slide_" + counter;

		console.log(new_slide.id);
		new_slide.innerHTML += "<form>ID: " +new_slide.id + "<br> Links to: <input type = 'number'></input><br>Body Text: <input type = 'text'></input></form>";
		//Add new button to slide
		new_slide.innerHTML += '<button onclick = "createNewOption('+counter+')">Create New Option </button>';

		counter++;		
	}
}

function createNewOption(id){
	var new_option = document.createElement('div');
	var slide_selected = document.getElementById('slide_'+id);
	slide_selected.appendChild(new_option);
	new_option.innerHTML += '<h2>Option</h2>';
	new_option.innerHTML += '<form><select><option value = "img">Image</option><option value = "text">Text</option><option value = "code">Code</option></select><input type = "text"></input></form>';
}