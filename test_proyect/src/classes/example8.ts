class Base {
    name = "base";
    constructor() {
        console.log("My name is " + this.name);
    }
}

class Derived extends Base {
    name = "derived";
}

// Prints "base", not "derived"
const s = new Derived();
console.log(s.name)