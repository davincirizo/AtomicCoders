import { useState } from "react";
import { InterfaceUser } from "../types/InterfaceUser";

export function useLocalStorage (key:string ,initialValue:InterfaceUser | string | null){
    const [storedValue , setStoredValue] = useState(() =>{
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item):initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = (value:object | string) => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key,JSON.stringify(value))
            
        } catch (error) {
            console.log(error)
            
        }
    }

    return[storedValue,setValue]
}