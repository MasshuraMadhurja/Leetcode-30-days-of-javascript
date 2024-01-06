//Write a function createHelloWorld. 
//It should return a new function that always returns "Hello World".


function createHelloWorld() {
    function a(){
        return "Hello World";
    }
    return a ;
        
};


const f=createHelloWorld(); // "Hello World"
 console.log(f)