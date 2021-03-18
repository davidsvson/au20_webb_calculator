let numbers = document.getElementsByClassName('calc_number');
let signs = document.getElementsByClassName('calc_sign');
let result = document.getElementById('result');
let firstInput = true;

for(let i=0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numberListener);
}

for(let i=0; i < signs.length; i++) {
    signs[i].addEventListener('click', signListener);
}

function signListener() {
   if (this.innerText == '=') {
       calculate();
   } 
   else {
       display(this.innerText);
   }
}

function numberListener() {
    display(this.innerText);
}

function display(value) {
    if(firstInput) {
        result.innerText = '';
        firstInput = false;
    }
    result.innerText += value;
}

function calculate() {
    let res = eval(result.innerText);
    display('=' + res);
    firstInput = true;
}
