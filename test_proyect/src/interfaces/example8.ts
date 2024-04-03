interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
}

const h7: NumberOrStringDictionary = {
    length: 5,
    name: "John",
    age: 25,
    city: "New York"
};

console.log(h7)