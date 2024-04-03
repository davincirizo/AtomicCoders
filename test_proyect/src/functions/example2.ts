type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
    return someArg > 3;
}
myFunc.description = "default description";

//Dos formas diferentes

const func2 : DescribableFunction = function(someArg:number):boolean{
    return someArg > 3;
}
func2.description = 'Hello'

doSomething(myFunc);
doSomething(func2);
