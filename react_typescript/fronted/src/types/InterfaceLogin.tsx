import { InterfaceResponse } from "./InterfaceResponse"

export interface RequestLogin {
    email: string,
    password: string,
}

export interface ResponseLogin extends InterfaceResponse {
    token: string
    user: ResponseUser
}

export interface ResponseUser {
    email: string,
    userName: string,
    name: string
}