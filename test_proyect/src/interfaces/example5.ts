interface SomeType {
    readonly prop: string;
  }
   
  function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
  }

  const f8 :SomeType = {prop:'es'}
  doSomething(f8)