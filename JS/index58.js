let hr = 2;


if (hr >= 5 && hr < 12)
{
    console.log("Good Morning");
}

else if ( hr >= 12 && hr < 18)
{
    console.log("Good afternoon");
}

else if ( hr >= 18 && hr < 22)
{
    console.log("Good evening");
}
else if ( (hr >= 22 && hr < 24) || ( hr >= 0 && hr < 5))
{
 
    console.log("Good night");
}
else
{
    console.log("Not valid");
}