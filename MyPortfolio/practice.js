function hundred(arr) {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        sum = sum + parseInt(arr[i], 10);
        if (sum == 100 || arr[i] == 100) {
            return true;
        }
    }
    return false;
}

console.log("Enter Your 2 Numbers");
let arr = [];
for (let i = 0; i < 2; i++) {
    arr[i] = prompt("Enter number " + (i + 1));
}

if (hundred(arr)) {
    console.log("Condition met: Either the sum is 100 or one of the numbers is 100");
} else {
    console.log("Condition not met");
}

