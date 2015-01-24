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
		if (t_val == false) {
			alert("Wrong!");
		}
		else {
			alert("Right!");
		}
	}
}

function createNewOption(op_name, op_no, t_val, q_no){
	op_name = new Option(op_no, t_val, q_no);

	console.log(option_name);
	console.log(op_name);

	var option_html = document.createElement("div");
	option_html.id = op_name;

	var parent = document.getElementById('question');
	parent.appendChild(option_html);
	document.getElementById(op_name).innerHTML = option;
}

/* -----------------------
// LOADING THE RIGHT XML FILE //
--------------------------- */

	i = 0;
	global_quiz_name = "";

	function callXml(quiz_name){
		global_quiz_name = quiz_name;
		xmlhttp=new XMLHttpRequest();
		xmlhttp.open("GET",'./Quiz Questions/' + quiz_name,false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML;	
		//Get every single element with tag name 'question'
		questionArray = xmlDoc.getElementsByTagName("question");	
		console.log(questionArray);		
		displayQuestion(questionArray);
		}

//---------------------------------
/* TAKING FROM THE XML FILE */
//-----------------------------------------
		
		function displayQuestion(questionArray){
			header=(questionArray[i].getElementsByTagName("header")[0].childNodes[0].nodeValue);
			content=(questionArray[i].getElementsByTagName("content")[0].childNodes[0].nodeValue);
			options=(questionArray[i].getElementsByTagName("option"));
			
			//get as many options as there are in that particular question

			optionsArray = [];

			for (a = 0; a < options.length; a++){
				//We push the corresponding option into an options Array
				//just to make it simpler
				//The options array ONLY contains options from ONE question
				option = options[a].childNodes[0].nodeValue;
				//option.truth_value =  options[a].getAttributeNode('truth_value');
				console.log(option);
				optionsArray.push(option);
			}

				// This block of code generates the HTML elements dynamically
				//For header and content, they are fixed, so we can just add in
				document.getElementById("header").innerHTML=header;	
				document.getElementById("content").innerHTML=content;

				//For option, there is no option divs, we have to create ourselves
				//So, let's call a createNewOption function.

				for (j = 0; j < optionsArray.length; j++){
					option_name = i + "_" + j;
					option_number = j;
					question_number = Number(i);
					//truth_value = optionsArray[j].getAttribute('truth_value');
					truth_value = false;
					//Finally, we create a new Option.
					createNewOption(option_name, option_number, question_number, truth_value);
				}
			}

/*
		function left(){
			if (i>0){
			i--;
			displayQuestion();
			}
		}		
		
		function right(){
			if (i<(questionArray.length-1)){
				i++;
				callXml(global_quiz_name);
				}
			else {
				endQuiz();
				document.getElementById("question").innerHTML="Well done! You have finished all the questions!";				
			}
				
			}
			*/