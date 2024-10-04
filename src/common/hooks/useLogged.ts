import { useEffect, useState } from "react";
import { USER_KEY_LOCALSTORAGE } from "../config/config";
import { UserType } from "../types/UserType";
import { type } from "os";

export function useLogged() {
    const [user, setUser] = useState<UserType | undefined>(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const interval = setInterval(refresh, 100);
        return () => clearInterval(interval)
    }, [user])

    function refresh() {
        if (user && !isLoggedIn) setIsLoggedIn(true);
        const localUserJSON = localStorage.getItem(USER_KEY_LOCALSTORAGE)

        if (localUserJSON) {
            const localUser = JSON.parse(localUserJSON);

            if (!user) setUser(localUser)
            else if (localUser.id !== user.id) setUser(localUser);
        } else if (isLoggedIn || user) {
            setUser(undefined)
            setIsLoggedIn(false);
        }
    }

    return { isLoggedIn, user }
}