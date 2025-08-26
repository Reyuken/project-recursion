const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Provide a number: ", (answer) => {
    let n = parseInt(answer, 10);
    console.log(`This is done using Iteration Method ${iterationFib(n)}`);
    console.log(`This is done using Iteration Method ${recursiveFib(n)}`);
    rl.close();
})

function iterationFib(number) {
    
    if (number <= 0) return [];
    if (number === 1) return [0];
    let arr = [0, 1];
        for (let i = 2; i < number; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    return arr;
}

function recursiveFib(number){
    if (number <= 0) return [];
    if (number === 1) return [0];
    if (number === 2) return [0,1];

    let arr = recursiveFib(number-1);
    arr.push(arr[arr.length -1] + arr[arr.length -2]);

    return arr;
}