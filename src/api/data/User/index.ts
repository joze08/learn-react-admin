import api from 'api';

import { IUserRegister, IUserAuthenticate, IUserAuthenticateReturn } from 'interfaces/User.interface';

class UserData{
    register(data: IUserRegister){
        return api.post<IUserRegister>(`register`, data);
    }

    authenticate(data: IUserAuthenticate){
        return api.post<IUserAuthenticateReturn>(`authenticate`, data);
    }
}

export default new UserData();