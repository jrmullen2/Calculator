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
    const newButton = document.createElement("button");
    newDiv.appendChild(newButton);
    newDiv.classList.add("calcButton");
    container.appendChild(newDiv);
    if(!(nonNumSpots(i)) && counter < 10)
    {
        newButton.textContent = counter.toString();
        newButton.classList.add("numButton");
        counter += 1;
    }
    else if(nonNumSpots(i))
    {
        newButton.textContent = assignOperator(i);
        newButton.classList.add("otherButton");
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
let storedNum = 0;
const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach((nButton) => {
    nButton.addEventListener("click", () => {
        showNumber(nButton.textContent)
    });
});
let screen = document.querySelector("#numberDisplay");
function showNumber(num)
{
    if(screen.textContent.length < 9)
    {
        let currentContent = screen.textContent;
        currentContent += num;
        screen.textContent = currentContent;
    }
    return;
   
}