<template>
  <div class="order">
    <div class="order_left">
      <span class="order-title">Еда 🍔</span>
      <div class="order_category-list">
        <OrderCategory
          label="Все"
          :active="currentActiveFilter === CategoryType.ALL"
          :type="CategoryType.ALL"
          @click.native="setActiveFilter(CategoryType.ALL)"
        />
        <OrderCategory
          label="Пицца"
          :active="currentActiveFilter === CategoryType.PIZZA"
          :type="CategoryType.PIZZA"
          @click.native="setActiveFilter(CategoryType.PIZZA)"
        />
        <OrderCategory
          label="Бургеры"
          :active="currentActiveFilter === CategoryType.HAMBURGER"
          :type="CategoryType.HAMBURGER"
          @click.native="setActiveFilter(CategoryType.HAMBURGER)"
        />
        <OrderCategory
          label="Барбекю"
          :active="currentActiveFilter === CategoryType.BARBECUE"
          :type="CategoryType.BARBECUE"
          @click.native="setActiveFilter(CategoryType.BARBECUE)"
        />
        <OrderCategory
          label="Суши"
          :active="currentActiveFilter === CategoryType.SUSHI"
          :type="CategoryType.SUSHI"
          @click.native="setActiveFilter(CategoryType.SUSHI)"
        />
        <OrderCategory
          label="Выпечка"
          :active="currentActiveFilter === CategoryType.DOUGHNUT"
          :type="CategoryType.DOUGHNUT"
          @click.native="setActiveFilter(CategoryType.DOUGHNUT)"
        />
        <OrderCategory
          label="Десерт"
          :active="currentActiveFilter === CategoryType.COOKIES"
          :type="CategoryType.COOKIES"
          @click.native="setActiveFilter(CategoryType.COOKIES)"
        />
      </div>
      <div class="order_items-list">
        <OrderItem
          v-for="(item, index) in filteredFoodList"
          :key="index"
          :title="item.title"
          :price="item.price"
          :img="item.img"
          @click.native="addItem(item)"
        />
      </div>
    </div>
    <div class="order_right">
      <div class="sticky">
        <span class="order-title">Мой Заказ 🍽️</span>
        <div class="order_checkout-list">
          <OrderCheckoutItem
            v-for="item in userOrder"
            :key="item.id"
            :amount="item.amount"
            :title="item.title"
            :price="item.price"
            :img="item.img"
          />
        </div>
        <div class="order_checkout-total">
          <span>Итого:</span>
          <span class="price">{{ userOrderTotalPrice }} ₽</span>
        </div>
        <UI-Button
          class="order_checkout-button"
          label="Заказать"
          type="secondary"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import OrderCategory, { CategoryType } from '../components/Order/Category.vue'
import OrderItem from '../components/Order/Item.vue'
import OrderCheckoutItem from '../components/Order/CheckoutItem.vue'

import UIButton from '../components/UI/Button.vue'
import { Action, Getter } from 'vuex-class'

@Component({
  components: {
    OrderCategory,
    OrderItem,
    OrderCheckoutItem,

    UIButton
  }
})
export default class Order extends Vue {
  CategoryType = CategoryType
  currentActiveFilter = this.CategoryType.ALL

  foodList = [{
    id: 1,
    title: 'Гавайская пицца',
    price: 500,
    img: 'pizza-sample.jpg',
    type: CategoryType.PIZZA
  }, {
    id: 2,
    title: 'Мексиканская пицца',
    price: 430,
    img: 'pizza-sample.jpg',
    type: CategoryType.PIZZA
  }, {
    id: 3,
    title: 'Пицца 4 сыра',
    price: 660,
    img: 'pizza-sample.jpg',
    type: CategoryType.PIZZA
  }, {
    id: 4,
    title: 'Чикен бургер',
    price: 400,
    img: 'burger-sample.jpg',
    type: CategoryType.HAMBURGER
  }, {
    id: 5,
    title: 'Биф бургер',
    price: 550,
    img: 'burger-sample.jpg',
    type: CategoryType.HAMBURGER
  }, {
    id: 6,
    title: 'Гавайский бургер',
    price: 375,
    img: 'burger-sample.jpg',
    type: CategoryType.HAMBURGER
  }]

  @Getter summarizedOrder

  get filteredFoodList () {
    if (this.currentActiveFilter === this.CategoryType.ALL) {
      return this.foodList
    }
    return this.foodList
      .filter(({ type }) => type === this.currentActiveFilter)
  }

  get userOrder () {
    const keys = Object.keys(this.summarizedOrder)
    return keys.map((key) => {
      const values = this.summarizedOrder[key]
      return {
        ...values[0],
        price: values[0].price * values.length,
        amount: values.length
      }
    })
  }

  get userOrderTotalPrice () {
    return this.userOrder.reduce((prev, next) => Number(prev) + Number(next.price), 0)
  }

  @Action addItem

  setActiveFilter (filter: CategoryType) {
    this.currentActiveFilter = filter
  }
}
</script>

<style lang="scss" scoped>
.order {
  display: grid;
  grid-template-columns: 0.7fr 0.4fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  padding: 0 6rem;
  .order-title {
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 600;
  }
  .order_category-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0;
    width: 90%;
  }
  .order_items-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". . .";
    padding: 1rem 0;
  }
  .order_right {
    margin-left: 1rem;
    background-color: #ffffff;

    .sticky {
      position: sticky;
      top: 0px;
    }

    .order_checkout-list {
      padding: 1rem 0;
    }
    .order_checkout-total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      border-top: 1px solid #C4C4C4;
      padding-top: 0.5rem;

      .price {
        font-size: 1.3rem;
      }
    }
    .order_checkout-button {
      width: 90%;
      margin: 1rem auto;
    }
  }
}
</style>
