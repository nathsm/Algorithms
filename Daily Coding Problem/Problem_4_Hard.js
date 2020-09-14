// Given an array of integers, find the first missing positive integer in linear time and constant space. 
// In other words, find the lowest positive integer that does not exist in the array. 
// The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

let arr = [3, 4, -1, 1];
console.log(solution(arr));

function solution(arr) {
    arr.sort(function(a,b) {return a-b});
    const e = (element) => element == 1;
    let indexOf1 = arr.findIndex(e);
 
    let missingNum = 1;
    
    if (arr[arr.length-1] < 0) {
        return missingNum;
    }
    if (arr[0] > 0 && arr[0] !=1) {
        return missingNum;
    }
    else {
       for (let i = indexOf1; i<arr.length; i++) {
           if (arr[i] == missingNum) {
               missingNum++;
           }
       } 
    }
    return missingNum;
}