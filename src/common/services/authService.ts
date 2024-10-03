import { USER_KEY_LOCALSTORAGE } from "../config";

export function logOut(){
    if (typeof window === 'undefined') return;
    
    localStorage.setItem(USER_KEY_LOCALSTORAGE, '')
}

export function isLoggedIn(){
    if (typeof window === 'undefined') return false;

    const user = localStorage.getItem(USER_KEY_LOCALSTORAGE);
    return Boolean(user);
}