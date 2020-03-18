const greet = (firstname, lastname, callback)=>{
    console.log("Hi " + firstname + " " + lastname);

    callback();

};

const showcode = ()=>console.log("This code gets executed after the greet function call");

greet("sonu", "sainju", showcode);