<template>
  <div>
    <div class="cards-container" v-if="meetings.length > 0">
      <el-card class="box-card" v-for="meeting in meetings" :key="meeting.id">
        <div slot="header" class="clearfix">
          <span>{{meeting.name}} ({{meeting.author.firstName}} {{meeting.author.lastName}})</span>
        </div>
        <div>
          <el-row v-if="meeting.description">
            <el-col :span="6">Description:</el-col>
            <el-col :span="18">{{meeting.description}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="6">Beginning at:</el-col>
            <el-col :span="18">
              <el-date-picker size="mini" :value="meeting.startDate" type="date" :readonly="true" style="width: 100%"></el-date-picker>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">Time:</el-col>
            <el-col :span="8">
              <el-time-select size="mini" :value="meeting.startTime" :readonly="true" style="width: 100%"></el-time-select>    
            </el-col>
            <el-col :offset="2" :span="8">              
              <el-time-select size="mini" :value="meeting.endTime" :readonly="true" style="width: 100%"></el-time-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-button style="float: right; padding: 3px 0" type="text">Go to meeting</el-button>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
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

<style scoped lang="scss" scoped>
.el-col {
  margin-top: 15px; 
}

.box-card {
  display: inline-block;
  width: 45%;
  margin: 1em; 
  text-align: left;
}

</style>
