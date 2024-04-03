function greet<Str extends number>(s: Str) {
    console.log("Hello, " + s);
}

greet(1);