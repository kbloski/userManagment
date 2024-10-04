import { UserRoles } from "@/common/types/UserType";
import { userList } from "./api/user/userList";
import styles from "./page.module.css";
import { UserList } from "@/common/components/UserList/UserList";
export default function Home() {
  return (
    <div className={styles.container}>
        <h1>App: Resource-Allowed-By-User-Role</h1>
        <p>
          Wykorzystano: Html, Css, Ts, NextJs(AppRouter), CssModule, Html, Client and React Components, NextApi
        </p>
        
        Dostępni użytkownicy:
        <UserList />
              
    </div>
  );
}
