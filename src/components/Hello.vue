<template lang="pug">
  div
    h1 Hello {{name}}!
    p(@click="increment") Your count is {{ count }}
</template>

<script lang="ts">
import * as Vue from 'vue'
import { Component, prop } from 'vue-property-decorator'

@Component
export default class Hello extends Vue {
  count: number = 0
  @prop(String) name: string
  increment() {
    this.count ++
  }
}
</script>