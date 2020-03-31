const exampleAdditionInput = {
  num1: 3,
  num2: 2,
  operation: '/',
}
//another way of writing it ...const add = (num1, num2) num1 + num2;
const add = function(num1, num2) {
  return num1 + num2;
}

const subtract = function(num1, num2){
  return num1 - num2;
}

const divide = function(num1, num2){
  return num1 / num2;
}

const multiply = function(num1, num2){
  return num1 * num2;
}
const validOperations = ['add', '+', 'subtract', '-', 'divide', '/', 'multiply', '*']



const calculate = function(input){
  if (validOperations.includes(input.operation)){
    if (Number.isInteger(input.num1) && Number.isInteger(input.num2)){
    //check to see what the input is and depending on that call for the helper methods
      if (input.operation === 'add' || input.operation === '+'){
        return add(input.num1, input.num2);
      }
      else if (input.operation === 'subtract' || input.operation === '-'){
        return subtract(input.num1, input.num2);
      }
      else if (input.operation === 'divide' || input.operation === '/'){
        return divide(input.num1, input.num2);
      }
      else if (input.operation === 'multiply' || input.operation === '*'){
        return multiply(input.num1, input.num2);
      }
    }
    else{
      return 'Please use numbers only'
    }
  }
  else {
    return 'Please select a valid operation'
  }

}

console.log(calculate(exampleAdditionInput))
