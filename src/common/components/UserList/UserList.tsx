import { userList } from "@/app/api/user/userList"
import { UserRoles } from "@/common/types/UserType"

export function UserList(){

    return <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Role</th>
                <th>Password</th>
            </tr>
            {
            userList.map( user => {
                return <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{UserRoles[user.role]}</td>
                <td>{user.password}</td>
                </tr>
            })
            }
        </table>
    </div>
    }