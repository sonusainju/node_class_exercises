let  f =0, f1=-1, f2=1;
let n = 0;

while (n<10)
{
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
    n++;

}
