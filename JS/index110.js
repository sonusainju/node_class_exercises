function average(n1,n2,n3,n4,n5)
{
    let sum = 0;
    let numArray = [n1,n2,n3,n4,n5];
    
    for(let i = 0; i < 5; i++)
    {
        sum += numArray[i];

    }

    console.log("average is " + sum/5);

}

average(1,2,3,4,5);