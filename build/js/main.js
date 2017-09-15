//Variables
var myHeading = document.getElementById('piToNth__display');

//Pi to the Nth digit
function piToTheNth(){
  //this variable is the contents of the text field
  var number = document.getElementById('nth').value;
  //Take pi and round to the decimal place of "number" (less than or equal to 20)
  var piToNth = Math.PI.toFixed(number);
  //Write the full pi value to HTML
  myHeading.innerHTML = piToNth;
};

// Console log to test connection

console.log("complete");
