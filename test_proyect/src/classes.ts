import { UserInterface } from "./interface";
import { Marc } from "./types";

export class UserAccount {
    name: string;
    id: number;
    brand: Marc

    constructor(name: string, id: number, brand: Marc) {
        this.name = name;
        this.id = id;
        this.brand = brand;

    }

}

const user: UserInterface = new UserAccount("Murphy", 1, 'ferrari');



