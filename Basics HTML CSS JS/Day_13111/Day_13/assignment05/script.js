
//05.Write a JavaScript program to find the gross 
//salary of the employee according to the following details
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

var basicSalary=prompt("Enter Your Basic Salary:");
console.log(typeof(basicSalary));
if((basicSalary > 0)&&(basicSalary <= 10000)){
    var hra = basicSalary * (0.2);
    var da = basicSalary *(0.8);
    var grossSalary = parseInt(basicSalary)+hra+da;
    console.log(typeof(grossSalary));
    alert("Your Gross Salary: "+grossSalary);
}
else if((basicSalary >=10001)&&(basicSalary <= 20000)){
    var hra = basicSalary * (0.25);
    var da = basicSalary *(0.9);
    var grossSalary = parseInt(basicSalary)+hra+da;
    console.log(typeof(grossSalary));
    alert("Your Gross Salary: "+grossSalary);
}
else if(basicSalary > 20000){
    var hra = basicSalary * (0.3);
    var da = basicSalary *(0.95);
    var grossSalary = parseInt(basicSalary)+hra+da;
    console.log(typeof(grossSalary));
    alert("Your Gross Salary: "+grossSalary);
}
else{
    alert("Try again");
}

