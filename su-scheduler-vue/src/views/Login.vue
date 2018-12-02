<template>
  <el-form :model="ruleForm2" status-icon label-width="120px">
    <el-form-item label="Login">
        <el-input></el-input>
    </el-form-item>
    <el-form-item label="Password">
        <el-input type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Confirm">
        <el-input type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary">Submit</el-button>
        <el-button>Reset</el-button>
    </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ })
export default class Login extends Vue {}
</script>
