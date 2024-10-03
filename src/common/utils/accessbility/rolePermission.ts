import { USER_KEY_LOCALSTORAGE } from "@/common/config";
import { accessPermission } from "./permission-config";
import { UserRoles, UserType } from "@/common/types/UserType";


export function isResourceAllowedForRole(
    resource: string,
){
    const userJson =  localStorage.getItem(USER_KEY_LOCALSTORAGE)
    let user : UserType | undefined = undefined;
    if (userJson) user = JSON.parse(userJson);
    
    if(user && resource === '/login') return window.location.href = '/dashboard';
    const userRole = user?.role ?? UserRoles.GUEST;
    
    const access = accessPermission.find( 
        (access: { role: UserRoles; }) => access.role === userRole 
    )

    if (!access) return window.location.href = '/';
    for(const allowResource of access?.allowsResources){
        if( 
            allowResource === resource ||
            allowResource === '*'
        ) return true;
    }
    return window.location.href = '/'
}