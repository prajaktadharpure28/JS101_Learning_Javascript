let str = "school";
let n = str.length;
let new_str = "";
let new_str1 = "";

for (let i = n-1; i >= 0; i--){
    if(i>=n/2){
        new_str = new_str + str[i];
    }
    else{
        new_str1 = new_str1 + str[i];
    }
}
console.log(new_str1+new_str);