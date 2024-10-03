import { UserRoles } from "@/common/types/UserType"

type accessPermissionType = {
    role: UserRoles,
    priority: number,
    allowsResources: string[]
}

const accessPermission : accessPermissionType[] = [
    {
        role: UserRoles.ADMIN,
        priority: 1,
        allowsResources: ['*']
    },
    {
        role: UserRoles.GUEST,
        priority: 100,
        allowsResources: [
            '/',
            '/login'
        ]
    },
]

function addRoleParrents(
    targetRole: UserRoles,
    sourceRole: UserRoles
){

}

export {
    accessPermission
} ;