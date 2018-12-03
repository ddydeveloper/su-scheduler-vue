<template>
  <el-row>
    <el-col :span="6">
      <UsersList></UsersList>
    </el-col>
    <el-col :offset="1" :span="17">
      <Scheduler></Scheduler>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Scheduler from '@/components/Scheduler.vue';
import UsersList from '@/components/UsersList.vue';

@Component({
    components: { Scheduler, UsersList },
 })
export default class Company extends Vue {
  private mounted(): void {
      this.$store.dispatch('loadCompanyUsers', 1);
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  margin-top: 15px;
  border-radius: 15px;
  background: #eee;
}
</style>
