function add(...args)
{
    return args.reduce((sum, currentValue) => sum += currentValue);
}

function subtract(...args)
{
    return args.reduce((difference, currentValue) => difference -= currentValue);
}
function multiply(...args)
{
    return args.reduce((product, currentValue) => product *= currentValue);
}
function divide(...args)
{
    return args.reduce((quotient, currentValue) => quotient /= currentValue);
}
function operate(op, num1, num2)
{
    switch(op)
    {
        case "+":
            add(num1, num2)
            break;
        case "-":
            subtract(num1, num2)
            break;
        case "*":
            multiply(num1, num2)
            break;
        case "/":
            divide(num1, num2)
            break;
    }
}
let counter = 1;
const container = document.querySelector("#container");
for(let i = 1; i < 17; i++)
{
    const newDiv = document.createElement("div");
    newDiv.classList.add("calcButton");
    container.appendChild(newDiv);
    if(!(nonNumSpots(i)) && counter < 10)
    {
        newDiv.textContent = counter.toString();
        newDiv.classList.add("numButton");
        counter += 1;
    }
    else if(nonNumSpots(i))
    {
        newDiv.textContent = assignOperator(i);
        newDiv.classList.add("otherButton");
    }
    if(i % 4 === 0)
    {
        newDiv.classList.add("operatorButton");
    }
    if(i === 14 || i === 15)
    {
        newDiv.classList.add("numButton");
    }
    if(i === 13)
    {
        newDiv.classList.add("clearButton");
    }

}

//Determines if the current button should display a number 1-9 or not
function nonNumSpots(num)
{
    if(num === 4 || num === 8 || (num >= 12 && num < 16) || num === 16)
    {
        return true;
    }
    return false;
}
//Provides the value that should be shown on a remaining button with no text content
function assignOperator(num)
{
    switch(num)
    {
        case 4:
            return "+"
        case 8:
            return "-";
        case 12:
            return "*";
        case 13:
            return "clear";
        case 14:
            return ".";
        case 15:
            return "0";
        case 16:
            return "÷";
    }
}
const numButtons = document.querySelectorAll(".numButton");
const equalsButton = document.querySelector("#equalsButton");
numButtons.forEach((nButton) => {
    nButton.addEventListener("click", () => {
        showNumber(nButton.textContent)
    });
});
equalsButton.addEventListener("click", ( ) => equals(storedOperator, storedNum, storedNum2));
let screen = document.querySelector("#numberDisplay");
let storedNum;
let storedNum2;
let storedOperator = "";
function showNumber(num)
{
    if(storedOperator && screen.textContent.length < 9)
    {
        let currentContent2 = screen.textContent;
        currentContent2 += num;
        screen.textContent = currentContent2;
    }
    else if(screen.textContent.length < 9)
    {
        let currentContent = screen.textContent;
        currentContent += num;
        screen.textContent = currentContent;
        storedNum = Number(currentContent);
    }
    
    return;
}
function operatorClick(operator)
{
    screen.textContent = "";
    storedOperator = operator;
}
function equals(op, num1, num2)
{
    if(op && num1 && num2)
    {
        switch(op)
        {
            case "+":
                screen.textContent = add(num1, num2).toString();
                break;
            case "-":
                screen.textContent = subtract(num1, num2).toString();
                break;
            case "*":
                screen.textContent = multiply(num1, num2).toString();
                break;
            case "/":
                screen.textContent = divide(num1, num2).toString();
                break;
        }
    }
    storedOperator = "";
    storedNum = undefined;
    storedNum2 = undefined;
    return;
}