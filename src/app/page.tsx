import { UserRoles } from "@/common/types/UserType";
import { userList } from "./api/user/userList";
import styles from "./page.module.css";
import { UserList } from "@/common/components/UserList/UserList";
export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Zarządzanie Stronami przez Role Użytkowników</h1>
        <p>
          Wykorzystano: Html, Css, Ts, NextJs(AppRouter), CssModule, Html, Client and React Components, NextApi, LocalStorage
        </p>
        <h2>
          Opis strony
        </h2>
        <p>
        Strona umożliwia zarządzanie użytkownikami w oparciu o przypisane im role. Użytkownicy mający określone uprawnienia mogą korzystać z pełnej funkcjonalności serwisu, natomiast użytkownicy o niższych rolach są ograniczeni w dostępie do niektórych treści. W przypadku, gdy użytkownik próbuje odwiedzić adres URL, do którego nie ma uprawnień, zostaje automatycznie przekierowany na stronę główną, co zapewnia bezpieczeństwo i właściwą organizację dostępu do zasobów.
        </p>
        <UserList />
              
    </div>
  );
}
