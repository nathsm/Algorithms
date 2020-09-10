// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

let arr = [10, 15, 3, 7];
let k = 17;
console.log(solution(arr,k));

function solution(arr, k) {
    let ans = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == k) {
                ans = true;
                return ans;
            }
        }
    }
    return ans;
}