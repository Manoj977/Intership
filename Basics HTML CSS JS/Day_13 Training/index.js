// var odd=[1,3,5,7];
// var even=[2,4,6,8];
// //concat
//  var numbers= odd.concat(even);
//  console.log(numbers);
//  //add values
//  var num= odd[0]+even[3];
//  console.log(num);

//push Method:
// var num=[0,1,2,3,4,5,6];
// num.push("good","bad","heaven");
// console.log(num);
//it add elements from last index of array

//pop Method:
// var str=["good","bad"];
// str.pop();
// console.log(str);
//it removes last index of array

//Shift:
// var num=[4,5,6,7];
// num.shift();
// console.log("Shift: "+num);
//it  removes first index of array

//unShift:
// var num_1=[4,5,6,7];
// num_1.unshift(1,2,3);
// console.log("unshift: "+num_1);
//it add elements from first index of array

//splice:

// var rem=[2,3,4,5,6,7,8,10,12];
// rem.splice(2,3);
// console.log(rem);
//it removes form index of an array 2 next to the no of digits 3

//slice:
// var num=["zero","one","two","three","four","five","six","seven","eight"];
// console.log(num.slice(3,6));
//it takes from index of array(3) to index of array(6) & omit the last index of array which means
//slice(x,y-1)

//function call:
// function myfunc(){
//     alert("Submitted Successfully!");
// }

//aruments passing:
// function myfunc(a,b){
//     console.log(a-b);
// }
// myfunc(20,10);

//global scope

// var myNum = 767;
// function myfunc() {
//   console.log("global scope:" + myNum);
// }
// myfunc();

// //globalscope
// var fruit ="pineapple";
// //local scope
// function fruits(){
//     var fruit="apple";
//     return fruit;
// }

// console.log("local scope: "+fruits());
// console.log("global scope: "+fruit);

//returb value with function

        // function myAssignment(value){
        //     return value*10
        // }
        // console.log(myAssignment(30));

//control statement:
function myFunc(itsTrue){
    if(itsTrue){
        return("its true")
    }
    return "its not true"
}
console.log("IF true: "+myFunc(true));
console.log("IF not true: "+myFunc(false));