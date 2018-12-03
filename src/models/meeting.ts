import User from './user';

export default class Meeting {
    public id!: number;
    public name!: string;
    public description!: string;
    public startDate!: Date;
    public startTimeMinutes!: number;
    public durationMinutes!: number;
    public createdBy!: number;
    public created!: Date;
    public companyId!: number;

    public startTime!: string;
    public endTime!: string;
    public author!: User;
}
