<template>
  <el-input
    class="ui-input"
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    @input="onInput"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Input extends Vue {
  @Prop({ default: '' }) readonly label!: string
  @Prop({ default: 'text' }) readonly type!: string
  @Prop({ default: false }) readonly disabled!: boolean
  @Prop({ default: '' }) readonly placeholder!: string

  onInput (e: InputEvent) {
    this.$emit('input', (e.target as HTMLInputElement).value)
  }
}
</script>

<style lang="scss" scoped>
.ui-input >>> .el-input__inner {
  min-height: 3rem;
}
</style>
