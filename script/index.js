function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}
function operation(numOne,operate,numTwo){
    let result
    switch(operate){
        case '+':
            result=add(numOne,numTwo)
            break;


        case '-':
            result=subtract(numOne,numTwo)
            break;

        case 'x':
            result=multiply(numOne,numTwo)
            break;

        case '/':
            if(numTwo===0){
                return "ERROR"
            }
            else if(numTwo===1){
                return numOne
            }
            else{
                let div=divide(numOne,numTwo)
                result=div.toFixed(2)
            }
            break; 
    }
    return result
}

const numbers=document.querySelectorAll('.number')
const operators=document.querySelectorAll('.operator')
const display=document.querySelector('.calDisplay')
const equal=document.querySelector('.equal')
const clear=document.querySelector('.clear')

const defaultVal=0
display.textContent=defaultVal
let firstNumber=0
let secondNumber=0
let currentNumber=''
let operator=null
let currentOperator=''



function operand(){
    numbers.forEach((number)=>{
        number.addEventListener('click',()=>{
            
            if(operator==null){
                currentNumber=currentNumber+number.textContent
                display.textContent=currentNumber
                firstNumber=parseInt(currentNumber)
                console.log(firstNumber)
            }
            else if(currentOperator==''){
                currentNumber=currentNumber+number.textContent
                display.textContent=currentNumber
                secondNumber=parseInt(currentNumber)
                console.log(secondNumber)
            }
        })
    })
}

function getOperator(){
    operators.forEach((op)=>{
        op.addEventListener('click',()=>{
            if(operator==null){
                currentOperator=op.textContent
                operator=currentOperator
                cleanDisplay()
            }

            else{
                operator=op.textContent
                firstNumber=parseInt(display.textContent)
                cleanDisplay()
            }
        })
    })
}

function cleanDisplay(){
    display.textContent=''
    currentNumber=''
    currentOperator=''
}

function equalButton(){
    equal.addEventListener('click',()=>{
        let result=operation(firstNumber,operator,secondNumber)
        display.textContent=result
        console.log(result)
    })
}

function allClear(){
    clear.addEventListener('click',()=>{
        display.textContent=defaultVal
        display.textContent=defaultVal
        firstNumber=0
        secondNumber=0
        currentNumber=''
        operator=null
        currentOperator=''
    })
}


operand()
getOperator()
allClear()
equalButton()