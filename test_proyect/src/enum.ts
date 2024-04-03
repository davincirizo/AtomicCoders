export enum Flower {
  Rose,
  Rhododendron,
  Violet,
  Daisy,
}

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}


console.log(Direction1.Down)

////
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
};

/////
enum E {
  X,
  Y,
  Z,
}

function f(obj: { Y: number }) {
  return obj.Y;
}
console.log(f(E))

/////
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}
 
/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;
 
function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");
//////
////

enum Enum {
  A,
}
 
let a = Enum.A;
let nameOfA = Enum[a]; // "A"


////
const enum Enum1 {
  A = 1,
  B = A * 2,
}

/////

const enum Direction2 {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Direction2.Up,
  Direction2.Down,
  Direction2.Left,
  Direction2.Right,
];

console.log(directions)
////
////
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
 
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
 
EDirection.Up;
           
//   (enum member) EDirection.Up = 0
 
ODirection.Up;
           
//   (property) Up: 0
 
// Using the enum as a parameter
function walk(dir: EDirection) {}
 
// It requires an extra line to pull out the values
type Directions = typeof ODirection[keyof typeof ODirection];
function run(dir: Directions) {}
 
walk(EDirection.Left);
run(ODirection.Right);
