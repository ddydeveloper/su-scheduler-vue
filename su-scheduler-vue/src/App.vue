<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item index="1" :route="{name:'users'}">Users</el-menu-item>
        <el-menu-item index="2" :route="{name:'meetings'}">Meetings</el-menu-item>
      </el-menu>
      <router-view/>
    </el-col>
  </el-row>
</template>

<style lang="scss"></style>