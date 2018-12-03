<template>
  <div>
    <div v-if="meetings.length > 0"></div>
    <el-alert v-else title="There are no event for a selected uses" type="info"></el-alert>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'vue-event-calendar/dist/style.css';
import vueEventCalendar from 'vue-event-calendar';
import Meeting from '@/models/meeting.ts';

Vue.use(vueEventCalendar, {locale: 'en'});

@Component
export default class Scheduler extends Vue {
    get meetings(): Meeting[] {
        return this.$store.state.meetings;
    }
}
</script>

<style scoped lang="scss"></style>
