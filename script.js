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