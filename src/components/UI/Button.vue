<template>
  <div class="ui-button">
    <el-button
      :class="['fullwidth', buttonTypeClass]"
      :loading="loading"
      :disabled="disabled"
      @click="onClick"
    >
      {{ label }}
    </el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop(Boolean) readonly loading!: boolean
  @Prop({ default: false }) readonly disabled!: boolean
  @Prop({ default: 'button' }) readonly label!: string
  @Prop({ default: 'primary' }) readonly type!: string

  get buttonTypeClass () {
    if (this.type === 'primary') return 'primary'
    return 'plain'
  }

  onClick (v: Event) {
    this.$emit('click', v)
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  .el-button {
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 800;
    color: #ffffff;
    border-width: 0px;
  }

  .primary {
    min-height: 3rem;
    padding: 0 3rem;
    font-size: 0.8rem;
    background-color: $purple;
  }

  .plain {
    min-height: 2.5rem;
    padding: 0 2rem;
    font-size: 0.7rem;
    background-color: $orange;
  }
}
</style>
