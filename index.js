const txtop1 = document.getElementById("op1")
const txtop2 = document.getElementById("op2")
const txtoperation = document.getElementById("operation")
const btnCalculate= document.getElementById("calculate")
const result = document.getElementById("result")

btnCalculate.addEventListener('click',calculate)

function calculate(){
  const operation= txtoperation.value
  const op1 = parseFloat (txtop1.value)
  const op2 = parseFloat (txtop2.value)

  if ((operation == "+" || operation == "-" || operation == "*" ||operation == "/") && !isNaN(op1) && !isNaN (op2) ){
    let resultado;
    switch (operation) {
      case "+":
        resultado = op1 + op2
        break;
      case "-":
        resultado = op1 - op2
        break;
      case "*":
        resultado = op1 * op2
        break;
       case "/":
        resultado = op1 / op2
        break
    }
    result.innerText = "= " + resultado;
  } else {
    result.innerText = " We can't calculate that!"
  }
}