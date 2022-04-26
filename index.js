function addition(x, y) {
    return x + y;
}

const addResult = addition(1,2)
console.log('ADDITION RESULT =',addResult)

function substraction(x, y) {
    return x - y;
}

const subtractionResult = substraction(2,1)
console.log('SUBTRACTION RESULT =',subtractionResult)

module.exports = { addition, substraction };