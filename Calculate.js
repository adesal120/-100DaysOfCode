var GreetThem = alert ("Welcome to the Ibukunoluwa Calculator. Kind;y Click the OK buton to get started")
var FirstNumber = prompt ("What is the first number")
var SecondNumber = prompt ("What is the second number")
var ChooseOperator = prompt ("What Operation Will You Like to Carry Out - (1) Addition, (2) Subtraction, (3) Multiplication, (4) Division")

function  Calculator(a,b) {
 	if (ChooseOperator == 1) {
 		return a+b;
 	} 
 	 else if (ChooseOperator == 2) {
 	 	return a-b;
 	 } 
 	  else if (ChooseOperator == 3) {
 	 	return a*b
 	 } 
 	 else if (ChooseOperator == 4) {
 	 	return a/b
 	 } else {
 	 	prompt ("I cannot solve this calaculation as it is too hard for my type of calculator. GoodBye!!!")
 	 }

}

 Calculator (FirstNumber, SecondNumber)