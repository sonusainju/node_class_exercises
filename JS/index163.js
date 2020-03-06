function add(){
    let sum = 0;
    for (let i=0; i < arguments.length; i++)
    {
        sum += arguments[i];


    }
    console.log(sum);
};
add(2,3,5,5,6);