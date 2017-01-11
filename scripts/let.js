//let allows us to define variables

//var has global variable, var define function scope

//there is not block scope for var

var doWork = function(flag){

     if(flag){
         //var x = 3;
         let x = 3;
        // return x; 
     }
     return x;
}

var result = doWork(true);
//var result =  doWork(false);
document.write('result when x is declared as var : ' + result);

//------------------------------------------------------//
document.write('if we declare let variable then we get reference error');
//check in console we get//Uncaught ReferenceError: x is not defined