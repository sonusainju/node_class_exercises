let seriesName = "Game of Thrones";
let dragon1 = "Drogon"
let dragon2 = "Rhaegal"
let dragon3 = "Viserion"

// template string 
// this literal form is gona have an extra step
// so, if the string doesn't have variables, dont use
// literals

let template = `In ${seriesName} the dragons name are:     
${dragon1}, ${dragon2} & ${dragon3}`;

console.log(template);

// Don't need the escape characters - if using literals
let test = `our/s`;
console.log(test);