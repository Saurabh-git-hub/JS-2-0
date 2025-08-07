const myNumbers = [1, 2, 3, 4, 5];

// const newNum = myNumbers.map((num) => num + 10);

// chamming

const newNum = myNumbers
            .map((num) => num + 10)
            .map((num) => num +1)
            .filter((num) => num > 10);

console.log(newNum); // Output: [1, 2, 3, 4, 5]