interface SomeObject {
    age: string
}

type SomeConstructor = {
    new(s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}