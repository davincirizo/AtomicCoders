class Animal {
    pets : boolean
    constructor(){
        this.pets = true
    }
    move() {
      console.log("Moving along!");
    }
  }
   
  class Dog extends Animal {
    // constructor(){
    //     super()
    // }
    woof(times: number) {
      for (let i = 0; i < times; i++) {
        console.log("woof!");
      }
    }
  }
   
  const d = new Dog();
  // Base class method
  d.move();
  // Derived class method
  d.woof(3);

  console.log(d.pets)