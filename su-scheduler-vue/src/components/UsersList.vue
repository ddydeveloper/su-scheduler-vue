<template>
    <el-row>
        <el-col :span="4">
            <img src="img_avatar.png" alt="Avatar">
        </el-col>
        <el-col :span="20">
            <div></div>
            <div></div>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import User from '@/models/user.ts';

@Component
export default class UsersList extends Vue {
    get users(): User[] {
        return this.$store.state.users;
    }

    mounted(): void {

    }
}
</script>

<style scoped lang="scss"></style>
