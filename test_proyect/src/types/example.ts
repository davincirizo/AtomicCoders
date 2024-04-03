

export type Fish = { swim: () => void ,name?: string};
export type Bird = { fly: () => void ,name?: string};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

const bird: Bird = {
    fly() {
        return 3
    },
}
const fish: Fish = {
    swim() {
        return 3
    }
}

console.log(isFish(bird))
console.log(isFish(fish))