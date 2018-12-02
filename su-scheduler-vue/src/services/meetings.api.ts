import 'rxjs/add/observable/of';
import axios, { AxiosPromise } from 'axios';
import Meeting from '@/models/meeting';
import Participant from '@/models/participant';

export default class MeetingsApi {
    private api: string = 'url';

    public getUserMeetings(id: number): AxiosPromise<Meeting[]> {
        return axios.get(`${this.api}/users/${id}/meetings`);
    }

    public getCompanyMeetings(id: number): AxiosPromise<Meeting[]> {
        return axios.get(`${this.api}/companies/${id}/meetings`);
    }

    public getMeeting(id: number): AxiosPromise<Meeting> {
        return axios.get(`${this.api}/meetings/${id}`);
    }

    public getMeetingParticipants(id: number): AxiosPromise<Participant[]> {
        return axios.get(`${this.api}/meetings/${id}/participants`);
    }
}
