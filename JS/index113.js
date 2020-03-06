function getShapeParameter(base, height)
{
    let perimeter = 0;

    if (base == height)
    {
        perimeter = 4*base;
    }
    else if (base != height)
    {
        perimeter = 2*base + 2*height;

    }

    console.log(perimeter + " is the shape perimeter")
    


}