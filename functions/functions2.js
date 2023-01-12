let money = 0;
let batMan = 1;
let ironMan = 1;

for (let i=1; i<=5; i++) {
    ironMan = ironMan*i*money;
    for(let j=0; j<=5; j++) {
        batMan = batMan*j*i;
    };
};
