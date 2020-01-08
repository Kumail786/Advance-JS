var person = function(name,age){
this.age = age
this.name = name
}
//we are using one object factory to create multiple objects with same property but different values
var Kumail = new person("Kumail",19)
var Ali = new person("Ali",54)
var Amaan = new person("Amaan",20)
var Yousuf = new person("Yousuf",23)

console.log(Kumail,Ali,Amaan,Yousuf)