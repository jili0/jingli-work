// initialize references

let input;
const displayTop = document.querySelector('.displayTop');
const displayBottom = document.querySelector('.displayBottom');
let variable;
let storedVariable;
let result;
const resultButton = document.querySelector('.equal');



const getInput = (e) => {
  input = e.target.innerText;
  console.log(`getInput: ${input}`);
}

const handleInput = () => {
  if (~~input || input == '.') {
    if (variable === "") {
      displayTop.innerText = "";
    }
    displayTop.innerText += input;
    variable = parseFloat(displayTop.innerText);
    console.log(`handleInput: variable is ${variable} `);
  } else {
    if (input == 'AC') {
      handleAC();
    } else if (input == 'Del') {
      handelDel();
    } else if (input == '+') {
      displayBottom.innerText += input;
      storedVariable = variable;
      variable = "";
      resultButton.addEventListener('mousedown', handelAdd);
      resultButton.addEventListener('mouseup', removeHandelAdd);
    } else if (input == '-') {
      resultButton.addEventListener('mousedown', handelMinus);
      resultButton.addEventListener('mouseup', removeHandelMinus);
    } else if (input == '×') {
      resultButton.addEventListener('mousedown', handelMultiply);
      resultButton.addEventListener('mouseup', removeHandelMultiply);
    } else if (input == '÷') {
      resultButton.addEventListener('mousedown', handelDevide);
      resultButton.addEventListener('mouseup', removeHandelDevide);
    } 
    console.log('handleInput: input is not a number!');
  }
}

const handleAC = () => {
  displayTop.innerText = '';
  displayBottom.innerText = '';
  storedVariable = "";
  variable = "";
}

const handelDel = () => {
  displayTop.innerText = displayTop.innerText.slice(0,-1);
}

const handelAdd = () => {
  result = variable + storedVariable;
  console.log(result);
  storedVariable = "";
  variable = "";
}
const removeHandelAdd = () => {
  resultButton.removeEventListener('mousedown', handelAdd);
}

const handelMinus = () => {
  result = storedVariable - variable;
  console.log(result);
  storedVariable = "";
  variable = "";
}

const removeHandelMinus = () => {
  resultButton.removeEventListener('mousedown', handelMinus);
}

const handelMultiply = () => {
  result = variable * storedVariable;
  console.log(result);
  storedVariable = "";
  variable = "";
}

const removeHandelMultiply = () => {
  resultButton.removeEventListener('mousedown', handelMultiply);
}

const handelDevide = () => {
  result = storedVariable / variable;
  console.log(result);
  storedVariable = "";
  variable = "";
}

const removeHandelDevide = () => {
  resultButton.removeEventListener('mousedown', handelDevide);
}


document.addEventListener('click', (e) => {getInput(e); handleInput()});