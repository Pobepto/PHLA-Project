import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NavigationMixin extends Vue {
  $goToPage (name: string) {
    this.$router.push({ name })
  }
}
