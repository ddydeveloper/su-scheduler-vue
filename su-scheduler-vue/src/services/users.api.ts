import Company from '@/models/company';
import 'rxjs/add/observable/of';
import axios, { AxiosPromise } from 'axios';
import User from '@/models/user';

export default class UsersApi {
    private api: string = 'url';

    public getCompany(id: number): AxiosPromise<Company> {
        return axios.get(`${this.api}/companies/${id}`);
    }

    public getUsers(id: number): AxiosPromise<User[]> {
        return axios.get(`${this.api}/companies/${id}/users`);
    }
}