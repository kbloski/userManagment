import { USER_KEY_LOCALSTORAGE } from "../config";

export function logOut(){
    localStorage.setItem(USER_KEY_LOCALSTORAGE, '')
    if (typeof window === 'undefined'){
    }
}

export function isLoggedIn(){
    const user = localStorage.getItem(USER_KEY_LOCALSTORAGE);
    return Boolean(user);
}