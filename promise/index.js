//promisses are usually used when we have to make asynchronous calls. 
//like getting data from database or any similar thing

var newPromise = new Promise(function(resolved,rejected){
/* here we can write our async code
and then we can check it like if data is available do this else do this.
*/
var a = 2;
if(a){
    resolved(1234)
}
else{
    rejected();
}
})

newPromise.then((value)=>{
    console.log("We have found the value ",value)
}).catch(()=>{
    console.log("promise has been rejected")
})
//and it is how promise works