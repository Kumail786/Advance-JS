//closure function is a function which returns a function.
//lets see an example

const func1 = (num1) => {
    return (num2) => {
        console.log(num1 + num2)//although we are in the scope of returning function but num1 is accessable here.
        //this is how clousure works.
    }
}

var returning = func1(10) // it will return a function
//in returning function num1 or "10" is accessable.
//here returning can be written as
/*
const returning = (num2)=>{
    console.log(10 + num2)
}
*/
returning(3)//it will log 13.

//this is very use as now we dont have to write closure function again and again.
var add10 = func1(10)
add10(5)//it will log 15.