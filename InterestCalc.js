var app ={};
app.simpleInt =function (principle,yrs,rateInt)
{
 return (principle *yrs *rateInt/100);
}
app.compoundInt = function (principle,yrs,rateInt)
{
return ((principle *yrs*rateInt)*12)/100;
}
module.exports =app;