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
const container = document.querySelector("#container");
for(let i = 0; i < 19; i++)
{
    const newDiv = document.createElement("div");
    const newButton = document.createElement("button");
    newDiv.appendChild(newButton);
    container.appendChild(newDiv);
    if(!(nonNumSpots(i)) && i < 11)
    {
        newButton.textContent = i.toString();
    }
    else if(nonNumSpots(i))
    {
        newButton.textContent = assignOperator(i);
    }
}

//Determines if the current div is where
function nonNumSpots(num)
{
    if(num === 3 || num === 7 || (num >= 11 && num < 15) || num === 15)
    {
        return true;
    }
    return false;
}
function assignOperator(num)
{
    switch(num)
    {
        case 3:
            return "+"
        case 7:
            return "-";
        case 11:
            return "*";
        case 12:
            return "clear";
        case 13:
            return "0";
        case 14:
            return ".";
        case 15:
            return "÷";
    }
}
