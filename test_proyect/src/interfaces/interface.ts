import { Marc } from "../types/types";

export interface UserInterface {
    name: string;
    id: number;
    brand: Marc
}

interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

const bear: Bear = {
    name: 'Honey',
    honey: true,
}

//interface
interface Window {
    title: string;
}

interface Window {
    ts: string;
}

const winodws1 :Window ={
    title:'Hola',
    ts:"Bus"
}


interface Colorful {
    color: string;
  }
   
  interface Circle {
    radius: number;
  }
   
  interface ColorfulCircle extends Colorful, Circle {}
   
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };


  type ColorfulCircle2 = Colorful & Circle;

  ///
  interface Box<Type> {
    contents: Type,
    number?:number
  }

  const i1:Box<string> = {
    contents:'hola',
    number:6
  }
  const i13:Box<number> = {
    contents:5
  }

  /////

  interface Box<Type> {
    contents: Type;
  }
   
  interface Apple {
    name:string,
    cant:number
  }
   
  // Same as '{ contents: Apple }'.
  type AppleBox = Box<Apple>;

  const l0: Box<Apple> ={
    contents:{
        name:'apple',
        cant:2
    }
  }

  const ol: AppleBox = {
    contents:{
        name:'apple',
        cant:2
    }
  }

  function setContents<Type>(box: Box<Type>, newContents: Type) {
    box.contents = newContents;
  }

  const aplle1:Apple = {
    name:'fruta',
    cant:2
  }

  const new1 = setContents<Apple>(ol,aplle1)

  console.log(new1)
