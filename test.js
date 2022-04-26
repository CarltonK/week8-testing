const { addition, substraction } = require('./index');

test('Calculator can add numbers', () => {
    // EXPECTATION VS RESULT
    expect(addition(1, 2)).toBe(3);
});

test('Calculator can add strings', () => {
    // EXPECTATION VS RESULT
    expect(addition('1', '2')).not.toBe(3);
});

test('Calculator can substract', () => {
    // EXPECTATION VS RESULT
    expect(substraction(2, 1)).toBe(1);
});