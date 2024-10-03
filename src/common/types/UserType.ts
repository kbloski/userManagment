export enum UserRoles {
    ADMIN,
    MANAGER,
    SUPORT,
    USER
}

export type UserType = {
    id?: number;
    username: string;
    password: string;
    role: UserRoles
}