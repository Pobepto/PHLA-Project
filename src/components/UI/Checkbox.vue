<template>
  <el-checkbox
    class="ui-checkbox"
    @change="onChange"
  >
    {{ label }}
  </el-checkbox>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Input extends Vue {
  @Prop({ default: '' }) readonly label!: string

  onChange (e) {
    this.$emit('change', e)
  }
}
</script>

<style lang="scss">
.ui-checkbox {
  margin-bottom: 1rem;
  .el-checkbox__inner {
    width: 30px;
    height: 30px;
    &:active,
    &:focus,
    &:hover {
      border-color: $purple;
    }
    &::after {
      height: 14px;
      left: 11px;
      position: absolute;
      top: 4px;
      width: 6px;
    }
  }
  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: $purple;
    border-color: $purple;
  }
  .el-checkbox__label {
    color: $black;
  }
  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: $purple;
  }
}
</style>
