//concepts of classes has been come in ES6. before ES6 we used prototype to define prototypes of any object.
//see how we did it in objectCreation now in ES6 we use following method
class Person {
    constructor(name,age){
        this.name  = name;
        this.age = age;
    }
    sayHello(){
        console.log("Hello " +this.name)
    }
}

var Kumail = new Person("Kumail",19)
console.log(Kumail)
Kumail.sayHello()//it will log Hello Kumail