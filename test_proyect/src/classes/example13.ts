class BoxUsing {
    content: string = "";
    sameAs(other: this) {
        return other.content === this.content;
    }
}

class DerivedBox extends BoxUsing {
    otherContent?: string = "?";
}

const base = new BoxUsing();
const derived = new DerivedBox();
console.log(derived.sameAs(base))
