import { user } from "./types";

export const jsonParser = (jsonString: any) => JSON.parse(jsonString);

export const jsonParserUnknown = (jsonString: string): unknown => JSON.parse(jsonString);


const myAccount = jsonParser(`{ "name": "Dorothea" }`);
const myAccountUnknown = jsonParser(`{ "name": "Luis" }`) as user;
const myAccountUnknown2 = jsonParser(`{ "name": "Luis" }`);

console.log(myAccount.name);
console.log(myAccountUnknown.name);
console.log(myAccountUnknown2.name);
