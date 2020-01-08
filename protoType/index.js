var person = function () { }

person.prototype.name = "Kumail"
person.prototype.age = 19

var Kumail = new person()

console.log(Kumail)
//it will log an object with prototypes property taken by its parent person

//another

person.prototype.hello = function () {
    console.log("Hello " + this.name)
}
// when ever we will add any prototype in person, it will be automatically avalaible in this scope of child objects

Kumail.hello()
//it will return hello Kumail