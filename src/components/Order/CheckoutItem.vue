<template>
  <div class="order_checkout">
    <img
      class="order_checkout-img"
      :src="require(`@/assets/${img}`)"
    >
    <span class="order_checkout-v">{{ amount }}</span>
    <span class="order_checkout-v">X</span>
    <span class="order_checkout-v">{{ title }}</span>
    <span class="order_checkout-g">{{ price }} ₽</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CheckoutItem extends Vue {
  @Prop({ default: '0' }) readonly amount!: string
  @Prop({ default: 'Empty' }) readonly title!: string
  @Prop({ default: '0' }) readonly price!: string
  @Prop({ default: '' }) readonly img!: string
}
</script>

<style lang="scss" scoped>
.order_checkout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". . . . .";
  margin-bottom: 1rem;
  font-weight: 600;

  .order_checkout-img {
    width: 7rem;
    border-radius: 10px;
  }
  .order_checkout-v {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .order_checkout-g {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C4C4C4;
  }
}
</style>
