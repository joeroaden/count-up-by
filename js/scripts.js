//Business Logic//
function forLoop(number1, number2) {
let array = [];
let result = [];
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

