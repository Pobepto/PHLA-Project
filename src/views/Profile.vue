<template>
  <div>
    {{ token }}
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class Profile extends Vue {
  @State(state => state.Account.token) token
}
</script>

<style>

</style>
