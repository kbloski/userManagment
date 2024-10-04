import style from './managerUserPanel.module.css';
import { userList } from "@/app/api/user/userList"
import { UserRoles } from "@/common/types/UserType"

export function ManagerUserPanel() {
    const users = userList;
    return <section className={style['section-panel']}>
        <div className={style.container}>
            <h2>Lista dostępnych użytkowników</h2>
            <table className={style.table}>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                    {
                        users.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{UserRoles[user.role]}</td>
                                <td>
                                    <button className={style.btn}>Edytuj</button>
                                    <button className={style.btn}>Usuń</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </section>
}