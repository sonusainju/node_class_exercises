function mySort (number1, number2, number3,highToLow)
{
    let nums = [];
    nums[0] =number1;
    nums[1] =number2;
    nums[2] =number3;

    if(!highToLow)
    {
        nums.sort(function(a, b){return a - b});
    
        console.log("sorted: " + nums);
    }

    else
        console.log(nums.sort(function(a, b){return b - a}));


}

mySort(10, 8, 25, 0);