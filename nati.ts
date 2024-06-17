function reverseString(input) {
    return input.split('').reverse().join('');
}

const originalString = "nurses run";
const reversedString = reverseString(originalString);

console.log(`Original string: ${originalString}`);
console.log(`Reversed string: ${reversedString}`);
