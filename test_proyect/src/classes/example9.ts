class Greeter {
    public greet() {
        console.log("Hello, " + this.getName());
    }
    protected getName() {
        return "hi";
    }
}

class SpecialGreeter extends Greeter {
    public howdy() {
        // OK to access protected member here
        console.log("Howdy, " + this.getName());
    }
}
const g = new SpecialGreeter();
g.greet(); // OK
// g.getName();

////
class Base {
    protected m = 10;
  }
  class Derived extends Base {
    // No modifier, so default is 'public'
    m = 15;
  }
  const d = new Derived();
  console.log(d.m); // OK

  ////
  ////
  class Base1 {
    private x = 0;
  }
  const b = new Base1();
  // Can't access from outside the class
//   console.log(b.x);x`
  