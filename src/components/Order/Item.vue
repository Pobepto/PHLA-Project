<template>
  <div class="order_item">
    <img
      class="order_item-img"
      :src="require(`@/assets/${img}`)"
    >
    <div class="order_item-desc">
      <span class="title">{{ title }}</span>
      <span class="price">{{ price }} ₽</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Item extends Vue {
  @Prop({ default: 'Empty' }) readonly title!: string
  @Prop({ default: '0' }) readonly price!: string
  @Prop({ default: '' }) readonly img!: string
}
</script>

<style lang="scss" scoped>
.order_item {
  display: flex;
  flex-direction: column;
  width: 12rem;
  margin-bottom: 2rem;
  cursor: pointer;

  .order_item-img {
    width: 13rem;
    border-radius: 10px;
  }
  .order_item-desc {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    font-size: 0.9rem;

    .price {
      font-weight: 600;
    }
  }
}
</style>
