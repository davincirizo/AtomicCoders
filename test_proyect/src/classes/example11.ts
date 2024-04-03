class Box {
    content: string = "";
    sameAs(other: this) {
        return other.content === this.content;
    }
}


const obj = new Box()
obj.content = 'Buss'
const obj2 = new Box()
obj2.content = 'Buss'

console.log(obj2.sameAs(obj))