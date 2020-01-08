//Before ES6

function sayHello(name) {
    console.log("hello " + name)
}

sayHello("Kumail")

//OR

var sayHello = function (name) {
    console.log("hello " + name)
}

sayHello("Ali")

//ES6 (arrow Function)

var sayHello = (name) => {
    console.log("Hello " + name)
}

sayHello("Raza")