export enum UserRoles {
    ADMIN,
    MANAGER,
    SUPORT,
    USER
}

export type UserType = {
    username: string;
    password: string;
    role: UserRoles
}