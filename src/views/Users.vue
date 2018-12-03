<template>
  <el-row :gutter="15">
    <el-col :span="6">
      <div class="users-content">
        <UsersList></UsersList>
      </div>
    </el-col>
    <el-col :span="18">
      <div class="users-content">
        <Scheduler></Scheduler>
      </div>
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
.users-content {
  margin-top: 15px;
  border-radius: 4px;
  background: #eee;
}
</style>
