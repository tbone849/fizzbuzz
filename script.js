$(document).ready(function() {
	getNumber();	
});

function fizzbuzz(number){
	var count;

	for(count = 1; count <= number; count++){
		if((count % 3 == 0) && (count % 5 ==0)){
			$('body').append("fizzbuzz</br>");
		}
		else if(count % 3 == 0){
			$('body').append("fizz</br>");
		} 
		else if(count % 5 == 0){
			$('body').append("buzz</br>");
		} 
		else {
			$('body').append(count + "</br>");
		}
	}
}

// get number from user
function getNumber(){
	var dataEntered = prompt("Please enter positive integer.");
	var isNumber = parseInt(dataEntered); // parse answer to integer

	if(isNumber){ // is it a number?
		fizzbuzz(isNumber); // yes, run fizzbuzz
	} else {
		alert("You did not enter a number. Try again."); // no, try again
		getNumber(); // reprompt for a number
	}

}