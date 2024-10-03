import { UserRoles } from "@/common/types/UserType"

export const userList = [
    {
        id: 1,
        role: UserRoles.ADMIN,
        username: 'admin',
        password: 'admin'
    },
    {
        id: 2,
        role: UserRoles.MANAGER,
        username: 'manager',
        password: 'manager'
    },
    {
        id: 3,
        role: UserRoles.SUPPORT,
        username: 'support',
        password: 'support'
    },
    {
        id: 4,
        role: UserRoles.USER,
        username: 'client',
        password: 'client'
    },
    
]