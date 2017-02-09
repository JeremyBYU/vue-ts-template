<template lang="pug">
  div
    hello(name="Evert")
    bye
</template>

<script lang="ts">
import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Bye from '../components/Bye.vue'
import Hello from '../components/Hello.vue'

@Component({ components: { Hello, Bye }})
export default class Home extends Vue {

}
</script>