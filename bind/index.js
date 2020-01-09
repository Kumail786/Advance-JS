
var obj = {
    num1: 2,
    num2: 4
}

function add() {
    console.log(this.num1 + this.num2)
}
add()//it will log NaN
//now of we want to bind this function to the object to use all properties of
//the object (permenently) we use bind instead of call as we can use props of object only once in call.

var newFunct = add.bind(obj)
newFunct() /// it will log 6 



