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
        role: UserRoles.MANAGER,
        priority: 2,
        allowsResources: []
    },
    {
        role: UserRoles.SUPPORT,
        priority: 3,
        allowsResources: []
    },
    {
        role: UserRoles.USER,
        priority: 4,
        allowsResources: ['/dashboard']
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
    const target = accessPermission.find( role => targetRole === role.role );
    const source = accessPermission.find( role => sourceRole === role.role );
    if (!target || !source) throw new Error('Add Role Parrent Permission Error in permission-config.ts');

    target.allowsResources = Array.from( new Set(target.allowsResources.concat(source.allowsResources)) );
}

addRoleParrents( UserRoles.USER, UserRoles.GUEST);
addRoleParrents( UserRoles.SUPPORT, UserRoles.USER);
addRoleParrents( UserRoles.MANAGER, UserRoles.SUPPORT);
addRoleParrents( UserRoles.ADMIN, UserRoles.MANAGER);

export {
    accessPermission
} ;