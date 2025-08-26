const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Input an array of numbers separated by a comma: ", (answer)=>{
    let input = answer.split(",").map(Number);
    console.log(mergeSort(input));
    rl.close();
})


function mergeSort(input){
    if (input.length<=1) return input;

    let mid = Math.floor(input.length/2);
    let left = mergeSort(input.slice(0,mid));
    let right = mergeSort(input.slice(mid));

    return merge(left,right);
}

function merge(left,right){
    let array = [];
    let l = 0;
    let r = 0;

    while (l<left.length && r<right.length){
        if (left[l] < right[r]){
            array.push(left[l]);
            l++;
        }
        else {
            array.push(right[r]);
            r++;
        }
    }
    return array.concat(left.slice(l).concat(right.slice(r)));
}