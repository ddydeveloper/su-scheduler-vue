<template>
  <div class="cards-container">
    <div v-if="meetings.length > 0">
      <MeetingCard v-for="meeting in meetings" :key="meeting.id" :meeting="meeting"></MeetingCard>
    </div>
    <h2 v-if="meetings.length <= 0">Choose a user to see planned meetings</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Meeting from "@/models/meeting.ts";
import MeetingCard from "@/components/MeetingCard.vue";

@Component({
  components: {
    MeetingCard,
  }
})
export default class Scheduler extends Vue {
  get meetings(): Meeting[] {
    return this.$store.state.meetings;
  }
}
</script>

<style scoped lang="scss" scoped>
.cards-container {
  padding-bottom: 1em;
  padding-right: 1em;
}

h2 {
  text-align: center;
  padding-top: 1em;
}
</style>
