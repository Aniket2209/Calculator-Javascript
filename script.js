function add(a,b)
{
    return parseFloat((a+b).toFixed(2));
}

function sub(a,b)
{
    return parseFloat((a-b).toFixed(2));
}

function mult(a,b)
{
    return parseFloat((a*b).toFixed(2));
}

function divi(a,b)
{
    if(b===0)
        return "Error! Divide by Zero";
    return parseFloat((a/b).toFixed(2));
}

function operate(op, x, y)
{
    if(op==="+")
    {
        let result = add(Number(x), Number(y));
        return result.toString();
    }
    else if(op==="-")
    {
        let result = sub(Number(x), Number(y));
        return result.toString();
    }
    else if(op==="*")
    {
        let result = mult(Number(x), Number(y));
        return result.toString();
    }
    else if(op==="/")
    {
        let result = divi(Number(x), Number(y));
        return result.toString();
    }
}

const displayObj = new Object();
displayObj["firstNum"] = "";
displayObj["secondNum"] = "";
displayObj["oP"] = "";
displayObj["result"] = "";

const display = document.querySelector(".display");

const button0 = document.querySelector("#0");
button0.addEventListener("click", () => {
    if(displayObj.result !== "")
    {
        displayObj.firstNum += "0";
        displayObj.secondNum = "";
        displayObj.oP = "";
        displayObj.result = "";
        display.textContent = `${displayObj.firstNum} `;
    }
    else if(displayObj.oP !== "")
    {
        displayObj.secondNum += "0";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.oP === "")
    {
        displayObj.firstNum += "0";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
});

const button1 = document.querySelector("#1");
button1.addEventListener("click", () => {
    if(displayObj.result !== "")
    {
        displayObj.firstNum += "1";
        displayObj.secondNum = "";
        displayObj.oP = "";
        displayObj.result = "";
        display.textContent = `${displayObj.firstNum} `;
    }
    else if(displayObj.oP !== "")
    {
        displayObj.secondNum += "1";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.oP === "")
    {
        displayObj.firstNum += "1";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
});

const button2 = document.querySelector("#2");
button2.addEventListener("click", () => {
    if(displayObj.result !== "")
    {
        displayObj.firstNum += "2";
        displayObj.secondNum = "";
        displayObj.oP = "";
        displayObj.result = "";
        display.textContent = `${displayObj.firstNum} `;
    }
    else if(displayObj.oP !== "")
    {
        displayObj.secondNum += "2";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.oP === "")
    {
        displayObj.firstNum += "2";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
});

const button3 = document.querySelector("#3");
button3.addEventListener("click", () => {
    if(displayObj.result !== "")
    {
        displayObj.firstNum += "3";
        displayObj.secondNum = "";
        displayObj.oP = "";
        displayObj.result = "";
        display.textContent = `${displayObj.firstNum} `;
    }
    else if(displayObj.oP !== "")
    {
        displayObj.secondNum += "3";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.oP === "")
    {
        displayObj.firstNum += "3";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
});

const button4 = document.querySelector("#4");
button4.addEventListener("click", () => {
    if(displayObj.result !== "")
    {
        displayObj.firstNum += "4";
        displayObj.secondNum = "";
        displayObj.oP = "";
        displayObj.result = "";
        display.textContent = `${displayObj.firstNum} `;
    }
    else if(displayObj.oP !== "")
    {
        displayObj.secondNum += "4";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.oP === "")
    {
        displayObj.firstNum += "4";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
});

const button5 = document.querySelector("#5");
button5.addEventListener("click", () => {
    if(displayObj.result !== "")
    {
        displayObj.firstNum += "5";
        displayObj.secondNum = "";
        displayObj.oP = "";
        displayObj.result = "";
        display.textContent = `${displayObj.firstNum} `;
    }
    else if(displayObj.oP !== "")
    {
        displayObj.secondNum += "5";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.oP === "")
    {
        displayObj.firstNum += "5";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
});

const button6 = document.querySelector("#6");
button6.addEventListener("click", () => {
    if(displayObj.result !== "")
    {
        displayObj.firstNum += "6";
        displayObj.secondNum = "";
        displayObj.oP = "";
        displayObj.result = "";
        display.textContent = `${displayObj.firstNum} `;
    }
    else if(displayObj.oP !== "")
    {
        displayObj.secondNum += "6";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.oP === "")
    {
        displayObj.firstNum += "6";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
});

const button7 = document.querySelector("#7");
button7.addEventListener("click", () => {
    if(displayObj.result !== "")
    {
        displayObj.firstNum += "7";
        displayObj.secondNum = "";
        displayObj.oP = "";
        displayObj.result = "";
        display.textContent = `${displayObj.firstNum} `;
    }
    else if(displayObj.oP !== "")
    {
        displayObj.secondNum += "7";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.oP === "")
    {
        displayObj.firstNum += "7";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
});

const button8 = document.querySelector("#8");
button8.addEventListener("click", () => {
    if(displayObj.result !== "")
    {
        displayObj.firstNum += "8";
        displayObj.secondNum = "";
        displayObj.oP = "";
        displayObj.result = "";
        display.textContent = `${displayObj.firstNum} `;
    }
    else if(displayObj.oP !== "")
    {
        displayObj.secondNum += "8";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.oP === "")
    {
        displayObj.firstNum += "8";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
});

const button9 = document.querySelector("#9");
button9.addEventListener("click", () => {
    if(displayObj.result !== "")
    {
        displayObj.firstNum += "9";
        displayObj.secondNum = "";
        displayObj.oP = "";
        displayObj.result = "";
        display.textContent = `${displayObj.firstNum} `;
    }
    else if(displayObj.oP !== "")
    {
        displayObj.secondNum += "9";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.oP === "")
    {
        displayObj.firstNum += "9";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
});

const buttonplus = document.querySelector("#+");
buttonplus.addEventListener("click", () => {
    if(displayObj.secondNum === "")
    {
        displayObj.oP = "+";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.secondNum !== "")
    {
        displayObj.result = operate(displayObj.oP, displayObj.firstNum, displayObj.secondNum);
        displayObj.firstNum = display.result;
        displayObj.secondNum = "";
        displayObj.oP = "+";
        display.textContent = `${displayObj.result} ${displayObj.oP}`;
    }
});

const buttonminus = document.querySelector("#-");
buttonminus.addEventListener("click", () => {
    if(displayObj.secondNum === "")
    {
        displayObj.oP = "-";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.secondNum !== "")
    {
        displayObj.result = operate(displayObj.oP, displayObj.firstNum, displayObj.secondNum);
        displayObj.firstNum = display.result;
        displayObj.secondNum = "";
        displayObj.oP = "-";
        display.textContent = `${displayObj.result} ${displayObj.oP}`;
    }
});

const buttonmult = document.querySelector("#*");
buttonmult.addEventListener("click", () => {
    if(displayObj.secondNum === "")
    {
        displayObj.oP = "*";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.secondNum !== "")
    {
        displayObj.result = operate(displayObj.oP, displayObj.firstNum, displayObj.secondNum);
        displayObj.firstNum = display.result;
        displayObj.secondNum = "";
        displayObj.oP = "*";
        display.textContent = `${displayObj.result} ${displayObj.oP}`;
    }
});

const buttondiv = document.querySelector("#/");
buttondiv.addEventListener("click", () => {
    if(displayObj.secondNum === "")
    {
        displayObj.oP = "/";
        display.textContent = `${displayObj.firstNum} ${displayObj.oP} ${displayObj.secondNum}`;
    }
    else if(displayObj.secondNum !== "")
    {
        displayObj.result = operate(displayObj.oP, displayObj.firstNum, displayObj.secondNum);
        displayObj.firstNum = display.result;
        displayObj.secondNum = "";
        displayObj.oP = "/";
        display.textContent = `${displayObj.result} ${displayObj.oP}`;
    }
});

const buttonequal = document.querySelector("#=");
buttonequal.addEventListener("click", () => {
    if(displayObj.firstNum!=="")
    {
        if(displayObj.secondNum==="")
        {
            displayObj.result = displayObj.firstNum;
            display.textContent = displayObj.result;
        }
        else if(displayObj.oP!=="" && displayObj.secondNum!=="")
        {
            displayObj.result = operate(displayObj.oP, displayObj.firstNum, displayObj.secondNum);
            display.textContent = displayObj.result;
        }
    }
    else if(displayObj.firstNum === "")
    {
        displayObj.result = displayObj.secondNum;
        display.textContent = displayObj.result;
    }
});

const buttonclear = document.querySelector("#clear");
buttonclear.addEventListener("click", () => {
    displayObj.firstNum = "";
    displayObj.secondNum = "";
    displayObj.oP = "";
    displayObj.result = "";
    display.textContent = "";
});