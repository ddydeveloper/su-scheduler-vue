import Vue from 'vue';
import Vuex from 'vuex';
import User from './models/user';
import Company from './models/company';
import Meeting from './models/meeting';
import UsersApi from './services/users.api';
import MeetingsApi from './services/meetings.api';
import Participant from './models/participant';
import ScheduleEvent from './models/schedule-event';

Vue.use(Vuex);

const usersApi: UsersApi = new UsersApi();
const meetingApi: MeetingsApi = new MeetingsApi();

export default new Vuex.Store({
  state: {
    users: new Array<User>(),
    company: new Company(),
    meetings: new Array<Meeting>(),
    currentUser: new User(),
    userEvents: new Array<ScheduleEvent>(),
    currentMeeting: new Meeting(),
    participants: new Array<Participant>(),
  },
  mutations: {
    setUser(state, user: User): void {
      state.currentUser = user;
    },
    setUsers(state, users: User[]): void {
      state.users = users;
    },
    setCompany(state, company: Company): void {
      state.company = company;
    },
    setMeetings(state, meetings: Meeting[]): void {
      state.meetings = meetings;
    },
    setParticipants(state, participants: Participant[]): void {
      state.participants = participants;
    },
    setUserEvents(state, meetings: Meeting[]): void {
      state.userEvents = [];
      meetings.forEach((m: Meeting) => {
        if (m.startDate) {
          state.userEvents.push(new ScheduleEvent(m));
        }
      });
    },
  },
  actions: {
    loadCompanyUsers(context, companyId: number): void {
      usersApi.getUsers(companyId).then((response) => context.commit('setUsers', response.data));
    },
    loadCompany(context, companyId: number): void {
      usersApi.getCompany(companyId).then((response) => context.commit('setCompany', response.data));
    },
    loadUsersMeetings(context, userId: number): void {
      meetingApi.getUserMeetings(userId).then((response) => context.commit('setUserEvents', response.data));
    },
    loadCompanyMeetings(context, companyId: number): void {
      meetingApi.getCompanyMeetings(companyId).then((response) => context.commit('setMeetings', response.data));
    },
    loadMeetingParticipants(context, meetingId: number): void {
      meetingApi.getMeetingParticipants(meetingId).then((response) => context.commit('setParticipants', response.data));
    },
    selectUser(context, user: User): void {
      context.commit('setUser', user);
      context.dispatch('loadUsersMeetings', user.id);
    },
  },
});
