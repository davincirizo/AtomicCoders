interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface ListAnimal {
    [x: number]: Animal;
}

interface ListDog {
    [x: number]: Dog
}

const g4: ListAnimal = [
    { name: 'Horse' },
    { name: 'Caballo' }
]

const g5: ListDog = [
    {name:'Miguel',breed:'Bonds'},  
    {name:'Miguel',breed:'cookies'},
    {name:'Miguel',breed:'Vitamines'}
]

console.log(g4[1])
console.log(g5[1])