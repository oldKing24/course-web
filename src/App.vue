<script setup>

</script>

<template>
  <!-- <el-row class="mb-4">
    <el-button disabled>Default</el-button>
    <el-button type="primary" disabled>Primary</el-button>
    <el-button type="success" disabled>Success</el-button>
    <el-button type="info" disabled>Info</el-button>
    <el-button type="warning" disabled>Warning</el-button>
    <el-button type="danger" disabled>Danger</el-button>
  </el-row> -->
  <!-- <button class="btn">button</button> -->
  <router-view></router-view>
</template>

<style >
  .btn{
    @apply bg-purple-500 text-light-500 px-4 py-4 rounded-full transition-all duration-500 hover:( bg-purple-900) focus:(ring-8);
  }
</style>
