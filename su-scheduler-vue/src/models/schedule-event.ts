import Meeting from './meeting';

export default class ScheduleEvent {
    public date!: Date;
    public title!: string;
    public desc!: string;
    public customClass!: string;

    constructor(meeting: Meeting) {
        this.date = meeting.startDate;
        this.title = meeting.name;
        this.desc = meeting.description;
        this.customClass = '';
    }
}