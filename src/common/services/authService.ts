import { USER_KEY_LOCALSTORAGE } from "../config/config";

export function logOut() {
    if (typeof window === 'undefined') return;

    localStorage.setItem(USER_KEY_LOCALSTORAGE, '')
}
