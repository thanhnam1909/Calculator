let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")

let num1Val = ""
let signVal = false
let num2Val = ""

let saveVal1 = 0
let saveVal2 = 0
let saveSign = ""

let saveResult = false

function insertNum(val) {
    if (signVal === false && num1Val.length < 16) {
        if (num1Val[0] != 0) {
            if(signVal === false && num1Val.length > 0  && saveResult === true) {
                saveResult = false
                clearCalc()
            }
            num1Val += val
            num1.innerHTML = num1Val
        }
    }
    else if (signVal === true && num2Val.length < 16) {
        if (num2Val[0] != 0) {
            num2Val += val
            num2.innerHTML = num2Val
        }
    }
}

function sign(sign) {
    if (num1Val.length > 0 && signVal === false) {
        saveVal1 = Number(num1Val)
        saveSign = sign
        num1Val += ` ${sign}`
        num1.innerHTML = num1Val
        signVal = true
    }
}
function result() {
    saveVal2 = Number(num2Val)
    let result = 0
    switch (saveSign) {
        case '+':
            result = saveVal1 + saveVal2;
            break;
        case '-':
            result = saveVal1 - saveVal2;
            break;
        case 'x':
            result = saveVal1 * saveVal2;
            break;
        case '/':
            result = saveVal1 / saveVal2;
            break;
        default:
            console.log('wrong sign');
            break;
    }
    clearCalc()
    num1.innerHTML = result
    num1Val += result
    saveVal1 += result
    saveResult = true
}
function clearCalc() {
    num1.innerHTML = ""
    num2.innerHTML = ""
    num1Val = ""
    num2Val = ""
    saveSign = ""
    saveVal1 = 0
    saveVal2 = 0
    signVal = false
}
