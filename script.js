//......... RUMAH DEFINISI & FUNCTION .....................................................
//---------------KALKULASI
let prevNumber='';
let currentNumber='0';//agar tidak aktif(mem-+/*) dari bilangan awal/yg diinput
let calculationOperator='';

const inputNumber = (number) =>{
    //pakai if supaya inputan >1 digit tidak diawali 0
    if (currentNumber=== '0') {
        currentNumber = number;
    } else{
        currentNumber += number; //bisa  lebih dari 1 digit angka atau jajaran string number
    }
}

const inputOperator = (operator) =>{
    if(calculationOperator===''){
        prevNumber=currentNumber; 
        //mencegah eror di screen saat operator diklik berkali2, karena setiap operator di klik variabel2 diperbarui
        //agar saat klik operator pertama, prevnumber telah terisi, dan saat klik kedua(beruntun) tidak memperbarui prevnumber yg telah terinput
    }
    calculationOperator = operator;
    currentNumber =''; //kosongkan, nanti akan menyimpan inputan baru sbg current sebenarnya
}

const inputDecimal=(dot)=>{
    if(currentNumber.includes('.')){ //agar .desimal tidak berkali kali(...)
        return;
    }
    currentNumber += dot;
}

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;    
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;  
        case "%":
            result = parseFloat(prevNumber) % parseFloat(currentNumber);
            break;  
        default:
            break;
    }
    currentNumber = result;
    calculationOperator='';
}
//---------------CLEAR
const clearAll = () => {
    prevNumber = '';
    calculationOperator='';
    currentNumber='0';
}


//=== EVEN LISTENER BUTTON ============================================
//---------------- NUMBER
const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value); //membaca inputan current=0 dari tombol
        updateScreen(currentNumber);//updateScreen dengan current=0
    })    
})
//---------------- SCREEN/TEXT FIELD
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) =>{
        calculatorScreen.value = number;    
}
//---------------- OPERATOR
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
        updateScreen(calculationOperator);
    })
})
//---------------- EQUAL
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', ()=>{
    calculate();
    updateScreen(currentNumber);
})
//---------------- DECIMAL
const desimal = document.querySelector('.decimal')

desimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})
//---------------- CLEAR
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
    clearAll();
    updateScreen(currentNumber);
})
