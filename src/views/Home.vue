<template>
  <div class="home_block">
    <div class="home_block-left">
      <span class="description">Быстрая доставка еды от <span class="purple">лучших поваров</span></span>
      <span class="description small">Богатый выбор еды от простой домашней кухни до изысков итальянской, все зависит только от вашего настроения</span>
      <div class="home_block-actions">
        <UI-Button class="first_button" label="Заказать"/>
        <UI-Button @click="$goToPage('signup')" label="Стать поваром" type="plain"/>
      </div>
    </div>
    <div class="home_block-right">
      <icon class="home_block-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import NavigationMixin from '@/components/mixins/navigation'
import UIButton from '@/components/UI/Button.vue'

import icon from '@/assets/1.svg'

@Component({
  components: {
    icon,
    UIButton
  }
})
export default class Home extends Mixins(NavigationMixin) {}
</script>

<style lang="scss" scoped>
.home_block {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  padding: 2rem 6rem;

  .home_block-left {
    display: flex;
    flex-direction: column;
    width: 100%;

    .description {
      font-size: 3.8rem;
      font-weight: 800;

      .purple {
        color: $purple
      }

      &.small {
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: 500;
      }
    }

    .home_block-actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 3rem;

      > .first_button {
        margin-right: 3rem;
      }
    }
  }
  .home_block-right {
    .home_block-icon {
      width: 100%;
    }
  }
}
</style>
