const greeting = require('./greeter');

const showcode = ()=>console.log("This code gets executed after the greet function call");

greeting("sonu", "sainju", showcode);