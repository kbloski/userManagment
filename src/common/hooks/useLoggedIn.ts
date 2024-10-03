// import { useState } from "react";
// import { USER_KEY_LOCALSTORAGE } from "../config";

// export function useLoggedIn(){
//     const [loggedUser, setLoggedUser] = useState(undefined);

//     function refresh(){
//         const user = localStorage.getItem(USER_KEY_LOCALSTORAGE);
//         if (user) setLoggedUser( JSON.parse(user) );
//     }
//     if(typeof window !== 'undefined') refresh();    

//     return { isLogged: Boolean(loggedUser), user: loggedUser, refresh}
// }