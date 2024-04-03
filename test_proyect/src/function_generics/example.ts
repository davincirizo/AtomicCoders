
type Animals = {
    color: string,
    cool: boolean
}

const fishes: Animals[] = [
    { color: "brown", cool: true },
    { color: "black", cool: false },
    { color: "white", cool: true }
]

function firstElement<Type>(arr: Type[]): Type [] | Type | undefined {
    return arr;
}

console.log(firstElement(fishes))
