let empName ={
    name:"Manoj",
    gender:"Male",
    address:"Tirunelveli"
}


function checkd(props){
    if (empName.hasOwnProperty(props)){
       return empName[props];
        
    }
    else{
        console.log("Its Not Available");
    }
}
let check=checkd("name");
console.log(check);