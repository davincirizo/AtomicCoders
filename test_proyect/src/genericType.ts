type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}
// export declare const backpack: Backpack<string>;


export function returnStringArray():StringArray{
    const puppy1: StringArray = ['hello','second'];
    return puppy1
}

export function returnNumberArray():NumberArray{
    const puppy1: NumberArray = [1,2];
    return puppy1
}

export function returnObjectWithNameArray():ObjectWithNameArray{
    const puppy1: ObjectWithNameArray = [{'name':'Bool'},{'name':'Bool2'}];
    return puppy1
}


