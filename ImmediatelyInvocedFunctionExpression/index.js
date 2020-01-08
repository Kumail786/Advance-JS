/*
lets say we have one variable 

var name = "Kumail"

lets suppose we have one hundred lines of code here

and then we are again declaring

var name ;
(here we want to check if name doesnot has any value, do this)
if(!name){
    do this
}
but it will not gonna enter in if statement as name is already declared and initialize globally(on window object)
*/

(function () {
    var name = "Kumail"
    console.log(name)
})();

(function () {
    var name;
    if (!name) {
        //it will enter in this as now name is declared but not initialize in this scope
        console.log("Name has no value")
    }
})();