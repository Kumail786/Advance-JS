//we pass call back function to a function to do some specific task after completion of that function.

//let suppose we have a function which takes 2 arguments , one a number and second a callback

var add = (num,callback)=>{
    return callback(num)
}

//here is the callback function

var addTen = function(num){
    console.log(10 + num)
}

add(3,addTen)
/*
Flow of callback

when we call add(3,addTen)
its calling add function which do nothing but returns and calls addTen function with num argument.That means now addTen
has access to the num parameter.As addTen has already been called its logging 10+num(we passed above)
*/