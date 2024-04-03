function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    return
}

greeter(printToConsole);
//Result 