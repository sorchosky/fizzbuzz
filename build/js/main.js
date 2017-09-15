//fizzbuzz app
var i = 1;
var fizzbuzz = "";

for (i; i < 100; i++) {
	if (i % 3 == 0 && i % 5 == 0){
		fizzbuzz = "fizzbuzz";
	} else if (i % 3 == 0){
		fizzbuzz = "fizz";
	} else if (i % 5 == 0){
		fizzbuzz = "buzz";
	} else {
		fizzbuzz = i;
	};
	document.getElementById("fizzy").append(fizzbuzz + " ");
}