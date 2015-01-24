/* The idea behind this is to create a new class
called Option that has as its properties a 
truth value, and an onclick functionality 
as well */

// Alternative way? I don't know if this way is better nor do i appreciate the difference

function Option(op_no, t_val, q_no){
	this.option_number = op_no;
	this.truth_value = t_val;
	this.question_number = q_no;
	this.onclick = function(t_val){
		return t_val;
		if (t_val === false) {
			alert("Wrong!");
		}
		else {
			alert("Right!");
		};
	}
}

function createNewOption(op_name, op_no, t_val, q_no){
	
	//We use op_name here as the name of the new created option
	new_option = new Option(op_no, t_val, q_no);

	console.log(op_name);
	console.log(new_option);

	var option_html = document.createElement("div");
	option_html.id = op_name;

	var parent = document.getElementById('question');
	parent.appendChild(option_html);
	//console.log("The parent element"+ parent);
	document.getElementById(op_name).innerHTML = OPTION_CONTENT;
}

/* -----------------------
// LOADING THE RIGHT XML FILE //
--------------------------- */

	i = 0;
	QUIZ_NAME = "";

	function callXml(quiz_name){
		QUIZ_NAME = quiz_name;
		xmlhttp=new XMLHttpRequest();
		xmlhttp.open("GET",'./Quiz Questions/' + quiz_name,false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML;	
		//Get every single element with tag name 'question'
		questionArray = xmlDoc.getElementsByTagName("question");	
		console.log(questionArray);

		//This calls a function to grab all the data for ONE question		
		getDataOfOneQnFrom(questionArray);
		}

//---------------------------------
/* TAKING FROM THE XML FILE */
//-----------------------------------------
		
		function getDataOfOneQnFrom(questionArray){
			HEADER=(questionArray[i].getElementsByTagName("header")[0].childNodes[0].nodeValue);
			CONTENT=(questionArray[i].getElementsByTagName("content")[0].childNodes[0].nodeValue);
			OPTIONS=(questionArray[i].getElementsByTagName("option"));
			
			//get as many options as there are in that particular question

			OPTIONSARRAY = [];
			//The following function transfers nodelist to array
			intermediateArray();
		}

		function intermediateArray() {
			//We push ALL options' content into an options Array
			//just to make it simpler
			//The options array ONLY contains options from ONE question

			for (a = 0; a < OPTIONS.length; a++){
				OPTION_CONTENT = OPTIONS[a].childNodes[0].nodeValue;
				//option.truth_value =  options[a].getAttributeNode('truth_value');
				console.log(OPTION_CONTENT);
				OPTIONSARRAY.push(OPTION_CONTENT);
				displayInfo();			
		}
	}

		function displayInfo(){

			// This block of code generates the HTML elements dynamically
			//For header and content, they are fixed, so we can just add in
			document.getElementById("header").innerHTML=HEADER;	
			document.getElementById("content").innerHTML=CONTENT;

			//For option, there is no option divs, we have to create ourselves
			//So, let's call a createNewOption function.

			for (j = 0; j < OPTIONSARRAY.length; j++){
				OPTION_NAME = i + "_" + j;
				OPTION_NUMBER = j;
				QUESTION_NUMBER = Number(i);
				//truth_value = OPTIONSARRAY[j].getAttribute('truth_value');
				TRUTH_VALUE = false;
				//Finally, we create a new Option.
				createNewOption(OPTION_NAME, OPTION_NUMBER, QUESTION_NUMBER, TRUTH_VALUE);
				}
		}