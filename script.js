//Basic Math functions

function add(num1, num2)
{

    return (Math.round(((num1 + num2) * 10000)) / 10000);

}

function subtract(num1, num2)

{
    return (Math.round(((num1 - num2) * 10000)) / 10000);

}

function multiply(num1, num2)

{

    return (Math.round(((num1 * num2) * 10000)) / 10000);

}

function divide(num1, num2)
{

    return (Math.round(((num1 / num2) * 10000)) / 10000);

}

let counter = 1;

const container = document.querySelector("#container");

//Creates 'buttons' for calculator and assigns them a specific class

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

//Provides the value that should be shown on a remaining button that has no text content

function assignOperator(num)
{

    switch(num)
    {

        case 4:

            return "+";

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

//Adding event listeners for buttons

const numButtons = document.querySelectorAll(".numButton");

const equalsButton = document.querySelector(".equalsButton");

const operatorButtons = document.querySelectorAll(".operatorButton");

const clearButton = document.querySelector(".clearButton");

const deleteButton = document.querySelector(".deleteButton");

numButtons.forEach((nButton) => {

    nButton.addEventListener("click", () => {

        if(nButton.textContent === "." && screen.textContent.includes("."))
        {

            alert("There is already a decimal.");

        }

        else
        {

            showNumber(nButton.textContent);

        } 

    });

});
operatorButtons.forEach((opButton) => {

    opButton.addEventListener("click", () => operatorClick(opButton.textContent));

});

equalsButton.addEventListener("click", () => equals(storedOperator, storedNum, storedNum2));

clearButton.addEventListener("click", () => {
    
    screen.textContent = "";
    storedOperator = "";

    storedNum = undefined;

    storedNum2 = undefined;

});
deleteButton.addEventListener("click", () => {

    let newNumber = screen.textContent.slice(0, screen.textContent.length - 1);

    screen.textContent = newNumber;

});

//Provides keyboard support

window.addEventListener("keydown", (e) => {

    if(parseInt(e.key) >= 0 && parseInt(e.key) < 10 || e.key === ".")
    {

        if(e.key === "." && screen.textContent.includes("."))
        {

            alert("There is already a decimal.");

        }

        else
        {

            showNumber(e.key);

        }

    }

    else if(e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    {

        if(e.key === "/")
        {

            operatorClick("÷");

        }

        else
        {

            operatorClick(e.key);

        }

    }
    else if(e.key === "=" || e.key === "Enter")
    {

        equals(storedOperator, storedNum, storedNum2);

    }

    else if(e.key === "Backspace")
    {

        let newNumber = screen.textContent.slice(0, screen.textContent.length - 1);

        screen.textContent = newNumber;

    }

});
let screen = document.querySelector("#numberDisplay");

let storedNum;

let storedNum2;

let storedOperator = "";

//Displays number on output div

function showNumber(num)
{

    if(storedOperator && screen.textContent.length < 9)
    {

        let currentContent2 = screen.textContent;

        currentContent2 += num;

        screen.textContent = currentContent2;

        storedNum2 = Number(currentContent2);

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

//function for operator button

function operatorClick(operator)
{

    if(!storedOperator)
    {

        screen.textContent = "";

        storedOperator = operator;

    }

    else
    {

        alert("You have already selected an operator. Click clear to start again.");

    }
    
}

//function for equals button

function equals(op, num1, num2)
{

    if(op && num1 && num2 != undefined)
    {

        switch(op)
        {

            case "+":

                screen.textContent = add(num1, num2).toString();

                storedNum = add(num1, num2);

                break;

            case "-":

                screen.textContent = subtract(num1, num2).toString();

                storedNum = subtract(num1, num2);

                break;

            case "*":

                screen.textContent = multiply(num1, num2).toString();

                storedNum = multiply(num1, num2);

                break;

            case "÷":

                if(num2 === 0)
                {
                    alert("This value is not allowed, try again.");

                    break;

                }

                screen.textContent = divide(num1, num2).toString();

                storedNum = divide(num1, num2);

                break;

        }

    }

    storedOperator = "";

    storedNum2 = undefined;

    return;
    
}