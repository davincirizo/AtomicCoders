interface A {
    x: number;
    y?: number;
  }
  class C implements A {
    x = 0;
  }

  const b = new C
  console.log(b)