<template>
    <div>
        <div class="user-item" v-for="user in users" :key="user.id" @click="onSelectedUser(user)">
            <img v-if="!user.active" alt="Avatar" src="../assets/avatar.png" height="45" width="45">
            <img v-if="user.active === true" alt="Avatar" src="../assets/avatar-active.png" height="45" width="45">
            <div class="description">
                <p class="title">{{user.firstName}} {{user.lastName}}</p>
                <p class="body">{{user.position.name}} at {{user.company.name}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import User from '@/models/user.ts';

@Component
export default class UsersList extends Vue {
    get users(): User[] {
        return this.$store.state.users;
    }

    private onSelectedUser(user: User): void {
        this.$store.dispatch('selectUser', user);
    }
}
</script>

<style scoped lang="scss" scoped>
img {
    border-radius: 50%;
    float: left;
    margin-right: 15px;
}

.description {
    overflow: hidden;
}

.title {
    margin: 0;
    padding: 0;
    font-weight: bold;
}

.body {
    margin: 0;
    padding: 0; 
    font-size: 12px;
}

.user-item {
    margin: 15px;
    cursor: pointer;
}
</style>
