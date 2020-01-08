//it will return a window object
console.log(window)
var myname = "Kumail"
//it will return property of window object which is myname
console.log(window.myname)

//but if we make a function and initaize any variable inside the function , it will only avalible inside that function not
//globally

function nameFunction(){
    var name = "Ali"
    console.log(name)
}

nameFunction()
console.log(name) //it will return nothing