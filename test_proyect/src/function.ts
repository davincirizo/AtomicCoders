import { UserInterface } from "./interface";

export function getLength(obj: string | string[]) {
    return obj.length;
}

function showNameUser(user: UserInterface): string {
    return user.name
}

async function getFavoriteNumber(): Promise<number> {
    return 26;
}
//
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase());
});


//
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

///
function printName(obj: { first: string; last?: string }) {
    console.log(obj.first)
    console.log(obj.last)
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Allisson" });

//
//
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202")


////
function printIdType(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}

/////

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}

welcomePeople(['Juan', 'Guillermo'])
welcomePeople('Pedro')

///

function getFirstThree(x: number[] | string) {
    console.log(x.slice(0, 3))
}

getFirstThree('as')
getFirstThree([1, 2, 3, 4, 5])


////
type Point = {
    x: number;
    y: number;
};

const point1: Point = {
    x: 15,
    y: 12
}

// Exactly the same as the earlier example
function printCoord2(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });
printCoord2(point1);


///
declare function handleRequest(url: string, method: "GET" | "POST"): void;




const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, "GET");
// handleRequest(req.url, req.method);


////
const req1 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req1.url, req1.method);

////

declare const loggedInUsername: string;

const users = [
    { name: "Oby", age: 12 },
    { name: "Heera", age: 32 },
];

const loggedInUser = users.find((u) => u.name === "Oby1");
console.log(loggedInUser ? loggedInUser.age : 'Hello');
////

////



type S = {
    value: any, index: number
}
// When strictNullChecks: true
type Array1 = {
    find(predicate: (value: any, index: number) => boolean): S | undefined;
};
// When strictNullChecks: false the undefined is removed from the type system,
// allowing you to write code which assumes it always found a result


const myArray: Array1 = {
    find: function (as) {
        if (5 > 6) {
            const su: S = {
                value: 12,
                index: 15
            }
            return su
        }
    }
};
console.log(myArray)

/////
function liveDangerously(x?: number | null) {
    console.log(x?.toFixed());
}

liveDangerously(null)




/////No puede ser null
function liveDangerously1(x?: number | null) {
    console.log(x!.toFixed());
}

liveDangerously1(1)


////
function getUsersOnlineMessage(numUsersOnline: number | null) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}

////
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

/////
///
function printAll2(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}


////
///
function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
}

////////
function printAll3(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {

                //   (parameter) strs: string[]
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);

            //   (parameter) strs: string
        }
    }
}
//////
/////

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 
//   (parameter) x: Date
    } else {
      console.log(x.toUpperCase());
                 
//   (parameter) x: string
    }
  }

  logValue(new Date)
  logValue('pss')

  //////
  ////
  let x: string | number | boolean;
 
  x = Math.random() < 0.5;
 //Devuelve True
  console.log(x);








