//lets say we have an onject

var obj = {
    name: "Kumail"
}
//and we have a function

function sayHello() {
    console.log("Hello " + this.name)
}
sayHello() //here this.name is null , it will return only Hello "blank"
//now if we want to pass object to the function to get access of all properties of object we use
sayHello.call(obj) // it will console Hello Kumail

//one more example with arguments

var obj = {
    name : "Kumail"
}

function showAge(age){
console.log("My name is " + this.name + " and I am " + age + " years old")
}

showAge.call(obj,19)//it will log My name is Kumail and I am 19 years old
