interface CallOrConstruct {
    (n: number): string;
    // new(s: string): Date;
}

const obj1 : CallOrConstruct =  (n: number): string => {
    if(n && n>15){
        return 'hello'
    }
    else{
        return 'no hello'
    }
} 
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}