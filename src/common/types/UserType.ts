export enum UserRoles {
    ADMIN,
    MANAGER,
    SUPPORT,
    USER,
    GUEST
}

export type UserType = {
    id?: number;
    username: string;
    password: string;
    role: UserRoles
}