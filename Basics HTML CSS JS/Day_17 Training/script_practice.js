/*  JANANI
string templates
(``)=> back ticks its display as its includes spl characters also space

${}=> interpol

    example: var name =manoj;
    console.log(`hello ,${name}`);

string conversion:
     var a ="190", b ="20" ,c =a+b;
     console.log(c); //op:1020
     c=parseInt(a+b);
     console.log(c)//op:30
    a="120.90",b="40.90"
    c=number(a+b)//op:number with decimal values
    
    a=120.9899;
    console.log(a.toFixed(2));
    concole.log(a.toPrecision);

Error handling:
var a=30;
     try{
        a<10;
     }
     catch(expression e){
        log("err"+e.message);
        log("err"+e.stack);//which line error occured.
        log("err"+e.desp);//display undefined.
     }


function myfun(){
    var a =document.getElementById("demo1").innerHTML;
    var x =document.getElementById("para1")
    try{
        if(a=='')throw"empty";
        if(NaN(a)) throw"This is not a number";
        if(a<5) throw "value is too low";
        if(a>10) throw "value is too high";
    }
    catch(e){
    x.innerHTML = e;
    }
}
finally


form validation:
    eventlistener



 MOHAN:
    api
    =>fetch api    
*/