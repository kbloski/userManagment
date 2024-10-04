import style from './userInfo.module.css';
import { useLogged } from "@/common/hooks/useLogged";
import { UserRoles } from "@/common/types/UserType";

export function UserInfo(){
    const {isLoggedIn,user} = useLogged();
    
    return<>
        <div className={style.container}>
            {  isLoggedIn ? <>
                    <div>Username: {user?.username}</div>
                    <div>Id: {user?.id}</div>
                    <div>Role: {UserRoles[Number(user?.role)]}</div>
                </> : <div>Nie jesteś zalogowany</div>
            }
            <button className={style.btn}>Edytuj</button>
        </div>
    </>
}