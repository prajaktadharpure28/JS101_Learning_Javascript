let avengers ={
name: {
    captain: "Steve",
    ironMan: "Tony",
    antMan: "Scott",
    blackWidow: "Natasha",
},
power: {
    captain: 92,
    ironMan: 96,
    antMan: 78,
    blackWidow: 75
}
};

if((avengers["power"]["captain"] + avengers["power"]["antMan"]) > (avengers["power"]["blackWidow"] + avengers["power"]["ironMan"])){
    console.log(avengers["name"]["ironMan"] );
}
else{
    console.log(avengers["name"]["captain"]);
}

