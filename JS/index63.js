let year  = 2009 ;
let champion  = null;

message = null;

switch (year) {
    case 2017:
    case 2016:
    case 2009:

        champion = "Pittsburgh";      
        break;

    case 2015:
    case 2013:
    case 2010:

        champion = "Chicago Blackhawks";
        break;

    case 2014:
    case 2012:
        champion = "Los Angeles Kings";       
        break; 

    case 2011:
        champion = "Boston Bruins  ";       
        break; 
        
    default:
        console.error("Sorry, please try different year");
        break;
}

if(champion)
    console.log(`${champion} was the ${year} NHL Champion`);
