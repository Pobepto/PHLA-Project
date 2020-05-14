<template>
  <div :class="['order_item', active ? 'active' : '']">
    <div class="order_item-inner">
      <img
        class="order_item-img"
        :src="require(`@/assets/icons/${type}`)"
      >
    </div>
    <span class="order_item-title">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export enum CategoryType {
  ALL = 'service.png',
  PIZZA = 'pizza.png',
  HAMBURGER = 'hamburger.png',
  BARBECUE = 'barbecue.png',
  SUSHI = 'sushi.png',
  DOUGHNUT = 'doughnut.png',
  COOKIES = 'cookies.png'
}

@Component
export default class Category extends Vue {
  @Prop({ default: false }) readonly active!: boolean
  @Prop({ default: '' }) readonly label!: string
  @Prop({ default: CategoryType.ALL }) readonly type!: CategoryType
}
</script>

<style lang="scss" scoped>
.order_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 9rem;
  width: 5rem;
  border-radius: 5rem;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.1),
              0px 1px 4px rgba(0, 0, 0, 0.05),
              0px 1px 1px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &.active {
    background-color: $yellow;
  }

  .order_item-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    border-radius: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: #ffffff;

    .order_item-img {
      width: 25px;
    }
  }
  &:not(.active) .order_item-inner {
    border: 1px solid $black;
  }
  .order_item-title {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 1.5rem;
  }
}
</style>
