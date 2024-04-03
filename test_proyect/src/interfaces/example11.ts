interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

const g7:SquareConfig = {
    color:'red',
    width:81,
    spell:true,
    magic:7
}