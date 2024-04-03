class MyClass {
    [s: string]: boolean | ((s: string) => boolean);

    check(s: string) {
        return this[s] as boolean;
    }
}

const i8 = new MyClass()
i8.hello = true
i8.property2 = (s: string) => s.length > 3;
//Otra forma 

i8['bye'] = false
i8['change_bye'] = (s: string) => s === 'bye'
i8.bye = i8.change_bye('bye')
console.log(i8)
