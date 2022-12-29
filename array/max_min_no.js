//find min and max number and index in array

let arr = [1,2,3,4,5,6,7,8,9,10];
let max = arr[0];
let min = arr[0];

let maxIndex = 0;
let minIndex = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]<min){
        min = arr[i];
        minIndex = i;
    }
    if(arr[i]>max){
        max = arr[i];
        maxIndex = i;
    }
}
console.log(min, "is minimum number and index is", minIndex);

console.log(max, "is maximum number and index is", maxIndex);
