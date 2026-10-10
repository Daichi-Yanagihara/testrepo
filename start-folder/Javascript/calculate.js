const num1 = document.getElementById("value1");
const num2 = document.getElementById("value2");
const operators = document.getElementById("choice");
const expression = document.getElementById("expression");
const result = document.getElementById("result");


num1.addEventListener("input", calculate);
num2.addEventListener("input", calculate);
operators.addEventListener("change", calculate);


function calculate() {
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);
    const operator = operators.value;

    if (isNaN(value1) || isNaN(value2)) {
        expression.textContent = "計算式：";
        result.textContent = "両方の数値を入力してください。";
        return;
    }

    let calcresult;
    let symbol;

    if (operator === "addition") {
        calcresult = value1 + value2;
        symbol = "+";
    } else if (operator === "subtraction") {
        calcresult = value1 - value2;
        symbol = "-";
    } else if (operator === "multiplication") {
        calcresult = value1 * value2;
        symbol = "×";
    } else if (operator === "division") {
        if (value2 === 0) {
            expression.textContent = "計算式：";
            result.textContent = "0で割ることはできません。";
            return;
        }
        calcresult = value1 / value2;
        symbol = "÷";
    } else {
        expression.textContent = "計算式：";
        result.textContent = "演算子が正しくありません。";
        return;
    }

    expression.textContent = `計算式：${value1} ${symbol} ${value2}`;
    result.textContent = `結果：${calcresult}`;
}

