<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-tooltip class="item" effect="dark" :content="header" placement="top-start">
        <span>{{header}}</span>
      </el-tooltip>
    </div>
    <div>
      <el-row v-if="meeting.description">
        <el-col class="label" :span="6">Description:</el-col>
        <el-col :span="18">{{meeting.description}}</el-col>
      </el-row>
      <el-row>
        <el-col class="label" :span="6">Starts at:</el-col>
        <el-col :span="18">
          <el-date-picker
            size="mini"
            :value="meeting.startDate"
            type="date"
            :readonly="true"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="label" :span="6">Duration:</el-col>
        <el-col :span="8">
          <el-time-select
            size="mini"
            :value="meeting.startTime"
            :readonly="true"
            style="width: 100%"
          ></el-time-select>
        </el-col>
        <el-col :offset="2" :span="8">
          <el-time-select size="mini" :value="meeting.endTime" :readonly="true" style="width: 100%"></el-time-select>
        </el-col>
      </el-row>
      <el-row class="bottom-row">
        <el-col :span="24">
          <el-button style="float: right; padding: 3px 0" type="text">Go to meeting</el-button>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Meeting from "@/models/meeting";

@Component
export default class MeetingCard extends Vue {
  @Prop() private meeting!: Meeting;

  get header(): string {
    return `${this.meeting.name} (${this.meeting.author.firstName} ${
      this.meeting.author.lastName
    })`;
  }
}
</script>

<style scoped lang="scss">
.el-row {
  margin-bottom: 1em;
}

.box-card {
  display: inline-block;
  width: 47%;
  margin-top: 1em;
  margin-left: 1em;
  text-align: left;
}

.label {
  padding-top: 0.5em;
}

.bottom-row {
    margin-bottom: 0;
}

span {
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
}
</style>
