
export type Puppy = {
    color: string;
};
export type Marc =
    'suzuki' | 'hyundai' | 'ferrari'

export type user = {
    name: string
}

type ID = number | string;



const puppy1: Puppy = {
    color: 'AZul'
}


///Type Herencia

type Animal = {
    name: string;
}

type Bear = Animal & {
    honey: boolean;
}

const puppy2: Bear = {
    name: 'string',
    honey:true
}

////
type Fish = { swim: () => void };
type Bird = { fly: () => void };

const bird: Bird = {
    fly() {
        return 2
    },
}
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

console.log(move(bird))






