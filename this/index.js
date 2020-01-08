//this refers to the current object or this object(similar to this in English Language)
console.log(this === window) //it will return true as globally this refers to window object

var myObj = {
    name: "Kumail",
    sayHello: function () {
        console.log("Hello " + this.name)
    }
}

myObj.sayHello()
/* our object myObj has property sayHello which is nothing but a function logging Hello+this.name
here this doesnot refers to window but our obj "myObj"
*/

//complex example

var Obj = {
    category: "Student",
    name: "Kumail",
    about: {
        gender: "Male",
        status: "Single",
        category: "Teacher",
        sayHello: function () {
            console.log("This is " + Obj.name + " which is a " + Obj.category + " but in bio he is " + this.category)
        }
    }


}

Obj.about.sayHello()
//it will console "This is Kumail which is a Student but in bio he is a Teacher"