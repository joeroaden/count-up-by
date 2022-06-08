//Utility Logic//
function noInput(number1, number2) {
  return ((number1.length===0) || (number2.length===0));
}
function notNumber(number1, number2) {
  if (isNaN(number1, number2)) {
    return 'Not a Number!';
  }
}





//Business Logic//
function forLoop(number1, number2) {
let array = [];
let result = [];

  if (noInput(number1, number2)) {
    return 0;
  }
  if (notNumber(number1, number2)) {
    return "Not a Number!";
  }

  for (let index = 0; index <= parseInt(number1); index += parseInt(number2)) {
  result.push(index);
}
return result
}

//UI Logic//
$(document).ready(function(){
  console.log(forLoop(30, 5));
  $("form#counter").submit(function(event){
    event.preventDefault();
    const input1 = $("#number1").val ();
    const input2 = $("#number2").val ();
    const result = forLoop(input1, input2);
    $("#Output").html(result + "");
  });
});

