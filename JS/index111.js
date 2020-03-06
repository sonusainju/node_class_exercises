function even(number)
{
    if(typeof number == 'number')
    {
        if(number%2 == 0)
        {
            console.log(number + " is even");
        }
        else
           console.log(number + " is odd");
    }
}

even("joS")