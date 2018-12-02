<template>
  <vue-event-calendar v-if="events.length > 0" :events="events"></vue-event-calendar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'vue-event-calendar/dist/style.css';
import vueEventCalendar from 'vue-event-calendar';
import ScheduleEvent from "@/models/schedule-event.ts";

Vue.use(vueEventCalendar, {locale: 'en'}) 

@Component
export default class Scheduler extends Vue {
    get events(): ScheduleEvent[] {
        return this.$store.state.userEvents;
    }
}
</script>

<style scoped lang="scss"></style>
