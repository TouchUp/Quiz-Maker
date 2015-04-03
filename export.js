function Export(filename) {

	var content = generateContent();

	var pom = document.createElement('a');
	pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
	pom.setAttribute('download', filename);	

	pom.style.display = 'none';
	document.body.appendChild(pom);

	pom.click();

	document.body.removeChild(pom);
}


function generateContent(){
	//This function actually generates the CSS
	var CSS = '';
	//Background image 
	var bg = document.getElementById(background_image);
	var background_image = ' body { background-image:' + background_image + ';}'
	var css = background_image; 



	var html = '<html><head><style>' + css + '</style></head><body>' + '</body></html>'
	return html;
}	