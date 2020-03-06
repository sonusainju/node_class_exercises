function showNumbers(start, end)
{
    if(typeof start =='number' && typeof end =='number')
    {
        if(start < end)
        {
            for (let i = start; i <= end; i++)
                console.log(i);           

        }
        else if(start > end)
        {
            for (let i = start; i >= end; i--)
                console.log(i); 
        }
        else 
        {
            console.log(start);
        }
    }
    else
    {
        console.log("Enter numbers as inputs");
    }
    
}

showNumbers(100,300);