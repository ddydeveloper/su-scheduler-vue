import Company from './company';
import Position from './position';

export default class User {
    public id!: number;
    public company!: Company;
    public position!: Position;
    public firstName!: string;
    public lastName!: string;
}
