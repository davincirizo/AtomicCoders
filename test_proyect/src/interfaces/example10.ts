interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}

let mySquare = createSquare({ color: "red", width: 100 });
let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);