import style from './userList.module.css';
import { userList } from "@/app/api/user/userList"
import { UserRoles } from "@/common/types/UserType"

export function UserList() {
    const users = userList;
    return <div>
        <table className={style.table}>
            <thead>
                <tr>
                    <th colSpan={4}>
                        Lista dostępnych użytkowników
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={style.tr}>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Role</th>
                </tr>
                {
                    users.map(user => {
                        return <tr key={user.id} className={style.tr}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{UserRoles[user.role]}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}