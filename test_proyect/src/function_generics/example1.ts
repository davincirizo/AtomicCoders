type City = {
    name: string,
    isCapital: boolean
}

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

const cities:City[] =[
    {name:'Santiago', isCapital:false},
    {name:'La Habana', isCapital:true},
    {name:'Guantanamo', isCapital:false},
    {name:'Del Rio', isCapital:false},
]

function isCapital(n:City):string{
    return n.isCapital ? n.name : ''
}


const parsed = map(["1", "2", "3"], (n) => parseInt(n));
const types = map(cities , (n) => isCapital(n))


console.log(parsed)
console.log(types)
