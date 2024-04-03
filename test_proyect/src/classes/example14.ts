type test = {
    name:string,
    note:number
}

class Box<T> {
    value?: T;

    hasValue(): this is { value: T } {
        return this.value !== undefined;
    }
}

const box = new Box<string>();
box.value = "Gameboy";

const box2 = new Box<number>
box2.value = 6

const box3 = new Box<test>
box3.value = {
    name:'Sprint',
    note:8
}




console.log(box3.hasValue())
console.log(box.hasValue())
console.log(box2.hasValue())