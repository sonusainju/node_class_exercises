let arithmetic = {
    add: function(a, b){
        console.log( a+b);
    },
    subtract: function(a,b){
        console.log( a-b);
    },
    multiply: function(a,b){
        console.log( a*b);
    },
    divide: function(a,b){
        console.log( a/b);
    },
    remainder: function(a,b){
        console.log( a%b);
    }
};

arithmetic.add(2, 10)
arithmetic.subtract(10, 5)
arithmetic.multiply(3, 100)
arithmetic.divide(40, 2)
arithmetic.remainder(20, 2)