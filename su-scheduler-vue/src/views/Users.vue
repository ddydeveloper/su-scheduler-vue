<template>
  <div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Scheduler from '@/components/Scheduler.vue';
import UsersList from '@/components/UsersList.vue';

@Component({
    components: { Scheduler, UsersList },
 })
export default class Company extends Vue {}
</script>
