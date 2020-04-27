function calc()
{
    //Defines variables
    var a = parseInt(document.querySelector("#va").value);
    var b = parseInt(document.querySelector("#vb").value);
    var op = document.querySelector("#operator").value;
    var calculate;
    //Operations
    if( op == "add")
    {
    calculate = a + b;
    }
    else if(op == "min")
    {
    calculate = a - b;
    }
    else if(op == "div")
    {
    calculate = a / b;
    }
    else if(op == "mul")
    {
    calculate = a*b;
    }
    //Catches value of calculate and outputs it on index.html
    document.querySelector("#result").innerHTML ="The result is " + calculate;
}   