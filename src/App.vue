<template lang="pug">
  div
    ul
      li: router-link(to="/") home
    
    router-view
</template>

<script lang="ts">
import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class App extends Vue {}
</script>

<style lang="stylus">
  body
    background-color #faa
</style>
