export enum UserRoles {
    ADMIN,
    MANAGER,
    SUPORT,
    USER,
    GUEST
}

export type UserType = {
    id?: number;
    username: string;
    password: string;
    role: UserRoles
}