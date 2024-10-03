import { USER_KEY_LOCALSTORAGE } from "../config";

export function logOut(){
    if (typeof window === 'undefined'){
        localStorage.removeItem(USER_KEY_LOCALSTORAGE)
    }
}