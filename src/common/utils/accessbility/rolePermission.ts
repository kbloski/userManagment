import { USER_KEY_LOCALSTORAGE } from "@/common/config/config";
import { accessPermission } from "../../config/permission-config";
import { UserRoles, UserType } from "@/common/types/UserType";


export function isResourceAllowedForRole(
    resource: string,
) {
    if (typeof window === 'undefined') return;

    let userJson = undefined;
    try {
        userJson = localStorage.getItem(USER_KEY_LOCALSTORAGE)
    } catch (err) { console.error(err) }

    let user: UserType | undefined = undefined;
    if (userJson) user = JSON.parse(userJson);
    if (
        user &&
        resource === '/login'
    ) return window.location.href = '/dashboard';

    const userRole = user?.role ?? UserRoles.GUEST;
    const access = accessPermission.find(
        (access: { role: UserRoles; }) => access.role === userRole
    )
    if (!access) {
        window.location.href = '/';
        return false;
    }

    for (const allowResource of access?.allowsResources) {
        if (
            allowResource === resource ||
            allowResource === '*'
        ) return true;
    }

    window.location.href = '/'
    return false;
}

export function isAllowedByPriorityForRole(
    minRoleAccess: UserRoles,
    userRole?: UserRoles
) {
    if (isNaN(Number(userRole))) return false;

    const userPermission = accessPermission.find(permission => permission.role === userRole);
    const minAccessPermission = accessPermission.find(permission => permission.role === minRoleAccess);

    if (!userPermission || !minAccessPermission) return false;

    if (userPermission.priority <= minAccessPermission.priority) return true;
    return false;
}