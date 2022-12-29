// nested loop for 3 farms and print seeds in horizontal


let str = "";

for (let i = 1; i <= 3; i++) {
    console.log("farm " + i);
    for (let j = 1; j <= 5; j++) {
        str = str + "seeds " + j + " ";
    }
    console.log(str);
    str = "";
}

