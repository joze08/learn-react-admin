export interface IUserRegister{
    username: string;
    email: string;
    password: string;
}

export interface IUserAuthenticate{
    email: string;
    password: string;
}

export interface IUserAuthenticateReturn{
    token: string;
    user: {
        email: string;
        password: string;
    }
}