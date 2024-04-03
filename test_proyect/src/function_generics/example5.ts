function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
): Type[] {
    return arr.filter(func);
}

function isMayor(arg:number):boolean{
    return arg>1
}

function myFilterFunction(arg: string): boolean {
    // Ejemplo de función que devuelve true si la longitud del argumento es mayor que 3
    return arg.length > 3;
}

const  varFilter = filter1<number>([1,2,3,4] , n => isMayor(n))
// const  varFilter2 = filter2<number, string extends ([1,2])> ([1,2,3,4] , n => isMayor(n))
const filteredArray: string[] = filter2(["apple", "banana", "orange"], myFilterFunction);
console.log(filteredArray)

console.log(varFilter)